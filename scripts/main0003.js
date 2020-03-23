var lugar;

document.querySelector("#mansao").onclick = function() {
	if(lugar === 2){
		alert('Você ganhou!! Isso sim é uma cabana!!');
		resetar();
	}
    else{
		alert('Isso definitivamente não é uma cabana. Você perdeu.');
		resetar();
	}
}
document.querySelector("#floresta").onclick = function() {
	if(lugar === 1 || lugar === 2){
		resetar();
	}
	else{
		document.getElementById("mansao").src = "images/floresta.jpg";
		alert('Não tem cabana aqui. Você perdeu. Mas é um lugar bonito, relaxa e curte a quarentena.');
		document.querySelector("h1").innerHTML = "Bem vindo a floresta nas montanhas Beskid Maly, Polônia!";
		ondeFoi(1);
		lugar = 1;
	}
}
document.querySelector("#lago").onclick = function() {
	if(lugar === 1 || lugar === 2){
		alert('Boa escolha! Mas você perdeu.');
		resetar();
	}
	else{
		document.getElementById("mansao").src = "images/cabana.jpg";
		alert('Bom dia para pescar não é? heh heh');
		document.querySelector("h1").innerHTML = "Parece que tem um lugar confortável para descansarmos depois da pesca! Não é?";
		ondeFoi(2);
		lugar = 2;
	}
}
document.querySelector("#nao").onclick = function() {
    alert('Tá. Você perdeu.');
	resetar();
}
function ondeFoi(tipo) {
	document.querySelector("#floresta").innerHTML = "Voltar para a mansão";
	if(tipo === 1){
		document.querySelector("#lago").innerHTML = "Descansar por aqui";
	}
	if(tipo === 2){
		document.querySelector("#lago").innerHTML = "Ir pescar!";
	}
}
function resetar() {
	document.getElementById("mansao").src = "images/mansao.jpg";
	document.querySelector("#lago").innerHTML = "Procurar no lago";
	document.querySelector("#floresta").innerHTML = "Procurar na floresta";
	document.querySelector("h1").innerHTML = "Desafio: Clique na cabana!";
	lugar = 0;
}