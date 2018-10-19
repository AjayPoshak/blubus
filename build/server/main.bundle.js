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

/***/ "./client/actions/homePage.js":
/*!************************************!*\
  !*** ./client/actions/homePage.js ***!
  \************************************/
/*! exports provided: loadingSearch, receiveSearch, failedSearch, search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadingSearch\", function() { return loadingSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receiveSearch\", function() { return receiveSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"failedSearch\", function() { return failedSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return search; });\nvar loadingSearch = function loadingSearch() {\n  return {\n    type: 'LOAD_SEARCH'\n  };\n};\nvar receiveSearch = function receiveSearch(data) {\n  return {\n    type: 'RECEIVE_SEARCH',\n    data: data\n  };\n};\nvar failedSearch = function failedSearch(err) {\n  return {\n    type: 'FAILED_SEARCH',\n    err: err\n  };\n};\nvar search = function search(value) {\n  return {\n    type: 'SEARCH',\n    term: value\n  };\n};\n\n//# sourceURL=webpack:///./client/actions/homePage.js?");

/***/ }),

/***/ "./client/actions/listing.js":
/*!***********************************!*\
  !*** ./client/actions/listing.js ***!
  \***********************************/
/*! exports provided: requestListing, receiveListing, invalidResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestListing\", function() { return requestListing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receiveListing\", function() { return receiveListing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"invalidResponse\", function() { return invalidResponse; });\nfunction requestListing() {\n  return {\n    type: 'REQUEST_LISTING'\n  };\n}\nfunction receiveListing(data) {\n  return {\n    type: 'RECEIVE_LISTING',\n    data: data\n  };\n}\nfunction invalidResponse(err) {\n  return {\n    type: 'FAILED_LISTING',\n    err: err\n  };\n}\n\n//# sourceURL=webpack:///./client/actions/listing.js?");

/***/ }),

/***/ "./client/actions/seatLayout.js":
/*!**************************************!*\
  !*** ./client/actions/seatLayout.js ***!
  \**************************************/
/*! exports provided: fetchingData, dataFetchSuccess, dataFetchFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchingData\", function() { return fetchingData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataFetchSuccess\", function() { return dataFetchSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataFetchFailed\", function() { return dataFetchFailed; });\nfunction fetchingData() {\n  return {\n    type: 'REQUEST_SEATLAYOUT_DATA'\n  };\n}\nfunction dataFetchSuccess(data) {\n  console.log(data);\n  return {\n    type: 'RECEIVE_SEATLAYOUT_DATA',\n    data: data\n  };\n}\nfunction dataFetchFailed(err) {\n  return {\n    type: 'FAILED_SEATLAYOUT_DATA',\n    err: err\n  };\n}\n\n//# sourceURL=webpack:///./client/actions/seatLayout.js?");

/***/ }),

/***/ "./client/components/Button/Button.js":
/*!********************************************!*\
  !*** ./client/components/Button/Button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tokens */ \"./client/components/Tokens/index.js\");\n\n\n\n\nvar appearances = {\n  primary: {\n    color: _Tokens__WEBPACK_IMPORTED_MODULE_3__[\"colors\"].button.primary.text,\n    background: _Tokens__WEBPACK_IMPORTED_MODULE_3__[\"colors\"].button.primary.background\n  },\n  default: {\n    color: _Tokens__WEBPACK_IMPORTED_MODULE_3__[\"colors\"].button.default.text,\n    background: _Tokens__WEBPACK_IMPORTED_MODULE_3__[\"colors\"].button.default.background\n  }\n};\n\nfunction getAttribute(appearance) {\n  var appearanceStyles = appearance || 'default';\n  return appearances[appearanceStyles];\n}\n\nvar ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({\n  displayName: \"Button__ButtonStyle\",\n  componentId: \"gjwxrp-0\"\n})([\"border:none;height:\", \";width:\", \";font-size:\", \";font-weight:\", \";color:\", \";background:\", \";\"], _Tokens__WEBPACK_IMPORTED_MODULE_3__[\"misc\"].input.height, _Tokens__WEBPACK_IMPORTED_MODULE_3__[\"misc\"].input.width, _Tokens__WEBPACK_IMPORTED_MODULE_3__[\"fonts\"].button.fontSize, _Tokens__WEBPACK_IMPORTED_MODULE_3__[\"fonts\"].button.fontWeight, function (props) {\n  return getAttribute(props.appearance).color;\n}, function (props) {\n  return getAttribute(props.appearance).background;\n});\n\nvar Button = function Button(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonStyle, {\n    onClick: props.handleClick,\n    appearance: props.appearance\n  }, props.children);\n};\n\nButton.defaultProps = {\n  children: 'Okay',\n  appearance: 'default'\n};\nButton.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,\n  handleClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  appearance: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['primary', 'default'])\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./client/components/Button/Button.js?");

/***/ }),

/***/ "./client/components/Button/index.js":
/*!*******************************************!*\
  !*** ./client/components/Button/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./client/components/Button/Button.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./client/components/Button/index.js?");

/***/ }),

/***/ "./client/components/Calendar/Calendar.js":
/*!************************************************!*\
  !*** ./client/components/Calendar/Calendar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TextInput */ \"./client/components/TextInput/index.js\");\n/* harmony import */ var rc_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-calendar */ \"rc-calendar\");\n/* harmony import */ var rc_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_calendar__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\nvar CustomCalendar =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(CustomCalendar, _Component);\n\n  function CustomCalendar() {\n    var _this;\n\n    _classCallCheck(this, CustomCalendar);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomCalendar).call(this));\n    _this.selectDate = _this.selectDate.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.state = {\n      showCalendar: false,\n      selectedDate: ''\n    };\n    return _this;\n  }\n\n  _createClass(CustomCalendar, [{\n    key: \"selectDate\",\n    value: function selectDate(d) {\n      var selDate = d.format('DD/MM/YYYY');\n      this.setState({\n        selectedDate: selDate,\n        showCalendar: false\n      });\n    }\n  }, {\n    key: \"handleChange\",\n    value: function handleChange(event) {\n      console.log(event.currentTarget);\n    }\n  }, {\n    key: \"handleFocus\",\n    value: function handleFocus(event) {\n      this.setState({\n        showCalendar: true\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        type: \"text\",\n        icon: \"https://res.cloudinary.com/ddbxa4afa/image/upload/v1531114873/blubus/calendar.svg\",\n        onFocus: this.handleFocus,\n        handleChange: this.handleChange,\n        value: this.state.selectedDate,\n        placeholder: this.props.placeholder\n      }), this.state.showCalendar && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_calendar__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, this.props, {\n        onSelect: this.selectDate,\n        prefixClass: \"react-cal-\"\n      })));\n    }\n  }]);\n\n  return CustomCalendar;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomCalendar);\n\n//# sourceURL=webpack:///./client/components/Calendar/Calendar.js?");

/***/ }),

/***/ "./client/components/Calendar/index.js":
/*!*********************************************!*\
  !*** ./client/components/Calendar/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar */ \"./client/components/Calendar/Calendar.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Calendar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./client/components/Calendar/index.js?");

/***/ }),

/***/ "./client/components/Header/Header.js":
/*!********************************************!*\
  !*** ./client/components/Header/Header.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo */ \"./client/components/logo/index.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./client/components/Header/style.js\");\n\n\n\n\n\nvar Header = function Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    style: {\n      textDecoration: 'none'\n    },\n    to: \"/\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./client/components/Header/Header.js?");

/***/ }),

/***/ "./client/components/Header/style.js":
/*!*******************************************!*\
  !*** ./client/components/Header/style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tokens */ \"./client/components/Tokens/index.js\");\n\n\nvar HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({\n  displayName: \"style__HeaderWrapper\",\n  componentId: \"s1kbzlmn-0\"\n})([\"width:100%;height:70px;background-color:\", \";display:flex;justify-content:flex-start;align-items:center;padding:15px;box-sizing:border-box;\"], _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].primary);\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderWrapper);\n\n//# sourceURL=webpack:///./client/components/Header/style.js?");

/***/ }),

/***/ "./client/components/TextInput/TextInput.js":
/*!**************************************************!*\
  !*** ./client/components/TextInput/TextInput.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./client/components/TextInput/style.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\nvar TextInput =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(TextInput, _Component);\n\n  function TextInput() {\n    var _this;\n\n    _classCallCheck(this, TextInput);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextInput).call(this));\n    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(TextInput, [{\n    key: \"handleChange\",\n    value: function handleChange(event) {\n      this.props.handleChange(event.target.value);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          type = _this$props.type,\n          icon = _this$props.icon,\n          showError = _this$props.showError,\n          error = _this$props.error;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"InputWrapper\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], _extends({\n        type: type,\n        onChange: this.handleChange\n      }, this.props, {\n        value: this.props.value\n      })), icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n        src: icon,\n        alt: icon\n      }), showError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"ErrorWrapper\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"ErrorMsg\"], null, error))));\n    }\n  }]);\n\n  return TextInput;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nTextInput.defaultProps = {\n  icon: '',\n  showError: false,\n  error: ''\n};\nTextInput.propTypes = {\n  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  showError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['text', 'password', 'email', 'number', 'tel']).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextInput);\n\n//# sourceURL=webpack:///./client/components/TextInput/TextInput.js?");

/***/ }),

