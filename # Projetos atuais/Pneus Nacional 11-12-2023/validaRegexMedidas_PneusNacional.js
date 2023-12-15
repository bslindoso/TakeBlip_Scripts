// DEFINE LISTA DE PERFIS E AROS VÁLIDOS
var perfis = ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90']
var aros = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']

console.log(run("bla f115/30/24 f bla reterbla d"))

function run(input) {
	// =====================================================================================
	// CONFIG
	// =====================================================================================
	// DEFINE POSSÍVEIS FORMATOS DE MEDIDAS
	// 115/30R24 || 115 30 24 || 115/30/24 || 115/30/R24 || 115 30 R24
	let regex01 = /( |^)\d{3}(\/| )?\d{2}(\/| |R)?(R)?\d{2}( |$)/g
	let match01 = input.match(regex01)
	// DEFINE PALAVRAS COMO ARO, COMPRAR E COMPRAR PNEU
	let regex02 = /(^| )((A|a)ro|(C|c)omprar( pneu)?)( |$)/g
	let match02 = input.match(regex02)
	// =====================================================================================
	if (match01) {
		let medidas = getLarguraPerfilAro(match01[0].trim())
		if (medidas.type == 'success') {
			return {
				type: 'success',
				input: input,
				dados_identificados: {
					medidas: medidas.medidas
				},
				validation: 'match-regex-medidas medidas'
			}
		} else {
			return { type: 'error', input: input, validation: 'match-regex-medidas' }
		}
	} else if (match02) {
		return { type: 'success', input: input, validation: 'match-regex-medidas palavras' }
	} else {
		return { type: 'error', input: input, validation: 'match-regex-medidas' }
	}
}

// =====================================================================================
// FUNÇÕES AUXILIARES
// =====================================================================================
function validaPerfil(perfil) {
	let validacao = perfis.includes(perfil) ? true : false
	return validacao
}

function validaAro(aro) {
	let validacao = aros.includes(aro) ? true : false
	return validacao
}

function getLarguraPerfilAro(medidas) {
	// POSSÍVEIS FORMATOS DE MEDIDAS
	// 115/30R24 || 115 30 24 || 115/30/24 || 115/30/R24 || 115 30 R24
	let regex = /^\d{3}(\/| )?\d{2}(\/| |R)?(R)?\d{2}$/g

	if (medidas.match(regex)) {
		while (medidas.search(' ') != -1) {
			medidas = medidas.replace(' ', '')
		}
		while (medidas.search('/') != -1) {
			medidas = medidas.replace('/', '')
		}
		while (medidas.search('R') != -1) {
			medidas = medidas.replace('R', '')
		}

		let largura = medidas.slice(0, 3)
		let perfil = medidas.slice(3, 5)
		let aro = medidas.slice(5, 8)

		// VALIDA PERFIL
		let validPerfil = validaPerfil(perfil)
		// VALIDA ARO
		let validAro = validaAro(aro)

		if (validPerfil && validAro) {
			return {
				type: 'success',
				message: 'LARGURA, PERFIL E ARO ENCONTRADOS COM SUCESSO',
				medidas: {
					largura: largura,
					perfil: perfil,
					aro: aro
				}
			}
		} else {
			return { type: 'error', message: 'ARO OU PERFIL INVÁLIDOS' }
		}
	} else {
		return { type: 'error', message: 'MEDIDAS INVÁLIDAS OU NÃO ENCONTRADAS' }
	}

}
