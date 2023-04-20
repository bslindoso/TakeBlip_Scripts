// let holiday = JSON.stringify(["1-1", "2-21", "4-2", "4-21", "5-1", "9-7", "10-8", "10-12", "11-2", "11-15", "12-25", "12-31"])
// let workTime = JSON.stringify({
//     "weekdays": [{
//         "day": "Domingo",
//         "id": 0,
//         "hourStart": "0800",
//         "hourEnd": "2200"
//     },
//     {
//         "day": "Segunda",
//         "id": 1,
//         "hourStart": "0900",
//         "hourEnd": "1800"
//     },
//     {
//         "day": "Terça",
//         "id": 2,
//         "hourStart": "0900",
//         "hourEnd": "1800"
//     },
//     {
//         "day": "Quarta",
//         "id": 3,
//         "hourStart": "0900",
//         "hourEnd": "1800"
//     },
//     {
//         "day": "Quinta",
//         "id": 4,
//         "hourStart": "0900",
//         "hourEnd": "1800"
//     },
//     {
//         "day": "Sexta",
//         "id": 5,
//         "hourStart": "0900",
//         "hourEnd": "1800"
//     },
//     {
//         "day": "Sábado",
//         "id": 6,
//         "hourStart": "",
//         "hourEnd": ""
//     }
//     ]
// })

// console.log(run(holiday, workTime))

function run(holiday) {
    try {
        let holidayJS = JSON.parse(holiday);
        let date = `${new Date().getMonth() + 1}-${new Date().getDate()}`;

        for (let i = 0; i < holidayJS.length; i++) {
            if (holidayJS[i] == date) {

                return true
            }
        }
        return false
    }
    catch (e) {
        return 'ERROR: SCRIPT FAILURE'
    }
}