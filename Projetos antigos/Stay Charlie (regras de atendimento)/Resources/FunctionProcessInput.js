function validaMenu(input, menu, platform) {

    const opcao = menu.itens;

    for (i = 0; i < opcao.length; i++) {
        for (x = 0; x < opcao[i].name.length; x++) {
            if (opcao[i].name[x] == input) {
                return { type: 'success', input: opcao[i].name[0], validation: 'menu' }
            }
        }
    }

    if (platform == 'INSTAGRAM' || platform == 'MESSENGER') {
        return { type: 'error', input: 'ERRO NUMERICO', validation: 'menu' }
    } else {
        return { type: 'error', input: 'ERRO DINAMICO', validation: 'menu' }
    }
}

function validaInput(validacoes, input, inputType) {
    let inputValidado;
    for (let i = 0; i < validacoes.length; i++) {
        if (validacoes[i][1]) {
            switch (validacoes[i][0]) {
                case 'primeiroNome':
                    inputValidado = validaPrimeiroNome(input);
                    break;
                case 'nomeCompleto':
                    inputValidado = validaNomeCompleto(input);
                    break;
                case 'email':
                    inputValidado = validaEmail(input);
                    break;
                case 'telefone':
                    inputValidado = validaTelefone(input);
                    break;
                case 'numeroInteiro':
                    inputValidado = validaNumeroInteiro(input);
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
                case 'endereco':
                    inputValidado = validaEndereco(input);
                    break;
                case 'moeda':
                    inputValidado = validaMoeda(input);
                    break;
                case 'cpf':
                    inputValidado = validaCpf(input);
                    break;
                case "cnpj":
                    inputValidado = validaCnpj(input);
                    break;
                case "cpfcnpj":
                    inputValidado = validaCpfCnpj(input);
                    break;
                case "reserva":
                    inputValidado = validaReserva(input);
                    break;
                default:
                    inputValidado = { type: 'error', input: 'ERRO RESOURCE', validation: 'none' };
                    break;
            }
            return inputValidado;
        }
    }
    return { type: 'error', input: 'INPUT SEM VALIDAÇÕES', validation: 'none' }
}

function validaPrimeiroNome(input) {
    input = input.trim()

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

    console.log(name)

    if (input.match(regex.image) || input.match(regex.audio) || input.match(regex.video) || input.match(regex.emoji) || input.match(regex.figurinha) || input.match(regex.link) || input.match(regex.arquivo) || isString.match(regex.numero)) {
        return { type: 'error', input: 'ERRO NOME', validation: 'primeiroNome' }
    }
    else if (isString.includes('ERRO NOME')) {
        return { type: 'error', input: 'ERRO NOME', validation: 'primeiroNome' }
    }
    else if (name.length >= 2) {
        return { type: 'error', input: 'ERRO NOME', validation: 'primeiroNome' }
    } else {
        let str = isString.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const nomeSucess = arr.join(" ");

        return { type: 'success', input: nomeSucess, validation: 'primeiroNome' }
    }
}

function validaNomeCompleto(input) {

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
        return { type: 'error', input: 'ERRO NOME', validation: 'nomeCompleto' }
    }
    else if (isString.includes('ERRO NOME')) {
        return { type: 'error', input: 'ERRO NOME', validation: 'nomeCompleto' }
    }
    else if (name.length >= 2) {
        let str = isString.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const nomeSucess = arr.join(" ");

        return { type: 'success', input: nomeSucess, validation: 'nomeCompleto' }
    }
    return { type: 'error', input: 'ERRO NOME', validation: 'nomeCompleto' }
}

function validaNumeroInteiro(input) {
    const match = input.match(/^[0-9]+$/gm);

    if (!match) {
        return { type: 'error', input: 'ERRO NUMERO INTEIRO', validation: 'numeroInteiro' };
    } else {
        return { type: 'success', input: input, validation: 'numeroInteiro' };
    };
};

