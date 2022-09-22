// FunctionGetMenu

function getMenuForPlatform(menuFormat) {
  let menu = menuFormat;
  if (typeof menuFormat === typeof toString()) {
    menu = JSON.parse(menuFormat);
  }

  const platform = menu.config.platform;

  let definePlatform = '';

  switch (platform) {
    case 'whatsapp':
      const whatsapp = menu.whatsapp;
      const textW = menu.default;
      const configW = menu.config;
      definePlatform = defineTypeWhatsApp(whatsapp, textW, configW);
      break;

    default:
      const blipchat = menu.blipchat;
      const textB = menu.default;
      const configB = menu.config;
      definePlatform = defineTypeBlipChat(blipchat, textB, configB);
      break;
  }

  let content_card = {
    "content": definePlatform,
    "type": getTypeContentDinamic(platform, menu)
  };

  return content_card;
}

function defineTypeWhatsApp(menu, text, config) {
  let returnMenu = '';
  let typeMenu = returnFormatMenu(menu, text, config);

  switch (typeMenu) {
    case 'button':
      const menuButton = menu.button;
      returnMenu = getWhatsApp3Botoes(menuButton, config);
      break;

    case 'list':
      const menuList = menu.list;
      returnMenu = getWhatsAppOpcoes(menuList, config);
      break;

    case 'template':
      const menuTemplate = menu.template;
      returnMenu = getTemplateZap(menuTemplate);
      break;

    case 'image':
      const menuImage = menu.image;
      returnMenu = getWhatsApp3BotoesWithImage(menuImage, config);
      break;

    case 'textMenu':
      const menuTextMenu = text.textMenu;
      returnMenu = getTextMenuMulti(menuTextMenu, config);
      break;

    default:
      const menuText = text.text;
      returnMenu = getTextMenu(menuText, config);
      break;
  }

  return returnMenu;
}

function defineTypeBlipChat(menu, text, config) {
  let returnMenu = '';
  let typeMenu = returnFormatMenu(menu, text, config);

  switch (typeMenu) {
    case 'quickReplay':
      const menuQuick = menu.quickReplay;
      returnMenu = getQuickReply(menuQuick, config);
      break;

    case 'menu':
      const menuMenu = menu.menu;
      returnMenu = getMenu(menuMenu, config);
      break;

    case 'textMenu':
      const menuTextMenu = text.textMenu;
      returnMenu = getTextMenuMulti(menuTextMenu, config);
      break;

    default:
      const menuText = text.text;
      returnMenu = getTextMenu(menuText, config);
      break;
  }

  return returnMenu;
}

function returnFormatMenu(menu, text, config) {
  let platform = returnChannelFormat(config.platform);

  if (platform == 'whatsapp') {
    if (menu.button.active) {
      return 'button';
    }

    if (menu.list.active) {
      return 'list';
    }

    if (menu.template.active) {
      return 'template';
    }

    if (menu.image.active) {
      return 'image';
    }

    if (text.text.active) {
      return 'text';
    }

    if (text.textMenu.active) {
      return 'textMenu';
    }
  }

  if (platform == 'blipchat') {
    if (menu.quickReplay.active) {
      return 'quickReplay';
    }

    if (menu.menu.active) {
      return 'menu';
    }

    if (text.text.active) {
      return 'text';
    }

    if (text.textMenu.active) {
      return 'textMenu';
    }
  }
}

function returnChannelFormat(channel) {
  if (channel == 'whatsapp') {
    return 'whatsapp';
  } else {
    return 'blipchat';
  }
}

function getTypeContentDinamic(platform, menu) {
  if (platform == 'whatsapp') {
    if (menu.whatsapp.button.active || menu.whatsapp.list.active || menu.whatsapp.template.active || menu.whatsapp.image.active) {
      return 'application/json';
    }

    return 'application/vnd.lime.select+json';
  } else {
    return 'application/vnd.lime.select+json';
  }
}

