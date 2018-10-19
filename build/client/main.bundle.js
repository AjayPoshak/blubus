(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./client/actions/homePage.js":
/*!************************************!*\
  !*** ./client/actions/homePage.js ***!
  \************************************/
/*! exports provided: loadingSearch, receiveSearch, failedSearch, search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingSearch", function() { return loadingSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveSearch", function() { return receiveSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failedSearch", function() { return failedSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
var loadingSearch = function loadingSearch() {
  return {
    type: 'LOAD_SEARCH'
  };
};
var receiveSearch = function receiveSearch(data) {
  return {
    type: 'RECEIVE_SEARCH',
    data: data
  };
};
var failedSearch = function failedSearch(err) {
  return {
    type: 'FAILED_SEARCH',
    err: err
  };
};
var search = function search(value) {
  return {
    type: 'SEARCH',
    term: value
  };
};

/***/ }),

/***/ "./client/actions/listing.js":
/*!***********************************!*\
  !*** ./client/actions/listing.js ***!
  \***********************************/
/*! exports provided: requestListing, receiveListing, invalidResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestListing", function() { return requestListing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveListing", function() { return receiveListing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidResponse", function() { return invalidResponse; });
function requestListing() {
  return {
    type: 'REQUEST_LISTING'
  };
}
function receiveListing(data) {
  return {
    type: 'RECEIVE_LISTING',
    data: data
  };
}
function invalidResponse(err) {
  return {
    type: 'FAILED_LISTING',
    err: err
  };
}

/***/ }),

/***/ "./client/actions/seatLayout.js":
/*!**************************************!*\
  !*** ./client/actions/seatLayout.js ***!
  \**************************************/
/*! exports provided: fetchingData, dataFetchSuccess, dataFetchFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchingData", function() { return fetchingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataFetchSuccess", function() { return dataFetchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataFetchFailed", function() { return dataFetchFailed; });
function fetchingData() {
  return {
    type: 'REQUEST_SEATLAYOUT_DATA'
  };
}
function dataFetchSuccess(data) {
  console.log(data);
  return {
    type: 'RECEIVE_SEATLAYOUT_DATA',
    data: data
  };
}
function dataFetchFailed(err) {
  return {
    type: 'FAILED_SEATLAYOUT_DATA',
    err: err
  };
}

/***/ }),

/***/ "./client/components/Button/Button.js":
/*!********************************************!*\
  !*** ./client/components/Button/Button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tokens */ "./client/components/Tokens/index.js");




var appearances = {
  primary: {
    color: _Tokens__WEBPACK_IMPORTED_MODULE_3__["colors"].button.primary.text,
    background: _Tokens__WEBPACK_IMPORTED_MODULE_3__["colors"].button.primary.background
  },
  default: {
    color: _Tokens__WEBPACK_IMPORTED_MODULE_3__["colors"].button.default.text,
    background: _Tokens__WEBPACK_IMPORTED_MODULE_3__["colors"].button.default.background
  }
};

function getAttribute(appearance) {
  var appearanceStyles = appearance || 'default';
  return appearances[appearanceStyles];
}

var ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "Button__ButtonStyle",
  componentId: "gjwxrp-0"
})(["border:none;height:", ";width:", ";font-size:", ";font-weight:", ";color:", ";background:", ";"], _Tokens__WEBPACK_IMPORTED_MODULE_3__["misc"].input.height, _Tokens__WEBPACK_IMPORTED_MODULE_3__["misc"].input.width, _Tokens__WEBPACK_IMPORTED_MODULE_3__["fonts"].button.fontSize, _Tokens__WEBPACK_IMPORTED_MODULE_3__["fonts"].button.fontWeight, function (props) {
  return getAttribute(props.appearance).color;
}, function (props) {
  return getAttribute(props.appearance).background;
});

var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonStyle, {
    onClick: props.handleClick,
    appearance: props.appearance
  }, props.children);
};

Button.defaultProps = {
  children: 'Okay',
  appearance: 'default'
};
Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  handleClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  appearance: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['primary', 'default'])
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./client/components/Button/index.js":
/*!*******************************************!*\
  !*** ./client/components/Button/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./client/components/Button/Button.js");

/* harmony default export */ __webpack_exports__["default"] = (_Button__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./client/components/Calendar/Calendar.js":
/*!************************************************!*\
  !*** ./client/components/Calendar/Calendar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TextInput */ "./client/components/TextInput/index.js");
/* harmony import */ var rc_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-calendar */ "./node_modules/rc-calendar/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var CustomCalendar =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomCalendar, _Component);

  function CustomCalendar() {
    var _this;

    _classCallCheck(this, CustomCalendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomCalendar).call(this));
    _this.selectDate = _this.selectDate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      showCalendar: false,
      selectedDate: ''
    };
    return _this;
  }

  _createClass(CustomCalendar, [{
    key: "selectDate",
    value: function selectDate(d) {
      var selDate = d.format('DD/MM/YYYY');
      this.setState({
        selectedDate: selDate,
        showCalendar: false
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      console.log(event.currentTarget);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      this.setState({
        showCalendar: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: "text",
        icon: "https://res.cloudinary.com/ddbxa4afa/image/upload/v1531114873/blubus/calendar.svg",
        onFocus: this.handleFocus,
        handleChange: this.handleChange,
        value: this.state.selectedDate,
        placeholder: this.props.placeholder
      }), this.state.showCalendar && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_calendar__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.props, {
        onSelect: this.selectDate,
        prefixClass: "react-cal-"
      })));
    }
  }]);

  return CustomCalendar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CustomCalendar);

/***/ }),

/***/ "./client/components/Calendar/index.js":
/*!*********************************************!*\
  !*** ./client/components/Calendar/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar */ "./client/components/Calendar/Calendar.js");

/* harmony default export */ __webpack_exports__["default"] = (_Calendar__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./client/components/Header/Header.js":
/*!********************************************!*\
  !*** ./client/components/Header/Header.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo */ "./client/components/logo/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./client/components/Header/style.js");





var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    style: {
      textDecoration: 'none'
    },
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logo__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./client/components/Header/style.js":
/*!*******************************************!*\
  !*** ./client/components/Header/style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tokens */ "./client/components/Tokens/index.js");


var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "style__HeaderWrapper",
  componentId: "s1kbzlmn-0"
})(["width:100%;height:70px;background-color:", ";display:flex;justify-content:flex-start;align-items:center;padding:15px;box-sizing:border-box;"], _Tokens__WEBPACK_IMPORTED_MODULE_1__["colors"].primary);
/* harmony default export */ __webpack_exports__["default"] = (HeaderWrapper);

/***/ }),

/***/ "./client/components/TextInput/TextInput.js":
/*!**************************************************!*\
  !*** ./client/components/TextInput/TextInput.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./client/components/TextInput/style.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var TextInput =
/*#__PURE__*/
function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    var _this;

    _classCallCheck(this, TextInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextInput).call(this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(TextInput, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.props.handleChange(event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          icon = _this$props.icon,
          showError = _this$props.showError,
          error = _this$props.error;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["InputWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["Input"], _extends({
        type: type,
        onChange: this.handleChange
      }, this.props, {
        value: this.props.value
      })), icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        src: icon,
        alt: icon
      }), showError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["ErrorWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["ErrorMsg"], null, error))));
    }
  }]);

  return TextInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

TextInput.defaultProps = {
  icon: '',
  showError: false,
  error: ''
};
TextInput.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  showError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['text', 'password', 'email', 'number', 'tel']).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./client/components/TextInput/index.js":
/*!**********************************************!*\
  !*** ./client/components/TextInput/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextInput */ "./client/components/TextInput/TextInput.js");

/* harmony default export */ __webpack_exports__["default"] = (_TextInput__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./client/components/TextInput/style.js":
/*!**********************************************!*\
  !*** ./client/components/TextInput/style.js ***!
  \**********************************************/
/*! exports provided: Input, InputWrapper, Icon, ErrorWrapper, ErrorMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorWrapper", function() { return ErrorWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMsg", function() { return ErrorMsg; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tokens */ "./client/components/Tokens/index.js");


var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input.withConfig({
  displayName: "style__Input",
  componentId: "t4p2yc-0"
})(["outline:none;padding-left:45px;width:", ";color:", ";height:", ";border:", ";font-size:", ";font-weight:", ";background-color:", ";border-bottom:1px solid ", ";&::placeholder{color:", ";}"], _Tokens__WEBPACK_IMPORTED_MODULE_1__["misc"].input.width, _Tokens__WEBPACK_IMPORTED_MODULE_1__["colors"].input.text, _Tokens__WEBPACK_IMPORTED_MODULE_1__["misc"].input.height, _Tokens__WEBPACK_IMPORTED_MODULE_1__["colors"].input.border, _Tokens__WEBPACK_IMPORTED_MODULE_1__["fonts"].input.fontSize, _Tokens__WEBPACK_IMPORTED_MODULE_1__["fonts"].input.fontWeight, _Tokens__WEBPACK_IMPORTED_MODULE_1__["colors"].input.background, _Tokens__WEBPACK_IMPORTED_MODULE_1__["colors"].input.border, _Tokens__WEBPACK_IMPORTED_MODULE_1__["colors"].input.placeholder);
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "style__InputWrapper",
  componentId: "t4p2yc-1"
})(["display:flex;position:relative;svg{fill:#000;}&:last-of-type{margin-top:70px;}"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "style__Icon",
  componentId: "t4p2yc-2"
})(["top:18px;left:11px;position:absolute;width:", ";height:", ";"], _Tokens__WEBPACK_IMPORTED_MODULE_1__["misc"].input.icon.width, _Tokens__WEBPACK_IMPORTED_MODULE_1__["misc"].input.icon.height);
var ErrorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "style__ErrorWrapper",
  componentId: "t4p2yc-3"
})(["top:59px;left:0;width:100%;height:45px;display:flex;position:absolute;align-items:center;background:#fef3f1;justify-content:space-around;"]);
var ErrorMsg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "style__ErrorMsg",
  componentId: "t4p2yc-4"
})(["color:#cf2a2a;"]);

/***/ }),

/***/ "./client/components/Tokens/colors.js":
/*!********************************************!*\
  !*** ./client/components/Tokens/colors.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var primaryColor = '#2396b0',
    secondaryColor = '#5cd5f0',
    white = '#fff',
    black = '#000',
    defaultColor = '#f1f1f1';
var colors = {
  primary: primaryColor,
  secondary: secondaryColor,
  input: {
    background: white,
    text: primaryColor,
    border: primaryColor,
    placeholder: primaryColor
  },
  button: {
    primary: {
      text: white,
      background: secondaryColor
    },
    default: {
      text: black,
      background: defaultColor
    }
  },
  seats: {
    booked: {
      background: defaultColor
    },
    available: {
      background: secondaryColor
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./client/components/Tokens/index.js":
/*!*******************************************!*\
  !*** ./client/components/Tokens/index.js ***!
  \*******************************************/
/*! exports provided: colors, misc, fonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./client/components/Tokens/colors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc */ "./client/components/Tokens/misc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "misc", function() { return _misc__WEBPACK_IMPORTED_MODULE_1__["misc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return _misc__WEBPACK_IMPORTED_MODULE_1__["fonts"]; });





/***/ }),

/***/ "./client/components/Tokens/misc.js":
/*!******************************************!*\
  !*** ./client/components/Tokens/misc.js ***!
  \******************************************/
/*! exports provided: misc, fonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "misc", function() { return misc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return fonts; });
var misc = {
  input: {
    height: '56px',
    width: '100%',
    icon: {
      height: '22px',
      width: '22px'
    }
  }
};
var fonts = {
  input: {
    fontSize: '18px',
    fontWeight: '400'
  },
  button: {
    fontSize: '18px',
    fontWeight: '400'
  }
};

/***/ }),

/***/ "./client/components/logo/index.js":
/*!*****************************************!*\
  !*** ./client/components/logo/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo */ "./client/components/logo/logo.js");

/* harmony default export */ __webpack_exports__["default"] = (_logo__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./client/components/logo/logo.js":
/*!****************************************!*\
  !*** ./client/components/logo/logo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");


var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "logo__TextWrapper",
  componentId: "nm9i2-0"
})(["display:flex;align-items:center;justify-content:flex-start;"]);
var LogoImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "logo__LogoImg",
  componentId: "nm9i2-1"
})(["width:40px;height:40px;"]);
var LogoText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "logo__LogoText",
  componentId: "nm9i2-2"
})(["color:#fff;font-size:25px;font-weight:500;padding-left:10px;"]);

var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoImg, {
    alt: "blubus logo",
    src: "../../public/images/BluBus_192x192.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoText, null, "BluBus"));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ "./client/routes.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./client/store.js");
/* harmony import */ var _views_HomePage_ErrorBoundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/HomePage/ErrorBoundary */ "./client/views/HomePage/ErrorBoundary.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t* {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\n\tbody {\n\t\tfont-family: 'Roboto', sans-serif;\n\t}\n\n\tul {\n\t\tlist-style-type: none;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/** global document, Raven */







 // eslint-disable-next-line no-underscore-dangle

var preloadedState = window.__PRELOADED_STATE__;
var store = Object(_store__WEBPACK_IMPORTED_MODULE_6__["default"])(preloadedState); // Initial State can be passed here
// eslint-disable-next-line

if (false) {}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_HomePage_ErrorBoundary__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_5__["default"], null)))), document.getElementById('root')); // eslint-disable-next-line

Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["injectGlobal"])(_templateObject());

/***/ }),

/***/ "./client/reducers/homePage.js":
/*!*************************************!*\
  !*** ./client/reducers/homePage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return homePage; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function homePage() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isLoading: false,
    isError: false,
    errorMsg: '',
    data: {},
    searchResult: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOAD_SEARCH':
      return _objectSpread({}, state, {
        isLoading: true
      });

    case 'RECEIVE_SEARCH':
      return _objectSpread({}, state, {
        isLoading: false,
        data: action.data
      });

    case 'FAILED_SEARCH':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        errorMsg: action.err
      });

    case 'SEARCH':
      {
        var searchResult = state.data.filter(function (item) {
          return item.city.toLowerCase().indexOf(action.term) > -1;
        });
        return _objectSpread({}, state, {
          searchResult: searchResult
        });
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./client/reducers/index.js":
/*!**********************************!*\
  !*** ./client/reducers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _listing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listing */ "./client/reducers/listing.js");
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage */ "./client/reducers/homePage.js");
/* harmony import */ var _seatLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seatLayout */ "./client/reducers/seatLayout.js");
/* harmony import */ var _orderSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orderSummary */ "./client/reducers/orderSummary.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  listing: _listing__WEBPACK_IMPORTED_MODULE_1__["default"],
  homePage: _homePage__WEBPACK_IMPORTED_MODULE_2__["default"],
  seatLayout: _seatLayout__WEBPACK_IMPORTED_MODULE_3__["default"],
  orderSummary: _orderSummary__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ }),

/***/ "./client/reducers/listing.js":
/*!************************************!*\
  !*** ./client/reducers/listing.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listing; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  isLoading: false,
  isError: false,
  items: {},
  error: ''
};
function listing() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_LISTING':
      return _objectSpread({}, state, {
        isLoading: true
      });

    case 'RECEIVE_LISTING':
      return _objectSpread({}, state, {
        isLoading: false,
        items: action.data
      });

    case 'FAILED_LISTING':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        error: action.err
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./client/reducers/orderSummary.js":
/*!*****************************************!*\
  !*** ./client/reducers/orderSummary.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return orderSummary; });
function orderSummary() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),

/***/ "./client/reducers/seatLayout.js":
/*!***************************************!*\
  !*** ./client/reducers/seatLayout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return seatLayout; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  isLoading: false,
  isError: false,
  items: [],
  error: ''
};
function seatLayout() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_SEATLAYOUT_DATA':
      return _objectSpread({}, state, {
        isLoading: true
      });

    case 'RECEIVE_SEATLAYOUT_DATA':
      return _objectSpread({}, state, {
        isLoading: false,
        items: action.data
      });

    case 'FAILED_SEATLAYOUT_DATA':
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true,
        error: action.err
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./client/routes.js":
/*!**************************!*\
  !*** ./client/routes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _views_Listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Listing */ "./client/views/Listing/index.js");
/* harmony import */ var _views_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/HomePage */ "./client/views/HomePage/index.js");
/* harmony import */ var _views_SeatLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/SeatLayout */ "./client/views/SeatLayout/index.js");
/* harmony import */ var _views_OrderSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/OrderSummary */ "./client/views/OrderSummary/index.js");
/* harmony import */ var _views_Confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/Confirmation */ "./client/views/Confirmation/index.js");







/*
	Switch only renders the first match. Subrouting happens downstream
	https://reacttraining.com/react-router/web/api/Switch
*/

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _views_HomePage__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/listing",
    component: _views_Listing__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/seatlayout",
    component: _views_SeatLayout__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/summary",
    component: _views_OrderSummary__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/confirmation",
    component: _views_Confirmation__WEBPACK_IMPORTED_MODULE_6__["default"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./client/store.js":
/*!*************************!*\
  !*** ./client/store.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/reducers */ "./client/reducers/index.js");


 // this enables the chrome devtools for redux only in development

var composeEnhancers = "development" !== 'production' && typeof window !== 'undefined' && // eslint-disable-next-line
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_1__["compose"];

var configureStore = function configureStore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_client_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], preloadedState, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_0___default.a)));
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./client/utils/constants.js":
/*!***********************************!*\
  !*** ./client/utils/constants.js ***!
  \***********************************/
/*! exports provided: HOME_PG_API_URL, LISTING_API_URL, SEATLAYOUT_API_URL, MAX_ITEMS_IN_SEARCH_RESULTS, mobilePattern, numberPattern, emailPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PG_API_URL", function() { return HOME_PG_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTING_API_URL", function() { return LISTING_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEATLAYOUT_API_URL", function() { return SEATLAYOUT_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_ITEMS_IN_SEARCH_RESULTS", function() { return MAX_ITEMS_IN_SEARCH_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobilePattern", function() { return mobilePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberPattern", function() { return numberPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailPattern", function() { return emailPattern; });
var HOME_PG_API_URL = 'https://api.myjson.com/bins/13oj0a';
var LISTING_API_URL = 'https://api.myjson.com/bins/o8l72';
var SEATLAYOUT_API_URL = 'https://api.myjson.com/bins/syq4a';
var MAX_ITEMS_IN_SEARCH_RESULTS = 5; // PATTERNS

var mobilePattern = /^\d{10}$/;
var numberPattern = /^\d{1,2}$/;
var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/***/ }),

