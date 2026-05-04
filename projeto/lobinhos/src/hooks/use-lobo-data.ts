'use client'


import {useQuery} from "@tanstack/react-query";
import axios from "axios";
const API_URL = "http://localhost:3001/lobinhos";
import type { LoboData } from "../types/loboData";


const fetchData = async(): Promise<LoboData[]> => {
    const response = await axios.get(API_URL);
    return response.data;
}


export default function useLoboData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['lobo-data'],
        retry: false
    })

    return{
        ...query,
        data: query.data ?? []
    }
}