import { LivrosService } from '../../livros/services/livros.service';
import { Carrinho } from '../models/carrinho.model';
import { ItemCarrinhoInput } from '../resolvers/carrinho.resolver';
export declare class CarrinhoService {
    private livrosService;
    constructor(livrosService: LivrosService);
    obterCarrinho(): Promise<Carrinho>;
    buscar(): Promise<Carrinho>;
    adicionar(item: ItemCarrinhoInput): Promise<void>;
    remover(item: ItemCarrinhoInput): Promise<void>;
}
