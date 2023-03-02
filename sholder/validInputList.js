function run(input) {
    let validation = 'NPS'
    if (validation.includes('NPS')) {
        if (validation.includes('NPS')) {
            //const result = validateNPS(input);
            if (input == null || input == "" || input == "null") {
                return {
                    'type': 'Inativo',
                    'input': "Inatividade",
                    'inputRecognized': 'inactivity'
                };
            }

            return {
                'type': 'NPS',
                'input': result,
                'inputRecognized': 'validation'
            };
        }
    }
}

console.log(run(''))



