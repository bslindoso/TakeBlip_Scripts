// DEFINIR MENU

// <<<<Var of input>>>>
// platform
// boldValue
// italicValue
// resource.objMode

// <<<<var de saida>>>>
// objMenu

// <<<Type>>>
// {{objMenu@type}}

// <<<Content>>>
// {{objMenu@content}}

// <<<condição>>>

// <<<Script>>>>
// {{resource.FunctionGetMenu}}

const run = (platform, boldValue, italicValue, obj) => {
  let convertPlatform = platform.toLowerCase();
  let convertBold = boldValue;
  if (typeof boldValue === typeof toString()) {
    convertBold = JSON.parse(boldValue);
  }
  let convertItalic = italicValue;
  if (typeof italicValue === typeof toString()) {
    convertItalic = JSON.parse(italicValue);
  }

  let optionsMenu = [];

  const splitMenu = obj.split(',');

  for (let i = 0; i < splitMenu.length; i++) {
    const element = splitMenu[i];
    optionsMenu.push(element);
  }

  const default_msg = {
    "whatsapp": {
      "button": {
        "active": false,
        "header": '',
        "body": '',
        "options": [],
        "footer": ''
      },
      "list": {
        "active": false,
        "header": '',
        "body": '',
        "button": '',
        "title": '',
        "options": [],
        "description": [],
        "footer": ''
      },
      "template": {
        "active": false,
        "codeTemplate": "",
        "nameTemplate": "",
        "idiomTemplate": "pt_BR"
      },
      "image": {
        "active": false,
        "url": '',
        "body": '',
        "options": [],
        "footer": ''
      }
    },
    "blipchat": {
      "quickReplay": {
        "active": false,
        "addNumber": false,
        "separated": "",
        "text": '',
        "options": [],
        "values": []
      },
      "menu": {
        "active": false,
        "addNumber": false,
        "separated": "",
        "text": '',
        "options": [],
        "values": []
      }
    },
    "default": {
      "text": {
        "active": false,
        "addNumber": true,
        "separated": "",
        "text": '',
        "options": optionsMenu
      },
      "textMenu": {
        "active": false,
        "addNumber": true,
        "separated": "",
        "text": '',
        "init": 0,
        "options": [],
        "subMenu": []
      }
    },
    "config": {
      "platform": convertPlatform,
      "activeBold": false,
      "boldValue": convertBold,
      "activereplaceBold": false,
      "replaceBold": {
        "open": "%%%",
        "close": "@@@"
      },
      "activeItalic": false,
      "italicValue": convertItalic,
      "activereplaceItalic": false,
      "replaceItalic": {
        "open": "###",
        "close": "&&&"
      },
      "BreakLine": '\n',
      "replaceBreakLine": '---',
      "replaceToBreakLine": '___'
    }
  };

  return getMenuForPlatform(default_msg);
};