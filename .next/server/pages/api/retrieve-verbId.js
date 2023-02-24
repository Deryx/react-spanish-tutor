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
exports.id = "pages/api/retrieve-verbId";
exports.ids = ["pages/api/retrieve-verbId"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/retrieve-verbId.js":
/*!**************************************!*\
  !*** ./pages/api/retrieve-verbId.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handle(req, res) {\n    const query = req.query.verb;\n    let verb = await prisma.verbs.findMany({\n        where: {\n            infinitive: query\n        }\n    });\n    res.json(verb);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmV0cmlldmUtdmVyYklkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxNQUFNLEdBQUcsSUFBSUQsd0RBQVksRUFBRTtBQUdsQixlQUFlRSxNQUFNLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzNDLE1BQU1DLEtBQUssR0FBR0YsR0FBRyxDQUFDRSxLQUFLLENBQUNDLElBQUk7SUFDNUIsSUFBSUEsSUFBSSxHQUFHLE1BQU1MLE1BQU0sQ0FBQ00sS0FBSyxDQUFDQyxRQUFRLENBQUM7UUFDbkNDLEtBQUssRUFBRTtZQUFFQyxVQUFVLEVBQUVMLEtBQUs7U0FBRTtLQUMvQixDQUFDO0lBQ0ZELEdBQUcsQ0FBQ08sSUFBSSxDQUFDTCxJQUFJLENBQUMsQ0FBQztDQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXNwYW5pc2gtdHV0b3IvLi9wYWdlcy9hcGkvcmV0cmlldmUtdmVyYklkLmpzPzdiNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCBxdWVyeSA9IHJlcS5xdWVyeS52ZXJiO1xyXG4gICAgbGV0IHZlcmIgPSBhd2FpdCBwcmlzbWEudmVyYnMuZmluZE1hbnkoeyBcclxuICAgICAgICB3aGVyZTogeyBpbmZpbml0aXZlOiBxdWVyeSB9LCBcclxuICAgIH0pO1xyXG4gICAgcmVzLmpzb24odmVyYik7XHJcbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiaGFuZGxlIiwicmVxIiwicmVzIiwicXVlcnkiLCJ2ZXJiIiwidmVyYnMiLCJmaW5kTWFueSIsIndoZXJlIiwiaW5maW5pdGl2ZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/retrieve-verbId.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/retrieve-verbId.js"));
module.exports = __webpack_exports__;

})();