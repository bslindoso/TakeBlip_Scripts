function run(enterpriseListObj, pagAtual) {
    try {
        enterpriseListObj = JSON.parse(enterpriseListObj)
        let text = enterpriseListObj.text.replace("\n", "\n")
        pagAtual = parseInt(pagAtual)
        let totalPagina = parseInt(enterpriseListObj.totalMenu)

        //se total de página for 1 (não apresentar ver mais páginas)
        if (totalPagina == 1) {
            return `${text}`
        }
        //se total de páginas maior que 1 e página atual for 1 (ver mais)
        if (totalPagina > 1 && pagAtual == 1) {
            return `${text} \n{{n1}}0.{{n2}} Ver mais Pedidos`
        }
        //se total de páginas maior que 1 e pagina atual for menor que total de páginas (ver mais e ver menos)
        if (totalPagina > 1 && pagAtual < totalPagina) {
            return `${text}\n{{n1}}0.{{n2}} Ver mais Pedidos\n\n👉 Digite “voltar” para visualizar as opções anteriores.`
        }
        //se total de páginas maior que 1 e pagina atual fou igual ao total de páginas (ver menos)
        if (totalPagina > 1 && pagAtual == totalPagina) {
            return `${text}\n👉 Digite “voltar” para visualizar as opções anteriores.`
        }
        return "error"

    }
    catch (e) {
        return 'error'
    }

}

console.log(run(JSON.stringify({"text":"{{n1}}1{{n2}}. 1268553514050 | RS 955.28 | 13/10/2022\n{{n1}}2{{n2}}. 1267663510655 | RS 619.96 | 09/10/2022\n{{n1}}3{{n2}}. 1263813491369 | RS 297.00 | 23/09/2022\n{{n1}}4{{n2}}. 1258772418027 | RS 369.57 | 02/09/2022\n{{n1}}5{{n2}}. 1257740944233 | RS 1918.90 | 29/08/2022\n","totalMenu":2,"response":[{"Pedido":{"NumeroPedido":"1268553514050","DataCriacao":"2022-10-13T15:17:38.8171043+00:00","ValorDoPedido":955.28,"Entregas":[{"MetodoEntrega":"Entrega Shoulder","DataEstimada":"2022-10-18T19:00:00+00:00","Status":"Faturado","URLRastreio":null,"CodigoRastreio":null},{"MetodoEntrega":"Entrega Shoulder Tamboré","DataEstimada":"2022-10-19T13:00:00+00:00","Status":"Entregue a Transportadora","URLRastreio":"http://tracking.totalexpress.com.br/poupup_track.php?reid=20197&pedido=990&nfiscal=000002064","CodigoRastreio":"246321028"}]},"indice":1},{"Pedido":{"NumeroPedido":"1267663510655","DataCriacao":"2022-10-09T21:34:45.8502878+00:00","ValorDoPedido":619.96,"Entregas":[{"MetodoEntrega":"Entrega Shoulder","DataEstimada":"2022-10-13T19:00:00+00:00","Status":"Faturado","URLRastreio":null,"CodigoRastreio":null}]},"indice":2},{"Pedido":{"NumeroPedido":"1263813491369","DataCriacao":"2022-09-23T20:32:39.3272703+00:00","ValorDoPedido":297,"Entregas":[{"MetodoEntrega":"Entrega Shoulder Oscar Freire","DataEstimada":"2022-09-28T13:00:00+00:00","Status":"Entregue a Transportadora","URLRastreio":"http://tracking.totalexpress.com.br/poupup_track.php?reid=20197&pedido=9371&nfiscal=000025733","CodigoRastreio":"243796676"}]},"indice":3},{"Pedido":{"NumeroPedido":"1258772418027","DataCriacao":"2022-09-02T20:40:18.5837812+00:00","ValorDoPedido":369.57,"Entregas":[{"MetodoEntrega":"Entrega Shoulder","DataEstimada":"2022-09-09T17:00:00+00:00","Status":"Entregue a Transportadora","URLRastreio":"https://www.loggi.com/rastreador/225be1aa0c/1258772418027-01","CodigoRastreio":"1258772418027-01"}]},"indice":4},{"Pedido":{"NumeroPedido":"1257740944233","DataCriacao":"2022-08-29T14:15:43.7754155+00:00","ValorDoPedido":1918.9,"Entregas":[{"MetodoEntrega":"Entrega Shoulder","DataEstimada":"2022-09-02T19:00:00+00:00","Status":"Faturado","URLRastreio":null,"CodigoRastreio":null}]},"indice":5},{"Pedido":{"NumeroPedido":"1249642238339","DataCriacao":"2022-07-26T19:37:16.5561851+00:00","ValorDoPedido":379,"Entregas":[{"MetodoEntrega":"Entrega Shoulder","DataEstimada":"2022-08-01T19:00:00+00:00","Status":"Faturado","URLRastreio":null,"CodigoRastreio":null}]},"indice":6}]}), '1'))