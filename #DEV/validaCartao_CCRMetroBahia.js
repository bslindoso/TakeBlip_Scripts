let input;
input = '036210000000000'; //SUCESSO (15 DIGITOS)
input = '03621000000000-0'; // SUCESSO (15 DIGITOS HIFEN)
input = '00621000000000-0'; // FALSE (15 DIGITOS HIFEN SEM PADRÃO 03621)
input = '0362100000000-0'; ;// FALSE (14 DIGITOS HIFEN)
input = '0362100000000-00'; // FALSE (16 DIGITOS HIFEN)
input = '0362100000000000'; // FALSE (16 DIGITOS)
input = '0062100000000000'; // FALSE (15 DIGITOS SEM O PADRÃO 03621)
input = '03621000000000'; // FALSE (14 DIGITOS COM PADRÃO 03621)
input = 'dsadasd'; // FALSE (OUTROS)

console.log(run(input))

function run(input) {

    let regex = /^[0-9]{14}-?[0-9]{1}$/gm;
    let match = input.match(regex);

    if (match) {
        input = input.replace('-','')
        if (input.length == 15) {        
            if(input.substr(0, 5) === "03621") {
                return input;
            }
            return false;
        } else {
            return false;
        }
    }
    return false;    
}