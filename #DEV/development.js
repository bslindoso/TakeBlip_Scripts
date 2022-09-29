// ============================================================================
// TESTES
// ============================================================================
const menu = defineMenu();
const input = 'não';
const inputType = 'text/plain';
const platform = 'instagram';
console.log(run(input, inputType, platform, menu));
function defineMenu() {

    let menu = {
        'text': '💡Antes de iniciarmos, separei algumas {{n1}}dicas{{n2}} que podem te ajudar em nossa conversa:\n\n➡ Digite {{n1}}“Menu”{{n2}} toda vez que desejar retornar ao menu principal;\n\n➡ Digite {{n1}}“Sair”{{n2}} quando precisar encerrar o nosso chat.\n\nE não se esqueça! Sempre que eu te perguntar algo, responda em uma {{n1}}única mensagem.{{n2}} 😉',
        'options': ["Entendi"],
        'values': ["Entendi"],
        'description': [],
        'itens': [
            { name: ['Entendi'] },
            { name: ['Menu', 'Voltar ao início', 'Reiniciar'] },
            { name: ['Sair'] }
        ]
    }

    menu.itens = addItens(menu.itens);

    return JSON.stringify(menu);
}
function addItens(itens) {
    let newItens = [];
    let newNames;
    let name;
    let match;
    for (let i = 0; i < itens.length; i++) {
        name = itens[i].name;
        newNames = []
        for (let y = 0; y < itens[i].name.length; y++) {
            match = name[y];
            newNames.push(match);
            // Adiciona uma variação lowerCase e UpperCase para cada opção do menu
            newNames.push(match.toLowerCase());
            newNames.push(match.toUpperCase());
            newItens[i] = { name: newNames };
        }
        newNames.push(`${i + 1}`); // Acrescenta numeração automática
    }
    return newItens;
}

// ============================================================================
//      TYPE
// ============================================================================
// - reserved => quando há alguma palavra reservada que o bot deverá processar, 
// como SAIR E MENU por exemplo
// - error => quando alguma validação deverá retornar um erro para cair em exceção
// - success => quando a validação foi bem sucedida.
// ============================================================================
//      INPUT
// ============================================================================
// Retorna o input após processamento.
// - Se type == error => o input será a descrição do erro. Ex: ERRO CEP
// - Se type == success => o input será o input original processado.
// ============================================================================
//      VALIDATION
// ============================================================================
// Retorna em qual validação o input foi processado. Ex: cep
// ============================================================================

function run(input, inputType, platform, menu) {
    try {

        // =================================================================================
        //             ATENÇÃO: MANIPULAR SOMENTE AS DUAS CONSTANTES A SEGUIR
        // =================================================================================
        // - validacaoMenu => true para validação de Menu, false para Input
        // - validacoesInput => insira aqui que tipo de validação de input vai ser  
        //   necessário (se mais de um for selecionado, apenas o mais acima será validado)
        // - erroMenuEspecial => altere somente se, caso a validação seja um Menu e para
        //   este menu haja um tratamento diferente de exceção.
        // =================================================================================
        const validacaoMenu = false;
        const erroMenuEspecial = '';
        const validacoesInput = {
            data: false,
            email: false,
            cep: false,
            img: false,
            imgTxt: false,
            nome: false
        };
        // ========================================================================

        // Inicia o objeto que será retornado pela função
        let processedInput = {
            'type': null,
            'input': null,
            'validation': 'none'
        }

        // Verifica se o usuário digitou SAIR ou MENU
        if (input == 'sair' || input == 'SAIR' || input == 'Sair') {
            processedInput.type = 'reserved'
            processedInput.input = 'SAIR'
            return JSON.stringify(processedInput)
        } else if (input == 'menu' || input == 'MENU' || input == 'Menu') {
            processedInput.type = 'reserved'
            processedInput.input = 'MENU'
            return JSON.stringify(processedInput)
        }

        // Formata variáveis
        menu = JSON.parse(menu);
        platform = platform.toUpperCase()

        if (validacaoMenu) {
            // Validação de MENU
            processedInput = validaMenu(input, menu, platform)

            // Verifica se precisa mudar a mensagem de erro do Menu Dinâmico para o Especial
            if ((processedInput.input == 'ERRO MENU DINAMICO' || processedInput.input == 'ERRO MENU NUMERICO') && erroMenuEspecial != '') {
                processedInput.input = erroMenuEspecial; 
            }
            return JSON.stringify(processedInput);

        } else {
            // Validação de INPUT
            const val = Object.entries(validacoesInput);
            processedInput = validaInput(val, input, inputType)

            // Se nenhuma validação foi processada, retorna o input sem validação
            if (processedInput.input == 'INPUT SEM VALIDAÇÕES') {
                return JSON.stringify({type: 'success', input: input, validation: 'none'});

            } else {
                return JSON.stringify(processedInput);
            }
        }

    } catch (e) {
        return {type: 'error', input: 'ERRO INESPERADO', validation: 'none'}
    }
}

