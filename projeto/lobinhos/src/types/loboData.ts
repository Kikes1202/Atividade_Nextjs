export interface LoboData{
    id: number;
    nome: string;
    idade: string;
    descricao: string;
    imagem: string;
    adotado: boolean;
}

export interface LoboResponse{
    post: LoboData[];
}