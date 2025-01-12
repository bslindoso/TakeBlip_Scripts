//console.log(run(200, 200))

function run(status1, status2) {
    try {
        status1 = parseInt(status1)
        status2 = parseInt(status2)
        if (!(status1 >= 200 && status1 <= 299)) {
            return JSON.stringify({
                type: 'error',
                input: 'ERRO API',
                validation: 'api'
            })
        }
        if (!(status2 >= 200 && status2 <= 299)) {
            return JSON.stringify({
                type: 'error',
                input: 'ERRO API',
                validation: 'api'
            })
        }
        return JSON.stringify({
            type: 'success',
            input: 'SUCESSO',
            validation: 'api'
        })
    } catch (e) {
        return JSON.stringify({
            type: 'error',
            input: 'ERRO API',
            validation: 'api'
        })
    }
}