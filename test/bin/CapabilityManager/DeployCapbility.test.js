/*
 * Copyright 2024 (c) Intel Corp
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 */

const execSync = require('child_process').execSync;
const fs = require('fs');

let ucDir = "./api/CapabilityManager/usecases/DeployCapbility";
let binApp = "bin/"

function addTest(suite, title, fn) {
    let test = new Test(title, fn);
    test.file = __filename;
    suite.addTest(test);
    return test;
}

function addSuite(suite, title, fn) {
    let csuite = new Suite(title, fn);
    csuite.file = __filename;
    suite.addSuite(csuite);
    return csuite;
}

function buildScenario(suite, scenario) {
    for(let j in scenario.steps) {
        let step = scenario.steps[j];
        let cmd = step.action.replace(/\//,' ');
        let params = "";
        for(let name in step.parameters) {
            let value = step.parameters[j];
            params += `--${name} ${value} `;
        }
        let command = `bash -c "${binApp.replace(/\\/g, '\/')} ${cmd} ${params}"`;

        addTest(suite, 'Run Command ' + command, (done) => {
            try {
                let results = execSync(command).toString();
                console.log(results);
                return done();
            }
            catch (e) {
                console.error(e);
                console.error(e.stderr.toString());
                return done(e);
            }
        });
    }
}

let topSuite = describe('Deploy Capbility', () => {
    before(() => {
        let dir = fs.readdirSync(ucDir);
        for (let i in dir) {
            let file = dir[i];
            if (file != 'index.js') {
                let apath = path.resolve(`${ucDir}/${file}`);
                let scenario = require(apath);
                let suitei = addSuite(topSuite, "Run Scenario: " + scenario.name, () => {
                    console.log("Run Scenario:", scenario.name);
                });
                buildScenario(suitei, scenario);
            }
        }
    });
    it('Build Scenarios', (done) => {
        console.log("Scenarios Built");
        done();
    });
    /*
    describe('Additional test suite', (done) => {
        it('TestCase', (done) => {
        };
     */
});
