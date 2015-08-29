#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(colisao : Collider){
											
	var nome : String;
	nome = colisao.gameObject.name;
	
	if(nome == "BolaDeFogo"){	
		Destroy(gameObject);
	}
	
}