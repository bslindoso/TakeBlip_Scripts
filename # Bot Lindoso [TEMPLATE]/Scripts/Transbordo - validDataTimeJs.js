// let holiday = JSON.stringify(["1-1","2-21","4-2","4-21","5-1","9-7","10-8","10-12","11-2","11-15", "12-25","12-31"])
// let workTime = JSON.stringify({
//   "weekdays": [{
//       "day": "Domingo",
//       "id": 0,
//       "hourStart": "",
//       "hourEnd": ""
//   },
//   {
//       "day": "Segunda",
//       "id": 1,
//       "hourStart": "0900",
//       "hourEnd": "1800"
//   },
//   {
//       "day": "Terça",
//       "id": 2,
//       "hourStart": "0900",
//       "hourEnd": "1800"
//   },
//   {
//       "day": "Quarta",
//       "id": 3,
//       "hourStart": "0900",
//       "hourEnd": "1800"
//   },
//   {
//       "day": "Quinta",
//       "id": 4,
//       "hourStart": "0900",
//       "hourEnd": "1800"
//   },
//   {
//       "day": "Sexta",
//       "id": 5,
//       "hourStart": "0900",
//       "hourEnd": "1800"
//   },
//   {
//       "day": "Sábado",
//       "id": 6,
//       "hourStart": "",
//       "hourEnd": ""
//   }
//   ]
// })

// console.log(run(holiday, workTime))

function run(holiday, workTime) {
  try {
    let holidayJS = JSON.parse(holiday)
    let workTimeJS = JSON.parse(workTime)
    let date = `${new Date().getMonth() + 1}-${new Date().getDate()}`
    let weekdays = new Date().getDay()
    let hour = new Date().getHours()
    let minutes = getMinutes();
    let time = `${hour}${minutes}`
    time = parseInt(time)


    for (let i = 0; i < holidayJS.length; i++) {
      if (holidayJS[i] == date) {

        //VALIDA SE O FERIADO TA DENTRO DO HORARIO
        for (let i = 0; i < workTimeJS.weekdays.length; i++) {

          if (workTimeJS.weekdays[i].id && weekdays == 0) {
            //DOMINGO
            return `feriado fora de hora`
          } else if (workTimeJS.weekdays[i].id == weekdays) {
            //DIAS DE SEMANA E SABADO            
            let hourStart = parseInt(workTimeJS.weekdays[i].hourStart)
            let hourEnd = parseInt(workTimeJS.weekdays[i].hourEnd)

            if (time < hourStart || time > hourEnd) {
              return `feriado fora de hora`
            }
          }
        }
        return 'feriado'
      }
    }

    for (let i = 0; i < workTimeJS.weekdays.length; i++) {

      if (workTimeJS.weekdays[i].id && weekdays == 0) {
        return `fora de hora`
      }
      else if (workTimeJS.weekdays[i].id == weekdays) {
        let hourStart = parseInt(workTimeJS.weekdays[i].hourStart)
        let hourEnd = parseInt(workTimeJS.weekdays[i].hourEnd)
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

// FUNÇÕES AUXILIARES
function getMinutes() {
  let minutes = new Date().getMinutes();
  minutes = parseInt(minutes)
  if (minutes < 9) {
    return "0" + minutes.toString();
  } else {
    return minutes.toString();
  }
} 