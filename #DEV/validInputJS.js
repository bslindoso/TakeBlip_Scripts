function run(input, menu) {
    try {
        //menu = JSON.parse(menu);
        const opcao = menu.itens;

        for (i = 0; i < opcao.length; i++) {
            for (x = 0; x < opcao[i].name.length; x++) {
                if (opcao[i].name[x] == input) {
                    return opcao[i].name[0]
                }
            }
        }
        return 'INPUT INESPERADO'
    }
    catch (e) {
        return 'validInputJS ERROR: UNEXPECTED ERROR'
    }
}

// =============================================================================
// TESTES 
// =============================================================================

const menu = { 
    "text": "💡Antes de iniciarmos, separei algumas {{n1}}dicas{{n2}} que podem te ajudar em nossa conversa:\n\n➡ Digite {{n1}}“Menu”{{n2}} toda vez que desejar retornar ao menu principal;\n\n➡ Digite {{n1}}“Sair”{{n2}} quando precisar encerrar o nosso chat.\n\nE não se esqueça! Sempre que eu te perguntar algo, responda em uma {{n1}}única mensagem.{{n2}} 😉", 
    "options": ["Entendi"], 
    "values": ["Entendi"], 
    "description": [], 
    "itens": [
        { "name": ["Entendi", "entendi", "ENTENDI", "1"] }, 
        { "name": ["Menu", "menu", "MENU", "Voltar ao início", "voltar ao início", "VOLTAR AO INÍCIO", "Reiniciar", "reiniciar", "REINICIAR", "2"] }, 
        { "name": ["Sair", "sair", "SAIR", "3"] }
    ] 
}

const input = 'SAIR'

console.log(run(input, menu))