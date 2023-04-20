let input = "54129896083"
// let input = "541.298.960-83"

let processedInput = JSON.stringify({"type":"CPF","input":true,"inputRecognized":"validation"})

console.log(run(input, processedInput))

function run(input, processedInput) {
    processedInput = JSON.parse(processedInput)
    const isCpf = processedInput.input

    if (isCpf) {
        //Conta quantas aparições possui de .
        let dot = (input.match(/\./g) || []).length        
        //Conta quantas aparições possui de -
        let hifen = (input.match(/-/g) || []).length        


        for (let i = 0; i < dot; i++) {
            input = input.replace(".", "")
        }
        for (let i = 0; i < hifen; i++) {
            input = input.replace("-", "")
        }
        return input
    } else {
        return "INVALID CPF"
    }        
}