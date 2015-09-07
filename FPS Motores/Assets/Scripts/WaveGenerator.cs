using UnityEngine;
using System.Collections;
using System.Collections.Generic;

[System.Serializable]
public class WaveGenerator : MonoBehaviour
{
    [Header("Tempo entre uma wave e outra")]
    public float WaveTime;
    [Header("Quantidade de Waves")]
    public List<Wave> waves;
    private Wave m_CurrentWave;
    public Wave CurrentWave { get { return m_CurrentWave; } }
    private float m_DelayFactor = 1.0f;
    
    [Header("Locais onde os monstros vão dar spawn")]
    public List<Transform> SpawnPoints;
  
    private int SpawnLocation; // Local onde será spawnado após o Rand

    IEnumerator SpawnLoop()
    {
        bool Start = true;
        
        m_DelayFactor = 1.0f;
        while (Start == true)
        {
            foreach (Wave W in waves) //Para cada quantidade de Waves
            {
                m_CurrentWave = W;
                foreach (WaveEnemies A in W.Monsters) //Para cada inimigo definido na Wave
                {
                    if (A.delay > 0)
                        yield return new WaitForSeconds(A.delay * m_DelayFactor); // Se tiver delay para dar spawn, espera
                    if (A.prefab != null && A.Count > 0)
                    {
                        for (int i = 0; i < A.Count; i++) // Para cada quantidade de inimigos definidos na Wave
                        {
                            SpawnLocation = Random.Range(0, SpawnPoints.Count); //Define Um numero aleatório até a quantidade de spawnpoints
                            GameObject Monster = Instantiate(A.prefab.gameObject);//Instancia o Monstro
                            Monster.transform.position = SpawnPoints[SpawnLocation].transform.position; //Joga ele na posição aleatória
                        }
                    }
                }
                //yield return null;  // Previne que o jogo crashe se todos delays forem 0
                yield return new WaitForSeconds (WaveTime);
            }
   
            yield return null;  // Previne que o jogo crashe se todos delays forem 0
            Start = false;
        }
    }
    void Start()
    {
        FindSpawnPoint();
        StartCoroutine(SpawnLoop());
    }

    IEnumerator Wait(float time)
    {
        yield return new WaitForSeconds(time * Time.time);

    }

    void FindSpawnPoint()
    {

        foreach (GameObject Spawn in GameObject.FindGameObjectsWithTag("Spawn"))
        {
            SpawnPoints.Add(Spawn.gameObject.transform);

        }
    }



}
