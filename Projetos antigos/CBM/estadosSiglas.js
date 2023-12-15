function run(input) {
    try {
        input = input.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        input = input.toUpperCase()
        input = input.replace(" ", "_")
        let stateList = {
            'ACRE': 'AC',
            'ALAGOAS': 'AL',
            'AMAPA': 'AP',
            'AMAZONAS': 'AM',
            'BAHIA': 'BA',
            'CEARA': 'CE',
            'DISTRITO_FEDERAL': 'DF',
            'ESPIRITO_SANTO': 'ES',
            'GOIAS': 'GO',
            'MARANHAO': 'MA',
            'MATO_GROSSO': 'MT',
            'MATO_GROSSO_DO_SUL': 'MS',
            'MINAS_GERAIS': 'MG',
            'PARA': 'PA',
            'PARAIBA': 'PB',
            'PARANA': 'PR',
            'PERNAMBUCO': 'PE',
            'PIAUI': 'PI',
            'RIO_DE_JANEIRO': 'RJ',
            'RIO_GRANDE_DO_NORTE': 'RN',
            'RIO_GRANDE_DO_SUL': 'RS',
            'RONDONIA': 'RO',
            'RORAIMA': 'RR',
            'SANTA_CATARINA': 'SC',
            'SAO_PAULO': 'SP',
            'SERGIPE': 'SE',
            'TOCANTINS': 'TO',
        }
       if(stateList[input]){
        return {type: 'success', input: stateList[input], validation: 'estado'}
       }
        return {type: 'error', input: 'ERRO ESTADO', validation: 'estado'}

    }
    catch (e) {
        return {type: 'error', input: 'ERRO SCRIPT', validation: 'script'}
    }
}

console.log(run("33"))





