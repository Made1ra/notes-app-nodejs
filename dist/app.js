"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const notes_routes_1 = __importDefault(require("./routes/notes.routes"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/', notes_routes_1.default);
const port = process.env.PORT || 3000;
app.listen(port);
exports.default = app;
