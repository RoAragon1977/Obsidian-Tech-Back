"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _user = require("../controllers/user.controller");
var _token = require("../helpers/token.helpers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.use(_express["default"].json());

//Agrega el registro de un nuevo usuario
router.post("/user/add", _user.AddUser);

//Modificar un usuario por id
router.put("/user/:id", _token.Authenticate, _user.UpdateUser);

//Logea un usuario Registrado
router.post("/user/login", _user.Login);

//Verficar email, para recupero de contraseña
router.post("/user/email/verification", _user.EmailVerification);

//Modificación de contraseña
router.put("/user/password/modify", _user.ModifyPassword);

//Agrega un producto a la lista de favoritos de un usuario
router.post("/user/favorites", _token.Authenticate, _user.AddFavoriteProduct);

// Muestra la lista de productos favoritos de un usuario
router.get("/user/favorites/:userId", _token.Authenticate, _user.GetFavoriteProduct);

// Borra un producto por id de la lista de favorito
router.put("/user/favorites/:userId", _token.Authenticate, _user.DeleteFavoriteById);

// Agregar un producto al carrito del usuario
router.post("/user/buyCar", _token.Authenticate, _user.AddCarProduct);

// Muestra la lista de productos en el carrito de un usuario
router.get("/user/buyCar/:userId", _token.Authenticate, _user.GetAllCarProduct);

// Borra un producto por id de la lista de carrito
router.put("/user/buyCar/:userId", _token.Authenticate, _user.DeleteCarProductById);

// Muestra un usuario buscado por el email
router.get("/user/byEmail/:email", _user.GetUserByMail);
var _default = router;
exports["default"] = _default;