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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var numQuestions = 5;\n    var numOptions = 5;\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref[0], setQuestion = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), infinitives = ref1[0], setInfinitives = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length)), randomTenses = ref2[0], setrandomTenses = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), slideSets = ref3[0], setSlideSets = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var randomIndices = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, verbs.length);\n        var verbIds = [];\n        var randomInfinitives = [];\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            var _loop = function() {\n                var index = _step.value;\n                verbIds = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(verbIds).concat([\n                    verbs.filter(function(verb) {\n                        return verb.id === index;\n                    })[0].id\n                ]);\n            };\n            for(var _iterator = randomIndices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n        try {\n            var _loop1 = function() {\n                var id = _step1.value;\n                randomInfinitives = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(randomInfinitives).concat([\n                    verbs.filter(function(verb) {\n                        return verb.id === id;\n                    })[0].infinitive\n                ]);\n            };\n            for(var _iterator1 = verbIds[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop1();\n        } catch (err) {\n            _didIteratorError1 = true;\n            _iteratorError1 = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                    _iterator1.return();\n                }\n            } finally{\n                if (_didIteratorError1) {\n                    throw _iteratorError1;\n                }\n            }\n        }\n        setInfinitives(function(prev) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                randomInfinitives\n            ]);\n        });\n    }, []);\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    console.log(question);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: infinitives[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: [\n                                                    randomTenses[question],\n                                                    \" tense\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"XneToHyFZuikZvS/G3h0FnVAFZ0=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O29DQUNDOzBDQUNYLDhEQUFDTSxLQUFHO2dDQUFDTixTQUFTLEVBQUMsbUJBQW1COzBDQUM5Qiw0RUFBQ1MsT0FBSztvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7b0NBQUNqQixFQUFFLEVBQUMsV0FBVztvQ0FBQ2tCLE9BQU8sRUFBR2YsaUJBQWlCO29DQUFHZ0IsS0FBSyxFQUFDLE1BQU07Ozs7O3dDQUFHOzs7OztvQ0FDL0U7Ozs7Ozs0QkFDSDs7Ozs7O29CQUNEOzBCQUNWLDhEQUFDM0Msa0VBQU07Ozs7b0JBQUc7O29CQUNYLENBQ047Q0FDSjtHQTVEUUUsTUFBTTtBQUFOQSxLQUFBQSxNQUFNOztBQTJFZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZlcmJzL3NsaWRlci5qcz9kZWQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IFNpdGVoZWFkZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3NpdGVIZWFkZXIudHN4JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeCc7XHJcbmltcG9ydCByYW5kb21OdW1iZXJHZW5lcmF0b3IgZnJvbSAnLi4vLi4vaGVscGVyL3VzZVJhbmRvbU51bWJlckdlbmVyYXRvci50c3gnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZnVuY3Rpb24gU2xpZGVyKCB7IHZlcmJzLCB0ZW5zZXMsIGNvbmp1Z2F0aW9ucyB9ICkge1xyXG4gICAgY29uc3QgbnVtUXVlc3Rpb25zID0gNTtcclxuICAgIGNvbnN0IG51bU9wdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgYnJpY2tzID0gWyd5bycsICd0dScsICfDqWwvZWxsYS91ZCcsICdub3NvdHJvcycsICd2b3NvdHJvcycsICdlbGxvcy9lbGxhcy91ZHMnXTtcclxuICAgIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoIDAgKTtcclxuICAgIGNvbnN0IFtpbmZpbml0aXZlcywgc2V0SW5maW5pdGl2ZXNdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbcmFuZG9tVGVuc2VzLCBzZXRyYW5kb21UZW5zZXNdID0gdXNlU3RhdGUoIHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCB0ZW5zZXMubGVuZ3RoICkgKTtcclxuICAgIGNvbnN0IFtzbGlkZVNldHMsIHNldFNsaWRlU2V0c10gPSB1c2VTdGF0ZSggW10gKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBjb25zdCByYW5kb21JbmRpY2VzID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIHZlcmJzLmxlbmd0aCApO1xyXG4gICAgICAgIGxldCB2ZXJiSWRzID0gW107XHJcbiAgICAgICAgbGV0IHJhbmRvbUluZmluaXRpdmVzID0gW107XHJcbiAgICAgICAgZm9yKCBjb25zdCBpbmRleCBvZiByYW5kb21JbmRpY2VzICkge1xyXG4gICAgICAgICAgICB2ZXJiSWRzID0gWy4uLnZlcmJJZHMsIHZlcmJzLmZpbHRlciggdmVyYiA9PiB2ZXJiLmlkID09PSBpbmRleCApWzBdLmlkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKCBjb25zdCBpZCBvZiB2ZXJiSWRzICkge1xyXG4gICAgICAgICAgICByYW5kb21JbmZpbml0aXZlcyA9IFsuLi5yYW5kb21JbmZpbml0aXZlcywgdmVyYnMuZmlsdGVyKCB2ZXJiID0+IHZlcmIuaWQgPT09IGlkKVswXS5pbmZpbml0aXZlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW5maW5pdGl2ZXMoIHByZXYgPT4gWy4uLnByZXYsIHJhbmRvbUluZmluaXRpdmVzXSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaW5jcmVtZW50UXVlc3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIHF1ZXN0aW9uIDw9IHF1ZXN0aW9uICkge1xyXG4gICAgICAgICAgICBzZXRRdWVzdGlvbiggcXVlc3Rpb24gKyAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocXVlc3Rpb24pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxoMT5WZXJiIFNsaWRlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInNsaWRlclwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+eyBpbmZpbml0aXZlc1txdWVzdGlvbl0gIH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnsgcmFuZG9tVGVuc2VzW3F1ZXN0aW9uXSB9IHRlbnNlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicXVlc3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnJpY2tzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmlja3MubWFwKCBicmljayA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+eyBicmljayB9PC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucyBjb2wtbGctMTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwic3VibWl0QnRuXCIgb25DbGljaz17IGluY3JlbWVudFF1ZXN0aW9uIH0gdmFsdWU9XCJuZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxWZXJicyA9IGF3YWl0IHByaXNtYS52ZXJicy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsVGVuc2VzID0gYXdhaXQgcHJpc21hLnRlbnNlcy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsQ29uanVnYXRpb25zID0gYXdhaXQgcHJpc21hLmNvbmp1Z2F0aW9ucy5maW5kTWFueSgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2ZXJiczogYWxsVmVyYnMsXHJcbiAgICAgICAgICAgIHRlbnNlczogYWxsVGVuc2VzLFxyXG4gICAgICAgICAgICBjb25qdWdhdGlvbnM6IGFsbENvbmp1Z2F0aW9uc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNpdGVoZWFkZXIiLCJGb290ZXIiLCJyYW5kb21OdW1iZXJHZW5lcmF0b3IiLCJTbGlkZXIiLCJ2ZXJicyIsInRlbnNlcyIsImNvbmp1Z2F0aW9ucyIsIm51bVF1ZXN0aW9ucyIsIm51bU9wdGlvbnMiLCJicmlja3MiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiaW5maW5pdGl2ZXMiLCJzZXRJbmZpbml0aXZlcyIsImxlbmd0aCIsInJhbmRvbVRlbnNlcyIsInNldHJhbmRvbVRlbnNlcyIsInNsaWRlU2V0cyIsInNldFNsaWRlU2V0cyIsInJhbmRvbUluZGljZXMiLCJ2ZXJiSWRzIiwicmFuZG9tSW5maW5pdGl2ZXMiLCJpbmRleCIsImZpbHRlciIsInZlcmIiLCJpZCIsImluZmluaXRpdmUiLCJwcmV2IiwiaW5jcmVtZW50UXVlc3Rpb24iLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImZpZWxkc2V0IiwiaDIiLCJoMyIsImRpdiIsIm1hcCIsImJyaWNrIiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});