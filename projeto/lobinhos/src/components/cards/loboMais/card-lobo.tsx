'use client'

import { LoboData } from '@/types/loboData'
import styles from '../loboMais/style.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


export default function LoboMais({lobo} : {lobo: LoboData}){
    const loboInfo = lobo;
    const router = useRouter()

    async function handleAdotar(){
        const status = await axios.patch(`http://localhost:3001/lobinhos/${lobo.id}`,
            {
                adotado: true
            }
        )
        router.refresh();
    }


    function handleStatus(){
        if(!lobo.adotado){
            return(
                <button className={styles.loboAdotar} onClick={handleAdotar}>Adotar 🐺</button>
            )
        }else{
            return(
                <button className={styles.loboAdotarIndisponivel}>Indisponível</button>
            )
        }
    }

    return(
            <div className={styles.main}>
                <div className={styles.wrapper}>
                    <div className={styles.loboFoto}>
                        <img src={lobo.imagem} alt="Foto lobo" />
                    </div>
                    <div className={styles.loboInfo}>
                        <div id='button'className={styles.loboNome}>
                            <div style={{fontWeight: "1000"}}>Nome:</div>
                            <div>{lobo.nome}</div>
                        </div>
                        <div className={styles.loboIdade}>
                            <div style={{fontWeight: "1000"}}>Idade: </div>
                            <div>{`${lobo.idade} aninhos`}</div>
                        </div>
                        <div className={styles.loboStatus}>
                            <div style={{fontWeight: "1000"}}>Status: </div>
                            <div>{lobo.adotado ? 'Lobo já adotado ❤️' : 'Sem dono 🥺'}</div>
                        </div>
                        <div className={styles.loboDescricao}>
                            <div>{lobo.descricao}</div>
                        </div>

                        <div className={styles.loboAdotar}>
                            {handleStatus()}
                        </div>
                    </div>
                </div>
            </div>
    )
}