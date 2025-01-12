// ENTRADAS: state.name, state.id, state.previous.name, state.previous.id, service
// NOME DA VARIAVEL: lastStateWithContent
// CONDIÇÃO: se Variável Contém state.name [CONTENT]

function run(stateName, stateId, previousStateName = null, previousStateId = null, service) {
    return {
        name: stateName,
        id: stateId,
        previousName: previousStateName,
        previousId: previousStateId,
        service: service
    }
}

