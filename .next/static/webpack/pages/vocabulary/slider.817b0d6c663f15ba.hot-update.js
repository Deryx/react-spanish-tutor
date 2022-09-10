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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var dictionary = param.dictionary, categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), questionSet = ref[0], setQuestionSet = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref1[0], setQuestion = ref1[1];\n    var numQuestions = 5;\n    var numOptions = 5;\n    var categorySelections = [];\n    var sliderDictionary = dictionary;\n    var dictionaryLength = dictionary.length;\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var slideSets = [];\n        for(var i = 0; i < numOptions; i++){\n            slideSets.push((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, dictionaryLength));\n        }\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            var _loop = function() {\n                var slideSet = _step.value;\n                var set = {};\n                var scrambledSlides = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numOptions, numOptions);\n                set.bricks = slideSet.map(function(slide) {\n                    return sliderDictionary[slide].word;\n                });\n                set.slides = scrambledSlides.map(function(slide) {\n                    return sliderDictionary[slide].translation;\n                });\n                set.slides = [];\n                for(var i = 0; i < numOptions; i++){\n                    var scrambledSlide = scrambledSlides[i];\n                    var slide = slideSet[scrambledSlide];\n                    set.slides = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set.slides).concat([\n                        sliderDictionary[slide].translation\n                    ]);\n                }\n                setQuestionSet(function(current) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(current).concat([\n                        set\n                    ]);\n                });\n            };\n            for(var _iterator = slideSets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n    }, []);\n    var bricks = questionSet.map(function(question) {\n        return question.bricks;\n    });\n    var slides = questionSet.map(function(question) {\n        return question.slides;\n    });\n    console.log({\n        bricks: bricks,\n        slides: slides\n    });\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var category = _step.value;\n            categorySelections.push({\n                id: category.id,\n                category: category.category\n            });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    categorySelections.sort(function(a, b) {\n        return a.category > b.category ? 1 : -1;\n    });\n    categorySelections.unshift({\n        id: \"\",\n        category: \"all\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Vocabulary Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    id: \"categorySelect\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"category\",\n                                                children: \"category: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                id: \"category\",\n                                                name: \"category\",\n                                                children: categorySelections.map(function(categorySelection, i) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: categorySelection.id,\n                                                        children: categorySelection.category\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                lineNumber: 85,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"DE7JtGNpSRLmzKOxWAHDsA8vHVU=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEQsa0VBQU07Ozs7b0JBQUc7O29CQUNYLENBQ047Q0FDSjtHQXBGUUUsTUFBTTtBQUFOQSxLQUFBQSxNQUFNOztBQWtHZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZvY2FidWxhcnkvc2xpZGVyLmpzPzg1YzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgU2l0ZWhlYWRlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvc2l0ZUhlYWRlci50c3gnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9mb290ZXIudHN4JztcclxuaW1wb3J0IHJhbmRvbU51bWJlckdlbmVyYXRvciBmcm9tICcuLi8uLi9oZWxwZXIvdXNlUmFuZG9tTnVtYmVyR2VuZXJhdG9yLnRzeCc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5mdW5jdGlvbiBTbGlkZXIoeyBkaWN0aW9uYXJ5LCBjYXRlZ29yaWVzIH0pIHtcclxuICAgIGNvbnN0IFtxdWVzdGlvblNldCwgc2V0UXVlc3Rpb25TZXRdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKCAwICk7XHJcblxyXG4gICAgY29uc3QgbnVtUXVlc3Rpb25zID0gNTtcclxuICAgIGNvbnN0IG51bU9wdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25zID0gW107XHJcbiAgICBjb25zdCBzbGlkZXJEaWN0aW9uYXJ5ID0gZGljdGlvbmFyeTtcclxuICAgIGNvbnN0IGRpY3Rpb25hcnlMZW5ndGggPSBkaWN0aW9uYXJ5Lmxlbmd0aDtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRRdWVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiggcXVlc3Rpb24gPD0gcXVlc3Rpb24gKSB7XHJcbiAgICAgICAgICAgIHNldFF1ZXN0aW9uKCBxdWVzdGlvbiArIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzbGlkZVNldHMgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtT3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNsaWRlU2V0cy5wdXNoKCByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bVF1ZXN0aW9ucywgZGljdGlvbmFyeUxlbmd0aCApICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihjb25zdCBzbGlkZVNldCBvZiBzbGlkZVNldHMpIHtcclxuICAgICAgICAgICAgbGV0IHNldCA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBzY3JhbWJsZWRTbGlkZXMgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bU9wdGlvbnMsIG51bU9wdGlvbnMgKTtcclxuICAgICAgICAgICAgc2V0LmJyaWNrcyA9IHNsaWRlU2V0Lm1hcCggc2xpZGUgPT4gc2xpZGVyRGljdGlvbmFyeVtzbGlkZV0ud29yZCApO1xyXG4gICAgICAgICAgICBzZXQuc2xpZGVzID0gc2NyYW1ibGVkU2xpZGVzLm1hcCggc2xpZGUgPT4gc2xpZGVyRGljdGlvbmFyeVtzbGlkZV0udHJhbnNsYXRpb24gKVxyXG4gICAgICAgICAgICBzZXQuc2xpZGVzID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1PcHRpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzY3JhbWJsZWRTbGlkZSA9IHNjcmFtYmxlZFNsaWRlc1tpXTtcclxuICAgICAgICAgICAgICAgIGxldCBzbGlkZSA9IHNsaWRlU2V0W3NjcmFtYmxlZFNsaWRlXTtcclxuICAgICAgICAgICAgICAgIHNldC5zbGlkZXMgPSBbLi4uc2V0LnNsaWRlcywgc2xpZGVyRGljdGlvbmFyeVtzbGlkZV0udHJhbnNsYXRpb25dO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRRdWVzdGlvblNldCggY3VycmVudCA9PiBbLi4uY3VycmVudCwgc2V0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGJyaWNrcyA9IHF1ZXN0aW9uU2V0Lm1hcCggcXVlc3Rpb24gPT4gcXVlc3Rpb24uYnJpY2tzICk7XHJcbiAgICBjb25zdCBzbGlkZXMgPSBxdWVzdGlvblNldC5tYXAoIHF1ZXN0aW9uID0+IHF1ZXN0aW9uLnNsaWRlcyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coe2JyaWNrcywgc2xpZGVzfSk7XHJcblxyXG4gICAgZm9yKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcclxuICAgICAgICBjYXRlZ29yeVNlbGVjdGlvbnMucHVzaCggXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBjYXRlZ29yeS5pZCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeS5jYXRlZ29yeVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY2F0ZWdvcnlTZWxlY3Rpb25zLnNvcnQoKGEsIGIpID0+IGEuY2F0ZWdvcnkgPiBiLmNhdGVnb3J5ID8gMSA6IC0xKTtcclxuICAgIGNhdGVnb3J5U2VsZWN0aW9ucy51bnNoaWZ0KHsgaWQ6ICcnLCBjYXRlZ29yeTogJ2FsbCcgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGgxPlZvY2FidWxhcnkgU2xpZGVyPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwic2xpZGVyXCIgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS04IGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGwgaWQ9J2NhdGVnb3J5U2VsZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD48bGFiZWwgaHRtbEZvcj1cImNhdGVnb3J5XCI+Y2F0ZWdvcnk6IDwvbGFiZWw+PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiY2F0ZWdvcnlcIiBuYW1lPVwiY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYXRlZ29yeVNlbGVjdGlvbnMubWFwKCAoIGNhdGVnb3J5U2VsZWN0aW9uLCBpICkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17IGkgfSB2YWx1ZT17IGNhdGVnb3J5U2VsZWN0aW9uLmlkIH0+eyBjYXRlZ29yeVNlbGVjdGlvbi5jYXRlZ29yeSB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBpZD1cInNsaWRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHF1ZXN0aW9uU2V0WzBdLmJyaWNrcyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMgY29sLWxnLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cInN1Ym1pdEJ0blwiIG9uQ2xpY2s9eyBpbmNyZW1lbnRRdWVzdGlvbiB9IHZhbHVlPVwibmV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgY29uc3QgYWxsVm9jYWJ1bGFyeSA9IGF3YWl0IHByaXNtYS53b3Jkcy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IGF3YWl0IHByaXNtYS5jYXRlZ29yaWVzLmZpbmRNYW55KCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBkaWN0aW9uYXJ5OiBhbGxWb2NhYnVsYXJ5LFxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBhbGxDYXRlZ29yaWVzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2l0ZWhlYWRlciIsIkZvb3RlciIsInJhbmRvbU51bWJlckdlbmVyYXRvciIsIlNsaWRlciIsImRpY3Rpb25hcnkiLCJjYXRlZ29yaWVzIiwicXVlc3Rpb25TZXQiLCJzZXRRdWVzdGlvblNldCIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJudW1RdWVzdGlvbnMiLCJudW1PcHRpb25zIiwiY2F0ZWdvcnlTZWxlY3Rpb25zIiwic2xpZGVyRGljdGlvbmFyeSIsImRpY3Rpb25hcnlMZW5ndGgiLCJsZW5ndGgiLCJpbmNyZW1lbnRRdWVzdGlvbiIsInNsaWRlU2V0cyIsImkiLCJwdXNoIiwic2xpZGVTZXQiLCJzZXQiLCJzY3JhbWJsZWRTbGlkZXMiLCJicmlja3MiLCJtYXAiLCJzbGlkZSIsIndvcmQiLCJzbGlkZXMiLCJ0cmFuc2xhdGlvbiIsInNjcmFtYmxlZFNsaWRlIiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJjYXRlZ29yeSIsImlkIiwic29ydCIsImEiLCJiIiwidW5zaGlmdCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJmaWVsZHNldCIsImRsIiwiZHQiLCJsYWJlbCIsImh0bWxGb3IiLCJkZCIsInNlbGVjdCIsIm5hbWUiLCJjYXRlZ29yeVNlbGVjdGlvbiIsIm9wdGlvbiIsInZhbHVlIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/vocabulary/slider.js\n"));

/***/ })

});