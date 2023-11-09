"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoresService = void 0;
const common_1 = require("@nestjs/common");
const http_1 = require("../../common/http");
let AutoresService = class AutoresService {
    async buscarTodos() {
        const response = await http_1.http.get('/autores');
        return response.data;
    }
    async buscarPorId(id) {
        const response = await http_1.http.get(`/autores/${id}`);
        return response.data;
    }
};
exports.AutoresService = AutoresService;
exports.AutoresService = AutoresService = __decorate([
    (0, common_1.Injectable)()
], AutoresService);
//# sourceMappingURL=autor.service.js.map