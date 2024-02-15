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

module.exports = {
    "host": "http://localhost/web",
    "actions": {
        "/aml/am/application/create": {
            "name": "/aml/am/application/create",
            "inputs": {"attr1": {"description": "Description for the parameter", "type": "string", "required": false}},
            "friendlyName": "create",
            "description": "Description of the action"
        },
        "/aml/am/application/destroy": {
            "name": "/aml/am/application/destroy",
            "inputs": {"attr1": {"description": "Description for the parameter", "type": "string", "required": false}},
            "friendlyName": "destroy",
            "description": "Description of the action"
        },
        "/aml/am/application/list": {
            "name": "/aml/am/application/list",
            "inputs": {"attr1": {"description": "Description for the parameter", "type": "string", "required": false}},
            "friendlyName": "list",
            "description": "Description of the action"
        },
        "/aml/am/application/update": {
            "name": "/aml/am/application/update",
            "inputs": {"attr1": {"description": "Description for the parameter", "type": "string", "required": false}},
            "friendlyName": "update",
            "description": "Description of the action"
        },
        "/aml/am/service/deployed": {
            "name": "/aml/am/service/deployed",
            "inputs": {
                "service": {
                    "description": "ID of the Service that is ready",
                    "type": "string",
                    "required": true
                },
                "url": {
                    "description": "URL or streamID of the service that is ready",
                    "type": "string",
                    "required": false
                }
            },
            "friendlyName": "deployed",
            "description": "Notification that the service is deployed"
        },
        "/aml/am/service/kill": {
            "name": "/aml/am/service/kill",
            "inputs": {},
            "friendlyName": "kill",
            "description": "Service is being killed"
        },
        "/aml/am/service/provision": {
            "name": "/aml/am/service/provision",
            "inputs": {
                "service": {
                    "description": "Name or ID of the service to provision",
                    "type": "string",
                    "required": true
                }, "url": {"description": "URL of the service instance", "type": "string", "required": true}
            },
            "friendlyName": "provision",
            "description": "Provision the service"
        },
        "/aml/am/service/stderr": {
            "name": "/aml/am/service/stderr",
            "inputs": {},
            "friendlyName": "stderr",
            "description": "Return stderr of the service instance"
        },
        "/aml/am/service/stdout": {
            "name": "/aml/am/service/stdout",
            "inputs": {},
            "friendlyName": "stdout",
            "description": "Return stdout of the service instance"
        },
        "/aml/cm/capability/build": {
            "name": "/aml/cm/capability/build",
            "inputs": {
                "name": {"description": "name of the capability", "type": "string", "required": false},
                "id": {"description": "id of the capability", "type": "string", "required": false}
            },
            "friendlyName": "build",
            "description": "Build a Capability"
        },
        "/aml/cm/capability/create": {
            "name": "/aml/cm/capability/create",
            "inputs": {"attr1": {"description": "Description for the parameter", "type": "string", "required": false}},
            "friendlyName": "create",
            "description": "Description of the action"
        },
        "/aml/cm/capability/deploy": {
            "name": "/aml/cm/capability/deploy",
            "inputs": {"capability": {"description": "name of the capability", "type": "string", "required": true}},
            "friendlyName": "deploy",
            "description": "Deploy a Capability"
        },
        "/aml/cm/capability/list": {
            "name": "/aml/cm/capability/list",
            "inputs": {"attr1": {"description": "Description for the parameter", "type": "string", "required": false}},
            "friendlyName": "list",
            "description": "Description of the action"
        },
        "/aml/cm/capability/release": {
            "name": "/aml/cm/capability/release",
            "inputs": {"name": {"description": "name of the capability", "type": "string", "required": true}},
            "friendlyName": "release",
            "description": "Release a Capability"
        },
        "/aml/cm/capability/remove": {
            "name": "/aml/cm/capability/remove",
            "inputs": {"attr1": {"description": "Description for the parameter", "type": "string", "required": false}},
            "friendlyName": "remove",
            "description": "Description of the action"
        },
        "/aml/cm/capability/test": {
            "name": "/aml/cm/capability/test",
            "inputs": {
                "name": {"description": "name of the capability", "type": "string", "required": true},
                "file": {"description": "file with the definition", "type": "YAML", "required": false}
            },
            "friendlyName": "test",
            "description": "Test a Capability"
        },
        "/aml/cm/capability/update": {
            "name": "/aml/cm/capability/update",
            "inputs": {"attr1": {"description": "Description for the parameter", "type": "string", "required": false}},
            "friendlyName": "update",
            "description": "Description of the action"
        },
        "/aml/dsom/data/create": {
            "name": "/aml/dsom/data/create",
            "inputs": {"attr1": {"description": "Description for the parameter", "type": "string", "required": false}},
            "friendlyName": "create",
            "description": "Description of the action"
        },
        "/diml/dsm/channel/deployed": {
            "name": "/diml/dsm/channel/deployed",
            "inputs": {"channel": {"description": "Channel name", "type": "string", "required": true}},
            "friendlyName": "deployed",
            "description": "Channel Instance has been deployed. Notify the stream of its status."
        },
        "/diml/dsm/stream/deployed": {
            "name": "/diml/dsm/stream/deployed",
            "inputs": {"stream": {"description": "Stream name", "type": "string", "required": true}},
            "friendlyName": "deployed",
            "description": "Stream has been deployed. Notify the bundle of its status."
        },
        "/diml/sabm/connect": {
            "name": "/diml/sabm/connect",
            "inputs": {
                "sabr": {"description": "The SABR to set the level", "type": "string", "required": true},
                "level": {"description": "The Level to set the SABR", "type": "string", "required": true}
            },
            "friendlyName": "setLevel",
            "description": "Set the level of operation"
        },
        "/diml/sabm/bundle/createanddeploy": {
            "name": "/diml/sabm/bundle/createanddeploy",
            "inputs": {
                "name": {"description": "name of the Sentient Agent Bundle", "type": "string", "required": true},
                "file": {"description": "file with the definition", "type": "file", "required": true},
                "policies": {
                    "description": "The name of the policies to use in the deployment. Comma separated",
                    "type": "file",
                    "required": true
                }
            },
            "friendlyName": "createAndDeploy",
            "description": "Create and deploy the bundle"
        },
        "/diml/sabm/bundle/deploy": {
            "name": "/diml/sabm/bundle/deploy",
            "inputs": {
                "sabr": {"description": "The name of the SABR", "type": "string", "required": true},
                "policies": {
                    "description": "The name of the policies to use in the deployment. Comma separated",
                    "type": "string",
                    "required": true
                },
                "parameters": {
                    "description": "Parameters used for the instance deployment",
                    "type": "string",
                    "required": false
                }
            },
            "friendlyName": "deploy",
            "description": "Deploy the bundle"
        },
        "/diml/sabm/policy/create": {
            "name": "/diml/sabm/policy/create",
            "inputs": {"file": {"description": "Description for the parameter", "type": "file", "required": false}},
            "friendlyName": "create",
            "description": "Description of the action"
        },
        "/diml/sabm/sabundle/build": {
            "name": "/diml/sabm/sabundle/build",
            "inputs": {
                "name": {"description": "The name of the Bundle.", "type": "string", "required": false},
                "id": {"description": "The id of the build.", "type": "string", "required": false}
            },
            "friendlyName": "build",
            "description": "Build the SAB with all of the elements including encrypting the bundle and the vault."
        },
        "/diml/sabm/sabundle/create": {
            "name": "/diml/sabm/sabundle/create",
            "inputs": {"attr1": {"description": "Description for the parameter", "type": "string", "required": false}},
            "friendlyName": "create",
            "description": "Description of the action"
        },
        "/diml/sabm/sabundle/deploy": {
            "name": "/diml/sabm/sabundle/deploy",
            "inputs": {"attr1": {"description": "Description for the parameter", "type": "string", "required": false}},
            "friendlyName": "deploy",
            "description": "Description of the action"
        },
        "/diml/sabm/sabundle/list": {
            "name": "/diml/sabm/sabundle/list",
            "inputs": {"attr1": {"description": "Description for the parameter", "type": "string", "required": false}},
            "friendlyName": "list",
            "description": "Description of the action"
        },
        "/bundle/build": {
            "name": "/bundle/build",
            "inputs": {
                "dir": {"description": "Directory to perform the build.", "type": "string", "required": true},
                "recurse": {
                    "description": "Recursive build from the directory down.",
                    "type": "boolean",
                    "required": false
                },
                "output": {"description": "Output file for the bundle.", "type": "string", "required": false}
            },
            "friendlyName": "build",
            "description": "Build a SAB bundle for the directory specified."
        },
        "/pulsar/streams": {
            "name": "/pulsar/streams",
            "inputs": {
                "id": {
                    "type": "string",
                    "description": "ID of the topic. should be fully qualified",
                    "required": true
                }
            },
            "friendlyName": "streams",
            "description": "Return the topics in the pulsar configuration"
        },
        "/pulsar/topic": {
            "name": "/pulsar/topic",
            "inputs": {
                "id": {
                    "type": "string",
                    "description": "ID of the topic. should be fully qualified",
                    "required": true
                }
            },
            "friendlyName": "topic",
            "description": "Return the topics in the pulsar configuration"
        },
        "/pulsar/topics": {
            "name": "/pulsar/topics",
            "inputs": {},
            "friendlyName": "topics",
            "description": "Return the topics in the pulsar configuration"
        },
        "/sabundle/build": {
            "name": "/sabundle/build",
            "inputs": {"attr1": {"description": "Description for the parameter", "type": "string", "required": false}},
            "friendlyName": "build",
            "description": "Description of the action"
        },
        "/sa/esc/bundle/deploy": {
            "name": "/sa/esc/bundle/deploy",
            "inputs": {
                "name": {"description": "Name of the bundle to deploy", "type": "string", "required": true},
                "version": {"description": "Version of the bundle", "type": "string", "required": true},
                "target": {"description": "Target Devices to deploy the bundle.", "type": "string", "required": true}
            },
            "friendlyName": "deploy",
            "description": "Deploy a SAB bundle that is passed in."
        },
        "/sa/esc/key/store": {
            "name": "/sa/esc/key/store",
            "inputs": {
                "target": {"description": "Directory to perform the build.", "type": "string", "required": true},
                "bundle": {
                    "description": "Recursive build from the directory down.",
                    "type": "string",
                    "required": false
                },
                "version": {"description": "Version of the bundle encrypted.", "type": true},
                "key": {
                    "description": "Key to be used for the unbundling of the SAB build.",
                    "type": "string",
                    "required": true
                },
                "iv": {"description": "IV of the Key for the decryption.", "type": "string", "required": true}
            },
            "friendlyName": "store",
            "description": "Store a Key for the bundle decryption"
        },
        "/sml/so/service/ready": {
            "name": "/sml/so/service/ready",
            "inputs": {
                "service": {
                    "description": "ID of the Service that is ready",
                    "type": "string",
                    "required": true
                },
                "url": {
                    "description": "URL or streamID of the service that is ready",
                    "type": "string",
                    "required": false
                }
            },
            "friendlyName": "ready",
            "description": "Service is ready"
        },
        "/application/new": {
            "name": "/application/new",
            "inputs": {"cls": {"description": "Class to use for the object new", "type": "string", "required": true}},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/application/create": {
            "name": "/application/create",
            "inputs": {
                "name": {"description": "Name of the object", "type": "string", "required": false},
                "file": {"description": "file with the definition", "type": "YAML", "required": false}
            },
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/application/list": {
            "name": "/application/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/application/destory": {
            "name": "/application/destory",
            "inputs": {"cls": {"description": "Class to use for the object new", "type": "string", "required": true}},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/application/addstacks": {
            "name": "/application/addstacks",
            "inputs": {
                "name": {"description": "Name of the object", "type": "string", "required": false},
                "items": {"description": "Name of the items to add", "type": "string", "required": false},
                "file": {"description": "file with the definition of the items", "type": "YAML", "required": false}
            },
            "friendlyName": "addStacks",
            "description": "Add items to the object"
        },
        "/application/addinstances": {
            "name": "/application/addinstances",
            "inputs": {},
            "friendlyName": "addInstances",
            "description": "Add items to the object"
        },
        "/application": {
            "name": "/application",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/application/update": {
            "name": "/application/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "version": {"type": "string", "description": "Version of the Application", "required": false},
                "fn": {
                    "type": "ref",
                    "description": "Function to call with the bundle instance when the bundle instance is run.",
                    "required": false
                },
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/applicationinstance/new": {
            "name": "/applicationinstance/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/applicationinstance/create": {
            "name": "/applicationinstance/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/applicationinstance/list": {
            "name": "/applicationinstance/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/applicationinstance/destory": {
            "name": "/applicationinstance/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/applicationinstance": {
            "name": "/applicationinstance",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/applicationinstance/update": {
            "name": "/applicationinstance/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "status": {"type": "string", "description": "Name of the application instance", "required": false},
                "message": {
                    "type": "string",
                    "description": "Last message in the application instance",
                    "required": false
                },
                "app": {"type": "object", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/service/new": {
            "name": "/service/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/service/create": {
            "name": "/service/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/service/list": {
            "name": "/service/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/service/destory": {
            "name": "/service/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/service/addchildren": {
            "name": "/service/addchildren",
            "inputs": {},
            "friendlyName": "addChildren",
            "description": "Add items to the object"
        },
        "/service/addinstances": {
            "name": "/service/addinstances",
            "inputs": {},
            "friendlyName": "addInstances",
            "description": "Add items to the object"
        },
        "/service": {
            "name": "/service",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/service/update": {
            "name": "/service/update", "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "command": {
                    "type": "string",
                    "description": "The command to run on the commandline.",
                    "required": false
                },
                "version": {"type": "string", "description": "Version of the Service", "required": false},
                "ports": {"type": "json", "description": "List of ports internally", "required": false},
                "expose": {"type": "json", "description": "List of ports to expose", "required": false},
                "parameters": {
                    "type": "json",
                    "description": "[ {name: value} ] - Lsit of parameters for the service",
                    "required": false
                },
                "environment": {"type": "json", "description": "{name:value, name2:value}", "required": false},
                "provisionScript": {
                    "type": "ref",
                    "description": "provision script to run on the deployed service.",
                    "required": false
                },
                "stack": {"type": "object", "description": "Parent Stack of the service", "required": false},
                "parent": {"type": "object", "description": "Parent of the service", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            }, "friendlyName": "update", "description": "Update entity"
        },
        "/serviceinstance/new": {
            "name": "/serviceinstance/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/serviceinstance/create": {
            "name": "/serviceinstance/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/serviceinstance/list": {
            "name": "/serviceinstance/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/serviceinstance/destory": {
            "name": "/serviceinstance/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/serviceinstance": {
            "name": "/serviceinstance",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/serviceinstance/update": {
            "name": "/serviceinstance/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "pid": {"type": "string", "description": "process id of the service instance", "required": false},
                "url": {"type": "string", "required": false},
                "stdout": {"type": "string", "description": "stdout of the instance running.", "required": false},
                "stderr": {"type": "string", "description": "stderr of the instance running.", "required": false},
                "parent": {"type": "object", "description": "Service definition for the instance.", "required": false},
                "stack": {
                    "type": "object",
                    "description": "StackInstance that is running the service instance",
                    "required": false
                },
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/stack/new": {
            "name": "/stack/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/stack/create": {
            "name": "/stack/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/stack/list": {
            "name": "/stack/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/stack/destory": {
            "name": "/stack/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/stack/addservices": {
            "name": "/stack/addservices",
            "inputs": {},
            "friendlyName": "addServices",
            "description": "Add items to the object"
        },
        "/stack/addinstances": {
            "name": "/stack/addinstances",
            "inputs": {},
            "friendlyName": "addInstances",
            "description": "Add items to the object"
        },
        "/stack/addchildren": {
            "name": "/stack/addchildren",
            "inputs": {},
            "friendlyName": "addChildren",
            "description": "Add items to the object"
        },
        "/stack": {
            "name": "/stack",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/stack/update": {
            "name": "/stack/update", "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "command": {
                    "type": "string",
                    "description": "The command to run on the commandline.",
                    "required": false
                },
                "version": {"type": "string", "description": "Version of the Service", "required": false},
                "ports": {"type": "json", "description": "List of ports internally", "required": false},
                "expose": {"type": "json", "description": "List of ports to expose", "required": false},
                "parameters": {
                    "type": "json",
                    "description": "[ {name: value} ] - Lsit of parameters for the service",
                    "required": false
                },
                "environment": {"type": "json", "description": "{name:value, name2:value}", "required": false},
                "provisionScript": {
                    "type": "ref",
                    "description": "provision script to run on the deployed service.",
                    "required": false
                },
                "app": {"type": "object", "description": "Applications of the stacks", "required": false},
                "stack": {"type": "object", "description": "Parent Stack of the service", "required": false},
                "parent": {"type": "object", "description": "Parent of the service", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            }, "friendlyName": "update", "description": "Update entity"
        },
        "/stackinstance/new": {
            "name": "/stackinstance/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/stackinstance/create": {
            "name": "/stackinstance/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/stackinstance/list": {
            "name": "/stackinstance/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/stackinstance/destory": {
            "name": "/stackinstance/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/stackinstance/addservices": {
            "name": "/stackinstance/addservices",
            "inputs": {},
            "friendlyName": "addServices",
            "description": "Add items to the object"
        },
        "/stackinstance": {
            "name": "/stackinstance",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/stackinstance/update": {
            "name": "/stackinstance/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "stdout": {"type": "string", "required": false},
                "stderr": {"type": "string", "required": false},
                "pid": {"type": "string", "description": "process id of the service instance", "required": false},
                "url": {"type": "string", "required": false},
                "app": {
                    "type": "object",
                    "description": "Application Instance of the stack instance",
                    "required": false
                },
                "stack": {"type": "object", "description": "Stack of the Stack Instance", "required": false},
                "parent": {"type": "object", "description": "Service definition for the instance.", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/capability/new": {
            "name": "/capability/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/capability/create": {
            "name": "/capability/create",
            "inputs": {
                "name": {"description": "name of the capability", "type": "string", "required": true},
                "file": {"description": "file with the definition", "type": "file", "required": false}
            },
            "friendlyName": "create",
            "description": "create entity"
        },
        "/capability/list": {
            "name": "/capability/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/capability/destory": {
            "name": "/capability/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/capability/addpolicies": {
            "name": "/capability/addpolicies",
            "inputs": {},
            "friendlyName": "addPolicies",
            "description": "Add items to the object"
        },
        "/capability/addbundles": {
            "name": "/capability/addbundles",
            "inputs": {},
            "friendlyName": "addBundles",
            "description": "Add items to the object"
        },
        "/capability/addinstances": {
            "name": "/capability/addinstances",
            "inputs": {},
            "friendlyName": "addInstances",
            "description": "Add items to the object"
        },
        "/capability": {
            "name": "/capability",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/capability/update": {
            "name": "/capability/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/capabilityinstance/new": {
            "name": "/capabilityinstance/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/capabilityinstance/create": {
            "name": "/capabilityinstance/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/capabilityinstance/list": {
            "name": "/capabilityinstance/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/capabilityinstance/destory": {
            "name": "/capabilityinstance/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/capabilityinstance/addbundles": {
            "name": "/capabilityinstance/addbundles",
            "inputs": {},
            "friendlyName": "addBundles",
            "description": "Add items to the object"
        },
        "/capabilityinstance": {
            "name": "/capabilityinstance",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/capabilityinstance/update": {
            "name": "/capabilityinstance/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "owner": {
                    "type": "object",
                    "description": "Owner of the instance is the capability.",
                    "required": false
                },
                "provisioner": {"type": "object", "description": "Provisioner of the Instance", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/aimodel/new": {
            "name": "/aimodel/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/aimodel/create": {
            "name": "/aimodel/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/aimodel/list": {
            "name": "/aimodel/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/aimodel/destory": {
            "name": "/aimodel/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/aimodel": {
            "name": "/aimodel",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/aimodel/update": {
            "name": "/aimodel/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/channelactivationitem/new": {
            "name": "/channelactivationitem/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/channelactivationitem/create": {
            "name": "/channelactivationitem/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/channelactivationitem/list": {
            "name": "/channelactivationitem/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/channelactivationitem/destory": {
            "name": "/channelactivationitem/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/channelactivationitem": {
            "name": "/channelactivationitem",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/channelactivationitem/update": {
            "name": "/channelactivationitem/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "priority": {"type": "number", "description": "prioritization number", "required": false},
                "activated": {"type": "boolean", "description": "channel is activated", "required": false},
                "channel": {"type": "object", "required": false},
                "parent": {"type": "object", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/channelactivationpolicy/new": {
            "name": "/channelactivationpolicy/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/channelactivationpolicy/create": {
            "name": "/channelactivationpolicy/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/channelactivationpolicy/list": {
            "name": "/channelactivationpolicy/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/channelactivationpolicy/destory": {
            "name": "/channelactivationpolicy/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/channelactivationpolicy/addchannels": {
            "name": "/channelactivationpolicy/addchannels",
            "inputs": {},
            "friendlyName": "addChannels",
            "description": "Add items to the object"
        },
        "/channelactivationpolicy": {
            "name": "/channelactivationpolicy",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/channelactivationpolicy/update": {
            "name": "/channelactivationpolicy/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/channelcreationpolicy/new": {
            "name": "/channelcreationpolicy/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/channelcreationpolicy/create": {
            "name": "/channelcreationpolicy/create",
            "inputs": {
                "name": {"description": "name of the ChannelCreationPolicy", "type": "string", "required": true},
                "file": {"description": "file with the definition", "type": "file", "required": false}
            },
            "friendlyName": "create",
            "description": "create entity"
        },
        "/channelcreationpolicy/list": {
            "name": "/channelcreationpolicy/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/channelcreationpolicy/destory": {
            "name": "/channelcreationpolicy/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/channelcreationpolicy/addstream": {
            "name": "/channelcreationpolicy/addstream",
            "inputs": {},
            "friendlyName": "addStream",
            "description": "Add items to the object"
        },
        "/channelcreationpolicy/addchannels": {
            "name": "/channelcreationpolicy/addchannels",
            "inputs": {},
            "friendlyName": "addChannels",
            "description": "Add items to the object"
        },
        "/channelcreationpolicy": {
            "name": "/channelcreationpolicy",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/channelcreationpolicy/update": {
            "name": "/channelcreationpolicy/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "post": {
                    "type": "object",
                    "description": "This is the transform to run after all of the transformation and before sending out.",
                    "required": false
                },
                "pre": {
                    "type": "object",
                    "description": "This is the transform to run after all of the transformation and before sending out.",
                    "required": false
                },
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/datachannel/new": {
            "name": "/datachannel/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datachannel/create": {
            "name": "/datachannel/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/datachannel/list": {
            "name": "/datachannel/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/datachannel/destory": {
            "name": "/datachannel/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datachannel/addpolicy": {
            "name": "/datachannel/addpolicy",
            "inputs": {},
            "friendlyName": "addPolicy",
            "description": "Add items to the object"
        },
        "/datachannel/addinstances": {
            "name": "/datachannel/addinstances",
            "inputs": {},
            "friendlyName": "addInstances",
            "description": "Add items to the object"
        },
        "/datachannel": {
            "name": "/datachannel",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datachannel/update": {
            "name": "/datachannel/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "direction": {"type": "string", "description": "In or Out", "required": false},
                "transformService": {
                    "type": "object",
                    "description": "This is the transformation service for the channel. It will summarize the data, give historical data, give all of the data as a passthru, or any other data transformation needed for the individual channel based on the policy applied to the data stream",
                    "required": false
                },
                "stream": {"type": "object", "description": "This is the owning stream", "required": false},
                "encryptionKey": {"type": "object", "description": "Encryption Key for the channel", "required": false},
                "decryptionKey": {"type": "object", "description": "Decryption Key for the channel", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/datachannelinstance/new": {
            "name": "/datachannelinstance/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datachannelinstance/create": {
            "name": "/datachannelinstance/create",
            "inputs": {
                "name": {"description": "name of the Sentient Agent Bundle", "type": "string", "required": true},
                "file": {"description": "file with the definition", "type": "YAML", "required": false}
            },
            "friendlyName": "create",
            "description": "create entity"
        },
        "/datachannelinstance/list": {
            "name": "/datachannelinstance/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/datachannelinstance/destory": {
            "name": "/datachannelinstance/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datachannelinstance/addtransforminstance": {
            "name": "/datachannelinstance/addtransforminstance",
            "inputs": {},
            "friendlyName": "addTransformInstance",
            "description": "Add items to the object"
        },
        "/datachannelinstance": {
            "name": "/datachannelinstance",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datachannelinstance/update": {
            "name": "/datachannelinstance/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "direction": {"type": "string", "required": false},
                "message": {
                    "type": "string",
                    "description": "Message string from the failed state.",
                    "required": false
                },
                "design": {
                    "type": "object",
                    "description": "Parent of the channel Instance. This is the definition of the channel.",
                    "required": false
                },
                "stream": {
                    "type": "object",
                    "description": "This is the stream instance that is running the channel",
                    "required": false
                },
                "bundle": {"type": "object", "description": "This is the sabr instance", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/datastream/new": {
            "name": "/datastream/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datastream/create": {
            "name": "/datastream/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/datastream/list": {
            "name": "/datastream/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/datastream/destory": {
            "name": "/datastream/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datastream/addpolicies": {
            "name": "/datastream/addpolicies",
            "inputs": {},
            "friendlyName": "addPolicies",
            "description": "Add items to the object"
        },
        "/datastream/addchannels": {
            "name": "/datastream/addchannels",
            "inputs": {},
            "friendlyName": "addChannels",
            "description": "Add items to the object"
        },
        "/datastream/addinstances": {
            "name": "/datastream/addinstances",
            "inputs": {},
            "friendlyName": "addInstances",
            "description": "Add items to the object"
        },
        "/datastream/addtransforms": {
            "name": "/datastream/addtransforms",
            "inputs": {},
            "friendlyName": "addTransforms",
            "description": "Add items to the object"
        },
        "/datastream/addconsumers": {
            "name": "/datastream/addconsumers",
            "inputs": {},
            "friendlyName": "addConsumers",
            "description": "Add items to the object"
        },
        "/datastream/addproducers": {
            "name": "/datastream/addproducers",
            "inputs": {},
            "friendlyName": "addProducers",
            "description": "Add items to the object"
        },
        "/datastream": {
            "name": "/datastream",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datastream/update": {
            "name": "/datastream/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "encryptionKey": {
                    "type": "object",
                    "description": "This is the encryption key for the data stream",
                    "required": false
                },
                "decryptionKey": {
                    "type": "object",
                    "description": "This is the decryption key for the data stream",
                    "required": false
                },
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/datastreaminstance/new": {
            "name": "/datastreaminstance/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datastreaminstance/create": {
            "name": "/datastreaminstance/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/datastreaminstance/list": {
            "name": "/datastreaminstance/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/datastreaminstance/destory": {
            "name": "/datastreaminstance/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datastreaminstance/addchannels": {
            "name": "/datastreaminstance/addchannels",
            "inputs": {},
            "friendlyName": "addChannels",
            "description": "Add items to the object"
        },
        "/datastreaminstance/addpolicies": {
            "name": "/datastreaminstance/addpolicies",
            "inputs": {},
            "friendlyName": "addPolicies",
            "description": "Add items to the object"
        },
        "/datastreaminstance/addtransforms": {
            "name": "/datastreaminstance/addtransforms",
            "inputs": {},
            "friendlyName": "addTransforms",
            "description": "Add items to the object"
        },
        "/datastreaminstance": {
            "name": "/datastreaminstance",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datastreaminstance/update": {
            "name": "/datastreaminstance/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "direction": {"type": "string", "description": "In or Out", "required": false},
                "parent": {
                    "type": "object",
                    "description": "This is the parent of the data stream instance.",
                    "required": false
                },
                "bundle": {
                    "type": "object",
                    "description": "This is the Bundle instance that the data stream instance is connected.",
                    "required": false
                },
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/inputchannelinstance/new": {
            "name": "/inputchannelinstance/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/inputchannelinstance/create": {
            "name": "/inputchannelinstance/create",
            "inputs": {
                "name": {"description": "Name of the object", "type": "string", "required": false},
                "file": {"description": "file with the definition", "type": "YAML", "required": false}
            },
            "friendlyName": "create",
            "description": "create entity"
        },
        "/inputchannelinstance/list": {
            "name": "/inputchannelinstance/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/inputchannelinstance/destory": {
            "name": "/inputchannelinstance/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/inputchannelinstance/addtransforms": {
            "name": "/inputchannelinstance/addtransforms",
            "inputs": {},
            "friendlyName": "addTransforms",
            "description": "Add items to the object"
        },
        "/inputchannelinstance/addtransforminstance": {
            "name": "/inputchannelinstance/addtransforminstance",
            "inputs": {},
            "friendlyName": "addTransformInstance",
            "description": "Add items to the object"
        },
        "/inputchannelinstance": {
            "name": "/inputchannelinstance",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/inputchannelinstance/update": {
            "name": "/inputchannelinstance/update",
            "inputs": {
                "consumer": {
                    "type": "ref",
                    "description": "This is the actual consumer of the datastream. It is implemented using Pulsar or kafka.",
                    "required": false
                },
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "direction": {"type": "string", "required": false},
                "message": {
                    "type": "string",
                    "description": "Message string from the failed state.",
                    "required": false
                },
                "design": {
                    "type": "object",
                    "description": "Parent of the channel Instance. This is the definition of the channel.",
                    "required": false
                },
                "stream": {
                    "type": "object",
                    "description": "This is the stream instance that is running the channel",
                    "required": false
                },
                "bundle": {"type": "object", "description": "This is the sabr instance", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/inputstreaminstance/new": {
            "name": "/inputstreaminstance/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/inputstreaminstance/create": {
            "name": "/inputstreaminstance/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/inputstreaminstance/list": {
            "name": "/inputstreaminstance/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/inputstreaminstance/destory": {
            "name": "/inputstreaminstance/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/inputstreaminstance/addchannels": {
            "name": "/inputstreaminstance/addchannels",
            "inputs": {},
            "friendlyName": "addChannels",
            "description": "Add items to the object"
        },
        "/inputstreaminstance/addpolicies": {
            "name": "/inputstreaminstance/addpolicies",
            "inputs": {},
            "friendlyName": "addPolicies",
            "description": "Add items to the object"
        },
        "/inputstreaminstance/addtransforms": {
            "name": "/inputstreaminstance/addtransforms",
            "inputs": {},
            "friendlyName": "addTransforms",
            "description": "Add items to the object"
        },
        "/inputstreaminstance": {
            "name": "/inputstreaminstance",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/inputstreaminstance/update": {
            "name": "/inputstreaminstance/update",
            "inputs": {
                "consumer": {
                    "type": "ref",
                    "description": "consumer that recieves data from the stream.",
                    "required": false
                },
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "direction": {"type": "string", "description": "In or Out", "required": false},
                "parent": {
                    "type": "object",
                    "description": "This is the parent of the data stream instance.",
                    "required": false
                },
                "bundle": {
                    "type": "object",
                    "description": "This is the Bundle instance that the data stream instance is connected.",
                    "required": false
                },
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/outputchannelinstance/new": {
            "name": "/outputchannelinstance/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/outputchannelinstance/create": {
            "name": "/outputchannelinstance/create",
            "inputs": {
                "name": {"description": "Name of the object", "type": "string", "required": false},
                "file": {"description": "file with the definition", "type": "YAML", "required": false}
            },
            "friendlyName": "create",
            "description": "create entity"
        },
        "/outputchannelinstance/list": {
            "name": "/outputchannelinstance/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/outputchannelinstance/destory": {
            "name": "/outputchannelinstance/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/outputchannelinstance/addtransforminstance": {
            "name": "/outputchannelinstance/addtransforminstance",
            "inputs": {},
            "friendlyName": "addTransformInstance",
            "description": "Add items to the object"
        },
        "/outputchannelinstance": {
            "name": "/outputchannelinstance",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/outputchannelinstance/update": {
            "name": "/outputchannelinstance/update", "inputs": {
                "producer": {
                    "type": "ref",
                    "description": "This is the reference to the producer. This can be implemented with pulsar or kafka.",
                    "required": false
                },
                "queue": {
                    "type": "ref",
                    "description": "This contains an array of inputs that are backed up due to channel closure.",
                    "required": false
                },
                "producerName": {
                    "type": "string",
                    "description": "This is the name of the pulsar producer",
                    "required": false
                },
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "direction": {"type": "string", "required": false},
                "message": {
                    "type": "string",
                    "description": "Message string from the failed state.",
                    "required": false
                },
                "design": {
                    "type": "object",
                    "description": "Parent of the channel Instance. This is the definition of the channel.",
                    "required": false
                },
                "stream": {
                    "type": "object",
                    "description": "This is the stream instance that is running the channel",
                    "required": false
                },
                "bundle": {"type": "object", "description": "This is the sabr instance", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            }, "friendlyName": "update", "description": "Update entity"
        },
        "/outputstreaminstance/new": {
            "name": "/outputstreaminstance/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/outputstreaminstance/create": {
            "name": "/outputstreaminstance/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/outputstreaminstance/list": {
            "name": "/outputstreaminstance/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/outputstreaminstance/destory": {
            "name": "/outputstreaminstance/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/outputstreaminstance/addchannels": {
            "name": "/outputstreaminstance/addchannels",
            "inputs": {},
            "friendlyName": "addChannels",
            "description": "Add items to the object"
        },
        "/outputstreaminstance/addpolicies": {
            "name": "/outputstreaminstance/addpolicies",
            "inputs": {},
            "friendlyName": "addPolicies",
            "description": "Add items to the object"
        },
        "/outputstreaminstance/addtransforms": {
            "name": "/outputstreaminstance/addtransforms",
            "inputs": {},
            "friendlyName": "addTransforms",
            "description": "Add items to the object"
        },
        "/outputstreaminstance": {
            "name": "/outputstreaminstance",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/outputstreaminstance/update": {
            "name": "/outputstreaminstance/update",
            "inputs": {
                "producer": {
                    "type": "ref",
                    "description": "This is the producer send output.",
                    "required": false
                },
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "direction": {"type": "string", "description": "In or Out", "required": false},
                "parent": {
                    "type": "object",
                    "description": "This is the parent of the data stream instance.",
                    "required": false
                },
                "bundle": {
                    "type": "object",
                    "description": "This is the Bundle instance that the data stream instance is connected.",
                    "required": false
                },
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/admindatastream/new": {
            "name": "/admindatastream/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/admindatastream/create": {
            "name": "/admindatastream/create",
            "inputs": {
                "name": {"description": "name of the SAB AdminTransform", "type": "string", "required": true},
                "file": {"description": "file with the definition", "type": "file", "required": false}
            },
            "friendlyName": "create",
            "description": "create entity"
        },
        "/admindatastream/list": {
            "name": "/admindatastream/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/admindatastream/destory": {
            "name": "/admindatastream/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/admindatastream/addpolicies": {
            "name": "/admindatastream/addpolicies",
            "inputs": {},
            "friendlyName": "addPolicies",
            "description": "Add items to the object"
        },
        "/admindatastream/addchannels": {
            "name": "/admindatastream/addchannels",
            "inputs": {},
            "friendlyName": "addChannels",
            "description": "Add items to the object"
        },
        "/admindatastream/addinstances": {
            "name": "/admindatastream/addinstances",
            "inputs": {},
            "friendlyName": "addInstances",
            "description": "Add items to the object"
        },
        "/admindatastream/addtransforms": {
            "name": "/admindatastream/addtransforms",
            "inputs": {},
            "friendlyName": "addTransforms",
            "description": "Add items to the object"
        },
        "/admindatastream/addconsumers": {
            "name": "/admindatastream/addconsumers",
            "inputs": {},
            "friendlyName": "addConsumers",
            "description": "Add items to the object"
        },
        "/admindatastream/addproducers": {
            "name": "/admindatastream/addproducers",
            "inputs": {},
            "friendlyName": "addProducers",
            "description": "Add items to the object"
        },
        "/admindatastream": {
            "name": "/admindatastream",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/admindatastream/update": {
            "name": "/admindatastream/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "encryptionKey": {
                    "type": "object",
                    "description": "This is the encryption key for the data stream",
                    "required": false
                },
                "decryptionKey": {
                    "type": "object",
                    "description": "This is the decryption key for the data stream",
                    "required": false
                },
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/admintransform/new": {
            "name": "/admintransform/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/admintransform/create": {
            "name": "/admintransform/create",
            "inputs": {
                "name": {"description": "name of the SAB AdminTransform", "type": "string", "required": true},
                "file": {"description": "file with the definition", "type": "file", "required": false}
            },
            "friendlyName": "create",
            "description": "create entity"
        },
        "/admintransform/list": {
            "name": "/admintransform/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/admintransform/destory": {
            "name": "/admintransform/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/admintransform/addinputs": {
            "name": "/admintransform/addinputs",
            "inputs": {},
            "friendlyName": "addInputs",
            "description": "Add items to the object"
        },
        "/admintransform/addoutputs": {
            "name": "/admintransform/addoutputs",
            "inputs": {},
            "friendlyName": "addOutputs",
            "description": "Add items to the object"
        },
        "/admintransform": {
            "name": "/admintransform",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/admintransform/update": {
            "name": "/admintransform/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "fn": {
                    "type": "json",
                    "description": "Function to run. This should have two parameters. (data,channel)",
                    "required": false
                },
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/datatransform/new": {
            "name": "/datatransform/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datatransform/create": {
            "name": "/datatransform/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/datatransform/list": {
            "name": "/datatransform/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/datatransform/destory": {
            "name": "/datatransform/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datatransform/addinputs": {
            "name": "/datatransform/addinputs",
            "inputs": {},
            "friendlyName": "addInputs",
            "description": "Add items to the object"
        },
        "/datatransform/addoutputs": {
            "name": "/datatransform/addoutputs",
            "inputs": {},
            "friendlyName": "addOutputs",
            "description": "Add items to the object"
        },
        "/datatransform": {
            "name": "/datatransform",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datatransform/update": {
            "name": "/datatransform/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "fn": {
                    "type": "json",
                    "description": "Function to run. This should have two parameters. (data,channel)",
                    "required": false
                },
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/datatransforminstance/new": {
            "name": "/datatransforminstance/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datatransforminstance/create": {
            "name": "/datatransforminstance/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/datatransforminstance/list": {
            "name": "/datatransforminstance/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/datatransforminstance/destory": {
            "name": "/datatransforminstance/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datatransforminstance/addinputs": {
            "name": "/datatransforminstance/addinputs",
            "inputs": {},
            "friendlyName": "addInputs",
            "description": "Add items to the object"
        },
        "/datatransforminstance/addoutputs": {
            "name": "/datatransforminstance/addoutputs",
            "inputs": {},
            "friendlyName": "addOutputs",
            "description": "Add items to the object"
        },
        "/datatransforminstance": {
            "name": "/datatransforminstance",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/datatransforminstance/update": {
            "name": "/datatransforminstance/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "version": {"type": "string", "description": "Version of the transformation", "required": false},
                "fn": {
                    "type": "json",
                    "description": "Function to run. This should have two parameters. (data,channel)",
                    "required": false
                },
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/sabundle/new": {
            "name": "/sabundle/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/sabundle/create": {
            "name": "/sabundle/create",
            "inputs": {
                "name": {"description": "name of the Sentient Agent Bundle", "type": "string", "required": true},
                "file": {"description": "file with the definition", "type": "file", "required": false}
            },
            "friendlyName": "create",
            "description": "create entity"
        },
        "/sabundle/list": {
            "name": "/sabundle/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/sabundle/destory": {
            "name": "/sabundle/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/sabundle/addinputs": {
            "name": "/sabundle/addinputs",
            "inputs": {},
            "friendlyName": "addInputs",
            "description": "Add items to the object"
        },
        "/sabundle/addoutputs": {
            "name": "/sabundle/addoutputs",
            "inputs": {},
            "friendlyName": "addOutputs",
            "description": "Add items to the object"
        },
        "/sabundle/addtransforms": {
            "name": "/sabundle/addtransforms",
            "inputs": {},
            "friendlyName": "addTransforms",
            "description": "Add items to the object"
        },
        "/sabundle/addapplications": {
            "name": "/sabundle/addapplications",
            "inputs": {},
            "friendlyName": "addApplications",
            "description": "Add items to the object"
        },
        "/sabundle/addstacks": {
            "name": "/sabundle/addstacks",
            "inputs": {},
            "friendlyName": "addStacks",
            "description": "Add items to the object"
        },
        "/sabundle/addaimodels": {
            "name": "/sabundle/addaimodels",
            "inputs": {},
            "friendlyName": "addAimodels",
            "description": "Add items to the object"
        },
        "/sabundle/addinstances": {
            "name": "/sabundle/addinstances",
            "inputs": {},
            "friendlyName": "addInstances",
            "description": "Add items to the object"
        },
        "/sabundle/addpolicies": {
            "name": "/sabundle/addpolicies",
            "inputs": {},
            "friendlyName": "addPolicies",
            "description": "Add items to the object"
        },
        "/sabundle/addbuilds": {
            "name": "/sabundle/addbuilds",
            "inputs": {},
            "friendlyName": "addBuilds",
            "description": "Add items to the object"
        },
        "/sabundle/addimages": {
            "name": "/sabundle/addimages",
            "inputs": {},
            "friendlyName": "addImages",
            "description": "Add items to the object"
        },
        "/sabundle": {
            "name": "/sabundle",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/sabundle/update": {
            "name": "/sabundle/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "version": {"type": "string", "description": "Version of the SABundle", "required": false},
                "learningStream": {
                    "type": "object",
                    "description": "Learning Corpus Stream receives updates and sends out updates to the aimodel",
                    "required": false
                },
                "adminStream": {
                    "type": "object",
                    "description": "Administration Stream to handle registration of SABRS to Capabilities",
                    "required": false
                },
                "secureVault": {"type": "object", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/sabundlebuild/new": {
            "name": "/sabundlebuild/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/sabundlebuild/create": {
            "name": "/sabundlebuild/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/sabundlebuild/list": {
            "name": "/sabundlebuild/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/sabundlebuild/destory": {
            "name": "/sabundlebuild/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/sabundlebuild": {
            "name": "/sabundlebuild",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/sabundlebuild/update": {
            "name": "/sabundlebuild/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "version": {"type": "string", "description": "Version of the SABundle Build", "required": false},
                "encryptedData": {"type": "string", "description": "Encrypted Data for the Bundle.", "required": false},
                "encryptKey": {"type": "object", "required": false},
                "decryptKey": {"type": "object", "required": false},
                "iv": {"type": "object", "description": "Init Vector of the cipher", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/sabundleinstance/new": {
            "name": "/sabundleinstance/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/sabundleinstance/create": {
            "name": "/sabundleinstance/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/sabundleinstance/list": {
            "name": "/sabundleinstance/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/sabundleinstance/destory": {
            "name": "/sabundleinstance/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/sabundleinstance/addinputs": {
            "name": "/sabundleinstance/addinputs",
            "inputs": {},
            "friendlyName": "addInputs",
            "description": "Add items to the object"
        },
        "/sabundleinstance/addoutputs": {
            "name": "/sabundleinstance/addoutputs",
            "inputs": {},
            "friendlyName": "addOutputs",
            "description": "Add items to the object"
        },
        "/sabundleinstance/addstack": {
            "name": "/sabundleinstance/addstack",
            "inputs": {},
            "friendlyName": "addStack",
            "description": "Add items to the object"
        },
        "/sabundleinstance/addaimodels": {
            "name": "/sabundleinstance/addaimodels",
            "inputs": {},
            "friendlyName": "addAimodels",
            "description": "Add items to the object"
        },
        "/sabundleinstance/addtransforms": {
            "name": "/sabundleinstance/addtransforms",
            "inputs": {},
            "friendlyName": "addTransforms",
            "description": "Add items to the object"
        },
        "/sabundleinstance": {
            "name": "/sabundleinstance",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/sabundleinstance/update": {
            "name": "/sabundleinstance/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "level": {
                    "type": "string",
                    "description": "Level of the SABR Instance. Determines the mode of operation.",
                    "required": false
                },
                "parent": {"type": "object", "description": "Parent of the SAB Instance", "required": false},
                "learningInStream": {
                    "type": "object",
                    "description": "Learning Corpus Input Stream receives updates to the aimodel",
                    "required": false
                },
                "adminInStream": {
                    "type": "object",
                    "description": "Administration Stream to handle registration of SABRS to Capabilities",
                    "required": false
                },
                "learningOutStream": {
                    "type": "object",
                    "description": "Learning Corpus Input Stream receives updates to the aimodel",
                    "required": false
                },
                "adminOutStream": {
                    "type": "object",
                    "description": "Administration Stream to handle registration of SABRS to Capabilities",
                    "required": false
                },
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/keystore/new": {
            "name": "/keystore/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/keystore/create": {
            "name": "/keystore/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/keystore/list": {
            "name": "/keystore/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/keystore/destory": {
            "name": "/keystore/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/keystore/addkeys": {
            "name": "/keystore/addkeys",
            "inputs": {},
            "friendlyName": "addKeys",
            "description": "Add items to the object"
        },
        "/keystore": {
            "name": "/keystore",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/keystore/update": {
            "name": "/keystore/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "encryptedData": {
                    "type": "string",
                    "description": "This is the encrypted representation of the key store.",
                    "required": false
                },
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/securevault/new": {
            "name": "/securevault/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/securevault/create": {
            "name": "/securevault/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/securevault/list": {
            "name": "/securevault/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/securevault/destory": {
            "name": "/securevault/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/securevault": {
            "name": "/securevault",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/securevault/update": {
            "name": "/securevault/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "encryptKey": {"type": "object", "required": false},
                "decryptKey": {"type": "object", "required": false},
                "iv": {"type": "object", "description": "Init Vector of the cipher", "required": false},
                "store": {"type": "object", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/securitykey/new": {
            "name": "/securitykey/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/securitykey/create": {
            "name": "/securitykey/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/securitykey/list": {
            "name": "/securitykey/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/securitykey/destory": {
            "name": "/securitykey/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/securitykey": {
            "name": "/securitykey",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/securitykey/update": {
            "name": "/securitykey/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "value": {"type": "string", "description": "Value of the security key.", "required": false},
                "iv": {"type": "string", "description": "IV of the Security Key.", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/dockerprovisioner/new": {
            "name": "/dockerprovisioner/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/dockerprovisioner/create": {
            "name": "/dockerprovisioner/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/dockerprovisioner/list": {
            "name": "/dockerprovisioner/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/dockerprovisioner/destory": {
            "name": "/dockerprovisioner/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/dockerprovisioner/addservices": {
            "name": "/dockerprovisioner/addservices",
            "inputs": {},
            "friendlyName": "addServices",
            "description": "Add items to the object"
        },
        "/dockerprovisioner": {
            "name": "/dockerprovisioner",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/dockerprovisioner/update": {
            "name": "/dockerprovisioner/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "config": {"type": "json", "description": "Configuration for the provisioner.", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/processprovisioner/new": {
            "name": "/processprovisioner/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/processprovisioner/create": {
            "name": "/processprovisioner/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/processprovisioner/list": {
            "name": "/processprovisioner/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/processprovisioner/destory": {
            "name": "/processprovisioner/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/processprovisioner/addservices": {
            "name": "/processprovisioner/addservices",
            "inputs": {},
            "friendlyName": "addServices",
            "description": "Add items to the object"
        },
        "/processprovisioner": {
            "name": "/processprovisioner",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/processprovisioner/update": {
            "name": "/processprovisioner/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "config": {"type": "json", "description": "Configuration for the provisioner.", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/provisioner/new": {
            "name": "/provisioner/new",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/provisioner/create": {
            "name": "/provisioner/create",
            "inputs": {},
            "friendlyName": "create",
            "description": "Create object of the class type"
        },
        "/provisioner/list": {
            "name": "/provisioner/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List of model objects"
        },
        "/provisioner/destory": {
            "name": "/provisioner/destory",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/provisioner/addservices": {
            "name": "/provisioner/addservices",
            "inputs": {},
            "friendlyName": "addServices",
            "description": "Add items to the object"
        },
        "/provisioner": {
            "name": "/provisioner",
            "inputs": {},
            "friendlyName": "new",
            "description": "New called for web interface"
        },
        "/provisioner/update": {
            "name": "/provisioner/update",
            "inputs": {
                "name": {"type": "string", "description": "Name of the item to update", "required": false},
                "config": {"type": "json", "description": "Configuration for the provisioner.", "required": false},
                "id": {"type": "string", "description": "ID of the item to update", "required": false}
            },
            "friendlyName": "update",
            "description": "Update entity"
        },
        "/actor/get": {
            "name": "/actor/get",
            "inputs": {
                "id": {"description": "The id of the actor", "type": "string", "required": true},
                "doc": {"descritpion": "Return the documentation of the actor", "type": "boolean", "required": false}
            },
            "friendlyName": "get",
            "description": "Get an Actor"
        },
        "/actor/list": {"name": "/actor/list", "inputs": {}, "friendlyName": "list", "description": "List the Actors"},
        "/actor/set": {
            "name": "/actor/set",
            "inputs": {
                "id": {"description": "Id of the actor", "type": "string", "required": true},
                "summary": {"descritpion": "Summary of the actor", "type": "string", "required": false},
                "document": {"descritpion": "Documentation of the actor", "type": "string", "required": false}
            },
            "friendlyName": "set",
            "description": "Set an Actor documentation"
        },
        "/actor/show": {
            "name": "/actor/show",
            "inputs": {"name": {"description": "The scope name of the actor", "type": "string", "required": true}},
            "friendlyName": "show",
            "description": "Show the application"
        },
        "/app/errors": {
            "name": "/app/errors",
            "inputs": {},
            "friendlyName": "error",
            "description": "Errors in an app"
        },
        "/app/show": {"name": "/app/show", "inputs": {}, "friendlyName": "show", "description": "Show the application"},
        "/deployment/get": {
            "name": "/deployment/get",
            "inputs": {},
            "friendlyName": "get",
            "description": "get a Deployment"
        },
        "/deployment/list": {
            "name": "/deployment/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List the Deployment"
        },
        "/env/get": {"name": "/env/get", "inputs": {}, "friendlyName": "get", "description": "get an Environment"},
        "/env/list": {"name": "/env/list", "inputs": {}, "friendlyName": "list", "description": "List the Deployment"},
        "/environment/get": {
            "name": "/environment/get",
            "inputs": {},
            "friendlyName": "get",
            "description": "get an Environment"
        },
        "/environment/list": {
            "name": "/environment/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List the Deployment"
        },
        "/implementation/filestructure": {
            "name": "/implementation/filestructure",
            "inputs": {
                "name": {"description": "The name of the scenario", "type": "string", "required": true},
                "model": {"description": "The name of the model", "type": "string", "required": false},
                "package": {"description": "The name of the package", "type": "string", "required": false}
            },
            "friendlyName": "create",
            "description": "Create a Method in a Model"
        },
        "/implementation/image": {
            "name": "/implementation/image",
            "inputs": {"name": {"description": "The name of the component", "type": "string", "required": false}},
            "friendlyName": "image",
            "description": "Get images from deployments"
        },
        "/implementation/thirdparty": {
            "name": "/implementation/thirdparty",
            "inputs": {"name": {"description": "The name of the component", "type": "string", "required": false}},
            "friendlyName": "thirdparty",
            "description": "Get thridparty components"
        },
        "/model/document": {
            "name": "/model/document",
            "inputs": {
                "scope": {
                    "description": "The scope of the Data Reference",
                    "type": "string",
                    "required": false
                }
            },
            "friendlyName": "document",
            "description": "Document the model"
        },
        "/model/get": {
            "name": "/model/get",
            "inputs": {
                "id": {"description": "The id of the model", "type": "string", "required": true},
                "doc": {"description": "Get the documentation of the model", "type": "boolean", "required": false}
            },
            "friendlyName": "get",
            "description": "Get a Model"
        },
        "/model/list": {"name": "/model/list", "inputs": {}, "friendlyName": "list", "description": "List the Models"},
        "/model/set": {
            "name": "/model/set",
            "inputs": {
                "id": {"description": "Id of the UseCase", "type": "string", "required": true},
                "summary": {"descritpion": "Summary of the UseCase", "type": "string", "required": false},
                "document": {"descritpion": "Documentation of the UseCase", "type": "string", "required": false}
            },
            "friendlyName": "set",
            "description": "Set an UseCase documentation"
        },
        "/package/get": {
            "name": "/package/get",
            "inputs": {
                "id": {"description": "The name of the package", "type": "string", "required": true},
                "doc": {"description": "Get the documentation of the package", "type": "boolean", "required": false}
            },
            "friendlyName": "get",
            "description": "Get the Packages"
        },
        "/package/list": {
            "name": "/package/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List the Packages"
        },
        "/package/set": {
            "name": "/package/set",
            "inputs": {
                "id": {"description": "Id of the Package", "type": "string", "required": true},
                "summary": {"descritpion": "Summary of the Package", "type": "string", "required": false},
                "document": {"descritpion": "Documentation of the Package", "type": "string", "required": false}
            },
            "friendlyName": "set",
            "description": "Set an Package documentation"
        },
        "/scenario/get": {
            "name": "/scenario/get",
            "inputs": {
                "id": {"description": "The name of the scenario", "type": "string", "required": true},
                "doc": {"description": "Get the documentation of the scenario", "type": "boolean", "required": false}
            },
            "friendlyName": "get",
            "description": "Get a Scenario in a UseCase"
        },
        "/scenario/instance": {
            "name": "/scenario/instance",
            "inputs": {"id": {"description": "The id of the scenario", "type": "string", "required": true}},
            "friendlyName": "instance",
            "description": "Return one of the scenario Instances based on the id."
        },
        "/scenario/instances": {
            "name": "/scenario/instances",
            "inputs": {},
            "friendlyName": "instances",
            "description": "Return all of the scenario Instances"
        },
        "/scenario/launch": {
            "name": "/scenario/launch",
            "inputs": {"id": {"description": "The id of the scenario", "type": "string", "required": true}},
            "friendlyName": "launch",
            "description": "Launch a Scenario in a UseCase"
        },
        "/usecase/get": {
            "name": "/usecase/get",
            "inputs": {
                "id": {"description": "The id of the usecase", "type": "string", "required": true},
                "doc": {"description": "This is the documentation of the use case", "type": "boolean", "required": true}
            },
            "friendlyName": "get",
            "description": "Get a UseCase"
        },
        "/usecase/list": {
            "name": "/usecase/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List the Actors"
        },
        "/usecase/set": {
            "name": "/usecase/set",
            "inputs": {
                "id": {"description": "Id of the UseCase", "type": "string", "required": true},
                "summary": {"descritpion": "Summary of the UseCase", "type": "string", "required": false},
                "document": {"descritpion": "Documentation of the UseCase", "type": "string", "required": false}
            },
            "friendlyName": "set",
            "description": "Set an UseCase documentation"
        },
        "/workflow/get": {
            "name": "/workflow/get",
            "inputs": {"id": {"description": "The id of the workflow", "type": "string", "required": true}},
            "friendlyName": "get",
            "description": "Get a Workflow"
        },
        "/workflow/list": {
            "name": "/workflow/list",
            "inputs": {},
            "friendlyName": "list",
            "description": "List the Workflows"
        },
        "sabr/bundle/build": {
            "name": "sabr/bundle/build",
            "inputs": {},
            "friendlyName": "build",
            "description": "Build a SAB bundle for the directory specified."
        },
        "sabr/deploy/show": {
            "name": "sabr/deploy/show",
            "inputs": {},
            "friendlyName": "show",
            "description": "Show the main deployment page."
        },
        "sabr/pulsar/streams": {
            "name": "sabr/pulsar/streams",
            "inputs": {},
            "friendlyName": "streams",
            "description": "Return the topics in the pulsar configuration"
        },
        "sabr/pulsar/topic": {
            "name": "sabr/pulsar/topic",
            "inputs": {},
            "friendlyName": "topic",
            "description": "Return the topics in the pulsar configuration"
        },
        "sabr/pulsar/topics": {
            "name": "sabr/pulsar/topics",
            "inputs": {},
            "friendlyName": "topics",
            "description": "Return the topics in the pulsar configuration"
        },
        "sabr/sabundle/build": {
            "name": "sabr/sabundle/build",
            "inputs": {},
            "friendlyName": "build",
            "description": "Description of the action"
        }
    }
}
