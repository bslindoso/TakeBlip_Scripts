function run() {

  let menu = {
      'text' : '💡Antes de iniciarmos, separei algumas {{n1}}dicas{{n2}} que podem te ajudar em nossa conversa:\n\n➡ Digite {{n1}}“Menu”{{n2}} toda vez que desejar retornar ao menu principal;\n\n➡ Digite {{n1}}“Sair”{{n2}} quando precisar encerrar o nosso chat.\n\nE não se esqueça! Sempre que eu te perguntar algo, responda em uma {{n1}}única mensagem.{{n2}} 😉',
      'options' : ["Entendi"],
      'values' : ["Entendi"],
      'description' : [],
      'itens' : [
          { name: ['Entendi'] }, 
          { name: ['Menu','Voltar ao início', 'Reiniciar'] },
          { name: ['Sair'] }     
      ]
  }

  menu.itens = addItens(menu.itens);

  return JSON.stringify(menu);
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
        // Adiciona uma variação lowerCase e UpperCase para cada opção do menu
        newNames.push(match.toLowerCase());
        newNames.push(match.toUpperCase());
        newItens[i] = {name: newNames}; 
      }
      newNames.push(`${i + 1}`); // Acrescenta numeração automática
    }
    return newItens;
}

console.log(run())