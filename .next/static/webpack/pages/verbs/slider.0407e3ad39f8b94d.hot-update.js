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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), conjugationSet = ref[0], setConjugationSet = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref1[0], setQuestion = ref1[1];\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    var numQuestions = 5;\n    var numOptions = 5;\n    var numVerbs = verbs.length;\n    var infinitives = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, numVerbs);\n    var questionTenses = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length);\n    var currentVerbId = infinitives[question];\n    console.log(verbs);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var scrambledConjugations = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(bricks.length, bricks.length);\n        var currentTense = questionTenses[question];\n        var _$currentVerb = verbs.filter(function(verb) {\n            return verb.id === currentVerbId;\n        })[0].infinitive;\n        var questionConjugations = conjugations.filter(function(conjugation) {\n            return conjugation.tense === currentTense && conjugation.verb === currentVerbId;\n        });\n        var currentConjugations = questionConjugations[0];\n        var currentConjugationSet = [];\n        slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n            currentConjugations.yo\n        ]);\n        slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n            currentConjugations.tu\n        ]);\n        slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n            currentConjugations.el\n        ]);\n        slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n            currentConjugations.nosotros\n        ]);\n        slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n            currentConjugations.vosotros\n        ]);\n        slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n            currentConjugations.ellos\n        ]);\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = scrambledConjugations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var scrambledConjugation = _step.value;\n                var currentConjugation = slideConjugations[scrambledSlide];\n                currentConjugationSet = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currentConjugationSet).concat([\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: currentConjugation\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 37,\n                        columnNumber: 64\n                    }, _this)\n                ]);\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        setConjugationSet(function(prev) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                currentConjugationSet\n            ]);\n        });\n    }, []);\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: currentVerb\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"DE7JtGNpSRLmzKOxWAHDsA8vHVU=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2tEQUNKLDRFQUFDSyxJQUFFO3NEQUFHNUIsV0FBVzs7Ozs7Z0RBQU87Ozs7OzRDQUNsQjtrREFDViw4REFBQ29CLEtBQUc7d0NBQUNqQixFQUFFLEVBQUMsV0FBVzs7MERBQ2YsOERBQUNpQixLQUFHO2dEQUFDSSxTQUFTLEVBQUMsUUFBUTswREFFZnBDLE1BQU0sQ0FBQ3lDLEdBQUcsQ0FBRUMsU0FBQUEsS0FBSzt5RUFDYiw4REFBQ1YsS0FBRztrRUFBR1UsS0FBSzs7Ozs7NkRBQVE7aURBQUEsQ0FDdkI7Ozs7O29EQUVIOzBEQUNOLDhEQUFDVixLQUFHO2dEQUFDSSxTQUFTLEVBQUMsUUFBUTs7Ozs7b0RBRWpCOzs7Ozs7NENBQ0o7Ozs7OztvQ0FDQzswQ0FDWCw4REFBQ0osS0FBRztnQ0FBQ0ksU0FBUyxFQUFDLG1CQUFtQjswQ0FDOUIsNEVBQUNPLE9BQUs7b0NBQUNDLElBQUksRUFBQyxRQUFRO29DQUFDN0IsRUFBRSxFQUFDLFdBQVc7b0NBQUM4QixPQUFPLEVBQUdYLGlCQUFpQjtvQ0FBR1ksS0FBSyxFQUFDLE1BQU07Ozs7O3dDQUFHOzs7OztvQ0FDL0U7Ozs7Ozs0QkFDSDs7Ozs7O29CQUNEOzBCQUNWLDhEQUFDeEQsa0VBQU07Ozs7b0JBQUc7O29CQUNYLENBQ047Q0FDSjtHQXRFUUUsTUFBTTtBQUFOQSxLQUFBQSxNQUFNOztBQXFGZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZlcmJzL3NsaWRlci5qcz9kZWQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IFNpdGVoZWFkZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3NpdGVIZWFkZXIudHN4JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeCc7XHJcbmltcG9ydCByYW5kb21OdW1iZXJHZW5lcmF0b3IgZnJvbSAnLi4vLi4vaGVscGVyL3VzZVJhbmRvbU51bWJlckdlbmVyYXRvci50c3gnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZnVuY3Rpb24gU2xpZGVyKCB7IHZlcmJzLCB0ZW5zZXMsIGNvbmp1Z2F0aW9ucyB9ICkge1xyXG4gICAgY29uc3QgW2Nvbmp1Z2F0aW9uU2V0LCBzZXRDb25qdWdhdGlvblNldF0gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoIDAgKTtcclxuXHJcbiAgICBjb25zdCBicmlja3MgPSBbJ3lvJywgJ3R1JywgJ8OpbC9lbGxhL3VkJywgJ25vc290cm9zJywgJ3Zvc290cm9zJywgJ2VsbG9zL2VsbGFzL3VkcyddO1xyXG4gICAgY29uc3QgbnVtUXVlc3Rpb25zID0gNTtcclxuICAgIGNvbnN0IG51bU9wdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgbnVtVmVyYnMgPSB2ZXJicy5sZW5ndGg7XHJcbiAgICBsZXQgaW5maW5pdGl2ZXMgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgbnVtVmVyYnMgKTtcclxuICAgIGxldCBxdWVzdGlvblRlbnNlcyA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCB0ZW5zZXMubGVuZ3RoICk7XHJcbiAgICBsZXQgY3VycmVudFZlcmJJZCA9IGluZmluaXRpdmVzW3F1ZXN0aW9uXTtcclxuICAgIGNvbnNvbGUubG9nKHZlcmJzKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBsZXQgc2NyYW1ibGVkQ29uanVnYXRpb25zID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBicmlja3MubGVuZ3RoLCBicmlja3MubGVuZ3RoICk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRUZW5zZSA9IHF1ZXN0aW9uVGVuc2VzW3F1ZXN0aW9uXTtcclxuICAgICAgICBsZXQgY3VycmVudFZlcmIgPSB2ZXJicy5maWx0ZXIoIHZlcmIgPT4gdmVyYi5pZCA9PT0gY3VycmVudFZlcmJJZClbMF0uaW5maW5pdGl2ZTtcclxuICAgICAgICBsZXQgcXVlc3Rpb25Db25qdWdhdGlvbnMgPSBjb25qdWdhdGlvbnMuZmlsdGVyKCBjb25qdWdhdGlvbiA9PiBjb25qdWdhdGlvbi50ZW5zZSA9PT0gY3VycmVudFRlbnNlICYmIGNvbmp1Z2F0aW9uLnZlcmIgPT09IGN1cnJlbnRWZXJiSWQgKTsgIFxyXG4gICAgICAgIGxldCBjdXJyZW50Q29uanVnYXRpb25zID0gcXVlc3Rpb25Db25qdWdhdGlvbnNbMF07XHJcbiAgICAgICAgbGV0IGN1cnJlbnRDb25qdWdhdGlvblNldCA9IFtdO1xyXG4gICAgICAgIHNsaWRlQ29uanVnYXRpb25zID0gWy4uLnNsaWRlQ29uanVnYXRpb25zLCBjdXJyZW50Q29uanVnYXRpb25zLnlvXTtcclxuICAgICAgICBzbGlkZUNvbmp1Z2F0aW9ucyA9IFsuLi5zbGlkZUNvbmp1Z2F0aW9ucywgY3VycmVudENvbmp1Z2F0aW9ucy50dV07XHJcbiAgICAgICAgc2xpZGVDb25qdWdhdGlvbnMgPSBbLi4uc2xpZGVDb25qdWdhdGlvbnMsIGN1cnJlbnRDb25qdWdhdGlvbnMuZWxdO1xyXG4gICAgICAgIHNsaWRlQ29uanVnYXRpb25zID0gWy4uLnNsaWRlQ29uanVnYXRpb25zLCBjdXJyZW50Q29uanVnYXRpb25zLm5vc290cm9zXTtcclxuICAgICAgICBzbGlkZUNvbmp1Z2F0aW9ucyA9IFsuLi5zbGlkZUNvbmp1Z2F0aW9ucywgY3VycmVudENvbmp1Z2F0aW9ucy52b3NvdHJvc107XHJcbiAgICAgICAgc2xpZGVDb25qdWdhdGlvbnMgPSBbLi4uc2xpZGVDb25qdWdhdGlvbnMsIGN1cnJlbnRDb25qdWdhdGlvbnMuZWxsb3NdO1xyXG4gICAgICAgIGZvciggY29uc3Qgc2NyYW1ibGVkQ29uanVnYXRpb24gb2Ygc2NyYW1ibGVkQ29uanVnYXRpb25zICkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudENvbmp1Z2F0aW9uID0gc2xpZGVDb25qdWdhdGlvbnNbc2NyYW1ibGVkU2xpZGVdO1xyXG4gICAgICAgICAgICBjdXJyZW50Q29uanVnYXRpb25TZXQgPSBbLi4uY3VycmVudENvbmp1Z2F0aW9uU2V0LCA8ZGl2PnsgY3VycmVudENvbmp1Z2F0aW9uIH08L2Rpdj5dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q29uanVnYXRpb25TZXQoIHByZXYgPT4gWy4uLnByZXYsIGN1cnJlbnRDb25qdWdhdGlvblNldF0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudFF1ZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBxdWVzdGlvbiA8PSBxdWVzdGlvbiApIHtcclxuICAgICAgICAgICAgc2V0UXVlc3Rpb24oIHF1ZXN0aW9uICsgMSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8aDE+VmVyYiBTbGlkZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJzbGlkZXJcIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnsgY3VycmVudFZlcmIgfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInF1ZXN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JyaWNrcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJpY2tzLm1hcCggYnJpY2sgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnsgYnJpY2sgfTwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucyBjb2wtbGctMTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwic3VibWl0QnRuXCIgb25DbGljaz17IGluY3JlbWVudFF1ZXN0aW9uIH0gdmFsdWU9XCJuZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxWZXJicyA9IGF3YWl0IHByaXNtYS52ZXJicy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsVGVuc2VzID0gYXdhaXQgcHJpc21hLnRlbnNlcy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsQ29uanVnYXRpb25zID0gYXdhaXQgcHJpc21hLmNvbmp1Z2F0aW9ucy5maW5kTWFueSgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2ZXJiczogYWxsVmVyYnMsXHJcbiAgICAgICAgICAgIHRlbnNlczogYWxsVGVuc2VzLFxyXG4gICAgICAgICAgICBjb25qdWdhdGlvbnM6IGFsbENvbmp1Z2F0aW9uc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNpdGVoZWFkZXIiLCJGb290ZXIiLCJyYW5kb21OdW1iZXJHZW5lcmF0b3IiLCJTbGlkZXIiLCJ2ZXJicyIsInRlbnNlcyIsImNvbmp1Z2F0aW9ucyIsImNvbmp1Z2F0aW9uU2V0Iiwic2V0Q29uanVnYXRpb25TZXQiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiYnJpY2tzIiwibnVtUXVlc3Rpb25zIiwibnVtT3B0aW9ucyIsIm51bVZlcmJzIiwibGVuZ3RoIiwiaW5maW5pdGl2ZXMiLCJxdWVzdGlvblRlbnNlcyIsImN1cnJlbnRWZXJiSWQiLCJjb25zb2xlIiwibG9nIiwic2NyYW1ibGVkQ29uanVnYXRpb25zIiwiY3VycmVudFRlbnNlIiwiY3VycmVudFZlcmIiLCJmaWx0ZXIiLCJ2ZXJiIiwiaWQiLCJpbmZpbml0aXZlIiwicXVlc3Rpb25Db25qdWdhdGlvbnMiLCJjb25qdWdhdGlvbiIsInRlbnNlIiwiY3VycmVudENvbmp1Z2F0aW9ucyIsImN1cnJlbnRDb25qdWdhdGlvblNldCIsInNsaWRlQ29uanVnYXRpb25zIiwieW8iLCJ0dSIsImVsIiwibm9zb3Ryb3MiLCJ2b3NvdHJvcyIsImVsbG9zIiwic2NyYW1ibGVkQ29uanVnYXRpb24iLCJjdXJyZW50Q29uanVnYXRpb24iLCJzY3JhbWJsZWRTbGlkZSIsImRpdiIsInByZXYiLCJpbmNyZW1lbnRRdWVzdGlvbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJmaWVsZHNldCIsImgyIiwibWFwIiwiYnJpY2siLCJpbnB1dCIsInR5cGUiLCJvbkNsaWNrIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});