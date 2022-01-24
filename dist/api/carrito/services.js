"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var axios_1 = __importDefault(require("axios"));
var carros = [{
        "id": 1,
        "timestampCart": Date.now(),
        "productos": [{
                "id": 1,
                "description": "dasdasdsdas",
                "timestamp": Date.now(),
                "nombre": "dadssads",
                "foto": "https://i.ibb.co/WBzHNLv/images-q-tbn-ANd9-Gc-Rxu-I5t-AXdtt-Izamd-RH9-AMzkt-WTbk-Opk-TRk-Jg-usqp-CAU.jpg",
                "codigo": "string",
                "precio": 23432,
                "stock": 2
            },
            {
                "id": 2,
                "description": "dasdasdsdas",
                "timestamp": Date.now(),
                "nombre": "dadssads",
                "foto": "https://i.ibb.co/WBzHNLv/images-q-tbn-ANd9-Gc-Rxu-I5t-AXdtt-Izamd-RH9-AMzkt-WTbk-Opk-TRk-Jg-usqp-CAU.jpg",
                "codigo": "string",
                "precio": 23432,
                "stock": 2
            },
            {
                "id": 3,
                "description": "dasdasdsdas",
                "timestamp": Date.now(),
                "nombre": "dadssads",
                "foto": "https://i.ibb.co/WBzHNLv/images-q-tbn-ANd9-Gc-Rxu-I5t-AXdtt-Izamd-RH9-AMzkt-WTbk-Opk-TRk-Jg-usqp-CAU.jpg",
                "codigo": "string",
                "precio": 23432,
                "stock": 2
            }]
    }
];
function getCart() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, carros];
        });
    });
}
function getCartId(idCarro) {
    return __awaiter(this, void 0, void 0, function () {
        var control;
        return __generator(this, function (_a) {
            if (carros.find(function (e) { return e.id === idCarro; })) {
                control = carros.findIndex(function (e) { return e.id === idCarro; });
                return [2 /*return*/, carros[control]];
            }
            else {
                return [2 /*return*/, 'no existe'];
            }
            return [2 /*return*/];
        });
    });
}
function postCart(carro) {
    return __awaiter(this, void 0, void 0, function () {
        var valor;
        return __generator(this, function (_a) {
            valor = Math.max.apply(Math, __spreadArray(__spreadArray([], carros.map(function (o) { return o.id; }), false), [0], false));
            carro.id = valor + 1;
            carros = __spreadArray(__spreadArray([], carros, true), [carro], false);
            return [2 /*return*/, carros];
        });
    });
}
function putCart(idCart, carro) {
    return __awaiter(this, void 0, void 0, function () {
        var control;
        return __generator(this, function (_a) {
            if (carros.find(function (e) { return e.id === idCart; })) {
                control = carros.findIndex(function (e) { return e.id === idCart; });
                carros[control] = carro;
                return [2 /*return*/, carros[control]];
            }
            else {
                return [2 /*return*/, 'no existe'];
            }
            return [2 /*return*/];
        });
    });
}
function deleteCart(idCart) {
    return __awaiter(this, void 0, void 0, function () {
        var index;
        return __generator(this, function (_a) {
            index = carros.findIndex(function (a) { return a.id === idCart; });
            if (index !== -1) {
                carros.splice(index, 1);
                return [2 /*return*/, carros];
            }
            else {
                return [2 /*return*/, 'no existe producto con ese id'];
            }
            return [2 /*return*/];
        });
    });
}
function deleteProdCart(idCart, idProd) {
    return __awaiter(this, void 0, void 0, function () {
        var index, indexProd;
        return __generator(this, function (_a) {
            index = carros.findIndex(function (a) { return a.id === idCart; });
            if (index !== -1) {
                indexProd = carros[index].productos.findIndex(function (a) { return a.id === idProd; });
                if (indexProd !== -1) {
                    carros[index].productos.splice(indexProd, 1);
                }
                else {
                    return [2 /*return*/, 'no existe producto con ese id'];
                }
                //carros.splice(index,1)
                return [2 /*return*/, carros];
            }
            else {
                return [2 /*return*/, 'no existe carro con ese id'];
            }
            return [2 /*return*/];
        });
    });
}
function addProdToCart(idCart, idProducto) {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, index;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("http://localhost:8080/api/productos/".concat(idProducto))];
                case 1:
                    res = _a.sent();
                    data = res.data;
                    console.log(data);
                    index = carros.findIndex(function (a) { return a.id === idCart; });
                    if (index !== -1) {
                        carros[index].productos.push(data);
                    }
                    else {
                        return [2 /*return*/, 'no existe producto con ese id'];
                    }
                    return [2 /*return*/, carros[index]];
            }
        });
    });
}
function getProdsCartId(idCarro) {
    return __awaiter(this, void 0, void 0, function () {
        var control, prods;
        return __generator(this, function (_a) {
            if (carros.find(function (e) { return e.id === idCarro; })) {
                control = carros.findIndex(function (e) { return e.id === idCarro; });
                prods = carros[control].productos;
                return [2 /*return*/, prods];
            }
            else {
                return [2 /*return*/, 'no existe'];
            }
            return [2 /*return*/];
        });
    });
}
exports["default"] = { getCart: getCart, deleteCart: deleteCart, putCart: putCart, postCart: postCart, getCartId: getCartId, addProdToCart: addProdToCart, getProdsCartId: getProdsCartId, deleteProdCart: deleteProdCart, carros: carros };
