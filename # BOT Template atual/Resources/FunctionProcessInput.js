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
                    inputValidado = validaCpfComCalculo(input);
                    break;
                case "cnpj":
                    inputValidado = validaCnpj(input);
                    break;
                case "cpfcnpj":
                    inputValidado = validaCPFeCNPJcomCalculo(input);
                    break;
                case "alfaNumerico":
                    inputValidado = validaAlfaNumerico(input);
                    break;
                case "imgVideo":
                    inputValidado = validaImagemEVideo(input, inputType);
                    break;
                case "diaSemana":
                    inputValidado = validaDiaSemana(input);
                    break;
                case "nota":
                    inputValidado = validaNota0a10(input);
                    break;
                case "localizacao":
                    inputValidado = validaLocalizacao(input);
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

function validaCpfComCalculo(cpf) {
    let CPFv = cpf.replace(/\D/g, "");

    let cpfvalido = CPFv.trim();

    let v1 = 0;
    let v2 = 0;
    let aux = false;

    for (let i = 1; cpfvalido.length > i; i++) {
        if (cpfvalido[i - 1] != cpfvalido[i]) {
            aux = true;
        }
    }

    if (aux == false) {
        return { type: 'error', input: 'ERRO CPF', validation: 'cpf' }
    }

    for (let i = 0, p = 10; (cpfvalido.length - 2) > i; i++, p--) {
        v1 += cpfvalido[i] * p;
    }

    v1 = ((v1 * 10) % 11);

    if (v1 == 10) {
        v1 = 0;
    }

    if (v1 != cpfvalido[9]) {
        return { type: 'error', input: 'ERRO CPF', validation: 'cpf' }
    }

    for (let i = 0, p = 11; (cpfvalido.length - 1) > i; i++, p--) {
        v2 += cpfvalido[i] * p;
    }

    v2 = ((v2 * 10) % 11);

    if (v2 == 10) {
        v2 = 0;
    }

    if (v2 != cpfvalido[10]) {
        return { type: 'error', input: 'ERRO CPF', validation: 'cpf' }
    } else {
        return { type: 'success', input: cpfvalido, validation: 'cpf' }
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

function validaCPFeCNPJcomCalculo(doc) {

    // FUNÇÃO QUE CALCULA O CPF
    const calculaCpf = (cpf) => {
        cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
        if (cpf.length !== 11) return false;

        // Verifica se todos os dígitos são iguais (caso inválido)
        if (/^(\d)\1+$/.test(cpf)) return false;

        // Calcula o primeiro dígito verificador
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let remainder = 11 - (sum % 11);
        let digit1 = (remainder >= 10) ? 0 : remainder;

        // Calcula o segundo dígito verificador
        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf.charAt(i)) * (11 - i);
        }
        remainder = 11 - (sum % 11);
        let digit2 = (remainder >= 10) ? 0 : remainder;

        // Verifica se os dígitos calculados são iguais aos dígitos informados
        return cpf.endsWith(digit1.toString() + digit2.toString());
    }

    // FUNÇÃO QUE CALCULA O CNPJ
    const calculaCnpj = (cnpj) => {
        cnpj = cnpj.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
        if (cnpj.length !== 14) return false;

        // Verifica se todos os dígitos são iguais (caso inválido)
        if (/^(\d)\1+$/.test(cnpj)) return false;

        // Calcula o primeiro dígito verificador
        let sum = 0;
        let weight = 5;
        for (let i = 0; i < 12; i++) {
            sum += parseInt(cnpj.charAt(i)) * weight;
            weight = (weight === 2) ? 9 : weight - 1;
        }
        let remainder = sum % 11;
        let digit1 = (remainder < 2) ? 0 : 11 - remainder;

        // Calcula o segundo dígito verificador
        sum = 0;
        weight = 6;
        for (let i = 0; i < 13; i++) {
            sum += parseInt(cnpj.charAt(i)) * weight;
            weight = (weight === 2) ? 9 : weight - 1;
        }
        remainder = sum % 11;
        let digit2 = (remainder < 2) ? 0 : 11 - remainder;

        // Verifica se os dígitos calculados são iguais aos dígitos informados
        return cnpj.endsWith(digit1.toString() + digit2.toString());
    }

    jsonDoc = {
        "sizeValid": false,
        "docType": "Não Identificado",
        "docValid": false,
        "error": false
    }

    while (doc.search(/\./) != -1) {
        doc = doc.replace(/\./, "")
    }
    while (doc.search("/") != -1) {
        doc = doc.replace("/", "")
    }
    while (doc.search("-") != -1) {
        doc = doc.replace("-", "")
    }

    regexDoc = /^(\d{11}|\d{14})$/;

    docSizeTest = regexDoc.test(doc)

    if (docSizeTest == true && doc.length == 11) {
        jsonDoc.sizeValid = true
        jsonDoc.docType = "CPF"
        validDoc = calculaCpf(doc)
        jsonDoc.docValid = validDoc
    }

    else if (docSizeTest == true && doc.length == 14) {
        jsonDoc.sizeValid = true
        jsonDoc.docType = "CNPJ"
        validDoc = calculaCnpj(doc)
        jsonDoc.docValid = validDoc
    }
    // FORMATA OS VALORES
    let formattedDoc
    if (jsonDoc.docType == 'CPF' && jsonDoc.docValid == true) {
        formattedDoc = doc.split('')
        formattedDoc.splice(3, 0, '.')
        formattedDoc.splice(7, 0, '.')
        formattedDoc.splice(11, 0, '-')
        formattedDoc = formattedDoc.join('')
    }
    if (jsonDoc.docType == 'CNPJ' && jsonDoc.docValid == true) {
        formattedDoc = doc.split('')
        formattedDoc.splice(2, 0, '.')
        formattedDoc.splice(6, 0, '.')
        formattedDoc.splice(10, 0, '/')
        formattedDoc.splice(15, 0, '-')
        formattedDoc = formattedDoc.join('')
    }

    //
    if (jsonDoc.docValid == true) {
        return { type: "success", input: doc, validation: "cpfcnpj", inputFormatado: formattedDoc }
    } else {
        return { type: "error", input: "ERRO CPF CNPJ", validation: "cpfcnpj" }
    }
}

