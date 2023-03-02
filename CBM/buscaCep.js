function run(responseCep) {
    try {
        responseCep = JSON.parse(responseCep)
        let cep = `${responseCep[0].cep[0]}${responseCep[0].cep[1]}.${responseCep[0].cep[2]}${responseCep[0].cep[3]}${responseCep[0].cep[4]}-${responseCep[0].cep[5]}${responseCep[0].cep[6]}${responseCep[0].cep[7]}`

        return {
            city: `${responseCep[0].cidade}`,
            uf: `${responseCep[0].uf}`,
            cep: `${cep}`
        }
        

    }
    catch (e) {
        return 'error'
    }
}
console.log(run(JSON.stringify([
    {
        "cep": "34015990",
        "uf": "MG",
        "cidade": "Nova Lima",
        "bairro": "",
        "logradouro": "Rua Morro dos Pires, nº 10, bairro Jardim Petrópolis, Nova Lima, MG",
        "aux": "CPC Secretaria do Condomínio"
    },
    {
        "cep": "34018022",
        "uf": "MG",
        "cidade": "Nova Lima",
        "bairro": "Alphaville - Lagoa dos Ingleses",
        "logradouro": "Rua Nova Lima"
    },
    {
        "cep": "34012580",
        "uf": "MG",
        "cidade": "Nova Lima",
        "bairro": "Vila Nova Suíça",
        "logradouro": "Rodovia MG-030"
    },
    {
        "cep": "34012583",
        "uf": "MG",
        "cidade": "Nova Lima",
        "bairro": "Vila Nova Suíça",
        "logradouro": "Rua Luís Seabra Sobrinho"
    },
    {
        "cep": "34012586",
        "uf": "MG",
        "cidade": "Nova Lima",
        "bairro": "Vila Nova Suíça",
        "logradouro": "Rua Rio Grande do Sul"
    },
    {
        "cep": "34012589",
        "uf": "MG",
        "cidade": "Nova Lima",
        "bairro": "Vila Nova Suíça",
        "logradouro": "Rua Santa Catarina"
    },
    {
        "cep": "34012590",
        "uf": "MG",
        "cidade": "Nova Lima",
        "bairro": "Vila Nova Suíça",
        "logradouro": "Rua Espírito Santo"
    },
    {
        "cep": "34012592",
        "uf": "MG",
        "cidade": "Nova Lima",
        "bairro": "Vila Nova Suíça",
        "logradouro": "Rua Rondônia"
    },
    {
        "cep": "34012595",
        "uf": "MG",
        "cidade": "Nova Lima",
        "bairro": "Vila Nova Suíça",
        "logradouro": "Rua Mato Grosso"
    },
    {
        "cep": "34012598",
        "uf": "MG",
        "cidade": "Nova Lima",
        "bairro": "Vila Nova Suíça",
        "logradouro": "Rua Goiás"
    },
    {
        "cep": "34012515",
        "uf": "MG",
        "cidade": "Nova Lima",
        "bairro": "Bela Fama",
        "logradouro": "Rodovia MG-030"
    },
    {
        "cep": "34012640",
        "uf": "MG",
        "cidade": "Nova Lima",
        "bairro": "Honório Bicalho",
        "logradouro": "Rodovia MG-030"
    },
    {
        "cep": "34012750",
        "uf": "MG",
        "cidade": "Nova Lima",
        "bairro": "Pasto da Balança",
        "logradouro": "Rodovia MG-030"
    },
    {
        "cep": "34012850",
        "uf": "MG",
        "cidade": "Nova Lima",
        "bairro": "Santa Rita",
        "logradouro": "Rodovia MG-030"
    },
    {
        "cep": "34012970",
        "uf": "MG",
        "cidade": "Nova Lima",
        "bairro": "Vale do Sereno",
        "logradouro": "Rodovia MG-030, 8625 Loja 12-A",
        "aux": "AC Bairro Vale Do Sereno"
    },
    {
        "cep": "30295994",
        "uf": "MG",
        "cidade": "Belo Horizonte",
        "bairro": "",
        "logradouro": "Estrada Velha de Nova Lima, 1275",
        "aux": "CPC Associação Comunitária Ênio"
    },
    {
        "cep": "30295995",
        "uf": "MG",
        "cidade": "Belo Horizonte",
        "bairro": "",
        "logradouro": "Estrada Velha de Nova Lima, 275",
        "aux": "CPC Bar do Pereira"
    },
    {
        "cep": "30516210",
        "uf": "MG",
        "cidade": "Belo Horizonte",
        "bairro": "Nova Cintra",
        "logradouro": "Beco Santa Rosa de Lima"
    },
    {
        "cep": "30710250",
        "uf": "MG",
        "cidade": "Belo Horizonte",
        "bairro": "Carlos Prates",
        "logradouro": "Rua Nova Lima"
    },
    {
        "cep": "31630100",
        "uf": "MG",
        "cidade": "Belo Horizonte",
        "bairro": "Serra Verde (Venda Nova)",
        "logradouro": "Rua Paschoal Souza Lima"
    }
])))