{{resource.FunctionGetOptionSelected}}

const run = (selected, inputType, intent, platform, apiStatusCode, apiName, contentAssistant) => {
  intent = (typeof intent !== 'undefined') ? intent : 'None';
  platform = (typeof platform !== 'undefined') ? platform : 'BlipChat';
  apiStatusCode = (typeof apiStatusCode !== 'undefined') ? apiStatusCode : null;
  apiName = (typeof apiName !== 'undefined') ? apiName : null;
  contentAssistant = (typeof contentAssistant !== 'undefined') ? contentAssistant : null;

  const itens = [
    {
      name: [],
    },
  ];

  let validation = {
    'menuDinamic': false,
    'isInputNoValidate': false,
    'isTrueFalse': false,
    'textLong': false,
    'intentValidate': false,
    'isIntent': false,
    'isOptionMenu': false,
    'contentAssistant': false,
    'shortcutMenu': false,
    'shortcut': false,
    'badWord': false,
    'allowMedia': false,
    'allowedMediaFormat': [],
    'allowLinks': false,
    'NPS': false,
    'Email': false,
    'NoPersonalEmail': false,
    'ListNoEmail': ['mail', 'bol', 'outlook', 'yahoo', 'google'],
    'Cep': false,
    'Telefone': false,
    'Celular': false,
    'CNPJ': false,
    'CNPJValido': false,
    'CPF': true,
    'CPFValido': false,
    'CPFAndCNPJ': false,
    'CPFAndCNPJValido': false,
    'Quantidade': false,
    'Data': false,
    'Horas': false,
    'Numero': false,
    'Nome': false,
    'Serial': false,
    'Pedido': false,
    'Id': false,
    'Cartao': false,
    'CharTotal': 0,
    'OnlyNumber': false,
    'apiStatus': false,
    'ContaCorrente' : true
  };

  if (platform === 'WhatsApp') {
    validation.menuDinamic = false;
  }

  const mainMenus = [
    {
      name: [],
    },
  ];

  const shortcuts = [
    {
      name: [],
    },
  ];

  const apiStatus = [
    {
      status: 'ok',
      code: 200,
      type: ''
    },
    {
      status: 'created',
      code: 201,
      type: ''
    },
    {
      status: 'accepted',
      code: 202,
      type: ''
    },
    {
      status: 'no content',
      code: 204,
      type: ''
    },
    {
      status: 'bad request',
      code: 400,
      type: ''
    },
    {
      status: 'unauthorized',
      code: 401,
      type: ''
    },
    {
      status: 'forbidden',
      code: 403,
      type: ''
    },
    {
      status: 'not found',
      code: 404,
      type: ''
    },
    {
      status: 'not acceptable',
      code: 406,
      type: ''
    },
    {
      status: 'internal server error',
      code: 500,
      type: ''
    },
    {
      status: 'service unavailable',
      code: 503,
      type: ''
    },
  ];

  const selectResponse = getOptionSelected(
    selected,
    inputType,
    itens,
    validation,
    intent,
    mainMenus,
    shortcuts,
    apiName,
    contentAssistant,
    apiStatus
  );

  return selectResponse;
};