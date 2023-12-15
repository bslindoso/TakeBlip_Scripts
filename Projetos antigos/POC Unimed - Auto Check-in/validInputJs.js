{{resource.FunctionProcessInput}}

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
            nota: false            
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
        platform = platform.toUpperCase();

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
        return {type: 'error', input: 'ERRO INESPERADO', validation: 'none'}
    }
}