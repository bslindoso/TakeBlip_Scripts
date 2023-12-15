function validateInputOptions(input, optionsRegex, inputType, allowNumbers = false) {
    const invalid = "Input inesperado";
    if (isInvalidType(inputType)) {
      return invalid;
    }
    try {
      input = removeUnnecessaryInput(input);
      if (isInsideNumberOptionsInput(optionsRegex, input) || allowNumbers) {
        for (let key in optionsRegex) {
          const matching = new RegExp(key, "i");
          if (matching.test(input)) {
            return optionsRegex[key];
          }
        }
      }
    } catch (e) {
      return invalid;
    }
    return invalid;
  }
  function isInvalidType(inputType) {
    const typeValid = "text/plain";
    return inputType != typeValid;
  }
  function removeUnnecessaryInput(input) {
    const EMPTY_STR = "";
    const UNNECESSARY_INPUT = RegExp("(^0+|\\.0+|^\\s+|\\s+$)", "gi");
    if (input.length > 1) {
      input = input.replace(UNNECESSARY_INPUT, EMPTY_STR);
    }
    return removeExcessWhiteSpace(input);
  }
  function removeExcessWhiteSpace(input) {
    const SPACE_STR = " ";
    const WHITE_SPACES = RegExp("(\\s+)", "gi");
    return input.replace(WHITE_SPACES, SPACE_STR);
  }
  function isInsideNumberOptionsInput(optionsRegex, input) {
    let removeDigits = /\d+/g;
    let numbersFound = "";
    var options = Object.keys(optionsRegex).length;
    var numberOptions = options.toString().length;
    if (removeDigits.test(input)) {
      var numbers = input.match(removeDigits);
      for (var i = 0; i < numbers.length; i++) {
        numbersFound += numbers[i];
      }
      if (numbersFound.length > numberOptions) {
        return false;
      }
    }
    return true;
  }