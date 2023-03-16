let validInput = JSON.stringify({type: 'success', input: '7Ps'})
console.log(run(validInput))

function run(validInput) {
  let input = JSON.parse(validInput).input

  getOptionSelected = (input) => {
      const optionList = {
          'Jogo da Vida': 'plxjogodavida',
          'SPR': 'plxspr',
          '459': 'plx459',
          'Método IP': 'plxmetodoip',
          'A Base de Tudo': 'plxabasedetudo',
          '100 Maneiras': 'plx100maneiras',
          'Diário Forte e Corajosa': 'plxdiarioforteecorajosa',
          '7Ps': 'plx7ps',
          'Lojas produtos físicos': 'plxlojasprodutosfisicos',
          'Outros produtos': 'plxoutrosprodutos',
      }

      return optionList[input] || 'ERROR: NO MATCH'
  }

  return getOptionSelected(input);
}