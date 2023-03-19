function getMenuForPlatform(menuFormat) {
  let menu = menuFormat;
  if (typeof menuFormat === typeof toString()) {
    menu = JSON.parse(menuFormat);
  }

  const platform = menu.config.platform;

  let definePlatform = "";

  switch (platform) {
    case "whatsapp":
      const whatsapp = menu.whatsapp;
      const configW = menu.config;
      definePlatform = defineTypeWhatsApp(whatsapp, configW);
      break;

    case "teams":
      const teams = menu.teams;
      const configT = menu.config;
      definePlatform = defineTypeTeams(teams, configT);
      break;

    case "messenger":
      const messenger = menu.messenger;
      const configM = menu.config;
      definePlatform = defineTypeMessenger(messenger, configM);
      break;

    default:
      const blipchat = menu.blipchat;
      const configB = menu.config;
      definePlatform = defineTypeBlipChat(blipchat, configB);
      break;
  }

  let content_card = {
    "content": definePlatform,
    "type": getTypeContentDinamic(platform, menu)
  };

  return content_card;
}

function defineTypeMessenger(menu, config) {
  let returnMenu = "";
  let typeMenu = returnFormatMenu(menu, config);

  switch (typeMenu) {
    case "quickReplay":
      const menuQuick = menu.quickReplay;
      returnMenu = getQuickReply(menuQuick, config);
      break;

    case "textMenu":
      const menuTextMenu = menu.textMenu;
      returnMenu = getTextMenuMultiTexto(menuTextMenu, config);
      break;

    case "link":
      const menuLink = menu.link;
      returnMenu = getLinkText(menuLink, config);
      break;

    default:
      const menuText = menu.text;
      returnMenu = getTextMenuTexto(menuText, config);
      break;
  }

  return returnMenu;
}

function defineTypeTeams(menu, config) {
  let returnMenu = "";
  let typeMenu = returnFormatMenu(menu, config);

  switch (typeMenu) {
    case "quickReplay":
      const menuQuick = menu.quickReplay;
      returnMenu = getQuickReply(menuQuick, config);
      break;

    case "menu":
      const menuMenu = menu.menu;
      returnMenu = getMenu(menuMenu, config);
      break;

    case "textMenu":
      const menuTextMenu = menu.textMenu;
      returnMenu = getTextMenuMultiTexto(menuTextMenu, config);
      break;

    case "link":
      const menuLink = menu.link;
      returnMenu = getLinkText(menuLink, config);
      break;

    default:
      const menuText = menu.text;
      returnMenu = getTextMenuTexto(menuText, config);
      break;
  }

  return returnMenu;
}

function defineTypeWhatsApp(menu, config) {
  let returnMenu = "";
  let typeMenu = returnFormatMenu(menu, config);

  switch (typeMenu) {
    case "button":
      const menuButton = menu.button;
      returnMenu = getWhatsApp3Botoes(menuButton, config);
      break;

    case "list":
      const menuList = menu.list;
      returnMenu = getWhatsAppOpcoes(menuList, config);
      break;

    case "template":
      const menuTemplate = menu.template;
      returnMenu = getTemplateZap(menuTemplate);
      break;

    case "image":
      const menuImage = menu.image;
      returnMenu = getWhatsApp3BotoesWithImage(menuImage, config);
      break;

    case "contacts":
      const menuContacts = menu.contacts;
      returnMenu = getWhatsAppContacts(menuContacts);
      break;

    case "unsuportedContent":
      const menuUnsuportedContent = menu.unsuportedContent;
      returnMenu = getWhatsApp3BotoesUnsuported(menuUnsuportedContent, config);
      break;

    case "textMenu":
      const menuTextMenu = menu.textMenu;
      returnMenu = getTextMenuMulti(menuTextMenu, config);
      break;

    default:
      const menuText = menu.text;
      returnMenu = getTextMenu(menuText, config);
      break;
  }

  return returnMenu;
}

