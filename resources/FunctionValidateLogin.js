function validarLogin(date, hours, exp) {
    if (date == null ||
      date == '' ||
      date == 'null' ||
      hours == null ||
      hours == '' ||
      hours == 'null' ||
      exp == null ||
      exp == '' ||
      exp == 'null') {
      return false;
    }
  
    const dataAtual = getDataAtual();
    const dataLogin = getDataLogin(date, hours);
    const dataExpiracao = getDataExp(exp);
  
   if (dataExpiracao > dataAtual) {
       return true;
   }
  
    return false;
  }
  
  function getDataAtual() {
    const data = new Date();
    return data;
  }
  
  function getDataLogin(data, time) {
    const dataLogin = data.split('/');
    const dia = dataLogin[0];
    let mes = dataLogin[1];
    const ano = dataLogin[2];
    const timeLogin = time.split(':');
    const hora = timeLogin[0];
    const min = timeLogin[1];
    const seg = timeLogin[2];
  
    if (mes == '01') {
        mes = '00';
    } else {
        mes = (parseInt(mes) - 1).toString();
    }
    let loginDate = new Date(ano, mes, dia, hora, min, seg);
  
    return dataLogin[1] + "/" + dataLogin[0] + "/" + dataLogin[2];
  }
  
  function getDataExp(data) {
    const dataExp = data.split('/');
    const horaExp = dataExp[2].split(' ');
    const dia = dataExp[0];
    let mes = dataExp[1];
    const ano = horaExp[0];
    const timeExp = horaExp[1].split(':');
    const hora = timeExp[0];
    const min = timeExp[1];
    const seg = timeExp[2];
  
    if (mes == '01') {
        mes = '00';
    } else {
        mes = (parseInt(mes) - 1).toString();
    }
    let expDate = new Date(ano, mes, dia, hora, min, seg);
    
    return expDate;
  }