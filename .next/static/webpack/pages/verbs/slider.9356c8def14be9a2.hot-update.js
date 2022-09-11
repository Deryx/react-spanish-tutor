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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var numQuestions = 5;\n    var numOptions = 5;\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref[0], setQuestion = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), infinitives = ref1[0], setInfinitives = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length)), randomTenses = ref2[0], setrandomTenses = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), slideSets = ref3[0], setSlideSets = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var set = [];\n            var currentVerb = verbIds[i];\n            var currentTense = randomTenses[i] + 1;\n            currentConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currentConjugations).concat([\n                conjugations.filter(function(conjugation) {\n                    return conjugation.tense === currentTense && conjugation.verb === currentVerb;\n                })[0]\n            ]);\n            set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n                currentConjugations[0].yo\n            ]);\n            set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n                currentConjugations[0].tu\n            ]);\n            set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n                currentConjugations[0].el\n            ]);\n            set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n                currentConjugations[0].nosotros\n            ]);\n            set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n                currentConjugations[0].vosotros\n            ]);\n            set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n                currentConjugations[0].ellos\n            ]);\n            sets = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(sets).concat([\n                set\n            ]);\n        };\n        var randomIndices = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, verbs.length);\n        var randomOrder = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length);\n        var verbIds = [];\n        var slideSet = [];\n        var scrambledSet = [];\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            var _loop1 = function() {\n                var index = _step.value;\n                verbIds = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(verbIds).concat([\n                    verbs.filter(function(verb) {\n                        return verb.id === index;\n                    })[0].id\n                ]);\n            };\n            for(var _iterator = randomIndices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop1();\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n        try {\n            var _loop2 = function() {\n                var id = _step1.value;\n                setInfinitives(function(prev) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                        verbs.filter(function(verb) {\n                            return verb.id === id;\n                        })[0].infinitive\n                    ]);\n                });\n            };\n            for(var _iterator1 = verbIds[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop2();\n        } catch (err) {\n            _didIteratorError1 = true;\n            _iteratorError1 = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                    _iterator1.return();\n                }\n            } finally{\n                if (_didIteratorError1) {\n                    throw _iteratorError1;\n                }\n            }\n        }\n        var currentConjugations = [];\n        var sets = [];\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n        console.log(sets);\n    }, []);\n    console.log(slideSets);\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    var currentTense = randomTenses[question];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: infinitives[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                children: [\n                                                    tenses[currentTense].tense,\n                                                    \" tense\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"XneToHyFZuikZvS/G3h0FnVAFZ0=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxLQUFLO29EQUFFLFFBQU07Ozs7OztvREFBSzs7Ozs7OzRDQUN2QztrREFDViw4REFBQzJCLEtBQUc7d0NBQUNiLEVBQUUsRUFBQyxXQUFXOzswREFDZiw4REFBQ2EsS0FBRztnREFBQ04sU0FBUyxFQUFDLFFBQVE7MERBRWZ2QyxNQUFNLENBQUM4QyxHQUFHLENBQUVDLFNBQUFBLEtBQUs7eUVBQ2IsOERBQUNGLEtBQUc7a0VBQUdFLEtBQUs7Ozs7OzZEQUFRO2lEQUFBLENBQ3ZCOzs7OztvREFFSDswREFDTiw4REFBQ0YsS0FBRztnREFBQ04sU0FBUyxFQUFDLFFBQVE7Ozs7O29EQUVqQjs7Ozs7OzRDQUNKOzs7Ozs7b0NBQ0M7MENBQ1gsOERBQUNNLEtBQUc7Z0NBQUNOLFNBQVMsRUFBQyxtQkFBbUI7MENBQzlCLDRFQUFDUyxPQUFLO29DQUFDQyxJQUFJLEVBQUMsUUFBUTtvQ0FBQ2pCLEVBQUUsRUFBQyxXQUFXO29DQUFDa0IsT0FBTyxFQUFHYixpQkFBaUI7b0NBQUdjLEtBQUssRUFBQyxNQUFNOzs7Ozt3Q0FBRzs7Ozs7b0NBQy9FOzs7Ozs7NEJBQ0g7Ozs7OztvQkFDRDswQkFDViw4REFBQzNELGtFQUFNOzs7O29CQUFHOztvQkFDWCxDQUNOO0NBQ0o7R0FoRlFFLE1BQU07QUFBTkEsS0FBQUEsTUFBTTs7QUErRmYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92ZXJicy9zbGlkZXIuanM/ZGVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBTaXRlaGVhZGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9zaXRlSGVhZGVyLnRzeCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50c3gnO1xyXG5pbXBvcnQgcmFuZG9tTnVtYmVyR2VuZXJhdG9yIGZyb20gJy4uLy4uL2hlbHBlci91c2VSYW5kb21OdW1iZXJHZW5lcmF0b3IudHN4JztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmZ1bmN0aW9uIFNsaWRlciggeyB2ZXJicywgdGVuc2VzLCBjb25qdWdhdGlvbnMgfSApIHtcclxuICAgIGNvbnN0IG51bVF1ZXN0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBudW1PcHRpb25zID0gNTtcclxuICAgIGNvbnN0IGJyaWNrcyA9IFsneW8nLCAndHUnLCAnw6lsL2VsbGEvdWQnLCAnbm9zb3Ryb3MnLCAndm9zb3Ryb3MnLCAnZWxsb3MvZWxsYXMvdWRzJ107XHJcbiAgICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKCAwICk7XHJcbiAgICBjb25zdCBbaW5maW5pdGl2ZXMsIHNldEluZmluaXRpdmVzXSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgW3JhbmRvbVRlbnNlcywgc2V0cmFuZG9tVGVuc2VzXSA9IHVzZVN0YXRlKCByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgdGVuc2VzLmxlbmd0aCApICk7XHJcbiAgICBjb25zdCBbc2xpZGVTZXRzLCBzZXRTbGlkZVNldHNdID0gdXNlU3RhdGUoIFtdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kaWNlcyA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCB2ZXJicy5sZW5ndGggKTtcclxuICAgICAgICBjb25zdCByYW5kb21PcmRlciA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCB0ZW5zZXMubGVuZ3RoICk7XHJcbiAgICAgICAgbGV0IHZlcmJJZHMgPSBbXTtcclxuICAgICAgICBsZXQgc2xpZGVTZXQgPSBbXTtcclxuICAgICAgICBsZXQgc2NyYW1ibGVkU2V0ID0gW107XHJcbiAgICAgICAgZm9yKCBjb25zdCBpbmRleCBvZiByYW5kb21JbmRpY2VzICkge1xyXG4gICAgICAgICAgICB2ZXJiSWRzID0gWy4uLnZlcmJJZHMsIHZlcmJzLmZpbHRlciggdmVyYiA9PiB2ZXJiLmlkID09PSBpbmRleCApWzBdLmlkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKCBjb25zdCBpZCBvZiB2ZXJiSWRzICkge1xyXG4gICAgICAgICAgICBzZXRJbmZpbml0aXZlcyggcHJldiA9PiBbLi4ucHJldiwgdmVyYnMuZmlsdGVyKCB2ZXJiID0+IHZlcmIuaWQgPT09IGlkKVswXS5pbmZpbml0aXZlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjdXJyZW50Q29uanVnYXRpb25zID0gW107XHJcbiAgICAgICAgbGV0IHNldHMgPSBbXTtcclxuICAgICAgICBmb3IoIGxldCBpID0gMDsgaSA8IG51bVF1ZXN0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzZXQgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRWZXJiID0gdmVyYklkc1tpXTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUZW5zZSA9IHJhbmRvbVRlbnNlc1tpXSArIDE7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDb25qdWdhdGlvbnMgPSBbLi4uY3VycmVudENvbmp1Z2F0aW9ucywgY29uanVnYXRpb25zLmZpbHRlciggY29uanVnYXRpb24gPT4gY29uanVnYXRpb24udGVuc2UgPT09IGN1cnJlbnRUZW5zZSAmJiBjb25qdWdhdGlvbi52ZXJiID09PSBjdXJyZW50VmVyYilbMF1dO1xyXG4gICAgICAgICAgICBzZXQgPSBbLi4uc2V0LCBjdXJyZW50Q29uanVnYXRpb25zWzBdLnlvXTtcclxuICAgICAgICAgICAgc2V0ID0gWy4uLnNldCwgY3VycmVudENvbmp1Z2F0aW9uc1swXS50dV07XHJcbiAgICAgICAgICAgIHNldCA9IFsuLi5zZXQsIGN1cnJlbnRDb25qdWdhdGlvbnNbMF0uZWxdO1xyXG4gICAgICAgICAgICBzZXQgPSBbLi4uc2V0LCBjdXJyZW50Q29uanVnYXRpb25zWzBdLm5vc290cm9zXTtcclxuICAgICAgICAgICAgc2V0ID0gWy4uLnNldCwgY3VycmVudENvbmp1Z2F0aW9uc1swXS52b3NvdHJvc107XHJcbiAgICAgICAgICAgIHNldCA9IFsuLi5zZXQsIGN1cnJlbnRDb25qdWdhdGlvbnNbMF0uZWxsb3NdO1xyXG4gICAgICAgICAgICBzZXRzID0gWy4uLnNldHMsIHNldF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHNldHMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBzbGlkZVNldHMgKTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRRdWVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiggcXVlc3Rpb24gPD0gcXVlc3Rpb24gKSB7XHJcbiAgICAgICAgICAgIHNldFF1ZXN0aW9uKCBxdWVzdGlvbiArIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGN1cnJlbnRUZW5zZSA9IHJhbmRvbVRlbnNlc1txdWVzdGlvbl07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGgxPlZlcmIgU2xpZGVyPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwic2xpZGVyXCIgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS04IGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57IGluZmluaXRpdmVzW3F1ZXN0aW9uXSAgfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+eyB0ZW5zZXNbY3VycmVudFRlbnNlXS50ZW5zZSB9IHRlbnNlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicXVlc3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnJpY2tzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmlja3MubWFwKCBicmljayA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+eyBicmljayB9PC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zIGNvbC1sZy0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzdWJtaXRCdG5cIiBvbkNsaWNrPXsgaW5jcmVtZW50UXVlc3Rpb24gfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbFZlcmJzID0gYXdhaXQgcHJpc21hLnZlcmJzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxUZW5zZXMgPSBhd2FpdCBwcmlzbWEudGVuc2VzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxDb25qdWdhdGlvbnMgPSBhd2FpdCBwcmlzbWEuY29uanVnYXRpb25zLmZpbmRNYW55KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHZlcmJzOiBhbGxWZXJicyxcclxuICAgICAgICAgICAgdGVuc2VzOiBhbGxUZW5zZXMsXHJcbiAgICAgICAgICAgIGNvbmp1Z2F0aW9uczogYWxsQ29uanVnYXRpb25zXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2l0ZWhlYWRlciIsIkZvb3RlciIsInJhbmRvbU51bWJlckdlbmVyYXRvciIsIlNsaWRlciIsInZlcmJzIiwidGVuc2VzIiwiY29uanVnYXRpb25zIiwibnVtUXVlc3Rpb25zIiwibnVtT3B0aW9ucyIsImJyaWNrcyIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJpbmZpbml0aXZlcyIsInNldEluZmluaXRpdmVzIiwibGVuZ3RoIiwicmFuZG9tVGVuc2VzIiwic2V0cmFuZG9tVGVuc2VzIiwic2xpZGVTZXRzIiwic2V0U2xpZGVTZXRzIiwic2V0IiwiY3VycmVudFZlcmIiLCJ2ZXJiSWRzIiwiaSIsImN1cnJlbnRUZW5zZSIsImN1cnJlbnRDb25qdWdhdGlvbnMiLCJmaWx0ZXIiLCJjb25qdWdhdGlvbiIsInRlbnNlIiwidmVyYiIsInlvIiwidHUiLCJlbCIsIm5vc290cm9zIiwidm9zb3Ryb3MiLCJlbGxvcyIsInNldHMiLCJyYW5kb21JbmRpY2VzIiwicmFuZG9tT3JkZXIiLCJzbGlkZVNldCIsInNjcmFtYmxlZFNldCIsImluZGV4IiwiaWQiLCJwcmV2IiwiaW5maW5pdGl2ZSIsImNvbnNvbGUiLCJsb2ciLCJpbmNyZW1lbnRRdWVzdGlvbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJmaWVsZHNldCIsImgyIiwiaDQiLCJkaXYiLCJtYXAiLCJicmljayIsImlucHV0IiwidHlwZSIsIm9uQ2xpY2siLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});