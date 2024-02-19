/* currentTime
Entrada: resource.dateTimeOffset (-3)
Saída formato: yyyy-MM-ddThh:mm:ss.000Z
*/

console.log(run('2024-02-08T16:18:20.661Z'))

function run(currentTime) {

    return currentTime.replace('T', ' ').replace('Z', '').replace('"', '').replace('"', '')

}

// console.log(run(
//     {
//         "data": "08/02/2024",
//         "hora": "12:30:01"
//     }
// ));

// function run(dataHora) {
//     // dataHora = JSON.stringify(dataHora)
//     return dataHora.data + " " + dataHora.hora
// }
