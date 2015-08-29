#pragma strict

function Start () {

}

function Update () {

}

function OnControllerColliderHit (colisao : ControllerColliderHit) {

	var nome : String;
	nome = colisao.gameObject.name;	
	
	if (colisao.rigidbody) {		
		var empurrar : Vector3;
		empurrar = Vector3(0, 0, 300);
		empurrar = transform.TransformDirection(empurrar);
		colisao.rigidbody.AddForce(empurrar);
	}
}