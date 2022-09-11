// VALIDAR OBJEXCECAO ORIGEM

// <<<<Var of input>>>> 
// objExcecao

// <<<<var de saida>>>>
// objExcecao

// <<<condição>>>

// <<<Script>>>>

const run = (user_redirection) => {
    let PARSED = user_redirection;
    if (typeof user_redirection === typeof toString()) {
        PARSED = JSON.parse(user_redirection);
    }

    let STATEDESTINATION = PARSED.stateDestination;

    let router_returns = {
        "destination": PARSED.destination,
        "origin": PARSED.origin,
        "inputContent": PARSED.inputContent,
        "inputType": PARSED.inputType,
        "stateDestination": PARSED.stateDestination,
        "stateOrigin": PARSED.stateOrigin
    };

    const redirectMessage = [
        {
            "type": ["Default", "Inativo", "Persistente", "Menu", "Dinamico", "Escolha", "Intencao"],
            "destination": 'Mensagens'
        },
        {
            "type": ["Emoticons", "Figurinhas", "Images", "Audios", "Videos", "Link", "Arquivos", "Contatos"],
            "destination": 'Mensagens'
        },
        {
            "type": ["Email", "Cep", "Telefone", "Celular", "CNPJ", "CNPJValido", "CPF", "CPFValido", "Quantidade", "Data", "NPS", "Endereco", "TextoLongos", "Nome", "Numero"],
            "destination": 'Mensagens'
        },
        {
            "type": ["Error", "ErrorAPI", "ErrorContato", "ErrorTransbordo", "ErrorEmail"],
            "destination": 'Mensagens'
        },
        {
            "type": ["SwearWord", "Insult", "Preconception", "Depreciate", "Injury", "Prejudgement"],
            "destination": 'Mensagens'
        },
        {
            "type": ["Inatividade"],
            "destination": 'Inatividade'
        },
        {
            "type": ["Intent"],
            "destination": 'Intencao'
        },
        {
            "type": ["Shortcut"],
            "destination": 'Shortcut'
        },
    ];

    for (let i = 0; i < redirectMessage.length; i++) {
        for (let j = 0; j < redirectMessage[i].type.length; j++) {
            const element = redirectMessage[i].type[j];

            if (STATEDESTINATION == element) {
                router_returns.destination = redirectMessage[i].destination;
                break;
            }
        }
    }

    return router_returns;
};