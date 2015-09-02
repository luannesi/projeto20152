#pragma strict

var alvo : GameObject;
var agent_obj : NavMeshAgent;

function Start () {
	agent_obj = GetComponent.<NavMeshAgent>();
}

function Update () {
	
	agent_obj.SetDestination(alvo.transform.position);
}