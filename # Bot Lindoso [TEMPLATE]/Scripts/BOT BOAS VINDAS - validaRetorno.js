// let nome = 'Bruno';
// let email = 'Email'
// let politica = '998786'
// let reserva = ''
// let ultimoBlocoOndeParou;
// ultimoBlocoOndeParou = {};
// ultimoBlocoOndeParou = JSON.stringify({});
// ultimoBlocoOndeParou = JSON.stringify({service: 'oi'})
// ultimoBlocoOndeParou = JSON.stringify({service: 'oi', exception: 'oi'})
// console.log(run(nome, email, politica, reserva, ultimoBlocoOndeParou))

function run(nome, email, politica, reserva, ultimoBlocoOndeParou) {
    try {
        // Verifica se ultimoBlocoOndeParou é uma string ou um objeto. caso seja uma string, converte para objeto
        (typeof (ultimoBlocoOndeParou) == 'string') ? ultimoBlocoOndeParou = JSON.parse(ultimoBlocoOndeParou) : ultimoBlocoOndeParou

        // Valida se o usuário preencheu todos os dados
        if (
            (!nome || nome == '' || nome == undefined || nome == 'undefined' || nome == 'null' || nome == null) ||
            (!email || email == '' || email == undefined || email == 'undefined' || email == 'null' || email == null) ||
            (!politica || politica == '' || politica == undefined || politica == 'undefined' || politica == 'null' || politica == null) ||
            (!reserva || reserva == '' || reserva == undefined || reserva == 'undefined' || reserva == 'null' || reserva == null)
        ) {
            // Valida se há a propriedade service e exception
            if (!ultimoBlocoOndeParou || !ultimoBlocoOndeParou.hasOwnProperty('service') || !ultimoBlocoOndeParou.hasOwnProperty('exception')) {
                return 'dados ausentes: sem bloco onde parou'
            }
            // dados ausentes, volta para o bloco onde parou.
            return 'dados ausentes';
        } else {
            // dados completos, ir para retorno padrão
            return 'dados completos'
        }
    } catch (e) {
        // Aqui vai cair quando ultimoBlocoOndeParou não existe, ou outro erro desconhecido.
        console.log(e)
        return 'erro desconhecido';
    }
}