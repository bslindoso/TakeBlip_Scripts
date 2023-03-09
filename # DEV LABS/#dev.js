let nome; let cpf; let telefone;
nome = "BRUNO lindoso"
//cpf = "219.207.700-97"
cpf = '05432123456'
telefone = "98765432123"

console.log(run(cpf, nome, telefone))

function run(cpf, nome, telefone) {

    // Nome
    let validNome = validaNome(nome)

    // CPF
    let validCpf = validaCpf(cpf)

    // Telefone
    let validTelefone = validaTelefone(telefone)

    return JSON.stringify({
        nome: validNome,
        cpf: validCpf,
        telefone: validTelefone
    })
}

// {"type":"Nome","input":false,"inputRecognized":"validation"}

function validaNome(input) {
    let str = input.toLowerCase();
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    const nomeSucess = arr.join(" ");
    return nomeSucess
}

function validaCpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

    // Formata com caracteres
    let comCaracteres = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`

    return { sem_caracteres : cpf, com_caracteres: comCaracteres}
}

function validaTelefone(telefone) {

    //Remove espaços
    telefone = telefone.replace(' ', '')
    telefone = telefone.replace('(', '')
    telefone = telefone.replace(')', '')
    telefone = telefone.replace('-', '')
    telefone = telefone.replace('-', '')
    telefone = telefone.replace('-', '')

    console.log(telefone)

    let ddd = `(${telefone.slice(0, 2)})`
    console.log(ddd)
    let numero = telefone.slice(2)
    console.log(numero)

    //Formata para novo padrão
    if (numero.length == 8) {
        numero = `${numero.slice(0, 4)}-${numero.slice(4)}`
    } else if (numero.length == 9) {
        numero = `${numero.slice(0, 5)}-${numero.slice(5)}`
    } 
    const telefoneFormatado = ddd + ' ' + numero;

    return { sem_caracteres: telefone, com_caracteres: telefoneFormatado }

}