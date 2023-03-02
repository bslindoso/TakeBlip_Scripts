function run(input) {
    try{
        const regex = {
            "audio": /audio/,
            "video": /video/,
            "emoji": /[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/,
            "arquivo": /application|text\/csv|text\/html/,
            "figurinha": /application\/octet-stream|image\/webp/,
            "numero": /[0-9]/
        }
        if (input.match(regex.audio) || input.match(regex.video) || input.match(regex.emoji) || input.match(regex.figurinha) || input.match(regex.arquivo) || input.match(regex.numero)) {
            return { type: 'error', input: 'ERRO IMAGEM', validation: 'imagem/texto' }
        }
    
        return { type: 'success', input: input.uri, validation: 'imagem/texto' };
    
    }
    catch(e){
        return { type: 'error', input: 'ERRO INESPERADO', validation: 'imagem/texto' }
    }
}

console.log(run("C:\Users\SQUADRA\Desktop\CONT - Extras não Chega.png"))