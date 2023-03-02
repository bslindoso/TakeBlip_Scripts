function run(enterpriseListObj, pagAtual) {
    try {
        enterpriseListObj = JSON.parse(enterpriseListObj)
        let text = [enterpriseListObj.text]
        pagAtual = parseInt(pagAtual)
        let totalPagina = Math.round(enterpriseListObj.totalMenu) 
       
        //let totalPedidos = enterpriseListObj.
        
        //se o total de pedidos for 1 apenas
        if(enterpriseListObj.response.length == 1){
            text += `Menu anterior`
            return text.split('"')
        }
        //se total de página for 1 (não apresentar ver mais páginas)
        if (totalPagina == 1) {
            text += `Menu anterior"Ver mais...`
            return text.split('"')
            
        }
        //se total de páginas maior que 1 e página atual for 1 (ver mais)
        if (totalPagina > 1 && pagAtual == 1) {
            text += `Menu anterior"Ver mais...`
            return text.split('"')
        
        }
        //se total de páginas maior que 1 e pagina atual for menor que total de páginas (ver mais e ver menos)
        if (totalPagina > 1 && pagAtual < totalPagina) {
            text += `Menu anterior"Ver mais..."Voltar` 
            return text.split('"')
        }
        //se total de páginas maior que 1 e pagina atual fou igual ao total de páginas (ver menos)
        if (totalPagina > 1 && pagAtual == totalPagina) {
            text += `Menu anterior"Voltar` 
            return text.split('"')
        }
    
        return "error"

    }
    catch (e) {
        return 'error'
    }
}

console.log(run(JSON.stringify({
    text: [
      'Escavadeira"Motoniveladora"Rolo compactador"Trator de pneus"Carregadeira"Guindaste"Bomba de concreto"'
    ],
    totalMenu: 1.6666666666666667,
    response: [
      'Escavadeira',
      'Motoniveladora',
      'Rolo compactador',
      'Trator de pneus',
      'Carregadeira',
      'Guindaste',
      'Bomba de concreto',
      'Vidro acabadora',
      'Usina de asfalto / Concreto',
      'Perfuratriz hidráulica'
    ]
  }), '2'))