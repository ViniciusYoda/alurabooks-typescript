import { Autor } from '../../autores/models/autor.model';
import { AutoresService } from 'src/autores/services/autor.service';
import { Livro } from '../models/livro.model';
import { LivrosService } from '../services/livros.service';
import { Tag } from '../models/tag.model';
import { Destaques } from '../models/destaques.mode';
export declare class LivrosResolver {
    private autoresService;
    private livrosService;
    constructor(autoresService: AutoresService, livrosService: LivrosService);
    livros(titulo: string, categoriaId: number): Promise<Livro[]>;
    livro(slug: string): Promise<Livro>;
    destaques(): Promise<Destaques>;
    autor(livro: Livro): Promise<Autor>;
    tags(livro: Livro): Promise<Tag[]>;
}
