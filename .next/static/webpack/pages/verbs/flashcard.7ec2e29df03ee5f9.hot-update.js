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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/card */ \"./src/components/card.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Flashcard = function(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    _s();\n    var verbRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var tenseRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var cardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        infinitive: null,\n        translation: null,\n        pronunciation: null,\n        tense: null,\n        conjugations: null\n    }), card = ref[0], setCard = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), verbSelection = ref1[0], setVerbSelection = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), tenseSelection = ref2[0], setTenseSelection = ref2[1];\n    var verbSelections = [];\n    var tenseSelections = [];\n    var headerFront = \"Front\";\n    var headerBack = \"Back\";\n    var info = \"\";\n    var toggle = false;\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = verbs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var verb = _step.value;\n            verbSelections.push({\n                id: verb.id,\n                verb: verb.infinitive\n            });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    verbSelections.sort(function(a, b) {\n        return a.verb > b.verb ? 1 : -1;\n    });\n    verbSelections.unshift({\n        id: \"\",\n        verb: \"\"\n    });\n    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n    try {\n        for(var _iterator1 = tenses[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){\n            var tense = _step1.value;\n            tenseSelections.push({\n                id: tense.id,\n                tense: tense.tense\n            });\n        }\n    } catch (err) {\n        _didIteratorError1 = true;\n        _iteratorError1 = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                _iterator1.return();\n            }\n        } finally{\n            if (_didIteratorError1) {\n                throw _iteratorError1;\n            }\n        }\n    }\n    tenseSelections.unshift({\n        id: \"\",\n        tense: \"\"\n    });\n    var handleFlipClick = function(e) {\n        e.preventDefault();\n        toggle = !toggle;\n        if (toggle) {\n            cardRef.current.classList.add(\"flipCard\");\n        } else {\n            cardRef.current.classList.remove(\"flipCard\");\n        }\n    };\n    var handleVerbChange = function(e) {\n        e.preventDefault();\n        setVerbSelection(parseInt(e.target.value));\n        verbRef.current.style.display = \"none\";\n    };\n    var handleTenseChange = function(e) {\n        e.preventDefault();\n        setTenseSelection(parseInt(e.target.value));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var info = {\n            infinitive: null,\n            translation: null,\n            pronunciation: null,\n            tense: \"\",\n            conjugations: null\n        };\n        var infinitiveInfo = verbs.find(function(verb) {\n            return verb.id === verbSelection;\n        });\n        var tenseInput = tenses.find(function(tense) {\n            return tense.id === tenseSelection;\n        });\n        info.infinitive = infinitiveInfo && infinitiveInfo.infinitive;\n        info.translation = infinitiveInfo && infinitiveInfo.translation;\n        info.pronunciation = infinitiveInfo && infinitiveInfo.pronunciation;\n        info.tense = tenseInput && tenseInput.tense;\n        var verbConjugations = conjugations.filter(function(conjugation) {\n            return conjugation.verb === verbSelection && conjugation.tense === tenseSelection;\n        }).map(function(param) {\n            var yo = param.yo, tu = param.tu, el = param.el, nosotros = param.nosotros, vosotros = param.vosotros, ellos = param.ellos;\n            return {\n                yo: yo,\n                tu: tu,\n                el: el,\n                nosotros: nosotros,\n                vosotros: vosotros,\n                ellos: ellos\n            };\n        })[0];\n        info.conjugations = verbConjugations && verbConjugations;\n        console.log(info);\n    }, [\n        tenseSelection\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"pageContainer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Verb Flashcard\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"verbFlashcard\",\n                    className: \"col-xs-12 col-sm-8 col-lg-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                            className: \"col-lg-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    ref: verbRef,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"verbSelect\",\n                                                children: \"verb: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                lineNumber: 105,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                id: \"verbSelect\",\n                                                name: \"verbSelect\",\n                                                onChange: handleVerbChange,\n                                                children: verbSelections.map(function(verbSelection) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: verbSelection.id,\n                                                        children: verbSelection.verb\n                                                    }, verbSelection.id, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                        lineNumber: 109,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 25\n                                }, _this),\n                                verbSelection ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"tenseSelect\",\n                                                children: \"tense: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                lineNumber: 116,\n                                                columnNumber: 37\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 33\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                ref: tenseRef,\n                                                id: \"tenseSelect\",\n                                                name: \"tenseSelect\",\n                                                onChange: handleTenseChange,\n                                                children: tenseSelections.map(function(tenseSelection, i) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: tenseSelection.id,\n                                                        children: tenseSelection.tense\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                        lineNumber: 120,\n                                                        columnNumber: 45\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                                lineNumber: 118,\n                                                columnNumber: 37\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                            lineNumber: 117,\n                                            columnNumber: 33\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 29\n                                }, _this) : null,\n                                card ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    ref: cardRef,\n                                    frontHeader: headerFront,\n                                    backHeader: headerBack,\n                                    frontInfo: info,\n                                    backInfo: info\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 29\n                                }, _this) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons col-lg-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"button\",\n                                id: \"flipBtn\",\n                                onClick: handleFlipClick,\n                                value: \"flip card\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\flashcard.tsx\",\n            lineNumber: 100,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false);\n};\n_s(Flashcard, \"MQaDIAWkKQ83gZmn+Yny1Xaj6nc=\");\n_c = Flashcard;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flashcard);\nvar _c;\n$RefreshReg$(_c, \"Flashcard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aGNhcmQudHN4P2E1MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlLCBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvZHJvcERvd24nO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9jYXJkJztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmludGVyZmFjZSBGbGFzaGNhcmRQcm9wcyB7XHJcbiAgICB2ZXJiczogYW55W107XHJcbiAgICB0ZW5zZXM6IGFueVtdO1xyXG4gICAgY29uanVnYXRpb25zOiBhbnlbXTtcclxufVxyXG5cclxuY29uc3QgRmxhc2hjYXJkOiBGQzxGbGFzaGNhcmRQcm9wcz4gPSAoIHsgdmVyYnMsIHRlbnNlcywgY29uanVnYXRpb25zIH0gKSA9PiB7XHJcbiAgICBjb25zdCB2ZXJiUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgdGVuc2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBjYXJkUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2NhcmQsIHNldENhcmRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGluZmluaXRpdmU6IG51bGwsXHJcbiAgICAgICAgdHJhbnNsYXRpb246IG51bGwsXHJcbiAgICAgICAgcHJvbnVuY2lhdGlvbjogbnVsbCxcclxuICAgICAgICB0ZW5zZTogbnVsbCxcclxuICAgICAgICBjb25qdWdhdGlvbnM6IG51bGxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW3ZlcmJTZWxlY3Rpb24sIHNldFZlcmJTZWxlY3Rpb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdGVuc2VTZWxlY3Rpb24sIHNldFRlbnNlU2VsZWN0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IHZlcmJTZWxlY3Rpb25zID0gW107XHJcbiAgICBjb25zdCB0ZW5zZVNlbGVjdGlvbnMgPSBbXTtcclxuICAgIGNvbnN0IGhlYWRlckZyb250OiBTdHJpbmcgPSAnRnJvbnQnO1xyXG4gICAgY29uc3QgaGVhZGVyQmFjazogU3RyaW5nID0gJ0JhY2snO1xyXG4gICAgY29uc3QgaW5mbyA9ICcnO1xyXG4gICAgbGV0IHRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGZvcihjb25zdCB2ZXJiIG9mIHZlcmJzKSB7XHJcbiAgICAgICAgdmVyYlNlbGVjdGlvbnMucHVzaCggXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiB2ZXJiLmlkLFxyXG4gICAgICAgICAgICAgICAgdmVyYjogdmVyYi5pbmZpbml0aXZlIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHZlcmJTZWxlY3Rpb25zLnNvcnQoKGEsIGIpID0+IGEudmVyYiA+IGIudmVyYiA/IDEgOiAtMSk7XHJcbiAgICB2ZXJiU2VsZWN0aW9ucy51bnNoaWZ0KHsgaWQ6ICcnLCB2ZXJiOiAnJyB9KTtcclxuICAgIFxyXG4gICAgZm9yKGNvbnN0IHRlbnNlIG9mIHRlbnNlcykge1xyXG4gICAgICAgIHRlbnNlU2VsZWN0aW9ucy5wdXNoKCBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRlbnNlLmlkLFxyXG4gICAgICAgICAgICAgICAgdGVuc2U6IHRlbnNlLnRlbnNlXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHRlbnNlU2VsZWN0aW9ucy51bnNoaWZ0KHsgaWQ6ICcnLCB0ZW5zZTogJycgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRmxpcENsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlID0gIXRvZ2dsZTtcclxuICAgICAgICBpZih0b2dnbGUpIHtcclxuICAgICAgICAgICAgY2FyZFJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2ZsaXBDYXJkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FyZFJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXBDYXJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVZlcmJDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRWZXJiU2VsZWN0aW9uKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgdmVyYlJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGVuc2VDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRUZW5zZVNlbGVjdGlvbihwYXJzZUludChlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIGluZmluaXRpdmU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByb251bmNpYXRpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0ZW5zZTogJycsXHJcbiAgICAgICAgICAgICAgICBjb25qdWdhdGlvbnM6IG51bGxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBpbmZpbml0aXZlSW5mbyA9IHZlcmJzLmZpbmQoKHZlcmIpID0+IHZlcmIuaWQgID09PSB2ZXJiU2VsZWN0aW9uKTtcclxuICAgICAgICBjb25zdCB0ZW5zZUlucHV0ID0gdGVuc2VzLmZpbmQoKHRlbnNlKSA9PiB0ZW5zZS5pZCA9PT0gdGVuc2VTZWxlY3Rpb24pO1xyXG4gICAgICAgIGluZm8uaW5maW5pdGl2ZSA9IGluZmluaXRpdmVJbmZvICYmIGluZmluaXRpdmVJbmZvLmluZmluaXRpdmU7XHJcbiAgICAgICAgaW5mby50cmFuc2xhdGlvbiA9IGluZmluaXRpdmVJbmZvICYmIGluZmluaXRpdmVJbmZvLnRyYW5zbGF0aW9uO1xyXG4gICAgICAgIGluZm8ucHJvbnVuY2lhdGlvbiA9IGluZmluaXRpdmVJbmZvICYmIGluZmluaXRpdmVJbmZvLnByb251bmNpYXRpb247XHJcbiAgICAgICAgaW5mby50ZW5zZSA9IHRlbnNlSW5wdXQgJiYgdGVuc2VJbnB1dC50ZW5zZTtcclxuICAgICAgICBjb25zdCB2ZXJiQ29uanVnYXRpb25zID0gY29uanVnYXRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGNvbmp1Z2F0aW9uKSA9PiBjb25qdWdhdGlvbi52ZXJiID09PSB2ZXJiU2VsZWN0aW9uICYmIGNvbmp1Z2F0aW9uLnRlbnNlID09PSB0ZW5zZVNlbGVjdGlvbilcclxuICAgICAgICAgICAgLm1hcCggKHsgeW8sIHR1LCBlbCwgbm9zb3Ryb3MsIHZvc290cm9zLCBlbGxvcyB9KSA9PiAoeyB5bywgdHUsIGVsLCBub3NvdHJvcywgdm9zb3Ryb3MsIGVsbG9zfSkgKVswXTtcclxuICAgICAgICBpbmZvLmNvbmp1Z2F0aW9ucyA9IHZlcmJDb25qdWdhdGlvbnMgJiYgdmVyYkNvbmp1Z2F0aW9ucztcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgIH0sIFt0ZW5zZVNlbGVjdGlvbl0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGgxPlZlcmIgRmxhc2hjYXJkPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwidmVyYkZsYXNoY2FyZFwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsIHJlZj17dmVyYlJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+PGxhYmVsIGh0bWxGb3I9XCJ2ZXJiU2VsZWN0XCI+dmVyYjogPC9sYWJlbD48L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ2ZXJiU2VsZWN0XCIgbmFtZT1cInZlcmJTZWxlY3RcIiBvbkNoYW5nZT17aGFuZGxlVmVyYkNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmVyYlNlbGVjdGlvbnMubWFwKCAoIHZlcmJTZWxlY3Rpb24gKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXsgdmVyYlNlbGVjdGlvbi5pZCB9IHZhbHVlPXsgdmVyYlNlbGVjdGlvbi5pZCB9PnsgdmVyYlNlbGVjdGlvbi52ZXJiIH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdmVyYlNlbGVjdGlvbiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD48bGFiZWwgaHRtbEZvcj1cInRlbnNlU2VsZWN0XCI+dGVuc2U6IDwvbGFiZWw+PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgcmVmPXt0ZW5zZVJlZn0gaWQ9XCJ0ZW5zZVNlbGVjdFwiIG5hbWU9XCJ0ZW5zZVNlbGVjdFwiIG9uQ2hhbmdlPXtoYW5kbGVUZW5zZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRlbnNlU2VsZWN0aW9ucy5tYXAoICggdGVuc2VTZWxlY3Rpb24sIGkgKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17IGkgfSB2YWx1ZT17IHRlbnNlU2VsZWN0aW9uLmlkIH0+eyB0ZW5zZVNlbGVjdGlvbi50ZW5zZSB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FyZCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgcmVmPXsgY2FyZFJlZiB9IGZyb250SGVhZGVyPXsgaGVhZGVyRnJvbnQgfSBiYWNrSGVhZGVyPXsgaGVhZGVyQmFjayB9IGZyb250SW5mbz17IGluZm8gfSBiYWNrSW5mbz17IGluZm8gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucyBjb2wtbGctMTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwiZmxpcEJ0blwiIG9uQ2xpY2s9e2hhbmRsZUZsaXBDbGlja30gdmFsdWU9XCJmbGlwIGNhcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxWZXJicyA9IGF3YWl0IHByaXNtYS52ZXJicy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsVGVuc2VzID0gYXdhaXQgcHJpc21hLnRlbnNlcy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsQ29uanVnYXRpb25zID0gYXdhaXQgcHJpc21hLmNvbmp1Z2F0aW9ucy5maW5kTWFueSgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2ZXJiczogYWxsVmVyYnMsXHJcbiAgICAgICAgICAgIHRlbnNlczogYWxsVGVuc2VzLFxyXG4gICAgICAgICAgICBjb25qdWdhdGlvbnM6IGFsbENvbmp1Z2F0aW9uc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxhc2hjYXJkOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNhcmQiLCJGbGFzaGNhcmQiLCJ2ZXJicyIsInRlbnNlcyIsImNvbmp1Z2F0aW9ucyIsInZlcmJSZWYiLCJ0ZW5zZVJlZiIsImNhcmRSZWYiLCJpbmZpbml0aXZlIiwidHJhbnNsYXRpb24iLCJwcm9udW5jaWF0aW9uIiwidGVuc2UiLCJjYXJkIiwic2V0Q2FyZCIsInZlcmJTZWxlY3Rpb24iLCJzZXRWZXJiU2VsZWN0aW9uIiwidGVuc2VTZWxlY3Rpb24iLCJzZXRUZW5zZVNlbGVjdGlvbiIsInZlcmJTZWxlY3Rpb25zIiwidGVuc2VTZWxlY3Rpb25zIiwiaGVhZGVyRnJvbnQiLCJoZWFkZXJCYWNrIiwiaW5mbyIsInRvZ2dsZSIsInZlcmIiLCJwdXNoIiwiaWQiLCJzb3J0IiwiYSIsImIiLCJ1bnNoaWZ0IiwiaGFuZGxlRmxpcENsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhhbmRsZVZlcmJDaGFuZ2UiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwic3R5bGUiLCJkaXNwbGF5IiwiaGFuZGxlVGVuc2VDaGFuZ2UiLCJpbmZpbml0aXZlSW5mbyIsImZpbmQiLCJ0ZW5zZUlucHV0IiwidmVyYkNvbmp1Z2F0aW9ucyIsImZpbHRlciIsImNvbmp1Z2F0aW9uIiwibWFwIiwieW8iLCJ0dSIsImVsIiwibm9zb3Ryb3MiLCJ2b3NvdHJvcyIsImVsbG9zIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJmaWVsZHNldCIsImRsIiwicmVmIiwiZHQiLCJsYWJlbCIsImh0bWxGb3IiLCJkZCIsInNlbGVjdCIsIm5hbWUiLCJvbkNoYW5nZSIsIm9wdGlvbiIsImkiLCJmcm9udEhlYWRlciIsImJhY2tIZWFkZXIiLCJmcm9udEluZm8iLCJiYWNrSW5mbyIsImRpdiIsImlucHV0IiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/verbs/flashcard.tsx\n"));

/***/ })

});