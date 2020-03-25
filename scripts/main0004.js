var mensagemBotoes = [
	'Aprender algo novo',
	'Começar um novo projeto',
	'Adiantar trabalho',
	'Apagar arquivos antigos inúteis',
	'Jogar fora coisas que não usa',
	'Organizar a bagunça',
	'Ler ',
	'Imaginar uma história divertida',
	'Desligar a tv',
	'Assistir filmes',
	'Assistir séries',
	'Jogar no computador ',
	'Cozinhar',
	'Retomar contato com amigos',
	'Conversar nas redes sociais',
	'Meditar',
	'Ficar de pijama o dia todo',
	'Passar o dia na cama',
	'Ficar no escuro',
	'Pensar no pior',
	'Ir no supermercado',
	'Dormir demais',
	'Deixar de tomar banho',
	'Só comer besteira',
	'Comprar toneladas de papel higiênico',
	'Sair para uma caminhada',
	'Espalhar fake news',
	'Quebrar as coisas em casa',
	'Reclamar por não poder sair',
	'Combinar um churrasco com a galera',
	'Criar intriga com as pessoas de casa',
	'Chorar com medo'];
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

var botao1MensagemAtual = 32;
var botao2MensagemAtual = 32;
var botao3MensagemAtual = 32;
var barraStatus = 50;

document.querySelector("#botaoInteracao1").onclick = function() {
	atualizarStatus(1);
	atualizaMensagemTela(botao1MensagemAtual);
	tirarCartas();
}
document.querySelector("#botaoInteracao2").onclick = function() {
	atualizarStatus(2);
	atualizaMensagemTela(botao2MensagemAtual);
	tirarCartas();
}
document.querySelector("#botaoInteracao3").onclick = function() {
	atualizarStatus(3);
	atualizaMensagemTela(botao3MensagemAtual);
	tirarCartas();
}
function tirarCartas() {
	botao1MensagemAtual = Math.floor((Math.random() * 32));
	document.querySelector("#botaoInteracao1").innerHTML = mensagemBotoes[botao1MensagemAtual];
	botao2MensagemAtual = Math.floor((Math.random() * 32));
	document.querySelector("#botaoInteracao2").innerHTML = mensagemBotoes[botao2MensagemAtual];
	botao3MensagemAtual = Math.floor((Math.random() * 32));
	document.querySelector("#botaoInteracao3").innerHTML = mensagemBotoes[botao3MensagemAtual];
}
function atualizarStatus(numeroBotao) {
	if(numeroBotao === 1){
		var a=(botao1MensagemAtual+1)/32;
		calculaStatus(a);
	}
	else if(numeroBotao === 2){
		var a=(botao2MensagemAtual+1)/32;
		calculaStatus(a);
	}
	else{
		var a=(botao3MensagemAtual+1)/32;
		calculaStatus(a);
	}
}
function calculaStatus(valorA){
	if(valorA>1){
		document.querySelector("#status").innerHTML = "Status: Neutro ("+barraStatus+")";
	}
	else if(valorA>0.5){
		valorA=Math.floor((valorA-0.5)*(-8));
		barraStatus=barraStatus+valorA;
	}
	else{
		valorA=Math.floor(valorA*8);
		barraStatus=barraStatus+valorA;
	}
	indiceMsgStatus=Math.floor(barraStatus/25);
	if(indiceMsgStatus>=4){
		alert("Você ganhou!");
		location.reload();
	}
	else if ((indiceMsgStatus<4) &&(indiceMsgStatus>=0)){
		document.querySelector("#status").innerHTML = "Status: "+mensagemStatus[indiceMsgStatus]+" ("+barraStatus+")";
	}
	else{
		alert("Você surtou!");
		location.reload();
	}
}
function atualizaMensagemTela(indiceMsgBotao){
	indiceMsgBotao = Math.floor(indiceMsgBotao/4);
	document.querySelector("#tela").innerHTML = mensagemTela[indiceMsgBotao];
}