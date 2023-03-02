//['Escavadeira', 'Motoniveladora', 'Trator de esteira', 'Rolo compactador', 'Trator de pneus', 'Carregadeira', 'Menu anterior','Guindaste', 'Bomba de concreto', 'Vidro acabadora', 'Usina de asfalto / Concreto', 'Perfuratriz hidráulica']
function run(input, list) {
    try {
        list = JSON.parse(list)
        let newlist = []

        let removeList = list.indexOf(input)

        if (removeList > -1) {
            for (let i = 0; list.length > i; i++) {
                if (removeList != i) {
                    newlist.push(list[i])
                }
            }
            return newlist
        }

        return list
    }
    catch (e) {
        return 'error'
    }
}

//Trator de esteira

console.log(run('Visual', JSON.stringify([
    'Física',
    'Auditiva',
    'Visual',
    'Intelectual',
    'Reabilitado'
])))