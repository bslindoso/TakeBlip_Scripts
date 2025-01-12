/* 

Gera próximo protocolo para atualizar a resource.protocolo com a API
"Store a text/plain resource with replacement variable" da BLIP

Entrada: resource.protocolo (00000001, 8 caracteres)
Saída: proximoProtocolo (00000002, 8 caracteres)

*/

console.log(run('00000111'))

function run(protocolo) {
	let length = 8
  let proximoProtocolo = (parseInt(protocolo) + 1).toString()
  let proximoProtocoloLength = proximoProtocolo.length

  for (let i = 0; i < (length - proximoProtocoloLength); i++) {
    proximoProtocolo = '0' + proximoProtocolo
  }  

  return proximoProtocolo
}