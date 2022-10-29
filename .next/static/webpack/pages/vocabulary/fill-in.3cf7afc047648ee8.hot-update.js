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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/accents.tsx */ \"./src/components/accents.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Fillin(param) {\n    var dictionary = param.dictionary, categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), questionSet = ref[0], setQuestionSet = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref1[0], setQuestion = ref1[1];\n    var numQuestions = 5;\n    var numOptions = 5;\n    var categorySelections = [];\n    var fillinDictionary = dictionary;\n    var dictionaryLength = dictionary.length;\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    var createCategorySelect = function() {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var category = _step.value;\n                categorySelections.push({\n                    id: category.id,\n                    category: category.category\n                });\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        categorySelections.sort(function(a, b) {\n            return a.category > b.category ? 1 : -1;\n        });\n        categorySelections.unshift({\n            id: \"\",\n            category: \"all\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var current = words[i];\n            var set = {};\n            var optionNumbers = void 0;\n            var randomSpot = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(1, 5);\n            set.question = fillinDictionary[current].translation;\n            set.answer = fillinDictionary[current].word;\n            setQuestionSet(function(current) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(current).concat([\n                    set\n                ]);\n            });\n        };\n        var words = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(numQuestions, dictionaryLength);\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    createCategorySelect();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Vocabulary Fill-in\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"fillin\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                        id: \"categorySelect\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"category\",\n                                                    children: \"category: \"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                    id: \"category\",\n                                                    name: \"category\",\n                                                    children: categorySelections.map(function(categorySelection, i) {\n                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: categorySelection.id,\n                                                            children: categorySelection.category\n                                                        }, i, false, {\n                                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                                            lineNumber: 68,\n                                                            columnNumber: 41\n                                                        }, _this);\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"q\".concat(question),\n                                                    children: questionSet[question] && questionSet[question].question\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {}, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                lineNumber: 94,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                                lineNumber: 95,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\fill-in.js\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Fillin, \"DE7JtGNpSRLmzKOxWAHDsA8vHVU=\");\n_c = Fillin;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fillin);\nvar _c;\n$RefreshReg$(_c, \"Fillin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJRixXQUFXLENBQUNFLFFBQVEsQ0FBQyxDQUFDQSxRQUFROzs7Ozt3REFDckQ7Ozs7O29EQUNQOzBEQUNMLDhEQUFDbUMsSUFBRTswREFDQyw0RUFBQ08sT0FBSzs7Ozt3REFBRzs7Ozs7b0RBQ1I7Ozs7Ozs0Q0FXSjs7Ozs7O29DQUNFOzBDQUNYLDhEQUFDakQsbUVBQU87Ozs7b0NBQVc7MENBQ25CLDhEQUFDa0QsS0FBRztnQ0FBQ2hCLFNBQVMsRUFBQyxtQkFBbUI7MENBQzlCLDRFQUFDZSxPQUFLO29DQUFDRSxJQUFJLEVBQUMsUUFBUTtvQ0FBQ2hDLEVBQUUsRUFBQyxXQUFXO29DQUFDaUMsT0FBTyxFQUFHckMsaUJBQWlCO29DQUFHaUMsS0FBSyxFQUFDLE1BQU07Ozs7O3dDQUFHOzs7OztvQ0FDL0U7Ozs7Ozs0QkFDSDs7Ozs7O29CQUNEOzBCQUNWLDhEQUFDakQsa0VBQU07Ozs7b0JBQUc7O29CQUNYLENBQ047Q0FDSjtHQTdGUUcsTUFBTTtBQUFOQSxLQUFBQSxNQUFNOztBQTJHZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZvY2FidWxhcnkvZmlsbC1pbi5qcz8xY2FhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IFNpdGVoZWFkZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3NpdGVIZWFkZXIudHN4JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeCc7XHJcbmltcG9ydCBBY2NlbnRzIGZyb20gJy9zcmMvY29tcG9uZW50cy9hY2NlbnRzLnRzeCc7XHJcbmltcG9ydCByYW5kb21OdW1iZXJHZW5lcmF0b3IgZnJvbSAnLi4vLi4vaGVscGVyL3VzZVJhbmRvbU51bWJlckdlbmVyYXRvci50c3gnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZnVuY3Rpb24gRmlsbGluKHsgZGljdGlvbmFyeSwgY2F0ZWdvcmllcyB9KSB7XHJcbiAgICBjb25zdCBbcXVlc3Rpb25TZXQsIHNldFF1ZXN0aW9uU2V0XSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZSggMCApO1xyXG5cclxuICAgIGNvbnN0IG51bVF1ZXN0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBudW1PcHRpb25zID0gNTtcclxuICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9ucyA9IFtdO1xyXG4gICAgY29uc3QgZmlsbGluRGljdGlvbmFyeSA9IGRpY3Rpb25hcnk7XHJcbiAgICBjb25zdCBkaWN0aW9uYXJ5TGVuZ3RoID0gZGljdGlvbmFyeS5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgaW5jcmVtZW50UXVlc3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIHF1ZXN0aW9uIDw9IHF1ZXN0aW9uICkge1xyXG4gICAgICAgICAgICBzZXRRdWVzdGlvbiggcXVlc3Rpb24gKyAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUNhdGVnb3J5U2VsZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGZvcihjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5U2VsZWN0aW9ucy5wdXNoKCBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogY2F0ZWdvcnkuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LmNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0aW9ucy5zb3J0KChhLCBiKSA9PiBhLmNhdGVnb3J5ID4gYi5jYXRlZ29yeSA/IDEgOiAtMSk7XHJcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3Rpb25zLnVuc2hpZnQoeyBpZDogJycsIGNhdGVnb3J5OiAnYWxsJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdvcmRzID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIGRpY3Rpb25hcnlMZW5ndGggKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtUXVlc3Rpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB3b3Jkc1tpXTtcclxuICAgICAgICAgICAgbGV0IHNldCA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uTnVtYmVycztcclxuICAgICAgICAgICAgbGV0IHJhbmRvbVNwb3QgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIDEsIDUgKTtcclxuXHJcbiAgICAgICAgICAgIHNldC5xdWVzdGlvbiA9IGZpbGxpbkRpY3Rpb25hcnlbY3VycmVudF0udHJhbnNsYXRpb247XHJcbiAgICAgICAgICAgIHNldC5hbnN3ZXIgPSBmaWxsaW5EaWN0aW9uYXJ5W2N1cnJlbnRdLndvcmQ7XHJcblxyXG4gICAgICAgICAgICBzZXRRdWVzdGlvblNldCggY3VycmVudCA9PiBbLi4uY3VycmVudCwgc2V0XSApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjcmVhdGVDYXRlZ29yeVNlbGVjdCgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxoMT5Wb2NhYnVsYXJ5IEZpbGwtaW48L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJmaWxsaW5cIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbCBpZD0nY2F0ZWdvcnlTZWxlY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PjxsYWJlbCBodG1sRm9yPVwiY2F0ZWdvcnlcIj5jYXRlZ29yeTogPC9sYWJlbD48L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJjYXRlZ29yeVwiIG5hbWU9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhdGVnb3J5U2VsZWN0aW9ucy5tYXAoICggY2F0ZWdvcnlTZWxlY3Rpb24sIGkgKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXsgaSB9IHZhbHVlPXsgY2F0ZWdvcnlTZWxlY3Rpb24uaWQgfT57IGNhdGVnb3J5U2VsZWN0aW9uLmNhdGVnb3J5IH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbCBpZD1cInF1ZXN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXsgYHEkeyBxdWVzdGlvbiB9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHF1ZXN0aW9uU2V0W3F1ZXN0aW9uXSAmJiBxdWVzdGlvblNldFtxdWVzdGlvbl0ucXVlc3Rpb24gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBxdWVzdGlvblNldFtxdWVzdGlvbl0gJiYgcXVlc3Rpb25TZXRbcXVlc3Rpb25dLm9wdGlvbnMubWFwKCBvcHRpb24gPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9eyBgcSR7IHF1ZXN0aW9uIH1gIH0gbmFtZT17IGBxJHsgcXVlc3Rpb24gfWAgfSB2YWx1ZT17IG9wdGlvbiB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17IGBxJHsgcXVlc3Rpb24gfWAgfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBvcHRpb24gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY2VudHM+PC9BY2NlbnRzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zIGNvbC1sZy0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzdWJtaXRCdG5cIiBvbkNsaWNrPXsgaW5jcmVtZW50UXVlc3Rpb24gfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbFZvY2FidWxhcnkgPSBhd2FpdCBwcmlzbWEud29yZHMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBhd2FpdCBwcmlzbWEuY2F0ZWdvcmllcy5maW5kTWFueSgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZGljdGlvbmFyeTogYWxsVm9jYWJ1bGFyeSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogYWxsQ2F0ZWdvcmllc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsbGluOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNpdGVoZWFkZXIiLCJGb290ZXIiLCJBY2NlbnRzIiwicmFuZG9tTnVtYmVyR2VuZXJhdG9yIiwiRmlsbGluIiwiZGljdGlvbmFyeSIsImNhdGVnb3JpZXMiLCJxdWVzdGlvblNldCIsInNldFF1ZXN0aW9uU2V0IiwicXVlc3Rpb24iLCJzZXRRdWVzdGlvbiIsIm51bVF1ZXN0aW9ucyIsIm51bU9wdGlvbnMiLCJjYXRlZ29yeVNlbGVjdGlvbnMiLCJmaWxsaW5EaWN0aW9uYXJ5IiwiZGljdGlvbmFyeUxlbmd0aCIsImxlbmd0aCIsImluY3JlbWVudFF1ZXN0aW9uIiwiY3JlYXRlQ2F0ZWdvcnlTZWxlY3QiLCJjYXRlZ29yeSIsInB1c2giLCJpZCIsInNvcnQiLCJhIiwiYiIsInVuc2hpZnQiLCJjdXJyZW50Iiwid29yZHMiLCJpIiwic2V0Iiwib3B0aW9uTnVtYmVycyIsInJhbmRvbVNwb3QiLCJ0cmFuc2xhdGlvbiIsImFuc3dlciIsIndvcmQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiZmllbGRzZXQiLCJkbCIsImR0IiwibGFiZWwiLCJodG1sRm9yIiwiZGQiLCJzZWxlY3QiLCJuYW1lIiwibWFwIiwiY2F0ZWdvcnlTZWxlY3Rpb24iLCJvcHRpb24iLCJ2YWx1ZSIsImlucHV0IiwiZGl2IiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/vocabulary/fill-in.js\n"));

/***/ })

});