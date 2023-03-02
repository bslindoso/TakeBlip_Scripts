function run(response, input, cpf, phone) {
    try {
        let responseObj = JSON.parse(response).response
        input = JSON.parse(input).input

        // Criando Dados do pedido
        let statusList = ``
        let status = ''
        let text = ''
        let listFinish = ''
        let thisObj = 0;
        let requestValue = ''
        let trackingCode = ''
        let estimatedDate = ''


        //Frase dos pedidos com mais de 1 status
        for (let i = 0; i < responseObj.length; i++) {
            if (responseObj[i].Pedido.NumeroPedido == input && responseObj[i].Pedido.Entregas.length > 1) {
                for (let x = 0; x < responseObj[i].Pedido.Entregas.length; x++) {
                    let delivery = responseObj[i].Pedido.Entregas[x]
                    delivery = JSON.stringify(delivery)
                    delivery = JSON.parse(delivery)

                    //Corrige o erro da API para os campos de Entregas
                    if (status = delivery.Status) {
                        status = delivery.Status
                    }

                    //cria a lista dos status existentes para o pedido
                    status[x] = delivery.Status


                    // Monta a regra de jogar os status 'Faturado' ou 'Entregue' para o fim da lista
                    if (responseObj[i].Pedido.Entregas[x].Status == 'Faturado' || responseObj[i].Pedido.Entregas[x].Status == 'Entregue') {
                        listFinish = '\n\n' + '🧾 Entrega ' + responseObj[i].Pedido.Entregas.length + '\n' + status
                    }

                    //Cria a númeração que virá após a palavra *entrega* ex: (🧾 Entrega *1*) e monta a lista com os status diferente de 'Faturado' ou 'Entregue'
                    else {
                        if (thisObj == 0) {
                            thisObj = 1
                        }
                        else {
                            thisObj = thisObj + 1
                        }

                        statusList += '\n\n' + '🧾 Entrega ' + thisObj + '\n' + status
                    }
                    if (responseObj[i].Pedido.Entregas.length === x + 1) {
                        break;
                    }
                }

                return text + statusList + listFinish
            }

            //Frase dos pedidos com apenas 1 status
            if (responseObj[i].Pedido.NumeroPedido == input && responseObj[i].Pedido.Entregas.length == 1) {
                for (let x = 0; x < responseObj[i].Pedido.Entregas.length; x++) {

                    //cria as varáveis de dados do pedido
                    let createdDate = `${responseObj[i].Pedido.DataCriacao.split("T")[0].split("-").reverse().join(`/`)}`
                    let requestValue = `${responseObj[i].Pedido.ValorDoPedido}`
                    let store = `${responseObj[i].Pedido.Entregas[x].MetodoEntrega}`
                    let estimatedDate = `${responseObj[i].Pedido.Entregas[x].DataEstimada.split("T")[0].split("-").reverse().join(`/`)}`
                    let status = `${responseObj[i].Pedido.Entregas[x].Status}`
                    let urlTracking = `${responseObj[i].Pedido.Entregas[x].URLRastreio}`
                    let trackingCode = `${responseObj[i].Pedido.Entregas[x].CodigoRastreio}`

                    //Cria as frases para cada status
                    if (status == 'Pedido recebido') {
                        text = `${cpf} | ${phone} | ${input} | ${requestValue} | ${estimatedDate} | ${trackingCode}`
                        return text
                    }

                    if (status == 'Pagamento Aprovado') {
                        text = `${cpf} | ${phone} | ${input} | ${requestValue} | ${estimatedDate} | ${trackingCode}`
                        return text
                    }

                    if (status == 'Preparando Entrega') {
                        text = `${cpf} | ${phone} | ${input} | ${requestValue} | ${estimatedDate} | ${trackingCode}`
                        return text
                    }

                    if (status == 'Entregue a Transportadora') {
                        text = `${cpf} | ${phone} | ${input} | ${requestValue} | ${estimatedDate} | ${trackingCode}`
                        return text
                    }

                    if (status == 'Faturado') {
                        if (trackingCode == null || trackingCode == 'null' || trackingCode == '') {
                            text = `${cpf} | ${phone} | ${input} | ${requestValue} | ${estimatedDate} | ${trackingCode}`
                            return text
                        }
                        text = `${cpf} | ${phone} | ${input} | ${requestValue} | ${estimatedDate} | ${trackingCode}`
                        return text
                    }

                    if (status == 'Entregue') {
                        text = `${cpf} | ${phone} | ${input} | ${requestValue} | ${estimatedDate} | ${trackingCode}`
                        return text
                    }

                }
            }
        }
        return `${cpf} | ${phone} | ${input} | ${requestValue} | ${estimatedDate} | ${trackingCode}`
    }

    catch (e) {
        return 'error'
    }
}

