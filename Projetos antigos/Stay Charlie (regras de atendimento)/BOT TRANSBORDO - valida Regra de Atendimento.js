// RESOURCE REGRASDEATENDIMENTO
const RegrasDeAtendimento = JSON.stringify({
    "regras": [
        {
            "id": 0,
            "filaPrincipal": "Inside Sales",
            "filaBackup": "Reservas"
        },
        {
            "id": 1,
            "filaPrincipal": "Fila 1",
            "filaBackup": "Atendimento"
        },
        {
            "id": 2,
            "filaPrincipal": "Prorrogação",
            "filaBackup": "Reservas"
        },
        {
            "id": 3,
            "filaPrincipal": "Realocação, reembolso e cancelamento",
            "filaBackup": "Reservas"
        },
        {
            "id": 4,
            "filaPrincipal": "Fila 2",
            "filaBackup": "Atendimento"
        },
        {
            "id": 5,
            "filaPrincipal": "Fila 1",
            "filaBackup": "Atendimento"
        },
        {
            "id": 6,
            "filaPrincipal": "Inside Sales",
            "filaBackup": "Reservas"
        },
        {
            "id": 7,
            "filaPrincipal": "Fila 2",
            "filaBackup": "Atendimento"
        },
        {
            "id": 8,
            "filaPrincipal": "Check-In",
            "filaBackup": "Atendimento"
        },
        {
            "id": 9,
            "filaPrincipal": "Fila 1",
            "filaBackup": "Atendimento"
        },
        {
            "id": 10,
            "filaPrincipal": "Fila 2",
            "filaBackup": "Atendimento"
        },
        {
            "id": 11,
            "filaPrincipal": "Fila 2",
            "filaBackup": "Atendimento"
        },
        {
            "id": 12,
            "filaPrincipal": "Fila 1",
            "filaBackup" : "Atendimento"
        }
    ]
});

// VARIAVEL REGRAATENDIMENTO
let regraAtendimento = "3";

console.log(run(regraAtendimento, RegrasDeAtendimento))

function run(regraAtendimento, RegrasDeAtendimento) {
    try {        
        RegrasDeAtendimento = JSON.parse(RegrasDeAtendimento)
        const regras_config = RegrasDeAtendimento.regras

        defineFila = (regraAtendimento) => {
            const fila_config = {
                "0": regras_config[0],
                "1": regras_config[1],
                "2": regras_config[2],
                "3": regras_config[3],
                "4": regras_config[4],
                "5": regras_config[5],
                "6": regras_config[6],
                "7": regras_config[7],
                "8": regras_config[8],
                "9": regras_config[9],
                "10": regras_config[10],
                "11": regras_config[11],
                "12": regras_config[12],
                
            }      
            return fila_config[regraAtendimento] || 'ERROR: NO MATCH'
        }

        return JSON.stringify(defineFila(regraAtendimento))
    }
    catch (e) {
        return 'ERROR: SCRIPT FAILURE'
    }
}