function myFunctionBold(item, n1, n2, open, close) {
  item.text = item.text.replace(n1, open);
  item.text = item.text.replace(n2, close);

  return item;
}

function myFunctionItalic(item, i1, i2, open, close) {
  item.text = item.text.replace(i1, open);
  item.text = item.text.replace(i2, close);

  return item;
}

function myFunctionBreakLine(item, bl, rbl, rbl2) {
  const matchingRBL = RegExp(rbl, "g");
  const matchingRBL2 = RegExp(rbl2, "g");
  const bl2 = `${bl}${bl}`;
  item = item.replace(matchingRBL, bl);
  item = item.replace(matchingRBL2, bl2);

  return item;
}

function getMenu(Menu, config) {
  let menuOptions = [];
  const addNumber = Menu.addNumber;
  const separated = Menu.separated == '' ? '.' : Menu.separated;
  const open = config.boldValue.open;
  const close = config.boldValue.close;
  const replaceBold = config.activereplaceBold;
  const openI = config.italicValue.open;
  const closeI = config.italicValue.close;
  const replaceItalic = config.activereplaceItalic;
  let textMenu = myFunctionBreakLine(Menu.text, config.BreakLine, config.replaceBreakLine, config.replaceToBreakLine);

  if (Menu.values) {
    for (let i = 0; i < Menu.options.length; i++) {
      let menuText = '';
      if (addNumber) {
        if (config.activeBold) {
          menuText += open;
        }
        menuText += String(i + 1) + separated;
        if (config.activeBold) {
          menuText += close;
        }
        menuText += ' ';
      }
      menuText += Menu.options[i];
      menuOptions.push({
        "order": String(i + 1),
        "text": menuText,
        "type": 'text/plain',
        "value": Menu.values[i],
      });
    }
  } else {
    for (let i = 0; i < Menu.options.length; i++) {
      let menuText = '';
      if (addNumber) {
        if (config.activeBold) {
          menuText += open;
        }
        menuText += String(i + 1) + separated;
        if (config.activeBold) {
          menuText += close;
        }
        menuText += ' ';
      }
      menuText += Menu.options[i];
      menuOptions.push({
        "order": String(i + 1),
        "text": menuText,
        "type": 'text/plain',
        "value": Menu.options[i],
      });
    }
  }

  if (replaceBold) {
    const n1 = config.replaceBold.open;
    const n2 = config.replaceBold.close;
    const matchingOpenB = RegExp(n1, "g");
    const matchingCloseB = RegExp(n2, "g");
    textMenu = textMenu.replace(matchingOpenB, open);
    textMenu = textMenu.replace(matchingCloseB, close);
    menuOptions.forEach((item) => {
      myFunctionBold(item, matchingOpenB, matchingCloseB, open, close);
    });
  }
  if (replaceItalic) {
    const i1 = config.replaceItalic.open;
    const i2 = config.replaceItalic.close;
    const matchingOpenI = RegExp(i1, "g");
    const matchingCloseI = RegExp(i2, "g");
    textMenu = textMenu.replace(matchingOpenI, openI);
    textMenu = textMenu.replace(matchingCloseI, closeI);
    menuOptions.forEach((item) => {
      myFunctionItalic(item, matchingOpenI, matchingCloseI, openI, closeI);
    });
  }

  return {
    "scope": 'persistent',
    "text": textMenu,
    "options": menuOptions,
  };
}
function getQuickReply(Menu, config) {
  let menuOptions = [];
  const addNumber = Menu.addNumber;
  const separated = Menu.separated == '' ? '.' : Menu.separated;
  const open = config.boldValue.open;
  const close = config.boldValue.close;
  const replaceBold = config.activereplaceBold;
  const openI = config.italicValue.open;
  const closeI = config.italicValue.close;
  const replaceItalic = config.activereplaceItalic;
  let textMenu = myFunctionBreakLine(Menu.text, config.BreakLine, config.replaceBreakLine, config.replaceToBreakLine);

  if (Menu.values) {
    for (let i = 0; i < Menu.options.length; i++) {
      let menuText = '';
      if (addNumber) {
        if (config.activeBold) {
          menuText += open;
        }
        menuText += String(i + 1) + separated;
        if (config.activeBold) {
          menuText += close;
        }
        menuText += ' ';
      }
      menuText += Menu.options[i];
      menuOptions.push({
        "text": menuText,
        "type": 'text/plain',
        "value": Menu.values[i],
      });
    }
  } else {
    for (let i = 0; i < Menu.options.length; i++) {
      let menuText = '';
      if (addNumber) {
        if (config.activeBold) {
          menuText += open;
        }
        menuText += String(i + 1) + separated;
        if (config.activeBold) {
          menuText += close;
        }
        menuText += ' ';
      }
      menuText += Menu.options[i];
      menuOptions.push({
        "text": menuText,
        "type": 'text/plain',
        "value": Menu.options[i],
      });
    }
  }

  if (replaceBold) {
    const n1 = config.replaceBold.open;
    const n2 = config.replaceBold.close;
    const matchingOpenB = RegExp(n1, "g");
    const matchingCloseB = RegExp(n2, "g");
    textMenu = textMenu.replace(matchingOpenB, open);
    textMenu = textMenu.replace(matchingCloseB, close);
    menuOptions.forEach((item) => {
      myFunctionBold(item, matchingOpenB, matchingCloseB, open, close);
    });
  }
  if (replaceItalic) {
    const i1 = config.replaceItalic.open;
    const i2 = config.replaceItalic.close;
    const matchingOpenI = RegExp(i1, "g");
    const matchingCloseI = RegExp(i2, "g");
    textMenu = textMenu.replace(matchingOpenI, openI);
    textMenu = textMenu.replace(matchingCloseI, closeI);
    menuOptions.forEach((item) => {
      myFunctionItalic(item, matchingOpenI, matchingCloseI, openI, closeI);
    });
  }

  return {
    "scope": 'immediate',
    "text": textMenu,
    "options": menuOptions,
  };
}
function getWhatsApp3Botoes(Menu, config) {
  const menuOptions = [];
  const open = config.boldValue.open;
  const close = config.boldValue.close;
  const replaceBold = config.activereplaceBold;
  const openI = config.italicValue.open;
  const closeI = config.italicValue.close;
  const replaceItalic = config.activereplaceItalic;
  let body = myFunctionBreakLine(Menu.body, config.BreakLine, config.replaceBreakLine, config.replaceToBreakLine);
  const footer = Menu.footer;
  const header = Menu.header;

  for (let i = 0; i < Menu.options.length; i++) {
    menuOptions.push({
      "type": 'reply',
      "reply": {
        "id": String(i + 1),
        "title": Menu.options[i],
      },
    });
  }

  if (replaceBold) {
    const n1 = config.replaceBold.open;
    const n2 = config.replaceBold.close;
    const matchingOpenB = RegExp(n1, "g");
    const matchingCloseB = RegExp(n2, "g");
    body = body.replace(matchingOpenB, open);
    body = body.replace(matchingCloseB, close);
  }
  if (replaceItalic) {
    const i1 = config.replaceItalic.open;
    const i2 = config.replaceItalic.close;
    const matchingOpenI = RegExp(i1, "g");
    const matchingCloseI = RegExp(i2, "g");
    body = body.replace(matchingOpenI, openI);
    body = body.replace(matchingCloseI, closeI);
  }

  return {
    "recipient_type": 'individual',
    "type": 'interactive',
    "interactive": {
      "type": 'button',
      "header": {
        "type": 'text',
        "text": header,
      },
      "body": {
        "text": body,
      },
      "footer": {
        "text": footer,
      },
      "action": {
        "buttons": menuOptions,
      },
    },
  };
}
function getWhatsAppOpcoes(Menu, config) {
  const menuOptions = [];
  const open = config.boldValue.open;
  const close = config.boldValue.close;
  const replaceBold = config.activereplaceBold;
  const openI = config.italicValue.open;
  const closeI = config.italicValue.close;
  const replaceItalic = config.activereplaceItalic;
  const header = Menu.header;
  let body = myFunctionBreakLine(Menu.body, config.BreakLine, config.replaceBreakLine, config.replaceToBreakLine);
  const footer = Menu.footer;
  const button = Menu.button;
  const title = Menu.title;

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

  if (replaceBold) {
    const n1 = config.replaceBold.open;
    const n2 = config.replaceBold.close;
    const matchingOpenB = RegExp(n1, "g");
    const matchingCloseB = RegExp(n2, "g");
    body = body.replace(matchingOpenB, open);
    body = body.replace(matchingCloseB, close);
  }
  if (replaceItalic) {
    const i1 = config.replaceItalic.open;
    const i2 = config.replaceItalic.close;
    const matchingOpenI = RegExp(i1, "g");
    const matchingCloseI = RegExp(i2, "g");
    body = body.replace(matchingOpenI, openI);
    body = body.replace(matchingCloseI, closeI);
  }

  return {
    "recipient_type": 'individual',
    "type": 'interactive',
    "interactive": {
      "type": 'list',
      "header": {
        "type": 'text',
        "text": header,
      },
      "body": {
        "text": body,
      },
      "footer": {
        "text": footer,
      },
      "action": {
        "button": button,
        "sections": [
          {
            "title": title,
            "rows": menuOptions,
          },
        ],
      },
    },
  };
}
function getWhatsApp3BotoesWithImage(Menu, config) {
  const menuOptions = [];
  const open = config.boldValue.open;
  const close = config.boldValue.close;
  const replaceBold = config.activereplaceBold;
  const openI = config.italicValue.open;
  const closeI = config.italicValue.close;
  const replaceItalic = config.activereplaceItalic;
  let body = myFunctionBreakLine(Menu.body, config.BreakLine, config.replaceBreakLine, config.replaceToBreakLine);
  const footer = Menu.footer;
  const url = Menu.url;

  for (let i = 0; i < Menu.options.length; i++) {
    menuOptions.push({
      "type": 'reply',
      "reply": {
        "id": String(i + 1),
        "title": Menu.options[i],
      },
    });
  }

  if (replaceBold) {
    const n1 = config.replaceBold.open;
    const n2 = config.replaceBold.close;
    const matchingOpenB = RegExp(n1, "g");
    const matchingCloseB = RegExp(n2, "g");
    body = body.replace(matchingOpenB, open);
    body = body.replace(matchingCloseB, close);
  }
  if (replaceItalic) {
    const i1 = config.replaceItalic.open;
    const i2 = config.replaceItalic.close;
    const matchingOpenI = RegExp(i1, "g");
    const matchingCloseI = RegExp(i2, "g");
    body = body.replace(matchingOpenI, openI);
    body = body.replace(matchingCloseI, closeI);
  }

  return {
    "recipient_type": 'individual',
    "type": 'interactive',
    "interactive": {
      "type": 'button',
      "header": {
        "type": "image",
        "image": {
          "link": url
        }
      },
      "body": {
        "text": body,
      },
      "footer": {
        "text": footer,
      },
      "action": {
        "buttons": menuOptions,
      },
    },
  };
}
function getTemplateZap(Menu) {
  return {
    "type": 'template',
    "template": {
      "namespace": Menu.codeTemplate,
      "name": Menu.nameTemplate,
      "language": {
        "policy": 'deterministic',
        "code": Menu.idiomTemplate,
      },
    },
  };
}
function getTextMenu(menu, config) {
  let menuText = '';
  const addNumber = menu.addNumber;
  const separated = menu.separated == '' ? '.' : menu.separated;
  const open = config.boldValue.open;
  const close = config.boldValue.close;
  const replaceBold = config.activereplaceBold;
  const openI = config.italicValue.open;
  const closeI = config.italicValue.close;
  const replaceItalic = config.activereplaceItalic;

  if (menu.text) {
    menuText += myFunctionBreakLine(menu.text, config.BreakLine, config.replaceBreakLine, config.replaceToBreakLine) + config.BreakLine + config.BreakLine;
  }
  for (let i = 0; i < menu.options.length; i++) {
    if (addNumber) {
      if (config.activeBold) {
        menuText += open;
      }
      menuText += String(i + 1) + separated;
      if (config.activeBold) {
        menuText += close;
      }
      menuText += ' ';
    }
    menuText += menu.options[i] + config.BreakLine;
  }
  if (replaceBold) {
    const n1 = config.replaceBold.open;
    const n2 = config.replaceBold.close;
    const matchingOpenB = RegExp(n1, "g");
    const matchingCloseB = RegExp(n2, "g");
    menuText = menuText.replace(matchingOpenB, open);
    menuText = menuText.replace(matchingCloseB, close);
  }
  if (replaceItalic) {
    const i1 = config.replaceItalic.open;
    const i2 = config.replaceItalic.close;
    const matchingOpenI = RegExp(i1, "g");
    const matchingCloseI = RegExp(i2, "g");
    menuText = menuText.replace(matchingOpenI, openI);
    menuText = menuText.replace(matchingCloseI, closeI);
  }
  return { text: menuText };
}
function getTextMenuMulti(menu, config) {
  let menuText = '';
  const addNumber = menu.addNumber;
  const separated = menu.separated == '' ? '.' : menu.separated;
  const valor = parseInt(menu.init);
  const seqSubMenu = menu.subMenuModValue;
  const valueSubMenu = menu.subMenuValues;
  const total = menu.options.length + valor;
  const open = config.boldValue.open;
  const close = config.boldValue.close;
  const replaceBold = config.activereplaceBold;
  const openI = config.italicValue.open;
  const closeI = config.italicValue.close;
  const replaceItalic = config.activereplaceItalic;

  if (menu.text) {
    menuText += myFunctionBreakLine(menu.text, config.BreakLine, config.replaceBreakLine, config.replaceToBreakLine) + config.BreakLine + config.BreakLine;
  }
  for (let i = 0; i < menu.options.length; i++) {
    if (addNumber) {
      if (config.activeBold) {
        menuText += open;
      }
      menuText += String(i + 1 + valor) + separated;
      if (config.activeBold) {
        menuText += close;
      }
      menuText += ' ';
    }
    menuText += menu.options[i] + config.BreakLine;
  }
  if (menu.subMenu) {
    menuText += config.BreakLine + config.BreakLine;
    for (let j = 0; j < menu.subMenu.length; j++) {
      if (addNumber) {
        if (config.activeBold) {
          menuText += config.boldValue.open;
        }
        if (seqSubMenu) {
          menuText += String(valueSubMenu[j]) + separated;
        } else {
          menuText += String(j + total + 1) + separated;
        }
        if (config.activeBold) {
          menuText += config.boldValue.close;
        }
        menuText += ' ';
      }
      menuText += menu.subMenu[j] + config.BreakLine;
    }
  }
  if (replaceBold) {
    const n1 = config.replaceBold.open;
    const n2 = config.replaceBold.close;
    const matchingOpenB = RegExp(n1, "g");
    const matchingCloseB = RegExp(n2, "g");
    menuText = menuText.replace(matchingOpenB, open);
    menuText = menuText.replace(matchingCloseB, close);
  }
  if (replaceItalic) {
    const i1 = config.replaceItalic.open;
    const i2 = config.replaceItalic.close;
    const matchingOpenI = RegExp(i1, "g");
    const matchingCloseI = RegExp(i2, "g");
    menuText = menuText.replace(matchingOpenI, openI);
    menuText = menuText.replace(matchingCloseI, closeI);
  }
  return { text: menuText };
}