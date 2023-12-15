let principal = 'false';
let workTime = JSON.stringify({"principal":{"weekdays":[{"day":"Domingo","id":0.0,"hourStart":"0800","hourEnd":"2300"},{"day":"Segunda","id":1.0,"hourStart":"0800","hourEnd":"2300"},{"day":"Terça","id":2.0,"hourStart":"0800","hourEnd":"2300"},{"day":"Quarta","id":3.0,"hourStart":"0800","hourEnd":"2300"},{"day":"Quinta","id":4.0,"hourStart":"0800","hourEnd":"2300"},{"day":"Sexta","id":5.0,"hourStart":"0800","hourEnd":"2300"},{"day":"Sábado","id":6.0,"hourStart":"0800","hourEnd":"2300"}]},"backup":{"weekdays":[{"day":"Domingo","id":0.0,"hourStart":"0000","hourEnd":"2359"},{"day":"Segunda","id":1.0,"hourStart":"0000","hourEnd":"2359"},{"day":"Terça","id":2.0,"hourStart":"0000","hourEnd":"2359"},{"day":"Quarta","id":3.0,"hourStart":"0000","hourEnd":"2359"},{"day":"Quinta","id":4.0,"hourStart":"0000","hourEnd":"2359"},{"day":"Sexta","id":5.0,"hourStart":"0000","hourEnd":"2359"},{"day":"Sábado","id":6.0,"hourStart":"0000","hourEnd":"2359"}]}})
let now = '23:01'
console.log(run(principal, workTime, now))

/* ====================================
    Valida workTime principal ou backup
 * ====================================
    - principal: true ou false -> Se for true, valida horário da fila principal, se for false, valida horário da fila backup
    - workTime: object -> Objeto com os horários das filas pincipais e backup
    - now: string (Ex: 18:46) -> String que possui a hora atual, já convertida GMT -3
 */
function run(principal, workTime, now) {
    try {
        let workTimeJS = JSON.parse(workTime)
        if (principal == 'true') {
            workTimeJS = workTimeJS.principal
        } else {
            workTimeJS = workTimeJS.backup
        }     
        
        // console.log(workTimeJS)

        /* weekdays (Dia da Semana)  
         * Retorna um número invormando o dia da semana.
         * 0 DOM, 1 SEG, 2 TER, 3 QUA, 4 QUI, 5 SEX, 6 SÁB     
        */
        let weekdays = new Date().getDay()

        let time = now.replace(":", "")
        time = parseInt(time)
        
        /* Valida se está dentro do horário */
        let weekdaysId;
        for (let i = 0; i < workTimeJS.weekdays.length; i++) {
            weekdaysId = parseInt(workTimeJS.weekdays[i].id)
            if (weekdaysId == weekdays) {
                let hourStart = workTimeJS.weekdays[i].hourStart
                let hourEnd = workTimeJS.weekdays[i].hourEnd

                if (time < hourStart || time > hourEnd) {
                    return `fora de hora`
                }
            }
        }
        return true
    }
    catch (e) {
        return 'ERROR: SCRIPT FAILURE'
    }
}