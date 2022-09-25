function getOptionSelected(input, inputType, list, validacao, intent, listMenu) {
    if (input == null || input == "") {
        return {
            'type': 'Inativo',
            'input': "Inatividade",
            'inputRecognized': 'inactivity'
        };
    }

    if (!isValidInputType(inputType)) {
        return typeInputof(input, inputType);
    }

    if (validateInputIsEmoticons(input)) {
        return {
            'type': 'Emoticons',
            'input': "Input Inesperado",
            'inputRecognized': 'block_return'
        };
    }

    if (validateInputIsLink(input)) {
        return {
            'type': 'Link',
            'input': "Input Inesperado",
            'inputRecognized': 'block_return'
        };
    }

    if (validacao.ValidarIntecao && !validacao.isOptionMenu) {
        if (getIntent(intent)) {
            return {
                'type': 'Intent',
                'input': intent,
                'inputRecognized': 'valid_NLP'
            };
        }
    }

    if (validacao.isIntent) {
        return {
            'type': 'Intencao',
            'input': 'Erro Intencao',
            'inputRecognized': 'invalid_NLP'
        };
    }

    if (validacao.Email) {
        const result = validateEmail(input);

        return {
            'type': 'Email',
            'input': result,
            'inputRecognized': 'validation'
        };
    }

    if (validacao.Cep) {
        const result = validadeCep(input);

        return {
            'type': 'CEP',
            'input': result,
            'inputRecognized': 'validation'
        };
    }

    if (validacao.Telefone) {
        const result = validadeTelefone(input);

        return {
            'type': 'Telefone',
            'input': result,
            'inputRecognized': 'validation'
        };
    }

    if (validacao.Celular) {
        const result = validadeCelular(input);

        return {
            'type': 'Celular',
            'input': result,
            'inputRecognized': 'validation'
        };
    }

    if (validacao.CNPJ) {
        const result = validateCnpj(input);

        return {
            'type': 'CNPJ',
            'input': result,
            'inputRecognized': 'validation'
        };
    }

    if (validacao.CNPJValido) {
        const result = isCnpjValido(input);

        return {
            'type': 'CNPJValido',
            'input': result,
            'inputRecognized': 'validation'
        };
    }

    if (validacao.CPF) {
        const result = validateCpf(input);

        return {
            'type': 'CPF',
            'input': result,
            'inputRecognized': 'validation'
        };
    }

    if (validacao.CPFValido) {
        const result = isCpfValido(input);

        return {
            'type': 'CPFValido',
            'input': result,
            'inputRecognized': 'validation'
        };
    }

    if (validacao.Quantidade) {
        const result = validateQuantidade(input);

        return {
            'type': 'Quantidade',
            'input': result,
            'inputRecognized': 'validation'
        };
    }

    if (validacao.Data) {
        const result = validateData(input);

        return {
            'type': 'Data',
            'input': result,
            'inputRecognized': 'validation'
        };
    }

    const selected = removeUnnecessaryInput(input);

    if (validacao.shortcut) {
        const result = validateInputMenu(selected, listMenu);

        if (result !== false) {
            return {
                'type': 'Shortcut',
                'input': result,
                'inputRecognized': 'shortcut'
            };
        }
    }

    if (validacao.TextoLongos) {
        const text = validateTextLong(input);

        if (text) {
            return {
                'type': 'TextoLongos',
                'input': "Input Inesperado",
                'inputRecognized': 'block_return'
            };
        }
    }

    return getInputInList(selected, list, validacao, intent);
}

function getIntent(intent) {
    if (intent == "" || intent == "null" || intent == null || intent == "None") {
        return false;
    }

    return true;
}

function isValidInputType(inputType) {
    const INPUT_TYPES_ACCEPTED = ['text/plain'];

    return INPUT_TYPES_ACCEPTED.some(
        (type) => type.toLowerCase() === inputType.toString().toLowerCase()
    );
}

