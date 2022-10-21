let input = 'Olá, Tecnisa! Gostaria de receber mais informações sobre o 39, São Paulo, Outras Homes. Vi o empreendimento no Bla bal.'

console.log(run(input))

function run(input) {

  if (input.includes('Olá, Tecnisa! Gostaria de receber mais informações sobre o ')) {
    let fatiamento1 = input.split('Olá, Tecnisa! Gostaria de receber mais informações sobre o ');

    let fatiamento2 = fatiamento1[1].split(',');
  
    let empreendimento = fatiamento2[0];
  
    let estado = fatiamento2[1].replace(' ', '');
  
    let url = fatiamento2[2].split('.')[0].replace(' ', '');
  
    let midia = fatiamento2[2].split('.')[1].replace(' Vi o empreendimento no ', '');
  
    return JSON.stringify({
      id: empreendimento,
      estado: estado,
      url: url,
      midia: midia
    })
  } else {
    return false;
  }
}