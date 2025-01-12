function run(hideInputText) {

    let inputText = `Quantos pneus você precisa?

💡{{n1}}Por favor, digite um número.{{n2}}`

    if (hideInputText == true || hideInputText == "true") {
        return "";
    } else  {
        return inputText
    }
}