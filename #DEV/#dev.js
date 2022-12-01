let input;
input = '300'
// input = 'R$300,01'
// input = 'R$400.00'
// input = '299,99'
// input = '100.00'


console.log(run(input));
// run(input)


function run(input) {

  if (input != '') {
    let valor = input.match(/^(R\$)?\ ?[0-9]*((,|\.)[0-9]{2})?$/gm);

    if (valor != null) {

      if (valor[0].includes('R$')) {
        valor = valor[0].replace('R$', '').trim();
        console.log('A: Possui R$ - ' + valor)

      } else {
        valor = valor[0]
        console.log('B: Não possui R$ - '+ valor)
      }

      if (!valor.includes(',')) {
          if (valor.includes('.')) {
              valor = valor.replace('.', '')
              console.log('C: Possui ponto - ' + valor)
          } else {
            valor = valor * 100
            console.log('D: Não possui ponto vírgula - ' + valor)
        }
      } else {
        valor = valor.replace(',', '')
        console.log('E: Possui vírgula - ' + valor)
      }

      if (valor >= 30000) {
        return false
      } else {

        return valor;
      }
      
    }
    return false;

  }
  return false;
}

// function run(input) {

//   if (input != '') {
//     let valor = input.match(/^(R\$)?\ ?[0-9]*((,|\.)[0-9]{2})?$/gm);

//     if (valor != null) {

//       if (valor[0].includes('R$')) {
//         valor = valor[0].replace('R$ ', 'R$');
//         valor = valor.replace('R$', 'R$ ');

//       } else {
//         valor = `R$ ${valor[0]}`
//       }

//       if (!valor.includes(',')) {
//           if (valor.includes('.')) {
//               valor = valor.replace('.', ',')
//           } else {
//             valor = `${valor},00`
//         }
//       }

//       return valor;

//     }
//     return false;

//   }
//   return false;
// }