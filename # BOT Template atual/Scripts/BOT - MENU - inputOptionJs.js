function run(hideInputText, sentenceOtherMistakesJs, returnJs) {
  let opt = ["Encontrar pneus", "Serviços/peças/óleo", "Endereços/telefones"];
  let properties = {
    text: `{{n1}}Como posso ajudar você?{{n2}}

💡 Escolha uma opção.`,
    options: opt,
    values: opt,
    description: [],
    itens: [
      { name: [opt[0], 'pneus'] },
      { name: [opt[1], 'serviços', 'peças', 'óleo'] },
      { name: [opt[2], 'endereço', 'telefone'] }
    ],
    menuScope: {
      "whatsappButton": true,
      "whatsappList": false,
      "blipchatQuickReply": false,
      "blipchatMenu": true,
      "defaultText": true
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  // Exibe mensagem e exceção no MENU
  // if (hideInputText == 'true' || hideInputText == true) {
  //   properties.text = sentenceOtherMistakesJs
  // } else {
  //   // Exibe mensagem de retorno
  //   // if (returnJs == 'true' || returnJs == true) {
  //   //   properties.text = 'Certo! Selecione a seguir como eu posso te ajudar hoje. 👇'
  //   // }
  // }
  ////////////////////////////////////////////////////////////////////////////////

  properties.itens = addItensNumeracao(properties.itens);

  // Adição de opções sem numeração
  let opcoesExtras = []

  opcoesExtras = addItens(opcoesExtras);

  for (let i = 0; i < opcoesExtras.length; i++) {
    properties.itens.push(opcoesExtras[i]);
  }

  return JSON.stringify(properties);
}

function addItens(itens) {
  let newItens = [];
  let newNames;
  let name;
  let match;
  for (let i = 0; i < itens.length; i++) {
    name = itens[i].name;
    newNames = []
    for (let y = 0; y < itens[i].name.length; y++) {
      match = name[y];
      newNames.push(match);
      // Adiciona uma variação lowerCase e UpperCase para cada opção do itens
      newNames.push(match.toLowerCase());
      newNames.push(match.toUpperCase());
      newItens[i] = { name: newNames };
    }
  }
  return newItens;
}

function addItensNumeracao(itens) {
  let newItens = [];
  let newNames;
  let name;
  let match;
  for (let i = 0; i < itens.length; i++) {
    name = itens[i].name;
    newNames = []
    for (let y = 0; y < itens[i].name.length; y++) {
      match = name[y];
      newNames.push(match);
      // Adiciona uma variação lowerCase e UpperCase para cada opção do itens
      newNames.push(match.toLowerCase());
      newNames.push(match.toUpperCase());
      newItens[i] = { name: newNames };
    }
    newNames.push(`${i + 1}`); // Acrescenta numeração automática
  }
  return newItens;
} 
