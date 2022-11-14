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
{{ resource.FunctionProcessInput}}

function run(input, inputType, platform, inputOptions) {

  // Verifica se há inputOptions ou não (MENU ou input simples)
  if (!inputOptions || inputOptions == null || inputOptions == undefined) {
      let inputOptions = [];
  } else {
      inputOptions = JSON.parse(inputOptions)
  }

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
          email: false,
          telefone: true,
          cep: false,
          img: false,
          imgTxt: false,
          nome: false,
          endereco: false,
          moeda: false,
          cpf: false
      };
      // ========================================================================

      // Inicia o objeto que será retornado pela função
      let processedInput = {
          'type': null,
          'input': null,
          'validation': 'none'
      }

      // Verifica se o usuário digitou SAIR ou MENU
      if (input == 'sair' || input == 'SAIR' || input == 'Sair') {
          processedInput.type = 'reserved'
          processedInput.input = 'SAIR'
          return JSON.stringify(processedInput)
      } else if (input == 'menu' || input == 'MENU' || input == 'Menu') {
          processedInput.type = 'reserved'
          processedInput.input = 'MENU'
          return JSON.stringify(processedInput)
      }

      // Formata variáveis
      // inputOptions = JSON.parse(inputOptions);
      platform = platform.toUpperCase()

      if (validacaoMenu) {
          // Validação de MENU
          processedInput = validaMenu(input, inputOptions, platform)

          // Verifica se precisa mudar a mensagem de erro do Menu Dinâmico para o Especial
          if ((processedInput.input == 'ERRO DINAMICO' || processedInput.input == 'ERRO NUMERICO') && erroMenuEspecial != '') {
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