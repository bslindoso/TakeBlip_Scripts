const valor = 'R$ 15,99'

console.log(run(valor))

function run(valor) {
    valor = valor.replace('R$ ', '')

    const unidadeDeReal = parseInt(valor.split(',')[0])
    const centavoDeReal = parseInt(valor.split(',')[1])

    const valorConvertido = (unidadeDeReal * 100) + centavoDeReal

    return valorConvertido
}