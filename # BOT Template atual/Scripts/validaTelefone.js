console.log(validaTelefone('82-9 9915-8747 '))

function validaTelefone(telefone) {

  let regex = /^(\(?[0-9]{2}(\)|-)?) ?([0-9]{1})? ?[0-9]{4}(-| )?[0-9]{4}/gm;
  let match = telefone.match(regex)

  if (match) {
      //Remove espaços
      while (telefone.search(' ') != -1) {
        telefone = telefone.replace(' ', '')
      }
      while (telefone.search('\\)') != -1) {
        telefone = telefone.replace(')', '')
      }
      while (telefone.search('\\(') != -1) {
        telefone = telefone.replace('(', '')
      }
      while (telefone.search('-') != -1) {
        telefone = telefone.replace('-', '')
      }

      let ddd = `(${telefone.slice(0, 2)})`
      let numero = telefone.slice(2)

      //Formata para novo padrão
      if (numero.length == 8) {
          numero = `${numero.slice(0, 4)}-${numero.slice(4)}`
      } else if (numero.length == 9) {
          numero = `${numero.slice(0, 5)}-${numero.slice(5)}`
      } else {
          return { type: 'error', input: 'ERRO TELEFONE', validation: 'telefone' }
      }
      const telefoneFormatado = ddd + numero;

      return { type: 'success', input: telefone, validation: 'telefone', inputFormatado: telefoneFormatado }

  } else {
      return { type: 'error', input: 'ERRO TELEFONE', validation: 'telefone' }
  }
}