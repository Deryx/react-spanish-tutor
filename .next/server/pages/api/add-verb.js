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
exports.id = "pages/api/add-verb";
exports.ids = ["pages/api/add-verb"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/add-verb.js":
/*!*******************************!*\
  !*** ./pages/api/add-verb.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handle(req, res) {\n    const { infinitive , translation , pronunciation  } = req.body;\n    const result = await prisma.verbs.create({\n        data: {\n            infinitive: infinitive,\n            translation: translation,\n            pronunciation: pronunciation\n        }\n    });\n    res.json(result);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkLXZlcmIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRWxCLGVBQWVFLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDM0MsTUFBTSxFQUFFQyxVQUFVLEdBQUVDLFdBQVcsR0FBRUMsYUFBYSxHQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSTtJQUMzRCxNQUFNQyxNQUFNLEdBQUcsTUFBTVIsTUFBTSxDQUFDUyxLQUFLLENBQUNDLE1BQU0sQ0FBQztRQUNyQ0MsSUFBSSxFQUFFO1lBQ0ZQLFVBQVUsRUFBRUEsVUFBVTtZQUN0QkMsV0FBVyxFQUFFQSxXQUFXO1lBQ3hCQyxhQUFhLEVBQUVBLGFBQWE7U0FDL0I7S0FDSixDQUFDO0lBQ0ZILEdBQUcsQ0FBQ1MsSUFBSSxDQUFDSixNQUFNLENBQUMsQ0FBQztDQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXNwYW5pc2gtdHV0b3IvLi9wYWdlcy9hcGkvYWRkLXZlcmIuanM/ODUxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBpbmZpbml0aXZlLCB0cmFuc2xhdGlvbiwgcHJvbnVuY2lhdGlvbiB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEudmVyYnMuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGluZmluaXRpdmU6IGluZmluaXRpdmUsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvbixcclxuICAgICAgICAgICAgcHJvbnVuY2lhdGlvbjogcHJvbnVuY2lhdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJlcy5qc29uKHJlc3VsdCk7XHJcbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiaGFuZGxlIiwicmVxIiwicmVzIiwiaW5maW5pdGl2ZSIsInRyYW5zbGF0aW9uIiwicHJvbnVuY2lhdGlvbiIsImJvZHkiLCJyZXN1bHQiLCJ2ZXJicyIsImNyZWF0ZSIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/add-verb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/add-verb.js"));
module.exports = __webpack_exports__;

})();