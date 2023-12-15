// APENAS SE HOUVER MESSENGER E INSTAGRAM

function run(menu, platform, objMenu) {
    objMenu = JSON.parse(objMenu);
    platform = platform.toLowerCase();
  
    switch (platform) {
      case 'instagram':
        return geraMenuNumerico(menu);
  
      case 'messenger':
        return geraMenuNumerico(menu);
  
      default:
        return objMenu.content;
    }
  }
  
  function geraMenuNumerico(menu) {
    menu = JSON.parse(menu);
  
    let listaOptions = '\n\n';
    for (let i = 0; i < menu.options.length; i++) {
      listaOptions = listaOptions + '{{n1}}' + (i + 1) + '.{{n2}} ' + menu.options[i] + '\n';
    }
  
    return menu.text + listaOptions;
  }