console.log(validBirthDate("02/12/1977"))

function validBirthDate(input) {
    try {
        let data = input; // pega o valor do input
        data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
        let data_array = data.split("-"); // quebra a data em array

        // para o IE onde será inserido no formato dd/MM/yyyy
        if (data_array[0].length != 4) {
            data = data_array[2] + "-" + data_array[1] + "-" + data_array[0]; // remonto a data no formato yyyy/MM/dd
        }

        // comparo as datas e calculo a idade
        let hoje = new Date();
        let nasc = new Date(data);


        let idade = hoje.getFullYear() - nasc.getFullYear();
        let m = hoje.getMonth() - nasc.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

        if (idade < 18) {
            return { type: 'error', input: 'ERRO DATA NASCIMENTO', validation: 'data nascimento' };
        }

        if (idade >= 18 && idade <= 70) {
            return { type: 'success', input: data , validation: 'data nascimento' };
        }

        // se for maior que 60 não vai acontecer nada!
        return { type: 'error', input: 'ERRO DATA NASCIMENTO', validation: 'data nascimento' };

    }
    catch (e) {
        return { type: 'error', input: 'ERRO SCRIPT', validation: 'data nascimento' }
    }
}



