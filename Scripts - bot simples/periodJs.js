function run() {
    const today = new Date(); // Ex: 2022-09-23T14:18:54.973Z
    let todayBR = today.toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"}); // Ex: 23/09/2022 11:18:54
    let period = verifyPeriod(todayBR); 

    return period;
}

function verifyPeriod(dateToLocaleString) {

    const time = dateToLocaleString.split(' ')[1]; // Ex: 11:18:54
    const hour = parseInt(time.split(':')[0]); // Ex: 11

 
    if (hour >= 6 && hour <= 11) {
        return 'manhã';
    } else if (hour >= 12 && hour <= 17) {
        return 'tarde';
    } else {
        return 'noite';
    }
}