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
	"./Counter.jsx": "./assets/react/controllers/Counter.jsx",
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
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    evaluate = _React$useState4[0],
    setEvaluate = _React$useState4[1];
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
      changeTab(2);
      setEvaluate(true);
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
    questions: lesson.questions,
    evaluating: evaluate,
    setEvaluating: setEvaluate
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

/***/ "./assets/react/controllers/Counter.jsx":
/*!**********************************************!*\
  !*** ./assets/react/controllers/Counter.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Counter = function Counter(_ref) {
  var time = _ref.time,
    isSubmited = _ref.isSubmited,
    evaluating = _ref.evaluating,
    setIsSubmited = _ref.setIsSubmited;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(time),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    counterDown = _React$useState2[0],
    setCounterDown = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    var counterstep, counterStop;
    if (evaluating) {
      counterstep = setInterval(function () {
        if (isSubmited === false) setCounterDown(function (prev) {
          return prev - 1;
        });
      }, 1000);
      counterStop = setTimeout(function () {
        setIsSubmited(true);
        clearInterval(counterstep);
      }, (time + 1) * 1000);
    }
    if (isSubmited) clearInterval(counterstep);
    return function () {
      clearInterval(counterstep);
    };
  }, [evaluating, isSubmited]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      color: counterDown < 30 ? "red" : "green"
    }
  }, counterDown);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

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
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counter */ "./assets/react/controllers/Counter.jsx");
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Question */ "./assets/react/controllers/Question.jsx");
/* harmony import */ var _styles_evaluation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/evaluation.css */ "./assets/react/controllers/styles/evaluation.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Evaluation = function Evaluation(_ref) {
  var questions = _ref.questions,
    evaluating = _ref.evaluating;
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
  }, "Evaluation des acquis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Counter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    time: 90,
    evaluating: evaluating,
    setIsSubmited: setIsSubmited,
    isSubmited: isSubmited
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, " ", score, " / 10 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "questions"
  }, questions.map(function (question, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Question__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUc7RUFDZjNCLFNBQVMsRUFBRTRCLE1BQU07RUFDakIxQyxLQUFLLEVBQUUyQztBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMxREQ7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9BcHByZW50aXNzYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQmFubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQ291bnRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0V2YWx1YXRpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9IZWxsby5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0xlYWRlckJvYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvTGlzdExlc3NvbnMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9Mb2dpbkZvcm0uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9RdWVzdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL1JlYWRpbmcuanN4Iiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL3N0eWxlcy9MZWFkZXJzLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvc3R5bGVzL2FwcE5vdGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvc3R5bGVzL2FwcHJlbnRpc3NhZ2UuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9zdHlsZXMvYmFubmVyLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvc3R5bGVzL2V2YWx1YXRpb24uY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9zdHlsZXMvbG9naW5mb3JtLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvc3R5bGVzL3F1ZXN0aW9uLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL0FwcHJlbnRpc3NhZ2UuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvQXBwcmVudGlzc2FnZS5qc3hcIixcblx0XCIuL0Jhbm5lci5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9CYW5uZXIuanN4XCIsXG5cdFwiLi9Db3VudGVyLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0NvdW50ZXIuanN4XCIsXG5cdFwiLi9FdmFsdWF0aW9uLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0V2YWx1YXRpb24uanN4XCIsXG5cdFwiLi9IZWxsby5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9IZWxsby5qc3hcIixcblx0XCIuL0xlYWRlckJvYXJkLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0xlYWRlckJvYXJkLmpzeFwiLFxuXHRcIi4vTGlzdExlc3NvbnMuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvTGlzdExlc3NvbnMuanN4XCIsXG5cdFwiLi9Mb2dpbkZvcm0uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvTG9naW5Gb3JtLmpzeFwiLFxuXHRcIi4vUXVlc3Rpb24uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvUXVlc3Rpb24uanN4XCIsXG5cdFwiLi9SZWFkaW5nLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL1JlYWRpbmcuanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xuXG4vLyBSZWdpc3RlcnMgUmVhY3QgY29udHJvbGxlciBjb21wb25lbnRzIHRvIGFsbG93IGxvYWRpbmcgdGhlbSBmcm9tIFR3aWdcbi8vXG4vLyBSZWFjdCBjb250cm9sbGVyIGNvbXBvbmVudHMgYXJlIGNvbXBvbmVudHMgdGhhdCBhcmUgbWVhbnQgdG8gYmUgcmVuZGVyZWRcbi8vIGZyb20gVHdpZy4gVGhlc2UgY29tcG9uZW50IHRoZW4gcmVseSBvbiBvdGhlciBjb21wb25lbnRzIHRoYXQgd29uJ3QgYmUgY2FsbGVkXG4vLyBkaXJlY3RseSBmcm9tIFR3aWcuXG4vL1xuLy8gQnkgcHV0dGluZyBvbmx5IGNvbnRyb2xsZXIgY29tcG9uZW50cyBpbiBgcmVhY3QvY29udHJvbGxlcnNgLCB5b3UgZW5zdXJlIHRoYXRcbi8vIGludGVybmFsIGNvbXBvbmVudHMgd29uJ3QgYmUgYXV0b21hdGljYWxseSBpbmNsdWRlZCBpbiB5b3VyIEpTIGJ1aWx0IGZpbGUgaWZcbi8vIHRoZXkgYXJlIG5vdCBuZWNlc3NhcnkuXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEV2YWx1YXRpb24gZnJvbSBcIi4vRXZhbHVhdGlvblwiO1xuaW1wb3J0IFJlYWRpbmcgZnJvbSBcIi4vUmVhZGluZ1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy9hcHByZW50aXNzYWdlLmNzc1wiO1xuXG5jb25zdCBBcHByZW50aXNzYWdlID0gKHsgY3VycmVudCB9KSA9PiB7XG4gIGNvbnN0IGxlc3NvbiA9IEpTT04ucGFyc2UoY3VycmVudCk7XG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2V2YWx1YXRlLCBzZXRFdmFsdWF0ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY2hhbmdlVGFiID0gKGluZGV4KSA9PiB7XG4gICAgc2V0VGFiKGluZGV4KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VUYWIoMCl9IGNsYXNzTmFtZT17YHRhYnMtb3B0aW9uICR7dGFiPT09MD8gJ3NlbGVjdGVkJzonJ31gfT5cbiAgICAgICAgICA8c3Bhbj5QcmVyZXF1aXM8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNoYW5nZVRhYigxKX0gY2xhc3NOYW1lPXtgdGFicy1vcHRpb24gJHt0YWI9PT0xPyAnc2VsZWN0ZWQnOicnfWB9PlxuICAgICAgICAgIDxzcGFuPkxlc3Nvbjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge2NoYW5nZVRhYigyKTsgc2V0RXZhbHVhdGUodHJ1ZSl9fSBjbGFzc05hbWU9e2B0YWJzLW9wdGlvbiAke3RhYj09PTI/ICdzZWxlY3RlZCc6Jyd9YH0+XG4gICAgICAgICAgPHNwYW4+RXZhbHVhdGlvbjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWJvZHlcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiB0YWIgPT09IDAgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2xlc3Nvbi5wcmVyZXF1aXMubWFwKChwcmVyZXF1aSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17YHByZXJlcXVpLSR7aW5kZXh9YH0+e3ByZXJlcXVpLmxpYmVsbGV9PC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHRhYiA9PT0gMSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8UmVhZGluZyB0aXRsZT17bGVzc29uLnRpdGxlfSBjb250ZW51PXtsZXNzb24uY29udGVudX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogdGFiID09PSAyID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxFdmFsdWF0aW9uIHF1ZXN0aW9ucz17bGVzc29uLnF1ZXN0aW9uc30gZXZhbHVhdGluZz17ZXZhbHVhdGV9IHNldEV2YWx1YXRpbmc9e3NldEV2YWx1YXRlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwcmVudGlzc2FnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2Jhbm5lci5jc3NcIjtcbmltcG9ydCBIZWxsbyBmcm9tIFwiLi9IZWxsb1wiO1xuXG5jb25zdCBCYW5uZXIgPSAoeyBlbWFpbCwgdXNlcm5hbWUsIGFnZSwgbGV2ZWwsIGxldmVscywgcHJvZ3Jlc3Npb24gfSkgPT4ge1xuICBjb25zdCBuaXZlYXV4ID0gSlNPTi5wYXJzZShsZXZlbHMpO1xuICBjb25zdCBwcm9ncmVzcyA9IEpTT04ucGFyc2UocHJvZ3Jlc3Npb24pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby10ZXh0XCI+PEhlbGxvIC8+IFdFQi1TRUMtQ1JJTUU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28taW1nXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby12LmpwZWdcIiBhbHQ9XCJMb2dvXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1kZXRhaWxzXCI+XG4gICAgICAgICAgICBXZWxjb21lLCA8c3Bhbj57dXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1sb2dvdXRcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9nb3V0XCIgY2xhc3NOYW1lPVwiYnRuLWxpbmtcIj5cbiAgICAgICAgICAgICAgTG9nIG91dFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIj57XG4gICAgICAgIG5pdmVhdXgubWFwKChuaXZlYXUsIGluZGV4KT0+KFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBkYXRhLWxhYmVsPXtuaXZlYXUubGliZWxsZX0gY2xhc3NOYW1lPXtgcHJvZ3Jlc3Mtc3RlcCAke25pdmVhdS5pZCA8PSBwcm9ncmVzcy5uaXZlYXUuaWQgPyAncGFzc2VkJyA6ICcnfSAke25pdmVhdS5pZCA9PT0gcHJvZ3Jlc3Mubml2ZWF1LmlkID8gJ2N1cnJlbnQnIDogJyd9YH0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgIH08L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ291bnRlciA9ICh7IHRpbWUsIGlzU3VibWl0ZWQsIGV2YWx1YXRpbmcsIHNldElzU3VibWl0ZWQgfSkgPT4ge1xuICBjb25zdCBbY291bnRlckRvd24sIHNldENvdW50ZXJEb3duXSA9IFJlYWN0LnVzZVN0YXRlKHRpbWUpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNvdW50ZXJzdGVwLCBjb3VudGVyU3RvcDtcbiAgICBpZihldmFsdWF0aW5nKXtcbiAgICAgICAgY291bnRlcnN0ZXAgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNTdWJtaXRlZCA9PT0gZmFsc2UpIHNldENvdW50ZXJEb3duKChwcmV2KSA9PiBwcmV2IC0gMSk7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIGNvdW50ZXJTdG9wID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgc2V0SXNTdWJtaXRlZCh0cnVlKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRlcnN0ZXApO1xuICAgICAgICB9LCAodGltZSsxKSoxMDAwKSAgICAgICAgICBcbiAgICB9XG5cbiAgICBpZihpc1N1Ym1pdGVkKSBjbGVhckludGVydmFsKGNvdW50ZXJzdGVwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGNvdW50ZXJzdGVwKTtcbiAgICB9O1xuICB9LCBbZXZhbHVhdGluZywgaXNTdWJtaXRlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBjb2xvcjogY291bnRlckRvd24gPCAzMCA/IFwicmVkXCIgOiBcImdyZWVuXCIgfX0+XG4gICAgICB7Y291bnRlckRvd259XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9Db3VudGVyJztcbmltcG9ydCBRdWVzdGlvbiBmcm9tICcuL1F1ZXN0aW9uJ1xuaW1wb3J0ICcuL3N0eWxlcy9ldmFsdWF0aW9uLmNzcydcblxuY29uc3QgRXZhbHVhdGlvbiA9ICh7cXVlc3Rpb25zLCBldmFsdWF0aW5nfSkgPT4ge1xuICAgIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2lzU3VibWl0ZWQsIHNldElzU3VibWl0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmFsdWF0aW9uLWhlYWRlclwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImV2YWx1YXRpb24taGVhZGVyLXRpdGxlXCI+RXZhbHVhdGlvbiBkZXMgYWNxdWlzPC9oMj5cbiAgICAgICAgICAgIDxoMz48Q291bnRlciB0aW1lPXs5MH0gZXZhbHVhdGluZz17ZXZhbHVhdGluZ30gc2V0SXNTdWJtaXRlZD17c2V0SXNTdWJtaXRlZH0gaXNTdWJtaXRlZD17aXNTdWJtaXRlZH0gLz48L2gzPlxuICAgICAgICAgICAgPGgzPiB7c2NvcmUgfSAvIDEwIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uc1wiPlxuICAgICAgICAgICAge3F1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uLCBpbmRleCk9PihcbiAgICAgICAgICAgICAgICA8UXVlc3Rpb24ga2V5PXtgcXVlc3Rpb24tJHtpbmRleH1gfSBxdWVzdD17cXVlc3Rpb259IGlzU3VibWl0ZWQ9e2lzU3VibWl0ZWR9IHNldFNjb3JlPXtzZXRTY29yZX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmFsdWF0aW9uLWZvb3RlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0SXNTdWJtaXRlZCh0cnVlKX0+VmFsaWRhdGU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZhbHVhdGlvbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuXG5mdW5jdGlvbiBnZXRUaW1lKCl7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRpbWUgPSAodG9kYXkuZ2V0SG91cnMoKTwxMD9cIjBcIit0b2RheS5nZXRIb3VycygpOnRvZGF5LmdldEhvdXJzKCkpICsgXCI6XCIgKyAodG9kYXkuZ2V0TWludXRlcygpPDEwP1wiMFwiK3RvZGF5LmdldE1pbnV0ZXMoKTp0b2RheS5nZXRNaW51dGVzKCkpKyBcIjpcIiArICh0b2RheS5nZXRTZWNvbmRzKCk8MTA/XCIwXCIrdG9kYXkuZ2V0U2Vjb25kcygpOnRvZGF5LmdldFNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHRpbWU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgoKT0+Z2V0VGltZSgpKTtcblxuICB1c2VFZmZlY3QoKCk9PntcblxuICAgIGNvbnN0IGNsb2NrID0gc2V0SW50ZXJ2YWwoKCk9PntzZXRUaW1lKGdldFRpbWUoKSl9LCAxMDAwKTtcbiAgICByZXR1cm4gKCk9PntcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjbG9jayk7XG4gICAgfVxuICB9LFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHJvbmc+e3RpbWV9PC9zdHJvbmc+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgJy4vc3R5bGVzL0xlYWRlcnMuY3NzJztcblxuY29uc3QgTGVhZGVyQm9hcmQgPSAoeyBwcm9ncmVzc2lvbnMgfSkgPT4ge1xuICBjb25zdCB1c2VycyA9IEpTT04ucGFyc2UocHJvZ3Jlc3Npb25zKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFkZXJib2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY3Jvd25cIj48L2k+XG4gICAgICAgICAgPGgyPkxlYWRlcnM8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgPG9sPlxuICAgICAgICAgICAge3VzZXJzLm1hcCgodXNlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17YGxlYWRlci0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgIDxtYXJrPnt1c2VyLnVzZXIudXNlcm5hbWV9ICh7dXNlci51c2VyLmFnZX0gYW5zKTwvbWFyaz5cbiAgICAgICAgICAgICAgICA8c21hbGw+e3VzZXIuc2NvcmV9PC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMZWFkZXJCb2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2FwcE5vdGVzLmNzc1wiO1xuXG5jb25zdCBMaXN0TGVzc29ucyA9ICh7IGxlc3NvbnMsIHByb2dyZXNzaW9uLCBjdXJyZW50IH0pID0+IHtcbiAgY29uc3Qgbm90ZXMgPSBKU09OLnBhcnNlKGxlc3NvbnMpO1xuICBjb25zdCBwb3NpdGlvbiA9IEpTT04ucGFyc2UocHJvZ3Jlc3Npb24pO1xuICBjb25zdCBsZXNzb24gPSBjdXJyZW50IHx8IHBvc2l0aW9uLm5pdmVhdS5hcHByZW50aXNzYWdlPy5pZCB8fCAxO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtbm90ZXNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY3Jvd25cIj48L2k+XG4gICAgICAgIDxoMj5BcHByZW50aXNzYWdlczwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWxpc3Qtbm90ZXNcIj5cbiAgICAgICAge25vdGVzLm1hcCgobm90ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2Bub3Rlcy0ke2luZGV4fWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcHAtbGlzdC1ub3RlICR7XG4gICAgICAgICAgICAgIG5vdGUubml2ZWF1LmlkIDw9IHBvc2l0aW9uLm5pdmVhdS5pZCA/IFwicGFzc2VkXCIgOiBcIlwiXG4gICAgICAgICAgICB9ICR7bm90ZS5pZCA9PT0gbGVzc29uID8gXCJjdXJyZW50XCIgOiBcIlwifWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGEgaHJlZj17YC9sZWFybi8ke25vdGUuaWR9YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWxpc3Qtbm90ZV90aXRsZVwiPntub3RlLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1saXN0LW5vdGVfZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+Tml2ZWF1IDoge25vdGUubml2ZWF1LmxpYmVsbGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlN0YWRlIDoge25vdGUubml2ZWF1LnN0YWRlLmxpYmVsbGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RMZXNzb25zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcIi4vc3R5bGVzL2xvZ2luZm9ybS5jc3NcIjtcblxuY29uc3QgTG9naW5Gb3JtID0gKHsgbGFzdF91c2VybmFtZSwgZXJyb3IsIGNzcmZfdG9rZW4gfSkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7IGVtYWlsOiBsYXN0X3VzZXJuYW1lLCBwYXNzd29yZDogXCJcIiB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICBzZXRVc2VyKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjYXJkLWZvcm1cIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPntlcnJvcn08L2Rpdj59XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nLWgxXCI+UGxlYXNlIHNpZ24gaW48L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0RW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e3VzZXIuZW1haWx9XG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJpbnB1dEVtYWlsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0UGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VyLnBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGlkPVwiaW5wdXRQYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfY3NyZl90b2tlblwiIHZhbHVlPXtjc3JmX3Rva2VufSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiX3JlbWVtYmVyX21lXCIgLz4gUmVtZW1iZXIgbWVcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZ3JhZGllbnRcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgU2lnbiBpblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdj5Eb24ndCBoYXZlIGFuIGFjY291bnQgeWV0PyA8YSBocmVmPVwiL3JlZ2lzdGVyXCI+Q3JlYXRlIGFuIGFjY291bnQ8L2E+PC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9xdWVzdGlvbi5jc3NcIjtcblxuZnVuY3Rpb24gZ2V0TnVtYmVyQW5zd2VyKHJlc3BvbnNlcykge1xuICByZXR1cm4gcmVzcG9uc2VzLnJlZHVjZSgocywgYykgPT4gKGMuc3RhdHVzID8gcyArIDEgOiBzKSwgMCk7XG59XG5cbmNvbnN0IFF1ZXN0aW9uID0gKHsgcXVlc3QsIGlzU3VibWl0ZWQsIHNldFNjb3JlIH0pID0+IHtcbiAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiB7XG4gICAgY29uc3QgcmVwb25zZXMgPSBxdWVzdC5yZXNwb25zZXMubWFwKChyZXNwKSA9PiAoe1xuICAgICAgLi4ucmVzcCxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgIHNjb3JlOiByZXNwLnN0YXR1cyA/IDEgOiAwLFxuICAgIH0pKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucXVlc3QsXG4gICAgICBuYjogZ2V0TnVtYmVyQW5zd2VyKHF1ZXN0LnJlc3BvbnNlcyksXG4gICAgICByZXNwb25zZXM6IHJlcG9uc2VzLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IHNlbGVjdFJlc3BvbnNlID0gKGkpID0+IHtcbiAgICBzZXRRdWVzdGlvbigocHJldikgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gIXByZXYucmVzcG9uc2VzW2ldLnNlbGVjdGVkO1xuICAgICAgY29uc3QgaXNDb3JyZWN0ID0gcHJldi5yZXNwb25zZXNbaV0uc3RhdHVzID09PSB0cnVlO1xuICAgICAgY29uc3QgcmVwb25zZXMgPSBwcmV2LnJlc3BvbnNlcy5tYXAoKHJlc3AsIGluZCkgPT4ge1xuICAgICAgICBpZiAoaSA9PT0gaW5kKSByZXR1cm4geyAuLi5yZXNwLCBzZWxlY3RlZDogc2VsZWN0IH07XG4gICAgICAgIGlmIChzZWxlY3QgJiYgcHJldi5uYiA9PT0gMSkgcmV0dXJuIHsgLi4ucmVzcCwgc2VsZWN0ZWQ6IGZhbHNlIH07XG4gICAgICAgIHJldHVybiByZXNwO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4geyAuLi5wcmV2LCByZXNwb25zZXM6IHJlcG9uc2VzIH07XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzY29yZSA9IHF1ZXN0aW9uLnJlc3BvbnNlcy5yZWR1Y2UoXG4gICAgICAocywgdikgPT5cbiAgICAgICAgdi5zZWxlY3RlZCAmJiB2LnN0YXR1cyA9PSB0cnVlXG4gICAgICAgICAgPyBzICsgMVxuICAgICAgICAgIDogdi5zZWxlY3RlZCAmJiB2LnN0YXR1cyA9PSBmYWxzZVxuICAgICAgICAgID8gcyAtIDFcbiAgICAgICAgICA6IHMsXG4gICAgICAwXG4gICAgKTtcbiAgICBpZiAoaXNTdWJtaXRlZCkgc2V0U2NvcmUoKHByZXYpID0+IHByZXYgKyBzY29yZSk7XG4gIH0sIFtpc1N1Ym1pdGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uLXRpdGxlXCI+e3F1ZXN0aW9uLmxpYmVsbGV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uLXJlc3BvbnNlc1wiPlxuICAgICAgICB7cXVlc3Rpb24ucmVzcG9uc2VzLm1hcCgocmVwb25zZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2ByZXNwb25zZS0ke2luZGV4fWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RSZXNwb25zZShpbmRleCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BxdWVzdGlvbi1yZXNwb25zZSAke1xuICAgICAgICAgICAgICByZXBvbnNlLnNlbGVjdGVkID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuICAgICAgICAgICAgfSAke2lzU3VibWl0ZWQgJiYgcmVwb25zZS5zdGF0dXM9PXRydWU/ICd2YWxpZCc6ICcnfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3JlcG9uc2UubGliZWxsZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIFJhd0h0bWwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtjaGlsZHJlbiwgY2xhc3NOYW1lID0gXCJcIn0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNoaWxkcmVufX0gLz47XG4gIH1cbn1cblxuY29uc3QgUmVhZGluZyA9ICh7IHRpdGxlLCBjb250ZW51IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luQmxvY2s6IDEyIH19Pnt0aXRsZX08L2gyPlxuICAgICAgPFJhd0h0bWw+e2NvbnRlbnV9PC9SYXdIdG1sPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhZGluZztcbiIsImZ1bmN0aW9uIHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVhY3RDb250cm9sbGVycyA9IHt9O1xuICAgIGNvbnN0IGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyA9IChyKSA9PiB7XG4gICAgICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4gKHJlYWN0Q29udHJvbGxlcnNba2V5XSA9IHIoa2V5KS5kZWZhdWx0KSk7XG4gICAgfTtcbiAgICBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMoY29udGV4dCk7XG4gICAgd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS5qc3hgXSB8fCByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0udHN4YF07XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdCBjb250cm9sbGVyIFwiJyArIG5hbWUgKyAnXCIgZG9lcyBub3QgZXhpc3QnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZXF1aXJlJCQwIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxudmFyIGNyZWF0ZVJvb3Q7XG5cbnZhciBtID0gcmVxdWlyZSQkMDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSwgcHJvcHM6IHByb3BzIH0pO1xuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29tcG9uZW50IHNwZWNpZmllZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50KHRoaXMuY29tcG9uZW50VmFsdWUpO1xuICAgICAgICB0aGlzLl9yZW5kZXJSZWFjdEVsZW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzLCBudWxsKSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC51bm1vdW50KCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndW5tb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlbmRlclJlYWN0RWxlbWVudChyZWFjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50LnJvb3QpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucm9vdCA9IGNyZWF0ZVJvb3QodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJvb3QucmVuZGVyKHJlYWN0RWxlbWVudCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICdyZWFjdCcgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwicmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIiwicmVxdWlyZSIsImNvbnRleHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiUmVhY3QiLCJFdmFsdWF0aW9uIiwiUmVhZGluZyIsIkFwcHJlbnRpc3NhZ2UiLCJjdXJyZW50IiwibGVzc29uIiwiSlNPTiIsInBhcnNlIiwidXNlU3RhdGUiLCJ0YWIiLCJzZXRUYWIiLCJldmFsdWF0ZSIsInNldEV2YWx1YXRlIiwiY2hhbmdlVGFiIiwiaW5kZXgiLCJkaXNwbGF5IiwicHJlcmVxdWlzIiwibWFwIiwicHJlcmVxdWkiLCJsaWJlbGxlIiwidGl0bGUiLCJjb250ZW51IiwicXVlc3Rpb25zIiwiSGVsbG8iLCJCYW5uZXIiLCJlbWFpbCIsInVzZXJuYW1lIiwiYWdlIiwibGV2ZWwiLCJsZXZlbHMiLCJwcm9ncmVzc2lvbiIsIm5pdmVhdXgiLCJwcm9ncmVzcyIsIm5pdmVhdSIsImlkIiwiQ291bnRlciIsInRpbWUiLCJpc1N1Ym1pdGVkIiwiZXZhbHVhdGluZyIsInNldElzU3VibWl0ZWQiLCJjb3VudGVyRG93biIsInNldENvdW50ZXJEb3duIiwidXNlRWZmZWN0IiwiY291bnRlcnN0ZXAiLCJjb3VudGVyU3RvcCIsInNldEludGVydmFsIiwicHJldiIsInNldFRpbWVvdXQiLCJjbGVhckludGVydmFsIiwiY29sb3IiLCJRdWVzdGlvbiIsInNjb3JlIiwic2V0U2NvcmUiLCJxdWVzdGlvbiIsImdldFRpbWUiLCJ0b2RheSIsIkRhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwic2V0VGltZSIsImNsb2NrIiwiTGVhZGVyQm9hcmQiLCJwcm9ncmVzc2lvbnMiLCJ1c2VycyIsInVzZXIiLCJMaXN0TGVzc29ucyIsImxlc3NvbnMiLCJub3RlcyIsInBvc2l0aW9uIiwiYXBwcmVudGlzc2FnZSIsIm5vdGUiLCJzdGFkZSIsIkxvZ2luRm9ybSIsImxhc3RfdXNlcm5hbWUiLCJlcnJvciIsImNzcmZfdG9rZW4iLCJwYXNzd29yZCIsInNldFVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImdldE51bWJlckFuc3dlciIsInJlc3BvbnNlcyIsInJlZHVjZSIsInMiLCJjIiwic3RhdHVzIiwicXVlc3QiLCJyZXBvbnNlcyIsInJlc3AiLCJzZWxlY3RlZCIsIm5iIiwic2V0UXVlc3Rpb24iLCJzZWxlY3RSZXNwb25zZSIsImkiLCJzZWxlY3QiLCJpc0NvcnJlY3QiLCJpbmQiLCJ2IiwicmVwb25zZSIsIlB1cmVDb21wb25lbnQiLCJSYXdIdG1sIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIl9faHRtbCIsInRleHRBbGlnbiIsIm1hcmdpbkJsb2NrIiwicmVhY3RDb250cm9sbGVycyIsImltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyIsInIiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIndpbmRvdyIsInJlc29sdmVSZWFjdENvbXBvbmVudCIsImNvbXBvbmVudCIsIkVycm9yIiwicmVxdWlyZSQkMCIsImNyZWF0ZVJvb3QiLCJtIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiaHlkcmF0ZVJvb3QiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsIm8iLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJkZWZhdWx0XzEiLCJwcm9wc1ZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudFZhbHVlIiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb21wb25lbnROYW1lIiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ2YWx1ZXMiLCJTdHJpbmciLCJPYmplY3QiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==