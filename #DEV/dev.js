let input = 'R$ 5,99'

console.log(run(input))

function run(input) {

  if (input != '') {
    let valor = input.match(/^(R\$)?\ ?[0-9]*,?0?0?$/gm);
    console.log(valor)

    if (valor != null) {

      console.log(valor[0].includes('R$'))

      if (valor[0].includes('R$')) {
        valor = valor[0].replace('R$ ', 'R$');
        valor = valor.replace('R$', 'R$ ');
      } else {
        valor = `R$ ${valor[0]}`
      }

      // console.log(valor[0].replace('R$', ''))
      // if (valor[0].)
      console.log(valor)

      return valor;

    }
    return false;

  }
  return false;
}