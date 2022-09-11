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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var numQuestions = 5;\n    var numOptions = 5;\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref[0], setQuestion = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), infinitives = ref1[0], setInfinitives = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length)), randomTenses = ref2[0], setrandomTenses = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), slideSets = ref3[0], setSlideSets = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var currentVerb = verbIds[i];\n            var currentTense = randomTenses[i] + 1;\n            var currentConjugations = conjugations.filter(function(conjugation) {\n                return conjugation.tense === currentTense && conjugation.verb === currentVerb;\n            }).map(function(param) {\n                var yo = param.yo, tu = param.tu, el = param.el, nosotros = param.nosotros, vosotros = param.vosotros, ellos = param.ellos;\n                return {\n                    yo: yo,\n                    tu: tu,\n                    el: el,\n                    nosotros: nosotros,\n                    vosotros: vosotros,\n                    ellos: ellos\n                };\n            });\n            var currentSlides = Object.values(currentConjugations[0]);\n            var randomSlideOrder = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(currentSlides.length, currentSlides.length);\n            var scrambledSlides = randomSlideOrder.map(function(slide) {\n                return currentSlides[slide];\n            });\n            setSlideSets(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                    scrambledSlides\n                ]);\n            });\n        };\n        var randomIndices = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, verbs.length);\n        var randomOrder = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length);\n        var verbIds = [];\n        var slideSet = [];\n        var scrambledSet = [];\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            var _loop1 = function() {\n                var index = _step.value;\n                verbIds = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(verbIds).concat([\n                    verbs.filter(function(verb) {\n                        return verb.id === index;\n                    })[0].id\n                ]);\n            };\n            for(var _iterator = randomIndices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop1();\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n        try {\n            var _loop2 = function() {\n                var id = _step1.value;\n                setInfinitives(function(prev) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                        verbs.filter(function(verb) {\n                            return verb.id === id;\n                        })[0].infinitive\n                    ]);\n                });\n            };\n            for(var _iterator1 = verbIds[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop2();\n        } catch (err) {\n            _didIteratorError1 = true;\n            _iteratorError1 = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                    _iterator1.return();\n                }\n            } finally{\n                if (_didIteratorError1) {\n                    throw _iteratorError1;\n                }\n            }\n        }\n        var sets = [];\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    console.log({\n        bricks: bricks,\n        slideSets: slideSets\n    });\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    var currentTense = randomTenses[question];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: infinitives[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                children: [\n                                                    tenses[currentTense].tense,\n                                                    \" tense\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\",\n                                                children: slideSets.map(function(slideSet) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: slideSet[0]\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"XneToHyFZuikZvS/G3h0FnVAFZ0=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0MsS0FBRzt3Q0FBQ2IsRUFBRSxFQUFDLFdBQVc7OzBEQUNmLDhEQUFDYSxLQUFHO2dEQUFDTixTQUFTLEVBQUMsUUFBUTswREFFZjdDLE1BQU0sQ0FBQ21CLEdBQUcsQ0FBRWlDLFNBQUFBLEtBQUs7eUVBQ2IsOERBQUNELEtBQUc7a0VBQUdDLEtBQUs7Ozs7OzZEQUFRO2lEQUFBLENBQ3ZCOzs7OztvREFFSDswREFDTiw4REFBQ0QsS0FBRztnREFBQ04sU0FBUyxFQUFDLFFBQVE7MERBRWZyQyxTQUFTLENBQUNXLEdBQUcsQ0FBRWdCLFNBQUFBLFFBQVE7eUVBQ25CLDhEQUFDZ0IsS0FBRztrRUFBR2hCLFFBQVEsQ0FBQyxDQUFDLENBQUM7Ozs7OzZEQUFRO2lEQUFBLENBQzdCOzs7OztvREFFSDs7Ozs7OzRDQUNKOzs7Ozs7b0NBQ0M7MENBQ1gsOERBQUNnQixLQUFHO2dDQUFDTixTQUFTLEVBQUMsbUJBQW1COzBDQUM5Qiw0RUFBQ1EsT0FBSztvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7b0NBQUNoQixFQUFFLEVBQUMsV0FBVztvQ0FBQ2lCLE9BQU8sRUFBR1osaUJBQWlCO29DQUFHYSxLQUFLLEVBQUMsTUFBTTs7Ozs7d0NBQUc7Ozs7O29DQUMvRTs7Ozs7OzRCQUNIOzs7Ozs7b0JBQ0Q7MEJBQ1YsOERBQUNoRSxrRUFBTTs7OztvQkFBRzs7b0JBQ1gsQ0FDTjtDQUNKO0dBaEZRRSxNQUFNO0FBQU5BLEtBQUFBLE1BQU07O0FBK0ZmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVyYnMvc2xpZGVyLmpzP2RlZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgU2l0ZWhlYWRlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvc2l0ZUhlYWRlci50c3gnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9mb290ZXIudHN4JztcclxuaW1wb3J0IHJhbmRvbU51bWJlckdlbmVyYXRvciBmcm9tICcuLi8uLi9oZWxwZXIvdXNlUmFuZG9tTnVtYmVyR2VuZXJhdG9yLnRzeCc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5mdW5jdGlvbiBTbGlkZXIoIHsgdmVyYnMsIHRlbnNlcywgY29uanVnYXRpb25zIH0gKSB7XHJcbiAgICBjb25zdCBudW1RdWVzdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgbnVtT3B0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBicmlja3MgPSBbJ3lvJywgJ3R1JywgJ8OpbC9lbGxhL3VkJywgJ25vc290cm9zJywgJ3Zvc290cm9zJywgJ2VsbG9zL2VsbGFzL3VkcyddO1xyXG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZSggMCApO1xyXG4gICAgY29uc3QgW2luZmluaXRpdmVzLCBzZXRJbmZpbml0aXZlc10gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFtyYW5kb21UZW5zZXMsIHNldHJhbmRvbVRlbnNlc10gPSB1c2VTdGF0ZSggcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIHRlbnNlcy5sZW5ndGggKSApO1xyXG4gICAgY29uc3QgW3NsaWRlU2V0cywgc2V0U2xpZGVTZXRzXSA9IHVzZVN0YXRlKCBbXSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGljZXMgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgdmVyYnMubGVuZ3RoICk7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tT3JkZXIgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgdGVuc2VzLmxlbmd0aCApO1xyXG4gICAgICAgIGxldCB2ZXJiSWRzID0gW107XHJcbiAgICAgICAgbGV0IHNsaWRlU2V0ID0gW107XHJcbiAgICAgICAgbGV0IHNjcmFtYmxlZFNldCA9IFtdO1xyXG4gICAgICAgIGZvciggY29uc3QgaW5kZXggb2YgcmFuZG9tSW5kaWNlcyApIHtcclxuICAgICAgICAgICAgdmVyYklkcyA9IFsuLi52ZXJiSWRzLCB2ZXJicy5maWx0ZXIoIHZlcmIgPT4gdmVyYi5pZCA9PT0gaW5kZXggKVswXS5pZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciggY29uc3QgaWQgb2YgdmVyYklkcyApIHtcclxuICAgICAgICAgICAgc2V0SW5maW5pdGl2ZXMoIHByZXYgPT4gWy4uLnByZXYsIHZlcmJzLmZpbHRlciggdmVyYiA9PiB2ZXJiLmlkID09PSBpZClbMF0uaW5maW5pdGl2ZV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2V0cyA9IFtdO1xyXG4gICAgICAgIGZvciggbGV0IGkgPSAwOyBpIDwgbnVtUXVlc3Rpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRWZXJiID0gdmVyYklkc1tpXTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUZW5zZSA9IHJhbmRvbVRlbnNlc1tpXSArIDE7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q29uanVnYXRpb25zID0gY29uanVnYXRpb25zXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCAoIGNvbmp1Z2F0aW9uICkgPT4gY29uanVnYXRpb24udGVuc2UgPT09IGN1cnJlbnRUZW5zZSAmJiBjb25qdWdhdGlvbi52ZXJiID09PSBjdXJyZW50VmVyYilcclxuICAgICAgICAgICAgICAgIC5tYXAoICh7IHlvLCB0dSwgZWwsIG5vc290cm9zLCB2b3NvdHJvcywgZWxsb3MgfSkgPT4gKHsgeW8sIHR1LCBlbCwgbm9zb3Ryb3MsIHZvc290cm9zLCBlbGxvc30pICk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50U2xpZGVzID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50Q29uanVnYXRpb25zWzBdKTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tU2xpZGVPcmRlciA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggY3VycmVudFNsaWRlcy5sZW5ndGgsIGN1cnJlbnRTbGlkZXMubGVuZ3RoICk7XHJcbiAgICAgICAgICAgIGxldCBzY3JhbWJsZWRTbGlkZXMgPSByYW5kb21TbGlkZU9yZGVyLm1hcCggc2xpZGUgPT4gY3VycmVudFNsaWRlc1tzbGlkZV0gKTtcclxuICAgICAgICAgICAgc2V0U2xpZGVTZXRzKCBwcmV2ID0+IFsuLi5wcmV2LCBzY3JhbWJsZWRTbGlkZXNdICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCB7IGJyaWNrcywgc2xpZGVTZXRzIH0gKTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRRdWVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiggcXVlc3Rpb24gPD0gcXVlc3Rpb24gKSB7XHJcbiAgICAgICAgICAgIHNldFF1ZXN0aW9uKCBxdWVzdGlvbiArIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGN1cnJlbnRUZW5zZSA9IHJhbmRvbVRlbnNlc1txdWVzdGlvbl07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGgxPlZlcmIgU2xpZGVyPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwic2xpZGVyXCIgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS04IGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57IGluZmluaXRpdmVzW3F1ZXN0aW9uXSAgfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+eyB0ZW5zZXNbY3VycmVudFRlbnNlXS50ZW5zZSB9IHRlbnNlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicXVlc3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnJpY2tzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmlja3MubWFwKCBicmljayA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+eyBicmljayB9PC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlU2V0cy5tYXAoIHNsaWRlU2V0ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57IHNsaWRlU2V0WzBdIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zIGNvbC1sZy0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzdWJtaXRCdG5cIiBvbkNsaWNrPXsgaW5jcmVtZW50UXVlc3Rpb24gfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbFZlcmJzID0gYXdhaXQgcHJpc21hLnZlcmJzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxUZW5zZXMgPSBhd2FpdCBwcmlzbWEudGVuc2VzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxDb25qdWdhdGlvbnMgPSBhd2FpdCBwcmlzbWEuY29uanVnYXRpb25zLmZpbmRNYW55KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHZlcmJzOiBhbGxWZXJicyxcclxuICAgICAgICAgICAgdGVuc2VzOiBhbGxUZW5zZXMsXHJcbiAgICAgICAgICAgIGNvbmp1Z2F0aW9uczogYWxsQ29uanVnYXRpb25zXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2l0ZWhlYWRlciIsIkZvb3RlciIsInJhbmRvbU51bWJlckdlbmVyYXRvciIsIlNsaWRlciIsInZlcmJzIiwidGVuc2VzIiwiY29uanVnYXRpb25zIiwibnVtUXVlc3Rpb25zIiwibnVtT3B0aW9ucyIsImJyaWNrcyIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJpbmZpbml0aXZlcyIsInNldEluZmluaXRpdmVzIiwibGVuZ3RoIiwicmFuZG9tVGVuc2VzIiwic2V0cmFuZG9tVGVuc2VzIiwic2xpZGVTZXRzIiwic2V0U2xpZGVTZXRzIiwiY3VycmVudFZlcmIiLCJ2ZXJiSWRzIiwiaSIsImN1cnJlbnRUZW5zZSIsImN1cnJlbnRDb25qdWdhdGlvbnMiLCJmaWx0ZXIiLCJjb25qdWdhdGlvbiIsInRlbnNlIiwidmVyYiIsIm1hcCIsInlvIiwidHUiLCJlbCIsIm5vc290cm9zIiwidm9zb3Ryb3MiLCJlbGxvcyIsImN1cnJlbnRTbGlkZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyYW5kb21TbGlkZU9yZGVyIiwic2NyYW1ibGVkU2xpZGVzIiwic2xpZGUiLCJwcmV2IiwicmFuZG9tSW5kaWNlcyIsInJhbmRvbU9yZGVyIiwic2xpZGVTZXQiLCJzY3JhbWJsZWRTZXQiLCJpbmRleCIsImlkIiwiaW5maW5pdGl2ZSIsInNldHMiLCJjb25zb2xlIiwibG9nIiwiaW5jcmVtZW50UXVlc3Rpb24iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiZmllbGRzZXQiLCJoMiIsImg0IiwiZGl2IiwiYnJpY2siLCJpbnB1dCIsInR5cGUiLCJvbkNsaWNrIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});