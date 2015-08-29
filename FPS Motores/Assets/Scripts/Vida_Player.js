#pragma strict

var vida_max : float; // Quantidade maxima de vida
var vida_atual : float; // Quantidade atual de vida

function Start () {

}

function Update () {
	
	if(vida_atual > vida_max){
		vida_atual = vida_max;
	}
}
//Reduz quantidade de vida atual
function Dano_Vida(dano : float){
	vida_atual -= dano;
}
//Aumenta quantidade de vida atual
function Recupera_Vida(cura : float){
	vida_atual += cura;
}