function run(team){
    try{
        team = team.toUpperCase();

        //Frase para sem atendentes disponiveis VENDAS
        if(team == 'VENDAS'){
            return `Olá, tudo bem? \n\nQue bom receber o seu contato! \n\nNosso {{n1}}Time{{n2}} de {{n1}}Vendedoras{{n2}} do {{n1}}E-commerce{{n2}} está online: \n\n{{n1}}De segunda a sexta:{{n2}} das 09:00 às 21:00 \n{{n1}}Sábados:{{n2}} 10:00 às 21:00 \n{{n1}}Domingos e feriados:{{n2}} das 12:00 às 20:00.`
        }
        
        //Frase para sem atendentes disponiveis CX
        else{
            return `Olá, tudo bem? \n\nQue bom receber o seu contato! \n\nNosso {{n1}}Time{{n2}} de {{n1}}Atendimento{{n2}} está online das {{n1}}08:00{{n2}} às {{n1}}18:00{{n2}}, de {{n1}}segunda{{n2}} à {{n1}}sexta{{n2}} exceto feriados.`
        } 
    }
    catch(e){
        return 'error'
    }
}

console.log(run('vendas'))