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


console.log(run(lista, '2', '3'));

/////////////////////////////////////////

function run(lista, pagAtual, qtdPorPagina) {
  lista = JSON.parse(lista);
  pagAtual = parseInt(pagAtual);
  qtdPorPagina = parseInt(qtdPorPagina);
  const Paginatio = (lista, page_size) => {
    const paginate = (array, page_size, page_number) => {
      return array.slice(
        (page_number - 1) * page_size,
        page_number * page_size
      );
    };

    const getPage = (page_number) => {
      const page = paginate(lista, page_size, page_number);
      const pageFormated = getPageFormated(page);
      return pageFormated;
    };

    const getPageFormated = (listaPaginated) => {
      return listaPaginated.map((l) => {
        const index = lista.findIndex((x) => x.placa === l.placa) + 1;
        // aqui entra o formato do menu
        // TRABALHA O QUE QUER RETORNAR AQUI
        return {index: `${index}`, text: `{{n1}}${index}.{{n2}} Veículo: ${l.modelo}\nPlaca: ${l.placa}\nSituação: ${l.situacao}\n\n`}
      });
    };

    return {
      getPage: getPage,
    };
  };

  const a = Paginatio(lista.lista, qtdPorPagina);
  return JSON.stringify(a.getPage(pagAtual));
}