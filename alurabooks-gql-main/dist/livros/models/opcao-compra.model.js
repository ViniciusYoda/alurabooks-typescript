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
exports.OpcaoCompra = void 0;
const graphql_1 = require("@nestjs/graphql");
let OpcaoCompra = class OpcaoCompra {
};
exports.OpcaoCompra = OpcaoCompra;
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], OpcaoCompra.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], OpcaoCompra.prototype, "titulo", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [String], { nullable: true }),
    __metadata("design:type", Array)
], OpcaoCompra.prototype, "formatos", void 0);
__decorate([
    (0, graphql_1.Field)((type) => Number),
    __metadata("design:type", Number)
], OpcaoCompra.prototype, "preco", void 0);
exports.OpcaoCompra = OpcaoCompra = __decorate([
    (0, graphql_1.ObjectType)()
], OpcaoCompra);
//# sourceMappingURL=opcao-compra.model.js.map