// Receive the variables as parameters
function run(offset, start, end, workDays, fila) {

    start = "09:00";
    end = "18:00";
    workDays = "1,2,3,4,5,6";
    offset = parseInt(offset);
    let today = nowUTC(offset);

    if (today.getDay().toString() == "6" && (fila == 'ECOMMERCE' || 'VENDA ECOMMERCE')) {
        //workDays = "1,2,3,4,5"
        start = "08:00";
        end = "12:00";
    }

    if (today.getDay().toString() == "6" && (fila == 'OUVIDORIA' || fila == 'EMPRESTIMO')) {
        start = "09:00";
        end = "12:00";
    }

    if (today.getDay().toString() == "6" && fila == 'APLICATIVO') {
        start = "10:00";
        end = "15:00";
    }

    let startDate = utcDate(start, today);
    let endDate = utcDate(end, today);

    return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);
}

//Get now UTC Date
function nowUTC(offset) {
    let now = new Date;
    let utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

    return new Date(utc_timestamp + offset * 3600 * 1000);
}

//Get UTC Date
function utcDate(timeString, today) {
    let now = new Date;

    let hour = getValueByString('hour', timeString);
    let minutes = getValueByString('minutes', timeString);
    let utc_timestamp = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(),
        hour, minutes, 0, 0);
    return new Date(utc_timestamp);
}

//Get hour/minute by string with pattern HH:mm
function getValueByString(type, timeString) {

    if (type === 'hour') {
        return parseInt(timeString.substring(0, timeString.indexOf(':')));
    }

    else if (type === 'minutes') {
        return parseInt(timeString.substring(timeString.indexOf(':') + 1, timeString.length));
    }

    return 0;
}

//Get if today is a work day
function isWorkDay(today, workDays) {
    workDays = workDays.split(',');

    return workDays.indexOf(today.getDay().toString()) >= 0;
}

console.log(run("-3", '08:00', '12:00', '1,2,3,4,5,6', "ECOMMERCE"))