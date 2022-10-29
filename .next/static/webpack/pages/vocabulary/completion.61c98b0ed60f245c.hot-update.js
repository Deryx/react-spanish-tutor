"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/vocabulary/completion",{

/***/ "./pages/vocabulary/completion.js":
/*!****************************************!*\
  !*** ./pages/vocabulary/completion.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/accents.tsx */ \"./src/components/accents.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Completion(param) {\n    var dictionary = param.dictionary, categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), questionSet = ref[0], setQuestionSet = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref1[0], setQuestion = ref1[1];\n    var BLANK = \" \";\n    var numQuestions = 5;\n    var numOptions = 5;\n    var categorySelections = [];\n    var completionDictionary = dictionary;\n    var dictionaryLength = dictionary.length;\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    var createCategorySelect = function() {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var category = _step.value;\n                categorySelections.push({\n                    id: category.id,\n                    category: category.category\n                });\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        categorySelections.sort(function(a, b) {\n            return a.category > b.category ? 1 : -1;\n        });\n        categorySelections.unshift({\n            id: \"\",\n            category: \"all\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var current = words[i];\n            var currentWord = completionDictionary[current].word.split(\"\");\n            var currentLength = currentWord.length;\n            var numberBlanks = Math.ceil(currentLength / 2);\n            var blanksArray = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(numberBlanks, currentLength);\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = blanksArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var index = _step.value;\n                    currentWord[index] = BLANK;\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n            var set = {};\n            var optionNumbers = void 0;\n            set.question = currentWord.join(\"\");\n            set.translation = completionDictionary[current].translation;\n            set.answer = completionDictionary[current].word;\n            setQuestionSet(function(current) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(current).concat([\n                    set\n                ]);\n            });\n        };\n        var words = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(numQuestions, dictionaryLength);\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    createCategorySelect();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"pageContainer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Vocabulary Completion\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"completion\",\n                    className: \"col-xs-12 col-sm-8 col-lg-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                            className: \"col-lg-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    id: \"categorySelect\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"category\",\n                                                children: \"category: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                id: \"category\",\n                                                name: \"category\",\n                                                children: categorySelections.map(function(categorySelection, i) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: categorySelection.id,\n                                                        children: categorySelection.category\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    id: \"questions\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: [\n                                                    \"[ \",\n                                                    questionSet[question] && questionSet[question].translation,\n                                                    \" ]\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                children: questionSet[question] && questionSet[question].question.split(\"\").map(function(letter, index) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            value: letter,\n                                                            disabled: letter !== BLANK\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 59\n                                                        }, _this)\n                                                    }, index, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                            lineNumber: 92,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons col-lg-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"button\",\n                                id: \"submitBtn\",\n                                onClick: incrementQuestion,\n                                value: \"next\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Completion, \"DE7JtGNpSRLmzKOxWAHDsA8vHVU=\");\n_c = Completion;\nfunction generateRandomNumbers(arrLength, maxNumber) {\n    var numArray = [];\n    var index = 0;\n    while(index < arrLength){\n        var newNumber = Math.floor(Math.random() * maxNumber);\n        if (numArray.indexOf(newNumber) === -1) {\n            numArray.push(newNumber);\n            index++;\n        }\n    }\n    return numArray;\n}\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Completion);\nvar _c;\n$RefreshReg$(_c, \"Completion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs2REFBZ0U7aURBQUEsQ0FDbEY7Ozs7O29EQUNBOzs7OztnREFDSjs7Ozs7O3dDQUNKOzs7Ozs7Z0NBQ0U7c0NBQ1gsOERBQUNwQyxtRUFBTzs7OztnQ0FBVztzQ0FDbkIsOERBQUNnRSxLQUFHOzRCQUFDckIsU0FBUyxFQUFDLG1CQUFtQjtzQ0FDOUIsNEVBQUNtQixPQUFLO2dDQUFDRyxJQUFJLEVBQUMsUUFBUTtnQ0FBQzdDLEVBQUUsRUFBQyxXQUFXO2dDQUFDOEMsT0FBTyxFQUFHbEQsaUJBQWlCO2dDQUFHeUMsS0FBSyxFQUFDLE1BQU07Ozs7O29DQUFHOzs7OztnQ0FDL0U7Ozs7Ozt3QkFDSDs7Ozs7O2dCQUNEO3FCQUNYLENBQ047Q0FDSjtHQTVGUXZELFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQThGbkIsU0FBU2lFLHFCQUFxQixDQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRztJQUNuRCxJQUFNQyxRQUFRLEdBQUcsRUFBRTtJQUNuQixJQUFJbEMsS0FBSyxHQUFHLENBQUM7SUFFYixNQUFPQSxLQUFLLEdBQUdnQyxTQUFTLENBQUc7UUFDdkIsSUFBSUcsU0FBUyxHQUFHdEMsSUFBSSxDQUFDdUMsS0FBSyxDQUFHdkMsSUFBSSxDQUFDd0MsTUFBTSxFQUFFLEdBQUdKLFNBQVMsQ0FBRztRQUN6RCxJQUFJQyxRQUFRLENBQUNJLE9BQU8sQ0FBRUgsU0FBUyxDQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUc7WUFDdkNELFFBQVEsQ0FBQ25ELElBQUksQ0FBRW9ELFNBQVMsQ0FBRSxDQUFDO1lBQzNCbkMsS0FBSyxFQUFFLENBQUM7U0FDWDtLQUNKO0lBRUQsT0FBT2tDLFFBQVEsQ0FBQztDQUNuQjs7QUFjRCwrREFBZXBFLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92b2NhYnVsYXJ5L2NvbXBsZXRpb24uanM/NGM3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBBY2NlbnRzIGZyb20gJy9zcmMvY29tcG9uZW50cy9hY2NlbnRzLnRzeCc7XHJcbmltcG9ydCByYW5kb21OdW1iZXJHZW5lcmF0b3IgZnJvbSAnLi4vLi4vaGVscGVyL3VzZVJhbmRvbU51bWJlckdlbmVyYXRvci50c3gnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZnVuY3Rpb24gQ29tcGxldGlvbih7IGRpY3Rpb25hcnksIGNhdGVnb3JpZXMgfSkge1xyXG4gICAgY29uc3QgW3F1ZXN0aW9uU2V0LCBzZXRRdWVzdGlvblNldF0gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoIDAgKTtcclxuXHJcbiAgICBjb25zdCBCTEFOSyA9ICcgJztcclxuICAgIGNvbnN0IG51bVF1ZXN0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBudW1PcHRpb25zID0gNTtcclxuICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9ucyA9IFtdO1xyXG4gICAgY29uc3QgY29tcGxldGlvbkRpY3Rpb25hcnkgPSBkaWN0aW9uYXJ5O1xyXG4gICAgY29uc3QgZGljdGlvbmFyeUxlbmd0aCA9IGRpY3Rpb25hcnkubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudFF1ZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBxdWVzdGlvbiA8PSBxdWVzdGlvbiApIHtcclxuICAgICAgICAgICAgc2V0UXVlc3Rpb24oIHF1ZXN0aW9uICsgMSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVDYXRlZ29yeVNlbGVjdCA9ICgpID0+IHtcclxuICAgICAgICBmb3IoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICBjYXRlZ29yeVNlbGVjdGlvbnMucHVzaCggXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNhdGVnb3J5LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeS5jYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjYXRlZ29yeVNlbGVjdGlvbnMuc29ydCgoYSwgYikgPT4gYS5jYXRlZ29yeSA+IGIuY2F0ZWdvcnkgPyAxIDogLTEpO1xyXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0aW9ucy51bnNoaWZ0KHsgaWQ6ICcnLCBjYXRlZ29yeTogJ2FsbCcgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7ICAgIFxyXG4gICAgICAgIGNvbnN0IHdvcmRzID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIGRpY3Rpb25hcnlMZW5ndGggKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtUXVlc3Rpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB3b3Jkc1tpXTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRXb3JkID0gY29tcGxldGlvbkRpY3Rpb25hcnlbY3VycmVudF0ud29yZC5zcGxpdCgnJyk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGVuZ3RoID0gY3VycmVudFdvcmQubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyQmxhbmtzID0gTWF0aC5jZWlsKCBjdXJyZW50TGVuZ3RoIC8gMiApO1xyXG4gICAgICAgICAgICBsZXQgYmxhbmtzQXJyYXkgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bWJlckJsYW5rcywgY3VycmVudExlbmd0aCApO1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgaW5kZXggb2YgYmxhbmtzQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRXb3JkW2luZGV4XSA9IEJMQU5LO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzZXQgPSB7fTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbk51bWJlcnM7XHJcblxyXG4gICAgICAgICAgICBzZXQucXVlc3Rpb24gPSBjdXJyZW50V29yZC5qb2luKCcnKTtcclxuICAgICAgICAgICAgc2V0LnRyYW5zbGF0aW9uID0gY29tcGxldGlvbkRpY3Rpb25hcnlbY3VycmVudF0udHJhbnNsYXRpb247XHJcbiAgICAgICAgICAgIHNldC5hbnN3ZXIgPSBjb21wbGV0aW9uRGljdGlvbmFyeVtjdXJyZW50XS53b3JkO1xyXG5cclxuICAgICAgICAgICAgc2V0UXVlc3Rpb25TZXQoIGN1cnJlbnQgPT4gWy4uLmN1cnJlbnQsIHNldF0gKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY3JlYXRlQ2F0ZWdvcnlTZWxlY3QoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8aDE+Vm9jYWJ1bGFyeSBDb21wbGV0aW9uPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiY29tcGxldGlvblwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGlkPSdjYXRlZ29yeVNlbGVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+PGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yeVwiPmNhdGVnb3J5OiA8L2xhYmVsPjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImNhdGVnb3J5XCIgbmFtZT1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2F0ZWdvcnlTZWxlY3Rpb25zLm1hcCggKCBjYXRlZ29yeVNlbGVjdGlvbiwgaSApID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9eyBpIH0gdmFsdWU9eyBjYXRlZ29yeVNlbGVjdGlvbi5pZCB9PnsgY2F0ZWdvcnlTZWxlY3Rpb24uY2F0ZWdvcnkgfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGlkPVwicXVlc3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlsgeyBxdWVzdGlvblNldFtxdWVzdGlvbl0gJiYgcXVlc3Rpb25TZXRbcXVlc3Rpb25dLnRyYW5zbGF0aW9uIH0gXTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBxdWVzdGlvblNldFtxdWVzdGlvbl0gJiYgcXVlc3Rpb25TZXRbcXVlc3Rpb25dLnF1ZXN0aW9uLnNwbGl0KCcnKS5tYXAoIChsZXR0ZXIsIGluZGV4KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9eyBpbmRleCB9PjxpbnB1dCB2YWx1ZT17IGxldHRlciB9IGRpc2FibGVkPXsgbGV0dGVyICE9PSBCTEFOSyB9IC8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjZW50cz48L0FjY2VudHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMgY29sLWxnLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cInN1Ym1pdEJ0blwiIG9uQ2xpY2s9eyBpbmNyZW1lbnRRdWVzdGlvbiB9IHZhbHVlPVwibmV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21OdW1iZXJzKCBhcnJMZW5ndGgsIG1heE51bWJlciApIHtcclxuICAgIGNvbnN0IG51bUFycmF5ID0gW107XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG5cclxuICAgIHdoaWxlKCBpbmRleCA8IGFyckxlbmd0aCApIHtcclxuICAgICAgICBsZXQgbmV3TnVtYmVyID0gTWF0aC5mbG9vcigoIE1hdGgucmFuZG9tKCkgKiBtYXhOdW1iZXIgKSk7XHJcbiAgICAgICAgaWYoIG51bUFycmF5LmluZGV4T2YoIG5ld051bWJlciApID09PSAtMSApIHtcclxuICAgICAgICAgICAgbnVtQXJyYXkucHVzaCggbmV3TnVtYmVyICk7XHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudW1BcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbFZvY2FidWxhcnkgPSBhd2FpdCBwcmlzbWEud29yZHMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBhd2FpdCBwcmlzbWEuY2F0ZWdvcmllcy5maW5kTWFueSgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZGljdGlvbmFyeTogYWxsVm9jYWJ1bGFyeSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogYWxsQ2F0ZWdvcmllc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcGxldGlvbjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBY2NlbnRzIiwicmFuZG9tTnVtYmVyR2VuZXJhdG9yIiwiQ29tcGxldGlvbiIsImRpY3Rpb25hcnkiLCJjYXRlZ29yaWVzIiwicXVlc3Rpb25TZXQiLCJzZXRRdWVzdGlvblNldCIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJCTEFOSyIsIm51bVF1ZXN0aW9ucyIsIm51bU9wdGlvbnMiLCJjYXRlZ29yeVNlbGVjdGlvbnMiLCJjb21wbGV0aW9uRGljdGlvbmFyeSIsImRpY3Rpb25hcnlMZW5ndGgiLCJsZW5ndGgiLCJpbmNyZW1lbnRRdWVzdGlvbiIsImNyZWF0ZUNhdGVnb3J5U2VsZWN0IiwiY2F0ZWdvcnkiLCJwdXNoIiwiaWQiLCJzb3J0IiwiYSIsImIiLCJ1bnNoaWZ0IiwiY3VycmVudCIsIndvcmRzIiwiaSIsImN1cnJlbnRXb3JkIiwid29yZCIsInNwbGl0IiwiY3VycmVudExlbmd0aCIsIm51bWJlckJsYW5rcyIsIk1hdGgiLCJjZWlsIiwiYmxhbmtzQXJyYXkiLCJpbmRleCIsInNldCIsIm9wdGlvbk51bWJlcnMiLCJqb2luIiwidHJhbnNsYXRpb24iLCJhbnN3ZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiZmllbGRzZXQiLCJkbCIsImR0IiwibGFiZWwiLCJodG1sRm9yIiwiZGQiLCJzZWxlY3QiLCJuYW1lIiwibWFwIiwiY2F0ZWdvcnlTZWxlY3Rpb24iLCJvcHRpb24iLCJ2YWx1ZSIsImgyIiwidWwiLCJsZXR0ZXIiLCJsaSIsImlucHV0IiwiZGlzYWJsZWQiLCJkaXYiLCJ0eXBlIiwib25DbGljayIsImdlbmVyYXRlUmFuZG9tTnVtYmVycyIsImFyckxlbmd0aCIsIm1heE51bWJlciIsIm51bUFycmF5IiwibmV3TnVtYmVyIiwiZmxvb3IiLCJyYW5kb20iLCJpbmRleE9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/vocabulary/completion.js\n"));

/***/ })

});