function run(hideInputText, sentenceOtherMistakesJs, returnJs) {

  let properties = {
    text: 'Certo! Selecione a seguir como eu posso te ajudar hoje. 👇',
    options: ["Quero me hospedar", "Já tenho uma reserva", "Finalizei hospedagem"],
    values: ["Quero me hospedar", "Já tenho uma reserva", "Finalizei hospedagem"],
    description: [],
    itens: [
      { name: ['Quero me hospedar', 'hospedar', 'hospedagem'] },
      { name: ['Já tenho uma reserva', 'reserva'] },
      { name: ['Finalizei hospedagem', 'finalizei'] }
    ],
    menuScope: {
      "whatsappButton": true,
      "whatsappList": false,
      "blipchatQuickReply": false,
      "blipchatMenu": true,
      "defaultText": false,
      "defaultTextInverted": false
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  // Exibe mensagem e exceção no MENU
  if (hideInputText == 'true' || hideInputText == true) {
    properties.text = sentenceOtherMistakesJs
  } else {
    // Exibe mensagem de retorno
    // if (returnJs == 'true' || returnJs == true) {
    //   properties.text = 'Olá! Seja bem-vindo(a) novamente! 😄'
    // }
  }
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
