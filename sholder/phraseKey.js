function run(status, response) {

    //response = JSON.parse(response)
    if (typeof response != "object" && typeof response != "string") {
        response = JSON.parse(response)
    }

    if (status == '200') {

        if (response.name == '' || response.status == 'Ocorreu um Erro na Consulta das Informações') {
            return { type: 'not-identified', status: status, process: response, validation: 'api' }
        }
        return { type: 'success', status: status, process: response, validation: 'api' }
    }
    else {
        return { type: 'not-identified', status: status, process: response, input: 'ERRO API', validation: 'api' }
    }
}

console.log(run('500', 'error'))