"use client"


import styles from "./style.module.css"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";


interface Lobo {
  id: number;
  nome: string;
  idade: string;
  imagem: string;
  adotado: boolean;
}

interface Props {
  totalPages: number;
  lobos: Lobo[];
}


export default function LoboPreview({totalPages, lobos} : Props ){
  const cardsPerPage = 6;
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const [filtro, setFiltro] = useState<'todos' | 'adotados' | 'semDono'>('todos');
  const [Lobos, setLobos] = useState<Lobo[]>(lobos)
  const currentLobos =  Lobos.slice(startIndex, startIndex + cardsPerPage);



  function getPages() {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return pages;
  }



  function handleFiltro(novoFiltro: 'todos' | 'adotados' | 'semDono') {
    if (filtro === novoFiltro) {
        setFiltro('todos');
        setLobos(lobos);
    } else {
        setFiltro(novoFiltro);
        if (novoFiltro === 'adotados') setLobos(lobos.filter(l => l.adotado));
        if (novoFiltro === 'semDono') setLobos(lobos.filter(l => !l.adotado));
        if (novoFiltro === 'todos') setLobos(lobos);
      }
    }
  
    return(
      <>
      {currentLobos.map((lobo) => (
        <div className={styles.loboContainer}>
          <div className={styles.fotoLobo}><img src={lobo.imagem} alt="foto lobo" /></div>
          <div className={styles.infoLobo}>
            <div id='button'className={styles.loboNome}>{lobo.nome}</div>
            <div className={styles.loboIdade}>{lobo.idade}</div>
            <div className={styles.loboStatus}>{lobo.adotado ? 'Lobo já adotado ❤️' : 'Sem dono 🥺'}</div> 
            <div className={styles.loboMais}>
              <Link className={styles.clicavel} href={`/pages/${lobo.id}`}><h3>Mais Informações</h3></Link>
            </div> 
          </div>
        
        </div>
      ))}
      {totalPages > 1 && (
              <><div className={styles.pagination}>
            <Link href={`/?page=${currentPage - 1}`}
              className={currentPage === 1 ? styles.disabled : styles.pageBtn}>
              ← Anterior
            </Link>

            {getPages().map((page) => (
              <Link key={page} href={`/?page=${page}`}
                className={`${styles.pageBtn} ${currentPage === page ? styles.activePage : ""}`}>
                {page}
              </Link>
            ))}

            <Link href={`/?page=${currentPage + 1}`}
              className={currentPage === totalPages ? styles.disabled : styles.pageBtn}>
              Próximo →
            </Link>

            <button className={filtro === "adotados" ? styles.btnAtivo : styles.adotados} onClick={() => handleFiltro('adotados')}>Adotados</button>
            <button className={filtro === "semDono" ? styles.btnAtivo : styles.semDono} onClick={() => handleFiltro('semDono')}>Sem Dono</button>
            <button className={filtro == "todos" ? styles.btnAtivo : styles.todos} onClick={() => handleFiltro('todos')}>Todos</button>

          </div>

          
          </>
          )}

    </>

    
  )
}