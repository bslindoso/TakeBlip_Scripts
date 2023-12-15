function run(exception) {
    try {
        let exceptionJs = JSON.parse(exception).redirectMenu

        if (exceptionJs == 'ERRO DINAMICO') {
            return `Não entendi o que você quis dizer ☹️ \nVamos tentar novamente? Preciso que {{n1}}selecione{{n2}} uma das opções abaixo.`
        }
        if (exceptionJs == 'ERRO NOTA') {
            return `Hmmm, não consegui entender sua nota... Por favor, digite somente o {{n1}}número{{n2}}. 😔`
        }
        if (exceptionJs == 'ERRO API') {
            return `Infelizmente, estamos passando por instabilidade em nosso sistema e ocorreu algum erro... 😔 \n\nTente novamente daqui a alguns minutos.`
        }
    }
    catch (e) {
        return 'error'
    }

}

console.log(run())