/***/ "./client/components/TextInput/index.js":
/*!**********************************************!*\
  !*** ./client/components/TextInput/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextInput */ \"./client/components/TextInput/TextInput.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_TextInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./client/components/TextInput/index.js?");

/***/ }),

/***/ "./client/components/TextInput/style.js":
/*!**********************************************!*\
  !*** ./client/components/TextInput/style.js ***!
  \**********************************************/
/*! exports provided: Input, InputWrapper, Icon, ErrorWrapper, ErrorMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return Input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputWrapper\", function() { return InputWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Icon\", function() { return Icon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorWrapper\", function() { return ErrorWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorMsg\", function() { return ErrorMsg; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tokens */ \"./client/components/Tokens/index.js\");\n\n\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({\n  displayName: \"style__Input\",\n  componentId: \"t4p2yc-0\"\n})([\"outline:none;padding-left:45px;width:\", \";color:\", \";height:\", \";border:\", \";font-size:\", \";font-weight:\", \";background-color:\", \";border-bottom:1px solid \", \";&::placeholder{color:\", \";}\"], _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"misc\"].input.width, _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].input.text, _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"misc\"].input.height, _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].input.border, _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"fonts\"].input.fontSize, _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"fonts\"].input.fontWeight, _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].input.background, _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].input.border, _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].input.placeholder);\nvar InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({\n  displayName: \"style__InputWrapper\",\n  componentId: \"t4p2yc-1\"\n})([\"display:flex;position:relative;svg{fill:#000;}&:last-of-type{margin-top:70px;}\"]);\nvar Icon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({\n  displayName: \"style__Icon\",\n  componentId: \"t4p2yc-2\"\n})([\"top:18px;left:11px;position:absolute;width:\", \";height:\", \";\"], _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"misc\"].input.icon.width, _Tokens__WEBPACK_IMPORTED_MODULE_1__[\"misc\"].input.icon.height);\nvar ErrorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({\n  displayName: \"style__ErrorWrapper\",\n  componentId: \"t4p2yc-3\"\n})([\"top:59px;left:0;width:100%;height:45px;display:flex;position:absolute;align-items:center;background:#fef3f1;justify-content:space-around;\"]);\nvar ErrorMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({\n  displayName: \"style__ErrorMsg\",\n  componentId: \"t4p2yc-4\"\n})([\"color:#cf2a2a;\"]);\n\n//# sourceURL=webpack:///./client/components/TextInput/style.js?");

/***/ }),

/***/ "./client/components/Tokens/colors.js":
/*!********************************************!*\
  !*** ./client/components/Tokens/colors.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar primaryColor = '#2396b0',\n    secondaryColor = '#5cd5f0',\n    white = '#fff',\n    black = '#000',\n    defaultColor = '#f1f1f1';\nvar colors = {\n  primary: primaryColor,\n  secondary: secondaryColor,\n  input: {\n    background: white,\n    text: primaryColor,\n    border: primaryColor,\n    placeholder: primaryColor\n  },\n  button: {\n    primary: {\n      text: white,\n      background: secondaryColor\n    },\n    default: {\n      text: black,\n      background: defaultColor\n    }\n  },\n  seats: {\n    booked: {\n      background: defaultColor\n    },\n    available: {\n      background: secondaryColor\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (colors);\n\n//# sourceURL=webpack:///./client/components/Tokens/colors.js?");

/***/ }),

/***/ "./client/components/Tokens/index.js":
/*!*******************************************!*\
  !*** ./client/components/Tokens/index.js ***!
  \*******************************************/
/*! exports provided: colors, misc, fonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./client/components/Tokens/colors.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"colors\", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc */ \"./client/components/Tokens/misc.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"misc\", function() { return _misc__WEBPACK_IMPORTED_MODULE_1__[\"misc\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fonts\", function() { return _misc__WEBPACK_IMPORTED_MODULE_1__[\"fonts\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/Tokens/index.js?");

/***/ }),

/***/ "./client/components/Tokens/misc.js":
/*!******************************************!*\
  !*** ./client/components/Tokens/misc.js ***!
  \******************************************/
/*! exports provided: misc, fonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"misc\", function() { return misc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fonts\", function() { return fonts; });\nvar misc = {\n  input: {\n    height: '56px',\n    width: '100%',\n    icon: {\n      height: '22px',\n      width: '22px'\n    }\n  }\n};\nvar fonts = {\n  input: {\n    fontSize: '18px',\n    fontWeight: '400'\n  },\n  button: {\n    fontSize: '18px',\n    fontWeight: '400'\n  }\n};\n\n//# sourceURL=webpack:///./client/components/Tokens/misc.js?");

/***/ }),

/***/ "./client/components/logo/index.js":
/*!*****************************************!*\
  !*** ./client/components/logo/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo */ \"./client/components/logo/logo.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_logo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./client/components/logo/index.js?");

/***/ }),

/***/ "./client/components/logo/logo.js":
/*!****************************************!*\
  !*** ./client/components/logo/logo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({\n  displayName: \"logo__TextWrapper\",\n  componentId: \"nm9i2-0\"\n})([\"display:flex;align-items:center;justify-content:flex-start;\"]);\nvar LogoImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({\n  displayName: \"logo__LogoImg\",\n  componentId: \"nm9i2-1\"\n})([\"width:40px;height:40px;\"]);\nvar LogoText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({\n  displayName: \"logo__LogoText\",\n  componentId: \"nm9i2-2\"\n})([\"color:#fff;font-size:25px;font-weight:500;padding-left:10px;\"]);\n\nvar Logo = function Logo() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoImg, {\n    alt: \"blubus logo\",\n    src: \"../../public/images/BluBus_192x192.png\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoText, null, \"BluBus\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\n\n//# sourceURL=webpack:///./client/components/logo/logo.js?");

/***/ }),

/***/ "./client/reducers/homePage.js":
/*!*************************************!*\
  !*** ./client/reducers/homePage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return homePage; });\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction homePage() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    isLoading: false,\n    isError: false,\n    errorMsg: '',\n    data: {},\n    searchResult: []\n  };\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'LOAD_SEARCH':\n      return _objectSpread({}, state, {\n        isLoading: true\n      });\n\n    case 'RECEIVE_SEARCH':\n      return _objectSpread({}, state, {\n        isLoading: false,\n        data: action.data\n      });\n\n    case 'FAILED_SEARCH':\n      return _objectSpread({}, state, {\n        isLoading: false,\n        isError: true,\n        errorMsg: action.err\n      });\n\n    case 'SEARCH':\n      {\n        var searchResult = state.data.filter(function (item) {\n          return item.city.toLowerCase().indexOf(action.term) > -1;\n        });\n        return _objectSpread({}, state, {\n          searchResult: searchResult\n        });\n      }\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./client/reducers/homePage.js?");

/***/ }),

/***/ "./client/reducers/index.js":
/*!**********************************!*\
  !*** ./client/reducers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _listing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listing */ \"./client/reducers/listing.js\");\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage */ \"./client/reducers/homePage.js\");\n/* harmony import */ var _seatLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seatLayout */ \"./client/reducers/seatLayout.js\");\n/* harmony import */ var _orderSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orderSummary */ \"./client/reducers/orderSummary.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  listing: _listing__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  homePage: _homePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  seatLayout: _seatLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  orderSummary: _orderSummary__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./client/reducers/index.js?");

/***/ }),

/***/ "./client/reducers/listing.js":
/*!************************************!*\
  !*** ./client/reducers/listing.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return listing; });\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar initialState = {\n  isLoading: false,\n  isError: false,\n  items: {},\n  error: ''\n};\nfunction listing() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'REQUEST_LISTING':\n      return _objectSpread({}, state, {\n        isLoading: true\n      });\n\n    case 'RECEIVE_LISTING':\n      return _objectSpread({}, state, {\n        isLoading: false,\n        items: action.data\n      });\n\n    case 'FAILED_LISTING':\n      return _objectSpread({}, state, {\n        isLoading: false,\n        isError: true,\n        error: action.err\n      });\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./client/reducers/listing.js?");

/***/ }),

/***/ "./client/reducers/orderSummary.js":
/*!*****************************************!*\
  !*** ./client/reducers/orderSummary.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return orderSummary; });\nfunction orderSummary() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./client/reducers/orderSummary.js?");

/***/ }),

/***/ "./client/reducers/seatLayout.js":
/*!***************************************!*\
  !*** ./client/reducers/seatLayout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return seatLayout; });\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar initialState = {\n  isLoading: false,\n  isError: false,\n  items: [],\n  error: ''\n};\nfunction seatLayout() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'REQUEST_SEATLAYOUT_DATA':\n      return _objectSpread({}, state, {\n        isLoading: true\n      });\n\n    case 'RECEIVE_SEATLAYOUT_DATA':\n      return _objectSpread({}, state, {\n        isLoading: false,\n        items: action.data\n      });\n\n    case 'FAILED_SEATLAYOUT_DATA':\n      return _objectSpread({}, state, {\n        isLoading: false,\n        isError: true,\n        error: action.err\n      });\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./client/reducers/seatLayout.js?");

/***/ }),

