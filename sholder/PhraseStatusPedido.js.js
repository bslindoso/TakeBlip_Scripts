function run(response, name, input) {
    try {
        let responseObj = JSON.parse(response).response
        input = JSON.parse(input).input

        // Criando Dados do pedido
        let statusList = ``
        let status = ''
        let text = ''
        let listFinish = ''
        let thisObj = 0;

        //Frase dos pedidos com mais de 1 status
        for (let i = 0; i < responseObj.length; i++) {
            if (responseObj[i].Pedido.NumeroPedido == input && responseObj[i].Pedido.Entregas.length > 1) {
                for (let x = 0; x < responseObj[i].Pedido.Entregas.length; x++) {
                    let delivery = responseObj[i].Pedido.Entregas[x]
                    delivery = JSON.stringify(delivery)
                    delivery = JSON.parse(delivery)

                    //Pega a frase inicial
                    if (x == 0) {
                        text = `${name}, notei que existe mais de uma entrega vinculada ao pedido: {{n1}}${responseObj[i].Pedido.NumeroPedido}{{n2}}.`
                    }                    

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
                        else{
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
                        text = `${name}, {{n1}}encontrei{{n2}} sua {{n1}}última compra{{n2}}! ☺ \n\n{{n1}}Aqui estão seus últimos pedidos:{{n2}} \n\n{{n1}}Nº do pedido:{{n2}} ${input} \n{{n1}}Data:{{n2}} ${createdDate} \n{{n1}}Valor:{{n2}} ${requestValue} \n{{n1}}Data estimada de entrega:{{n2}} ${estimatedDate} \n{{n1}}Loja responsável:{{n2}} ${store}`
                        return text
                    }

                    if (status == 'Pagamento Aprovado') {
                        text = `Eba! ${name}, sua última compra teve o pagamento aprovado. ✨ \n\n{{n1}}Aqui estão seus últimos pedidos:{{n2}} \n\n{{n1}}Nº do pedido:{{n2}} ${input} \n{{n1}}Data:{{n2}} ${createdDate} \n{{n1}}Valor:{{n2}} ${requestValue} \n{{n1}}Data estimada de entrega:{{n2}} ${estimatedDate} \n{{n1}}Loja responsável:{{n2}} ${store}`
                        return text
                    }

                    if (status == 'Preparando Entrega') {
                        text = `${name}, cuidamos de todos os detalhes até você! ☺ Sua {{n1}}última compra{{n2}} já está sendo {{n1}}preparada{{n2}} para {{n1}}entrega{{n2}} . \n\n{{n1}}Aqui estão seus últimos pedidos:{{n2}} \n\n{{n1}}Nº do pedido:{{n2}} ${input} \n{{n1}}Data:{{n2}} ${createdDate} \n{{n1}}Valor:{{n2}} ${requestValue} \n{{n1}}Data estimada:{{n2}} ${estimatedDate} \n{{n1}}Loja responsável:{{n2}} ${store}`
                        return text
                    }

                    if (status == 'Entregue a Transportadora') {
                        text = `Novos dias, novos looks chegando! ✨ \n\n${name}, sua {{n1}}última compra{{n2}} já foi {{n1}}entregue{{n2}} para {{n1}}transportadora{{n2}}. \n\n{{n1}}Acompanhe seus últimos pedidos:{{n2}} \n\n{{n1}}Nº do pedido:{{n2}} ${input} \n{{n1}}Data:{{n2}} ${createdDate} \n{{n1}}Valor:{{n2}} ${requestValue} \n{{n1}}Data estimada:{{n2}} ${estimatedDate} \n{{n1}}Código de rastreio:{{n2}} ${trackingCode}`
                        return text
                    }

                    if (status == 'Faturado') {
                        if(trackingCode == null || trackingCode == 'null' || trackingCode == ''){
                            text = `${name}, oba! Sua {{n1}}última compra{{n2}} já foi {{n1}}faturada{{n2}}! ✨ \n\n{{n1}}Aqui estão seus últimos pedidos:{{n2}} \n\n{{n1}}Nº do pedido:{{n2}} ${input} \n{{n1}}Data:{{n2}} ${createdDate} \n{{n1}}Valor:{{n2}} ${requestValue}`
                            return text
                        }
                        text = `${name}, oba! Sua {{n1}}última compra{{n2}} já foi {{n1}}faturada{{n2}}! ✨ \n\n{{n1}}Aqui estão seus últimos pedidos:{{n2}} \n\n{{n1}}Nº do pedido:{{n2}} ${input} \n{{n1}}Data:{{n2}} ${createdDate} \n{{n1}}Valor:{{n2}} ${requestValue} \n{{n1}}Código de rastreio:{{n2}} ${trackingCode}`
                        return text
                    }

                    if (status == 'Entregue') {
                        text = `${name}, Sua {{n1}}última compra{{n2}} já foi {{n1}}entregue{{n2}}. Aproveite seus looks! ✨ \n\n{{n1}}Aqui estão seus últimos pedidos:{{n2}} \n\n{{n1}}Nº do pedido:{{n2}} ${input} \n{{n1}}Data:{{n2}} ${createdDate} \n{{n1}}Valor:{{n2}} ${requestValue}`
                        return text
                    }

                }
            }
        }
    }

    catch (e) {
        return 'error'
    }
}



console.log(run(JSON.stringify({ "text": "{{n1}}1{{n2}}. 1268553514050 | RS 955.28 | 13/10/2022\n{{n1}}2{{n2}}. 1267663510655 | RS 619.96 | 09/10/2022\n{{n1}}3{{n2}}. 1263813491369 | RS 297.00 | 23/09/2022\n{{n1}}4{{n2}}. 1258772418027 | RS 369.57 | 02/09/2022\n{{n1}}5{{n2}}. 1257740944233 | RS 1918.90 | 29/08/2022\n", "totalMenu": 2, "response": [{ "Pedido": { "NumeroPedido": "1249642238339", "DataCriacao": "2022-07-26T19:37:16.5561851+00:00", "ValorDoPedido": 379, "Entregas": [{ "MetodoEntrega": "Entrega Shoulder", "DataEstimada": "2022-08-01T19:00:00+00:00", "Status": "Faturado", "URLRastreio": null, "CodigoRastreio": null }] }, "indice": 6 }] }), 'Barbara', JSON.stringify({ "type": "success", "input": "1249642238339", "validation": "paginacao" })))