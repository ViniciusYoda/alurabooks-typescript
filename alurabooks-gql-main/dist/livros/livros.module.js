"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrosModule = void 0;
const common_1 = require("@nestjs/common");
const autores_module_1 = require("../autores/autores.module");
const livros_resolver_1 = require("./resolvers/livros.resolver");
const livros_service_1 = require("./services/livros.service");
let LivrosModule = class LivrosModule {
};
exports.LivrosModule = LivrosModule;
exports.LivrosModule = LivrosModule = __decorate([
    (0, common_1.Module)({
        providers: [livros_service_1.LivrosService, livros_resolver_1.LivrosResolver],
        exports: [livros_service_1.LivrosService],
        imports: [autores_module_1.AutoresModule],
    })
], LivrosModule);
//# sourceMappingURL=livros.module.js.map