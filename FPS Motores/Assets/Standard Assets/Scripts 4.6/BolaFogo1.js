#pragma strict

var forca : float;
var materialNovo : Material;
var tempo : float;

function Start () {
	
	
}

function Update () {

	tempo += 1 * Time.deltaTime;
	
	forca += 500 * Time.deltaTime;
	
	if(tempo >= 3){
		var novoObj : GameObject;		
		novoObj = GameObject.CreatePrimitive(PrimitiveType.Sphere);
		novoObj.name = "BolaDeFogo";
		novoObj.transform.position = transform.position;
		novoObj.transform.rotation = transform.rotation;
		novoObj.transform.localScale = Vector3(7, 7, 7);
		novoObj.GetComponent.<Renderer>().material = materialNovo;
		novoObj.GetComponent.<Collider>().isTrigger = true;
		novoObj.AddComponent(Rigidbody);
		//novoObj.AddComponent(DestroiObj);
		forca = Mathf.Clamp(forca, 5000, 10000);
		novoObj.GetComponent.<Rigidbody>().AddRelativeForce(Vector3(0, 0, -forca));
		tempo = 0;
	}
	
}