/***/ "./client/utils/helpers.js":
/*!*********************************!*\
  !*** ./client/utils/helpers.js ***!
  \*********************************/
/*! exports provided: default, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return logErrorToService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* global Raven, __ENV__ */
function logErrorToService(error, info) {
  if (typeof Raven !== 'undefined' && "development" === 'PRODUCTION') {
    Raven.captureException(error, {
      extra: info
    });
  }
}
/**
 * Sets debouncing for function passed in callback
 * @param {*} callBack Function to be called after delay
 * @param {*} delay Time in milliseconds after which the function should be called
 */

function debounce(callBack, delay) {
  var tId;
  return function (value) {
    clearTimeout(tId);
    tId = setTimeout(function () {
      callBack(value);
    }, delay || 300);
  };
}

/***/ }),

/***/ "./client/utils/uid.js":
/*!*****************************!*\
  !*** ./client/utils/uid.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Math.random().toString(36).substring(2);
});

/***/ }),

/***/ "./client/views/Confirmation/index.js":
/*!********************************************!*\
  !*** ./client/views/Confirmation/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header/Header */ "./client/components/Header/Header.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./client/views/Confirmation/style.js");




var Confirmation = function Confirmation() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["CheckMark"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "confirmation",
    src: "https://res.cloudinary.com/ddbxa4afa/image/upload/v1528637133/blubus/tick.svg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["ConfirmMsg"], null, "Your tickets have been confirmed. Enjoy your ride."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["InfoWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kigali"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["BusImage"], {
    alt: "bus",
    src: "https://res.cloudinary.com/ddbxa4afa/image/upload/v1528636704/blubus/bus.svg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kibuye")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Tickets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Bus Fare"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "400 $")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Booking Fee"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "40 $")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Total"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "440 $")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Confirmation);

/***/ }),

/***/ "./client/views/Confirmation/style.js":
/*!********************************************!*\
  !*** ./client/views/Confirmation/style.js ***!
  \********************************************/
/*! exports provided: Wrapper, InfoWrapper, BusImage, CheckMark, ConfirmMsg, ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWrapper", function() { return InfoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusImage", function() { return BusImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckMark", function() { return CheckMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmMsg", function() { return ConfirmMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].article.withConfig({
  displayName: "style__Wrapper",
  componentId: "s8s56z8-0"
})(["margin:20px;"]);
var InfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "style__InfoWrapper",
  componentId: "s8s56z8-1"
})(["display:flex;justify-content:space-around;align-items:center;"]);
var BusImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "style__BusImage",
  componentId: "s8s56z8-2"
})(["height:80px;width:80px;"]);
var CheckMark = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "style__CheckMark",
  componentId: "s8s56z8-3"
})(["display:flex;align-items:center;justify-content:center;img{height:40px;width:40px;}"]);
var ConfirmMsg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "style__ConfirmMsg",
  componentId: "s8s56z8-4"
})(["padding:50px;text-align:center;"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "style__ListItem",
  componentId: "s8s56z8-5"
})(["display:flex;line-height:30px;align-items:center;justify-content:space-between;"]);

/***/ }),

/***/ "./client/views/HomePage/ErrorBoundary.js":
/*!************************************************!*\
  !*** ./client/views/HomePage/ErrorBoundary.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorBoundary; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers */ "./client/utils/helpers.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./client/views/HomePage/style.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ErrorBoundary =
/*#__PURE__*/
function (_Component) {
  _inherits(ErrorBoundary, _Component);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        hasError: true
      });
      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["default"])(error, info);
    }
  }, {
    key: "goHome",
    value: function goHome() {
      window.location.href = '/';
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["ErrorWrapper"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["ErrorImg"], {
          alt: "somthing not right",
          src: "https://res.cloudinary.com/ddbxa4afa/image/upload/v1530339474/blubus/industrial-robot.svg"
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["ErrorMsg"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Hey Traveller"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Oh Look like something is not right !!!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "But don't worry our smart ass engineers are on it.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["GoToHome"], {
          onClick: this.goHome
        }, "Go to Home"));
      }

      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


ErrorBoundary.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element.isRequired
};

/***/ }),

/***/ "./client/views/HomePage/Search.js":
/*!*****************************************!*\
  !*** ./client/views/HomePage/Search.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchResults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchResults */ "./client/views/HomePage/SearchResults.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helpers */ "./client/utils/helpers.js");
/* harmony import */ var _actions_homePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/homePage */ "./client/actions/homePage.js");
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TextInput */ "./client/components/TextInput/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/constants */ "./client/utils/constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Search =
/*#__PURE__*/
function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateChange = _this.updateChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.searchDebounced = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["debounce"])(_this.updateChange, 500);
    _this.resultItemSelection = _this.resultItemSelection.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      value: '',
      showResults: false
    };
    return _this;
  }

  _createClass(Search, [{
    key: "updateChange",
    value: function updateChange(value) {
      this.props.dispatch(Object(_actions_homePage__WEBPACK_IMPORTED_MODULE_4__["search"])(value));
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        value: value
      });
      value.length === 0 ? this.setState({
        showResults: false
      }) : this.setState({
        showResults: true
      });
      this.searchDebounced(value);
    }
  }, {
    key: "resultItemSelection",
    value: function resultItemSelection(data) {
      this.props.handleSearchResultSelection(data);
      this.setState({
        value: data.city,
        showResults: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          result = _this$props.result,
          icon = _this$props.icon,
          type = _this$props.type,
          placeholder = _this$props.placeholder,
          resultItems = result ? result.slice(0, _utils_constants__WEBPACK_IMPORTED_MODULE_6__["MAX_ITEMS_IN_SEARCH_RESULTS"]) : '';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: type,
        icon: icon,
        value: this.state.value,
        placeholder: placeholder,
        handleChange: this.handleChange
      }), this.state.showResults && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchResults__WEBPACK_IMPORTED_MODULE_2__["default"], {
        result: resultItems,
        handleSelection: this.resultItemSelection
      }));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Search.defaultProps = {
  result: [],
  type: 'text',
  placeholder: '',
  icon: 'https://res.cloudinary.com/ddbxa4afa/image/upload/v1527944418/blubus/location.svg'
};
Search.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  result: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any),
  handleSearchResultSelection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./client/views/HomePage/SearchResults.js":
/*!************************************************!*\
  !*** ./client/views/HomePage/SearchResults.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_uid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/uid */ "./client/utils/uid.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./client/views/HomePage/style.js");




var ListItem = function ListItem(props) {
  var handleSelection = function handleSelection() {
    props.handleSelection(props.data);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["ResultsListItem"], {
    onClick: handleSelection
  }, props.children);
};

var SearchResults = function SearchResults(props) {
  var handleSelection = function handleSelection(data) {
    props.handleSelection(data);
  };

  var result = props.result;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["SearchResultsWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["ResultsList"], null, result && result.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
      data: item,
      key: Object(_utils_uid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      handleSelection: handleSelection
    }, item.city);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResults);

/***/ }),

/***/ "./client/views/HomePage/actionCreators.js":
/*!*************************************************!*\
  !*** ./client/views/HomePage/actionCreators.js ***!
  \*************************************************/
/*! exports provided: fetchSearch, dummy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearch", function() { return fetchSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummy", function() { return dummy; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/homePage */ "./client/actions/homePage.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./client/utils/constants.js");



function fetchSearch() {
  return function (dispatch) {
    dispatch(Object(_actions_homePage__WEBPACK_IMPORTED_MODULE_1__["loadingSearch"])());
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_utils_constants__WEBPACK_IMPORTED_MODULE_2__["HOME_PG_API_URL"]).then(function (response) {
      return dispatch(Object(_actions_homePage__WEBPACK_IMPORTED_MODULE_1__["receiveSearch"])(response.data.result));
    }).catch(function (err) {
      return dispatch(Object(_actions_homePage__WEBPACK_IMPORTED_MODULE_1__["failedSearch"])(err.message));
    });
  };
}
function dummy() {}

/***/ }),

/***/ "./client/views/HomePage/index.js":
/*!****************************************!*\
  !*** ./client/views/HomePage/index.js ***!
  \****************************************/
/*! exports provided: HomePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search */ "./client/views/HomePage/Search.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./client/views/HomePage/style.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button */ "./client/components/Button/index.js");
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionCreators */ "./client/views/HomePage/actionCreators.js");
/* harmony import */ var _components_Calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Calendar */ "./client/components/Calendar/index.js");
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/TextInput */ "./client/components/TextInput/index.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Header/Header */ "./client/components/Header/Header.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // import Calendar from 'rc-calendar';










var HomePage =
/*#__PURE__*/
function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    var _this;

    _classCallCheck(this, HomePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HomePage).call(this));
    _assertThisInitialized(_assertThisInitialized(_this)).handleFrom = _this.handleFrom.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _assertThisInitialized(_assertThisInitialized(_this)).handleSearchClick = _this.handleSearchClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_6__["fetchSearch"])());
    }
  }, {
    key: "handleFrom",
    value: function handleFrom(value) {
      console.log('From', value);
    }
  }, {
    key: "handleTo",
    value: function handleTo(value) {
      console.log('To', value);
    }
  }, {
    key: "handleSearchClick",
    value: function handleSearchClick() {
      this.props.history.push('/listing');
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["PageWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "text",
        dispatch: this.props.dispatch,
        handleSearchResultSelection: this.handleFrom,
        placeholder: "Choose your location12356",
        result: this.props.homePage.searchResult,
        icon: "https://res.cloudinary.com/ddbxa4afa/image/upload/v1527944418/blubus/location.svg"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          marginTop: '70px',
          marginBottom: '70px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "text",
        dispatch: this.props.dispatch,
        handleSearchResultSelection: this.handleTo,
        placeholder: "Choose your destination 9981",
        result: this.props.homePage.searchResult,
        icon: "https://res.cloudinary.com/ddbxa4afa/image/upload/v1527944416/blubus/destination.svg"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Calendar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        showToday: true,
        showTimePicker: true,
        placeholder: "Choose date for journey"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          marginTop: '70px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        appearance: "primary",
        handleClick: this.handleSearchClick
      }, "Search Buses 40")))));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    homePage: state.homePage
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(HomePage)));

/***/ }),

/***/ "./client/views/HomePage/style.js":
/*!****************************************!*\
  !*** ./client/views/HomePage/style.js ***!
  \****************************************/
/*! exports provided: PageWrapper, SearchResultsWrapper, ResultsList, ResultsListItem, ErrorWrapper, ErrorImg, ErrorMsg, GoToHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWrapper", function() { return PageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsWrapper", function() { return SearchResultsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsList", function() { return ResultsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsListItem", function() { return ResultsListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorWrapper", function() { return ErrorWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorImg", function() { return ErrorImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMsg", function() { return ErrorMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoToHome", function() { return GoToHome; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var _components_Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Tokens */ "./client/components/Tokens/index.js");


var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].article.withConfig({
  displayName: "style__PageWrapper",
  componentId: "xm59nd-0"
})(["margin:24px;"]);
var SearchResultsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "style__SearchResultsWrapper",
  componentId: "xm59nd-1"
})(["top:0;z-index:99;width:100%;background:#fff;position:relative;"]);
var ResultsList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "style__ResultsList",
  componentId: "xm59nd-2"
})(["list-style-type:none;"]);
var ResultsListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "style__ResultsListItem",
  componentId: "xm59nd-3"
})(["min-width:0;margin:10px;display:flex;font-size:21px;font-weight:400;text-align:center;align-items:center;padding:10px 3px 11px 10px;border-bottom:1px solid #e5e5e5;"]);
var ErrorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "style__ErrorWrapper",
  componentId: "xm59nd-4"
})(["display:flex;min-height:500px;align-items:center;flex-direction:column;justify-content:center;"]);
var ErrorImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "style__ErrorImg",
  componentId: "xm59nd-5"
})(["width:80px;height:80px;"]);
var ErrorMsg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].article.withConfig({
  displayName: "style__ErrorMsg",
  componentId: "xm59nd-6"
})(["padding:25px;line-height:25px;text-align:center;"]);
var GoToHome = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "style__GoToHome",
  componentId: "xm59nd-7"
})(["position:fixed;bottom:0;width:90%;font-size:15px;padding:20px 15px;background:", ";color:", ";border-radius:5px;"], _components_Tokens__WEBPACK_IMPORTED_MODULE_1__["colors"].button.primary.background, _components_Tokens__WEBPACK_IMPORTED_MODULE_1__["colors"].button.primary.text);

/***/ }),

/***/ "./client/views/Listing/ListingCard.js":
/*!*********************************************!*\
  !*** ./client/views/Listing/ListingCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./client/views/Listing/style.js");



var ListingCard = function ListingCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_style__WEBPACK_IMPORTED_MODULE_1__["CardWrapper"], {
    onClick: props.clickHandler
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_style__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_style__WEBPACK_IMPORTED_MODULE_1__["CompanyName"], null, props.companyName), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_style__WEBPACK_IMPORTED_MODULE_1__["Currency"], null, props.price, " ", props.currency)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_style__WEBPACK_IMPORTED_MODULE_1__["Timings"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, props.arrivalTime), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_style__WEBPACK_IMPORTED_MODULE_1__["BusIcon"], {
    alt: "traveling-bus",
    src: "https://res.cloudinary.com/ddbxa4afa/image/upload/v1528048630/blubus/traveling-bus.svg"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, props.departureTime), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_style__WEBPACK_IMPORTED_MODULE_1__["TimerWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_style__WEBPACK_IMPORTED_MODULE_1__["Timer"], {
    alt: "timer",
    src: "https://res.cloudinary.com/ddbxa4afa/image/upload/v1528048884/blubus/timer.svg"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, props.travelTime, " hours"))));
};

ListingCard.defaultProps = {
  price: '',
  currency: '',
  travelTime: '',
  arrivalTime: '',
  companyName: '',
  departureTime: '',
  clickHandler: function clickHandler() {}
};
/* harmony default export */ __webpack_exports__["default"] = (ListingCard);

/***/ }),

/***/ "./client/views/Listing/actionCreators.js":
/*!************************************************!*\
  !*** ./client/views/Listing/actionCreators.js ***!
  \************************************************/
/*! exports provided: fetchListingData, fetchListingDataIfNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchListingData", function() { return fetchListingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchListingDataIfNeeded", function() { return fetchListingDataIfNeeded; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./client/utils/constants.js");
/* harmony import */ var _actions_listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/listing */ "./client/actions/listing.js");



var fetchListingData = function fetchListingData() {
  return function (dispatch) {
    dispatch(Object(_actions_listing__WEBPACK_IMPORTED_MODULE_2__["requestListing"])());
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["LISTING_API_URL"]).then(function (response) {
      return dispatch(Object(_actions_listing__WEBPACK_IMPORTED_MODULE_2__["receiveListing"])(response.data.result));
    }).catch(function (err) {
      return dispatch(Object(_actions_listing__WEBPACK_IMPORTED_MODULE_2__["invalidResponse"])(err.message));
    });
  };
};
function fetchListingDataIfNeeded() {
  return function (dispatch, getState) {
    var _getState = getState(),
        listing = _getState.listing;

    if (listing.items && listing.items.services && listing.items.services.length) {
      return false;
    }

    dispatch(fetchListingData());
  };
}

/***/ }),

/***/ "./client/views/Listing/index.js":
/*!***************************************!*\
  !*** ./client/views/Listing/index.js ***!
  \***************************************/
/*! exports provided: Listing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listing", function() { return Listing; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utils_uid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/uid */ "./client/utils/uid.js");
/* harmony import */ var _ListingCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListingCard */ "./client/views/Listing/ListingCard.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Header/Header */ "./client/components/Header/Header.js");
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionCreators */ "./client/views/Listing/actionCreators.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./client/views/Listing/style.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Listing =
/*#__PURE__*/
function (_Component) {
  _inherits(Listing, _Component);

  function Listing() {
    var _this;

    _classCallCheck(this, Listing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Listing).call(this));
    _assertThisInitialized(_assertThisInitialized(_this)).onCardClick = _this.onCardClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Listing, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_6__["fetchListingDataIfNeeded"])());
    }
  }, {
    key: "onCardClick",
    value: function onCardClick() {
      this.props.history.push('/seatlayout');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$listing$i = this.props.listing.items,
          services = _this$props$listing$i.services,
          journeyDetails = _this$props$listing$i.journeyDetails;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, journeyDetails && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["JourneyDetailWrapper"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, journeyDetails.from), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["FromToArrow"], {
        alt: "arrow",
        src: "https://res.cloudinary.com/ddbxa4afa/image/upload/v1528049570/blubus/right-arrow.svg"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, journeyDetails.to))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["ListViewWrapper"], null, services && services.map(function (item) {
        var companyName = item.companyName,
            busType = item.busType,
            dep = item.dep,
            arr = item.arr,
            travelTime = item.travelTime,
            ticketPrice = item.ticketPrice,
            currency = item.currency;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListingCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: Object(_utils_uid__WEBPACK_IMPORTED_MODULE_3__["default"])(),
          busType: busType,
          arrivalTime: arr,
          departureTime: dep,
          price: ticketPrice,
          currency: currency,
          travelTime: travelTime,
          companyName: companyName,
          clickHandler: _this2.onCardClick
        });
      })));
    }
  }]);

  return Listing;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    listing: state.listing
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Listing)));

/***/ }),

/***/ "./client/views/Listing/style.js":
/*!***************************************!*\
  !*** ./client/views/Listing/style.js ***!
  \***************************************/
