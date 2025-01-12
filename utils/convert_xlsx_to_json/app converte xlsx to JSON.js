// DEPENDENCIES: XLSX
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

function convertXLSXToJSON(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[workbook.SheetNames.length - 1]; // Última planilha
  const worksheet = workbook.Sheets[sheetName];

  // Convertendo a planilha para um array de objetos
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  // console.log(jsonData)

  // Filtrando apenas as linhas da planilha "Bruno" e removendo o cabeçalho
  const brunoData = jsonData.filter(row => row[0] !== "SKU sem dv");
  // console.log(brunoData)

  // Preenchendo campos vazios com os valores da última linha que possui valor
  let lastNonEmptyRow = {};
  const finalData = brunoData.map(row => {
    const filledRow = row.map((value, index) => {
      if (!value) {
        return lastNonEmptyRow[index];
      }
      return value;
    });
    lastNonEmptyRow = filledRow;
    // console.log(filledRow)
    return filledRow;
  });

  // Removendo linhas que são totalmente vazias após preenchimento
  const filteredData = finalData.filter(row => row.some(value => value));

  // Mapeando os dados para o formato JSON final
  const jsonOutput = filteredData.map(row => {
    return {
      "SKU sem dv": row[0],
      "Sku com dv": row[1],
      "Titulo Ecommerce": row[2],
      "Texto do informe": [row[3]]
    };
  });

  return jsonOutput;
}

// Caminho do arquivo na pasta "Downloads" do Windows 11
const fileName = 'refrigerados_araujo.xlsx';
const downloadsPath = path.join('C:', 'Users', 'bruno', 'Downloads', fileName);

// Chamando a função para converter o arquivo XLSX para JSON
const data = convertXLSXToJSON(downloadsPath);

////////////////////////////////////////////

// Função para preencher os valores ausentes
function preencherValoresAusentes(data) {
  let lastValidValues = {}; // Armazenar os últimos valores válidos encontrados

  // Iterar sobre os objetos no array
  data.forEach(obj => {
    // Verificar se os campos 'SKU sem dv', 'SKU com dv' e 'Titulo Ecommerce' são undefined
    if (obj['SKU sem dv'] === undefined && obj['Sku com dv'] === undefined && obj['Titulo Ecommerce'] === undefined) {
      // Preencher os campos com os últimos valores válidos encontrados
      obj['SKU sem dv'] = lastValidValues['SKU sem dv'];
      obj['Sku com dv'] = lastValidValues['Sku com dv'];
      obj['Titulo Ecommerce'] = lastValidValues['Titulo Ecommerce'];
    } else {
      // Atualizar os últimos valores válidos encontrados
      lastValidValues = {
        'SKU sem dv': obj['SKU sem dv'],
        'Sku com dv': obj['Sku com dv'],
        'Titulo Ecommerce': obj['Titulo Ecommerce']
      };
    }
  });

  return data;
}

// Chamar a função para preencher os valores ausentes
const newData = preencherValoresAusentes(data);

///////////////////////////////////////
// Função para agrupar elementos com o mesmo "Sku com dv"
function agruparPorSkuComDv(data) {
  const agrupado = {};

  // Iterar sobre os objetos no array
  data.forEach(obj => {
    const skuComDv = obj['Sku com dv'];

    if (skuComDv !== undefined) {
      if (!agrupado[skuComDv]) {
        // Se não houver um grupo com esse "Sku com dv", criar um novo
        agrupado[skuComDv] = { 'Sku com dv': skuComDv, items: [] };
      }

      // Adicionar o objeto ao grupo correspondente
      agrupado[skuComDv].items.push(obj);
    }
  });

  // Converter o objeto agrupado de volta para um array
  const resultado = Object.values(agrupado);

  return resultado;
}

// Chamar a função para agrupar por "Sku com dv"
const newDataAgrupado = agruparPorSkuComDv(newData);
console.log(newDataAgrupado.length)

//////////////////////////

// Função para exportar o JSON para um arquivo na pasta "Downloads"
function exportarParaArquivo(data) {
  const jsonContent = JSON.stringify(data, null, 2);
  // Caminho do arquivo na pasta "Downloads" do Windows 11
  const fileName = 'refrigerados_araujo.json';
  const filePath = path.join('C:', 'Users', 'bruno', 'Downloads', fileName);

  // Escrever o conteúdo JSON no arquivo
  fs.writeFile(filePath, jsonContent, err => {
    if (err) {
      console.error('Erro ao exportar para o arquivo:', err);
      return;
    }
    console.log('JSON exportado com sucesso para:', filePath);
  });
}

// Chamar a função para exportar o JSON
exportarParaArquivo(newDataAgrupado);