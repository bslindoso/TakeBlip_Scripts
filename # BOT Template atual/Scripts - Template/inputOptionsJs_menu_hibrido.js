function run() {

  let properties = {
      'text': `{{n1}}Qual a sua dúvida sobre Cadastro? 🆕{{n2}}
  
  💡 Digite o número de uma das opções a seguir.`,
      'options': ["Voltar ⬅️", "Menu Principal 🐼", "Finalizar conversa ❎"],
      'values': ["Voltar ⬅️", "Menu Principal 🐼", "Finalizar conversa ❎"],
      'description': [],
      'itens': [
        { name: ['Cadastrar no site', 'Como me cadastrar no site?', "Site", "Como me cadastrar"] },
        { name: ['Benefícios ao cadastrar', 'Quais benefícios tenho ao me cadastrar?', 'Quais benefícios', 'Benefícios'] },
        { name: ['Recuperar senha', 'Como recuperar minha senha?', 'Como recuperar senha?', 'Recuperar minha senha', 'minha senha', 'senha'] },
        { name: ['E-mail errado', 'Realizei a compra com o e-mail errado, o que eu faço?', 'O que eu faço?', 'E-mail', 'Compra com o e-mail errado'] },
        { name: ['Política privacidade', 'Como acesso a política de privacidade?', 'Como acesso?', 'Acesso a política de privacidade?', 'Acessar'] },
        { name: ['Alterar cadastro', 'Como faço para alterar meu cadastro?', 'Alterar meu cadastro'] },
        { name: ['Não receber novidades', 'Não quero mais receber as novidades da Loja Ajinomoto, como faço?', 'Não quero mais'] },
        { name: ["Voltar ⬅️", "Voltar", "⬅️"] },
        { name: ["Menu Principal 🐼", "Menu Principal", "Menu", "Principal", "🐼"] },
        { name: ["Finalizar conversa ❎", "Finalizar conversa", "Finalizar", "Conversa", "❎"] }
      ]
    }
  
    function geraMenuNumerico(properties) {
      let lineBreak = '\n\n'
      let listOptions = lineBreak;
      for (let i = 0; i < properties.itens.length; i++) {
        if((!properties.itens[i].name[0].includes("Voltar")) && (!properties.itens[i].name[0].includes("Menu")) && (!properties.itens[i].name[0].includes("Finalizar"))){
          listOptions = `${listOptions}{{n1}}${i + 1}.{{n2}} ${properties.itens[i].name[1]}${lineBreak}`
        }
      }
      return listOptions;
    }
  
    properties.text = properties.text + geraMenuNumerico(properties)
  
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
        //Adiciona uma variação lowerCase e UpperCase para cada opção do itens
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
  