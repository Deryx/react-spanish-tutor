"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/slideShow */ \"./src/components/slideShow.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Index = function() {\n    _s();\n    var slides = [\n        {\n            image: \"/images/home/Flag-Argentina.webp\",\n            caption: \"Argentina\"\n        },\n        {\n            image: \"/images/home/Flag-Bolivia.webp\",\n            caption: \"Bolivia\"\n        },\n        {\n            image: \"/images/home/Flag-Chile.webp\",\n            caption: \"Chile\"\n        },\n        {\n            image: \"/images/home/Flag-Colombia.webp\",\n            caption: \"Colombia\"\n        },\n        {\n            image: \"/images/home/Flag-Costa-Rica.webp\",\n            caption: \"Costa Rica\"\n        },\n        {\n            image: \"/images/home/Flag-Dominican-Republic.webp\",\n            caption: \"Dominican Republic\"\n        },\n        {\n            image: \"/images/home/Flag-Ecuador.webp\",\n            caption: \"Ecuador\"\n        },\n        {\n            image: \"/images/home/Flag-El-Salvador.webp\",\n            caption: \"El Salvador\"\n        },\n        {\n            image: \"/images/home/Flag-Equatorial Guinea.webp\",\n            caption: \"Ecquatorial Guinea\"\n        },\n        {\n            image: \"/images/home/Flag-Guatemala.webp\",\n            caption: \"Guatemala\"\n        },\n        {\n            image: \"/images/home/Flag-Honduras.webp\",\n            caption: \"Honduras\"\n        },\n        {\n            image: \"/images/home/Flag-Mexico.webp\",\n            caption: \"Mexico\"\n        },\n        {\n            image: \"/images/home/Flag-Nicaragua.webp\",\n            caption: \"Nicaragua\"\n        },\n        {\n            image: \"/images/home/Flag-Panama.webp\",\n            caption: \"Panama\"\n        },\n        {\n            image: \"/images/home/Flag-Paraguay.webp\",\n            caption: \"Paraguay\"\n        },\n        {\n            image: \"/images/home/Flag-Peru.webp\",\n            caption: \"Peru\"\n        },\n        {\n            image: \"/images/home/Flag-Spain.webp\",\n            caption: \"Spain\"\n        },\n        {\n            image: \"/images/home/Flag-Uruguay.webp\",\n            caption: \"Uruguay\"\n        },\n        {\n            image: \"/images/home/Flag-Venezuela.webp\",\n            caption: \"Venezuela\"\n        }\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slide = ref[0], setSlide = ref[1];\n    var gap = 2000;\n    var slideShowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var incrementSlide = function() {\n        if (slide < slides.length) {\n            setSlide(slide + 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var allSlides = slideShowRef && slideShowRef.current.querySelectorAll(\"div\");\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = allSlides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var slide1 = _step.value;\n                slide1.classList.add(\"not-active\");\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        var showSlide = function(slide) {\n            var previous;\n            if (slide > 0) {\n                previous = slide - 1;\n                allSlides[previous] && allSlides[previous].classList.remove(\"active\");\n                allSlides[previous].classList.add(\"not-active\");\n            }\n            allSlides[slide] && allSlides[slide].classList.add(\"active\");\n        };\n        setInterval(function() {\n            incrementSlide();\n            showSlide(slide);\n        }, gap);\n    }, [\n        slide\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"home\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"intro\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"spanish-map\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"landingBackground\",\n                            src: \"/images/home/296-2965054_map-of-spain-png-transparent-png.png\",\n                            objectFit: \"scale-down\",\n                            objectPosition: \"left\",\n                            layout: \"fill\",\n                            priority: true,\n                            alt: \"Map of Spain with Provinces\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mainContent\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: \"tag-line\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Learn Spanish!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 138,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Use it in all of these countries that have Spanish as their primary language: \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 139,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: slideShowRef,\n                                className: \"slideShow\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    slideSet: slides\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                    lineNumber: 142,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"verbContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Verbs\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Learn approximately 100 of the most commonly used Spanish verbs by studying flashcards and testing your study skills using the conjugator and playing the slider. The verbs are in the indicative form with present, preterite, imperfect, conditional, and future tenses.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 146,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"vocabularyContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Vocabulary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"This site has over 700 words (and counting!) to start your (and my) Spanish-learning journey! Start by studying the flashcards. You can choose to study a category or all of the vocabulary. After you are confident in your in new vocabulary, you can test yourself by using the completion, fill-in, quiz, scramble, and slider exercises. Each exercise allows you to choose a category or all vocabulary and the number of questions (5, 10, 15, and 20) you want. After you're done, you are presented with a report detailing the percentage correct and correct answers and your answers.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 152,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 150,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 154,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n        lineNumber: 123,\n        columnNumber: 9\n    }, _this);\n};\n_s(Index, \"HsTgwXyUns1hptUlPrkRpmUpDbk=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxFQUFFLElBQUk7NEJBQ2RDLEdBQUcsRUFBQyw2QkFBNkI7Ozs7O2lDQUNuQzs7Ozs7NkJBQ0E7a0NBQ04sOERBQUNSLEtBQUc7d0JBQUNFLFNBQVMsRUFBQyxhQUFhOzswQ0FDeEIsOERBQUNPLFNBQU87Z0NBQUNQLFNBQVMsRUFBQyxVQUFVOztrREFDekIsOERBQUNRLElBQUU7a0RBQUMsZ0JBQWM7Ozs7OzZDQUFLO2tEQUN2Qiw4REFBQ0MsSUFBRTtrREFBQyxnRkFBOEU7Ozs7OzZDQUFLOzs7Ozs7cUNBQ2pGOzBDQUNWLDhEQUFDWCxLQUFHO2dDQUFDWSxHQUFHLEVBQUd4QixZQUFZO2dDQUFHYyxTQUFTLEVBQUMsV0FBVzswQ0FDM0MsNEVBQUN0QixpRUFBUztvQ0FBQ2lDLFFBQVEsRUFBRy9CLE1BQU07Ozs7O3lDQUFLOzs7OztxQ0FDL0I7Ozs7Ozs2QkFDSjs7Ozs7O3FCQUNKOzBCQUNOLDhEQUFDMkIsU0FBTztnQkFBQ1IsRUFBRSxFQUFDLGFBQWE7O2tDQUNyQiw4REFBQ1UsSUFBRTtrQ0FBQyxPQUFLOzs7Ozs2QkFBSztrQ0FDZCw4REFBQ0csR0FBQztrQ0FBQyw0UUFBMFE7Ozs7OzZCQUFJOzs7Ozs7cUJBQzNROzBCQUNWLDhEQUFDTCxTQUFPO2dCQUFDUixFQUFFLEVBQUMsbUJBQW1COztrQ0FDM0IsOERBQUNVLElBQUU7a0NBQUMsWUFBVTs7Ozs7NkJBQUs7a0NBQ25CLDhEQUFDRyxHQUFDO2tDQUFDLG1rQkFBaWtCOzs7Ozs2QkFBSTs7Ozs7O3FCQUNsa0I7MEJBQ1YsOERBQUNDLFFBQU07Ozs7cUJBRUU7Ozs7OzthQUNQLENBQ1Q7Q0FDSjtHQXhKS2xDLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQTBKWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBTbGlkZVNob3cgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvc2xpZGVTaG93JztcclxuaW1wb3J0IHsgY2xlYXJJbnRlcnZhbCB9IGZyb20gJ3RpbWVycyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNsaWRlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctQXJnZW50aW5hLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnQXJnZW50aW5hJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUJvbGl2aWEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdCb2xpdmlhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUNoaWxlLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnQ2hpbGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctQ29sb21iaWEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdDb2xvbWJpYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1Db3N0YS1SaWNhLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnQ29zdGEgUmljYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1Eb21pbmljYW4tUmVwdWJsaWMud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdEb21pbmljYW4gUmVwdWJsaWMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctRWN1YWRvci53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0VjdWFkb3InXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctRWwtU2FsdmFkb3Iud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdFbCBTYWx2YWRvcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1FcXVhdG9yaWFsIEd1aW5lYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0VjcXVhdG9yaWFsIEd1aW5lYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1HdWF0ZW1hbGEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdHdWF0ZW1hbGEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctSG9uZHVyYXMud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdIb25kdXJhcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1NZXhpY28ud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdNZXhpY28nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctTmljYXJhZ3VhLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnTmljYXJhZ3VhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLVBhbmFtYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ1BhbmFtYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1QYXJhZ3VheS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ1BhcmFndWF5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLVBlcnUud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdQZXJ1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLVNwYWluLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnU3BhaW4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctVXJ1Z3VheS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ1VydWd1YXknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctVmVuZXp1ZWxhLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnVmVuZXp1ZWxhJ1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgW3NsaWRlLCBzZXRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGdhcCA9IDIwMDA7XHJcbiAgICBjb25zdCBzbGlkZVNob3dSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaW5jcmVtZW50U2xpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc2xpZGUgPCBzbGlkZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNldFNsaWRlKHNsaWRlICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFsbFNsaWRlcyA9IHNsaWRlU2hvd1JlZiAmJiBzbGlkZVNob3dSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcclxuICAgICAgICBmb3IoY29uc3Qgc2xpZGUgb2YgYWxsU2xpZGVzKSB7XHJcbiAgICAgICAgICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dTbGlkZSA9IChzbGlkZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJldmlvdXM7XHJcblxyXG4gICAgICAgICAgICBpZihzbGlkZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzID0gc2xpZGUgLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGFsbFNsaWRlc1twcmV2aW91c10gJiYgYWxsU2xpZGVzW3ByZXZpb3VzXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgYWxsU2xpZGVzW3ByZXZpb3VzXS5jbGFzc0xpc3QuYWRkKCdub3QtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFsbFNsaWRlc1tzbGlkZV0gJiYgYWxsU2xpZGVzW3NsaWRlXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnRTbGlkZSgpO1xyXG4gICAgICAgICAgICBzaG93U2xpZGUoc2xpZGUpO1xyXG4gICAgICAgIH0sIGdhcCk7XHJcbiAgICB9LCBbc2xpZGVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImhvbWVcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImludHJvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhbmlzaC1tYXAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsYW5kaW5nQmFja2dyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9ob21lLzI5Ni0yOTY1MDU0X21hcC1vZi1zcGFpbi1wbmctdHJhbnNwYXJlbnQtcG5nLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD0nc2NhbGUtZG93bidcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb249J2xlZnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD0nZmlsbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIk1hcCBvZiBTcGFpbiB3aXRoIFByb3ZpbmNlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5Db250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RhZy1saW5lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkxlYXJuIFNwYW5pc2ghPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlVzZSBpdCBpbiBhbGwgb2YgdGhlc2UgY291bnRyaWVzIHRoYXQgaGF2ZSBTcGFuaXNoIGFzIHRoZWlyIHByaW1hcnkgbGFuZ3VhZ2U6IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXsgc2xpZGVTaG93UmVmIH0gY2xhc3NOYW1lPVwic2xpZGVTaG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVNob3cgc2xpZGVTZXQ9eyBzbGlkZXMgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cInZlcmJDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+VmVyYnM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+TGVhcm4gYXBwcm94aW1hdGVseSAxMDAgb2YgdGhlIG1vc3QgY29tbW9ubHkgdXNlZCBTcGFuaXNoIHZlcmJzIGJ5IHN0dWR5aW5nIGZsYXNoY2FyZHMgYW5kIHRlc3RpbmcgeW91ciBzdHVkeSBza2lsbHMgdXNpbmcgdGhlIGNvbmp1Z2F0b3IgYW5kIHBsYXlpbmcgdGhlIHNsaWRlci4gVGhlIHZlcmJzIGFyZSBpbiB0aGUgaW5kaWNhdGl2ZSBmb3JtIHdpdGggcHJlc2VudCwgcHJldGVyaXRlLCBpbXBlcmZlY3QsIGNvbmRpdGlvbmFsLCBhbmQgZnV0dXJlIHRlbnNlcy48L3A+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJ2b2NhYnVsYXJ5Q29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlZvY2FidWxhcnk8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhpcyBzaXRlIGhhcyBvdmVyIDcwMCB3b3JkcyAoYW5kIGNvdW50aW5nISkgdG8gc3RhcnQgeW91ciAoYW5kIG15KSBTcGFuaXNoLWxlYXJuaW5nIGpvdXJuZXkhIFN0YXJ0IGJ5IHN0dWR5aW5nIHRoZSBmbGFzaGNhcmRzLiBZb3UgY2FuIGNob29zZSB0byBzdHVkeSBhIGNhdGVnb3J5IG9yIGFsbCBvZiB0aGUgdm9jYWJ1bGFyeS4gQWZ0ZXIgeW91IGFyZSBjb25maWRlbnQgaW4geW91ciBpbiBuZXcgdm9jYWJ1bGFyeSwgeW91IGNhbiB0ZXN0IHlvdXJzZWxmIGJ5IHVzaW5nIHRoZSBjb21wbGV0aW9uLCBmaWxsLWluLCBxdWl6LCBzY3JhbWJsZSwgYW5kIHNsaWRlciBleGVyY2lzZXMuIEVhY2ggZXhlcmNpc2UgYWxsb3dzIHlvdSB0byBjaG9vc2UgYSBjYXRlZ29yeSBvciBhbGwgdm9jYWJ1bGFyeSBhbmQgdGhlIG51bWJlciBvZiBxdWVzdGlvbnMgKDUsIDEwLCAxNSwgYW5kIDIwKSB5b3Ugd2FudC4gQWZ0ZXIgeW91J3JlIGRvbmUsIHlvdSBhcmUgcHJlc2VudGVkIHdpdGggYSByZXBvcnQgZGV0YWlsaW5nIHRoZSBwZXJjZW50YWdlIGNvcnJlY3QgYW5kIGNvcnJlY3QgYW5zd2VycyBhbmQgeW91ciBhbnN3ZXJzLjwvcD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiSW1hZ2UiLCJTbGlkZVNob3ciLCJJbmRleCIsInNsaWRlcyIsImltYWdlIiwiY2FwdGlvbiIsInNsaWRlIiwic2V0U2xpZGUiLCJnYXAiLCJzbGlkZVNob3dSZWYiLCJpbmNyZW1lbnRTbGlkZSIsImxlbmd0aCIsImFsbFNsaWRlcyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xhc3NMaXN0IiwiYWRkIiwic2hvd1NsaWRlIiwicHJldmlvdXMiLCJyZW1vdmUiLCJzZXRJbnRlcnZhbCIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwic3JjIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJsYXlvdXQiLCJwcmlvcml0eSIsImFsdCIsInNlY3Rpb24iLCJoMSIsImgyIiwicmVmIiwic2xpZGVTZXQiLCJwIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});