function run(response, input) {
    try {
        let responseObj = JSON.parse(response).response
        input = JSON.parse(input).input
        let status = ''
        let volumeOfDeliveries = ''
        let tracking = ''
        let dados = []

        //Buscando volume de entregas quando é somente 1 status
        for (let i = 0; i < responseObj.length; i++) {
            if (responseObj[i].Pedido.NumeroPedido == input && responseObj[i].Pedido.Entregas.length == 1) {
                volumeOfDeliveries = `${responseObj[i].Pedido.Entregas.length}`
                for (let x = 0; x < responseObj[i].Pedido.Entregas.length; x++) {
                    status = `${responseObj[i].Pedido.Entregas[x].Status}`

                    //Cria as trackins
                    if (status == 'Pedido recebido') {
                        tracking = `mostra de dados de pedido recebido exibicao`
                    }

                    if (status == 'Pagamento Aprovado') {
                        tracking = `mostra de dados de pedido com pagamento aprovado exibicao`
                    }

                    if (status == 'Preparando Entrega') {
                        tracking = `mostra de dados de pedido sendo preparado para entrega exibicao`
                    }

                    if (status == 'Entregue a Transportadora') {
                        tracking = `mostra de dados de pedido entregue a transportadora exibicao`
                    }

                    if (status == 'Faturado') {
                        tracking = `dados de pedido faturado exibicao`
                    }

                    if (status == 'Entregue') {
                        tracking = `dados de pedido entregue exibicao`
                    }

                    return {
                        'status': `${status}`,
                        'volumeOfDeliveries': `${volumeOfDeliveries}`,
                        'tracking': `${tracking}`
                    }
                }
            }

            //Buscando volume de entregas quando são mais de 1 status
            if (responseObj[i].Pedido.NumeroPedido == input && responseObj[i].Pedido.Entregas.length > 1) {
                volumeOfDeliveries = `${responseObj[i].Pedido.Entregas.length}`
                for (let x = 0; x < responseObj[i].Pedido.Entregas.length; x++) {
                    status = `${responseObj[i].Pedido.Entregas[x].Status}`
                    dados.push(status)
                    dados = JSON.stringify(dados)
                    dados = JSON.parse(dados)
                }
                if (dados.includes('Faturado') || dados.includes('Entregue')) {

                    status = true
                    dados = JSON.stringify(dados)
                    dados = JSON.parse(dados)
                    dados = `${dados}`
                }
                else {
                    status = false
                    dados = `${dados}`
                }
                return {
                    'statusList': `${dados}`,
                    'status': `${status}`,
                    'volumeOfDeliveries': `${volumeOfDeliveries}`,
                    'tracking': `dados de pedido mais de uma entrega exibicao`
                }
            }
        }
    }
    catch (e) {
        return 'error'
    }
}



console.log(run(JSON.stringify({ "text": "{{n1}}1{{n2}}. 1268553514050 | RS 955.28 | 13/10/2022\n{{n1}}2{{n2}}. 1267663510655 | RS 619.96 | 09/10/2022\n{{n1}}3{{n2}}. 1263813491369 | RS 297.00 | 23/09/2022\n{{n1}}4{{n2}}. 1258772418027 | RS 369.57 | 02/09/2022\n{{n1}}5{{n2}}. 1257740944233 | RS 1918.90 | 29/08/2022\n", "totalMenu": 2, "response": [{ "Pedido": { "NumeroPedido": "1268553514050", "DataCriacao": "2022-10-13T15:17:38.8171043+00:00", "ValorDoPedido": 955.28, "Entregas": [{ "MetodoEntrega": "Entrega Shoulder", "DataEstimada": "2022-10-18T19:00:00+00:00", "Status": "Faturado", "URLRastreio": null, "CodigoRastreio": null }, { "MetodoEntrega": "Entrega Shoulder Tamboré", "DataEstimada": "2022-10-19T13:00:00+00:00", "Status": "Entregue a Transportadora", "URLRastreio": "http://tracking.totalexpress.com.br/poupup_track.php?reid=20197&pedido=990&nfiscal=000002064", "CodigoRastreio": "246321028" }] }, "indice": 1 }, { "Pedido": { "NumeroPedido": "1267663510655", "DataCriacao": "2022-10-09T21:34:45.8502878+00:00", "ValorDoPedido": 619.96, "Entregas": [{ "MetodoEntrega": "Entrega Shoulder", "DataEstimada": "2022-10-13T19:00:00+00:00", "Status": "Faturado", "URLRastreio": null, "CodigoRastreio": null }] }, "indice": 2 }, { "Pedido": { "NumeroPedido": "1263813491369", "DataCriacao": "2022-09-23T20:32:39.3272703+00:00", "ValorDoPedido": 297, "Entregas": [{ "MetodoEntrega": "Entrega Shoulder Oscar Freire", "DataEstimada": "2022-09-28T13:00:00+00:00", "Status": "Entregue a Transportadora", "URLRastreio": "http://tracking.totalexpress.com.br/poupup_track.php?reid=20197&pedido=9371&nfiscal=000025733", "CodigoRastreio": "243796676" }] }, "indice": 3 }, { "Pedido": { "NumeroPedido": "1258772418027", "DataCriacao": "2022-09-02T20:40:18.5837812+00:00", "ValorDoPedido": 369.57, "Entregas": [{ "MetodoEntrega": "Entrega Shoulder", "DataEstimada": "2022-09-09T17:00:00+00:00", "Status": "Entregue a Transportadora", "URLRastreio": "https://www.loggi.com/rastreador/225be1aa0c/1258772418027-01", "CodigoRastreio": "1258772418027-01" }] }, "indice": 4 }, { "Pedido": { "NumeroPedido": "1257740944233", "DataCriacao": "2022-08-29T14:15:43.7754155+00:00", "ValorDoPedido": 1918.9, "Entregas": [{ "MetodoEntrega": "Entrega Shoulder", "DataEstimada": "2022-09-02T19:00:00+00:00", "Status": "Faturado", "URLRastreio": null, "CodigoRastreio": null }] }, "indice": 5 }, { "Pedido": { "NumeroPedido": "1249642238339", "DataCriacao": "2022-07-26T19:37:16.5561851+00:00", "ValorDoPedido": 379, "Entregas": [{ "MetodoEntrega": "Entrega Shoulder", "DataEstimada": "2022-08-01T19:00:00+00:00", "Status": "Faturado", "URLRastreio": null, "CodigoRastreio": null }] }, "indice": 6 }] }), JSON.stringify({ "type": "success", "input": "1268553514050", "validation": "paginacao" })))