/***/ "./client/routes.js":
/*!**************************!*\
  !*** ./client/routes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_Listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Listing */ \"./client/views/Listing/index.js\");\n/* harmony import */ var _views_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/HomePage */ \"./client/views/HomePage/index.js\");\n/* harmony import */ var _views_SeatLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/SeatLayout */ \"./client/views/SeatLayout/index.js\");\n/* harmony import */ var _views_OrderSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/OrderSummary */ \"./client/views/OrderSummary/index.js\");\n/* harmony import */ var _views_Confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/Confirmation */ \"./client/views/Confirmation/index.js\");\n\n\n\n\n\n\n\n/*\n\tSwitch only renders the first match. Subrouting happens downstream\n\thttps://reacttraining.com/react-router/web/api/Switch\n*/\n\nvar App = function App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _views_HomePage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/listing\",\n    component: _views_Listing__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/seatlayout\",\n    component: _views_SeatLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/summary\",\n    component: _views_OrderSummary__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/confirmation\",\n    component: _views_Confirmation__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./client/routes.js?");

/***/ }),

/***/ "./client/utils/constants.js":
/*!***********************************!*\
  !*** ./client/utils/constants.js ***!
  \***********************************/
/*! exports provided: HOME_PG_API_URL, LISTING_API_URL, SEATLAYOUT_API_URL, MAX_ITEMS_IN_SEARCH_RESULTS, mobilePattern, numberPattern, emailPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOME_PG_API_URL\", function() { return HOME_PG_API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LISTING_API_URL\", function() { return LISTING_API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEATLAYOUT_API_URL\", function() { return SEATLAYOUT_API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAX_ITEMS_IN_SEARCH_RESULTS\", function() { return MAX_ITEMS_IN_SEARCH_RESULTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mobilePattern\", function() { return mobilePattern; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"numberPattern\", function() { return numberPattern; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emailPattern\", function() { return emailPattern; });\nvar HOME_PG_API_URL = 'https://api.myjson.com/bins/13oj0a';\nvar LISTING_API_URL = 'https://api.myjson.com/bins/o8l72';\nvar SEATLAYOUT_API_URL = 'https://api.myjson.com/bins/syq4a';\nvar MAX_ITEMS_IN_SEARCH_RESULTS = 5; // PATTERNS\n\nvar mobilePattern = /^\\d{10}$/;\nvar numberPattern = /^\\d{1,2}$/;\nvar emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/;\n\n//# sourceURL=webpack:///./client/utils/constants.js?");

/***/ }),

/***/ "./client/utils/helpers.js":
/*!*********************************!*\
  !*** ./client/utils/helpers.js ***!
  \*********************************/
/*! exports provided: default, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return logErrorToService; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* global Raven, __ENV__ */\nfunction logErrorToService(error, info) {\n  if (typeof Raven !== 'undefined' && __ENV__ === 'PRODUCTION') {\n    Raven.captureException(error, {\n      extra: info\n    });\n  }\n}\n/**\n * Sets debouncing for function passed in callback\n * @param {*} callBack Function to be called after delay\n * @param {*} delay Time in milliseconds after which the function should be called\n */\n\nfunction debounce(callBack, delay) {\n  var tId;\n  return function (value) {\n    clearTimeout(tId);\n    tId = setTimeout(function () {\n      callBack(value);\n    }, delay || 300);\n  };\n}\n\n//# sourceURL=webpack:///./client/utils/helpers.js?");

/***/ }),

/***/ "./client/utils/uid.js":
/*!*****************************!*\
  !*** ./client/utils/uid.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return Math.random().toString(36).substring(2);\n});\n\n//# sourceURL=webpack:///./client/utils/uid.js?");

/***/ }),

/***/ "./client/views/Confirmation/index.js":
/*!********************************************!*\
  !*** ./client/views/Confirmation/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header/Header */ \"./client/components/Header/Header.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./client/views/Confirmation/style.js\");\n\n\n\n\nvar Confirmation = function Confirmation() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"Wrapper\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"CheckMark\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    alt: \"confirmation\",\n    src: \"https://res.cloudinary.com/ddbxa4afa/image/upload/v1528637133/blubus/tick.svg\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"ConfirmMsg\"], null, \"Your tickets have been confirmed. Enjoy your ride.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"InfoWrapper\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Kigali\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"BusImage\"], {\n    alt: \"bus\",\n    src: \"https://res.cloudinary.com/ddbxa4afa/image/upload/v1528636704/blubus/bus.svg\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Kibuye\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Tickets\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"2\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Bus Fare\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"400 $\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Booking Fee\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"40 $\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Total\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"440 $\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Confirmation);\n\n//# sourceURL=webpack:///./client/views/Confirmation/index.js?");

/***/ }),

/***/ "./client/views/Confirmation/style.js":
/*!********************************************!*\
  !*** ./client/views/Confirmation/style.js ***!
  \********************************************/
/*! exports provided: Wrapper, InfoWrapper, BusImage, CheckMark, ConfirmMsg, ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InfoWrapper\", function() { return InfoWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BusImage\", function() { return BusImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CheckMark\", function() { return CheckMark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConfirmMsg\", function() { return ConfirmMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListItem\", function() { return ListItem; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({\n  displayName: \"style__Wrapper\",\n  componentId: \"s8s56z8-0\"\n})([\"margin:20px;\"]);\nvar InfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({\n  displayName: \"style__InfoWrapper\",\n  componentId: \"s8s56z8-1\"\n})([\"display:flex;justify-content:space-around;align-items:center;\"]);\nvar BusImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({\n  displayName: \"style__BusImage\",\n  componentId: \"s8s56z8-2\"\n})([\"height:80px;width:80px;\"]);\nvar CheckMark = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({\n  displayName: \"style__CheckMark\",\n  componentId: \"s8s56z8-3\"\n})([\"display:flex;align-items:center;justify-content:center;img{height:40px;width:40px;}\"]);\nvar ConfirmMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({\n  displayName: \"style__ConfirmMsg\",\n  componentId: \"s8s56z8-4\"\n})([\"padding:50px;text-align:center;\"]);\nvar ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({\n  displayName: \"style__ListItem\",\n  componentId: \"s8s56z8-5\"\n})([\"display:flex;line-height:30px;align-items:center;justify-content:space-between;\"]);\n\n//# sourceURL=webpack:///./client/views/Confirmation/style.js?");

/***/ }),

/***/ "./client/views/HomePage/Search.js":
/*!*****************************************!*\
  !*** ./client/views/HomePage/Search.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchResults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchResults */ \"./client/views/HomePage/SearchResults.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helpers */ \"./client/utils/helpers.js\");\n/* harmony import */ var _actions_homePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/homePage */ \"./client/actions/homePage.js\");\n/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TextInput */ \"./client/components/TextInput/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/constants */ \"./client/utils/constants.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\n\n\n\n\nvar Search =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Search, _Component);\n\n  function Search() {\n    var _this;\n\n    _classCallCheck(this, Search);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this));\n    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.updateChange = _this.updateChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.searchDebounced = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__[\"debounce\"])(_this.updateChange, 500);\n    _this.resultItemSelection = _this.resultItemSelection.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.state = {\n      value: '',\n      showResults: false\n    };\n    return _this;\n  }\n\n  _createClass(Search, [{\n    key: \"updateChange\",\n    value: function updateChange(value) {\n      this.props.dispatch(Object(_actions_homePage__WEBPACK_IMPORTED_MODULE_4__[\"search\"])(value));\n    }\n  }, {\n    key: \"handleChange\",\n    value: function handleChange(value) {\n      this.setState({\n        value: value\n      });\n      value.length === 0 ? this.setState({\n        showResults: false\n      }) : this.setState({\n        showResults: true\n      });\n      this.searchDebounced(value);\n    }\n  }, {\n    key: \"resultItemSelection\",\n    value: function resultItemSelection(data) {\n      this.props.handleSearchResultSelection(data);\n      this.setState({\n        value: data.city,\n        showResults: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          result = _this$props.result,\n          icon = _this$props.icon,\n          type = _this$props.type,\n          placeholder = _this$props.placeholder,\n          resultItems = result ? result.slice(0, _utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"MAX_ITEMS_IN_SEARCH_RESULTS\"]) : '';\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: type,\n        icon: icon,\n        value: this.state.value,\n        placeholder: placeholder,\n        handleChange: this.handleChange\n      }), this.state.showResults && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchResults__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        result: resultItems,\n        handleSelection: this.resultItemSelection\n      }));\n    }\n  }]);\n\n  return Search;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nSearch.defaultProps = {\n  result: [],\n  type: 'text',\n  placeholder: '',\n  icon: 'https://res.cloudinary.com/ddbxa4afa/image/upload/v1527944418/blubus/location.svg'\n};\nSearch.propTypes = {\n  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  result: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any),\n  handleSearchResultSelection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\n//# sourceURL=webpack:///./client/views/HomePage/Search.js?");

