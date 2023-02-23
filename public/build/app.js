(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$":
/*!******************************************************!*\
  !*** ./assets/react/controllers/ sync \.(j%7Ct)sx?$ ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Apprentissage.jsx": "./assets/react/controllers/Apprentissage.jsx",
	"./Banner.jsx": "./assets/react/controllers/Banner.jsx",
	"./Evaluation.jsx": "./assets/react/controllers/Evaluation.jsx",
	"./Hello.jsx": "./assets/react/controllers/Hello.jsx",
	"./LeaderBoard.jsx": "./assets/react/controllers/LeaderBoard.jsx",
	"./ListLessons.jsx": "./assets/react/controllers/ListLessons.jsx",
	"./LoginForm.jsx": "./assets/react/controllers/LoginForm.jsx",
	"./Reading.jsx": "./assets/react/controllers/Reading.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-react--react': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-react/dist/render_controller.js */ "./vendor/symfony/ux-react/assets/dist/render_controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application



// Registers React controller components to allow loading them from Twig
//
// React controller components are components that are meant to be rendered
// from Twig. These component then rely on other components that won't be called
// directly from Twig.
//
// By putting only controller components in `react/controllers`, you ensure that
// internal components won't be automatically included in your JS built file if
// they are not necessary.
(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_2__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers sync recursive \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/react/controllers/Apprentissage.jsx":
/*!****************************************************!*\
  !*** ./assets/react/controllers/Apprentissage.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Evaluation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Evaluation */ "./assets/react/controllers/Evaluation.jsx");
/* harmony import */ var _Reading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reading */ "./assets/react/controllers/Reading.jsx");
/* harmony import */ var _styles_apprentissage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/apprentissage.css */ "./assets/react/controllers/styles/apprentissage.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Apprentissage = function Apprentissage(_ref) {
  var current = _ref.current;
  var lesson = JSON.parse(current);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    tab = _React$useState2[0],
    setTab = _React$useState2[1];
  var changeTab = function changeTab(index) {
    setTab(index);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tab-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tabs-option ".concat(tab === 0 ? 'selected' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: function onClick() {
      return changeTab(0);
    }
  }, "Prerequis")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tabs-option ".concat(tab === 1 ? 'selected' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: function onClick() {
      return changeTab(1);
    }
  }, "Lesson")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tabs-option ".concat(tab === 2 ? 'selected' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: function onClick() {
      return changeTab(2);
    }
  }, "Evaluation"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tab-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tab-content",
    style: {
      display: tab === 0 ? "block" : "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, lesson.prerequis.map(function (prerequi, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: "prerequi-".concat(index)
    }, prerequi.libelle);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tab-content",
    style: {
      display: tab === 1 ? "block" : "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Reading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: lesson.title,
    contenu: lesson.contenu
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tab-content",
    style: {
      display: tab === 2 ? "block" : "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Evaluation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    questions: lesson.questions
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Apprentissage);

/***/ }),

/***/ "./assets/react/controllers/Banner.jsx":
/*!*********************************************!*\
  !*** ./assets/react/controllers/Banner.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_banner_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/banner.css */ "./assets/react/controllers/styles/banner.css");
/* harmony import */ var _Hello__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hello */ "./assets/react/controllers/Hello.jsx");



var Banner = function Banner(_ref) {
  var email = _ref.email,
    username = _ref.username,
    age = _ref.age,
    level = _ref.level,
    levels = _ref.levels,
    progression = _ref.progression;
  var niveaux = JSON.parse(levels);
  var progress = JSON.parse(progression);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Hello__WEBPACK_IMPORTED_MODULE_2__["default"], null), " WEB-SEC-CRIME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo-img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logo-v.jpeg",
    alt: "Logo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user-details"
  }, "Welcome, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user-logout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/logout",
    className: "btn-link"
  }, "Log out")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "progress-bar"
  }, niveaux.map(function (niveau, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      "data-label": niveau.libelle,
      className: "progress-step ".concat(niveau.id <= progress.niveau.id ? 'passed' : '', " ").concat(niveau.id === progress.niveau.id ? 'current' : '')
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

/***/ }),

/***/ "./assets/react/controllers/Evaluation.jsx":
/*!*************************************************!*\
  !*** ./assets/react/controllers/Evaluation.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Evaluation = function Evaluation(_ref) {
  var questions = _ref.questions;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Evaluation");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Evaluation);

/***/ }),

/***/ "./assets/react/controllers/Hello.jsx":
/*!********************************************!*\
  !*** ./assets/react/controllers/Hello.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getTime() {
  var today = new Date();
  var time = (today.getHours() < 10 ? "0" + today.getHours() : today.getHours()) + ":" + (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()) + ":" + (today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds());
  return time;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return getTime();
    }),
    _useState2 = _slicedToArray(_useState, 2),
    time = _useState2[0],
    setTime = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var clock = setInterval(function () {
      setTime(getTime());
    }, 1000);
    return function () {
      clearInterval(clock);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, time));
}

/***/ }),

/***/ "./assets/react/controllers/LeaderBoard.jsx":
/*!**************************************************!*\
  !*** ./assets/react/controllers/LeaderBoard.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Leaders_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Leaders.css */ "./assets/react/controllers/styles/Leaders.css");


var LeaderBoard = function LeaderBoard(_ref) {
  var progressions = _ref.progressions;
  var users = JSON.parse(progressions);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "leader-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "leaderboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-crown"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Leaders")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ol", null, users.map(function (user, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: "leader-".concat(index)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mark", null, user.user.username, " (", user.user.age, " ans)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, user.score));
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeaderBoard);

/***/ }),

/***/ "./assets/react/controllers/ListLessons.jsx":
/*!**************************************************!*\
  !*** ./assets/react/controllers/ListLessons.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_appNotes_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/appNotes.css */ "./assets/react/controllers/styles/appNotes.css");


var ListLessons = function ListLessons(_ref) {
  var _position$niveau$appr;
  var lessons = _ref.lessons,
    progression = _ref.progression,
    current = _ref.current;
  var notes = JSON.parse(lessons);
  var position = JSON.parse(progression);
  var lesson = current || ((_position$niveau$appr = position.niveau.apprentissage) === null || _position$niveau$appr === void 0 ? void 0 : _position$niveau$appr.id) || 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app-notes"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-crown"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Apprentissages")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app-list-notes"
  }, notes.map(function (note, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: "notes-".concat(index),
      className: "app-list-note ".concat(note.niveau.id <= position.niveau.id ? "passed" : "", " ").concat(note.id === lesson ? "current" : "")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "/learn/".concat(note.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "app-list-note_title"
    }, note.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "app-list-note_footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Niveau : ", note.niveau.libelle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Stade : ", note.niveau.stade.libelle))));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListLessons);

/***/ }),

