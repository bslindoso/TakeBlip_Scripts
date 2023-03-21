let lista = JSON.stringify({
  total: 11,
  totalPaginas: 4,
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
    { modelo: "YARIS HB XS 1.5 AT", placa: "LUI3J43", situacao: "ATIVO" },
  ],
});

const getMenuOptionsPaginadoJs = JSON.stringify([
  {
    index: "4",
    text:
      "{{n1}}4.{{n2}} Veículo: HILUX CD SRV D4-D 4X4 3.0 TDI DIESEL AUT\n" +
      "Placa: KOR3531\n" +
      "Situação: INATIVO\n" +
      "\n",
  },
  {
    index: "5",
    text:
      "{{n1}}5.{{n2}} Veículo: GOL 1.6 MSI FLEX 8V 5P\n" +
      "Placa: QOX4323\n" +
      "Situação: CANCELADO\n" +
      "\n",
  },
  {
    index: "6",
    text:
      "{{n1}}6.{{n2}} Veículo: ONIX HATCH LT 1.0 8V FLEXPOWER 5P MEC.\n" +
      "Placa: QOX4322\n" +
      "Situação: INATIVO\n" +
      "\n",
  },
]);

let pagAtual = `2`;

console.log(run(`6`, getMenuOptionsPaginadoJs, lista, pagAtual));

/////////////////////////////

function run(input, getMenuOptionsPaginadoJs, lista, pagAtual) {
  try {
    input = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    input = input.toUpperCase();

    lista = JSON.parse(lista);
    getMenuOptionsPaginadoJs = JSON.parse(getMenuOptionsPaginadoJs);
    pagAtual = parseInt(pagAtual);

    let opcao = [
      // { name: ['ERRO NUMERICO', 'OI'] }
    ];

    // Adiciona cenários onde deve reconhecer o Ver mais empreendimentos
    // input = input
    if (pagAtual != 1 && pagAtual < lista.totalPaginas) {
      opcao.push({ name: ["VER MAIS", "0"] });
    }
    if (pagAtual == 1 && lista.totalPaginas != 1) {
      opcao.push({ name: ["VER MAIS", "0"] });
    }

    // Adiciona cenários onde deve reconhecer o voltar
    if (pagAtual > 1) {
      opcao.push({ name: ["VOLTAR"] });
    }

    // Adiciona as numerações que vem do getMenuOptionsPaginadoJs para serem reconhecidas
    for (let i = 0; i < getMenuOptionsPaginadoJs.length; i++) {
      let index = getMenuOptionsPaginadoJs[i].index;
      opcao.push({ name: [JSON.stringify(lista.lista[index - 1]), index] });
      // console.log(opcao)
    }

    // MATCH getMenuOptionsPaginadoJs.index e lista[i]
    if (input.length > 1) {
      for (i = 0; i < opcao.length; i++) {
        for (x = 0; x < opcao[i].name.length; x++) {
          if (opcao[i].name[x].toString().includes(input)) {
            return {
              type: "success",
              input: `${opcao[i].name[0]}`,
              validation: "paginacao",
            };
          }
        }
      }
    }

    for (i = 0; i < opcao.length; i++) {
      for (x = 0; x < opcao[i].name.length; x++) {
        if (opcao[i].name[x] == input) {
          return {
            type: "success",
            input: `${opcao[i].name[0]}`,
            validation: "paginacao",
          };
        }
      }
    }

    return { type: "error", input: "ERRO NUMERICO", validation: "paginacao" };
  } catch (e) {
    return "error";
  }
}
