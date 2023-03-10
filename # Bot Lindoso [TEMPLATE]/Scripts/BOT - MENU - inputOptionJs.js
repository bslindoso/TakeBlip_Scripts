function run() {

    let properties = {
      'text': 'Eu trouxe aqui alguns assuntos que podem ajudar. 😃\n{{n1}}Agora digite o número da opção que deseja:{{n2}}',
      'options': ["Informações", "Dúvidas", "Reclamações", "Elogios", "Sugestões"],
      'values': ["Informações", "Dúvidas", "Reclamações", "Elogios", "Sugestões"],
      'description': [],
      'itens': [
        { name: ['Informações'] },
        { name: ['Dúvidas'] },
        { name: ['Reclamações'] },
        { name: ['Elogios'] },
        { name: ['Sugestões'] }
      ]
    }
  
    properties.itens = addItensNumeracao(properties.itens);
  
    // Adição de opções sem numeração
    let opcoesExtras = [
      { name: ['Menu', 'Voltar ao início', 'Reiniciar'] },
      { name: ['Sair', 'Finalizar', 'Encerrar'] }
    ]
  
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
      newNames.push(`${ i + 1 }`); // Acrescenta numeração automática
    }
    return newItens;
  } 
  