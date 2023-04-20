// function atendimento() {
//     return {
//         "weekdays": [{
//             "day": "Domingo",
//             "id": 0,
//             "hourStart": "0001",
//             "hourEnd": "2359"
//         },
//         {
//             "day": "Segunda",
//             "id": 1,
//             "hourStart": "0001",
//             "hourEnd": "2359"
//         },
//         {
//             "day": "Terça",
//             "id": 2,
//             "hourStart": "0001",
//             "hourEnd": "2359"
//         },
//         {
//             "day": "Quarta",
//             "id": 3,
//             "hourStart": "0001",
//             "hourEnd": "2359"
//         },
//         {
//             "day": "Quinta",
//             "id": 4,
//             "hourStart": "0001",
//             "hourEnd": "2359"
//         },
//         {
//             "day": "Sexta",
//             "id": 5,
//             "hourStart": "0001",
//             "hourEnd": "2359"
//         },
//         {
//             "day": "Sábado",
//             "id": 6,
//             "hourStart": "0001",
//             "hourEnd": "2359"
//         }
//         ]
//     }
// }

// function fila1() {
//     return {
//         "weekdays": [{
//             "day": "Domingo",
//             "id": 0,
//             "hourStart": "0800",
//             "hourEnd": "2300"
//         },
//         {
//             "day": "Segunda",
//             "id": 1,
//             "hourStart": "0800",
//             "hourEnd": "2300"
//         },
//         {
//             "day": "Terça",
//             "id": 2,
//             "hourStart": "0800",
//             "hourEnd": "2300"
//         },
//         {
//             "day": "Quarta",
//             "id": 3,
//             "hourStart": "0800",
//             "hourEnd": "2300"
//         },
//         {
//             "day": "Quinta",
//             "id": 4,
//             "hourStart": "0800",
//             "hourEnd": "2300"
//         },
//         {
//             "day": "Sexta",
//             "id": 5,
//             "hourStart": "0800",
//             "hourEnd": "2300"
//         },
//         {
//             "day": "Sábado",
//             "id": 6,
//             "hourStart": "0800",
//             "hourEnd": "2300"
//         }
//         ]
//     }
// }

// const RegrasDeAtendimento = {
//     "regras": [
//         {
//             "id": 0,
//             "filaPrincipal": "Inside Sales",
//             "filaBackup": "Reservas"
//         },
//         {
//             "id": 1,
//             "filaPrincipal": "Fila 1",
//             "filaBackup": "Atendimento"
//         },
//         {
//             "id": 2,
//             "filaPrincipal": "Prorrogação",
//             "filaBackup": "Reservas"
//         },
//         {
//             "id": 3,
//             "filaPrincipal": "Realocação/reembolso/cancelamento",
//             "filaBackup": "Reservas"
//         },
//         {
//             "id": 4,
//             "filaPrincipal": "Fila 2",
//             "filaBackup": "Atendimento"
//         },
//         {
//             "id": 5,
//             "filaPrincipal": "Fila 1",
//             "filaBackup": "Atendimento"
//         },
//         {
//             "id": 6,
//             "filaPrincipal": "Inside Sales",
//             "filaBackup": "Reservas"
//         },
//         {
//             "id": 7,
//             "filaPrincipal": "Fila 2",
//             "filaBackup": "Atendimento"
//         },
//         {
//             "id": 8,
//             "filaPrincipal": "Check-In",
//             "filaBackup": "Atendimento"
//         },
//         {
//             "id": 9,
//             "filaPrincipal": "Fila 1",
//             "filaBackup": "Atendimento"
//         },
//         {
//             "id": 10,
//             "filaPrincipal": "Fila 2",
//             "filaBackup": "Atendimento"
//         },
//         {
//             "id": 11,
//             "filaPrincipal": "Fila 2",
//             "filaBackup": "Atendimento"
//         },
//         {
//             "id": 12,
//             "filaPrincipal": "Fila 1",
//             "filaBackup" : "Atendimento"
//         }
//     ]
// };

// let validaRegraAtendimento = JSON.stringify(RegrasDeAtendimento.regras[5])

// console.log(run(validaRegraAtendimento))













///////////////////////// AQUI COMEÇA O SCRIPT


// {{resource.WorkTime_CheckIn}}
// {{resource.WorkTime_Atendimento}}
// {{resource.WorkTime_Fila1}}
// {{resource.WorkTime_Fila2}}
// {{resource.WorkTime_InsideSales}}
// {{resource.WorkTime_Prorrogacao}}
// {{resource.WorkTime_RealocacaoReembolsoCancelamento}}
// {{resource.WorkTime_Reservas}}


function run(validaRegraAtendimento) {
    try {
        validaRegraAtendimento = JSON.parse(validaRegraAtendimento)
        let filaPrincipal = validaRegraAtendimento.filaPrincipal
        let filaBackup = validaRegraAtendimento.filaBackup



        //DEFINE QUAL RESOURCE SERÁ UTILIZADO
        defineQualWorkTime = (fila) => {
            const fila_config = {
                "Inside Sales": insideSales(),
                "Fila 1": fila1(),
                "Fila 2": fila2(),
                "Prorrogação": prorrogacao(),
                "Realocação/reembolso/cancelamento": realocacaoReembolsoCancelamento(),
                "Check-In": checkIn(),
                "Reservas": reservas(),
                "Atendimento": atendimento()

            }
            return fila_config[fila] || 'ERROR: NO MATCH'
        }

        
        const workTime = {
            principal: defineQualWorkTime(filaPrincipal),
            backup: defineQualWorkTime(filaBackup)
        }
                
        return workTime
    }
    catch (e) {
        return 'ERROR: SCRIPT FAILURE'
    }
}