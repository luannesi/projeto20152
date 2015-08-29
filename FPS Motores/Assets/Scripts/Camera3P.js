#pragma strict

var cam : Camera;
var helmet : GameObject;

function Start () {
	
	
}

function Update () {

	if(Input.GetKeyDown(KeyCode.F1)){
		
		cam.depth = 0;
		helmet.active = false;
	}
	
	if(Input.GetKeyDown(KeyCode.F2)){
	
		cam.depth = 2;
		helmet.active = false;
	}
	
	if(Input.GetKeyDown(KeyCode.F3)){
	
		cam.depth = 0;
		helmet.active = true;
	}
}