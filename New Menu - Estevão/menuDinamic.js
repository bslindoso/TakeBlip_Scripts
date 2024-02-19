{{resource.FunctionGetMenu2}}

const run = (platform, boldValue, italicValue) => {
  let convertPlatform = platform.toLowerCase();
  let convertBold = boldValue;
  if (typeof boldValue === typeof toString()) {
    convertBold = JSON.parse(boldValue);
  }
  let convertItalic = italicValue;
  if (typeof italicValue === typeof toString()) {
    convertItalic = JSON.parse(italicValue);
  }

  const default_msg = {
    "whatsapp": {
      "button": {
        "active": false,
        "body": "",
        "options": []
      },
      "list": {
        "active": false,
        "header": "",
        "body": "",
        "button": "",
        "title": "",
        "options": [],
        "description": [],
        "footer": "",
        "isRemoveVoid": false
      },
      "template": {
        "active": true,
        "codeTemplate": "1e737217_0b07_4fe4_874e_fb66ef0d9083",
        "nameTemplate": "banco_rico_shell_box",
        "idiomTemplate": "pt_BR"
      },
      "unsuportedContent": {
        "active": false,
        "body": "",
        "options": []
      },
      "contacts": {
        "active": false,
        "first_name": "Rico",
        "formatted_name": "Rico Atendimento",
        "phone": "+55 (11) 4935-2740",
        "wa_id": "551149352740"
      },
      "image": {
        "active": false,
        "url": "",
        "body": "",
        "options": []
      },
      "text": {
        "active": false,
        "addNumber": true,
        "addNumberIcons": false,
        "separated": "",
        "text": "",
        "options": []
      },
      "textMenu": {
        "active": false,
        "addNumber": true,
        "addNumberIcons": false,
        "separated": "",
        "text": "",
        "init": 0,
        "subMenuModValue": false,
        "subMenuValues": [],
        "options": [],
        "subMenu": []
      }
    },
    "blipchat": {
      "quickReplay": {
        "active": false,
        "addNumber": false,
        "separated": "",
        "text": "",
        "options": [],
        "values": []
      },
      "menu": {
        "active": false,
        "addNumber": false,
        "separated": "",
        "text": "",
        "options": [],
        "values": []
      },
      "link": {
        "active": false,
        "text": "",
        "url": ""
      },
      "linkText": {
        "active": false,
        "text": "",
        "url": ""
      },
      "text": {
        "active": false,
        "addNumber": true,
        "addNumberIcons": false,
        "separated": "",
        "text": "",
        "options": []
      },
      "textMenu": {
        "active": false,
        "addNumber": true,
        "addNumberIcons": false,
        "separated": "",
        "text": "",
        "init": 0,
        "subMenuModValue": false,
        "subMenuValues": [],
        "options": [],
        "subMenu": []
      }
    },
    "teams": {
      "quickReplay": {
        "active": false,
        "addNumber": false,
        "separated": "",
        "text": "",
        "options": [],
        "values": []
      },
      "menu": {
        "active": false,
        "addNumber": false,
        "separated": "",
        "text": "",
        "options": [],
        "values": []
      },
      "link": {
        "active": false,
        "text": "",
        "url": ""
      },
      "text": {
        "active": false,
        "addNumber": true,
        "addNumberIcons": false,
        "separated": "",
        "text": "",
        "options": []
      },
      "textMenu": {
        "active": false,
        "addNumber": true,
        "addNumberIcons": false,
        "separated": "",
        "text": "",
        "init": 0,
        "subMenuModValue": false,
        "subMenuValues": [],
        "options": [],
        "subMenu": []
      }
    },
    "messenger": {
      "quickReplay": {
        "active": false,
        "addNumber": false,
        "separated": "",
        "text": "",
        "options": [],
        "values": []
      },
      "link": {
        "active": false,
        "text": "",
        "url": ""
      },
      "text": {
        "active": false,
        "addNumber": true,
        "addNumberIcons": false,
        "separated": "",
        "text": "",
        "options": []
      },
      "textMenu": {
        "active": false,
        "addNumber": true,
        "addNumberIcons": false,
        "separated": "",
        "text": "",
        "init": 0,
        "subMenuModValue": false,
        "subMenuValues": [],
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
      "BreakLine": "\n",
      "replaceBreakLine": "---",
      "replaceToBreakLine": "___"
    }
  };

  return getMenuForPlatform(default_msg);
};