let previousState = "[CB.1.5.0] Sem cashback"
let typeInput = {"type":"error","input":"ERRO DINAMICO","validation":"menu"};
let validApiJs = {"type":"no-balance","status":"200","process":{"SaldoBonus":"0,00"},"validation":"api"};

console.log(run(previousState, typeInput, validApiJs))

function run(previousState, typeInput, validApiJs) {
    // try {
        //Formata id do bloco
        let idFormated = previousState.split(' ');
        console.log(idFormated)
        idFormated = idFormated[0].replace(/\[/g, '').replace(/\]/g, '').replace(/\./g, '');
        console.log(idFormated)

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
        if (validApiType == 'success') {
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
    // catch (e) {
    //     return 'error'
    // }
}