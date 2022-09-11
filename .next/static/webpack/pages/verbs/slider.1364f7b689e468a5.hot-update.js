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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var numQuestions = 5;\n    var numOptions = 5;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), currentVerb = ref[0], setCurrentVerb = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length)), currentTense = ref1[0], setCurrentTense = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref2[0], setQuestion = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), conjugationSet = ref3[0], setConjugationSet = ref3[1];\n    var infinitives = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, verbs.length);\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var scrambledConjugations = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(bricks.length, bricks.length);\n            var currentVerbId = infinitives[i];\n            setCurrentTense(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                    currentTense[i]\n                ]);\n            });\n            var currentInfinitive = verbs.filter(function(verb) {\n                return verb.id === currentVerbId;\n            })[0].infinitive;\n            setCurrentVerb(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                    currentInfinitive\n                ]);\n            });\n            var questionConjugations = conjugations.filter(function(conjugation) {\n                return conjugation.tense === currentTense[i] && conjugation.verb === currentVerbId;\n            });\n            var currentConjugations = questionConjugations[i];\n            var currentConjugationSet = [];\n            var slideConjugations = [];\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.yo\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.tu\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.el\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.nosotros\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.vosotros\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.ellos\n            ]);\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = scrambledConjugations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var scrambledConjugation = _step.value;\n                    var _$currentConjugation = slideConjugations[scrambledConjugation];\n                    currentConjugationSet = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currentConjugationSet).concat([\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: _$currentConjugation\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                            lineNumber: 39,\n                            columnNumber: 68\n                        }, _this)\n                    ]);\n                    setConjugationSet(function(prev) {\n                        return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                            currentConjugationSet\n                        ]);\n                    });\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n        };\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    console.log({\n        currentVerb: currentVerb,\n        currentTense: currentTense,\n        currentConjugation: currentConjugation\n    });\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: currentVerb[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: [\n                                                    currentTense[question],\n                                                    \" tense\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\",\n                                                children: conjugationSet[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"cgrpHepZ17qDtcQmXNAgOVVA/mE=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92ZXJicy9zbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE0QztBQUVZO0FBQ1I7QUFDOEI7QUFJOUUsU0FBU0ssTUFBTSxDQUFFLEtBQStCLEVBQUc7UUFBaENDLEtBQUssR0FBUCxLQUErQixDQUE3QkEsS0FBSyxFQUFFQyxNQUFNLEdBQWYsS0FBK0IsQ0FBdEJBLE1BQU0sRUFBRUMsWUFBWSxHQUE3QixLQUErQixDQUFkQSxZQUFZOzs7SUFDMUMsSUFBTUMsWUFBWSxHQUFHLENBQUM7SUFDdEIsSUFBTUMsVUFBVSxHQUFHLENBQUM7SUFDcEIsSUFBc0NWLEdBQWMsR0FBZEEsK0NBQVEsQ0FBRSxFQUFFLENBQUUsRUFBN0NXLFdBQVcsR0FBb0JYLEdBQWMsR0FBbEMsRUFBRVksY0FBYyxHQUFJWixHQUFjLEdBQWxCO0lBQ2xDLElBQXdDQSxJQUFnRSxHQUFoRUEsK0NBQVEsQ0FBRUksZ0ZBQXFCLENBQUVLLFlBQVksRUFBRUYsTUFBTSxDQUFDTSxNQUFNLENBQUUsQ0FBRSxFQUFqR0MsWUFBWSxHQUFxQmQsSUFBZ0UsR0FBckYsRUFBRWUsZUFBZSxHQUFJZixJQUFnRSxHQUFwRTtJQUNwQyxJQUFnQ0EsSUFBYSxHQUFiQSwrQ0FBUSxDQUFFLENBQUMsQ0FBRSxFQUF0Q2dCLFFBQVEsR0FBaUJoQixJQUFhLEdBQTlCLEVBQUVpQixXQUFXLEdBQUlqQixJQUFhLEdBQWpCO0lBQzVCLElBQTRDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUUsRUFBRSxDQUFFLEVBQW5Ea0IsY0FBYyxHQUF1QmxCLElBQWMsR0FBckMsRUFBRW1CLGlCQUFpQixHQUFJbkIsSUFBYyxHQUFsQjtJQUN4QyxJQUFNb0IsV0FBVyxHQUFHaEIsZ0ZBQXFCLENBQUVLLFlBQVksRUFBRUgsS0FBSyxDQUFDTyxNQUFNLENBQUU7SUFFdkUsSUFBTVEsTUFBTSxHQUFHO1FBQUMsSUFBSTtRQUFFLElBQUk7UUFBRSxlQUFZO1FBQUUsVUFBVTtRQUFFLFVBQVU7UUFBRSxpQkFBaUI7S0FBQztJQUVwRnBCLGdEQUFTLENBQUUsV0FBTTtnQ0FDMkI7WUFDcEMsSUFBSXFCLHFCQUFxQixHQUFHbEIsZ0ZBQXFCLENBQUVpQixNQUFNLENBQUNSLE1BQU0sRUFBRVEsTUFBTSxDQUFDUixNQUFNLENBQUU7WUFDakYsSUFBSVUsYUFBYSxHQUFHSCxXQUFXLENBQUNJLENBQUMsQ0FBQztZQUNsQ1QsZUFBZSxDQUFFVSxTQUFBQSxJQUFJO3VCQUFJLHFGQUFJQSxJQUFJLENBQUpBLFFBQUo7b0JBQVVYLFlBQVksQ0FBQ1UsQ0FBQyxDQUFDO2lCQUFDO2FBQUEsQ0FBRSxDQUFDO1lBQ3RELElBQUlFLGlCQUFpQixHQUFHcEIsS0FBSyxDQUFDcUIsTUFBTSxDQUFFQyxTQUFBQSxJQUFJO3VCQUFJQSxJQUFJLENBQUNDLEVBQUUsS0FBS04sYUFBYTthQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ08sVUFBVTtZQUN0RmxCLGNBQWMsQ0FBRWEsU0FBQUEsSUFBSTt1QkFBSSxxRkFBSUEsSUFBSSxDQUFKQSxRQUFKO29CQUFVQyxpQkFBaUI7aUJBQUM7YUFBQSxDQUFFLENBQUM7WUFDdkQsSUFBSUssb0JBQW9CLEdBQUd2QixZQUFZLENBQUNtQixNQUFNLENBQUVLLFNBQUFBLFdBQVc7dUJBQUlBLFdBQVcsQ0FBQ0MsS0FBSyxLQUFLbkIsWUFBWSxDQUFDVSxDQUFDLENBQUMsSUFBSVEsV0FBVyxDQUFDSixJQUFJLEtBQUtMLGFBQWE7YUFBQSxDQUFFO1lBQzVJLElBQUlXLG1CQUFtQixHQUFHSCxvQkFBb0IsQ0FBQ1AsQ0FBQyxDQUFDO1lBQ2pELElBQUlXLHFCQUFxQixHQUFHLEVBQUU7WUFDOUIsSUFBSUMsaUJBQWlCLEdBQUcsRUFBRTtZQUMxQkEsaUJBQWlCLEdBQUcscUZBQUlBLGlCQUFpQixDQUFqQkEsUUFBSjtnQkFBdUJGLG1CQUFtQixDQUFDRyxFQUFFO2FBQUMsRUFBQztZQUNuRUQsaUJBQWlCLEdBQUcscUZBQUlBLGlCQUFpQixDQUFqQkEsUUFBSjtnQkFBdUJGLG1CQUFtQixDQUFDSSxFQUFFO2FBQUMsRUFBQztZQUNuRUYsaUJBQWlCLEdBQUcscUZBQUlBLGlCQUFpQixDQUFqQkEsUUFBSjtnQkFBdUJGLG1CQUFtQixDQUFDSyxFQUFFO2FBQUMsRUFBQztZQUNuRUgsaUJBQWlCLEdBQUcscUZBQUlBLGlCQUFpQixDQUFqQkEsUUFBSjtnQkFBdUJGLG1CQUFtQixDQUFDTSxRQUFRO2FBQUMsRUFBQztZQUN6RUosaUJBQWlCLEdBQUcscUZBQUlBLGlCQUFpQixDQUFqQkEsUUFBSjtnQkFBdUJGLG1CQUFtQixDQUFDTyxRQUFRO2FBQUMsRUFBQztZQUN6RUwsaUJBQWlCLEdBQUcscUZBQUlBLGlCQUFpQixDQUFqQkEsUUFBSjtnQkFBdUJGLG1CQUFtQixDQUFDUSxLQUFLO2FBQUMsRUFBQztnQkFDakUseUJBQTBCLFNBQTFCLGlCQUEwQixVQUExQixjQUEwQjs7Z0JBQS9CLFFBQUssU0FBMEIsR0FBSXBCLHFCQUFxQixxQkFBbkQsS0FBMEIsSUFBMUIseUJBQTBCLElBQTFCLEtBQTBCLEdBQTFCLFNBQTBCLGdCQUExQix5QkFBMEIsUUFBNEI7b0JBQXRELElBQU1xQixvQkFBb0IsR0FBMUIsS0FBMEI7b0JBQzNCLElBQUlDLG9CQUFrQixHQUFHUixpQkFBaUIsQ0FBQ08sb0JBQW9CLENBQUM7b0JBQ2hFUixxQkFBcUIsR0FBRyxxRkFBSUEscUJBQXFCLENBQXJCQSxRQUFKO3NDQUEyQiw4REFBQ1UsS0FBRztzQ0FBR0Qsb0JBQWtCOzs7OztpQ0FBUTtxQkFBQyxFQUFDO29CQUN0RnpCLGlCQUFpQixDQUFFTSxTQUFBQSxJQUFJOytCQUFJLHFGQUFJQSxJQUFJLENBQUpBLFFBQUo7NEJBQVVVLHFCQUFxQjt5QkFBQztxQkFBQSxDQUFDLENBQUM7aUJBQ2hFOztnQkFKSSxpQkFBMEI7Z0JBQTFCLGNBQTBCOzs7eUJBQTFCLHlCQUEwQixJQUExQixTQUEwQjt3QkFBMUIsU0FBMEI7Ozt3QkFBMUIsaUJBQTBCOzhCQUExQixjQUEwQjs7OztTQU1sQztRQXRCRCxJQUFLLElBQUlYLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2YsWUFBWSxFQUFFZSxDQUFDLEVBQUU7S0F1QnhDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUHNCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBQUNwQyxXQUFXLEVBQVhBLFdBQVc7UUFBRUcsWUFBWSxFQUFaQSxZQUFZO1FBQUU4QixrQkFBa0IsRUFBbEJBLGtCQUFrQjtLQUFDLENBQUMsQ0FBQztJQUU3RCxJQUFNSSxpQkFBaUIsR0FBRyxXQUFNO1FBQzVCLElBQUloQyxRQUFRLElBQUlBLFFBQVEsRUFBRztZQUN2QkMsV0FBVyxDQUFFRCxRQUFRLEdBQUcsQ0FBQyxDQUFFLENBQUM7U0FDL0I7S0FDSjtJQUVELHFCQUNJOzswQkFDSSw4REFBQ2lDLFNBQU87Z0JBQUNDLFNBQVMsRUFBQyxlQUFlOztrQ0FDOUIsOERBQUNDLElBQUU7a0NBQUMsYUFBVzs7Ozs7NEJBQUs7a0NBQ3BCLDhEQUFDQyxNQUFJO3dCQUFDdkIsRUFBRSxFQUFDLFFBQVE7d0JBQUNxQixTQUFTLEVBQUMsNkJBQTZCOzswQ0FDckQsOERBQUNHLFVBQVE7Z0NBQUNILFNBQVMsRUFBQyxXQUFXOztrREFDM0IsOERBQUNELFNBQU87OzBEQUNKLDhEQUFDSyxJQUFFOzBEQUFHM0MsV0FBVyxDQUFDSyxRQUFRLENBQUM7Ozs7O29EQUFPOzBEQUNsQyw4REFBQ3VDLElBQUU7O29EQUFHekMsWUFBWSxDQUFDRSxRQUFRLENBQUM7b0RBQUUsUUFBTTs7Ozs7O29EQUFLOzs7Ozs7NENBQ25DO2tEQUNWLDhEQUFDNkIsS0FBRzt3Q0FBQ2hCLEVBQUUsRUFBQyxXQUFXOzswREFDZiw4REFBQ2dCLEtBQUc7Z0RBQUNLLFNBQVMsRUFBQyxRQUFROzBEQUVmN0IsTUFBTSxDQUFDbUMsR0FBRyxDQUFFQyxTQUFBQSxLQUFLO3lFQUNiLDhEQUFDWixLQUFHO2tFQUFHWSxLQUFLOzs7Ozs2REFBUTtpREFBQSxDQUN2Qjs7Ozs7b0RBRUg7MERBQ04sOERBQUNaLEtBQUc7Z0RBQUNLLFNBQVMsRUFBQyxRQUFROzBEQUNqQmhDLGNBQWMsQ0FBQ0YsUUFBUSxDQUFDOzs7OztvREFDeEI7Ozs7Ozs0Q0FDSjs7Ozs7O29DQUNDOzBDQUNYLDhEQUFDNkIsS0FBRztnQ0FBQ0ssU0FBUyxFQUFDLG1CQUFtQjswQ0FDOUIsNEVBQUNRLE9BQUs7b0NBQUNDLElBQUksRUFBQyxRQUFRO29DQUFDOUIsRUFBRSxFQUFDLFdBQVc7b0NBQUMrQixPQUFPLEVBQUdaLGlCQUFpQjtvQ0FBR2EsS0FBSyxFQUFDLE1BQU07Ozs7O3dDQUFHOzs7OztvQ0FDL0U7Ozs7Ozs0QkFDSDs7Ozs7O29CQUNEOzBCQUNWLDhEQUFDMUQsa0VBQU07Ozs7b0JBQUc7O29CQUNYLENBQ047Q0FDSjtHQTNFUUUsTUFBTTtBQUFOQSxLQUFBQSxNQUFNOztBQTBGZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZlcmJzL3NsaWRlci5qcz9kZWQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IFNpdGVoZWFkZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3NpdGVIZWFkZXIudHN4JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeCc7XHJcbmltcG9ydCByYW5kb21OdW1iZXJHZW5lcmF0b3IgZnJvbSAnLi4vLi4vaGVscGVyL3VzZVJhbmRvbU51bWJlckdlbmVyYXRvci50c3gnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZnVuY3Rpb24gU2xpZGVyKCB7IHZlcmJzLCB0ZW5zZXMsIGNvbmp1Z2F0aW9ucyB9ICkge1xyXG4gICAgY29uc3QgbnVtUXVlc3Rpb25zID0gNTtcclxuICAgIGNvbnN0IG51bU9wdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgW2N1cnJlbnRWZXJiLCBzZXRDdXJyZW50VmVyYl0gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VGVuc2UsIHNldEN1cnJlbnRUZW5zZV0gPSB1c2VTdGF0ZSggcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIHRlbnNlcy5sZW5ndGggKSApO1xyXG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZSggMCApO1xyXG4gICAgY29uc3QgW2Nvbmp1Z2F0aW9uU2V0LCBzZXRDb25qdWdhdGlvblNldF0gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IGluZmluaXRpdmVzID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIHZlcmJzLmxlbmd0aCApO1xyXG5cclxuICAgIGNvbnN0IGJyaWNrcyA9IFsneW8nLCAndHUnLCAnw6lsL2VsbGEvdWQnLCAnbm9zb3Ryb3MnLCAndm9zb3Ryb3MnLCAnZWxsb3MvZWxsYXMvdWRzJ107XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBudW1RdWVzdGlvbnM7IGkrKyApIHtcclxuICAgICAgICAgICAgbGV0IHNjcmFtYmxlZENvbmp1Z2F0aW9ucyA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggYnJpY2tzLmxlbmd0aCwgYnJpY2tzLmxlbmd0aCApO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFZlcmJJZCA9IGluZmluaXRpdmVzW2ldO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VGVuc2UoIHByZXYgPT4gWy4uLnByZXYsIGN1cnJlbnRUZW5zZVtpXV0gKTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmZpbml0aXZlID0gdmVyYnMuZmlsdGVyKCB2ZXJiID0+IHZlcmIuaWQgPT09IGN1cnJlbnRWZXJiSWQpWzBdLmluZmluaXRpdmU7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRWZXJiKCBwcmV2ID0+IFsuLi5wcmV2LCBjdXJyZW50SW5maW5pdGl2ZV0gKTtcclxuICAgICAgICAgICAgbGV0IHF1ZXN0aW9uQ29uanVnYXRpb25zID0gY29uanVnYXRpb25zLmZpbHRlciggY29uanVnYXRpb24gPT4gY29uanVnYXRpb24udGVuc2UgPT09IGN1cnJlbnRUZW5zZVtpXSAmJiBjb25qdWdhdGlvbi52ZXJiID09PSBjdXJyZW50VmVyYklkICk7ICBcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRDb25qdWdhdGlvbnMgPSBxdWVzdGlvbkNvbmp1Z2F0aW9uc1tpXTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRDb25qdWdhdGlvblNldCA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgc2xpZGVDb25qdWdhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgc2xpZGVDb25qdWdhdGlvbnMgPSBbLi4uc2xpZGVDb25qdWdhdGlvbnMsIGN1cnJlbnRDb25qdWdhdGlvbnMueW9dO1xyXG4gICAgICAgICAgICBzbGlkZUNvbmp1Z2F0aW9ucyA9IFsuLi5zbGlkZUNvbmp1Z2F0aW9ucywgY3VycmVudENvbmp1Z2F0aW9ucy50dV07XHJcbiAgICAgICAgICAgIHNsaWRlQ29uanVnYXRpb25zID0gWy4uLnNsaWRlQ29uanVnYXRpb25zLCBjdXJyZW50Q29uanVnYXRpb25zLmVsXTtcclxuICAgICAgICAgICAgc2xpZGVDb25qdWdhdGlvbnMgPSBbLi4uc2xpZGVDb25qdWdhdGlvbnMsIGN1cnJlbnRDb25qdWdhdGlvbnMubm9zb3Ryb3NdO1xyXG4gICAgICAgICAgICBzbGlkZUNvbmp1Z2F0aW9ucyA9IFsuLi5zbGlkZUNvbmp1Z2F0aW9ucywgY3VycmVudENvbmp1Z2F0aW9ucy52b3NvdHJvc107XHJcbiAgICAgICAgICAgIHNsaWRlQ29uanVnYXRpb25zID0gWy4uLnNsaWRlQ29uanVnYXRpb25zLCBjdXJyZW50Q29uanVnYXRpb25zLmVsbG9zXTtcclxuICAgICAgICAgICAgZm9yKCBjb25zdCBzY3JhbWJsZWRDb25qdWdhdGlvbiBvZiBzY3JhbWJsZWRDb25qdWdhdGlvbnMgKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudENvbmp1Z2F0aW9uID0gc2xpZGVDb25qdWdhdGlvbnNbc2NyYW1ibGVkQ29uanVnYXRpb25dO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbmp1Z2F0aW9uU2V0ID0gWy4uLmN1cnJlbnRDb25qdWdhdGlvblNldCwgPGRpdj57IGN1cnJlbnRDb25qdWdhdGlvbiB9PC9kaXY+XTtcclxuICAgICAgICAgICAgICAgIHNldENvbmp1Z2F0aW9uU2V0KCBwcmV2ID0+IFsuLi5wcmV2LCBjdXJyZW50Q29uanVnYXRpb25TZXRdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zb2xlLmxvZyh7Y3VycmVudFZlcmIsIGN1cnJlbnRUZW5zZSwgY3VycmVudENvbmp1Z2F0aW9ufSk7XHJcblxyXG4gICAgY29uc3QgaW5jcmVtZW50UXVlc3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIHF1ZXN0aW9uIDw9IHF1ZXN0aW9uICkge1xyXG4gICAgICAgICAgICBzZXRRdWVzdGlvbiggcXVlc3Rpb24gKyAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxoMT5WZXJiIFNsaWRlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInNsaWRlclwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+eyBjdXJyZW50VmVyYltxdWVzdGlvbl0gfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+eyBjdXJyZW50VGVuc2VbcXVlc3Rpb25dIH0gdGVuc2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJxdWVzdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmlja3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyaWNrcy5tYXAoIGJyaWNrID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57IGJyaWNrIH08L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY29uanVnYXRpb25TZXRbcXVlc3Rpb25dIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zIGNvbC1sZy0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzdWJtaXRCdG5cIiBvbkNsaWNrPXsgaW5jcmVtZW50UXVlc3Rpb24gfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbFZlcmJzID0gYXdhaXQgcHJpc21hLnZlcmJzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxUZW5zZXMgPSBhd2FpdCBwcmlzbWEudGVuc2VzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxDb25qdWdhdGlvbnMgPSBhd2FpdCBwcmlzbWEuY29uanVnYXRpb25zLmZpbmRNYW55KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHZlcmJzOiBhbGxWZXJicyxcclxuICAgICAgICAgICAgdGVuc2VzOiBhbGxUZW5zZXMsXHJcbiAgICAgICAgICAgIGNvbmp1Z2F0aW9uczogYWxsQ29uanVnYXRpb25zXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2l0ZWhlYWRlciIsIkZvb3RlciIsInJhbmRvbU51bWJlckdlbmVyYXRvciIsIlNsaWRlciIsInZlcmJzIiwidGVuc2VzIiwiY29uanVnYXRpb25zIiwibnVtUXVlc3Rpb25zIiwibnVtT3B0aW9ucyIsImN1cnJlbnRWZXJiIiwic2V0Q3VycmVudFZlcmIiLCJsZW5ndGgiLCJjdXJyZW50VGVuc2UiLCJzZXRDdXJyZW50VGVuc2UiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiY29uanVnYXRpb25TZXQiLCJzZXRDb25qdWdhdGlvblNldCIsImluZmluaXRpdmVzIiwiYnJpY2tzIiwic2NyYW1ibGVkQ29uanVnYXRpb25zIiwiY3VycmVudFZlcmJJZCIsImkiLCJwcmV2IiwiY3VycmVudEluZmluaXRpdmUiLCJmaWx0ZXIiLCJ2ZXJiIiwiaWQiLCJpbmZpbml0aXZlIiwicXVlc3Rpb25Db25qdWdhdGlvbnMiLCJjb25qdWdhdGlvbiIsInRlbnNlIiwiY3VycmVudENvbmp1Z2F0aW9ucyIsImN1cnJlbnRDb25qdWdhdGlvblNldCIsInNsaWRlQ29uanVnYXRpb25zIiwieW8iLCJ0dSIsImVsIiwibm9zb3Ryb3MiLCJ2b3NvdHJvcyIsImVsbG9zIiwic2NyYW1ibGVkQ29uanVnYXRpb24iLCJjdXJyZW50Q29uanVnYXRpb24iLCJkaXYiLCJjb25zb2xlIiwibG9nIiwiaW5jcmVtZW50UXVlc3Rpb24iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiZmllbGRzZXQiLCJoMiIsImgzIiwibWFwIiwiYnJpY2siLCJpbnB1dCIsInR5cGUiLCJvbkNsaWNrIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});