function diferencaEntreDatas(data) {
    var date1 = new Date();
    var date2 = new Date(data);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log(diffDays)
    return diffDays;
  }


  function validaDataFutura(d){
    var data = d; // pega o valor do input
    // data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
    var data_array = data.split("-"); // quebra a data em array
    var dia = data_array[2];
    var mes = data_array[1];
    var ano = data_array[0];
 
    // para o IE onde será inserido no formato dd/MM/yyyy
    if(data_array[0].length != 4){
       dia = data_array[0];
       mes = data_array[1];
       ano = data_array[2];
    }
 
    var hoje = new Date();
    var d1 = hoje.getDate();
    var m1 = hoje.getMonth()+1;
    var a1 = hoje.getFullYear();
 
    var d1 = new Date(a1, m1, d1);
    var d2 = new Date(ano, mes, dia);
 
    var diff = d2.getTime() - d1.getTime();
    diff = diff / (1000 * 60 * 60 * 24);
    
    if(diff < 0){
       console.log("Data não pode ser anterior ao dia de hoje!");
    }else if(diff > 30){
       console.log("Data não pode ser mais do que 30 dias pra frente!");
    }else{
       console.log("Data válida!");
    }
}