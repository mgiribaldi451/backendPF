"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var controller_1 = __importDefault(require("./controller"));
var router = express_1["default"].Router();
router.get("/", controller_1["default"].getProducts);
router.get("/:id", controller_1["default"].getProductId);
router.post("/", controller_1["default"].postProducts);
router["delete"]("/:id", controller_1["default"].deleteProducts);
router.put("/:id", controller_1["default"].putProducts);
exports["default"] = router;
