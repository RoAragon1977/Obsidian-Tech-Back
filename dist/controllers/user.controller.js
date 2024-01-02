"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddCarProduct = AddCarProduct;
exports.AddFavoriteProduct = AddFavoriteProduct;
exports.AddUser = AddUser;
exports.DeleteCarProductById = DeleteCarProductById;
exports.DeleteFavoriteById = DeleteFavoriteById;
exports.EmailVerification = EmailVerification;
exports.GetAllCarProduct = GetAllCarProduct;
exports.GetFavoriteProduct = GetFavoriteProduct;
exports.GetUserByMail = GetUserByMail;
exports.Login = Login;
exports.ModifyPassword = ModifyPassword;
exports.UpdateUser = UpdateUser;
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _password = require("../helpers/password.helper");
var _token = require("../helpers/token.helpers");
var _producto = _interopRequireDefault(require("../models/producto"));
var _user = _interopRequireDefault(require("../models/user"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//import { SendEmail } from "../helpers/nodemailer_service";

var Login_Error_Message = "El usuario o la contraseña no coincide";
var base_error_objet = {
  ok: false,
  message: "Credenciales inválidas"
};

// Agrega un usuario a la base de dato
function AddUser(_x, _x2) {
  return _AddUser.apply(this, arguments);
} // Mudificar un usuario por id
function _AddUser() {
  _AddUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, email, password, photoUrl, passwordHash, newUser;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, email = _req$body.email, password = _req$body.password, photoUrl = _req$body.photoUrl;
          _context.next = 4;
          return (0, _password.Encrypt)(password);
        case 4:
          passwordHash = _context.sent;
          _context.next = 7;
          return _user["default"].create({
            email: email,
            photoUrl: photoUrl,
            passwordHash: passwordHash,
            favoritos: []
          });
        case 7:
          newUser = _context.sent;
          return _context.abrupt("return", res.json({
            ok: true,
            data_added: newUser
          }));
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(400).json({
            ok: false,
            message: _context.t0
          }));
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return _AddUser.apply(this, arguments);
}
function UpdateUser(_x3, _x4) {
  return _UpdateUser.apply(this, arguments);
} // Comprueva el mail y password del usuario que se esta logeando
function _UpdateUser() {
  _UpdateUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id, updatedUser;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return _user["default"].findByIdAndUpdate(id, req.body);
        case 4:
          updatedUser = _context2.sent;
          return _context2.abrupt("return", res.status(201).json({
            ok: true,
            update_user: updatedUser
          }));
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          return _context2.abrupt("return", res.status(500).json({
            ok: false,
            error: _context2.t0
          }));
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _UpdateUser.apply(this, arguments);
}
function Login(_x5, _x6) {
  return _Login.apply(this, arguments);
} // Verificación de email para recuperar contraseña
function _Login() {
  _Login = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body2, email, password, userLogged, passwordCheck, token;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context3.next = 4;
          return _user["default"].findOne({
            email: email
          });
        case 4:
          userLogged = _context3.sent;
          if (userLogged) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(400).json(base_error_objet));
        case 7:
          _context3.next = 9;
          return (0, _password.Compare)(password, userLogged.passwordHash);
        case 9:
          passwordCheck = _context3.sent;
          if (passwordCheck) {
            _context3.next = 12;
            break;
          }
          return _context3.abrupt("return", res.status(400).json(base_error_objet));
        case 12:
          token = userLogged.generateAccesToken();
          return _context3.abrupt("return", res.status(200).json({
            ok: true,
            user: userLogged,
            token: token
          }));
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(400).json({
            ok: false,
            message: _context3.t0
          }));
        case 19:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 16]]);
  }));
  return _Login.apply(this, arguments);
}
function EmailVerification(_x7, _x8) {
  return _EmailVerification.apply(this, arguments);
} // Verificación de tokenes temporarios
function _EmailVerification() {
  _EmailVerification = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var email, userLogged, tempToken, transporter, mailOptions;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          email = req.body.email;
          _context4.next = 4;
          return _user["default"].findOne({
            email: email
          });
        case 4:
          userLogged = _context4.sent;
          if (!(!userLogged.TemporaryToken && !userLogged.TemporaryToken.token && userLogged.TemporaryToken.expirationToken || userLogged.TemporaryToken.expirationToken < Date.now() || userLogged.TemporaryToken.token === undefined)) {
            _context4.next = 19;
            break;
          }
          //Generar un token temporal y lo envia al usuario
          tempToken = (0, _token.GenerateToken)(userLogged._id);

          // Asigna el token al campo TemporaryToken del usuario
          userLogged.TemporaryToken = {
            token: tempToken.token,
            expirationToken: tempToken.expirationToken
          };

          // Guarda los cambios en la base de datos
          _context4.next = 10;
          return userLogged.save();
        case 10:
          userLogged.TemporaryToken = tempToken;
          console.log("peticion de verificación de correo exitosa");

          // Configuración del transporte SMTP de Nodemailer
          transporter = _nodemailer["default"].createTransport({
            service: "Gmail",
            auth: {
              user: process.env.SMTP_EMAIL,
              pass: process.env.SMTP_PASSWORD
            }
          }); // Configuración del mensaje
          mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: userLogged.email,
            subject: "Recuperación de contraseña",
            text: "Utilice este codigo para recuperar su contrse\xF1a: ".concat(tempToken.token)
          }; //Enviar el correo electrónico
          _context4.next = 16;
          return transporter.sendMail(mailOptions);
        case 16:
          console.log("Correo electrónico enviado:");
          _context4.next = 21;
          break;
        case 19:
          //console.log(userLogged);
          console.log("Ya se ha enviado un Token Temporal previamente");
          return _context4.abrupt("return", res.status(200).json({
            ok: true,
            message: "Ya se ha enviado un token temporal previamente."
          }));
        case 21:
          return _context4.abrupt("return", res.status(200).json({
            tempToken: tempToken,
            ok: true,
            message: "Solicitud de verificación de correo exitosa"
          }));
        case 24:
          _context4.prev = 24;
          _context4.t0 = _context4["catch"](0);
          console.error("Error en la petición de verificación de correo:", _context4.t0);
          return _context4.abrupt("return", res.status(400).json({
            ok: false,
            message: "Error en la petición de verificación de correo",
            error: _context4.t0.message
          }));
        case 28:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 24]]);
  }));
  return _EmailVerification.apply(this, arguments);
}
function ModifyPassword(_x9, _x10) {
  return _ModifyPassword.apply(this, arguments);
} // Agrega un producto a la lista de favoritos de cada usuario
function _ModifyPassword() {
  _ModifyPassword = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body3, email, password, userLogged, newPasswordHash;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body3 = req.body, email = _req$body3.email, password = _req$body3.password; // Consultar la base de datos para obtener el token almacenado en el usuario
          _context5.next = 4;
          return _user["default"].findOne({
            email: email
          });
        case 4:
          userLogged = _context5.sent;
          if (userLogged) {
            _context5.next = 8;
            break;
          }
          console.error("Usuario no encontrado en la base de datos");
          return _context5.abrupt("return", res.status(400).json({
            ok: false,
            message: "Usuario no encontrado en la base de datos"
          }));
        case 8:
          _context5.next = 10;
          return (0, _password.Encrypt)(password);
        case 10:
          newPasswordHash = _context5.sent;
          // Actualizo la contrasea del usuario en la base de datos
          userLogged.passwordHash = newPasswordHash;
          _context5.next = 14;
          return userLogged.save();
        case 14:
          console.log("Contraseña cambiada exitosamente");
          return _context5.abrupt("return", res.status(200).json({
            ok: true,
            message: "Contraseña cambiada exitosamente"
          }));
        case 18:
          _context5.prev = 18;
          _context5.t0 = _context5["catch"](0);
          console.error("Error al cambiar la contraseña:", _context5.t0);
          return _context5.abrupt("return", res.status(400).json({
            ok: false,
            message: "Error al cambiar la contraseña",
            error: _context5.t0.message
          }));
        case 22:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 18]]);
  }));
  return _ModifyPassword.apply(this, arguments);
}
function AddFavoriteProduct(_x11, _x12) {
  return _AddFavoriteProduct.apply(this, arguments);
} // Muestra la lista de productos favoritos por usuario
function _AddFavoriteProduct() {
  _AddFavoriteProduct = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body4, userId, productId, user, Product;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$body4 = req.body, userId = _req$body4.userId, productId = _req$body4.productId; // Verifica si el usuario existe
          _context6.next = 4;
          return _user["default"].findById(userId);
        case 4:
          user = _context6.sent;
          _context6.next = 7;
          return _producto["default"].findById(productId);
        case 7:
          Product = _context6.sent;
          if (!(!user || !Product)) {
            _context6.next = 10;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            ok: false,
            error_msg: "Usuario o producto no encontrado"
          }));
        case 10:
          if (!user.favoritos.includes(productId)) {
            _context6.next = 12;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            ok: false,
            error_msg: "El producto ya está en la lista de favoritos"
          }));
        case 12:
          // Agregar el producto a la lista de favoritos del usuario
          user.favoritos.push(Product);
          _context6.next = 15;
          return user.save();
        case 15:
          return _context6.abrupt("return", res.status(200).json({
            ok: true,
            message: "Producto agregado a favoritos"
          }));
        case 18:
          _context6.prev = 18;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).json({
            ok: false,
            message: "Error al agregar el producto a favoritos",
            error: _context6.t0.message
          }));
        case 21:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 18]]);
  }));
  return _AddFavoriteProduct.apply(this, arguments);
}
function GetFavoriteProduct(_x13, _x14) {
  return _GetFavoriteProduct.apply(this, arguments);
} // Borrar un producto de la lista de favoritos po id
function _GetFavoriteProduct() {
  _GetFavoriteProduct = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var userId, user;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          userId = req.params.userId;
          _context7.next = 4;
          return _user["default"].findById(userId).populate("favoritos");
        case 4:
          user = _context7.sent;
          if (user) {
            _context7.next = 7;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            ok: false,
            favorite_producs: user.favoritos
          }));
        case 7:
          return _context7.abrupt("return", res.status(200).json({
            ok: true,
            favorite_producs: user.favoritos
          }));
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(500).json({
            ok: false,
            error: _context7.t0
          }));
        case 13:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return _GetFavoriteProduct.apply(this, arguments);
}
function DeleteFavoriteById(_x15, _x16) {
  return _DeleteFavoriteById.apply(this, arguments);
} //Agregar un producto al carrito de compras
function _DeleteFavoriteById() {
  _DeleteFavoriteById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var userId, productId, user;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          userId = req.params.userId;
          productId = req.body.productId; //Verifico si el usuario y el producto existe
          _context8.next = 5;
          return _user["default"].findById(userId);
        case 5:
          user = _context8.sent;
          if (!(!user || !user.favoritos.includes(productId))) {
            _context8.next = 8;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            ok: false,
            error_msg: "Usuario o producto no encontrado"
          }));
        case 8:
          // Elimina el producto de la lista de favoritos del usuario
          user.favoritos = user.favoritos.filter(function (favorite) {
            return favorite.toString() !== productId;
          });
          _context8.next = 11;
          return user.save();
        case 11:
          return _context8.abrupt("return", res.status(200).json({
            ok: true,
            message: "Producto eliminado de favoritos"
          }));
        case 14:
          _context8.prev = 14;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", res.status(500).json({
            ok: false,
            message: "Error al eliminar el producto de favoritos",
            rerror: _context8.t0.message
          }));
        case 17:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 14]]);
  }));
  return _DeleteFavoriteById.apply(this, arguments);
}
function AddCarProduct(_x17, _x18) {
  return _AddCarProduct.apply(this, arguments);
} //Muestra lista de productos agregados al carrito
function _AddCarProduct() {
  _AddCarProduct = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body5, userId, productId, user, Product;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _req$body5 = req.body, userId = _req$body5.userId, productId = _req$body5.productId; // Verifica si el usuario existe
          _context9.next = 4;
          return _user["default"].findById(userId);
        case 4:
          user = _context9.sent;
          _context9.next = 7;
          return _producto["default"].findById(productId);
        case 7:
          Product = _context9.sent;
          if (!(!user || !Product)) {
            _context9.next = 10;
            break;
          }
          return _context9.abrupt("return", res.status(404).json({
            ok: false,
            error_msg: "Usuario o producto no encontrado"
          }));
        case 10:
          if (!user.carrito.includes(productId)) {
            _context9.next = 12;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            ok: false,
            error_msg: "El producto ya está en la lista de favoritos"
          }));
        case 12:
          // Agregar el producto a la lista de favoritos del usuario
          user.carrito.push(Product);
          _context9.next = 15;
          return user.save();
        case 15:
          return _context9.abrupt("return", res.status(200).json({
            ok: true,
            message: "Producto agregado al carrito"
          }));
        case 18:
          _context9.prev = 18;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", res.status(500).json({
            ok: false,
            message: "Error al agregar el producto al carrito",
            error: _context9.t0.message
          }));
        case 21:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 18]]);
  }));
  return _AddCarProduct.apply(this, arguments);
}
function GetAllCarProduct(_x19, _x20) {
  return _GetAllCarProduct.apply(this, arguments);
} // Elimina un producto de la lista de carrito
function _GetAllCarProduct() {
  _GetAllCarProduct = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var userId, user;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          userId = req.params.userId;
          _context10.next = 4;
          return _user["default"].findById(userId).populate("carrito");
        case 4:
          user = _context10.sent;
          if (user) {
            _context10.next = 7;
            break;
          }
          return _context10.abrupt("return", res.status(404).json({
            ok: false,
            car_products: user.carrito
          }));
        case 7:
          return _context10.abrupt("return", res.status(200).json({
            ok: true,
            car_products: user.carrito
          }));
        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          return _context10.abrupt("return", res.status(500).json({
            ok: false,
            error: _context10.t0
          }));
        case 13:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 10]]);
  }));
  return _GetAllCarProduct.apply(this, arguments);
}
function DeleteCarProductById(_x21, _x22) {
  return _DeleteCarProductById.apply(this, arguments);
} //Leer usuario por mail
function _DeleteCarProductById() {
  _DeleteCarProductById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var userId, productId, user;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          userId = req.params.userId;
          productId = req.body.productId; //Verifico si el usuario y el producto existe
          _context11.next = 5;
          return _user["default"].findById(userId);
        case 5:
          user = _context11.sent;
          if (!(!user || !user.carrito.includes(productId))) {
            _context11.next = 8;
            break;
          }
          return _context11.abrupt("return", res.status(404).json({
            ok: false,
            error_msg: "Usuario o producto no encontrado"
          }));
        case 8:
          // Elimina el producto de la lista de favoritos del usuario
          user.carrito = user.carrito.filter(function (carProduct) {
            return carProduct.toString() !== productId;
          });
          _context11.next = 11;
          return user.save();
        case 11:
          return _context11.abrupt("return", res.status(200).json({
            ok: true,
            message: "Producto eliminado del carrito"
          }));
        case 14:
          _context11.prev = 14;
          _context11.t0 = _context11["catch"](0);
          return _context11.abrupt("return", res.status(500).json({
            ok: false,
            message: "Error al eliminar el producto del carrito",
            rerror: _context11.t0.message
          }));
        case 17:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 14]]);
  }));
  return _DeleteCarProductById.apply(this, arguments);
}
function GetUserByMail(_x23, _x24) {
  return _GetUserByMail.apply(this, arguments);
}
function _GetUserByMail() {
  _GetUserByMail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var email, user;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          console.log(req);
          email = req.params.email;
          _context12.prev = 2;
          _context12.next = 5;
          return _user["default"].findOne({
            email: email
          });
        case 5:
          user = _context12.sent;
          if (user) {
            _context12.next = 8;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            ok: false,
            message: "Usuario no encontrado"
          }));
        case 8:
          res.json(user);
          console.log(res);
          _context12.next = 15;
          break;
        case 12:
          _context12.prev = 12;
          _context12.t0 = _context12["catch"](2);
          console.error("Error al obtener el usuario", _context12.t0), res.status(500).json({
            ok: false,
            message: "Error al obtener el usuario, email no encontrado"
          });
        case 15:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[2, 12]]);
  }));
  return _GetUserByMail.apply(this, arguments);
}