"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var controller_1 = __importDefault(require("./controller"));
var router = express_1["default"].Router();
router.get("/", controller_1["default"].getCart);
router.get("/:id", controller_1["default"].getCartId);
router.get("/:id/productos", controller_1["default"].getProdsCartId);
router.post("/", controller_1["default"].postCart);
router.post("/:idCart/productos/:idProd", controller_1["default"].addProdToCart);
router["delete"]("/:idCart/productos/:idProd", controller_1["default"].deleteProdCart);
router["delete"]("/:id", controller_1["default"].deleteCart);
router.put("/:id", controller_1["default"].putCart);
exports["default"] = router;