function validaCep(input) {

    const matchDash = input.match(/^[0-9]{5}-[0-9]{3}$/gm);
    const matchWithoutDash = input.match(/^[0-9]{5}[0-9]{3}$/gm);
    if (!matchDash && !matchWithoutDash) {
        return { type: 'error', input: 'ERRO CEP', validation: 'cep' };
    } else {
        if (matchDash) {
            return { type: 'success', input: input.split('-').join(''), validation: 'cep' }
        }
        return { type: 'success', input: input, validation: 'cep' };
    }
}

function validaData(input) {
    // Verifica se o input informado está no formato esperado 
    const match = input.match(/^(\d{1,2})\/(\d{1,2})\/\d{4}$/gm);

    if (!match) {
        return { type: 'error', input: 'ERRO DATA', validation: 'data' };
    } else {
        const dia = parseInt(match[0].split('/')[0])
        const mes = parseInt(match[0].split('/')[1])
        const ano = parseInt(match[0].split('/')[2])
        const data = new Date(`${ano}-${mes}-${dia}`)
        const dataMes = data.toString().split(' ')[1]
        const meses = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        // Valida se o mês da data é igual ao mês inputado (corrigir conversão automática 31/02 para 02/03)
        if (data == 'Invalid Date' || dataMes !== meses[mes - 1]) {
            return { type: 'error', input: 'ERRO DATA', validation: 'data' };
        }
        return { type: 'success', input: input, validation: 'data' };
    };
};

function validaEmail(input) {

    input = input.toLowerCase()

    const match = input.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/gm);
    if (!match) {
        return { type: 'error', input: 'ERRO EMAIL', validation: 'email' };
    } else {
        return { type: 'success', input: input, validation: 'email' };
    }
}

function validaImagem(input, inputType) {

    if (inputType == 'application/vnd.lime.media-link+json') {
        input = JSON.parse(input);
        if (input.type.includes('image')) {
            return { type: 'success', input: input.uri, validation: 'imagem' };
        } else {
            return { type: 'error', input: 'ERRO IMAGEM', validation: 'imagem' }
        }
    } else {
        return { type: 'error', input: 'ERRO IMAGEM', validation: 'imagem' }
    }
}

