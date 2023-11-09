import { Destaques } from '../models/destaques.mode';
import { Livro } from '../models/livro.model';
import { Tag } from '../models/tag.model';
export declare class LivrosService {
    buscarDestaques(): Promise<Destaques>;
    buscarTodos(titulo?: string, categoriaId?: number): Promise<Livro[]>;
    buscarPorId(id: number): Promise<Livro>;
    buscarPorSlug(slug: string): Promise<Livro>;
    buscarTagsDo(livro: Livro): Promise<Tag[]>;
}
