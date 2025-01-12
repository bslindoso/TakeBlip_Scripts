const nomeArquivoOrigem = `araujopendenciashml` + '.json'
const nomeArquivoFinal = 'pendencia' + '.json'


const path = require('path');
const fs = require('fs');

// Obter o caminho para a pasta "Downloads" do usuário
const downloadsPath = path.join(process.env.USERPROFILE, 'Downloads');

// Ler o arquivo JSON
fs.readFile(path.join(downloadsPath, nomeArquivoOrigem), 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  try {
    // Converter o conteúdo do arquivo para objeto JavaScript
    const jsonObject = JSON.parse(data);

    // Função para adicionar as propriedades extras em TrackEvent
    function addPropertiesToTrackEvents(obj) {
      // Verificar se o objeto é um array
      if (Array.isArray(obj)) {
        // Iterar sobre cada elemento do array
        obj.forEach(addPropertiesToTrackEvents);
      } else if (typeof obj === 'object') {
        // Iterar sobre as chaves do objeto
        for (let key in obj) {
          // Verificar se a chave é "type" e o valor é "TrackEvent"
          if (key === 'type' && obj[key] === 'TrackEvent') {
            // Adicionar as propriedades extras em settings.extras
            obj.settings = obj.settings || {};
            obj.settings.extras = obj.settings.extras || {};
            obj.settings.extras["Headline Anúncio"] = "{{metadata@headline}}";
            obj.settings.extras["Id do Anúncio"] = "{{metadata@source_id}}";
            obj.settings.extras["Url do Anúncio"] = "{{metadata@source_url}}";
          } else {
            // Chamar recursivamente a função para as propriedades do objeto
            addPropertiesToTrackEvents(obj[key]);
          }
        }
      }
    }

    // Chamar a função para adicionar as propriedades extras
    addPropertiesToTrackEvents(jsonObject);

    // Converter o objeto modificado de volta para JSON
    const modifiedJson = JSON.stringify(jsonObject, null, 2);

    // Escrever o JSON modificado de volta para o arquivo
    fs.writeFile(path.join(downloadsPath, nomeArquivoFinal), modifiedJson, 'utf8', (err) => {
      if (err) {
        console.error('Erro ao escrever o arquivo modificado:', err);
        return;
      }
      console.log('Arquivo modificado com sucesso!');
    });

  } catch (err) {
    console.error('Erro ao processar o JSON:', err);
  }
});
