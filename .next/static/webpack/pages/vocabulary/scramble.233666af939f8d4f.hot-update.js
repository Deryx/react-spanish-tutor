"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/vocabulary/scramble",{

/***/ "./pages/vocabulary/scramble.js":
/*!**************************************!*\
  !*** ./pages/vocabulary/scramble.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Scramble(param) {\n    var dictionary = param.dictionary, categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), questionSet = ref[0], setQuestionSet = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref1[0], setQuestion = ref1[1];\n    var numQuestions = 5;\n    var categorySelections = [];\n    var scrambleDictionary = dictionary;\n    var dictionaryLength = dictionary.length;\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    var createCategorySelect = function() {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var category = _step.value;\n                categorySelections.push({\n                    id: category.id,\n                    category: category.category\n                });\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        categorySelections.sort(function(a, b) {\n            return a.category > b.category ? 1 : -1;\n        });\n        categorySelections.unshift({\n            id: \"\",\n            category: \"all\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var current = words[i];\n            var currentWord = scrambleDictionary[current].word;\n            var currentTranslation = scrambleDictionary[current].translation;\n            var set = {};\n            var currentArray = currentWord.split(\"\");\n            var scrambledWord = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(currentWord.length, currentWord.length);\n            set.question = scrambledWord;\n            set.translation = currentTranslation;\n            set.answer = currentWord;\n            setQuestionSet(function(current) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(current).concat([\n                    set\n                ]);\n            });\n        };\n        var words = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, dictionaryLength);\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    createCategorySelect();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Vocabulary Scramble\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"scramble\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                        id: \"categorySelect\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"category\",\n                                                    children: \"category: \"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                    id: \"category\",\n                                                    name: \"category\",\n                                                    children: categorySelections.map(function(categorySelection, i) {\n                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: categorySelection.id,\n                                                            children: categorySelection.category\n                                                        }, i, false, {\n                                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 41\n                                                        }, _this);\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    children: [\n                                                        \"[ \",\n                                                        questionSet[question] && questionSet[question].translation,\n                                                        \" ]\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                children: questionSet[question] && questionSet[question].question.map(function(letter) {\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: letter\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 37\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                                lineNumber: 85,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\scramble.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Scramble, \"DE7JtGNpSRLmzKOxWAHDsA8vHVU=\");\n_c = Scramble;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scramble);\nvar _c;\n$RefreshReg$(_c, \"Scramble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVzs7MERBQ2QsOERBQUN1QixJQUFFOzBEQUNDLDRFQUFDVSxJQUFFOzt3REFBQyxJQUFFO3dEQUFFOUMsV0FBVyxDQUFDRSxRQUFRLENBQUMsSUFBSUYsV0FBVyxDQUFDRSxRQUFRLENBQUMsQ0FBQ3NCLFdBQVc7d0RBQUUsSUFBRTs7Ozs7O3dEQUFLOzs7OztvREFDMUU7MERBQ0wsOERBQUNlLElBQUU7MERBQ0d2QyxXQUFXLENBQUNFLFFBQVEsQ0FBQyxJQUFJRixXQUFXLENBQUNFLFFBQVEsQ0FBQyxDQUFDQSxRQUFRLENBQUN3QyxHQUFHLENBQUVLLFNBQUFBLE1BQU0sRUFBSTtrRUFDckUsOERBQUNDLEtBQUc7a0VBQUdELE1BQU07Ozs7OzZEQUFRO2lEQUN4QixDQUFDOzs7OztvREFDRDs7Ozs7OzRDQUNKOzs7Ozs7b0NBQ0U7MENBQ1gsOERBQUNDLEtBQUc7Z0NBQUNqQixTQUFTLEVBQUMsbUJBQW1COzBDQUM5Qiw0RUFBQ2tCLE9BQUs7b0NBQUNDLElBQUksRUFBQyxRQUFRO29DQUFDckMsRUFBRSxFQUFDLFdBQVc7b0NBQUNzQyxPQUFPLEVBQUcxQyxpQkFBaUI7b0NBQUdvQyxLQUFLLEVBQUMsTUFBTTs7Ozs7d0NBQUc7Ozs7O29DQUMvRTs7Ozs7OzRCQUNIOzs7Ozs7b0JBQ0Q7MEJBQ1YsOERBQUNsRCxrRUFBTTs7OztvQkFBRzs7b0JBQ1gsQ0FDTjtDQUNKO0dBcEZRRSxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7O0FBa0dqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZvY2FidWxhcnkvc2NyYW1ibGUuanM/YWI2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBTaXRlaGVhZGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9zaXRlSGVhZGVyLnRzeCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50c3gnO1xyXG5pbXBvcnQgcmFuZG9tTnVtYmVyR2VuZXJhdG9yIGZyb20gJy4uLy4uL2hlbHBlci91c2VSYW5kb21OdW1iZXJHZW5lcmF0b3IudHN4JztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmZ1bmN0aW9uIFNjcmFtYmxlKHsgZGljdGlvbmFyeSwgY2F0ZWdvcmllcyB9KSB7XHJcbiAgICBjb25zdCBbcXVlc3Rpb25TZXQsIHNldFF1ZXN0aW9uU2V0XSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZSggMCApO1xyXG5cclxuICAgIGNvbnN0IG51bVF1ZXN0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbnMgPSBbXTtcclxuICAgIGNvbnN0IHNjcmFtYmxlRGljdGlvbmFyeSA9IGRpY3Rpb25hcnk7XHJcbiAgICBjb25zdCBkaWN0aW9uYXJ5TGVuZ3RoID0gZGljdGlvbmFyeS5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgaW5jcmVtZW50UXVlc3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIHF1ZXN0aW9uIDw9IHF1ZXN0aW9uICkge1xyXG4gICAgICAgICAgICBzZXRRdWVzdGlvbiggcXVlc3Rpb24gKyAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUNhdGVnb3J5U2VsZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGZvcihjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5U2VsZWN0aW9ucy5wdXNoKCBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogY2F0ZWdvcnkuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LmNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0aW9ucy5zb3J0KChhLCBiKSA9PiBhLmNhdGVnb3J5ID4gYi5jYXRlZ29yeSA/IDEgOiAtMSk7XHJcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3Rpb25zLnVuc2hpZnQoeyBpZDogJycsIGNhdGVnb3J5OiAnYWxsJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdvcmRzID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIGRpY3Rpb25hcnlMZW5ndGggKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtUXVlc3Rpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB3b3Jkc1tpXTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRXb3JkID0gc2NyYW1ibGVEaWN0aW9uYXJ5W2N1cnJlbnRdLndvcmQ7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VHJhbnNsYXRpb24gPSBzY3JhbWJsZURpY3Rpb25hcnlbY3VycmVudF0udHJhbnNsYXRpb247XHJcbiAgICAgICAgICAgIGxldCBzZXQgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50QXJyYXkgPSBjdXJyZW50V29yZC5zcGxpdCggJycgKTtcclxuICAgICAgICAgICAgbGV0IHNjcmFtYmxlZFdvcmQgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIGN1cnJlbnRXb3JkLmxlbmd0aCwgY3VycmVudFdvcmQubGVuZ3RoICk7XHJcbiAgICAgICAgICAgIHNldC5xdWVzdGlvbiA9IHNjcmFtYmxlZFdvcmQ7XHJcbiAgICAgICAgICAgIHNldC50cmFuc2xhdGlvbiA9IGN1cnJlbnRUcmFuc2xhdGlvbjtcclxuICAgICAgICAgICAgc2V0LmFuc3dlciA9IGN1cnJlbnRXb3JkO1xyXG5cclxuICAgICAgICAgICAgc2V0UXVlc3Rpb25TZXQoIGN1cnJlbnQgPT4gWy4uLmN1cnJlbnQsIHNldF0gKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY3JlYXRlQ2F0ZWdvcnlTZWxlY3QoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8aDE+Vm9jYWJ1bGFyeSBTY3JhbWJsZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInNjcmFtYmxlXCIgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS04IGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGwgaWQ9J2NhdGVnb3J5U2VsZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD48bGFiZWwgaHRtbEZvcj1cImNhdGVnb3J5XCI+Y2F0ZWdvcnk6IDwvbGFiZWw+PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiY2F0ZWdvcnlcIiBuYW1lPVwiY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYXRlZ29yeVNlbGVjdGlvbnMubWFwKCAoIGNhdGVnb3J5U2VsZWN0aW9uLCBpICkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17IGkgfSB2YWx1ZT17IGNhdGVnb3J5U2VsZWN0aW9uLmlkIH0+eyBjYXRlZ29yeVNlbGVjdGlvbi5jYXRlZ29yeSB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGwgaWQ9XCJxdWVzdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+WyB7IHF1ZXN0aW9uU2V0W3F1ZXN0aW9uXSAmJiBxdWVzdGlvblNldFtxdWVzdGlvbl0udHJhbnNsYXRpb24gfSBdPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBxdWVzdGlvblNldFtxdWVzdGlvbl0gJiYgcXVlc3Rpb25TZXRbcXVlc3Rpb25dLnF1ZXN0aW9uLm1hcCggbGV0dGVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57IGxldHRlciB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zIGNvbC1sZy0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzdWJtaXRCdG5cIiBvbkNsaWNrPXsgaW5jcmVtZW50UXVlc3Rpb24gfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbFZvY2FidWxhcnkgPSBhd2FpdCBwcmlzbWEud29yZHMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBhd2FpdCBwcmlzbWEuY2F0ZWdvcmllcy5maW5kTWFueSgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZGljdGlvbmFyeTogYWxsVm9jYWJ1bGFyeSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogYWxsQ2F0ZWdvcmllc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NyYW1ibGU7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2l0ZWhlYWRlciIsIkZvb3RlciIsInJhbmRvbU51bWJlckdlbmVyYXRvciIsIlNjcmFtYmxlIiwiZGljdGlvbmFyeSIsImNhdGVnb3JpZXMiLCJxdWVzdGlvblNldCIsInNldFF1ZXN0aW9uU2V0IiwicXVlc3Rpb24iLCJzZXRRdWVzdGlvbiIsIm51bVF1ZXN0aW9ucyIsImNhdGVnb3J5U2VsZWN0aW9ucyIsInNjcmFtYmxlRGljdGlvbmFyeSIsImRpY3Rpb25hcnlMZW5ndGgiLCJsZW5ndGgiLCJpbmNyZW1lbnRRdWVzdGlvbiIsImNyZWF0ZUNhdGVnb3J5U2VsZWN0IiwiY2F0ZWdvcnkiLCJwdXNoIiwiaWQiLCJzb3J0IiwiYSIsImIiLCJ1bnNoaWZ0IiwiY3VycmVudCIsIndvcmRzIiwiaSIsImN1cnJlbnRXb3JkIiwid29yZCIsImN1cnJlbnRUcmFuc2xhdGlvbiIsInRyYW5zbGF0aW9uIiwic2V0IiwiY3VycmVudEFycmF5Iiwic3BsaXQiLCJzY3JhbWJsZWRXb3JkIiwiYW5zd2VyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImZpZWxkc2V0IiwiZGwiLCJkdCIsImxhYmVsIiwiaHRtbEZvciIsImRkIiwic2VsZWN0IiwibmFtZSIsIm1hcCIsImNhdGVnb3J5U2VsZWN0aW9uIiwib3B0aW9uIiwidmFsdWUiLCJoMiIsImxldHRlciIsImRpdiIsImlucHV0IiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/vocabulary/scramble.js\n"));

/***/ })

});