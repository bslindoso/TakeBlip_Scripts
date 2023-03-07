function run(response, pagAtual) {
    let mensageObject = {
        text: '',
        totalMenu: 0,
        response: response
    }
    let responseObj = response; 
    //JSON.parse(response)
    pagAtual = parseInt(pagAtual);

    // Monta numeração do Menu
    for (let i = 0; i < responseObj.length; i++) {
        let thisObj = responseObj[i];
        thisObj.indice = i + 1;
    }

    // Verifica quantos menus vão existir
    let totalMenu = 0;
    if (responseObj.length % 9 == 0) {
        totalMenu = responseObj.length / 9;

    } else {
        totalMenu = Math.trunc(responseObj.length / 9) + 1;
    }
    
    // Criando texto do menu
    let texto = '';
    let multiplierAnterior;
    if (pagAtual == 1) {
        multiplierAnterior = 0;
    } else {
        multiplierAnterior = (pagAtual - 1) * 9;
    }
    let multiplier = pagAtual * 9;
    for (let i = multiplierAnterior; i < multiplier; i++) {
        texto +=`{{n1}}${responseObj[i].indice}{{n2}}. ${responseObj[i].nome}\n`
        if (responseObj.length === i + 1) {
            break;
        }
    }

    mensageObject.text = texto;
    mensageObject.totalMenu = totalMenu;
    mensageObject.response = responseObj;

    return JSON.stringify(mensageObject)

}

console.log(run([
    {
        "id": 268,
        "nome": "Auguri Mooca"
    },
    {
        "id": 270,
        "nome": "W/L Vila Romana"
    },
    {
        "id": 271,
        "nome": "Highlights Campo Belo"
    },
    {
        "id": 272,
        "nome": "Florear / Vila Clementino"
    },
    {
        "id": 276,
        "nome": "Highlights Jardim Prudência"
    },
    {
        "id": 274,
        "nome": "Highlights Pinheiros"
    },
    {
        "id": 281,
        "nome": "Astral Saúde"
    },
    {
        "id": 280,
        "nome": "Unik / Nova Klabin"
    },
    {
        "id": 265,
        "nome": "Vista Bela / Santo Amaro"
    },
    {
        "id": 264,
        "nome": "Jardim Botânico / Santo Amaro"
    },
    {
        "id": 273,
        "nome": "Lorena / Jardins"
    },
    {
        "id": 279,
        "nome": "Belterra / Chácara Flora"
    },
    {
        "id": 287,
        "nome": "Jardim das Perdizes"
    },
    {
        "id": 36,
        "nome": "Outros"
    }
], 1))