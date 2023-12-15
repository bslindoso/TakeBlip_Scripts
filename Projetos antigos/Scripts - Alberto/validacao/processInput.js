// PROCESS INPUT

// <<<<Var of input>>>> 
// input.content
// input.type
// input.intent.name
// platform
// apiName
// contentAssistant

// <<<validacao>>>>
// processedInput@input
// processedInput@type
// processedInput@inputRecognized

// <<<inputRecognized>>>>
// inactivity
// block_return
// valid_NLP
// invalid_NLP
// validation
// shortcut
// bad_word
// menu_return
// no_validation

// <<<<var de saida>>>>
// processedInput

// <<<condição>>>

// <<<Script>>>>
// {{resource.FunctionGetOptionSelected}}

const run = (selected, inputType, intent, platform, apiName, contentAssistant) => {
    intent = (typeof intent !== 'undefined') ? intent : 'None';
    platform = (typeof platform !== 'undefined') ? platform : 'BlipChat';
    apiName = (typeof apiName !== 'undefined') ? apiName : false;
    contentAssistant = (typeof contentAssistant !== 'undefined') ? contentAssistant : null;

    const itens = [
        {
            name: [],
        },
    ];

    let validation = {
        'menuDinamic': true,
        'isInputNoValidate': false,
        'isTrueFalse': false,
        'textLong': false,
        'intentValidate': false,
        'isIntent': false,
        'isOptionMenu': false,
        'contentAssistant': false,
        'shortcutMenu': false,
        'shortcut': false,
        'badWord': false,
        'NPS': false,
        'Email': false,
        'Cep': false,
        'Telefone': false,
        'Celular': false,
        'CNPJ': false,
        'CNPJValido': false,
        'CPF': false,
        'CPFValido': false,
        'Quantidade': false,
        'Data': false,
        'Numero': false,
        'Nome': false,
        'Serial': false,
        'Pedido': false,
        'Id': false
    };

    if (platform === 'WhatsApp') {
        validation.menuDinamic = false;
    }

    const mainMenus = [
        {
            name: [],
        },
    ];

    const shortcuts = [
        {
            name: [],
        },
    ];

    const selectResponse = getOptionSelected(
        selected,
        inputType,
        itens,
        validation,
        intent,
        mainMenus,
        shortcuts,
        apiName,
        contentAssistant
    );

    return selectResponse;
};