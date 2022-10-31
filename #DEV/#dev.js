let cpf;
cpf = '051.604.064-25'
// cpf = '05160406425'
// cpf = '999.999.999-999'
cpf = '99999999999'
// cpf = '999999999999'
// cpf = '056.632.365-25'

console.log(validaCpf(cpf))

function validaCpf(cpf) {
  let regex = /^\d{3}(\.)?\d{3}(\.)?\d{3}(\-)?\d{2}$/gm;
  let match = cpf.match(regex)

  if (match) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999") {
        return { type: 'error', input: 'ERRO CPF' , validation: 'cpf'}
    }
    return { type: 'success', input: cpf , validation: 'cpf'}
  } else {
    return { type: 'error', input: 'ERRO CPF' , validation: 'cpf'}
  }
}