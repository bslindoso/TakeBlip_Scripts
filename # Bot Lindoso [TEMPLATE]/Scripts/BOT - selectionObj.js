const run = (validInput) => {
  let input = JSON.parse(validInput).input;

  const defaultTextoDescricao = `Ok! Antes de transferir para um de nossos atendentes, por favor, {{n1}}me informe a aula em que aparece o problema como no exemplo abaixo{{n2}} 👇` 
  const descricaoTextoExemple = "{{n1}}Assim:{{n2}} aula 4 negociação"

  trackingsAndTransbordo = (input) => {
    const optionList = {
      "Áudio ruim": {
        textoEmail: "Sinto muito por isso... 😕\nPoderia me passa o {{n1}}e-mail{{n2}} que você utilizou para fazer a compra?",
        emailExibicao: "problemas com conteudo audio ruim exibicao",
        emailInput: "problemas com conteudo audio ruim email input",
        emailInesperado: "problemas com conteudo audio ruim email input inesperado",
        textoDescricao: defaultTextoDescricao,
        descricaoTextoExemple : descricaoTextoExemple,
        descricaoExibicao: "problemas com conteudo audio ruim aula exibicao",
        descricaoInput: "problemas com conteudo audio ruim aula input",
        transbordo: "Marca Digital",
        goToBlock: "f95c78ee-3f19-4994-a7fa-94d882f0a166"
      },
      "Vídeo ruim": {
        textoEmail: "Ah que chato isso... 😕\nPoderia me passa o {{n1}}e-mail{{n2}} que você utilizou para fazer a compra?",
        emailExibicao: "problemas com conteudo video ruim exibicao",
        emailInput: "problemas com conteudo video ruim email input",
        emailInesperado: "problemas com conteudo video ruim email input inesperado",
        textoDescricao: defaultTextoDescricao,
        descricaoTextoExemple : descricaoTextoExemple,
        descricaoExibicao: "problemas com conteudo video ruim aula exibicao",
        descricaoInput: "problemas com conteudo video ruim aula input",
        transbordo: "Marca Digital",
        goToBlock: "a07dfef2-c0a2-457d-98cb-29db278066c6"
      },
      "Aula em falta": {
        textoEmail: "Poxa... 😕\nPoderia me passa o {{n1}}e-mail{{n2}} que você utilizou para fazer a compra?",
        emailExibicao: "problemas com conteudo aula em falta exibicao",
        emailInput: "problemas com conteudo aula em falta email input",
        emailInesperado: "problemas com conteudo aula em falta email input inesperado",
        textoDescricao: defaultTextoDescricao,
        descricaoTextoExemple : descricaoTextoExemple,
        descricaoExibicao: "problemas com conteudo aula em falta aula exibicao",
        descricaoInput: "problemas com conteudo aula em falta aula input",
        transbordo: "Marca Digital",
        goToBlock: "8420c2db-e4c5-481b-983c-257ba939db2c"
      },
      "PDF não encontrado": {
        textoEmail: "Ah que chato isso... 😕\nPoderia me passa o {{n1}}e-mail{{n2}} que você utilizou para fazer a compra?",
        emailExibicao: "problemas com conteudo pdf aula exibicao",
        emailInput: "problemas com conteudo pdf aula email input",
        emailInesperado: "problemas com conteudo pdf aula email input inesperado",
        textoDescricao: defaultTextoDescricao,
        descricaoTextoExemple : descricaoTextoExemple,
        descricaoExibicao: "problemas com conteudo pdf aula aula exibicao",
        descricaoInput: "problemas com conteudo pdf aula aula input",
        transbordo: "Marca Digital",
        goToBlock: "b2037e92-ce8a-417d-8ae4-8d1525880308"
      },
      "Não salva as aulas": {
        textoEmail: "Sinto muito por isso... 😕\nPoderia me passa o {{n1}}e-mail{{n2}} que você utilizou para fazer a compra?",
        emailExibicao: "problemas com conteudo progresso exibicao",
        emailInput: "problemas com conteudo progresso email input",
        emailInesperado: "problemas com conteudo progresso email input inesperado",
        textoDescricao: defaultTextoDescricao,
        descricaoTextoExemple : descricaoTextoExemple,
        descricaoExibicao: "problemas com conteudo progresso aula exibicao",
        descricaoInput: "problemas com conteudo progresso aula input",
        transbordo: "XGrow",
        goToBlock: "1a3395c2-6489-4bed-b251-a798135e9ba7"
      },
      "Link não funciona": {
        textoEmail: "Poxa... 😕\nPoderia me passa o {{n1}}e-mail{{n2}} que você utilizou para fazer a compra?",
        emailExibicao: "problemas com conteudo link exibicao",
        emailInput: "problemas com conteudo link email input",
        emailInesperado: "problemas com conteudo link email input inesperado",
        textoDescricao: defaultTextoDescricao,
        descricaoTextoExemple : descricaoTextoExemple,
        descricaoExibicao: "problemas com conteudo link aula exibicao",
        descricaoInput: "problemas com conteudo link aula input",
        transbordo: "Marca Digital",
        goToBlock: "be958103-3c49-45d5-ab8d-0263edbf8636"
      },
      "Outros assuntos": {
        textoEmail: "Ah que chato isso... 😕\nPoderia me passa o {{n1}}e-mail{{n2}} que você utilizou para fazer a compra?",
        emailExibicao: "problemas com conteudo outro assunto exibicao",
        emailInput: "problemas com conteudo outro assunto email input",
        emailInesperado: "problemas com conteudo outro assunto email input inesperado",
        textoDescricao: "Ok! Antes de transferir para um de nossos atendentes, por favor, me informe em poucas palavras sobre {{n1}}qual assunto{{n2}} você gostaria de falar 👇",
        descricaoTextoExemple : "",
        descricaoExibicao: "problemas com conteudo outro assunto aula exibicao",
        descricaoInput: "problemas com conteudo outro assunto aula input",
        transbordo: "Marca Digital",
        goToBlock: "0ea7603a-79b5-4fed-8e55-5206d4384084"
      },
    };

    return optionList[input] || "ERROR: NO MATCH";
  };

  return trackingsAndTransbordo(input);
}