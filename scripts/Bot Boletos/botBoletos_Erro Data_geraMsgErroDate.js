function run(erro) {
    let message;
    if (erro == "Erro inesperado") {
        erro = erro.toLowerCase();
        message = `Desculpe, houve um ${erro}. Para continuar, preciso que informe uma data no formato válido.`        
    } else if (erro == "Erro: A data informada é superior à data limite para atualização do boleto.") {
        erro = erro.replace("Erro: ", "").toLowerCase();
        message = `${erro}. Peço que verifique a informação e me encaminhe novamente, por favor.`
    } else {
        erro = erro.replace("Erro: ", "").toLowerCase();
        message = `Desculpe, {{n1}}${erro}{{n2}}. Para continuar, preciso que informe uma data no formato válido.`
    };
    return message;
};