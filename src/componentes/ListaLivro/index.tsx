import { ICategoria } from "../../interfaces/ICategoria"

import { useQuery } from "@tastack/react-query"

interface ListaLivrosProps {
    categoria: ICategoria
}


const ListaLivros = ({ categoria } : ListaLivrosProps ) => {
    useQuery(['buscaLivrosPorCategoria'], )
    return <></>
}

export default ListaLivros