// Type Message Exception

// <<<<Var of input>>>> 
// objExcecao

// <<<<var de saida>>>>
// messageExcep

// <<<condição>>>

// <<<Script>>>>

const run = (obj) => {
    const messages = [
        {
            'exceptions': ["Default", "Menu", "Intencao", "Dinamico", "Escolha"],
            'type': 'Default'
        },
        {
            'exceptions': ["Email", "Cep", "Telefone", "Celular", "CNPJ", "CNPJValido", "CPF", "CPFValido", "Quantidade", "Data", "NPS", "Endereco", "TextoLongos", "Nome", "Numero"],
            'type': 'Dados'
        },
        {
            'exceptions': ["Emoticons", "Figurinhas", "Images", "Audios", "Videos", "Link", "Arquivos", "Contatos"],
            'type': 'Conteudos'
        },
        {
            'exceptions': ["Inativo", "Persistente"],
            'type': 'Menu'
        },
        {
            'exceptions': ["Error", "ErrorAPI", "ErrorContato", "ErrorTransbordo", "ErrorEmail"],
            'type': 'API'
        },
        {
            "exceptions": ["SwearWord", "Insult", "Preconception", "Depreciate", "Injury", "Prejudgement"],
            "type": 'BadWord'
        },
        {
            'exceptions': ["Login", "Deslogar"],
            'type': 'Login'
        },
        {
            'exceptions': ["Intent"],
            'type': 'Intent'
        },
    ];

    return getTypeMessage(newObj, messages);
};

function getTypeMessage(obj, objMessages) {
    let excecao = obj;
    if (typeof obj === typeof toString()) {
        excecao = JSON.parse(obj);
    }

    for (let i = 0; i < objMessages.length; i++) {
        for (let j = 0; j < objMessages[i].exceptions.length; j++) {
            if (excecao.stateDestination == objMessages[i].exceptions[j]) {
                return objMessages[i].type;
            }
        }
    }
}