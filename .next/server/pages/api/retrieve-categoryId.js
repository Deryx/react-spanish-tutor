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
exports.id = "pages/api/retrieve-categoryId";
exports.ids = ["pages/api/retrieve-categoryId"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/retrieve-categoryId.js":
/*!******************************************!*\
  !*** ./pages/api/retrieve-categoryId.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handle(req, res) {\n    const query = req.query.category;\n    let category = await prisma.categories.findMany({\n        where: {\n            category: query\n        }\n    });\n    res.json(category);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmV0cmlldmUtY2F0ZWdvcnlJZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFZLEVBQUU7QUFFbEIsZUFBZUUsTUFBTSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMzQyxNQUFNQyxLQUFLLEdBQUdGLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDQyxRQUFRO0lBQ2hDLElBQUlBLFFBQVEsR0FBRyxNQUFNTCxNQUFNLENBQUNNLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDO1FBQzVDQyxLQUFLLEVBQUU7WUFBRUgsUUFBUSxFQUFFRCxLQUFLO1NBQUU7S0FDN0IsQ0FBQztJQUNGRCxHQUFHLENBQUNNLElBQUksQ0FBQ0osUUFBUSxDQUFDLENBQUM7Q0FDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zcGFuaXNoLXR1dG9yLy4vcGFnZXMvYXBpL3JldHJpZXZlLWNhdGVnb3J5SWQuanM/NGZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgcXVlcnkgPSByZXEucXVlcnkuY2F0ZWdvcnk7XHJcbiAgICBsZXQgY2F0ZWdvcnkgPSBhd2FpdCBwcmlzbWEuY2F0ZWdvcmllcy5maW5kTWFueSh7IFxyXG4gICAgICAgIHdoZXJlOiB7IGNhdGVnb3J5OiBxdWVyeSB9LCBcclxuICAgIH0pO1xyXG4gICAgcmVzLmpzb24oY2F0ZWdvcnkpO1xyXG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZSIsInJlcSIsInJlcyIsInF1ZXJ5IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiZmluZE1hbnkiLCJ3aGVyZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/retrieve-categoryId.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/retrieve-categoryId.js"));
module.exports = __webpack_exports__;

})();