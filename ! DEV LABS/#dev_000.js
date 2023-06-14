const response = `{
    "uuid": "7f930cce-affb-4a32-8532-8466ed8c2663",
    "email": "locatins@locatins.com.br",
    "name": "Ricardo Augusto Gusmao de Almeida",
    "mobile_phone": null,
    "tags": [
        "[campanha] capacidade e limite 12/2022",
        "[scc][campanha] anotações completas mês 08 2022",
        "[scc][campanha score junho 2021]",
        "campanha score final de ano 2020",
        "teste de atualizacao de tags - 1"
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
}`


console.log(run(response))

function run(response) {

    response = JSON.parse(response)

    return verificaMobile(response)
    
}

function verificaMobile(response) {
    if (!response.hasOwnProperty('mobile_phone')) {
        //Não tem propriedade mobile_phone
        return false
    } else {
        if (response.mobile_phone == '') {
            //mobile_phone está vazio
            return false
        }
        if (response.mobile_phone == null || response.mobile_phone == "null") {
            //mobile_phone é null
            return false
        }

        return true
    }

}

