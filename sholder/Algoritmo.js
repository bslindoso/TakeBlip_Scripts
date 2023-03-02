function run(input) {
    try {

        input = input.toUpperCase()

        if (input.includes('TEM UMA DATA ESPECIAL CHEGANDO... DICA: ESSA É MINHA PEÇA FAVORITA. ♥')) {
            return {
                firstMessage: `${input}`,
                isCampaing: true,
                campaing: `Site - PDP`
            }
        }

        if (input.includes('OLÁ, QUERO FALAR COM UMA VENDEDORA DO E-COMMERCE')) {
            return {
                firstMessage: `${input}`,
                isCampaing: true,
                campaing: `Instagram - Vendedora do E-commerce`
            }
        }

        if (input.includes('GOSTARIA DA AJUDA DE UMA VENDEDORA DO E-COMMERCE')) {
            return {
                firstMessage: `${input}`,
                isCampaing: true,
                campaing: `Site - Menu ajuda`
            }
        }

        if (input.includes('GOSTARIA DE COMPRAR PELO WHATSAPP')) {
            return {
                firstMessage: `${input}`,
                isCampaing: true,
                campaing: `Site - Ícone do WhatsApp`
            }
        }
        if (input.includes('QUERO COMPRAR ATRAVÉS DO WHATSAPP')) {
            return {
                firstMessage: `${input}`,
                isCampaing: true,
                campaing: `Site - Rodapé`
            }
        }
        if (input.includes('QUERO COMPRAR OS MEUS FAVORITOS PELO WHATSAPP')) {
            return {
                firstMessage: `${input}`,
                isCampaing: true,
                campaing: `Site - Banner`
            }
        }
        if (input.includes('QUERO COMPRAR COM A AJUDA DE UMA CONSULTORA DE VENDAS')) {
            return {
                firstMessage: `${input}`,
                isCampaing: true,
                campaing: `Instagram - pelo linktree`
            }
        }
        if (input.includes('QUERO COMPRAR PELO WHATSAPP COM AJUDA DE UMA VENDEDORA')) {
            return {
                firstMessage: `${input}`,
                isCampaing: true,
                campaing: `E-mail marketing`
            }
        }
        if (input.includes('QUERO COMPRAR PELO WHATSAPP')) {
            return {
                firstMessage: `${input}`,
                isCampaing: true,
                campaing: `Anúncios pelo Ads`
            }
        }
        if (input.includes('OLÁ, GOSTARIA DE SABER MAIS SOBRE AS OFERTAS DA SHOULDER!')) {
            return {
                firstMessage: `${input}`,
                isCampaing: true,
                campaing: `Posts Face /insta`
            }
        }
        else {
            return 'segue'

        }

    }
    catch (e) {
        return 'error'
    }
}

console.log(run('OLÁ, GOSTARIA DE SABER MAIS SOBRE AS OFERTAS DA SHOULDER! T-shirt punhos crochê lemon pepper - https://www.shoulder.com.br/t-shirt-punhos-croche-lemon-pepper-222401006/p?skuId=2099045'))