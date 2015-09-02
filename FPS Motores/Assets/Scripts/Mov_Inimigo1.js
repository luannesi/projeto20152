#pragma strict

var alvo : GameObject; // Objeto para perseguir
var agent_obj : NavMeshAgent; // Variavel para guardar o navmesh
var player_obj : GameObject; // Objeto player
var dist : float = 0; // Variavel para guardar a diferença de distancia
var aux_dist : float;

function Start () {
	agent_obj = GetComponent.<NavMeshAgent>();
}

function Update () {
	//calcula a distancia
	aux_dist = Vector3.Distance(transform.position, player_obj.transform.position);
	//Define onde tem que chegar
	if(dist >= aux_dist){
		agent_obj.SetDestination(player_obj.transform.position);
	}else{
		agent_obj.SetDestination(alvo.transform.position);
	}
}