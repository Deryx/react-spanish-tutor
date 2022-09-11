"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/verbs/slider",{

/***/ "./pages/verbs/slider.js":
/*!*******************************!*\
  !*** ./pages/verbs/slider.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var numQuestions = 5;\n    var numOptions = 5;\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref[0], setQuestion = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), infinitives = ref1[0], setInfinitives = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length)), randomTenses = ref2[0], setrandomTenses = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), slideSets = ref3[0], setSlideSets = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var currentConjugations = void 0;\n            var currentVerb = verbIds[i];\n            var currentTense = randomTenses[i] + 1;\n            currentConjugations = conjugations.filter(function(conjugation) {\n                return conjugation.tense === currentTense && conjugation.verb === currentVerb;\n            });\n            var conjugationArray = currentConjugations.map(function(param) {\n                var yo = param.yo, tu = param.tu, el = param.el, nosotros = param.nosotros, vosotros = param.vosotros, ellos = param.ellos;\n                return {\n                    yo: yo,\n                    tu: tu,\n                    el: el,\n                    nosotros: nosotros,\n                    vosotros: vosotros,\n                    ellos: ellos\n                };\n            });\n        };\n        var randomIndices = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, verbs.length);\n        var randomOrder = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length);\n        var verbIds = [];\n        var slideSet = [];\n        var scrambledSet = [];\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            var _loop1 = function() {\n                var index = _step.value;\n                verbIds = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(verbIds).concat([\n                    verbs.filter(function(verb) {\n                        return verb.id === index;\n                    })[0].id\n                ]);\n            };\n            for(var _iterator = randomIndices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop1();\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n        try {\n            var _loop2 = function() {\n                var id = _step1.value;\n                setInfinitives(function(prev) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                        verbs.filter(function(verb) {\n                            return verb.id === id;\n                        })[0].infinitive\n                    ]);\n                });\n            };\n            for(var _iterator1 = verbIds[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop2();\n        } catch (err) {\n            _didIteratorError1 = true;\n            _iteratorError1 = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                    _iterator1.return();\n                }\n            } finally{\n                if (_didIteratorError1) {\n                    throw _iteratorError1;\n                }\n            }\n        }\n        var currentConjugations = [];\n        var sets = [];\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    console.log(slideSets);\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    var currentTense = randomTenses[question];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: infinitives[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                children: [\n                                                    tenses[currentTense].tense,\n                                                    \" tense\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"XneToHyFZuikZvS/G3h0FnVAFZ0=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRFQUFDUSxPQUFLO29DQUFDQyxJQUFJLEVBQUMsUUFBUTtvQ0FBQ2pCLEVBQUUsRUFBQyxXQUFXO29DQUFDa0IsT0FBTyxFQUFHWixpQkFBaUI7b0NBQUdhLEtBQUssRUFBQyxNQUFNOzs7Ozt3Q0FBRzs7Ozs7b0NBQy9FOzs7Ozs7NEJBQ0g7Ozs7OztvQkFDRDswQkFDViw4REFBQzNELGtFQUFNOzs7O29CQUFHOztvQkFDWCxDQUNOO0NBQ0o7R0F6RVFFLE1BQU07QUFBTkEsS0FBQUEsTUFBTTs7QUF3RmYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92ZXJicy9zbGlkZXIuanM/ZGVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBTaXRlaGVhZGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9zaXRlSGVhZGVyLnRzeCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50c3gnO1xyXG5pbXBvcnQgcmFuZG9tTnVtYmVyR2VuZXJhdG9yIGZyb20gJy4uLy4uL2hlbHBlci91c2VSYW5kb21OdW1iZXJHZW5lcmF0b3IudHN4JztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmZ1bmN0aW9uIFNsaWRlciggeyB2ZXJicywgdGVuc2VzLCBjb25qdWdhdGlvbnMgfSApIHtcclxuICAgIGNvbnN0IG51bVF1ZXN0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBudW1PcHRpb25zID0gNTtcclxuICAgIGNvbnN0IGJyaWNrcyA9IFsneW8nLCAndHUnLCAnw6lsL2VsbGEvdWQnLCAnbm9zb3Ryb3MnLCAndm9zb3Ryb3MnLCAnZWxsb3MvZWxsYXMvdWRzJ107XHJcbiAgICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKCAwICk7XHJcbiAgICBjb25zdCBbaW5maW5pdGl2ZXMsIHNldEluZmluaXRpdmVzXSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgW3JhbmRvbVRlbnNlcywgc2V0cmFuZG9tVGVuc2VzXSA9IHVzZVN0YXRlKCByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgdGVuc2VzLmxlbmd0aCApICk7XHJcbiAgICBjb25zdCBbc2xpZGVTZXRzLCBzZXRTbGlkZVNldHNdID0gdXNlU3RhdGUoIFtdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kaWNlcyA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCB2ZXJicy5sZW5ndGggKTtcclxuICAgICAgICBjb25zdCByYW5kb21PcmRlciA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCB0ZW5zZXMubGVuZ3RoICk7XHJcbiAgICAgICAgbGV0IHZlcmJJZHMgPSBbXTtcclxuICAgICAgICBsZXQgc2xpZGVTZXQgPSBbXTtcclxuICAgICAgICBsZXQgc2NyYW1ibGVkU2V0ID0gW107XHJcbiAgICAgICAgZm9yKCBjb25zdCBpbmRleCBvZiByYW5kb21JbmRpY2VzICkge1xyXG4gICAgICAgICAgICB2ZXJiSWRzID0gWy4uLnZlcmJJZHMsIHZlcmJzLmZpbHRlciggdmVyYiA9PiB2ZXJiLmlkID09PSBpbmRleCApWzBdLmlkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKCBjb25zdCBpZCBvZiB2ZXJiSWRzICkge1xyXG4gICAgICAgICAgICBzZXRJbmZpbml0aXZlcyggcHJldiA9PiBbLi4ucHJldiwgdmVyYnMuZmlsdGVyKCB2ZXJiID0+IHZlcmIuaWQgPT09IGlkKVswXS5pbmZpbml0aXZlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjdXJyZW50Q29uanVnYXRpb25zID0gW107XHJcbiAgICAgICAgbGV0IHNldHMgPSBbXTtcclxuICAgICAgICBmb3IoIGxldCBpID0gMDsgaSA8IG51bVF1ZXN0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q29uanVnYXRpb25zO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFZlcmIgPSB2ZXJiSWRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFRlbnNlID0gcmFuZG9tVGVuc2VzW2ldICsgMTtcclxuICAgICAgICAgICAgY3VycmVudENvbmp1Z2F0aW9ucyA9IGNvbmp1Z2F0aW9ucy5maWx0ZXIoICggY29uanVnYXRpb24gKSA9PiBjb25qdWdhdGlvbi50ZW5zZSA9PT0gY3VycmVudFRlbnNlICYmIGNvbmp1Z2F0aW9uLnZlcmIgPT09IGN1cnJlbnRWZXJiKTtcclxuICAgICAgICAgICAgbGV0IGNvbmp1Z2F0aW9uQXJyYXkgPSBjdXJyZW50Q29uanVnYXRpb25zLm1hcCggKHsgeW8sIHR1LCBlbCwgbm9zb3Ryb3MsIHZvc290cm9zLCBlbGxvcyB9KSA9PiAoeyB5bywgdHUsIGVsLCBub3NvdHJvcywgdm9zb3Ryb3MsIGVsbG9zfSkgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coIHNsaWRlU2V0cyApO1xyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudFF1ZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBxdWVzdGlvbiA8PSBxdWVzdGlvbiApIHtcclxuICAgICAgICAgICAgc2V0UXVlc3Rpb24oIHF1ZXN0aW9uICsgMSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgY3VycmVudFRlbnNlID0gcmFuZG9tVGVuc2VzW3F1ZXN0aW9uXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8aDE+VmVyYiBTbGlkZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJzbGlkZXJcIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnsgaW5maW5pdGl2ZXNbcXVlc3Rpb25dICB9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57IHRlbnNlc1tjdXJyZW50VGVuc2VdLnRlbnNlIH0gdGVuc2U8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJxdWVzdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmlja3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyaWNrcy5tYXAoIGJyaWNrID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57IGJyaWNrIH08L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMgY29sLWxnLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cInN1Ym1pdEJ0blwiIG9uQ2xpY2s9eyBpbmNyZW1lbnRRdWVzdGlvbiB9IHZhbHVlPVwibmV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgY29uc3QgYWxsVmVyYnMgPSBhd2FpdCBwcmlzbWEudmVyYnMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbFRlbnNlcyA9IGF3YWl0IHByaXNtYS50ZW5zZXMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbENvbmp1Z2F0aW9ucyA9IGF3YWl0IHByaXNtYS5jb25qdWdhdGlvbnMuZmluZE1hbnkoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdmVyYnM6IGFsbFZlcmJzLFxyXG4gICAgICAgICAgICB0ZW5zZXM6IGFsbFRlbnNlcyxcclxuICAgICAgICAgICAgY29uanVnYXRpb25zOiBhbGxDb25qdWdhdGlvbnNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTaXRlaGVhZGVyIiwiRm9vdGVyIiwicmFuZG9tTnVtYmVyR2VuZXJhdG9yIiwiU2xpZGVyIiwidmVyYnMiLCJ0ZW5zZXMiLCJjb25qdWdhdGlvbnMiLCJudW1RdWVzdGlvbnMiLCJudW1PcHRpb25zIiwiYnJpY2tzIiwicXVlc3Rpb24iLCJzZXRRdWVzdGlvbiIsImluZmluaXRpdmVzIiwic2V0SW5maW5pdGl2ZXMiLCJsZW5ndGgiLCJyYW5kb21UZW5zZXMiLCJzZXRyYW5kb21UZW5zZXMiLCJzbGlkZVNldHMiLCJzZXRTbGlkZVNldHMiLCJjdXJyZW50Q29uanVnYXRpb25zIiwiY3VycmVudFZlcmIiLCJ2ZXJiSWRzIiwiaSIsImN1cnJlbnRUZW5zZSIsImZpbHRlciIsImNvbmp1Z2F0aW9uIiwidGVuc2UiLCJ2ZXJiIiwiY29uanVnYXRpb25BcnJheSIsIm1hcCIsInlvIiwidHUiLCJlbCIsIm5vc290cm9zIiwidm9zb3Ryb3MiLCJlbGxvcyIsInJhbmRvbUluZGljZXMiLCJyYW5kb21PcmRlciIsInNsaWRlU2V0Iiwic2NyYW1ibGVkU2V0IiwiaW5kZXgiLCJpZCIsInByZXYiLCJpbmZpbml0aXZlIiwic2V0cyIsImNvbnNvbGUiLCJsb2ciLCJpbmNyZW1lbnRRdWVzdGlvbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJmaWVsZHNldCIsImgyIiwiaDQiLCJkaXYiLCJicmljayIsImlucHV0IiwidHlwZSIsIm9uQ2xpY2siLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});