function run(dialog) {

    dialog = JSON.parse(dialog);

    let history = '';

    for(let i = 0; i < dialog.length; i++) {
        const num = (i == 0) ? 1 : (i * 2)+1;
        history += (num) + '. ' + dialog[i].botMessage + ';' + (num+1) + '. ' + dialog[i].userMessage + ';'
    }

    return history;
}