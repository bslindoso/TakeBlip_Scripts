let dialog = [{ "botMessage": "BOT: Vamos lá! Primeiro, preciso saber:\n\nEste atendimento é para você ou para algum acompanhante?\n\n💡 Selecione a opção desejada para prosseguir. 👇", "userMessage": "null: Para mim" }, { "botMessage": "BOT: Entendi, e você suspeita de Coronavírus?", "userMessage": "null: Sim" }, { "botMessage": "BOT: Certo! Agora selecione o serviço que você gostaria de tratar hoje:\n\n1. Realizar exame\n2. Entregar material pendente\n\n💡 Digite o número da opção desejada. 👆", "userMessage": "null: Entregar material pendente" }, { "botMessage": "BOT: E qual material você gostaria de entregar?\n\n1. Sangue\n2. Fezes\n3. Urina\n4. Outro", "userMessage": "null: Outro" }, { "botMessage": "BOT: Ok! Então pode digitar o nome do material aqui, por gentileza.\n\n💡 Em uma única mensagem.", "userMessage": "null: Exame de plotka" }, { "botMessage": "BOT: Entendi! E quando foi colhido?\n\n💡 Digite em formato de data, exemplo: 01/01/2022", "userMessage": "null: 05/02/2022" }, { "botMessage": "BOT: E o material foi colhido em que local?", "userMessage": "null: Outro" }, { "botMessage": "BOT: Ok! Pode digitar o nome do local aqui, por gentileza.\n\n💡 Em uma única mensagem.", "userMessage": "null: Home Office" }]
dialog = JSON.stringify(dialog)



console.log(run(dialog))

//===================================================================================
//===================================================================================
//===================================================================================

function run(dialog) {

    dialog = JSON.parse(dialog);

    let history = '';

    for(let i = 0; i < dialog.length; i++) {
        const num = (i == 0) ? 1 : (i * 2)+1;
        history += (num) + '. ' + dialog[i].botMessage + ';' + (num+1) + '. ' + dialog[i].userMessage + ';'
    }

    return history;
}