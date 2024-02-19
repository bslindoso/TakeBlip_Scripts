// {{resource.FunctionGetMenu}}

// const run = (platform, menu) => {
//   menu = JSON.parse(menu);
//   platform = platform.toLowerCase();

//   if (platform == 'instagram' || platform == 'messenger') {
//     const objectType = {
//       'type': `text/plain`
//     }
//     return objectType
//   };

//   let default_msg = {
//     "text": menu.text,
//     "header": 'Menu',
//     "body": menu.text,
//     "footer": '',
//     "button": 'Menu',
//     "title": 'Menu',
//     "namespaceTemplate": '',
//     "nameTemplate": '',
//     "options": menu.options,
//     "values": menu.values,
//     "submenu": [],
//     "description": menu.description,
//     "menuScope": {
//       ... menu.menuScope,
//       "platform": platform
//     },
//   };

//   var newMenu = getMenuForPlatform(default_msg);

//   return newMenu;
// };
////////////////////////////////////////////////////////////////////////////////////////////////////////
// {{resource.FunctionGetMenu}}

// const run = (platform, menu) => {
//   menu = JSON.parse(menu);
//   platform = platform.toLowerCase();

//   if (platform == 'instagram' || platform == 'messenger') {
//     const objMenu = {
//       'type': `text/plain`,
//       'content' : geraMenuNumerico(menu)
//     }
//     return objMenu
//   };

//   let default_msg = {
//     "text": menu.text,
//     "header": 'Menu',
//     "body": menu.text,
//     "footer": '',
//     "button": 'Menu',
//     "title": 'Menu',
//     "namespaceTemplate": '',
//     "nameTemplate": '',
//     "options": menu.options,
//     "values": menu.values,
//     "submenu": [],
//     "description": menu.description,
//     "menuScope": {
//       ... menu.menuScope,
//       "platform": platform
//     },
//   };

//   var newMenu = getMenuForPlatform(default_msg);

//   return newMenu;
// };

// function geraMenuNumerico(menu) {
//   // menu = JSON.parse(menu);

//   let listaOptions = '\n\n';
//   for (let i = 0; i < menu.options.length; i++) {
//     listaOptions = listaOptions + (i + 1) + '. ' + menu.options[i] + '\n';
//   }

//   return menu.text + listaOptions;
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////

{{resource.FunctionGetMenu}}

const run = (platform, menu) => {
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
    "button": 'Marcas',
    "title": 'Menu',
    "namespaceTemplate": '',
    "nameTemplate": '',
    "options": menu.options,
    "values": menu.values,
    "submenu": [],
    "description": menu.description,
    "menuScope": {
      ...menu.menuScope,
      "platform": platform
    }
  };

  var newMenu = getMenuForPlatform(default_msg);

  return newMenu;
};