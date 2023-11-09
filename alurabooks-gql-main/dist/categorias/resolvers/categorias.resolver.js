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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const categoria_model_1 = require("../models/categoria.model");
const categorias_service_1 = require("../services/categorias.service");
let CategoriasResolver = class CategoriasResolver {
    constructor(categoriasService) {
        this.categoriasService = categoriasService;
    }
    async categorias() {
        return this.categoriasService.buscarTodos();
    }
};
exports.CategoriasResolver = CategoriasResolver;
__decorate([
    (0, graphql_1.Query)((returns) => [categoria_model_1.Categoria]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriasResolver.prototype, "categorias", null);
exports.CategoriasResolver = CategoriasResolver = __decorate([
    (0, graphql_1.Resolver)((of) => categoria_model_1.Categoria),
    __metadata("design:paramtypes", [categorias_service_1.CategoriasService])
], CategoriasResolver);
//# sourceMappingURL=categorias.resolver.js.map