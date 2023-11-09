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
exports.CarrinhoResolver = exports.ItemCarrinhoInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const carrinho_model_1 = require("../models/carrinho.model");
const carrinho_service_1 = require("../services/carrinho.service");
let ItemCarrinhoInput = class ItemCarrinhoInput {
};
exports.ItemCarrinhoInput = ItemCarrinhoInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], ItemCarrinhoInput.prototype, "livroId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], ItemCarrinhoInput.prototype, "opcaoCompraId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], ItemCarrinhoInput.prototype, "quantidade", void 0);
exports.ItemCarrinhoInput = ItemCarrinhoInput = __decorate([
    (0, graphql_1.InputType)()
], ItemCarrinhoInput);
let CarrinhoResolver = class CarrinhoResolver {
    constructor(carrinhoService) {
        this.carrinhoService = carrinhoService;
    }
    async carrinho() {
        return this.carrinhoService.buscar();
    }
    async adicionarItem(item) {
        await this.carrinhoService.adicionar(item);
        return true;
    }
    async removerItem(item) {
        await this.carrinhoService.remover(item);
        return true;
    }
};
exports.CarrinhoResolver = CarrinhoResolver;
__decorate([
    (0, graphql_1.Query)((returns) => carrinho_model_1.Carrinho),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarrinhoResolver.prototype, "carrinho", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => Boolean),
    __param(0, (0, graphql_1.Args)('item')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ItemCarrinhoInput]),
    __metadata("design:returntype", Promise)
], CarrinhoResolver.prototype, "adicionarItem", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => Boolean),
    __param(0, (0, graphql_1.Args)('item')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ItemCarrinhoInput]),
    __metadata("design:returntype", Promise)
], CarrinhoResolver.prototype, "removerItem", null);
exports.CarrinhoResolver = CarrinhoResolver = __decorate([
    (0, graphql_1.Resolver)((of) => carrinho_model_1.Carrinho),
    __metadata("design:paramtypes", [carrinho_service_1.CarrinhoService])
], CarrinhoResolver);
//# sourceMappingURL=carrinho.resolver.js.map