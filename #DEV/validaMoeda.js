let input = 'R$ 5'

console.log(run(input))

function run(input) {

  if (input != '') {
    let valor = input.match(/^(R\$)?\ ?[0-9]*,?0?0?$/gm);

    if (valor != null) {

      if (valor[0].includes('R$')) {
        valor = valor[0].replace('R$ ', 'R$');
        valor = valor.replace('R$', 'R$ ');
      } else {
        valor = `R$ ${valor[0]}`
      }

      if (!valor.includes(',')) {
        valor = `${valor},00`
      }

      return valor;

    }
    return false;

  }
  return false;
}