function run(input, billetObject) {
  
    try {
        billetObject = JSON.parse(billetObject);
        const dueDate = billetObject.dueDate;
    
        // Verifica se o input informado está no formato esperado //ANTIGO: /^\d{1,2}\/\d{1,2}\/\d{4}$/
        const match = input.match(/^(\d{1,2})\/(\d{1,2})\/\d{4}$/gm);
        if (!match) {
            return "Erro: O input inserido não é uma data válida no formato dd/mm/aaaa";
        } else {
            const data = input.split("/");            
            const dia = data[0];            
            const mes = data[1];
            const ano = data[2];

            const validaFormatoDataInputada = validaFormatoData(dia, mes, ano);
            
            if (validaFormatoDataInputada.startsWith("Erro")) {
                return validaFormatoDataInputada;
            } else {
                const dataFormatada = `${ano}-${mes}-${dia}`;
                const dataFinal = validaDataFutura(dataFormatada, dueDate)

                return dataFinal;    
            };
        } ;       
    } catch (e) {
        return "Erro inesperado";
    };
};

// FUNÇÕES AUXILIARES
function validaFormatoData(dia, mes, ano) {
    dia = parseInt(dia);
    if (dia <= 0 || dia > 31) {
        return "Erro: O dia não pode ser inferior a 1 e superior a 31";
    };

    mes = parseInt(mes);
    if (mes <= 0 || mes > 12) {
        return "Erro: O mês não pode ser inferior a 1 e superior a 12";
    };

    const data = ("00" + dia).slice(-2) + "/" + ("00" + mes).slice(-2) + "/" + ano;
    return data;        
};

function validaDataFutura(data, vencimento) {
    const hoje = new Date();
    hoje.setHours(-3,0,0,0);

    const dataInputada = new Date(data);

    const vencimentoDate = new Date(vencimento);    
    const limite = new Date(vencimentoDate);
    limite.setDate(vencimentoDate.getDate() + 60); 

    if (dataInputada < hoje) {
        return "Erro: A data não pode ser menor ou igual ao dia de hoje";
    } else if (dataInputada > limite) {
        return "Erro: A data informada é superior à data limite para atualização do boleto.";
    } else {
        return data;
    }
};