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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var numQuestions = 5;\n    var numOptions = 5;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, numVerbs)), currentVerb = ref[0], setCurrentVerb = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), conjugationSet = ref1[0], setConjugationSet = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length)), currentTense = ref2[0], setCurrentTense = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref3[0], setQuestion = ref3[1];\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    var numVerbs = verbs.length;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var scrambledConjugations = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(bricks.length, bricks.length);\n            var currentVerbId = infinitives[question];\n            setCurrentTense(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                    tense[question]\n                ]);\n            });\n            var currentInfinitive = verbs.filter(function(verb) {\n                return verb.id === currentVerbId;\n            })[0].infinitive;\n            setCurrentVerb(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                    currentInfinitive\n                ]);\n            });\n            var questionConjugations = conjugations.filter(function(conjugation) {\n                return conjugation.tense === currentTense[question] && conjugation.verb === currentVerbId;\n            });\n            var currentConjugations = questionConjugations[0];\n            var currentConjugationSet = [];\n            var slideConjugations = [];\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.yo\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.tu\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.el\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.nosotros\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.vosotros\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.ellos\n            ]);\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = scrambledConjugations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var scrambledConjugation = _step.value;\n                    var currentConjugation = slideConjugations[scrambledConjugation];\n                    currentConjugationSet = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currentConjugationSet).concat([\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: currentConjugation\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                            lineNumber: 39,\n                            columnNumber: 68\n                        }, _this)\n                    ]);\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n            setConjugationSet(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                    currentConjugationSet\n                ]);\n            });\n        };\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: currentVerb[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: [\n                                                    currentTense,\n                                                    \" tense\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\",\n                                                children: conjugationSet[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"bDWxfzf63GKtXsBFv4+MwNXKxjk=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQUs7b0NBQUNDLElBQUksRUFBQyxRQUFRO29DQUFDNUIsRUFBRSxFQUFDLFdBQVc7b0NBQUM2QixPQUFPLEVBQUdaLGlCQUFpQjtvQ0FBR2EsS0FBSyxFQUFDLE1BQU07Ozs7O3dDQUFHOzs7OztvQ0FDL0U7Ozs7Ozs0QkFDSDs7Ozs7O29CQUNEOzBCQUNWLDhEQUFDekQsa0VBQU07Ozs7b0JBQUc7O29CQUNYLENBQ047Q0FDSjtHQTFFUUUsTUFBTTtBQUFOQSxLQUFBQSxNQUFNOztBQXlGZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZlcmJzL3NsaWRlci5qcz9kZWQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IFNpdGVoZWFkZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3NpdGVIZWFkZXIudHN4JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeCc7XHJcbmltcG9ydCByYW5kb21OdW1iZXJHZW5lcmF0b3IgZnJvbSAnLi4vLi4vaGVscGVyL3VzZVJhbmRvbU51bWJlckdlbmVyYXRvci50c3gnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZnVuY3Rpb24gU2xpZGVyKCB7IHZlcmJzLCB0ZW5zZXMsIGNvbmp1Z2F0aW9ucyB9ICkge1xyXG4gICAgY29uc3QgbnVtUXVlc3Rpb25zID0gNTtcclxuICAgIGNvbnN0IG51bU9wdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgW2N1cnJlbnRWZXJiLCBzZXRDdXJyZW50VmVyYl0gPSB1c2VTdGF0ZSggcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIG51bVZlcmJzICkgKTtcclxuICAgIGNvbnN0IFtjb25qdWdhdGlvblNldCwgc2V0Q29uanVnYXRpb25TZXRdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbY3VycmVudFRlbnNlLCBzZXRDdXJyZW50VGVuc2VdID0gdXNlU3RhdGUoIHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCB0ZW5zZXMubGVuZ3RoICkgKTtcclxuICAgIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoIDAgKTtcclxuXHJcbiAgICBjb25zdCBicmlja3MgPSBbJ3lvJywgJ3R1JywgJ8OpbC9lbGxhL3VkJywgJ25vc290cm9zJywgJ3Zvc290cm9zJywgJ2VsbG9zL2VsbGFzL3VkcyddO1xyXG4gICAgY29uc3QgbnVtVmVyYnMgPSB2ZXJicy5sZW5ndGg7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBudW1RdWVzdGlvbnM7IGkrKyApIHtcclxuICAgICAgICAgICAgbGV0IHNjcmFtYmxlZENvbmp1Z2F0aW9ucyA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggYnJpY2tzLmxlbmd0aCwgYnJpY2tzLmxlbmd0aCApO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFZlcmJJZCA9IGluZmluaXRpdmVzW3F1ZXN0aW9uXTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFRlbnNlKCBwcmV2ID0+IFsuLi5wcmV2LCB0ZW5zZVtxdWVzdGlvbl1dICk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50SW5maW5pdGl2ZSA9IHZlcmJzLmZpbHRlciggdmVyYiA9PiB2ZXJiLmlkID09PSBjdXJyZW50VmVyYklkKVswXS5pbmZpbml0aXZlO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VmVyYiggcHJldiA9PiBbLi4ucHJldiwgY3VycmVudEluZmluaXRpdmVdICk7XHJcbiAgICAgICAgICAgIGxldCBxdWVzdGlvbkNvbmp1Z2F0aW9ucyA9IGNvbmp1Z2F0aW9ucy5maWx0ZXIoIGNvbmp1Z2F0aW9uID0+IGNvbmp1Z2F0aW9uLnRlbnNlID09PSBjdXJyZW50VGVuc2VbcXVlc3Rpb25dICYmIGNvbmp1Z2F0aW9uLnZlcmIgPT09IGN1cnJlbnRWZXJiSWQgKTsgIFxyXG4gICAgICAgICAgICBsZXQgY3VycmVudENvbmp1Z2F0aW9ucyA9IHF1ZXN0aW9uQ29uanVnYXRpb25zWzBdO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudENvbmp1Z2F0aW9uU2V0ID0gW107XHJcbiAgICAgICAgICAgIGxldCBzbGlkZUNvbmp1Z2F0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICBzbGlkZUNvbmp1Z2F0aW9ucyA9IFsuLi5zbGlkZUNvbmp1Z2F0aW9ucywgY3VycmVudENvbmp1Z2F0aW9ucy55b107XHJcbiAgICAgICAgICAgIHNsaWRlQ29uanVnYXRpb25zID0gWy4uLnNsaWRlQ29uanVnYXRpb25zLCBjdXJyZW50Q29uanVnYXRpb25zLnR1XTtcclxuICAgICAgICAgICAgc2xpZGVDb25qdWdhdGlvbnMgPSBbLi4uc2xpZGVDb25qdWdhdGlvbnMsIGN1cnJlbnRDb25qdWdhdGlvbnMuZWxdO1xyXG4gICAgICAgICAgICBzbGlkZUNvbmp1Z2F0aW9ucyA9IFsuLi5zbGlkZUNvbmp1Z2F0aW9ucywgY3VycmVudENvbmp1Z2F0aW9ucy5ub3NvdHJvc107XHJcbiAgICAgICAgICAgIHNsaWRlQ29uanVnYXRpb25zID0gWy4uLnNsaWRlQ29uanVnYXRpb25zLCBjdXJyZW50Q29uanVnYXRpb25zLnZvc290cm9zXTtcclxuICAgICAgICAgICAgc2xpZGVDb25qdWdhdGlvbnMgPSBbLi4uc2xpZGVDb25qdWdhdGlvbnMsIGN1cnJlbnRDb25qdWdhdGlvbnMuZWxsb3NdO1xyXG4gICAgICAgICAgICBmb3IoIGNvbnN0IHNjcmFtYmxlZENvbmp1Z2F0aW9uIG9mIHNjcmFtYmxlZENvbmp1Z2F0aW9ucyApIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q29uanVnYXRpb24gPSBzbGlkZUNvbmp1Z2F0aW9uc1tzY3JhbWJsZWRDb25qdWdhdGlvbl07XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uanVnYXRpb25TZXQgPSBbLi4uY3VycmVudENvbmp1Z2F0aW9uU2V0LCA8ZGl2PnsgY3VycmVudENvbmp1Z2F0aW9uIH08L2Rpdj5dO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRDb25qdWdhdGlvblNldCggcHJldiA9PiBbLi4ucHJldiwgY3VycmVudENvbmp1Z2F0aW9uU2V0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudFF1ZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBxdWVzdGlvbiA8PSBxdWVzdGlvbiApIHtcclxuICAgICAgICAgICAgc2V0UXVlc3Rpb24oIHF1ZXN0aW9uICsgMSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8aDE+VmVyYiBTbGlkZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJzbGlkZXJcIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnsgY3VycmVudFZlcmJbcXVlc3Rpb25dIH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnsgY3VycmVudFRlbnNlIH0gdGVuc2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJxdWVzdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmlja3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyaWNrcy5tYXAoIGJyaWNrID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57IGJyaWNrIH08L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY29uanVnYXRpb25TZXRbcXVlc3Rpb25dIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zIGNvbC1sZy0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzdWJtaXRCdG5cIiBvbkNsaWNrPXsgaW5jcmVtZW50UXVlc3Rpb24gfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbFZlcmJzID0gYXdhaXQgcHJpc21hLnZlcmJzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxUZW5zZXMgPSBhd2FpdCBwcmlzbWEudGVuc2VzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxDb25qdWdhdGlvbnMgPSBhd2FpdCBwcmlzbWEuY29uanVnYXRpb25zLmZpbmRNYW55KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHZlcmJzOiBhbGxWZXJicyxcclxuICAgICAgICAgICAgdGVuc2VzOiBhbGxUZW5zZXMsXHJcbiAgICAgICAgICAgIGNvbmp1Z2F0aW9uczogYWxsQ29uanVnYXRpb25zXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2l0ZWhlYWRlciIsIkZvb3RlciIsInJhbmRvbU51bWJlckdlbmVyYXRvciIsIlNsaWRlciIsInZlcmJzIiwidGVuc2VzIiwiY29uanVnYXRpb25zIiwibnVtUXVlc3Rpb25zIiwibnVtT3B0aW9ucyIsIm51bVZlcmJzIiwiY3VycmVudFZlcmIiLCJzZXRDdXJyZW50VmVyYiIsImNvbmp1Z2F0aW9uU2V0Iiwic2V0Q29uanVnYXRpb25TZXQiLCJsZW5ndGgiLCJjdXJyZW50VGVuc2UiLCJzZXRDdXJyZW50VGVuc2UiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiYnJpY2tzIiwic2NyYW1ibGVkQ29uanVnYXRpb25zIiwiY3VycmVudFZlcmJJZCIsImluZmluaXRpdmVzIiwicHJldiIsInRlbnNlIiwiY3VycmVudEluZmluaXRpdmUiLCJmaWx0ZXIiLCJ2ZXJiIiwiaWQiLCJpbmZpbml0aXZlIiwicXVlc3Rpb25Db25qdWdhdGlvbnMiLCJjb25qdWdhdGlvbiIsImN1cnJlbnRDb25qdWdhdGlvbnMiLCJjdXJyZW50Q29uanVnYXRpb25TZXQiLCJzbGlkZUNvbmp1Z2F0aW9ucyIsInlvIiwidHUiLCJlbCIsIm5vc290cm9zIiwidm9zb3Ryb3MiLCJlbGxvcyIsInNjcmFtYmxlZENvbmp1Z2F0aW9uIiwiY3VycmVudENvbmp1Z2F0aW9uIiwiZGl2IiwiaSIsImluY3JlbWVudFF1ZXN0aW9uIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImZpZWxkc2V0IiwiaDIiLCJoMyIsIm1hcCIsImJyaWNrIiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});