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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), currentVerb = ref[0], setCurrentVerb = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), conjugationSet = ref1[0], setConjugationSet = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref2[0], setQuestion = ref2[1];\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    var numQuestions = 5;\n    var numOptions = 5;\n    var numVerbs = verbs.length;\n    var infinitives = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, numVerbs);\n    var questionTenses = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length);\n    var currentVerbId = infinitives[question];\n    console.log(verbs);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var scrambledConjugations = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(bricks.length, bricks.length);\n            var currentTense = questionTenses[question];\n            setCurrentVerb(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                    verbs.filter(function(verb) {\n                        return verb.id === currentVerbId;\n                    })[0].infinitive\n                ]);\n            });\n            var questionConjugations = conjugations.filter(function(conjugation) {\n                return conjugation.tense === currentTense && conjugation.verb === currentVerbId;\n            });\n            var currentConjugations = questionConjugations[0];\n            var currentConjugationSet = [];\n            var slideConjugations = [];\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.yo\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.tu\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.el\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.nosotros\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.vosotros\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.ellos\n            ]);\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = scrambledConjugations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var scrambledConjugation = _step.value;\n                    var currentConjugation = slideConjugations[scrambledConjugation];\n                    currentConjugationSet = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currentConjugationSet).concat([\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: currentConjugation\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                            lineNumber: 40,\n                            columnNumber: 68\n                        }, _this)\n                    ]);\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n            setConjugationSet(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                    currentConjugationSet\n                ]);\n            });\n        };\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: currentVerb[question]\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\",\n                                                children: conjugationSet[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"4eOWxwmaeJ4DAj7g6AVbbeOwRF8=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0o7R0ExRVFFLE1BQU07QUFBTkEsS0FBQUEsTUFBTTs7QUF5RmYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92ZXJicy9zbGlkZXIuanM/ZGVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBTaXRlaGVhZGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9zaXRlSGVhZGVyLnRzeCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50c3gnO1xyXG5pbXBvcnQgcmFuZG9tTnVtYmVyR2VuZXJhdG9yIGZyb20gJy4uLy4uL2hlbHBlci91c2VSYW5kb21OdW1iZXJHZW5lcmF0b3IudHN4JztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmZ1bmN0aW9uIFNsaWRlciggeyB2ZXJicywgdGVuc2VzLCBjb25qdWdhdGlvbnMgfSApIHtcclxuICAgIGNvbnN0IFtjdXJyZW50VmVyYiwgc2V0Q3VycmVudFZlcmJdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbY29uanVnYXRpb25TZXQsIHNldENvbmp1Z2F0aW9uU2V0XSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZSggMCApO1xyXG5cclxuICAgIGNvbnN0IGJyaWNrcyA9IFsneW8nLCAndHUnLCAnw6lsL2VsbGEvdWQnLCAnbm9zb3Ryb3MnLCAndm9zb3Ryb3MnLCAnZWxsb3MvZWxsYXMvdWRzJ107XHJcbiAgICBjb25zdCBudW1RdWVzdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgbnVtT3B0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBudW1WZXJicyA9IHZlcmJzLmxlbmd0aDtcclxuICAgIGxldCBpbmZpbml0aXZlcyA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCBudW1WZXJicyApO1xyXG4gICAgbGV0IHF1ZXN0aW9uVGVuc2VzID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIHRlbnNlcy5sZW5ndGggKTtcclxuICAgIGxldCBjdXJyZW50VmVyYklkID0gaW5maW5pdGl2ZXNbcXVlc3Rpb25dO1xyXG4gICAgY29uc29sZS5sb2codmVyYnMpO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGZvciggbGV0IGkgPSAwOyBpIDwgbnVtUXVlc3Rpb25zOyBpKysgKSB7XHJcbiAgICAgICAgICAgIGxldCBzY3JhbWJsZWRDb25qdWdhdGlvbnMgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIGJyaWNrcy5sZW5ndGgsIGJyaWNrcy5sZW5ndGggKTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUZW5zZSA9IHF1ZXN0aW9uVGVuc2VzW3F1ZXN0aW9uXTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFZlcmIoIHByZXYgPT4gWy4uLnByZXYsIHZlcmJzLmZpbHRlciggdmVyYiA9PiB2ZXJiLmlkID09PSBjdXJyZW50VmVyYklkKVswXS5pbmZpbml0aXZlXSApO1xyXG4gICAgICAgICAgICBsZXQgcXVlc3Rpb25Db25qdWdhdGlvbnMgPSBjb25qdWdhdGlvbnMuZmlsdGVyKCBjb25qdWdhdGlvbiA9PiBjb25qdWdhdGlvbi50ZW5zZSA9PT0gY3VycmVudFRlbnNlICYmIGNvbmp1Z2F0aW9uLnZlcmIgPT09IGN1cnJlbnRWZXJiSWQgKTsgIFxyXG4gICAgICAgICAgICBsZXQgY3VycmVudENvbmp1Z2F0aW9ucyA9IHF1ZXN0aW9uQ29uanVnYXRpb25zWzBdO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudENvbmp1Z2F0aW9uU2V0ID0gW107XHJcbiAgICAgICAgICAgIGxldCBzbGlkZUNvbmp1Z2F0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICBzbGlkZUNvbmp1Z2F0aW9ucyA9IFsuLi5zbGlkZUNvbmp1Z2F0aW9ucywgY3VycmVudENvbmp1Z2F0aW9ucy55b107XHJcbiAgICAgICAgICAgIHNsaWRlQ29uanVnYXRpb25zID0gWy4uLnNsaWRlQ29uanVnYXRpb25zLCBjdXJyZW50Q29uanVnYXRpb25zLnR1XTtcclxuICAgICAgICAgICAgc2xpZGVDb25qdWdhdGlvbnMgPSBbLi4uc2xpZGVDb25qdWdhdGlvbnMsIGN1cnJlbnRDb25qdWdhdGlvbnMuZWxdO1xyXG4gICAgICAgICAgICBzbGlkZUNvbmp1Z2F0aW9ucyA9IFsuLi5zbGlkZUNvbmp1Z2F0aW9ucywgY3VycmVudENvbmp1Z2F0aW9ucy5ub3NvdHJvc107XHJcbiAgICAgICAgICAgIHNsaWRlQ29uanVnYXRpb25zID0gWy4uLnNsaWRlQ29uanVnYXRpb25zLCBjdXJyZW50Q29uanVnYXRpb25zLnZvc290cm9zXTtcclxuICAgICAgICAgICAgc2xpZGVDb25qdWdhdGlvbnMgPSBbLi4uc2xpZGVDb25qdWdhdGlvbnMsIGN1cnJlbnRDb25qdWdhdGlvbnMuZWxsb3NdO1xyXG4gICAgICAgICAgICBmb3IoIGNvbnN0IHNjcmFtYmxlZENvbmp1Z2F0aW9uIG9mIHNjcmFtYmxlZENvbmp1Z2F0aW9ucyApIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q29uanVnYXRpb24gPSBzbGlkZUNvbmp1Z2F0aW9uc1tzY3JhbWJsZWRDb25qdWdhdGlvbl07XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uanVnYXRpb25TZXQgPSBbLi4uY3VycmVudENvbmp1Z2F0aW9uU2V0LCA8ZGl2PnsgY3VycmVudENvbmp1Z2F0aW9uIH08L2Rpdj5dO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRDb25qdWdhdGlvblNldCggcHJldiA9PiBbLi4ucHJldiwgY3VycmVudENvbmp1Z2F0aW9uU2V0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudFF1ZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBxdWVzdGlvbiA8PSBxdWVzdGlvbiApIHtcclxuICAgICAgICAgICAgc2V0UXVlc3Rpb24oIHF1ZXN0aW9uICsgMSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8aDE+VmVyYiBTbGlkZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJzbGlkZXJcIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnsgY3VycmVudFZlcmJbcXVlc3Rpb25dIH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJxdWVzdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmlja3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyaWNrcy5tYXAoIGJyaWNrID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57IGJyaWNrIH08L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY29uanVnYXRpb25TZXRbcXVlc3Rpb25dIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zIGNvbC1sZy0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzdWJtaXRCdG5cIiBvbkNsaWNrPXsgaW5jcmVtZW50UXVlc3Rpb24gfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbFZlcmJzID0gYXdhaXQgcHJpc21hLnZlcmJzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxUZW5zZXMgPSBhd2FpdCBwcmlzbWEudGVuc2VzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxDb25qdWdhdGlvbnMgPSBhd2FpdCBwcmlzbWEuY29uanVnYXRpb25zLmZpbmRNYW55KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHZlcmJzOiBhbGxWZXJicyxcclxuICAgICAgICAgICAgdGVuc2VzOiBhbGxUZW5zZXMsXHJcbiAgICAgICAgICAgIGNvbmp1Z2F0aW9uczogYWxsQ29uanVnYXRpb25zXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2l0ZWhlYWRlciIsIkZvb3RlciIsInJhbmRvbU51bWJlckdlbmVyYXRvciIsIlNsaWRlciIsInZlcmJzIiwidGVuc2VzIiwiY29uanVnYXRpb25zIiwiY3VycmVudFZlcmIiLCJzZXRDdXJyZW50VmVyYiIsImNvbmp1Z2F0aW9uU2V0Iiwic2V0Q29uanVnYXRpb25TZXQiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiYnJpY2tzIiwibnVtUXVlc3Rpb25zIiwibnVtT3B0aW9ucyIsIm51bVZlcmJzIiwibGVuZ3RoIiwiaW5maW5pdGl2ZXMiLCJxdWVzdGlvblRlbnNlcyIsImN1cnJlbnRWZXJiSWQiLCJjb25zb2xlIiwibG9nIiwic2NyYW1ibGVkQ29uanVnYXRpb25zIiwiY3VycmVudFRlbnNlIiwicHJldiIsImZpbHRlciIsInZlcmIiLCJpZCIsImluZmluaXRpdmUiLCJxdWVzdGlvbkNvbmp1Z2F0aW9ucyIsImNvbmp1Z2F0aW9uIiwidGVuc2UiLCJjdXJyZW50Q29uanVnYXRpb25zIiwiY3VycmVudENvbmp1Z2F0aW9uU2V0Iiwic2xpZGVDb25qdWdhdGlvbnMiLCJ5byIsInR1IiwiZWwiLCJub3NvdHJvcyIsInZvc290cm9zIiwiZWxsb3MiLCJzY3JhbWJsZWRDb25qdWdhdGlvbiIsImN1cnJlbnRDb25qdWdhdGlvbiIsImRpdiIsImkiLCJpbmNyZW1lbnRRdWVzdGlvbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJmaWVsZHNldCIsImgyIiwibWFwIiwiYnJpY2siLCJpbnB1dCIsInR5cGUiLCJvbkNsaWNrIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});