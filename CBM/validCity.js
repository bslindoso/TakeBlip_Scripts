function run(input) {
    try {
        let isString = input.replace(/[0-9]/g, 'ERRO CIDADE')
        input = input.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        input = input.toLowerCase()
        input = input.replace(" ", "-")

        if (isString.includes('ERRO CIDADE')) {
            return { type: 'error', input: 'ERRO CIDADE', validation: 'cidade' }
        }
        return {type: 'success', input: input, validation: 'cidade'}

    }
    catch (e) {
        return {type: 'error', input: 'ERRO SCRIPT', validation: 'script'}
    }
}

console.log(run("amapá"))