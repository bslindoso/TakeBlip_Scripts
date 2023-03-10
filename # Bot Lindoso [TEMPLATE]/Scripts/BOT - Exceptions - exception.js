function run(previousState, typeInput) {
    try {
        typeInput = JSON.parse(typeInput).input
        let idFormated = previousState.split(' ');
        idFormated = idFormated[0].replace(/\[/g,'').replace(/\]/g,'').replace(/\./g,'');
        const exception = {
            id: `${idFormated}`,
            input: '{{input.content}}',
            redirectMenu: `${typeInput}`
        }
        return exception
    }
    catch (e) {
        return 'error'
    }
}