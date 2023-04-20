// ENTRADA: calendar.time
// time format = 09:42 (09 horas e 42 minutos) GMT 0
// Saída esperada: 06:42
const run = (time) => {    
    
    const config = {
        hourOnly: true // Configura se o retorno vai ser somente a hora (Ex: 06) ou hora e minuto (Ex: 06:42) - Default: false (hora e minuto)
    }

    let hour = time.split(':')[0]
    hour = parseInt(hour)
    let minute = time.split(':')[1]

    switch (hour) {
        case '0':
            hour = '21';
            break;
        case '1':
            hour = '22';
            break;
        case '2':
            hour = '23';
            break;
        default:
            hour -= 3;
            break;
    }

    if (config.hourOnly == true) {
        return hour
    } else {
        return `${hour}:${minute}`
    }
}

console.log(run('09:42'))