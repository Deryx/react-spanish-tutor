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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var numQuestions = 5;\n    var numOptions = 5;\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref[0], setQuestion = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), infinitives = ref1[0], setInfinitives = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length)), randomTenses = ref2[0], setrandomTenses = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), slideSets = ref3[0], setSlideSets = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var currentConjugations = void 0;\n            var currentVerb = verbIds[i];\n            var currentTense = randomTenses[i] + 1;\n            currentConjugations = conjugations.filter(function(conjugation) {\n                return conjugation.tense === currentTense && conjugation.verb === currentVerb;\n            }).map(function(param) {\n                var yo = param.yo, tu = param.tu, el = param.el, nosotros = param.nosotros, vosotros = param.vosotros, ellos = param.ellos;\n                return {\n                    yo: yo,\n                    tu: tu,\n                    el: el,\n                    nosotros: nosotros,\n                    vosotros: vosotros,\n                    ellos: ellos\n                };\n            });\n            var currentSlides = Object.values(currentConjugations[0]);\n            var randomSlideOrder = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(currentSlides.length, currentSlides.length);\n            var scrambledSlides = randomSlideOrder.map(function(slide) {\n                return currentSlides[slide];\n            });\n            setSlideSets(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                    scrambledSlides\n                ]);\n            });\n        };\n        var randomIndices = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, verbs.length);\n        var randomOrder = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length);\n        var verbIds = [];\n        var slideSet = [];\n        var scrambledSet = [];\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            var _loop1 = function() {\n                var index = _step.value;\n                verbIds = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(verbIds).concat([\n                    verbs.filter(function(verb) {\n                        return verb.id === index;\n                    })[0].id\n                ]);\n            };\n            for(var _iterator = randomIndices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop1();\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n        try {\n            var _loop2 = function() {\n                var id = _step1.value;\n                setInfinitives(function(prev) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                        verbs.filter(function(verb) {\n                            return verb.id === id;\n                        })[0].infinitive\n                    ]);\n                });\n            };\n            for(var _iterator1 = verbIds[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop2();\n        } catch (err) {\n            _didIteratorError1 = true;\n            _iteratorError1 = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                    _iterator1.return();\n                }\n            } finally{\n                if (_didIteratorError1) {\n                    throw _iteratorError1;\n                }\n            }\n        }\n        var currentConjugations = [];\n        var sets = [];\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    console.log(slideSets);\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    var currentTense = randomTenses[question];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: infinitives[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                children: [\n                                                    tenses[currentTense].tense,\n                                                    \" tense\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\",\n                                                children: slideSets.map(function(slideSet) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: slideSet\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"XneToHyFZuikZvS/G3h0FnVAFZ0=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Szs7Ozs7OzRDQUN2QztrREFDViw4REFBQ2tDLEtBQUc7d0NBQUNiLEVBQUUsRUFBQyxXQUFXOzswREFDZiw4REFBQ2EsS0FBRztnREFBQ04sU0FBUyxFQUFDLFFBQVE7MERBRWY3QyxNQUFNLENBQUNtQixHQUFHLENBQUVpQyxTQUFBQSxLQUFLO3lFQUNiLDhEQUFDRCxLQUFHO2tFQUFHQyxLQUFLOzs7Ozs2REFBUTtpREFBQSxDQUN2Qjs7Ozs7b0RBRUg7MERBQ04sOERBQUNELEtBQUc7Z0RBQUNOLFNBQVMsRUFBQyxRQUFROzBEQUVmckMsU0FBUyxDQUFDVyxHQUFHLENBQUVnQixTQUFBQSxRQUFRO3lFQUNuQiw4REFBQ2dCLEtBQUc7a0VBQUdoQixRQUFROzs7Ozs2REFBUTtpREFBQSxDQUMxQjs7Ozs7b0RBRUg7Ozs7Ozs0Q0FDSjs7Ozs7O29DQUNDOzBDQUNYLDhEQUFDZ0IsS0FBRztnQ0FBQ04sU0FBUyxFQUFDLG1CQUFtQjswQ0FDOUIsNEVBQUNRLE9BQUs7b0NBQUNDLElBQUksRUFBQyxRQUFRO29DQUFDaEIsRUFBRSxFQUFDLFdBQVc7b0NBQUNpQixPQUFPLEVBQUdaLGlCQUFpQjtvQ0FBR2EsS0FBSyxFQUFDLE1BQU07Ozs7O3dDQUFHOzs7OztvQ0FDL0U7Ozs7Ozs0QkFDSDs7Ozs7O29CQUNEOzBCQUNWLDhEQUFDaEUsa0VBQU07Ozs7b0JBQUc7O29CQUNYLENBQ047Q0FDSjtHQWxGUUUsTUFBTTtBQUFOQSxLQUFBQSxNQUFNOztBQWlHZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZlcmJzL3NsaWRlci5qcz9kZWQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IFNpdGVoZWFkZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3NpdGVIZWFkZXIudHN4JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeCc7XHJcbmltcG9ydCByYW5kb21OdW1iZXJHZW5lcmF0b3IgZnJvbSAnLi4vLi4vaGVscGVyL3VzZVJhbmRvbU51bWJlckdlbmVyYXRvci50c3gnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZnVuY3Rpb24gU2xpZGVyKCB7IHZlcmJzLCB0ZW5zZXMsIGNvbmp1Z2F0aW9ucyB9ICkge1xyXG4gICAgY29uc3QgbnVtUXVlc3Rpb25zID0gNTtcclxuICAgIGNvbnN0IG51bU9wdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgYnJpY2tzID0gWyd5bycsICd0dScsICfDqWwvZWxsYS91ZCcsICdub3NvdHJvcycsICd2b3NvdHJvcycsICdlbGxvcy9lbGxhcy91ZHMnXTtcclxuICAgIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoIDAgKTtcclxuICAgIGNvbnN0IFtpbmZpbml0aXZlcywgc2V0SW5maW5pdGl2ZXNdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbcmFuZG9tVGVuc2VzLCBzZXRyYW5kb21UZW5zZXNdID0gdXNlU3RhdGUoIHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCB0ZW5zZXMubGVuZ3RoICkgKTtcclxuICAgIGNvbnN0IFtzbGlkZVNldHMsIHNldFNsaWRlU2V0c10gPSB1c2VTdGF0ZSggW10gKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBjb25zdCByYW5kb21JbmRpY2VzID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIHZlcmJzLmxlbmd0aCApO1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbU9yZGVyID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIHRlbnNlcy5sZW5ndGggKTtcclxuICAgICAgICBsZXQgdmVyYklkcyA9IFtdO1xyXG4gICAgICAgIGxldCBzbGlkZVNldCA9IFtdO1xyXG4gICAgICAgIGxldCBzY3JhbWJsZWRTZXQgPSBbXTtcclxuICAgICAgICBmb3IoIGNvbnN0IGluZGV4IG9mIHJhbmRvbUluZGljZXMgKSB7XHJcbiAgICAgICAgICAgIHZlcmJJZHMgPSBbLi4udmVyYklkcywgdmVyYnMuZmlsdGVyKCB2ZXJiID0+IHZlcmIuaWQgPT09IGluZGV4IClbMF0uaWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IoIGNvbnN0IGlkIG9mIHZlcmJJZHMgKSB7XHJcbiAgICAgICAgICAgIHNldEluZmluaXRpdmVzKCBwcmV2ID0+IFsuLi5wcmV2LCB2ZXJicy5maWx0ZXIoIHZlcmIgPT4gdmVyYi5pZCA9PT0gaWQpWzBdLmluZmluaXRpdmVdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGN1cnJlbnRDb25qdWdhdGlvbnMgPSBbXTtcclxuICAgICAgICBsZXQgc2V0cyA9IFtdO1xyXG4gICAgICAgIGZvciggbGV0IGkgPSAwOyBpIDwgbnVtUXVlc3Rpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRDb25qdWdhdGlvbnM7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VmVyYiA9IHZlcmJJZHNbaV07XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGVuc2UgPSByYW5kb21UZW5zZXNbaV0gKyAxO1xyXG4gICAgICAgICAgICBjdXJyZW50Q29uanVnYXRpb25zID0gY29uanVnYXRpb25zXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCAoIGNvbmp1Z2F0aW9uICkgPT4gY29uanVnYXRpb24udGVuc2UgPT09IGN1cnJlbnRUZW5zZSAmJiBjb25qdWdhdGlvbi52ZXJiID09PSBjdXJyZW50VmVyYilcclxuICAgICAgICAgICAgICAgIC5tYXAoICh7IHlvLCB0dSwgZWwsIG5vc290cm9zLCB2b3NvdHJvcywgZWxsb3MgfSkgPT4gKHsgeW8sIHR1LCBlbCwgbm9zb3Ryb3MsIHZvc290cm9zLCBlbGxvc30pICk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50U2xpZGVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50Q29uanVnYXRpb25zWzBdKTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tU2xpZGVPcmRlciA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggY3VycmVudFNsaWRlcy5sZW5ndGgsIGN1cnJlbnRTbGlkZXMubGVuZ3RoICk7XHJcbiAgICAgICAgICAgIGxldCBzY3JhbWJsZWRTbGlkZXMgPSByYW5kb21TbGlkZU9yZGVyLm1hcCggc2xpZGUgPT4gY3VycmVudFNsaWRlc1tzbGlkZV0gKTtcclxuICAgICAgICAgICAgc2V0U2xpZGVTZXRzKCBwcmV2ID0+IFsuLi5wcmV2LCBzY3JhbWJsZWRTbGlkZXNdICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBzbGlkZVNldHMgKTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRRdWVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiggcXVlc3Rpb24gPD0gcXVlc3Rpb24gKSB7XHJcbiAgICAgICAgICAgIHNldFF1ZXN0aW9uKCBxdWVzdGlvbiArIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGN1cnJlbnRUZW5zZSA9IHJhbmRvbVRlbnNlc1txdWVzdGlvbl07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGgxPlZlcmIgU2xpZGVyPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwic2xpZGVyXCIgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS04IGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57IGluZmluaXRpdmVzW3F1ZXN0aW9uXSAgfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+eyB0ZW5zZXNbY3VycmVudFRlbnNlXS50ZW5zZSB9IHRlbnNlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicXVlc3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnJpY2tzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmlja3MubWFwKCBicmljayA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+eyBicmljayB9PC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlU2V0cy5tYXAoIHNsaWRlU2V0ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57IHNsaWRlU2V0IH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zIGNvbC1sZy0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzdWJtaXRCdG5cIiBvbkNsaWNrPXsgaW5jcmVtZW50UXVlc3Rpb24gfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbFZlcmJzID0gYXdhaXQgcHJpc21hLnZlcmJzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxUZW5zZXMgPSBhd2FpdCBwcmlzbWEudGVuc2VzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxDb25qdWdhdGlvbnMgPSBhd2FpdCBwcmlzbWEuY29uanVnYXRpb25zLmZpbmRNYW55KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHZlcmJzOiBhbGxWZXJicyxcclxuICAgICAgICAgICAgdGVuc2VzOiBhbGxUZW5zZXMsXHJcbiAgICAgICAgICAgIGNvbmp1Z2F0aW9uczogYWxsQ29uanVnYXRpb25zXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2l0ZWhlYWRlciIsIkZvb3RlciIsInJhbmRvbU51bWJlckdlbmVyYXRvciIsIlNsaWRlciIsInZlcmJzIiwidGVuc2VzIiwiY29uanVnYXRpb25zIiwibnVtUXVlc3Rpb25zIiwibnVtT3B0aW9ucyIsImJyaWNrcyIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJpbmZpbml0aXZlcyIsInNldEluZmluaXRpdmVzIiwibGVuZ3RoIiwicmFuZG9tVGVuc2VzIiwic2V0cmFuZG9tVGVuc2VzIiwic2xpZGVTZXRzIiwic2V0U2xpZGVTZXRzIiwiY3VycmVudENvbmp1Z2F0aW9ucyIsImN1cnJlbnRWZXJiIiwidmVyYklkcyIsImkiLCJjdXJyZW50VGVuc2UiLCJmaWx0ZXIiLCJjb25qdWdhdGlvbiIsInRlbnNlIiwidmVyYiIsIm1hcCIsInlvIiwidHUiLCJlbCIsIm5vc290cm9zIiwidm9zb3Ryb3MiLCJlbGxvcyIsImN1cnJlbnRTbGlkZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyYW5kb21TbGlkZU9yZGVyIiwic2NyYW1ibGVkU2xpZGVzIiwic2xpZGUiLCJwcmV2IiwicmFuZG9tSW5kaWNlcyIsInJhbmRvbU9yZGVyIiwic2xpZGVTZXQiLCJzY3JhbWJsZWRTZXQiLCJpbmRleCIsImlkIiwiaW5maW5pdGl2ZSIsInNldHMiLCJjb25zb2xlIiwibG9nIiwiaW5jcmVtZW50UXVlc3Rpb24iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiZmllbGRzZXQiLCJoMiIsImg0IiwiZGl2IiwiYnJpY2siLCJpbnB1dCIsInR5cGUiLCJvbkNsaWNrIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});