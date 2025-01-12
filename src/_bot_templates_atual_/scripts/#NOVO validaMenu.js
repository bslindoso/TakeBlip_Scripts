
let inputContent = 'Saúde';
// let inputContent = '🧪 Orçamento Manipulados';
let menuOptions = JSON.stringify([
  { option: '🛍 Fazer pedido', regex: '(([fF]azer)? ?(um)? ?([pP]edidos?))|(([nN]ovos?)? ?([pP]edidos?))|(([cC]omprar)? ?([mM]edicamentos?))|([cC]omprar)' },
  { option: '🧪 Orçamento Manipulados', regex: '(([fF]azer)? ?(um)? ?([oO]r[cç]amentos?))|(([fF]azer)? ?(rem[eé]dio)? ?([Mm]anipula(r)?(do)?))' },
  { option: '💉 Vacinas', regex: '(([sS]aber)? ?([sS]obre)? ?([vV]acinas?))|(([sS]aber)? ?([pP]re[cç]o)? ?da ([vV]acinas?))' },
  { option: '👨‍⚕️ Serviços de Saúde', regex: '(([sS]ervi[cç]os?)?( de?)? ?([sS]a[uú]des?))' },
  { option: '💬 Tire suas dúvidas', regex: '(([tT]ire)?( suas?)? ?([dD][uú]vidas?))|(([eE]stou com)? ?([aA]lgumas?) ?([dD][uú]vidas?))|(([pP]reciso)?( de)? ?([aA]jud((as?)|(e)?)))' },
  { option: 'Saudação', regex: '([oO]l[aá])|([bB]o(m|a) ?(([dD]ia)|([tT]arde)|([nN]oite)))|([oO]i)' },
])

console.log(run(inputContent, menuOptions))


function run(inputContent, menuOptions) {

  try {

    if (typeof (menuOptions) != 'object') {
      menuOptions = JSON.parse(menuOptions)
    }

    for (let i = 0; i < menuOptions.length; i++) {

      let test = menuOptions[i].option

      if (test === inputContent) {
        return {
          type: 'success',
          input: inputContent,
          test: test,
          validation: 'ESTRITAMENTE IGUAL'
        };
      } else if (test.includes(inputContent)) {
        return {
          type: 'success',
          input: inputContent,
          test: test,
          validation: 'INCLUDES'
        };
      }

      // TESTAR REGEX
      let regex = new RegExp(menuOptions[i].regex, "g")
      if (inputContent.match(regex)) {
        return {
          type: 'success',
          inupt: inputContent,
          test: test,
          validation: 'REGEX',
          pattern: `${regex}`
        }
      }
    }

    return {
      type: 'error',
      input: inputContent,
      error: 'INPUT INESPERADO'
    }

  } catch (e) {
    return {
      type: 'error',
      input: inputContent,
      error: `${e}`
    }
  }

}