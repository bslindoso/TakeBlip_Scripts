// RETURN OPTIONS MENU SELECTION

// <<<<Var of input>>>> 
// input.content
// resource.objMode

// <<<<var de saida>>>>
// isExistModel

// <<<condição>>>

// <<<Script>>>>

const run = (input, objModel) => {
  let opcoes = [];
  const menu = objModel.split(',');

  for (let i = 0; i < menu.length; i++) {
    const element = menu[i];
    opcoes.push(element);
  }

  const validar = getModel(input, opcoes);

  return validar;
};

function isNumeric(num) {
  return !isNaN(num);
}

function getModel(input, objModel) {
  input = input.replace('.', '');

  if (isNumeric(input)) {
    const value = parseInt(input);

    if (value > 0 && value <= objModel.length) {
      const atual = value - 1;

      return objModel[atual];
    }
  }

  return false;
}