"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/vocabulary/quiz",{

/***/ "./src/components/vocabulary/simple-report.tsx":
/*!*****************************************************!*\
  !*** ./src/components/vocabulary/simple-report.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction SimpleReport(param) {\n    var reportTitle = param.reportTitle, questionSet = param.questionSet, userAnswers = param.userAnswers;\n    var _this = this;\n    var numQuestions = questionSet.length;\n    var report = [];\n    var set;\n    for(var i = 0; i < numQuestions; i++){\n        set = {};\n        set.question = questionSet[i].question;\n        set.answer = questionSet[i].answer;\n        set.userAnswer = userAnswers[i];\n        report = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(report).concat([\n            set\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: reportTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\vocabulary\\\\simple-report.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"col-lg-3\",\n                align: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"col-lg-4\",\n                                    children: \"question\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\vocabulary\\\\simple-report.tsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"col-lg-4\",\n                                    children: \"answer\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\vocabulary\\\\simple-report.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"col-lg-4\",\n                                    children: \"user answer\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\vocabulary\\\\simple-report.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\vocabulary\\\\simple-report.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\vocabulary\\\\simple-report.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: report.map(function(set) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: set.question\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\vocabulary\\\\simple-report.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: set.answer\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\vocabulary\\\\simple-report.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: set.userAnswer\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\vocabulary\\\\simple-report.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\vocabulary\\\\simple-report.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\vocabulary\\\\simple-report.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\vocabulary\\\\simple-report.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\vocabulary\\\\simple-report.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_c = SimpleReport;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleReport);\nvar _c;\n$RefreshReg$(_c, \"SimpleReport\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy92b2NhYnVsYXJ5L3NpbXBsZS1yZXBvcnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFBQSxTQUFTQSxZQUFZLENBQUUsS0FBdUMsRUFBRztRQUF6Q0MsV0FBVyxHQUFaLEtBQXVDLENBQXRDQSxXQUFXLEVBQUVDLFdBQVcsR0FBekIsS0FBdUMsQ0FBekJBLFdBQVcsRUFBRUMsV0FBVyxHQUF0QyxLQUF1QyxDQUFaQSxXQUFXOztJQUN6RCxJQUFNQyxZQUFZLEdBQUdGLFdBQVcsQ0FBQ0csTUFBTTtJQUN2QyxJQUFJQyxNQUFNLEdBQUcsRUFBRTtJQUNmLElBQUlDLEdBQUc7SUFDUCxJQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0osWUFBWSxFQUFFSSxDQUFDLEVBQUUsQ0FBRztRQUNwQ0QsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNUQSxHQUFHLENBQUNFLFFBQVEsR0FBR1AsV0FBVyxDQUFDTSxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDO1FBQ3ZDRixHQUFHLENBQUNHLE1BQU0sR0FBR1IsV0FBVyxDQUFDTSxDQUFDLENBQUMsQ0FBQ0UsTUFBTSxDQUFDO1FBQ25DSCxHQUFHLENBQUNJLFVBQVUsR0FBR1IsV0FBVyxDQUFDSyxDQUFDLENBQUMsQ0FBQztRQUNoQ0YsTUFBTSxHQUFHLHFGQUFJQSxNQUFNLENBQU5BLFFBQUo7WUFBWUMsR0FBRztTQUFDLEVBQUM7S0FDN0I7SUFFRCxxQkFDSSw4REFBQ0ssU0FBTzs7MEJBQ0osOERBQUNDLElBQUU7MEJBQUdaLFdBQVc7Ozs7O29CQUFPOzBCQUN4Qiw4REFBQ2EsT0FBSztnQkFBQ0MsU0FBUyxFQUFDLFVBQVU7Z0JBQUNDLEtBQUssRUFBQyxRQUFROztrQ0FDdEMsOERBQUNDLE9BQUs7a0NBQ0YsNEVBQUNDLElBQUU7OzhDQUNDLDhEQUFDQyxJQUFFO29DQUFDSixTQUFTLEVBQUMsVUFBVTs4Q0FBQyxVQUFROzs7Ozt3Q0FBSzs4Q0FDdEMsOERBQUNJLElBQUU7b0NBQUNKLFNBQVMsRUFBQyxVQUFVOzhDQUFDLFFBQU07Ozs7O3dDQUFLOzhDQUNwQyw4REFBQ0ksSUFBRTtvQ0FBQ0osU0FBUyxFQUFDLFVBQVU7OENBQUMsYUFBVzs7Ozs7d0NBQUs7Ozs7OztnQ0FDeEM7Ozs7OzRCQUNEO2tDQUNSLDhEQUFDSyxPQUFLO2tDQUNBZCxNQUFNLENBQUNlLEdBQUcsQ0FBRWQsU0FBQUEsR0FBRztpREFDYiw4REFBQ1csSUFBRTs7a0RBQ0MsOERBQUNJLElBQUU7a0RBQUdmLEdBQUcsQ0FBQ0UsUUFBUTs7Ozs7NkNBQU87a0RBQ3pCLDhEQUFDYSxJQUFFO2tEQUFHZixHQUFHLENBQUNHLE1BQU07Ozs7OzZDQUFPO2tEQUN2Qiw4REFBQ1ksSUFBRTtrREFBR2YsR0FBRyxDQUFDSSxVQUFVOzs7Ozs2Q0FBTzs7Ozs7O3FDQUMxQjt5QkFBQSxDQUNSOzs7Ozs0QkFDRzs7Ozs7O29CQUNKOzs7Ozs7WUFDRixDQUNiO0NBQ0o7QUFuQ1FYLEtBQUFBLFlBQVk7QUFxQ3JCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdm9jYWJ1bGFyeS9zaW1wbGUtcmVwb3J0LnRzeD9mYThiIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFNpbXBsZVJlcG9ydCgge3JlcG9ydFRpdGxlLCBxdWVzdGlvblNldCwgdXNlckFuc3dlcnN9ICkge1xyXG4gICAgY29uc3QgbnVtUXVlc3Rpb25zID0gcXVlc3Rpb25TZXQubGVuZ3RoO1xyXG4gICAgbGV0IHJlcG9ydCA9IFtdO1xyXG4gICAgbGV0IHNldDtcclxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgbnVtUXVlc3Rpb25zOyBpKysgKSB7XHJcbiAgICAgICAgc2V0ID0ge307XHJcbiAgICAgICAgc2V0LnF1ZXN0aW9uID0gcXVlc3Rpb25TZXRbaV0ucXVlc3Rpb247XHJcbiAgICAgICAgc2V0LmFuc3dlciA9IHF1ZXN0aW9uU2V0W2ldLmFuc3dlcjtcclxuICAgICAgICBzZXQudXNlckFuc3dlciA9IHVzZXJBbnN3ZXJzW2ldO1xyXG4gICAgICAgIHJlcG9ydCA9IFsuLi5yZXBvcnQsIHNldF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGgxPnsgcmVwb3J0VGl0bGUgfTwvaDE+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJjb2wtbGctM1wiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5xdWVzdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjb2wtbGctNFwiPmFuc3dlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjb2wtbGctNFwiPnVzZXIgYW5zd2VyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7IHJlcG9ydC5tYXAoIHNldCA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnsgc2V0LnF1ZXN0aW9uIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnsgc2V0LmFuc3dlciB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57IHNldC51c2VyQW5zd2VyIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlUmVwb3J0OyJdLCJuYW1lcyI6WyJTaW1wbGVSZXBvcnQiLCJyZXBvcnRUaXRsZSIsInF1ZXN0aW9uU2V0IiwidXNlckFuc3dlcnMiLCJudW1RdWVzdGlvbnMiLCJsZW5ndGgiLCJyZXBvcnQiLCJzZXQiLCJpIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJ1c2VyQW5zd2VyIiwic2VjdGlvbiIsImgxIiwidGFibGUiLCJjbGFzc05hbWUiLCJhbGlnbiIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwidGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/vocabulary/simple-report.tsx\n"));

/***/ })

});