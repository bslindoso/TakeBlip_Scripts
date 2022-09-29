// previousState => state.previous.name
// typeInput => validInputJs@input
function run(previousState, typeInput) {
    typeInput = JSON.parse(typeInput).input
    let idFormated = previousState.split(" ")
    idFormated = idFormated[0].replace("[","").replace("]","")
    const exception = {
        id: `${idFormated}`,
        input: '{{input.content}}',
        redirectMenu: typeInput
    }
    return exception
}