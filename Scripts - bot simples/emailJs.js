function run(input) {
    try {
        const match = input.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/gm);
        if (!match) {
            return "emailJS ERROR: NOT A VALID E-MAIL";
        } else {
            return input;
        }
    } catch (e) {
        return "emailJs ERROR: UNEXPECTED ERROR";
    }
}