{{resource.FunctionGetMenu}}

const run = (boldValue, platform, formatMenu, setaOpcoesMenuPrincipal) => {
    let convertPlatform = platform.toLowerCase();
    let convertBold = JSON.parse(boldValue);
    setaOpcoesMenuPrincipal = JSON.parse(setaOpcoesMenuPrincipal);

    // ==========================================================

    let listaDisponivel = setaOpcoesMenuPrincipal.listaDisponivel;

    // ==========================================================
    
    // CENÁRIOS
    // Cenário 1 -- Usuário deslogado Institucional e Whatsapp
    let usuarioDeslogado = setaOpcoesMenuPrincipal.usuarioDeslogado; // IDs das opções deste cenário
    let menu = defineMenu(listaDisponivel, usuarioDeslogado);
    // Cenário 2 -- Usuário deslogado Portal (não existe este cenário)
    // Cenário 3 -- Usuário Logado Institucional e Whatsapp
    if (formatMenu == 'Login') {
        let usuarioLogado = setaOpcoesMenuPrincipal.usuarioLogado; // IDs das opções deste cenário
        menu = defineMenu(listaDisponivel, usuarioLogado);
    }
    // Cenário 4 -- Usuário Logado Portal
    if (formatMenu == 'Portal') {
        let usuarioPortal = setaOpcoesMenuPrincipal.usuarioPortal; // IDs das opções deste cenário
        menu = defineMenu(listaDisponivel, usuarioPortal);
    }
    
    // ==========================================================
    
    let options = menu.options;
    let values = menu.values;
    let description = menu.description;

    // ==========================================================

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
        "description": description,
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

// FUNÇÕES AUXILIARES
function defineMenu(listaDisponivel, cenario) {
    let menu = { "options": [], "values": [], "description": [] };
    for (let i = 0; i < cenario.length; i++) {
        for (let j = 0; j < listaDisponivel.length; j++) {
            if (cenario[i] == listaDisponivel[j].id) {
                menu.options.push(listaDisponivel[j].options);
                menu.values.push(listaDisponivel[j].values);
                menu.description.push(listaDisponivel[j].description);
            }
        }
    }
    return menu;
};