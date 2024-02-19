////////////////////////////////////////////
// TESTE
////////////////////////////////////////////
let input
input = JSON.stringify({
    "latitude": -23.5489,
    "longitude": -46.6388
})
input = "57046-480"
console.log(run(input))
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
function run(input) {
    try {
        let localizacao;
        
        localizacao = validaCep(input)

        if (localizacao.type == 'error') {
            localizacao = validaLocalizacao(input)
        }

 
        return localizacao
    } catch (e) {
        return `ERRO SCRIPT: ${e}`
    }
}

function validaCep(input) {
    const matchDash = input.match(/^[0-9]{5}-[0-9]{3}$/gm);
    const matchWithoutDash = input.match(/^[0-9]{5}[0-9]{3}$/gm);
    if (!matchDash && !matchWithoutDash) {
        return { type: 'error', input: 'ERRO CEP', validation: 'cep' };
    } else {
        if (matchDash) {
            return {
                type: 'success',
                input: input.split('-').join(''),
                validation: 'cep',
                recurso: `cep=${input.split('-').join('')}`
            }
        }
        return {
            type: 'success',
            input: input,
            validation: 'cep',
            recurso: `cep=${input}`
        };
    }
}

function validaLocalizacao(input) {
    try {
        input = JSON.parse(input) 
        let {
            latitude,
            longitude
        } = input

        // Latitude must be a number between -90 and 90
        const isLatitude = num => isFinite(num) && Math.abs(num) <= 90;
        // Longitude must a number between -180 and 180
        const isLongitude = num => isFinite(num) && Math.abs(num) <= 180;


        if (isLatitude(latitude) && isLongitude(longitude)) {
            return {
                type: 'success',
                input: JSON.stringify(input),
                validation: 'localizacao',
                recurso: `latlng=${latitude},${longitude}`

            };
        } else {

            return {
                type: 'error',
                input: 'ERRO LOCALIZACAO',
                validation: 'localizacao'
            };
        }
    } catch (error) {
        return {
            type: 'error',
            input: 'ERRO LOCALIZACAO',
            validation: 'localizacao'
        };
    }
}