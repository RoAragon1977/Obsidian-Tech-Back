"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Authenticate = Authenticate;
exports.GenerateToken = GenerateToken;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _uuid = require("uuid");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function GenerateToken(userId) {
  // Generar un uuid
  var token = (0, _uuid.v4)();
  var expirationToken = Date.now() + 3 * 60 * 60 * 1000; // 3 horas de expiración
  return {
    token: token,
    expirationToken: expirationToken
  };
}

//autentifica al usuario recibiendo el token enviado
function Authenticate(req, res, next) {
  var authHeader = req.headers['authorization'];
  // Si token existe, recuperarlo, sacarle los espacios y comienza de la primera posición
  var token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(404).json({
    ok: false,
    error_msg: 'Usuario no autorizado: sin token'
  });

  // Si el token existe, lo verifico
  _jsonwebtoken["default"].verify(token, process.env.SECRET, function (error) {
    if (error) {
      return res.status(404).json({
        ok: false,
        error_msg: 'Usuario no autorizado: token inválido'
      });
    }
    next();
  });
}