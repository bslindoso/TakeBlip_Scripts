// FunctionMaskFormat

function setMaskFormat(input, validation) {
    const commonRegex = [{
        'regex': /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        'charRemove': /\.|\-|\/|\s+/g,
        'mask': "$1.$2.$3/$4-$5",
        'value': 'CNPJ'
    },
    {
        'regex': /(\d{3})(\d{3})(\d{3})(\d{2})/,
        'charRemove': /\.|\-|\s+/g,
        'mask': "$1.$2.$3-$4",
        'value': 'CPF'
    },
    {
        'regex': /(\d{2})(\d{3})(\d{3})/,
        'charRemove': /\.|\-|\s+/g,
        'mask': "$1.$2-$3",
        'value': 'CEP'
    },
    {
        'regex': /(\d{2})(\d{4})(\d{4})/,
        'charRemove': /\.|\-|\s+/g,
        'mask': "+55 ($1) $2-$3",
        'value': 'TELEFONE'
    },
    {
        'regex': /(\d{2})(\d{1})(\d{4})(\d{4})/,
        'charRemove': /\.|\-|\s+/g,
        'mask': "+55 ($1) $2 $3-$4",
        'value': 'CELULAR'
    },
    {
        'regex': /(\d{2})(\d{2})(\d{2})/,
        'charRemove': /\.|\-|\/|\s+/g,
        'mask': "$1/$2/$3",
        'value': 'DATA'
    },
    {
        'regex': /(\d{2})(\d{2})(\d{2})/,
        'charRemove': /\.|\-|\:|\s+/g,
        'mask': "$1:$2:$3",
        'value': 'HORA'
    },
    {
        'regex': /(\w{3})(\w{4})/,
        'charRemove': /\.|\-|\s+/g,
        'mask': "$1 $2",
        'value': 'PLACA'
    },
    {
        'regex': /(\d)/,
        'charRemove': /\.|\-|\s+/g,
        'mask': "$1",
        'value': 'NUMERO'
    }
    ];

    if (validation.CNPJ) {
        return getMaskFormat(input, 'CNPJ', commonRegex);
    }

    if (validation.CPF) {
        return getMaskFormat(input, 'CPF', commonRegex);
    }

    if (validation.Cep) {
        return getMaskFormat(input, 'CEP', commonRegex);
    }

    if (validation.Telefone) {
        return getMaskFormat(input, 'TELEFONE', commonRegex);
    }

    if (validation.Celular) {
        return getMaskFormat(input, 'CELULAR', commonRegex);
    }

    if (validation.Data) {
        return getMaskFormat(input, 'DATA', commonRegex);
    }

    if (validation.Hora) {
        return getMaskFormat(input, 'HORA', commonRegex);
    }

    if (validation.Placa) {
        const placa = input.toUpperCase();
        return getMaskFormat(placa, 'PLACA', commonRegex);
    }

    if (validation.Numero) {
        const number = input.replace(/[^0-9]/g, '');
        return getMaskFormat(number, 'NUMERO', commonRegex);
    }
}

function getMaskFormat(input, typeMask, regex) {
    for (let i = 0; i < regex.length; i++) {
        if (regex[i].value === typeMask) {
            const element = input.replace(regex[i].charRemove, '');

            return element.replace(regex[i].regex, regex[i].mask);
        }
    }
}