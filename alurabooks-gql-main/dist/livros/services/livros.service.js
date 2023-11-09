"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrosService = void 0;
const common_1 = require("@nestjs/common");
const http_1 = require("../../common/http");
let LivrosService = class LivrosService {
    async buscarDestaques() {
        const lancamentos = await http_1.http.get('/public/lancamentos');
        const maisVendidos = await http_1.http.get('/public/mais-vendidos');
        return {
            lancamentos: lancamentos.data,
            maisVendidos: maisVendidos.data,
        };
    }
    async buscarTodos(titulo, categoriaId) {
        const config = {};
        if (categoriaId > 0) {
            config.params = {
                categoriaId,
            };
        }
        const { data: livros } = await http_1.http.get('/livros', config);
        if (titulo) {
            return livros.filter((livro) => livro.titulo.toLowerCase().includes(titulo.toLowerCase()));
        }
        return livros;
    }
    async buscarPorId(id) {
        const response = await http_1.http.get(`/livros/${id}`);
        return response.data;
    }
    async buscarPorSlug(slug) {
        const response = await http_1.http.get(`/livros`, {
            params: {
                slug,
            },
        });
        if (response.data.length) {
            return response.data[0];
        }
        return null;
    }
    async buscarTagsDo(livro) {
        const { data: todasAsTags } = await http_1.http.get('tags');
        return todasAsTags.filter((tag) => livro.tagIds.includes(tag.id));
    }
};
exports.LivrosService = LivrosService;
exports.LivrosService = LivrosService = __decorate([
    (0, common_1.Injectable)()
], LivrosService);
//# sourceMappingURL=livros.service.js.map