function defineTypeBlipChat(menu, config) {
  let returnMenu = "";
  let typeMenu = returnFormatMenu(menu, config);

  switch (typeMenu) {
    case "quickReplay":
      const menuQuick = menu.quickReplay;
      returnMenu = getQuickReply(menuQuick, config);
      break;

    case "menu":
      const menuMenu = menu.menu;
      returnMenu = getMenu(menuMenu, config);
      break;

    case "textMenu":
      const menuTextMenu = menu.textMenu;
      returnMenu = getTextMenuMulti(menuTextMenu, config);
      break;

    case "link":
      const menuLink = menu.link;
      returnMenu = getLink(menuLink, config);
      break;

    case "linkText":
      const menuLinkText = menu.linkText;
      returnMenu = getLinkText(menuLinkText, config);
      break;

    default:
      const menuText = menu.text;
      returnMenu = getTextMenu(menuText, config);
      break;
  }

  return returnMenu;
}

function returnFormatMenu(menu, config) {
  let platform = returnChannelFormat(config.platform);

  if (platform == "whatsapp") {
    if (menu.hasOwnProperty("button")) {
      if (menu.button.active) {
        return "button";
      }
    }

    if (menu.hasOwnProperty("unsuportedContent")) {
      if (menu.unsuportedContent.active) {
        return "unsuportedContent";
      }
    }

    if (menu.hasOwnProperty("list")) {
      if (menu.list.active) {
        return "list";
      }
    }

    if (menu.hasOwnProperty("template")) {
      if (menu.template.active) {
        return "template";
      }
    }

    if (menu.hasOwnProperty("image")) {
      if (menu.image.active) {
        return "image";
      }
    }

    if (menu.hasOwnProperty("contacts")) {
      if (menu.contacts.active) {
        return "contacts";
      }
    }

    if (menu.hasOwnProperty("text")) {
      if (menu.text.active) {
        return "text";
      }
    }

    if (menu.hasOwnProperty("textMenu")) {
      if (menu.textMenu.active) {
        return "textMenu";
      }
    }
  }

  if (platform == "teams") {
    if (menu.hasOwnProperty("quickReplay")) {
      if (menu.quickReplay.active) {
        return "quickReplay";
      }
    }

    if (menu.hasOwnProperty("menu")) {
      if (menu.menu.active) {
        return "menu";
      }
    }

    if (menu.hasOwnProperty("text")) {
      if (menu.text.active) {
        return "text";
      }
    }

    if (menu.hasOwnProperty("textMenu")) {
      if (menu.textMenu.active) {
        return "textMenu";
      }
    }

    if (menu.hasOwnProperty("link")) {
      if (menu.link.active) {
        return "link";
      }
    }
  }

  if (platform == "messenger") {
    if (menu.hasOwnProperty("quickReplay")) {
      if (menu.quickReplay.active) {
        return "quickReplay";
      }
    }

    if (menu.hasOwnProperty("text")) {
      if (menu.text.active) {
        return "text";
      }
    }

    if (menu.hasOwnProperty("textMenu")) {
      if (menu.textMenu.active) {
        return "textMenu";
      }
    }

    if (menu.hasOwnProperty("link")) {
      if (menu.link.active) {
        return "link";
      }
    }

    if (menu.hasOwnProperty("linkText")) {
      if (menu.linkText.active) {
        return "linkText";
      }
    }
  }

  if (platform == "blipchat") {
    if (menu.hasOwnProperty("quickReplay")) {
      if (menu.quickReplay.active) {
        return "quickReplay";
      }
    }

    if (menu.hasOwnProperty("menu")) {
      if (menu.menu.active) {
        return "menu";
      }
    }

    if (menu.hasOwnProperty("text")) {
      if (menu.text.active) {
        return "text";
      }
    }

    if (menu.hasOwnProperty("textMenu")) {
      if (menu.textMenu.active) {
        return "textMenu";
      }
    }

    if (menu.hasOwnProperty("link")) {
      if (menu.link.active) {
        return "link";
      }
    }

    if (menu.hasOwnProperty("linkText")) {
      if (menu.linkText.active) {
        return "linkText";
      }
    }
  }
}

