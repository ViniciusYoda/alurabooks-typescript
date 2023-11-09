import { OpcaoCompra } from 'src/livros/models/opcao-compra.model';
import { Livro } from '../../livros/models/livro.model';
export declare class ItemCarrinho {
    quantidade: number;
    livroId: number;
    opcaoCompraId: number;
    opcaoCompra?: OpcaoCompra;
    livro?: Livro;
}
