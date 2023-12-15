function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11) return false;

    // Verifica se todos os dígitos são iguais (caso inválido)
    if (/^(\d)\1+$/.test(cpf)) return false;

    // Calcula o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    let digit1 = (remainder >= 10) ? 0 : remainder;

    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);
    let digit2 = (remainder >= 10) ? 0 : remainder;

    // Verifica se os dígitos calculados são iguais aos dígitos informados
    return cpf.endsWith(digit1.toString() + digit2.toString());
  }

  function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cnpj.length !== 14) return false;

    // Verifica se todos os dígitos são iguais (caso inválido)
    if (/^(\d)\1+$/.test(cnpj)) return false;

    // Calcula o primeiro dígito verificador
    let sum = 0;
    let weight = 5;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(cnpj.charAt(i)) * weight;
      weight = (weight === 2) ? 9 : weight - 1;
    }
    let remainder = sum % 11;
    let digit1 = (remainder < 2) ? 0 : 11 - remainder;

    // Calcula o segundo dígito verificador
    sum = 0;
    weight = 6;
    for (let i = 0; i < 13; i++) {
      sum += parseInt(cnpj.charAt(i)) * weight;
      weight = (weight === 2) ? 9 : weight - 1;
    }
    remainder = sum % 11;
    let digit2 = (remainder < 2) ? 0 : 11 - remainder;

    // Verifica se os dígitos calculados são iguais aos dígitos informados
    return cnpj.endsWith(digit1.toString() + digit2.toString());
  }

function run(doc) {
    jsonDoc = {
        "sizeValid":false,
        "docType":"Não Identificado",
        "docValid": false,
        "error": false
    }    

    while (doc.search(/\./) != -1) {
        doc = doc.replace(/\./, "")
    }
    while (doc.search("/") != -1) {
        doc = doc.replace("/", "")
    }
    while (doc.search("-") != -1) {
        doc = doc.replace("-", "")
    }

    regexDoc = /^(\d{11}|\d{14})$/;

    docSizeTest = regexDoc.test(doc)

    if (docSizeTest == true && doc.length == 11) {
        jsonDoc.sizeValid = true
        jsonDoc.docType = "CPF"
        validDoc = validarCPF(doc)
        jsonDoc.docValid = validDoc
    }


    else if (docSizeTest == true && doc.length == 14) {
        jsonDoc.sizeValid = true
        jsonDoc.docType = "CNPJ"
        validDoc = validarCNPJ(doc)
        jsonDoc.docValid = validDoc

    }

    return jsonDoc
}

console.log(run("69.763.451/0001-87"))
console.log(run("051.604.064-25"))
console.log(run("05160406425"))