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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _src_components_dropDown_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/dropDown.tsx */ \"./src/components/dropDown.tsx\");\n/* harmony import */ var _src_components_card_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/card.tsx */ \"./src/components/card.tsx\");\n\n\n\n\n\nfunction Flashcard(props) {\n    var headerFront = \"Front\";\n    var headerBack = \"Back\";\n    var info = \"\";\n    console.log(props.categories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Vocabulary Flashcard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"vocabularyFlashcard\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                            className: \"col-lg-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_dropDown_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                id: props.categories,\n                                name: \"category\",\n                                options: props.categories\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Flashcard;\nvar __N_SSG = true;\n// export async function getServerSideProps() {\n//     const allCategories = await prisma.categories.findMany();\n//     return {\n//         props: {\n//             categories: allCategories\n//         }\n//     }\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flashcard);\nvar _c;\n$RefreshReg$(_c, \"Flashcard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92b2NhYnVsYXJ5L2ZsYXNoY2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDd0Q7QUFDUjtBQUNJO0FBQ1I7QUFJNUMsU0FBU0ksU0FBUyxDQUFFQyxLQUFLLEVBQUc7SUFDeEIsSUFBTUMsV0FBVyxHQUFHLE9BQU87SUFDM0IsSUFBTUMsVUFBVSxHQUFHLE1BQU07SUFDekIsSUFBTUMsSUFBSSxHQUFHLEVBQUU7SUFFZkMsT0FBTyxDQUFDQyxHQUFHLENBQUVMLEtBQUssQ0FBQ00sVUFBVSxDQUFFLENBQUM7SUFFaEMscUJBQ0k7OzBCQUNJLDhEQUFDWCxzRUFBVTs7OztvQkFBRzswQkFDZCw4REFBQ1ksU0FBTztnQkFBQ0MsU0FBUyxFQUFDLGVBQWU7O2tDQUM5Qiw4REFBQ0MsSUFBRTtrQ0FBQyxzQkFBb0I7Ozs7OzRCQUFLO2tDQUM3Qiw4REFBQ0MsTUFBSTt3QkFBQ0MsRUFBRSxFQUFDLHFCQUFxQjt3QkFBQ0gsU0FBUyxFQUFDLDZCQUE2QjtrQ0FDbEUsNEVBQUNJLFVBQVE7NEJBQUNKLFNBQVMsRUFBQyxXQUFXO3NDQUMzQiw0RUFBQ1gsb0VBQVE7Z0NBQUNjLEVBQUUsRUFBR1gsS0FBSyxDQUFDTSxVQUFVO2dDQUFHTyxJQUFJLEVBQUMsVUFBVTtnQ0FBQ0MsT0FBTyxFQUFHZCxLQUFLLENBQUNNLFVBQVU7Ozs7O29DQUFLOzs7OztnQ0FHMUU7Ozs7OzRCQUNSOzs7Ozs7b0JBQ0Q7MEJBQ1YsOERBQUNWLGtFQUFNOzs7O29CQUFHOztvQkFDWCxDQUNOO0NBQ0o7QUF2QlFHLEtBQUFBLFNBQVM7O0FBc0NsQiwrQ0FBK0M7QUFDL0MsZ0VBQWdFO0FBQ2hFLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsd0NBQXdDO0FBQ3hDLFlBQVk7QUFDWixRQUFRO0FBQ1IsSUFBSTtBQUVKLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdm9jYWJ1bGFyeS9mbGFzaGNhcmQuanM/N2E2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBTaXRlaGVhZGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9zaXRlSGVhZGVyLnRzeCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50c3gnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnL3NyYy9jb21wb25lbnRzL2Ryb3BEb3duLnRzeCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy9zcmMvY29tcG9uZW50cy9jYXJkLnRzeCc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5mdW5jdGlvbiBGbGFzaGNhcmQoIHByb3BzICkge1xyXG4gICAgY29uc3QgaGVhZGVyRnJvbnQgPSAnRnJvbnQnO1xyXG4gICAgY29uc3QgaGVhZGVyQmFjayA9ICdCYWNrJztcclxuICAgIGNvbnN0IGluZm8gPSAnJztcclxuXHJcbiAgICBjb25zb2xlLmxvZyggcHJvcHMuY2F0ZWdvcmllcyApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNpdGVoZWFkZXIgLz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxoMT5Wb2NhYnVsYXJ5IEZsYXNoY2FyZDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInZvY2FidWxhcnlGbGFzaGNhcmRcIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBpZD17IHByb3BzLmNhdGVnb3JpZXMgfSBuYW1lPVwiY2F0ZWdvcnlcIiBvcHRpb25zPXsgcHJvcHMuY2F0ZWdvcmllcyB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Q2FyZCBoZWFkZXI9eyBoZWFkZXJGcm9udCB9IGluZm89eyBpbmZvIH0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Q2FyZCBoZWFkZXI9eyBoZWFkZXJCYWNrIH0gaW5mbz17IGluZm8gfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IHByaXNtYS5jYXRlZ29yaWVzLmZpbmRNYW55KHtcclxuICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdDogeyBjYXRlZ29yeSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgY2F0ZWdvcmllcyB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbi8vICAgICBjb25zdCBhbGxDYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hLmNhdGVnb3JpZXMuZmluZE1hbnkoKTtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICAgICAgY2F0ZWdvcmllczogYWxsQ2F0ZWdvcmllc1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxhc2hjYXJkOyJdLCJuYW1lcyI6WyJTaXRlaGVhZGVyIiwiRm9vdGVyIiwiRHJvcGRvd24iLCJDYXJkIiwiRmxhc2hjYXJkIiwicHJvcHMiLCJoZWFkZXJGcm9udCIsImhlYWRlckJhY2siLCJpbmZvIiwiY29uc29sZSIsImxvZyIsImNhdGVnb3JpZXMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiaWQiLCJmaWVsZHNldCIsIm5hbWUiLCJvcHRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/vocabulary/flashcard.js\n"));

/***/ })

});