/***/ "./assets/react/controllers/LoginForm.jsx":
/*!************************************************!*\
  !*** ./assets/react/controllers/LoginForm.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_loginform_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/loginform.css */ "./assets/react/controllers/styles/loginform.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var LoginForm = function LoginForm(_ref) {
  var last_username = _ref.last_username,
    error = _ref.error,
    csrf_token = _ref.csrf_token;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      email: last_username,
      password: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    user = _useState2[0],
    setUser = _useState2[1];
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      value = _e$target.value,
      name = _e$target.name;
    console.log(e.target);
    setUser(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, value));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "card-form",
    method: "post"
  }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-danger"
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "heading-h1"
  }, "Please sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "inputEmail"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    value: user.email,
    name: "email",
    id: "inputEmail",
    className: "form-control",
    autoComplete: "email",
    onChange: handleChange,
    required: true,
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "inputPassword"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    name: "password",
    value: user.password,
    onChange: handleChange,
    id: "inputPassword",
    className: "form-control",
    autoComplete: "current-password",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "hidden",
    name: "_csrf_token",
    value: csrf_token
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    name: "_remember_me"
  }), " Remember me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn-gradient",
    type: "submit"
  }, "Sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Don't have an account yet? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/register"
  }, "Create an account"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ }),

/***/ "./assets/react/controllers/Reading.jsx":
/*!**********************************************!*\
  !*** ./assets/react/controllers/Reading.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RawHtml": () => (/* binding */ RawHtml),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RawHtml = /*#__PURE__*/function (_PureComponent) {
  _inherits(RawHtml, _PureComponent);
  var _super = _createSuper(RawHtml);
  function RawHtml(props) {
    _classCallCheck(this, RawHtml);
    return _super.call(this, props);
  }
  _createClass(RawHtml, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        _this$props$className = _this$props.className,
        className = _this$props$className === void 0 ? "" : _this$props$className;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: className,
        dangerouslySetInnerHTML: {
          __html: children.replace(/\n/g, '<br />')
        }
      });
    }
  }]);
  return RawHtml;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
var Reading = function Reading(_ref) {
  var title = _ref.title,
    contenu = _ref.contenu;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      textAlign: "center",
      marginBlock: 12
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RawHtml, null, contenu));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reading);

/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/register_controller.js":
/*!********************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/register_controller.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerReactControllerComponents": () => (/* binding */ registerReactControllerComponents)
/* harmony export */ });
function registerReactControllerComponents(context) {
  var reactControllers = {};
  var importAllReactComponents = function importAllReactComponents(r) {
    r.keys().forEach(function (key) {
      return reactControllers[key] = r(key)["default"];
    });
  };
  importAllReactComponents(context);
  window.resolveReactComponent = function (name) {
    var component = reactControllers["./".concat(name, ".jsx")] || reactControllers["./".concat(name, ".tsx")];
    if (typeof component === 'undefined') {
      throw new Error('React controller "' + name + '" does not exist');
    }
    return component;
  };
}


/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/render_controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/render_controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createRoot;
var m = react_dom__WEBPACK_IMPORTED_MODULE_1__;
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function createRoot(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    _classCallCheck(this, default_1);
    return _super.apply(this, arguments);
  }
  _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var props = this.propsValue ? this.propsValue : null;
      this.dispatchEvent('connect', {
        component: this.componentValue,
        props: props
      });
      if (!this.componentValue) {
        throw new Error('No component specified.');
      }
      var component = window.resolveReactComponent(this.componentValue);
      this._renderReactElement( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(component, props, null));
      this.dispatchEvent('mount', {
        componentName: this.componentValue,
        component: component,
        props: props
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.element.root.unmount();
      this.dispatchEvent('unmount', {
        component: this.componentValue,
        props: this.propsValue ? this.propsValue : null
      });
    }
  }, {
    key: "_renderReactElement",
    value: function _renderReactElement(reactElement) {
      var element = this.element;
      if (!element.root) {
        element.root = createRoot(this.element);
      }
      element.root.render(reactElement);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'react'
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__.Controller);
default_1.values = {
  component: String,
  props: Object
};


/***/ }),

