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
exports.id = "pages/api/add-conjugation";
exports.ids = ["pages/api/add-conjugation"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/add-conjugation.js":
/*!**************************************!*\
  !*** ./pages/api/add-conjugation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handle(req, res) {\n    const { verb , tense , yo , tu , el , nosotros , vosotros , ellos  } = req.body;\n    const result = await prisma.conjugations.create({\n        data: {\n            verb: verb,\n            tense: tense,\n            yo: yo,\n            tu: tu,\n            el: el,\n            nosotros: nosotros,\n            vosotros: vosotros,\n            ellos: ellos\n        }\n    });\n    res.json(result);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkLWNvbmp1Z2F0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxNQUFNLEdBQUcsSUFBSUQsd0RBQVksRUFBRTtBQUVsQixlQUFlRSxNQUFNLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzNDLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLEVBQUUsR0FBRUMsRUFBRSxHQUFFQyxFQUFFLEdBQUVDLFFBQVEsR0FBRUMsUUFBUSxHQUFFQyxLQUFLLEdBQUUsR0FBR1QsR0FBRyxDQUFDVSxJQUFJO0lBQ3ZFLE1BQU1DLE1BQU0sR0FBRyxNQUFNYixNQUFNLENBQUNjLFlBQVksQ0FBQ0MsTUFBTSxDQUFDO1FBQzVDQyxJQUFJLEVBQUU7WUFDRlosSUFBSSxFQUFFQSxJQUFJO1lBQ1ZDLEtBQUssRUFBRUEsS0FBSztZQUNaQyxFQUFFLEVBQUVBLEVBQUU7WUFDTkMsRUFBRSxFQUFFQSxFQUFFO1lBQ05DLEVBQUUsRUFBRUEsRUFBRTtZQUNOQyxRQUFRLEVBQUVBLFFBQVE7WUFDbEJDLFFBQVEsRUFBRUEsUUFBUTtZQUNsQkMsS0FBSyxFQUFFQSxLQUFLO1NBQ2Y7S0FDSixDQUFDO0lBQ0ZSLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDSixNQUFNLENBQUMsQ0FBQztDQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXNwYW5pc2gtdHV0b3IvLi9wYWdlcy9hcGkvYWRkLWNvbmp1Z2F0aW9uLmpzPzYxMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgdmVyYiwgdGVuc2UsIHlvLCB0dSwgZWwsIG5vc290cm9zLCB2b3NvdHJvcywgZWxsb3MgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLmNvbmp1Z2F0aW9ucy5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdmVyYjogdmVyYixcclxuICAgICAgICAgICAgdGVuc2U6IHRlbnNlLFxyXG4gICAgICAgICAgICB5bzogeW8sXHJcbiAgICAgICAgICAgIHR1OiB0dSxcclxuICAgICAgICAgICAgZWw6IGVsLFxyXG4gICAgICAgICAgICBub3NvdHJvczogbm9zb3Ryb3MsXHJcbiAgICAgICAgICAgIHZvc290cm9zOiB2b3NvdHJvcyxcclxuICAgICAgICAgICAgZWxsb3M6IGVsbG9zXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmVzLmpzb24ocmVzdWx0KTtcclxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJ2ZXJiIiwidGVuc2UiLCJ5byIsInR1IiwiZWwiLCJub3NvdHJvcyIsInZvc290cm9zIiwiZWxsb3MiLCJib2R5IiwicmVzdWx0IiwiY29uanVnYXRpb25zIiwiY3JlYXRlIiwiZGF0YSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/add-conjugation.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/add-conjugation.js"));
module.exports = __webpack_exports__;

})();