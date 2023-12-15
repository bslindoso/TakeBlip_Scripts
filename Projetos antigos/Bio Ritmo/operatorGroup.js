// operatorGroup
let operatorGroup = 'JU - Alunos'
//resource.operatorGroupList
let operatorGroupList = [{'nome': 'Uniforme', 'id': '52925466-38f9-4208-befa-33431d67a275'},
    {'nome': 'Ponto', 'id': '7f1a0498-f5e8-4ecf-bbef-b729f5265877'},
    {'nome': 'Admissão', 'id': 'eaad2de9-3d4f-4476-a371-a80a1bdc7d8c'},
    {'nome': 'CREF', 'id': '7ecf30e0-e0a3-400b-b261-0b2f629dd1ec'},
    {'nome': 'Benefícios', 'id': 'd8ea81eb-7918-4684-b882-e86550d2409b'},
    {'nome': 'Rescisão', 'id': '86401aae-c5ba-4bb9-aad5-6d548dd457b1'},
    {'nome': 'Autônomo', 'id': '2f876189-fff2-4353-8d56-30653ab871f7'},
    {'nome': 'Folha de Pagamento', 'id': '36ed5c16-b9f1-4012-bcf6-e1acc7cece6e'},
    {'nome': 'Medicina e Segurança do Trabalho', 'id': '7056ee11-9b86-4bfc-b25c-fc23bb1bcbdd'},
    {'nome': 'Convênios', 'id': 'e9df5c97-4e2e-4c62-9d91-fa139e402fa3'},
    {'nome': 'Advertencia/suspensao', 'id': 'a1b28d93-8db1-4335-b261-9c71c6f2ff14'},
    {'nome': 'Comunicação Interna', 'id': '97f2cd60-eb5b-42a1-a94a-fb89e64238c1'},
    {'nome': 'Expenses - Auditoria', 'id': '5e5412f7-ec2e-465f-9d15-a3c44f47e651'},
    {'nome': 'Personal', 'id': '4a9afc46-100f-47b7-98a1-625f46d9b77f'},
    {'nome': 'Férias', 'id': '7d2deb8c-7036-444f-a1a4-c4e1672090df'},
    {'nome': 'PJ', 'id': '3e0be896-260e-4767-abb0-4a41df8023f4'},
    {'nome': 'Parceiros', 'id': '9eaae990-1e3c-4347-9021-406b725bcf8e'},
    {'nome': 'Promoções e Transferências', 'id': 'f50bc49e-2dbf-4192-8ed7-887fd132face'},
    {'nome': 'Programa de Gestantes', 'id': '7d6dbdf0-8b15-4fba-962d-a5cbc6588817'},
    {'nome': 'JU Alunos', 'id': '57f8ca49-b9a0-45b0-bcd8-91398e3211af'},
    {'nome': 'Recrutamento e Seleção', 'id': '7e4f71ca-5351-4181-981f-630e2c90a29e'}
]

operatorGroupList = JSON.stringify(operatorGroupList)

console.log(run(operatorGroup, operatorGroupList))

function run(operatorGroup, operatorGroupList)  {

    operatorGroupList = JSON.parse(operatorGroupList)

    for (let i = 0; i < operatorGroupList.length; i++) {
        if (operatorGroupList[i].nome == operatorGroup) {
            return operatorGroupList[i].id
        }
    }

    return 'ERROR: NÃO CONTRADO NO OPERATORGROUPLIST O OPERATORGROUP SELECIONADO'
}