/***/ }),

/***/ "./client/views/HomePage/SearchResults.js":
/*!************************************************!*\
  !*** ./client/views/HomePage/SearchResults.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_uid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/uid */ \"./client/utils/uid.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./client/views/HomePage/style.js\");\n\n\n\n\nvar ListItem = function ListItem(props) {\n  var handleSelection = function handleSelection() {\n    props.handleSelection(props.data);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"ResultsListItem\"], {\n    onClick: handleSelection\n  }, props.children);\n};\n\nvar SearchResults = function SearchResults(props) {\n  var handleSelection = function handleSelection(data) {\n    props.handleSelection(data);\n  };\n\n  var result = props.result;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"SearchResultsWrapper\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"ResultsList\"], null, result && result.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {\n      data: item,\n      key: Object(_utils_uid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n      handleSelection: handleSelection\n    }, item.city);\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResults);\n\n//# sourceURL=webpack:///./client/views/HomePage/SearchResults.js?");

/***/ }),

/***/ "./client/views/HomePage/actionCreators.js":
/*!*************************************************!*\
  !*** ./client/views/HomePage/actionCreators.js ***!
  \*************************************************/
/*! exports provided: fetchSearch, dummy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchSearch\", function() { return fetchSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dummy\", function() { return dummy; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/homePage */ \"./client/actions/homePage.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ \"./client/utils/constants.js\");\n\n\n\nfunction fetchSearch() {\n  return function (dispatch) {\n    dispatch(Object(_actions_homePage__WEBPACK_IMPORTED_MODULE_1__[\"loadingSearch\"])());\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_utils_constants__WEBPACK_IMPORTED_MODULE_2__[\"HOME_PG_API_URL\"]).then(function (response) {\n      return dispatch(Object(_actions_homePage__WEBPACK_IMPORTED_MODULE_1__[\"receiveSearch\"])(response.data.result));\n    }).catch(function (err) {\n      return dispatch(Object(_actions_homePage__WEBPACK_IMPORTED_MODULE_1__[\"failedSearch\"])(err.message));\n    });\n  };\n}\nfunction dummy() {}\n\n//# sourceURL=webpack:///./client/views/HomePage/actionCreators.js?");

/***/ }),

/***/ "./client/views/HomePage/index.js":
/*!****************************************!*\
  !*** ./client/views/HomePage/index.js ***!
  \****************************************/
/*! exports provided: HomePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePage\", function() { return HomePage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search */ \"./client/views/HomePage/Search.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./client/views/HomePage/style.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button */ \"./client/components/Button/index.js\");\n/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionCreators */ \"./client/views/HomePage/actionCreators.js\");\n/* harmony import */ var _components_Calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Calendar */ \"./client/components/Calendar/index.js\");\n/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/TextInput */ \"./client/components/TextInput/index.js\");\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Header/Header */ \"./client/components/Header/Header.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n // import Calendar from 'rc-calendar';\n\n\n\n\n\n\n\n\n\n\nvar HomePage =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(HomePage, _Component);\n\n  function HomePage() {\n    var _this;\n\n    _classCallCheck(this, HomePage);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(HomePage).call(this));\n    _assertThisInitialized(_assertThisInitialized(_this)).handleFrom = _this.handleFrom.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _assertThisInitialized(_assertThisInitialized(_this)).handleSearchClick = _this.handleSearchClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(HomePage, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.dispatch(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_6__[\"fetchSearch\"])());\n    }\n  }, {\n    key: \"handleFrom\",\n    value: function handleFrom(value) {\n      console.log('From', value);\n    }\n  }, {\n    key: \"handleTo\",\n    value: function handleTo(value) {\n      console.log('To', value);\n    }\n  }, {\n    key: \"handleSearchClick\",\n    value: function handleSearchClick() {\n      this.props.history.push('/listing');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"PageWrapper\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        type: \"text\",\n        dispatch: this.props.dispatch,\n        handleSearchResultSelection: this.handleFrom,\n        placeholder: \"Choose your location12356\",\n        result: this.props.homePage.searchResult,\n        icon: \"https://res.cloudinary.com/ddbxa4afa/image/upload/v1527944418/blubus/location.svg\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          marginTop: '70px',\n          marginBottom: '70px'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        type: \"text\",\n        dispatch: this.props.dispatch,\n        handleSearchResultSelection: this.handleTo,\n        placeholder: \"Choose your destination 9981\",\n        result: this.props.homePage.searchResult,\n        icon: \"https://res.cloudinary.com/ddbxa4afa/image/upload/v1527944416/blubus/destination.svg\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Calendar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        showToday: true,\n        showTimePicker: true,\n        placeholder: \"Choose date for journey\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          marginTop: '70px'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        appearance: \"primary\",\n        handleClick: this.handleSearchClick\n      }, \"Search Buses 40\")))));\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    homePage: state.homePage\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(HomePage)));\n\n//# sourceURL=webpack:///./client/views/HomePage/index.js?");

/***/ }),

/***/ "./client/views/HomePage/style.js":
/*!****************************************!*\
  !*** ./client/views/HomePage/style.js ***!
  \****************************************/
/*! exports provided: PageWrapper, SearchResultsWrapper, ResultsList, ResultsListItem, ErrorWrapper, ErrorImg, ErrorMsg, GoToHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PageWrapper\", function() { return PageWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchResultsWrapper\", function() { return SearchResultsWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResultsList\", function() { return ResultsList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResultsListItem\", function() { return ResultsListItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorWrapper\", function() { return ErrorWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorImg\", function() { return ErrorImg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorMsg\", function() { return ErrorMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GoToHome\", function() { return GoToHome; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Tokens */ \"./client/components/Tokens/index.js\");\n\n\nvar PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({\n  displayName: \"style__PageWrapper\",\n  componentId: \"xm59nd-0\"\n})([\"margin:24px;\"]);\nvar SearchResultsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({\n  displayName: \"style__SearchResultsWrapper\",\n  componentId: \"xm59nd-1\"\n})([\"top:0;z-index:99;width:100%;background:#fff;position:relative;\"]);\nvar ResultsList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({\n  displayName: \"style__ResultsList\",\n  componentId: \"xm59nd-2\"\n})([\"list-style-type:none;\"]);\nvar ResultsListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({\n  displayName: \"style__ResultsListItem\",\n  componentId: \"xm59nd-3\"\n})([\"min-width:0;margin:10px;display:flex;font-size:21px;font-weight:400;text-align:center;align-items:center;padding:10px 3px 11px 10px;border-bottom:1px solid #e5e5e5;\"]);\nvar ErrorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({\n  displayName: \"style__ErrorWrapper\",\n  componentId: \"xm59nd-4\"\n})([\"display:flex;min-height:500px;align-items:center;flex-direction:column;justify-content:center;\"]);\nvar ErrorImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({\n  displayName: \"style__ErrorImg\",\n  componentId: \"xm59nd-5\"\n})([\"width:80px;height:80px;\"]);\nvar ErrorMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({\n  displayName: \"style__ErrorMsg\",\n  componentId: \"xm59nd-6\"\n})([\"padding:25px;line-height:25px;text-align:center;\"]);\nvar GoToHome = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({\n  displayName: \"style__GoToHome\",\n  componentId: \"xm59nd-7\"\n})([\"position:fixed;bottom:0;width:90%;font-size:15px;padding:20px 15px;background:\", \";color:\", \";border-radius:5px;\"], _components_Tokens__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].button.primary.background, _components_Tokens__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].button.primary.text);\n\n//# sourceURL=webpack:///./client/views/HomePage/style.js?");

/***/ }),

/***/ "./client/views/Listing/ListingCard.js":
/*!*********************************************!*\
  !*** ./client/views/Listing/ListingCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./client/views/Listing/style.js\");\n\n\n\nvar ListingCard = function ListingCard(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_style__WEBPACK_IMPORTED_MODULE_1__[\"CardWrapper\"], {\n    onClick: props.clickHandler\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_style__WEBPACK_IMPORTED_MODULE_1__[\"CardHeader\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_style__WEBPACK_IMPORTED_MODULE_1__[\"CompanyName\"], null, props.companyName), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_style__WEBPACK_IMPORTED_MODULE_1__[\"Currency\"], null, props.price, \" \", props.currency)), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_style__WEBPACK_IMPORTED_MODULE_1__[\"Timings\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, props.arrivalTime), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_style__WEBPACK_IMPORTED_MODULE_1__[\"BusIcon\"], {\n    alt: \"traveling-bus\",\n    src: \"https://res.cloudinary.com/ddbxa4afa/image/upload/v1528048630/blubus/traveling-bus.svg\"\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, props.departureTime), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_style__WEBPACK_IMPORTED_MODULE_1__[\"TimerWrapper\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_style__WEBPACK_IMPORTED_MODULE_1__[\"Timer\"], {\n    alt: \"timer\",\n    src: \"https://res.cloudinary.com/ddbxa4afa/image/upload/v1528048884/blubus/timer.svg\"\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, props.travelTime, \" hours\"))));\n};\n\nListingCard.defaultProps = {\n  price: '',\n  currency: '',\n  travelTime: '',\n  arrivalTime: '',\n  companyName: '',\n  departureTime: '',\n  clickHandler: function clickHandler() {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListingCard);\n\n//# sourceURL=webpack:///./client/views/Listing/ListingCard.js?");

/***/ }),

