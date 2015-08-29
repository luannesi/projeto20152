#pragma strict

var tempo_atual : float;
var tempo_destroi : float = 3;

function Start () {

}

function Update () {

	tempo_atual += Time.deltaTime;
	
	if(tempo_atual >= tempo_destroi){
		
		Destroy(gameObject);
	}

}

function OnTriggerEnter(colisao : Collider){
											
	var nome : String;
	nome = colisao.gameObject.name;
	
	if(nome == "Parede4b"){	
		Destroy(gameObject);
	}
	
	if(nome == "Rato"){	
		Destroy(gameObject);
	}
	
}