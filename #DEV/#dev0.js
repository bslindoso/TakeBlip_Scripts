let BreakLine = '\n';

function getMenuForPlatform(menuFormat) {
    let menu = menuFormat;
    if (typeof menuFormat === typeof toString()) {
        menu = JSON.parse(menuFormat);
    }

    let platform = menu.menuScope.platform;
    let boldValue = menu.menuScope.boldValue;
    let menuScope = menu.menuScope;

    let definePlatform = '';

    switch (platform) {
        case 'whatsapp':
            definePlatform = defineTypeWhatsApp(menuScope, menu, boldValue);
            break;

        case 'messenger':
            definePlatform = defineTypeBlipChat(menuScope, menu, boldValue);
            break;

        default:
            definePlatform = defineTypeBlipChat(menuScope, menu, boldValue);
            break;
    }

    let content_card = new Object();

    content_card.content = definePlatform;
    content_card.type = getTypeContentDinamic(platform, menuScope);

    return content_card;
}

function getTypeContentDinamic(platform, menu) {
    if (platform == 'whatsapp') {
        if (menu.whatsappButton || menu.whatsappList || menu.whatsappTemplate) {
            return 'application/json';
        }

        return 'application/vnd.lime.select+json';
    } else {
        return 'application/vnd.lime.select+json';
    }
}

function returnFormatMenu(menuScope) {
    let platform = menuScope.platform;
    if (menuScope.whatsappButton == true && platform == 'whatsapp') {
        return 'whatsappButton';
    }
    if (menuScope.whatsappList == true && platform == 'whatsapp') {
        return 'whatsappList';
    }
    if (menuScope.whatsappTemplate == true && platform == 'whatsapp') {
        return 'whatsappTemplate';
    }
    if (menuScope.blipchatQuickReply == true && platform == 'blipchat') {
        return 'blipchatQuickReply';
    }
    if (menuScope.blipchatMenu == true && platform == 'blipchat') {
        return 'blipchatMenu';
    }
    if (menuScope.defaultText == true && platform == 'whatsapp' || platform == 'blipchat') {
        return 'defaultText';
    }
}

function defineTypeWhatsApp(menuScope, Menu, boldValue) {
    let returnMenu = '';
    let typeMenu = returnFormatMenu(menuScope);

    switch (typeMenu) {
        case 'whatsappButton':
            returnMenu = getWhatsApp3Botoes(Menu);
            break;

        case 'whatsappList':
            returnMenu = getWhatsAppOpcoes(Menu);
            break;

        case 'whatsappTemplate':
            returnMenu = getTemplateZap(Menu);
            break;

        default:
            returnMenu = getTextMenu(Menu, boldValue);
            break;
    }

    return returnMenu;
}

function defineTypeBlipChat(menuScope, Menu, boldValue) {
    let returnMenu = '';
    let typeMenu = returnFormatMenu(menuScope);

    switch (typeMenu) {
        case 'blipchatQuickReply':
            returnMenu = getQuickReply(Menu);
            break;

        case 'blipchatMenu':
            returnMenu = getMenu(Menu);
            break;

        default:
            returnMenu = getTextMenu(Menu, boldValue);
            break;
    }

    return returnMenu;
}

function getTextMenu(menu, boldValue) {
    let menuText = '';
    if (menu.text) {
        menuText += menu.text + BreakLine + BreakLine;
    }
    for (let i = 0; i < menu.options.length; i++) {
        if (typeof menu.options[i] === typeof {}) {
            menuText += menu.options[i].isBreakLine ? BreakLine : '';
            menuText +=
                boldValue.open +
                menu.options[i].option +
                '.' +
                boldValue.close +
                ' ' +
                menu.options[i].text +
                BreakLine;
        } else {
            menuText +=
                boldValue.open +
                (i + 1) +
                '.' +
                boldValue.close +
                ' ' +
                menu.options[i] +
                BreakLine;
        }
    }
    if (menu.submenu.length > 0) {
        for (let i = 0; i < menu.submenu.length; i++) {
            menuText += "\n" + boldValue.open + menu.submenu[i].number + "." + boldValue.close + " " + menu.submenu[i].text
        }
    }
    return { text: menuText };
}

function getMenu(Menu) {
    const menuOptions = [];
    if (Menu.values) {
        for (let i = 0; i < Menu.options.length; i++) {
            menuOptions.push({
                "order": i + 1,
                "text": Menu.options[i],
                "type": 'text/plain',
                "value": Menu.values[i],
            });
        }
    } else {
        for (let i = 0; i < Menu.options.length; i++) {
            menuOptions.push({
                "order": i + 1,
                "text": Menu.options[i],
                "type": 'text/plain',
                "value": Menu.options[i],
            });
        }
    }
    return {
        "scope": 'persistent',
        "text": Menu.text,
        "options": menuOptions,
    };
}

function getQuickReply(Menu) {
    const menuOptions = [];
    if (Menu.values) {
        for (let i = 0; i < Menu.options.length; i++) {
            menuOptions.push({
                "text": Menu.options[i],
                "type": 'text/plain',
                "value": Menu.values[i],
            });
        }
    } else {
        for (let i = 0; i < Menu.options.length; i++) {
            menuOptions.push({
                "text": Menu.options[i],
                "type": 'text/plain',
                "value": Menu.options[i],
            });
        }
    }
    return {
        "scope": 'immediate',
        "text": Menu.text,
        "options": menuOptions,
    };
}

function getWhatsApp3Botoes(Menu) {
    const menuOptions = [];
    for (let i = 0; i < Menu.options.length; i++) {
        menuOptions.push({
            "type": 'reply',
            "reply": {
                "id": String(i + 1),
                "title": Menu.options[i],
            },
        });
    }
    return {
        "recipient_type": 'individual',
        "type": 'interactive',
        "interactive": {
            "type": 'button',
            "body": {
                "text": Menu.body,
            },
            "footer": {
                "text": Menu.footer,
            },
            "action": {
                "buttons": menuOptions,
            },
        },
    };
}

function getWhatsAppOpcoes(Menu) {
    const menuOptions = [];
    if (Menu.description.length > 0) {
        for (let i = 0; i < Menu.options.length; i++) {
            menuOptions.push({
                "id": String(i + 1),
                "title": Menu.options[i],
                "description": Menu.description[i],
            });
        }
    } else {
        for (let i = 0; i < Menu.options.length; i++) {
            menuOptions.push({
                "id": String(i + 1),
                "title": Menu.options[i],
            });
        }
    }
    return {
        "recipient_type": 'individual',
        "type": 'interactive',
        "interactive": {
            "type": 'list',
            "header": {
                "type": 'text',
                "text": Menu.header,
            },
            "body": {
                "text": Menu.body,
            },
            "footer": {
                "text": Menu.footer,
            },
            "action": {
                "button": Menu.button,
                "sections": [{
                    "title": Menu.title,
                    "rows": menuOptions,
                }, ],
            },
        },
    };
}

function getTemplateZap(Menu) {
    return {
        "type": 'template',
        "template": {
            "namespace": Menu.namespaceTemplate,
            "name": Menu.nameTemplate,
            "language": {
                "policy": 'deterministic',
                "code": 'pt_BR',
            },
        },
    };
}