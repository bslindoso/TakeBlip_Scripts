var holiday = `"[\"1-1\",\"1-25,\"4-2\",\"4-21\",\"5-1\",\"7-9\",\"9-7\",\"10-8\",\"10-12\",\"11-2\",\"11-15\",\"11-20\", \"12-25\",\"12-31\"]"`
// var holiday = `{{resource.holiday}}`

function run() {

    // =================================================
    // CONFIG
    // =================================================
    let numberOfDates = 5 // Defina quantas datas futuras devem ser geradas
    let init = 2 // Defina a partir de quantas dias após hoje deve ser gerada a primeira data. Ex: 1 - começa amanhã, 2 - começa depois e amanhã

    // =================================================
    // VARIABLES
    // =================================================        
    while(holiday.search(/"/) != -1) {
        holiday = holiday.replace(/"/, '')
    }
    while(holiday.search(/\[/) != -1) {
        holiday = holiday.replace(/\[/, '')
    }
    while(holiday.search(/\]/) != -1) {
        holiday = holiday.replace(/\]/, '')
    }
    let holidayJS = holiday.split(/,/)
    var today = new Date()

    // return holidayJS

    let listaDias = []

    // =================================================
    // AUX FUNCTIONS
    // =================================================
    // VALIDA FERIADO
    function verificaFeriado(date, holidayJS) {
        date = new Date(date)
        const dateFormatted = `${date.getMonth() + 1}-${date.getDate()}`
        for (let i = 0; i < holidayJS.length; i++) {
            if (holidayJS[i] == dateFormatted) {
                return true
            }
        }
        return false
    }

    // ADICIONA UM DIA UTIL
    function adicionaDiaUtil(date) {
        let dia = date.getDate()
        let mes = date.getMonth()
        let ano = date.getFullYear()

        let newDate = new Date(`${ano}-${mes + 1}-${dia}`)

        newDate.setHours('00')
        newDate.setMinutes('00')
        newDate.setMilliseconds('00')
        newDate.setDate(date.getDate() + 1)

        // verifica se newDate é domingo
        if (newDate.getDay() == 0) {
            newDate.setDate(newDate.getDate() + 1)
        }
        return newDate
    }

    // DEFINE PRIMEIRO DIA DA LISTA
    function primeiroDiaFuturo(date, init) {

        let newDate = adicionaDiaUtil(date)
        for (let i = 1; i < init; i++) {
            newDate = adicionaDiaUtil(newDate)
        }
        if (verificaFeriado(newDate, holidayJS)) {
            newDate = adicionaDiaUtil(newDate)
        }
        return newDate
    }

    // =================================================
    // CODE
    // =================================================
    // console.log(`Hoje inputado: ${today}`)

    // verifica se é feriado ou não
    if (verificaFeriado(today, holidayJS)) {
        today = adicionaDiaUtil(today)
    }
    // console.log(`Hoje tratado: ${today}`)

    const primeiroDia = primeiroDiaFuturo(today, init)
    // console.log(`Primeiro dia: ${primeiroDia}`)
    listaDias.push(primeiroDia)

    for (let i = 0; i < numberOfDates - 1; i++) {
        var novoDia = adicionaDiaUtil(listaDias[i])
        if (verificaFeriado(novoDia, holidayJS)) {
            novoDia = adicionaDiaUtil(novoDia)
        }
        listaDias.push(novoDia)
    }

    let textMenu = ""
    for (let i = 0; i < listaDias.length; i++) {        
        let dia = listaDias[i].getDate()
        let mes = listaDias[i].getMonth()
        let ano = listaDias[i].getFullYear()
        dia = (dia < 10) ? '0' + dia : dia
        mes = (mes < 10) ? '0' + (mes + 1) : mes + 1

        textMenu = textMenu + `{{n1}}${i + 1}.{{n2}} ${dia}/${mes}/${ano}\n`
    }

    return JSON.stringify({
        "lista": listaDias,
        "textMenu": textMenu
    })
}

//////// TESTE //////////
console.log(run())