let responseOnlineAgents = JSON.stringify(
    {
        "type": "application/vnd.lime.collection+json",
        "resource": {
            "total": 9, "itemType": "application/vnd.iris.desk.team+json",
            "items": [
                { "name": "Atendimento", "agentsOnline": 1 },
                { "name": "Check-In", "agentsOnline": 2 },
                { "name": "Default", "agentsOnline": 3 },
                { "name": "Fila 1", "agentsOnline": 4 },
                { "name": "Fila 2", "agentsOnline": 5 },
                { "name": "Inside Sales", "agentsOnline": 6 },
                { "name": "Prorrogação", "agentsOnline": 7 },
                { "name": "Realocação, reembolso e cancelamento", "agentsOnline": 8 },
                { "name": "Reservas", "agentsOnline": 9 }
            ]
        }, "method": "get", "status": "success", "id": "{{$guid}}", "from": "postmaster@desk.msging.net/!iris-hosted-6", "to": "sctransbordodev1@msging.net/!iris-hosted-6-xq0q54q8", "metadata": { "#command.uri": "lime://sctransbordodev1@msging.net/teams/agents-online", "uber-trace-id": "eb560a721281ae97%3Ac3b5c9867c76f1d8%3Aeb560a721281ae97%3A1" }
    }
)
let principal = 'false';
let validaRegraAtendimento = JSON.stringify(
    {"id":1,"filaPrincipal":"Fila 1","filaBackup":"Atendimento"}
)
console.log(run(responseOnlineAgents, principal, validaRegraAtendimento))





/* Valida atendentes online por fila */
function run(responseOnlineAgents, principal, validaRegraAtendimento) {
    responseOnlineAgents = JSON.parse(responseOnlineAgents)
    const listaFilas = responseOnlineAgents.resource.items
    validaRegraAtendimento = JSON.parse(validaRegraAtendimento)
    let fila;
    if (principal == 'true') {
        fila = validaRegraAtendimento.filaPrincipal
    } else {
        fila = validaRegraAtendimento.filaBackup
    }

    let agentsOnline;
    for (let i = 0; i < listaFilas.length; i++) {

        if (listaFilas[i].name == fila) {
            agentsOnline = listaFilas[i].agentsOnline
            break;
        }
    }
    
    if (agentsOnline > 0) {
        return true
    }
    return false
}