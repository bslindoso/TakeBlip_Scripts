/* currentTime
Entrada: resource.dateTimeOffset (-3)
Saída formato: yyyy-MM-ddThh:mm:ss.000Z
*/

console.log(run('-3'))

function run(offset) {
    offset = parseFloat(offset);
    let now = new Date();
    let utc_timestamp = Date.UTC(
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