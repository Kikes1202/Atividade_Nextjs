import styles from "./style.module.css" 
import Image from 'next/image';
import Link from 'next/link';




export default function Header(){


    return(
        <>
        
            <header className={styles.headerContainer}>
                <Link href='/'>
                <Image
                    className={styles.logoLobo}
                    src="/logolobo.svg"
                    alt="Logo lobo"
                    width={1}
                    height={1}
                />
                </Link>
                <h1>Central de Adoção de Lobinhos</h1>
            </header>
    

        </>
    )
}