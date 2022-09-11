"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/verbs/slider",{

/***/ "./pages/verbs/slider.js":
/*!*******************************!*\
  !*** ./pages/verbs/slider.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), brickSets = ref[0], setBrickSets = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), slideSets = ref1[0], setSlideSets = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref2[0], setQuestion = ref2[1];\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    var numQuestions = 5;\n    var numOptions = 5;\n    var numVerbs = verbs.length;\n    var infinitives = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, numVerbs);\n    var questionTenses = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length);\n    var currentVerbId = infinitives[question];\n    console.log(verbs);\n    var currentTense = questionTenses[question];\n    var currentVerb = verbs.filter(function(verb) {\n        return verb.id === currentVerbId;\n    })[0].infinitive;\n    var questionConjugations = conjugations.filter(function(conjugation) {\n        return conjugation.tense === currentTense && conjugation.verb === currentVerbId;\n    });\n    console.log(questionConjugations);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {}, []);\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: currentVerb\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"4eOWxwmaeJ4DAj7g6AVbbeOwRF8=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMLFNBQVMsRUFBQyxRQUFROzBEQUVmckIsTUFBTSxDQUFDMkIsR0FBRyxDQUFFQyxTQUFBQSxLQUFLO3lFQUNiLDhEQUFDRixLQUFHO2tFQUFHRSxLQUFLOzs7Ozs2REFBUTtpREFBQSxDQUN2Qjs7Ozs7b0RBRUg7MERBQ04sOERBQUNGLEtBQUc7Z0RBQUNMLFNBQVMsRUFBQyxRQUFROzs7OztvREFFakI7Ozs7Ozs0Q0FDSjs7Ozs7O29DQUNDOzBDQUNYLDhEQUFDSyxLQUFHO2dDQUFDTCxTQUFTLEVBQUMsbUJBQW1COzBDQUM5Qiw0RUFBQ1EsT0FBSztvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7b0NBQUNoQixFQUFFLEVBQUMsV0FBVztvQ0FBQ2lCLE9BQU8sRUFBR1osaUJBQWlCO29DQUFHYSxLQUFLLEVBQUMsTUFBTTs7Ozs7d0NBQUc7Ozs7O29DQUMvRTs7Ozs7OzRCQUNIOzs7Ozs7b0JBQ0Q7MEJBQ1YsOERBQUM1QyxrRUFBTTs7OztvQkFBRzs7b0JBQ1gsQ0FDTjtDQUNKO0dBekRRRSxNQUFNO0FBQU5BLEtBQUFBLE1BQU07O0FBd0VmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVyYnMvc2xpZGVyLmpzP2RlZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgU2l0ZWhlYWRlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvc2l0ZUhlYWRlci50c3gnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9mb290ZXIudHN4JztcclxuaW1wb3J0IHJhbmRvbU51bWJlckdlbmVyYXRvciBmcm9tICcuLi8uLi9oZWxwZXIvdXNlUmFuZG9tTnVtYmVyR2VuZXJhdG9yLnRzeCc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5mdW5jdGlvbiBTbGlkZXIoIHsgdmVyYnMsIHRlbnNlcywgY29uanVnYXRpb25zIH0gKSB7XHJcbiAgICBjb25zdCBbYnJpY2tTZXRzLCBzZXRCcmlja1NldHNdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbc2xpZGVTZXRzLCBzZXRTbGlkZVNldHNdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKCAwICk7XHJcblxyXG4gICAgY29uc3QgYnJpY2tzID0gWyd5bycsICd0dScsICfDqWwvZWxsYS91ZCcsICdub3NvdHJvcycsICd2b3NvdHJvcycsICdlbGxvcy9lbGxhcy91ZHMnXTtcclxuICAgIGNvbnN0IG51bVF1ZXN0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBudW1PcHRpb25zID0gNTtcclxuICAgIGNvbnN0IG51bVZlcmJzID0gdmVyYnMubGVuZ3RoO1xyXG4gICAgbGV0IGluZmluaXRpdmVzID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIG51bVZlcmJzICk7XHJcbiAgICBsZXQgcXVlc3Rpb25UZW5zZXMgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgdGVuc2VzLmxlbmd0aCApO1xyXG4gICAgbGV0IGN1cnJlbnRWZXJiSWQgPSBpbmZpbml0aXZlc1txdWVzdGlvbl07XHJcbiAgICBjb25zb2xlLmxvZyh2ZXJicyk7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRUZW5zZSA9IHF1ZXN0aW9uVGVuc2VzW3F1ZXN0aW9uXTtcclxuICAgIGxldCBjdXJyZW50VmVyYiA9IHZlcmJzLmZpbHRlciggdmVyYiA9PiB2ZXJiLmlkID09PSBjdXJyZW50VmVyYklkKVswXS5pbmZpbml0aXZlO1xyXG4gICAgbGV0IHF1ZXN0aW9uQ29uanVnYXRpb25zID0gY29uanVnYXRpb25zLmZpbHRlciggY29uanVnYXRpb24gPT4gY29uanVnYXRpb24udGVuc2UgPT09IGN1cnJlbnRUZW5zZSAmJiBjb25qdWdhdGlvbi52ZXJiID09PSBjdXJyZW50VmVyYklkICk7ICBcclxuICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uQ29uanVnYXRpb25zKTtcclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgfSwgW10gKTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRRdWVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiggcXVlc3Rpb24gPD0gcXVlc3Rpb24gKSB7XHJcbiAgICAgICAgICAgIHNldFF1ZXN0aW9uKCBxdWVzdGlvbiArIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGgxPlZlcmIgU2xpZGVyPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwic2xpZGVyXCIgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS04IGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57IGN1cnJlbnRWZXJiIH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJxdWVzdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmlja3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyaWNrcy5tYXAoIGJyaWNrID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57IGJyaWNrIH08L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMgY29sLWxnLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cInN1Ym1pdEJ0blwiIG9uQ2xpY2s9eyBpbmNyZW1lbnRRdWVzdGlvbiB9IHZhbHVlPVwibmV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgY29uc3QgYWxsVmVyYnMgPSBhd2FpdCBwcmlzbWEudmVyYnMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbFRlbnNlcyA9IGF3YWl0IHByaXNtYS50ZW5zZXMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbENvbmp1Z2F0aW9ucyA9IGF3YWl0IHByaXNtYS5jb25qdWdhdGlvbnMuZmluZE1hbnkoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdmVyYnM6IGFsbFZlcmJzLFxyXG4gICAgICAgICAgICB0ZW5zZXM6IGFsbFRlbnNlcyxcclxuICAgICAgICAgICAgY29uanVnYXRpb25zOiBhbGxDb25qdWdhdGlvbnNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTaXRlaGVhZGVyIiwiRm9vdGVyIiwicmFuZG9tTnVtYmVyR2VuZXJhdG9yIiwiU2xpZGVyIiwidmVyYnMiLCJ0ZW5zZXMiLCJjb25qdWdhdGlvbnMiLCJicmlja1NldHMiLCJzZXRCcmlja1NldHMiLCJzbGlkZVNldHMiLCJzZXRTbGlkZVNldHMiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiYnJpY2tzIiwibnVtUXVlc3Rpb25zIiwibnVtT3B0aW9ucyIsIm51bVZlcmJzIiwibGVuZ3RoIiwiaW5maW5pdGl2ZXMiLCJxdWVzdGlvblRlbnNlcyIsImN1cnJlbnRWZXJiSWQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRlbnNlIiwiY3VycmVudFZlcmIiLCJmaWx0ZXIiLCJ2ZXJiIiwiaWQiLCJpbmZpbml0aXZlIiwicXVlc3Rpb25Db25qdWdhdGlvbnMiLCJjb25qdWdhdGlvbiIsInRlbnNlIiwiaW5jcmVtZW50UXVlc3Rpb24iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiZmllbGRzZXQiLCJoMiIsImRpdiIsIm1hcCIsImJyaWNrIiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});