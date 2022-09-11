{{resource.FunctionGetOptionSelected}}

const run = (selected, inputType, formatMenu, intent) => {

  if (selected == 'Acordo: Seguro Aluguel') {
    selected = 'acordo';
  }

  if (selected == 'Produtos | Dúvidas') {
    selected = 'ProdutosFaq';
  }

  if(selected == "Outros assuntos"){
    selected = "OutrosAssuntos";
  }


  intent = (typeof intent !== 'undefined') ? intent : 'None';

  let itens = [];

  if (formatMenu == 'Login') {
    itens = [
      {
        name: ['ProdutosFaq', 'produtosfaq', '1'],
      },
      {
        name: ['Cadastro', 'cadastro', '2'],
      },
      {
        name: ['Apólice', 'apolice', '3', '3.'],
      },
      {
        name: ['Financeiro', 'financeiro', '4', '4.'],
      },
      {
        name: ['Sinistro', 'sinistro', '5', '5.'],
      },
      {
        name: ['Acordo', 'fazer acordo', 'acordo', '6', '6.'],
      },
      {
        name: ['OutrosAssuntos', 'outrosassuntos', '7', '7.'],
      },
      {
        name: ['SAC', 'sac', '8', '8.'],
      },
      {
        name: ['Deslogar', 'deslogar', '9', '9.'],
      },
    ];
  } else if (formatMenu == 'Portal') {
    itens = [
      {
        name: ['ProdutosFaq', 'produtosfaq', '1', '1.'],
      },
      {
        name: ['Cadastro', 'cadastro', '2', '2.'],
      },
      {
        name: ['Apólice', 'apolice', '3', '3.'],
      },
      {
        name: ['Financeiro', 'financeiro', '4', '4.'],
      },
      {
        name: ['Sinistro', 'sinistro', '5', '5.'],
      },
      {
        name: ['Acordo', 'fazer acordo', 'acordo', '6', '6.'],
      },
      {
        name: ['OutrosAssuntos', 'outrosassuntos', '7', '7.'],
      },
      {
        name: ['SAC', 'sac', '8', '8.'],
      }
    ];
  } else {
    itens = [
      {
      name: ['ProdutosFaq', 'produtosfaq', '1', '1.'],
      },
      {
        name: ['Cadastro', 'cadastro', '2', '2.'],
      },
      {
        name: ['Apólice', 'apolice', '3', '3.'],
      },
      {
        name: ['Financeiro', 'financeiro', '4', '4.'],
      },
      {
        name: ['Sinistro', 'sinistro', '5', '5.'],
      },
      {
        name: ['Acordo', 'fazer acordo', 'acordo', '6', '6.'],
      },
      {
        name: ['OutrosAssuntos', 'outrosassuntos', '7', '7.'],
      },
      {
        name: ['SAC', 'sac', '8', '8.'],
      },
      {
        name: ['Login', 'login', '9', '9.'],
      }
    ]
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