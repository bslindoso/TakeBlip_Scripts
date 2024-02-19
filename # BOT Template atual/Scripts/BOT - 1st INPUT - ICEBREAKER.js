let input01 = 'Olá! Gostaria de ter mais informações sobre os Pneus Goodyear.'
let input02 = 'Olá, Gostaria de mais informações!'
let input03 = 'Olá, Gostaria de saber mais sobre o 185/65R15 GOODYEAR EAGLE TOURING 88H SL https://pneusnacional.com.br/produto/185-65r15-goodyear-eagle-touring-88h-sl/'
let input033 = 'Olá, *Ganhei um desconto de R$ 10,00*. E Gostaria de saber mais sobre o 195/80R14 GOODYEAR CARGO MARATHON 2 110/108R https://pneusnacional.com.br/produto/195-80r14-goodyear-cargo-marathon-2-110-108r/'
let input04 = 'Olá, Gostaria de saber mais sobre o serviço de Conserto de pneus https://pneusnacional.com.br/servico/conserto-de-pneus/'
let input05 = 'Olá, Gostaria de saber mais sobre Embreagem https://pneusnacional.com.br/servico/embreagem/'

// DEFINE LISTA DE PERFIS E AROS VÁLIDOS
var perfis = ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90']
var aros = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
console.log(run(input033))

function run(input) {
    // =====================================================================================
    // CONFIG
    // =====================================================================================
    // DEFINE OS ICEBREAKERS VÁLIDOS
    // IB01 - Icebreaker geral de mais informações sobre PNEUS
    // IB02 - Icebreaker geral de mais informações
    // IB03 - Icebreaker detalhado por Pneu/Modelo
    // IB04 - Icebreaker detalhado por serviço
    let ib01 = 'Olá! Gostaria de ter mais informações sobre os Pneus Goodyear.'
    let ib02 = 'Olá, Gostaria de mais informações!'
    let ib03 = 'Olá, Gostaria de saber mais sobre o'
    let ib03_desconto = 'Ganhei um desconto de'
    let ib04 = 'Olá, Gostaria de saber mais sobre o serviço'
    let ib04_01 = 'Olá, Gostaria de saber mais sobre '

    // =====================================================================================
    if (input == ib01) {
        return { type: 'success', input: input, validation: 'IB01' }
    }

    if (input == ib02) {
        return { type: 'success', input: input, validation: 'IB02' }
    }

    if (input.includes(ib04)) {
        let dados = input.replace('Olá, Gostaria de saber mais sobre o serviço de ', '').split(' ')
        let link = dados.pop()
        let servico = dados.join(' ').trim()
        return {
            type: 'success',
            input: input,
            dados_identificados: {

                servico: servico,
                link: link,
            },
            validation: 'IB04'
        }
    }

    if (input.includes(ib03)) {
        let dados = input.replace('Olá, Gostaria de saber mais sobre o ', '').split(' ')
        let medidas = dados.shift()
        let link = dados.pop()
        let marcaModelo = dados.join(' ').trim()
        let medidasObj = getLarguraPerfilAro(medidas)

        if (medidasObj.type == 'success') {
            medidas = medidasObj.medidas
        } else {
            return {
                type: 'error',
                input: input,
                dados_identificados: {
                    medidas: medidas,
                    marcaModelo: marcaModelo,
                    link: link,
                    desconto: false
                },
                validation: 'IB03 - MEDIDAS INCORRETAS'
            }
        }

        return {
            type: 'success',
            input: input,
            dados_identificados: {
                medidas: medidas,
                marcaModelo: marcaModelo,
                link: link,
                desconto: false
            },
            validation: 'IB03'
        }
    }

    if (input.includes(ib03_desconto)) {        
        while (input.search('\\*') != -1) {
            input = input.replace('*', '')
        }
        let valorDesconto = parseFloat(input.split('R$')[1].trim().split('.')[0])        
        let dados = input.replace('Olá, Ganhei um desconto de R$ ', '').split('. ')[1].replace('E Gostaria de saber mais sobre o ', '').split(' ')               
        let medidas = dados.shift()
        let link = dados.pop()
        let marcaModelo = dados.join(' ').trim()
        let medidasObj = getLarguraPerfilAro(medidas)

        if (medidasObj.type == 'success') {
            medidas = medidasObj.medidas
        } else {
            return {
                type: 'error',
                input: input,
                dados_identificados: {
                    medidas: medidas,
                    marcaModelo: marcaModelo,
                    link: link,
                    desconto: true,
                    valorDesconto: valorDesconto
                },
                validation: 'IB03 - MEDIDAS INCORRETAS'
            }
        }

        return {
            type: 'success',
            input: input,
            dados_identificados: {
                medidas: medidas,
                marcaModelo: marcaModelo,
                link: link,
                desconto: true,
                valorDesconto: valorDesconto
            },
            validation: 'IB03'
        }
    }

    if (input.includes(ib04_01)) {
        let dados = input.replace('Olá, Gostaria de saber mais sobre ', '').split(' ')
        let link = dados.pop()
        let servico = dados.join(' ').trim()
        return {
            type: 'success',
            input: input,
            dados_identificados: {

                servico: servico,
                link: link,
            },
            validation: 'IB04'
        }
    }

    return { type: 'error', input: 'NO ICEBREAKER', validation: 'no-icebreaker' }

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
