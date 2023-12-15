function validaInput(validacoes, input, inputType) {
    let inputValidado;
    for (let i = 0; i < validacoes.length; i++) {
        if (validacoes[i][1]) {
            switch (validacoes[i][0]) {
                case 'data':
                    inputValidado = validaData(input);
                    break;
                case 'nota':
                    inputValidado = validaNota(input);
                    break;
                default:
                    inputValidado = { type: 'error', input: 'ERRO INESPERADO', validation: 'none' };
                    break;
            }
            return inputValidado;
        }
    }
    return { type: 'error', input: 'INPUT SEM VALIDAÇÕES', validation: 'none' }
}

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
        return { type: 'error', input: 'ERRO MENU NUMERICO', validation: 'menu' }
    } else {
        return { type: 'error', input: 'ERRO MENU DINAMICO', validation: 'menu' }
    }
}

function validaData(input) {

    // Verifica se o input informado está no formato esperado 
    const match = input.match(/^(\d{1,2})\/(\d{1,2})\/\d{4}$/gm);
    if (!match) {
        return { type: 'error', input: 'ERRO DATA', validation: 'data' };
    } else {
        return { type: 'success', input: input, validation: 'data' };
    };
};

function validaNota(input) {

    const nota = input.match(/^(([0-9]{1})||(10))$/gm);

    if (!nota) {
        return { type: 'error', input: 'ERRO NOTA', validation: 'nota' }
    } else {
        return { type: 'success', input: input, validation: 'nota' }
    }
}