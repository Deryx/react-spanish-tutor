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

/***/ "./pages/vocabulary/quiz.js":
/*!**********************************!*\
  !*** ./pages/vocabulary/quiz.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _src_components_radioGroup_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/radioGroup.tsx */ \"./src/components/radioGroup.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Quiz(param) {\n    var dictionary = param.dictionary, categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref[0], setQuestion = ref[1];\n    var numQuestions = 5;\n    var numOptions = 5;\n    var categorySelections = [];\n    var dictionaryLength = dictionary.length;\n    var questionSet = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(numQuestions, dictionaryLength);\n    var incrementQuestion = function() {\n        setQuestion(question + 1);\n    };\n    var options = [];\n    var newOptions = [];\n    var randomSpot;\n    for(var i = 0; i < numOptions - 1; i++){\n        newOptions.push((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(numOptions - 1, dictionaryLength));\n        randomSpot = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(1, 5);\n        newOptions[question].splice(randomSpot[0], 0, questionSet[question]);\n        options.push(newOptions);\n    }\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var category = _step.value;\n            categorySelections.push({\n                id: category.id,\n                category: category.category\n            });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    categorySelections.sort(function(a, b) {\n        return a.category > b.category ? 1 : -1;\n    });\n    categorySelections.unshift({\n        id: \"\",\n        category: \"all\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Vocabulary Quiz\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"quiz\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                        id: \"categorySelect\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"category\",\n                                                    children: \"category: \"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                    id: \"category\",\n                                                    name: \"category\",\n                                                    children: categorySelections.map(function(categorySelection, i) {\n                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: categorySelection.id,\n                                                            children: categorySelection.category\n                                                        }, i, false, {\n                                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                                            lineNumber: 56,\n                                                            columnNumber: 41\n                                                        }, _this);\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"q\".concat(question),\n                                                    children: questionSet[question] && dictionary[questionSet[question]].word\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                children: questionSet[question] && options[question].map(function(option) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                                type: \"radio\",\n                                                                id: \"q\".concat(question),\n                                                                name: \"q\".concat(question),\n                                                                value: option\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                                                lineNumber: 70,\n                                                                columnNumber: 41\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                                htmlFor: \"q\".concat(question),\n                                                                children: questionSet[question] && dictionary[option].translation\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                                                lineNumber: 71,\n                                                                columnNumber: 41\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 37\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\quiz.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Quiz, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Quiz;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7Z0VBQUdnQyxJQUFJLEVBQUcsR0FBRSxDQUFhLE9BQVZoQyxRQUFRLENBQUc7Z0VBQUdvQyxLQUFLLEVBQUdELE1BQU07Ozs7O3FFQUFLOzBFQUN6Riw4REFBQ1AsT0FBSztnRUFBQ0MsT0FBTyxFQUFHLEdBQUUsQ0FBYSxPQUFWN0IsUUFBUSxDQUFHOzBFQUMzQk8sV0FBVyxDQUFDUCxRQUFRLENBQUMsSUFBSUYsVUFBVSxDQUFDcUMsTUFBTSxDQUFDLENBQUNNLFdBQVc7Ozs7O3FFQUNyRDs7Ozs7OzZEQUNOO2lEQUFBLENBQ1Q7Ozs7O29EQUNBOzs7Ozs7NENBQ0o7Ozs7OztvQ0FDRTswQ0FDWCw4REFBQ0gsS0FBRztnQ0FBQ2hCLFNBQVMsRUFBQyxtQkFBbUI7MENBQzlCLDRFQUFDaUIsT0FBSztvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7b0NBQUN4QixFQUFFLEVBQUMsV0FBVztvQ0FBQzBCLE9BQU8sRUFBR2xDLGlCQUFpQjtvQ0FBRzRCLEtBQUssRUFBQyxNQUFNOzs7Ozt3Q0FBRzs7Ozs7b0NBQy9FOzs7Ozs7NEJBQ0g7Ozs7OztvQkFDRDswQkFDViw4REFBQzFDLGtFQUFNOzs7O29CQUFHOztvQkFDWCxDQUNOO0NBQ0o7R0E3RVFHLElBQUk7QUFBSkEsS0FBQUEsSUFBSTs7QUEyRmIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92b2NhYnVsYXJ5L3F1aXouanM/NzNjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgU2l0ZWhlYWRlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvc2l0ZUhlYWRlci50c3gnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9mb290ZXIudHN4JztcclxuaW1wb3J0IFJhZGlvZ3JvdXAgZnJvbSAnL3NyYy9jb21wb25lbnRzL3JhZGlvR3JvdXAudHN4JztcclxuaW1wb3J0IHJhbmRvbU51bWJlckdlbmVyYXRvciBmcm9tICcuLi8uLi9oZWxwZXIvdXNlUmFuZG9tTnVtYmVyR2VuZXJhdG9yLnRzeCc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5mdW5jdGlvbiBRdWl6KHsgZGljdGlvbmFyeSwgY2F0ZWdvcmllcyB9KSB7XHJcbiAgICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKCAwICk7XHJcblxyXG4gICAgY29uc3QgbnVtUXVlc3Rpb25zID0gNTtcclxuICAgIGNvbnN0IG51bU9wdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25zID0gW107XHJcbiAgICBjb25zdCBkaWN0aW9uYXJ5TGVuZ3RoID0gZGljdGlvbmFyeS5sZW5ndGg7XHJcbiAgICBjb25zdCBxdWVzdGlvblNldCA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCBkaWN0aW9uYXJ5TGVuZ3RoICk7XHJcbiAgICBjb25zdCBpbmNyZW1lbnRRdWVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRRdWVzdGlvbiggcXVlc3Rpb24gKyAxICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xyXG4gICAgY29uc3QgbmV3T3B0aW9ucyA9IFtdO1xyXG4gICAgbGV0IHJhbmRvbVNwb3Q7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtT3B0aW9ucyAtIDE7IGkrKykge1xyXG4gICAgICAgIG5ld09wdGlvbnMucHVzaCggcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1PcHRpb25zIC0gMSwgZGljdGlvbmFyeUxlbmd0aCApICk7XHJcbiAgICAgICAgcmFuZG9tU3BvdCA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggMSwgNSApO1xyXG4gICAgICAgIG5ld09wdGlvbnNbcXVlc3Rpb25dLnNwbGljZShyYW5kb21TcG90WzBdLCAwLCBxdWVzdGlvblNldFtxdWVzdGlvbl0pO1xyXG4gICAgICAgIG9wdGlvbnMucHVzaCggbmV3T3B0aW9ucyApO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcihjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3Rpb25zLnB1c2goIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogY2F0ZWdvcnkuaWQsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnkuY2F0ZWdvcnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNhdGVnb3J5U2VsZWN0aW9ucy5zb3J0KChhLCBiKSA9PiBhLmNhdGVnb3J5ID4gYi5jYXRlZ29yeSA/IDEgOiAtMSk7XHJcbiAgICBjYXRlZ29yeVNlbGVjdGlvbnMudW5zaGlmdCh7IGlkOiAnJywgY2F0ZWdvcnk6ICdhbGwnIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNpdGVoZWFkZXIgLz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxoMT5Wb2NhYnVsYXJ5IFF1aXo8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJxdWl6XCIgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS04IGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGwgaWQ9J2NhdGVnb3J5U2VsZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD48bGFiZWwgaHRtbEZvcj1cImNhdGVnb3J5XCI+Y2F0ZWdvcnk6IDwvbGFiZWw+PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiY2F0ZWdvcnlcIiBuYW1lPVwiY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYXRlZ29yeVNlbGVjdGlvbnMubWFwKCAoIGNhdGVnb3J5U2VsZWN0aW9uLCBpICkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17IGkgfSB2YWx1ZT17IGNhdGVnb3J5U2VsZWN0aW9uLmlkIH0+eyBjYXRlZ29yeVNlbGVjdGlvbi5jYXRlZ29yeSB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGwgaWQ9XCJxdWVzdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17IGBxJHsgcXVlc3Rpb24gfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBxdWVzdGlvblNldFtxdWVzdGlvbl0gJiYgZGljdGlvbmFyeVtxdWVzdGlvblNldFtxdWVzdGlvbl1dLndvcmQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcXVlc3Rpb25TZXRbcXVlc3Rpb25dICYmIG9wdGlvbnNbcXVlc3Rpb25dLm1hcCggb3B0aW9uID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPXsgYHEkeyBxdWVzdGlvbiB9YCB9IG5hbWU9eyBgcSR7IHF1ZXN0aW9uIH1gIH0gdmFsdWU9eyBvcHRpb24gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9eyBgcSR7IHF1ZXN0aW9uIH1gIH0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcXVlc3Rpb25TZXRbcXVlc3Rpb25dICYmIGRpY3Rpb25hcnlbb3B0aW9uXS50cmFuc2xhdGlvbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zIGNvbC1sZy0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzdWJtaXRCdG5cIiBvbkNsaWNrPXsgaW5jcmVtZW50UXVlc3Rpb24gfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbFZvY2FidWxhcnkgPSBhd2FpdCBwcmlzbWEud29yZHMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBhd2FpdCBwcmlzbWEuY2F0ZWdvcmllcy5maW5kTWFueSgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZGljdGlvbmFyeTogYWxsVm9jYWJ1bGFyeSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogYWxsQ2F0ZWdvcmllc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpejsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTaXRlaGVhZGVyIiwiRm9vdGVyIiwiUmFkaW9ncm91cCIsInJhbmRvbU51bWJlckdlbmVyYXRvciIsIlF1aXoiLCJkaWN0aW9uYXJ5IiwiY2F0ZWdvcmllcyIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJudW1RdWVzdGlvbnMiLCJudW1PcHRpb25zIiwiY2F0ZWdvcnlTZWxlY3Rpb25zIiwiZGljdGlvbmFyeUxlbmd0aCIsImxlbmd0aCIsInF1ZXN0aW9uU2V0IiwiaW5jcmVtZW50UXVlc3Rpb24iLCJvcHRpb25zIiwibmV3T3B0aW9ucyIsInJhbmRvbVNwb3QiLCJpIiwicHVzaCIsInNwbGljZSIsImNhdGVnb3J5IiwiaWQiLCJzb3J0IiwiYSIsImIiLCJ1bnNoaWZ0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImZpZWxkc2V0IiwiZGwiLCJkdCIsImxhYmVsIiwiaHRtbEZvciIsImRkIiwic2VsZWN0IiwibmFtZSIsIm1hcCIsImNhdGVnb3J5U2VsZWN0aW9uIiwib3B0aW9uIiwidmFsdWUiLCJ3b3JkIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwidHJhbnNsYXRpb24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/vocabulary/quiz.js\n"));

/***/ })

});