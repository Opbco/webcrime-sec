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
	"./Question.jsx": "./assets/react/controllers/Question.jsx",
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
    onClick: function onClick() {
      return changeTab(0);
    },
    className: "tabs-option ".concat(tab === 0 ? 'selected' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Prerequis")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: function onClick() {
      return changeTab(1);
    },
    className: "tabs-option ".concat(tab === 1 ? 'selected' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Lesson")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: function onClick() {
      return changeTab(2);
    },
    className: "tabs-option ".concat(tab === 2 ? 'selected' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Evaluation"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Question */ "./assets/react/controllers/Question.jsx");
/* harmony import */ var _styles_evaluation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/evaluation.css */ "./assets/react/controllers/styles/evaluation.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Evaluation = function Evaluation(_ref) {
  var questions = _ref.questions;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    score = _React$useState2[0],
    setScore = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    isSubmited = _React$useState4[0],
    setIsSubmited = _React$useState4[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "evaluation-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "evaluation-header-title"
  }, "Evaluation des acquis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, " ", score, " / 10 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "questions"
  }, questions.map(function (question, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Question__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: "question-".concat(index),
      quest: question,
      isSubmited: isSubmited,
      setScore: setScore
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "evaluation-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setIsSubmited(true);
    }
  }, "Validate")));
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

/***/ "./assets/react/controllers/Question.jsx":
/*!***********************************************!*\
  !*** ./assets/react/controllers/Question.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_question_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/question.css */ "./assets/react/controllers/styles/question.css");
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


function getNumberAnswer(responses) {
  return responses.reduce(function (s, c) {
    return c.status ? s + 1 : s;
  }, 0);
}
var Question = function Question(_ref) {
  var quest = _ref.quest,
    isSubmited = _ref.isSubmited,
    setScore = _ref.setScore;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(function () {
      var reponses = quest.responses.map(function (resp) {
        return _objectSpread(_objectSpread({}, resp), {}, {
          selected: false,
          score: resp.status ? 1 : 0
        });
      });
      return _objectSpread(_objectSpread({}, quest), {}, {
        nb: getNumberAnswer(quest.responses),
        responses: reponses
      });
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    question = _React$useState2[0],
    setQuestion = _React$useState2[1];
  var selectResponse = function selectResponse(i) {
    setQuestion(function (prev) {
      var select = !prev.responses[i].selected;
      var isCorrect = prev.responses[i].status === true;
      var reponses = prev.responses.map(function (resp, ind) {
        if (i === ind) return _objectSpread(_objectSpread({}, resp), {}, {
          selected: select
        });
        if (select && prev.nb === 1) return _objectSpread(_objectSpread({}, resp), {}, {
          selected: false
        });
        return resp;
      });
      return _objectSpread(_objectSpread({}, prev), {}, {
        responses: reponses
      });
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var score = question.responses.reduce(function (s, v) {
      return v.selected && v.status == true ? s + 1 : v.selected && v.status == false ? s - 1 : s;
    }, 0);
    console.log(score);
    if (isSubmited) setScore(function (prev) {
      return prev + score;
    });
  }, [isSubmited]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "question"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "question-title"
  }, question.libelle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "question-responses"
  }, question.responses.map(function (reponse, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: "response-".concat(index),
      onClick: function onClick() {
        return selectResponse(index);
      },
      className: "question-response ".concat(reponse.selected ? "selected" : "", " ").concat(isSubmited && reponse.status == true ? 'valid' : '')
    }, reponse.libelle);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Question);

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
          __html: children
        }
      });
    }
  }]);
  return RawHtml;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
