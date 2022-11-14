function run(input) {

    if (input != '') {
      let valor = input.match(/^(R\$)?\ ?[0-9]*((,|\.)[0-9]{2})?$/gm);

      console.log(valor)
  
      if (valor != null) {
  
        if (valor[0].includes('R$')) {
          valor = valor[0].replace('R$ ', 'R$');
          valor = valor.replace('R$', 'R$ ');
        } else {
          valor = `R$ ${valor[0]}`
        }
  
        if (!valor.includes(',')) {
            if (valor.includes('.')) {
                valor = valor.replace('.', ',')
            } else {
              valor = `${valor},00`
          }
        }
  
        return valor;
  
      }
      return false;
  
    }
    return false;
  }

// valor convertido em centavos
  function valorEmCentavos(valor) {
    valor = valor.replace('R$ ', '')

    const unidadeDeReal = parseInt(valor.split(',')[0])
    const centavoDeReal = parseInt(valor.split(',')[1])

    const valorConvertido = (unidadeDeReal * 100) + centavoDeReal

    return valorConvertido;
}

//////////////// TESTES

const teste = run('0,40');
console.log(teste)
console.log(valorEmCentavos(teste))