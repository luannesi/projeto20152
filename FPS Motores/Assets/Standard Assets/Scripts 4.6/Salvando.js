#pragma strict

var salvando1 : GameObject;
var salvando2 : GameObject;
var salvando3 : GameObject;
var posicaoSalva : Vector3;
var posicaoSalvaDirecao : float;

function Start () {

}

function Update () {
	

}

function OnTriggerEnter(colisao : Collider){
											
	var nome : String;
	nome = colisao.gameObject.name;
	
	if(nome == "Salvando1"){	
		posicaoSalva = salvando1.transform.position;
		posicaoSalvaDirecao = salvando1.transform.rotation.y;
	}
	
	if(nome == "Salvando2"){	
		posicaoSalva = salvando2.transform.position;
	}
	
	if(nome == "Salvando3"){	
		posicaoSalva = salvando3.transform.position;
		posicaoSalvaDirecao = salvando1.transform.rotation.y;
	}
	
	if(nome == "MorteQueda"){	
		transform.position = posicaoSalva;
		transform.rotation.y = posicaoSalvaDirecao;
	}
	
	if(nome == "EsmagadorD"){	
		transform.position = posicaoSalva;
		transform.rotation.y = posicaoSalvaDirecao;
	}
	
	if(nome == "EsmagadorE"){	
		transform.position = posicaoSalva;
		transform.rotation.y = posicaoSalvaDirecao;
	}
	
	if(nome == "Rato"){	
		transform.position = posicaoSalva;
		transform.rotation.y = posicaoSalvaDirecao;
	}
			
}
