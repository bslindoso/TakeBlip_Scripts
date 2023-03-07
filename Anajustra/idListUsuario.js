let apiValidaTelefoneResponse;
apiValidaTelefoneResponse = JSON.stringify([
  {
    "attributes": {
      "type": "Account",
      "url": "/services/data/v57.0/sobjects/Account/0013C00000nPvFmQAK"
    },
    "Id": "0013C00000nPvFmQAK",
    "Whatsapp__c": "11111111111",
    "Contato_whatsapp__c": "NÃO"
  },
  {
    "attributes": {
      "type": "Account",
      "url": "/services/data/v57.0/sobjects/Account/0013C00000nPIBeQAO"
    },
    "Id": "0013C00000nPIBeQAO",
    "Whatsapp__c": "11111111111",
    "Contato_whatsapp__c": "NÃO"
  },
  {
    "attributes": {
      "type": "Account",
      "url": "/services/data/v57.0/sobjects/Account/0013C00000oHwluQAC"
    },
    "Id": "0013C00000oHwluQAC",
    "Whatsapp__c": "11111111111",
    "Contato_whatsapp__c": "NÃO"
  }
])
apiValidaTelefoneResponse = JSON.stringify([
])

console.log(run(apiValidaTelefoneResponse))

function run(response) {

  try {
    response = JSON.parse(response)
    let listCounter = response.length
    let idList = []

    if (listCounter > 0) {
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          //console.log(`${key}: ${JSON.stringify(response[key])}`);
          const identity = response[key].Id
          idList.push(identity)
        }
      }
    } else {
      return "ERROR: RETORNO DA API LISTA VAZIA"
    }

    return idList;

  } catch (e) {
    return "ERROR: SCRIPT ERROR"
  }
}