function validateInputIsEmoticons(input) {
    if (/[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/.test(input)) {
        const fraseEmojis = input.replace(/[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/g, '*');
        const countEmojis = (fraseEmojis.match(/\*/g) || []).length;
        const fraseSemEmojis = input.replace(/[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/g, '');
        const countFrase = fraseSemEmojis.length;

        if (countEmojis > 0 && countFrase === 0) {
            return true;
        }
        return false;
    }

    return false;
}

function validateInputIsLink(input) {
    if (/^(((https?:\/\/)[^\s.]+|(www))\.[\w][^\s]+)$/.test(input)) {
        return true;
    }

    return false;
}

function typeInputof(input, inputType) {
    if (inputType == 'application/vnd.lime.contact+json') {
        return {
            'type': 'Contatos',
            'input': "Input Inesperado",
            'inputRecognized': 'block_return'
        };
    }

    const optionsRegexType = {
        '(application/octet-stream|image/webp)': 'Figurinhas',
        '(image)': 'Images',
        '(audio)': 'Audios',
        '(video)': 'Videos',
        '(application|text/csv|text/html)': 'Arquivos',
    };

    for (let key in optionsRegexType) {
        const matching = new RegExp(key, 'i');
        if (matching.test(input)) {
            return {
                'type': optionsRegexType[key],
                'input': "Input Inesperado",
                'inputRecognized': 'block_return'
            };
        }
    }
}


function removeUnnecessaryInput(input) {
    const EMPTY_STR = '';
    const UNNECESSARY_INPUT = RegExp('(^0+|\\.0+|^\\s+|\\s+$)', 'gi');
    if (input.length > 1) {
        input = input.replace(UNNECESSARY_INPUT, EMPTY_STR);
    }

    const inputLow = input.toLowerCase();
    const removeEmojis = inputLow.replace(/[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/g, '');
    let selected = replaceSpecialLetters(removeEmojis);

    selected = removeExcessWhiteSpace(selected);

    return removeWhiteSpace(selected);
}

function removeExcessWhiteSpace(input) {
    const SPACE_STR = ' ';
    const WHITE_SPACES = RegExp('(\\s+)', 'gi');

    return input.replace(WHITE_SPACES, SPACE_STR);
}

function removeWhiteSpace(input) {
    const STRING_SPLIT = input.split(' ');

    if (STRING_SPLIT.length > 1) {
        let NEW_STRING = [];

        for (let i = 0; i < STRING_SPLIT.length; i++) {
            const element = STRING_SPLIT[i];

            if (element !== '') {
                NEW_STRING.push(element);
            }
        }

        return NEW_STRING.join(' ');
    }

    return STRING_SPLIT;
}

function validateEmail(value) {
    if (/^[\w+.?:\-]+@\w+\.\w{2,}(?:\.\w{2})?$/gi.test(value)) {
        return true;
    }

    return false;
}

function validadeCep(value) {
    const cep = removeExcessWhiteSpace(value);

    if (/^\d{2}.?\d{3}-?\d{3}$/.test(cep)) {
        return true;
    }

    return false;
}

function validadeTelefone(value) {
    const telefone = removeExcessWhiteSpace(value);

    if (/^\(?[1-9]{2}\)?\s?[2-9]{4}-?[0-9]{4}$/.test(telefone)) {
        return true;
    }

    return false;
}

function validadeCelular(value) {
    const celular = removeExcessWhiteSpace(value);

    if (/\b(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\d|[2-9])\d{3})-?(\d{4}))\b/.test(celular)) {
        return true;
    }

    return false;
}

function validateCpf(value) {
    if (value.match(/0{11}|1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}/g)) {
        return false;
    }

    if (/^\d{3}.?\d{3}.?\d{3}-?\d{2}$/.test(value)) {
        return true;
    }

    return false;
}

function isCpfValido(value) {
    let CPFv = value.replace(/\D/g, "");

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
        return false;
    }

    for (let i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
        v1 += cpf[i] * p;
    }

    v1 = ((v1 * 10) % 11);

    if (v1 == 10) {
        v1 = 0;
    }

    if (v1 != cpf[9]) {
        return false;
    }

    for (let i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
        v2 += cpf[i] * p;
    }

    v2 = ((v2 * 10) % 11);

    if (v2 == 10) {
        v2 = 0;
    }

    if (v2 != cpf[10]) {
        return false;
    } else {
        return true;
    }
}

