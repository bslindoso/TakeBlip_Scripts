function run() {
  return JSON.stringify([
    {
      option: '🛍 Fazer pedido',
      regex: '(([fF]azer)? ?(um)? ?([pP]edidos?))|(([nN]ovos?)? ?([pP]edidos?))|(([cC]omprar)? ?([mM]edicamentos?))|([cC]omprar)'
    },
    {
      option: '🧪 Orçamento Manipulados',
      regex: '(([fF]azer)? ?(um)? ?([oO]r[cç]amentos?))|(([fF]azer)? ?(rem[eé]dio)? ?([Mm]anipula(r)?(do)?))'
    },
    {
      option: '💉 Vacinas',
      regex: '(([sS]aber)? ?([sS]obre)? ?([vV]acinas?))|(([sS]aber)? ?([pP]re[cç]o)? ?da ([vV]acinas?))'
    },
    {
      option: '👨‍⚕️ Serviços de Saúde',
      regex: '(([sS]ervi[cç]os?)?( de?)? ?([sS]a[uú]des?))'
    },
    {
      option: '💬 Tire suas dúvidas',
      regex: '(([tT]ire)?( suas?)? ?([dD][uú]vidas?))|(([eE]stou com)? ?([aA]lgumas?) ?([dD][uú]vidas?))|(([pP]reciso)?( de)? ?([aA]jud((as?)|(e)?)))'
    },
    {
      option: 'Saudação',
      regex: '([oO]l[aá])|([bB]o(m|a) ?(([dD]ia)|([tT]arde)|([nN]oite)))|([oO]i)'
    },
  ])
}