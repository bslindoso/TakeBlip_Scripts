let getTicketResponse;
// COM ATENDIMENTO
getTicketResponse = JSON.stringify({
    "type": "application/vnd.iris.ticket+json",
    "resource": {
        "id": "cf133c00-fb1d-4835-84bb-018bbae6303a",
        "sequentialId": 17,
        "ownerIdentity": "pntransbordodev@msging.net",
        "customerIdentity": "8196d9ef-168f-47d0-a34f-0c60d37a6409@tunnel.msging.net",
        "customerDomain": "tunnel.msging.net",
        "agentIdentity": "bruno.lindoso%40squadra.com.br@blip.ai",
        "provider": "Lime",
        "status": "ClosedClient",
        "storageDate": "2023-11-10T20:22:09.720Z",
        "openDate": "2023-11-10T20:22:21.380Z",
        "closeDate": "2023-11-10T20:22:55.890Z",
        "statusDate": "2023-11-10T20:22:55.890Z",
        "externalId": "cf133c00-fb1d-4835-84bb-018bbae6303a",
        "rating": 0,
        "team": "Default",
        "unreadMessages": 0,
        "closed": true,
        "closedBy": "pntransbordodev@msging.net",
        "firstResponseDate": "2023-11-10T20:22:27.200Z",
        "priority": 0,
        "isAutomaticDistribution": false
    },
    "method": "get",
    "status": "success",
    "id": "a5f5b8df-16cf-46c3-91bb-21adb365d16d",
    "from": "postmaster@desk.msging.net/!msging-application-desk-hx6ww",
    "to": "pntransbordodev@msging.net/!msging-server-ltsct-q7q4c6u2",
    "metadata": {
        "#command.uri": "lime://pntransbordodev@msging.net/ticket/cf133c00-fb1d-4835-84bb-018bbae6303a"
    }
})

// SEM ATENDIMENTO
// getTicketResponse = JSON.stringify({
//     "type": "application/vnd.iris.ticket+json",
//     "resource": {
//         "id": "113270ee-40e8-47a9-b488-018bbadbdd2d",
//         "sequentialId": 16,
//         "ownerIdentity": "pntransbordodev@msging.net",
//         "customerIdentity": "61f3e815-631c-4302-a696-7bc8e55c422e@tunnel.msging.net",
//         "customerDomain": "tunnel.msging.net",
//         "provider": "Lime",
//         "status": "ClosedClient",
//         "storageDate": "2023-11-10T20:10:53.100Z",
//         "closeDate": "2023-11-10T20:11:02.010Z",
//         "statusDate": "2023-11-10T20:11:02.010Z",
//         "externalId": "113270ee-40e8-47a9-b488-018bbadbdd2d",
//         "rating": 0,
//         "team": "Default",
//         "unreadMessages": 0,
//         "closed": true,
//         "closedBy": "pntransbordodev@msging.net",
//         "priority": 0
//     },
//     "method": "get",
//     "status": "success",
//     "id": "878474b2-bc9c-45fb-837f-456dc8a8543b",
//     "from": "postmaster@desk.msging.net/!msging-application-desk-rdp75",
//     "to": "pntransbordodev@msging.net/!msging-server-mzzk6-q7q4c6u2",
//     "metadata": {
//         "#command.uri": "lime://pntransbordodev@msging.net/ticket/113270ee-40e8-47a9-b488-018bbadbdd2d"
//     }
// })

// TICKET ERRADO
// getTicketResponse = JSON.stringify({
//     "method": "get",
//     "status": "failure",
//     "reason": {
//         "code": 64,
//         "description": "Ticket not found for specified id cf133c00-fb1d-4835-84bb-018bbae6303aa"
//     },
//     "id": "54f979ec-e497-4942-b5c5-6da537277d8a",
//     "from": "postmaster@desk.msging.net/!msging-application-desk-mhjbn",
//     "to": "pntransbordodev@msging.net/!msging-server-thwz5-q7q4c6u2",
//     "metadata": {
//         "#command.uri": "lime://pntransbordodev@msging.net/ticket/cf133c00-fb1d-4835-84bb-018bbae6303aa"
//     }
// })

let getTicketStatus = '200'

console.log(run(getTicketResponse, getTicketStatus))

function run(response, status) {
    try {
        response = JSON.parse(response)

        // VALIDA SE STATUS DA REQUISIÇÃO DEU SUCESSO
        if (status >= 200 && status <= 299 ? true : false) {

            // VALIDA SE O STATUS DA RESPONSE É SUCESSO OU FAILURE
            if (response.status == 'success' ? true : false) {

                // VERIFICA SE HÁ A PROPRIEDADE resource.agentIdentity
                if (response.resource.hasOwnProperty('agentIdentity')) {
                    return `COM ATENDENTE ATRIBUIDO - ${response.resource.agentIdentity}`
                } else {
                    return 'SEM ATENDENTE ATRIBUIDO'
                }

            } else {
                return `ERRO DE CONSULTA - Status: ${status}, Response: ${JSON.stringify(response)}`
            }

        } else {
            return `ERRO API - Status: ${status}, Response: ${JSON.stringify(response)}`
        }
    } catch (e) {
        return e
    }
}