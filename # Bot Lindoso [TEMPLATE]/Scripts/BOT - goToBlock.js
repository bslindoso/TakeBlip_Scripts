// SCRIPT PARA LEVAR CONDIÇÃO DE SAÍDA POR VAIRÁVEL (BLOCK ID)
function run(validInput) {
    let input = JSON.parse(validInput).input

    goToBlock = (input) => {
        const optionList = {
            'Quero comprar': 'f95c78ee-3f19-4994-a7fa-94d882f0a166',
            'Tirar dúvidas': 'a07dfef2-c0a2-457d-98cb-29db278066c6',
            'Problemas com acesso': '8420c2db-e4c5-481b-983c-257ba939db2c',
            'Financeiro': 'b2037e92-ce8a-417d-8ae4-8d1525880308',
            'Problemas com conteúdo': '1a3395c2-6489-4bed-b251-a798135e9ba7',
            'Falar sobre bônus': 'be958103-3c49-45d5-ab8d-0263edbf8636',
            'Mentoria ao vivo': '0ea7603a-79b5-4fed-8e55-5206d4384084',
            'Cancelamento': '3e4f6503-2908-439b-b812-985c98f0def2',
            '↩️ Menu principal': '79699b3e-9792-4285-afc5-b5aa42552260'
        }

        return optionList[input] || 'ERROR: NO MATCH'
    }

    return goToBlock(input);
}