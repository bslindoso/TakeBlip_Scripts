function run(contact) {
                
    let phone = contact.split("@")[0].replace("55", "");   
    let tamanho = phone.length;


    if(tamanho == 10){
        
        let telefone = phone.split('').join().replace(/\D/g, '');
        let math = Math.floor(telefone.length - 8 ); 
        let concat = telefone.substr(0,math)+"9"+telefone.substr(math);
        let retorno = concat;

        return retorno;
    }
    if(tamanho == 11){
        
        let retorno = phone
        return retorno;
    }

}