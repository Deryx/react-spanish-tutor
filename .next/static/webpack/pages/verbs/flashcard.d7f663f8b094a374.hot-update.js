"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/verbs/flashcard",{

/***/ "./pages/verbs/flashcard.tsx":
/*!***********************************!*\
  !*** ./pages/verbs/flashcard.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/card */ \"./src/components/card.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Flashcard = function(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    _s();\n    var cardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), card = ref[0], setCard = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cards = ref1[0], setCards = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), verb = ref2[0], setVerb = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), tense = ref3[0], setTense = ref3[1];\n    var verbSelections = [];\n    var tenseSelections = [];\n    var headerFront = \"Front\";\n    var headerBack = \"Back\";\n    var info = \"\";\n    var toggle = false;\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = verbs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var verb1 = _step.value;\n            verbSelections.push({\n                id: verb1.id,\n                verb: verb1.infinitive\n            });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    verbSelections.sort(function(a, b) {\n        return a.verb > b.verb ? 1 : -1;\n    });\n    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n    try {\n        for(var _iterator1 = tenses[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){\n            var tense1 = _step1.value;\n            tenseSelections.push({\n                id: tense1.id,\n                tense: tense1.tense\n            });\n        }\n    } catch (err) {\n        _didIteratorError1 = true;\n        _iteratorError1 = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                _iterator1.return();\n            }\n        } finally{\n            if (_didIteratorError1) {\n                throw _iteratorError1;\n            }\n        }\n    }\n    var incrementCard = function() {\n        if (card <= card) {\n            setCard(card + 1);\n        }\n    };\n    var handleNextClick = function(e) {\n        e.preventDefault();\n        incrementCard();\n    };\n    var handleFlipClick = function(e) {\n        e.preventDefault();\n        toggle = !toggle;\n        if (toggle) {\n            cardRef.current.classList.add(\"flipCard\");\n        } else {\n            cardRef.current.classList.remove(\"flipCard\");\n        }\n    };\n    var handleVerbChange = function(e) {\n        e.preventDefault();\n        setVerb(e.target.value);\n    };\n    var handleTenseChange = function(e) {\n        e.preventDefault();\n        setTense(e.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var verbConjugations = conjugations.filter(function(conjugation) {\n            return conjugation.verb === verb && conjugation.tense === tense;\n        });\n        console.log(verbConjugations);\n    }, [\n        verb,\n        tense\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"pageContainer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Verb Flashcard\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"verbFlashcard\",\n                    className: \"col-xs-12 col-sm-8 col-lg-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                            className: \"col-lg-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"verbSelect\",\n                                                children: \"verb: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                id: \"verbSelect\",\n                                                name: \"verbSelect\",\n                                                onChange: handleVerbChange,\n                                                children: verbSelections.map(function(verbSelection) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: verbSelection.id,\n                                                        children: verbSelection.verb\n                                                    }, verbSelection.id, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"tenseSelect\",\n                                                children: \"tense: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                id: \"tenseSelect\",\n                                                name: \"tenseSelect\",\n                                                onChange: handleTenseChange,\n                                                children: tenseSelections.map(function(tenseSelection, i) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: tenseSelection.id,\n                                                        children: tenseSelection.tense\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                        lineNumber: 104,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 25\n                                }, _this),\n                                cards[card] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    ref: cardRef,\n                                    frontHeader: headerFront,\n                                    backHeader: headerBack,\n                                    frontInfo: info,\n                                    backInfo: info\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 29\n                                }, _this) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons col-lg-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"flipBtn\",\n                                    onClick: handleFlipClick,\n                                    value: \"flip card\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"nextBtn\",\n                                    onClick: handleNextClick,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n            lineNumber: 85,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false);\n};\n_s(Flashcard, \"v1Ag3bbmIuJqgCjnnUNTWVjdOi8=\");\n_c = Flashcard;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flashcard);\nvar _c;\n$RefreshReg$(_c, \"Flashcard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBS3VDLGNBQWMsQ0FBQ2hELEtBQUs7dURBQXREaUQsQ0FBQzs7Ozs2REFBZ0U7aURBQUEsQ0FDbEY7Ozs7O3FEQUNJOzs7OztpREFDUjs7Ozs7O3lDQUNKO2dDQUNIckQsS0FBSyxDQUFDRixJQUFJLENBQUMsaUJBQ1QsOERBQUNOLDREQUFJO29DQUFDOEQsR0FBRyxFQUFHekQsT0FBTztvQ0FBRzBELFdBQVcsRUFBRy9DLFdBQVc7b0NBQUdnRCxVQUFVLEVBQUcvQyxVQUFVO29DQUFHZ0QsU0FBUyxFQUFHL0MsSUFBSTtvQ0FBR2dELFFBQVEsRUFBR2hELElBQUk7Ozs7O3lDQUFLLEdBQ2pILElBQUk7Ozs7OztpQ0FFSDtzQ0FDWCw4REFBQ2lELEtBQUc7NEJBQUN0QixTQUFTLEVBQUMsbUJBQW1COzs4Q0FDOUIsOERBQUN1QixPQUFLO29DQUFDQyxJQUFJLEVBQUMsUUFBUTtvQ0FBQ2hELEVBQUUsRUFBQyxTQUFTO29DQUFDaUQsT0FBTyxFQUFFeEMsZUFBZTtvQ0FBRU8sS0FBSyxFQUFDLFdBQVc7Ozs7O3lDQUFHOzhDQUNoRiw4REFBQytCLE9BQUs7b0NBQUNDLElBQUksRUFBQyxRQUFRO29DQUFDaEQsRUFBRSxFQUFDLFNBQVM7b0NBQUNpRCxPQUFPLEVBQUUzQyxlQUFlO29DQUFFVSxLQUFLLEVBQUMsTUFBTTs7Ozs7eUNBQUc7Ozs7OztpQ0FDekU7Ozs7Ozt5QkFDSDs7Ozs7O2lCQUNEO3FCQUNYLENBQ047Q0FDSjtHQTVHS3BDLFNBQVM7QUFBVEEsS0FBQUEsU0FBUzs7QUEySGYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92ZXJicy9mbGFzaGNhcmQudHN4P2E1MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlLCBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvZHJvcERvd24nO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9jYXJkJztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmludGVyZmFjZSBGbGFzaGNhcmRQcm9wcyB7XHJcbiAgICB2ZXJiczogYW55W107XHJcbiAgICB0ZW5zZXM6IGFueVtdO1xyXG4gICAgY29uanVnYXRpb25zOiBhbnlbXTtcclxufVxyXG5cclxuY29uc3QgRmxhc2hjYXJkOiBGQzxGbGFzaGNhcmRQcm9wcz4gPSAoIHsgdmVyYnMsIHRlbnNlcywgY29uanVnYXRpb25zIH0gKSA9PiB7XHJcbiAgICBjb25zdCBjYXJkUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2NhcmQsIHNldENhcmRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY2FyZHMsIHNldENhcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt2ZXJiLCBzZXRWZXJiXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3RlbnNlLCBzZXRUZW5zZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCB2ZXJiU2VsZWN0aW9ucyA9IFtdO1xyXG4gICAgY29uc3QgdGVuc2VTZWxlY3Rpb25zID0gW107XHJcbiAgICBjb25zdCBoZWFkZXJGcm9udDogU3RyaW5nID0gJ0Zyb250JztcclxuICAgIGNvbnN0IGhlYWRlckJhY2s6IFN0cmluZyA9ICdCYWNrJztcclxuICAgIGNvbnN0IGluZm8gPSAnJztcclxuICAgIGxldCB0b2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3IoY29uc3QgdmVyYiBvZiB2ZXJicykge1xyXG4gICAgICAgIHZlcmJTZWxlY3Rpb25zLnB1c2goIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogdmVyYi5pZCxcclxuICAgICAgICAgICAgICAgIHZlcmI6IHZlcmIuaW5maW5pdGl2ZSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICB2ZXJiU2VsZWN0aW9ucy5zb3J0KChhLCBiKSA9PiBhLnZlcmIgPiBiLnZlcmIgPyAxIDogLTEpO1xyXG4gICAgXHJcbiAgICBmb3IoY29uc3QgdGVuc2Ugb2YgdGVuc2VzKSB7XHJcbiAgICAgICAgdGVuc2VTZWxlY3Rpb25zLnB1c2goIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogdGVuc2UuaWQsXHJcbiAgICAgICAgICAgICAgICB0ZW5zZTogdGVuc2UudGVuc2VcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudENhcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIGNhcmQgPD0gY2FyZCApIHtcclxuICAgICAgICAgICAgc2V0Q2FyZCggY2FyZCArIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTmV4dENsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaW5jcmVtZW50Q2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZsaXBDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRvZ2dsZSA9ICF0b2dnbGU7XHJcbiAgICAgICAgaWYodG9nZ2xlKSB7XHJcbiAgICAgICAgICAgIGNhcmRSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdmbGlwQ2FyZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhcmRSZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwQ2FyZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVWZXJiQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0VmVyYihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGVuc2VDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRUZW5zZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB2ZXJiQ29uanVnYXRpb25zID0gY29uanVnYXRpb25zLmZpbHRlcigoY29uanVnYXRpb24pID0+IGNvbmp1Z2F0aW9uLnZlcmIgPT09IHZlcmIgJiYgY29uanVnYXRpb24udGVuc2UgPT09IHRlbnNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2ZXJiQ29uanVnYXRpb25zKTtcclxuICAgIH0sIFt2ZXJiLCB0ZW5zZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGgxPlZlcmIgRmxhc2hjYXJkPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwidmVyYkZsYXNoY2FyZFwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PjxsYWJlbCBodG1sRm9yPVwidmVyYlNlbGVjdFwiPnZlcmI6IDwvbGFiZWw+PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidmVyYlNlbGVjdFwiIG5hbWU9XCJ2ZXJiU2VsZWN0XCIgb25DaGFuZ2U9e2hhbmRsZVZlcmJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZlcmJTZWxlY3Rpb25zLm1hcCggKCB2ZXJiU2VsZWN0aW9uICkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17IHZlcmJTZWxlY3Rpb24uaWQgfSB2YWx1ZT17IHZlcmJTZWxlY3Rpb24uaWQgfT57IHZlcmJTZWxlY3Rpb24udmVyYiB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+PGxhYmVsIGh0bWxGb3I9XCJ0ZW5zZVNlbGVjdFwiPnRlbnNlOiA8L2xhYmVsPjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInRlbnNlU2VsZWN0XCIgbmFtZT1cInRlbnNlU2VsZWN0XCIgb25DaGFuZ2U9e2hhbmRsZVRlbnNlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZW5zZVNlbGVjdGlvbnMubWFwKCAoIHRlbnNlU2VsZWN0aW9uLCBpICkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17IGkgfSB2YWx1ZT17IHRlbnNlU2VsZWN0aW9uLmlkIH0+eyB0ZW5zZVNlbGVjdGlvbi50ZW5zZSB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNhcmRzW2NhcmRdID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCByZWY9eyBjYXJkUmVmIH0gZnJvbnRIZWFkZXI9eyBoZWFkZXJGcm9udCB9IGJhY2tIZWFkZXI9eyBoZWFkZXJCYWNrIH0gZnJvbnRJbmZvPXsgaW5mbyB9IGJhY2tJbmZvPXsgaW5mbyB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zIGNvbC1sZy0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJmbGlwQnRuXCIgb25DbGljaz17aGFuZGxlRmxpcENsaWNrfSB2YWx1ZT1cImZsaXAgY2FyZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJuZXh0QnRuXCIgb25DbGljaz17aGFuZGxlTmV4dENsaWNrfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxWZXJicyA9IGF3YWl0IHByaXNtYS52ZXJicy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsVGVuc2VzID0gYXdhaXQgcHJpc21hLnRlbnNlcy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsQ29uanVnYXRpb25zID0gYXdhaXQgcHJpc21hLmNvbmp1Z2F0aW9ucy5maW5kTWFueSgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2ZXJiczogYWxsVmVyYnMsXHJcbiAgICAgICAgICAgIHRlbnNlczogYWxsVGVuc2VzLFxyXG4gICAgICAgICAgICBjb25qdWdhdGlvbnM6IGFsbENvbmp1Z2F0aW9uc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxhc2hjYXJkOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNhcmQiLCJGbGFzaGNhcmQiLCJ2ZXJicyIsInRlbnNlcyIsImNvbmp1Z2F0aW9ucyIsImNhcmRSZWYiLCJjYXJkIiwic2V0Q2FyZCIsImNhcmRzIiwic2V0Q2FyZHMiLCJ2ZXJiIiwic2V0VmVyYiIsInRlbnNlIiwic2V0VGVuc2UiLCJ2ZXJiU2VsZWN0aW9ucyIsInRlbnNlU2VsZWN0aW9ucyIsImhlYWRlckZyb250IiwiaGVhZGVyQmFjayIsImluZm8iLCJ0b2dnbGUiLCJwdXNoIiwiaWQiLCJpbmZpbml0aXZlIiwic29ydCIsImEiLCJiIiwiaW5jcmVtZW50Q2FyZCIsImhhbmRsZU5leHRDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUZsaXBDbGljayIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJoYW5kbGVWZXJiQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVUZW5zZUNoYW5nZSIsInZlcmJDb25qdWdhdGlvbnMiLCJmaWx0ZXIiLCJjb25qdWdhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiZmllbGRzZXQiLCJkbCIsImR0IiwibGFiZWwiLCJodG1sRm9yIiwiZGQiLCJzZWxlY3QiLCJuYW1lIiwib25DaGFuZ2UiLCJtYXAiLCJ2ZXJiU2VsZWN0aW9uIiwib3B0aW9uIiwidGVuc2VTZWxlY3Rpb24iLCJpIiwicmVmIiwiZnJvbnRIZWFkZXIiLCJiYWNrSGVhZGVyIiwiZnJvbnRJbmZvIiwiYmFja0luZm8iLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/verbs/flashcard.tsx\n"));

/***/ })

});