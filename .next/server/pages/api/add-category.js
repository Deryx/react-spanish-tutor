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
exports.id = "pages/api/add-category";
exports.ids = ["pages/api/add-category"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/add-category.js":
/*!***********************************!*\
  !*** ./pages/api/add-category.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handle(req, res) {\n    const { category  } = req.body;\n    const result = await prisma.categories.create({\n        data: {\n            category\n        }\n    });\n    res.json(result);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkLWNhdGVnb3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxNQUFNLEdBQUcsSUFBSUQsd0RBQVksRUFBRTtBQUVsQixlQUFlRSxNQUFNLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzNDLE1BQU0sRUFBRUMsUUFBUSxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSTtJQUM3QixNQUFNQyxNQUFNLEdBQUcsTUFBTU4sTUFBTSxDQUFDTyxVQUFVLENBQUNDLE1BQU0sQ0FBQztRQUMxQ0MsSUFBSSxFQUFFO1lBQ0ZMLFFBQVE7U0FDWDtLQUNKLENBQUM7SUFDRkQsR0FBRyxDQUFDTyxJQUFJLENBQUNKLE1BQU0sQ0FBQyxDQUFDO0NBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Qtc3BhbmlzaC10dXRvci8uL3BhZ2VzL2FwaS9hZGQtY2F0ZWdvcnkuanM/YTg3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBjYXRlZ29yeSB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuY2F0ZWdvcmllcy5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmVzLmpzb24ocmVzdWx0KTtcclxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJjYXRlZ29yeSIsImJvZHkiLCJyZXN1bHQiLCJjYXRlZ29yaWVzIiwiY3JlYXRlIiwiZGF0YSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/add-category.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/add-category.js"));
module.exports = __webpack_exports__;

})();