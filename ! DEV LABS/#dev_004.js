let pneuEscolhido = JSON.stringify({
    "text": "Você escolheu 205/70R15 GOODYEAR WRANGLER FORTITUDE HT 96T SL\n\t\t\n\t\tQuantidade: 5\n\t\t\n\t\tR$ 3252,40 via Pix \n\t\tR$ 3460 em 6x sem juros\n\t\t\n\t\t⚠️ A montagem é gratuita. ",
    "img": "https://pneusnacional.com.br/wp-content/uploads/2023/07/WRANGLER-FORTITUDE-HT-1.jpg",
    "precoTotal": "3460",
    "precoDescontoAVista": "3252,40",
    "quantidade": 5,
    "pneuEscolhido": {
        "title": "205/70R15 GOODYEAR WRANGLER FORTITUDE HT 96T SL",
        "price": "692.00",
        "featured_src": "https://pneusnacional.com.br/wp-content/uploads/2023/07/WRANGLER-FORTITUDE-HT-1.jpg"
    }
})
let listaDeCombos = JSON.stringify([
    { "aro": "13", "valor_combo": "190", "desconto_pneu": "10" },
    { "aro": "14", "valor_combo": "190", "desconto_pneu": "10" },
    { "aro": "15", "valor_combo": "200", "desconto_pneu": "15" },
    { "aro": "16", "valor_combo": "210", "desconto_pneu": "15" },
    { "aro": "17", "valor_combo": "225", "desconto_pneu": "15" },
    { "aro": "18", "valor_combo": "245", "desconto_pneu": "20" },
    { "aro": "19", "valor_combo": "265", "desconto_pneu": "20" },
    { "aro": "20", "valor_combo": "285", "desconto_pneu": "20" },
    { "aro": "21", "valor_combo": "305", "desconto_pneu": "20" }
])

let validaAroNoCombo = JSON.stringify({ "type": "success", "aro": "15" })

console.log(run(pneuEscolhido, listaDeCombos, validaAroNoCombo))

function run(pneuEscolhido, listaDeCombo, validaAroNoCombo) {
    try {
        pneuEscolhido = JSON.parse(pneuEscolhido)
        listaDeCombo = JSON.parse(listaDeCombo)
        validaAroNoCombo = JSON.parse(validaAroNoCombo)

        const aro = validaAroNoCombo.aro
        const modeloPneu = pneuEscolhido.pneuEscolhido.title
        const quantidade = parseInt(pneuEscolhido.quantidade)
        const precoTotal = parseFloat(pneuEscolhido.precoTotal)
        const precoDescontoAVista = parseFloat(pneuEscolhido.precoDescontoAVista)

        for (let i = 0; i < listaDeCombo.length; i++) {
            if (aro == listaDeCombo[i].aro) {
                var comboEscolhido = listaDeCombo[i];
                break;
            };
        }

        const descontoPorPneu = parseFloat(comboEscolhido.desconto_pneu)
        const precoCombo = parseFloat(comboEscolhido.valor_combo)
        const precoTotalAjustado = (precoTotal + precoCombo - (quantidade * descontoPorPneu)).toFixed(2)
        const precoDescontoAVistaAjustado = (precoDescontoAVista + precoCombo - (quantidade * descontoPorPneu)).toFixed(2)

        const precoTotalExibicao = precoTotalAjustado.toString().replace('.', ',')
        const precoDescontoAVistaExibicao = precoDescontoAVistaAjustado.toString().replace('.', ',')

        // ======================================================= 
        // MONTA OS DOIS PRÓXIMOS TEXTOS A SEREM EXIBIDOS
        // ======================================================= 

        const texto01 = `Você pode aproveitar a instalação do pneu do seu carro para adquirir nosso combo de serviços que é ESSENCIAL para seu veículo.

Você ganha um desconto adicional de {{n1}}R$ ${comboEscolhido.desconto_pneu}{{n2}} por cada pneu comprado.

O combo inclui:
- Montagem dos pneus
- Bico para os pneus comprados
- Calibragem dos pneus
- 4 balanceamentos
- Rodízio dos pneus
- Diagnóstico de suspensão e freios
- Alinhamento 3d (1 eixo)

Valor do combo: {{n1}}R$ ${comboEscolhido.valor_combo}{{n2}}.

💡{{n1}}O combo de serviços é opcional{{n2}}`

        const texto02 = `Resumo do seu pedido. ✅
        
{{n1}}${quantidade} pneus ${modeloPneu} + Combo de serviços{{n2}}

Valor total:
{{n1}}R$ ${precoDescontoAVistaExibicao} via Pix{{n2}}
R$ ${precoTotalExibicao} em 6x sem juros

⚠️ A montagem é gratuita.`

        return JSON.stringify({ 
            texto01: texto01, 
            texto02: texto02            
         })

    } catch (e) {
        return `ERRO SCRIPT: ${e}`
    }
}