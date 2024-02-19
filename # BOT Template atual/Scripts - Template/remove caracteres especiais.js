/////////////////////////////////////////////
// FUNÇÕES AUXILIARES
/////////////////////////////////////////////
function removeCaracteresEspeciaisAcentos(texto) {	
	texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	return texto
}