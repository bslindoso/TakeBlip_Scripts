// ============================================================================
// TESTES
// ============================================================================
const menu = defineMenu();
const input = 'dfsdfsdfsd';
const inputType = 'text/plain';
const platform = 'blipchat';
console.log(run(input, inputType, menu, platform));
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
// INICIO DA FUNÇÃO 
// ============================================================================
function run(input, inputType, menu, platform) {
    try {

        // ========================================================================
        //          ATENÇÃO: ALTERAR APENAS AS DUAS CONSTANTES A SEGUIR
        //     Insira aqui que tipo de validação de input vai ser necessário 
        //   (se mais de um for selecionado, apenas o mais acima será validado)
        // ========================================================================
        const validacaoMenu = false; //True para validação de Menu, false para Input
        const validacoesInput = {
            data: false,
            email: false,
            cep: false,
            img: false,
            imgTxt: false,
            nome: false
        };
        // ========================================================================


        // Verifica se o usuário digitou SAIR ou MENU
        if (input == 'sair' || input == 'SAIR' || input == 'Sair') {
            return 'SAIR'
        } else if (input == 'menu' || input == 'MENU' || input == 'Menu') {
            return 'MENU'
        }

        // Formata variáveis
        menu = JSON.parse(menu);
        platform = platform.toUpperCase()

        if (validacaoMenu) {
            // Validação de MENU
            const processedInput = validaMenu(input, menu, platform)
            return processedInput;
        } else {
            // Validação de INPUT
            const val = Object.entries(validacoesInput);
            const processedInput = validaInput(val, input, inputType)

            if (processedInput == 'INPUT SEM VALIDAÇÕES') {
                return input;
            } else {
                return processedInput;
            }
        }

    } catch (e) {
        return 'ERRO INESPERADO'
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
                    inputValidado = 'ERRO INESPERADO';
                    break;
            }
            return inputValidado;
        }
        return 'INPUT SEM VALIDAÇÕES'
    }
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
        return "ERRO NOME"
    }
    else if (isString.includes('ERRO NOME')) {
        return "ERRO NOME"
    }
    else if (name.length >= 2) {
        return isString.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    }
    return "ERRO NOME"


}

function validaMenu(input, menu, platform) {

    const opcao = menu.itens;

    for (i = 0; i < opcao.length; i++) {
        for (x = 0; x < opcao[i].name.length; x++) {
            if (opcao[i].name[x] == input) {
                return opcao[i].name[0]
            }
        }
    }

    if (platform == 'INSTAGRAM' || platform == 'MESSENGER') {
        return 'ERRO MENU NUMERICO'
    } else {
        return 'ERRO MENU DINAMICO'
    }
}

function validaCep(input) {

    const matchDash = input.match(/^[0-9]{5}-[0-9]{3}$/gm);
    const matchWithoutDash = input.match(/^[0-9]{5}[0-9]{3}$/gm);
    if (!matchDash && !matchWithoutDash) {
        return "ERRO CEP";
    } else {
        if (matchDash) {
            return input.split('-').join('')
        }
        return input;
    }
}

function validaData(input) {

    // Verifica se o input informado está no formato esperado 
    const match = input.match(/^(\d{1,2})\/(\d{1,2})\/\d{4}$/gm);
    if (!match) {
        return "ERRO DATA";
    } else {
        return input;
    };

};

function validaEmail(input) {

    const match = input.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/gm);
    if (!match) {
        return "ERRO EMAIL";
    } else {
        return input;
    }
}

function validaImagem(input, inputType) {

    if (inputType == 'application/vnd.lime.media-link+json') {
        input = JSON.parse(input);
        if (input.type.includes('image')) {
            return input.uri;
        } else {
            return 'ERRO IMAGEM'
        }
    } else {
        return 'ERRO IMAGEM'
    }

}

function validaImagemETexto(input, inputType) {

    if (inputType == 'text/plain') {
        return input;
    } else if (inputType == 'application/vnd.lime.media-link+json') {
        input = JSON.parse(input);
        if (input.type.includes('image')) {
            return input.uri;
        } else {
            return 'ERRO IMAGEM'
        }
    } else {
        return 'ERRO IMAGEM'
    }
}