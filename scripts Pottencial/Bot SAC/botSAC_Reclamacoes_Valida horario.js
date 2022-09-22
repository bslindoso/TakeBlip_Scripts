function run() {
    
    try {
        
        let dateHour = new Date();

        if (dateHour.getHours() >= 8 && dateHour.getHours() < 18) {
            return JSON.stringify({"horarioAtendimento" : "true", "hour": dateHour.getHours()});
        }

        return JSON.stringify({"horarioAtendimento" : "false", "hour": dateHour.getHours()});
        
    } catch (e) {

        return 'Erro ao validar horário'
    }
}