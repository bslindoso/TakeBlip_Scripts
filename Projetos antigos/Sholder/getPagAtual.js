function run(pagAtual, input){
    try{
        pagAtual = parseInt(pagAtual)
        input = JSON.parse(input).input
        input = input.toUpperCase()
        //Voltar a página anterior
        if(input == 'VOLTAR'){
            if (pagAtual <= 1) {
                return pagAtual
            }
            return (pagAtual - 1)
        }
        
        //ir para a próxima página
        if(input == 'VER MAIS PEDIDOS'){
            return (pagAtual + 1)
        }

        if (pagAtual == NaN || pagAtual == 'NaN') {return 1}

        if (pagAtual == undefined || pagAtual == 'undefined') {return 1}

    return pagAtual;

    }
    catch(e){
        return 'error'
    }

}

console.log(run('1', JSON.stringify({
    "type": "success",
    "input": "VER MAIS PEDIDOS",
    "validation": "paginacao"
})))