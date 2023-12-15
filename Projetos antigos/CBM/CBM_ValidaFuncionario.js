let responseValidUser = JSON.stringify({
    "funcionario": [
        {
            "_creationUser": null,
            "estado": null,
            "nivelSalarial": null,
            "centroDeCusto": {
                "_id": "5c51f50162edb92dcaea565b",
                "_classId": "5c180ee662edb9cf099429eb"
            },
            "tabelaSalarial": null,
            "idKonquestProfile": null,
            "complemento": null,
            "sindicato": null,
            "cPF": "34855625051",
            "idKonquest": null,
            "telefoneDeContato": "41999999999",
            "filial": {
                "_id": "5c51c24c62edb92dcae0b5d8",
                "_classId": "5c1a928b62edb9cf09f5a9d2"
            },
            "bairro": null,
            "nomeDoPai": null,
            "nome": "6",
            "dataFimDaAusencia": null,
            "_creationDate": "2021-03-26T16:46:54.368Z",
            "nomeDaMae": null,
            "exames": null,
            "RG": "137084498",
            "matricula": "06",
            "usuario": null,
            "_id": "605e0ffecb51c51030428e51",
            "_class": {
                "_id": "5c4f2be462edb9a1d76b60c0",
                "_classId": "000000000000000000000000"
            },
            "dataDeNascimento": null,
            "faixaSalarial": null,
            "funcao": {
                "_id": "5d36058c2dc479100aafb98e",
                "_classId": "5c3cd03162edb94243f6cfd9"
            },
            "turnoDeTrabalho": {
                "_id": "60b88d8a07c5e623dcdb2f4d",
                "_classId": "60b5519e22db35349d844572"
            },
            "cidade": null,
            "numero": null,
            "orgaoEmissorRG": null,
            "dataDeDemissao": null,
            "dataEmissaoRG": null,
            "_lastUpdateUser": {
                "_id": "6109ba1bf785a6519480ab92",
                "_classId": "000000000000000000000002"
            },
            "cEP": null,
            "_publishedObject": null,
            "_lastUpdateDate": "2022-02-07T16:05:56.704Z",
            "_protected": false,
            "formacao": null,
            "email": "6@6.com",
            "situacaoDoFuncionario": "Normal",
            "dataDaUltimaAlteracaoProtheus": null,
            "_revision": "533afb328d48c2c062ead853c28a6f60",
            "cracha": null,
            "_classRevision": "db7e8e1935d0be54f2698fd446c24da1",
            "estadoCivil": null,
            "pais": "Brasil",
            "dataDeAdmissao": null,
            "treinamentos": null,
            "logradouro": null,
            "departamento": {
                "_id": "6082fe5fa4785a0ac057ac9c",
                "_classId": "60709542565c48484325199b"
            },
            "outrasFiliais": [
                {
                    "_id": "5d94b7985baf265d8a5f4b44",
                    "_classId": "5c1a928b62edb9cf09f5a9d2"
                }
            ],
            "sexo": null
        }
    ],
    "funcionarioEncontrado": true
})

// responseValidUser = JSON.stringify({
//     "funcionario": [],
//     "funcionarioEncontrado": false
// })

// responseValidUser = '{}'

let statusValidUser = "200"

console.log(run(responseValidUser, statusValidUser))

//////// SCRIPT BLIP
function run(responseValidUser, statusValidUser) {

    let validaFuncionario = {
        "type": "",
        "status": statusValidUser,
        "process": "",
    }

    responseValidUser = JSON.parse(responseValidUser)
    statusValidUser = parseInt(statusValidUser)
    let primeiroFuncionario;

    if (statusValidUser >= 200 && statusValidUser <= 299) {

        if (responseValidUser.hasOwnProperty('funcionario')) {
            primeiroFuncionario = responseValidUser.funcionario[0]
        } else {
            // Não possui propriedade Funcionario
            validaFuncionario.type = "error"
            validaFuncionario.process = "Response não possui propriedade 'funcionario'"
            return JSON.stringify(validaFuncionario);
        }

        // SUCESSO API
        if (responseValidUser.hasOwnProperty('funcionarioEncontrado')) {
            let funcionarioEncontrado = responseValidUser.funcionarioEncontrado;
            if (funcionarioEncontrado) {
                // Funcionário encontrado
                if (primeiroFuncionario.hasOwnProperty('situacaoDoFuncionario')) {
                    let situacaoDoFuncionario = primeiroFuncionario.situacaoDoFuncionario;
                    validaFuncionario.type = 'success'
                    switch (situacaoDoFuncionario) {
                        case 'Normal':
                        case 'Férias':
                        case 'Afastado Temporariamente':
                            validaFuncionario.process = 'Funcionário'
                            break;
                        case 'Demitido':
                            validaFuncionario.process = 'Ex Funcionário'
                            break;
                        default:
                            validaFuncionario.process = 'Funcionário'
                            break;
                    }
                    return JSON.stringify(validaFuncionario);

                } else {
                    validaFuncionario.type = "error"
                    validaFuncionario.process = "Response não possui propriedade 'situacaoDoFuncionario'"
                    return JSON.stringify(validaFuncionario);
                }
            } else {
                // Funcionário não encontrado
                validaFuncionario.type = "error"
                validaFuncionario.process = "Funcionário não encontrado"
                return JSON.stringify(validaFuncionario);
            }
        } else {
            // Não possui propriedade funcionarioEncontrado
            validaFuncionario.type = "error"
            validaFuncionario.process = "Response não possui propriedade 'funcionarioEncontrado'"
            return JSON.stringify(validaFuncionario);
        }
    } else {
        // ERRO API
        validaFuncionario.type = "error"
        validaFuncionario.process = "Erro API"
        return JSON.stringify(validaFuncionario);
    }
}
