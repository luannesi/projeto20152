#pragma strict

var ativaPorta : AbrePorta;
var materialVerde : Material;
var interruptor : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerStay(colisao : Collider){

	var nome : String; 
	nome = colisao.gameObject.name;
	
	if(nome=="Interruptor"){
		ativaPorta.abrePorta = true;
		interruptor.GetComponent.<Renderer>().material = materialVerde;
	}

}