function returnChannelFormat(channel) {
  if (channel == "whatsapp") {
    return "whatsapp";
  } else if (channel == "teams") {
    return "teams";
  } else if (channel == "messenger") {
    return "messenger";
  } else {
    return "blipchat";
  }
}

function getTypeContentDinamic(platform, menu) {
  if (platform == "whatsapp") {
    if (menu.whatsapp.hasOwnProperty("unsuportedContent")) {
      if (menu.whatsapp.unsuportedContent.active) {
        return "application/vnd.lime.document-select+json";
      }
    }
    if (menu.whatsapp.hasOwnProperty("button")) {
      if (menu.whatsapp.button.active) {
        return "application/json";
      }
    }
    if (menu.whatsapp.hasOwnProperty("list")) {
      if (menu.whatsapp.list.active) {
        return "application/json";
      }
    }
    if (menu.whatsapp.hasOwnProperty("template")) {
      if (menu.whatsapp.template.active) {
        return "application/json";
      }
    }
    if (menu.whatsapp.hasOwnProperty("image")) {
      if (menu.whatsapp.image.active) {
        return "application/json";
      }
    }
    if (menu.whatsapp.hasOwnProperty("contacts")) {
      if (menu.whatsapp.contacts.active) {
        return "application/json";
      }
    }

    return "application/vnd.lime.select+json";
  } else if (platform == "teams") {
    if (menu.teams.hasOwnProperty("quickReplay")) {
      if (menu.teams.quickReplay.active) {
        return "application/vnd.lime.select+json";
      }
    }
    if (menu.teams.hasOwnProperty("menu")) {
      if (menu.teams.menu.active) {
        return "application/vnd.lime.select+json";
      }
    }
    return "text/plain";
  } else if (platform == "messenger") {
    if (menu.messenger.hasOwnProperty("quickReplay")) {
      if (menu.messenger.quickReplay.active) {
        return "application/vnd.lime.select+json";
      }
    }

    return "text/plain";
  } else {
    if (menu.blipchat.hasOwnProperty("link")) {
      if (menu.blipchat.link.active) {
        return "application/vnd.lime.web-link+json";
      }
    }
    return "application/vnd.lime.select+json";
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

function getLink(Menu, config) {
  const open = config.boldValue.open;
  const close = config.boldValue.close;
  const replaceBold = config.activereplaceBold;
  const openI = config.italicValue.open;
  const closeI = config.italicValue.close;
  const replaceItalic = config.activereplaceItalic;
  let textMenu = Menu.text;

  if (replaceBold) {
    const n1 = config.replaceBold.open;
    const n2 = config.replaceBold.close;
    const matchingOpenB = RegExp(n1, "g");
    const matchingCloseB = RegExp(n2, "g");
    textMenu = textMenu.replace(matchingOpenB, open);
    textMenu = textMenu.replace(matchingCloseB, close);
  }
  if (replaceItalic) {
    const i1 = config.replaceItalic.open;
    const i2 = config.replaceItalic.close;
    const matchingOpenI = RegExp(i1, "g");
    const matchingCloseI = RegExp(i2, "g");
    textMenu = textMenu.replace(matchingOpenI, openI);
    textMenu = textMenu.replace(matchingCloseI, closeI);
  }

  return {
    "text": textMenu,
    "uri": Menu.url,
  };
}
function getLinkText(Menu, config) {
  const open = config.boldValue.open;
  const close = config.boldValue.close;
  const replaceBold = config.activereplaceBold;
  const openI = config.italicValue.open;
  const closeI = config.italicValue.close;
  const replaceItalic = config.activereplaceItalic;
  let textMenu = myFunctionBreakLine(Menu.text, config.BreakLine, config.replaceBreakLine, config.replaceToBreakLine);

  if (replaceBold) {
    const n1 = config.replaceBold.open;
    const n2 = config.replaceBold.close;
    const matchingOpenB = RegExp(n1, "g");
    const matchingCloseB = RegExp(n2, "g");
    textMenu = textMenu.replace(matchingOpenB, open);
    textMenu = textMenu.replace(matchingCloseB, close);
  }
  if (replaceItalic) {
    const i1 = config.replaceItalic.open;
    const i2 = config.replaceItalic.close;
    const matchingOpenI = RegExp(i1, "g");
    const matchingCloseI = RegExp(i2, "g");
    textMenu = textMenu.replace(matchingOpenI, openI);
    textMenu = textMenu.replace(matchingCloseI, closeI);
  }

  return `${textMenu}\n\n${Menu.url}`;
}
function getMenu(Menu, config) {
  let menuOptions = [];
  const addNumber = Menu.addNumber;
  const separated = Menu.separated == "" ? "." : Menu.separated;
  const open = config.boldValue.open;
  const close = config.boldValue.close;
  const replaceBold = config.activereplaceBold;
  const openI = config.italicValue.open;
  const closeI = config.italicValue.close;
  const replaceItalic = config.activereplaceItalic;
  let textMenu = myFunctionBreakLine(Menu.text, config.BreakLine, config.replaceBreakLine, config.replaceToBreakLine);

  if (Menu.values) {
    for (let i = 0; i < Menu.options.length; i++) {
      let menuText = "";
      if (addNumber) {
        if (config.activeBold) {
          menuText += open;
        }
        menuText += String(i + 1) + separated;
        if (config.activeBold) {
          menuText += close;
        }
        menuText += " ";
      }
      menuText += Menu.options[i];
      menuOptions.push({
        "order": String(i + 1),
        "text": menuText,
        "type": "text/plain",
        "value": Menu.values[i],
      });
    }
  } else {
    for (let i = 0; i < Menu.options.length; i++) {
      let menuText = "";
      if (addNumber) {
        if (config.activeBold) {
          menuText += open;
        }
        menuText += String(i + 1) + separated;
        if (config.activeBold) {
          menuText += close;
        }
        menuText += " ";
      }
      menuText += Menu.options[i];
      menuOptions.push({
        "order": String(i + 1),
        "text": menuText,
        "type": "text/plain",
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
    "scope": "persistent",
    "text": textMenu,
    "options": menuOptions,
  };
}
function getQuickReply(Menu, config) {
  let menuOptions = [];
  const addNumber = Menu.addNumber;
  const separated = Menu.separated == "" ? "." : Menu.separated;
  const open = config.boldValue.open;
  const close = config.boldValue.close;
  const replaceBold = config.activereplaceBold;
  const openI = config.italicValue.open;
  const closeI = config.italicValue.close;
  const replaceItalic = config.activereplaceItalic;
  let textMenu = myFunctionBreakLine(Menu.text, config.BreakLine, config.replaceBreakLine, config.replaceToBreakLine);

  if (Menu.values) {
    for (let i = 0; i < Menu.options.length; i++) {
      let menuText = "";
      if (addNumber) {
        if (config.activeBold) {
          menuText += open;
        }
        menuText += String(i + 1) + separated;
        if (config.activeBold) {
          menuText += close;
        }
        menuText += " ";
      }
      menuText += Menu.options[i];
      menuOptions.push({
        "text": menuText,
        "type": "text/plain",
        "value": Menu.values[i],
      });
    }
  } else {
    for (let i = 0; i < Menu.options.length; i++) {
      let menuText = "";
      if (addNumber) {
        if (config.activeBold) {
          menuText += open;
        }
        menuText += String(i + 1) + separated;
        if (config.activeBold) {
          menuText += close;
        }
        menuText += " ";
      }
      menuText += Menu.options[i];
      menuOptions.push({
        "text": menuText,
        "type": "text/plain",
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
    "scope": "immediate",
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

  for (let i = 0; i < Menu.options.length; i++) {
    menuOptions.push({
      "type": "reply",
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
    "recipient_type": "individual",
    "type": "interactive",
    "interactive": {
      "type": "button",
      "body": {
        "text": body,
      },
      "action": {
        "buttons": menuOptions,
      },
    },
  };
}
function getWhatsApp3BotoesUnsuported(Menu, config) {
  const menuOptions = [];
  const open = config.boldValue.open;
  const close = config.boldValue.close;
  const replaceBold = config.activereplaceBold;
  const openI = config.italicValue.open;
  const closeI = config.italicValue.close;
  const replaceItalic = config.activereplaceItalic;
  let body = myFunctionBreakLine(Menu.body, config.BreakLine, config.replaceBreakLine, config.replaceToBreakLine);
  const header = Menu.header;

  for (let i = 0; i < Menu.options.length; i++) {
    menuOptions.push({
      "label": {
        "type": "application/vnd.lime.media-link+json",
        "value": {
          "title": String(i + 1),
          "text": Menu.options[i]
        }
      }
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
    "header": {
      "type": "application/vnd.lime.media-link+json",
      "value": {
        "type": "button",
        "title": header,
        "text": body
      }
    },
    "options": menuOptions
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
  const isRemoveVoid = Menu.isRemoveVoid;

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

  if (isRemoveVoid) {
    let objMenu = {};

    objMenu.recipient_type = "individual";
    objMenu.type = "interactive";
    objMenu.interactive = {};
    objMenu.interactive.type = "list";

    if (header !== null && header !== "") {
      objMenu.interactive.header = {};
      objMenu.interactive.header.type = "text";
      objMenu.interactive.header.text = header;
    }

    objMenu.interactive.body = {};
    objMenu.interactive.body.text = body;

    if (footer !== null && footer !== "") {
      objMenu.interactive.footer = {};
      objMenu.interactive.footer.text = footer;
    }

    objMenu.interactive.action = {};
    objMenu.interactive.action.button = button;
    objMenu.interactive.action.sections = [];

    let section = {};

    if (title !== null && title !== "") {
      section.title = title;
    }

    section.rows = menuOptions;

    objMenu.interactive.action.sections.push(section);

    var json = JSON.stringify(objMenu);

    return JSON.parse(json);
  }

  return {
    "recipient_type": "individual",
    "type": "interactive",
    "interactive": {
      "type": "list",
      "header": {
        "type": "text",
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
function getWhatsAppContacts(Menu) {
  const firstName = Menu.first_name;
  const formattedName = Menu.formatted_name;
  const phone = Menu.phone;
  const waId = Menu.wa_id;

  return {
    "type": "contacts",
    "contacts": [
      {
        "name": {
          "first_name": firstName,
          "formatted_name": formattedName,
        },
        "phones": [
          {
            "phone": phone,
            "type": "WORK",
            "wa_id": waId
          }
        ],
      }
    ]
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
  const url = Menu.url;

  for (let i = 0; i < Menu.options.length; i++) {
    menuOptions.push({
      "type": "reply",
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
    "recipient_type": "individual",
    "type": "interactive",
    "interactive": {
      "type": "button",
      "header": {
        "type": "image",
        "image": {
          "link": url
        }
      },
      "body": {
        "text": body,
      },
      "action": {
        "buttons": menuOptions,
      },
    },
  };
}
function getTemplateZap(Menu) {
  return {
    "type": "template",
    "template": {
      "namespace": Menu.codeTemplate,
      "name": Menu.nameTemplate,
      "language": {
        "policy": "deterministic",
        "code": Menu.idiomTemplate,
      },
    },
  };
}
function getTextMenu(menu, config) {
  let menuText = "";
  const addNumber = menu.addNumber;
  const separated = menu.separated == "" ? "." : menu.separated;
  const open = config.boldValue.open;
  const close = config.boldValue.close;
  const replaceBold = config.activereplaceBold;
  const openI = config.italicValue.open;
  const closeI = config.italicValue.close;
  const replaceItalic = config.activereplaceItalic;
  const addNumberIcons = menu.hasOwnProperty("addNumberIcons") ? menu.addNumberIcons : false;

  const numberIcons = [
    {
      "icon": "0️⃣",
      "value": 0
    },
    {
      "icon": "1️⃣",
      "value": 1
    },
    {
      "icon": "2️⃣",
      "value": 2
    },
    {
      "icon": "3️⃣",
      "value": 3
    },
    {
      "icon": "4️⃣",
      "value": 4
    },
    {
      "icon": "5️⃣",
      "value": 5
    },
    {
      "icon": "6️⃣",
      "value": 6
    },
    {
      "icon": "7️⃣",
      "value": 7
    },
    {
      "icon": "8️⃣",
      "value": 8
    },
    {
      "icon": "9️⃣",
      "value": 9
    },
    {
      "icon": "🔟",
      "value": 10
    },
  ];

  if (menu.text) {
    menuText += myFunctionBreakLine(menu.text, config.BreakLine, config.replaceBreakLine, config.replaceToBreakLine) + config.BreakLine + config.BreakLine;
  }
  for (let i = 0; i < menu.options.length; i++) {
    if (addNumber && !addNumberIcons) {
      if (config.activeBold) {
        menuText += open;
      }
      menuText += String(i + 1) + separated;
      if (config.activeBold) {
        menuText += close;
      }
      menuText += " ";
    }
    if (addNumberIcons) {
      const icon = numberIcons.find(element => element.value === (i + 1));
      menuText += icon.icon;
      menuText += " ";
    }
    if (i == (menu.options.length - 1)) {
      menuText += menu.options[i];
    } else {
      menuText += menu.options[i] + config.BreakLine;
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
function getTextMenuTexto(menu, config) {
  let menuText = "";
  const addNumber = menu.addNumber;
  const separated = menu.separated == "" ? "." : menu.separated;
  const open = config.boldValue.open;
  const close = config.boldValue.close;
  const replaceBold = config.activereplaceBold;
  const openI = config.italicValue.open;
  const closeI = config.italicValue.close;
  const replaceItalic = config.activereplaceItalic;
  const addNumberIcons = menu.hasOwnProperty("addNumberIcons") ? menu.addNumberIcons : false;

  const numberIcons = [
    {
      "icon": "0️⃣",
      "value": 0
    },
    {
      "icon": "1️⃣",
      "value": 1
    },
    {
      "icon": "2️⃣",
      "value": 2
    },
    {
      "icon": "3️⃣",
      "value": 3
    },
    {
      "icon": "4️⃣",
      "value": 4
    },
    {
      "icon": "5️⃣",
      "value": 5
    },
    {
      "icon": "6️⃣",
      "value": 6
    },
    {
      "icon": "7️⃣",
      "value": 7
    },
    {
      "icon": "8️⃣",
      "value": 8
    },
    {
      "icon": "9️⃣",
      "value": 9
    },
    {
      "icon": "🔟",
      "value": 10
    },
  ];

  if (menu.text) {
    menuText += myFunctionBreakLine(menu.text, config.BreakLine, config.replaceBreakLine, config.replaceToBreakLine) + config.BreakLine + config.BreakLine;
  }
  for (let i = 0; i < menu.options.length; i++) {
    if (addNumber && !addNumberIcons) {
      if (config.activeBold) {
        menuText += open;
      }
      menuText += String(i + 1) + separated;
      if (config.activeBold) {
        menuText += close;
      }
      menuText += " ";
    }
    if (addNumberIcons) {
      const icon = numberIcons.find(element => element.value === (i + 1));
      menuText += icon.icon;
      menuText += " ";
    }
    if (i == (menu.options.length - 1)) {
      menuText += menu.options[i];
    } else {
      menuText += menu.options[i] + config.BreakLine;
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
  return menuText;
}
function getTextMenuMulti(menu, config) {
  let menuText = "";
  const addNumber = menu.addNumber;
  const separated = menu.separated == "" ? "." : menu.separated;
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
  const addNumberIcons = menu.hasOwnProperty("addNumberIcons") ? menu.addNumberIcons : false;

  const numberIcons = [
    {
      "icon": "0️⃣",
      "value": 0
    },
    {
      "icon": "1️⃣",
      "value": 1
    },
    {
      "icon": "2️⃣",
      "value": 2
    },
    {
      "icon": "3️⃣",
      "value": 3
    },
    {
      "icon": "4️⃣",
      "value": 4
    },
    {
      "icon": "5️⃣",
      "value": 5
    },
    {
      "icon": "6️⃣",
      "value": 6
    },
    {
      "icon": "7️⃣",
      "value": 7
    },
    {
      "icon": "8️⃣",
      "value": 8
    },
    {
      "icon": "9️⃣",
      "value": 9
    },
    {
      "icon": "🔟",
      "value": 10
    },
  ];

  if (menu.text) {
    menuText += myFunctionBreakLine(menu.text, config.BreakLine, config.replaceBreakLine, config.replaceToBreakLine) + config.BreakLine + config.BreakLine;
  }
  for (let i = 0; i < menu.options.length; i++) {
    if (addNumber && !addNumberIcons) {
      if (config.activeBold) {
        menuText += open;
      }
      menuText += String(i + 1 + valor) + separated;
      if (config.activeBold) {
        menuText += close;
      }
      menuText += " ";
    }
    if (addNumberIcons) {
      const icon = numberIcons.find(element => element.value === (i + 1));
      menuText += icon.icon;
      menuText += " ";
    }
    if (i == (menu.options.length - 1)) {
      menuText += menu.options[i];
    } else {
      menuText += menu.options[i] + config.BreakLine;
    }
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
        menuText += " ";
      }
      if (j == (menu.subMenu.length - 1)) {
        menuText += menu.subMenu[j];
      } else {
        menuText += menu.subMenu[j] + config.BreakLine;
      }
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
function getTextMenuMultiTexto(menu, config) {
  let menuText = "";
  const addNumber = menu.addNumber;
  const separated = menu.separated == "" ? "." : menu.separated;
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
  const addNumberIcons = menu.hasOwnProperty("addNumberIcons") ? menu.addNumberIcons : false;

  const numberIcons = [
    {
      "icon": "0️⃣",
      "value": 0
    },
    {
      "icon": "1️⃣",
      "value": 1
    },
    {
      "icon": "2️⃣",
      "value": 2
    },
    {
      "icon": "3️⃣",
      "value": 3
    },
    {
      "icon": "4️⃣",
      "value": 4
    },
    {
      "icon": "5️⃣",
      "value": 5
    },
    {
      "icon": "6️⃣",
      "value": 6
    },
    {
      "icon": "7️⃣",
      "value": 7
    },
    {
      "icon": "8️⃣",
      "value": 8
    },
    {
      "icon": "9️⃣",
      "value": 9
    },
    {
      "icon": "🔟",
      "value": 10
    },
  ];

  if (menu.text) {
    menuText += myFunctionBreakLine(menu.text, config.BreakLine, config.replaceBreakLine, config.replaceToBreakLine) + config.BreakLine + config.BreakLine;
  }
  for (let i = 0; i < menu.options.length; i++) {
    if (addNumber && !addNumberIcons) {
      if (config.activeBold) {
        menuText += open;
      }
      menuText += String(i + 1 + valor) + separated;
      if (config.activeBold) {
        menuText += close;
      }
      menuText += " ";
    }
    if (addNumberIcons) {
      const icon = numberIcons.find(element => element.value === (i + 1));
      menuText += icon.icon;
      menuText += " ";
    }
    if (i == (menu.options.length - 1)) {
      menuText += menu.options[i];
    } else {
      menuText += menu.options[i] + config.BreakLine;
    }
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
        menuText += " ";
      }
      if (j == (menu.subMenu.length - 1)) {
        menuText += menu.subMenu[j];
      } else {
        menuText += menu.subMenu[j] + config.BreakLine;
      }
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
  return menuText;
}