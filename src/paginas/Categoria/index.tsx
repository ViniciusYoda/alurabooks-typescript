import TituloPrincipal from "../../componentes/TituloPrincipal"
import { useParams } from "react-router-dom"
import {obterCategoriaPorSlug} from "../../http"
import Loader from "../../componentes/Loader"
import { useQuery } from "@tanstack/react-query"

const Categoria = () => {

    const params = useParams()
    const { data: categoria, isLoading } = useQuery(['categoriaPorSlug', params.slug], () => obterCategoriaPorSlug(params.slug || ''))



    if (isLoading) {
        return <Loader />
    }

    return(<section>
        <TituloPrincipal texto={categoria?.nome ?? ''} />
        </section>)
}

export default Categoria