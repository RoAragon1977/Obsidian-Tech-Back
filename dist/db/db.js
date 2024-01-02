"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].set('strictQuery', true);
function connet() {
  _mongoose["default"].connect(process.env.DB_CONNECTION // Direccion de data base guardada en archivo env 
  ).then(function (res) {
    return console.log('Se conectó correctamente a la base de datos');
  })["catch"](function (err) {
    return console.log(err);
  });
}
var _default = connet;
exports["default"] = _default;