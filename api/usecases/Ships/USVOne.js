module.exports = {
    name: 'USV One Instance',
    description: 'Build the sentient agent bundle including the security vault, streams, transforms, etc..',
    method: "sabundle/build",
    actors: {
        'ApplicationDeveloper': 'uses',
    },
    steps: [
        // Create the Bundles
        { action: 'sabundle create', parameters: {name:'Ship1', file:'./projects/AISSimulator/AISShip/bundle.js'}},
        { action: 'sabundle create', parameters: {name:'USV', file:'./projects/AISSimulator/AISUSV/bundle.js'}},
        { action: 'sabundle create', parameters: {name:'Agg1', file:'./projects/AISSimulator/AISAgg/bundle.js'}},
        { action: 'sabundle create', parameters: {name:'Viewer1', file:'./projects/AISSimulator/AISViewer/bundle.js'}},
        // Create the policies
        { action: 'diml sabm policy create', parameters: {file:'./projects/AISSimulator/AISShip/policies.js'}},
        // Deploy the Bundles
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Viewer1', policies:'realtime'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Agg1', policies:'realtime'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr:'USV', policies:'realtime', parameters:'MMSI=215071000,sourceFiles=../AIS_Simulator/ships/215071000.csv:../AIS_Simulator/ships/367092720.csv:../AIS_Simulator/ships/367182840.csv:../AIS_Simulator/ships/367289000.csv:../AIS_Simulator/ships/367370780.csv:../AIS_Simulator/ships/367425680.csv:../AIS_Simulator/ships/367530120.csv:../AIS_Simulator/ships/367602610.csv:../AIS_Simulator/ships/367611060.csv:../AIS_Simulator/ships/368010420.csv:../AIS_Simulator/ships/368066140.csv:../AIS_Simulator/ships/368132890.csv:../AIS_Simulator/ships/368149330.csv:../AIS_Simulator/ships/368175820.csv:../AIS_Simulator/ships/368184020.csv:../AIS_Simulator/ships/368197440.csv:../AIS_Simulator/ships/372443000.csv:../AIS_Simulator/ships/538002220.csv:../AIS_Simulator/ships/538002784.csv:../AIS_Simulator/ships/636019418.csv'}}
    ]
};

