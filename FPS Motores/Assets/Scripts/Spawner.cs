using UnityEngine;
using System.Collections;
using System.Collections.Generic;
public enum Waves { Wave1, Wave2, Wave3 }

public class Spawner : MonoBehaviour {

	
	public GameObject[] SpawnPoint;
	//public GameObject[] randomEnemy;


	public int randomSpawner;
    
	public int randEnemy;
    public Waves Wave;
	
	public List <int> usedRange = new List <int>();

	public bool spawner = false;

	//public int Wave=5;

	public float WaitTime = 1;


	public float WaveCoolDown = 20;


	public bool pressTrigger; 


	public Vector3 point;
	public Rect rect;
	public Vector2 offset;
	public Font myFont;
	public Transform hudWave;
	private int contWave=5;

	private bool displayMessage;
	private bool loadingMessage;
	void Start ()
	{

		StartCoroutine ("SpawnWaves");
		point = Camera.main.WorldToScreenPoint(hudWave.transform.position);

	}
	
	IEnumerator SpawnWaves ()
	{
		yield return new WaitForSeconds (WaitTime);///PODE SER OUTRO VALOR AQUI

		while (true)
		{
			for (int i = 3; i < contWave; i+=2)
			{
				pressTrigger = false;
				loadingMessage = false;
				displayMessage = true;
				randEnemy = Random.Range(0, 3);//Selecionando um inimigo aleatorio
				randomSpawner= Random.Range(0, 7);//selecionando um spawnpoint aleatorio

				GameObject MyBuild = SpawnPoint[randomSpawner] as GameObject;
				
				//GameObject myObj = Instantiate (randomEnemy [randEnemy]) as GameObject;
				
				//myObj.transform.localPosition = MyBuild.transform.position;
				yield return new WaitForSeconds (WaitTime);

			}

			pressTrigger = true;
			displayMessage = false;
			loadingMessage = true;
			yield return new WaitForSeconds (WaveCoolDown);
			//Wave = Wave+1;
			contWave = contWave + 3;


		}
	}
	


	void OnGUI () {
		if (displayMessage) {
			GUI.contentColor = Color.green;
			GUI.skin.font = myFont;
			GUI.skin.label.fontSize = 15;

			//GUI.Label(new Rect(point.x-30,Screen.height - point.y-12, 100f, 100f), "Wave "+Wave);

		}

		if (loadingMessage) {

			GUI.contentColor = Color.green;
			GUI.skin.font = myFont;
			GUI.skin.label.fontSize = 15;

			GUI.Label(new Rect(point.x-30,Screen.height - point.y-12,100f,1000f), "Loading");
		}
	}

	//public int getWave(){


		//return Wave;
	//}
	
	
	
	
}
