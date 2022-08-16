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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _src_components_dropDown_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/dropDown.tsx */ \"./src/components/dropDown.tsx\");\n/* harmony import */ var _src_components_card_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/card.tsx */ \"./src/components/card.tsx\");\n\n\n\n\n\nfunction Flashcard(param) {\n    var categories = param.categories;\n    var headerFront = \"Front\";\n    var headerBack = \"Back\";\n    var info = \"\";\n    var categorySelect = [];\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var category = _step.value;\n            categorySelect.push(categories[category]);\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    console.log(categorySelect);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Vocabulary Flashcard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"vocabularyFlashcard\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                            className: \"col-lg-12\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Flashcard;\nvar __N_SSG = true;\n// export async function getServerSideProps() {\n//     const allCategories = await prisma.categories.findMany();\n//     return {\n//         props: {\n//             categories: allCategories\n//         }\n//     }\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flashcard);\nvar _c;\n$RefreshReg$(_c, \"Flashcard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92b2NhYnVsYXJ5L2ZsYXNoY2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDd0Q7QUFDUjtBQUNJO0FBQ1I7QUFJNUMsU0FBU0ksU0FBUyxDQUFFLEtBQWMsRUFBRztRQUFqQixVQUFZLEdBQVosS0FBYyxDQUFaQyxVQUFVO0lBQzVCLElBQU1DLFdBQVcsR0FBRyxPQUFPO0lBQzNCLElBQU1DLFVBQVUsR0FBRyxNQUFNO0lBQ3pCLElBQU1DLElBQUksR0FBRyxFQUFFO0lBQ2YsSUFBTUMsY0FBYyxHQUFHLEVBQUU7UUFFckIseUJBQWMsU0FBZCxpQkFBYyxVQUFkLGNBQWM7O1FBQWxCLFFBQUksU0FBYyxHQUFJSixVQUFVLHFCQUE1QixLQUFjLElBQWQseUJBQWMsSUFBZCxLQUFjLEdBQWQsU0FBYyxnQkFBZCx5QkFBYyxRQUFnQjtZQUE5QixJQUFNSyxRQUFRLEdBQWQsS0FBYztZQUNkRCxjQUFjLENBQUNFLElBQUksQ0FBQ04sVUFBVSxDQUFDSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzdDOztRQUZHLGlCQUFjO1FBQWQsY0FBYzs7O2lCQUFkLHlCQUFjLElBQWQsU0FBYztnQkFBZCxTQUFjOzs7Z0JBQWQsaUJBQWM7c0JBQWQsY0FBYzs7OztJQUlsQkUsT0FBTyxDQUFDQyxHQUFHLENBQUVKLGNBQWMsQ0FBRSxDQUFDO0lBRTlCLHFCQUNJOzswQkFDSSw4REFBQ1Qsc0VBQVU7Ozs7b0JBQUc7MEJBQ2QsOERBQUNjLFNBQU87Z0JBQUNDLFNBQVMsRUFBQyxlQUFlOztrQ0FDOUIsOERBQUNDLElBQUU7a0NBQUMsc0JBQW9COzs7Ozs0QkFBSztrQ0FDN0IsOERBQUNDLE1BQUk7d0JBQUNDLEVBQUUsRUFBQyxxQkFBcUI7d0JBQUNILFNBQVMsRUFBQyw2QkFBNkI7a0NBQ2xFLDRFQUFDSSxVQUFROzRCQUFDSixTQUFTLEVBQUMsV0FBVzs7Ozs7Z0NBSXBCOzs7Ozs0QkFDUjs7Ozs7O29CQUNEOzBCQUNWLDhEQUFDZCxrRUFBTTs7OztvQkFBRzs7b0JBQ1gsQ0FDTjtDQUNKO0FBNUJRRyxLQUFBQSxTQUFTOztBQXVDbEIsK0NBQStDO0FBQy9DLGdFQUFnRTtBQUNoRSxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLHdDQUF3QztBQUN4QyxZQUFZO0FBQ1osUUFBUTtBQUNSLElBQUk7QUFFSiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZvY2FidWxhcnkvZmxhc2hjYXJkLmpzPzdhNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgU2l0ZWhlYWRlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvc2l0ZUhlYWRlci50c3gnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9mb290ZXIudHN4JztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJy9zcmMvY29tcG9uZW50cy9kcm9wRG93bi50c3gnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcvc3JjL2NvbXBvbmVudHMvY2FyZC50c3gnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZnVuY3Rpb24gRmxhc2hjYXJkKCB7IGNhdGVnb3JpZXMgfSApIHtcclxuICAgIGNvbnN0IGhlYWRlckZyb250ID0gJ0Zyb250JztcclxuICAgIGNvbnN0IGhlYWRlckJhY2sgPSAnQmFjayc7XHJcbiAgICBjb25zdCBpbmZvID0gJyc7XHJcbiAgICBjb25zdCBjYXRlZ29yeVNlbGVjdCA9IFtdO1xyXG5cclxuICAgIGZvcihjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3QucHVzaChjYXRlZ29yaWVzW2NhdGVnb3J5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coIGNhdGVnb3J5U2VsZWN0ICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2l0ZWhlYWRlciAvPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGgxPlZvY2FidWxhcnkgRmxhc2hjYXJkPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwidm9jYWJ1bGFyeUZsYXNoY2FyZFwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxEcm9wZG93biBpZD17IGNhdGVnb3JpZXMuaWQgfSBuYW1lPVwiY2F0ZWdvcnlcIiBvcHRpb25zPXsgY2F0ZWdvcmllcy5jYXRlZ29yeSB9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPENhcmQgaGVhZGVyPXsgaGVhZGVyRnJvbnQgfSBpbmZvPXsgaW5mbyB9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPENhcmQgaGVhZGVyPXsgaGVhZGVyQmFjayB9IGluZm89eyBpbmZvIH0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBhd2FpdCBwcmlzbWEuY2F0ZWdvcmllcy5maW5kTWFueSgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBhbGxDYXRlZ29yaWVzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4vLyAgICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IGF3YWl0IHByaXNtYS5jYXRlZ29yaWVzLmZpbmRNYW55KCk7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgICAgIGNhdGVnb3JpZXM6IGFsbENhdGVnb3JpZXNcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsYXNoY2FyZDsiXSwibmFtZXMiOlsiU2l0ZWhlYWRlciIsIkZvb3RlciIsIkRyb3Bkb3duIiwiQ2FyZCIsIkZsYXNoY2FyZCIsImNhdGVnb3JpZXMiLCJoZWFkZXJGcm9udCIsImhlYWRlckJhY2siLCJpbmZvIiwiY2F0ZWdvcnlTZWxlY3QiLCJjYXRlZ29yeSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImlkIiwiZmllbGRzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/vocabulary/flashcard.js\n"));

/***/ })

});