/***/ "./assets/react/controllers/styles/Leaders.css":
/*!*****************************************************!*\
  !*** ./assets/react/controllers/styles/Leaders.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/react/controllers/styles/appNotes.css":
/*!******************************************************!*\
  !*** ./assets/react/controllers/styles/appNotes.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/react/controllers/styles/apprentissage.css":
/*!***********************************************************!*\
  !*** ./assets/react/controllers/styles/apprentissage.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/react/controllers/styles/banner.css":
/*!****************************************************!*\
  !*** ./assets/react/controllers/styles/banner.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/react/controllers/styles/loginform.css":
/*!*******************************************************!*\
  !*** ./assets/react/controllers/styles/loginform.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_react-dom_index_js"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBLGlFQUFlO0FBQ2YsOEJBQThCLDJNQUFnRjtBQUM5RyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YrQzs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7RUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUEsT0FVSSxtQkFBVTtNQUNOLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLEdBQUcsbUVBQW1FO0lBQ2xHO0VBQUM7RUFBQTtBQUFBLEVBSHdCRiwwREFBVTs7Ozs7Ozs7Ozs7Ozs7OztBQ1h2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDMEI7O0FBRTFCO0FBQ3FCO0FBRWlEOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUcsb0ZBQWlDLENBQUNDLCtFQUEyRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJsQzs7QUFFNUQ7QUFDTyxJQUFNRyxHQUFHLEdBQUdELDBFQUFnQixDQUFDRix5SUFJbkMsQ0FBQzs7QUFFRjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1YwQjtBQUNZO0FBQ047QUFFSTtBQUVwQyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWEsT0FBb0I7RUFBQSxJQUFkQyxPQUFPLFFBQVBBLE9BQU87RUFDOUIsSUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsT0FBTyxDQUFDO0VBQ2xDLHNCQUFzQkoscURBQWMsQ0FBQyxDQUFDLENBQUM7SUFBQTtJQUFoQ1MsR0FBRztJQUFFQyxNQUFNO0VBRWxCLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTLENBQUlDLEtBQUssRUFBSztJQUMzQkYsTUFBTSxDQUFDRSxLQUFLLENBQUM7RUFDZixDQUFDO0VBRUQsb0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBSyxnQkFDbEI7SUFBSyxTQUFTLEVBQUM7RUFBWSxnQkFDekI7SUFBSyxTQUFTLHdCQUFpQkgsR0FBRyxLQUFHLENBQUMsR0FBRSxVQUFVLEdBQUMsRUFBRTtFQUFHLGdCQUN0RDtJQUFNLE9BQU8sRUFBRTtNQUFBLE9BQU1FLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFBQTtFQUFDLEdBQUMsV0FBUyxDQUFPLENBQy9DLGVBQ047SUFBSyxTQUFTLHdCQUFpQkYsR0FBRyxLQUFHLENBQUMsR0FBRSxVQUFVLEdBQUMsRUFBRTtFQUFHLGdCQUN0RDtJQUFNLE9BQU8sRUFBRTtNQUFBLE9BQU1FLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFBQTtFQUFDLEdBQUMsUUFBTSxDQUFPLENBQzVDLGVBQ047SUFBSyxTQUFTLHdCQUFpQkYsR0FBRyxLQUFHLENBQUMsR0FBRSxVQUFVLEdBQUMsRUFBRTtFQUFHLGdCQUN0RDtJQUFNLE9BQU8sRUFBRTtNQUFBLE9BQU1FLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFBQTtFQUFDLEdBQUMsWUFBVSxDQUFPLENBQ2hELENBQ0YsZUFDTjtJQUFLLFNBQVMsRUFBQztFQUFVLGdCQUN2QjtJQUNFLFNBQVMsRUFBQyxhQUFhO0lBQ3ZCLEtBQUssRUFBRTtNQUFFRSxPQUFPLEVBQUVKLEdBQUcsS0FBSyxDQUFDLEdBQUcsT0FBTyxHQUFHO0lBQU87RUFBRSxnQkFFakQsdUVBQ0dKLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBQ0MsUUFBUSxFQUFFSixLQUFLO0lBQUEsb0JBQ3BDO01BQUksR0FBRyxxQkFBY0EsS0FBSztJQUFHLEdBQUVJLFFBQVEsQ0FBQ0MsT0FBTyxDQUFNO0VBQUEsQ0FDdEQsQ0FBQyxDQUNDLENBQ0QsZUFDTjtJQUNFLFNBQVMsRUFBQyxhQUFhO0lBQ3ZCLEtBQUssRUFBRTtNQUFFSixPQUFPLEVBQUVKLEdBQUcsS0FBSyxDQUFDLEdBQUcsT0FBTyxHQUFHO0lBQU87RUFBRSxnQkFFakQsMkRBQUMsZ0RBQU87SUFBQyxLQUFLLEVBQUVKLE1BQU0sQ0FBQ2EsS0FBTTtJQUFDLE9BQU8sRUFBRWIsTUFBTSxDQUFDYztFQUFRLEVBQUcsQ0FDckQsZUFDTjtJQUNFLFNBQVMsRUFBQyxhQUFhO0lBQ3ZCLEtBQUssRUFBRTtNQUFFTixPQUFPLEVBQUVKLEdBQUcsS0FBSyxDQUFDLEdBQUcsT0FBTyxHQUFHO0lBQU87RUFBRSxnQkFFakQsMkRBQUMsbURBQVU7SUFBQyxTQUFTLEVBQUVKLE1BQU0sQ0FBQ2U7RUFBVSxFQUFHLENBQ3ZDLENBQ0YsQ0FDRjtBQUVWLENBQUM7QUFFRCxpRUFBZWpCLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REY7QUFDRztBQUNEO0FBRTVCLElBQU1tQixNQUFNLEdBQUcsU0FBVEEsTUFBTSxPQUE2RDtFQUFBLElBQXZEQyxLQUFLLFFBQUxBLEtBQUs7SUFBRUMsUUFBUSxRQUFSQSxRQUFRO0lBQUVDLEdBQUcsUUFBSEEsR0FBRztJQUFFQyxLQUFLLFFBQUxBLEtBQUs7SUFBRUMsTUFBTSxRQUFOQSxNQUFNO0lBQUVDLFdBQVcsUUFBWEEsV0FBVztFQUNoRSxJQUFNQyxPQUFPLEdBQUd2QixJQUFJLENBQUNDLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQztFQUNsQyxJQUFNRyxRQUFRLEdBQUd4QixJQUFJLENBQUNDLEtBQUssQ0FBQ3FCLFdBQVcsQ0FBQztFQUV4QyxvQkFDRSx1SUFDRTtJQUFLLFNBQVMsRUFBQztFQUFRLGdCQUNyQjtJQUFLLFNBQVMsRUFBQztFQUFNLGdCQUNuQjtJQUFLLFNBQVMsRUFBQztFQUFXLGdCQUFDLDJEQUFDLDhDQUFLLE9BQUcsa0JBQWMsQ0FBTSxlQUN4RDtJQUFLLFNBQVMsRUFBQztFQUFVLGdCQUN2QjtJQUFLLEdBQUcsRUFBQyxxQkFBcUI7SUFBQyxHQUFHLEVBQUM7RUFBTSxFQUFHLENBQ3hDLENBQ0YsZUFDTjtJQUFLLFNBQVMsRUFBQztFQUFNLGdCQUNuQjtJQUFLLFNBQVMsRUFBQztFQUFjLEdBQUMsV0FDbkIsd0ZBQU9KLFFBQVEsQ0FBUSxDQUM1QixlQUNOO0lBQUssU0FBUyxFQUFDO0VBQWEsZ0JBQzFCO0lBQUcsSUFBSSxFQUFDLFNBQVM7SUFBQyxTQUFTLEVBQUM7RUFBVSxHQUFDLFNBRXZDLENBQUksQ0FDQSxDQUNGLENBQ0YsZUFDTjtJQUFLLFNBQVMsRUFBQztFQUFjLEdBQzNCSyxPQUFPLENBQUNkLEdBQUcsQ0FBQyxVQUFDZ0IsTUFBTSxFQUFFbkIsS0FBSztJQUFBLG9CQUN0QjtNQUFLLEdBQUcsRUFBRUEsS0FBTTtNQUFDLGNBQVltQixNQUFNLENBQUNkLE9BQVE7TUFBQyxTQUFTLDBCQUFtQmMsTUFBTSxDQUFDQyxFQUFFLElBQUlGLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxFQUFFLEdBQUcsUUFBUSxHQUFHLEVBQUUsY0FBSUQsTUFBTSxDQUFDQyxFQUFFLEtBQUtGLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxFQUFFLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFBRyxFQUMxSztFQUFBLENBQ1QsQ0FBQyxDQUNHLENBQ047QUFFUCxDQUFDO0FBRUQsaUVBQWVWLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENJO0FBRXpCLElBQU1yQixVQUFVLEdBQUcsU0FBYkEsVUFBVSxPQUFvQjtFQUFBLElBQWZtQixTQUFTLFFBQVRBLFNBQVM7RUFDNUIsb0JBQ0Usd0VBQUssWUFBVSxDQUFNO0FBRXpCLENBQUM7QUFFRCxpRUFBZW5CLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjBCO0FBSW5ELFNBQVNpQyxPQUFPLEdBQUU7RUFDZCxJQUFNQyxLQUFLLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0VBQ3hCLElBQU1DLElBQUksR0FBRyxDQUFDRixLQUFLLENBQUNHLFFBQVEsRUFBRSxHQUFDLEVBQUUsR0FBQyxHQUFHLEdBQUNILEtBQUssQ0FBQ0csUUFBUSxFQUFFLEdBQUNILEtBQUssQ0FBQ0csUUFBUSxFQUFFLElBQUksR0FBRyxJQUFJSCxLQUFLLENBQUNJLFVBQVUsRUFBRSxHQUFDLEVBQUUsR0FBQyxHQUFHLEdBQUNKLEtBQUssQ0FBQ0ksVUFBVSxFQUFFLEdBQUNKLEtBQUssQ0FBQ0ksVUFBVSxFQUFFLENBQUMsR0FBRSxHQUFHLElBQUlKLEtBQUssQ0FBQ0ssVUFBVSxFQUFFLEdBQUMsRUFBRSxHQUFDLEdBQUcsR0FBQ0wsS0FBSyxDQUFDSyxVQUFVLEVBQUUsR0FBQ0wsS0FBSyxDQUFDSyxVQUFVLEVBQUUsQ0FBQztFQUMzTixPQUFPSCxJQUFJO0FBQ2Y7QUFHQSw2QkFBZSxzQ0FBWTtFQUN6QixnQkFBd0I3QiwrQ0FBUSxDQUFDO01BQUEsT0FBSTBCLE9BQU8sRUFBRTtJQUFBLEVBQUM7SUFBQTtJQUF4Q0csSUFBSTtJQUFFSSxPQUFPO0VBRXBCUixnREFBUyxDQUFDLFlBQUk7SUFFWixJQUFNUyxLQUFLLEdBQUdDLFdBQVcsQ0FBQyxZQUFJO01BQUNGLE9BQU8sQ0FBQ1AsT0FBTyxFQUFFLENBQUM7SUFBQSxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ3pELE9BQU8sWUFBSTtNQUNQVSxhQUFhLENBQUNGLEtBQUssQ0FBQztJQUN4QixDQUFDO0VBQ0gsQ0FBQyxFQUFDLEVBQUUsQ0FBQztFQUVMLG9CQUNFLHFGQUNFLDJFQUFTTCxJQUFJLENBQVUsQ0FDbkI7QUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0IwQjtBQUNJO0FBRTlCLElBQU1RLFdBQVcsR0FBRyxTQUFkQSxXQUFXLE9BQXlCO0VBQUEsSUFBbkJDLFlBQVksUUFBWkEsWUFBWTtFQUNqQyxJQUFNQyxLQUFLLEdBQUd6QyxJQUFJLENBQUNDLEtBQUssQ0FBQ3VDLFlBQVksQ0FBQztFQUV0QyxvQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFrQixnQkFDL0I7SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDMUI7SUFBSyxTQUFTLEVBQUM7RUFBTSxnQkFDbkI7SUFBRyxTQUFTLEVBQUM7RUFBYyxFQUFLLGVBQ2hDLHVFQUFJLFNBQU8sQ0FBSyxDQUNaLGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBTSxnQkFDbkIsdUVBQ0dDLEtBQUssQ0FBQ2hDLEdBQUcsQ0FBQyxVQUFDaUMsSUFBSSxFQUFFcEMsS0FBSztJQUFBLG9CQUNyQjtNQUFJLEdBQUcsbUJBQVlBLEtBQUs7SUFBRyxnQkFDekIseUVBQU9vQyxJQUFJLENBQUNBLElBQUksQ0FBQ3hCLFFBQVEsRUFBQyxJQUFFLEVBQUN3QixJQUFJLENBQUNBLElBQUksQ0FBQ3ZCLEdBQUcsRUFBQyxPQUFLLENBQU8sZUFDdkQsMEVBQVF1QixJQUFJLENBQUNDLEtBQUssQ0FBUyxDQUN4QjtFQUFBLENBQ04sQ0FBQyxDQUNDLENBQ0QsQ0FDRixDQUNGO0FBRVYsQ0FBQztBQUVELGlFQUFlSixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDSztBQUUvQixJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBVyxPQUEwQztFQUFBO0VBQUEsSUFBcENDLE9BQU8sUUFBUEEsT0FBTztJQUFFdkIsV0FBVyxRQUFYQSxXQUFXO0lBQUV4QixPQUFPLFFBQVBBLE9BQU87RUFDbEQsSUFBTWdELEtBQUssR0FBRzlDLElBQUksQ0FBQ0MsS0FBSyxDQUFDNEMsT0FBTyxDQUFDO0VBQ2pDLElBQU1FLFFBQVEsR0FBRy9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDcUIsV0FBVyxDQUFDO0VBQ3hDLElBQU12QixNQUFNLEdBQUdELE9BQU8sOEJBQUlpRCxRQUFRLENBQUN0QixNQUFNLENBQUN1QixhQUFhLDBEQUE3QixzQkFBK0J0QixFQUFFLEtBQUksQ0FBQztFQUVoRSxvQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFXLGdCQUN4QjtJQUFLLFNBQVMsRUFBQztFQUFNLGdCQUNuQjtJQUFHLFNBQVMsRUFBQztFQUFjLEVBQUssZUFDaEMsdUVBQUksZ0JBQWMsQ0FBSyxDQUNuQixlQUNOO0lBQUssU0FBUyxFQUFDO0VBQWdCLEdBQzVCb0IsS0FBSyxDQUFDckMsR0FBRyxDQUFDLFVBQUN3QyxJQUFJLEVBQUUzQyxLQUFLO0lBQUEsb0JBQ3JCO01BQ0UsR0FBRyxrQkFBV0EsS0FBSyxDQUFHO01BQ3RCLFNBQVMsMEJBQ1AyQyxJQUFJLENBQUN4QixNQUFNLENBQUNDLEVBQUUsSUFBSXFCLFFBQVEsQ0FBQ3RCLE1BQU0sQ0FBQ0MsRUFBRSxHQUFHLFFBQVEsR0FBRyxFQUFFLGNBQ2xEdUIsSUFBSSxDQUFDdkIsRUFBRSxLQUFLM0IsTUFBTSxHQUFHLFNBQVMsR0FBRyxFQUFFO0lBQUcsZ0JBRTFDO01BQUcsSUFBSSxtQkFBWWtELElBQUksQ0FBQ3ZCLEVBQUU7SUFBRyxnQkFDM0I7TUFBSyxTQUFTLEVBQUM7SUFBcUIsR0FBRXVCLElBQUksQ0FBQ3JDLEtBQUssQ0FBTyxlQUN2RDtNQUFLLFNBQVMsRUFBQztJQUFzQixnQkFDbkMseUVBQU0sV0FBUyxFQUFDcUMsSUFBSSxDQUFDeEIsTUFBTSxDQUFDZCxPQUFPLENBQVEsZUFDM0MseUVBQU0sVUFBUSxFQUFDc0MsSUFBSSxDQUFDeEIsTUFBTSxDQUFDeUIsS0FBSyxDQUFDdkMsT0FBTyxDQUFRLENBQzVDLENBQ0osQ0FDQTtFQUFBLENBQ1AsQ0FBQyxDQUNFLENBQ0Y7QUFFVixDQUFDO0FBRUQsaUVBQWVpQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ2M7QUFFUjtBQUVoQyxJQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBUyxPQUE2QztFQUFBLElBQXZDQyxhQUFhLFFBQWJBLGFBQWE7SUFBRUMsS0FBSyxRQUFMQSxLQUFLO0lBQUVDLFVBQVUsUUFBVkEsVUFBVTtFQUNuRCxnQkFBd0JwRCwrQ0FBUSxDQUFDO01BQUVlLEtBQUssRUFBRW1DLGFBQWE7TUFBRUcsUUFBUSxFQUFFO0lBQUcsQ0FBQyxDQUFDO0lBQUE7SUFBakViLElBQUk7SUFBRWMsT0FBTztFQUVwQixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJQyxDQUFDLEVBQUs7SUFDMUIsZ0JBQXdCQSxDQUFDLENBQUNDLE1BQU07TUFBeEJDLEtBQUssYUFBTEEsS0FBSztNQUFFQyxJQUFJLGFBQUpBLElBQUk7SUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxDQUFDLENBQUNDLE1BQU0sQ0FBQztJQUNyQkgsT0FBTyxDQUFDLFVBQUNRLElBQUk7TUFBQSx1Q0FBV0EsSUFBSSwyQkFBR0gsSUFBSSxFQUFHRCxLQUFLO0lBQUEsQ0FBRyxDQUFDO0VBQ2pELENBQUM7RUFDRCxvQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFnQixnQkFDN0I7SUFBTSxTQUFTLEVBQUMsV0FBVztJQUFDLE1BQU0sRUFBQztFQUFNLEdBQ3RDUCxLQUFLLGlCQUFJO0lBQUssU0FBUyxFQUFDO0VBQW9CLEdBQUVBLEtBQUssQ0FBTyxlQUMzRDtJQUFJLFNBQVMsRUFBQztFQUFZLEdBQUMsZ0JBQWMsQ0FBSyxlQUM5QztJQUFLLFNBQVMsRUFBQztFQUFZLGdCQUN6QjtJQUFPLE9BQU8sRUFBQztFQUFZLEdBQUMsT0FBSyxDQUFRLGVBQ3pDO0lBQ0UsSUFBSSxFQUFDLE9BQU87SUFDWixLQUFLLEVBQUVYLElBQUksQ0FBQ3pCLEtBQU07SUFDbEIsSUFBSSxFQUFDLE9BQU87SUFDWixFQUFFLEVBQUMsWUFBWTtJQUNmLFNBQVMsRUFBQyxjQUFjO0lBQ3hCLFlBQVksRUFBQyxPQUFPO0lBQ3BCLFFBQVEsRUFBRXdDLFlBQWE7SUFDdkIsUUFBUTtJQUNSLFNBQVM7RUFBQSxFQUNULENBQ0UsZUFDTjtJQUFLLFNBQVMsRUFBQztFQUFZLGdCQUN6QjtJQUFPLE9BQU8sRUFBQztFQUFlLEdBQUMsVUFBUSxDQUFRLGVBQy9DO0lBQ0UsSUFBSSxFQUFDLFVBQVU7SUFDZixJQUFJLEVBQUMsVUFBVTtJQUNmLEtBQUssRUFBRWYsSUFBSSxDQUFDYSxRQUFTO0lBQ3JCLFFBQVEsRUFBRUUsWUFBYTtJQUN2QixFQUFFLEVBQUMsZUFBZTtJQUNsQixTQUFTLEVBQUMsY0FBYztJQUN4QixZQUFZLEVBQUMsa0JBQWtCO0lBQy9CLFFBQVE7RUFBQSxFQUNSLENBQ0UsZUFDTjtJQUFPLElBQUksRUFBQyxRQUFRO0lBQUMsSUFBSSxFQUFDLGFBQWE7SUFBQyxLQUFLLEVBQUVIO0VBQVcsRUFBRyxlQUM3RCxxRkFDRSx1RkFDRTtJQUFPLElBQUksRUFBQyxVQUFVO0lBQUMsSUFBSSxFQUFDO0VBQWMsRUFBRyxnQkFDL0MsQ0FBUSxDQUNKLGVBQ047SUFBUSxTQUFTLEVBQUMsY0FBYztJQUFDLElBQUksRUFBQztFQUFRLEdBQUMsU0FFL0MsQ0FBUyxlQUNULHdFQUFLLDZCQUEyQjtJQUFHLElBQUksRUFBQztFQUFXLEdBQUMsbUJBQWlCLENBQUksQ0FBTSxDQUMxRSxDQUNIO0FBRVYsQ0FBQztBQUVELGlFQUFlSCxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RxQjtBQUV0QyxJQUFNZSxPQUFPO0VBQUE7RUFBQTtFQUNsQixpQkFBWUMsS0FBSyxFQUFFO0lBQUE7SUFBQSx5QkFDWEEsS0FBSztFQUNiO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsa0JBQVM7TUFDUCxrQkFBbUMsSUFBSSxDQUFDQSxLQUFLO1FBQXRDQyxRQUFRLGVBQVJBLFFBQVE7UUFBQSxvQ0FBRUMsU0FBUztRQUFUQSxTQUFTLHNDQUFHLEVBQUU7TUFDL0Isb0JBQU87UUFBSyxTQUFTLEVBQUVBLFNBQVU7UUFBQyx1QkFBdUIsRUFBRTtVQUFFQyxNQUFNLEVBQUVGLFFBQVEsQ0FBQ0csT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRO1FBQUM7TUFBRSxFQUFHO0lBQzdHO0VBQUM7RUFBQTtBQUFBLEVBUDBCTixnREFBYTtBQVUxQyxJQUFNckUsT0FBTyxHQUFHLFNBQVZBLE9BQU8sT0FBMkI7RUFBQSxJQUFyQmdCLEtBQUssUUFBTEEsS0FBSztJQUFFQyxPQUFPLFFBQVBBLE9BQU87RUFDL0Isb0JBQ0UscUZBQ0U7SUFBSSxLQUFLLEVBQUU7TUFBRTJELFNBQVMsRUFBRSxRQUFRO01BQUVDLFdBQVcsRUFBRTtJQUFHO0VBQUUsR0FBRTdELEtBQUssQ0FBTSxlQUNqRSwyREFBQyxPQUFPLFFBQUVDLE9BQU8sQ0FBVyxDQUN4QjtBQUVWLENBQUM7QUFFRCxpRUFBZWpCLE9BQU87Ozs7Ozs7Ozs7Ozs7OztBQ3JCdEIsU0FBU1AsaUNBQWlDLENBQUNFLE9BQU8sRUFBRTtFQUNoRCxJQUFNbUYsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0VBQzNCLElBQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBd0IsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3BDQSxDQUFDLENBQUNDLElBQUksRUFBRSxDQUFDQyxPQUFPLENBQUMsVUFBQ0MsR0FBRztNQUFBLE9BQU1MLGdCQUFnQixDQUFDSyxHQUFHLENBQUMsR0FBR0gsQ0FBQyxDQUFDRyxHQUFHLENBQUMsV0FBUTtJQUFBLENBQUMsQ0FBQztFQUN2RSxDQUFDO0VBQ0RKLHdCQUF3QixDQUFDcEYsT0FBTyxDQUFDO0VBQ2pDeUYsTUFBTSxDQUFDQyxxQkFBcUIsR0FBRyxVQUFDcEIsSUFBSSxFQUFLO0lBQ3JDLElBQU1xQixTQUFTLEdBQUdSLGdCQUFnQixhQUFNYixJQUFJLFVBQU8sSUFBSWEsZ0JBQWdCLGFBQU1iLElBQUksVUFBTztJQUN4RixJQUFJLE9BQU9xQixTQUFTLEtBQUssV0FBVyxFQUFFO01BQ2xDLE1BQU0sSUFBSUMsS0FBSyxDQUFDLG9CQUFvQixHQUFHdEIsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0lBQ3JFO0lBQ0EsT0FBT3FCLFNBQVM7RUFDcEIsQ0FBQztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMEI7QUFDUztBQUNhO0FBRWhELElBQUlHLFVBQVU7QUFFZCxJQUFJQyxDQUFDLEdBQUdGLHNDQUFVO0FBQ2xCLElBQUlHLEtBQXFDLEVBQUUsRUFHMUMsTUFBTTtFQUNMLElBQUlJLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxrREFBa0Q7RUFDNURQLFVBQVUsR0FBRyxvQkFBU1EsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDMUJILENBQUMsQ0FBQ0kscUJBQXFCLEdBQUcsSUFBSTtJQUM5QixJQUFJO01BQ0YsT0FBT1QsQ0FBQyxDQUFDRCxVQUFVLENBQUNRLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0lBQzNCLENBQUMsU0FBUztNQUNSSCxDQUFDLENBQUNJLHFCQUFxQixHQUFHLEtBQUs7SUFDakM7RUFDRixDQUFDO0FBQ0g7QUFBQyxJQUVLQyxTQUFTO0VBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBLE9BQ1gsbUJBQVU7TUFDTixJQUFNN0IsS0FBSyxHQUFHLElBQUksQ0FBQzhCLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJO01BQ3RELElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsRUFBRTtRQUFFaEIsU0FBUyxFQUFFLElBQUksQ0FBQ2lCLGNBQWM7UUFBRWhDLEtBQUssRUFBRUE7TUFBTSxDQUFDLENBQUM7TUFDL0UsSUFBSSxDQUFDLElBQUksQ0FBQ2dDLGNBQWMsRUFBRTtRQUN0QixNQUFNLElBQUloQixLQUFLLENBQUMseUJBQXlCLENBQUM7TUFDOUM7TUFDQSxJQUFNRCxTQUFTLEdBQUdGLE1BQU0sQ0FBQ0MscUJBQXFCLENBQUMsSUFBSSxDQUFDa0IsY0FBYyxDQUFDO01BQ25FLElBQUksQ0FBQ0MsbUJBQW1CLGVBQUMxRywwREFBbUIsQ0FBQ3dGLFNBQVMsRUFBRWYsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO01BQ3JFLElBQUksQ0FBQytCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7UUFDeEJJLGFBQWEsRUFBRSxJQUFJLENBQUNILGNBQWM7UUFDbENqQixTQUFTLEVBQUVBLFNBQVM7UUFDcEJmLEtBQUssRUFBRUE7TUFDWCxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUE7SUFBQSxPQUNELHNCQUFhO01BQ1QsSUFBSSxDQUFDaEYsT0FBTyxDQUFDb0gsSUFBSSxDQUFDQyxPQUFPLEVBQUU7TUFDM0IsSUFBSSxDQUFDTixhQUFhLENBQUMsU0FBUyxFQUFFO1FBQzFCaEIsU0FBUyxFQUFFLElBQUksQ0FBQ2lCLGNBQWM7UUFDOUJoQyxLQUFLLEVBQUUsSUFBSSxDQUFDOEIsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVSxHQUFHO01BQy9DLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTtJQUFBLE9BQ0QsNkJBQW9CUSxZQUFZLEVBQUU7TUFDOUIsSUFBTXRILE9BQU8sR0FBRyxJQUFJLENBQUNBLE9BQU87TUFDNUIsSUFBSSxDQUFDQSxPQUFPLENBQUNvSCxJQUFJLEVBQUU7UUFDZnBILE9BQU8sQ0FBQ29ILElBQUksR0FBR2xCLFVBQVUsQ0FBQyxJQUFJLENBQUNsRyxPQUFPLENBQUM7TUFDM0M7TUFDQUEsT0FBTyxDQUFDb0gsSUFBSSxDQUFDRyxNQUFNLENBQUNELFlBQVksQ0FBQztJQUNyQztFQUFDO0lBQUE7SUFBQSxPQUNELHVCQUFjNUMsSUFBSSxFQUFFOEMsT0FBTyxFQUFFO01BQ3pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDL0MsSUFBSSxFQUFFO1FBQUVnRCxNQUFNLEVBQUVGLE9BQU87UUFBRUcsTUFBTSxFQUFFO01BQVEsQ0FBQyxDQUFDO0lBQzdEO0VBQUM7RUFBQTtBQUFBLEVBL0JtQjVILDBEQUFVO0FBaUNsQzhHLFNBQVMsQ0FBQ2UsTUFBTSxHQUFHO0VBQ2Y3QixTQUFTLEVBQUU4QixNQUFNO0VBQ2pCN0MsS0FBSyxFQUFFOEM7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMUREOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9BcHByZW50aXNzYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQmFubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvRXZhbHVhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0hlbGxvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvTGVhZGVyQm9hcmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9MaXN0TGVzc29ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0xvZ2luRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL1JlYWRpbmcuanN4Iiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL3N0eWxlcy9MZWFkZXJzLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvc3R5bGVzL2FwcE5vdGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvc3R5bGVzL2FwcHJlbnRpc3NhZ2UuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9zdHlsZXMvYmFubmVyLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvc3R5bGVzL2xvZ2luZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9BcHByZW50aXNzYWdlLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0FwcHJlbnRpc3NhZ2UuanN4XCIsXG5cdFwiLi9CYW5uZXIuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQmFubmVyLmpzeFwiLFxuXHRcIi4vRXZhbHVhdGlvbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9FdmFsdWF0aW9uLmpzeFwiLFxuXHRcIi4vSGVsbG8uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvSGVsbG8uanN4XCIsXG5cdFwiLi9MZWFkZXJCb2FyZC5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9MZWFkZXJCb2FyZC5qc3hcIixcblx0XCIuL0xpc3RMZXNzb25zLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0xpc3RMZXNzb25zLmpzeFwiLFxuXHRcIi4vTG9naW5Gb3JtLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0xvZ2luRm9ybS5qc3hcIixcblx0XCIuL1JlYWRpbmcuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvUmVhZGluZy5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXJlYWN0LS1yZWFjdCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1yZWFjdC9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5pbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XG5cbi8vIFJlZ2lzdGVycyBSZWFjdCBjb250cm9sbGVyIGNvbXBvbmVudHMgdG8gYWxsb3cgbG9hZGluZyB0aGVtIGZyb20gVHdpZ1xuLy9cbi8vIFJlYWN0IGNvbnRyb2xsZXIgY29tcG9uZW50cyBhcmUgY29tcG9uZW50cyB0aGF0IGFyZSBtZWFudCB0byBiZSByZW5kZXJlZFxuLy8gZnJvbSBUd2lnLiBUaGVzZSBjb21wb25lbnQgdGhlbiByZWx5IG9uIG90aGVyIGNvbXBvbmVudHMgdGhhdCB3b24ndCBiZSBjYWxsZWRcbi8vIGRpcmVjdGx5IGZyb20gVHdpZy5cbi8vXG4vLyBCeSBwdXR0aW5nIG9ubHkgY29udHJvbGxlciBjb21wb25lbnRzIGluIGByZWFjdC9jb250cm9sbGVyc2AsIHlvdSBlbnN1cmUgdGhhdFxuLy8gaW50ZXJuYWwgY29tcG9uZW50cyB3b24ndCBiZSBhdXRvbWF0aWNhbGx5IGluY2x1ZGVkIGluIHlvdXIgSlMgYnVpbHQgZmlsZSBpZlxuLy8gdGhleSBhcmUgbm90IG5lY2Vzc2FyeS5cbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvXFwuKGp8dClzeD8kLykpO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRXZhbHVhdGlvbiBmcm9tIFwiLi9FdmFsdWF0aW9uXCI7XG5pbXBvcnQgUmVhZGluZyBmcm9tIFwiLi9SZWFkaW5nXCI7XG5cbmltcG9ydCBcIi4vc3R5bGVzL2FwcHJlbnRpc3NhZ2UuY3NzXCI7XG5cbmNvbnN0IEFwcHJlbnRpc3NhZ2UgPSAoeyBjdXJyZW50IH0pID0+IHtcbiAgY29uc3QgbGVzc29uID0gSlNPTi5wYXJzZShjdXJyZW50KTtcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNoYW5nZVRhYiA9IChpbmRleCkgPT4ge1xuICAgIHNldFRhYihpbmRleCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGFicy1vcHRpb24gJHt0YWI9PT0wPyAnc2VsZWN0ZWQnOicnfWB9PlxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGNoYW5nZVRhYigwKX0+UHJlcmVxdWlzPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0YWJzLW9wdGlvbiAke3RhYj09PTE/ICdzZWxlY3RlZCc6Jyd9YH0+XG4gICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gY2hhbmdlVGFiKDEpfT5MZXNzb248L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRhYnMtb3B0aW9uICR7dGFiPT09Mj8gJ3NlbGVjdGVkJzonJ31gfT5cbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VUYWIoMil9PkV2YWx1YXRpb248L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1ib2R5XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogdGFiID09PSAwID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtsZXNzb24ucHJlcmVxdWlzLm1hcCgocHJlcmVxdWksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2BwcmVyZXF1aS0ke2luZGV4fWB9PntwcmVyZXF1aS5saWJlbGxlfTwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiB0YWIgPT09IDEgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFJlYWRpbmcgdGl0bGU9e2xlc3Nvbi50aXRsZX0gY29udGVudT17bGVzc29uLmNvbnRlbnV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHRhYiA9PT0gMiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8RXZhbHVhdGlvbiBxdWVzdGlvbnM9e2xlc3Nvbi5xdWVzdGlvbnN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHByZW50aXNzYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9zdHlsZXMvYmFubmVyLmNzc1wiO1xuaW1wb3J0IEhlbGxvIGZyb20gXCIuL0hlbGxvXCI7XG5cbmNvbnN0IEJhbm5lciA9ICh7IGVtYWlsLCB1c2VybmFtZSwgYWdlLCBsZXZlbCwgbGV2ZWxzLCBwcm9ncmVzc2lvbiB9KSA9PiB7XG4gIGNvbnN0IG5pdmVhdXggPSBKU09OLnBhcnNlKGxldmVscyk7XG4gIGNvbnN0IHByb2dyZXNzID0gSlNPTi5wYXJzZShwcm9ncmVzc2lvbik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXRleHRcIj48SGVsbG8gLz4gV0VCLVNFQy1DUklNRTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLXYuanBlZ1wiIGFsdD1cIkxvZ29cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWRldGFpbHNcIj5cbiAgICAgICAgICAgIFdlbGNvbWUsIDxzcGFuPnt1c2VybmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWxvZ291dFwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9sb2dvdXRcIiBjbGFzc05hbWU9XCJidG4tbGlua1wiPlxuICAgICAgICAgICAgICBMb2cgb3V0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiPntcbiAgICAgICAgbml2ZWF1eC5tYXAoKG5pdmVhdSwgaW5kZXgpPT4oXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGRhdGEtbGFiZWw9e25pdmVhdS5saWJlbGxlfSBjbGFzc05hbWU9e2Bwcm9ncmVzcy1zdGVwICR7bml2ZWF1LmlkIDw9IHByb2dyZXNzLm5pdmVhdS5pZCA/ICdwYXNzZWQnIDogJyd9ICR7bml2ZWF1LmlkID09PSBwcm9ncmVzcy5uaXZlYXUuaWQgPyAnY3VycmVudCcgOiAnJ31gfT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgfTwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBFdmFsdWF0aW9uID0gKHtxdWVzdGlvbnN9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5FdmFsdWF0aW9uPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZhbHVhdGlvbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuXG5mdW5jdGlvbiBnZXRUaW1lKCl7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRpbWUgPSAodG9kYXkuZ2V0SG91cnMoKTwxMD9cIjBcIit0b2RheS5nZXRIb3VycygpOnRvZGF5LmdldEhvdXJzKCkpICsgXCI6XCIgKyAodG9kYXkuZ2V0TWludXRlcygpPDEwP1wiMFwiK3RvZGF5LmdldE1pbnV0ZXMoKTp0b2RheS5nZXRNaW51dGVzKCkpKyBcIjpcIiArICh0b2RheS5nZXRTZWNvbmRzKCk8MTA/XCIwXCIrdG9kYXkuZ2V0U2Vjb25kcygpOnRvZGF5LmdldFNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHRpbWU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgoKT0+Z2V0VGltZSgpKTtcblxuICB1c2VFZmZlY3QoKCk9PntcblxuICAgIGNvbnN0IGNsb2NrID0gc2V0SW50ZXJ2YWwoKCk9PntzZXRUaW1lKGdldFRpbWUoKSl9LCAxMDAwKTtcbiAgICByZXR1cm4gKCk9PntcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjbG9jayk7XG4gICAgfVxuICB9LFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHJvbmc+e3RpbWV9PC9zdHJvbmc+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgJy4vc3R5bGVzL0xlYWRlcnMuY3NzJztcblxuY29uc3QgTGVhZGVyQm9hcmQgPSAoeyBwcm9ncmVzc2lvbnMgfSkgPT4ge1xuICBjb25zdCB1c2VycyA9IEpTT04ucGFyc2UocHJvZ3Jlc3Npb25zKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFkZXJib2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY3Jvd25cIj48L2k+XG4gICAgICAgICAgPGgyPkxlYWRlcnM8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgPG9sPlxuICAgICAgICAgICAge3VzZXJzLm1hcCgodXNlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17YGxlYWRlci0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgIDxtYXJrPnt1c2VyLnVzZXIudXNlcm5hbWV9ICh7dXNlci51c2VyLmFnZX0gYW5zKTwvbWFyaz5cbiAgICAgICAgICAgICAgICA8c21hbGw+e3VzZXIuc2NvcmV9PC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMZWFkZXJCb2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2FwcE5vdGVzLmNzc1wiO1xuXG5jb25zdCBMaXN0TGVzc29ucyA9ICh7IGxlc3NvbnMsIHByb2dyZXNzaW9uLCBjdXJyZW50IH0pID0+IHtcbiAgY29uc3Qgbm90ZXMgPSBKU09OLnBhcnNlKGxlc3NvbnMpO1xuICBjb25zdCBwb3NpdGlvbiA9IEpTT04ucGFyc2UocHJvZ3Jlc3Npb24pO1xuICBjb25zdCBsZXNzb24gPSBjdXJyZW50IHx8IHBvc2l0aW9uLm5pdmVhdS5hcHByZW50aXNzYWdlPy5pZCB8fCAxO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtbm90ZXNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY3Jvd25cIj48L2k+XG4gICAgICAgIDxoMj5BcHByZW50aXNzYWdlczwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWxpc3Qtbm90ZXNcIj5cbiAgICAgICAge25vdGVzLm1hcCgobm90ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2Bub3Rlcy0ke2luZGV4fWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcHAtbGlzdC1ub3RlICR7XG4gICAgICAgICAgICAgIG5vdGUubml2ZWF1LmlkIDw9IHBvc2l0aW9uLm5pdmVhdS5pZCA/IFwicGFzc2VkXCIgOiBcIlwiXG4gICAgICAgICAgICB9ICR7bm90ZS5pZCA9PT0gbGVzc29uID8gXCJjdXJyZW50XCIgOiBcIlwifWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGEgaHJlZj17YC9sZWFybi8ke25vdGUuaWR9YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWxpc3Qtbm90ZV90aXRsZVwiPntub3RlLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1saXN0LW5vdGVfZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+Tml2ZWF1IDoge25vdGUubml2ZWF1LmxpYmVsbGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlN0YWRlIDoge25vdGUubml2ZWF1LnN0YWRlLmxpYmVsbGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RMZXNzb25zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcIi4vc3R5bGVzL2xvZ2luZm9ybS5jc3NcIjtcblxuY29uc3QgTG9naW5Gb3JtID0gKHsgbGFzdF91c2VybmFtZSwgZXJyb3IsIGNzcmZfdG9rZW4gfSkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7IGVtYWlsOiBsYXN0X3VzZXJuYW1lLCBwYXNzd29yZDogXCJcIiB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICBzZXRVc2VyKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjYXJkLWZvcm1cIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPntlcnJvcn08L2Rpdj59XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nLWgxXCI+UGxlYXNlIHNpZ24gaW48L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0RW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e3VzZXIuZW1haWx9XG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJpbnB1dEVtYWlsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0UGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VyLnBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGlkPVwiaW5wdXRQYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfY3NyZl90b2tlblwiIHZhbHVlPXtjc3JmX3Rva2VufSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiX3JlbWVtYmVyX21lXCIgLz4gUmVtZW1iZXIgbWVcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZ3JhZGllbnRcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgU2lnbiBpblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdj5Eb24ndCBoYXZlIGFuIGFjY291bnQgeWV0PyA8YSBocmVmPVwiL3JlZ2lzdGVyXCI+Q3JlYXRlIGFuIGFjY291bnQ8L2E+PC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgUmF3SHRtbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2NoaWxkcmVuLCBjbGFzc05hbWUgPSBcIlwifSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY2hpbGRyZW4ucmVwbGFjZSgvXFxuL2csICc8YnIgLz4nKX19IC8+O1xuICB9XG59XG5cbmNvbnN0IFJlYWRpbmcgPSAoeyB0aXRsZSwgY29udGVudSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbkJsb2NrOiAxMiB9fT57dGl0bGV9PC9oMj5cbiAgICAgIDxSYXdIdG1sPntjb250ZW51fTwvUmF3SHRtbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWRpbmc7XG4iLCJmdW5jdGlvbiByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlYWN0Q29udHJvbGxlcnMgPSB7fTtcbiAgICBjb25zdCBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMgPSAocikgPT4ge1xuICAgICAgICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IChyZWFjdENvbnRyb2xsZXJzW2tleV0gPSByKGtleSkuZGVmYXVsdCkpO1xuICAgIH07XG4gICAgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzKGNvbnRleHQpO1xuICAgIHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0uanN4YF0gfHwgcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LnRzeGBdO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QgY29udHJvbGxlciBcIicgKyBuYW1lICsgJ1wiIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xufVxuXG5leHBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWlyZSQkMCBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbnZhciBjcmVhdGVSb290O1xuXG52YXIgbSA9IHJlcXVpcmUkJDA7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBjcmVhdGVSb290ID0gbS5jcmVhdGVSb290O1xuICBtLmh5ZHJhdGVSb290O1xufSBlbHNlIHtcbiAgdmFyIGkgPSBtLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICBjcmVhdGVSb290ID0gZnVuY3Rpb24oYywgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uY3JlYXRlUm9vdChjLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0JywgeyBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsIHByb3BzOiBwcm9wcyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbXBvbmVudCBzcGVjaWZpZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCh0aGlzLmNvbXBvbmVudFZhbHVlKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyUmVhY3RFbGVtZW50KFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcywgbnVsbCkpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QudW5tb3VudCgpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3VubW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZW5kZXJSZWFjdEVsZW1lbnQocmVhY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGlmICghZWxlbWVudC5yb290KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJvb3QgPSBjcmVhdGVSb290KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5yb290LnJlbmRlcihyZWFjdEVsZW1lbnQpO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAncmVhY3QnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgY29tcG9uZW50OiBTdHJpbmcsXG4gICAgcHJvcHM6IE9iamVjdCxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsIlJlYWN0IiwiRXZhbHVhdGlvbiIsIlJlYWRpbmciLCJBcHByZW50aXNzYWdlIiwiY3VycmVudCIsImxlc3NvbiIsIkpTT04iLCJwYXJzZSIsInVzZVN0YXRlIiwidGFiIiwic2V0VGFiIiwiY2hhbmdlVGFiIiwiaW5kZXgiLCJkaXNwbGF5IiwicHJlcmVxdWlzIiwibWFwIiwicHJlcmVxdWkiLCJsaWJlbGxlIiwidGl0bGUiLCJjb250ZW51IiwicXVlc3Rpb25zIiwiSGVsbG8iLCJCYW5uZXIiLCJlbWFpbCIsInVzZXJuYW1lIiwiYWdlIiwibGV2ZWwiLCJsZXZlbHMiLCJwcm9ncmVzc2lvbiIsIm5pdmVhdXgiLCJwcm9ncmVzcyIsIm5pdmVhdSIsImlkIiwidXNlRWZmZWN0IiwiZ2V0VGltZSIsInRvZGF5IiwiRGF0ZSIsInRpbWUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwic2V0VGltZSIsImNsb2NrIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiTGVhZGVyQm9hcmQiLCJwcm9ncmVzc2lvbnMiLCJ1c2VycyIsInVzZXIiLCJzY29yZSIsIkxpc3RMZXNzb25zIiwibGVzc29ucyIsIm5vdGVzIiwicG9zaXRpb24iLCJhcHByZW50aXNzYWdlIiwibm90ZSIsInN0YWRlIiwiTG9naW5Gb3JtIiwibGFzdF91c2VybmFtZSIsImVycm9yIiwiY3NyZl90b2tlbiIsInBhc3N3b3JkIiwic2V0VXNlciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwicHJldiIsIlB1cmVDb21wb25lbnQiLCJSYXdIdG1sIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIl9faHRtbCIsInJlcGxhY2UiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5CbG9jayIsInJlYWN0Q29udHJvbGxlcnMiLCJpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMiLCJyIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJ3aW5kb3ciLCJyZXNvbHZlUmVhY3RDb21wb25lbnQiLCJjb21wb25lbnQiLCJFcnJvciIsInJlcXVpcmUkJDAiLCJjcmVhdGVSb290IiwibSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImh5ZHJhdGVSb290IiwiaSIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiYyIsIm8iLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJkZWZhdWx0XzEiLCJwcm9wc1ZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudFZhbHVlIiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb21wb25lbnROYW1lIiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ2YWx1ZXMiLCJTdHJpbmciLCJPYmplY3QiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==