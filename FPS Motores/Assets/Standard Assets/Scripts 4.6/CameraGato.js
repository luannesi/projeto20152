#pragma strict

var player : GameObject;
var modoCamera : int;

function Start () {

	player = GameObject.Find("GATO1_bones3");
	modoCamera = 1;
}

function LateUpdate () {

	if(modoCamera == 1){

		transform.position.z = player.transform.position.z -5;
		transform.eulerAngles.y = player.transform.eulerAngles.y;
		//transform.position.y = olhoCamera.transform.position.y + 2;
		transform.rotation = player.transform.rotation;
	}

}