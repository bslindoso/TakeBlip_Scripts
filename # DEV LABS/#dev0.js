const run = (validInput) => {
  let input = JSON.parse(validInput).input;
  
  trackingsAndTransbordo = (input) => {
    const optionList = {
      "Gestão de tempo": {
        textoEmail: "Por favor, me informe {{n1}}o seu melhor e-mail para contato:{{n2}}",
        emailExibicao: "diario forte e corajosa falar sobre bonus gestao tempo email exibicao",
        emailInput: "diario forte e corajosa falar sobre bonus gestao tempo email input",
        emailInesperado: "diario forte e corajosa falar sobre bonus gestao tempo email input inesperado",
        textoDescricao: "Me informe {{n1}}em poucas palavras{{n2}}, qual a sua dúvida:",        
        descricaoExibicao: "diario forte e corajosa falar sobre bonus gestao tempo motivo exibicao",
        descricaoInput: "diario forte e corajosa falar sobre bonus gestao tempo motivo input",
        transbordo: "Acesso",
        goToBlock: "f95c78ee-3f19-4994-a7fa-94d882f0a166"
      },
      "A base de tudo": {
        textoEmail: "Por favor, me informe {{n1}}o seu melhor e-mail para contato:{{n2}}",
        emailExibicao: "diario forte e corajosa falar sobre bonus a base de tudo email exibicao",
        emailInput: "diario forte e corajosa falar sobre bonus a base de tudo email input",
        emailInesperado: "diario forte e corajosa falar sobre bonus a base de tudo email input inesperado",
        textoDescricao: "Me informe {{n1}}em poucas palavras{{n2}}, qual a sua dúvida:",        
        descricaoExibicao: "diario forte e corajosa falar sobre bonus a base de tudo motivo exibicao",
        descricaoInput: "diario forte e corajosa falar sobre bonus a base de tudo motivo input",
        transbordo: "Acesso",
        goToBlock: "a07dfef2-c0a2-457d-98cb-29db278066c6"
      }
    };

    return optionList[input] || "ERROR: NO MATCH";
  };

  return trackingsAndTransbordo(input);
}