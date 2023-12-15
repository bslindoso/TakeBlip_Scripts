// console.log(run('  hdu ashda us 0km testar e comprar que eu queria  '))
////////////////////////////////////

function run(input) {

	let retorno = 'NO MATCH';
	input = removeCaracteresEspeciaisAcentos(input)
	input = input.toLowerCase().trim()

	const veiculos = [
		"0km",
		"Lançamento",
		"carro novo",
		"veículos",
		"modelos",
		"tiggo",
		"arrizo",
		"tipos de carros"
	]

	veiculos.forEach(e => {
		e = removeCaracteresEspeciaisAcentos(e)
        e = e.toLowerCase().trim()
        if (input.includes(e)) {
            retorno = 'VEICULOS'
        }        
    });

	const testDrive = [
		"test drive",
		"dirigir",
		"testar",
		"experimentar"
	]

	testDrive.forEach(e => {
		e = removeCaracteresEspeciaisAcentos(e)
        e = e.toLowerCase().trim()
        if (input.includes(e)) {
            retorno = 'TESTDRIVE'
        }        
    });

	const concessionaria = [
		"concessionaria",
		"negociar",
		"vendedor",
		"comprar",
		"loja",
		"lojas",
		"vendas"
	]

	concessionaria.forEach(e => {
		e = removeCaracteresEspeciaisAcentos(e)
        e = e.toLowerCase().trim()
        if (input.includes(e)) {
            retorno = 'CONCESSIONARIA'
        }        
    });

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

	return retorno

}

/////////////////////////////////////////////
// FUNÇÕES AUXILIARES
/////////////////////////////////////////////
function removeCaracteresEspeciaisAcentos(texto) {	
	texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	return texto
}