/***/ "./client/views/Listing/actionCreators.js":
/*!************************************************!*\
  !*** ./client/views/Listing/actionCreators.js ***!
  \************************************************/
/*! exports provided: fetchListingData, fetchListingDataIfNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchListingData\", function() { return fetchListingData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchListingDataIfNeeded\", function() { return fetchListingDataIfNeeded; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ \"./client/utils/constants.js\");\n/* harmony import */ var _actions_listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/listing */ \"./client/actions/listing.js\");\n\n\n\nvar fetchListingData = function fetchListingData() {\n  return function (dispatch) {\n    dispatch(Object(_actions_listing__WEBPACK_IMPORTED_MODULE_2__[\"requestListing\"])());\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"LISTING_API_URL\"]).then(function (response) {\n      return dispatch(Object(_actions_listing__WEBPACK_IMPORTED_MODULE_2__[\"receiveListing\"])(response.data.result));\n    }).catch(function (err) {\n      return dispatch(Object(_actions_listing__WEBPACK_IMPORTED_MODULE_2__[\"invalidResponse\"])(err.message));\n    });\n  };\n};\nfunction fetchListingDataIfNeeded() {\n  return function (dispatch, getState) {\n    var _getState = getState(),\n        listing = _getState.listing;\n\n    if (listing.items && listing.items.services && listing.items.services.length) {\n      return false;\n    }\n\n    dispatch(fetchListingData());\n  };\n}\n\n//# sourceURL=webpack:///./client/views/Listing/actionCreators.js?");

/***/ }),

/***/ "./client/views/Listing/index.js":
/*!***************************************!*\
  !*** ./client/views/Listing/index.js ***!
  \***************************************/
/*! exports provided: Listing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Listing\", function() { return Listing; });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_uid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/uid */ \"./client/utils/uid.js\");\n/* harmony import */ var _ListingCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListingCard */ \"./client/views/Listing/ListingCard.js\");\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Header/Header */ \"./client/components/Header/Header.js\");\n/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionCreators */ \"./client/views/Listing/actionCreators.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ \"./client/views/Listing/style.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\n\n\n\n\nvar Listing =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Listing, _Component);\n\n  function Listing() {\n    var _this;\n\n    _classCallCheck(this, Listing);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Listing).call(this));\n    _assertThisInitialized(_assertThisInitialized(_this)).onCardClick = _this.onCardClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(Listing, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.dispatch(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_6__[\"fetchListingDataIfNeeded\"])());\n    }\n  }, {\n    key: \"onCardClick\",\n    value: function onCardClick() {\n      this.props.history.push('/seatlayout');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props$listing$i = this.props.listing.items,\n          services = _this$props$listing$i.services,\n          journeyDetails = _this$props$listing$i.journeyDetails;\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"section\", null, journeyDetails && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__[\"JourneyDetailWrapper\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h2\", null, journeyDetails.from), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__[\"FromToArrow\"], {\n        alt: \"arrow\",\n        src: \"https://res.cloudinary.com/ddbxa4afa/image/upload/v1528049570/blubus/right-arrow.svg\"\n      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h2\", null, journeyDetails.to))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__[\"ListViewWrapper\"], null, services && services.map(function (item) {\n        var companyName = item.companyName,\n            busType = item.busType,\n            dep = item.dep,\n            arr = item.arr,\n            travelTime = item.travelTime,\n            ticketPrice = item.ticketPrice,\n            currency = item.currency;\n        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListingCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          key: Object(_utils_uid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n          busType: busType,\n          arrivalTime: arr,\n          departureTime: dep,\n          price: ticketPrice,\n          currency: currency,\n          travelTime: travelTime,\n          companyName: companyName,\n          clickHandler: _this2.onCardClick\n        });\n      })));\n    }\n  }]);\n\n  return Listing;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    listing: state.listing\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Listing)));\n\n//# sourceURL=webpack:///./client/views/Listing/index.js?");

/***/ }),

/***/ "./client/views/Listing/style.js":
/*!***************************************!*\
  !*** ./client/views/Listing/style.js ***!
  \***************************************/
/*! exports provided: ListViewWrapper, CardWrapper, JourneyDetailWrapper, FromToArrow, CardHeader, CompanyName, Currency, Timings, TimerWrapper, BusIcon, Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListViewWrapper\", function() { return ListViewWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardWrapper\", function() { return CardWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JourneyDetailWrapper\", function() { return JourneyDetailWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FromToArrow\", function() { return FromToArrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardHeader\", function() { return CardHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CompanyName\", function() { return CompanyName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Currency\", function() { return Currency; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Timings\", function() { return Timings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TimerWrapper\", function() { return TimerWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BusIcon\", function() { return BusIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Timer\", function() { return Timer; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ListViewWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({\n  displayName: \"style__ListViewWrapper\",\n  componentId: \"s1qs7nmh-0\"\n})([\"margin:20px;\"]);\nvar CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({\n  displayName: \"style__CardWrapper\",\n  componentId: \"s1qs7nmh-1\"\n})([\"margin:20px 0;padding:24px 0;border-top:1px solid #e5dcdc;\"]);\nvar JourneyDetailWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({\n  displayName: \"style__JourneyDetailWrapper\",\n  componentId: \"s1qs7nmh-2\"\n})([\"display:flex;justify-content:center;align-items:center;margin:20px;\"]);\nvar FromToArrow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({\n  displayName: \"style__FromToArrow\",\n  componentId: \"s1qs7nmh-3\"\n})([\"height:25px;width:35px;padding:0 15px;\"]);\nvar CardHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({\n  displayName: \"style__CardHeader\",\n  componentId: \"s1qs7nmh-4\"\n})([\"display:flex;justify-content:space-between;align-items:center;\"]);\nvar CompanyName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({\n  displayName: \"style__CompanyName\",\n  componentId: \"s1qs7nmh-5\"\n})([\"font-size:21px;font-weight:500;\"]);\nvar Currency = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({\n  displayName: \"style__Currency\",\n  componentId: \"s1qs7nmh-6\"\n})([\"font-size:18px;font-weight:400;\"]);\nvar Timings = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({\n  displayName: \"style__Timings\",\n  componentId: \"s1qs7nmh-7\"\n})([\"padding-top:20px;display:flex;justify-content:space-between;align-items:center;\"]);\nvar TimerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"style__TimerWrapper\",\n  componentId: \"s1qs7nmh-8\"\n})([\"display:flex;align-items:center;\"]);\nvar BusIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({\n  displayName: \"style__BusIcon\",\n  componentId: \"s1qs7nmh-9\"\n})([\"height:31px;width:31px;\"]);\nvar Timer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({\n  displayName: \"style__Timer\",\n  componentId: \"s1qs7nmh-10\"\n})([\"height:24px;width:24px;padding-right:10px;\"]);\n\n//# sourceURL=webpack:///./client/views/Listing/style.js?");

/***/ }),

/***/ "./client/views/OrderSummary/Summary.js":
/*!**********************************************!*\
  !*** ./client/views/OrderSummary/Summary.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Button */ \"./client/components/Button/index.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./client/views/OrderSummary/style.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\n\n\nvar Summary =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Summary, _Component);\n\n  function Summary() {\n    var _this;\n\n    _classCallCheck(this, Summary);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Summary).call(this));\n    _this.payNow = _this.payNow.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(Summary, [{\n    key: \"payNow\",\n    value: function payNow() {\n      this.props.history.push('/confirmation');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"article\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"SummaryInfo\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"Kigali\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n        alt: \"to\",\n        src: \"https://res.cloudinary.com/ddbxa4afa/image/upload/v1528049570/blubus/right-arrow.svg\"\n      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"Kibuye\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"SummaryInfoList\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"SummaryInfoItem\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"Bus Fare\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"400 $\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"SummaryInfoItem\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"Booking Fare\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"40 $\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"SummaryInfoItem\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"Total\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"440 $\"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        appearance: \"primary\",\n        handleClick: this.payNow\n      }, \"Pay Now\")));\n    }\n  }]);\n\n  return Summary;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"]);\n\nSummary.propTypes = {\n  history: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({\n    push: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func\n  }).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Summary));\n\n//# sourceURL=webpack:///./client/views/OrderSummary/Summary.js?");

/***/ }),

