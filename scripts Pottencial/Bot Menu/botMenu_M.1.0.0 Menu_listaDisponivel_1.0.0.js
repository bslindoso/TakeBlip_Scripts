function run() {

    // listaDisponivel: Adicionamos aqui todas as opções disponíveis
    // usuarioDeslogado: Adicionamos aqui os ids das opções que deverão ser listadas para este cenário
    // usuarioLogado: Adicionamos aqui os ids das opções que deverão ser listadas para este cenário
    // usuarioPortal: Adicionamos aqui os ids das opções que deverão ser listadas para este cenário
    let setaOpcoesMenuPrincipal = {
        "listaDisponivel": [
            {
                "id": 1,
                "options": "Produtos | Dúvidas",
                "values": "ProdutosFaq",
                "description": "",
                "match": ["produtosfaq"]
            }, {
                "id": 2,
                "options": "Cadastro",
                "values": "Cadastro",
                "description": "",
                "match": ["cadastro"]
            }, {
                "id": 3,
                "options": "Apólice",
                "values": "Apólice",
                "description": "",
                "match": ["apolice"]
            }, {
                "id": 4,
                "options": "Financeiro",
                "values": "Financeiro",
                "description": "",
                "match": ["financeiro"]
            }, {
                "id": 5,
                "options": "Sinistro",
                "values": "Sinistro",
                "description": "",
                "match": ["sinistro"]
            }, {
                "id": 6,
                "options": "Acordo: Seguro Aluguel",
                "values": "Fazer acordo",
                "description": "Opção direcionada para clientes Pessoa Física.",
                "match": ["fazer acordo", "acordo"]
            }, {
                "id": 7,
                "options": "Outros assuntos",
                "values": "OutrosAssuntos",
                "description": "",
                "match": ["outrosassuntos"]
            }, {
                "id": 8,
                "options": "SAC",
                "values": "SAC",
                "description": "",
                "match": ["sac"]
            }, {
                "id": 9,
                "options": "Fazer Login",
                "values": "Login",
                "description": "",
                "match": ["login", "fazer login", "logar"]
            }, {
                "id": 10,
                "options": "Deslogar",
                "values": "Deslogar",
                "description": "",
                "match": ["deslogar", "logout", "signout"]
            }
        ],
        "usuarioDeslogado": [1, 2, 3, 4, 5, 6, 7, 8, 9],
        "usuarioLogado": [1, 2, 3, 4, 5, 6, 7, 8, 10],
        "usuarioPortal": [1, 2, 3, 4, 5, 6, 7, 8]
    }

    setaOpcoesMenuPrincipal = JSON.stringify(setaOpcoesMenuPrincipal)
    return setaOpcoesMenuPrincipal;
}