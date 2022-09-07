"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/vocabulary/fill-in",{

/***/ "./pages/vocabulary/fill-in.js":
/*!*************************************!*\
  !*** ./pages/vocabulary/fill-in.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/accents.tsx */ \"./src/components/accents.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Fillin(param) {\n    var dictionary = param.dictionary, categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), questionSet = ref[0], setQuestionSet = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref1[0], setQuestion = ref1[1];\n    var numQuestions = 5;\n    var numOptions = 5;\n    var categorySelections = [];\n    var fillinDictionary = dictionary;\n    var dictionaryLength = dictionary.length;\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var current = words[i];\n            var set = {};\n            var optionNumbers = void 0;\n            var randomSpot = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(1, 5);\n            set.question = fillinDictionary[current].translation;\n            set.answer = fillinDictionary[current].word;\n            setQuestionSet(function(current) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(current).concat([\n                    set\n                ]);\n            });\n        };\n        var words = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(numQuestions, dictionaryLength);\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var category = _step.value;\n            categorySelections.push({\n                id: category.id,\n                category: category.category\n            });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    categorySelections.sort(function(a, b) {\n        return a.category > b.category ? 1 : -1;\n    });\n    categorySelections.unshift({\n        id: \"\",\n        category: \"all\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Vocabulary Fill-in\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"fillin\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                        id: \"categorySelect\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"category\",\n                                                    children: \"category: \"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                    id: \"category\",\n                                                    name: \"category\",\n                                                    children: categorySelections.map(function(categorySelection, i) {\n                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: categorySelection.id,\n                                                            children: categorySelection.category\n                                                        }, i, false, {\n                                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                                            lineNumber: 64,\n                                                            columnNumber: 41\n                                                        }, _this);\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                        id: \"questions\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"q\".concat(question),\n                                                children: questionSet[question] && questionSet[question].question\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Fillin, \"DE7JtGNpSRLmzKOxWAHDsA8vHVU=\");\n_c = Fillin;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fillin);\nvar _c;\n$RefreshReg$(_c, \"Fillin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O29DQUNFOzBDQUNYLDhEQUFDUCxtRUFBTzs7OztvQ0FBVzswQ0FDbkIsOERBQUNnRCxLQUFHO2dDQUFDZixTQUFTLEVBQUMsbUJBQW1COzBDQUM5Qiw0RUFBQ2dCLE9BQUs7b0NBQUNDLElBQUksRUFBQyxRQUFRO29DQUFDdkIsRUFBRSxFQUFDLFdBQVc7b0NBQUN3QixPQUFPLEVBQUdwQyxpQkFBaUI7b0NBQUdnQyxLQUFLLEVBQUMsTUFBTTs7Ozs7d0NBQUc7Ozs7O29DQUMvRTs7Ozs7OzRCQUNIOzs7Ozs7b0JBQ0Q7MEJBQ1YsOERBQUNoRCxrRUFBTTs7OztvQkFBRzs7b0JBQ1gsQ0FDTjtDQUNKO0dBdEZRRyxNQUFNO0FBQU5BLEtBQUFBLE1BQU07O0FBb0dmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdm9jYWJ1bGFyeS9maWxsLWluLmpzPzFjYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgU2l0ZWhlYWRlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvc2l0ZUhlYWRlci50c3gnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9mb290ZXIudHN4JztcclxuaW1wb3J0IEFjY2VudHMgZnJvbSAnL3NyYy9jb21wb25lbnRzL2FjY2VudHMudHN4JztcclxuaW1wb3J0IHJhbmRvbU51bWJlckdlbmVyYXRvciBmcm9tICcuLi8uLi9oZWxwZXIvdXNlUmFuZG9tTnVtYmVyR2VuZXJhdG9yLnRzeCc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5mdW5jdGlvbiBGaWxsaW4oeyBkaWN0aW9uYXJ5LCBjYXRlZ29yaWVzIH0pIHtcclxuICAgIGNvbnN0IFtxdWVzdGlvblNldCwgc2V0UXVlc3Rpb25TZXRdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKCAwICk7XHJcblxyXG4gICAgY29uc3QgbnVtUXVlc3Rpb25zID0gNTtcclxuICAgIGNvbnN0IG51bU9wdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25zID0gW107XHJcbiAgICBjb25zdCBmaWxsaW5EaWN0aW9uYXJ5ID0gZGljdGlvbmFyeTtcclxuICAgIGNvbnN0IGRpY3Rpb25hcnlMZW5ndGggPSBkaWN0aW9uYXJ5Lmxlbmd0aDtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRRdWVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiggcXVlc3Rpb24gPD0gcXVlc3Rpb24gKSB7XHJcbiAgICAgICAgICAgIHNldFF1ZXN0aW9uKCBxdWVzdGlvbiArIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB3b3JkcyA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCBkaWN0aW9uYXJ5TGVuZ3RoICk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG51bVF1ZXN0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gd29yZHNbaV07XHJcbiAgICAgICAgICAgIGxldCBzZXQgPSB7fTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbk51bWJlcnM7XHJcbiAgICAgICAgICAgIGxldCByYW5kb21TcG90ID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCAxLCA1ICk7XHJcblxyXG4gICAgICAgICAgICBzZXQucXVlc3Rpb24gPSBmaWxsaW5EaWN0aW9uYXJ5W2N1cnJlbnRdLnRyYW5zbGF0aW9uO1xyXG4gICAgICAgICAgICBzZXQuYW5zd2VyID0gZmlsbGluRGljdGlvbmFyeVtjdXJyZW50XS53b3JkO1xyXG5cclxuICAgICAgICAgICAgc2V0UXVlc3Rpb25TZXQoIGN1cnJlbnQgPT4gWy4uLmN1cnJlbnQsIHNldF0gKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZm9yKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcclxuICAgICAgICBjYXRlZ29yeVNlbGVjdGlvbnMucHVzaCggXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBjYXRlZ29yeS5pZCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeS5jYXRlZ29yeVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY2F0ZWdvcnlTZWxlY3Rpb25zLnNvcnQoKGEsIGIpID0+IGEuY2F0ZWdvcnkgPiBiLmNhdGVnb3J5ID8gMSA6IC0xKTtcclxuICAgIGNhdGVnb3J5U2VsZWN0aW9ucy51bnNoaWZ0KHsgaWQ6ICcnLCBjYXRlZ29yeTogJ2FsbCcgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGgxPlZvY2FidWxhcnkgRmlsbC1pbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImZpbGxpblwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGlkPSdjYXRlZ29yeVNlbGVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+PGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yeVwiPmNhdGVnb3J5OiA8L2xhYmVsPjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImNhdGVnb3J5XCIgbmFtZT1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2F0ZWdvcnlTZWxlY3Rpb25zLm1hcCggKCBjYXRlZ29yeVNlbGVjdGlvbiwgaSApID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9eyBpIH0gdmFsdWU9eyBjYXRlZ29yeVNlbGVjdGlvbi5pZCB9PnsgY2F0ZWdvcnlTZWxlY3Rpb24uY2F0ZWdvcnkgfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGlkPVwicXVlc3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9eyBgcSR7IHF1ZXN0aW9uIH1gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcXVlc3Rpb25TZXRbcXVlc3Rpb25dICYmIHF1ZXN0aW9uU2V0W3F1ZXN0aW9uXS5xdWVzdGlvbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcXVlc3Rpb25TZXRbcXVlc3Rpb25dICYmIHF1ZXN0aW9uU2V0W3F1ZXN0aW9uXS5vcHRpb25zLm1hcCggb3B0aW9uID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPXsgYHEkeyBxdWVzdGlvbiB9YCB9IG5hbWU9eyBgcSR7IHF1ZXN0aW9uIH1gIH0gdmFsdWU9eyBvcHRpb24gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9eyBgcSR7IHF1ZXN0aW9uIH1gIH0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgb3B0aW9uIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NlbnRzPjwvQWNjZW50cz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucyBjb2wtbGctMTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwic3VibWl0QnRuXCIgb25DbGljaz17IGluY3JlbWVudFF1ZXN0aW9uIH0gdmFsdWU9XCJuZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxWb2NhYnVsYXJ5ID0gYXdhaXQgcHJpc21hLndvcmRzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxDYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hLmNhdGVnb3JpZXMuZmluZE1hbnkoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGRpY3Rpb25hcnk6IGFsbFZvY2FidWxhcnksXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IGFsbENhdGVnb3JpZXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGxpbjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTaXRlaGVhZGVyIiwiRm9vdGVyIiwiQWNjZW50cyIsInJhbmRvbU51bWJlckdlbmVyYXRvciIsIkZpbGxpbiIsImRpY3Rpb25hcnkiLCJjYXRlZ29yaWVzIiwicXVlc3Rpb25TZXQiLCJzZXRRdWVzdGlvblNldCIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJudW1RdWVzdGlvbnMiLCJudW1PcHRpb25zIiwiY2F0ZWdvcnlTZWxlY3Rpb25zIiwiZmlsbGluRGljdGlvbmFyeSIsImRpY3Rpb25hcnlMZW5ndGgiLCJsZW5ndGgiLCJpbmNyZW1lbnRRdWVzdGlvbiIsImN1cnJlbnQiLCJ3b3JkcyIsImkiLCJzZXQiLCJvcHRpb25OdW1iZXJzIiwicmFuZG9tU3BvdCIsInRyYW5zbGF0aW9uIiwiYW5zd2VyIiwid29yZCIsImNhdGVnb3J5IiwicHVzaCIsImlkIiwic29ydCIsImEiLCJiIiwidW5zaGlmdCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJmaWVsZHNldCIsImRsIiwiZHQiLCJsYWJlbCIsImh0bWxGb3IiLCJkZCIsInNlbGVjdCIsIm5hbWUiLCJtYXAiLCJjYXRlZ29yeVNlbGVjdGlvbiIsIm9wdGlvbiIsInZhbHVlIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/vocabulary/fill-in.js\n"));

/***/ })

});