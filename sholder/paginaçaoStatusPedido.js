function run(input) {
    try {
        
        let Icebreakers = [`Olá, gostaria da ajuda de uma vendedora do E-commerce!`,`Olá, gostaria de comprar pelo WhatsApp!`, `Olá! Quero comprar através do WhatsApp!`,'Olá, quero comprar os meus favoritos pelo WhatsApp!', 'Olá, quero comprar com a ajuda de uma consultora de vendas.', 'Olá, quero comprar pelo WhatsApp!', 'Olá, quero comprar pelo WhatsApp com ajuda de uma vendedora!']
        for( let i = 0; Icebreakers.length > i; i++){
            if(input.length > 5 && Icebreakers[i].includes(input)){
                if(Icebreakers[i].includes('gostaria da ajuda de uma vendedora do E-commerce')){
                    return {
                        firstMessage: `${input}`,
                        isCampaing: true,
                        campaing: `Site - Menu ajuda`
                    }
                }
                if(Icebreakers[i].includes('gostaria de comprar pelo WhatsApp')){
                    return {
                        firstMessage: `${input}`,
                        isCampaing: true,
                        campaing: `Site - Ícone do WhatsApp`
                    }
                }
                if(Icebreakers[i].includes('Quero comprar através do WhatsApp')){
                    return {
                        firstMessage: `${input}`,
                        isCampaing: true,
                        campaing: `Site - Rodapé`
                    }
                }
                if(Icebreakers[i].includes('quero comprar os meus favoritos pelo WhatsApp')){
                    return {
                        firstMessage: `${input}`,
                        isCampaing: true,
                        campaing: `Site - Banner`
                    }
                }
                if(Icebreakers[i].includes('quero comprar com a ajuda de uma consultora de vendas')){
                    return {
                        firstMessage: `${input}`,
                        isCampaing: true,
                        campaing: `Instagram - pelo linktree`
                    }
                }
                if(Icebreakers[i].includes('quero comprar pelo WhatsApp')){
                    return {
                        firstMessage: `${input}`,
                        isCampaing: true,
                        campaing: `Anúncios pelo Ads`
                    }
                }
                if(Icebreakers[i].includes('quero comprar pelo WhatsApp com ajuda de uma vendedora')){
                    return {
                        firstMessage: `${input}`,
                        isCampaing: true,
                        campaing: `E-mail marketing`
                    }
                }  
            }
        }
        
        return 'segue'
    }
    catch (e) {
        return 'error'
    }
}
console.log(run("Olá, quero comprar pelo WhatsApp com ajuda de uma vendedora!"))