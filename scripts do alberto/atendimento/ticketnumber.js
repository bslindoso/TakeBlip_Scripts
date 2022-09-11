// TICKET NUMBER

// <<<<Var of input>>>> 
// input.content

// <<<<var de saida>>>>
// ticketnumber

// <<<condição>>>

// <<<Script>>>>

const run = (content) => {
  let PARSED = content;
  if (typeof content === typeof toString()) {
    PARSED = JSON.parse(content);
  }



  return PARSED.sequentialId;
};

const atend = {
  "id": "43e96ef6-93e4-47aa-ac85-017e070564a8",
  "sequentialId": 13,
  "ownerIdentity": "retinatransbordoprd@msging.net",
  "customerIdentity": "483e3d35-ad57-422f-9280-7095e5bc536b@tunnel.msging.net",
  "customerDomain": "tunnel.msging.net",
  "agentIdentity": "alberto.onezio%40squadra.com.br@blip.ai",
  "provider": "Lime",
  "status": "ClosedAttendant",
  "storageDate": "2021-12-29T16:28:21.030Z",
  "openDate": "2021-12-29T16:33:17.930Z",
  "closeDate": "2021-12-29T16:34:07.023Z",
  "statusDate": "2021-12-29T16:34:07.023Z",
  "externalId": "43e96ef6-93e4-47aa-ac85-017e070564a8",
  "rating": 0,
  "team": "Default",
  "unreadMessages": 0,
  "closed": true,
  "closedBy": "alberto.onezio%40squadra.com.br@blip.ai",
  "firstResponseDate": "2021-12-29T16:33:51.030Z",
  "priority": 0
};

console.log(run(atend));

/*
return {
      "sequentialId": 8590,
      "ownerIdentity": "atendinfra@msging.net",
      "customerIdentity": "cf4baf45-fb81-44a1-bb5c-808db068d71a@tunnel.msging.net",
      "storageDate": "2021-09-08T15:08:15.090Z",
      "team": "Central de Relacionamento",
      "parentSequentialId": 8578
  };
*/