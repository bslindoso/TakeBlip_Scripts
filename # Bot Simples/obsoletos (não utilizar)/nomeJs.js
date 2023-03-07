function run(inputName) {
    try {
        const regex = {
            "image": /image/,
            "audio": /audio/,
            "video": /video/,
            "emoji": /[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/,
            "link": /^(((https?:\/\/)[^\s.]+|(www))\.[\w][^\s]+)$/,
            "arquivo": /application|text\/csv|text\/html/,
            "figurinha": /application\/octet-stream|image\/webp/,
            "numero": /[0-9]/
        }
        let isString = inputName.replace(/[0-9]/g, 'NOME INVALIDO')
        let name = isString.split(' ')


        if (inputName.match(regex.image) || inputName.match(regex.audio) || inputName.match(regex.video) || inputName.match(regex.emoji) || inputName.match(regex.figurinha) || inputName.match(regex.link) || inputName.match(regex.arquivo) || isString.match(regex.numero)) {
            return "NOME INVALIDO"
        }
        else if (isString.includes('NOME INVALIDO')) {
            return "NOME INVALIDO"
        }
        else if (name.length >= 2) {
            return isString.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        }
        return "NOME INVALIDO"

    }
    catch (e) {
        return 'nomeJs ERROR: UNEXPECTED ERROR'
    }
}