function run(status, response) {
    try {
        response = JSON.parse(response)

        if (status == '500') {
            return { type: 'error', status: status, process: response, input: 'ERRO API', validation: 'api' }
        }
        if (response.Status == 'true' || response.Status == true) {
            return { type: 'success', status: status, process: response.Status, validation: 'api' }
        }
        if (response == [] || response == '' || response == 'Error') {
            return { type: 'not-identified', status: status, process: response, validation: 'api' }
        }

    }
    catch (e) {
        return { type: 'not-identified', status: status, process: response, validation: 'api' }
    }


}

console.log(run('200',))