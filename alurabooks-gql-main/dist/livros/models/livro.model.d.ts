import { OpcaoCompra } from './opcao-compra.model';
import { Tag } from './tag.model';
export declare class Livro {
    id: number;
    autorId: number;
    categoriaId: number;
    titulo: string;
    slug: string;
    descricao: string;
    isbn: string;
    numeroPaginas: number;
    publicacao: string;
    imagemCapa: string;
    sobre: string;
    opcoesCompra: OpcaoCompra[];
    tagIds: number[];
    tags: Tag[];
}
