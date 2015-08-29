#pragma strict

var forca : float;
var materialNovo : Material;
var tempo : float;
var arma : boolean;
function Start () {
	
	
}

function Update () {

	forca += 200 * Time.deltaTime;
	
	if(arma){
	
		if(Input.GetMouseButtonDown(0)){
			GetComponent.<AudioSource>().Play();
			var novoObj : GameObject;		
			novoObj = GameObject.CreatePrimitive(PrimitiveType.Sphere);
			novoObj.name = "BolaDeFogo";
			novoObj.transform.position = transform.position;
			novoObj.transform.rotation = transform.rotation;
			novoObj.transform.localScale = Vector3(0.3, 0.3, 0.3);
			novoObj.GetComponent.<Renderer>().material = materialNovo;
			novoObj.GetComponent.<Collider>().isTrigger = true;		
			novoObj.AddComponent(Rigidbody);
			novoObj.GetComponent.<Rigidbody>().useGravity = false;
			novoObj.AddComponent(DestruirFogo);
			forca = Mathf.Clamp(forca, 5000, 5000);
			novoObj.GetComponent.<Rigidbody>().AddRelativeForce(Vector3(0, 0, forca));
			
		}
	}
}

