function run(input) {
    try {

        if (input == '' || input == null || input == undefined) {
            return false;
        }

        input = input.trim();

        input = input.toLowerCase().split(' ');

        if (input.includes('atendimento')) {
            return false;
        }

        if (input.includes('sair')) {
            return false;
        }

        if (input.includes('menu')) {
            return false;
        }

        if (input.includes('boa')) {
            return false;
        }

        for (let a = 0; a < input.length; a++) {
            let w = input[a];
            input[a] = w[0].toUpperCase() + w.slice(1);
        }
        input = input.join(" ")

        const regex = {
            "image": /image/,
            "audio": /audio/,
            "video": /video/,
            "emoji": /[\u2600-\u26ff]|[\u2600-\u27ff]|[\u2f700-\u27bf]|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83c[\udde6-\uddff]|\ud83c[\udffb-\udfff]/,
            "link": /^(((https?:\/\/)[^\s.]+|(www))\.[\w][^\s]+)$/,
            "arquivo": /application|text\/csv|text\/html/,
            "figurinha": /application\/octet-stream|image\/webp/,
            "numero": /[0-9]/
        }
        if (input.match(regex.image) || input.match(regex.audio) || input.match(regex.video) || input.match(regex.emoji) || input.match(regex.figurinha) || input.match(regex.link) || input.match(regex.arquivo) || input.match(regex.numero)) {
            return false
        }
        return input;
    } catch (error) {
        return false
    }
}