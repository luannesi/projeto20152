#pragma strict

var abrePorta : AbrePortaFinal;

function Start () {

}

function Update () {

}

function OnTriggerEnter(colisao : Collider){
											
	var nome : String;
	nome = colisao.gameObject.name;
	
	if(nome == "Gato"){	
		abrePorta.abrePortaFinal = true;
	}
	
}