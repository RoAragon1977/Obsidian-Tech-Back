"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _token = require("../helpers/token.helpers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var userScheme = new _mongoose.Schema({
  email: String,
  passwordHash: String,
  photoUrl: String,
  fechaCreacion: {
    type: Date,
    "default": Date.now
  },
  bloqueado: {
    "default": false,
    type: Boolean
  },
  allowsLocaStorage: {
    "default": false,
    type: Boolean
  },
  administrador: {
    "default": false,
    type: Boolean
  },
  favoritos: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'accesorios'
  }],
  carrito: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'accesorios'
  }],
  TemporaryToken: {
    token: String,
    expirationToken: Date
  }
});

//  Agrega un método para generar un token temporal
userScheme.methods.generateTemporaryPaswordResetToken = function () {
  var token = (0, _token.TemporaryToken)(this._id);
  return token;
};

// Sobrescribe el json que devuelve mongosse, y le pido que no devuelva estas propiedades
userScheme.set('toJSON', {
  transform: function transform(doc, ret) {
    ret.id = ret._id;
    delete ret.passwordHash;
    delete ret._id;
    delete ret.favoritos;
    delete ret.__v;
    delete ret.bloqueado;
    delete ret.administrador;
  }
});

// Genero el token de acceso (mi secreto)
userScheme.methods.generateAccesToken = function () {
  var token = _jsonwebtoken["default"].sign({
    _id: this._id
  }, process.env.SECRET);
  return token;
};
var _default = _mongoose["default"].model("User", userScheme);
exports["default"] = _default;