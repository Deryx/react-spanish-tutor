"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/vocabulary/slider",{

/***/ "./pages/vocabulary/slider.js":
/*!************************************!*\
  !*** ./pages/vocabulary/slider.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var dictionary = param.dictionary, categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), questionSet = ref[0], setQuestionSet = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref1[0], setQuestion = ref1[1];\n    var numQuestions = 5;\n    var numOptions = 5;\n    var categorySelections = [];\n    var sliderDictionary = dictionary;\n    var dictionaryLength = dictionary.length;\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var slideSets = [];\n        for(var i = 0; i < numOptions; i++){\n            slideSets.push((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, dictionaryLength));\n        }\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            var _loop = function() {\n                var slideSet = _step.value;\n                var set = {};\n                var scrambledSlides = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numOptions, numOptions);\n                set.bricks = slideSet.map(function(slide) {\n                    return sliderDictionary[slide].word;\n                });\n                set.slides = scrambledSlides.map(function(slide) {\n                    return sliderDictionary[slide].translation;\n                });\n                set.slides = [];\n                for(var i = 0; i < numOptions; i++){\n                    var scrambledSlide = scrambledSlides[i];\n                    var slide = slideSet[scrambledSlide];\n                    set.slides = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set.slides).concat([\n                        sliderDictionary[slide].translation\n                    ]);\n                }\n                setQuestionSet(function(current) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(current).concat([\n                        set\n                    ]);\n                });\n            };\n            for(var _iterator = slideSets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n    }, []);\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var category = _step.value;\n            categorySelections.push({\n                id: category.id,\n                category: category.category\n            });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    categorySelections.sort(function(a, b) {\n        return a.category > b.category ? 1 : -1;\n    });\n    categorySelections.unshift({\n        id: \"\",\n        category: \"all\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Vocabulary Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                        id: \"categorySelect\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"category\",\n                                                    children: \"category: \"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                    id: \"category\",\n                                                    name: \"category\",\n                                                    children: categorySelections.map(function(categorySelection, i) {\n                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: categorySelection.id,\n                                                            children: categorySelection.category\n                                                        }, i, false, {\n                                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 41\n                                                        }, _this);\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"slides\",\n                                        children: questionSet.map(function(question) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: question\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 33\n                                            }, _this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"DE7JtGNpSRLmzKOxWAHDsA8vHVU=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z2VzL3ZvY2FidWxhcnkvc2xpZGVyLmpzPzg1YzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgU2l0ZWhlYWRlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvc2l0ZUhlYWRlci50c3gnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9mb290ZXIudHN4JztcclxuaW1wb3J0IHJhbmRvbU51bWJlckdlbmVyYXRvciBmcm9tICcuLi8uLi9oZWxwZXIvdXNlUmFuZG9tTnVtYmVyR2VuZXJhdG9yLnRzeCc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5mdW5jdGlvbiBTbGlkZXIoeyBkaWN0aW9uYXJ5LCBjYXRlZ29yaWVzIH0pIHtcclxuICAgIGNvbnN0IFtxdWVzdGlvblNldCwgc2V0UXVlc3Rpb25TZXRdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKCAwICk7XHJcblxyXG4gICAgY29uc3QgbnVtUXVlc3Rpb25zID0gNTtcclxuICAgIGNvbnN0IG51bU9wdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25zID0gW107XHJcbiAgICBjb25zdCBzbGlkZXJEaWN0aW9uYXJ5ID0gZGljdGlvbmFyeTtcclxuICAgIGNvbnN0IGRpY3Rpb25hcnlMZW5ndGggPSBkaWN0aW9uYXJ5Lmxlbmd0aDtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRRdWVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiggcXVlc3Rpb24gPD0gcXVlc3Rpb24gKSB7XHJcbiAgICAgICAgICAgIHNldFF1ZXN0aW9uKCBxdWVzdGlvbiArIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzbGlkZVNldHMgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtT3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNsaWRlU2V0cy5wdXNoKCByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgZGljdGlvbmFyeUxlbmd0aCApICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihjb25zdCBzbGlkZVNldCBvZiBzbGlkZVNldHMpIHtcclxuICAgICAgICAgICAgbGV0IHNldCA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBzY3JhbWJsZWRTbGlkZXMgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bU9wdGlvbnMsIG51bU9wdGlvbnMgKTtcclxuICAgICAgICAgICAgc2V0LmJyaWNrcyA9IHNsaWRlU2V0Lm1hcCggc2xpZGUgPT4gc2xpZGVyRGljdGlvbmFyeVtzbGlkZV0ud29yZCApO1xyXG4gICAgICAgICAgICBzZXQuc2xpZGVzID0gc2NyYW1ibGVkU2xpZGVzLm1hcCggc2xpZGUgPT4gc2xpZGVyRGljdGlvbmFyeVtzbGlkZV0udHJhbnNsYXRpb24gKVxyXG4gICAgICAgICAgICBzZXQuc2xpZGVzID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1PcHRpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzY3JhbWJsZWRTbGlkZSA9IHNjcmFtYmxlZFNsaWRlc1tpXTtcclxuICAgICAgICAgICAgICAgIGxldCBzbGlkZSA9IHNsaWRlU2V0W3NjcmFtYmxlZFNsaWRlXTtcclxuICAgICAgICAgICAgICAgIHNldC5zbGlkZXMgPSBbLi4uc2V0LnNsaWRlcywgc2xpZGVyRGljdGlvbmFyeVtzbGlkZV0udHJhbnNsYXRpb25dO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRRdWVzdGlvblNldCggY3VycmVudCA9PiBbLi4uY3VycmVudCwgc2V0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZvcihjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3Rpb25zLnB1c2goIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogY2F0ZWdvcnkuaWQsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnkuY2F0ZWdvcnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNhdGVnb3J5U2VsZWN0aW9ucy5zb3J0KChhLCBiKSA9PiBhLmNhdGVnb3J5ID4gYi5jYXRlZ29yeSA/IDEgOiAtMSk7XHJcbiAgICBjYXRlZ29yeVNlbGVjdGlvbnMudW5zaGlmdCh7IGlkOiAnJywgY2F0ZWdvcnk6ICdhbGwnIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxoMT5Wb2NhYnVsYXJ5IFNsaWRlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInNsaWRlclwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGlkPSdjYXRlZ29yeVNlbGVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+PGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yeVwiPmNhdGVnb3J5OiA8L2xhYmVsPjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImNhdGVnb3J5XCIgbmFtZT1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2F0ZWdvcnlTZWxlY3Rpb25zLm1hcCggKCBjYXRlZ29yeVNlbGVjdGlvbiwgaSApID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9eyBpIH0gdmFsdWU9eyBjYXRlZ29yeVNlbGVjdGlvbi5pZCB9PnsgY2F0ZWdvcnlTZWxlY3Rpb24uY2F0ZWdvcnkgfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNsaWRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBxdWVzdGlvblNldC5tYXAoIHF1ZXN0aW9uID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcXVlc3Rpb24gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucyBjb2wtbGctMTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwic3VibWl0QnRuXCIgb25DbGljaz17IGluY3JlbWVudFF1ZXN0aW9uIH0gdmFsdWU9XCJuZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxWb2NhYnVsYXJ5ID0gYXdhaXQgcHJpc21hLndvcmRzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxDYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hLmNhdGVnb3JpZXMuZmluZE1hbnkoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGRpY3Rpb25hcnk6IGFsbFZvY2FidWxhcnksXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IGFsbENhdGVnb3JpZXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTaXRlaGVhZGVyIiwiRm9vdGVyIiwicmFuZG9tTnVtYmVyR2VuZXJhdG9yIiwiU2xpZGVyIiwiZGljdGlvbmFyeSIsImNhdGVnb3JpZXMiLCJxdWVzdGlvblNldCIsInNldFF1ZXN0aW9uU2V0IiwicXVlc3Rpb24iLCJzZXRRdWVzdGlvbiIsIm51bVF1ZXN0aW9ucyIsIm51bU9wdGlvbnMiLCJjYXRlZ29yeVNlbGVjdGlvbnMiLCJzbGlkZXJEaWN0aW9uYXJ5IiwiZGljdGlvbmFyeUxlbmd0aCIsImxlbmd0aCIsImluY3JlbWVudFF1ZXN0aW9uIiwic2xpZGVTZXRzIiwiaSIsInB1c2giLCJzbGlkZVNldCIsInNldCIsInNjcmFtYmxlZFNsaWRlcyIsImJyaWNrcyIsIm1hcCIsInNsaWRlIiwid29yZCIsInNsaWRlcyIsInRyYW5zbGF0aW9uIiwic2NyYW1ibGVkU2xpZGUiLCJjdXJyZW50IiwiY2F0ZWdvcnkiLCJpZCIsInNvcnQiLCJhIiwiYiIsInVuc2hpZnQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiZmllbGRzZXQiLCJkbCIsImR0IiwibGFiZWwiLCJodG1sRm9yIiwiZGQiLCJzZWxlY3QiLCJuYW1lIiwiY2F0ZWdvcnlTZWxlY3Rpb24iLCJvcHRpb24iLCJ2YWx1ZSIsImRpdiIsImlucHV0IiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/vocabulary/slider.js\n"));

/***/ })

});