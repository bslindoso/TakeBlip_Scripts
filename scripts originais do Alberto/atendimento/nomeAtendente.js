// ATTENDANT NAME

// <<<<Var of input>>>>
// objAtendentes
// emailAtendente

// <<<<var de saida>>>>
// attendantName

// <<<condição>>>

// <<<Script>>>>

const run = (obj, email) => {
  let atendentes = obj;

  if (typeof obj === typeof toString()) {
    atendentes = JSON.parse(obj);
  }

  let nome = getName(atendentes, email);

  if (nome == false) {
    nome = generateName(email);
  }

  return nome;
};

function getName(obj, email) {
  let atendente = email;
  const total = obj.resource.total;

  for (let i = 0; i < total; i++) {
    const item = obj.resource.items[i].identity;

    if (atendente == item) {
      const nome = obj.resource.items[i].fullname;

      if (nome.includes("@pottencial.com.br")) {
        return false;
      }

      if (nome.includes(".")) {
        return false;
      }

      let format = nome.split(' ');

      for (let a = 0; a < format.length; a++) {
        let w = format[a].toLowerCase();
        format[a] = w[0].toUpperCase() + w.slice(1);
      }

      return format.join(" ");
    }
  }

  return false;
}

function generateName(email) {
  let atendente = email;

  if (atendente.includes("%40pottencial")) {
    let fim = atendente.indexOf("%40pottencial");
    let format = atendente.slice(0, fim);
    atendente = format.split('.');
  }

  if (atendente.includes("@pottencial")) {
    let fim = atendente.indexOf("@pottencial");
    let format = atendente.slice(0, fim);
    atendente = format.split('.');
  }

  for (let a = 0; a < atendente.length; a++) {
    let w = atendente[a];
    atendente[a] = w[0].toUpperCase() + w.slice(1);
  }

  return atendente.join(" ");
}

