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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_modal_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/modal.tsx */ \"./src/components/modal.tsx\");\n/* harmony import */ var _src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/accents.tsx */ \"./src/components/accents.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Completion(param) {\n    var dictionary = param.dictionary, categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), questionSet = ref[0], setQuestionSet = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref1[0], setQuestion = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showModal = ref2[0], setShowModal = ref2[1];\n    var BLANK = \" \";\n    var numQuestions = 5;\n    var numOptions = 5;\n    var categorySelections = [];\n    var completionDictionary = dictionary;\n    var dictionaryLength = dictionary.length;\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    var handleNextClick = function() {\n        if (question <= numQuestions) {\n            incrementQuestion();\n        } else {\n            setShowModal(function(showModal) {\n                return !showModal;\n            });\n        }\n    };\n    var createCategorySelect = function() {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var category = _step.value;\n                categorySelections.push({\n                    id: category.id,\n                    category: category.category\n                });\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        categorySelections.sort(function(a, b) {\n            return a.category > b.category ? 1 : -1;\n        });\n        categorySelections.unshift({\n            id: \"\",\n            category: \"all\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var current = words[i];\n            var currentWord = completionDictionary[current].word.split(\"\");\n            var currentLength = currentWord.length;\n            var numberBlanks = Math.ceil(currentLength / 2);\n            var blanksArray = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numberBlanks, currentLength);\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = blanksArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var index = _step.value;\n                    currentWord[index] = BLANK;\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n            var set = {};\n            var optionNumbers = void 0;\n            set.question = currentWord.join(\"\");\n            set.translation = completionDictionary[current].translation;\n            set.answer = completionDictionary[current].word;\n            setQuestionSet(function(current) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(current).concat([\n                    set\n                ]);\n            });\n        };\n        var words = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, dictionaryLength);\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    createCategorySelect();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"pageContainer\",\n            children: [\n                showModal === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_modal_tsx__WEBPACK_IMPORTED_MODULE_2__.Modal, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                    lineNumber: 76,\n                    columnNumber: 40\n                }, this) : null,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Vocabulary Completion\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"completion\",\n                    className: \"col-xs-12 col-sm-8 col-lg-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                            className: \"col-lg-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    id: \"categorySelect\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"category\",\n                                                children: \"category: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                id: \"category\",\n                                                name: \"category\",\n                                                children: categorySelections.map(function(categorySelection, i) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: categorySelection.id,\n                                                        children: categorySelection.category\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 83,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    id: \"questions\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: [\n                                                    \"[ \",\n                                                    questionSet[question] && questionSet[question].translation,\n                                                    \" ]\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                children: questionSet[question] && questionSet[question].question.split(\"\").map(function(letter, index) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            value: letter,\n                                                            disabled: letter !== BLANK\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                            lineNumber: 97,\n                                                            columnNumber: 59\n                                                        }, _this)\n                                                    }, index, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                        lineNumber: 97,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                            lineNumber: 103,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons col-lg-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"button\",\n                                id: \"submitBtn\",\n                                onClick: handleNextClick,\n                                value: \"next\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                lineNumber: 105,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n            lineNumber: 75,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Completion, \"3Dz9DNul7xok7ige0Uvah+O7ig0=\");\n_c = Completion;\nfunction generateRandomNumbers(arrLength, maxNumber) {\n    var numArray = [];\n    var index = 0;\n    while(index < arrLength){\n        var newNumber = Math.floor(Math.random() * maxNumber);\n        if (numArray.indexOf(newNumber) === -1) {\n            numArray.push(newNumber);\n            index++;\n        }\n    }\n    return numArray;\n}\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Completion);\nvar _c;\n$RefreshReg$(_c, \"Completion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBRztRQUN6RCxJQUFJQyxRQUFRLENBQUNJLE9BQU8sQ0FBRUgsU0FBUyxDQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUc7WUFDdkNELFFBQVEsQ0FBQ25ELElBQUksQ0FBRW9ELFNBQVMsQ0FBRSxDQUFDO1lBQzNCbkMsS0FBSyxFQUFFLENBQUM7U0FDWDtLQUNKO0lBRUQsT0FBT2tDLFFBQVEsQ0FBQztDQUNuQjs7QUFjRCwrREFBZXZFLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92b2NhYnVsYXJ5L2NvbXBsZXRpb24uanM/NGM3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnL3NyYy9jb21wb25lbnRzL21vZGFsLnRzeCc7XHJcbmltcG9ydCBBY2NlbnRzIGZyb20gJy9zcmMvY29tcG9uZW50cy9hY2NlbnRzLnRzeCc7XHJcbmltcG9ydCByYW5kb21OdW1iZXJHZW5lcmF0b3IgZnJvbSAnLi4vLi4vaGVscGVyL3VzZVJhbmRvbU51bWJlckdlbmVyYXRvci50c3gnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZnVuY3Rpb24gQ29tcGxldGlvbih7IGRpY3Rpb25hcnksIGNhdGVnb3JpZXMgfSkge1xyXG4gICAgY29uc3QgW3F1ZXN0aW9uU2V0LCBzZXRRdWVzdGlvblNldF0gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoIDAgKTtcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHJcbiAgICBjb25zdCBCTEFOSyA9ICcgJztcclxuICAgIGNvbnN0IG51bVF1ZXN0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBudW1PcHRpb25zID0gNTtcclxuICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9ucyA9IFtdO1xyXG4gICAgY29uc3QgY29tcGxldGlvbkRpY3Rpb25hcnkgPSBkaWN0aW9uYXJ5O1xyXG4gICAgY29uc3QgZGljdGlvbmFyeUxlbmd0aCA9IGRpY3Rpb25hcnkubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudFF1ZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBxdWVzdGlvbiA8PSBxdWVzdGlvbiApIHtcclxuICAgICAgICAgICAgc2V0UXVlc3Rpb24oIHF1ZXN0aW9uICsgMSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVOZXh0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYocXVlc3Rpb24gPD0gbnVtUXVlc3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGluY3JlbWVudFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U2hvd01vZGFsKCBzaG93TW9kYWw9PiAhc2hvd01vZGFsICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUNhdGVnb3J5U2VsZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGZvcihjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5U2VsZWN0aW9ucy5wdXNoKCBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogY2F0ZWdvcnkuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LmNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0aW9ucy5zb3J0KChhLCBiKSA9PiBhLmNhdGVnb3J5ID4gYi5jYXRlZ29yeSA/IDEgOiAtMSk7XHJcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3Rpb25zLnVuc2hpZnQoeyBpZDogJycsIGNhdGVnb3J5OiAnYWxsJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHsgICAgXHJcbiAgICAgICAgY29uc3Qgd29yZHMgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgZGljdGlvbmFyeUxlbmd0aCApO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1RdWVzdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IHdvcmRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFdvcmQgPSBjb21wbGV0aW9uRGljdGlvbmFyeVtjdXJyZW50XS53b3JkLnNwbGl0KCcnKTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRMZW5ndGggPSBjdXJyZW50V29yZC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBudW1iZXJCbGFua3MgPSBNYXRoLmNlaWwoIGN1cnJlbnRMZW5ndGggLyAyICk7XHJcbiAgICAgICAgICAgIGxldCBibGFua3NBcnJheSA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtYmVyQmxhbmtzLCBjdXJyZW50TGVuZ3RoICk7XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBpbmRleCBvZiBibGFua3NBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFdvcmRbaW5kZXhdID0gQkxBTks7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNldCA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uTnVtYmVycztcclxuXHJcbiAgICAgICAgICAgIHNldC5xdWVzdGlvbiA9IGN1cnJlbnRXb3JkLmpvaW4oJycpO1xyXG4gICAgICAgICAgICBzZXQudHJhbnNsYXRpb24gPSBjb21wbGV0aW9uRGljdGlvbmFyeVtjdXJyZW50XS50cmFuc2xhdGlvbjtcclxuICAgICAgICAgICAgc2V0LmFuc3dlciA9IGNvbXBsZXRpb25EaWN0aW9uYXJ5W2N1cnJlbnRdLndvcmQ7XHJcblxyXG4gICAgICAgICAgICBzZXRRdWVzdGlvblNldCggY3VycmVudCA9PiBbLi4uY3VycmVudCwgc2V0XSApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjcmVhdGVDYXRlZ29yeVNlbGVjdCgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIHsgc2hvd01vZGFsID09PSB0cnVlID8gPE1vZGFsIC8+IDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICA8aDE+Vm9jYWJ1bGFyeSBDb21wbGV0aW9uPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiY29tcGxldGlvblwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGlkPSdjYXRlZ29yeVNlbGVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+PGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yeVwiPmNhdGVnb3J5OiA8L2xhYmVsPjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImNhdGVnb3J5XCIgbmFtZT1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2F0ZWdvcnlTZWxlY3Rpb25zLm1hcCggKCBjYXRlZ29yeVNlbGVjdGlvbiwgaSApID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9eyBpIH0gdmFsdWU9eyBjYXRlZ29yeVNlbGVjdGlvbi5pZCB9PnsgY2F0ZWdvcnlTZWxlY3Rpb24uY2F0ZWdvcnkgfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGlkPVwicXVlc3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlsgeyBxdWVzdGlvblNldFtxdWVzdGlvbl0gJiYgcXVlc3Rpb25TZXRbcXVlc3Rpb25dLnRyYW5zbGF0aW9uIH0gXTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBxdWVzdGlvblNldFtxdWVzdGlvbl0gJiYgcXVlc3Rpb25TZXRbcXVlc3Rpb25dLnF1ZXN0aW9uLnNwbGl0KCcnKS5tYXAoIChsZXR0ZXIsIGluZGV4KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9eyBpbmRleCB9PjxpbnB1dCB2YWx1ZT17IGxldHRlciB9IGRpc2FibGVkPXsgbGV0dGVyICE9PSBCTEFOSyB9IC8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjZW50cz48L0FjY2VudHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMgY29sLWxnLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cInN1Ym1pdEJ0blwiIG9uQ2xpY2s9eyBoYW5kbGVOZXh0Q2xpY2sgfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTnVtYmVycyggYXJyTGVuZ3RoLCBtYXhOdW1iZXIgKSB7XHJcbiAgICBjb25zdCBudW1BcnJheSA9IFtdO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuXHJcbiAgICB3aGlsZSggaW5kZXggPCBhcnJMZW5ndGggKSB7XHJcbiAgICAgICAgbGV0IG5ld051bWJlciA9IE1hdGguZmxvb3IoKCBNYXRoLnJhbmRvbSgpICogbWF4TnVtYmVyICkpO1xyXG4gICAgICAgIGlmKCBudW1BcnJheS5pbmRleE9mKCBuZXdOdW1iZXIgKSA9PT0gLTEgKSB7XHJcbiAgICAgICAgICAgIG51bUFycmF5LnB1c2goIG5ld051bWJlciApO1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVtQXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxWb2NhYnVsYXJ5ID0gYXdhaXQgcHJpc21hLndvcmRzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxDYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hLmNhdGVnb3JpZXMuZmluZE1hbnkoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGRpY3Rpb25hcnk6IGFsbFZvY2FidWxhcnksXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IGFsbENhdGVnb3JpZXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBsZXRpb247Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTW9kYWwiLCJBY2NlbnRzIiwicmFuZG9tTnVtYmVyR2VuZXJhdG9yIiwiQ29tcGxldGlvbiIsImRpY3Rpb25hcnkiLCJjYXRlZ29yaWVzIiwicXVlc3Rpb25TZXQiLCJzZXRRdWVzdGlvblNldCIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJCTEFOSyIsIm51bVF1ZXN0aW9ucyIsIm51bU9wdGlvbnMiLCJjYXRlZ29yeVNlbGVjdGlvbnMiLCJjb21wbGV0aW9uRGljdGlvbmFyeSIsImRpY3Rpb25hcnlMZW5ndGgiLCJsZW5ndGgiLCJpbmNyZW1lbnRRdWVzdGlvbiIsImhhbmRsZU5leHRDbGljayIsImNyZWF0ZUNhdGVnb3J5U2VsZWN0IiwiY2F0ZWdvcnkiLCJwdXNoIiwiaWQiLCJzb3J0IiwiYSIsImIiLCJ1bnNoaWZ0IiwiY3VycmVudCIsIndvcmRzIiwiaSIsImN1cnJlbnRXb3JkIiwid29yZCIsInNwbGl0IiwiY3VycmVudExlbmd0aCIsIm51bWJlckJsYW5rcyIsIk1hdGgiLCJjZWlsIiwiYmxhbmtzQXJyYXkiLCJpbmRleCIsInNldCIsIm9wdGlvbk51bWJlcnMiLCJqb2luIiwidHJhbnNsYXRpb24iLCJhbnN3ZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiZmllbGRzZXQiLCJkbCIsImR0IiwibGFiZWwiLCJodG1sRm9yIiwiZGQiLCJzZWxlY3QiLCJuYW1lIiwibWFwIiwiY2F0ZWdvcnlTZWxlY3Rpb24iLCJvcHRpb24iLCJ2YWx1ZSIsImgyIiwidWwiLCJsZXR0ZXIiLCJsaSIsImlucHV0IiwiZGlzYWJsZWQiLCJkaXYiLCJ0eXBlIiwib25DbGljayIsImdlbmVyYXRlUmFuZG9tTnVtYmVycyIsImFyckxlbmd0aCIsIm1heE51bWJlciIsIm51bUFycmF5IiwibmV3TnVtYmVyIiwiZmxvb3IiLCJyYW5kb20iLCJpbmRleE9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/vocabulary/completion.js\n"));

/***/ })

});