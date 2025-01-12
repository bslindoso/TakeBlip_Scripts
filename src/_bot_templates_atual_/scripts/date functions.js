/* diferencaEntreDatas
Entrada formato: 
Saída:
*/

function diferencaEntreDatas(data) {
   var date1 = new Date();
   var date2 = new Date(data);
   var timeDiff = Math.abs(date2.getTime() - date1.getTime());
   var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
   console.log(diffDays)
   return diffDays;
}

/* validaDataFutura
Entrada formato: yyyy-MM-dd | yyyy/MM/dd | yyyy-MM-ddThh:mm:ss.000Z | dd-MM-yyyy | dd/MM/yyyy
Saída:
*/
// console.log(validaDataFutura('2023-12-19T12:08:42.641Z'))
// console.log(validaDataFutura('2023-12-19'))
// console.log(validaDataFutura('2023/12/19'))
// console.log(validaDataFutura('19-12-2023'))
// console.log(validaDataFutura('19/12/2023'))

function validaDataFutura(d) {
   var data = d; // pega o valor do input
   var data_array, dia, mes, ano

   // substitui eventuais barras "/" por hífen "-"
   if (data.search(/\//g) != -1) {
      data = data.replace(/\//g, "-");
   }

   // verifica se está no formato yyyy-MM-ddThh:mm:ss.000Z
   if (data.search('T') != -1) {
      data_array = data.split("T")[0].split('-')
   } else {
      data_array = data.split("-")
   }

   // dd-MM-yyyy ou dd/MM/yyyy
   if (data_array[0].length != 4) {
      dia = data_array[0];
      mes = data_array[1];
      ano = data_array[2];
   } else { // demais formatos (começando com yyyy)
      dia = data_array[2];
      mes = data_array[1];
      ano = data_array[0];
   }   

   // inicia processo de comparação
   var hoje = new Date();
   var d1 = hoje.getDate();
   var m1 = hoje.getMonth() + 1;
   var a1 = hoje.getFullYear();

   d1 = new Date(a1, m1, d1);
   d2 = new Date(ano, mes, dia);

   var diff = d2.getTime() - d1.getTime();
   diff = diff / (1000 * 60 * 60 * 24);

   if (diff < 0) {
      console.log("Data não pode ser anterior ao dia de hoje!");
      //return
   } else if (diff > 30) {
      console.log("Data não pode ser mais do que 30 dias pra frente!");
      //return
   } else {
      console.log("Data válida!");
      //return
   }
}