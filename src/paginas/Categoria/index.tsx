import { useEffect, useState } from "react"
import TituloPrincipal from "../../componentes/TituloPrincipal"
import { ICategoria } from "../../interfaces/ICategoria"
import { useParams } from "react-router-dom"
import http from "../../http"
import Loader from "../../componentes/Loader"

const Categoria = () => {

    const [categoria, setCategoria] = useState<ICategoria>()
    const [estaCarregado, setEstaCarregado] = useState(true)

    const params = useParams()

    useEffect(() => {
        setEstaCarregado(true)
        http.get<ICategoria[]>('categorias', {
            params: {
                slug: params.slug
            }
        }).then(resposta => {
            setCategoria(resposta.data[0])
            setEstaCarregado(false)
        })
    }, [params.slug])

    if (estaCarregado) {
        return <Loader />
    }

    return(<section>
        <TituloPrincipal texto={categoria?.nome ?? ''} />
        </section>)
}

export default Categoria