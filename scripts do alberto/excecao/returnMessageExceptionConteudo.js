// Message Exception

// <<<<Var of input>>>> 
// objExcecao
// boldValue
// italicValue

// <<<<var de saida>>>>
// messageExcep

// <<<condição>>>

// <<<Script>>>>

const run = (obj, boldValue, italicValue) => {
  const messages = [
    {
      'message': 'Ainda não consigo ler ###emojis&&& 😔. Por enquanto, só mensagens de texto.',
      'type': 'Emoticons'
    },
    {
      'message': 'Ainda não consigo ler ###figurinhas&&& ☄️. Por enquanto, só mensagens de texto.',
      'type': 'Figurinhas'
    },
    {
      'message': 'Ainda não sei processar ###imagens&&& 🏖️. Entendo apenas texto.',
      'type': 'Images'
    },
    {
      'message': 'Ainda não consigo entender ###arquivos de áudio&&& 🎶🎤, mas podemos conversar por texto.',
      'type': 'Audios'
    },
    {
      'message': 'Por enquanto não consigo ###assistir vídeos&&& 🎥, mas você pode conversar comigo por texto.',
      'type': 'Videos'
    },
    {
      'message': 'Ainda não consigo acessar ###nenhum link&&& 🌐, mas você pode conversar comigo por texto.',
      'type': 'Link'
    },
    {
      'message': 'Ainda não entendo este ###tipo de conteúdo&&& 📄. Por enquanto só consigo ler mensagens de texto.',
      'type': 'Arquivos'
    },
    {
      'message': 'Ainda não consigo acessar ###acessar contatos&&& 📱, mas você pode conversar comigo por texto.',
      'type': 'Contatos'
    },
  ];

  let convertBold = boldValue;
  if (typeof boldValue === typeof toString()) {
    convertBold = JSON.parse(boldValue);
  }
  let convertItalic = italicValue;
  if (typeof italicValue === typeof toString()) {
    convertItalic = JSON.parse(italicValue);
  }

  const config = {
    "activeBold": true,
    "boldValue": convertBold,
    "replaceBold": {
      "open": "%%%",
      "close": "@@@"
    },
    "activeItalic": false,
    "italicValue": convertItalic,
    "replaceItalic": {
      "open": "###",
      "close": "&&&"
    },
    "BreakLine": '\n',
    "replaceBreakLine": '---',
    "replaceToBreakLine": '___'
  };

  let message = getMessage(obj, messages);

  if (config.activeBold) {
    message = myFunctionBold(message, config);
  }

  if (config.activeItalic) {
    message = myFunctionItalic(message, config);
  }

  message = myFunctionBreakLine(message, config);

  return message;
};

function getMessage(obj, objMessages) {
  let excecao = obj;
  if (typeof obj === typeof toString()) {
    excecao = JSON.parse(obj);
  }

  const message = objMessages.find(element => element.type === excecao.stateDestination);

  return message.message;
}

function myFunctionBold(item, obj) {
  const matchingOpen = RegExp(obj.replaceBold.open, "g");
  const matchingClose = RegExp(obj.replaceBold.close, "g");
  item = item.replace(matchingOpen, obj.boldValue.open);
  item = item.replace(matchingClose, obj.boldValue.close);

  return item;
}

function myFunctionItalic(item, obj) {
  const matchingOpen = RegExp(obj.replaceItalic.open, "g");
  const matchingClose = RegExp(obj.replaceItalic.close, "g");
  item = item.replace(matchingOpen, obj.italicValue.open);
  item = item.replace(matchingClose, obj.italicValue.close);

  return item;
}

function myFunctionBreakLine(item, obj) {
  const matchingRBL = RegExp(obj.replaceBreakLine, "g");
  const matchingRBL2 = RegExp(obj.replaceToBreakLine, "g");
  const bl2 = `${obj.BreakLine}${obj.BreakLine}`;
  item = item.replace(matchingRBL, obj.BreakLine);
  item = item.replace(matchingRBL2, bl2);

  return item;
}