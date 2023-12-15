function run(validHolidayJs) {
    try {
        if (validHolidayJs == true || validHolidayJs == 'true') {
            let workSchedule = [
                {
                    "num": 1,
                    "name": "Monday",
                    "portugueseName": "Segunda",
                    "workTime": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                {
                    "num": 2,
                    "name": "Tuesday",
                    "portugueseName": "Terça",
                    "workTime": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                {
                    "num": 3,
                    "name": "Wednesday",
                    "portugueseName": "Quarta",
                    "workTime": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                {
                    "num": 4,
                    "name": "Thursday",
                    "portugueseName": "Quinta",
                    "workTime": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                {
                    "num": 5,
                    "name": "Friday",
                    "portugueseName": "Sexta",
                    "workTime": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                {
                    "num": 6,
                    "name": "Saturday",
                    "portugueseName": "Sabado",
                    "workTime": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                {
                    "num": 0,
                    "name": "Sunday",
                    "portugueseName": "Domingo",
                    "workTime": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                }

            ];
            return JSON.stringify(workSchedule); //Return value will be saved as "Return value variable" field name

        }
        else {
            workSchedule = [
                {
                    "num": 1,
                    "name": "Monday",
                    "portugueseName": "Segunda",
                    "workTime": [
                        {
                            "start": "08:00",
                            "end": "20:00"
                        }
                    ]
                },
                {
                    "num": 2,
                    "name": "Tuesday",
                    "portugueseName": "Terça",
                    "workTime": [
                        {
                            "start": "09:00",
                            "end": "21:00"
                        }
                    ]
                },
                {
                    "num": 3,
                    "name": "Wednesday",
                    "portugueseName": "Quarta",
                    "workTime": [
                        {
                            "start": "09:00",
                            "end": "21:00"
                        }
                    ]
                },
                {
                    "num": 4,
                    "name": "Thursday",
                    "portugueseName": "Quinta",
                    "workTime": [
                        {
                            "start": "09:00",
                            "end": "21:00"
                        }
                    ]
                },
                {
                    "num": 5,
                    "name": "Friday",
                    "portugueseName": "Sexta",
                    "workTime": [
                        {
                            "start": "09:00",
                            "end": "21:00"
                        }
                    ]
                },
                {
                    "num": 6,
                    "name": "Saturday",
                    "portugueseName": "Sabado",
                    "workTime": [
                        {
                            "start": "10:00",
                            "end": "21:00"
                        }
                    ]
                },
                {
                    "num": 0,
                    "name": "Sunday",
                    "portugueseName": "Domingo",
                    "workTime": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                }

            ];
            return JSON.stringify(workSchedule); //Return value will be saved as "Return value variable" field name
        }
    }
    catch (e) {
        return 'error'
    }
}

console.log(run(false))