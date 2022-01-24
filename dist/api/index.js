"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var carrito_1 = __importDefault(require("./carrito"));
var productos_1 = __importDefault(require("./productos"));
var app = (0, express_1["default"])();
app.use("/productos", productos_1["default"]);
app.use("/carrito", carrito_1["default"]);
exports["default"] = app;
