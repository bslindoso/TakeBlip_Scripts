const lista = JSON.stringify({
  total: 11,
  totalPaginas: 4, // == Math.ceil(lista.lentgh / num de exibições por bloco) EX: (11 / 3) = 3,666 = 4
  lista: [
    {
      modelo: "CIVIC SED LXL 1.7 16V 130CV MT",
      placa: "LUN3678",
      situacao: "CANCELADO",
    },
    {
      modelo: "CORSA PICK-UP ST 1.6 MPFI",
      placa: "LNL6152",
      situacao: "SUBSTITUICAO",
    },
    {
      modelo: "CIVIC SED NEW LXS-MT 1.8 FLEX",
      placa: "LKP3410",
      situacao: "SUBSTITUICAO",
    },
    {
      modelo: "HILUX CD SRV D4-D 4X4 3.0 TDI DIESEL AUT",
      placa: "KOR3531",
      situacao: "INATIVO",
    },
    {
      modelo: "GOL 1.6 MSI FLEX 8V 5P",
      placa: "QOX4323",
      situacao: "CANCELADO",
    },
    {
      modelo: "ONIX HATCH LT 1.0 8V FLEXPOWER 5P MEC.",
      placa: "QOX4322",
      situacao: "INATIVO",
    },
    {
      modelo: "MARCH S 1.0 12V FLEX 5P",
      placa: "QPD0E05",
      situacao: "CANCELADO",
    },
    {
      modelo: "GOL TRENDLINE 1.0 T.FLEX 12V 5P",
      placa: "LTR8A75",
      situacao: "ATIVO",
    },
    {
      modelo: "GOL TRENDLINE 1.0 T.FLEX 12V 3P",
      placa: "LTR8A76",
      situacao: "ATIVO",
    },
    {
      modelo: "ARGO DRIVE 1.0 6V FLEX",
      placa: "QPD9716",
      situacao: "CANCELADO",
    },
    {
      modelo: "YARIS HB XS 1.5 AT",
      placa: "LUI3J43",
      situacao: "ATIVO",
    },
  ],
});

const qtdPorPagina = "3";

const pagAtual = "4";

const getMenuOptionsPaginadoJs = JSON.stringify([
  {
    index: 4,
    text: '{{n1}}4.{{n2}} Veículo: HILUX CD SRV D4-D 4X4 3.0 TDI DIESEL AUT\n' +
      'Placa: KOR3531\n' +
      'Situação: INATIVO\n' +
      '\n'
  },
  {
    index: 5,
    text: '{{n1}}5.{{n2}} Veículo: GOL 1.6 MSI FLEX 8V 5P\n' +
      'Placa: QOX4323\n' +
      'Situação: CANCELADO\n' +
      '\n'
  },
  {
    index: 6,
    text: '{{n1}}6.{{n2}} Veículo: ONIX HATCH LT 1.0 8V FLEXPOWER 5P MEC.\n' +
      'Placa: QOX4322\n' +
      'Situação: INATIVO\n' +
      '\n'
  }
])

console.log(run(getMenuOptionsPaginadoJs, lista, pagAtual));

////////////////////////////
// Retorna o texto exato que vai ser exibido
function run(getMenuOptionsPaginadoJs, lista, pagAtual) {

  let menuPaginado = JSON.parse(getMenuOptionsPaginadoJs);
  lista = JSON.parse(lista);
  pagAtual = parseInt(pagAtual);
  let totalPaginas = lista.totalPaginas;

  let texto =
    "{{firstName}}, {{n1}}sobre qual veículo{{n2}} você gostaria de falar? 🤔\n\n💡 Digite o número de uma das opções a seguir:\n\n";

  if (totalPaginas == 1) {
    menuPaginado.forEach((element) => {
      texto += element.text;
    });
    //se total de páginas maior que 1 e página atual for 1 (ver mais)
  } else if (totalPaginas > 1 && pagAtual == 1) {
    menuPaginado.forEach((element) => {
      texto += element.text;
    });
    texto += `{{n1}}0.{{n2}} Ver mais veículos`;
    //se total de páginas maior que 1 e pagina atual for menor que total de páginas (ver mais e ver menos)
  } else if (totalPaginas > 1 && pagAtual < totalPaginas) {
    menuPaginado.forEach((element) => {
      texto += element.text;
    });
    texto += `{{n1}}0.{{n2}} Ver mais Veículos\n👉 Digite “voltar” para visualizar as opções anteriores.`;
    //se total de páginas maior que 1 e pagina atual fou igual ao total de páginas (ver menos)
  } else if (totalPaginas > 1 && pagAtual == totalPaginas) {
    menuPaginado.forEach((element) => {
      texto += element.text;
    });
    texto += '👉 Digite “voltar” para visualizar as opções anteriores.'
  }

  return texto;
}