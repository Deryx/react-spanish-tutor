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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var numQuestions = 5;\n    var numOptions = 5;\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref[0], setQuestion = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), infinitives = ref1[0], setInfinitives = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length)), randomTenses = ref2[0], setrandomTenses = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), slideSets = ref3[0], setSlideSets = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var set = [];\n            var currentVerb = verbIds[i];\n            var currentTense = randomTenses[i] + 1;\n            currentConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currentConjugations).concat([\n                conjugations.filter(function(conjugation) {\n                    return conjugation.tense === currentTense && conjugation.verb === currentVerb;\n                })\n            ]);\n            set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n                currentConjugations.yo\n            ]);\n            set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n                currentConjugations.tu\n            ]);\n            set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n                currentConjugations.el\n            ]);\n            set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n                currentConjugations.nosotros\n            ]);\n            set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n                currentConjugations.vosotros\n            ]);\n            set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n                currentConjugations.ellos\n            ]);\n            setSlideSets(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                    set\n                ]);\n            });\n        };\n        var randomIndices = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, verbs.length);\n        var randomOrder = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length);\n        var verbIds = [];\n        var slideSet = [];\n        var scrambledSet = [];\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            var _loop1 = function() {\n                var index = _step.value;\n                verbIds = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(verbIds).concat([\n                    verbs.filter(function(verb) {\n                        return verb.id === index;\n                    })[0].id\n                ]);\n            };\n            for(var _iterator = randomIndices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop1();\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n        try {\n            var _loop2 = function() {\n                var id = _step1.value;\n                setInfinitives(function(prev) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                        verbs.filter(function(verb) {\n                            return verb.id === id;\n                        })[0].infinitive\n                    ]);\n                });\n            };\n            for(var _iterator1 = verbIds[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop2();\n        } catch (err) {\n            _didIteratorError1 = true;\n            _iteratorError1 = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                    _iterator1.return();\n                }\n            } finally{\n                if (_didIteratorError1) {\n                    throw _iteratorError1;\n                }\n            }\n        }\n        var currentConjugations = [];\n        var sets = [];\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    console.log(slideSets);\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    var currentTense = randomTenses[question];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: infinitives[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                children: [\n                                                    tenses[currentTense].tense,\n                                                    \" tense\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"XneToHyFZuikZvS/G3h0FnVAFZ0=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxRQUFROzBEQUVmdkMsTUFBTSxDQUFDOEMsR0FBRyxDQUFFQyxTQUFBQSxLQUFLO3lFQUNiLDhEQUFDRixLQUFHO2tFQUFHRSxLQUFLOzs7Ozs2REFBUTtpREFBQSxDQUN2Qjs7Ozs7b0RBRUg7MERBQ04sOERBQUNGLEtBQUc7Z0RBQUNOLFNBQVMsRUFBQyxRQUFROzs7OztvREFFakI7Ozs7Ozs0Q0FDSjs7Ozs7O29DQUNDOzBDQUNYLDhEQUFDTSxLQUFHO2dDQUFDTixTQUFTLEVBQUMsbUJBQW1COzBDQUM5Qiw0RUFBQ1MsT0FBSztvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7b0NBQUNqQixFQUFFLEVBQUMsV0FBVztvQ0FBQ2tCLE9BQU8sRUFBR2IsaUJBQWlCO29DQUFHYyxLQUFLLEVBQUMsTUFBTTs7Ozs7d0NBQUc7Ozs7O29DQUMvRTs7Ozs7OzRCQUNIOzs7Ozs7b0JBQ0Q7MEJBQ1YsOERBQUMzRCxrRUFBTTs7OztvQkFBRzs7b0JBQ1gsQ0FDTjtDQUNKO0dBL0VRRSxNQUFNO0FBQU5BLEtBQUFBLE1BQU07O0FBOEZmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVyYnMvc2xpZGVyLmpzP2RlZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgU2l0ZWhlYWRlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvc2l0ZUhlYWRlci50c3gnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9mb290ZXIudHN4JztcclxuaW1wb3J0IHJhbmRvbU51bWJlckdlbmVyYXRvciBmcm9tICcuLi8uLi9oZWxwZXIvdXNlUmFuZG9tTnVtYmVyR2VuZXJhdG9yLnRzeCc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5mdW5jdGlvbiBTbGlkZXIoIHsgdmVyYnMsIHRlbnNlcywgY29uanVnYXRpb25zIH0gKSB7XHJcbiAgICBjb25zdCBudW1RdWVzdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgbnVtT3B0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBicmlja3MgPSBbJ3lvJywgJ3R1JywgJ8OpbC9lbGxhL3VkJywgJ25vc290cm9zJywgJ3Zvc290cm9zJywgJ2VsbG9zL2VsbGFzL3VkcyddO1xyXG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZSggMCApO1xyXG4gICAgY29uc3QgW2luZmluaXRpdmVzLCBzZXRJbmZpbml0aXZlc10gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFtyYW5kb21UZW5zZXMsIHNldHJhbmRvbVRlbnNlc10gPSB1c2VTdGF0ZSggcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIHRlbnNlcy5sZW5ndGggKSApO1xyXG4gICAgY29uc3QgW3NsaWRlU2V0cywgc2V0U2xpZGVTZXRzXSA9IHVzZVN0YXRlKCBbXSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGljZXMgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgdmVyYnMubGVuZ3RoICk7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tT3JkZXIgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgdGVuc2VzLmxlbmd0aCApO1xyXG4gICAgICAgIGxldCB2ZXJiSWRzID0gW107XHJcbiAgICAgICAgbGV0IHNsaWRlU2V0ID0gW107XHJcbiAgICAgICAgbGV0IHNjcmFtYmxlZFNldCA9IFtdO1xyXG4gICAgICAgIGZvciggY29uc3QgaW5kZXggb2YgcmFuZG9tSW5kaWNlcyApIHtcclxuICAgICAgICAgICAgdmVyYklkcyA9IFsuLi52ZXJiSWRzLCB2ZXJicy5maWx0ZXIoIHZlcmIgPT4gdmVyYi5pZCA9PT0gaW5kZXggKVswXS5pZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciggY29uc3QgaWQgb2YgdmVyYklkcyApIHtcclxuICAgICAgICAgICAgc2V0SW5maW5pdGl2ZXMoIHByZXYgPT4gWy4uLnByZXYsIHZlcmJzLmZpbHRlciggdmVyYiA9PiB2ZXJiLmlkID09PSBpZClbMF0uaW5maW5pdGl2ZV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3VycmVudENvbmp1Z2F0aW9ucyA9IFtdO1xyXG4gICAgICAgIGxldCBzZXRzID0gW107XHJcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBudW1RdWVzdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc2V0ID0gW107XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VmVyYiA9IHZlcmJJZHNbaV07XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGVuc2UgPSByYW5kb21UZW5zZXNbaV0gKyAxO1xyXG4gICAgICAgICAgICBjdXJyZW50Q29uanVnYXRpb25zID0gWy4uLmN1cnJlbnRDb25qdWdhdGlvbnMsIGNvbmp1Z2F0aW9ucy5maWx0ZXIoIGNvbmp1Z2F0aW9uID0+IGNvbmp1Z2F0aW9uLnRlbnNlID09PSBjdXJyZW50VGVuc2UgJiYgY29uanVnYXRpb24udmVyYiA9PT0gY3VycmVudFZlcmIpXTtcclxuICAgICAgICAgICAgc2V0ID0gWy4uLnNldCwgY3VycmVudENvbmp1Z2F0aW9ucy55b107XHJcbiAgICAgICAgICAgIHNldCA9IFsuLi5zZXQsIGN1cnJlbnRDb25qdWdhdGlvbnMudHVdO1xyXG4gICAgICAgICAgICBzZXQgPSBbLi4uc2V0LCBjdXJyZW50Q29uanVnYXRpb25zLmVsXTtcclxuICAgICAgICAgICAgc2V0ID0gWy4uLnNldCwgY3VycmVudENvbmp1Z2F0aW9ucy5ub3NvdHJvc107XHJcbiAgICAgICAgICAgIHNldCA9IFsuLi5zZXQsIGN1cnJlbnRDb25qdWdhdGlvbnMudm9zb3Ryb3NdO1xyXG4gICAgICAgICAgICBzZXQgPSBbLi4uc2V0LCBjdXJyZW50Q29uanVnYXRpb25zLmVsbG9zXTtcclxuICAgICAgICAgICAgc2V0U2xpZGVTZXRzKCBwcmV2ID0+IFsuLi5wcmV2LCBzZXRdKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coIHNsaWRlU2V0cyApO1xyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudFF1ZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBxdWVzdGlvbiA8PSBxdWVzdGlvbiApIHtcclxuICAgICAgICAgICAgc2V0UXVlc3Rpb24oIHF1ZXN0aW9uICsgMSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgY3VycmVudFRlbnNlID0gcmFuZG9tVGVuc2VzW3F1ZXN0aW9uXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8aDE+VmVyYiBTbGlkZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJzbGlkZXJcIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnsgaW5maW5pdGl2ZXNbcXVlc3Rpb25dICB9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57IHRlbnNlc1tjdXJyZW50VGVuc2VdLnRlbnNlIH0gdGVuc2U8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJxdWVzdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmlja3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyaWNrcy5tYXAoIGJyaWNrID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57IGJyaWNrIH08L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMgY29sLWxnLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cInN1Ym1pdEJ0blwiIG9uQ2xpY2s9eyBpbmNyZW1lbnRRdWVzdGlvbiB9IHZhbHVlPVwibmV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgY29uc3QgYWxsVmVyYnMgPSBhd2FpdCBwcmlzbWEudmVyYnMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbFRlbnNlcyA9IGF3YWl0IHByaXNtYS50ZW5zZXMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbENvbmp1Z2F0aW9ucyA9IGF3YWl0IHByaXNtYS5jb25qdWdhdGlvbnMuZmluZE1hbnkoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdmVyYnM6IGFsbFZlcmJzLFxyXG4gICAgICAgICAgICB0ZW5zZXM6IGFsbFRlbnNlcyxcclxuICAgICAgICAgICAgY29uanVnYXRpb25zOiBhbGxDb25qdWdhdGlvbnNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTaXRlaGVhZGVyIiwiRm9vdGVyIiwicmFuZG9tTnVtYmVyR2VuZXJhdG9yIiwiU2xpZGVyIiwidmVyYnMiLCJ0ZW5zZXMiLCJjb25qdWdhdGlvbnMiLCJudW1RdWVzdGlvbnMiLCJudW1PcHRpb25zIiwiYnJpY2tzIiwicXVlc3Rpb24iLCJzZXRRdWVzdGlvbiIsImluZmluaXRpdmVzIiwic2V0SW5maW5pdGl2ZXMiLCJsZW5ndGgiLCJyYW5kb21UZW5zZXMiLCJzZXRyYW5kb21UZW5zZXMiLCJzbGlkZVNldHMiLCJzZXRTbGlkZVNldHMiLCJzZXQiLCJjdXJyZW50VmVyYiIsInZlcmJJZHMiLCJpIiwiY3VycmVudFRlbnNlIiwiY3VycmVudENvbmp1Z2F0aW9ucyIsImZpbHRlciIsImNvbmp1Z2F0aW9uIiwidGVuc2UiLCJ2ZXJiIiwieW8iLCJ0dSIsImVsIiwibm9zb3Ryb3MiLCJ2b3NvdHJvcyIsImVsbG9zIiwicHJldiIsInJhbmRvbUluZGljZXMiLCJyYW5kb21PcmRlciIsInNsaWRlU2V0Iiwic2NyYW1ibGVkU2V0IiwiaW5kZXgiLCJpZCIsImluZmluaXRpdmUiLCJzZXRzIiwiY29uc29sZSIsImxvZyIsImluY3JlbWVudFF1ZXN0aW9uIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImZpZWxkc2V0IiwiaDIiLCJoNCIsImRpdiIsIm1hcCIsImJyaWNrIiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});