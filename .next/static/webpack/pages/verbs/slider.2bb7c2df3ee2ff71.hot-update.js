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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), brickSets = ref[0], setBrickSets = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), slideSets = ref1[0], setSlideSets = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref2[0], setQuestion = ref2[1];\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    var numQuestions = 5;\n    var numOptions = 5;\n    var numVerbs = verbs.length;\n    var infinitives = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, numVerbs);\n    var questionTenses = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length);\n    var currentVerbId = infinitives[question];\n    console.log(verbs);\n    var currentTense = questionTenses[question];\n    var currentVerb = verbs.filter(function(verb) {\n        return verb.id === currentVerbId;\n    })[0].infinitive;\n    var questionConjugations = conjugations.filter(function(conjugation) {\n        return conjugation.tense === currentTense && conjugation.verb === currentVerbId;\n    });\n    console.log(questionConjugations[0]);\n    var slideConjugations = [];\n    for(var questionConjugation in questionConjugations[0]){\n        slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n            questionConjugation.yo\n        ]);\n        slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n            questionConjugation.tu\n        ]);\n        slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n            questionConjugation.el\n        ]);\n        slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n            questionConjugation.nosotros\n        ]);\n        slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n            questionConjugation.vosotros\n        ]);\n        slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n            questionConjugation.ellos\n        ]);\n    }\n    console.log(slideConjugations);\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: currentVerb\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"lyF9SCYUW7j0numrM03K2vrD9YI=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxFQUFHWixpQkFBaUI7b0NBQUdhLEtBQUssRUFBQyxNQUFNOzs7Ozt3Q0FBRzs7Ozs7b0NBQy9FOzs7Ozs7NEJBQ0g7Ozs7OztvQkFDRDswQkFDViw4REFBQ3BELGtFQUFNOzs7O29CQUFHOztvQkFDWCxDQUNOO0NBQ0o7R0FqRVFFLE1BQU07QUFBTkEsS0FBQUEsTUFBTTs7QUFnRmYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92ZXJicy9zbGlkZXIuanM/ZGVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBTaXRlaGVhZGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9zaXRlSGVhZGVyLnRzeCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50c3gnO1xyXG5pbXBvcnQgcmFuZG9tTnVtYmVyR2VuZXJhdG9yIGZyb20gJy4uLy4uL2hlbHBlci91c2VSYW5kb21OdW1iZXJHZW5lcmF0b3IudHN4JztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmZ1bmN0aW9uIFNsaWRlciggeyB2ZXJicywgdGVuc2VzLCBjb25qdWdhdGlvbnMgfSApIHtcclxuICAgIGNvbnN0IFticmlja1NldHMsIHNldEJyaWNrU2V0c10gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFtzbGlkZVNldHMsIHNldFNsaWRlU2V0c10gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoIDAgKTtcclxuXHJcbiAgICBjb25zdCBicmlja3MgPSBbJ3lvJywgJ3R1JywgJ8OpbC9lbGxhL3VkJywgJ25vc290cm9zJywgJ3Zvc290cm9zJywgJ2VsbG9zL2VsbGFzL3VkcyddO1xyXG4gICAgY29uc3QgbnVtUXVlc3Rpb25zID0gNTtcclxuICAgIGNvbnN0IG51bU9wdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgbnVtVmVyYnMgPSB2ZXJicy5sZW5ndGg7XHJcbiAgICBsZXQgaW5maW5pdGl2ZXMgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgbnVtVmVyYnMgKTtcclxuICAgIGxldCBxdWVzdGlvblRlbnNlcyA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCB0ZW5zZXMubGVuZ3RoICk7XHJcbiAgICBsZXQgY3VycmVudFZlcmJJZCA9IGluZmluaXRpdmVzW3F1ZXN0aW9uXTtcclxuICAgIGNvbnNvbGUubG9nKHZlcmJzKTtcclxuXHJcbiAgICBsZXQgY3VycmVudFRlbnNlID0gcXVlc3Rpb25UZW5zZXNbcXVlc3Rpb25dO1xyXG4gICAgbGV0IGN1cnJlbnRWZXJiID0gdmVyYnMuZmlsdGVyKCB2ZXJiID0+IHZlcmIuaWQgPT09IGN1cnJlbnRWZXJiSWQpWzBdLmluZmluaXRpdmU7XHJcbiAgICBsZXQgcXVlc3Rpb25Db25qdWdhdGlvbnMgPSBjb25qdWdhdGlvbnMuZmlsdGVyKCBjb25qdWdhdGlvbiA9PiBjb25qdWdhdGlvbi50ZW5zZSA9PT0gY3VycmVudFRlbnNlICYmIGNvbmp1Z2F0aW9uLnZlcmIgPT09IGN1cnJlbnRWZXJiSWQgKTsgIFxyXG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25Db25qdWdhdGlvbnNbMF0pO1xyXG4gICAgbGV0IHNsaWRlQ29uanVnYXRpb25zID0gW107XHJcbiAgICBmb3IoIGNvbnN0IHF1ZXN0aW9uQ29uanVnYXRpb24gaW4gcXVlc3Rpb25Db25qdWdhdGlvbnNbMF0gKSB7XHJcbiAgICAgICAgc2xpZGVDb25qdWdhdGlvbnMgPSBbLi4uc2xpZGVDb25qdWdhdGlvbnMsIHF1ZXN0aW9uQ29uanVnYXRpb24ueW9dO1xyXG4gICAgICAgIHNsaWRlQ29uanVnYXRpb25zID0gWy4uLnNsaWRlQ29uanVnYXRpb25zLCBxdWVzdGlvbkNvbmp1Z2F0aW9uLnR1XTtcclxuICAgICAgICBzbGlkZUNvbmp1Z2F0aW9ucyA9IFsuLi5zbGlkZUNvbmp1Z2F0aW9ucywgcXVlc3Rpb25Db25qdWdhdGlvbi5lbF07XHJcbiAgICAgICAgc2xpZGVDb25qdWdhdGlvbnMgPSBbLi4uc2xpZGVDb25qdWdhdGlvbnMsIHF1ZXN0aW9uQ29uanVnYXRpb24ubm9zb3Ryb3NdO1xyXG4gICAgICAgIHNsaWRlQ29uanVnYXRpb25zID0gWy4uLnNsaWRlQ29uanVnYXRpb25zLCBxdWVzdGlvbkNvbmp1Z2F0aW9uLnZvc290cm9zXTtcclxuICAgICAgICBzbGlkZUNvbmp1Z2F0aW9ucyA9IFsuLi5zbGlkZUNvbmp1Z2F0aW9ucywgcXVlc3Rpb25Db25qdWdhdGlvbi5lbGxvc107XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhzbGlkZUNvbmp1Z2F0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgaW5jcmVtZW50UXVlc3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIHF1ZXN0aW9uIDw9IHF1ZXN0aW9uICkge1xyXG4gICAgICAgICAgICBzZXRRdWVzdGlvbiggcXVlc3Rpb24gKyAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxoMT5WZXJiIFNsaWRlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInNsaWRlclwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+eyBjdXJyZW50VmVyYiB9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicXVlc3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnJpY2tzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmlja3MubWFwKCBicmljayA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+eyBicmljayB9PC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zIGNvbC1sZy0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzdWJtaXRCdG5cIiBvbkNsaWNrPXsgaW5jcmVtZW50UXVlc3Rpb24gfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbFZlcmJzID0gYXdhaXQgcHJpc21hLnZlcmJzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxUZW5zZXMgPSBhd2FpdCBwcmlzbWEudGVuc2VzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxDb25qdWdhdGlvbnMgPSBhd2FpdCBwcmlzbWEuY29uanVnYXRpb25zLmZpbmRNYW55KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHZlcmJzOiBhbGxWZXJicyxcclxuICAgICAgICAgICAgdGVuc2VzOiBhbGxUZW5zZXMsXHJcbiAgICAgICAgICAgIGNvbmp1Z2F0aW9uczogYWxsQ29uanVnYXRpb25zXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2l0ZWhlYWRlciIsIkZvb3RlciIsInJhbmRvbU51bWJlckdlbmVyYXRvciIsIlNsaWRlciIsInZlcmJzIiwidGVuc2VzIiwiY29uanVnYXRpb25zIiwiYnJpY2tTZXRzIiwic2V0QnJpY2tTZXRzIiwic2xpZGVTZXRzIiwic2V0U2xpZGVTZXRzIiwicXVlc3Rpb24iLCJzZXRRdWVzdGlvbiIsImJyaWNrcyIsIm51bVF1ZXN0aW9ucyIsIm51bU9wdGlvbnMiLCJudW1WZXJicyIsImxlbmd0aCIsImluZmluaXRpdmVzIiwicXVlc3Rpb25UZW5zZXMiLCJjdXJyZW50VmVyYklkIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUZW5zZSIsImN1cnJlbnRWZXJiIiwiZmlsdGVyIiwidmVyYiIsImlkIiwiaW5maW5pdGl2ZSIsInF1ZXN0aW9uQ29uanVnYXRpb25zIiwiY29uanVnYXRpb24iLCJ0ZW5zZSIsInNsaWRlQ29uanVnYXRpb25zIiwicXVlc3Rpb25Db25qdWdhdGlvbiIsInlvIiwidHUiLCJlbCIsIm5vc290cm9zIiwidm9zb3Ryb3MiLCJlbGxvcyIsImluY3JlbWVudFF1ZXN0aW9uIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImZpZWxkc2V0IiwiaDIiLCJkaXYiLCJtYXAiLCJicmljayIsImlucHV0IiwidHlwZSIsIm9uQ2xpY2siLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});