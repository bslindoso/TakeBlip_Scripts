var options = [
    ['Sim, podemos', 'Sim', 'Claro', 'Certo', 'Ok', 'Yes', 'S', 'Ss'],
    ['Não', 'Nao', 'Incorreto', 'No', 'N', 'Nn']
]

var inputInesperado = 'ERRO DINAMICO'

const run = (input) => {
    
    let match_proccess = { type: 'error', input: inputInesperado, validation: 'mensagem ativa' }
    // Para cada opção da lista options    
    options.forEach((value, key) => {
        value.forEach(e => {

            if (input.toLowerCase() === e.toLowerCase()) {                
                match_proccess = {
                    type: 'success',
                    match: [e, value[0]],
                    input: value[0],
                    validation: 'mensagem ativa'
                }
            }

        });        
    })

    return match_proccess
}

/* ===============================================
    TESTE
   =============================================== */
// console.log(run('S'))



/* ===============================================
    USANDO OBJECT ENTRIES
   =============================================== */
// var options = Object.entries({
//     'Sim, podemos': ['Sim', 'Claro', 'Certo', 'Ok', 'Yes', 'S', 'Ss'],
//     'Não': ['Nao', 'Incorreto', 'No', 'N', 'Nn']
// })

// var inputInesperado = 'ERRO DINAMICO'

// const run = (input) => {

//     let match
//     let match_proccess = { type: 'error', input: inputInesperado, validation: 'mensagem ativa'}
//     // Para cada opção da lista options
//     for (const [key, values] of options) {

//         // Adiciona a Key do objeto options ao array de comparação
//         values.unshift(key)

//         values.forEach(e => {
            
//             if (input.toLowerCase() === e.toLowerCase()) {
//                 match = true
//                 match_proccess = {
//                     type: 'success',
//                     match: [e, key],
//                     input: key,
//                     validation: 'mensagem ativa'
//                 }
//             }

//         });

//         if (match) {break}
//     }

//     return match_proccess
// }
