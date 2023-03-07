function run(input) {

    const matchDash = input.match(/^[0-9]{5}-[0-9]{3}$/gm);
    const matchWithoutDash = input.match(/^[0-9]{5}[0-9]{3}$/gm);
    if (!matchDash && !matchWithoutDash) {
        return "cepJS ERROR: NOT A VALID POSTAL CODE";
    } else {
        if (matchDash) {
            return input.split('-').join('')
        }
        return input;
    }
}