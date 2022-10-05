function run(dialog, name, menu, validInputJs ) {
    
    dialog = JSON.parse(dialog);

    botMessage = JSON.parse(menu).text;
    botMessage = 'BOT: ' + botMessage;

    userMessage = JSON.parse(validInputJs).input;
    userMessage = name + ': ' + userMessage;

    dialog.push({'botMessage': botMessage, 'userMessage': userMessage})

    return JSON.stringify(dialog)
}   