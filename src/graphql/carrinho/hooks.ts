import { useQuery } from "@apollo/client"
import { ICarrinho } from "../../interfaces/ICarrinho"
import { OBTER_CARRINHO } from "./queries"

export const useCarrinho = () => {
    return useQuery<{ carrinho: ICarrinho }>(OBTER_CARRINHO)
}