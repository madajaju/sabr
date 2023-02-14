module.exports = {
    name: 'AIS No Contact',
    description: 'Build the sentient agent bundle including the security vault, streams, transforms, etc..',
    method: "sabundle/build",
    actors: {
        'ApplicationDeveloper': 'uses',
    },
    steps: [
        {action: 'sabundle create', parameters: {name: 'Ship1', file: './projects/AISSimulator/AISShip/bundle.js'}},
        { action: 'sabundle create', parameters: {name: 'NoContact', file: './projects/AISSimulator/AISNoContact/bundle.js'}},
        { action: 'sabundle create', parameters: {name:'Agg1', file:'./projects/AISSimulator/AISAgg/bundle.js'}},
        {action: 'sabundle create', parameters: {name: 'Viewer1', file: './projects/AISSimulator/AISViewer/bundle.js'}},
        {action: 'diml sabm policy create', parameters: {file: './projects/AISSimulator/AISShip/policies.js'}},
        // Build the bundle
        {action: 'diml sabm bundle deploy', parameters: {sabr: 'Viewer1', policies: 'realtime'}},
        { action: 'diml sabm bundle deploy', parameters: {sabr: 'NoContact', policies: 'realtime', parameters: 'timeout=10000'} },
        { action: 'diml sabm bundle deploy', parameters: {sabr:'Agg1', policies:'realtime'}},
        { action: 'diml sabm bundle deploy', parameters: { sabr: 'Ship1', policies: 'realtime', parameters: 'sourceFile=../AIS_Simulator/ships/215071000A.csv' } },
        { action: 'diml sabm bundle deploy', parameters: { sabr: 'Ship1', policies: 'realtime', parameters: 'sourceFile=../AIS_Simulator/ships/215031000A.csv' } },
    ]
};

