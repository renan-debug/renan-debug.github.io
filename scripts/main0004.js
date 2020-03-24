var mensagemBotoes = [
	"Apagar arquivos antigos inúteis",
	"Imaginar uma história divertida",
	"Jogar no computador", 
	"Meditar",
	"Pensar no pior",
	"Só comer besteira",
	"Quebrar as coisas em casa",
	"Chorar com medo"];
var mensagemTela = [
	"Você se sente um pouquinho melhor", 
	"Você se sente um pouco melhor", 
	"Você se sente melhor",
	"Você se sente muito melhor",
	"Você se sente um pouquinho pior",
	"Você se sente um pouco pior",
	"Você se sente pior",
	"Você se sente muito pior",
	"Não surte na quarentena!!"];
var mensagemStatus = [
	"Nervoso", 
	"Insatisfeito", 
	"Neutro",
	"Satisfeito"];

var botao1MensagemAtual = 8;
var botao2MensagemAtual = 8;
var botao3MensagemAtual = 8;
var barraStatus = 50;

document.querySelector("#botaoInteracao1").onclick = function() {
	atualizarStatus(1);
	document.querySelector("#tela").innerHTML = mensagemTela[botao1MensagemAtual];
	tirarCartas();
}
document.querySelector("#botaoInteracao2").onclick = function() {
	atualizarStatus(2);
	document.querySelector("#tela").innerHTML = mensagemTela[botao2MensagemAtual];
	tirarCartas();
}
document.querySelector("#botaoInteracao3").onclick = function() {
	atualizarStatus(3);
	document.querySelector("#tela").innerHTML = mensagemTela[botao3MensagemAtual];
	tirarCartas();
}
function tirarCartas() {
	botao1MensagemAtual = Math.floor((Math.random() * 8));
	document.querySelector("#botaoInteracao1").innerHTML = mensagemBotoes[botao1MensagemAtual];
	botao2MensagemAtual = Math.floor((Math.random() * 8));
	document.querySelector("#botaoInteracao2").innerHTML = mensagemBotoes[botao2MensagemAtual];
	botao3MensagemAtual = Math.floor((Math.random() * 8));
	document.querySelector("#botaoInteracao3").innerHTML = mensagemBotoes[botao3MensagemAtual];
}
function atualizarStatus(numeroBotao) {
	if(numeroBotao === 1){
		var a=(botao1MensagemAtual+1)/8;
		calculaStatus(a);
	}
	else if(numeroBotao === 2){
		var a=(botao2MensagemAtual+1)/8;
		calculaStatus(a);
	}
	else{
		var a=(botao3MensagemAtual+1)/8;
		calculaStatus(a);
	}
}
function calculaStatus(valorA){
	if(valorA>1){
		document.querySelector("#status").innerHTML = "Status: Neutro ("+barraStatus+")";
	}
	else if(valorA>0.5){
		valorA=(valorA-0.5)*(-8);
		barraStatus=barraStatus+valorA;
	}
	else{
		valorA=valorA*8;
		barraStatus=barraStatus+valorA;
	}
	if(barraStatus>=100){
		alert("Você ganhou!");
		location.reload();
	}
	else if(barraStatus>=75){
		document.querySelector("#status").innerHTML = "Status: "+mensagemStatus[3]+" ("+barraStatus+")";
	}
	else if(barraStatus>=50){
		document.querySelector("#status").innerHTML = "Status: "+mensagemStatus[2]+" ("+barraStatus+")";
	}
	else if(barraStatus>=25){
		document.querySelector("#status").innerHTML = "Status: "+mensagemStatus[1]+" ("+barraStatus+")";
	}
	else if(barraStatus>0){
		document.querySelector("#status").innerHTML = "Status: "+mensagemStatus[0]+" ("+barraStatus+")";
	}
	else{
		alert("Você surtou!");
		location.reload();
	}
}