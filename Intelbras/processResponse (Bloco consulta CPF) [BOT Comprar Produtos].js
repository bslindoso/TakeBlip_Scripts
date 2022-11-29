function run(status, response) {

    // Tratamento das variáveis de entrada
    status = parseInt(status)
    response = JSON.parse(response)

    // Verifica se a response possui o atributo Contatos
    const hasContato = response.hasOwnProperty('Contatos')
    let contato;
    if (hasContato) {
        contato = response.Contatos;

        // Verifica se o atributo contato está vazio ou não
        if (Object.entries(contato).length == 0) {
            // Erro: Contato existe mas está vazio
            return JSON.stringify(
                {
                    type: "error",
                    status: status,
                    message: "Contato existe mas está vazio",
                    response: response
                }
            )
        } else {
            // Verifica qual o range do status da requisição
            if (status >= 200 && status <= 299) {
                return JSON.stringify(
                    {
                        type: "success",
                        status: status,
                        message: "Contato encontrado com sucesso",
                        response: response
                    }
                )
            } else {
                // Erro: Status diferente de 200-299
                return JSON.stringify(
                    {
                        type: "error",
                        status: status,
                        message: `Erro de status: ${status}`,
                        response: response
                    }
                )
            }
        }
    } else {
        // Erro: Response sem propriedade Contatos
        return JSON.stringify(
            {
                type: "error",
                status: status,
                message: "Response sem propriedade Contatos",
                response: response
            }
        )
    }
}