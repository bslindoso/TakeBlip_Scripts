function run(jsonData) {

  jsonData = (typeof jsonData === 'object') ? jsonData : JSON.parse(jsonData)

  let client_id = jsonData.keyCloack.client_id
  let grant_type = jsonData.keyCloack.grant_type
  let client_secret = jsonData.keyCloack.client_secret

  const URL = `client_id=${client_id}&grant_type=${grant_type}&client_secret=${client_secret}`;

  return URL;

}
