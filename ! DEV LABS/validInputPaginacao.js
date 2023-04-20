function run(input, enterpriseListObj, pagAtual) {
    try {

        input = input.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        let response = enterpriseListObj.response
        // let response = JSON.parse(enterpriseListObj).response
        pagAtual = parseInt(pagAtual)

        let opcao = [
            { name: ['ERRO NUMERICO', 'OI'] },
            { name: ['MENU', 'REINICIAR'] },
            { name: ['SAIR'] }
        ]

        // Adiciona cenários onde deve reconhecer o Ver mais empreendimentos
        if ((pagAtual != 1) && (pagAtual < enterpriseListObj.totalMenu)) {
            opcao.push({ name: ['Ver mais empreendimentos', '0'] })
        }
        if (pagAtual == 1 && enterpriseListObj.totalMenu != 1) {
            opcao.push({ name: ['Ver mais empreendimentos', '0'] })
        }

        // Adiciona cenários onde deve reconhecer o voltar
        //            { name: ['VOLTAR', 'voltar'] },
        if (pagAtual > 1) {
            opcao.push({ name: ['VOLTAR', 'voltar'] })
        }

        for (i = 0; i < response.length; i++) {
            opcao.push({ name: [response[i].nome, response[i].nome.toLowerCase(), response[i].nome.toUpperCase(), response[i].indice.toString(), response[i].indice.toString() + ".", response[i].indice + ". " + response[i].nome] })
        }

        for (i = 0; i < opcao.length; i++) {
            for (x = 0; x < opcao[i].name.length; x++) {
                if (opcao[i].name[x] == (input)) {
                    return opcao[i].name[0]
                }
            }
        }

        return 'ERRO NUMERICO'
    }
    catch (e) {
        return 'error'
    }
}

let input = '0'
let pagAtual = 2;
let enterpriseListObj = {
    "text": "<b>10</b>. Jardim Botânico / Santo Amaro \n<b>11</b>. Lorena / Jardins \n<b>12</b>. Belterra / Chácara Flora \n<b>13</b>. Jardim das Perdizes \n<b>14</b>. Outros \n",
    "totalMenu": 2,
    "response": [
        {
            "id": 268,
            "nome": "Auguri Mooca",
            "indice": 1
        },
        {
            "id": 270,
            "nome": "W/L Vila Romana",
            "indice": 2
        },
        {
            "id": 271,
            "nome": "Highlights Campo Belo",
            "indice": 3
        },
        {
            "id": 272,
            "nome": "Florear / Vila Clementino",
            "indice": 4
        },
        {
            "id": 276,
            "nome": "Highlights Jardim Prudência",
            "indice": 5
        },
        {
            "id": 274,
            "nome": "Highlights Pinheiros",
            "indice": 6
        },
        {
            "id": 281,
            "nome": "Astral Saúde",
            "indice": 7
        },
        {
            "id": 280,
            "nome": "Unik / Nova Klabin",
            "indice": 8
        },
        {
            "id": 265,
            "nome": "Vista Bela / Santo Amaro",
            "indice": 9
        },
        {
            "id": 264,
            "nome": "Jardim Botânico / Santo Amaro",
            "indice": 10
        },
        {
            "id": 273,
            "nome": "Lorena / Jardins",
            "indice": 11
        },
        {
            "id": 279,
            "nome": "Belterra / Chácara Flora",
            "indice": 12
        },
        {
            "id": 287,
            "nome": "Jardim das Perdizes",
            "indice": 13
        },
        {
            "id": 36,
            "nome": "Outros",
            "indice": 14
        }
    ]
}
console.log(run(input, enterpriseListObj, pagAtual))