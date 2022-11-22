
function run(status, response) {

    response = JSON.parse(response)

    if (response.SaldoBonus == '0,00' || response.SaldoBonus == 0.00) {
        return {type: 'no-balance', status: status, process: response, validation: 'api'}        
    }

    if (status == '200') {
        return {type: 'success', status: status, process: response, validation: 'api'}
    } else {
        return {type: 'error', status: status, process: response, input: 'ERRO API', validation: 'api'}
    }
}