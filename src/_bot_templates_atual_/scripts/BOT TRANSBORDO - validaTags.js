let tagsAtendimento = JSON.stringify(["Consumidor.gov","dsfsd", "Pesquisa",]);

console.log(run(tagsAtendimento));


/*  Este tipo de validação serve para identificar APENAS UMA TAG e fazer o seu processamento.
    Em caso de erro do atendente em colocar mais de uma TAG de processamento, o script irá retornar 
    A PRIMEIRA que encontrar na lista de TAGs
*/
function run(tagsAtendimento) {

    try {
        /* Parametreize aqui quais tags deverão ser processadas */
        var tagsEspeciaisParaValidacao = {
            "Reclame Aqui": "Reclame Aqui",
            "Consumidor.gov": "Consumidor.gov",
            "Pesquisa": "Pesquisa"
        }

        tagsAtendimento = JSON.parse(tagsAtendimento)

        if (tagsAtendimento.length == 0 ||
            tagsAtendimento === undefined) {
            return {
                type: "success",
                output: "SEM TAGS"
            }
        }

        /* Aqui vai dar match na primeira TAG encontrada. */
        let match
        for (let i = 0; i < tagsAtendimento.length; i++) {
            match = tagsEspeciaisParaValidacao[tagsAtendimento[i]]         
            if (match !== undefined) {
                break;
            }         
        }

        if (match === undefined) {
            return {
                type: "success",
                output: "SEM TAGS ESPECIAIS"
            }
        } else {
            return {
                type: "success",
                output: match
            }
        }        

    } catch (e) {
        return {
            type: "error",
            error: `SCRIPT ERROR: ${e}`
        }
    }

}