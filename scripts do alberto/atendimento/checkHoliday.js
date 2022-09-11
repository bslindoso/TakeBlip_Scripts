// CHECK HOLIDAY

// <<<<Var of input>>>>
// resource.ListHolidays

// <<<<var de saida>>>>
// isHoliday

// <<<condição>>>

// <<<Script>>>>

function run(days) {
    const isHoliday = { "option": true, "trackAction": "Feriado" };
    const isNotHoliday = { "option": false, "trackAction": "Normal" };

    try {
        const today = new Date();
        const day = today.getDate().toString().padStart(2, "0");
        const month = (today.getMonth() + 1).toString().padStart(2, "0");
        const date = `${day}/${month}`;

        let holidays = days;
        if (typeof days === typeof toString()) {
            holidays = JSON.parse(days);
        }

        const isDayHoliday = holidays.find(element => element.day === date);

        if (isDayHoliday === undefined) {
            return isNotHoliday;
        }

        if (isDayHoliday.active) {
            return isNotHoliday;
        }

        return isHoliday;
    }
    catch (ex) {
        return isNotHoliday;
    }
}

const holidays = [
    {
        "day": '01/01',
        "active": false
    },
    {
        "day": '15/04',
        "active": false
    },
    {
        "day": '21/04',
        "active": false
    },
    {
        "day": '01/05',
        "active": false
    },
    {
        "day": '07/09',
        "active": false
    },
    {
        "day": '12/10',
        "active": false
    },
    {
        "day": '02/11',
        "active": false
    },
    {
        "day": '15/11',
        "active": false
    },
    {
        "day": '25/12',
        "active": false
    },
];

console.log(run(holidays));