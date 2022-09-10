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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var dictionary = param.dictionary, categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), questionSet = ref[0], setQuestionSet = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref1[0], setQuestion = ref1[1];\n    var numQuestions = 5;\n    var numOptions = 5;\n    var categorySelections = [];\n    var sliderDictionary = dictionary;\n    var dictionaryLength = dictionary.length;\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var slideSets = [];\n        for(var i = 0; i < numOptions; i++){\n            slideSets.push((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, dictionaryLength));\n        }\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            var _loop = function() {\n                var slideSet = _step.value;\n                var set = {};\n                var scrambledSlides = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numOptions, numOptions);\n                set.bricks = slideSet.map(function(slide) {\n                    return sliderDictionary[slide].word;\n                });\n                set.slides = scrambledSlides.map(function(slide) {\n                    return sliderDictionary[slide].translation;\n                });\n                set.slides = [];\n                for(var i = 0; i < numOptions; i++){\n                    var scrambledSlide = scrambledSlides[i];\n                    var slide = slideSet[scrambledSlide];\n                    set.slides = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(set.slides).concat([\n                        sliderDictionary[slide].translation\n                    ]);\n                }\n                setQuestionSet(function(current) {\n                    return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(current).concat([\n                        set\n                    ]);\n                });\n            };\n            for(var _iterator = slideSets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n    }, []);\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var category = _step.value;\n            categorySelections.push({\n                id: category.id,\n                category: category.category\n            });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    categorySelections.sort(function(a, b) {\n        return a.category > b.category ? 1 : -1;\n    });\n    categorySelections.unshift({\n        id: \"\",\n        category: \"all\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Vocabulary Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                        id: \"categorySelect\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"category\",\n                                                    children: \"category: \"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                    id: \"category\",\n                                                    name: \"category\",\n                                                    children: categorySelections.map(function(categorySelection, i) {\n                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: categorySelection.id,\n                                                            children: categorySelection.category\n                                                        }, i, false, {\n                                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 41\n                                                        }, _this);\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"slides\",\n                                        children: questionSet.map(function(bricks) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    bricks,\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 33\n                                            }, _this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"DE7JtGNpSRLmzKOxWAHDsA8vHVU=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL19OX0UvLi9wYWdlcy92b2NhYnVsYXJ5L3NsaWRlci5qcz84NWM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IFNpdGVoZWFkZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3NpdGVIZWFkZXIudHN4JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeCc7XHJcbmltcG9ydCByYW5kb21OdW1iZXJHZW5lcmF0b3IgZnJvbSAnLi4vLi4vaGVscGVyL3VzZVJhbmRvbU51bWJlckdlbmVyYXRvci50c3gnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZnVuY3Rpb24gU2xpZGVyKHsgZGljdGlvbmFyeSwgY2F0ZWdvcmllcyB9KSB7XHJcbiAgICBjb25zdCBbcXVlc3Rpb25TZXQsIHNldFF1ZXN0aW9uU2V0XSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZSggMCApO1xyXG5cclxuICAgIGNvbnN0IG51bVF1ZXN0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBudW1PcHRpb25zID0gNTtcclxuICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9ucyA9IFtdO1xyXG4gICAgY29uc3Qgc2xpZGVyRGljdGlvbmFyeSA9IGRpY3Rpb25hcnk7XHJcbiAgICBjb25zdCBkaWN0aW9uYXJ5TGVuZ3RoID0gZGljdGlvbmFyeS5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgaW5jcmVtZW50UXVlc3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIHF1ZXN0aW9uIDw9IHF1ZXN0aW9uICkge1xyXG4gICAgICAgICAgICBzZXRRdWVzdGlvbiggcXVlc3Rpb24gKyAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVTZXRzID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG51bU9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICBzbGlkZVNldHMucHVzaCggcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1RdWVzdGlvbnMsIGRpY3Rpb25hcnlMZW5ndGggKSApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IoY29uc3Qgc2xpZGVTZXQgb2Ygc2xpZGVTZXRzKSB7XHJcbiAgICAgICAgICAgIGxldCBzZXQgPSB7fTtcclxuICAgICAgICAgICAgY29uc3Qgc2NyYW1ibGVkU2xpZGVzID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKCBudW1PcHRpb25zLCBudW1PcHRpb25zICk7XHJcbiAgICAgICAgICAgIHNldC5icmlja3MgPSBzbGlkZVNldC5tYXAoIHNsaWRlID0+IHNsaWRlckRpY3Rpb25hcnlbc2xpZGVdLndvcmQgKTtcclxuICAgICAgICAgICAgc2V0LnNsaWRlcyA9IHNjcmFtYmxlZFNsaWRlcy5tYXAoIHNsaWRlID0+IHNsaWRlckRpY3Rpb25hcnlbc2xpZGVdLnRyYW5zbGF0aW9uIClcclxuICAgICAgICAgICAgc2V0LnNsaWRlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtT3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2NyYW1ibGVkU2xpZGUgPSBzY3JhbWJsZWRTbGlkZXNbaV07XHJcbiAgICAgICAgICAgICAgICBsZXQgc2xpZGUgPSBzbGlkZVNldFtzY3JhbWJsZWRTbGlkZV07XHJcbiAgICAgICAgICAgICAgICBzZXQuc2xpZGVzID0gWy4uLnNldC5zbGlkZXMsIHNsaWRlckRpY3Rpb25hcnlbc2xpZGVdLnRyYW5zbGF0aW9uXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0UXVlc3Rpb25TZXQoIGN1cnJlbnQgPT4gWy4uLmN1cnJlbnQsIHNldF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmb3IoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0aW9ucy5wdXNoKCBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGNhdGVnb3J5LmlkLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LmNhdGVnb3J5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXRlZ29yeVNlbGVjdGlvbnMuc29ydCgoYSwgYikgPT4gYS5jYXRlZ29yeSA+IGIuY2F0ZWdvcnkgPyAxIDogLTEpO1xyXG4gICAgY2F0ZWdvcnlTZWxlY3Rpb25zLnVuc2hpZnQoeyBpZDogJycsIGNhdGVnb3J5OiAnYWxsJyB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8aDE+Vm9jYWJ1bGFyeSBTbGlkZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJzbGlkZXJcIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbCBpZD0nY2F0ZWdvcnlTZWxlY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PjxsYWJlbCBodG1sRm9yPVwiY2F0ZWdvcnlcIj5jYXRlZ29yeTogPC9sYWJlbD48L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJjYXRlZ29yeVwiIG5hbWU9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhdGVnb3J5U2VsZWN0aW9ucy5tYXAoICggY2F0ZWdvcnlTZWxlY3Rpb24sIGkgKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXsgaSB9IHZhbHVlPXsgY2F0ZWdvcnlTZWxlY3Rpb24uaWQgfT57IGNhdGVnb3J5U2VsZWN0aW9uLmNhdGVnb3J5IH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzbGlkZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcXVlc3Rpb25TZXQubWFwKCBicmlja3MgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnsgYnJpY2tzIH0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zIGNvbC1sZy0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzdWJtaXRCdG5cIiBvbkNsaWNrPXsgaW5jcmVtZW50UXVlc3Rpb24gfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbFZvY2FidWxhcnkgPSBhd2FpdCBwcmlzbWEud29yZHMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBhd2FpdCBwcmlzbWEuY2F0ZWdvcmllcy5maW5kTWFueSgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZGljdGlvbmFyeTogYWxsVm9jYWJ1bGFyeSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogYWxsQ2F0ZWdvcmllc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNpdGVoZWFkZXIiLCJGb290ZXIiLCJyYW5kb21OdW1iZXJHZW5lcmF0b3IiLCJTbGlkZXIiLCJkaWN0aW9uYXJ5IiwiY2F0ZWdvcmllcyIsInF1ZXN0aW9uU2V0Iiwic2V0UXVlc3Rpb25TZXQiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwibnVtUXVlc3Rpb25zIiwibnVtT3B0aW9ucyIsImNhdGVnb3J5U2VsZWN0aW9ucyIsInNsaWRlckRpY3Rpb25hcnkiLCJkaWN0aW9uYXJ5TGVuZ3RoIiwibGVuZ3RoIiwiaW5jcmVtZW50UXVlc3Rpb24iLCJzbGlkZVNldHMiLCJpIiwicHVzaCIsInNsaWRlU2V0Iiwic2V0Iiwic2NyYW1ibGVkU2xpZGVzIiwiYnJpY2tzIiwibWFwIiwic2xpZGUiLCJ3b3JkIiwic2xpZGVzIiwidHJhbnNsYXRpb24iLCJzY3JhbWJsZWRTbGlkZSIsImN1cnJlbnQiLCJjYXRlZ29yeSIsImlkIiwic29ydCIsImEiLCJiIiwidW5zaGlmdCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJmaWVsZHNldCIsImRsIiwiZHQiLCJsYWJlbCIsImh0bWxGb3IiLCJkZCIsInNlbGVjdCIsIm5hbWUiLCJjYXRlZ29yeVNlbGVjdGlvbiIsIm9wdGlvbiIsInZhbHVlIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/vocabulary/slider.js\n"));

/***/ })

});