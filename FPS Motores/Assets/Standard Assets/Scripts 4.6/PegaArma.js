#pragma strict

var lancaFogo : GameObject;
var arma : GameObject;
var pegouArma : boolean;
var atira : AtiraFogo;

function Start () {

}

function Update () {

	if(pegouArma){
		lancaFogo.transform.position = arma.transform.position;
		atira.arma = true;
	}

}
function OnTriggerEnter(colisao : Collider){
											
	var nome : String;
	nome = colisao.gameObject.name;
	
	if(nome == "BolaFogoLanca"){	
		pegouArma = true;
	}
	
}
