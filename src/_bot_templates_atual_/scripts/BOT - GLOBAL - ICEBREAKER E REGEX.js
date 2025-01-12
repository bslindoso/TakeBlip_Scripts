let input
input = 'Olá! Tenho interesse e queria mais informações, por favor'
input = 'Preciso de ajuda'
input = '{\"origin\":\"Finalizacao\",\"userInput\":{\"type\":\"text/plain\",\"content\":\"manipular\"},\"custom\":{}'

console.log(run(input))

function run(input) {
    try {
        // =====================================================================================
        // <CONFIG>
        // =====================================================================================
        // DEFINE OS ICEBREAKERS VÁLIDOS
        const ibManipulados01 = 'Olá! Tenho interesse e queria mais informações, por favor';
        // DEFINE REGEX
        /* PEDIDOS */
        const comprarRegex = new RegExp("(([fF]azer)? ?(um)? ?([pP]edidos?))|(([nN]ovos?)? ?([pP]edidos?))|(([cC]omprar)? ?([mM]edicamentos?))|([cC]omprar)", "g");
        const comprar = [
            "Comprar medicamento",
            "Fazer pedido",
            "Novo pedido",
            "Comprar"
        ]
        const novoPedido = [
            "Novo pedido",
            "Nova compra"
        ]
        const repetirPedido = [
            "Repetir pedido",
            "Repetir compra",
            "Comprar de novo"
        ]
        /* MANIPULADOS */
        const manipuladosRegex = new RegExp("(([fF]azer)? ?(um)? ?([oO]r[cç]amentos?))|(([fF]azer)? ?(rem[eé]dio)? ?([Mm]anipula(r)?(do)?))", "g");
        const manipulados = [
            "Fazer um orçamento",
            "Fazer remédio manipulado",
            "Manipulação",
            "Manipular"
        ]
        /* VACINAS */
        const vacinasRegex = new RegExp("(([sS]aber)? ?([sS]obre)? ?([vV]acinas?))|(([sS]aber)? ?([pP]re[cç]o)? ?da ([vV]acinas?))", "g");
        const vacinas = [
            "Gostaria de saber sobre vacina",
            "Queria saber o preço da vacina",
            "Vocês tem a vacina"
        ]
        /* DUVIDAS */
        const duvidasRegex = new RegExp("(([tT]ire)?( suas?)? ?([dD][uú]vidas?))|(([eE]stou com)? ?([aA]lgumas?) ?([dD][uú]vidas?))|(([pP]reciso)?( de)? ?([aA]jud((as?)|(e)?)))", "g");
        const duvidas = [
            "Estou com algumas duvidas",
            "Preciso de ajuda",
            "Quero tirar uma dúvida"
        ]
        // DEFINE MATCHS REGEX
        const matchesRegex = {
            "Comprar": comprarRegex,
            "Manipulados": manipuladosRegex,
            "Vacinas": vacinasRegex,
            "Dúvidas": duvidasRegex
        }

        // =====================================================================================
        // <AUX FUNCTIONS>
        // =====================================================================================
        function removeCaracteresEspeciaisAcentos(texto) {
            texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            return texto;
        }

        // =====================================================================================
        // <CODE>
        // =====================================================================================

        let retorno = { type: 'error', input: 'NO ICEBREAKER', validation: 'no-icebreaker' }

        // =====================================================================================
        // TESTA ICEBREAKERS
        if (input.includes(ibManipulados01)) {
            retorno = { type: 'success', input: input, validation: 'ibManipulados01' }
        }

        if (retorno.type === 'success') {
            return retorno
        }

        // =====================================================================================
        // TESTA PALAVRAS RESERVADAS
        const inputOriginal = input;
        input = removeCaracteresEspeciaisAcentos(inputOriginal.toLowerCase().trim());

        comprar.forEach(e => {
            e = removeCaracteresEspeciaisAcentos(e)
            e = e.toLowerCase().trim()
            if (input.includes(e)) {
                retorno = { type: 'success', input: inputOriginal, validation: 'reserved-words', match: 'Comprar' }
            }
        });

        novoPedido.forEach(e => {
            e = removeCaracteresEspeciaisAcentos(e)
            e = e.toLowerCase().trim()
            if (input.includes(e)) {
                retorno = { type: 'success', input: inputOriginal, validation: 'reserved-words', match: 'Comprar novo pedido' }
            }
        });

        repetirPedido.forEach(e => {
            e = removeCaracteresEspeciaisAcentos(e)
            e = e.toLowerCase().trim()
            if (input.includes(e)) {
                retorno = { type: 'success', input: inputOriginal, validation: 'reserved-words', match: 'Comprar repetir pedido' }
            }
        });

        manipulados.forEach(e => {
            e = removeCaracteresEspeciaisAcentos(e)
            e = e.toLowerCase().trim()
            if (input.includes(e)) {
                retorno = { type: 'success', input: inputOriginal, validation: 'reserved-words', match: 'Manipulados' }
            }
        });

        vacinas.forEach(e => {
            e = removeCaracteresEspeciaisAcentos(e)
            e = e.toLowerCase().trim()
            if (input.includes(e)) {
                retorno = { type: 'success', input: inputOriginal, validation: 'reserved-words', match: 'Vacinas' }
            }
        });

        duvidas.forEach(e => {
            e = removeCaracteresEspeciaisAcentos(e)
            e = e.toLowerCase().trim()
            if (input.includes(e)) {
                retorno = { type: 'success', input: inputOriginal, validation: 'reserved-words', match: 'Dúvidas' }
            }
        });

        if (retorno.type === 'success') {
            return retorno
        }

        // =====================================================================================
        // TESTA REGEX
        const matchesRegexList = Object.keys(matchesRegex)
        console.log(matchesRegex)

        matchesRegexList.forEach((e) => {

            if (matchesRegex[e].test(input)) {
                retorno = { type: 'success', input: input, validation: 'Regex', match: e }
            }
        });

        // =====================================================================================
        // RETORNO FINAL
        return retorno;



    } catch (error) {
        return { type: 'error', input: `ERROR: ${error}`, validation: 'no-icebreaker' }
    }
}