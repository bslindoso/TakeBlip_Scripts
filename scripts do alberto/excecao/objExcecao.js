// OBJEXCECAO

// <<<<Var of input>>>> 
// processedInput
// lastStateWithInput
// countException

// <<<<var de saida>>>>
// objExcecao

// <<<condição>>>

// <<<Script>>>>
// {{resource.FunctionGetRedirectMessage}}

const run = (processedInput, lastStateWithInput, countException) => {
    const destination = 'excecao';
    const origin = '';
    return getRedirectMessage(destination, origin, processedInput, lastStateWithInput, countException);
};