/***/ "./client/views/OrderSummary/UserDetails.js":
/*!**************************************************!*\
  !*** ./client/views/OrderSummary/UserDetails.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button */ \"./client/components/Button/index.js\");\n/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TextInput */ \"./client/components/TextInput/index.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./client/views/OrderSummary/style.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ \"./client/utils/constants.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\n\n\n\nvar UserDetails =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(UserDetails, _Component);\n\n  function UserDetails() {\n    var _this;\n\n    _classCallCheck(this, UserDetails);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserDetails).call(this));\n    _this.handleAge = _this.handleAge.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleName = _this.handleName.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleEmail = _this.handleEmail.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleMobile = _this.handleMobile.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.confirmDetails = _this.confirmDetails.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.state = {\n      age: '',\n      name: '',\n      email: '',\n      mobile: '',\n      showAgeError: false,\n      showNameError: false,\n      showEmailError: false,\n      showMobileError: false\n    };\n    return _this;\n  }\n\n  _createClass(UserDetails, [{\n    key: \"validateInputAgainstPattern\",\n    value: function validateInputAgainstPattern(pattern, value) {\n      var regExPattern = new RegExp(pattern);\n      return regExPattern.test(value);\n    }\n  }, {\n    key: \"handleEmail\",\n    value: function handleEmail(value) {\n      this.setState({\n        email: value\n      });\n      var isValidPattern = this.validateInputAgainstPattern(_utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"emailPattern\"], value);\n      !isValidPattern && this.setState({\n        showEmailError: true\n      });\n      isValidPattern && this.setState({\n        showEmailError: false\n      });\n    }\n  }, {\n    key: \"handleMobile\",\n    value: function handleMobile(value) {\n      this.setState({\n        mobile: value\n      });\n      var isValidPattern = this.validateInputAgainstPattern(_utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"mobilePattern\"], value);\n      !isValidPattern && this.setState({\n        showMobileError: true\n      });\n      isValidPattern && this.setState({\n        showMobileError: false\n      });\n    }\n  }, {\n    key: \"handleName\",\n    value: function handleName(value) {\n      this.setState({\n        name: value\n      });\n\n      if (value && value.length > 0) {\n        this.setState({\n          showNameError: false\n        });\n      } else {\n        this.setState({\n          showNameError: true\n        });\n      }\n    }\n  }, {\n    key: \"handleAge\",\n    value: function handleAge(value) {\n      this.setState({\n        age: value\n      });\n      var isValidPattern = this.validateInputAgainstPattern(_utils_constants__WEBPACK_IMPORTED_MODULE_5__[\"numberPattern\"], value);\n      !isValidPattern && this.setState({\n        showAgeError: true\n      });\n      isValidPattern && this.setState({\n        showAgeError: false\n      });\n    }\n  }, {\n    key: \"confirmDetails\",\n    value: function confirmDetails() {\n      if (!this.state.showMobileError && !this.state.showEmailError && !this.state.showNameError && !this.state.showAgeError) {\n        // Update user details\n        this.props.handleOrderSummary(true);\n      }\n\n      this.handleEmail(this.state.email);\n      this.handleMobile(this.state.mobile);\n      this.handleAge(this.state.age);\n      this.handleName(this.state.name);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"InfoHeader\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h2\", null, \"Contact Details\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"ContactInfo\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        type: \"email\",\n        value: this.state.email,\n        placeholder: \"Enter your email\",\n        handleChange: this.handleEmail,\n        error: \"please enter a valid email\",\n        showError: this.state.showEmailError,\n        icon: \"https://res.cloudinary.com/ddbxa4afa/image/upload/v1528611235/blubus/email.svg\"\n      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        type: \"tel\",\n        value: this.state.mobile,\n        handleChange: this.handleMobile,\n        placeholder: \"Enter your mobile\",\n        error: \"please enter a valid mobile\",\n        showError: this.state.showMobileError,\n        icon: \"https://res.cloudinary.com/ddbxa4afa/image/upload/v1528611234/blubus/mobile.svg\"\n      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"InfoHeader\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h2\", null, \"Passenger Details\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"PassengerInfo\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"article\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        type: \"text\",\n        value: this.state.name,\n        placeholder: \"Enter your name\",\n        handleChange: this.handleName,\n        error: \"please enter your name\",\n        showError: this.state.showNameError,\n        icon: \"https://res.cloudinary.com/ddbxa4afa/image/upload/v1528623999/blubus/user.svg\"\n      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        type: \"number\",\n        value: this.state.age,\n        placeholder: \"Enter your age\",\n        handleChange: this.handleAge,\n        error: \"please enter a valid age\",\n        showError: this.state.showAgeError,\n        icon: \"https://res.cloudinary.com/ddbxa4afa/image/upload/v1528624264/blubus/info.svg\"\n      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"ButtonWrapper\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        appearance: \"primary\",\n        handleClick: this.confirmDetails\n      }, \"Continue Booking\")));\n    }\n  }]);\n\n  return UserDetails;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"]);\n\nUserDetails.propTypes = {\n  handleOrderSummary: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserDetails);\n\n//# sourceURL=webpack:///./client/views/OrderSummary/UserDetails.js?");

/***/ }),

/***/ "./client/views/OrderSummary/index.js":
/*!********************************************!*\
  !*** ./client/views/OrderSummary/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary */ \"./client/views/OrderSummary/Summary.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./client/views/OrderSummary/style.js\");\n/* harmony import */ var _UserDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserDetails */ \"./client/views/OrderSummary/UserDetails.js\");\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header/Header */ \"./client/components/Header/Header.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\n\n\nvar OrderSummary =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(OrderSummary, _Component);\n\n  function OrderSummary() {\n    var _this;\n\n    _classCallCheck(this, OrderSummary);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrderSummary).call(this));\n    _this.state = {\n      showOrderSummary: false\n    };\n    _this.handleOrderSummary = _this.handleOrderSummary.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(OrderSummary, [{\n    key: \"handleOrderSummary\",\n    value: function handleOrderSummary(shouldShow) {\n      this.setState({\n        showOrderSummary: shouldShow\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        style: {\n          position: 'relative',\n          paddingBottom: '30px'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[\"Wrapper\"], null, this.state.showOrderSummary ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Summary__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserDetails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        handleOrderSummary: this.handleOrderSummary\n      })));\n    }\n  }]);\n\n  return OrderSummary;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderSummary);\n\n//# sourceURL=webpack:///./client/views/OrderSummary/index.js?");

/***/ }),

/***/ "./client/views/OrderSummary/style.js":
/*!********************************************!*\
  !*** ./client/views/OrderSummary/style.js ***!
  \********************************************/
/*! exports provided: ButtonWrapper, Wrapper, ContactInfo, PassengerInfo, InfoHeader, SummaryInfo, SummaryInfoList, SummaryInfoItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonWrapper\", function() { return ButtonWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContactInfo\", function() { return ContactInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PassengerInfo\", function() { return PassengerInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InfoHeader\", function() { return InfoHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SummaryInfo\", function() { return SummaryInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SummaryInfoList\", function() { return SummaryInfoList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SummaryInfoItem\", function() { return SummaryInfoItem; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"style__ButtonWrapper\",\n  componentId: \"xnqwtj-0\"\n})([\"position:absolute;left:0;bottom:0;width:100%;height:100px;display:flex;align-items:center;justify-content:center;border-top:1px solid #f2f2f2;button{width:95%;}\"]);\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({\n  displayName: \"style__Wrapper\",\n  componentId: \"xnqwtj-1\"\n})([\"margin:20px;\"]);\nvar ContactInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({\n  displayName: \"style__ContactInfo\",\n  componentId: \"xnqwtj-2\"\n})([\"background:#fff;padding:20px 10px;margin-bottom:40px;border:1px solid #f2f2f2;\"]);\nvar PassengerInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({\n  displayName: \"style__PassengerInfo\",\n  componentId: \"xnqwtj-3\"\n})([\"background:#fff;padding:20px 10px;margin-bottom:100px;border:1px solid #f2f2f2;\"]);\nvar InfoHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({\n  displayName: \"style__InfoHeader\",\n  componentId: \"xnqwtj-4\"\n})([\"h2{font-size:20px;font-weight:400;padding-bottom:5px;}\"]);\nvar SummaryInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"style__SummaryInfo\",\n  componentId: \"xnqwtj-5\"\n})([\"display:flex;font-size:20px;align-items:center;padding-bottom:15px;justify-content:space-evenly;img{width:20px;height:20px;}\"]);\nvar SummaryInfoList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({\n  displayName: \"style__SummaryInfoList\",\n  componentId: \"xnqwtj-6\"\n})([\"margin-bottom:25px;list-style-type:none;\"]);\nvar SummaryInfoItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({\n  displayName: \"style__SummaryInfoItem\",\n  componentId: \"xnqwtj-7\"\n})([\"display:flex;line-height:40px;justify-content:space-between;\"]);\n\n//# sourceURL=webpack:///./client/views/OrderSummary/style.js?");

/***/ }),

