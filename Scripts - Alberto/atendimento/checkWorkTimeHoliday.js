// CHECK WORK TIME HOLIDAY

// <<<<Var of input>>>>
// resource.ListWorkDays
// resource.Offset

// <<<<var de saida>>>>
// isWorkTime

// <<<condição>>>

// <<<Script>>>>

function run(workDays, offSet) {
    let PARSED = workDays;
    if (typeof workDays === typeof toString()) {
        PARSED = JSON.parse(workDays);
    }

    const offset = parseInt(offSet);
    const today = nowUTC(offset);

    const weekDay = workDays.find(element => element.workDay == today.getDay().toString());

    const startDate = utcDate(weekDay.startTime, today);
    const endDate = utcDate(weekDay.endTime, today);

    return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(weekDay);
}

function nowUTC(offset) {
    const now = new Date();
    const utc_timestamp = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds(),
        now.getUTCMilliseconds()
    );

    return new Date(utc_timestamp + offset * 3600 * 1000);
}

function utcDate(timeString, today) {
    let now = new Date();

    let hour = getValueByString('hour', timeString);
    let minutes = getValueByString('minutes', timeString);
    let utc_timestamp = Date.UTC(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        hour,
        minutes,
        0,
        0
    );

    return new Date(utc_timestamp);
}

function getValueByString(type, timeString) {

    if (type === 'hour') {
        return parseInt(timeString.substring(0, timeString.indexOf(':')));
    }

    else if (type === 'minutes') {
        return parseInt(timeString.substring(timeString.indexOf(':') + 1, timeString.length));
    }

    return 0;
}

function isWorkDay(weekDay) {
    return weekDay.active;
}

const workDays = [
    {
        "weekName": 'Domingo',
        "startTime": '00:00',
        "endTime": '00:00',
        "workDay": 0,
        "active": false
    },
    {
        "weekName": 'Segunda',
        "startTime": '08:00',
        "endTime": '18:00',
        "workDay": 1,
        "active": true
    },
    {
        "weekName": 'Terça',
        "startTime": '08:00',
        "endTime": '18:00',
        "workDay": 2,
        "active": true
    },
    {
        "weekName": 'Quarta',
        "startTime": '08:00',
        "endTime": '18:00',
        "workDay": 3,
        "active": true
    },
    {
        "weekName": 'Quinta',
        "startTime": '08:00',
        "endTime": '18:00',
        "workDay": 4,
        "active": true
    },
    {
        "weekName": 'Sexta',
        "startTime": '08:00',
        "endTime": '18:00',
        "workDay": 5,
        "active": true
    },
    {
        "weekName": 'Sábado',
        "startTime": '08:00',
        "endTime": '13:00',
        "workDay": 6,
        "active": true
    }
];

const offSet = -3;

console.log(run(workDays, offSet));