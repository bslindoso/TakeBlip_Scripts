console.log(run("bla f115/30/24 f bla reterbla d"))

function run(input) {
    // =====================================================================================
    // CONFIG
    // =====================================================================================
    let regex01 = /( |^)\d{3}(\/| )?\d{2}(\/| |R)?(R)?\d{2}( |$)/g
    let match01 = input.match(regex01)
    // DEFINE PALAVRAS COMO ARO, COMPRAR E COMPRAR PNEU
    let regex02 = /(^| )((A|a)ro|(C|c)omprar( pneu)?)( |$)/g
    let match02 = input.match(regex02)
    // =====================================================================================
    if (match01) {

        return {
            type: 'success',
            input: input,
            dados_identificados: {
                medidas: medidas.medidas
            },
            validation: ''
        }

    } else if (match02) {
        return { type: 'success', input: input, validation: '' }
    } else {
        return { type: 'error', input: input, validation: '' }
    }
}

console.log(matchPalavras('MENU PRINCIPAL'))

function matchPalavras(input) {
    let retorno = 'NO MATCH';
	let sair = [
		'sair',
		'terminar',
		'encerrar',
		'finalizar',
		'quero terminar',
		'acabar a conversa',
		'encerrar conversa',
        'fim',
        'quero sair'
	]

    sair.forEach(e => {
        e = e.toLowerCase()
        input = input.toLowerCase()
        if (input == e) {
            retorno = 'SAIR'
        }        
    });

    let menu = [
        'Iniciar',
        'Menu',
        'voltar ao menu',
        'Início',
        'reset',
        'Menu principal'
    ]

    menu.forEach(e => {
        e = e.toLowerCase()
        input = input.toLowerCase()
        if (input == e) {
            retorno = 'MENU'
        }        
    });

    return retorno
}