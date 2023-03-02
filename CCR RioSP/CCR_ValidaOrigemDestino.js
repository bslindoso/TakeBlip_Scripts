function validateCidadeOrigemDestino(value) {  

    if (/[0-9]/gm.test(value)) {
        return false;
    }
    return true;
}