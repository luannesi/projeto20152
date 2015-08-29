#pragma strict

var abrePortaFinal : boolean;
var velocMove : float;
var chaveFinal : GameObject;
var tempo : float;
var comChave : boolean;

function Start () {
	
		
}

function Update () {
	
	if(comChave){
		if(abrePortaFinal){
			
			tempo += Time.deltaTime;
			
			chaveFinal.transform.position = Vector3(3.592, -8.54, 220.013);
			
			if(chaveFinal.transform.rotation.x > -90){
				chaveFinal.transform.eulerAngles.x -= 35 * Time.deltaTime;
			}
			
			if(tempo >= 2.7){
				if(transform.position.y >= -12.06){
					
					transform.position.y -= velocMove * Time.deltaTime;
				}
			}
		}		
	}
	
}