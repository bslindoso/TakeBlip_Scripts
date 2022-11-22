// previousState => state.previous.name
// typeInput => validInputJs@input
// validApiJs => Script de API
function run(previousState, typeInput, validApiJs) {
    try {
        //Formata id do bloco
        let idFormated = previousState.split(' ');
        idFormated = idFormated[0].replace(/\[/g, '').replace(/\]/g, '').replace(/\./g, '');

        //exception para erros quando o validApiJs não existe
        if (!validApiJs || validApiJs == undefined) {
            typeInput = JSON.parse(typeInput).input
            return exception = {
                id: `${idFormated}`,
                input: '{{input.content}}',
                redirectMenu: `${typeInput}`
            }
        }

        //exception para erros quando o validApiJs existe e é sucesso
        validApiType = JSON.parse(validApiJs).type
        if (validApiType != 'error') {
            typeInput = JSON.parse(typeInput).input
            return exception = {
                id: `${idFormated}`,
                input: '{{input.content}}',
                redirectMenu: `${typeInput}`
            }
        }

        //exception para erro de API
        if (validApiType == 'error') {
            validApiJs = JSON.parse(validApiJs).input
            return exception = {
                id: `${idFormated}`,
                input: '{{input.content}}',
                redirectMenu: `${validApiJs}`
            }
        }
    }
    catch (e) {
        return 'error'
    }
}