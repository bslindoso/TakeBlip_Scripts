// console.log(run('  preciso voltár ao ménu  '))
////////////////////////////////////

function run(input) {

    let retorno = 'NO MATCH';
    input = removeCaracteresEspeciaisAcentos(input)
    input = input.toLowerCase().trim()

    const sair = [
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
        e = removeCaracteresEspeciaisAcentos(e)
        e = e.toLowerCase().trim()
        if (input.includes(e)) {
            retorno = 'SAIR'
        }
    });

    const menu = [
        'Iniciar',
        'Menu',
        'voltar ao menu',
        'Início',
        'reset',
        'Menu principal'
    ]

    menu.forEach(e => {
        e = removeCaracteresEspeciaisAcentos(e)
        e = e.toLowerCase().trim()
        if (input.includes(e)) {
            retorno = 'MENU'
        }
    });

    // let IA = [
    // 	'Mudar de assunto',
    // 	'Falar de outra coisa',
    // 	'Outra pergunta',
    // 	'Outro assunto'
    // ]

    // let atendimento = [
    // 	'atendimento',
    // 	'atendente',
    // 	'falar com humano',
    // 	'falar com pessoa',
    // 	'falar com atendente',
    // 	'atendimento humano'
    // ]

    return retorno


}

/////////////////////////////////////////////
// FUNÇÕES AUXILIARES
/////////////////////////////////////////////
function removeCaracteresEspeciaisAcentos(texto) {
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return texto
}