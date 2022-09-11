// FunctionGetRedirectMessage

function getRedirectMessage(destination, origin, processedInput, lastStateWithInput, countException) {

  const redirectMessage = {
    'destination': destination,
    'origin': origin,
    'inputContent': "",
    'inputType': "",
    'stateDestination': 'Default',
    'stateOrigin': origin
  };

  try {
    lastStateWithInput = JSON.parse(lastStateWithInput);
    processedInput = JSON.parse(processedInput);

    redirectMessage.inputContent = processedInput.input;
    redirectMessage.inputType = processedInput.type;
    redirectMessage.stateDestination = processedInput.type == 'NPS' ? 'NPS' : countException > 1 ? 'Persistente' : processedInput.type;
    redirectMessage.stateOrigin = lastStateWithInput.name;
  } finally {
    return redirectMessage;
  }
}