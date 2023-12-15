function run(response, pagAtual) {
    let mensageObject = {
        text: '',
        totalMenu: 0,
        response: response
    }
    let responseObj = JSON.parse(response)
    pagAtual = JSON.parse(pagAtual)

    // Monta numeração do Menu
    for (let i = 0; i < responseObj.length; i++) {
        let thisObj = responseObj[i];
        thisObj.indice = i + 1;
    }

    // Verifica quantos menus vão existir
    let totalMenu = 0;
    if (responseObj.length % 10 == 0) {
        totalMenu = responseObj.length / 6;

    } else {
        totalMenu = Math.trunc(responseObj.length / 6) + 1;
    }

    // Criando texto do menu
    let texto = '';
    let multiplierAnterior;
    if (pagAtual == 1) {
        multiplierAnterior = 0;
    } else {
        multiplierAnterior = (pagAtual - 1) * 6;
    }
    let multiplier = pagAtual * 7;
    for (let i = multiplierAnterior; i < multiplier; i++) {
                
        //montar dados para paginação
        texto += [`${responseObj[i]}"`] 
        if (responseObj.length === i + 1) {
            break;
        }
    }

    mensageObject.text = [texto];
    mensageObject.totalMenu = totalMenu;
    mensageObject.response = responseObj;

    return mensageObject

}
console.log(run(JSON.stringify([
    'Escavadeira',
    'Motoniveladora',
    'Rolo compactador',
    'Trator de pneus',
    'Carregadeira',
    'Guindaste',
    'Bomba de concreto',
    'Vidro acabadora',
    'Usina de asfalto / Concreto',
    'Perfuratriz hidráulica'
  ]), '1'))

//{'equipamento':'Escavadeira'}, {'equipamento':'Motoniveladora'}, {'equipamento':'Trator de esteira'}, {'equipamento':'Rolo compactador'}, {'equipamento':'Trator de pneus'}, {'equipamento':'Carregadeira'}, {'equipamento':'Menu anterior'},{'equipamento':'Guindaste'}, {'equipamento':'Bomba de concreto'}, {'equipamento':'Vidro acabadora'}, {'equipamento':'Usina de asfalto / Concreto'}, {'equipamento':'Perfuratriz hidráulica'}