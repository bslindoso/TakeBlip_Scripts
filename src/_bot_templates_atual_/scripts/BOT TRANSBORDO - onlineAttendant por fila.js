//////////////////////////////////////////
// RETORNO DA API /teams/agents-online
//////////////////////////////////////////
let apiCommandsAttendantsResult
apiCommandsAttendantsResult = {
  "type": "application/vnd.lime.collection+json",
  "resource": {
    "total": 11,
    "itemType": "application/vnd.iris.desk.team+json",
    "items": [
      {
        "name": "AutoBan",
        "agentsOnline": 1
      },
      {
        "name": "Default",
        "agentsOnline": 0
      },
      {
        "name": "MSVia",
        "agentsOnline": 0
      },
      {
        "name": "Renovias",
        "agentsOnline": 0
      },
      {
        "name": "RioSP",
        "agentsOnline": 0
      },
      {
        "name": "RodoAnel",
        "agentsOnline": 0
      },
      {
        "name": "SPVias",
        "agentsOnline": 0
      },
      {
        "name": "Via Costeira",
        "agentsOnline": 0
      },
      {
        "name": "Via Oeste",
        "agentsOnline": 0
      },
      {
        "name": "Via Sul",
        "agentsOnline": 0
      },
      {
        "name": "ViaLagos",
        "agentsOnline": 0
      }
    ]
  },
  "method": "get",
  "status": "success",
  "id": "a5c3886a-fd3b-4fb0-b263-384437e8afe1",
  "from": "postmaster@desk.msging.net/!msging-application-desk-2hrvc",
  "to": "transbordoimprensaprd@msging.net/!msging-server-2mp68-he0uty0f",
  "metadata": {
    "traceparent": "00-ab2df6035b2b06c0b4b46a3786a26021-599b39e43334d05d-01",
    "#command.uri": "lime://transbordoimprensaprd@msging.net/teams/agents-online"
  }
}

//////////////////////////////////////////
// EXTRA CONTATO FILA
//////////////////////////////////////////
let fila
fila = 'AutoBan'

console.log(run(apiCommandsAttendantsResult, fila))


function run(apiCommandsAttendantsResult, fila) {
  try {
    let response = (typeof apiCommandsAttendantsResult === 'object') ? apiCommandsAttendantsResult : JSON.parse(apiCommandsAttendantsResult);

    const { resource } = response;

    let listOfAttendant = resource.items;

    let getOnlineAgentInQueue = listOfAttendant.find(
      (agent) => agent.agentsOnline >= 1 && agent.name === fila
    );

    return getOnlineAgentInQueue ? true : false;
  } catch (e) {
    return `ERROR SCRIPT: ${e}`;
  }
}