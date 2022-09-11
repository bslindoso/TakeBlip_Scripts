// APPLY MASK

// <<<<Var of input>>>> 
// input.content

// <<<<var de saida>>>>
// maskInput

// <<<condição>>>

// <<<Script>>>>
// {{resource.FunctionMaskFormat}}

const run = (input) => {
    const validacao = {
        "Cep": false,
        "Telefone": false,
        "Celular": false,
        "CNPJ": false,
        "CPF": false,
        "Data": false,
        "Hora": false,
        "Numero": false,
        "Placa": false
    };

    return setMaskFormat(input, validacao);
};