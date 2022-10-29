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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/accents.tsx */ \"./src/components/accents.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Completion(param) {\n    var dictionary = param.dictionary, categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), questionSet = ref[0], setQuestionSet = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref1[0], setQuestion = ref1[1];\n    var numQuestions = 5;\n    var numOptions = 5;\n    var categorySelections = [];\n    var completionDictionary = dictionary;\n    var dictionaryLength = dictionary.length;\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    var createCategorySelect = function() {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var category = _step.value;\n                categorySelections.push({\n                    id: category.id,\n                    category: category.category\n                });\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        categorySelections.sort(function(a, b) {\n            return a.category > b.category ? 1 : -1;\n        });\n        categorySelections.unshift({\n            id: \"\",\n            category: \"all\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var current = words[i];\n            var set = {};\n            var optionNumbers = void 0;\n            var randomSpot = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(1, 5);\n            set.question = completionDictionary[current].word;\n            set.translation = completionDictionary[current].translation;\n            set.answer = completionDictionary[current].word;\n            setQuestionSet(function(current) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(current).concat([\n                    set\n                ]);\n            });\n        };\n        var words = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(numQuestions, dictionaryLength);\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    createCategorySelect();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"pageContainer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Vocabulary Completion\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"completion\",\n                    className: \"col-xs-12 col-sm-8 col-lg-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                            className: \"col-lg-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    id: \"categorySelect\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"category\",\n                                                children: \"category: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                id: \"category\",\n                                                name: \"category\",\n                                                children: categorySelections.map(function(categorySelection, i) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: categorySelection.id,\n                                                        children: categorySelection.category\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    id: \"questions\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: [\n                                                    \"[ \",\n                                                    questionSet[question] && questionSet[question].translation,\n                                                    \" ]\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                children: questionSet[question] && questionSet[question].question.split(\"\").map(function(letter, index) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            value: letter\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                            lineNumber: 79,\n                                                            columnNumber: 59\n                                                        }, _this)\n                                                    }, index, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons col-lg-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"button\",\n                                id: \"submitBtn\",\n                                onClick: incrementQuestion,\n                                value: \"next\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n            lineNumber: 58,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Completion, \"DE7JtGNpSRLmzKOxWAHDsA8vHVU=\");\n_c = Completion;\nfunction generateRandomNumbers(arrLength, maxNumber) {\n    var numArray = [];\n    var index = 0;\n    while(index < arrLength){\n        var newNumber = Math.floor(Math.random() * maxNumber);\n        if (numArray.indexOf(newNumber) === -1) {\n            numArray.push(newNumber);\n            index++;\n        }\n    }\n    return numArray;\n}\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Completion);\nvar _c;\n$RefreshReg$(_c, \"Completion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLENBQUc7UUFDekQsSUFBSUMsUUFBUSxDQUFDSyxPQUFPLENBQUVKLFNBQVMsQ0FBRSxLQUFLLENBQUMsQ0FBQyxFQUFHO1lBQ3ZDRCxRQUFRLENBQUM1QyxJQUFJLENBQUU2QyxTQUFTLENBQUUsQ0FBQztZQUMzQlYsS0FBSyxFQUFFLENBQUM7U0FDWDtLQUNKO0lBRUQsT0FBT1MsUUFBUSxDQUFDO0NBQ25COztBQWNELCtEQUFlNUQsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZvY2FidWxhcnkvY29tcGxldGlvbi5qcz80YzdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IEFjY2VudHMgZnJvbSAnL3NyYy9jb21wb25lbnRzL2FjY2VudHMudHN4JztcclxuaW1wb3J0IHJhbmRvbU51bWJlckdlbmVyYXRvciBmcm9tICcuLi8uLi9oZWxwZXIvdXNlUmFuZG9tTnVtYmVyR2VuZXJhdG9yLnRzeCc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5mdW5jdGlvbiBDb21wbGV0aW9uKHsgZGljdGlvbmFyeSwgY2F0ZWdvcmllcyB9KSB7XHJcbiAgICBjb25zdCBbcXVlc3Rpb25TZXQsIHNldFF1ZXN0aW9uU2V0XSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZSggMCApO1xyXG5cclxuICAgIGNvbnN0IG51bVF1ZXN0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBudW1PcHRpb25zID0gNTtcclxuICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9ucyA9IFtdO1xyXG4gICAgY29uc3QgY29tcGxldGlvbkRpY3Rpb25hcnkgPSBkaWN0aW9uYXJ5O1xyXG4gICAgY29uc3QgZGljdGlvbmFyeUxlbmd0aCA9IGRpY3Rpb25hcnkubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudFF1ZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBxdWVzdGlvbiA8PSBxdWVzdGlvbiApIHtcclxuICAgICAgICAgICAgc2V0UXVlc3Rpb24oIHF1ZXN0aW9uICsgMSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVDYXRlZ29yeVNlbGVjdCA9ICgpID0+IHtcclxuICAgICAgICBmb3IoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICBjYXRlZ29yeVNlbGVjdGlvbnMucHVzaCggXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNhdGVnb3J5LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeS5jYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjYXRlZ29yeVNlbGVjdGlvbnMuc29ydCgoYSwgYikgPT4gYS5jYXRlZ29yeSA+IGIuY2F0ZWdvcnkgPyAxIDogLTEpO1xyXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0aW9ucy51bnNoaWZ0KHsgaWQ6ICcnLCBjYXRlZ29yeTogJ2FsbCcgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7ICAgIFxyXG4gICAgICAgIGNvbnN0IHdvcmRzID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIGRpY3Rpb25hcnlMZW5ndGggKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtUXVlc3Rpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB3b3Jkc1tpXTtcclxuICAgICAgICAgICAgbGV0IHNldCA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uTnVtYmVycztcclxuICAgICAgICAgICAgbGV0IHJhbmRvbVNwb3QgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIDEsIDUgKTtcclxuXHJcbiAgICAgICAgICAgIHNldC5xdWVzdGlvbiA9IGNvbXBsZXRpb25EaWN0aW9uYXJ5W2N1cnJlbnRdLndvcmQ7XHJcbiAgICAgICAgICAgIHNldC50cmFuc2xhdGlvbiA9IGNvbXBsZXRpb25EaWN0aW9uYXJ5W2N1cnJlbnRdLnRyYW5zbGF0aW9uO1xyXG4gICAgICAgICAgICBzZXQuYW5zd2VyID0gY29tcGxldGlvbkRpY3Rpb25hcnlbY3VycmVudF0ud29yZDtcclxuXHJcbiAgICAgICAgICAgIHNldFF1ZXN0aW9uU2V0KCBjdXJyZW50ID0+IFsuLi5jdXJyZW50LCBzZXRdICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNyZWF0ZUNhdGVnb3J5U2VsZWN0KCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGgxPlZvY2FidWxhcnkgQ29tcGxldGlvbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImNvbXBsZXRpb25cIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbCBpZD0nY2F0ZWdvcnlTZWxlY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PjxsYWJlbCBodG1sRm9yPVwiY2F0ZWdvcnlcIj5jYXRlZ29yeTogPC9sYWJlbD48L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJjYXRlZ29yeVwiIG5hbWU9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhdGVnb3J5U2VsZWN0aW9ucy5tYXAoICggY2F0ZWdvcnlTZWxlY3Rpb24sIGkgKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXsgaSB9IHZhbHVlPXsgY2F0ZWdvcnlTZWxlY3Rpb24uaWQgfT57IGNhdGVnb3J5U2VsZWN0aW9uLmNhdGVnb3J5IH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbCBpZD1cInF1ZXN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5bIHsgcXVlc3Rpb25TZXRbcXVlc3Rpb25dICYmIHF1ZXN0aW9uU2V0W3F1ZXN0aW9uXS50cmFuc2xhdGlvbiB9IF08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcXVlc3Rpb25TZXRbcXVlc3Rpb25dICYmIHF1ZXN0aW9uU2V0W3F1ZXN0aW9uXS5xdWVzdGlvbi5zcGxpdCgnJykubWFwKCAobGV0dGVyLCBpbmRleCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXsgaW5kZXggfT48aW5wdXQgdmFsdWU9eyBsZXR0ZXIgfSAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY2VudHM+PC9BY2NlbnRzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zIGNvbC1sZy0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzdWJtaXRCdG5cIiBvbkNsaWNrPXsgaW5jcmVtZW50UXVlc3Rpb24gfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTnVtYmVycyggYXJyTGVuZ3RoLCBtYXhOdW1iZXIgKSB7XHJcbiAgICBjb25zdCBudW1BcnJheSA9IFtdO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuXHJcbiAgICB3aGlsZSggaW5kZXggPCBhcnJMZW5ndGggKSB7XHJcbiAgICAgICAgbGV0IG5ld051bWJlciA9IE1hdGguZmxvb3IoKCBNYXRoLnJhbmRvbSgpICogbWF4TnVtYmVyICkpO1xyXG4gICAgICAgIGlmKCBudW1BcnJheS5pbmRleE9mKCBuZXdOdW1iZXIgKSA9PT0gLTEgKSB7XHJcbiAgICAgICAgICAgIG51bUFycmF5LnB1c2goIG5ld051bWJlciApO1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVtQXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxWb2NhYnVsYXJ5ID0gYXdhaXQgcHJpc21hLndvcmRzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxDYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hLmNhdGVnb3JpZXMuZmluZE1hbnkoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGRpY3Rpb25hcnk6IGFsbFZvY2FidWxhcnksXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IGFsbENhdGVnb3JpZXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBsZXRpb247Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQWNjZW50cyIsInJhbmRvbU51bWJlckdlbmVyYXRvciIsIkNvbXBsZXRpb24iLCJkaWN0aW9uYXJ5IiwiY2F0ZWdvcmllcyIsInF1ZXN0aW9uU2V0Iiwic2V0UXVlc3Rpb25TZXQiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwibnVtUXVlc3Rpb25zIiwibnVtT3B0aW9ucyIsImNhdGVnb3J5U2VsZWN0aW9ucyIsImNvbXBsZXRpb25EaWN0aW9uYXJ5IiwiZGljdGlvbmFyeUxlbmd0aCIsImxlbmd0aCIsImluY3JlbWVudFF1ZXN0aW9uIiwiY3JlYXRlQ2F0ZWdvcnlTZWxlY3QiLCJjYXRlZ29yeSIsInB1c2giLCJpZCIsInNvcnQiLCJhIiwiYiIsInVuc2hpZnQiLCJjdXJyZW50Iiwid29yZHMiLCJpIiwic2V0Iiwib3B0aW9uTnVtYmVycyIsInJhbmRvbVNwb3QiLCJ3b3JkIiwidHJhbnNsYXRpb24iLCJhbnN3ZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiZmllbGRzZXQiLCJkbCIsImR0IiwibGFiZWwiLCJodG1sRm9yIiwiZGQiLCJzZWxlY3QiLCJuYW1lIiwibWFwIiwiY2F0ZWdvcnlTZWxlY3Rpb24iLCJvcHRpb24iLCJ2YWx1ZSIsImgyIiwidWwiLCJzcGxpdCIsImxldHRlciIsImluZGV4IiwibGkiLCJpbnB1dCIsImRpdiIsInR5cGUiLCJvbkNsaWNrIiwiZ2VuZXJhdGVSYW5kb21OdW1iZXJzIiwiYXJyTGVuZ3RoIiwibWF4TnVtYmVyIiwibnVtQXJyYXkiLCJuZXdOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbmRleE9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/vocabulary/completion.js\n"));

/***/ })

});