using UnityEngine;
using System.Collections;

public class Weapon : MonoBehaviour {

    [Tooltip("Velocidade de Disparo")]
    public float fireRate = 0;
    [Tooltip("Dano a ser Causado")]
    public float Damage = 10;
    [Tooltip("Colocar a bala a ser usada aqui")]
    public Rigidbody bullet;
    [Tooltip("Velocidade da Bala")]
    public float Speed = 100;
    [Tooltip("Quantidade máxima de bala que o player Carrega")]
    public int MaxAmmo = 300;
    [Tooltip("Quantidade permitida na agulha")]
    public int ClipSize = 30;
    [Tooltip("Quantidade atual de balas na agulha")]
    public int Ammo;
    [Tooltip("Quantidade total de balas com o player")]
    public int AmmoTotal;




    float timeToFire = 0;
    Transform firePoint;

	void Awake ()
    {
        firePoint = transform.FindChild("Firepoint");
        if(firePoint == null) // Teste para saber se tem o gameObject na arma nova
        {
            Debug.LogError("Não encontrou o FirePoint da Arma");
        }
        AmmoTotal = MaxAmmo;
        Ammo = ClipSize;
        AmmoTotal -= ClipSize;
	}
	

	void Update () 
    {
	    if(fireRate == 0) //Single Fire (Clicando)
        {
            if(Input.GetMouseButtonDown(0)){
                if (Ammo > 0)
                {
                    Shoot();
                }
                else
                {
                    Reload();
                }
            }
        }
        else
        {
            if(Input.GetMouseButton(0) && Time.time > timeToFire) // Automático (Segurando o botão)
            {
                if (Ammo > 0)
                {
                    timeToFire = Time.time + 1 / fireRate; //Delay
                    Shoot();
                }
                else
                {
                    Reload();
                }
            }
        }

        if (Input.GetKeyDown(KeyCode.R)){

            Reload();
        }



	}

    void Shoot()
    {
        Rigidbody clone = Instantiate(bullet, firePoint.position, firePoint.rotation) as Rigidbody; // Cria um Clone da bala
        clone.velocity = transform.TransformDirection(Vector3.forward * Speed); // Dispara na Velocidade setada
        Destroy(clone.gameObject, 3); //Destroy depois de 3 segundos (Para testes)
        Ammo -= 1; //Diminui um da Munição
    }

    void Reload()
    {
        if (Ammo < ClipSize)
        {
            if (AmmoTotal > 0) // Testa se possui Munição Reserva
            {

                if ((ClipSize - Ammo) < AmmoTotal) // Se for sobrar munição, faz o calculo
                {
                    AmmoTotal -= (ClipSize - Ammo);
                    Ammo += (ClipSize - Ammo);
                    
                }
                else //Se não sobrar, pega a munição total e coloca na agula
                {
                    Ammo += AmmoTotal;
                    AmmoTotal = 0;
                }
                
            }
        }

    }

}
