/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ssr/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/rootReducer.js":
/*!*******************************!*\
  !*** ./client/rootReducer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _Reducer = __webpack_require__(/*! ./views/HomePage/Reducer */ \"./client/views/HomePage/Reducer.js\");\n\nvar _Reducer2 = _interopRequireDefault(_Reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n\thomePage: _Reducer2.default\n});\n\n//# sourceURL=webpack:///./client/rootReducer.js?");

/***/ }),

/***/ "./client/routes.js":
/*!**************************!*\
  !*** ./client/routes.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _HomePage = __webpack_require__(/*! ./views/HomePage */ \"./client/views/HomePage/index.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\n\tSwitch only renders the first match. Subrouting happens downstream\n\thttps://reacttraining.com/react-router/web/api/Switch\n*/\n\nvar App = function App() {\n\treturn _react2.default.createElement(\n\t\t_reactRouterDom.Switch,\n\t\tnull,\n\t\t_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _HomePage2.default })\n\t);\n};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./client/routes.js?");

/***/ }),

/***/ "./client/views/HomePage/Reducer.js":
/*!******************************************!*\
  !*** ./client/views/HomePage/Reducer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = homePage;\nfunction homePage() {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tdefault:\n\t\t\treturn state;\n\t}\n}\n\n//# sourceURL=webpack:///./client/views/HomePage/Reducer.js?");

/***/ }),

/***/ "./client/views/HomePage/index.js":
/*!****************************************!*\
  !*** ./client/views/HomePage/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HomePage = function (_Component) {\n\t_inherits(HomePage, _Component);\n\n\tfunction HomePage() {\n\t\t_classCallCheck(this, HomePage);\n\n\t\tvar _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this));\n\n\t\t_this.state = {\n\t\t\tshowState: false\n\t\t};\n\t\treturn _this;\n\t}\n\n\t_createClass(HomePage, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t'Hello World !!!'\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn HomePage;\n}(_react.Component);\n\nexports.default = HomePage;\n\n//# sourceURL=webpack:///./client/views/HomePage/index.js?");

/***/ }),

/***/ "./ssr/helpers.js":
/*!************************!*\
  !*** ./ssr/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar renderFullPage = function renderFullPage(html, preloadedState) {\n\treturn '<!DOCTYPE html>\\n\\t<html>\\n\\t\\n\\t<head>\\n\\t\\t<meta charset=\"UTF-8\">\\n\\t\\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n\\t\\t<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\\n\\t\\t<title>Bus Booking in Africa</title>\\n\\t</head>\\n\\t\\n\\t<body>\\n\\t\\t<div id=\"root\">' + html + '</div>\\n\\t</body>\\n\\t<script>\\n\\t\\twindow.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\\\u003c') + '\\n\\t</script>\\n\\t</html>';\n};\nexports.default = renderFullPage;\n\n//# sourceURL=webpack:///./ssr/helpers.js?");

/***/ }),

/***/ "./ssr/index.js":
/*!**********************!*\
  !*** ./ssr/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _koa = __webpack_require__(/*! koa */ \"koa\");\n\nvar _koaBodyparser = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\n\nvar _koaStatic = __webpack_require__(/*! koa-static */ \"koa-static\");\n\nvar _koaRouter = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar app = new _koa.Koa(),\n    router = new _koaRouter.Router();\n\napp.use((0, _koaStatic.serve)('.')); // Serving static build files\napp.use((0, _koaBodyparser.bodyparser)()); // Parsing body of every request\n\n/**\n * Logging time taken by a request\n */\napp.use(function () {\n\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {\n\t\tvar start, end;\n\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\twhile (1) {\n\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\tcase 0:\n\t\t\t\t\t\tstart = new Date();\n\t\t\t\t\t\t_context.next = 3;\n\t\t\t\t\t\treturn next();\n\n\t\t\t\t\tcase 3:\n\t\t\t\t\t\tend = new Date();\n\n\t\t\t\t\t\tconsole.log(ctx.method + ' ' + ctx.url + ' time taken ' + (end - start));\n\n\t\t\t\t\tcase 5:\n\t\t\t\t\tcase 'end':\n\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t}\n\t\t\t}\n\t\t}, _callee, undefined);\n\t}));\n\n\treturn function (_x, _x2) {\n\t\treturn _ref.apply(this, arguments);\n\t};\n}());\n/**\n * Handling errors globally\n */\napp.use(function () {\n\tvar _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {\n\t\treturn regeneratorRuntime.wrap(function _callee2$(_context2) {\n\t\t\twhile (1) {\n\t\t\t\tswitch (_context2.prev = _context2.next) {\n\t\t\t\t\tcase 0:\n\t\t\t\t\t\t_context2.prev = 0;\n\t\t\t\t\t\t_context2.next = 3;\n\t\t\t\t\t\treturn next();\n\n\t\t\t\t\tcase 3:\n\t\t\t\t\t\t_context2.next = 8;\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\tcase 5:\n\t\t\t\t\t\t_context2.prev = 5;\n\t\t\t\t\t\t_context2.t0 = _context2['catch'](0);\n\n\t\t\t\t\t\tconsole.error('Global error handling ' + _context2.t0);\n\n\t\t\t\t\tcase 8:\n\t\t\t\t\tcase 'end':\n\t\t\t\t\t\treturn _context2.stop();\n\t\t\t\t}\n\t\t\t}\n\t\t}, _callee2, undefined, [[0, 5]]);\n\t}));\n\n\treturn function (_x3, _x4) {\n\t\treturn _ref2.apply(this, arguments);\n\t};\n}());\n\n/**\n * Require routes\n */\n__webpack_require__(/*! ./routes */ \"./ssr/routes.js\")(router);\n\napp.use(router.routes()).use(router.allowedMethods());\n\napp.listen(process.env.PORT || 8081);\nconsole.log('Server side rendering started on ' + (process.env.PORT || 8081));\n\n//# sourceURL=webpack:///./ssr/index.js?");

