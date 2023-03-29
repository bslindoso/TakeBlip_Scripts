let input = "teste digital dbot";

let responseValidCPF = JSON.stringify({
  nomeDependente: "TESTE DIGITAL BOT",
  cartaoAssociado: false,
});

console.log(run(input, responseValidCPF));

function run(input, responseValidCPF) {
  try {
    responseValidCPF = JSON.parse(responseValidCPF);
    const nomeInputado = input.toUpperCase();
    const nomeResponse = responseValidCPF.nomeDependente.toUpperCase();

    return (nomeInputado === nomeResponse) ? "MATCH NOME OK" : "MATCH NOME FAIL"

  } catch (e) {
    return `ERROR: ${responseValidCPF}`
  }
}
