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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var numQuestions = 5;\n    var numOptions = 5;\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref[0], setQuestion = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), infinitives = ref1[0], setInfinitives = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length).map(function(element) {\n        return element + 1;\n    })), randomTenses = ref2[0], setRandomTenses = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), slideSets = ref3[0], setSlideSets = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var currentVerb = verbIds[i];\n            var currentTense = randomTenses[i];\n            var currentConjugations = conjugations.filter(function(conjugation) {\n                return conjugation.tense === currentTense && conjugation.verb === currentVerb;\n            }).map(function(param) {\n                var yo = param.yo, tu = param.tu, el = param.el, nosotros = param.nosotros, vosotros = param.vosotros, ellos = param.ellos;\n                return {\n                    yo: yo,\n                    tu: tu,\n                    el: el,\n                    nosotros: nosotros,\n                    vosotros: vosotros,\n                    ellos: ellos\n                };\n            });\n            var currentSlides = Object.values(currentConjugations[0]);\n            var randomSlideOrder = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(currentSlides.length, currentSlides.length);\n            var scrambledSlides = randomSlideOrder.map(function(slide) {\n                return currentSlides[slide];\n            });\n            setSlideSets(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                    scrambledSlides\n                ]);\n            });\n        };\n        var randomIndices = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, verbs.length);\n        var randomOrder = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length);\n        var verbIds = [];\n        var slideSet = [];\n        var scrambledSet = [];\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            var _loop1 = function() {\n                var index = _step.value;\n                verbIds = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(verbIds).concat([\n                    verbs.filter(function(verb) {\n                        return verb.id === index;\n                    })[0].id\n                ]);\n            };\n            for(var _iterator = randomIndices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop1();\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n        try {\n            var _loop2 = function() {\n                var id = _step1.value;\n                setInfinitives(function(prev) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                        verbs.filter(function(verb) {\n                            return verb.id === id;\n                        })[0].infinitive\n                    ]);\n                });\n            };\n            for(var _iterator1 = verbIds[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop2();\n        } catch (err) {\n            _didIteratorError1 = true;\n            _iteratorError1 = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                    _iterator1.return();\n                }\n            } finally{\n                if (_didIteratorError1) {\n                    throw _iteratorError1;\n                }\n            }\n        }\n        var sets = [];\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    var currentTense = tenses.filter(function(tense) {\n        return tense.id === randomTenses[question];\n    })[0].tense;\n    var currentSlideSet = slideSets && slideSets[question];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: infinitives && infinitives[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                children: [\n                                                    currentTense,\n                                                    \" tense\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\",\n                                                children: currentSlideSet && currentSlideSet.map(function(slideSet) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: slideSet\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"GAL51eV2qDrfCSzEFwJ7XVhN3vg=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92ZXJicy9zbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE0QztBQUVZO0FBQ1I7QUFDOEI7QUFJOUUsU0FBU0ssTUFBTSxDQUFFLEtBQStCLEVBQUc7UUFBaENDLEtBQUssR0FBUCxLQUErQixDQUE3QkEsS0FBSyxFQUFFQyxNQUFNLEdBQWYsS0FBK0IsQ0FBdEJBLE1BQU0sRUFBRUMsWUFBWSxHQUE3QixLQUErQixDQUFkQSxZQUFZOzs7SUFDMUMsSUFBTUMsWUFBWSxHQUFHLENBQUM7SUFDdEIsSUFBTUMsVUFBVSxHQUFHLENBQUM7SUFDcEIsSUFBTUMsTUFBTSxHQUFHO1FBQUMsSUFBSTtRQUFFLElBQUk7UUFBRSxlQUFZO1FBQUUsVUFBVTtRQUFFLFVBQVU7UUFBRSxpQkFBaUI7S0FBQztJQUNwRixJQUFnQ1gsR0FBYSxHQUFiQSwrQ0FBUSxDQUFFLENBQUMsQ0FBRSxFQUF0Q1ksUUFBUSxHQUFpQlosR0FBYSxHQUE5QixFQUFFYSxXQUFXLEdBQUliLEdBQWEsR0FBakI7SUFDNUIsSUFBc0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBRSxFQUFFLENBQUUsRUFBN0NjLFdBQVcsR0FBb0JkLElBQWMsR0FBbEMsRUFBRWUsY0FBYyxHQUFJZixJQUFjLEdBQWxCO0lBQ2xDLElBQXdDQSxJQUFnRyxHQUFoR0EsK0NBQVEsQ0FBRUksZ0ZBQXFCLENBQUVLLFlBQVksRUFBRUYsTUFBTSxDQUFDUyxNQUFNLENBQUUsQ0FBQ0MsR0FBRyxDQUFFLFNBQUNDLE9BQU87ZUFBS0EsT0FBTyxHQUFHLENBQUM7S0FBQSxDQUFFLENBQUUsRUFBaklDLFlBQVksR0FBcUJuQixJQUFnRyxHQUFySCxFQUFFb0IsZUFBZSxHQUFJcEIsSUFBZ0csR0FBcEc7SUFDcEMsSUFBa0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBRSxFQUFFLENBQUUsRUFBekNxQixTQUFTLEdBQWtCckIsSUFBYyxHQUFoQyxFQUFFc0IsWUFBWSxHQUFJdEIsSUFBYyxHQUFsQjtJQUU5QkMsZ0RBQVMsQ0FBRSxXQUFNO2dDQWEwQjtZQUNuQyxJQUFJc0IsV0FBVyxHQUFHQyxPQUFPLENBQUNDLENBQUMsQ0FBQztZQUM1QixJQUFJQyxZQUFZLEdBQUdQLFlBQVksQ0FBQ00sQ0FBQyxDQUFDO1lBQ2xDLElBQUlFLG1CQUFtQixHQUFHbkIsWUFBWSxDQUNqQ29CLE1BQU0sQ0FBRSxTQUFFQyxXQUFXO3VCQUFNQSxXQUFXLENBQUNDLEtBQUssS0FBS0osWUFBWSxJQUFJRyxXQUFXLENBQUNFLElBQUksS0FBS1IsV0FBVzthQUFBLENBQUMsQ0FDbEdOLEdBQUcsQ0FBRTtvQkFBR2UsRUFBRSxTQUFGQSxFQUFFLEVBQUVDLEVBQUUsU0FBRkEsRUFBRSxFQUFFQyxFQUFFLFNBQUZBLEVBQUUsRUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxLQUFLLFNBQUxBLEtBQUs7dUJBQVE7b0JBQUVMLEVBQUUsRUFBRkEsRUFBRTtvQkFBRUMsRUFBRSxFQUFGQSxFQUFFO29CQUFFQyxFQUFFLEVBQUZBLEVBQUU7b0JBQUVDLFFBQVEsRUFBUkEsUUFBUTtvQkFBRUMsUUFBUSxFQUFSQSxRQUFRO29CQUFFQyxLQUFLLEVBQUxBLEtBQUs7aUJBQUM7YUFBQyxDQUFFO1lBQ3JHLElBQUlDLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUNiLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQU1jLGdCQUFnQixHQUFHckMsZ0ZBQXFCLENBQUVrQyxhQUFhLENBQUN0QixNQUFNLEVBQUVzQixhQUFhLENBQUN0QixNQUFNLENBQUU7WUFDNUYsSUFBSTBCLGVBQWUsR0FBR0QsZ0JBQWdCLENBQUN4QixHQUFHLENBQUUwQixTQUFBQSxLQUFLO3VCQUFJTCxhQUFhLENBQUNLLEtBQUssQ0FBQzthQUFBLENBQUU7WUFDM0VyQixZQUFZLENBQUVzQixTQUFBQSxJQUFJO3VCQUFJLHFGQUFJQSxJQUFJLENBQUpBLFFBQUo7b0JBQVVGLGVBQWU7aUJBQUM7YUFBQSxDQUFFLENBQUM7U0FDdEQ7UUF0QkQsSUFBTUcsYUFBYSxHQUFHekMsZ0ZBQXFCLENBQUVLLFlBQVksRUFBRUgsS0FBSyxDQUFDVSxNQUFNLENBQUU7UUFDekUsSUFBTThCLFdBQVcsR0FBRzFDLGdGQUFxQixDQUFFSyxZQUFZLEVBQUVGLE1BQU0sQ0FBQ1MsTUFBTSxDQUFFO1FBQ3hFLElBQUlRLE9BQU8sR0FBRyxFQUFFO1FBQ2hCLElBQUl1QixRQUFRLEdBQUcsRUFBRTtRQUNqQixJQUFJQyxZQUFZLEdBQUcsRUFBRTtZQUNoQix5QkFBVyxTQUFYLGlCQUFXLFVBQVgsY0FBVzs7b0NBQW9CO2dCQUEvQixJQUFNQyxLQUFLLEdBQVgsS0FBVztnQkFDWnpCLE9BQU8sR0FBRyxxRkFBSUEsT0FBTyxDQUFQQSxRQUFKO29CQUFhbEIsS0FBSyxDQUFDc0IsTUFBTSxDQUFFRyxTQUFBQSxJQUFJOytCQUFJQSxJQUFJLENBQUNtQixFQUFFLEtBQUtELEtBQUs7cUJBQUEsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxFQUFFO2lCQUFDLEVBQUM7YUFDM0U7WUFGRCxRQUFLLFNBQVcsR0FBSUwsYUFBYSxxQkFBNUIsS0FBVyxJQUFYLHlCQUFXLElBQVgsS0FBVyxHQUFYLFNBQVcsZ0JBQVgseUJBQVc7O1lBQVgsaUJBQVc7WUFBWCxjQUFXOzs7cUJBQVgseUJBQVcsSUFBWCxTQUFXO29CQUFYLFNBQVc7OztvQkFBWCxpQkFBVzswQkFBWCxjQUFXOzs7O1lBR1gsMEJBQVEsU0FBUixrQkFBUSxVQUFSLGVBQVE7O29DQUFjO2dCQUF0QixJQUFNSyxFQUFFLEdBQVIsTUFBUTtnQkFDVG5DLGNBQWMsQ0FBRTZCLFNBQUFBLElBQUk7MkJBQUkscUZBQUlBLElBQUksQ0FBSkEsUUFBSjt3QkFBVXRDLEtBQUssQ0FBQ3NCLE1BQU0sQ0FBRUcsU0FBQUEsSUFBSTttQ0FBSUEsSUFBSSxDQUFDbUIsRUFBRSxLQUFLQSxFQUFFO3lCQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsVUFBVTtxQkFBQztpQkFBQSxDQUFDLENBQUM7YUFDM0Y7WUFGRCxRQUFLLFVBQVEsR0FBSTNCLE9BQU8scUJBQW5CLE1BQVEsSUFBUiwwQkFBUSxJQUFSLE1BQVEsR0FBUixVQUFRLGdCQUFSLDBCQUFROztZQUFSLGtCQUFRO1lBQVIsZUFBUTs7O3FCQUFSLDBCQUFRLElBQVIsVUFBUTtvQkFBUixVQUFROzs7b0JBQVIsa0JBQVE7MEJBQVIsZUFBUTs7OztRQUdiLElBQUk0QixJQUFJLEdBQUcsRUFBRTtRQUNiLElBQUssSUFBSTNCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2hCLFlBQVksRUFBRWdCLENBQUMsRUFBRTtLQVd4QyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBTTRCLGlCQUFpQixHQUFHLFdBQU07UUFDNUIsSUFBSXpDLFFBQVEsSUFBSUEsUUFBUSxFQUFHO1lBQ3ZCQyxXQUFXLENBQUVELFFBQVEsR0FBRyxDQUFDLENBQUUsQ0FBQztTQUMvQjtLQUNKO0lBRUQsSUFBTWMsWUFBWSxHQUFHbkIsTUFBTSxDQUFDcUIsTUFBTSxDQUFFRSxTQUFBQSxLQUFLO2VBQUlBLEtBQUssQ0FBQ29CLEVBQUUsS0FBSy9CLFlBQVksQ0FBQ1AsUUFBUSxDQUFDO0tBQUEsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDa0IsS0FBSztJQUMzRixJQUFNd0IsZUFBZSxHQUFHakMsU0FBUyxJQUFJQSxTQUFTLENBQUNULFFBQVEsQ0FBQztJQUV4RCxxQkFDSTs7MEJBQ0ksOERBQUMyQyxTQUFPO2dCQUFDQyxTQUFTLEVBQUMsZUFBZTs7a0NBQzlCLDhEQUFDQyxJQUFFO2tDQUFDLGFBQVc7Ozs7OzRCQUFLO2tDQUNwQiw4REFBQ0MsTUFBSTt3QkFBQ1IsRUFBRSxFQUFDLFFBQVE7d0JBQUNNLFNBQVMsRUFBQyw2QkFBNkI7OzBDQUNyRCw4REFBQ0csVUFBUTtnQ0FBQ0gsU0FBUyxFQUFDLFdBQVc7O2tEQUMzQiw4REFBQ0QsU0FBTzs7MERBQ0osOERBQUNLLElBQUU7MERBQUc5QyxXQUFXLElBQUlBLFdBQVcsQ0FBQ0YsUUFBUSxDQUFDOzs7OztvREFBUTswREFDbEQsOERBQUNpRCxJQUFFOztvREFBR25DLFlBQVk7b0RBQUUsUUFBTTs7Ozs7O29EQUFLOzs7Ozs7NENBQ3pCO2tEQUNWLDhEQUFDb0MsS0FBRzt3Q0FBQ1osRUFBRSxFQUFDLFdBQVc7OzBEQUNmLDhEQUFDWSxLQUFHO2dEQUFDTixTQUFTLEVBQUMsUUFBUTswREFFZjdDLE1BQU0sQ0FBQ00sR0FBRyxDQUFFOEMsU0FBQUEsS0FBSzt5RUFDYiw4REFBQ0QsS0FBRztrRUFBR0MsS0FBSzs7Ozs7NkRBQVE7aURBQUEsQ0FDdkI7Ozs7O29EQUVIOzBEQUNOLDhEQUFDRCxLQUFHO2dEQUFDTixTQUFTLEVBQUMsUUFBUTswREFFZkYsZUFBZSxJQUFJQSxlQUFlLENBQUNyQyxHQUFHLENBQUU4QixTQUFBQSxRQUFRO3lFQUM1Qyw4REFBQ2UsS0FBRztrRUFBR2YsUUFBUTs7Ozs7NkRBQVE7aURBQUEsQ0FDMUI7Ozs7O29EQUVIOzs7Ozs7NENBQ0o7Ozs7OztvQ0FDQzswQ0FDWCw4REFBQ2UsS0FBRztnQ0FBQ04sU0FBUyxFQUFDLG1CQUFtQjswQ0FDOUIsNEVBQUNRLE9BQUs7b0NBQUNDLElBQUksRUFBQyxRQUFRO29DQUFDZixFQUFFLEVBQUMsV0FBVztvQ0FBQ2dCLE9BQU8sRUFBR2IsaUJBQWlCO29DQUFHYyxLQUFLLEVBQUMsTUFBTTs7Ozs7d0NBQUc7Ozs7O29DQUMvRTs7Ozs7OzRCQUNIOzs7Ozs7b0JBQ0Q7MEJBQ1YsOERBQUNoRSxrRUFBTTs7OztvQkFBRzs7b0JBQ1gsQ0FDTjtDQUNKO0dBL0VRRSxNQUFNO0FBQU5BLEtBQUFBLE1BQU07O0FBOEZmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVyYnMvc2xpZGVyLmpzP2RlZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgU2l0ZWhlYWRlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvc2l0ZUhlYWRlci50c3gnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9mb290ZXIudHN4JztcclxuaW1wb3J0IHJhbmRvbU51bWJlckdlbmVyYXRvciBmcm9tICcuLi8uLi9oZWxwZXIvdXNlUmFuZG9tTnVtYmVyR2VuZXJhdG9yLnRzeCc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5mdW5jdGlvbiBTbGlkZXIoIHsgdmVyYnMsIHRlbnNlcywgY29uanVnYXRpb25zIH0gKSB7XHJcbiAgICBjb25zdCBudW1RdWVzdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgbnVtT3B0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBicmlja3MgPSBbJ3lvJywgJ3R1JywgJ8OpbC9lbGxhL3VkJywgJ25vc290cm9zJywgJ3Zvc290cm9zJywgJ2VsbG9zL2VsbGFzL3VkcyddO1xyXG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZSggMCApO1xyXG4gICAgY29uc3QgW2luZmluaXRpdmVzLCBzZXRJbmZpbml0aXZlc10gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFtyYW5kb21UZW5zZXMsIHNldFJhbmRvbVRlbnNlc10gPSB1c2VTdGF0ZSggcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIHRlbnNlcy5sZW5ndGggKS5tYXAoIChlbGVtZW50KSA9PiBlbGVtZW50ICsgMSApICk7XHJcbiAgICBjb25zdCBbc2xpZGVTZXRzLCBzZXRTbGlkZVNldHNdID0gdXNlU3RhdGUoIFtdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kaWNlcyA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCB2ZXJicy5sZW5ndGggKTtcclxuICAgICAgICBjb25zdCByYW5kb21PcmRlciA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCB0ZW5zZXMubGVuZ3RoICk7XHJcbiAgICAgICAgbGV0IHZlcmJJZHMgPSBbXTtcclxuICAgICAgICBsZXQgc2xpZGVTZXQgPSBbXTtcclxuICAgICAgICBsZXQgc2NyYW1ibGVkU2V0ID0gW107XHJcbiAgICAgICAgZm9yKCBjb25zdCBpbmRleCBvZiByYW5kb21JbmRpY2VzICkge1xyXG4gICAgICAgICAgICB2ZXJiSWRzID0gWy4uLnZlcmJJZHMsIHZlcmJzLmZpbHRlciggdmVyYiA9PiB2ZXJiLmlkID09PSBpbmRleCApWzBdLmlkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKCBjb25zdCBpZCBvZiB2ZXJiSWRzICkge1xyXG4gICAgICAgICAgICBzZXRJbmZpbml0aXZlcyggcHJldiA9PiBbLi4ucHJldiwgdmVyYnMuZmlsdGVyKCB2ZXJiID0+IHZlcmIuaWQgPT09IGlkKVswXS5pbmZpbml0aXZlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZXRzID0gW107XHJcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBudW1RdWVzdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFZlcmIgPSB2ZXJiSWRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFRlbnNlID0gcmFuZG9tVGVuc2VzW2ldO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudENvbmp1Z2F0aW9ucyA9IGNvbmp1Z2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlciggKCBjb25qdWdhdGlvbiApID0+IGNvbmp1Z2F0aW9uLnRlbnNlID09PSBjdXJyZW50VGVuc2UgJiYgY29uanVnYXRpb24udmVyYiA9PT0gY3VycmVudFZlcmIpXHJcbiAgICAgICAgICAgICAgICAubWFwKCAoeyB5bywgdHUsIGVsLCBub3NvdHJvcywgdm9zb3Ryb3MsIGVsbG9zIH0pID0+ICh7IHlvLCB0dSwgZWwsIG5vc290cm9zLCB2b3NvdHJvcywgZWxsb3N9KSApO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFNsaWRlcyA9IE9iamVjdC52YWx1ZXMoY3VycmVudENvbmp1Z2F0aW9uc1swXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVNsaWRlT3JkZXIgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIGN1cnJlbnRTbGlkZXMubGVuZ3RoLCBjdXJyZW50U2xpZGVzLmxlbmd0aCApO1xyXG4gICAgICAgICAgICBsZXQgc2NyYW1ibGVkU2xpZGVzID0gcmFuZG9tU2xpZGVPcmRlci5tYXAoIHNsaWRlID0+IGN1cnJlbnRTbGlkZXNbc2xpZGVdICk7XHJcbiAgICAgICAgICAgIHNldFNsaWRlU2V0cyggcHJldiA9PiBbLi4ucHJldiwgc2NyYW1ibGVkU2xpZGVzXSApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRRdWVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiggcXVlc3Rpb24gPD0gcXVlc3Rpb24gKSB7XHJcbiAgICAgICAgICAgIHNldFF1ZXN0aW9uKCBxdWVzdGlvbiArIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGN1cnJlbnRUZW5zZSA9IHRlbnNlcy5maWx0ZXIoIHRlbnNlID0+IHRlbnNlLmlkID09PSByYW5kb21UZW5zZXNbcXVlc3Rpb25dIClbMF0udGVuc2U7XHJcbiAgICBjb25zdCBjdXJyZW50U2xpZGVTZXQgPSBzbGlkZVNldHMgJiYgc2xpZGVTZXRzW3F1ZXN0aW9uXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8aDE+VmVyYiBTbGlkZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJzbGlkZXJcIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnsgaW5maW5pdGl2ZXMgJiYgaW5maW5pdGl2ZXNbcXVlc3Rpb25dICB9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57IGN1cnJlbnRUZW5zZSB9IHRlbnNlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicXVlc3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnJpY2tzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmlja3MubWFwKCBicmljayA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+eyBicmljayB9PC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZVNldCAmJiBjdXJyZW50U2xpZGVTZXQubWFwKCBzbGlkZVNldCA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+eyBzbGlkZVNldCB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucyBjb2wtbGctMTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwic3VibWl0QnRuXCIgb25DbGljaz17IGluY3JlbWVudFF1ZXN0aW9uIH0gdmFsdWU9XCJuZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxWZXJicyA9IGF3YWl0IHByaXNtYS52ZXJicy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsVGVuc2VzID0gYXdhaXQgcHJpc21hLnRlbnNlcy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsQ29uanVnYXRpb25zID0gYXdhaXQgcHJpc21hLmNvbmp1Z2F0aW9ucy5maW5kTWFueSgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2ZXJiczogYWxsVmVyYnMsXHJcbiAgICAgICAgICAgIHRlbnNlczogYWxsVGVuc2VzLFxyXG4gICAgICAgICAgICBjb25qdWdhdGlvbnM6IGFsbENvbmp1Z2F0aW9uc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNpdGVoZWFkZXIiLCJGb290ZXIiLCJyYW5kb21OdW1iZXJHZW5lcmF0b3IiLCJTbGlkZXIiLCJ2ZXJicyIsInRlbnNlcyIsImNvbmp1Z2F0aW9ucyIsIm51bVF1ZXN0aW9ucyIsIm51bU9wdGlvbnMiLCJicmlja3MiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiaW5maW5pdGl2ZXMiLCJzZXRJbmZpbml0aXZlcyIsImxlbmd0aCIsIm1hcCIsImVsZW1lbnQiLCJyYW5kb21UZW5zZXMiLCJzZXRSYW5kb21UZW5zZXMiLCJzbGlkZVNldHMiLCJzZXRTbGlkZVNldHMiLCJjdXJyZW50VmVyYiIsInZlcmJJZHMiLCJpIiwiY3VycmVudFRlbnNlIiwiY3VycmVudENvbmp1Z2F0aW9ucyIsImZpbHRlciIsImNvbmp1Z2F0aW9uIiwidGVuc2UiLCJ2ZXJiIiwieW8iLCJ0dSIsImVsIiwibm9zb3Ryb3MiLCJ2b3NvdHJvcyIsImVsbG9zIiwiY3VycmVudFNsaWRlcyIsIk9iamVjdCIsInZhbHVlcyIsInJhbmRvbVNsaWRlT3JkZXIiLCJzY3JhbWJsZWRTbGlkZXMiLCJzbGlkZSIsInByZXYiLCJyYW5kb21JbmRpY2VzIiwicmFuZG9tT3JkZXIiLCJzbGlkZVNldCIsInNjcmFtYmxlZFNldCIsImluZGV4IiwiaWQiLCJpbmZpbml0aXZlIiwic2V0cyIsImluY3JlbWVudFF1ZXN0aW9uIiwiY3VycmVudFNsaWRlU2V0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImZpZWxkc2V0IiwiaDIiLCJoNCIsImRpdiIsImJyaWNrIiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});