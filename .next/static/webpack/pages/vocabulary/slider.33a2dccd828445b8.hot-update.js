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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var dictionary = param.dictionary, categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), brickSet = ref[0], setBrickSet = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), slideSet = ref1[0], setSlideSet = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref2[0], setQuestion = ref2[1];\n    var numQuestions = 5;\n    var numOptions = 5;\n    var categorySelections = [];\n    var sliderDictionary = dictionary;\n    var dictionaryLength = dictionary.length;\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var slideSets = [];\n        for(var i = 0; i < numOptions; i++){\n            slideSets.push((0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, dictionaryLength));\n        }\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = slideSets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var slideSet = _step.value;\n                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n                try {\n                    var _loop = function() {\n                        var slide = _step1.value;\n                        var current = [];\n                        for(var i = 0; i < slide.length; i++){\n                            var currentSlide = slide[i];\n                            console.log(currentSlide);\n                            current.push(sliderDictionary[currentSlide]);\n                        }\n                        setBrickSet(function(prev) {\n                            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prev).concat([\n                                current\n                            ]);\n                        });\n                    };\n                    // const scrambledSlides = randomNumberGenerator( numOptions, numOptions );\n                    for(var _iterator1 = slideSet[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop();\n                } catch (err) {\n                    _didIteratorError1 = true;\n                    _iteratorError1 = err;\n                } finally{\n                    try {\n                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {\n                            _iterator1.return();\n                        }\n                    } finally{\n                        if (_didIteratorError1) {\n                            throw _iteratorError1;\n                        }\n                    }\n                }\n            // for( const scrambledSlide of scrambledSlides ) {\n            //     setSlideSet( prev => [...prev, sliderDictionary[scrambledSlide].translation] );\n            // }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n    }, []);\n    console.log({\n        brickSet: brickSet,\n        slideSet: slideSet\n    });\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var category = _step.value;\n            categorySelections.push({\n                id: category.id,\n                category: category.category\n            });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    categorySelections.sort(function(a, b) {\n        return a.category > b.category ? 1 : -1;\n    });\n    categorySelections.unshift({\n        id: \"\",\n        category: \"all\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Vocabulary Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"slider\",\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                        id: \"categorySelect\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"category\",\n                                                    children: \"category: \"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                    id: \"category\",\n                                                    name: \"category\",\n                                                    children: categorySelections.map(function(categorySelection, i) {\n                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: categorySelection.id,\n                                                            children: categorySelection.category\n                                                        }, i, false, {\n                                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                            lineNumber: 74,\n                                                            columnNumber: 41\n                                                        }, _this);\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"questions\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bricks\",\n                                                children: brickSet[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"slides\",\n                                                children: slideSet[question]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                                lineNumber: 83,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    onClick: incrementQuestion,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\slider.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"4eOWxwmaeJ4DAj7g6AVbbeOwRF8=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozt3Q0FBRzs7Ozs7b0NBQy9FOzs7Ozs7NEJBQ0g7Ozs7OztvQkFDRDswQkFDViw4REFBQ2hELGtFQUFNOzs7O29CQUFHOztvQkFDWCxDQUNOO0NBQ0o7R0F2RlFFLE1BQU07QUFBTkEsS0FBQUEsTUFBTTs7QUFxR2YsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92b2NhYnVsYXJ5L3NsaWRlci5qcz84NWM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IFNpdGVoZWFkZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3NpdGVIZWFkZXIudHN4JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeCc7XHJcbmltcG9ydCByYW5kb21OdW1iZXJHZW5lcmF0b3IgZnJvbSAnLi4vLi4vaGVscGVyL3VzZVJhbmRvbU51bWJlckdlbmVyYXRvci50c3gnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZnVuY3Rpb24gU2xpZGVyKHsgZGljdGlvbmFyeSwgY2F0ZWdvcmllcyB9KSB7XHJcbiAgICBjb25zdCBbYnJpY2tTZXQsIHNldEJyaWNrU2V0XSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgW3NsaWRlU2V0LCBzZXRTbGlkZVNldF0gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoIDAgKTtcclxuXHJcbiAgICBjb25zdCBudW1RdWVzdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgbnVtT3B0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbnMgPSBbXTtcclxuICAgIGNvbnN0IHNsaWRlckRpY3Rpb25hcnkgPSBkaWN0aW9uYXJ5O1xyXG4gICAgY29uc3QgZGljdGlvbmFyeUxlbmd0aCA9IGRpY3Rpb25hcnkubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudFF1ZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBxdWVzdGlvbiA8PSBxdWVzdGlvbiApIHtcclxuICAgICAgICAgICAgc2V0UXVlc3Rpb24oIHF1ZXN0aW9uICsgMSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNsaWRlU2V0cyA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1PcHRpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgc2xpZGVTZXRzLnB1c2goIHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCBkaWN0aW9uYXJ5TGVuZ3RoICkgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGNvbnN0IHNsaWRlU2V0IG9mIHNsaWRlU2V0cykge1xyXG4gICAgICAgICAgICAvLyBjb25zdCBzY3JhbWJsZWRTbGlkZXMgPSByYW5kb21OdW1iZXJHZW5lcmF0b3IoIG51bU9wdGlvbnMsIG51bU9wdGlvbnMgKTtcclxuICAgICAgICAgICAgZm9yKCBjb25zdCBzbGlkZSBvZiBzbGlkZVNldCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciggbGV0IGkgPSAwOyBpIDwgc2xpZGUubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTbGlkZSA9IHNsaWRlW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTbGlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5wdXNoKHNsaWRlckRpY3Rpb25hcnlbY3VycmVudFNsaWRlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRCcmlja1NldCggcHJldiA9PiBbLi4ucHJldiwgY3VycmVudF0gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBmb3IoIGNvbnN0IHNjcmFtYmxlZFNsaWRlIG9mIHNjcmFtYmxlZFNsaWRlcyApIHtcclxuICAgICAgICAgICAgLy8gICAgIHNldFNsaWRlU2V0KCBwcmV2ID0+IFsuLi5wcmV2LCBzbGlkZXJEaWN0aW9uYXJ5W3NjcmFtYmxlZFNsaWRlXS50cmFuc2xhdGlvbl0gKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygge2JyaWNrU2V0LCBzbGlkZVNldCB9KVxyXG5cclxuICAgIGZvcihjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3Rpb25zLnB1c2goIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogY2F0ZWdvcnkuaWQsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnkuY2F0ZWdvcnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNhdGVnb3J5U2VsZWN0aW9ucy5zb3J0KChhLCBiKSA9PiBhLmNhdGVnb3J5ID4gYi5jYXRlZ29yeSA/IDEgOiAtMSk7XHJcbiAgICBjYXRlZ29yeVNlbGVjdGlvbnMudW5zaGlmdCh7IGlkOiAnJywgY2F0ZWdvcnk6ICdhbGwnIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxoMT5Wb2NhYnVsYXJ5IFNsaWRlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInNsaWRlclwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGlkPSdjYXRlZ29yeVNlbGVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+PGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yeVwiPmNhdGVnb3J5OiA8L2xhYmVsPjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImNhdGVnb3J5XCIgbmFtZT1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2F0ZWdvcnlTZWxlY3Rpb25zLm1hcCggKCBjYXRlZ29yeVNlbGVjdGlvbiwgaSApID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9eyBpIH0gdmFsdWU9eyBjYXRlZ29yeVNlbGVjdGlvbi5pZCB9PnsgY2F0ZWdvcnlTZWxlY3Rpb24uY2F0ZWdvcnkgfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInF1ZXN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JyaWNrcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBicmlja1NldFtxdWVzdGlvbl0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNsaWRlU2V0W3F1ZXN0aW9uXSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucyBjb2wtbGctMTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwic3VibWl0QnRuXCIgb25DbGljaz17IGluY3JlbWVudFF1ZXN0aW9uIH0gdmFsdWU9XCJuZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxWb2NhYnVsYXJ5ID0gYXdhaXQgcHJpc21hLndvcmRzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxDYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hLmNhdGVnb3JpZXMuZmluZE1hbnkoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGRpY3Rpb25hcnk6IGFsbFZvY2FidWxhcnksXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IGFsbENhdGVnb3JpZXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTaXRlaGVhZGVyIiwiRm9vdGVyIiwicmFuZG9tTnVtYmVyR2VuZXJhdG9yIiwiU2xpZGVyIiwiZGljdGlvbmFyeSIsImNhdGVnb3JpZXMiLCJicmlja1NldCIsInNldEJyaWNrU2V0Iiwic2xpZGVTZXQiLCJzZXRTbGlkZVNldCIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJudW1RdWVzdGlvbnMiLCJudW1PcHRpb25zIiwiY2F0ZWdvcnlTZWxlY3Rpb25zIiwic2xpZGVyRGljdGlvbmFyeSIsImRpY3Rpb25hcnlMZW5ndGgiLCJsZW5ndGgiLCJpbmNyZW1lbnRRdWVzdGlvbiIsInNsaWRlU2V0cyIsImkiLCJwdXNoIiwic2xpZGUiLCJjdXJyZW50IiwiY3VycmVudFNsaWRlIiwiY29uc29sZSIsImxvZyIsInByZXYiLCJjYXRlZ29yeSIsImlkIiwic29ydCIsImEiLCJiIiwidW5zaGlmdCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJmaWVsZHNldCIsImRsIiwiZHQiLCJsYWJlbCIsImh0bWxGb3IiLCJkZCIsInNlbGVjdCIsIm5hbWUiLCJtYXAiLCJjYXRlZ29yeVNlbGVjdGlvbiIsIm9wdGlvbiIsInZhbHVlIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/vocabulary/slider.js\n"));

/***/ })

});