/*! exports provided: ListViewWrapper, CardWrapper, JourneyDetailWrapper, FromToArrow, CardHeader, CompanyName, Currency, Timings, TimerWrapper, BusIcon, Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewWrapper", function() { return ListViewWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyDetailWrapper", function() { return JourneyDetailWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromToArrow", function() { return FromToArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHeader", function() { return CardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyName", function() { return CompanyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Currency", function() { return Currency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timings", function() { return Timings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerWrapper", function() { return TimerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusIcon", function() { return BusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");

var ListViewWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].article.withConfig({
  displayName: "style__ListViewWrapper",
  componentId: "s1qs7nmh-0"
})(["margin:20px;"]);
var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "style__CardWrapper",
  componentId: "s1qs7nmh-1"
})(["margin:20px 0;padding:24px 0;border-top:1px solid #e5dcdc;"]);
var JourneyDetailWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header.withConfig({
  displayName: "style__JourneyDetailWrapper",
  componentId: "s1qs7nmh-2"
})(["display:flex;justify-content:center;align-items:center;margin:20px;"]);
var FromToArrow = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "style__FromToArrow",
  componentId: "s1qs7nmh-3"
})(["height:25px;width:35px;padding:0 15px;"]);
var CardHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header.withConfig({
  displayName: "style__CardHeader",
  componentId: "s1qs7nmh-4"
})(["display:flex;justify-content:space-between;align-items:center;"]);
var CompanyName = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2.withConfig({
  displayName: "style__CompanyName",
  componentId: "s1qs7nmh-5"
})(["font-size:21px;font-weight:500;"]);
var Currency = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "style__Currency",
  componentId: "s1qs7nmh-6"
})(["font-size:18px;font-weight:400;"]);
var Timings = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].article.withConfig({
  displayName: "style__Timings",
  componentId: "s1qs7nmh-7"
})(["padding-top:20px;display:flex;justify-content:space-between;align-items:center;"]);
var TimerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__TimerWrapper",
  componentId: "s1qs7nmh-8"
})(["display:flex;align-items:center;"]);
var BusIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "style__BusIcon",
  componentId: "s1qs7nmh-9"
})(["height:31px;width:31px;"]);
var Timer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "style__Timer",
  componentId: "s1qs7nmh-10"
})(["height:24px;width:24px;padding-right:10px;"]);

/***/ }),

/***/ "./client/views/OrderSummary/Summary.js":
/*!**********************************************!*\
  !*** ./client/views/OrderSummary/Summary.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Button */ "./client/components/Button/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./client/views/OrderSummary/style.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Summary =
/*#__PURE__*/
function (_Component) {
  _inherits(Summary, _Component);

  function Summary() {
    var _this;

    _classCallCheck(this, Summary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Summary).call(this));
    _this.payNow = _this.payNow.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Summary, [{
    key: "payNow",
    value: function payNow() {
      this.props.history.push('/confirmation');
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["SummaryInfo"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Kigali"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        alt: "to",
        src: "https://res.cloudinary.com/ddbxa4afa/image/upload/v1528049570/blubus/right-arrow.svg"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Kibuye")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["SummaryInfoList"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["SummaryInfoItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Bus Fare"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "400 $")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["SummaryInfoItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Booking Fare"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "40 $")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["SummaryInfoItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Total"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "440 $"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        appearance: "primary",
        handleClick: this.payNow
      }, "Pay Now")));
    }
  }]);

  return Summary;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Summary.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    push: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Summary));

/***/ }),

/***/ "./client/views/OrderSummary/UserDetails.js":
/*!**************************************************!*\
  !*** ./client/views/OrderSummary/UserDetails.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button */ "./client/components/Button/index.js");
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TextInput */ "./client/components/TextInput/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./client/views/OrderSummary/style.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ "./client/utils/constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var UserDetails =
/*#__PURE__*/
function (_Component) {
  _inherits(UserDetails, _Component);

  function UserDetails() {
    var _this;

    _classCallCheck(this, UserDetails);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserDetails).call(this));
    _this.handleAge = _this.handleAge.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleName = _this.handleName.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleEmail = _this.handleEmail.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMobile = _this.handleMobile.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.confirmDetails = _this.confirmDetails.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      age: '',
      name: '',
      email: '',
      mobile: '',
      showAgeError: false,
      showNameError: false,
      showEmailError: false,
      showMobileError: false
    };
    return _this;
  }

  _createClass(UserDetails, [{
    key: "validateInputAgainstPattern",
    value: function validateInputAgainstPattern(pattern, value) {
      var regExPattern = new RegExp(pattern);
      return regExPattern.test(value);
    }
  }, {
    key: "handleEmail",
    value: function handleEmail(value) {
      this.setState({
        email: value
      });
      var isValidPattern = this.validateInputAgainstPattern(_utils_constants__WEBPACK_IMPORTED_MODULE_5__["emailPattern"], value);
      !isValidPattern && this.setState({
        showEmailError: true
      });
      isValidPattern && this.setState({
        showEmailError: false
      });
    }
  }, {
    key: "handleMobile",
    value: function handleMobile(value) {
      this.setState({
        mobile: value
      });
      var isValidPattern = this.validateInputAgainstPattern(_utils_constants__WEBPACK_IMPORTED_MODULE_5__["mobilePattern"], value);
      !isValidPattern && this.setState({
        showMobileError: true
      });
      isValidPattern && this.setState({
        showMobileError: false
      });
    }
  }, {
    key: "handleName",
    value: function handleName(value) {
      this.setState({
        name: value
      });

      if (value && value.length > 0) {
        this.setState({
          showNameError: false
        });
      } else {
        this.setState({
          showNameError: true
        });
      }
    }
  }, {
    key: "handleAge",
    value: function handleAge(value) {
      this.setState({
        age: value
      });
      var isValidPattern = this.validateInputAgainstPattern(_utils_constants__WEBPACK_IMPORTED_MODULE_5__["numberPattern"], value);
      !isValidPattern && this.setState({
        showAgeError: true
      });
      isValidPattern && this.setState({
        showAgeError: false
      });
    }
  }, {
    key: "confirmDetails",
    value: function confirmDetails() {
      if (!this.state.showMobileError && !this.state.showEmailError && !this.state.showNameError && !this.state.showAgeError) {
        // Update user details
        this.props.handleOrderSummary(true);
      }

      this.handleEmail(this.state.email);
      this.handleMobile(this.state.mobile);
      this.handleAge(this.state.age);
      this.handleName(this.state.name);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["InfoHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Contact Details")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["ContactInfo"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "email",
        value: this.state.email,
        placeholder: "Enter your email",
        handleChange: this.handleEmail,
        error: "please enter a valid email",
        showError: this.state.showEmailError,
        icon: "https://res.cloudinary.com/ddbxa4afa/image/upload/v1528611235/blubus/email.svg"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "tel",
        value: this.state.mobile,
        handleChange: this.handleMobile,
        placeholder: "Enter your mobile",
        error: "please enter a valid mobile",
        showError: this.state.showMobileError,
        icon: "https://res.cloudinary.com/ddbxa4afa/image/upload/v1528611234/blubus/mobile.svg"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["InfoHeader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Passenger Details")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["PassengerInfo"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "text",
        value: this.state.name,
        placeholder: "Enter your name",
        handleChange: this.handleName,
        error: "please enter your name",
        showError: this.state.showNameError,
        icon: "https://res.cloudinary.com/ddbxa4afa/image/upload/v1528623999/blubus/user.svg"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "number",
        value: this.state.age,
        placeholder: "Enter your age",
        handleChange: this.handleAge,
        error: "please enter a valid age",
        showError: this.state.showAgeError,
        icon: "https://res.cloudinary.com/ddbxa4afa/image/upload/v1528624264/blubus/info.svg"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["ButtonWrapper"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        appearance: "primary",
        handleClick: this.confirmDetails
      }, "Continue Booking")));
    }
  }]);

  return UserDetails;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

UserDetails.propTypes = {
  handleOrderSummary: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UserDetails);

/***/ }),

/***/ "./client/views/OrderSummary/index.js":
/*!********************************************!*\
  !*** ./client/views/OrderSummary/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary */ "./client/views/OrderSummary/Summary.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./client/views/OrderSummary/style.js");
/* harmony import */ var _UserDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserDetails */ "./client/views/OrderSummary/UserDetails.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header/Header */ "./client/components/Header/Header.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var OrderSummary =
/*#__PURE__*/
function (_Component) {
  _inherits(OrderSummary, _Component);

  function OrderSummary() {
    var _this;

    _classCallCheck(this, OrderSummary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrderSummary).call(this));
    _this.state = {
      showOrderSummary: false
    };
    _this.handleOrderSummary = _this.handleOrderSummary.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(OrderSummary, [{
    key: "handleOrderSummary",
    value: function handleOrderSummary(shouldShow) {
      this.setState({
        showOrderSummary: shouldShow
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        style: {
          position: 'relative',
          paddingBottom: '30px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], null, this.state.showOrderSummary ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Summary__WEBPACK_IMPORTED_MODULE_1__["default"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
        handleOrderSummary: this.handleOrderSummary
      })));
    }
  }]);

  return OrderSummary;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (OrderSummary);

/***/ }),

/***/ "./client/views/OrderSummary/style.js":
/*!********************************************!*\
  !*** ./client/views/OrderSummary/style.js ***!
  \********************************************/
/*! exports provided: ButtonWrapper, Wrapper, ContactInfo, PassengerInfo, InfoHeader, SummaryInfo, SummaryInfoList, SummaryInfoItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfo", function() { return ContactInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassengerInfo", function() { return PassengerInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoHeader", function() { return InfoHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryInfo", function() { return SummaryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryInfoList", function() { return SummaryInfoList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryInfoItem", function() { return SummaryInfoItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__ButtonWrapper",
  componentId: "xnqwtj-0"
})(["position:absolute;left:0;bottom:0;width:100%;height:100px;display:flex;align-items:center;justify-content:center;border-top:1px solid #f2f2f2;button{width:95%;}"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].article.withConfig({
  displayName: "style__Wrapper",
  componentId: "xnqwtj-1"
})(["margin:20px;"]);
var ContactInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "style__ContactInfo",
  componentId: "xnqwtj-2"
})(["background:#fff;padding:20px 10px;margin-bottom:40px;border:1px solid #f2f2f2;"]);
var PassengerInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "style__PassengerInfo",
  componentId: "xnqwtj-3"
})(["background:#fff;padding:20px 10px;margin-bottom:100px;border:1px solid #f2f2f2;"]);
var InfoHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header.withConfig({
  displayName: "style__InfoHeader",
  componentId: "xnqwtj-4"
})(["h2{font-size:20px;font-weight:400;padding-bottom:5px;}"]);
var SummaryInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__SummaryInfo",
  componentId: "xnqwtj-5"
})(["display:flex;font-size:20px;align-items:center;padding-bottom:15px;justify-content:space-evenly;img{width:20px;height:20px;}"]);
var SummaryInfoList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "style__SummaryInfoList",
  componentId: "xnqwtj-6"
})(["margin-bottom:25px;list-style-type:none;"]);
var SummaryInfoItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "style__SummaryInfoItem",
  componentId: "xnqwtj-7"
})(["display:flex;line-height:40px;justify-content:space-between;"]);

/***/ }),

/***/ "./client/views/SeatLayout/Legend.js":
/*!*******************************************!*\
  !*** ./client/views/SeatLayout/Legend.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./client/views/SeatLayout/style.js");



var Legend = function Legend(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["LegendWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["LegendColor"], {
    variant: props.variant
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Text"], null, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Legend);

/***/ }),

/***/ "./client/views/SeatLayout/actionCreators.js":
/*!***************************************************!*\
  !*** ./client/views/SeatLayout/actionCreators.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_seatLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/seatLayout */ "./client/actions/seatLayout.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./client/utils/constants.js");




var fetchData = function fetchData() {
  return function (dispatch) {
    dispatch(Object(_actions_seatLayout__WEBPACK_IMPORTED_MODULE_1__["fetchingData"])());
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_utils_constants__WEBPACK_IMPORTED_MODULE_2__["SEATLAYOUT_API_URL"]).then(function (response) {
      return dispatch(Object(_actions_seatLayout__WEBPACK_IMPORTED_MODULE_1__["dataFetchSuccess"])(response.data.result));
    }).catch(function (err) {
      return dispatch(Object(_actions_seatLayout__WEBPACK_IMPORTED_MODULE_1__["dataFetchFailed"])(err));
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (fetchData);

/***/ }),

/***/ "./client/views/SeatLayout/index.js":
/*!******************************************!*\
  !*** ./client/views/SeatLayout/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Legend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Legend */ "./client/views/SeatLayout/Legend.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./client/views/SeatLayout/style.js");
/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionCreators */ "./client/views/SeatLayout/actionCreators.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header/Header */ "./client/components/Header/Header.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var SeatLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(SeatLayout, _Component);

  function SeatLayout() {
    var _this;

    _classCallCheck(this, SeatLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SeatLayout).call(this));
    _this.canvasRef = null;

    _this.setCanvasRef = function (element) {
      _this.canvasRef = element;
    };

    _this.updateCanvas = _this.updateCanvas.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleCanvasClick = _this.handleCanvasClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      bookedSeatImg: 'https://res.cloudinary.com/ddbxa4afa/image/upload/v1528543654/blubus/armchair_3.svg',
      availableSeatImg: 'https://res.cloudinary.com/ddbxa4afa/image/upload/v1528528337/blubus/armchair.svg'
    };
    return _this;
  }

  _createClass(SeatLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch(Object(_actionCreators__WEBPACK_IMPORTED_MODULE_6__["default"])());
      this.updateCanvas();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateCanvas();
    }
  }, {
    key: "createImage",
    value: function createImage(ctx, offsetX, offsetY, showBlockedImg) {
      var img = new Image();

      img.onload = function loadImage() {
        ctx.drawImage(img, offsetX + 0, offsetY + 0, 40, 40);
      };

      img.src = showBlockedImg ? this.state.bookedSeatImg : this.state.availableSeatImg;
    }
  }, {
    key: "updateCanvas",
    value: function updateCanvas() {
      var _this2 = this;

      var items = this.props.seatLayout.items;
      var ctx = this.canvasRef.getContext('2d');
      var offsetX = 30,
          offsetY = 20;
      items && items.map(function (item) {
        offsetX = 0;
        item.map(function (row) {
          row.isAvailable && row.isGangWay === false && _this2.createImage(ctx, offsetX, offsetY, false);
          row.isAvailable === false && row.isGangWay === false && _this2.createImage(ctx, offsetX, offsetY, true);
          offsetX += 50;
          return false;
        });
        offsetY += 80;
        return false;
      });
    }
  }, {
    key: "handleCanvasClick",
    value: function handleCanvasClick(event) {
      this.props.history.push('/summary');
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("canvas", {
        style: {
          marginLeft: '20px'
        },
        ref: this.setCanvasRef,
        width: 400,
        height: 400,
        onClick: this.handleCanvasClick
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_5__["LegendWrapper"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Legend__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "booked"
      }, "Booked Seat"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Legend__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "available"
      }, "Available Seat"))));
    }
  }]);

  return SeatLayout;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    seatLayout: state.seatLayout
  };
};

SeatLayout.defaultProps = {
  seatLayout: {
    items: []
  }
};
SeatLayout.propTypes = {
  seatLayout: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    items: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array
  }),
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(SeatLayout)));

/***/ }),

/***/ "./client/views/SeatLayout/style.js":
/*!******************************************!*\
  !*** ./client/views/SeatLayout/style.js ***!
  \******************************************/
/*! exports provided: LegendColor, Text, LegendWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendColor", function() { return LegendColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendWrapper", function() { return LegendWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var _components_Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Tokens */ "./client/components/Tokens/index.js");



function getAttribute(variant) {
  switch (variant) {
    case 'booked':
      return _components_Tokens__WEBPACK_IMPORTED_MODULE_1__["colors"].seats.booked.background;

    case 'available':
      return _components_Tokens__WEBPACK_IMPORTED_MODULE_1__["colors"].seats.available.background;

    default:
      return _components_Tokens__WEBPACK_IMPORTED_MODULE_1__["colors"].defaultColor;
  }
}

