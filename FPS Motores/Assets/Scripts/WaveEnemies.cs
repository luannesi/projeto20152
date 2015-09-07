using UnityEngine;
using System.Collections;
using System.Collections.Generic;

[System.Serializable]
public class WaveEnemies
{
    [Header("Tempo de Spawn para cada monstro")]
    public float delay;
    public Transform prefab;
    [Header("Quantidade de monstros deste tipo")]
    public int Count;
}