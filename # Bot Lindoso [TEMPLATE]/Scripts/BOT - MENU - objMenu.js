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
    "header": 'Menu',
    "body": menu.text,
    "footer": '',
    "button": 'Menu',
    "title": 'Menu',
    "namespaceTemplate": '',
    "nameTemplate": '',
    "options": menu.options,
    "values": menu.values,
    "submenu": [],
    "description": menu.description,
    "menuScope": {
      "whatsappButton": false,
      "whatsappList": false,
      "blipchatQuickReply": false,
      "blipchatMenu": false,
      "defaultText": true,
      "platform": convertPlatform
    },
  };

  var newMenu = getMenuForPlatform(default_msg);

  return newMenu;
};