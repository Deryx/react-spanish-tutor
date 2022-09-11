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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var numQuestions = 5;\n    var numOptions = 5;\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref[0], setQuestion = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), infinitives = ref1[0], setInfinitives = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length)), randomTenses = ref2[0], setrandomTenses = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), slideSets = ref3[0], setSlideSets = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var randomIndices = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, verbs.length);\n        var randomOrder = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length);\n        var verbIds = [];\n        var slideSet = [];\n        var scrambledSet = [];\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            var _loop = function() {\n                var index = _step.value;\n                verbIds = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(verbIds).concat([\n                    verbs.filter(function(verb) {\n                        return verb.id === index;\n                    })[0].id\n                ]);\n            };\n            for(var _iterator = randomIndices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n        try {\n            var _loop1 = function() {\n                var id = _step1.value;\n                setInfinitives(function(prev) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                        verbs.filter(function(verb) {\n                            return verb.id === id;\n                        })[0].infinitive\n                    ]);\n                });\n            };\n            for(var _iterator1 = verbIds[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop1();\n        } catch (err) {\n            _didIteratorError1 = true;\n            _iteratorError1 = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                    _iterator1.return();\n                }\n            } finally{\n                if (_didIteratorError1) {\n                    throw _iteratorError1;\n                }\n            }\n        }\n        var currentConjugations = [];\n        var sets = [];\n        var set = [];\n        var currentVerb = verbIds[i];\n        var currentTense = randomTenses + 1;\n        currentConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currentConjugations).concat([\n            conjugations.filter(function(conjugation) {\n                return conjugation.tense === currentTense && conjugation.verb === currentVerb;\n            })[0]\n        ]);\n        set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n            currentConjugations[0].yo\n        ]);\n        set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n            currentConjugations[0].tu\n        ]);\n        set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n            currentConjugations[0].el\n        ]);\n        set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n            currentConjugations[0].nosotros\n        ]);\n        set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n            currentConjugations[0].vosotros\n        ]);\n        set = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set).concat([\n            currentConjugations[0].ellos\n        ]);\n        setSlideSets(function(prev) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                set\n            ]);\n        });\n    }, []);\n    console.log(slideSets);\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    var currentTense = randomTenses[question];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: infinitives[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                children: [\n                                                    tenses[currentTense].tense,\n                                                    \" tense\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"XneToHyFZuikZvS/G3h0FnVAFZ0=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVmdkMsTUFBTSxDQUFDOEMsR0FBRyxDQUFFQyxTQUFBQSxLQUFLO3lFQUNiLDhEQUFDRixLQUFHO2tFQUFHRSxLQUFLOzs7Ozs2REFBUTtpREFBQSxDQUN2Qjs7Ozs7b0RBRUg7MERBQ04sOERBQUNGLEtBQUc7Z0RBQUNOLFNBQVMsRUFBQyxRQUFROzs7OztvREFFakI7Ozs7Ozs0Q0FDSjs7Ozs7O29DQUNDOzBDQUNYLDhEQUFDTSxLQUFHO2dDQUFDTixTQUFTLEVBQUMsbUJBQW1COzBDQUM5Qiw0RUFBQ1MsT0FBSztvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7b0NBQUMvQixFQUFFLEVBQUMsV0FBVztvQ0FBQ2dDLE9BQU8sRUFBR2IsaUJBQWlCO29DQUFHYyxLQUFLLEVBQUMsTUFBTTs7Ozs7d0NBQUc7Ozs7O29DQUMvRTs7Ozs7OzRCQUNIOzs7Ozs7b0JBQ0Q7MEJBQ1YsOERBQUMzRCxrRUFBTTs7OztvQkFBRzs7b0JBQ1gsQ0FDTjtDQUNKO0dBN0VRRSxNQUFNO0FBQU5BLEtBQUFBLE1BQU07O0FBNEZmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVyYnMvc2xpZGVyLmpzP2RlZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgU2l0ZWhlYWRlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvc2l0ZUhlYWRlci50c3gnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9mb290ZXIudHN4JztcclxuaW1wb3J0IHJhbmRvbU51bWJlckdlbmVyYXRvciBmcm9tICcuLi8uLi9oZWxwZXIvdXNlUmFuZG9tTnVtYmVyR2VuZXJhdG9yLnRzeCc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5mdW5jdGlvbiBTbGlkZXIoIHsgdmVyYnMsIHRlbnNlcywgY29uanVnYXRpb25zIH0gKSB7XHJcbiAgICBjb25zdCBudW1RdWVzdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgbnVtT3B0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBicmlja3MgPSBbJ3lvJywgJ3R1JywgJ8OpbC9lbGxhL3VkJywgJ25vc290cm9zJywgJ3Zvc290cm9zJywgJ2VsbG9zL2VsbGFzL3VkcyddO1xyXG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZSggMCApO1xyXG4gICAgY29uc3QgW2luZmluaXRpdmVzLCBzZXRJbmZpbml0aXZlc10gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFtyYW5kb21UZW5zZXMsIHNldHJhbmRvbVRlbnNlc10gPSB1c2VTdGF0ZSggcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIHRlbnNlcy5sZW5ndGggKSApO1xyXG4gICAgY29uc3QgW3NsaWRlU2V0cywgc2V0U2xpZGVTZXRzXSA9IHVzZVN0YXRlKCBbXSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGljZXMgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgdmVyYnMubGVuZ3RoICk7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tT3JkZXIgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgdGVuc2VzLmxlbmd0aCApO1xyXG4gICAgICAgIGxldCB2ZXJiSWRzID0gW107XHJcbiAgICAgICAgbGV0IHNsaWRlU2V0ID0gW107XHJcbiAgICAgICAgbGV0IHNjcmFtYmxlZFNldCA9IFtdO1xyXG4gICAgICAgIGZvciggY29uc3QgaW5kZXggb2YgcmFuZG9tSW5kaWNlcyApIHtcclxuICAgICAgICAgICAgdmVyYklkcyA9IFsuLi52ZXJiSWRzLCB2ZXJicy5maWx0ZXIoIHZlcmIgPT4gdmVyYi5pZCA9PT0gaW5kZXggKVswXS5pZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciggY29uc3QgaWQgb2YgdmVyYklkcyApIHtcclxuICAgICAgICAgICAgc2V0SW5maW5pdGl2ZXMoIHByZXYgPT4gWy4uLnByZXYsIHZlcmJzLmZpbHRlciggdmVyYiA9PiB2ZXJiLmlkID09PSBpZClbMF0uaW5maW5pdGl2ZV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3VycmVudENvbmp1Z2F0aW9ucyA9IFtdO1xyXG4gICAgICAgIGxldCBzZXRzID0gW107XHJcbiAgICAgICAgbGV0IHNldCA9IFtdO1xyXG4gICAgICAgIGxldCBjdXJyZW50VmVyYiA9IHZlcmJJZHNbaV07XHJcbiAgICAgICAgbGV0IGN1cnJlbnRUZW5zZSA9IHJhbmRvbVRlbnNlcyArIDE7XHJcbiAgICAgICAgY3VycmVudENvbmp1Z2F0aW9ucyA9IFsuLi5jdXJyZW50Q29uanVnYXRpb25zLCBjb25qdWdhdGlvbnMuZmlsdGVyKCBjb25qdWdhdGlvbiA9PiBjb25qdWdhdGlvbi50ZW5zZSA9PT0gY3VycmVudFRlbnNlICYmIGNvbmp1Z2F0aW9uLnZlcmIgPT09IGN1cnJlbnRWZXJiKVswXV07XHJcbiAgICAgICAgc2V0ID0gWy4uLnNldCwgY3VycmVudENvbmp1Z2F0aW9uc1swXS55b107XHJcbiAgICAgICAgc2V0ID0gWy4uLnNldCwgY3VycmVudENvbmp1Z2F0aW9uc1swXS50dV07XHJcbiAgICAgICAgc2V0ID0gWy4uLnNldCwgY3VycmVudENvbmp1Z2F0aW9uc1swXS5lbF07XHJcbiAgICAgICAgc2V0ID0gWy4uLnNldCwgY3VycmVudENvbmp1Z2F0aW9uc1swXS5ub3NvdHJvc107XHJcbiAgICAgICAgc2V0ID0gWy4uLnNldCwgY3VycmVudENvbmp1Z2F0aW9uc1swXS52b3NvdHJvc107XHJcbiAgICAgICAgc2V0ID0gWy4uLnNldCwgY3VycmVudENvbmp1Z2F0aW9uc1swXS5lbGxvc107XHJcbiAgICAgICAgc2V0U2xpZGVTZXRzKCBwcmV2ID0+IFsuLi5wcmV2LCBzZXRdKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyggc2xpZGVTZXRzICk7XHJcblxyXG4gICAgY29uc3QgaW5jcmVtZW50UXVlc3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIHF1ZXN0aW9uIDw9IHF1ZXN0aW9uICkge1xyXG4gICAgICAgICAgICBzZXRRdWVzdGlvbiggcXVlc3Rpb24gKyAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBjdXJyZW50VGVuc2UgPSByYW5kb21UZW5zZXNbcXVlc3Rpb25dO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxoMT5WZXJiIFNsaWRlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInNsaWRlclwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+eyBpbmZpbml0aXZlc1txdWVzdGlvbl0gIH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PnsgdGVuc2VzW2N1cnJlbnRUZW5zZV0udGVuc2UgfSB0ZW5zZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInF1ZXN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JyaWNrcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJpY2tzLm1hcCggYnJpY2sgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnsgYnJpY2sgfTwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucyBjb2wtbGctMTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwic3VibWl0QnRuXCIgb25DbGljaz17IGluY3JlbWVudFF1ZXN0aW9uIH0gdmFsdWU9XCJuZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxWZXJicyA9IGF3YWl0IHByaXNtYS52ZXJicy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsVGVuc2VzID0gYXdhaXQgcHJpc21hLnRlbnNlcy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsQ29uanVnYXRpb25zID0gYXdhaXQgcHJpc21hLmNvbmp1Z2F0aW9ucy5maW5kTWFueSgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2ZXJiczogYWxsVmVyYnMsXHJcbiAgICAgICAgICAgIHRlbnNlczogYWxsVGVuc2VzLFxyXG4gICAgICAgICAgICBjb25qdWdhdGlvbnM6IGFsbENvbmp1Z2F0aW9uc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNpdGVoZWFkZXIiLCJGb290ZXIiLCJyYW5kb21OdW1iZXJHZW5lcmF0b3IiLCJTbGlkZXIiLCJ2ZXJicyIsInRlbnNlcyIsImNvbmp1Z2F0aW9ucyIsIm51bVF1ZXN0aW9ucyIsIm51bU9wdGlvbnMiLCJicmlja3MiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiaW5maW5pdGl2ZXMiLCJzZXRJbmZpbml0aXZlcyIsImxlbmd0aCIsInJhbmRvbVRlbnNlcyIsInNldHJhbmRvbVRlbnNlcyIsInNsaWRlU2V0cyIsInNldFNsaWRlU2V0cyIsInJhbmRvbUluZGljZXMiLCJyYW5kb21PcmRlciIsInZlcmJJZHMiLCJzbGlkZVNldCIsInNjcmFtYmxlZFNldCIsImluZGV4IiwiZmlsdGVyIiwidmVyYiIsImlkIiwicHJldiIsImluZmluaXRpdmUiLCJjdXJyZW50Q29uanVnYXRpb25zIiwic2V0cyIsInNldCIsImN1cnJlbnRWZXJiIiwiaSIsImN1cnJlbnRUZW5zZSIsImNvbmp1Z2F0aW9uIiwidGVuc2UiLCJ5byIsInR1IiwiZWwiLCJub3NvdHJvcyIsInZvc290cm9zIiwiZWxsb3MiLCJjb25zb2xlIiwibG9nIiwiaW5jcmVtZW50UXVlc3Rpb24iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiZmllbGRzZXQiLCJoMiIsImg0IiwiZGl2IiwibWFwIiwiYnJpY2siLCJpbnB1dCIsInR5cGUiLCJvbkNsaWNrIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});