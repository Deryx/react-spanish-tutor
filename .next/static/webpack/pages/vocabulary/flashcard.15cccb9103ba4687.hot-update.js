"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/vocabulary/flashcard",{

/***/ "./pages/vocabulary/flashcard.js":
/*!***************************************!*\
  !*** ./pages/vocabulary/flashcard.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_deryx_react_spanish_tutor_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_deryx_react_spanish_tutor_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_deryx_react_spanish_tutor_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _src_components_dropDown_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/components/dropDown.tsx */ \"./src/components/dropDown.tsx\");\n/* harmony import */ var _src_components_card_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/components/card.tsx */ \"./src/components/card.tsx\");\n/* harmony import */ var _pages_api_getCategories_tsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/api/getCategories.tsx */ \"./pages/api/getCategories.tsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Flashcard(props) {\n    _s();\n    var headerFront = \"Front\";\n    var headerBack = \"Back\";\n    var info = \"\";\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(C_Users_deryx_react_spanish_tutor_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_deryx_react_spanish_tutor_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return prisma.categories.findMany();\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })));\n    console.log(props.categories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: \"Vocabulary Flashcard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        id: \"vocabularyFlashcard\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"fieldset\", {\n                            className: \"col-lg-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_dropDown_tsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    id: \"category\",\n                                    name: \"category\",\n                                    options: props.categories\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_card_tsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    header: headerFront,\n                                    info: info\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Flashcard, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Flashcard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flashcard);\nvar _c;\n$RefreshReg$(_c, \"Flashcard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92b2NhYnVsYXJ5L2ZsYXNoY2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBaUM7QUFDdUI7QUFDUjtBQUNJO0FBQ1I7QUFDa0I7QUFFOUQsU0FBU00sU0FBUyxDQUFFQyxLQUFLLEVBQUc7O0lBQ3hCLElBQU1DLFdBQVcsR0FBRyxPQUFPO0lBQzNCLElBQU1DLFVBQVUsR0FBRyxNQUFNO0lBQ3pCLElBQU1DLElBQUksR0FBRyxFQUFFO0lBRWZWLGdEQUFTLENBQUUsb1BBQVk7Ozs7OzJCQUNiVyxNQUFNLENBQUNDLFVBQVUsQ0FBQ0MsUUFBUSxFQUFFOzs7Ozs7S0FDckMsR0FBQyxDQUFDO0lBRUhDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixLQUFLLENBQUNLLFVBQVUsQ0FBQyxDQUFDO0lBRTlCLHFCQUNJOzswQkFDSSw4REFBQ1gsc0VBQVU7Ozs7b0JBQUc7MEJBQ2QsOERBQUNlLFNBQU87Z0JBQUNDLFNBQVMsRUFBQyxlQUFlOztrQ0FDOUIsOERBQUNDLElBQUU7a0NBQUMsc0JBQW9COzs7Ozs0QkFBSztrQ0FDN0IsOERBQUNDLE1BQUk7d0JBQUNDLEVBQUUsRUFBQyxxQkFBcUI7d0JBQUNILFNBQVMsRUFBQyw2QkFBNkI7a0NBQ2xFLDRFQUFDSSxVQUFROzRCQUFDSixTQUFTLEVBQUMsV0FBVzs7OENBQzNCLDhEQUFDZCxvRUFBUTtvQ0FBQ2lCLEVBQUUsRUFBQyxVQUFVO29DQUFDRSxJQUFJLEVBQUMsVUFBVTtvQ0FBQ0MsT0FBTyxFQUFHaEIsS0FBSyxDQUFDSyxVQUFVOzs7Ozt3Q0FBSzs4Q0FDdkUsOERBQUNSLGdFQUFJO29DQUFDb0IsTUFBTSxFQUFHaEIsV0FBVztvQ0FBR0UsSUFBSSxFQUFHQSxJQUFJOzs7Ozt3Q0FBSzs7Ozs7O2dDQUV0Qzs7Ozs7NEJBQ1I7Ozs7OztvQkFDRDswQkFDViw4REFBQ1Isa0VBQU07Ozs7b0JBQUc7O29CQUNYLENBQ047Q0FDSjtHQTNCUUksU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBNkJsQiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZvY2FidWxhcnkvZmxhc2hjYXJkLmpzPzdhNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTaXRlaGVhZGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9zaXRlSGVhZGVyLnRzeCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50c3gnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnL3NyYy9jb21wb25lbnRzL2Ryb3BEb3duLnRzeCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy9zcmMvY29tcG9uZW50cy9jYXJkLnRzeCc7XHJcbmltcG9ydCBnZXRDYXRlZ29yaWVzIGZyb20gJy4uLy4uL3BhZ2VzL2FwaS9nZXRDYXRlZ29yaWVzLnRzeCc7XHJcblxyXG5mdW5jdGlvbiBGbGFzaGNhcmQoIHByb3BzICkge1xyXG4gICAgY29uc3QgaGVhZGVyRnJvbnQgPSAnRnJvbnQnO1xyXG4gICAgY29uc3QgaGVhZGVyQmFjayA9ICdCYWNrJztcclxuICAgIGNvbnN0IGluZm8gPSAnJztcclxuXHJcbiAgICB1c2VFZmZlY3QoIGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBwcmlzbWEuY2F0ZWdvcmllcy5maW5kTWFueSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvcHMuY2F0ZWdvcmllcyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2l0ZWhlYWRlciAvPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGgxPlZvY2FidWxhcnkgRmxhc2hjYXJkPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwidm9jYWJ1bGFyeUZsYXNoY2FyZFwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGlkPVwiY2F0ZWdvcnlcIiBuYW1lPVwiY2F0ZWdvcnlcIiBvcHRpb25zPXsgcHJvcHMuY2F0ZWdvcmllcyB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGhlYWRlcj17IGhlYWRlckZyb250IH0gaW5mbz17IGluZm8gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPENhcmQgaGVhZGVyPXsgaGVhZGVyQmFjayB9IGluZm89eyBpbmZvIH0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsYXNoY2FyZDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiU2l0ZWhlYWRlciIsIkZvb3RlciIsIkRyb3Bkb3duIiwiQ2FyZCIsImdldENhdGVnb3JpZXMiLCJGbGFzaGNhcmQiLCJwcm9wcyIsImhlYWRlckZyb250IiwiaGVhZGVyQmFjayIsImluZm8iLCJwcmlzbWEiLCJjYXRlZ29yaWVzIiwiZmluZE1hbnkiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImlkIiwiZmllbGRzZXQiLCJuYW1lIiwib3B0aW9ucyIsImhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/vocabulary/flashcard.js\n"));

/***/ })

});