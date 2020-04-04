var msgTela = [
	'Essa é a história de um homem que descobriu o sentido da vida.',
	'Adônis era um agricultor que vivia com sua família em uma região afastada da capital do império em que vivia.',
	'Um céu sem nuvens permitia que o dourado do trigo brilhasse de modo excepcional.',
	'Mas naquele dia. O acaso pousou sobre o destino de Adônis.',
	'Um mensageiro trazia a convocação. Adônis iria para a guerra.',
	'Se uniu às forças do império para enfrentar a ameaça de uma nova potência que almejava tomar as terras do leste.',
	'Em alguns poucos meses, estava familiarizado com seu novo modo de viver, partiu para a primeira batalha.',
	'Do outro lado do campo, as forças do inimigo se preparam para aniquilar as do império.',
	'O terror do fim súbito consome Adônis, mas não há para onde fugir.',
	'Pensou em sua família, como fazia constantemente desde que foi convocado.',
	'Dessa vez, exposto a morte eminente. Como se o espírito de Adônis se iluminasse.',
	'Percebeu finalmente que não iria permitir que sua vida chegasse ao fim alí, sua família esperava em casa, ele precisava voltar.',
	'Lutou então bravamente essa e muitas outras batalhas. Três longos anos e a guerra terminou com a vitória do império.',
	'O acaso acompanhou todas as batalhas. Adônis pôde regressar vivo, muitos amigos não.',
	'Voltando para a sua casa, Adônis foi recebido com abraços e lágrimas.',
	'Nunca mais seria o mesmo. A guerra fere o corpo, a mente e a emoção.',
	'Adônis, o agricultor agora soldado ferido.',
	'Carrega as marcas da guerra em sí. Hoje mais determinado que nunca, luta pela vida.',
	'Pela família que ele ama.'];

var tempoTrans = 4200;

document.querySelector("#botaoMenuTelaCentral1").onclick = function() {
	//document.querySelector("#tela2").innerHTML = 'Essa é a história de um homem que descobriu o sentido da vida.';
	//document.getElementById("tela2").innerHTML = 'Essa é a história de um homem que descobriu o sentido da vida.';
	document.getElementById("botaoMenuTelaCentral1").style.display = 'none';
	//document.getElementById("tela").style.display = 'none';
	//document.getElementById("tela2").style.opacity = 1;
	//setTimeout(function(){ document.getElementById("tela2").style.opacity = 0; }, 4000);
	
	//msgTelaFadeInOut("tela2","tela",msgTela[0]);
	//setTimeout(function(){ msgTelaFadeInOut("tela","tela2",msgTela[1]); }, 2*tempoTrans);
	//setTimeout(function(){ msgTelaFadeInOut("tela2","tela",msgTela[2]); }, 4*tempoTrans);
	//setTimeout(function(){ msgTelaFadeInOut("tela","tela2",msgTela[3]); }, 6*tempoTrans);
	//setTimeout(function(){ msgTelaFadeInOut("tela2","tela",msgTela[4]); }, 8*tempoTrans);
	msgTelaEmSeq(1,0);
	msgTelaEmSeq(2,1);
	msgTelaEmSeq(1,2);
	msgTelaEmSeq(2,3);
	msgTelaEmSeq(1,4);
	msgTelaEmSeq(2,5);
	msgTelaEmSeq(1,6);
	msgTelaEmSeq(2,7);
	msgTelaEmSeq(1,8);
	msgTelaEmSeq(2,9);
	msgTelaEmSeq(1,10);
	msgTelaEmSeq(2,11);
	msgTelaEmSeq(1,12);
	msgTelaEmSeq(2,13);
	msgTelaEmSeq(1,14);
	msgTelaEmSeq(2,15);
	msgTelaEmSeq(1,16);
	msgTelaEmSeq(2,17);
	msgTelaEmSeq(1,18);
	
}
function msgTelaFadeInOut(idTelaOn,idTelaOff,msg) {
	document.getElementById(idTelaOff).style.opacity = 0;
	setTimeout(function(){ 
		document.getElementById(idTelaOn).innerHTML = msg;
		document.getElementById(idTelaOn).style.opacity = 1;
	}, tempoTrans);
}
function msgTelaEmSeq(tipo,indexMsg) {
	var idTelaIn;
	var idTelaOut;
	if(tipo===1){
		idTelaIn = 'tela2';
		idTelaOut = 'tela';
		//setTimeout(function(){ msgTelaFadeInOut("tela2","tela",msgTela[indexMsg]); }, 2*indexMsg*tempoTrans);
	}
	else if(tipo===2){
		idTelaIn = 'tela';
		idTelaOut = 'tela2';
		//setTimeout(function(){ msgTelaFadeInOut("tela","tela2",msgTela[indexMsg]); }, 2*indexMsg*tempoTrans);
	}
	setTimeout(function(){ msgTelaFadeInOut(idTelaIn,idTelaOut,msgTela[indexMsg]); }, 2*indexMsg*tempoTrans);
}
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
//Com esses valores nas variáveis de botão. A primeira mensagem de tela será a do início do jogo: "Não surte na quarentena!!", 
//se for qualquer número menor que a quantidade total de mensagens, a primeira mensagem de tela estará errada.
var botao1MensagemAtual = 32;
var botao2MensagemAtual = 32;
var botao3MensagemAtual = 32;
//O valor dessa variável deve ser 50 para iniciar o jogo no status neutro.
var barraStatus = 50;

