import Header from "../components/header/page"
import LoboPreview from '../components/cards/maincard/loboCard'
import styles from "./page.module.css"
import axios from "axios"

interface Paginacao{
  searchParams: {page?: string}
}


export default async function Home({searchParams} : Paginacao) {
  const currentPage = Number(searchParams.page) || 1;
  const response = await fetch('http://localhost:3001/lobinhos', { cache: 'no-store' });
  const lobos = await response.json();
  
  const itemsPerPage = 6;
  const totalPages = Math.ceil(lobos.length / itemsPerPage);
  

  return (
   <>
   
    <main className={styles.main}>
      <div className={styles.pageContainer}>
        <LoboPreview totalPages={totalPages} lobos={lobos}/>
      </div>
    </main>

   
   
   </>
  );
}