function validateCnpj(value) {
    if (value.match(/0{14}|1{14}|2{14}|3{14}|4{14}|5{14}|6{14}|7{14}|8{14}|9{14}/g)) {
        return false;
    }

    if (/^\d{2}.?\d{3}.?\d{3}\/?\d{4}-?\d{2}$/.test(value)) {
        return true;
    }

    return false;
}

function isCnpjValido(value) {
    let CNPJv = value.replace(/\D/g, "");

    let cnpj = CNPJv.trim();

    let v1 = 0;
    let v2 = 0;
    let aux = false;

    for (let i = 1; cnpj.length > i; i++) {
        if (cnpj[i - 1] != cnpj[i]) {
            aux = true;
        }
    }

    if (aux == false) {
        return false;
    }

    for (let i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
        if (p1 >= 2) {
            v1 += cnpj[i] * p1;
        } else {
            v1 += cnpj[i] * p2;
        }
    }

    v1 = (v1 % 11);

    if (v1 < 2) {
        v1 = 0;
    } else {
        v1 = (11 - v1);
    }

    if (v1 != cnpj[12]) {
        return false;
    }

    for (let i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) {
        if (p1 >= 2) {
            v2 += cnpj[i] * p1;
        } else {
            v2 += cnpj[i] * p2;
        }
    }

    v2 = (v2 % 11);

    if (v2 < 2) {
        v2 = 0;
    } else {
        v2 = (11 - v2);
    }

    if (v2 != cnpj[13]) {
        return false;
    } else {
        return true;
    }
}

function validateQuantidade(value) {
    let quanti = removeExcessWhiteSpace(value);
    quanti = quanti.replace(/[^0-9]/g, '');

    if (/^[0-9.]+$/.test(quanti)) {
        return true;
    }

    return false;
}

function validateData(value) {
    const data = removeExcessWhiteSpace(value);

    if (/^\d{2}(\/|-)\d{2}(\/|-)\d{4}$/.test(data)) {
        return true;
    }

    return false;
}


function validateTextLong(input, list) {
    const value = input.split(' ');

    if (value.length > 5) {
        return true;
    }

    return false;
}

function normalizeInputMenu(input) {
    return input.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\-]+/g, '').trim().toLowerCase();
}

function replaceSpecialLetters(input) {
    return normalizeInputMenu(input);
}


function validateInputMenu(input, list) {
    input = normalizeInputMenu(input);
    for (i = 0; i < list.length; i++) {
        for (x = 0; x < list[i].name.length; x++) {
            let name = normalizeInputMenu(list[i].name[x]);
            if (input == name) {
                return list[i].name[0];
            }
        };
    }

    return false;
}

function getInputInList(input, list, validacao, intent) {
    input = normalizeInputMenu(input);
    for (i = 0; i < list.length; i++) {
        for (x = 0; x < list[i].name.length; x++) {
            let name = normalizeInputMenu(list[i].name[x]);
            if (input == name) {
                if (validacao.MenuDinamico) {
                    return {
                        'type': 'Dinamico',
                        'input': list[i].name[0],
                        'inputRecognized': 'menu_return'
                    };
                }

                return {
                    'type': 'Menu',
                    'input': list[i].name[0],
                    'inputRecognized': 'menu_return'
                };
            }

        };
    }

    if (getIntent(intent)) {
        return {
            'type': 'Intent',
            'input': intent,
            'inputRecognized': 'valid_NLP'
        };
    }

    if (validacao.MenuDinamico) {
        return {
            'type': 'Dinamico',
            'input': "Input Inesperado",
            'inputRecognized': 'block_return'
        };
    }

    return {
        'type': 'Menu',
        'input': "Input Inesperado",
        'inputRecognized': 'block_return'
    };
   
}