/***/ }),

/***/ "./ssr/middlewares/HydrateState.js":
/*!*****************************************!*\
  !*** ./ssr/middlewares/HydrateState.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _rootReducer = __webpack_require__(/*! ../../client/rootReducer */ \"./client/rootReducer.js\");\n\nvar _rootReducer2 = _interopRequireDefault(_rootReducer);\n\nvar _routes = __webpack_require__(/*! ../../client/routes */ \"./client/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _helpers = __webpack_require__(/*! ../helpers */ \"./ssr/helpers.js\");\n\nvar _helpers2 = _interopRequireDefault(_helpers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar HydrateState = function () {\n\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {\n\t\tvar store, preloadedState, context, html;\n\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\twhile (1) {\n\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\tcase 0:\n\t\t\t\t\t\tstore = (0, _redux.createStore)(_rootReducer2.default, ctx.hydrateState), preloadedState = store.getState(), context = {};\n\t\t\t\t\t\thtml = (0, _server.renderToString)(_react2.default.createElement(\n\t\t\t\t\t\t\t_reactRedux.Provider,\n\t\t\t\t\t\t\t{ store: store },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t_reactRouterDom.StaticRouter,\n\t\t\t\t\t\t\t\t{ location: ctx.request.url, context: context },\n\t\t\t\t\t\t\t\t_react2.default.createElement(_routes2.default, null)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t));\n\n\t\t\t\t\t\tif (context.url) {\n\t\t\t\t\t\t\t// @TODO : Handle redirection properly\n\t\t\t\t\t\t\tctx.response.status(301, { Location: context.url });\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t// we are good, send response\n\t\t\t\t\t\t\tctx.body = (0, _helpers2.default)(html, preloadedState);\n\t\t\t\t\t\t}\n\t\t\t\t\t\t_context.next = 5;\n\t\t\t\t\t\treturn next();\n\n\t\t\t\t\tcase 5:\n\t\t\t\t\tcase 'end':\n\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t}\n\t\t\t}\n\t\t}, _callee, undefined);\n\t}));\n\n\treturn function HydrateState(_x, _x2) {\n\t\treturn _ref.apply(this, arguments);\n\t};\n}();\n\nexports.default = HydrateState;\n\n//# sourceURL=webpack:///./ssr/middlewares/HydrateState.js?");

/***/ }),

/***/ "./ssr/middlewares/LoadData.js":
/*!*************************************!*\
  !*** ./ssr/middlewares/LoadData.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: 'import' and 'export' may only appear at the top level (12:0)\\n\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m\\t}\\n \\u001b[90m 11 | \\u001b[39m}\\u001b[33m;\\u001b[39m\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 12 | \\u001b[39m\\u001b[36mexport\\u001b[39m \\u001b[36mdefault\\u001b[39m \\u001b[33mLoadData\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m    | \\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 13 | \\u001b[39m\\u001b[0m\\n\");\n\n//# sourceURL=webpack:///./ssr/middlewares/LoadData.js?");

/***/ }),

/***/ "./ssr/routes.js":
/*!***********************!*\
  !*** ./ssr/routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nexports.default = function (router) {\n\trouter.get('/home', _LoadData2.default, _HydrateState2.default);\n};\n\nvar _LoadData = __webpack_require__(/*! ./middlewares/LoadData */ \"./ssr/middlewares/LoadData.js\");\n\nvar _LoadData2 = _interopRequireDefault(_LoadData);\n\nvar _HydrateState = __webpack_require__(/*! ./middlewares/HydrateState */ \"./ssr/middlewares/HydrateState.js\");\n\nvar _HydrateState2 = _interopRequireDefault(_HydrateState);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./ssr/routes.js?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-bodyparser\");\n\n//# sourceURL=webpack:///external_%22koa-bodyparser%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack:///external_%22koa-router%22?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ })

/******/ });