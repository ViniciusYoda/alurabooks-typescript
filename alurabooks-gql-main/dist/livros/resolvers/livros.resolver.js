"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrosResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const autor_model_1 = require("../../autores/models/autor.model");
const autor_service_1 = require("../../autores/services/autor.service");
const livro_model_1 = require("../models/livro.model");
const livros_service_1 = require("../services/livros.service");
const tag_model_1 = require("../models/tag.model");
const destaques_mode_1 = require("../models/destaques.mode");
let LivrosResolver = class LivrosResolver {
    constructor(autoresService, livrosService) {
        this.autoresService = autoresService;
        this.livrosService = livrosService;
    }
    async livros(titulo, categoriaId) {
        return this.livrosService.buscarTodos(titulo, categoriaId);
    }
    async livro(slug) {
        return this.livrosService.buscarPorSlug(slug);
    }
    async destaques() {
        return this.livrosService.buscarDestaques();
    }
    async autor(livro) {
        const { autorId } = livro;
        return this.autoresService.buscarPorId(autorId);
    }
    async tags(livro) {
        return this.livrosService.buscarTagsDo(livro);
    }
};
exports.LivrosResolver = LivrosResolver;
__decorate([
    (0, graphql_1.Query)((returns) => [livro_model_1.Livro]),
    __param(0, (0, graphql_1.Args)('titulo', { type: () => String, nullable: true })),
    __param(1, (0, graphql_1.Args)('categoriaId', { type: () => graphql_1.Int, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], LivrosResolver.prototype, "livros", null);
__decorate([
    (0, graphql_1.Query)((returns) => livro_model_1.Livro),
    __param(0, (0, graphql_1.Args)('slug', { type: () => String, nullable: false })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LivrosResolver.prototype, "livro", null);
__decorate([
    (0, graphql_1.Query)((returns) => destaques_mode_1.Destaques),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LivrosResolver.prototype, "destaques", null);
__decorate([
    (0, graphql_1.ResolveField)('autor', (returns) => autor_model_1.Autor),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [livro_model_1.Livro]),
    __metadata("design:returntype", Promise)
], LivrosResolver.prototype, "autor", null);
__decorate([
    (0, graphql_1.ResolveField)('tags', (returns) => [tag_model_1.Tag]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [livro_model_1.Livro]),
    __metadata("design:returntype", Promise)
], LivrosResolver.prototype, "tags", null);
exports.LivrosResolver = LivrosResolver = __decorate([
    (0, graphql_1.Resolver)((of) => livro_model_1.Livro),
    __metadata("design:paramtypes", [autor_service_1.AutoresService,
        livros_service_1.LivrosService])
], LivrosResolver);
//# sourceMappingURL=livros.resolver.js.map