function validaTelefone(telefone) {

    let regex = /^(\(?[0-9]{2}(\)|-)?) ?([0-9]{1})? ?[0-9]{4}(-| )?[0-9]{4}/gm;
    let match = telefone.match(regex)

    if (match) {
        //Remove espaços
        while (telefone.search(' ') != -1) {
            telefone = telefone.replace(' ', '')
        }
        while (telefone.search('\\)') != -1) {
            telefone = telefone.replace(')', '')
        }
        while (telefone.search('\\(') != -1) {
            telefone = telefone.replace('(', '')
        }
        while (telefone.search('-') != -1) {
            telefone = telefone.replace('-', '')
        }

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
function validaAlfaNumerico(input) {
    const regex = /^[A-Za-z0-9]*$/
    const match = input.match(regex)

    if (match) {
        return { type: 'success', input: input, validation: 'alfaNumérico' }
    } else {
        return { type: 'error', input: 'ERRO ALFA NUMERICO', validation: 'alfaNumérico' }
    }
}

function validaImagemEVideo(input, inputType) {

    const regex = {
        "audio": /audio/,
        "emoji": /[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/,
        "arquivo": /application|text\/csv|text\/html/,
        "figurinha": /application\/octet-stream|image\/webp/,
    }
    if (input.match(regex.audio) || input.match(regex.emoji) || input.match(regex.figurinha) || input.match(regex.arquivo)) {
        return { type: 'error', input: 'ERRO IMAGEM E VIDEO', validation: 'imagem/video' }
    }

    if (inputType == 'text/plain') {
        return { type: 'error', input: "ERRO IMAGEM E VIDEO", validation: 'imagem/video' };
    } else if (inputType == 'application/vnd.lime.media-link+json') {
        input = JSON.parse(input);
        if (input.type.includes('image')) {
            return { type: 'success', input: input.uri, validation: 'imagem/video' };
        } else if (input.type.includes('video')) {
            return { type: 'success', input: input.uri, validation: 'imagem/video' };
        } else {
            return { type: 'error', input: 'ERRO IMAGEM E VIDEO', validation: 'imagem/video' }
        }
    } else {
        return { type: 'error', input: 'ERRO IMAGEM E VIDEO', validation: 'imagem/video' }
    }
}

// Esta função recebe uma entrada de texto e valida se corresponde a um dia da semana em português.
function validaDiaSemana(input) {
    // Expressões regulares para cada dia da semana em português.
    const regexDomingo = /^(dom(?:.|i?n?go)?|d[oô]m(?:.|i?n?go)?|\d?\d[oô]m(?:.|i?n?g?o)?|do|min|\d?\d[oô](?:\.|d?o)?|0[1-7])$/i;
    const regexSegunda = /^(segunda(-|\s|.|,)?(feira)?|2(.ª)?(\s|-)?feira)$/i;
    const regexTerca = /^(terça(-|\s|.|,)?(feira)?|3(.ª)?(\s|-)?feira)$/i;
    const regexQuarta = /^(quarta(-|\s|.|,)?(feira)?|4(.ª)?(\s|-)?feira)$/i;
    const regexQuinta = /^(quinta(-|\s|.|,)?(feira)?|5(.ª)?(\s|-)?feira)$/i;
    const regexSexta = /^(sexta(-|\s|.|,)?(feira)?|6(.ª)?(\s|-)?feira)$/i;
    const regexSabado = /^(s[aáà]b(?:.|a?do)?|s[aáà]d[oô]|\d?\d[oô](?:\.|s?)[\s.]*)$/i;

    // Inicializa um objeto JSON com valores padrão para indicar um erro.
    let jsonReturn = {
        type: "error",
        input: "ERRO INPUT",
        validation: "dayOfWeek",
    }

    // Verifica se o input corresponde a um dos dias da semana e atualiza o objeto JSON em caso de sucesso.
    if (regexDomingo.test(input) == true) {
        jsonReturn.type = "success";
        jsonReturn.input = "Domingo";
    }
    else if (regexSegunda.test(input) == true) {
        jsonReturn.type = "success";
        jsonReturn.input = "Segunda-Feira";
    }
    else if (regexTerca.test(input) == true) {
        jsonReturn.type = "success";
        jsonReturn.input = "Terça-Feira";
    }
    else if (regexQuarta.test(input) == true) {
        jsonReturn.type = "success";
        jsonReturn.input = "Quarta-Feira";
    }
    else if (regexQuinta.test(input) == true) {
        jsonReturn.type = "success";
        jsonReturn.input = "Quinta-Feira";
    }
    else if (regexSexta.test(input) == true) {
        jsonReturn.type = "success";
        jsonReturn.input = "Sexta-Feira";
    }
    else if (regexSabado.test(input) == true) {
        jsonReturn.type = "success";
        jsonReturn.input = "Sábado";
    }

    // Retorna o objeto JSON que indica o resultado da validação.
    return jsonReturn;
}

function validaNota0a10(nota) {
    try {
        nota = parseInt(nota)
        if (nota >= 0 && nota <= 10) {
            return { type: 'success', input: nota, validation: 'nota' }
        } else {
            return { type: 'error', input: 'ERRO NOTA', validation: 'nota' }
        }
    } catch (e) {
        return { type: 'error', input: 'ERRO NOTA', validation: 'nota' }
    }
}

function validaLocalizacao(input) {
    try {
        input = JSON.parse(input)

        let {
            latitude,
            longitude
        } = input

        // Latitude must be a number between -90 and 90
        const isLatitude = num => isFinite(num) && Math.abs(num) <= 90;
        // Longitude must a number between -180 and 180
        const isLongitude = num => isFinite(num) && Math.abs(num) <= 180;


        if (isLatitude(latitude) && isLongitude(longitude)) {
            return {
                type: 'success',
                input: JSON.stringify(input),
                validation: 'localizacao'
            };
        } else {

            return {
                type: 'error',
                input: 'ERRO LOCALIZACAO',
                validation: 'localizacao'
            };
        }
    } catch (error) {
        return {
            type: 'error',
            input: 'ERRO LOCALIZACAO',
            validation: 'localizacao'
        };
    }
}