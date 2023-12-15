function run(responseFiltroTelefone) {
    let obj = JSON.parse(responseFiltroTelefone)
    let ddd = obj.pessoaFisica.telefones[0].ddd;

    return ddd;
} 


console.log(run(JSON.stringify({
    "versao": "2022-12-07T10:17:24.000-03:00",
    "pessoaFisica": {
        "id": "4430372",
        "cpf": "60305129007",
        "nome": "Teste da Conceição",
        "apelido": "LuMa",
        "sexo": "FEMININO",
        "documentos": [
            {
                "numero": "36061594046",
                "orgao": "SSP",
                "emissao": "13/12/2013",
                "tipo": "RG"
            },
            {
                "numero": "60305129007",
                "orgao": "SSP",
                "emissao": "13/12/2013",
                "tipo": "CPF"
            }
        ],
        "telefones": [
            {
                "ddd": "19",
                "numero": "994117991",
                "tipo": "CELULAR"
            },
            {
                "ddd": "21",
                "numero": "27315073",
                "tipo": "RESIDENCIAL"
            }
        ],
        "enderecos": [
            {
                "logradouro": "Beira Mar",
                "tipoLogradouro": "Avenida",
                "numero": "1983",
                "complemento": "Ap 101",
                "bairro": "Centro",
                "cidade": "Florianópolis",
                "estado": "SC",
                "cep": "88040500",
                "tipo": "RESIDENCIAL"
            }
        ],
        "emails": [
            {
                "endereco": "terste@acaoi.com.br"
            }
        ],
        "cadastroComplementar": {
            "indPermissaoEmail": true,
            "indPermissaoLigacao": true,
            "indPermissaoCarta": true,
            "indWhatsApp": true
        },
        "dataNascimento": "1992-01-18"
    }
})))