console.log(run(JSON.stringify({
    "text": "<b>1</b>. 1281973573734 | RS 427.02 | 08/12/2022\n<b>2</b>. 1281793573138 | RS 149.50 | 07/12/2022\n<b>3</b>. 1281793573101 | RS 329.50 | 07/12/2022\n<b>4</b>. 1281783573062 | RS 249.50 | 07/12/2022\n<b>5</b>. 1280553568539 | RS 219.50 | 02/12/2022\n",
    "totalMenu": 2,
    "response": [
        {
            "Pedido": {
                "NumeroPedido": "1281973573734",
                "DataCriacao": "2022-12-08T12:45:55.9184766+00:00",
                "ValorDoPedido": 427.02,
                "QuantidadeItens": 1,
                "Entregas": [
                    {
                        "MetodoEntrega": "Entrega Shoulder Morumbi",
                        "DataEstimada": "2022-12-12T13:00:00+00:00",
                        "QuantidadeItens": 1,
                        "Status": "Entregue a Transportadora",
                        "URLRastreio": "http://tracking.totalexpress.com.br/poupup_track.php?reid=20197&pedido=18224&nfiscal=000076518",
                        "CodigoRastreio": "257330658"
                    }
                ]
            },
            "indice": 1
        },
        {
            "Pedido": {
                "NumeroPedido": "1281793573138",
                "DataCriacao": "2022-12-07T19:14:20.0578112+00:00",
                "ValorDoPedido": 149.5,
                "QuantidadeItens": 2,
                "Entregas": [
                    {
                        "MetodoEntrega": "Retira na Loja Shoulder Cidade São Paulo",
                        "DataEstimada": "2022-12-07T19:15:14.9394619+00:00",
                        "QuantidadeItens": 1
                    }
                ]
            },
            "indice": 2
        },
        {
            "Pedido": {
                "NumeroPedido": "1281793573101",
                "DataCriacao": "2022-12-07T18:46:01.2068628+00:00",
                "ValorDoPedido": 329.5,
                "QuantidadeItens": 3,
                "Entregas": [
                    {
                        "MetodoEntrega": "Retira na Loja Shoulder Cidade São Paulo",
                        "DataEstimada": "2022-12-07T18:46:06.4969614+00:00",
                        "QuantidadeItens": 1
                    }
                ]
            },
            "indice": 3
        },
        {
            "Pedido": {
                "NumeroPedido": "1281783573062",
                "DataCriacao": "2022-12-07T18:12:35.2518608+00:00",
                "ValorDoPedido": 249.5,
                "QuantidadeItens": 4,
                "Entregas": [
                    {
                        "MetodoEntrega": "Retira na Loja Shoulder Cidade São Paulo",
                        "DataEstimada": "2022-12-07T18:13:29.1464769+00:00",
                        "QuantidadeItens": 1
                    }
                ]
            },
            "indice": 4
        },
        {
            "Pedido": {
                "NumeroPedido": "1280553568539",
                "DataCriacao": "2022-12-02T14:57:10.9506584+00:00",
                "ValorDoPedido": 219.5,
                "QuantidadeItens": 5,
                "Entregas": [
                    {
                        "MetodoEntrega": "Retira na Loja Shoulder Cidade São Paulo",
                        "DataEstimada": "2022-12-02T14:58:16.969793+00:00",
                        "QuantidadeItens": 1
                    }
                ]
            },
            "indice": 5
        },
        {
            "Pedido": {
                "NumeroPedido": "1279373561158",
                "DataCriacao": "2022-11-27T17:17:06.8747584+00:00",
                "ValorDoPedido": 189.5,
                "QuantidadeItens": 6,
                "Entregas": [
                    {
                        "MetodoEntrega": "Entrega Shoulder",
                        "DataEstimada": "2022-11-28T10:30:00+00:00",
                        "QuantidadeItens": 1,
                        "Status": "Faturado",
                        "URLRastreio": null,
                        "CodigoRastreio": null
                    }
                ]
            },
            "indice": 6
        }
    ]
}),"1280553568539", "07207269641", "31971032156"))