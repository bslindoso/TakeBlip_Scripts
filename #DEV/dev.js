// VALIDAÇÃO DE ENDEREÇO
// =========================================
// O que pode ter em um endereço:
// =========================================
// Textos
// Números
// =========================================
// O que não pode ter em um endereço:
// =========================================
// Imagem
// Vídeo
// Audio
// Emojis
// Figurinhas
// Arquivos em gerais
// Links
const input = '{"type":"image/jpeg","size":176415,"uri":"https://blipmediastore.blob.core.windows.net/secure-medias/Media_d30e5bdd-1c52-436a-920a-a913409ee896?sv=2019-07-07&st=2022-09-30T21%3A28%3A10Z&se=2022-09-30T21%3A58%3A10Z&sr=b&sp=r&sig=PJLtd2ZpwP8v1ScFYzj1l457SYQKwEmve5L1%2Bu%2FAJco%3D&secure=true","title":""}';
console.log(validaEndereco(input))

function validaEndereco(input) {

    const regex = {
        "image": /image/,
        "audio": /audio/,
        "video": /video/,
        "emoji": /[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/,
        "link": /^(((https?:\/\/)[^\s.]+|(www))\.[\w][^\s]+)$/,
        "arquivo": /application|text\/csv|text\/html/,
        "figurinha": /application\/octet-stream|image\/webp/,
    }

    if (input.match(regex.image) || input.match(regex.audio) || input.match(regex.video) || input.match(regex.emoji) || input.match(regex.figurinha) || input.match(regex.link) || input.match(regex.arquivo)) {
        return {type: 'error', input: 'ERRO ENDERECO', validation: 'endereco'}
    }
    return {type: 'success', input: input, validation: 'endereco'}
}