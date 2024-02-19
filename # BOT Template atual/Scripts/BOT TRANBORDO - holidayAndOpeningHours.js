// let holiday = JSON.stringify(["11-11", "4-2", "4-21", "5-1", "9-7", "10-8", "10-12", "11-2", "11-15", "12-25", "12-31"])
// let workTime = JSON.stringify({
// 	"weekdays": [{
// 		"day": "Domingo",
// 		"id": 0,
// 		"hourStart": "",
// 		"hourEnd": ""
// 	},
// 	{
// 		"day": "Segunda",
// 		"id": 1,
// 		"hourStart": "0900",
// 		"hourEnd": "1800"
// 	},
// 	{
// 		"day": "Terça",
// 		"id": 2,
// 		"hourStart": "0900",
// 		"hourEnd": "1800"
// 	},
// 	{
// 		"day": "Quarta",
// 		"id": 3,
// 		"hourStart": "0900",
// 		"hourEnd": "1800"
// 	},
// 	{
// 		"day": "Quinta",
// 		"id": 4,
// 		"hourStart": "0900",
// 		"hourEnd": "1800"
// 	},
// 	{
// 		"day": "Sexta",
// 		"id": 5,
// 		"hourStart": "0900",
// 		"hourEnd": "1000"
// 	},
// 	{
// 		"day": "Sábado",
// 		"id": 6,
// 		"hourStart": "",
// 		"hourEnd": ""
// 	}
// 	]
// })
// console.log(run(holiday, workTime))

function run(holiday, workTime) {
	try {
		// ===============  CONFIG  ===============
		const holidayJS = JSON.parse(holiday)
		const workTimeJS = JSON.parse(workTime)

		// Obtém a data atual no formato MM-DD		
		const date = `${new Date().getMonth() + 1}-${new Date().getDate()}`
		// Obtém a data atual no formato DD/MM/YYYY
		const currentLocaleDate = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`

		// Dia da semana
		const weekdaysNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
		const weekdays = new Date().getDay() // Sunday - Saturday : 0 - 6 
		const currentWeekdayName = weekdaysNames[weekdays]

		// Hora
		const hour = getHours()
		const minutes = getMinutes();
		let time = `${hour}${minutes}`
		time = parseInt(time) // 1500
		const currentLocaleHour = `${hour}:${minutes}` // 15:00

		// Cria objeto de retorno
		let validation = {
			isHoliday: false,
			isOpeningHours: true,
			currentLocaleDate: currentLocaleDate,
			currentLocaleHour: currentLocaleHour,
			currentWeekdayName: currentWeekdayName
		}

		/// =============== VALIDA FERIADO ===============
		for (let i = 0; i < holidayJS.length; i++) {
			if (holidayJS[i] == date) {
				validation.isHoliday = true
			}
		}

		/// =============== VALIDA HORÁRIO ===============
		workTimeJS.weekdays.forEach(e => {
			if (e.day === currentWeekdayName) {
				let hourStart = e.hourStart
				let hourEnd = e.hourEnd
				if (time < hourStart || time > hourEnd) {
					validation.isOpeningHours = false
				}
			}
		});

		return JSON.stringify(validation)
	}
	catch (e) {
		return 'ERROR: SCRIPT FAILURE'
	}
}

// FUNÇÕES AUXILIARES
function getMinutes() {
	let minutes = new Date().getMinutes();
	minutes = parseInt(minutes)
	if (minutes <= 9) {
		return "0" + minutes.toString();
	} else {
		return minutes.toString();
	}
}

function getHours() {
	let hour = new Date().getHours();
	hour = parseInt(hour)
	if (hour <= 9) {
		return "0" + hour.toString();
	} else {
		return hour.toString();
	}
}