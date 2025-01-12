// a variável de entrada ticket é o lastTicket que é o input.content após a finalização do ticket

let lastTicket = JSON.stringify({
  "id": "444904eb-25ca-4e79-a690-01932ad01c7e",
  "sequentialId": 719,
  "ownerIdentity": "araujomanipuladoshml@msging.net",
  "customerIdentity": "e12d312f-0545-41ac-9c3e-bbc6ebc59044@tunnel.msging.net",
  "customerDomain": "wa.gw.msging.net",
  "agentIdentity": "bruno.lindoso%40squadra.com.br@blip.ai",
  "provider": "Lime",
  "status": "ClosedAttendant",
  "storageDate": "2024-11-14T13:15:02.140Z",
  "openDate": "2024-11-14T13:15:24.770Z",
  "closeDate": "2024-11-14T13:15:59.490Z",
  "statusDate": "2024-11-14T13:15:59.490Z",
  "externalId": "444904eb-25ca-4e79-a690-01932ad01c7e",
  "rating": 0,
  "team": "Orçamento",
  "unreadMessages": 0,
  "closed": true,
  "closedBy": "bruno.lindoso%40squadra.com.br@blip.ai",
  "tags": [
    "Pendência pagamento",
    "Outros"
  ],
  "priority": 1000,
  "isAutomaticDistribution": false,
  "distributionType": "Redis"
})

console.log(run(lastTicket))


function run(lastTicket) {
  try {
    let ticket = JSON.parse(lastTicket)

    if (ticket.tags == undefined || ticket.tags == "undefined") return ""

    return ticket.tags.join(", ")
  } catch (e) {
    return "sem tag"
  }
}