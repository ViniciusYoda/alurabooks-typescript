import { Carrinho } from '../models/carrinho.model';
import { CarrinhoService } from '../services/carrinho.service';
export declare class ItemCarrinhoInput {
    livroId: number;
    opcaoCompraId: number;
    quantidade?: number;
}
export declare class CarrinhoResolver {
    private carrinhoService;
    constructor(carrinhoService: CarrinhoService);
    carrinho(): Promise<Carrinho>;
    adicionarItem(item: ItemCarrinhoInput): Promise<boolean>;
    removerItem(item: ItemCarrinhoInput): Promise<boolean>;
}
