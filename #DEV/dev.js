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
// {{resource.FunctionProcessInput}}
let menu = {
    'text' : 'Antes de finalizarmos, só preciso que avalie o nosso atendimento, é bem rápido: 👇\n\nDe {{n1}}0 a 10{{n2}}, qual nota melhor representa a sua experiência conosco?',
    'options' : [],
    'values' : [],
    'description' : [],
    'itens' : [
        { name: [] },
        { name: [] } 
    ]
}
// menu = JSON.stringify(menu)
// console.log(menu)
console.log(run('10', 'BlipChat', menu))

function run(input, platform, menu) {
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
            nota: true
        };
        // ========================================================================

        // Inicia o objeto que será retornado pela função
        let processedInput = {
            'type': null,
            'input': null,
            'validation': 'none'
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
                return JSON.stringify({ type: 'success', input: input, validation: 'none' });

            } else {
                return JSON.stringify(processedInput);
            }
        }

    } catch (e) {
        return { type: 'error', input: 'ERRO INESPERADO', validation: 'none' }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
function validaInput(validacoes, input) {
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

    const nota = parseInt(input)

    if (nota >= 0 && nota <= 10) {
        return { type: 'success', input: input, validation: 'nota' }
    } else {
        return { type: 'error', input: 'ERRO NOTA', validation: 'nota' }
    }
};