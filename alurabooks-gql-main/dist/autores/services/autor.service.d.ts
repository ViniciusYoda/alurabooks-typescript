import { Autor } from '../models/autor.model';
export declare class AutoresService {
    buscarTodos(): Promise<Autor[]>;
    buscarPorId(id: number): Promise<Autor>;
}
