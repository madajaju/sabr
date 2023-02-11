const path = require('path');
const spawn = require('child_process').spawnSync;
const fs = require('fs');
const tar = require('tar');
const crypto = require('crypto');
const {once} = require('events');
const bent = require('bent');


const isDirectory = source => fs.lstatSync(source).isDirectory();
const isFile = source => !fs.lstatSync(source).isDirectory();

module.exports = {
    friendlyName: 'build',
    description: 'Build a SAB bundle for the directory specified.',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        dir: {
            description: "Directory to perform the build.",
            type: 'string',
            required: true,
        },
        recurse: {
            description: "Recursive build from the directory down.",
            type: 'boolean',
            required: false,
        },
        output: {
            description: "Output file for the bundle.",
            type: 'string',
            required: false
        }
    },

    exits: {
        success: {},
        json: {},
        notFound: {
            description: 'No item with the specified ID was found in the database.',
        }
    },

    fn: async function (inputs, env) {
        // Create the bundle in the server
        await createBundle(inputs.dir);
        // Cleanup build space.
        cleanupBuild(inputs.dir);
        // build the images
        buildImages(inputs.dir, inputs.recurse);
        // Save the docker images with docker save > image##.tar
        bundleImages(inputs.dir);
        // Bundle the definition of the bundle.
        bundleDefinition(inputs.dir);
        // Bundle the SecretVault which contains the security keys of the streams and hashes
        bundleSecretVault(inputs.dir);
        // Encrypt the directory with the images.
        await encryptBundle(inputs.dir);
        // Write out a entrypoint.sh  That unbundles the bundle.
        cleanupBuild(inputs.dir);
        // Create Image
        createBundleImage(inputs.dir);
    }
};

function buildImages(dir, recursive) {
    let ndir = path.resolve(dir);
    let bpath = path.resolve(ndir + '/bundle.js');
    try {
        if (isFile(bpath)) {
            let tbundle = require(bpath);
            if (tbundle.images) {
                for (let bname in tbundle.images) {
                    let tbuild = tbundle.images[bname];
                    if (tbuild.dir) {
                        console.log("Building image:", bname);
                        let proc = spawn('docker', ['build', '-t', bname, '-f', tbuild.file, tbuild.dir], {
                            cwd: ndir,
                            stdio: [process.stdin, process.stdout, process.stderr],
                            env: process.env
                        });
                        if (proc.status != 0) {
                            console.error("Error Bundling SAB image:", bname);
                            console.error(proc.error);
                        }
                    }
                }
            }
        }
    } catch (e) {
        console.error(e);
    }
}

function bundleImages(dir) {
    let ndir = path.resolve(dir);
    let bpath = path.resolve(ndir + '/bundle.js');
    fs.mkdirSync(ndir + '/.bundle');
    try {
        if (isFile(bpath)) {
            let tbundle = require(bpath);
            if (tbundle.images) {
                for (let bname in tbundle.images) {
                    console.log(`Extracting image: ${bname}`);
                    let proc = spawn('docker', [`save`, `--output`, `./.bundle/image-${bname}.tar`, `${bname}`], {
                        cwd: ndir,
                        stdio: [process.stdin, process.stdout, process.stderr],
                        env: process.env
                    });
                    if (proc.status != 0) {
                        console.error("Error Bundling SAB image:", bname);
                        console.error(proc.error);
                    }
                }
            }
        }
    } catch (e) {
        console.error(e);
    }
}

async function encryptBundle(dir) {
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes256', key, iv);
    const folder = path.resolve(`${dir}/.bundle`);
    const destFolder = path.resolve(`${dir}/.image`);
    fs.mkdirSync(destFolder);

    const enc_writer = fs.createWriteStream(`${destFolder}/bundle.enc`);

    let tarprocess = tar.c({sync: true}, [folder]).pipe(cipher).pipe(enc_writer);
    await once(tarprocess, 'finished');
}

function cleanupBuild(dir) {
    try {
        let bdir = `${dir}/.bundle`;
        let filenames = fs.readdirSync(bdir);
        filenames.forEach(file => {
            fs.unlinkSync(file);
        })
        fs.rmdirSync(bdir);
    } catch (e) {
        console.log("Build Directory clean!", e);
    }
}

function bundleDefinition(dir) {
    // The bundle definition should contain the bundle.js
    // policies file should be in here as well.
    fs.cpSync(`${dir}/bundle.js`, `${dir}/.bundle/bundle.js`);
}

function bundleSecretVault(dir) {
    // Call the sabr server to get the secretVaule already encrypted and the decryption keys.
    // restful POST call with the return of the decryption keys and the encrypted vault.
    // place the vault in the .bundle directory
    // vault.enc
}

async function createBundle(dir) {
    let ndir = path.resolve(dir);
    let bpath = path.resolve(ndir + '/bundle.js');
    let bundledef = require(bpath);
    try {
        if (isFile(bpath)) {
            console.log(`Creating Bundle`);
            let url = global.ailtire.config.host;
            let args = {
                name: bundledef.name,
                file: `module.exports = ${JSON.stringify(bundledef)};`
            }
            let params = '/sabundle/create?mode=json';
            const post = bent(url, 'POST', 'json', 200);
            const response = await post(params, args);
            console.log(response);

            params = '/diml/sabm/sabundle/build?mode=json';
            args = {
                name: bundledef.name
            }
            const response2 = await post(params,args);
            console.log(response2);

        }
    } catch (e) {
        console.error(e);
    }
}
function createBundleImage(dir) {
    // copy the unpack.js file into the same directory as the encryption file
    const destFolder = path.resolve(`${dir}/.image`);
    // Copy the Dockerfile for the encrypted bundle into the same directory
    // Run docker build

}
