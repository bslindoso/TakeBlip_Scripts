{{resource.FunctionGetMenu}}

const run = (platform, menu) => {
  let convertPlatform = platform.toLowerCase();
  menu = JSON.parse(menu);
  platform = platform.toLowerCase();

  if (platform == 'instagram' || platform == 'messenger') {
    const objectType = {
      'type': `text/plain`
    }
    return objectType
  };

  let default_msg = {
    "text": menu.text,
    "header": '',
    "body": menu.text,
    "footer": '',
    "button": '',
    "title": '',
    "namespaceTemplate": '',
    "nameTemplate": '',
    "options": menu.options,
    "values": menu.values,
    "submenu": [],
    "description": menu.description,
    "menuScope": {
      "whatsappButton": true,
      "whatsappList": false,
      "blipchatQuickReply": false,
      "blipchatMenu": true,
      "defaultText": false,
      "platform": convertPlatform
    },
  };

  var newMenu = getMenuForPlatform(default_msg);

  return newMenu;
};