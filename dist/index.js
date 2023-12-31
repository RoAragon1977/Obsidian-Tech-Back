"use strict";

var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _db = _interopRequireDefault(require("./db/db"));
var _producto = _interopRequireDefault(require("./routers/producto.routes"));
var _user = _interopRequireDefault(require("./routers/user.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var port = process.env.PORT || 3031;
app.use((0, _morgan["default"])('start'));
app.use(_express["default"].json());
app.use((0, _cors["default"])());
_dotenv["default"].config();
(0, _db["default"])();
app.listen(port, function () {
  console.log("server started on port ".concat(port));
});

// app.listen(parseInt(process.env.PORT), () => {
//   console.log('"Servidor ejecutandose en el puerto: " + process.env.PORT');
// });

app.use('/api', _producto["default"]); // Ruta base para el CRUD de los productos
app.use('/api', _user["default"]); // Ruta base para el CRUD de los usuarios
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Algo salió mai!');
});