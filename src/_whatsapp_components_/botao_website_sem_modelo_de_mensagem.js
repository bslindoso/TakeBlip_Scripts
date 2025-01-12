// Adiciona o JSON ao conteúdo dinâmico
let json = {
  "recipient_type": "individual",
  "type": "interactive",
  "interactive": {
    "type": "cta_url",
    "body": {
      "text": "Clique no botão abaixo para acessar o nosso site"
    },
    "action": {
      "name": "cta_url",
      "parameters": {
        "display_text": "Clicar",
        "url": "http://www.google.com/"
      }
    }
  }
}