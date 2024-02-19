//////////////////////////////////////////
// TESTE
//////////////////////////////////////////
let input = JSON.stringify({
    "latitude": -9.39771,
    "longitude": -38.2242485
})
console.log(validaLocalizacao(input))
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
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
                validation: 'localizacao'
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