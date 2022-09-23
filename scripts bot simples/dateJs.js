function run(input) {
    try {

        // Verifica se o input informado está no formato esperado 
        const match = input.match(/^(\d{1,2})\/(\d{1,2})\/\d{4}$/gm);
        if (!match) {
            return "dateJS ERROR: INVALID DATE FORMAT";
        } else {
            return input;
        };
    } catch (e) {
        return "dateJS ERROR: UNEXPECTED ERROR";
    };
};