/***/ "./client/views/SeatLayout/Legend.js":
/*!*******************************************!*\
  !*** ./client/views/SeatLayout/Legend.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./client/views/SeatLayout/style.js\");\n\n\n\nvar Legend = function Legend(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__[\"LegendWrapper\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__[\"LegendColor\"], {\n    variant: props.variant\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], null, props.children));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Legend);\n\n//# sourceURL=webpack:///./client/views/SeatLayout/Legend.js?");

/***/ }),

/***/ "./client/views/SeatLayout/actionCreators.js":
/*!***************************************************!*\
  !*** ./client/views/SeatLayout/actionCreators.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_seatLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/seatLayout */ \"./client/actions/seatLayout.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ \"./client/utils/constants.js\");\n\n\n\n\nvar fetchData = function fetchData() {\n  return function (dispatch) {\n    dispatch(Object(_actions_seatLayout__WEBPACK_IMPORTED_MODULE_1__[\"fetchingData\"])());\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_utils_constants__WEBPACK_IMPORTED_MODULE_2__[\"SEATLAYOUT_API_URL\"]).then(function (response) {\n      return dispatch(Object(_actions_seatLayout__WEBPACK_IMPORTED_MODULE_1__[\"dataFetchSuccess\"])(response.data.result));\n    }).catch(function (err) {\n      return dispatch(Object(_actions_seatLayout__WEBPACK_IMPORTED_MODULE_1__[\"dataFetchFailed\"])(err));\n    });\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchData);\n\n//# sourceURL=webpack:///./client/views/SeatLayout/actionCreators.js?");

/***/ }),

/***/ "./client/views/SeatLayout/index.js":
/*!******************************************!*\
  !*** ./client/views/SeatLayout/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Legend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Legend */ \"./client/views/SeatLayout/Legend.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ \"./client/views/SeatLayout/style.js\");\n/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionCreators */ \"./client/views/SeatLayout/actionCreators.js\");\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header/Header */ \"./client/components/Header/Header.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\n\n\n\n\n\nvar SeatLayout =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(SeatLayout, _Component);\n\n  function SeatLayout() {\n    var _this;\n\n    _classCallCheck(this, SeatLayout);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SeatLayout).call(this));\n    _this.canvasRef = null;\n\n    _this.setCanvasRef = function (element) {\n      _this.canvasRef = element;\n    };\n\n    _this.updateCanvas = _this.updateCanvas.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleCanvasClick = _this.handleCanvasClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.state = {\n      bookedSeatImg: 'https://res.cloudinary.com/ddbxa4afa/image/upload/v1528543654/blubus/armchair_3.svg',\n      availableSeatImg: 'https://res.cloudinary.com/ddbxa4afa/image/upload/v1528528337/blubus/armchair.svg'\n    };\n    return _this;\n  }\n\n  _createClass(SeatLayout, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.dispatch(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n      this.updateCanvas();\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      this.updateCanvas();\n    }\n  }, {\n    key: \"createImage\",\n    value: function createImage(ctx, offsetX, offsetY, showBlockedImg) {\n      var img = new Image();\n\n      img.onload = function loadImage() {\n        ctx.drawImage(img, offsetX + 0, offsetY + 0, 40, 40);\n      };\n\n      img.src = showBlockedImg ? this.state.bookedSeatImg : this.state.availableSeatImg;\n    }\n  }, {\n    key: \"updateCanvas\",\n    value: function updateCanvas() {\n      var _this2 = this;\n\n      var items = this.props.seatLayout.items;\n      var ctx = this.canvasRef.getContext('2d');\n      var offsetX = 30,\n          offsetY = 20;\n      items && items.map(function (item) {\n        offsetX = 0;\n        item.map(function (row) {\n          row.isAvailable && row.isGangWay === false && _this2.createImage(ctx, offsetX, offsetY, false);\n          row.isAvailable === false && row.isGangWay === false && _this2.createImage(ctx, offsetX, offsetY, true);\n          offsetX += 50;\n          return false;\n        });\n        offsetY += 80;\n        return false;\n      });\n    }\n  }, {\n    key: \"handleCanvasClick\",\n    value: function handleCanvasClick(event) {\n      this.props.history.push('/summary');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"article\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"canvas\", {\n        style: {\n          marginLeft: '20px'\n        },\n        ref: this.setCanvasRef,\n        width: 400,\n        height: 400,\n        onClick: this.handleCanvasClick\n      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_5__[\"LegendWrapper\"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Legend__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        variant: \"booked\"\n      }, \"Booked Seat\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Legend__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        variant: \"available\"\n      }, \"Available Seat\"))));\n    }\n  }]);\n\n  return SeatLayout;\n}(react__WEBPACK_IMPORTED_MODULE_2__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    seatLayout: state.seatLayout\n  };\n};\n\nSeatLayout.defaultProps = {\n  seatLayout: {\n    items: []\n  }\n};\nSeatLayout.propTypes = {\n  seatLayout: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({\n    items: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array\n  }),\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"withRouter\"])(SeatLayout)));\n\n//# sourceURL=webpack:///./client/views/SeatLayout/index.js?");

/***/ }),

/***/ "./client/views/SeatLayout/style.js":
/*!******************************************!*\
  !*** ./client/views/SeatLayout/style.js ***!
  \******************************************/
/*! exports provided: LegendColor, Text, LegendWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LegendColor\", function() { return LegendColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LegendWrapper\", function() { return LegendWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Tokens */ \"./client/components/Tokens/index.js\");\n\n\n\nfunction getAttribute(variant) {\n  switch (variant) {\n    case 'booked':\n      return _components_Tokens__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].seats.booked.background;\n\n    case 'available':\n      return _components_Tokens__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].seats.available.background;\n\n    default:\n      return _components_Tokens__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].defaultColor;\n  }\n}\n\nvar LegendColor = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({\n  displayName: \"style__LegendColor\",\n  componentId: \"s1eingpc-0\"\n})([\"display:inline-block;height:20px;width:20px;border-radius:2px;background-color:\", \";\"], function (props) {\n  return getAttribute(props.variant);\n});\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({\n  displayName: \"style__Text\",\n  componentId: \"s1eingpc-1\"\n})([\"display:inline-block;padding-left:10px;vertical-align:middle;\"]);\nvar LegendWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({\n  displayName: \"style__LegendWrapper\",\n  componentId: \"s1eingpc-2\"\n})([\"display:flex;margin-left:20px;align-items:center;justify-content:flex-start;\"]);\n\n//# sourceURL=webpack:///./client/views/SeatLayout/style.js?");

/***/ }),

/***/ "./ssr/index.js":
/*!**********************!*\
  !*** ./ssr/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var raven__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raven */ \"raven\");\n/* harmony import */ var raven__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(raven__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ \"./ssr/routes.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// eslint-disable-next-line\n\n\n\n\n\n\n\n\nvar isProd = \"development\";\nvar app = new koa__WEBPACK_IMPORTED_MODULE_2___default.a(),\n    router = new koa_router__WEBPACK_IMPORTED_MODULE_5___default.a();\n\nif (isProd === 'PRODUCTION') {\n  raven__WEBPACK_IMPORTED_MODULE_3___default.a.config('https://5b1a4966d5934836ae9f6bc73d5370bb@sentry.io/1232248').install();\n}\n\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_4___default()('.')); // Serving static build files\n\napp.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_6___default()()); // Parsing body of every request\n\n/**\n * Logging time taken by a request\n */\n\napp.use(\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(ctx, next) {\n    var start, end;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            start = new Date();\n            _context.next = 3;\n            return next();\n\n          case 3:\n            end = new Date();\n            console.log(\"\".concat(ctx.method, \" \").concat(ctx.url, \" time taken \").concat(end - start));\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n/**\n * Access bundle names with hash generated by webpack\n */\n\ntry {\n  global.bundles = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync('build/assets.json', 'utf8'));\n} catch (e) {\n  // eslint-disable-next-line\n  throw Error('It looks like you didn\\'t run \"yarn run dev:web\" or \"yarn run build:web\" before starting SSR. Please wait until either of them completes before starting SSR.');\n}\n/**\n * Handling errors globally\n */\n\n\napp.use(\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(ctx, next) {\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return next();\n\n          case 3:\n            _context2.next = 9;\n            break;\n\n          case 5:\n            _context2.prev = 5;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.error(\"Global error handling \".concat(_context2.t0));\n            isProd && raven__WEBPACK_IMPORTED_MODULE_3___default.a.captureException(_context2.t0);\n\n          case 9:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this, [[0, 5]]);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());\nObject(_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(router);\napp.use(router.routes()).use(router.allowedMethods());\napp.listen(process.env.PORT || 8081);\nconsole.log(\"Server side rendering started on \".concat(process.env.PORT || 8081));\n\n//# sourceURL=webpack:///./ssr/index.js?");

/***/ }),