var Reading = function Reading(_ref) {
  var title = _ref.title,
    contenu = _ref.contenu;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
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

/***/ "./assets/react/controllers/styles/evaluation.css":
/*!********************************************************!*\
  !*** ./assets/react/controllers/styles/evaluation.css ***!
  \********************************************************/
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

/***/ "./assets/react/controllers/styles/question.css":
/*!******************************************************!*\
  !*** ./assets/react/controllers/styles/question.css ***!
  \******************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgXFwuKGolN0N0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQXBwcmVudGlzc2FnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0Jhbm5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0V2YWx1YXRpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9IZWxsby5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0xlYWRlckJvYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvTGlzdExlc3NvbnMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9Mb2dpbkZvcm0uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9RdWVzdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL1JlYWRpbmcuanN4Iiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL3N0eWxlcy9MZWFkZXJzLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvc3R5bGVzL2FwcE5vdGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvc3R5bGVzL2FwcHJlbnRpc3NhZ2UuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9zdHlsZXMvYmFubmVyLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvc3R5bGVzL2V2YWx1YXRpb24uY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9zdHlsZXMvbG9naW5mb3JtLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvc3R5bGVzL3F1ZXN0aW9uLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL0FwcHJlbnRpc3NhZ2UuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQXBwcmVudGlzc2FnZS5qc3hcIixcblx0XCIuL0Jhbm5lci5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9CYW5uZXIuanN4XCIsXG5cdFwiLi9FdmFsdWF0aW9uLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0V2YWx1YXRpb24uanN4XCIsXG5cdFwiLi9IZWxsby5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9IZWxsby5qc3hcIixcblx0XCIuL0xlYWRlckJvYXJkLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0xlYWRlckJvYXJkLmpzeFwiLFxuXHRcIi4vTGlzdExlc3NvbnMuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvTGlzdExlc3NvbnMuanN4XCIsXG5cdFwiLi9Mb2dpbkZvcm0uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvTG9naW5Gb3JtLmpzeFwiLFxuXHRcIi4vUXVlc3Rpb24uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvUXVlc3Rpb24uanN4XCIsXG5cdFwiLi9SZWFkaW5nLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL1JlYWRpbmcuanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xuXG4vLyBSZWdpc3RlcnMgUmVhY3QgY29udHJvbGxlciBjb21wb25lbnRzIHRvIGFsbG93IGxvYWRpbmcgdGhlbSBmcm9tIFR3aWdcbi8vXG4vLyBSZWFjdCBjb250cm9sbGVyIGNvbXBvbmVudHMgYXJlIGNvbXBvbmVudHMgdGhhdCBhcmUgbWVhbnQgdG8gYmUgcmVuZGVyZWRcbi8vIGZyb20gVHdpZy4gVGhlc2UgY29tcG9uZW50IHRoZW4gcmVseSBvbiBvdGhlciBjb21wb25lbnRzIHRoYXQgd29uJ3QgYmUgY2FsbGVkXG4vLyBkaXJlY3RseSBmcm9tIFR3aWcuXG4vL1xuLy8gQnkgcHV0dGluZyBvbmx5IGNvbnRyb2xsZXIgY29tcG9uZW50cyBpbiBgcmVhY3QvY29udHJvbGxlcnNgLCB5b3UgZW5zdXJlIHRoYXRcbi8vIGludGVybmFsIGNvbXBvbmVudHMgd29uJ3QgYmUgYXV0b21hdGljYWxseSBpbmNsdWRlZCBpbiB5b3VyIEpTIGJ1aWx0IGZpbGUgaWZcbi8vIHRoZXkgYXJlIG5vdCBuZWNlc3NhcnkuXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEV2YWx1YXRpb24gZnJvbSBcIi4vRXZhbHVhdGlvblwiO1xuaW1wb3J0IFJlYWRpbmcgZnJvbSBcIi4vUmVhZGluZ1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy9hcHByZW50aXNzYWdlLmNzc1wiO1xuXG5jb25zdCBBcHByZW50aXNzYWdlID0gKHsgY3VycmVudCB9KSA9PiB7XG4gIGNvbnN0IGxlc3NvbiA9IEpTT04ucGFyc2UoY3VycmVudCk7XG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuICBjb25zdCBjaGFuZ2VUYWIgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRUYWIoaW5kZXgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZVRhYigwKX0gY2xhc3NOYW1lPXtgdGFicy1vcHRpb24gJHt0YWI9PT0wPyAnc2VsZWN0ZWQnOicnfWB9PlxuICAgICAgICAgIDxzcGFuPlByZXJlcXVpczwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2hhbmdlVGFiKDEpfSBjbGFzc05hbWU9e2B0YWJzLW9wdGlvbiAke3RhYj09PTE/ICdzZWxlY3RlZCc6Jyd9YH0+XG4gICAgICAgICAgPHNwYW4+TGVzc29uPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VUYWIoMil9IGNsYXNzTmFtZT17YHRhYnMtb3B0aW9uICR7dGFiPT09Mj8gJ3NlbGVjdGVkJzonJ31gfT5cbiAgICAgICAgICA8c3Bhbj5FdmFsdWF0aW9uPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItYm9keVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHRhYiA9PT0gMCA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7bGVzc29uLnByZXJlcXVpcy5tYXAoKHByZXJlcXVpLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtgcHJlcmVxdWktJHtpbmRleH1gfT57cHJlcmVxdWkubGliZWxsZX08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogdGFiID09PSAxID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWFkaW5nIHRpdGxlPXtsZXNzb24udGl0bGV9IGNvbnRlbnU9e2xlc3Nvbi5jb250ZW51fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiB0YWIgPT09IDIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEV2YWx1YXRpb24gcXVlc3Rpb25zPXtsZXNzb24ucXVlc3Rpb25zfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwcmVudGlzc2FnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2Jhbm5lci5jc3NcIjtcbmltcG9ydCBIZWxsbyBmcm9tIFwiLi9IZWxsb1wiO1xuXG5jb25zdCBCYW5uZXIgPSAoeyBlbWFpbCwgdXNlcm5hbWUsIGFnZSwgbGV2ZWwsIGxldmVscywgcHJvZ3Jlc3Npb24gfSkgPT4ge1xuICBjb25zdCBuaXZlYXV4ID0gSlNPTi5wYXJzZShsZXZlbHMpO1xuICBjb25zdCBwcm9ncmVzcyA9IEpTT04ucGFyc2UocHJvZ3Jlc3Npb24pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby10ZXh0XCI+PEhlbGxvIC8+IFdFQi1TRUMtQ1JJTUU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28taW1nXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby12LmpwZWdcIiBhbHQ9XCJMb2dvXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1kZXRhaWxzXCI+XG4gICAgICAgICAgICBXZWxjb21lLCA8c3Bhbj57dXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1sb2dvdXRcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9nb3V0XCIgY2xhc3NOYW1lPVwiYnRuLWxpbmtcIj5cbiAgICAgICAgICAgICAgTG9nIG91dFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIj57XG4gICAgICAgIG5pdmVhdXgubWFwKChuaXZlYXUsIGluZGV4KT0+KFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBkYXRhLWxhYmVsPXtuaXZlYXUubGliZWxsZX0gY2xhc3NOYW1lPXtgcHJvZ3Jlc3Mtc3RlcCAke25pdmVhdS5pZCA8PSBwcm9ncmVzcy5uaXZlYXUuaWQgPyAncGFzc2VkJyA6ICcnfSAke25pdmVhdS5pZCA9PT0gcHJvZ3Jlc3Mubml2ZWF1LmlkID8gJ2N1cnJlbnQnIDogJyd9YH0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgIH08L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBRdWVzdGlvbiBmcm9tICcuL1F1ZXN0aW9uJ1xuaW1wb3J0ICcuL3N0eWxlcy9ldmFsdWF0aW9uLmNzcydcblxuY29uc3QgRXZhbHVhdGlvbiA9ICh7cXVlc3Rpb25zfSkgPT4ge1xuICAgIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2lzU3VibWl0ZWQsIHNldElzU3VibWl0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmFsdWF0aW9uLWhlYWRlclwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImV2YWx1YXRpb24taGVhZGVyLXRpdGxlXCI+RXZhbHVhdGlvbiBkZXMgYWNxdWlzPC9oMj5cbiAgICAgICAgICAgIDxoMz4ge3Njb3JlIH0gLyAxMCA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbnNcIj5cbiAgICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxdWVzdGlvbiwgaW5kZXgpPT4oXG4gICAgICAgICAgICAgICAgPFF1ZXN0aW9uIGtleT17YHF1ZXN0aW9uLSR7aW5kZXh9YH0gcXVlc3Q9e3F1ZXN0aW9ufSBpc1N1Ym1pdGVkPXtpc1N1Ym1pdGVkfSBzZXRTY29yZT17c2V0U2NvcmV9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZhbHVhdGlvbi1mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldElzU3VibWl0ZWQodHJ1ZSl9PlZhbGlkYXRlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2YWx1YXRpb24iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuZnVuY3Rpb24gZ2V0VGltZSgpe1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0aW1lID0gKHRvZGF5LmdldEhvdXJzKCk8MTA/XCIwXCIrdG9kYXkuZ2V0SG91cnMoKTp0b2RheS5nZXRIb3VycygpKSArIFwiOlwiICsgKHRvZGF5LmdldE1pbnV0ZXMoKTwxMD9cIjBcIit0b2RheS5nZXRNaW51dGVzKCk6dG9kYXkuZ2V0TWludXRlcygpKSsgXCI6XCIgKyAodG9kYXkuZ2V0U2Vjb25kcygpPDEwP1wiMFwiK3RvZGF5LmdldFNlY29uZHMoKTp0b2RheS5nZXRTZWNvbmRzKCkpO1xuICAgIHJldHVybiB0aW1lO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoKCk9PmdldFRpbWUoKSk7XG5cbiAgdXNlRWZmZWN0KCgpPT57XG5cbiAgICBjb25zdCBjbG9jayA9IHNldEludGVydmFsKCgpPT57c2V0VGltZShnZXRUaW1lKCkpfSwgMTAwMCk7XG4gICAgcmV0dXJuICgpPT57XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2xvY2spO1xuICAgIH1cbiAgfSxbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3Ryb25nPnt0aW1lfTwvc3Ryb25nPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICcuL3N0eWxlcy9MZWFkZXJzLmNzcyc7XG5cbmNvbnN0IExlYWRlckJvYXJkID0gKHsgcHJvZ3Jlc3Npb25zIH0pID0+IHtcbiAgY29uc3QgdXNlcnMgPSBKU09OLnBhcnNlKHByb2dyZXNzaW9ucyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhZGVyYm9hcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNyb3duXCI+PC9pPlxuICAgICAgICAgIDxoMj5MZWFkZXJzPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2BsZWFkZXItJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICA8bWFyaz57dXNlci51c2VyLnVzZXJuYW1lfSAoe3VzZXIudXNlci5hZ2V9IGFucyk8L21hcms+XG4gICAgICAgICAgICAgICAgPHNtYWxsPnt1c2VyLnNjb3JlfTwvc21hbGw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGVhZGVyQm9hcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9hcHBOb3Rlcy5jc3NcIjtcblxuY29uc3QgTGlzdExlc3NvbnMgPSAoeyBsZXNzb25zLCBwcm9ncmVzc2lvbiwgY3VycmVudCB9KSA9PiB7XG4gIGNvbnN0IG5vdGVzID0gSlNPTi5wYXJzZShsZXNzb25zKTtcbiAgY29uc3QgcG9zaXRpb24gPSBKU09OLnBhcnNlKHByb2dyZXNzaW9uKTtcbiAgY29uc3QgbGVzc29uID0gY3VycmVudCB8fCBwb3NpdGlvbi5uaXZlYXUuYXBwcmVudGlzc2FnZT8uaWQgfHwgMTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLW5vdGVzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNyb3duXCI+PC9pPlxuICAgICAgICA8aDI+QXBwcmVudGlzc2FnZXM8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1saXN0LW5vdGVzXCI+XG4gICAgICAgIHtub3Rlcy5tYXAoKG5vdGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtgbm90ZXMtJHtpbmRleH1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBwLWxpc3Qtbm90ZSAke1xuICAgICAgICAgICAgICBub3RlLm5pdmVhdS5pZCA8PSBwb3NpdGlvbi5uaXZlYXUuaWQgPyBcInBhc3NlZFwiIDogXCJcIlxuICAgICAgICAgICAgfSAke25vdGUuaWQgPT09IGxlc3NvbiA/IFwiY3VycmVudFwiIDogXCJcIn1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhIGhyZWY9e2AvbGVhcm4vJHtub3RlLmlkfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1saXN0LW5vdGVfdGl0bGVcIj57bm90ZS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtbGlzdC1ub3RlX2Zvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPk5pdmVhdSA6IHtub3RlLm5pdmVhdS5saWJlbGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5TdGFkZSA6IHtub3RlLm5pdmVhdS5zdGFkZS5saWJlbGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0TGVzc29ucztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy9sb2dpbmZvcm0uY3NzXCI7XG5cbmNvbnN0IExvZ2luRm9ybSA9ICh7IGxhc3RfdXNlcm5hbWUsIGVycm9yLCBjc3JmX3Rva2VuIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoeyBlbWFpbDogbGFzdF91c2VybmFtZSwgcGFzc3dvcmQ6IFwiXCIgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSBlLnRhcmdldDtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgc2V0VXNlcigocHJldikgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY2FyZC1mb3JtXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj57ZXJyb3J9PC9kaXY+fVxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZy1oMVwiPlBsZWFzZSBzaWduIGluPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dEVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VyLmVtYWlsfVxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwiaW5wdXRFbWFpbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dFBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17dXNlci5wYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBpZD1cImlucHV0UGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX2NzcmZfdG9rZW5cIiB2YWx1ZT17Y3NyZl90b2tlbn0gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIl9yZW1lbWJlcl9tZVwiIC8+IFJlbWVtYmVyIG1lXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWdyYWRpZW50XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXY+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50IHlldD8gPGEgaHJlZj1cIi9yZWdpc3RlclwiPkNyZWF0ZSBhbiBhY2NvdW50PC9hPjwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9zdHlsZXMvcXVlc3Rpb24uY3NzXCI7XG5cbmZ1bmN0aW9uIGdldE51bWJlckFuc3dlcihyZXNwb25zZXMpIHtcbiAgcmV0dXJuIHJlc3BvbnNlcy5yZWR1Y2UoKHMsIGMpID0+IChjLnN0YXR1cyA/IHMgKyAxIDogcyksIDApO1xufVxuXG5jb25zdCBRdWVzdGlvbiA9ICh7IHF1ZXN0LCBpc1N1Ym1pdGVkLCBzZXRTY29yZSB9KSA9PiB7XG4gIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gUmVhY3QudXNlU3RhdGUoKCkgPT4ge1xuICAgIGNvbnN0IHJlcG9uc2VzID0gcXVlc3QucmVzcG9uc2VzLm1hcCgocmVzcCkgPT4gKHtcbiAgICAgIC4uLnJlc3AsXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICBzY29yZTogcmVzcC5zdGF0dXMgPyAxIDogMCxcbiAgICB9KSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnF1ZXN0LFxuICAgICAgbmI6IGdldE51bWJlckFuc3dlcihxdWVzdC5yZXNwb25zZXMpLFxuICAgICAgcmVzcG9uc2VzOiByZXBvbnNlcyxcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBzZWxlY3RSZXNwb25zZSA9IChpKSA9PiB7XG4gICAgc2V0UXVlc3Rpb24oKHByZXYpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdCA9ICFwcmV2LnJlc3BvbnNlc1tpXS5zZWxlY3RlZDtcbiAgICAgIGNvbnN0IGlzQ29ycmVjdCA9IHByZXYucmVzcG9uc2VzW2ldLnN0YXR1cyA9PT0gdHJ1ZTtcbiAgICAgIGNvbnN0IHJlcG9uc2VzID0gcHJldi5yZXNwb25zZXMubWFwKChyZXNwLCBpbmQpID0+IHtcbiAgICAgICAgaWYgKGkgPT09IGluZCkgcmV0dXJuIHsgLi4ucmVzcCwgc2VsZWN0ZWQ6IHNlbGVjdCB9O1xuICAgICAgICBpZiAoc2VsZWN0ICYmIHByZXYubmIgPT09IDEpIHJldHVybiB7IC4uLnJlc3AsIHNlbGVjdGVkOiBmYWxzZSB9O1xuICAgICAgICByZXR1cm4gcmVzcDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgLi4ucHJldiwgcmVzcG9uc2VzOiByZXBvbnNlcyB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2NvcmUgPSBxdWVzdGlvbi5yZXNwb25zZXMucmVkdWNlKFxuICAgICAgKHMsIHYpID0+XG4gICAgICAgIHYuc2VsZWN0ZWQgJiYgdi5zdGF0dXMgPT0gdHJ1ZVxuICAgICAgICAgID8gcyArIDFcbiAgICAgICAgICA6IHYuc2VsZWN0ZWQgJiYgdi5zdGF0dXMgPT0gZmFsc2VcbiAgICAgICAgICA/IHMgLSAxXG4gICAgICAgICAgOiBzLFxuICAgICAgMFxuICAgICk7XG4gICAgY29uc29sZS5sb2coc2NvcmUpO1xuICAgIGlmIChpc1N1Ym1pdGVkKSBzZXRTY29yZSgocHJldikgPT4gcHJldiArIHNjb3JlKTtcbiAgfSwgW2lzU3VibWl0ZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb24tdGl0bGVcIj57cXVlc3Rpb24ubGliZWxsZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb24tcmVzcG9uc2VzXCI+XG4gICAgICAgIHtxdWVzdGlvbi5yZXNwb25zZXMubWFwKChyZXBvbnNlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17YHJlc3BvbnNlLSR7aW5kZXh9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdFJlc3BvbnNlKGluZGV4KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHF1ZXN0aW9uLXJlc3BvbnNlICR7XG4gICAgICAgICAgICAgIHJlcG9uc2Uuc2VsZWN0ZWQgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgICAgICAgICB9ICR7aXNTdWJtaXRlZCAmJiByZXBvbnNlLnN0YXR1cz09dHJ1ZT8gJ3ZhbGlkJzogJyd9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cmVwb25zZS5saWJlbGxlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb247XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgUmF3SHRtbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2NoaWxkcmVuLCBjbGFzc05hbWUgPSBcIlwifSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY2hpbGRyZW59fSAvPjtcbiAgfVxufVxuXG5jb25zdCBSZWFkaW5nID0gKHsgdGl0bGUsIGNvbnRlbnUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5CbG9jazogMTIgfX0+e3RpdGxlfTwvaDI+XG4gICAgICA8UmF3SHRtbD57Y29udGVudX08L1Jhd0h0bWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFkaW5nO1xuIiwiZnVuY3Rpb24gcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZWFjdENvbnRyb2xsZXJzID0ge307XG4gICAgY29uc3QgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzID0gKHIpID0+IHtcbiAgICAgICAgci5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiAocmVhY3RDb250cm9sbGVyc1trZXldID0gcihrZXkpLmRlZmF1bHQpKTtcbiAgICB9O1xuICAgIGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyhjb250ZXh0KTtcbiAgICB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LmpzeGBdIHx8IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS50c3hgXTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0IGNvbnRyb2xsZXIgXCInICsgbmFtZSArICdcIiBkb2VzIG5vdCBleGlzdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlcXVpcmUkJDAgZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG52YXIgY3JlYXRlUm9vdDtcblxudmFyIG0gPSByZXF1aXJlJCQwO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgY3JlYXRlUm9vdCA9IG0uY3JlYXRlUm9vdDtcbiAgbS5oeWRyYXRlUm9vdDtcbn0gZWxzZSB7XG4gIHZhciBpID0gbS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcbiAgY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmNyZWF0ZVJvb3QoYywgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGw7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIHsgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLCBwcm9wczogcHJvcHMgfSk7XG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb21wb25lbnQgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX3JlbmRlclJlYWN0RWxlbWVudChSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMsIG51bGwpKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yb290LnVubW91bnQoKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd1bm1vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVuZGVyUmVhY3RFbGVtZW50KHJlYWN0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICBpZiAoIWVsZW1lbnQucm9vdCkge1xuICAgICAgICAgICAgZWxlbWVudC5yb290ID0gY3JlYXRlUm9vdCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQucm9vdC5yZW5kZXIocmVhY3RFbGVtZW50KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ3JlYWN0JyB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIGNvbXBvbmVudDogU3RyaW5nLFxuICAgIHByb3BzOiBPYmplY3QsXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJSZWFjdCIsIkV2YWx1YXRpb24iLCJSZWFkaW5nIiwiQXBwcmVudGlzc2FnZSIsImN1cnJlbnQiLCJsZXNzb24iLCJKU09OIiwicGFyc2UiLCJ1c2VTdGF0ZSIsInRhYiIsInNldFRhYiIsImNoYW5nZVRhYiIsImluZGV4IiwiZGlzcGxheSIsInByZXJlcXVpcyIsIm1hcCIsInByZXJlcXVpIiwibGliZWxsZSIsInRpdGxlIiwiY29udGVudSIsInF1ZXN0aW9ucyIsIkhlbGxvIiwiQmFubmVyIiwiZW1haWwiLCJ1c2VybmFtZSIsImFnZSIsImxldmVsIiwibGV2ZWxzIiwicHJvZ3Jlc3Npb24iLCJuaXZlYXV4IiwicHJvZ3Jlc3MiLCJuaXZlYXUiLCJpZCIsIlF1ZXN0aW9uIiwic2NvcmUiLCJzZXRTY29yZSIsImlzU3VibWl0ZWQiLCJzZXRJc1N1Ym1pdGVkIiwicXVlc3Rpb24iLCJ1c2VFZmZlY3QiLCJnZXRUaW1lIiwidG9kYXkiLCJEYXRlIiwidGltZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJzZXRUaW1lIiwiY2xvY2siLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJMZWFkZXJCb2FyZCIsInByb2dyZXNzaW9ucyIsInVzZXJzIiwidXNlciIsIkxpc3RMZXNzb25zIiwibGVzc29ucyIsIm5vdGVzIiwicG9zaXRpb24iLCJhcHByZW50aXNzYWdlIiwibm90ZSIsInN0YWRlIiwiTG9naW5Gb3JtIiwibGFzdF91c2VybmFtZSIsImVycm9yIiwiY3NyZl90b2tlbiIsInBhc3N3b3JkIiwic2V0VXNlciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwicHJldiIsImdldE51bWJlckFuc3dlciIsInJlc3BvbnNlcyIsInJlZHVjZSIsInMiLCJjIiwic3RhdHVzIiwicXVlc3QiLCJyZXBvbnNlcyIsInJlc3AiLCJzZWxlY3RlZCIsIm5iIiwic2V0UXVlc3Rpb24iLCJzZWxlY3RSZXNwb25zZSIsImkiLCJzZWxlY3QiLCJpc0NvcnJlY3QiLCJpbmQiLCJ2IiwicmVwb25zZSIsIlB1cmVDb21wb25lbnQiLCJSYXdIdG1sIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIl9faHRtbCIsInRleHRBbGlnbiIsIm1hcmdpbkJsb2NrIiwicmVhY3RDb250cm9sbGVycyIsImltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyIsInIiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIndpbmRvdyIsInJlc29sdmVSZWFjdENvbXBvbmVudCIsImNvbXBvbmVudCIsIkVycm9yIiwicmVxdWlyZSQkMCIsImNyZWF0ZVJvb3QiLCJtIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiaHlkcmF0ZVJvb3QiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsIm8iLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJkZWZhdWx0XzEiLCJwcm9wc1ZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudFZhbHVlIiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb21wb25lbnROYW1lIiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ2YWx1ZXMiLCJTdHJpbmciLCJPYmplY3QiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==