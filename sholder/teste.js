function run(redirect, optionInvoiceJs, responseSendingEmail) {
    try {
        optionInvoiceJs = JSON.parse(optionInvoiceJs).requestNumber
        responseSendingEmail = JSON.parse(responseSendingEmail).Email
        let phrase = `Ok, vou enviar a segunda via da nota fiscal correspodente ao número ${optionInvoiceJs} para o e-mail de cadastro: ${responseSendingEmail}`

        if (redirect == 'pedidos') {
            phrase = `Vou enviar a segunda via da nota fiscal para o {{n1}}e-mail{{n2}} de {{n1}}cadastro{{n2}}: ${responseSendingEmail}`
        }
        return phrase
    }
    catch (e) {
        return 'error'
    }
}


console.log(run('pedidos',JSON.stringify({
    "orderslength": "1",
    "requestNumber": "1268553514050",
    "option": "1"
}), JSON.stringify({
    "Status": true,
    "Email": "SMC-----@G-----.COM"
})))