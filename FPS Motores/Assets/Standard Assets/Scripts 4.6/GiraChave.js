#pragma strict

var chaveFinal : AbrePortaFinal;

function Start () {

}

function Update () {

	transform.eulerAngles.y += 50 * Time.deltaTime;
}

function OnTriggerEnter(colisao : Collider){
											
	var nome : String;
	nome = colisao.gameObject.name;
	
	if(nome == "Gato"){	
		transform.position = Vector3(1000,1000,1000);
		chaveFinal.comChave = true;
	}
	
}