#pragma strict

var movimentoD : float;
var movimentoE : float;
var velocidade : float;
var esmagadorD : GameObject;
var esmagadorE : GameObject;

function Start () {

	movimentoD = 15;
	movimentoE = -15;
	
}

function Update () {

	if(esmagadorD){
		if(transform.position.x < movimentoD){
		
			transform.position.x += velocidade * Time.deltaTime;	
		}
		
		if(transform.position.x > 14){
		
			movimentoD = 3;
		}
		
		if(transform.position.x > movimentoD){
		
			transform.position.x -= velocidade * Time.deltaTime;	
		}

		if(transform.position.x < 3){
		
			movimentoD = 15;
		}
	}
	
	
	if(esmagadorE){
		if(transform.position.x > movimentoE){
		
			transform.position.x -= velocidade * Time.deltaTime;		
		}
		
		if(transform.position.x < -14){
		
			movimentoE = -3;
		}
		
		if(transform.position.x < movimentoE){
		
			transform.position.x += velocidade * Time.deltaTime;		
		}

		if(transform.position.x > -3){
		
			movimentoE = -15;
		}
	}
}