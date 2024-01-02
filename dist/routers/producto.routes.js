"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _producto = require("../controllers/producto.controller");
var _token = require("../helpers/token.helpers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();

//traernos todos los productos almacenados en la base de datos
router.get('/accesorio', _producto.GetAllProductos);

//traer un producto por id
router.get('/accesorio/:id', _producto.GetProductById);

//creamos un producto nuevo
router.post('/accesorio', _token.Authenticate, _producto.AddProductos);

//modificar un producto por id
router.put('/accesorio/:id', _token.Authenticate, _producto.UpdateProducto);

//borrar un producto por id
router["delete"]('/accesorio/:id', _token.Authenticate, _producto.DeleteProducto);
var _default = router;
exports["default"] = _default;