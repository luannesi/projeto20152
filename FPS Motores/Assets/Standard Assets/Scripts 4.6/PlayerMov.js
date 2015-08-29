#pragma strict

var player : CharacterController;
var forca : Vector3;
var velocidade : float;
var forcaEmpurra : Vector3;
var gravidade : float;
var pisaChao : boolean;
var pulo : float;
var animacao : Animator;
var velocidadeAtual : float;


function Start () {
	
	player = GetComponent(CharacterController);
	velocidade = 5;
	gravidade = 0.5;
	pulo = 0.3;
	animacao = GetComponent(Animator);
}

function Update () {

	transform.eulerAngles.y += 2 * Input.GetAxis("Horizontal");
	forca.z = Input.GetAxis("Vertical") * velocidade * Time.deltaTime;	
	
	if (!pisaChao) {
		forca.y -= gravidade * Time.deltaTime;
	}
	
	else {		
		forca.y = -1 * Time.deltaTime;
	}
	
	if (Input.GetKeyDown(KeyCode.Space) && pisaChao) {
		
		forca.y += pulo;
	}
	
	forcaEmpurra = transform.TransformDirection(forca);
	
	player.Move(forcaEmpurra);
	
	if (player.isGrounded) {
		pisaChao = true;
	}
	
	else {
		pisaChao = false;
	}
	velocidadeAtual = player.velocity.magnitude;
	
	animacao.SetFloat("Velocidade", velocidadeAtual);
}