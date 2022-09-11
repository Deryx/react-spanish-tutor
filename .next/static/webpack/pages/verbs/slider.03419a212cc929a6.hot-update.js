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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    var _this = this;\n    _s();\n    var numQuestions = 5;\n    var numOptions = 5;\n    var bricks = [\n        \"yo\",\n        \"tu\",\n        \"\\xe9l/ella/ud\",\n        \"nosotros\",\n        \"vosotros\",\n        \"ellos/ellas/uds\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref[0], setQuestion = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), infinitives = ref1[0], setInfinitives = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), slideSets = ref2[0], setSlideSets = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var randomIndices = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, verbs.length);\n        var verbIds = [];\n        var randomInfinitives = [];\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            var _loop = function() {\n                var index = _step.value;\n                verbIds = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(verbIds).concat([\n                    verbs.filter(function(verb) {\n                        return verb.id === index;\n                    })[0].id\n                ]);\n            };\n            for(var _iterator = randomIndices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n        try {\n            var _loop1 = function() {\n                var id = _step1.value;\n                randomInfinitives = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(randomInfinitives).concat([\n                    verbs.filter(function(verb) {\n                        return verb.id === id;\n                    })[0].infinitive\n                ]);\n            };\n            for(var _iterator1 = verbIds[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop1();\n        } catch (err) {\n            _didIteratorError1 = true;\n            _iteratorError1 = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                    _iterator1.return();\n                }\n            } finally{\n                if (_didIteratorError1) {\n                    throw _iteratorError1;\n                }\n            }\n        }\n        setInfinitives(function(prev) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                randomInfinitives\n            ]);\n        });\n    }, []);\n    console.log(infinitives);\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \" tense\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: bricks.map(function(brick) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: brick\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"PN0Z4/ofV0GVvLr/FdcCVZhkbL8=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtFQUFNOzs7O29CQUFHOztvQkFDWCxDQUNOO0NBQ0o7R0EzRFFFLE1BQU07QUFBTkEsS0FBQUEsTUFBTTs7QUEwRWYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92ZXJicy9zbGlkZXIuanM/ZGVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBTaXRlaGVhZGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9zaXRlSGVhZGVyLnRzeCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50c3gnO1xyXG5pbXBvcnQgcmFuZG9tTnVtYmVyR2VuZXJhdG9yIGZyb20gJy4uLy4uL2hlbHBlci91c2VSYW5kb21OdW1iZXJHZW5lcmF0b3IudHN4JztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmZ1bmN0aW9uIFNsaWRlciggeyB2ZXJicywgdGVuc2VzLCBjb25qdWdhdGlvbnMgfSApIHtcclxuICAgIGNvbnN0IG51bVF1ZXN0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBudW1PcHRpb25zID0gNTtcclxuICAgIGNvbnN0IGJyaWNrcyA9IFsneW8nLCAndHUnLCAnw6lsL2VsbGEvdWQnLCAnbm9zb3Ryb3MnLCAndm9zb3Ryb3MnLCAnZWxsb3MvZWxsYXMvdWRzJ107XHJcbiAgICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKCAwICk7XHJcbiAgICBjb25zdCBbaW5maW5pdGl2ZXMsIHNldEluZmluaXRpdmVzXSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgW3NsaWRlU2V0cywgc2V0U2xpZGVTZXRzXSA9IHVzZVN0YXRlKCBbXSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGljZXMgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgdmVyYnMubGVuZ3RoICk7XHJcbiAgICAgICAgbGV0IHZlcmJJZHMgPSBbXTtcclxuICAgICAgICBsZXQgcmFuZG9tSW5maW5pdGl2ZXMgPSBbXTtcclxuICAgICAgICBmb3IoIGNvbnN0IGluZGV4IG9mIHJhbmRvbUluZGljZXMgKSB7XHJcbiAgICAgICAgICAgIHZlcmJJZHMgPSBbLi4udmVyYklkcywgdmVyYnMuZmlsdGVyKCB2ZXJiID0+IHZlcmIuaWQgPT09IGluZGV4IClbMF0uaWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IoIGNvbnN0IGlkIG9mIHZlcmJJZHMgKSB7XHJcbiAgICAgICAgICAgIHJhbmRvbUluZmluaXRpdmVzID0gWy4uLnJhbmRvbUluZmluaXRpdmVzLCB2ZXJicy5maWx0ZXIoIHZlcmIgPT4gdmVyYi5pZCA9PT0gaWQpWzBdLmluZmluaXRpdmVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJbmZpbml0aXZlcyggcHJldiA9PiBbLi4ucHJldiwgcmFuZG9tSW5maW5pdGl2ZXNdKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnNvbGUubG9nKGluZmluaXRpdmVzKTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRRdWVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiggcXVlc3Rpb24gPD0gcXVlc3Rpb24gKSB7XHJcbiAgICAgICAgICAgIHNldFF1ZXN0aW9uKCBxdWVzdGlvbiArIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGgxPlZlcmIgU2xpZGVyPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwic2xpZGVyXCIgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS04IGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57ICB9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57ICB9IHRlbnNlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicXVlc3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnJpY2tzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmlja3MubWFwKCBicmljayA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+eyBicmljayB9PC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucyBjb2wtbGctMTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwic3VibWl0QnRuXCIgb25DbGljaz17IGluY3JlbWVudFF1ZXN0aW9uIH0gdmFsdWU9XCJuZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxWZXJicyA9IGF3YWl0IHByaXNtYS52ZXJicy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsVGVuc2VzID0gYXdhaXQgcHJpc21hLnRlbnNlcy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsQ29uanVnYXRpb25zID0gYXdhaXQgcHJpc21hLmNvbmp1Z2F0aW9ucy5maW5kTWFueSgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2ZXJiczogYWxsVmVyYnMsXHJcbiAgICAgICAgICAgIHRlbnNlczogYWxsVGVuc2VzLFxyXG4gICAgICAgICAgICBjb25qdWdhdGlvbnM6IGFsbENvbmp1Z2F0aW9uc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNpdGVoZWFkZXIiLCJGb290ZXIiLCJyYW5kb21OdW1iZXJHZW5lcmF0b3IiLCJTbGlkZXIiLCJ2ZXJicyIsInRlbnNlcyIsImNvbmp1Z2F0aW9ucyIsIm51bVF1ZXN0aW9ucyIsIm51bU9wdGlvbnMiLCJicmlja3MiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiaW5maW5pdGl2ZXMiLCJzZXRJbmZpbml0aXZlcyIsInNsaWRlU2V0cyIsInNldFNsaWRlU2V0cyIsInJhbmRvbUluZGljZXMiLCJsZW5ndGgiLCJ2ZXJiSWRzIiwicmFuZG9tSW5maW5pdGl2ZXMiLCJpbmRleCIsImZpbHRlciIsInZlcmIiLCJpZCIsImluZmluaXRpdmUiLCJwcmV2IiwiY29uc29sZSIsImxvZyIsImluY3JlbWVudFF1ZXN0aW9uIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImZpZWxkc2V0IiwiaDIiLCJoMyIsImRpdiIsIm1hcCIsImJyaWNrIiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});