function validaInput(validacoes, input, inputType) {

    let inputValidado;

    for (let i = 0; i < validacoes.length; i++) {

        if (validacoes[i][1]) {

            switch (validacoes[i][0]) {
                case 'nome':
                    inputValidado = validaNome(input);
                    break;
                case 'email':
                    inputValidado = validaEmail(input);
                    break;
                case 'cep':
                    inputValidado = validaCep(input);
                    break;
                case 'data':
                    inputValidado = validaData(input);
                    break;
                case 'img':
                    inputValidado = validaImagem(input, inputType);
                    break;
                case 'imgTxt':
                    inputValidado = validaImagemETexto(input, inputType);
                    break;
                default:
                    inputValidado = {type: 'error', input: 'ERRO INESPERADO', validation: 'none'};
                    break;
            }
            return inputValidado;
        }
    }
    return {type: 'error', input: 'INPUT SEM VALIDAÇÕES', validation: 'none'}
}

function validaNome(input) {

    const regex = {
        "image": /image/,
        "audio": /audio/,
        "video": /video/,
        "emoji": /[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/,
        "link": /^(((https?:\/\/)[^\s.]+|(www))\.[\w][^\s]+)$/,
        "arquivo": /application|text\/csv|text\/html/,
        "figurinha": /application\/octet-stream|image\/webp/,
        "numero": /[0-9]/
    }
    let isString = input.replace(/[0-9]/g, 'ERRO NOME')
    let name = isString.split(' ')


    if (input.match(regex.image) || input.match(regex.audio) || input.match(regex.video) || input.match(regex.emoji) || input.match(regex.figurinha) || input.match(regex.link) || input.match(regex.arquivo) || isString.match(regex.numero)) {
        return {type: 'error', input: 'ERRO NOME', validation: 'nome'}
    }
    else if (isString.includes('ERRO NOME')) {
        return {type: 'error', input: 'ERRO NOME', validation: 'nome'}
    }
    else if (name.length >= 2) {
        return {type: 'success', input: isString.normalize('NFD').replace(/[\u0300-\u036f]/g, ""), validation: 'nome'}
    }
    return {type: 'error', input: 'ERRO NOME', validation: 'nome'}


}

function validaMenu(input, menu, platform) {

    const opcao = menu.itens;

    for (i = 0; i < opcao.length; i++) {
        for (x = 0; x < opcao[i].name.length; x++) {
            if (opcao[i].name[x] == input) {
                return {type: 'success', input: opcao[i].name[0], validation: 'menu'}
            }
        }
        
    }

    if (platform == 'INSTAGRAM' || platform == 'MESSENGER') {
        return {type: 'error', input: 'ERRO MENU NUMERICO', validation: 'menu'}
    } else {
        return {type: 'error', input: 'ERRO MENU DINAMICO', validation: 'menu'}
    }
}

function validaCep(input) {

    const matchDash = input.match(/^[0-9]{5}-[0-9]{3}$/gm);
    const matchWithoutDash = input.match(/^[0-9]{5}[0-9]{3}$/gm);
    if (!matchDash && !matchWithoutDash) {
        return {type: 'error', input: 'ERRO CEP', validation: 'cep'};
    } else {
        if (matchDash) {
            return {type: 'success', input: input.split('-').join(''), validation: 'cep'}
        }
        return {type: 'success', input: input, validation: 'cep'};
    }
}

function validaData(input) {

    // Verifica se o input informado está no formato esperado 
    const match = input.match(/^(\d{1,2})\/(\d{1,2})\/\d{4}$/gm);
    if (!match) {
        return {type: 'error', input: 'ERRO DATA', validation: 'data'};
    } else {
        return {type: 'success', input: input, validation: 'data'};
    };

};

function validaEmail(input) {

    const match = input.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/gm);
    if (!match) {
        return {type: 'error', input: 'ERRO EMAIL', validation: 'email'};
    } else {
        return {type: 'success', input: input, validation: 'email'};
    }
}

function validaImagem(input, inputType) {

    if (inputType == 'application/vnd.lime.media-link+json') {
        input = JSON.parse(input);
        if (input.type.includes('image')) {
            return {type: 'success', input: input.uri, validation: 'imagem'};
        } else {
            return {type: 'error', input: 'ERRO IMAGEM', validation: 'imagem'}
        }
    } else {
        return {type: 'error', input: 'ERRO IMAGEM', validation: 'imagem'}
    }

}

function validaImagemETexto(input, inputType) {

    if (inputType == 'text/plain') {
        return {type: 'success', input: input, validation: 'imagem/texto'};
    } else if (inputType == 'application/vnd.lime.media-link+json') {
        input = JSON.parse(input);
        if (input.type.includes('image')) {
            return {type: 'success', input: input.uri, validation: 'imagem/texto'};
        } else {
            return {type: 'error', input: 'ERRO IMAGEM', validation: 'imagem/texto'}
        }
    } else {
        return {type: 'error', input: 'ERRO IMAGEM', validation: 'imagem/texto'}
    }
}