// function run(dateTimePedido, requestsSent) {

//   dateTimePedido = new Date(dateTimePedido)

//   const dateTime1stRequest = new Date(dateTimePedido.getTime() + 5 * 60000);
//   const dateTime2ndRequest = new Date(dateTimePedido.getTime() + 10 * 60000);
//   const dateTime3rdRequest = new Date(dateTimePedido.getTime() + 15 * 60000);
//   const dateTimeNow = new Date();

//   // Verifica quantas tentativas foram feitas
//   switch (requestsSent) {
//     case '0':
//       return canSendRequest(dateTimeNow, dateTime1stRequest);
//     case '1':
//       return canSendRequest(dateTimeNow, dateTime2ndRequest);
//     case '2':
//       return canSendRequest(dateTimeNow, dateTime3rdRequest);
//   }
// }

// function canSendRequest(dateTimeNow, dateTimeRequest) {
//   dateTimeNow = dateTimeNow.getTime();
//   dateTimeRequest = dateTimeRequest.getTime();

//   if (dateTimeNow < dateTimeRequest) {
//     return false
//   } else if (dateTimeNow >= dateTimeRequest) {
//     return true
//   } else {
//     return false
//   }
// };


function run(dateTimePedido, requestsSent) {

  // Replaces por conta da Blip, pois ele está gerando caracteres sem necessidade
  dateTimePedido = dateTimePedido.replace('"','')
  dateTimePedido = dateTimePedido.replace('"','')
  dateTimePedido = dateTimePedido.replace('\\','')
  dateTimePedido = dateTimePedido.replace('\\','')

  // Inicializando variáveis
  dateTimePedido = new Date(dateTimePedido).getTime();  
  let dateTimeNow = new Date().getTime();
  let dateTimeRequest;

  // Verifica quantas requests foram feitas
  switch (requestsSent) {
    case '0':
      dateTimeRequest = new Date(dateTimePedido + 5 * 60000).getTime()
      break;
    case '1':
      dateTimeRequest = new Date(dateTimePedido + 10 * 60000).getTime()
      break;
    case '2':
      dateTimeRequest = new Date(dateTimePedido + 15 * 60000).getTime()
      break;
    default:
      return false
  }

  // Compara a data atual com as datas da requisição
  if (dateTimeNow < dateTimeRequest) {
    return false
  } else if (dateTimeNow >= dateTimeRequest) {
    return true
  } else {
    return false
  }
}