

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
    name: 'Build AIS SAB',
    description: 'Build and SABRs for Ships, No Contact, and Viewer',
    method: "sabundle/build",
    actors: {
        'ApplicationDeveloper': 'uses',
    },
    steps: [
        { action: 'bundle create', parameters: {name:'Ship1', file:'./projects/AISSimulator/AISShip/bundle.js'}},
        { action: 'bundle create', parameters: {name:'Agg1', file:'./projects/AISSimulator/AISAgg/bundle.js'}},
        { action: 'bundle create', parameters: {name:'NoContact', file:'./projects/AISSimulator/AISNoContact/bundle.js'}},
        { action: 'bundle create', parameters: {name:'Viewer1', file:'./projects/AISSimulator/AISViewer/bundle.js'}},
        { action: 'diml sabm sabundle build', parameters: {name:'Ship1'}},
        { action: 'diml sabm sabundle build', parameters: {name:'Agg1'}},
        { action: 'diml sabm sabundle build', parameters: {name:'Viewer1'}},
        { action: 'diml sabm policy create', parameters: {file:'./projects/AISSimulator/AISShip/policies.js'}},
        // Build the bundle
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Viewer1', policies:'realtime'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'NoContact', policies:'realtime', parameters:'timeout=10000'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Agg1', policies:'realtime'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/215071000A.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/215031000A.csv'}},
    ]
};

