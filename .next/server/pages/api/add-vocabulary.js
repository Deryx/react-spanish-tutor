"use strict";
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
exports.id = "pages/api/add-vocabulary";
exports.ids = ["pages/api/add-vocabulary"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/add-vocabulary.js":
/*!*************************************!*\
  !*** ./pages/api/add-vocabulary.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handle(req, res) {\n    const { category , word , translation , gender , image , pronunciation  } = req.body;\n    const result = await prisma.words.create({\n        data: {\n            category: category,\n            word: word,\n            translation: translation,\n            gender: gender,\n            image: image,\n            pronunciation: pronunciation\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkLXZvY2FidWxhcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRWxCLGVBQWVFLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDM0MsTUFBTSxFQUFFQyxRQUFRLEdBQUVDLElBQUksR0FBRUMsV0FBVyxHQUFFQyxNQUFNLEdBQUVDLEtBQUssR0FBRUMsYUFBYSxHQUFFLEdBQUdQLEdBQUcsQ0FBQ1EsSUFBSTtJQUM5RSxNQUFNQyxNQUFNLEdBQUcsTUFBTVgsTUFBTSxDQUFDWSxLQUFLLENBQUNDLE1BQU0sQ0FBQztRQUNyQ0MsSUFBSSxFQUFFO1lBQ0ZWLFFBQVEsRUFBRUEsUUFBUTtZQUNsQkMsSUFBSSxFQUFFQSxJQUFJO1lBQ1ZDLFdBQVcsRUFBRUEsV0FBVztZQUN4QkMsTUFBTSxFQUFFQSxNQUFNO1lBQ2RDLEtBQUssRUFBRUEsS0FBSztZQUNaQyxhQUFhLEVBQUVBLGFBQWE7U0FDL0I7S0FDSixDQUFDO0NBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zcGFuaXNoLXR1dG9yLy4vcGFnZXMvYXBpL2FkZC12b2NhYnVsYXJ5LmpzP2M5MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgY2F0ZWdvcnksIHdvcmQsIHRyYW5zbGF0aW9uLCBnZW5kZXIsIGltYWdlLCBwcm9udW5jaWF0aW9uIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS53b3Jkcy5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LFxyXG4gICAgICAgICAgICB3b3JkOiB3b3JkLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbjogdHJhbnNsYXRpb24sXHJcbiAgICAgICAgICAgIGdlbmRlcjogZ2VuZGVyLFxyXG4gICAgICAgICAgICBpbWFnZTogaW1hZ2UsXHJcbiAgICAgICAgICAgIHByb251bmNpYXRpb246IHByb251bmNpYXRpb25cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiaGFuZGxlIiwicmVxIiwicmVzIiwiY2F0ZWdvcnkiLCJ3b3JkIiwidHJhbnNsYXRpb24iLCJnZW5kZXIiLCJpbWFnZSIsInByb251bmNpYXRpb24iLCJib2R5IiwicmVzdWx0Iiwid29yZHMiLCJjcmVhdGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/add-vocabulary.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/add-vocabulary.js"));
module.exports = __webpack_exports__;

})();