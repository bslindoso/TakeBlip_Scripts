// ================================================================================
// OLD VERSION
// ================================================================================
// function run(input, menu) {
//     try {
//         menu = JSON.parse(menu);
//         input = input.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
//         input = input.split(" ")[0]
//         const opcao = menu.itens;

//         for (i = 0; i < opcao.length; i++) {
//             for (x = 0; x < opcao[i].name.length; x++) {
//                 if (opcao[i].name[x].includes(input)) {
//                     return opcao[i].name[0]
//                 }
//             }
//         }
//         return 'INPUT INESPERADO'
//     }
//     catch (e) {
//         return 'error'
//     }
// }
// ================================================================================

function run(input, menu) {
    try {
        menu = JSON.parse(menu);
        const opcao = menu.itens;

        for (i = 0; i < opcao.length; i++) {
            for (x = 0; x < opcao[i].name.length; x++) {
                if (opcao[i].name[x] == input) {
                    return opcao[i].name[0]
                }
            }
        }
        return 'INPUT INESPERADO'
    }
    catch (e) {
        return 'validInputJS ERROR: UNEXPECTED ERROR'
    }
}