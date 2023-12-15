//FunctionProcessInput
function validaInput(validacoes, input, inputType) {
    let inputValidado;
    for (let i = 0; i < validacoes.length; i++) {
        if (validacoes[i][1]) {
            switch (validacoes[i][0]) {
                case "nome":
                    inputValidado = validaNome(input);
                    break;
                case "email":
                    inputValidado = validaEmail(input);
                    break;
                case "telefone":
                    inputValidado = validaTelefone(input);
                    break;
                case "cep":
                    inputValidado = validaCep(input);
                    break;
                case "data":
                    inputValidado = validaData(input);
                    break;
                case "img":
                    inputValidado = validaImagem(input, inputType);
                    break;
                case "imgVideo":
                    inputValidado = validaImagemEVideo(input, inputType);
                    break;
                case "imgPdf":
                    inputValidado = imgPdf(input, inputType);
                    break;
                case "imgPdfVideo":
                    inputValidado = imgPdfVideo(input, inputType);
                    break;
                case "imgTxt":
                    inputValidado = validaImagemETexto(input, inputType);
                    break;
                case "endereco":
                    inputValidado = validaEndereco(input);
                    break;
                case "moeda":
                    inputValidado = validaMoeda(input);
                    break;
                case "cpf":
                    inputValidado = validaCpf(input);
                    break;
                case "cnpj":
                    inputValidado = validaCnpj(input);
                    break;
                case "cpfcnpj":
                    inputValidado = validaCpfCnpj(input);
                    break;
                case "conta":
                    inputValidado = validaConta(input);
                    break;
                case "imei":
                    inputValidado = validaIMEI(input);
                    break;
                case "chamado":
                    inputValidado = validaChamado(input);
                    break;
                case "numeros":
                case "pessoasenvolvidas":
                case "imagensenviadas":
                case "notasfiscais":
                case "orcamentos":
                case "documentosadicionais":
                    inputValidado = validaNumero(input, validacoes[0][0]);
                    break;
                case "numero1a10":
                    inputValidado = validaNumero1a10(input, validacoes[0][0]);
                    break;
                default:
                    inputValidado = {
                        type: "error",
                        input: "ERRO RESOURCE",
                        validation: "none",
                    };
                    break;
            }
            return inputValidado;
        }
    }
    return { type: "error", input: "INPUT SEM VALIDAÇÕES", validation: "none" };
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
        return { type: 'error', input: 'ERRO NOME', validation: 'nome' }
    }
    else if (isString.includes('ERRO NOME')) {
        return { type: 'error', input: 'ERRO NOME', validation: 'nome' }
    }
    else if (name.length >= 2) {
        let str = isString.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const nomeSucess = arr.join(" ");

        return { type: 'success', input: nomeSucess, validation: 'nome' }
    }
    return { type: 'error', input: 'ERRO NOME', validation: 'nome' }
}
function validaPrimeiroNome(input) {
    const regex = {
        image: /image/,
        audio: /audio/,
        video: /video/,
        emoji:
            /[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/,
        link: /^(((https?:\/\/)[^\s.]+|(www))\.[\w][^\s]+)$/,
        arquivo: /application|text\/csv|text\/html/,
        figurinha: /application\/octet-stream|image\/webp/,
        numero: /[0-9]/,
    };
    let isString = input.replace(/[0-9]/g, "ERRO NOME");
    let name = isString.split(" ");

    if (
        input.match(regex.image) ||
        input.match(regex.audio) ||
        input.match(regex.video) ||
        input.match(regex.emoji) ||
        input.match(regex.figurinha) ||
        input.match(regex.link) ||
        input.match(regex.arquivo) ||
        isString.match(regex.numero)
    ) {
        return { type: "error", input: "ERRO NOME", validation: "nome" };
    } else if (isString.includes("ERRO NOME")) {
        return { type: "error", input: "ERRO NOME", validation: "nome" };
    } else {
        let str = isString
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const nomeSucess = arr.join(" ");

        return { type: "success", input: nomeSucess, validation: "nome" };
    }
}

function validaMenu(input, menu, platform) {
    const opcao = menu.itens;

    for (i = 0; i < opcao.length; i++) {
        for (x = 0; x < opcao[i].name.length; x++) {
            if (opcao[i].name[x] == input) {
                return { type: "success", input: opcao[i].name[0], validation: "menu" };
            }
        }
    }

    if (platform == "INSTAGRAM" || platform == "MESSENGER") {
        return { type: "error", input: "ERRO NUMERICO", validation: "menu" };
    } else {
        return { type: "error", input: "ERRO DINAMICO", validation: "menu" };
    }
}

function validaCep(input) {
    const matchDash = input.match(/^[0-9]{5}-[0-9]{3}$/gm);
    const matchWithoutDash = input.match(/^[0-9]{5}[0-9]{3}$/gm);
    if (!matchDash && !matchWithoutDash) {
        return { type: "error", input: "ERRO CEP", validation: "cep" };
    } else {
        if (matchDash) {
            return {
                type: "success",
                input: input.split("-").join(""),
                validation: "cep",
            };
        }
        return { type: "success", input: input, validation: "cep" };
    }
}

function validaData(input) {
    // Verifica se o input informado está no formato esperado
    const match = input.match(/^(\d{1,2})\/(\d{1,2})\/\d{4}$/gm);
    if (!match) {
        return { type: "error", input: "ERRO DATA", validation: "data" };
    } else {
        return { type: "success", input: input, validation: "data" };
    }
}

function validaEmail(input) {
    input = input.toLowerCase()
    const match = input.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/gm);
    if (!match) {
        return { type: "error", input: "ERRO EMAIL", validation: "email" };
    } else {
        return { type: "success", input: input, validation: "email" };
    }
}

