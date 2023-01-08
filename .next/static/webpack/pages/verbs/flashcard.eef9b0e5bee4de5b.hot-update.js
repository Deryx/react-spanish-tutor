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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/card */ \"./src/components/card.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Flashcard = function(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    _s();\n    var verbRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var tenseRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var cardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        infinitive: \"\",\n        translation: \"\",\n        pronunciation: \"\",\n        conjugations: []\n    }), card = ref[0], setCard = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), verb = ref1[0], setVerb = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), tense = ref2[0], setTense = ref2[1];\n    var verbSelections = [];\n    var tenseSelections = [];\n    var headerFront = \"Front\";\n    var headerBack = \"Back\";\n    var info = \"\";\n    var toggle = false;\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = verbs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var verb1 = _step.value;\n            verbSelections.push({\n                id: verb1.id,\n                verb: verb1.infinitive\n            });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    verbSelections.sort(function(a, b) {\n        return a.verb > b.verb ? 1 : -1;\n    });\n    verbSelections.unshift({\n        id: \"\",\n        verb: \"\"\n    });\n    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n    try {\n        for(var _iterator1 = tenses[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){\n            var tense1 = _step1.value;\n            tenseSelections.push({\n                id: tense1.id,\n                tense: tense1.tense\n            });\n        }\n    } catch (err) {\n        _didIteratorError1 = true;\n        _iteratorError1 = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                _iterator1.return();\n            }\n        } finally{\n            if (_didIteratorError1) {\n                throw _iteratorError1;\n            }\n        }\n    }\n    tenseSelections.unshift({\n        id: \"\",\n        tense: \"\"\n    });\n    var incrementCard = function() {\n        if (card <= card) {\n            setCard(card + 1);\n        }\n    };\n    var handleNextClick = function(e) {\n        e.preventDefault();\n        incrementCard();\n    };\n    var handleFlipClick = function(e) {\n        e.preventDefault();\n        toggle = !toggle;\n        if (toggle) {\n            cardRef.current.classList.add(\"flipCard\");\n        } else {\n            cardRef.current.classList.remove(\"flipCard\");\n        }\n    };\n    var handleVerbChange = function(e) {\n        e.preventDefault();\n        setVerb(parseInt(e.target.value));\n        verbRef.current.style.display = \"none\";\n    };\n    var handleTenseChange = function(e) {\n        e.preventDefault();\n        setTense(parseInt(e.target.value));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var info = {};\n        info.infinitive = verbs && verbs.find(function(verb) {\n            return verb.id === verb;\n        });\n        console.log(info.infinitive);\n        var verbConjugations = conjugations.find(function(conjugation) {\n            return conjugation.verb === verb && conjugation.tense === tense;\n        });\n        console.log(verbConjugations);\n    }, [\n        tense\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"pageContainer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Verb Flashcard\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"verbFlashcard\",\n                    className: \"col-xs-12 col-sm-8 col-lg-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                            className: \"col-lg-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    ref: verbRef,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"verbSelect\",\n                                                children: \"verb: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                id: \"verbSelect\",\n                                                name: \"verbSelect\",\n                                                onChange: handleVerbChange,\n                                                children: verbSelections.map(function(verbSelection) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: verbSelection.id,\n                                                        children: verbSelection.verb\n                                                    }, verbSelection.id, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                        lineNumber: 106,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 25\n                                }, _this),\n                                verb ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"tenseSelect\",\n                                                children: \"tense: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                lineNumber: 113,\n                                                columnNumber: 37\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                            lineNumber: 113,\n                                            columnNumber: 33\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                ref: tenseRef,\n                                                id: \"tenseSelect\",\n                                                name: \"tenseSelect\",\n                                                onChange: handleTenseChange,\n                                                children: tenseSelections.map(function(tenseSelection, i) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: tenseSelection.id,\n                                                        children: tenseSelection.tense\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                        lineNumber: 117,\n                                                        columnNumber: 45\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                lineNumber: 115,\n                                                columnNumber: 37\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 33\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 29\n                                }, _this) : null,\n                                card ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    ref: cardRef,\n                                    frontHeader: headerFront,\n                                    backHeader: headerBack,\n                                    frontInfo: info,\n                                    backInfo: info\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 29\n                                }, _this) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons col-lg-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"flipBtn\",\n                                    onClick: handleFlipClick,\n                                    value: \"flip card\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"nextBtn\",\n                                    onClick: handleNextClick,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n            lineNumber: 97,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false);\n};\n_s(Flashcard, \"nuJQWK4J2ZOhCsawVcO/lhncstE=\");\n_c = Flashcard;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flashcard);\nvar _c;\n$RefreshReg$(_c, \"Flashcard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNvRCxLQUFHOzRCQUFDdEIsU0FBUyxFQUFDLG1CQUFtQjs7OENBQzlCLDhEQUFDdUIsT0FBSztvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7b0NBQUNuRCxFQUFFLEVBQUMsU0FBUztvQ0FBQ29ELE9BQU8sRUFBRTNDLGVBQWU7b0NBQUVRLEtBQUssRUFBQyxXQUFXOzs7Ozt5Q0FBRzs4Q0FDaEYsOERBQUNpQyxPQUFLO29DQUFDQyxJQUFJLEVBQUMsUUFBUTtvQ0FBQ25ELEVBQUUsRUFBQyxTQUFTO29DQUFDb0QsT0FBTyxFQUFFOUMsZUFBZTtvQ0FBRVcsS0FBSyxFQUFDLE1BQU07Ozs7O3lDQUFHOzs7Ozs7aUNBQ3pFOzs7Ozs7eUJBQ0g7Ozs7OztpQkFDRDtxQkFDWCxDQUNOO0NBQ0o7R0EzSEt4QyxTQUFTO0FBQVRBLEtBQUFBLFNBQVM7O0FBMElmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVyYnMvZmxhc2hjYXJkLnRzeD9hNTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL2Ryb3BEb3duJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvY2FyZCc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5pbnRlcmZhY2UgRmxhc2hjYXJkUHJvcHMge1xyXG4gICAgdmVyYnM6IGFueVtdO1xyXG4gICAgdGVuc2VzOiBhbnlbXTtcclxuICAgIGNvbmp1Z2F0aW9uczogYW55W107XHJcbn1cclxuXHJcbmNvbnN0IEZsYXNoY2FyZDogRkM8Rmxhc2hjYXJkUHJvcHM+ID0gKCB7IHZlcmJzLCB0ZW5zZXMsIGNvbmp1Z2F0aW9ucyB9ICkgPT4ge1xyXG4gICAgY29uc3QgdmVyYlJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHRlbnNlUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgY2FyZFJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtjYXJkLCBzZXRDYXJkXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBpbmZpbml0aXZlOiAnJyxcclxuICAgICAgICB0cmFuc2xhdGlvbjogJycsXHJcbiAgICAgICAgcHJvbnVuY2lhdGlvbjogJycsXHJcbiAgICAgICAgY29uanVnYXRpb25zOiBbXVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbdmVyYiwgc2V0VmVyYl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt0ZW5zZSwgc2V0VGVuc2VdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgdmVyYlNlbGVjdGlvbnMgPSBbXTtcclxuICAgIGNvbnN0IHRlbnNlU2VsZWN0aW9ucyA9IFtdO1xyXG4gICAgY29uc3QgaGVhZGVyRnJvbnQ6IFN0cmluZyA9ICdGcm9udCc7XHJcbiAgICBjb25zdCBoZWFkZXJCYWNrOiBTdHJpbmcgPSAnQmFjayc7XHJcbiAgICBjb25zdCBpbmZvID0gJyc7XHJcbiAgICBsZXQgdG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgZm9yKGNvbnN0IHZlcmIgb2YgdmVyYnMpIHtcclxuICAgICAgICB2ZXJiU2VsZWN0aW9ucy5wdXNoKCBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHZlcmIuaWQsXHJcbiAgICAgICAgICAgICAgICB2ZXJiOiB2ZXJiLmluZmluaXRpdmUgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgdmVyYlNlbGVjdGlvbnMuc29ydCgoYSwgYikgPT4gYS52ZXJiID4gYi52ZXJiID8gMSA6IC0xKTtcclxuICAgIHZlcmJTZWxlY3Rpb25zLnVuc2hpZnQoeyBpZDogJycsIHZlcmI6ICcnIH0pO1xyXG4gICAgXHJcbiAgICBmb3IoY29uc3QgdGVuc2Ugb2YgdGVuc2VzKSB7XHJcbiAgICAgICAgdGVuc2VTZWxlY3Rpb25zLnB1c2goIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogdGVuc2UuaWQsXHJcbiAgICAgICAgICAgICAgICB0ZW5zZTogdGVuc2UudGVuc2VcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgdGVuc2VTZWxlY3Rpb25zLnVuc2hpZnQoeyBpZDogJycsIHRlbnNlOiAnJyB9KTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRDYXJkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBjYXJkIDw9IGNhcmQgKSB7XHJcbiAgICAgICAgICAgIHNldENhcmQoIGNhcmQgKyAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU5leHRDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGluY3JlbWVudENhcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVGbGlwQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGUgPSAhdG9nZ2xlO1xyXG4gICAgICAgIGlmKHRvZ2dsZSkge1xyXG4gICAgICAgICAgICBjYXJkUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnZmxpcENhcmQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYXJkUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcENhcmQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVmVyYkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFZlcmIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICB2ZXJiUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVUZW5zZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFRlbnNlKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBpbmZvID0ge307XHJcbiAgICAgICAgaW5mby5pbmZpbml0aXZlID0gdmVyYnMgJiYgdmVyYnMuZmluZCh2ZXJiID0+IHZlcmIuaWQgID09PSB2ZXJiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmZvLmluZmluaXRpdmUpO1xyXG4gICAgICAgIGNvbnN0IHZlcmJDb25qdWdhdGlvbnMgPSBjb25qdWdhdGlvbnMuZmluZCgoY29uanVnYXRpb24pID0+IGNvbmp1Z2F0aW9uLnZlcmIgPT09IHZlcmIgJiYgY29uanVnYXRpb24udGVuc2UgPT09IHRlbnNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2ZXJiQ29uanVnYXRpb25zKTtcclxuICAgIH0sIFt0ZW5zZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGgxPlZlcmIgRmxhc2hjYXJkPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwidmVyYkZsYXNoY2FyZFwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsIHJlZj17dmVyYlJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+PGxhYmVsIGh0bWxGb3I9XCJ2ZXJiU2VsZWN0XCI+dmVyYjogPC9sYWJlbD48L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ2ZXJiU2VsZWN0XCIgbmFtZT1cInZlcmJTZWxlY3RcIiBvbkNoYW5nZT17aGFuZGxlVmVyYkNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmVyYlNlbGVjdGlvbnMubWFwKCAoIHZlcmJTZWxlY3Rpb24gKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXsgdmVyYlNlbGVjdGlvbi5pZCB9IHZhbHVlPXsgdmVyYlNlbGVjdGlvbi5pZCB9PnsgdmVyYlNlbGVjdGlvbi52ZXJiIH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdmVyYiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD48bGFiZWwgaHRtbEZvcj1cInRlbnNlU2VsZWN0XCI+dGVuc2U6IDwvbGFiZWw+PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgcmVmPXt0ZW5zZVJlZn0gaWQ9XCJ0ZW5zZVNlbGVjdFwiIG5hbWU9XCJ0ZW5zZVNlbGVjdFwiIG9uQ2hhbmdlPXtoYW5kbGVUZW5zZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRlbnNlU2VsZWN0aW9ucy5tYXAoICggdGVuc2VTZWxlY3Rpb24sIGkgKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17IGkgfSB2YWx1ZT17IHRlbnNlU2VsZWN0aW9uLmlkIH0+eyB0ZW5zZVNlbGVjdGlvbi50ZW5zZSB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FyZCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgcmVmPXsgY2FyZFJlZiB9IGZyb250SGVhZGVyPXsgaGVhZGVyRnJvbnQgfSBiYWNrSGVhZGVyPXsgaGVhZGVyQmFjayB9IGZyb250SW5mbz17IGluZm8gfSBiYWNrSW5mbz17IGluZm8gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucyBjb2wtbGctMTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwiZmxpcEJ0blwiIG9uQ2xpY2s9e2hhbmRsZUZsaXBDbGlja30gdmFsdWU9XCJmbGlwIGNhcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwibmV4dEJ0blwiIG9uQ2xpY2s9e2hhbmRsZU5leHRDbGlja30gdmFsdWU9XCJuZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgY29uc3QgYWxsVmVyYnMgPSBhd2FpdCBwcmlzbWEudmVyYnMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbFRlbnNlcyA9IGF3YWl0IHByaXNtYS50ZW5zZXMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbENvbmp1Z2F0aW9ucyA9IGF3YWl0IHByaXNtYS5jb25qdWdhdGlvbnMuZmluZE1hbnkoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdmVyYnM6IGFsbFZlcmJzLFxyXG4gICAgICAgICAgICB0ZW5zZXM6IGFsbFRlbnNlcyxcclxuICAgICAgICAgICAgY29uanVnYXRpb25zOiBhbGxDb25qdWdhdGlvbnNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsYXNoY2FyZDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDYXJkIiwiRmxhc2hjYXJkIiwidmVyYnMiLCJ0ZW5zZXMiLCJjb25qdWdhdGlvbnMiLCJ2ZXJiUmVmIiwidGVuc2VSZWYiLCJjYXJkUmVmIiwiaW5maW5pdGl2ZSIsInRyYW5zbGF0aW9uIiwicHJvbnVuY2lhdGlvbiIsImNhcmQiLCJzZXRDYXJkIiwidmVyYiIsInNldFZlcmIiLCJ0ZW5zZSIsInNldFRlbnNlIiwidmVyYlNlbGVjdGlvbnMiLCJ0ZW5zZVNlbGVjdGlvbnMiLCJoZWFkZXJGcm9udCIsImhlYWRlckJhY2siLCJpbmZvIiwidG9nZ2xlIiwicHVzaCIsImlkIiwic29ydCIsImEiLCJiIiwidW5zaGlmdCIsImluY3JlbWVudENhcmQiLCJoYW5kbGVOZXh0Q2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVGbGlwQ2xpY2siLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaGFuZGxlVmVyYkNoYW5nZSIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZSIsImRpc3BsYXkiLCJoYW5kbGVUZW5zZUNoYW5nZSIsImZpbmQiLCJjb25zb2xlIiwibG9nIiwidmVyYkNvbmp1Z2F0aW9ucyIsImNvbmp1Z2F0aW9uIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImZpZWxkc2V0IiwiZGwiLCJyZWYiLCJkdCIsImxhYmVsIiwiaHRtbEZvciIsImRkIiwic2VsZWN0IiwibmFtZSIsIm9uQ2hhbmdlIiwibWFwIiwidmVyYlNlbGVjdGlvbiIsIm9wdGlvbiIsInRlbnNlU2VsZWN0aW9uIiwiaSIsImZyb250SGVhZGVyIiwiYmFja0hlYWRlciIsImZyb250SW5mbyIsImJhY2tJbmZvIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/verbs/flashcard.tsx\n"));

/***/ })

});