import styles from "../lobo-page/style.module.css"
import LoboMais from "../../../components/cards/loboMais/card-lobo"
import axios from "axios"
export default async function LoboPage({params}: {params: Promise<{ id: string}>}){
    const {id} = await params;
    const response = await axios.get(`http://localhost:3001/lobinhos/${id}`)
    const lobo = response.data

    return(
        
        <LoboMais lobo={lobo}/>
    )
}