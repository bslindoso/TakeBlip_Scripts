function run(validHolidayJs, team){
    try{
        team = team.toUpperCase();

        //Frase fora de hora para vendas no feriado
        if(validHolidayJs == true && team == 'VENDAS' || validHolidayJs == 'true' && team == 'VENDAS'){
            return `Desculpe, nossa equipe de vendas não está trabalhando neste feriado. \n\nMas calma que após o feriado estaremos de volta. 😊`
        }
        //Frase fora de hora para vendas em dias normais
        else if(validHolidayJs == false && team == 'VENDAS' || validHolidayJs == 'false' && team == 'VENDAS'){
            return `Olá, tudo bem? \n\nQue bom receber o seu contato! \n\nNosso {{n1}}Time{{n2}} de {{n1}}Vendedoras{{n2}} do E-commerce está online: \n\n{{n1}}De segunda a sexta:{{n2}} das 09:00 às 21:00 \n{{n1}}Sábados:{{n2}} 10:00 às 21:00 \n{{n1}}Domingos{{n2}} e {{n1}}feriados:{{n2}} das 12:00 às 20:00. \n\nNo momento, estamos offline, mas fica tranquila! Deixe o seu {{n1}}CPF{{n2}} e {{n1}}celular{{n2}}, entraremos em contato o mais rápido possível. \n\nObrigada. ☺`
        }
        //Frase fora de hora para CX em dias normais
        else{
            return `Olá, tudo bem? \n\nQue bom receber o seu contato! \n\nNosso {{n1}}Time{{n2}} de {{n1}}Atendimento{{n2}} está online das {{n1}}08:00{{n2}} às {{n1}}18:00{{n2}}, de {{n1}}segunda{{n2}} à {{n1}}sexta{{n2}} exceto feriados. \n\nNo momento, estamos offline, mas fica tranquila! Deixe o seu {{n1}}e-mail{{n2}} e {{n1}}celular{{n2}}, entraremos em contato o mais rápido possível. \n\nObrigada. ☺`
        } 
    }
    catch(e){
        return 'error'
    }
}

console.log(run(false, 'cx'))