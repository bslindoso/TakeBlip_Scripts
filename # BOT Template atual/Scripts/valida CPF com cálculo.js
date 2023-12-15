function validaCpf(cpf) {
    let CPFv = cpf.replace(/\D/g, "");

    let cpfvalido = CPFv.trim();

    let v1 = 0;
    let v2 = 0;
    let aux = false;

    for (let i = 1; cpfvalido.length > i; i++) {
      if (cpfvalido[i - 1] != cpfvalido[i]) {
        aux = true;
      }
    }

    if (aux == false) {
      return { type: 'error', input: 'ERRO CPF', validation: 'cpf' }
    }

    for (let i = 0, p = 10; (cpfvalido.length - 2) > i; i++, p--) {
      v1 += cpfvalido[i] * p;
    }

    v1 = ((v1 * 10) % 11);

    if (v1 == 10) {
      v1 = 0;
    }

    if (v1 != cpfvalido[9]) {
      return { type: 'error', input: 'ERRO CPF', validation: 'cpf' }
    }

    for (let i = 0, p = 11; (cpfvalido.length - 1) > i; i++, p--) {
      v2 += cpfvalido[i] * p;
    }

    v2 = ((v2 * 10) % 11);

    if (v2 == 10) {
      v2 = 0;
    }

    if (v2 != cpfvalido[10]) {
      return { type: 'error', input: 'ERRO CPF', validation: 'cpf' }
    } else {
      return { type: 'success', input: cpfvalido, validation: 'cpf' }
    }
  }

console.log(validaCpf("086.746.764-99"));