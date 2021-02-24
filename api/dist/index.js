"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const graphql_1 = __importDefault(require("./graphql/graphql"));
const app = express_1.default();
app.use('/graphql', graphql_1.default);
app.listen(4000);
console.log("Started");
//# sourceMappingURL=index.js.map