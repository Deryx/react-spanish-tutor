/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_common_siteHeader_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../styles/common/siteHeader.scss */ \"./styles/common/siteHeader.scss\");\n/* harmony import */ var _styles_common_siteHeader_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_common_siteHeader_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_vocabulary_input_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../styles/vocabulary/input.scss */ \"./styles/vocabulary/input.scss\");\n/* harmony import */ var _styles_vocabulary_input_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_vocabulary_input_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_vocabulary_flashcard_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../styles/vocabulary/flashcard.scss */ \"./styles/vocabulary/flashcard.scss\");\n/* harmony import */ var _styles_vocabulary_flashcard_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_vocabulary_flashcard_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_vocabulary_quiz_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../styles/vocabulary/quiz.scss */ \"./styles/vocabulary/quiz.scss\");\n/* harmony import */ var _styles_vocabulary_quiz_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_vocabulary_quiz_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_vocabulary_fillin_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../styles/vocabulary/fillin.scss */ \"./styles/vocabulary/fillin.scss\");\n/* harmony import */ var _styles_vocabulary_fillin_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_vocabulary_fillin_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_vocabulary_scramble_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../styles/vocabulary/scramble.scss */ \"./styles/vocabulary/scramble.scss\");\n/* harmony import */ var _styles_vocabulary_scramble_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_vocabulary_scramble_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_vocabulary_slider_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../styles/vocabulary/slider.scss */ \"./styles/vocabulary/slider.scss\");\n/* harmony import */ var _styles_vocabulary_slider_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_vocabulary_slider_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_verbs_input_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../styles/verbs/input.scss */ \"./styles/verbs/input.scss\");\n/* harmony import */ var _styles_verbs_input_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_verbs_input_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_verbs_conjugator_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../styles/verbs/conjugator.scss */ \"./styles/verbs/conjugator.scss\");\n/* harmony import */ var _styles_verbs_conjugator_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_verbs_conjugator_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_verbs_flashcard_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../styles/verbs/flashcard.scss */ \"./styles/verbs/flashcard.scss\");\n/* harmony import */ var _styles_verbs_flashcard_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_verbs_flashcard_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_common_accents_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../styles/common/accents.scss */ \"./styles/common/accents.scss\");\n/* harmony import */ var _styles_common_accents_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_common_accents_scss__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _styles_common_card_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../styles/common/card.scss */ \"./styles/common/card.scss\");\n/* harmony import */ var _styles_common_card_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_common_card_scss__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\_app.js\",\n        lineNumber: 17,\n        columnNumber: 12\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQztBQUNiO0FBQ1c7QUFDRDtBQUNJO0FBQ0w7QUFDRTtBQUNFO0FBQ0Y7QUFDTjtBQUNLO0FBQ0Q7QUFDRDtBQUNIO0FBRW5CLFNBQVNBLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3BELHFCQUFPLDhEQUFDRCxTQUFTO1FBQUUsR0FBR0MsU0FBUzs7Ozs7WUFBSTtDQUN0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXNwYW5pc2gtdHV0b3IvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XHJcbmltcG9ydCAnL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCAnL3N0eWxlcy9jb21tb24vc2l0ZUhlYWRlci5zY3NzJztcclxuaW1wb3J0ICcvc3R5bGVzL3ZvY2FidWxhcnkvaW5wdXQuc2Nzcyc7XHJcbmltcG9ydCAnL3N0eWxlcy92b2NhYnVsYXJ5L2ZsYXNoY2FyZC5zY3NzJztcclxuaW1wb3J0ICcvc3R5bGVzL3ZvY2FidWxhcnkvcXVpei5zY3NzJztcclxuaW1wb3J0ICcvc3R5bGVzL3ZvY2FidWxhcnkvZmlsbGluLnNjc3MnO1xyXG5pbXBvcnQgJy9zdHlsZXMvdm9jYWJ1bGFyeS9zY3JhbWJsZS5zY3NzJztcclxuaW1wb3J0ICcvc3R5bGVzL3ZvY2FidWxhcnkvc2xpZGVyLnNjc3MnO1xyXG5pbXBvcnQgJy9zdHlsZXMvdmVyYnMvaW5wdXQuc2Nzcyc7XHJcbmltcG9ydCAnL3N0eWxlcy92ZXJicy9jb25qdWdhdG9yLnNjc3MnO1xyXG5pbXBvcnQgJy9zdHlsZXMvdmVyYnMvZmxhc2hjYXJkLnNjc3MnO1xyXG5pbXBvcnQgJy9zdHlsZXMvY29tbW9uL2FjY2VudHMuc2Nzcyc7XHJcbmltcG9ydCAnL3N0eWxlcy9jb21tb24vY2FyZC5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxufVxyXG4iXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/common/accents.scss":
/*!************************************!*\
  !*** ./styles/common/accents.scss ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/common/card.scss":
/*!*********************************!*\
  !*** ./styles/common/card.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/common/siteHeader.scss":
/*!***************************************!*\
  !*** ./styles/common/siteHeader.scss ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/verbs/conjugator.scss":
/*!**************************************!*\
  !*** ./styles/verbs/conjugator.scss ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/verbs/flashcard.scss":
/*!*************************************!*\
  !*** ./styles/verbs/flashcard.scss ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/verbs/input.scss":
/*!*********************************!*\
  !*** ./styles/verbs/input.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/vocabulary/fillin.scss":
/*!***************************************!*\
  !*** ./styles/vocabulary/fillin.scss ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/vocabulary/flashcard.scss":
/*!******************************************!*\
  !*** ./styles/vocabulary/flashcard.scss ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/vocabulary/input.scss":
/*!**************************************!*\
  !*** ./styles/vocabulary/input.scss ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/vocabulary/quiz.scss":
/*!*************************************!*\
  !*** ./styles/vocabulary/quiz.scss ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/vocabulary/scramble.scss":
/*!*****************************************!*\
  !*** ./styles/vocabulary/scramble.scss ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/vocabulary/slider.scss":
/*!***************************************!*\
  !*** ./styles/vocabulary/slider.scss ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();