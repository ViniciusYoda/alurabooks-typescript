import { Categoria } from '../models/categoria.model';
import { CategoriasService } from '../services/categorias.service';
export declare class CategoriasResolver {
    private categoriasService;
    constructor(categoriasService: CategoriasService);
    categorias(): Promise<Categoria[]>;
}
