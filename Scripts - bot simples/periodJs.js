// function run() {
//     const today = new Date(); // Ex: 2022-09-23T14:18:54.973Z
//     let todayBR = today.toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"}); // Ex: 23/09/2022 11:18:54
//     let period = verifyPeriod(todayBR); 

//     return period;
// }

// function verifyPeriod(dateToLocaleString) {

//     const time = dateToLocaleString.split(' ')[1]; // Ex: 11:18:54
//     const hour = parseInt(time.split(':')[0]); // Ex: 11

 
//     if (hour >= 6 && hour <= 11) {
//         return 'manhã';
//     } else if (hour >= 12 && hour <= 17) {
//         return 'tarde';
//     } else {
//         return 'noite';
//     }
// }
// ============================================================================================
// todayBR = Thursday, September 29, 2022 3:45:31 PM

// function run() {
//     const today = new Date(); // Ex: 2022-09-23T14:18:54.973Z
//     let todayBR = today.toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"}); // Ex: Thursday, September 29, 2022 3:45:31 PM
//     let period = verifyPeriod(todayBR);

//     return period;
// }

// function verifyPeriod(dateToLocaleString) {

//     const splitComma = dateToLocaleString.split(',')[2]; // Ex: 11:18:54
//     const splitSpace = splitComma.split(' ')[2]; // Ex: 11:18:54
//     const amPm = splitComma.split(' ')[3]; // Ex: 11:18:54
//     let hour = parseInt(splitSpace.split(':')[0]); // Ex: 11
    
//     if (amPm == 'PM') {
//         console.log(hour);
//         hour == 12 ? hour : hour + 12;

//         console.log(hour);

//     }

//     if (hour >= 6 && hour <= 11) {
//         return `manhã`;
//     } else if (hour >= 12 && hour <= 17) {
//         return `tarde`;
//     } else {
//         return `noite`;
//     }
// }

function run(hour) {
    try {
        let hourFormated = parseInt(hour) - 3
        if (hourFormated > 5 && hourFormated < 12) {
            return 'manhã'
        }
        else if (hourFormated > 11 && hourFormated < 18) {
            return 'tarde'
        }
        else {
            return 'noite'
        }
    }
    catch (e) {
        return 'error'
    }
}