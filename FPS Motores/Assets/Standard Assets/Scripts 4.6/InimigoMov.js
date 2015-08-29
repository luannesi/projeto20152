#pragma strict

var inimigo : CharacterController;
var forca : Vector3;
var velocidade : float;
var player : GameObject;
var estado : int = 1;
var estadoAnt : int;
var anima : Animator;
var velocidadeAtual : float;
var distanciaPlayer : float;
var posInicial : Vector3;
var tempoDesvia : float;

function Start () {

	inimigo = GetComponent(CharacterController);	
	
}

function Update () {

	distanciaPlayer = Vector3.Distance(transform.position, player.transform.position);
	
	velocidadeAtual = inimigo.velocity.magnitude;
	
	anima.SetFloat("Caminha", distanciaPlayer);
	
	if(estado == 1){
	
		forca = Vector3(0,0,0);		
		
		if(distanciaPlayer < 10){
			estado = 2;		
		}
	}
	
	if(estado == 2){		
		
		transform.LookAt(player.transform.position);
		
		transform.eulerAngles.x = 0;
		transform.eulerAngles.z = 0;
	
		forca = Vector3(0,0,velocidade);	
		
		if(distanciaPlayer > 15){
			estado = 1;
		
		}		
	}
	
	forca *= Time.deltaTime;
	
	forca = transform.TransformDirection(forca);
	
	inimigo.Move(forca);	

}