function validaImagemETexto(input, inputType) {

    const regex = {
        "audio": /audio/,
        "video": /video/,
        "emoji": /[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/,
        "arquivo": /application|text\/csv|text\/html/,
        "figurinha": /application\/octet-stream|image\/webp/,
    }
    if (input.match(regex.audio) || input.match(regex.video) || input.match(regex.emoji) || input.match(regex.figurinha) || input.match(regex.arquivo)) {
        return { type: 'error', input: 'ERRO IMAGEM', validation: 'imagem/texto' }
    }

    if (inputType == 'text/plain') {
        return { type: 'success', input: input, validation: 'imagem/texto' };
    } else if (inputType == 'application/vnd.lime.media-link+json') {
        input = JSON.parse(input);
        if (input.type.includes('image')) {
            return { type: 'success', input: input.uri, validation: 'imagem/texto' };
        } else {
            return { type: 'error', input: 'ERRO IMAGEM', validation: 'imagem/texto' }
        }
    } else {
        return { type: 'error', input: 'ERRO IMAGEM', validation: 'imagem/texto' }
    }
}

function validaEndereco(input) {

    const regex = {
        "image": /image/,
        "audio": /audio/,
        "video": /video/,
        "emoji": /[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/,
        "link": /^(((https?:\/\/)[^\s.]+|(www))\.[\w][^\s]+)$/,
        "arquivo": /application|text\/csv|text\/html/,
        "figurinha": /application\/octet-stream|image\/webp/,
        "numero": /^[0-9]*$/
    }

    if (input.match(regex.image) || input.match(regex.audio) || input.match(regex.video) || input.match(regex.emoji) || input.match(regex.figurinha) || input.match(regex.link) || input.match(regex.arquivo) || input.match(regex.numero)) {
        return { type: 'error', input: 'ERRO ENDERECO', validation: 'endereco' }
    }
    return { type: 'success', input: input, validation: 'endereco' }
}

// TRABALHAR O VALIDA MOEDA
function validaMoeda(input) {

    if (input != '') {
        let valor = input.match(/^(R\$)?\ ?[0-9]*,?[0-9]{2}?$/gm);

        if (valor != null) {

            if (valor[0].includes('R$')) {
                valor = valor[0].replace('R$ ', 'R$');
                valor = valor.replace('R$', 'R$ ');
            } else {
                valor = `R$ ${valor[0]}`
            }

            if (!valor.includes(',')) {
                valor = `${valor},00`
            }

            return { type: 'success', input: valor, validation: 'moeda' };
        }
        return { type: 'error', input: 'ERRO MOEDA', validation: 'moeda' };
    }
    return { type: 'error', input: 'ERRO MOEDA', validation: 'moeda' };
}

function validaCpf(cpf) {
    let regex = /^\d{3}(\.)?\d{3}(\.)?\d{3}(\-)?\d{2}$/gm;
    let match = cpf.match(regex)

    if (match) {

        cpf = cpf.replace(/[^\d]+/g, '');

        // Remove alguns CPF's inválidos conhecidos
        if (cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999") {
            return { type: 'error', input: 'ERRO CPF', validation: 'cpf' }
        }
        return { type: 'success', input: cpf, validation: 'cpf' }

    } else {
        return { type: 'error', input: 'ERRO CPF', validation: 'cpf' }
    }
}

function validaCnpj(input) {
    let regex = /(^\d{2}(\.)?\d{3}(\.)?\d{3}(\/)?\d{4}(\-)?\d{2}$)/
    let match = input.match(regex);

    if (match) {

        input = input.replace(/[^\d]+/g, "");
        return { type: "success", input: input, validation: "cnpj" }
    }
    return { type: "error", input: "ERRO CNPJ", validation: "cnpj" };
}

function validaCpfCnpj(input) {
    let regex = /(^\d{3}(\.)?\d{3}(\.)?\d{3}(\-)?\d{2}$)|(^\d{2}(\.)?\d{3}(\.)?\d{3}(\/)?\d{4}(\-)?\d{2}$)/
    let match = input.match(regex);

    if (match) {

        input = input.replace(/[^\d]+/g, "");
        return { type: "success", input: input, validation: "cpfcnpj" }
    }
    return { type: "error", input: "ERRO CPF CNPJ", validation: "cpfcnpj" };
}

function validaTelefone(telefone) {

    let regex = /^(\(?[0-9]{2}(\)|-)?) ?([0-9]{1})?[0-9]{4}(-| )?[0-9]{4}/gm;
    let match = telefone.match(regex)

    if (match) {
        //Remove espaços
        telefone = telefone.replace(' ', '')
        telefone = telefone.replace('(', '')
        telefone = telefone.replace(')', '')
        telefone = telefone.replace('-', '')
        telefone = telefone.replace('-', '')
        telefone = telefone.replace('-', '')

        let ddd = `(${telefone.slice(0, 2)})`
        let numero = telefone.slice(2)

        //Formata para novo padrão
        if (numero.length == 8) {
            numero = `${numero.slice(0, 4)}-${numero.slice(4)}`
        } else if (numero.length == 9) {
            numero = `${numero.slice(0, 5)}-${numero.slice(5)}`
        } else {
            return { type: 'error', input: 'ERRO TELEFONE', validation: 'telefone' }
        }
        const telefoneFormatado = ddd + numero;

        return { type: 'success', input: telefone, validation: 'telefone', inputFormatado: telefoneFormatado }

    } else {
        return { type: 'error', input: 'ERRO TELEFONE', validation: 'telefone' }
    }
}

// Valida input apenas letras e números
function validaReserva(input) {
    const regex = /^[A-Za-z0-9]*$/
    const match = input.match(regex)

    if (match) {
        return { type: 'success', input: input, validation: 'reserva' }
    } else {
        return { type: 'error', input: 'ERRO RESERVA', validation: 'reserva' }
    }
}