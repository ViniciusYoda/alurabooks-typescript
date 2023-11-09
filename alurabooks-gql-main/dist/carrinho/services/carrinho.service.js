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
exports.CarrinhoService = void 0;
const common_1 = require("@nestjs/common");
const http_1 = require("../../common/http");
const livros_service_1 = require("../../livros/services/livros.service");
let CarrinhoService = class CarrinhoService {
    constructor(livrosService) {
        this.livrosService = livrosService;
    }
    async obterCarrinho() {
        const { data: carrinho } = await http_1.http.get('/carrinhos/1');
        if (!carrinho.itens) {
            carrinho.itens = [];
        }
        return carrinho;
    }
    async buscar() {
        const carrinho = await this.obterCarrinho();
        await Promise.all(carrinho.itens.map(async (item) => {
            item.livro = await this.livrosService.buscarPorId(item.livroId);
            const opcao = item.livro.opcoesCompra.find((op) => op.id == item.opcaoCompraId);
            item.opcaoCompra = opcao;
        }));
        carrinho.total = 0;
        if (carrinho.itens) {
            carrinho.total = carrinho.itens.reduce((acumulado, item) => {
                return acumulado + item.quantidade * item.opcaoCompra.preco;
            }, 0);
        }
        return carrinho;
    }
    async adicionar(item) {
        const carrinho = await this.obterCarrinho();
        if (!Number.isInteger(item.quantidade)) {
            item.quantidade = 1;
        }
        const itemNoCarrinho = carrinho.itens.find((it) => it.livroId == item.livroId && it.opcaoCompraId == item.opcaoCompraId);
        if (itemNoCarrinho) {
            itemNoCarrinho.quantidade = item.quantidade;
        }
        else {
            carrinho.itens.push(Object.assign(Object.assign({}, item), { quantidade: item.quantidade }));
        }
        await http_1.http.put('carrinhos/1', carrinho);
    }
    async remover(item) {
        const carrinho = await this.buscar();
        const idx = carrinho.itens.findIndex((it) => it.livroId == item.livroId && it.opcaoCompraId == item.opcaoCompraId);
        if (idx >= 0) {
            carrinho.itens.splice(idx, 1);
            await http_1.http.put('carrinhos/1', carrinho);
        }
    }
};
exports.CarrinhoService = CarrinhoService;
exports.CarrinhoService = CarrinhoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [livros_service_1.LivrosService])
], CarrinhoService);
//# sourceMappingURL=carrinho.service.js.map