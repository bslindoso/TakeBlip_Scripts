////////////////////////////////////////////////////////
// CODE
////////////////////////////////////////////////////////

function run(optmenucombeletri) {
	const listaDeVeiculos = {
		"Tiggo 5x SPORT": {
			"exibicao": "Veiculos tiggo 5x sport menu exibicao",
			"selecao": "Veiculos tiggo 5x sport menu selecao",
			"inesperado": "Veiculos tiggo 5x sport menu inesperado"
		},
		"Tiggo 5x Pro": {
			"exibicao": "Veiculos tiggo 5x pro menu exibicao",
			"selecao": "Veiculos tiggo 5x pro menu selecao",
			"inesperado": "Veiculos tiggo 5x pro menu inesperado"
		},
		"Tiggo 7 Pro Max Drive": {
			"exibicao": "Veiculos tiggo 7 pro max drive menu exibicao",
			"selecao": "Veiculos tiggo 7 pro max drive menu selecao",
			"inesperado": "Veiculos tiggo 7 pro max drive menu inesperado"
		},
		"Tiggo 8 Max Drive": {
			"exibicao": "Veiculos tiggo 8 max drive menu exibicao",
			"selecao": "Veiculos tiggo 8 max drive menu selecao",
			"inesperado": "Veiculos tiggo 8 max drive menu inesperado"
		},
		"Tiggo 5x Pro Hybrid Max Drive": {
			"exibicao": "Veiculos tiggo 5x pro hybrid max drive menu exibicao",
			"selecao": "Veiculos tiggo 5x pro hybrid max drive menu selecao",
			"inesperado": "Veiculos tiggo 5x pro hybrid max drive menu inesperado"
		},
		"Tiggo 7 Pro Hybrid": {
			"exibicao": "Veiculos tiggo 7 pro hybrid menu exibicao",
			"selecao": "Veiculos tiggo 7 pro hybrid menu selecao",
			"inesperado": "Veiculos tiggo 7 pro hybrid menu inesperado"
		},
		"Tiggo 8 Pro Plug-in Hybrid": {
			"exibicao": "Veiculos tiggo 8 pro plugin hybrid menu exibicao",
			"selecao": "Veiculos tiggo 8 pro plugin hybrid menu selecao",
			"inesperado": "Veiculos tiggo 8 pro plugin hybrid menu inesperado"
		},
		"Arrizo 6 Pro Hybrid": {
			"exibicao": "Veiculos arrizo 6 pro hybrid menu exibicao",
			"selecao": "Veiculos arrizo 6 pro hybrid menu selecao",
			"inesperado": "Veiculos arrizo 6 pro hybrid menu inesperado"
		},
		"iCar": {
			"exibicao": "Veiculos icar menu exibicao",
			"selecao": "Veiculos icar menu selecao",
			"inesperado": "Veiculos icar menu inesperado"
		},

	}

	optmenucombeletri = optmenucombeletri.replace(/20\d\d/, '').trim()

	let response = listaDeVeiculos[optmenucombeletri] != undefined ? listaDeVeiculos[optmenucombeletri] : { "exibicao": "Veiculos erro menu exibicao", "selecao": "Veiculos erro menu selecao", "inesperado": "Veiculos erro menu inesperado" }

	return JSON.stringify(response)
	
}