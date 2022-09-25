// OBJETIVO
// Criar uma matriz com o nome e a idade das pessoas e acessar a idade 
// de uma delas através do nome

let nomes = ['Bruno', 'Elaine', 'Lis']
let idades = ['36', '38', '8']

let matriz = [nomes, idades]


let buscaIdadePeloNome = (nome) => {
    if (matriz[0].includes(nome)) {
        indice = matriz[0].indexOf(nome)
        return matriz[1][indice]
    }
}

console.log(buscaIdadePeloNome('Elaine'))