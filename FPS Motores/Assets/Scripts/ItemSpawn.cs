using UnityEngine;
using System.Collections;

public class ItemSpawn : MonoBehaviour {

    
    private int ItemCount;
    [Header("Quantidade de itens ao mesmo tempo")]
    public int TotalItens;
    public GameObject Ammo;
    public GameObject Life;
    private GameObject[] SpawnPoints;
    [Header("Tempo de Respawn dos itens que faltam")]
    public float RespawnTime;
    private bool start;

	// Use this for initialization
	void Start () {
        start = true;
        SpawnPoints = GameObject.FindGameObjectsWithTag("SpawnItem");
	}
	
	// Update is called once per frame
	void Update () {
	    if (start == true)
        {

            StartCoroutine(SpawnItens(RespawnTime));

        }
	}

    IEnumerator SpawnItens(float time)
    {
        if (start == true)
        {
            ItemCount = GameObject.FindGameObjectsWithTag("Ammo").Length;
            ItemCount += GameObject.FindGameObjectsWithTag("Life").Length;
            if (ItemCount < TotalItens) // Se tiver menos que o total
            {
                int items = TotalItens - ItemCount;
                for (int i = 0; i < items; i++)
                {
                    int ItemRand = Random.Range(1, 3); //Decide se vai ser Munição ou Vida
                    Debug.Log(ItemRand);
                    int PosRand = Random.Range(0, SpawnPoints.Length); // Decide qual Posição vai largar o item;
                    if (ItemRand == 1)
                    {
                        GameObject Item = Instantiate(Ammo) as GameObject;
                        Item.transform.position = SpawnPoints[PosRand].transform.position;
                    }
                    if (ItemRand == 2)
                    {
                        GameObject Item = Instantiate(Life) as GameObject;
                        Item.transform.position = SpawnPoints[PosRand].transform.position;
                    }
                }
                    
            }
            start = false;
        }
        yield return new WaitForSeconds(time);
        start = true;
    }
}
