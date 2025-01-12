// ENTRADAS: state.name, state.id, state.previous.name, state.previous.id, service
// NOME DA VARIAVEL: lastStateWithInput
// CONDIÇÃO: se Variável Contém state.name [INPUT]

function run(stateName, stateId, previousStateName = null, previousStateId = null, service) {
    return {
        name: stateName,
        id: stateId,
        previousName: previousStateName,
        previousId: previousStateId,
        service: service
    }
}
