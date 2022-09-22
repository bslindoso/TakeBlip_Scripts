// LAST STATE WITH INPUT

// <<<<Var of input>>>> 
// state.name
// state.id
// lastStateWithInput

// <<<<var de saida>>>>
// lastStateWithInput

// <<<condição>>>
// se a variavel for diferente de
// state.id
// valor  onboarding

// <<<Script>>>>
// {{resource.utilGetLastStateWithInput}}

function run(stateName, stateId, lastStateWithInputCurrent) {
    return getLastStateWithInput(stateName, stateId, lastStateWithInputCurrent);
}