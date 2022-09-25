// SAUDAÇÃO

// <<<<Var of input>>>> 
// input.content

// <<<<var de saida>>>>
// saudacao

// <<<condição>>>

// <<<Script>>>>

function run() {
    return getHorasAtual();
}

function getHorasAtual() {
    const data = new Date();
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    const tempo = (horas * 3600) + (minutos * 60) + segundos;

    if (tempo >= 60 && tempo < 43260) return "bom dia";
    else if (tempo >= 43260 && tempo < 64860) return "boa tarde";
    else return "boa noite";
}

console.log(run());