function validaImagem(input, inputType) {
    if (inputType == "application/vnd.lime.media-link+json") {
        input = JSON.parse(input);
        if (input.type.includes("image")) {
            return { type: "success", input: input.uri, validation: "imagem" };
        } else {
            return { type: "error", input: "ERRO IMAGEM", validation: "imagem" };
        }
    } else {
        return { type: "error", input: "ERRO IMAGEM", validation: "imagem" };
    }
}

function validaImagemETexto(input, inputType) {
    const regex = {
        audio: /audio/,
        video: /video/,
        emoji:
            /[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/,
        arquivo: /application|text\/csv|text\/html/,
        figurinha: /application\/octet-stream|image\/webp/,
    };
    if (
        input.match(regex.audio) ||
        input.match(regex.video) ||
        input.match(regex.emoji) ||
        input.match(regex.figurinha) ||
        input.match(regex.arquivo)
    ) {
        return { type: "error", input: "ERRO IMAGEM", validation: "imagem/texto" };
    }

    if (inputType == "text/plain") {
        return { type: "success", input: input, validation: "imagem/texto" };
    } else if (inputType == "application/vnd.lime.media-link+json") {
        input = JSON.parse(input);
        if (input.type.includes("image")) {
            return { type: "success", input: input.uri, validation: "imagem/texto" };
        } else {
            return {
                type: "error",
                input: "ERRO IMAGEM",
                validation: "imagem/texto",
            };
        }
    } else {
        return { type: "error", input: "ERRO IMAGEM", validation: "imagem/texto" };
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


function validaEndereco(input) {
    const regex = {
        image: /image/,
        audio: /audio/,
        video: /video/,
        emoji:
            /[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/,
        link: /^(((https?:\/\/)[^\s.]+|(www))\.[\w][^\s]+)$/,
        arquivo: /application|text\/csv|text\/html/,
        figurinha: /application\/octet-stream|image\/webp/,
        numero: /^[0-9]*$/,
    };

    if (
        input.match(regex.image) ||
        input.match(regex.audio) ||
        input.match(regex.video) ||
        input.match(regex.emoji) ||
        input.match(regex.figurinha) ||
        input.match(regex.link) ||
        input.match(regex.arquivo) ||
        input.match(regex.numero)
    ) {
        return { type: "error", input: "ERRO ENDERECO", validation: "endereco" };
    }
    return { type: "success", input: input, validation: "endereco" };
}

// TRABALHAR O VALIDA MOEDA
function validaMoeda(input) {
    if (input != "") {
        let valor = input.match(/^(R\$)?\ ?[0-9]*,?[0-9]{2}?$/gm);

        if (valor != null) {
            if (valor[0].includes("R$")) {
                valor = valor[0].replace("R$ ", "R$");
                valor = valor.replace("R$", "R$ ");
            } else {
                valor = `R$ ${valor[0]}`;
            }

            if (!valor.includes(",")) {
                valor = `${valor},00`;
            }

            return { type: "success", input: valor, validation: "moeda" };
        }
        return { type: "error", input: "ERRO MOEDA", validation: "moeda" };
    }
    return { type: "error", input: "ERRO MOEDA", validation: "moeda" };
}

function validaCpf(input) {
    let CPFv = input.replace(/\D/g, "");

    let cpf = CPFv.trim();

    let v1 = 0;
    let v2 = 0;
    let aux = false;

    for (let i = 1; cpf.length > i; i++) {
        if (cpf[i - 1] != cpf[i]) {
            aux = true;
        }
    }

    if (aux == false) {
        return { type: "error", input: "ERRO CPF", validation: "cpf" };
    }

    for (let i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
        v1 += cpf[i] * p;
    }

    v1 = ((v1 * 10) % 11);

    if (v1 == 10) {
        v1 = 0;
    }

    if (v1 != cpf[9]) {
        return { type: "error", input: "ERRO CPF", validation: "cpf" };
    }

    for (let i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
        v2 += cpf[i] * p;
    }

    v2 = ((v2 * 10) % 11);

    if (v2 == 10) {
        v2 = 0;
    }

    if (v2 != cpf[10]) {
        return { type: "error", input: "ERRO CPF", validation: "cpf" };
    } else {
        return { type: "success", input: cpf, validation: "cpf" };
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

function validaConta(numConta) {
    if (/^([0-9]{5}[-]?[0-9]{1})$|(^[0-9]{4}[-]?[0-9]{1})$|(^[0-9]{3}[-]?[0-9]{1})$/.test(numConta)) {
        return { type: "success", input: numConta, validation: "conta" };

    }
    return { type: "error", input: "ERRO CONTA", validation: "conta" };
}

function validaTelefone(telefone) {
    let regex = /^(\(?[0-9]{2}(\)|-)?) ?([0-9]{1})?[0-9]{4}(-| )?[0-9]{4}/gm;
    let match = telefone.match(regex);

    if (match) {
        //Remove espaços
        telefone = telefone.replace(" ", "");
        telefone = telefone.replace("(", "");
        telefone = telefone.replace(")", "");
        telefone = telefone.replace("-", "");
        telefone = telefone.replace("-", "");
        telefone = telefone.replace("-", "");

        let ddd = `(${telefone.slice(0, 2)})`;
        let numero = telefone.slice(2);

        //Formata para novo padrão
        if (numero.length == 8) {
            numero = `${numero.slice(0, 4)}-${numero.slice(4)}`;
        } else if (numero.length == 9) {
            numero = `${numero.slice(0, 5)}-${numero.slice(5)}`;
        } else {
            return { type: "error", input: "ERRO TELEFONE", validation: "telefone" };
        }
        const telefoneFormatado = ddd + numero;

        return {
            type: "success",
            input: telefone,
            validation: "telefone",
            inputFormatado: telefoneFormatado,
        };
    } else {
        return { type: "error", input: "ERRO TELEFONE", validation: "telefone" };
    }
}

function validaIMEI(s) {
    var etal = /^[0-9]{15}$/;
    if (!etal.test(s))
        return { type: "error", input: "ERROR IMEI", validation: "imei" };
    sum = 0; mul = 2; l = 14;
    for (i = 0; i < l; i++) {
        digit = s.substring(l - i - 1, l - i);
        tp = parseInt(digit, 10) * mul;
        if (tp >= 10)
            sum += (tp % 10) + 1;
        else
            sum += tp;
        if (mul == 1)
            mul++;
        else
            mul--;
    }
    chk = ((10 - (sum % 10)) % 10);
    if (chk != parseInt(s.substring(14, 15), 10))
        return { type: "error", input: "ERROR IMEI", validation: "imei" };
    return { type: "success", input: s, validation: "imei" };
}

function validaChamado(input) {
    if (input != "") {
        let valor = input.match(/^[1-9][0-9]{0,5}$/gm);

        if (valor != null) {
            return { type: "success", input: valor, validation: "chamado" };
        }
        return { type: "error chamado", input: "ERRO CHAMADO", validation: "chamado" };
    }
    return { type: "error chamado", input: "ERRO CHAMADO", validation: "chamado" };
}

function validaNumero(input, validation) {
    let regex = /^[0-9]*$/
    let match = input.match(regex);

    if (match) {
        return { type: "success", input: input, validation }
    }

    return { type: "error", input: "ERRO NUMEROS", validation };
}

function imgPdf(input, inputType) {

    const regex = {
        "audio": /audio/,
        "emoji": /[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/,
        "arquivo": /text\/csv|text\/html/,
        "figurinha": /application\/octet-stream|image\/webp/,
    }

    if (inputType == 'text/plain') {
        return { type: 'error', input: "ERRO IMAGEM E PDF", validation: 'imagem/pdf' };
    } else if (inputType == 'application/vnd.lime.media-link+json') {
        input = JSON.parse(input);

        if (input.size > 20000000) {
            return { type: 'error', input: "ERRO IMAGEM E PDF", validation: 'imagem/pdf' };
        }
        else if (input.type.includes('image')) {
            return { type: 'success', input: input.uri, validation: 'imagem/pdf' };
        } else if (input.type.includes('pdf')) {
            return { type: 'success', input: input.uri, validation: 'imagem/pdf' };
        }

    } else {
        return { type: 'error', input: 'ERRO IMAGEM E PDF', validation: 'imagem/pdf' }
    }

    if (input.match(regex.audio) || input.match(regex.emoji) || input.match(regex.figurinha) || input.match(regex.arquivo)) {
        return { type: 'error', input: 'ERRO IMAGEM E PDF', validation: 'imagem/pdf' }
    }
}

function imgPdfVideo(input, inputType) {

    const regex = {
        "audio": /audio/,
        "emoji": /[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/,
        "arquivo": /text\/csv|text\/html/,
        "figurinha": /application\/octet-stream|image\/webp/,
    }

    if (inputType == 'text/plain') {
        return { type: 'error', input: "ERRO IMAGEM PDF VIDEO", validation: 'imagem/pdf/video' };
    } else if (inputType == 'application/vnd.lime.media-link+json') {
        input = JSON.parse(input);

        if (input.size > 20000000) {
            return { type: 'error', input: "ERRO IMAGEM PDF VIDEO", validation: 'imagem/pdf/video' };
        }
        else if (input.type.includes('image')) {
            return { type: 'success', input: input.uri, validation: 'imagem/pdf/video' };
        } else if (input.type.includes('video')) {
            return { type: 'success', input: input.uri, validation: 'imagem/pdf/video' };
        } else if (input.type.includes('pdf')) {
            return { type: 'success', input: input.uri, validation: 'imagem/pdf/video' };
        }

    } else {
        return { type: 'error', input: 'ERRO IMAGEM PDF VIDEO', validation: 'imagem/pdf/video' }
    }

    if (input.match(regex.audio) || input.match(regex.emoji) || input.match(regex.figurinha) || input.match(regex.arquivo)) {
        return { type: 'error', input: 'ERRO IMAGEM PDF VIDEO', validation: 'imagem/pdf/video' }
    }
}

function validaNumero1a10(input, validation) {
    let regex = /^[0-9]*$/
    let match = input.match(regex);

    if (match) {
        if (input <= 0 || input > 10) {
            return { type: "error", input: "ERRO NUMEROS", validation };
        }
        return { type: "success", input: input, validation }
    }

    return { type: "error", input: "ERRO NUMEROS", validation };
}