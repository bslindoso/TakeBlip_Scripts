function run(input, platform) {
    try {

        input = input.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        input = input.toUpperCase()
        input = input.split(" ")[0]
        platform = platform.toUpperCase()
        let error = 'ERRO MENU DINAMICO'
        if(platform == 'INSTAGRAM' || platform == 'MESSENGER'){
            error = 'ERRO MENU NUMERICO'
        }

        let opcao = [
            { name: [`${error}`, 'OI', 'TESTE'] }, 
            { name: ['BASICO', '1', '1.','UM'] },
            { name: ['FEMININO', '2', '2.', 'DOIS'] },
            { name: ['FITNESS', '3', '3.', 'TRES'] },
            { name: ['INFANTIL', '4.', '4', 'QUATRO'] },
            { name: ['MASCULINO', '5.', '5', 'CINCO'] },
            { name: ['PLUS', '6.', '6', 'SEIS'] },
            { name: ['PRE NATAL', '7.', '7', 'SETE'] },
            { name: ['SEXO SEGURO', '8.', '8', 'OITO'] },
            { name: ['TERCEIRA IDADE', '9.', '9', 'NOVE'] },
            { name: ['TIREOIDE', '10.', '10', 'DEZ'] },
            { name: ['MENU','VOLTAR AO INICIO', 'REINICIAR'] },
            { name: ['SAIR'] }
        ]

        for (i = 0; i < opcao.length; i++) {
            for (x = 0; x < opcao[i].name.length; x++) {
                if (opcao[i].name[x].includes(input)) {
                    return opcao[i].name[0]
                }
            }
        }
        return `${error}`
    }
    catch (e) {
        return 'error'
    }
}