let input = 'Olá, Tecnisa! Gostaria de receber mais informações sobre o Alto das Groselhas, 328, São Paulo, Outros empreendimentos. Vi o empreendimento no Site Tecnisa.'
console.log(run(input))

  //===============================================================================================================================================================================
  // TEXTO TEMPLATE:
  //===============================================================================================================================================================================
  // Olá, Tecnisa! Gostaria de receber mais informações sobre o EMPREENDIMENTO, ID, ESTADO, URL. Vi o empreendimento no MIDIA.
  //===============================================================================================================================================================================
  // Exemplo de input: Olá, Tecnisa! Gostaria de receber mais informações sobre o Alto das Groselhas, 328, São Paulo, Outros empreendimentos. Vi o empreendimento no Site Tecnisa.
  // Exemplo de saída: {"empreendimento":"Alto das Groselhas","id":"328","estado":"São Paulo","url":"Outros empreendimentos","midia":"Site Tecnisa"}
  //===============================================================================================================================================================================

  function run(input) {

  if (input.includes('Olá, Tecnisa! Gostaria de receber mais informações sobre o ')) {
    let fatiamento1 = input.split('Olá, Tecnisa! Gostaria de receber mais informações sobre o ');
    let fatiamento2 = fatiamento1[1].split(',');

    let empreendimento = fatiamento1[1].split(',')[0];
    let id = fatiamento2[1].trim();  
    let estado = fatiamento2[2].trim();  
    let url = fatiamento2[3].split('.')[0].replace(' ', '');
    let midia = fatiamento2[3].split('.')[1].replace(' Vi o empreendimento no ', '');
  
    return JSON.stringify({
      empreendimento: empreendimento,
      id: id,
      estado: estado,
      url: url,
      midia: midia
    })
  } else {
    return false;
  }
}