var LegendColor = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "style__LegendColor",
  componentId: "s1eingpc-0"
})(["display:inline-block;height:20px;width:20px;border-radius:2px;background-color:", ";"], function (props) {
  return getAttribute(props.variant);
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "style__Text",
  componentId: "s1eingpc-1"
})(["display:inline-block;padding-left:10px;vertical-align:middle;"]);
var LegendWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "style__LegendWrapper",
  componentId: "s1eingpc-2"
})(["display:flex;margin-left:20px;align-items:center;justify-content:flex-start;"]);

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ 0:
/*!*********************************************************************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:8080 webpack/hot/dev-server webpack-dev-server/client?http://localhost:8080/ ./client/index.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ajayposhak/Projects/blubus/node_modules/webpack-dev-server/client/index.js?http://localhost:8080 */"./node_modules/webpack-dev-server/client/index.js?http://localhost:8080");
__webpack_require__(/*! webpack/hot/dev-server */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! webpack-dev-server/client?http://localhost:8080/ */"./node_modules/webpack-dev-server/client/index.js?http://localhost:8080/");
module.exports = __webpack_require__(/*! ./client/index.js */"./client/index.js");


/***/ })

},[[0,"manifest","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9saXN0aW5nLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9hY3Rpb25zL3NlYXRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQ2FsZW5kYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9IZWFkZXIvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvVGV4dElucHV0L1RleHRJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9UZXh0SW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvVGV4dElucHV0L3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1Rva2Vucy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1Rva2Vucy9taXNjLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2xvZ28vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvbG9nby9sb2dvLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9yZWR1Y2Vycy9saXN0aW5nLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9yZWR1Y2Vycy9vcmRlclN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHVjZXJzL3NlYXRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbHMvdWlkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC92aWV3cy9Db25maXJtYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3ZpZXdzL0NvbmZpcm1hdGlvbi9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvSG9tZVBhZ2UvRXJyb3JCb3VuZGFyeS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvSG9tZVBhZ2UvU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NsaWVudC92aWV3cy9Ib21lUGFnZS9TZWFyY2hSZXN1bHRzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC92aWV3cy9Ib21lUGFnZS9hY3Rpb25DcmVhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvSG9tZVBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3ZpZXdzL0hvbWVQYWdlL3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC92aWV3cy9MaXN0aW5nL0xpc3RpbmdDYXJkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC92aWV3cy9MaXN0aW5nL2FjdGlvbkNyZWF0b3JzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC92aWV3cy9MaXN0aW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC92aWV3cy9MaXN0aW5nL3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC92aWV3cy9PcmRlclN1bW1hcnkvU3VtbWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvT3JkZXJTdW1tYXJ5L1VzZXJEZXRhaWxzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC92aWV3cy9PcmRlclN1bW1hcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3ZpZXdzL09yZGVyU3VtbWFyeS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvU2VhdExheW91dC9MZWdlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3ZpZXdzL1NlYXRMYXlvdXQvYWN0aW9uQ3JlYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3ZpZXdzL1NlYXRMYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3ZpZXdzL1NlYXRMYXlvdXQvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8od2VicGFjaykvaG90IHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9sb2ckIl0sIm5hbWVzIjpbImxvYWRpbmdTZWFyY2giLCJ0eXBlIiwicmVjZWl2ZVNlYXJjaCIsImRhdGEiLCJmYWlsZWRTZWFyY2giLCJlcnIiLCJzZWFyY2giLCJ2YWx1ZSIsInRlcm0iLCJyZXF1ZXN0TGlzdGluZyIsInJlY2VpdmVMaXN0aW5nIiwiaW52YWxpZFJlc3BvbnNlIiwiZmV0Y2hpbmdEYXRhIiwiZGF0YUZldGNoU3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhRmV0Y2hGYWlsZWQiLCJhcHBlYXJhbmNlcyIsInByaW1hcnkiLCJjb2xvciIsImJ1dHRvbiIsInRleHQiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsImdldEF0dHJpYnV0ZSIsImFwcGVhcmFuY2UiLCJhcHBlYXJhbmNlU3R5bGVzIiwiQnV0dG9uU3R5bGUiLCJpbnB1dCIsImhlaWdodCIsIndpZHRoIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwicHJvcHMiLCJCdXR0b24iLCJoYW5kbGVDbGljayIsImNoaWxkcmVuIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwibm9kZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwib25lT2YiLCJDdXN0b21DYWxlbmRhciIsInNlbGVjdERhdGUiLCJiaW5kIiwiaGFuZGxlRm9jdXMiLCJzdGF0ZSIsInNob3dDYWxlbmRhciIsInNlbGVjdGVkRGF0ZSIsImQiLCJzZWxEYXRlIiwiZm9ybWF0Iiwic2V0U3RhdGUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDaGFuZ2UiLCJwbGFjZWhvbGRlciIsIkhlYWRlciIsInRleHREZWNvcmF0aW9uIiwiSGVhZGVyV3JhcHBlciIsInNlY3Rpb24iLCJUZXh0SW5wdXQiLCJ0YXJnZXQiLCJpY29uIiwic2hvd0Vycm9yIiwiZXJyb3IiLCJzdHJpbmciLCJib29sIiwiSW5wdXQiLCJib3JkZXIiLCJJbnB1dFdyYXBwZXIiLCJzcGFuIiwiSWNvbiIsImltZyIsIkVycm9yV3JhcHBlciIsIkVycm9yTXNnIiwicCIsInByaW1hcnlDb2xvciIsInNlY29uZGFyeUNvbG9yIiwid2hpdGUiLCJibGFjayIsImRlZmF1bHRDb2xvciIsImNvbG9ycyIsInNlY29uZGFyeSIsInNlYXRzIiwiYm9va2VkIiwiYXZhaWxhYmxlIiwibWlzYyIsImZvbnRzIiwiVGV4dFdyYXBwZXIiLCJMb2dvSW1nIiwiTG9nb1RleHQiLCJoMSIsIkxvZ28iLCJwcmVsb2FkZWRTdGF0ZSIsIndpbmRvdyIsIl9fUFJFTE9BREVEX1NUQVRFX18iLCJzdG9yZSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJob21lUGFnZSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJlcnJvck1zZyIsInNlYXJjaFJlc3VsdCIsImFjdGlvbiIsImZpbHRlciIsIml0ZW0iLCJjaXR5IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwibGlzdGluZyIsInNlYXRMYXlvdXQiLCJvcmRlclN1bW1hcnkiLCJpbml0aWFsU3RhdGUiLCJpdGVtcyIsIkFwcCIsIkhvbWVQYWdlIiwiTGlzdGluZyIsIlNlYXRMYXlvdXQiLCJPcmRlclN1bW1hcnkiLCJDb25maXJtYXRpb24iLCJjb21wb3NlRW5oYW5jZXJzIiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwiY29uZmlndXJlU3RvcmUiLCJIT01FX1BHX0FQSV9VUkwiLCJMSVNUSU5HX0FQSV9VUkwiLCJTRUFUTEFZT1VUX0FQSV9VUkwiLCJNQVhfSVRFTVNfSU5fU0VBUkNIX1JFU1VMVFMiLCJtb2JpbGVQYXR0ZXJuIiwibnVtYmVyUGF0dGVybiIsImVtYWlsUGF0dGVybiIsImxvZ0Vycm9yVG9TZXJ2aWNlIiwiaW5mbyIsIlJhdmVuIiwiY2FwdHVyZUV4Y2VwdGlvbiIsImV4dHJhIiwiZGVib3VuY2UiLCJjYWxsQmFjayIsImRlbGF5IiwidElkIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIldyYXBwZXIiLCJhcnRpY2xlIiwiSW5mb1dyYXBwZXIiLCJCdXNJbWFnZSIsIkNoZWNrTWFyayIsIkNvbmZpcm1Nc2ciLCJMaXN0SXRlbSIsImxpIiwiRXJyb3JCb3VuZGFyeSIsImhhc0Vycm9yIiwibG9jYXRpb24iLCJocmVmIiwiZ29Ib21lIiwiZWxlbWVudCIsIlNlYXJjaCIsInVwZGF0ZUNoYW5nZSIsInNlYXJjaERlYm91bmNlZCIsInJlc3VsdEl0ZW1TZWxlY3Rpb24iLCJzaG93UmVzdWx0cyIsImRpc3BhdGNoIiwibGVuZ3RoIiwiaGFuZGxlU2VhcmNoUmVzdWx0U2VsZWN0aW9uIiwicmVzdWx0IiwicmVzdWx0SXRlbXMiLCJzbGljZSIsImFycmF5T2YiLCJhbnkiLCJoYW5kbGVTZWxlY3Rpb24iLCJTZWFyY2hSZXN1bHRzIiwibWFwIiwiZmV0Y2hTZWFyY2giLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwibWVzc2FnZSIsImR1bW15IiwiaGFuZGxlRnJvbSIsImhhbmRsZVNlYXJjaENsaWNrIiwiaGlzdG9yeSIsInB1c2giLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJoYW5kbGVUbyIsIm1hcFN0YXRlVG9Qcm9wcyIsIlBhZ2VXcmFwcGVyIiwiU2VhcmNoUmVzdWx0c1dyYXBwZXIiLCJSZXN1bHRzTGlzdCIsInVsIiwiUmVzdWx0c0xpc3RJdGVtIiwiRXJyb3JJbWciLCJHb1RvSG9tZSIsIkxpc3RpbmdDYXJkIiwiY2xpY2tIYW5kbGVyIiwiY29tcGFueU5hbWUiLCJwcmljZSIsImN1cnJlbmN5IiwiYXJyaXZhbFRpbWUiLCJkZXBhcnR1cmVUaW1lIiwidHJhdmVsVGltZSIsImZldGNoTGlzdGluZ0RhdGEiLCJmZXRjaExpc3RpbmdEYXRhSWZOZWVkZWQiLCJnZXRTdGF0ZSIsInNlcnZpY2VzIiwib25DYXJkQ2xpY2siLCJqb3VybmV5RGV0YWlscyIsImZyb20iLCJ0byIsImJ1c1R5cGUiLCJkZXAiLCJhcnIiLCJ0aWNrZXRQcmljZSIsIkxpc3RWaWV3V3JhcHBlciIsIkNhcmRXcmFwcGVyIiwiSm91cm5leURldGFpbFdyYXBwZXIiLCJoZWFkZXIiLCJGcm9tVG9BcnJvdyIsIkNhcmRIZWFkZXIiLCJDb21wYW55TmFtZSIsImgyIiwiQ3VycmVuY3kiLCJUaW1pbmdzIiwiVGltZXJXcmFwcGVyIiwiZGl2IiwiQnVzSWNvbiIsIlRpbWVyIiwiU3VtbWFyeSIsInBheU5vdyIsInNoYXBlIiwiVXNlckRldGFpbHMiLCJoYW5kbGVBZ2UiLCJoYW5kbGVOYW1lIiwiaGFuZGxlRW1haWwiLCJoYW5kbGVNb2JpbGUiLCJjb25maXJtRGV0YWlscyIsImFnZSIsIm5hbWUiLCJlbWFpbCIsIm1vYmlsZSIsInNob3dBZ2VFcnJvciIsInNob3dOYW1lRXJyb3IiLCJzaG93RW1haWxFcnJvciIsInNob3dNb2JpbGVFcnJvciIsInBhdHRlcm4iLCJyZWdFeFBhdHRlcm4iLCJSZWdFeHAiLCJ0ZXN0IiwiaXNWYWxpZFBhdHRlcm4iLCJ2YWxpZGF0ZUlucHV0QWdhaW5zdFBhdHRlcm4iLCJoYW5kbGVPcmRlclN1bW1hcnkiLCJzaG93T3JkZXJTdW1tYXJ5Iiwic2hvdWxkU2hvdyIsInBvc2l0aW9uIiwicGFkZGluZ0JvdHRvbSIsIkJ1dHRvbldyYXBwZXIiLCJDb250YWN0SW5mbyIsIlBhc3NlbmdlckluZm8iLCJJbmZvSGVhZGVyIiwiU3VtbWFyeUluZm8iLCJTdW1tYXJ5SW5mb0xpc3QiLCJTdW1tYXJ5SW5mb0l0ZW0iLCJMZWdlbmQiLCJ2YXJpYW50IiwiZmV0Y2hEYXRhIiwiY2FudmFzUmVmIiwic2V0Q2FudmFzUmVmIiwidXBkYXRlQ2FudmFzIiwiaGFuZGxlQ2FudmFzQ2xpY2siLCJib29rZWRTZWF0SW1nIiwiYXZhaWxhYmxlU2VhdEltZyIsImN0eCIsIm9mZnNldFgiLCJvZmZzZXRZIiwic2hvd0Jsb2NrZWRJbWciLCJJbWFnZSIsIm9ubG9hZCIsImxvYWRJbWFnZSIsImRyYXdJbWFnZSIsInNyYyIsImdldENvbnRleHQiLCJyb3ciLCJpc0F2YWlsYWJsZSIsImlzR2FuZ1dheSIsImNyZWF0ZUltYWdlIiwibWFyZ2luTGVmdCIsImFycmF5IiwiTGVnZW5kQ29sb3IiLCJUZXh0IiwiTGVnZW5kV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLFNBQU87QUFDbkNDLFFBQUksRUFBRTtBQUQ2QixHQUFQO0FBQUEsQ0FBdEI7QUFJQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLElBQUk7QUFBQSxTQUFLO0FBQ3JDRixRQUFJLEVBQUUsZ0JBRCtCO0FBRXJDRSxRQUFJLEVBQUpBO0FBRnFDLEdBQUw7QUFBQSxDQUExQjtBQUtBLElBQU1DLFlBQVksR0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDN1FBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGxvYWRpbmdTZWFyY2ggPSAoKSA9PiAoe1xuXHR0eXBlOiAnTE9BRF9TRUFSQ0gnXG59KTtcblxuZXhwb3J0IGNvbnN0IHJlY2VpdmVTZWFyY2ggPSBkYXRhID0+ICh7XG5cdHR5cGU6ICdSRUNFSVZFX1NFQVJDSCcsXG5cdGRhdGFcbn0pO1xuXG5leHBvcnQgY29uc3QgZmFpbGVkU2VhcmNoID0gZXJyID0+ICh7XG5cdHR5cGU6ICdGQUlMRURfU0VBUkNIJyxcblx0ZXJyXG59KTtcblxuZXhwb3J0IGNvbnN0IHNlYXJjaCA9IHZhbHVlID0+ICh7XG5cdHR5cGU6ICdTRUFSQ0gnLFxuXHR0ZXJtOiB2YWx1ZVxufSk7XG4iLCJleHBvcnQgZnVuY3Rpb24gcmVxdWVzdExpc3RpbmcoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ1JFUVVFU1RfTElTVElORydcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVMaXN0aW5nKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnUkVDRUlWRV9MSVNUSU5HJyxcblx0XHRkYXRhXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkUmVzcG9uc2UoZXJyKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ0ZBSUxFRF9MSVNUSU5HJyxcblx0XHRlcnJcblx0fTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmZXRjaGluZ0RhdGEoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ1JFUVVFU1RfU0VBVExBWU9VVF9EQVRBJ1xuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUZldGNoU3VjY2VzcyhkYXRhKSB7XG5cdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdSRUNFSVZFX1NFQVRMQVlPVVRfREFUQScsXG5cdFx0ZGF0YVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUZldGNoRmFpbGVkKGVycikge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdGQUlMRURfU0VBVExBWU9VVF9EQVRBJyxcblx0XHRlcnJcblx0fTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGNvbG9ycywgbWlzYywgZm9udHMgfSBmcm9tICcuLi9Ub2tlbnMnO1xuXG5jb25zdCBhcHBlYXJhbmNlcyA9IHtcblx0cHJpbWFyeToge1xuXHRcdGNvbG9yOiBjb2xvcnMuYnV0dG9uLnByaW1hcnkudGV4dCxcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMuYnV0dG9uLnByaW1hcnkuYmFja2dyb3VuZCxcblx0fSxcblx0ZGVmYXVsdDoge1xuXHRcdGNvbG9yOiBjb2xvcnMuYnV0dG9uLmRlZmF1bHQudGV4dCxcblx0XHRiYWNrZ3JvdW5kOiBjb2xvcnMuYnV0dG9uLmRlZmF1bHQuYmFja2dyb3VuZCxcblx0fSxcbn07XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShhcHBlYXJhbmNlKSB7XG5cdGNvbnN0IGFwcGVhcmFuY2VTdHlsZXMgPSBhcHBlYXJhbmNlIHx8ICdkZWZhdWx0Jztcblx0cmV0dXJuIGFwcGVhcmFuY2VzW2FwcGVhcmFuY2VTdHlsZXNdO1xufVxuXG5jb25zdCBCdXR0b25TdHlsZSA9IHN0eWxlZC5idXR0b25gXG5cdGJvcmRlcjogbm9uZTtcblx0aGVpZ2h0OiAke21pc2MuaW5wdXQuaGVpZ2h0fTtcblx0d2lkdGg6ICR7bWlzYy5pbnB1dC53aWR0aH07XG5cdGZvbnQtc2l6ZTogJHtmb250cy5idXR0b24uZm9udFNpemV9O1xuXHRmb250LXdlaWdodDogJHtmb250cy5idXR0b24uZm9udFdlaWdodH07XG5cdGNvbG9yOiAke3Byb3BzID0+IGdldEF0dHJpYnV0ZShwcm9wcy5hcHBlYXJhbmNlKS5jb2xvcn07XG5cdGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gZ2V0QXR0cmlidXRlKHByb3BzLmFwcGVhcmFuY2UpLmJhY2tncm91bmR9O1xuYDtcblxuY29uc3QgQnV0dG9uID0gcHJvcHMgPT4gKFxuXHQ8QnV0dG9uU3R5bGUgb25DbGljaz17cHJvcHMuaGFuZGxlQ2xpY2t9IGFwcGVhcmFuY2U9e3Byb3BzLmFwcGVhcmFuY2V9Pntwcm9wcy5jaGlsZHJlbn08L0J1dHRvblN0eWxlPlxuKTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcblx0Y2hpbGRyZW46ICdPa2F5Jyxcblx0YXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxufTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXHRoYW5kbGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0YXBwZWFyYW5jZTogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdkZWZhdWx0J10pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuXG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi4vVGV4dElucHV0JztcblxuaW1wb3J0IENhbGVuZGFyIGZyb20gJ3JjLWNhbGVuZGFyJztcblxuY2xhc3MgQ3VzdG9tQ2FsZW5kYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc2VsZWN0RGF0ZSA9IHRoaXMuc2VsZWN0RGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGFuZGxlRm9jdXMgPSB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dDYWxlbmRhcjogZmFsc2UsXG5cdFx0XHRzZWxlY3RlZERhdGU6ICcnXG5cdFx0fTtcblx0fVxuXG5cdHNlbGVjdERhdGUoZCkge1xuXHRcdGNvbnN0IHNlbERhdGUgPSBkLmZvcm1hdCgnREQvTU0vWVlZWScpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2VsZWN0ZWREYXRlOiBzZWxEYXRlLFxuXHRcdFx0c2hvd0NhbGVuZGFyOiBmYWxzZVxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG5cdFx0Y29uc29sZS5sb2coZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdH1cblxuXHRoYW5kbGVGb2N1cyhldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93Q2FsZW5kYXI6IHRydWUgfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PFRleHRJbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRpY29uPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGRieGE0YWZhL2ltYWdlL3VwbG9hZC92MTUzMTExNDg3My9ibHVidXMvY2FsZW5kYXIuc3ZnXCJcblx0XHRcdFx0XHRvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxuXHRcdFx0XHRcdGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWREYXRlfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5zaG93Q2FsZW5kYXIgJiYgKFxuXHRcdFx0XHRcdDxDYWxlbmRhciB7Li4udGhpcy5wcm9wc30gb25TZWxlY3Q9e3RoaXMuc2VsZWN0RGF0ZX0gcHJlZml4Q2xhc3M9XCJyZWFjdC1jYWwtXCIgLz5cblx0XHRcdFx0KX1cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21DYWxlbmRhcjtcbiIsImltcG9ydCBDYWxlbmRhciBmcm9tICcuL0NhbGVuZGFyJztcblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9sb2dvJztcbmltcG9ydCBIZWFkZXJXcmFwcGVyIGZyb20gJy4vc3R5bGUnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG5cdDxIZWFkZXJXcmFwcGVyPlxuXHRcdDxMaW5rIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0gdG89XCIvXCI+XG5cdFx0XHQ8aGVhZGVyPlxuXHRcdFx0XHQ8TG9nbyAvPlxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0PC9MaW5rPlxuXHQ8L0hlYWRlcldyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL1Rva2Vucyc7XG5cbmNvbnN0IEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNzBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMucHJpbWFyeX07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogMTVweDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcldyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IElucHV0V3JhcHBlciwgSW5wdXQsIEljb24sIEVycm9yV3JhcHBlciwgRXJyb3JNc2cgfSBmcm9tICcuL3N0eWxlJztcblxuY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcblx0XHR0aGlzLnByb3BzLmhhbmRsZUNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgdHlwZSwgaWNvbiwgc2hvd0Vycm9yLCBlcnJvciB9ID0gdGhpcy5wcm9wcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8SW5wdXRXcmFwcGVyPlxuXHRcdFx0XHRcdDxJbnB1dCB0eXBlPXt0eXBlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHsuLi50aGlzLnByb3BzfSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gLz5cblx0XHRcdFx0XHR7aWNvbiAmJiA8SWNvbiBzcmM9e2ljb259IGFsdD17aWNvbn0gLz59XG5cdFx0XHRcdFx0e3Nob3dFcnJvciAmJiAoXG5cdFx0XHRcdFx0XHQ8RXJyb3JXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHQ8RXJyb3JNc2c+e2Vycm9yfTwvRXJyb3JNc2c+XG5cdFx0XHRcdFx0XHQ8L0Vycm9yV3JhcHBlcj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L0lucHV0V3JhcHBlcj5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxufVxuXG5UZXh0SW5wdXQuZGVmYXVsdFByb3BzID0ge1xuXHRpY29uOiAnJyxcblx0c2hvd0Vycm9yOiBmYWxzZSxcblx0ZXJyb3I6ICcnXG59O1xuXG5UZXh0SW5wdXQucHJvcFR5cGVzID0ge1xuXHRpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcblx0c2hvd0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcblx0aGFuZGxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHR0eXBlOiBQcm9wVHlwZXMub25lT2YoWyd0ZXh0JywgJ3Bhc3N3b3JkJywgJ2VtYWlsJywgJ251bWJlcicsICd0ZWwnXSkuaXNSZXF1aXJlZFxufTtcbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dDtcbiIsImltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi9UZXh0SW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXQ7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGNvbG9ycywgZm9udHMsIG1pc2MgfSBmcm9tICcuLi9Ub2tlbnMnO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG5cdG91dGxpbmU6IG5vbmU7XG5cdHBhZGRpbmctbGVmdDogNDVweDtcblx0d2lkdGg6ICR7bWlzYy5pbnB1dC53aWR0aH07XG5cdGNvbG9yOiAke2NvbG9ycy5pbnB1dC50ZXh0fTtcblx0aGVpZ2h0OiAke21pc2MuaW5wdXQuaGVpZ2h0fTtcblx0Ym9yZGVyOiAke2NvbG9ycy5pbnB1dC5ib3JkZXJ9O1xuXHRmb250LXNpemU6ICR7Zm9udHMuaW5wdXQuZm9udFNpemV9O1xuXHRmb250LXdlaWdodDogJHtmb250cy5pbnB1dC5mb250V2VpZ2h0fTtcblx0YmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuaW5wdXQuYmFja2dyb3VuZH07XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2NvbG9ycy5pbnB1dC5ib3JkZXJ9O1xuXG5cdCY6OnBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJHtjb2xvcnMuaW5wdXQucGxhY2Vob2xkZXJ9O1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLnNwYW5gXG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0c3ZnIHtcblx0XHRmaWxsOiAjMDAwO1xuXHR9XG5cdCY6bGFzdC1vZi10eXBlIHtcblx0XHRtYXJnaW4tdG9wOiA3MHB4O1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvbiA9IHN0eWxlZC5pbWdgXG5cdHRvcDogMThweDtcblx0bGVmdDogMTFweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogJHttaXNjLmlucHV0Lmljb24ud2lkdGh9O1xuXHRoZWlnaHQ6ICR7bWlzYy5pbnB1dC5pY29uLmhlaWdodH07XG5gO1xuXG5leHBvcnQgY29uc3QgRXJyb3JXcmFwcGVyID0gc3R5bGVkLnNwYW5gXG5cdHRvcDogNTlweDtcblx0bGVmdDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNDVweDtcblx0ZGlzcGxheTogZmxleDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRiYWNrZ3JvdW5kOiAjZmVmM2YxO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFcnJvck1zZyA9IHN0eWxlZC5wYFxuXHRjb2xvcjogI2NmMmEyYTtcbmA7XG4iLCJjb25zdCBwcmltYXJ5Q29sb3IgPSAnIzIzOTZiMCcsXG5cdHNlY29uZGFyeUNvbG9yID0gJyM1Y2Q1ZjAnLFxuXHR3aGl0ZSA9ICcjZmZmJyxcblx0YmxhY2sgPSAnIzAwMCcsXG5cdGRlZmF1bHRDb2xvciA9ICcjZjFmMWYxJztcblxuY29uc3QgY29sb3JzID0ge1xuXHRwcmltYXJ5OiBwcmltYXJ5Q29sb3IsXG5cdHNlY29uZGFyeTogc2Vjb25kYXJ5Q29sb3IsXG5cdGlucHV0OiB7XG5cdFx0YmFja2dyb3VuZDogd2hpdGUsXG5cdFx0dGV4dDogcHJpbWFyeUNvbG9yLFxuXHRcdGJvcmRlcjogcHJpbWFyeUNvbG9yLFxuXHRcdHBsYWNlaG9sZGVyOiBwcmltYXJ5Q29sb3Jcblx0fSxcblx0YnV0dG9uOiB7XG5cdFx0cHJpbWFyeToge1xuXHRcdFx0dGV4dDogd2hpdGUsXG5cdFx0XHRiYWNrZ3JvdW5kOiBzZWNvbmRhcnlDb2xvclxuXHRcdH0sXG5cdFx0ZGVmYXVsdDoge1xuXHRcdFx0dGV4dDogYmxhY2ssXG5cdFx0XHRiYWNrZ3JvdW5kOiBkZWZhdWx0Q29sb3Jcblx0XHR9XG5cdH0sXG5cdHNlYXRzOiB7XG5cdFx0Ym9va2VkOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBkZWZhdWx0Q29sb3Jcblx0XHR9LFxuXHRcdGF2YWlsYWJsZToge1xuXHRcdFx0YmFja2dyb3VuZDogc2Vjb25kYXJ5Q29sb3Jcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbG9ycztcbiIsImltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuaW1wb3J0IHsgbWlzYywgZm9udHMgfSBmcm9tICcuL21pc2MnO1xuXG5leHBvcnQgeyBjb2xvcnMsIG1pc2MsIGZvbnRzIH07XG5cbiIsImV4cG9ydCBjb25zdCBtaXNjID0ge1xuXHRpbnB1dDoge1xuXHRcdGhlaWdodDogJzU2cHgnLFxuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0aWNvbjoge1xuXHRcdFx0aGVpZ2h0OiAnMjJweCcsXG5cdFx0XHR3aWR0aDogJzIycHgnLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9udHMgPSB7XG5cdGlucHV0OiB7XG5cdFx0Zm9udFNpemU6ICcxOHB4Jyxcblx0XHRmb250V2VpZ2h0OiAnNDAwJyxcblx0fSxcblx0YnV0dG9uOiB7XG5cdFx0Zm9udFNpemU6ICcxOHB4Jyxcblx0XHRmb250V2VpZ2h0OiAnNDAwJyxcblx0fSxcbn07XG5cbiIsImltcG9ydCBMb2dvIGZyb20gJy4vbG9nbyc7XG5cbmV4cG9ydCBkZWZhdWx0IExvZ287XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgVGV4dFdyYXBwZXIgPSBzdHlsZWQuc3BhbmBcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuYDtcblxuY29uc3QgTG9nb0ltZyA9IHN0eWxlZC5pbWdgXG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5gO1xuXG5jb25zdCBMb2dvVGV4dCA9IHN0eWxlZC5oMWBcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuYDtcblxuY29uc3QgTG9nbyA9ICgpID0+IChcblx0PFRleHRXcmFwcGVyPlxuXHRcdDxMb2dvSW1nIGFsdD1cImJsdWJ1cyBsb2dvXCIgc3JjPVwiLi4vLi4vcHVibGljL2ltYWdlcy9CbHVCdXNfMTkyeDE5Mi5wbmdcIiAvPlxuXHRcdDxMb2dvVGV4dD5CbHVCdXM8L0xvZ29UZXh0PlxuXHQ8L1RleHRXcmFwcGVyPlxuKTtcbmV4cG9ydCBkZWZhdWx0IExvZ287XG4iLCIvKiogZ2xvYmFsIGRvY3VtZW50LCBSYXZlbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBpbmplY3RHbG9iYWwgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vcm91dGVzJztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4vdmlld3MvSG9tZVBhZ2UvRXJyb3JCb3VuZGFyeSc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbmNvbnN0IHByZWxvYWRlZFN0YXRlID0gd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX187XG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHByZWxvYWRlZFN0YXRlKTsgLy8gSW5pdGlhbCBTdGF0ZSBjYW4gYmUgcGFzc2VkIGhlcmVcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5pZiAoX19FTlZfXyA9PT0gJ1BST0RVQ1RJT04nICYmIHR5cGVvZiBSYXZlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cdFJhdmVuLmNvbmZpZygnaHR0cHM6Ly8zNTRlOTcxZmY5Yjk0NWY4YTA0N2ZlZWExNmQ2ZDc0ZUBzZW50cnkuaW8vMTIzNTM2MCcsIHtcblx0XHRyZWxlYXNlOiAnMC0wLTAnLFxuXHRcdGVudmlyb25tZW50OiAncHJvZHVjdGlvbidcblx0fSkuaW5zdGFsbCgpO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoXG5cdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdDxCcm93c2VyUm91dGVyPlxuXHRcdFx0PEVycm9yQm91bmRhcnk+XG5cdFx0XHRcdDxBcHAgLz5cblx0XHRcdDwvRXJyb3JCb3VuZGFyeT5cblx0XHQ8L0Jyb3dzZXJSb3V0ZXI+XG5cdDwvUHJvdmlkZXI+LFxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmluamVjdEdsb2JhbGBcblx0KiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHBhZGRpbmc6IDA7XG5cdH1cblxuXHRib2R5IHtcblx0XHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdH1cblxuXHR1bCB7XG5cdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHR9XG5gO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2UoXG5cdHN0YXRlID0ge1xuXHRcdGlzTG9hZGluZzogZmFsc2UsXG5cdFx0aXNFcnJvcjogZmFsc2UsXG5cdFx0ZXJyb3JNc2c6ICcnLFxuXHRcdGRhdGE6IHt9LFxuXHRcdHNlYXJjaFJlc3VsdDogW11cblx0fSxcblx0YWN0aW9uXG4pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRjYXNlICdMT0FEX1NFQVJDSCc6XG5cdFx0cmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9hZGluZzogdHJ1ZSB9O1xuXG5cdGNhc2UgJ1JFQ0VJVkVfU0VBUkNIJzpcblx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZSwgZGF0YTogYWN0aW9uLmRhdGEgfTtcblxuXHRjYXNlICdGQUlMRURfU0VBUkNIJzpcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRpc0xvYWRpbmc6IGZhbHNlLFxuXHRcdFx0aXNFcnJvcjogdHJ1ZSxcblx0XHRcdGVycm9yTXNnOiBhY3Rpb24uZXJyXG5cdFx0fTtcblxuXHRjYXNlICdTRUFSQ0gnOiB7XG5cdFx0Y29uc3Qgc2VhcmNoUmVzdWx0ID0gc3RhdGUuZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNpdHkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGFjdGlvbi50ZXJtKSA+IC0xKTtcblx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgc2VhcmNoUmVzdWx0IH07XG5cdH1cblxuXHRkZWZhdWx0OlxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgbGlzdGluZyBmcm9tICcuL2xpc3RpbmcnO1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaG9tZVBhZ2UnO1xuaW1wb3J0IHNlYXRMYXlvdXQgZnJvbSAnLi9zZWF0TGF5b3V0JztcbmltcG9ydCBvcmRlclN1bW1hcnkgZnJvbSAnLi9vcmRlclN1bW1hcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuXHRsaXN0aW5nLFxuXHRob21lUGFnZSxcblx0c2VhdExheW91dCxcblx0b3JkZXJTdW1tYXJ5XG59KTtcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0aXNMb2FkaW5nOiBmYWxzZSxcblx0aXNFcnJvcjogZmFsc2UsXG5cdGl0ZW1zOiB7fSxcblx0ZXJyb3I6ICcnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0aW5nKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRjYXNlICdSRVFVRVNUX0xJU1RJTkcnOlxuXHRcdHJldHVybiB7IC4uLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUgfTtcblxuXHRjYXNlICdSRUNFSVZFX0xJU1RJTkcnOlxuXHRcdHJldHVybiB7IC4uLnN0YXRlLCBpc0xvYWRpbmc6IGZhbHNlLCBpdGVtczogYWN0aW9uLmRhdGEgfTtcblxuXHRjYXNlICdGQUlMRURfTElTVElORyc6XG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdGlzRXJyb3I6IHRydWUsXG5cdFx0XHRlcnJvcjogYWN0aW9uLmVyclxuXHRcdH07XG5cblx0ZGVmYXVsdDpcblx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9yZGVyU3VtbWFyeShzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRkZWZhdWx0OlxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRpc0xvYWRpbmc6IGZhbHNlLFxuXHRpc0Vycm9yOiBmYWxzZSxcblx0aXRlbXM6IFtdLFxuXHRlcnJvcjogJydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXRMYXlvdXQoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdGNhc2UgJ1JFUVVFU1RfU0VBVExBWU9VVF9EQVRBJzpcblx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgaXNMb2FkaW5nOiB0cnVlIH07XG5cdGNhc2UgJ1JFQ0VJVkVfU0VBVExBWU9VVF9EQVRBJzpcblx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZSwgaXRlbXM6IGFjdGlvbi5kYXRhIH07XG5cdGNhc2UgJ0ZBSUxFRF9TRUFUTEFZT1VUX0RBVEEnOlxuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGlzTG9hZGluZzogZmFsc2UsXG5cdFx0XHRpc0Vycm9yOiB0cnVlLFxuXHRcdFx0ZXJyb3I6IGFjdGlvbi5lcnJcblx0XHR9O1xuXHRkZWZhdWx0OlxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IExpc3RpbmcgZnJvbSAnLi92aWV3cy9MaXN0aW5nJztcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3ZpZXdzL0hvbWVQYWdlJztcbmltcG9ydCBTZWF0TGF5b3V0IGZyb20gJy4vdmlld3MvU2VhdExheW91dCc7XG5pbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gJy4vdmlld3MvT3JkZXJTdW1tYXJ5JztcbmltcG9ydCBDb25maXJtYXRpb24gZnJvbSAnLi92aWV3cy9Db25maXJtYXRpb24nO1xuXG4vKlxuXHRTd2l0Y2ggb25seSByZW5kZXJzIHRoZSBmaXJzdCBtYXRjaC4gU3Vicm91dGluZyBoYXBwZW5zIGRvd25zdHJlYW1cblx0aHR0cHM6Ly9yZWFjdHRyYWluaW5nLmNvbS9yZWFjdC1yb3V0ZXIvd2ViL2FwaS9Td2l0Y2hcbiovXG5cbmNvbnN0IEFwcCA9ICgpID0+IChcblx0PFN3aXRjaD5cblx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWVQYWdlfSAvPlxuXHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL2xpc3RpbmdcIiBjb21wb25lbnQ9e0xpc3Rpbmd9IC8+XG5cdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvc2VhdGxheW91dFwiIGNvbXBvbmVudD17U2VhdExheW91dH0gLz5cblx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9zdW1tYXJ5XCIgY29tcG9uZW50PXtPcmRlclN1bW1hcnl9IC8+XG5cdFx0PFJvdXRlIHBhdGg9XCIvY29uZmlybWF0aW9uXCIgY29tcG9uZW50PXtDb25maXJtYXRpb259IC8+XG5cdDwvU3dpdGNoPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vY2xpZW50L3JlZHVjZXJzJztcblxuLy8gdGhpcyBlbmFibGVzIHRoZSBjaHJvbWUgZGV2dG9vbHMgZm9yIHJlZHV4IG9ubHkgaW4gZGV2ZWxvcG1lbnRcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPVxuXHQocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cdFx0d2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXykgfHxcblx0Y29tcG9zZTtcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUgPSB7fSkgPT4ge1xuXHRjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUodGh1bmspKSk7XG5cdHJldHVybiBzdG9yZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlO1xuIiwiZXhwb3J0IGNvbnN0IEhPTUVfUEdfQVBJX1VSTCA9ICdodHRwczovL2FwaS5teWpzb24uY29tL2JpbnMvMTNvajBhJztcbmV4cG9ydCBjb25zdCBMSVNUSU5HX0FQSV9VUkwgPSAnaHR0cHM6Ly9hcGkubXlqc29uLmNvbS9iaW5zL284bDcyJztcbmV4cG9ydCBjb25zdCBTRUFUTEFZT1VUX0FQSV9VUkwgPSAnaHR0cHM6Ly9hcGkubXlqc29uLmNvbS9iaW5zL3N5cTRhJztcblxuZXhwb3J0IGNvbnN0IE1BWF9JVEVNU19JTl9TRUFSQ0hfUkVTVUxUUyA9IDU7XG5cbi8vIFBBVFRFUk5TXG5leHBvcnQgY29uc3QgbW9iaWxlUGF0dGVybiA9IC9eXFxkezEwfSQvO1xuZXhwb3J0IGNvbnN0IG51bWJlclBhdHRlcm4gPSAvXlxcZHsxLDJ9JC87XG5leHBvcnQgY29uc3QgZW1haWxQYXR0ZXJuID0gL15bYS16QS1aMC05LiEjJCUmJyorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC87XG4iLCIvKiBnbG9iYWwgUmF2ZW4sIF9fRU5WX18gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ0Vycm9yVG9TZXJ2aWNlKGVycm9yLCBpbmZvKSB7XG5cdGlmICh0eXBlb2YgUmF2ZW4gIT09ICd1bmRlZmluZWQnICYmIF9fRU5WX18gPT09ICdQUk9EVUNUSU9OJykge1xuXHRcdFJhdmVuLmNhcHR1cmVFeGNlcHRpb24oZXJyb3IsIHsgZXh0cmE6IGluZm8gfSk7XG5cdH1cbn1cblxuLyoqXG4gKiBTZXRzIGRlYm91bmNpbmcgZm9yIGZ1bmN0aW9uIHBhc3NlZCBpbiBjYWxsYmFja1xuICogQHBhcmFtIHsqfSBjYWxsQmFjayBGdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgZGVsYXlcbiAqIEBwYXJhbSB7Kn0gZGVsYXkgVGltZSBpbiBtaWxsaXNlY29uZHMgYWZ0ZXIgd2hpY2ggdGhlIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGNhbGxCYWNrLCBkZWxheSkge1xuXHRsZXQgdElkO1xuXHRyZXR1cm4gdmFsdWUgPT4ge1xuXHRcdGNsZWFyVGltZW91dCh0SWQpO1xuXHRcdHRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Y2FsbEJhY2sodmFsdWUpO1xuXHRcdH0sIGRlbGF5IHx8IDMwMCk7XG5cdH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCB7IFdyYXBwZXIsIEluZm9XcmFwcGVyLCBCdXNJbWFnZSwgQ2hlY2tNYXJrLCBDb25maXJtTXNnLCBMaXN0SXRlbSB9IGZyb20gJy4vc3R5bGUnO1xuXG5jb25zdCBDb25maXJtYXRpb24gPSAoKSA9PiAoXG5cdDxzZWN0aW9uPlxuXHRcdDxIZWFkZXIgLz5cblx0XHQ8V3JhcHBlcj5cblx0XHRcdDxDaGVja01hcms+XG5cdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRhbHQ9XCJjb25maXJtYXRpb25cIlxuXHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RkYnhhNGFmYS9pbWFnZS91cGxvYWQvdjE1Mjg2MzcxMzMvYmx1YnVzL3RpY2suc3ZnXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvQ2hlY2tNYXJrPlxuXHRcdFx0PENvbmZpcm1Nc2c+WW91ciB0aWNrZXRzIGhhdmUgYmVlbiBjb25maXJtZWQuIEVuam95IHlvdXIgcmlkZS48L0NvbmZpcm1Nc2c+XG5cdFx0XHQ8SW5mb1dyYXBwZXI+XG5cdFx0XHRcdDxwPktpZ2FsaTwvcD5cblx0XHRcdFx0PEJ1c0ltYWdlXG5cdFx0XHRcdFx0YWx0PVwiYnVzXCJcblx0XHRcdFx0XHRzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZGJ4YTRhZmEvaW1hZ2UvdXBsb2FkL3YxNTI4NjM2NzA0L2JsdWJ1cy9idXMuc3ZnXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PHA+S2lidXllPC9wPlxuXHRcdFx0PC9JbmZvV3JhcHBlcj5cblx0XHRcdDx1bD5cblx0XHRcdFx0PExpc3RJdGVtPlxuXHRcdFx0XHRcdDxwPlRpY2tldHM8L3A+XG5cdFx0XHRcdFx0PHA+MjwvcD5cblx0XHRcdFx0PC9MaXN0SXRlbT5cblx0XHRcdFx0PExpc3RJdGVtPlxuXHRcdFx0XHRcdDxwPkJ1cyBGYXJlPC9wPlxuXHRcdFx0XHRcdDxwPjQwMCAkPC9wPlxuXHRcdFx0XHQ8L0xpc3RJdGVtPlxuXHRcdFx0XHQ8TGlzdEl0ZW0+XG5cdFx0XHRcdFx0PHA+Qm9va2luZyBGZWU8L3A+XG5cdFx0XHRcdFx0PHA+NDAgJDwvcD5cblx0XHRcdFx0PC9MaXN0SXRlbT5cblx0XHRcdFx0PExpc3RJdGVtPlxuXHRcdFx0XHRcdDxwPlRvdGFsPC9wPlxuXHRcdFx0XHRcdDxwPjQ0MCAkPC9wPlxuXHRcdFx0XHQ8L0xpc3RJdGVtPlxuXHRcdFx0PC91bD5cblx0XHQ8L1dyYXBwZXI+XG5cdDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1hdGlvbjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5hcnRpY2xlYFxuXHRtYXJnaW46IDIwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSW5mb1dyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgQnVzSW1hZ2UgPSBzdHlsZWQuaW1nYFxuXHRoZWlnaHQ6IDgwcHg7XG5cdHdpZHRoOiA4MHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IENoZWNrTWFyayA9IHN0eWxlZC5zcGFuYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRpbWcge1xuXHRcdGhlaWdodDogNDBweDtcblx0XHR3aWR0aDogNDBweDtcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbmZpcm1Nc2cgPSBzdHlsZWQucGBcblx0cGFkZGluZzogNTBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRsaW5lLWhlaWdodDogMzBweDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGxvZ0Vycm9yVG9TZXJ2aWNlIGZyb20gJy4uLy4uL3V0aWxzL2hlbHBlcnMnO1xuaW1wb3J0IHsgRXJyb3JXcmFwcGVyLCBFcnJvckltZywgRXJyb3JNc2csIEdvVG9Ib21lIH0gZnJvbSAnLi9zdHlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aGFzRXJyb3I6IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBpbmZvKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yOiB0cnVlIH0pO1xuXHRcdGxvZ0Vycm9yVG9TZXJ2aWNlKGVycm9yLCBpbmZvKTtcblx0fVxuXG5cdGdvSG9tZSgpIHtcblx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5oYXNFcnJvcikge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEVycm9yV3JhcHBlcj5cblx0XHRcdFx0XHQ8aGVhZGVyPlxuXHRcdFx0XHRcdFx0PEVycm9ySW1nXG5cdFx0XHRcdFx0XHRcdGFsdD1cInNvbXRoaW5nIG5vdCByaWdodFwiXG5cdFx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RkYnhhNGFmYS9pbWFnZS91cGxvYWQvdjE1MzAzMzk0NzQvYmx1YnVzL2luZHVzdHJpYWwtcm9ib3Quc3ZnXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9oZWFkZXI+XG5cdFx0XHRcdFx0PEVycm9yTXNnPlxuXHRcdFx0XHRcdFx0PHA+SGV5IFRyYXZlbGxlcjwvcD5cblx0XHRcdFx0XHRcdDxwPk9oIExvb2sgbGlrZSBzb21ldGhpbmcgaXMgbm90IHJpZ2h0ICEhITwvcD5cblx0XHRcdFx0XHRcdDxwPkJ1dCBkb24mIzM5O3Qgd29ycnkgb3VyIHNtYXJ0IGFzcyBlbmdpbmVlcnMgYXJlIG9uIGl0LjwvcD5cblx0XHRcdFx0XHQ8L0Vycm9yTXNnPlxuXHRcdFx0XHRcdDxHb1RvSG9tZSBvbkNsaWNrPXt0aGlzLmdvSG9tZX0+R28gdG8gSG9tZTwvR29Ub0hvbWU+XG5cdFx0XHRcdDwvRXJyb3JXcmFwcGVyPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG5cdH1cbn1cblxuRXJyb3JCb3VuZGFyeS5wcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgU2VhcmNoUmVzdWx0cyBmcm9tICcuL1NlYXJjaFJlc3VsdHMnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuLi8uLi91dGlscy9oZWxwZXJzJztcbmltcG9ydCB7IHNlYXJjaCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaG9tZVBhZ2UnO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RleHRJbnB1dCc7XG5pbXBvcnQgeyBNQVhfSVRFTVNfSU5fU0VBUkNIX1JFU1VMVFMgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLnVwZGF0ZUNoYW5nZSA9IHRoaXMudXBkYXRlQ2hhbmdlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZWFyY2hEZWJvdW5jZWQgPSBkZWJvdW5jZSh0aGlzLnVwZGF0ZUNoYW5nZSwgNTAwKTtcblx0XHR0aGlzLnJlc3VsdEl0ZW1TZWxlY3Rpb24gPSB0aGlzLnJlc3VsdEl0ZW1TZWxlY3Rpb24uYmluZCh0aGlzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0c2hvd1Jlc3VsdHM6IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZUNoYW5nZSh2YWx1ZSkge1xuXHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2VhcmNoKHZhbHVlKSk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UodmFsdWUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSk7XG5cdFx0dmFsdWUubGVuZ3RoID09PSAwID8gdGhpcy5zZXRTdGF0ZSh7IHNob3dSZXN1bHRzOiBmYWxzZSB9KSA6IHRoaXMuc2V0U3RhdGUoeyBzaG93UmVzdWx0czogdHJ1ZSB9KTtcblx0XHR0aGlzLnNlYXJjaERlYm91bmNlZCh2YWx1ZSk7XG5cdH1cblxuXHRyZXN1bHRJdGVtU2VsZWN0aW9uKGRhdGEpIHtcblx0XHR0aGlzLnByb3BzLmhhbmRsZVNlYXJjaFJlc3VsdFNlbGVjdGlvbihkYXRhKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGRhdGEuY2l0eSwgc2hvd1Jlc3VsdHM6IGZhbHNlIH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgcmVzdWx0LCBpY29uLCB0eXBlLCBwbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wcyxcblx0XHRcdHJlc3VsdEl0ZW1zID0gcmVzdWx0ID8gcmVzdWx0LnNsaWNlKDAsIE1BWF9JVEVNU19JTl9TRUFSQ0hfUkVTVUxUUykgOiAnJztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxUZXh0SW5wdXRcblx0XHRcdFx0XHR0eXBlPXt0eXBlfVxuXHRcdFx0XHRcdGljb249e2ljb259XG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnNob3dSZXN1bHRzICYmIChcblx0XHRcdFx0XHQ8U2VhcmNoUmVzdWx0cyByZXN1bHQ9e3Jlc3VsdEl0ZW1zfSBoYW5kbGVTZWxlY3Rpb249e3RoaXMucmVzdWx0SXRlbVNlbGVjdGlvbn0gLz5cblx0XHRcdFx0KX1cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxufVxuXG5TZWFyY2guZGVmYXVsdFByb3BzID0ge1xuXHRyZXN1bHQ6IFtdLFxuXHR0eXBlOiAndGV4dCcsXG5cdHBsYWNlaG9sZGVyOiAnJyxcblx0aWNvbjogJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RkYnhhNGFmYS9pbWFnZS91cGxvYWQvdjE1Mjc5NDQ0MTgvYmx1YnVzL2xvY2F0aW9uLnN2Zydcbn07XG5cblNlYXJjaC5wcm9wVHlwZXMgPSB7XG5cdGljb246IFByb3BUeXBlcy5zdHJpbmcsXG5cdHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRyZXN1bHQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuXHRoYW5kbGVTZWFyY2hSZXN1bHRTZWxlY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdWlkIGZyb20gJy4uLy4uL3V0aWxzL3VpZCc7XG5cbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNXcmFwcGVyLCBSZXN1bHRzTGlzdCwgUmVzdWx0c0xpc3RJdGVtIH0gZnJvbSAnLi9zdHlsZSc7XG5cbmNvbnN0IExpc3RJdGVtID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IGhhbmRsZVNlbGVjdGlvbiA9ICgpID0+IHtcblx0XHRwcm9wcy5oYW5kbGVTZWxlY3Rpb24ocHJvcHMuZGF0YSk7XG5cdH07XG5cdHJldHVybiA8UmVzdWx0c0xpc3RJdGVtIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdGlvbn0+e3Byb3BzLmNoaWxkcmVufTwvUmVzdWx0c0xpc3RJdGVtPjtcbn07XG5cbmNvbnN0IFNlYXJjaFJlc3VsdHMgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgaGFuZGxlU2VsZWN0aW9uID0gKGRhdGEpID0+IHtcblx0XHRwcm9wcy5oYW5kbGVTZWxlY3Rpb24oZGF0YSk7XG5cdH07XG5cblx0Y29uc3QgeyByZXN1bHQgfSA9IHByb3BzO1xuXHRyZXR1cm4gKFxuXHRcdDxTZWFyY2hSZXN1bHRzV3JhcHBlcj5cblx0XHRcdDxSZXN1bHRzTGlzdD5cblx0XHRcdFx0e3Jlc3VsdCAmJlxuXHRcdFx0XHRcdHJlc3VsdC5tYXAoaXRlbSA9PiAoXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW0gZGF0YT17aXRlbX0ga2V5PXt1aWQoKX0gaGFuZGxlU2VsZWN0aW9uPXtoYW5kbGVTZWxlY3Rpb259PlxuXHRcdFx0XHRcdFx0XHR7aXRlbS5jaXR5fVxuXHRcdFx0XHRcdFx0PC9MaXN0SXRlbT5cblx0XHRcdFx0XHQpKX1cblx0XHRcdDwvUmVzdWx0c0xpc3Q+XG5cdFx0PC9TZWFyY2hSZXN1bHRzV3JhcHBlcj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHM7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgbG9hZGluZ1NlYXJjaCwgcmVjZWl2ZVNlYXJjaCwgZmFpbGVkU2VhcmNoIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9ob21lUGFnZSc7XG5pbXBvcnQgeyBIT01FX1BHX0FQSV9VUkwgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hTZWFyY2goKSB7XG5cdHJldHVybiAoKGRpc3BhdGNoKSA9PiB7XG5cdFx0ZGlzcGF0Y2gobG9hZGluZ1NlYXJjaCgpKTtcblx0XHRheGlvcy5nZXQoSE9NRV9QR19BUElfVVJMKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2gocmVjZWl2ZVNlYXJjaChyZXNwb25zZS5kYXRhLnJlc3VsdCkpKVxuXHRcdFx0LmNhdGNoKGVyciA9PiBkaXNwYXRjaChmYWlsZWRTZWFyY2goZXJyLm1lc3NhZ2UpKSk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHVtbXkoKSB7fVxuIiwiLy8gQGZsb3dcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgQ2FsZW5kYXIgZnJvbSAncmMtY2FsZW5kYXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaCc7XG5pbXBvcnQgeyBQYWdlV3JhcHBlciB9IGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyBmZXRjaFNlYXJjaCB9IGZyb20gJy4vYWN0aW9uQ3JlYXRvcnMnO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FsZW5kYXInO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RleHRJbnB1dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5cbnR5cGUgUHJvcHMgPSB7XG5cdGRpc3BhdGNoOiAoP0Z1bmN0aW9uKSA9PiB2b2lkLFxuXHRoaXN0b3J5OiBhbnksXG5cdGhvbWVQYWdlOiBPYmplY3Rcbn07XG5cbmV4cG9ydCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdCh0aGlzOiBhbnkpLmhhbmRsZUZyb20gPSB0aGlzLmhhbmRsZUZyb20uYmluZCh0aGlzKTtcblx0XHQodGhpczogYW55KS5oYW5kbGVTZWFyY2hDbGljayA9IHRoaXMuaGFuZGxlU2VhcmNoQ2xpY2suYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goZmV0Y2hTZWFyY2goKSk7XG5cdH1cblxuXHRoYW5kbGVGcm9tKHZhbHVlOiBzdHJpbmcpIHtcblx0XHRjb25zb2xlLmxvZygnRnJvbScsIHZhbHVlKTtcblx0fVxuXG5cdGhhbmRsZVRvKHZhbHVlOiBzdHJpbmcpIHtcblx0XHRjb25zb2xlLmxvZygnVG8nLCB2YWx1ZSk7XG5cdH1cblxuXHRoYW5kbGVTZWFyY2hDbGljaygpIHtcblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xpc3RpbmcnKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uPlxuXHRcdFx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdFx0XHQ8UGFnZVdyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8U2VhcmNoXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2g9e3RoaXMucHJvcHMuZGlzcGF0Y2h9XG5cdFx0XHRcdFx0XHRcdGhhbmRsZVNlYXJjaFJlc3VsdFNlbGVjdGlvbj17dGhpcy5oYW5kbGVGcm9tfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkNob29zZSB5b3VyIGxvY2F0aW9uMTIzNTZcIlxuXHRcdFx0XHRcdFx0XHRyZXN1bHQ9e3RoaXMucHJvcHMuaG9tZVBhZ2Uuc2VhcmNoUmVzdWx0fVxuXHRcdFx0XHRcdFx0XHRpY29uPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGRieGE0YWZhL2ltYWdlL3VwbG9hZC92MTUyNzk0NDQxOC9ibHVidXMvbG9jYXRpb24uc3ZnXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzcwcHgnLCBtYXJnaW5Cb3R0b206ICc3MHB4JyB9fT5cblx0XHRcdFx0XHRcdFx0PFNlYXJjaFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRkaXNwYXRjaD17dGhpcy5wcm9wcy5kaXNwYXRjaH1cblx0XHRcdFx0XHRcdFx0XHRoYW5kbGVTZWFyY2hSZXN1bHRTZWxlY3Rpb249e3RoaXMuaGFuZGxlVG99XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJDaG9vc2UgeW91ciBkZXN0aW5hdGlvbiA5OTgxXCJcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQ9e3RoaXMucHJvcHMuaG9tZVBhZ2Uuc2VhcmNoUmVzdWx0fVxuXHRcdFx0XHRcdFx0XHRcdGljb249XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZGJ4YTRhZmEvaW1hZ2UvdXBsb2FkL3YxNTI3OTQ0NDE2L2JsdWJ1cy9kZXN0aW5hdGlvbi5zdmdcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8Q2FsZW5kYXIgc2hvd1RvZGF5IHNob3dUaW1lUGlja2VyIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGRhdGUgZm9yIGpvdXJuZXlcIiAvPlxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc3MHB4JyB9fT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaENsaWNrfT5cblx0XHRcdFx0XHRcdFx0XHRTZWFyY2ggQnVzZXMgNDBcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L1BhZ2VXcmFwcGVyPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoeyBob21lUGFnZTogc3RhdGUuaG9tZVBhZ2UgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSh3aXRoUm91dGVyKEhvbWVQYWdlKSk7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVG9rZW5zJztcblxuZXhwb3J0IGNvbnN0IFBhZ2VXcmFwcGVyID0gc3R5bGVkLmFydGljbGVgXG5cdG1hcmdpbjogMjRweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hSZXN1bHRzV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuXHR0b3A6IDA7XG5cdHotaW5kZXg6IDk5O1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFJlc3VsdHNMaXN0ID0gc3R5bGVkLnVsYFxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgUmVzdWx0c0xpc3RJdGVtID0gc3R5bGVkLmxpYFxuXHRtaW4td2lkdGg6IDA7XG5cdG1hcmdpbjogMTBweDtcblx0ZGlzcGxheTogZmxleDtcblx0Zm9udC1zaXplOiAyMXB4O1xuXHRmb250LXdlaWdodDogNDAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDEwcHggM3B4IDExcHggMTBweDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG5gO1xuXG5leHBvcnQgY29uc3QgRXJyb3JXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG5cdGRpc3BsYXk6IGZsZXg7XG5cdG1pbi1oZWlnaHQ6IDUwMHB4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBFcnJvckltZyA9IHN0eWxlZC5pbWdgXG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRXJyb3JNc2cgPSBzdHlsZWQuYXJ0aWNsZWBcblx0cGFkZGluZzogMjVweDtcblx0bGluZS1oZWlnaHQ6IDI1cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBHb1RvSG9tZSA9IHN0eWxlZC5idXR0b25gXG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0Ym90dG9tOiAwO1xuXHR3aWR0aDogOTAlO1xuXHRmb250LXNpemU6IDE1cHg7XG5cdHBhZGRpbmc6IDIwcHggMTVweDtcblx0YmFja2dyb3VuZDogJHtjb2xvcnMuYnV0dG9uLnByaW1hcnkuYmFja2dyb3VuZH07XG5cdGNvbG9yOiAke2NvbG9ycy5idXR0b24ucHJpbWFyeS50ZXh0fTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuYDtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkV3JhcHBlciwgQ2FyZEhlYWRlciwgQ29tcGFueU5hbWUsIEN1cnJlbmN5LCBUaW1pbmdzLCBCdXNJY29uLCBUaW1lciwgVGltZXJXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZSc7XG5cbnR5cGUgUHJvcHMgPSB7XG5cdHByaWNlOiBzdHJpbmcsXG5cdGN1cnJlbmN5OiBzdHJpbmcsXG5cdHRyYXZlbFRpbWU6IHN0cmluZyxcblx0Y2xpY2tIYW5kbGVyOiAoKSA9PiB2b2lkLFxuXHRhcnJpdmFsVGltZTogc3RyaW5nLFxuXHRjb21wYW55TmFtZTogc3RyaW5nLFxuXHRkZXBhcnR1cmVUaW1lOiBzdHJpbmdcbn07XG5cbmNvbnN0IExpc3RpbmdDYXJkID0gKHByb3BzOiBQcm9wcykgPT4gKFxuXHQ8Q2FyZFdyYXBwZXIgb25DbGljaz17cHJvcHMuY2xpY2tIYW5kbGVyfT5cblx0XHQ8Q2FyZEhlYWRlcj5cblx0XHRcdDxDb21wYW55TmFtZT57cHJvcHMuY29tcGFueU5hbWV9PC9Db21wYW55TmFtZT5cblx0XHRcdDxDdXJyZW5jeT5cblx0XHRcdFx0e3Byb3BzLnByaWNlfSB7cHJvcHMuY3VycmVuY3l9XG5cdFx0XHQ8L0N1cnJlbmN5PlxuXHRcdDwvQ2FyZEhlYWRlcj5cblx0XHQ8VGltaW5ncz5cblx0XHRcdDxwPntwcm9wcy5hcnJpdmFsVGltZX08L3A+XG5cdFx0XHQ8QnVzSWNvblxuXHRcdFx0XHRhbHQ9XCJ0cmF2ZWxpbmctYnVzXCJcblx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGRieGE0YWZhL2ltYWdlL3VwbG9hZC92MTUyODA0ODYzMC9ibHVidXMvdHJhdmVsaW5nLWJ1cy5zdmdcIlxuXHRcdFx0Lz5cblx0XHRcdDxwPntwcm9wcy5kZXBhcnR1cmVUaW1lfTwvcD5cblx0XHRcdDxUaW1lcldyYXBwZXI+XG5cdFx0XHRcdDxUaW1lclxuXHRcdFx0XHRcdGFsdD1cInRpbWVyXCJcblx0XHRcdFx0XHRzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZGJ4YTRhZmEvaW1hZ2UvdXBsb2FkL3YxNTI4MDQ4ODg0L2JsdWJ1cy90aW1lci5zdmdcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8cD57cHJvcHMudHJhdmVsVGltZX0gaG91cnM8L3A+XG5cdFx0XHQ8L1RpbWVyV3JhcHBlcj5cblx0XHQ8L1RpbWluZ3M+XG5cdDwvQ2FyZFdyYXBwZXI+XG4pO1xuXG5MaXN0aW5nQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG5cdHByaWNlOiAnJyxcblx0Y3VycmVuY3k6ICcnLFxuXHR0cmF2ZWxUaW1lOiAnJyxcblx0YXJyaXZhbFRpbWU6ICcnLFxuXHRjb21wYW55TmFtZTogJycsXG5cdGRlcGFydHVyZVRpbWU6ICcnLFxuXHRjbGlja0hhbmRsZXI6ICgpID0+IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5nQ2FyZDtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBMSVNUSU5HX0FQSV9VUkwgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgcmVxdWVzdExpc3RpbmcsIHJlY2VpdmVMaXN0aW5nLCBpbnZhbGlkUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2xpc3RpbmcnO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hMaXN0aW5nRGF0YSA9ICgpID0+ICgoZGlzcGF0Y2gpID0+IHtcblx0ZGlzcGF0Y2gocmVxdWVzdExpc3RpbmcoKSk7XG5cdGF4aW9zLmdldChMSVNUSU5HX0FQSV9VUkwpXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2gocmVjZWl2ZUxpc3RpbmcocmVzcG9uc2UuZGF0YS5yZXN1bHQpKSlcblx0XHQuY2F0Y2goZXJyID0+IGRpc3BhdGNoKGludmFsaWRSZXNwb25zZShlcnIubWVzc2FnZSkpKTtcbn0pO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaExpc3RpbmdEYXRhSWZOZWVkZWQoKSB7XG5cdHJldHVybiAoKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuXHRcdGNvbnN0IHsgbGlzdGluZyB9ID0gZ2V0U3RhdGUoKTtcblx0XHRpZiAobGlzdGluZy5pdGVtcyAmJiBsaXN0aW5nLml0ZW1zLnNlcnZpY2VzICYmIGxpc3RpbmcuaXRlbXMuc2VydmljZXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGRpc3BhdGNoKGZldGNoTGlzdGluZ0RhdGEoKSk7XG5cdH0pO1xufVxuIiwiLy8gQGZsb3dcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgdWlkIGZyb20gJy4uLy4uL3V0aWxzL3VpZCc7XG5pbXBvcnQgTGlzdGluZ0NhcmQgZnJvbSAnLi9MaXN0aW5nQ2FyZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgeyBmZXRjaExpc3RpbmdEYXRhSWZOZWVkZWQgfSBmcm9tICcuL2FjdGlvbkNyZWF0b3JzJztcbmltcG9ydCB7IExpc3RWaWV3V3JhcHBlciwgSm91cm5leURldGFpbFdyYXBwZXIsIEZyb21Ub0Fycm93IH0gZnJvbSAnLi9zdHlsZSc7XG5cbnR5cGUgc2VydmljZXNWYWxpZGF0aW9uID0ge1xuXHRhcnI6IHN0cmluZyxcblx0ZGVwOiBzdHJpbmcsXG5cdHJhdGluZzogc3RyaW5nLFxuXHRidXNUeXBlOiBzdHJpbmcsXG5cdGN1cnJlbmN5OiBzdHJpbmcsXG5cdHRyYXZlbFRpbWU6IHN0cmluZyxcblx0dG90YWxTZWF0czogc3RyaW5nLFxuXHRib29rZWRTZWF0czogc3RyaW5nLFxuXHRjb21wYW55TmFtZTogc3RyaW5nLFxuXHR0aWNrZXRQcmljZTogc3RyaW5nXG59O1xuXG50eXBlIFByb3BzID0ge1xuXHRkaXNwYXRjaDogKD9GdW5jdGlvbikgPT4gdm9pZCxcblx0aGlzdG9yeTogYW55LFxuXHRsaXN0aW5nOiB7XG5cdFx0aXRlbXM6IHtcblx0XHRcdGJ1c1R5cGVzOiBBcnJheTxzdHJpbmc+LFxuXHRcdFx0Y29tcGFueU5hbWU6IEFycmF5PHN0cmluZz4sXG5cdFx0XHRqb3VybmV5RGV0YWlsczoge1xuXHRcdFx0XHR0bzogc3RyaW5nLFxuXHRcdFx0XHRmcm9tOiBzdHJpbmcsXG5cdFx0XHRcdGRlcERhdGU6IHN0cmluZyxcblx0XHRcdFx0YXJyRGF0ZTogc3RyaW5nXG5cdFx0XHR9LFxuXHRcdFx0c2VydmljZXM6IEFycmF5PHNlcnZpY2VzVmFsaWRhdGlvbj5cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBjbGFzcyBMaXN0aW5nIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0KHRoaXM6IGFueSkub25DYXJkQ2xpY2sgPSB0aGlzLm9uQ2FyZENsaWNrLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKGZldGNoTGlzdGluZ0RhdGFJZk5lZWRlZCgpKTtcblx0fVxuXG5cdG9uQ2FyZENsaWNrKCkge1xuXHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhdGxheW91dCcpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgc2VydmljZXMsIGpvdXJuZXlEZXRhaWxzIH0gPSB0aGlzLnByb3BzLmxpc3RpbmcuaXRlbXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uPlxuXHRcdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHRcdDxzZWN0aW9uPlxuXHRcdFx0XHRcdHtqb3VybmV5RGV0YWlscyAmJiAoXG5cdFx0XHRcdFx0XHQ8Sm91cm5leURldGFpbFdyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdDxoMj57am91cm5leURldGFpbHMuZnJvbX08L2gyPlxuXHRcdFx0XHRcdFx0XHQ8RnJvbVRvQXJyb3dcblx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJhcnJvd1wiXG5cdFx0XHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGRieGE0YWZhL2ltYWdlL3VwbG9hZC92MTUyODA0OTU3MC9ibHVidXMvcmlnaHQtYXJyb3cuc3ZnXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PGgyPntqb3VybmV5RGV0YWlscy50b308L2gyPlxuXHRcdFx0XHRcdFx0PC9Kb3VybmV5RGV0YWlsV3JhcHBlcj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxMaXN0Vmlld1dyYXBwZXI+XG5cdFx0XHRcdFx0e3NlcnZpY2VzICYmXG5cdFx0XHRcdFx0XHRzZXJ2aWNlcy5tYXAoaXRlbSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHsgY29tcGFueU5hbWUsIGJ1c1R5cGUsIGRlcCwgYXJyLCB0cmF2ZWxUaW1lLCB0aWNrZXRQcmljZSwgY3VycmVuY3kgfSA9IGl0ZW07XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PExpc3RpbmdDYXJkXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3VpZCgpfVxuXHRcdFx0XHRcdFx0XHRcdFx0YnVzVHlwZT17YnVzVHlwZX1cblx0XHRcdFx0XHRcdFx0XHRcdGFycml2YWxUaW1lPXthcnJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRkZXBhcnR1cmVUaW1lPXtkZXB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmljZT17dGlja2V0UHJpY2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW5jeT17Y3VycmVuY3l9XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmF2ZWxUaW1lPXt0cmF2ZWxUaW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGFueU5hbWU9e2NvbXBhbnlOYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xpY2tIYW5kbGVyPXt0aGlzLm9uQ2FyZENsaWNrfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9MaXN0Vmlld1dyYXBwZXI+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoeyBsaXN0aW5nOiBzdGF0ZS5saXN0aW5nIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykod2l0aFJvdXRlcihMaXN0aW5nKSk7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IExpc3RWaWV3V3JhcHBlciA9IHN0eWxlZC5hcnRpY2xlYFxuXHRtYXJnaW46IDIwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcblx0bWFyZ2luOiAyMHB4IDA7XG5cdHBhZGRpbmc6IDI0cHggMDtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWRjZGM7XG5gO1xuXG5leHBvcnQgY29uc3QgSm91cm5leURldGFpbFdyYXBwZXIgPSBzdHlsZWQuaGVhZGVyYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0bWFyZ2luOiAyMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEZyb21Ub0Fycm93ID0gc3R5bGVkLmltZ2Bcblx0aGVpZ2h0OiAyNXB4O1xuXHR3aWR0aDogMzVweDtcblx0cGFkZGluZzogMCAxNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IENhcmRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29tcGFueU5hbWUgPSBzdHlsZWQuaDJgXG5cdGZvbnQtc2l6ZTogMjFweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDdXJyZW5jeSA9IHN0eWxlZC5wYFxuXHRmb250LXNpemU6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5gO1xuXG5leHBvcnQgY29uc3QgVGltaW5ncyA9IHN0eWxlZC5hcnRpY2xlYFxuXHRwYWRkaW5nLXRvcDogMjBweDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpbWVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgQnVzSWNvbiA9IHN0eWxlZC5pbWdgXG5cdGhlaWdodDogMzFweDtcblx0d2lkdGg6IDMxcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgVGltZXIgPSBzdHlsZWQuaW1nYFxuXHRoZWlnaHQ6IDI0cHg7XG5cdHdpZHRoOiAyNHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuYDtcblxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IHsgU3VtbWFyeUluZm8sIFN1bW1hcnlJbmZvTGlzdCwgU3VtbWFyeUluZm9JdGVtIH0gZnJvbSAnLi9zdHlsZSc7XG5cbmNsYXNzIFN1bW1hcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucGF5Tm93ID0gdGhpcy5wYXlOb3cuYmluZCh0aGlzKTtcblx0fVxuXG5cdHBheU5vdygpIHtcblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NvbmZpcm1hdGlvbicpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbj5cblx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0PFN1bW1hcnlJbmZvPlxuXHRcdFx0XHRcdFx0PHA+S2lnYWxpPC9wPlxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRhbHQ9XCJ0b1wiXG5cdFx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RkYnhhNGFmYS9pbWFnZS91cGxvYWQvdjE1MjgwNDk1NzAvYmx1YnVzL3JpZ2h0LWFycm93LnN2Z1wiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PHA+S2lidXllPC9wPlxuXHRcdFx0XHRcdDwvU3VtbWFyeUluZm8+XG5cdFx0XHRcdFx0PFN1bW1hcnlJbmZvTGlzdD5cblx0XHRcdFx0XHRcdDxTdW1tYXJ5SW5mb0l0ZW0+XG5cdFx0XHRcdFx0XHRcdDxwPkJ1cyBGYXJlPC9wPlxuXHRcdFx0XHRcdFx0XHQ8cD40MDAgJDwvcD5cblx0XHRcdFx0XHRcdDwvU3VtbWFyeUluZm9JdGVtPlxuXHRcdFx0XHRcdFx0PFN1bW1hcnlJbmZvSXRlbT5cblx0XHRcdFx0XHRcdFx0PHA+Qm9va2luZyBGYXJlPC9wPlxuXHRcdFx0XHRcdFx0XHQ8cD40MCAkPC9wPlxuXHRcdFx0XHRcdFx0PC9TdW1tYXJ5SW5mb0l0ZW0+XG5cdFx0XHRcdFx0XHQ8U3VtbWFyeUluZm9JdGVtPlxuXHRcdFx0XHRcdFx0XHQ8cD5Ub3RhbDwvcD5cblx0XHRcdFx0XHRcdFx0PHA+NDQwICQ8L3A+XG5cdFx0XHRcdFx0XHQ8L1N1bW1hcnlJbmZvSXRlbT5cblx0XHRcdFx0XHQ8L1N1bW1hcnlJbmZvTGlzdD5cblx0XHRcdFx0XHQ8QnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCIgaGFuZGxlQ2xpY2s9e3RoaXMucGF5Tm93fT5cblx0XHRcdFx0XHRcdFBheSBOb3dcblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH1cbn1cblxuU3VtbWFyeS5wcm9wVHlwZXMgPSB7XG5cdGhpc3Rvcnk6IFByb3BUeXBlcy5zaGFwZSh7IHB1c2g6IFByb3BUeXBlcy5mdW5jIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU3VtbWFyeSk7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RleHRJbnB1dCc7XG5pbXBvcnQgeyBCdXR0b25XcmFwcGVyLCBDb250YWN0SW5mbywgUGFzc2VuZ2VySW5mbywgSW5mb0hlYWRlciB9IGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IHsgZW1haWxQYXR0ZXJuLCBtb2JpbGVQYXR0ZXJuLCBudW1iZXJQYXR0ZXJuIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcblxuY2xhc3MgVXNlckRldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuaGFuZGxlQWdlID0gdGhpcy5oYW5kbGVBZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZU5hbWUgPSB0aGlzLmhhbmRsZU5hbWUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUVtYWlsID0gdGhpcy5oYW5kbGVFbWFpbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGFuZGxlTW9iaWxlID0gdGhpcy5oYW5kbGVNb2JpbGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNvbmZpcm1EZXRhaWxzID0gdGhpcy5jb25maXJtRGV0YWlscy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRhZ2U6ICcnLFxuXHRcdFx0bmFtZTogJycsXG5cdFx0XHRlbWFpbDogJycsXG5cdFx0XHRtb2JpbGU6ICcnLFxuXHRcdFx0c2hvd0FnZUVycm9yOiBmYWxzZSxcblx0XHRcdHNob3dOYW1lRXJyb3I6IGZhbHNlLFxuXHRcdFx0c2hvd0VtYWlsRXJyb3I6IGZhbHNlLFxuXHRcdFx0c2hvd01vYmlsZUVycm9yOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHR2YWxpZGF0ZUlucHV0QWdhaW5zdFBhdHRlcm4ocGF0dGVybiwgdmFsdWUpIHtcblx0XHRjb25zdCByZWdFeFBhdHRlcm4gPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuXHRcdHJldHVybiByZWdFeFBhdHRlcm4udGVzdCh2YWx1ZSk7XG5cdH1cblxuXHRoYW5kbGVFbWFpbCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogdmFsdWUgfSk7XG5cdFx0Y29uc3QgaXNWYWxpZFBhdHRlcm4gPSB0aGlzLnZhbGlkYXRlSW5wdXRBZ2FpbnN0UGF0dGVybihlbWFpbFBhdHRlcm4sIHZhbHVlKTtcblx0XHQhaXNWYWxpZFBhdHRlcm4gJiYgdGhpcy5zZXRTdGF0ZSh7IHNob3dFbWFpbEVycm9yOiB0cnVlIH0pO1xuXHRcdGlzVmFsaWRQYXR0ZXJuICYmIHRoaXMuc2V0U3RhdGUoeyBzaG93RW1haWxFcnJvcjogZmFsc2UgfSk7XG5cdH1cblxuXHRoYW5kbGVNb2JpbGUodmFsdWUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgbW9iaWxlOiB2YWx1ZSB9KTtcblx0XHRjb25zdCBpc1ZhbGlkUGF0dGVybiA9IHRoaXMudmFsaWRhdGVJbnB1dEFnYWluc3RQYXR0ZXJuKG1vYmlsZVBhdHRlcm4sIHZhbHVlKTtcblx0XHQhaXNWYWxpZFBhdHRlcm4gJiYgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb2JpbGVFcnJvcjogdHJ1ZSB9KTtcblx0XHRpc1ZhbGlkUGF0dGVybiAmJiB0aGlzLnNldFN0YXRlKHsgc2hvd01vYmlsZUVycm9yOiBmYWxzZSB9KTtcblx0fVxuXG5cdGhhbmRsZU5hbWUodmFsdWUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgbmFtZTogdmFsdWUgfSk7XG5cdFx0aWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TmFtZUVycm9yOiBmYWxzZSB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dOYW1lRXJyb3I6IHRydWUgfSk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlQWdlKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGFnZTogdmFsdWUgfSk7XG5cdFx0Y29uc3QgaXNWYWxpZFBhdHRlcm4gPSB0aGlzLnZhbGlkYXRlSW5wdXRBZ2FpbnN0UGF0dGVybihudW1iZXJQYXR0ZXJuLCB2YWx1ZSk7XG5cdFx0IWlzVmFsaWRQYXR0ZXJuICYmIHRoaXMuc2V0U3RhdGUoeyBzaG93QWdlRXJyb3I6IHRydWUgfSk7XG5cdFx0aXNWYWxpZFBhdHRlcm4gJiYgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZ2VFcnJvcjogZmFsc2UgfSk7XG5cdH1cblxuXHRjb25maXJtRGV0YWlscygpIHtcblx0XHRpZiAoXG5cdFx0XHQhdGhpcy5zdGF0ZS5zaG93TW9iaWxlRXJyb3IgJiZcblx0XHRcdCF0aGlzLnN0YXRlLnNob3dFbWFpbEVycm9yICYmXG5cdFx0XHQhdGhpcy5zdGF0ZS5zaG93TmFtZUVycm9yICYmXG5cdFx0XHQhdGhpcy5zdGF0ZS5zaG93QWdlRXJyb3Jcblx0XHQpIHtcblx0XHRcdC8vIFVwZGF0ZSB1c2VyIGRldGFpbHNcblx0XHRcdHRoaXMucHJvcHMuaGFuZGxlT3JkZXJTdW1tYXJ5KHRydWUpO1xuXHRcdH1cblx0XHR0aGlzLmhhbmRsZUVtYWlsKHRoaXMuc3RhdGUuZW1haWwpO1xuXHRcdHRoaXMuaGFuZGxlTW9iaWxlKHRoaXMuc3RhdGUubW9iaWxlKTtcblx0XHR0aGlzLmhhbmRsZUFnZSh0aGlzLnN0YXRlLmFnZSk7XG5cdFx0dGhpcy5oYW5kbGVOYW1lKHRoaXMuc3RhdGUubmFtZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEluZm9IZWFkZXI+XG5cdFx0XHRcdFx0PGgyPkNvbnRhY3QgRGV0YWlsczwvaDI+XG5cdFx0XHRcdDwvSW5mb0hlYWRlcj5cblx0XHRcdFx0PENvbnRhY3RJbmZvPlxuXHRcdFx0XHRcdDxUZXh0SW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXG5cdFx0XHRcdFx0XHRoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlRW1haWx9XG5cdFx0XHRcdFx0XHRlcnJvcj1cInBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsXCJcblx0XHRcdFx0XHRcdHNob3dFcnJvcj17dGhpcy5zdGF0ZS5zaG93RW1haWxFcnJvcn1cblx0XHRcdFx0XHRcdGljb249XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZGJ4YTRhZmEvaW1hZ2UvdXBsb2FkL3YxNTI4NjExMjM1L2JsdWJ1cy9lbWFpbC5zdmdcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRJbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInRlbFwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5tb2JpbGV9XG5cdFx0XHRcdFx0XHRoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlTW9iaWxlfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1vYmlsZVwiXG5cdFx0XHRcdFx0XHRlcnJvcj1cInBsZWFzZSBlbnRlciBhIHZhbGlkIG1vYmlsZVwiXG5cdFx0XHRcdFx0XHRzaG93RXJyb3I9e3RoaXMuc3RhdGUuc2hvd01vYmlsZUVycm9yfVxuXHRcdFx0XHRcdFx0aWNvbj1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RkYnhhNGFmYS9pbWFnZS91cGxvYWQvdjE1Mjg2MTEyMzQvYmx1YnVzL21vYmlsZS5zdmdcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQ29udGFjdEluZm8+XG5cdFx0XHRcdDxJbmZvSGVhZGVyPlxuXHRcdFx0XHRcdDxoMj5QYXNzZW5nZXIgRGV0YWlsczwvaDI+XG5cdFx0XHRcdDwvSW5mb0hlYWRlcj5cblx0XHRcdFx0PFBhc3NlbmdlckluZm8+XG5cdFx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0XHQ8VGV4dElucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIlxuXHRcdFx0XHRcdFx0XHRoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZX1cblx0XHRcdFx0XHRcdFx0ZXJyb3I9XCJwbGVhc2UgZW50ZXIgeW91ciBuYW1lXCJcblx0XHRcdFx0XHRcdFx0c2hvd0Vycm9yPXt0aGlzLnN0YXRlLnNob3dOYW1lRXJyb3J9XG5cdFx0XHRcdFx0XHRcdGljb249XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZGJ4YTRhZmEvaW1hZ2UvdXBsb2FkL3YxNTI4NjIzOTk5L2JsdWJ1cy91c2VyLnN2Z1wiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFRleHRJbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuYWdlfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgYWdlXCJcblx0XHRcdFx0XHRcdFx0aGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUFnZX1cblx0XHRcdFx0XHRcdFx0ZXJyb3I9XCJwbGVhc2UgZW50ZXIgYSB2YWxpZCBhZ2VcIlxuXHRcdFx0XHRcdFx0XHRzaG93RXJyb3I9e3RoaXMuc3RhdGUuc2hvd0FnZUVycm9yfVxuXHRcdFx0XHRcdFx0XHRpY29uPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGRieGE0YWZhL2ltYWdlL3VwbG9hZC92MTUyODYyNDI2NC9ibHVidXMvaW5mby5zdmdcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdDwvUGFzc2VuZ2VySW5mbz5cblx0XHRcdFx0PEJ1dHRvbldyYXBwZXI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiIGhhbmRsZUNsaWNrPXt0aGlzLmNvbmZpcm1EZXRhaWxzfT5cblx0XHRcdFx0XHRcdENvbnRpbnVlIEJvb2tpbmdcblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9CdXR0b25XcmFwcGVyPlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9XG59XG5cblVzZXJEZXRhaWxzLnByb3BUeXBlcyA9IHtcblx0aGFuZGxlT3JkZXJTdW1tYXJ5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyRGV0YWlscztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTdW1tYXJ5IGZyb20gJy4vU3VtbWFyeSc7XG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgVXNlckRldGFpbHMgZnJvbSAnLi9Vc2VyRGV0YWlscyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5cbmNsYXNzIE9yZGVyU3VtbWFyeSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dPcmRlclN1bW1hcnk6IGZhbHNlXG5cdFx0fTtcblx0XHR0aGlzLmhhbmRsZU9yZGVyU3VtbWFyeSA9IHRoaXMuaGFuZGxlT3JkZXJTdW1tYXJ5LmJpbmQodGhpcyk7XG5cdH1cblxuXHRoYW5kbGVPcmRlclN1bW1hcnkoc2hvdWxkU2hvdykge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93T3JkZXJTdW1tYXJ5OiBzaG91bGRTaG93IH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgcGFkZGluZ0JvdHRvbTogJzMwcHgnIH19PlxuXHRcdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHRcdDxXcmFwcGVyPlxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLnNob3dPcmRlclN1bW1hcnkgPyAoXG5cdFx0XHRcdFx0XHQ8U3VtbWFyeSAvPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8VXNlckRldGFpbHMgaGFuZGxlT3JkZXJTdW1tYXJ5PXt0aGlzLmhhbmRsZU9yZGVyU3VtbWFyeX0gLz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L1dyYXBwZXI+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlclN1bW1hcnk7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG5cdGJvdHRvbTogMDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2YyZjJmMjtcblxuXHRidXR0b24ge1xuXHRcdHdpZHRoOiA5NSU7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmFydGljbGVgXG5cdG1hcmdpbjogMjBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWN0SW5mbyA9IHN0eWxlZC5zZWN0aW9uYFxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRwYWRkaW5nOiAyMHB4IDEwcHg7XG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XG5gO1xuXG5leHBvcnQgY29uc3QgUGFzc2VuZ2VySW5mbyA9IHN0eWxlZC5zZWN0aW9uYFxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRwYWRkaW5nOiAyMHB4IDEwcHg7XG5cdG1hcmdpbi1ib3R0b206IDEwMHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xuYDtcblxuZXhwb3J0IGNvbnN0IEluZm9IZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuXHRoMiB7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0cGFkZGluZy1ib3R0b206IDVweDtcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IFN1bW1hcnlJbmZvID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nLWJvdHRvbTogMTVweDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMjBweDtcblx0XHRoZWlnaHQ6IDIwcHg7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdW1tYXJ5SW5mb0xpc3QgPSBzdHlsZWQudWxgXG5cdG1hcmdpbi1ib3R0b206IDI1cHg7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdW1tYXJ5SW5mb0l0ZW0gPSBzdHlsZWQubGlgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGxpbmUtaGVpZ2h0OiA0MHB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTGVnZW5kV3JhcHBlciwgTGVnZW5kQ29sb3IsIFRleHQgfSBmcm9tICcuL3N0eWxlJztcblxuY29uc3QgTGVnZW5kID0gcHJvcHMgPT4gKFxuXHQ8TGVnZW5kV3JhcHBlcj5cblx0XHQ8TGVnZW5kQ29sb3IgdmFyaWFudD17cHJvcHMudmFyaWFudH0gLz5cblx0XHQ8VGV4dD57cHJvcHMuY2hpbGRyZW59PC9UZXh0PlxuXHQ8L0xlZ2VuZFdyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMZWdlbmQ7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBmZXRjaGluZ0RhdGEsIGRhdGFGZXRjaFN1Y2Nlc3MsIGRhdGFGZXRjaEZhaWxlZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvc2VhdExheW91dCc7XG5pbXBvcnQgeyBTRUFUTEFZT1VUX0FQSV9VUkwgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuXG5jb25zdCBmZXRjaERhdGEgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcblx0ZGlzcGF0Y2goZmV0Y2hpbmdEYXRhKCkpO1xuXHRheGlvc1xuXHRcdC5nZXQoU0VBVExBWU9VVF9BUElfVVJMKVxuXHRcdC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKGRhdGFGZXRjaFN1Y2Nlc3MocmVzcG9uc2UuZGF0YS5yZXN1bHQpKSlcblx0XHQuY2F0Y2goZXJyID0+IGRpc3BhdGNoKGRhdGFGZXRjaEZhaWxlZChlcnIpKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaERhdGE7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBMZWdlbmQgZnJvbSAnLi9MZWdlbmQnO1xuaW1wb3J0IHsgTGVnZW5kV3JhcHBlciB9IGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IGZldGNoRGF0YSBmcm9tICcuL2FjdGlvbkNyZWF0b3JzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJztcblxuY2xhc3MgU2VhdExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5jYW52YXNSZWYgPSBudWxsO1xuXHRcdHRoaXMuc2V0Q2FudmFzUmVmID0gZWxlbWVudCA9PiB7XG5cdFx0XHR0aGlzLmNhbnZhc1JlZiA9IGVsZW1lbnQ7XG5cdFx0fTtcblxuXHRcdHRoaXMudXBkYXRlQ2FudmFzID0gdGhpcy51cGRhdGVDYW52YXMuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUNhbnZhc0NsaWNrID0gdGhpcy5oYW5kbGVDYW52YXNDbGljay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRib29rZWRTZWF0SW1nOiAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGRieGE0YWZhL2ltYWdlL3VwbG9hZC92MTUyODU0MzY1NC9ibHVidXMvYXJtY2hhaXJfMy5zdmcnLFxuXHRcdFx0YXZhaWxhYmxlU2VhdEltZzogJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RkYnhhNGFmYS9pbWFnZS91cGxvYWQvdjE1Mjg1MjgzMzcvYmx1YnVzL2FybWNoYWlyLnN2Zydcblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goZmV0Y2hEYXRhKCkpO1xuXHRcdHRoaXMudXBkYXRlQ2FudmFzKCk7XG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0dGhpcy51cGRhdGVDYW52YXMoKTtcblx0fVxuXG5cdGNyZWF0ZUltYWdlKGN0eCwgb2Zmc2V0WCwgb2Zmc2V0WSwgc2hvd0Jsb2NrZWRJbWcpIHtcblx0XHRjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRpbWcub25sb2FkID0gZnVuY3Rpb24gbG9hZEltYWdlKCkge1xuXHRcdFx0Y3R4LmRyYXdJbWFnZShpbWcsIG9mZnNldFggKyAwLCBvZmZzZXRZICsgMCwgNDAsIDQwKTtcblx0XHR9O1xuXHRcdGltZy5zcmMgPSBzaG93QmxvY2tlZEltZyA/IHRoaXMuc3RhdGUuYm9va2VkU2VhdEltZyA6IHRoaXMuc3RhdGUuYXZhaWxhYmxlU2VhdEltZztcblx0fVxuXG5cdHVwZGF0ZUNhbnZhcygpIHtcblx0XHRjb25zdCB7IGl0ZW1zIH0gPSB0aGlzLnByb3BzLnNlYXRMYXlvdXQ7XG5cdFx0Y29uc3QgY3R4ID0gdGhpcy5jYW52YXNSZWYuZ2V0Q29udGV4dCgnMmQnKTtcblx0XHRsZXQgb2Zmc2V0WCA9IDMwLFxuXHRcdFx0b2Zmc2V0WSA9IDIwO1xuXHRcdGl0ZW1zICYmXG5cdFx0XHRpdGVtcy5tYXAoaXRlbSA9PiB7XG5cdFx0XHRcdG9mZnNldFggPSAwO1xuXHRcdFx0XHRpdGVtLm1hcChyb3cgPT4ge1xuXHRcdFx0XHRcdHJvdy5pc0F2YWlsYWJsZSAmJiByb3cuaXNHYW5nV2F5ID09PSBmYWxzZSAmJiB0aGlzLmNyZWF0ZUltYWdlKGN0eCwgb2Zmc2V0WCwgb2Zmc2V0WSwgZmFsc2UpO1xuXHRcdFx0XHRcdHJvdy5pc0F2YWlsYWJsZSA9PT0gZmFsc2UgJiZcblx0XHRcdFx0XHRcdHJvdy5pc0dhbmdXYXkgPT09IGZhbHNlICYmXG5cdFx0XHRcdFx0XHR0aGlzLmNyZWF0ZUltYWdlKGN0eCwgb2Zmc2V0WCwgb2Zmc2V0WSwgdHJ1ZSk7XG5cdFx0XHRcdFx0b2Zmc2V0WCArPSA1MDtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRvZmZzZXRZICs9IDgwO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUNhbnZhc0NsaWNrKGV2ZW50KSB7XG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zdW1tYXJ5Jyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uPlxuXHRcdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHRcdDxhcnRpY2xlPlxuXHRcdFx0XHRcdDxjYW52YXNcblx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyMHB4JyB9fVxuXHRcdFx0XHRcdFx0cmVmPXt0aGlzLnNldENhbnZhc1JlZn1cblx0XHRcdFx0XHRcdHdpZHRoPXs0MDB9XG5cdFx0XHRcdFx0XHRoZWlnaHQ9ezQwMH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2FudmFzQ2xpY2t9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8TGVnZW5kV3JhcHBlcj5cblx0XHRcdFx0XHRcdDxMZWdlbmQgdmFyaWFudD1cImJvb2tlZFwiPkJvb2tlZCBTZWF0PC9MZWdlbmQ+XG5cdFx0XHRcdFx0XHQ8TGVnZW5kIHZhcmlhbnQ9XCJhdmFpbGFibGVcIj5BdmFpbGFibGUgU2VhdDwvTGVnZW5kPlxuXHRcdFx0XHRcdDwvTGVnZW5kV3JhcHBlcj5cblx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHsgc2VhdExheW91dDogc3RhdGUuc2VhdExheW91dCB9KTtcblxuU2VhdExheW91dC5kZWZhdWx0UHJvcHMgPSB7XG5cdHNlYXRMYXlvdXQ6IHtcblx0XHRpdGVtczogW11cblx0fVxufTtcblxuU2VhdExheW91dC5wcm9wVHlwZXMgPSB7XG5cdHNlYXRMYXlvdXQ6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0aXRlbXM6IFByb3BUeXBlcy5hcnJheVxuXHR9KSxcblx0ZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSh3aXRoUm91dGVyKFNlYXRMYXlvdXQpKTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ub2tlbnMnO1xuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUodmFyaWFudCkge1xuXHRzd2l0Y2ggKHZhcmlhbnQpIHtcblx0Y2FzZSAnYm9va2VkJzpcblx0XHRyZXR1cm4gY29sb3JzLnNlYXRzLmJvb2tlZC5iYWNrZ3JvdW5kO1xuXG5cdGNhc2UgJ2F2YWlsYWJsZSc6XG5cdFx0cmV0dXJuIGNvbG9ycy5zZWF0cy5hdmFpbGFibGUuYmFja2dyb3VuZDtcblxuXHRkZWZhdWx0OlxuXHRcdHJldHVybiBjb2xvcnMuZGVmYXVsdENvbG9yO1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBMZWdlbmRDb2xvciA9IHN0eWxlZC5zcGFuYFxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGhlaWdodDogMjBweDtcblx0d2lkdGg6IDIwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcblx0YmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBnZXRBdHRyaWJ1dGUocHJvcHMudmFyaWFudCl9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQucGBcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5gO1xuXG5leHBvcnQgY29uc3QgTGVnZW5kV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRtYXJnaW4tbGVmdDogMjBweDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuYDtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0cmV0dXJuIG1vZHVsZTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHRyZXR1cm4gbW9kdWxlO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==