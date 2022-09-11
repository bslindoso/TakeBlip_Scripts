{{resource.FunctionGetOptionSelected}}

const run = (selected, inputType, formatMenu, intent, setaOpcoesMenuPrincipal) => {

  // ===========================================================
  // Altera is input.content para facilitar algumas opções
  if (selected == 'Acordo: Seguro Aluguel') {
    selected = 'acordo';
  }
  if (selected == 'Produtos | Dúvidas') {
    selected = 'ProdutosFaq';
  }
  if (selected == "Outros assuntos") {
    selected = "OutrosAssuntos";
  }

  // ===========================================================

  intent = (typeof intent !== 'undefined') ? intent : 'None';
  setaOpcoesMenuPrincipal = JSON.parse(setaOpcoesMenuPrincipal);
  let listaDisponivel = setaOpcoesMenuPrincipal.listaDisponivel;
  let itens;

  if (formatMenu == 'Login') {
    let usuarioLogado = setaOpcoesMenuPrincipal.usuarioLogado; // IDs das opções deste cenário
    itens = defineItens(listaDisponivel, usuarioLogado);

  } else if (formatMenu == 'Portal') {
    let usuarioPortal = setaOpcoesMenuPrincipal.usuarioPortal; // IDs das opções deste cenário
    itens = defineItens(listaDisponivel, usuarioPortal);

  } else {
    let usuarioDeslogado = setaOpcoesMenuPrincipal.usuarioDeslogado; // IDs das opções deste cenário
    itens = defineItens(listaDisponivel, usuarioDeslogado);
  }

  const validacao = {
    'MenuDinamico': true,
    'TextoLongos': true,
    'ValidarIntecao': true,
    'isIntent': false,
    'isOptionMenu': true,
    'shortcut': false,
    'Email': false,
    'Cep': false,
    'Telefone': false,
    'Celular': false,
    'CNPJ': false,
    'CNPJValido': false,
    'CPF': false,
    'CPFValido': false,
    'Quantidade': false,
    'Data': false,
  };

  const menuPrincipal = [
    {
      name: [],
    },
  ];

  const selectResponse = getOptionSelected(
    selected,
    inputType,
    itens,
    validacao,
    intent,
    menuPrincipal
  );

  return selectResponse;
};

// FUNÇÕES AUXILIARES
function defineItens(listaDisponivel, cenario) {
  let itens = [{
    name: [],
  }];

  for (let i = 0; i < cenario.length; i++) {
    for (let j = 0; j < listaDisponivel.length; j++) {
      if (cenario[i] == listaDisponivel[j].id) {
        let agrupamento = [];
        if (listaDisponivel[j].options == listaDisponivel[j].values) {
          agrupamento.push(listaDisponivel[j].options);
        } else {
          agrupamento.push(listaDisponivel[j].options);
          agrupamento.push(listaDisponivel[j].values);
        };
        //Concatena a array agrupamento com o match da listaDisponivel
        agrupamento = agrupamento.concat(listaDisponivel[j].match);
        //Adiciona navegação numérica automática de acordo com o tamanho da array ITENS
        agrupamento.push(itens.length.toString()); 
        //Adiciona navegação numérica automática de acordo com o tamanho da array ITENS + ponto
        agrupamento.push(itens.length.toString() + ".");   
        
        itens.push({
          "name": agrupamento
        });
      };
    };
  };
  itens.shift(); // Remove o primeiro elemento da array (o qual possui name vazio)
  return itens;
};