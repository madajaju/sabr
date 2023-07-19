/*
 * Copyright 2023 Intel Corporation.
 * This software and the related documents are Intel copyrighted materials, and your use of them is governed by
 * the express license under which they were provided to you (License). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this software or the related documents
 * without  Intel's prior written permission. This software and the related documents are provided as is, with no
 * express or implied warranties, other than those that are expressly stated in the License.
 *
 */

module.exports = {
    name: 'AIS One',
    description: 'Build and deploy SABRS for a general area with several ships.',
    method: "sabundle/build",
    actors: {
        'ApplicationDeveloper': 'uses',
    },
    steps: [
        { action: 'bundle create', parameters: {name:'Ship1', file:'./projects/AISSimulator/AISShip/bundle.js'}},
        { action: 'bundle create', parameters: {name:'Agg1', file:'./projects/AISSimulator/AISAgg/bundle.js'}},
        { action: 'bundle create', parameters: {name:'Viewer1', file:'./projects/AISSimulator/AISViewer/bundle.js'}},
        { action: 'diml sabm sabundle build', parameters: {name:'Ship1'}},
        { action: 'diml sabm sabundle build', parameters: {name:'Agg1'}},
        { action: 'diml sabm sabundle build', parameters: {name:'Viewer1'}},
        { action: 'diml sabm policy create', parameters: {file:'./projects/AISSimulator/AISShip/policies.js'}},
        // Build the bundle
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Viewer1', policies:'realtime'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Agg1', policies:'realtime'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/215071000.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/215031000.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/367092720.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/367182840.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/367289000.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/367370780.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/367425680.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/367530120.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/367602610.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/367611060.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/368010420.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/368066140.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/368132890.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/368149330.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/368175820.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/368184020.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/368197440.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/372443000.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/538002220.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/538002784.csv'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Ship1', policies:'realtime', parameters:'sourceFile=../AIS_Simulator/ships/636019418.csv'}},
]
};