const resp = {
  "type": "application/vnd.lime.collection+json",
  "resource": {
    "total": 57,
    "itemType": "application/vnd.iris.desk.attendant+json",
    "items": [
      {
        "identity": "adriana.souza%40pottencial.com.br@blip.ai",
        "fullname": "Adriana Souza Secundino",
        "email": "adriana.souza@pottencial.com.br",
        "teams": [
          "Central de Sinistro - Garantia"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-20T20:04:24.270Z",
        "agentSlots": 3
      },
      {
        "identity": "alessandro.neves%40pottencial.com.br@blip.ai",
        "fullname": "Alessandro Neves",
        "email": "alessandro.neves@pottencial.com.br",
        "teams": [
          "Central de Sinistro - RE",
          "Central de Sinistro - RD"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-22T12:25:31.590Z"
      },
      {
        "identity": "aline.silva%40pottencial.com.br@blip.ai",
        "fullname": "Aline Silva Oliveira",
        "email": "aline.silva@pottencial.com.br",
        "teams": [
          "Central de Sinistro - Aluguel"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-10-18T12:58:09.400Z"
      },
      {
        "identity": "amanda.silva%40pottencial.com.br@blip.ai",
        "fullname": "amanda.silva@pottencial.com.br",
        "email": "amanda.silva@pottencial.com.br",
        "teams": [
          "Central de Sinistro - Garantia"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-20T20:04:24.060Z",
        "agentSlots": 3
      },
      {
        "identity": "ana.alves%40pottencial.com.br@blip.ai",
        "fullname": "Ana Cecília Menezes",
        "email": "ana.alves@pottencial.com.br",
        "teams": [
          "Central de Vendas - Ana Alves"
        ],
        "status": "Offline",
        "lastServiceDate": "2020-11-13T19:43:13.660Z"
      },
      {
        "identity": "ana.chagas%40pottencial.com.br@blip.ai",
        "fullname": "Ana Carolina Paiva Rocha Chagas",
        "email": "ana.chagas@pottencial.com.br",
        "teams": [
          "​Central de Negócios RD e RE"
        ],
        "status": "Invisible",
        "agentSlots": 3
      },
      {
        "identity": "ana.freire%40pottencial.com.br@blip.ai",
        "fullname": "Ana Maria Lopes Freire",
        "email": "ana.freire@pottencial.com.br",
        "teams": [
          "Central de Relacionamento"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-25T12:15:41.700Z"
      },
      {
        "identity": "ana.matos%40pottencial.com.br@blip.ai",
        "fullname": "Ana Paula de Matos",
        "email": "ana.matos@pottencial.com.br",
        "teams": [
          "​Central de Negócios Garantia"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-22T20:11:23.320Z",
        "agentSlots": 3
      },
      {
        "identity": "ana.varandas%40pottencial.com.br@blip.ai",
        "fullname": "Ana Varandas",
        "email": "ana.varandas@pottencial.com.br",
        "teams": [
          "Central de Relacionamento",
          "Default"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-25T12:30:24.220Z",
        "agentSlots": 3
      },
      {
        "identity": "anderson.vieira%40pottencial.com.br@blip.ai",
        "fullname": "ANDERSON VIEIRA",
        "email": "anderson.vieira@pottencial.com.br",
        "teams": [
          "Central de Vendas - Anderson V"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-22T20:24:07.370Z"
      },
      {
        "identity": "anna.paixao%40pottencial.com.br@blip.ai",
        "fullname": "anna.paixao@pottencial.com.br",
        "email": "anna.paixao@pottencial.com.br",
        "teams": [
          "Central de Sinistro - Garantia"
        ],
        "status": "Invisible",
        "agentSlots": 3
      },
      {
        "identity": "bianca.moreira%40pottencial.com.br@blip.ai",
        "fullname": "Bianca Moreira Campos",
        "email": "bianca.moreira@pottencial.com.br",
        "teams": [
          "​Central de Negócios Garantia"
        ],
        "status": "Offline"
      },
      {
        "identity": "breno.dias%40pottencial.com.br@blip.ai",
        "fullname": "Breno Faria Dias",
        "email": "breno.dias@pottencial.com.br",
        "teams": [
          "Central de Sinistro - RD",
          "Central de Sinistro - RE"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-05-14T19:40:47.180Z",
        "agentSlots": 3
      },
      {
        "identity": "bruna.costa%40pottencial.com.br@blip.ai",
        "fullname": "BRUNA ERIKA SILVA LEANDRO COSTA",
        "email": "bruna.costa@pottencial.com.br",
        "teams": [
          "Central Cliente Aluguel Varejo"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-10-20T15:41:05.400Z"
      },
      {
        "identity": "bruna.oliveira%40pottencial.com.br@blip.ai",
        "fullname": "Bruna Paula Oliveira",
        "email": "bruna.oliveira@pottencial.com.br",
        "teams": [
          "​Central de Negócios Garantia"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-07-15T14:33:13.370Z"
      },
      {
        "identity": "camila.moura%40pottencial.com.br@blip.ai",
        "fullname": "camila.moura",
        "email": "camila.moura@pottencial.com.br",
        "teams": [
          "Central de Sinistro - Garantia"
        ],
        "status": "Offline",
        "agentSlots": 3
      },
      {
        "identity": "cesar.melo%40pottencial.com.br@blip.ai",
        "fullname": "César Henrique de Melo",
        "email": "cesar.melo@pottencial.com.br",
        "teams": [
          "Central de Sinistro - Aluguel"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-10-08T16:49:56.590Z"
      },
      {
        "identity": "claudia.fiuza%40pottencial.com.br@blip.ai",
        "fullname": "Claudia Fiuza",
        "email": "claudia.fiuza@pottencial.com.br",
        "teams": [
          "Central de Sinistro - Aluguel"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-10-08T20:33:33.160Z",
        "agentSlots": 3
      },
      {
        "identity": "dandara.silva%40pottencial.com.br@blip.ai",
        "fullname": "Dândara de Sousa Silva",
        "email": "dandara.silva@pottencial.com.br",
        "teams": [
          "Central de Sinistro - Aluguel"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-09-30T11:51:48.900Z",
        "agentSlots": 3
      },
      {
        "identity": "danubia.almeida%40pottencial.com.br@blip.ai",
        "fullname": "DANUBIA ROCHA ALMEIDA",
        "email": "danubia.almeida@pottencial.com.br",
        "teams": [
          "​Central de Negócios RD e RE"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-20T19:34:27.580Z",
        "agentSlots": 3
      },
      {
        "identity": "danyella.rezende%40pottencial.com.br@blip.ai",
        "fullname": "Danyella Silva Rezende",
        "email": "danyella.rezende@pottencial.com.br",
        "teams": [
          "​Central de Negócios RD e RE"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-13T13:15:57.610Z",
        "agentSlots": 3
      },
      {
        "identity": "dayanne.oliveira%40pottencial.com.br@blip.ai",
        "fullname": "Dayanne Torres Oliveira",
        "email": "dayanne.oliveira@pottencial.com.br",
        "teams": [
          "Central de Vendas - Dayanne"
        ],
        "status": "Offline",
        "lastServiceDate": "2020-12-01T13:27:57.540Z"
      },
      {
        "identity": "debora.nunes%40pottencial.com.br@blip.ai",
        "fullname": "Débora Nunes do Nascimento",
        "email": "debora.nunes@pottencial.com.br",
        "teams": [
          "Central de Sinistro - Garantia"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-20T20:04:24.410Z"
      },
      {
        "identity": "eduardo.sousa%40pottencial.com.br@blip.ai",
        "fullname": "Eduardo Sousa Goulart",
        "email": "eduardo.sousa@pottencial.com.br",
        "teams": [
          "Central de Sinistro - Garantia"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-10-11T18:54:22.020Z",
        "agentSlots": 3
      },
      {
        "identity": "elaine.sampaio%40pottencial.com.br@blip.ai",
        "fullname": "Elaine Cristina Sampaio",
        "email": "elaine.sampaio@pottencial.com.br",
        "teams": [
          "Produto RD e RE - Elaine Sampaio"
        ],
        "status": "Offline"
      },
      {
        "identity": "erica.silva%40pottencial.com.br@blip.ai",
        "fullname": "Erica Silva",
        "email": "erica.silva@pottencial.com.br",
        "teams": [
          "Default",
          "Central de Relacionamento"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-22T21:10:02.560Z",
        "agentSlots": 3
      },
      {
        "identity": "ester.nascimento%40pottencial.com.br@blip.ai",
        "fullname": "ESTER NASCIMENTO",
        "email": "ester.nascimento@pottencial.com.br",
        "teams": [
          "​Central de Negócios Garantia"
        ],
        "status": "Invisible",
        "lastServiceDate": "2021-09-23T19:28:52.240Z",
        "agentSlots": 3
      },
      {
        "identity": "gabriel.ramos%40pottencial.com.br@blip.ai",
        "fullname": "Gabriel ",
        "email": "gabriel.ramos@pottencial.com.br",
        "teams": [
          "Central de Relacionamento",
          "Default"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-25T11:53:21.470Z"
      },
      {
        "identity": "glaucia.oliveira%40pottencial.com.br@blip.ai",
        "fullname": "Glaucia Alves de Oliveira",
        "email": "glaucia.oliveira@pottencial.com.br",
        "teams": [
          "​Central de Negócios RD e RE"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-10-08T17:34:55.100Z",
        "agentSlots": 3
      },
      {
        "identity": "graziele.alves%40pottencial.com.br@blip.ai",
        "fullname": "graziele de barros alves",
        "email": "graziele.alves@pottencial.com.br",
        "teams": [
          "Central de Vendas - Graziele"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-10-22T20:19:23.470Z",
        "agentSlots": 3
      },
      {
        "identity": "guilherme.barbosa%40pottencial.com.br@blip.ai",
        "fullname": "Guilherme Marques Souza Barbosa",
        "email": "guilherme.barbosa@pottencial.com.br",
        "teams": [
          "Central de Sinistro - RD",
          "Central de Sinistro - RE"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-22T18:02:07.510Z",
        "agentSlots": 3
      },
      {
        "identity": "guilherme.siste%40pottencial.com.br@blip.ai",
        "fullname": "Guilherme Siste Santos",
        "email": "guilherme.siste@pottencial.com.br",
        "teams": [
          "Central de Vendas - Guilherme"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-09-14T16:26:29.210Z"
      },
      {
        "identity": "hellen.silva%40pottencial.com.br@blip.ai",
        "fullname": "hellen.silva@pottencial.com.br",
        "email": "hellen.silva@pottencial.com.br",
        "teams": [
          "Central de Sinistro - Aluguel"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-10-21T16:13:04.330Z",
        "agentSlots": 3
      },
      {
        "identity": "iacanan.santos%40pottencial.com.br@blip.ai",
        "fullname": "Iaçanan Rodrigues dos Santos",
        "email": "iacanan.santos@pottencial.com.br",
        "teams": [
          "Central Cliente Aluguel Corp."
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-22T17:58:13.420Z"
      },
      {
        "identity": "ida.neta%40pottencial.com.br@blip.ai",
        "fullname": "Ida Neta",
        "email": "ida.neta@pottencial.com.br",
        "teams": [
          "​Central de Negócios Garantia"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-20T18:15:14.000Z",
        "agentSlots": 3
      },
      {
        "identity": "isabel.andrade%40pottencial.com.br@blip.ai",
        "fullname": "isabel.andrade",
        "email": "isabel.andrade@pottencial.com.br",
        "teams": [
          "Central de Sinistro - Garantia"
        ],
        "status": "Offline",
        "agentSlots": 3
      },
      {
        "identity": "joao.araujo%40pottencial.com.br@blip.ai",
        "fullname": "João Flávio Silva Araújo",
        "email": "joao.araujo@pottencial.com.br",
        "teams": [
          "Central de Negócios Aluguel"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-06-17T14:04:15.620Z",
        "agentSlots": 3
      },
      {
        "identity": "juliana.carvalho%40pottencial.com.br@blip.ai",
        "fullname": "Juliana Rodrigues da Silva Carvalho",
        "email": "juliana.carvalho@pottencial.com.br",
        "teams": [
          "​Central de Negócios Garantia"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-08-26T13:48:23.920Z",
        "agentSlots": 3
      },
      {
        "identity": "junia.sousa%40pottencial.com.br@blip.ai",
        "fullname": "junia.sousa@pottencial.com.br",
        "email": "junia.sousa@pottencial.com.br",
        "teams": [
          "Central Cliente Aluguel Corp."
        ],
        "status": "Online"
      },
      {
        "identity": "luan.gouvea%40pottencial.com.br@blip.ai",
        "fullname": "luan.gouvea",
        "email": "luan.gouvea@pottencial.com.br",
        "teams": [
          "​Central de Negócios Garantia"
        ],
        "status": "Offline",
        "agentSlots": 3
      },
      {
        "identity": "luana.santos%40pottencial.com.br@blip.ai",
        "fullname": "LUANA CRISTINA SANTOS DE JESUS",
        "email": "luana.santos@pottencial.com.br",
        "teams": [
          "​Central de Negócios Garantia"
        ],
        "status": "Invisible",
        "lastServiceDate": "2021-07-28T15:43:09.080Z"
      },
      {
        "identity": "lucas.bamba%40pottencial.com.br@blip.ai",
        "fullname": "Lucas Braga bamba",
        "email": "lucas.bamba@pottencial.com.br",
        "teams": [
          "Central de Vendas -Lucas Bamba"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-22T17:26:59.210Z",
        "agentSlots": 3
      },
      {
        "identity": "mariane.oliveira%40pottencial.onmicrosoft.com@blip.ai",
        "fullname": "Mariane de Oliveira Cordeiro",
        "email": "mariane.oliveira@pottencial.onmicrosoft.com",
        "teams": [
          "​Central de Negócios RD e RE"
        ],
        "status": "Offline",
        "lastServiceDate": "2020-07-28T18:11:05.470Z"
      },
      {
        "identity": "mario.coelho%40pottencial.com.br@blip.ai",
        "fullname": "Mario Cezar coelho",
        "email": "mario.coelho@pottencial.com.br",
        "teams": [
          "Central de Sinistro - Garantia"
        ],
        "status": "Offline",
        "lastServiceDate": "2020-09-15T12:59:44.220Z"
      },
      {
        "identity": "nailson.santos%40pottencial.com.br@blip.ai",
        "fullname": "nailson.santos@pottencial.com.br",
        "email": "nailson.santos@pottencial.com.br",
        "teams": [
          "Central Cliente Aluguel Varejo"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-20T16:28:17.410Z"
      },
      {
        "identity": "nathalia.carmo%40pottencial.com.br@blip.ai",
        "fullname": "Nathalia do Carmo Sant ana",
        "email": "nathalia.carmo@pottencial.com.br",
        "teams": [
          "Central de Sinistro - Aluguel"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-09-24T19:48:44.610Z"
      },
      {
        "identity": "paula.barbosa%40pottencial.com.br@blip.ai",
        "fullname": "Paula Barbosa",
        "email": "paula.barbosa@pottencial.com.br",
        "teams": [
          "​Central de Negócios Garantia"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-10-07T18:37:28.400Z"
      },
      {
        "identity": "pedro.costa%40pottencial.com.br@blip.ai",
        "fullname": "Pedro Costa",
        "email": "pedro.costa@pottencial.com.br",
        "teams": [
          "Central Cliente Aluguel Varejo"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-10-22T17:32:18.700Z"
      },
      {
        "identity": "priscila.luz%40pottencial.com.br@blip.ai",
        "fullname": "Priscila Luz",
        "email": "priscila.luz@pottencial.com.br",
        "teams": [
          "​Central de Negócios Garantia"
        ],
        "status": "Online",
        "lastServiceDate": "2021-10-22T12:26:59.280Z",
        "agentSlots": 3
      },
      {
        "identity": "priscila.martins%40pottencial.com.br@blip.ai",
        "fullname": "priscila.martins",
        "email": "priscila.martins@pottencial.com.br",
        "teams": [
          "​Central de Negócios RD e RE"
        ],
        "status": "Offline"
      },
      {
        "identity": "rafaela.miranda%40pottencial.com.br@blip.ai",
        "fullname": "RAFAELA SOUZA MIRANDA",
        "email": "rafaela.miranda@pottencial.com.br",
        "teams": [
          "Central de vendas - Rafaela"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-10-21T12:33:00.020Z",
        "agentSlots": 3
      },
      {
        "identity": "raquel.sousa%40pottencial.com.br@blip.ai",
        "fullname": "Raquel da Silva Sousa",
        "email": "raquel.sousa@pottencial.com.br",
        "teams": [
          "​Central de Negócios Garantia"
        ],
        "status": "Offline"
      },
      {
        "identity": "renata.pereira%40pottencial.com.br@blip.ai",
        "fullname": "Renata Grasielle Pereira de Paula",
        "email": "renata.pereira@pottencial.com.br",
        "teams": [
          "Central de Vendas - Renata"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-10-21T17:23:19.010Z",
        "agentSlots": 3
      },
      {
        "identity": "romulo.santos%40pottencial.com.br@blip.ai",
        "fullname": "Romulo Henrique Santos Peres",
        "email": "romulo.santos@pottencial.com.br",
        "teams": [
          "​Central de Negócios RD e RE"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-08-10T20:44:20.740Z",
        "agentSlots": 3
      },
      {
        "identity": "thais.porto%40pottencial.com.br@blip.ai",
        "fullname": "thais.porto@pottencial.com.br",
        "email": "thais.porto@pottencial.com.br",
        "teams": [
          "Central de Negócios Aluguel"
        ],
        "status": "Offline"
      },
      {
        "identity": "thaisa.amorim%40pottencial.com.br@blip.ai",
        "fullname": "Thaisa Ferreira Amorim",
        "email": "thaisa.amorim@pottencial.com.br",
        "teams": [
          "Central de Vendas - Thais"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-10-21T18:12:43.490Z",
        "agentSlots": 3
      },
      {
        "identity": "viviane.rocha%40pottencial.com.br@blip.ai",
        "fullname": "Viviane",
        "email": "viviane.rocha@pottencial.com.br",
        "teams": [
          "Central de Relacionamento",
          "Default"
        ],
        "status": "Offline",
        "lastServiceDate": "2021-03-25T20:58:32.310Z"
      }
    ]
  },
  "method": "get",
  "status": "success",
  "id": "{{random.guid}}",
  "from": "postmaster@desk.msging.net/!iris-hosted-6",
  "to": "atendinfra@msging.net/!iris-hosted-6-crk12u5s",
  "metadata": {
    "#command.uri": "lime://atendinfra@msging.net/attendants",
    "uber-trace-id": "3097e376c4d79e70%3Aa78919f4e1ef145%3A3097e376c4d79e70%3A1"
  }
};

const emailAtendente = "camila.moura%40pottencial.com.br@blip.ai";

console.log(run(resp, emailAtendente));