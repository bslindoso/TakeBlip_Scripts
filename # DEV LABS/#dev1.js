let response = JSON.stringify({
    "uuid": "7f930cce-affb-4a32-8532-8466ed8c2663",
    "email": "locatins@locatins.com.br",
    "name": "Ricardo Augusto Gusmao de Almeida",
    "tags": [
        "[campanha] capacidade e limite 12/2022",
        "[scc][campanha] anotações completas mês 08 2022",
        "[scc] [campanha score junho 2021]",
        "campanha score final de ano 2020",
        "teste de inclusão de tags - 1"
    ],
    "extra_emails": [],
    "legal_bases": [
        {
            "category": "communications",
            "type": "consent",
            "status": "granted"
        }
    ],
    "cf_razao_social": "Locatins - Locadora De Máquinas E Ferramentas Para Construção Ltda-Me",
    "links": [
        {
            "rel": "SELF",
            "href": "https://api.rd.services/platform/contacts/uuid:7f930cce-affb-4a32-8532-8466ed8c2663",
            "media": "application/json",
            "type": "GET"
        },
        {
            "rel": "SELF",
            "href": "https://api.rd.services/platform/contacts/email:locatins@locatins.com.br",
            "media": "application/json",
            "type": "GET"
        },
        {
            "rel": "CONTACT.DELETE",
            "href": "https://api.rd.services/platform/contacts/uuid:7f930cce-affb-4a32-8532-8466ed8c2663",
            "media": "application/json",
            "type": "DELETE"
        },
        {
            "rel": "CONTACT.FUNNEL",
            "href": "https://api.rd.services/platform/contacts/7f930cce-affb-4a32-8532-8466ed8c2663/funnels/{funnel_name}",
            "media": "application/json",
            "type": "GET"
        },
        {
            "rel": "CONTACT.EVENTS",
            "href": "https://api.rd.services/platform/contacts/7f930cce-affb-4a32-8532-8466ed8c2663/events?event_type={event_type}",
            "media": "application/json",
            "type": "GET"
        }
    ]
})
let status = "200"

let email = "b@c.com"

let telefone = "82999876543"




// let response = JSON.stringify({
//     "errors": {
//         "error_type": "RESOURCE_NOT_FOUND",
//         "error_message": "The resource could not be found"
//     }
// })
// let status = "404"

console.log(run(status, response))






function run(status, response) {
    response = JSON.parse(response)

    if (status == 404 && response.hasOwnProperty("errors")) {
        return "E-mail não localizado (CADASTRAR LEAD)"
    } else if (status == 200) {
        return "Email localizado"
    } else {

    }
}