// DEFINIR MENU

// <<<<Var of input>>>> 
// platform
// boldValue
// italicValue

// <<<<var de saida>>>>
// objMenu

// <<<Type>>>
// {{objMenu@type}}

// <<<Content>>>
// {{objMenu@content}}

// <<<condição>>>

// <<<Script>>>>
// {{resource.FunctionGetMenu}}

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
                "options": []
            },
            "textMenu": {
                "active": false,
                "addNumber": true,
                "separated": "",
                "text": '',
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
            "BreakLine": '\n',
            "replaceBreakLine": '---',
            "replaceToBreakLine": '___'
        }
    };

    return getMenuForPlatform(default_msg);
};