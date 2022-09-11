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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var numQuestions = 5;\n    var numOptions = 5;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), currentVerb = ref[0], setCurrentVerb = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), conjugationSet = ref1[0], setConjugationSet = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, tenses.length)), currentTense = ref2[0], setCurrentTense = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref3[0], setQuestion = ref3[1];\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    var numVerbs = verbs.length;\n    var infinitives = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, numVerbs);\n    var currentVerbId = infinitives[question];\n    console.log(verbs);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            var scrambledConjugations = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(bricks.length, bricks.length);\n            setCurrentTense(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                    tense[question]\n                ]);\n            });\n            setCurrentVerb(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                    verbs.filter(function(verb) {\n                        return verb.id === currentVerbId;\n                    })[0].infinitive\n                ]);\n            });\n            var questionConjugations = conjugations.filter(function(conjugation) {\n                return conjugation.tense === currentTense && conjugation.verb === currentVerbId;\n            });\n            var currentConjugations = questionConjugations[0];\n            var currentConjugationSet = [];\n            var slideConjugations = [];\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.yo\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.tu\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.el\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.nosotros\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.vosotros\n            ]);\n            slideConjugations = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(slideConjugations).concat([\n                currentConjugations.ellos\n            ]);\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = scrambledConjugations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var scrambledConjugation = _step.value;\n                    var currentConjugation = slideConjugations[scrambledConjugation];\n                    currentConjugationSet = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currentConjugationSet).concat([\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: currentConjugation\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                            lineNumber: 40,\n                            columnNumber: 68\n                        }, _this)\n                    ]);\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n            setConjugationSet(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                    currentConjugationSet\n                ]);\n            });\n        };\n        for(var i = 0; i < numQuestions; i++)_loop(i);\n    }, []);\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: currentVerb[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: [\n                                                    currentTense,\n                                                    \" tense\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\",\n                                                children: conjugationSet[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"7yEtYcqfXw5auBGzDUzQ0UxovUc=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxtQkFBbUI7MENBQzlCLDRFQUFDUSxPQUFLO29DQUFDQyxJQUFJLEVBQUMsUUFBUTtvQ0FBQzVCLEVBQUUsRUFBQyxXQUFXO29DQUFDNkIsT0FBTyxFQUFHWixpQkFBaUI7b0NBQUdhLEtBQUssRUFBQyxNQUFNOzs7Ozt3Q0FBRzs7Ozs7b0NBQy9FOzs7Ozs7NEJBQ0g7Ozs7OztvQkFDRDswQkFDViw4REFBQzFELGtFQUFNOzs7O29CQUFHOztvQkFDWCxDQUNOO0NBQ0o7R0EzRVFFLE1BQU07QUFBTkEsS0FBQUEsTUFBTTs7QUEwRmYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92ZXJicy9zbGlkZXIuanM/ZGVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBTaXRlaGVhZGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9zaXRlSGVhZGVyLnRzeCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50c3gnO1xyXG5pbXBvcnQgcmFuZG9tTnVtYmVyR2VuZXJhdG9yIGZyb20gJy4uLy4uL2hlbHBlci91c2VSYW5kb21OdW1iZXJHZW5lcmF0b3IudHN4JztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmZ1bmN0aW9uIFNsaWRlciggeyB2ZXJicywgdGVuc2VzLCBjb25qdWdhdGlvbnMgfSApIHtcclxuICAgIGNvbnN0IG51bVF1ZXN0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBudW1PcHRpb25zID0gNTtcclxuICAgIGNvbnN0IFtjdXJyZW50VmVyYiwgc2V0Q3VycmVudFZlcmJdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbY29uanVnYXRpb25TZXQsIHNldENvbmp1Z2F0aW9uU2V0XSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRUZW5zZSwgc2V0Q3VycmVudFRlbnNlXSA9IHVzZVN0YXRlKCByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgdGVuc2VzLmxlbmd0aCApICk7XHJcbiAgICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKCAwICk7XHJcblxyXG4gICAgY29uc3QgYnJpY2tzID0gWyd5bycsICd0dScsICfDqWwvZWxsYS91ZCcsICdub3NvdHJvcycsICd2b3NvdHJvcycsICdlbGxvcy9lbGxhcy91ZHMnXTtcclxuICAgIGNvbnN0IG51bVZlcmJzID0gdmVyYnMubGVuZ3RoO1xyXG4gICAgbGV0IGluZmluaXRpdmVzID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIG51bVZlcmJzICk7XHJcbiAgICBsZXQgY3VycmVudFZlcmJJZCA9IGluZmluaXRpdmVzW3F1ZXN0aW9uXTtcclxuICAgIGNvbnNvbGUubG9nKHZlcmJzKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBmb3IoIGxldCBpID0gMDsgaSA8IG51bVF1ZXN0aW9uczsgaSsrICkge1xyXG4gICAgICAgICAgICBsZXQgc2NyYW1ibGVkQ29uanVnYXRpb25zID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBicmlja3MubGVuZ3RoLCBicmlja3MubGVuZ3RoICk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRUZW5zZSggcHJldiA9PiBbLi4ucHJldiwgdGVuc2VbcXVlc3Rpb25dXSApO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VmVyYiggcHJldiA9PiBbLi4ucHJldiwgdmVyYnMuZmlsdGVyKCB2ZXJiID0+IHZlcmIuaWQgPT09IGN1cnJlbnRWZXJiSWQpWzBdLmluZmluaXRpdmVdICk7XHJcbiAgICAgICAgICAgIGxldCBxdWVzdGlvbkNvbmp1Z2F0aW9ucyA9IGNvbmp1Z2F0aW9ucy5maWx0ZXIoIGNvbmp1Z2F0aW9uID0+IGNvbmp1Z2F0aW9uLnRlbnNlID09PSBjdXJyZW50VGVuc2UgJiYgY29uanVnYXRpb24udmVyYiA9PT0gY3VycmVudFZlcmJJZCApOyAgXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q29uanVnYXRpb25zID0gcXVlc3Rpb25Db25qdWdhdGlvbnNbMF07XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q29uanVnYXRpb25TZXQgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHNsaWRlQ29uanVnYXRpb25zID0gW107XHJcbiAgICAgICAgICAgIHNsaWRlQ29uanVnYXRpb25zID0gWy4uLnNsaWRlQ29uanVnYXRpb25zLCBjdXJyZW50Q29uanVnYXRpb25zLnlvXTtcclxuICAgICAgICAgICAgc2xpZGVDb25qdWdhdGlvbnMgPSBbLi4uc2xpZGVDb25qdWdhdGlvbnMsIGN1cnJlbnRDb25qdWdhdGlvbnMudHVdO1xyXG4gICAgICAgICAgICBzbGlkZUNvbmp1Z2F0aW9ucyA9IFsuLi5zbGlkZUNvbmp1Z2F0aW9ucywgY3VycmVudENvbmp1Z2F0aW9ucy5lbF07XHJcbiAgICAgICAgICAgIHNsaWRlQ29uanVnYXRpb25zID0gWy4uLnNsaWRlQ29uanVnYXRpb25zLCBjdXJyZW50Q29uanVnYXRpb25zLm5vc290cm9zXTtcclxuICAgICAgICAgICAgc2xpZGVDb25qdWdhdGlvbnMgPSBbLi4uc2xpZGVDb25qdWdhdGlvbnMsIGN1cnJlbnRDb25qdWdhdGlvbnMudm9zb3Ryb3NdO1xyXG4gICAgICAgICAgICBzbGlkZUNvbmp1Z2F0aW9ucyA9IFsuLi5zbGlkZUNvbmp1Z2F0aW9ucywgY3VycmVudENvbmp1Z2F0aW9ucy5lbGxvc107XHJcbiAgICAgICAgICAgIGZvciggY29uc3Qgc2NyYW1ibGVkQ29uanVnYXRpb24gb2Ygc2NyYW1ibGVkQ29uanVnYXRpb25zICkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDb25qdWdhdGlvbiA9IHNsaWRlQ29uanVnYXRpb25zW3NjcmFtYmxlZENvbmp1Z2F0aW9uXTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb25qdWdhdGlvblNldCA9IFsuLi5jdXJyZW50Q29uanVnYXRpb25TZXQsIDxkaXY+eyBjdXJyZW50Q29uanVnYXRpb24gfTwvZGl2Pl07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldENvbmp1Z2F0aW9uU2V0KCBwcmV2ID0+IFsuLi5wcmV2LCBjdXJyZW50Q29uanVnYXRpb25TZXRdKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaW5jcmVtZW50UXVlc3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIHF1ZXN0aW9uIDw9IHF1ZXN0aW9uICkge1xyXG4gICAgICAgICAgICBzZXRRdWVzdGlvbiggcXVlc3Rpb24gKyAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxoMT5WZXJiIFNsaWRlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInNsaWRlclwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+eyBjdXJyZW50VmVyYltxdWVzdGlvbl0gfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+eyBjdXJyZW50VGVuc2UgfSB0ZW5zZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInF1ZXN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JyaWNrcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJpY2tzLm1hcCggYnJpY2sgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnsgYnJpY2sgfTwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjb25qdWdhdGlvblNldFtxdWVzdGlvbl0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMgY29sLWxnLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cInN1Ym1pdEJ0blwiIG9uQ2xpY2s9eyBpbmNyZW1lbnRRdWVzdGlvbiB9IHZhbHVlPVwibmV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgY29uc3QgYWxsVmVyYnMgPSBhd2FpdCBwcmlzbWEudmVyYnMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbFRlbnNlcyA9IGF3YWl0IHByaXNtYS50ZW5zZXMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbENvbmp1Z2F0aW9ucyA9IGF3YWl0IHByaXNtYS5jb25qdWdhdGlvbnMuZmluZE1hbnkoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdmVyYnM6IGFsbFZlcmJzLFxyXG4gICAgICAgICAgICB0ZW5zZXM6IGFsbFRlbnNlcyxcclxuICAgICAgICAgICAgY29uanVnYXRpb25zOiBhbGxDb25qdWdhdGlvbnNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTaXRlaGVhZGVyIiwiRm9vdGVyIiwicmFuZG9tTnVtYmVyR2VuZXJhdG9yIiwiU2xpZGVyIiwidmVyYnMiLCJ0ZW5zZXMiLCJjb25qdWdhdGlvbnMiLCJudW1RdWVzdGlvbnMiLCJudW1PcHRpb25zIiwiY3VycmVudFZlcmIiLCJzZXRDdXJyZW50VmVyYiIsImNvbmp1Z2F0aW9uU2V0Iiwic2V0Q29uanVnYXRpb25TZXQiLCJsZW5ndGgiLCJjdXJyZW50VGVuc2UiLCJzZXRDdXJyZW50VGVuc2UiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiYnJpY2tzIiwibnVtVmVyYnMiLCJpbmZpbml0aXZlcyIsImN1cnJlbnRWZXJiSWQiLCJjb25zb2xlIiwibG9nIiwic2NyYW1ibGVkQ29uanVnYXRpb25zIiwicHJldiIsInRlbnNlIiwiZmlsdGVyIiwidmVyYiIsImlkIiwiaW5maW5pdGl2ZSIsInF1ZXN0aW9uQ29uanVnYXRpb25zIiwiY29uanVnYXRpb24iLCJjdXJyZW50Q29uanVnYXRpb25zIiwiY3VycmVudENvbmp1Z2F0aW9uU2V0Iiwic2xpZGVDb25qdWdhdGlvbnMiLCJ5byIsInR1IiwiZWwiLCJub3NvdHJvcyIsInZvc290cm9zIiwiZWxsb3MiLCJzY3JhbWJsZWRDb25qdWdhdGlvbiIsImN1cnJlbnRDb25qdWdhdGlvbiIsImRpdiIsImkiLCJpbmNyZW1lbnRRdWVzdGlvbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJmaWVsZHNldCIsImgyIiwiaDMiLCJtYXAiLCJicmljayIsImlucHV0IiwidHlwZSIsIm9uQ2xpY2siLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});