/***/ "./ssr/middlewares/HydrateState.js":
/*!*****************************************!*\
  !*** ./ssr/middlewares/HydrateState.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../client/routes */ \"./client/routes.js\");\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../renderer */ \"./ssr/renderer.js\");\n/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../client/reducers */ \"./client/reducers/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\nvar HydrateState =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(ctx, next) {\n    var store, preloadedState, sheet, context, html, styleTags;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_client_reducers__WEBPACK_IMPORTED_MODULE_8__[\"default\"], ctx.hydrateState), preloadedState = store.getState(), sheet = new styled_components__WEBPACK_IMPORTED_MODULE_5__[\"ServerStyleSheet\"](), context = {};\n            html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n              store: store\n            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"StyleSheetManager\"], {\n              sheet: sheet.instance\n            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"], {\n              location: ctx.request.url,\n              context: context\n            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)))));\n            styleTags = sheet.getStyleTags();\n\n            if (context.url) {\n              // @TODO : Handle redirection properly\n              ctx.response.status(301, {\n                Location: context.url\n              });\n            } else {\n              // we are good, send response\n              ctx.body = Object(_renderer__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(html, preloadedState, styleTags, global.bundles);\n            }\n\n            _context.next = 6;\n            return next();\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function HydrateState(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HydrateState);\n\n//# sourceURL=webpack:///./ssr/middlewares/HydrateState.js?");

/***/ }),

/***/ "./ssr/middlewares/LoadData.js":
/*!*************************************!*\
  !*** ./ssr/middlewares/LoadData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client/utils/constants */ \"./client/utils/constants.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar LoadData =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(ctx, next) {\n    var homePage, response, listing, _response;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.t0 = ctx.request.url;\n            _context.next = _context.t0 === '/home' ? 3 : _context.t0 === '/listing' ? 12 : 21;\n            break;\n\n          case 3:\n            homePage = {};\n            _context.next = 6;\n            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_client_utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"HOME_PG_API_URL\"]);\n\n          case 6:\n            response = _context.sent;\n            homePage.items = response.data.result;\n            ctx.hydrateState = _objectSpread({}, ctx.hydrateState, {\n              homePage: homePage\n            });\n            _context.next = 11;\n            return next();\n\n          case 11:\n            return _context.abrupt(\"break\", 24);\n\n          case 12:\n            listing = {};\n            _context.next = 15;\n            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_client_utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"LISTING_API_URL\"]);\n\n          case 15:\n            _response = _context.sent;\n            listing.items = _response.data.result;\n            ctx.hydrateState = _objectSpread({}, ctx.hydrateState, {\n              listing: listing\n            });\n            _context.next = 20;\n            return next();\n\n          case 20:\n            return _context.abrupt(\"break\", 24);\n\n          case 21:\n            _context.next = 23;\n            return next();\n\n          case 23:\n            return _context.abrupt(\"break\", 24);\n\n          case 24:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function LoadData(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadData);\n\n//# sourceURL=webpack:///./ssr/middlewares/LoadData.js?");

/***/ }),

/***/ "./ssr/renderer.js":
/*!*************************!*\
  !*** ./ssr/renderer.js ***!
  \*************************/
/*! exports provided: createScriptTag, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createScriptTag\", function() { return createScriptTag; });\nvar createScriptTag = function createScriptTag(script) {\n  return \"<script src=\".concat(script, \"></script>\");\n};\n\nvar renderFullPage = function renderFullPage(html, preloadedState, styles, bundles) {\n  return \"<!DOCTYPE html>\\n\\t<html lang=\\\"en\\\">\\n\\t\\n\\t<head>\\n\\t\\t<meta charset=\\\"UTF-8\\\">\\n\\t\\t<title>Bus Booking in Africa</title>\\n\\t\\t<meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n\\t\\t<meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n\\t\\t<!-- multiple icons for IE -->\\n\\t\\t<meta name=\\\"theme-color\\\" content=\\\"#2396b0\\\">\\n\\t\\t<meta name=\\\"msapplication-square310x310logo\\\" content=\\\"icon_largetile.png\\\">\\n\\t\\t<meta name=\\\"apple-mobile-web-app-status-bar-style\\\" content=\\\"black-translucent\\\">\\n\\t\\t<meta name=\\\"description\\\" content=\\\"online bus booking service in Rwanda, \\n\\t\\tbook bus online from anywhere\\\">\\n\\t\\t<!-- icon in the highest resolution we need it for -->\\n\\t\\t<!-- reuse same icon for Safari -->\\n\\t\\t<link rel=\\\"manifest\\\" href=\\\"../public/manifest.json\\\">\\n\\t\\t<link rel=\\\"apple-touch-icon\\\" sizes=\\\"57x57\\\" href=\\\"/apple-icon-57x57.png\\\">\\n\\t\\t<link rel=\\\"apple-touch-icon\\\" sizes=\\\"60x60\\\" href=\\\"/apple-icon-60x60.png\\\">\\n\\t\\t<link rel=\\\"apple-touch-icon\\\" sizes=\\\"72x72\\\" href=\\\"/apple-icon-72x72.png\\\">\\n\\t\\t<link rel=\\\"apple-touch-icon\\\" sizes=\\\"76x76\\\" href=\\\"/apple-icon-76x76.png\\\">\\n\\t\\t<link rel=\\\"icon\\\" sizes=\\\"192x192\\\" href=\\\"/public/images/BluBus_192x192.png\\\">\\n\\t\\t<link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"96x96\\\" href=\\\"/favicon-96x96.png\\\">\\n\\t\\t<link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"/favicon-16x16.png\\\">\\n\\t\\t<link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"/favicon-32x32.png\\\">\\n\\t\\t<link rel=\\\"apple-touch-icon\\\" sizes=\\\"114x114\\\" href=\\\"/apple-icon-114x114.png\\\">\\n\\t\\t<link rel=\\\"apple-touch-icon\\\" sizes=\\\"120x120\\\" href=\\\"/apple-icon-120x120.png\\\">\\n\\t\\t<link rel=\\\"apple-touch-icon\\\" sizes=\\\"144x144\\\" href=\\\"/apple-icon-144x144.png\\\">\\n\\t\\t<link rel=\\\"apple-touch-icon\\\" sizes=\\\"152x152\\\" href=\\\"/apple-icon-152x152.png\\\">\\n\\t\\t<link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"/apple-icon-180x180.png\\\">\\n\\t\\t<link rel=\\\"apple-touch-startup-image\\\" href=\\\"/public/images/BluBus_192x192.png\\\">\\n\\t\\t<link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"192x192\\\"  href=\\\"/android-icon-192x192.png\\\">\\n\\t\\t<meta name=\\\"msapplication-TileColor\\\" content=\\\"#ffffff\\\">\\n\\t\\t<meta name=\\\"msapplication-TileImage\\\" content=\\\"/ms-icon-144x144.png\\\">\\n\\t\\t\".concat(styles, \"\\n\\t</head>\\n\\t\\n\\t<body>\\n\\t\\t<div id=\\\"root\\\">\").concat(html, \"</div>\\n\\t</body>\\n\\t<link href=\\\"https://fonts.googleapis.com/css?family=Roboto\\\" rel=\\\"stylesheet\\\">\\n\\t<script src=https://cdn.ravenjs.com/3.24.0/raven.min.js\\n crossorigin=anonymous></script>\\n\\t<script>\\n\\t\\twindow.__PRELOADED_STATE__ = \").concat(JSON.stringify(preloadedState).replace(/</g, \"\\\\u003c\"), \"\\n\\t\\twindow.shouldAddSW = \").concat(process.env.__DEV__ === true, \"\\n\\t</script>\\n\\t<script src=\").concat(bundles.manifest.js, \"></script>\\n\\t<script src=\").concat(bundles.main.js, \"></script>\\n\\t<script src=\").concat(bundles.vendors.js, \"></script>\\n\\t<script>\\n\\t\\tif('serviceWorker' in navigator) {\\n\\t\\t\\twindow.shouldAddSW && window.addEventListener('load', () => {\\n\\t\\t\\t\\tnavigator.serviceWorker.register('./service-worker.js')\\n\\t\\t\\t})\\n\\t\\t}\\n\\t</script>\\n\\t<!-- Third Party CSS for calendar module -->\\n\\t<link rel=\\\"stylesheet\\\" href=\\\"/public/rc-calendar.css\\\">\\n\\t</html>\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderFullPage);\n\n//# sourceURL=webpack:///./ssr/renderer.js?");

/***/ }),

/***/ "./ssr/routes.js":
/*!***********************!*\
  !*** ./ssr/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middlewares_LoadData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./middlewares/LoadData */ \"./ssr/middlewares/LoadData.js\");\n/* harmony import */ var _middlewares_HydrateState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares/HydrateState */ \"./ssr/middlewares/HydrateState.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (router) {\n  router.get('/', _middlewares_LoadData__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _middlewares_HydrateState__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  router.get('/listing', _middlewares_LoadData__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _middlewares_HydrateState__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\n\n//# sourceURL=webpack:///./ssr/routes.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "raven":
/*!************************!*\
  !*** external "raven" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"raven\");\n\n//# sourceURL=webpack:///external_%22raven%22?");

/***/ }),

/***/ "rc-calendar":
/*!******************************!*\
  !*** external "rc-calendar" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rc-calendar\");\n\n//# sourceURL=webpack:///external_%22rc-calendar%22?");

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });