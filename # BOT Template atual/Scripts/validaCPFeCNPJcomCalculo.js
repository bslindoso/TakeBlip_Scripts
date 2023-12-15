function validaCPFeCNPJcomCalculo(doc) {

  // FUNÇÃO QUE CALCULA O CPF
  const calculaCpf = (cpf) => {
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

  // FUNÇÃO QUE CALCULA O CNPJ
  const calculaCnpj = (cnpj) => {
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

  jsonDoc = {
    "sizeValid": false,
    "docType": "Não Identificado",
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
    validDoc = calculaCpf(doc)
    jsonDoc.docValid = validDoc
  }
  
  else if (docSizeTest == true && doc.length == 14) {
    jsonDoc.sizeValid = true
    jsonDoc.docType = "CNPJ"
    validDoc = calculaCnpj(doc)
    jsonDoc.docValid = validDoc
  }
  // FORMATA OS VALORES
  let formattedDoc
  if (jsonDoc.docType == 'CPF' && jsonDoc.docValid == true) {
    formattedDoc = doc.split('')
    formattedDoc.splice(3, 0, '.')
    formattedDoc.splice(7, 0, '.')
    formattedDoc.splice(11, 0, '-')
    formattedDoc = formattedDoc.join('')
  }
  if (jsonDoc.docType == 'CNPJ' && jsonDoc.docValid == true) {
    formattedDoc = doc.split('')
    formattedDoc.splice(2, 0, '.')
    formattedDoc.splice(6, 0, '.')
    formattedDoc.splice(10, 0, '/')
    formattedDoc.splice(15, 0, '-')
    formattedDoc = formattedDoc.join('')
  }

  //
  if (jsonDoc.docValid == true) {
    return { type: "success", input: doc, validation: "cpfcnpj", inputFormatado: formattedDoc }
  } else {
    return { type: "error", input: "ERRO CPF CNPJ", validation: "cpfcnpj" }
  }
}


console.log(validaCPFeCNPJcomCalculo("69.763.451/0001-87"))
console.log(validaCPFeCNPJcomCalculo("69763451000188"))
console.log(validaCPFeCNPJcomCalculo("051.604.064-25"))
console.log(validaCPFeCNPJcomCalculo("05160406426"))