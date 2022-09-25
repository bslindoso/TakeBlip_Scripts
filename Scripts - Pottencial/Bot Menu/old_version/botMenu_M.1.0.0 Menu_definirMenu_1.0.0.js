{{resource.FunctionGetMenu}}

const run = (boldValue, platform, formatMenu, inforuser) => {
        
    if (inforuser) {       

        const options = ['Produtos | Dúvidas', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Acordo: Seguro Aluguel', 'Outros assuntos', 'SAC', 'Fazer Login'];
        const values = ['ProdutosFaq', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Fazer acordo', 'OutrosAssuntos', 'SAC', 'Login'];
        const description = ['', '', '', '', '', 'Opção direcionada para clientes Pessoa Física.', '', '', ''];

        let inforuserObj = JSON.parse(inforuser);
        let areaLogada = inforuserObj.key;

        if (formatMenu == 'Login') {
            switch (areaLogada) {
                case 'cliente-pf':
                    options = ['Produtos | Dúvidas', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Acordo: Seguro Aluguel', 'Outros assuntos', 'SAC', 'Deslogar'];
                    values = ['ProdutosFaq', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Fazer acordo', 'OutrosAssuntos', 'SAC', 'Deslogar'];
                    description = ['', '', '', '', '', 'Opção direcionada para clientes Pessoa Física.', '', '', ''];
                    break;

                case 'cliente-pj':
                    options = ['Produtos | Dúvidas', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Acordo: Seguro Aluguel', 'Outros assuntos', 'SAC', 'Deslogar'];
                    values = ['ProdutosFaq', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Fazer acordo', 'OutrosAssuntos', 'SAC', 'Deslogar'];
                    description = ['', '', '', '', '', 'Opção direcionada para clientes Pessoa Física.', '', '', ''];
                    break;

                case 'corretor':
                    options = ['Produtos | Dúvidas', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Acordo: Seguro Aluguel', 'Outros assuntos', 'SAC', 'Deslogar'];
                    values = ['ProdutosFaq', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Fazer acordo', 'OutrosAssuntos', 'SAC', 'Deslogar'];
                    description = ['', '', '', '', '', 'Opção direcionada para clientes Pessoa Física.', '', '', ''];
                    break;

                default:
                    options = ['Produtos | Dúvidas', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Acordo: Seguro Aluguel', 'Outros assuntos', 'SAC', 'Deslogar'];
                    values = ['ProdutosFaq', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Fazer acordo', 'OutrosAssuntos', 'SAC', 'Deslogar'];
                    description = ['', '', '', '', '', 'Opção direcionada para clientes Pessoa Física.', '', '', ''];
                    break;
            }
        }

        if (formatMenu == 'Portal') {
            switch (areaLogada) {
                case 'cliente-pf':
                    options = ['Produtos | Dúvidas', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Acordo: Seguro Aluguel', 'Outros assuntos', 'SAC'];
                    values = ['ProdutosFaq', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Fazer acordo', 'OutrosAssuntos', 'SAC'];
                    description = ['', '', '', '', '', 'Opção direcionada para clientes Pessoa Física.', '', ''];
                    break;

                case 'cliente-pj':
                    options = ['Produtos | Dúvidas', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Acordo: Seguro Aluguel', 'Outros assuntos', 'SAC'];
                    values = ['ProdutosFaq', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Fazer acordo', 'OutrosAssuntos', 'SAC'];
                    description = ['', '', '', '', '', 'Opção direcionada para clientes Pessoa Física.', '', ''];
                    break;

                case 'corretor':
                    options = ['Produtos | Dúvidas', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Acordo: Seguro Aluguel', 'Outros assuntos', 'SAC'];
                    values = ['ProdutosFaq', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Fazer acordo', 'OutroAssuntos', 'SAC'];
                    description = ['', '', '', '', '', 'Opção direcionada para clientes Pessoa Física.', '', ''];
                    break;

                default:
                    options = ['Produtos | Dúvidas', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Acordo: Seguro Aluguel', 'Outros assuntos', 'SAC'];
                    values = ['ProdutosFaq', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Fazer acordo', 'OutrosAssuntos', 'SAC'];
                    description = ['', '', '', '', '', 'Opção direcionada para clientes Pessoa Física.', '', ''];
                    break;
            }
        }

    } else {
        const options = ['Produtos | Dúvidas', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Acordo: Seguro Aluguel', 'Outros assuntos', 'SAC', 'Fazer Login'];
        const values = ['ProdutosFaq', 'Cadastro', 'Apólice', 'Financeiro', 'Sinistro', 'Fazer acordo', 'OutrosAssuntos', 'SAC', 'Login'];
        const description = ['', '', '', '', '', 'Opção direcionada para clientes Pessoa Física.', '', '', ''];
    }

    let convertPlatform = platform.toLowerCase();
    let convertBold = JSON.parse(boldValue);

    let default_msg = {
        "text": 'Pelo jeito você esta precisando de ajuda ne?\n\nConsigo falar sobre {{n1}}esses assuntos{{n2}} 👇',
        "header": 'Menu Principal',
        "body": 'Pelo jeito você esta precisando de ajuda ne?\n\nConsigo falar sobre {{n1}}esses assuntos{{n2}} 👇',
        "footer": 'Seleção de assuntos',
        "button": 'Escolha um assunto',
        "title": 'Seleção de assuntos',
        "namespaceTemplate": '',
        "nameTemplate": '',
        "options": options,
        "values": values,
        "description": [],
        "menuScope": {
            "whatsappButton": false,
            "whatsappList": true,
            "useDescription": false,
            "whatsappTemplate": false,
            "blipchatQuickReply": false,
            "blipchatMenu": true,
            "defaultText": false,
            "platform": convertPlatform,
            "boldValue": convertBold,
        },
    };

    var newMenu = getMenuForPlatform(default_msg);

    return newMenu;
};

