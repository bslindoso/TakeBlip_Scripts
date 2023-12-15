// email = 'bruno.lindoso@gmail.com'

function run(email) {

    const sendTo = email => email.replace('@', '%40') + "@mailgun.gw.msging.net"
    const content = `O Usuário {{contact.name}}, possui interesse em se tornar um médico parceiro.\n\nDados do usuário:\nNome Completo: {{nomeCompleto}},\nE-mail: {{email}},\nNome da Clínica: {{nomeClinicaConsultorio}}`;

    const bodyEmail = {
        "to": sendTo(email),
        "type": "text/plain",
        "content": content
    }
    return JSON.stringify(bodyEmail);
}