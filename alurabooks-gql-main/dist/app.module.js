"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const path_1 = require("path");
const autores_module_1 = require("./autores/autores.module");
const carrinho_module_1 = require("./carrinho/carrinho.module");
const categorias_module_1 = require("./categorias/categorias.module");
const livros_module_1 = require("./livros/livros.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                cors: {
                    origin: 'http://localhost:3000',
                    credentials: false,
                },
            }),
            autores_module_1.AutoresModule,
            categorias_module_1.CategoriasModule,
            livros_module_1.LivrosModule,
            carrinho_module_1.CarrinhoModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map