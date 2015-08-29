#pragma strict

var abrePorta : boolean;
var velocMove : float;

function Start () {
	
	
}

function Update () {
	
	if(abrePorta){
	
		if(transform.position.y >= -2.26){
			
			transform.position.y -= velocMove * Time.deltaTime;
		}
	}
	
}