//A parte abaixo define o que acontece quando se clica em cada botão.
document.querySelector("#botaoInteracao1").onmouseover = function() {
	//document.getElementById("botaoInteracao1").style.color = "red";
	document.querySelector("#botaoInteracao1").innerHTML = '<b>NADA PRA VER <span id="cor">AQUI</span>, CIRCULANDO, CIRCULANDO</b>';
	document.getElementById("cor").style.color = "red";
}
document.querySelector("#botaoInteracao1").onmouseout = function() {
	document.querySelector("#botaoInteracao1").innerHTML = 'Jogar!';
}
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
//A função abaixo tira uma carta aleatória que pode ser repetitida.
function tirarCartas() {
	botao1MensagemAtual = Math.floor((Math.random() * 32));
	document.querySelector("#botaoInteracao1").innerHTML = mensagemBotoes[botao1MensagemAtual];
	botao2MensagemAtual = Math.floor((Math.random() * 32));
	document.querySelector("#botaoInteracao2").innerHTML = mensagemBotoes[botao2MensagemAtual];
	botao3MensagemAtual = Math.floor((Math.random() * 32));
	document.querySelector("#botaoInteracao3").innerHTML = mensagemBotoes[botao3MensagemAtual];
}
//A função abaixo atualiza o Status. 
function atualizarStatus(numeroBotao) {
	//O cálculo da variável "a" abaixo pega o índice da array que guarda a msg atual do botão e divide pela quantidade total de msg's de botão para obter um número entre 0 e 1. 
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
//A função abaixo é utilizada na função acima, ela calcula o novo valor numérico e o nome correspondente a essa quantidade de pontos.
function calculaStatus(valorA){
	//Se o valor for maior que 1, significa que é a mensagem inicial do jogo.
	if(valorA>1){
		document.querySelector("#status").innerHTML = "Status: Neutro ("+barraStatus+")";
	}
	//Se o valor é maior que 0.5 significa que são as mensagens que tiram pontos. Então tiramos 0.5
	else if(valorA>0.5){
		valorA=Math.floor((valorA-0.5)*(-8));
		barraStatus=barraStatus+valorA;
	}
	else{
		valorA=Math.floor(valorA*8);
		barraStatus=barraStatus+valorA;
	}
	//O cálculo abaixo é igual ao valor máximo da barra de status dividido pela quantidade de mensagens de status.
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
//A função abaixo atualiza a mensagem da Tela.
function atualizaMensagemTela(indiceMsgBotao){
	//O cáculo abaixo é igual ao índice da mensagem do botão dividido pelo número de mensagens de tela. 
	indiceMsgBotao = Math.floor(indiceMsgBotao/4);
	document.querySelector("#tela").innerHTML = mensagemTela[indiceMsgBotao];
}