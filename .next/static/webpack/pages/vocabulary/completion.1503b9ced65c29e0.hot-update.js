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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_modal_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/modal.tsx */ \"./src/components/modal.tsx\");\n/* harmony import */ var _src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/accents.tsx */ \"./src/components/accents.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Completion(param) {\n    var dictionary = param.dictionary, categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), questionSet = ref[0], setQuestionSet = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref1[0], setQuestion = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showModal = ref2[0], setShowModal = ref2[1];\n    var BLANK = \" \";\n    var numQuestions = 5;\n    var numOptions = 5;\n    var categorySelections = [];\n    var completionDictionary = dictionary;\n    var dictionaryLength = dictionary.length;\n    var incrementQuestion = function() {\n        if (question < numQuestions) {\n            setQuestion(++question);\n        }\n        question === numQuestions && setShowModal(function(showModal) {\n            return showModal = !showModal;\n        });\n    };\n    var createCategorySelect = function() {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var category = _step.value;\n                categorySelections.push({\n                    id: category.id,\n                    category: category.category\n                });\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        categorySelections.sort(function(a, b) {\n            return a.category > b.category ? 1 : -1;\n        });\n        categorySelections.unshift({\n            id: \"\",\n            category: \"all\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var current = words[i];\n            var currentWord = completionDictionary[current].word.split(\"\");\n            var currentLength = currentWord.length;\n            var numberBlanks = Math.ceil(currentLength / 2);\n            var blanksArray = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numberBlanks, currentLength);\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = blanksArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var index = _step.value;\n                    currentWord[index] = BLANK;\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n            var set = {};\n            var optionNumbers = void 0;\n            set.question = currentWord.join(\"\");\n            set.translation = completionDictionary[current].translation;\n            set.answer = completionDictionary[current].word;\n            setQuestionSet(function(current) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(current).concat([\n                    set\n                ]);\n            });\n        };\n        var words = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, dictionaryLength);\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    createCategorySelect();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"pageContainer\",\n            children: [\n                showModal === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_modal_tsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                    lineNumber: 70,\n                    columnNumber: 40\n                }, this) : null,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Vocabulary Completion\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"completion\",\n                    className: \"col-xs-12 col-sm-8 col-lg-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                            className: \"col-lg-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    id: \"categorySelect\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"category\",\n                                                children: \"category: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                id: \"category\",\n                                                name: \"category\",\n                                                children: categorySelections.map(function(categorySelection, i) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: categorySelection.id,\n                                                        children: categorySelection.category\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    id: \"questions\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: [\n                                                    \"[ \",\n                                                    questionSet[question] && questionSet[question].translation,\n                                                    \" ]\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                children: questionSet[question] && questionSet[question].question.split(\"\").map(function(letter, index) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            value: letter,\n                                                            disabled: letter !== BLANK\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 59\n                                                        }, _this)\n                                                    }, index, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, this),\n                        questionSet[question] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                            lineNumber: 97,\n                            columnNumber: 48\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons col-lg-12\",\n                            children: questionSet[question] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"button\",\n                                id: \"submitBtn\",\n                                onClick: incrementQuestion,\n                                value: \"submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                                lineNumber: 99,\n                                columnNumber: 52\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\completion.js\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Completion, \"3Dz9DNul7xok7ige0Uvah+O7ig0=\");\n_c = Completion;\nfunction generateRandomNumbers(arrLength, maxNumber) {\n    var numArray = [];\n    var index = 0;\n    while(index < arrLength){\n        var newNumber = Math.floor(Math.random() * maxNumber);\n        if (numArray.indexOf(newNumber) === -1) {\n            numArray.push(newNumber);\n            index++;\n        }\n    }\n    return numArray;\n}\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Completion);\nvar _c;\n$RefreshReg$(_c, \"Completion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsQ0FBQ0ksT0FBTyxDQUFFSCxTQUFTLENBQUUsS0FBSyxDQUFDLENBQUMsRUFBRztZQUN2Q0QsUUFBUSxDQUFDbkQsSUFBSSxDQUFFb0QsU0FBUyxDQUFFLENBQUM7WUFDM0JuQyxLQUFLLEVBQUUsQ0FBQztTQUNYO0tBQ0o7SUFFRCxPQUFPa0MsUUFBUSxDQUFDO0NBQ25COztBQWNELCtEQUFldEUsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZvY2FidWxhcnkvY29tcGxldGlvbi5qcz80YzdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy9zcmMvY29tcG9uZW50cy9tb2RhbC50c3gnO1xyXG5pbXBvcnQgQWNjZW50cyBmcm9tICcvc3JjL2NvbXBvbmVudHMvYWNjZW50cy50c3gnO1xyXG5pbXBvcnQgcmFuZG9tTnVtYmVyR2VuZXJhdG9yIGZyb20gJy4uLy4uL2hlbHBlci91c2VSYW5kb21OdW1iZXJHZW5lcmF0b3IudHN4JztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmZ1bmN0aW9uIENvbXBsZXRpb24oeyBkaWN0aW9uYXJ5LCBjYXRlZ29yaWVzIH0pIHtcclxuICAgIGNvbnN0IFtxdWVzdGlvblNldCwgc2V0UXVlc3Rpb25TZXRdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKCAwICk7XHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG4gICAgY29uc3QgQkxBTksgPSAnICc7XHJcbiAgICBjb25zdCBudW1RdWVzdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgbnVtT3B0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbnMgPSBbXTtcclxuICAgIGNvbnN0IGNvbXBsZXRpb25EaWN0aW9uYXJ5ID0gZGljdGlvbmFyeTtcclxuICAgIGNvbnN0IGRpY3Rpb25hcnlMZW5ndGggPSBkaWN0aW9uYXJ5Lmxlbmd0aDtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRRdWVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiggcXVlc3Rpb24gPCBudW1RdWVzdGlvbnMgKSB7XHJcbiAgICAgICAgICAgIHNldFF1ZXN0aW9uKCArK3F1ZXN0aW9uICk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgICBxdWVzdGlvbiA9PT0gbnVtUXVlc3Rpb25zICYmIHNldFNob3dNb2RhbCggc2hvd01vZGFsID0+IHNob3dNb2RhbCA9ICFzaG93TW9kYWwgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVDYXRlZ29yeVNlbGVjdCA9ICgpID0+IHtcclxuICAgICAgICBmb3IoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICBjYXRlZ29yeVNlbGVjdGlvbnMucHVzaCggXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNhdGVnb3J5LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeS5jYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjYXRlZ29yeVNlbGVjdGlvbnMuc29ydCgoYSwgYikgPT4gYS5jYXRlZ29yeSA+IGIuY2F0ZWdvcnkgPyAxIDogLTEpO1xyXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0aW9ucy51bnNoaWZ0KHsgaWQ6ICcnLCBjYXRlZ29yeTogJ2FsbCcgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7ICAgIFxyXG4gICAgICAgIGNvbnN0IHdvcmRzID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIGRpY3Rpb25hcnlMZW5ndGggKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtUXVlc3Rpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB3b3Jkc1tpXTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRXb3JkID0gY29tcGxldGlvbkRpY3Rpb25hcnlbY3VycmVudF0ud29yZC5zcGxpdCgnJyk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGVuZ3RoID0gY3VycmVudFdvcmQubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyQmxhbmtzID0gTWF0aC5jZWlsKCBjdXJyZW50TGVuZ3RoIC8gMiApO1xyXG4gICAgICAgICAgICBsZXQgYmxhbmtzQXJyYXkgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bWJlckJsYW5rcywgY3VycmVudExlbmd0aCApO1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgaW5kZXggb2YgYmxhbmtzQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRXb3JkW2luZGV4XSA9IEJMQU5LO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzZXQgPSB7fTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbk51bWJlcnM7XHJcblxyXG4gICAgICAgICAgICBzZXQucXVlc3Rpb24gPSBjdXJyZW50V29yZC5qb2luKCcnKTtcclxuICAgICAgICAgICAgc2V0LnRyYW5zbGF0aW9uID0gY29tcGxldGlvbkRpY3Rpb25hcnlbY3VycmVudF0udHJhbnNsYXRpb247XHJcbiAgICAgICAgICAgIHNldC5hbnN3ZXIgPSBjb21wbGV0aW9uRGljdGlvbmFyeVtjdXJyZW50XS53b3JkO1xyXG5cclxuICAgICAgICAgICAgc2V0UXVlc3Rpb25TZXQoIGN1cnJlbnQgPT4gWy4uLmN1cnJlbnQsIHNldF0gKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY3JlYXRlQ2F0ZWdvcnlTZWxlY3QoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICB7IHNob3dNb2RhbCA9PT0gdHJ1ZSA/IDxNb2RhbCAvPiA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgPGgxPlZvY2FidWxhcnkgQ29tcGxldGlvbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImNvbXBsZXRpb25cIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbCBpZD0nY2F0ZWdvcnlTZWxlY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PjxsYWJlbCBodG1sRm9yPVwiY2F0ZWdvcnlcIj5jYXRlZ29yeTogPC9sYWJlbD48L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJjYXRlZ29yeVwiIG5hbWU9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhdGVnb3J5U2VsZWN0aW9ucy5tYXAoICggY2F0ZWdvcnlTZWxlY3Rpb24sIGkgKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXsgaSB9IHZhbHVlPXsgY2F0ZWdvcnlTZWxlY3Rpb24uaWQgfT57IGNhdGVnb3J5U2VsZWN0aW9uLmNhdGVnb3J5IH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbCBpZD1cInF1ZXN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5bIHsgcXVlc3Rpb25TZXRbcXVlc3Rpb25dICYmIHF1ZXN0aW9uU2V0W3F1ZXN0aW9uXS50cmFuc2xhdGlvbiB9IF08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcXVlc3Rpb25TZXRbcXVlc3Rpb25dICYmIHF1ZXN0aW9uU2V0W3F1ZXN0aW9uXS5xdWVzdGlvbi5zcGxpdCgnJykubWFwKCAobGV0dGVyLCBpbmRleCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXsgaW5kZXggfT48aW5wdXQgdmFsdWU9eyBsZXR0ZXIgfSBkaXNhYmxlZD17IGxldHRlciAhPT0gQkxBTksgfSAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBxdWVzdGlvblNldFtxdWVzdGlvbl0gJiYgPEFjY2VudHMgLz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zIGNvbC1sZy0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcXVlc3Rpb25TZXRbcXVlc3Rpb25dICYmIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzdWJtaXRCdG5cIiBvbkNsaWNrPXsgaW5jcmVtZW50UXVlc3Rpb24gfSB2YWx1ZT1cInN1Ym1pdFwiIC8+IH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbU51bWJlcnMoIGFyckxlbmd0aCwgbWF4TnVtYmVyICkge1xyXG4gICAgY29uc3QgbnVtQXJyYXkgPSBbXTtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcblxyXG4gICAgd2hpbGUoIGluZGV4IDwgYXJyTGVuZ3RoICkge1xyXG4gICAgICAgIGxldCBuZXdOdW1iZXIgPSBNYXRoLmZsb29yKCggTWF0aC5yYW5kb20oKSAqIG1heE51bWJlciApKTtcclxuICAgICAgICBpZiggbnVtQXJyYXkuaW5kZXhPZiggbmV3TnVtYmVyICkgPT09IC0xICkge1xyXG4gICAgICAgICAgICBudW1BcnJheS5wdXNoKCBuZXdOdW1iZXIgKTtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bUFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgY29uc3QgYWxsVm9jYWJ1bGFyeSA9IGF3YWl0IHByaXNtYS53b3Jkcy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IGF3YWl0IHByaXNtYS5jYXRlZ29yaWVzLmZpbmRNYW55KCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBkaWN0aW9uYXJ5OiBhbGxWb2NhYnVsYXJ5LFxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBhbGxDYXRlZ29yaWVzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wbGV0aW9uOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1vZGFsIiwiQWNjZW50cyIsInJhbmRvbU51bWJlckdlbmVyYXRvciIsIkNvbXBsZXRpb24iLCJkaWN0aW9uYXJ5IiwiY2F0ZWdvcmllcyIsInF1ZXN0aW9uU2V0Iiwic2V0UXVlc3Rpb25TZXQiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiQkxBTksiLCJudW1RdWVzdGlvbnMiLCJudW1PcHRpb25zIiwiY2F0ZWdvcnlTZWxlY3Rpb25zIiwiY29tcGxldGlvbkRpY3Rpb25hcnkiLCJkaWN0aW9uYXJ5TGVuZ3RoIiwibGVuZ3RoIiwiaW5jcmVtZW50UXVlc3Rpb24iLCJjcmVhdGVDYXRlZ29yeVNlbGVjdCIsImNhdGVnb3J5IiwicHVzaCIsImlkIiwic29ydCIsImEiLCJiIiwidW5zaGlmdCIsImN1cnJlbnQiLCJ3b3JkcyIsImkiLCJjdXJyZW50V29yZCIsIndvcmQiLCJzcGxpdCIsImN1cnJlbnRMZW5ndGgiLCJudW1iZXJCbGFua3MiLCJNYXRoIiwiY2VpbCIsImJsYW5rc0FycmF5IiwiaW5kZXgiLCJzZXQiLCJvcHRpb25OdW1iZXJzIiwiam9pbiIsInRyYW5zbGF0aW9uIiwiYW5zd2VyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImZpZWxkc2V0IiwiZGwiLCJkdCIsImxhYmVsIiwiaHRtbEZvciIsImRkIiwic2VsZWN0IiwibmFtZSIsIm1hcCIsImNhdGVnb3J5U2VsZWN0aW9uIiwib3B0aW9uIiwidmFsdWUiLCJoMiIsInVsIiwibGV0dGVyIiwibGkiLCJpbnB1dCIsImRpc2FibGVkIiwiZGl2IiwidHlwZSIsIm9uQ2xpY2siLCJnZW5lcmF0ZVJhbmRvbU51bWJlcnMiLCJhcnJMZW5ndGgiLCJtYXhOdW1iZXIiLCJudW1BcnJheSIsIm5ld051bWJlciIsImZsb29yIiwicmFuZG9tIiwiaW5kZXhPZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/vocabulary/completion.js\n"));

/***/ })

});