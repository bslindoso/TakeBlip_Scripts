let input = "bRUNO santos lLINDOSO"

function run(input) {
    let nome = input.trim().split(" ").shift().toLowerCase()
    return nome[0].toUpperCase() + nome.substring(1)
}

console.log(run(input))