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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/slideShow */ \"./src/components/slideShow.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Index = function() {\n    _s();\n    var slideData = [\n        {\n            image: \"/images/home/Flag-Argentina.webp\",\n            caption: \"Argentina\"\n        },\n        {\n            image: \"/images/home/Flag-Bolivia.webp\",\n            caption: \"Bolivia\"\n        },\n        {\n            image: \"/images/home/Flag-Chile.webp\",\n            caption: \"Chile\"\n        },\n        {\n            image: \"/images/home/Flag-Colombia.webp\",\n            caption: \"Colombia\"\n        },\n        {\n            image: \"/images/home/Flag-Costa-Rica.webp\",\n            caption: \"Costa Rica\"\n        },\n        {\n            image: \"/images/home/Flag-Dominican-Republic.webp\",\n            caption: \"Dominican Republic\"\n        },\n        {\n            image: \"/images/home/Flag-Ecuador.webp\",\n            caption: \"Ecuador\"\n        },\n        {\n            image: \"/images/home/Flag-El-Salvador.webp\",\n            caption: \"El Salvador\"\n        },\n        {\n            image: \"/images/home/Flag-Equatorial-Guinea.webp\",\n            caption: \"Equatorial Guinea\"\n        },\n        {\n            image: \"/images/home/Flag-Guatemala.webp\",\n            caption: \"Guatemala\"\n        },\n        {\n            image: \"/images/home/Flag-Honduras.webp\",\n            caption: \"Honduras\"\n        },\n        {\n            image: \"/images/home/Flag-Mexico.webp\",\n            caption: \"Mexico\"\n        },\n        {\n            image: \"/images/home/Flag-Nicaragua.webp\",\n            caption: \"Nicaragua\"\n        },\n        {\n            image: \"/images/home/Flag-Panama.webp\",\n            caption: \"Panama\"\n        },\n        {\n            image: \"/images/home/Flag-Paraguay.webp\",\n            caption: \"Paraguay\"\n        },\n        {\n            image: \"/images/home/Flag-Peru.webp\",\n            caption: \"Peru\"\n        },\n        {\n            image: \"/images/home/Flag-Spain.webp\",\n            caption: \"Spain\"\n        },\n        {\n            image: \"/images/home/Flag-Uruguay.webp\",\n            caption: \"Uruguay\"\n        },\n        {\n            image: \"/images/home/Flag-Venezuela.webp\",\n            caption: \"Venezuela\"\n        }\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slide = ref[0], setSlide = ref[1];\n    var slideShowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var incrementSlide = function() {\n        if (slide < slideData.length) {\n            setSlide(slide + 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var slides = slideShowRef.current.querySelectorAll(\"div\");\n        var playSlides = function() {\n            var previous;\n            slides.forEach(function(slide) {\n                return slide.classList.add(\"not-active\");\n            });\n            slides[slide] && slides[slide].classList.remove(\"not-active\");\n            slides[slide] && slides[slide].classList.add(\"active\");\n            incrementSlide();\n        };\n        setInterval(playSlides, 2000);\n    }, [\n        slide\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"home\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"intro\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"spanish-map\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"landingBackground\",\n                            src: \"/images/home/296-2965054_map-of-spain-png-transparent-png.png\",\n                            objectFit: \"scale-down\",\n                            objectPosition: \"left\",\n                            layout: \"fill\",\n                            priority: true,\n                            alt: \"Map of Spain with Provinces\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mainContent\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: \"tag-line\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Learn Spanish!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Use it in all of these countries that have Spanish as their primary language: \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: slideShowRef,\n                                className: \"slideShow\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    slideSet: slideData\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"verbContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Verbs\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Learn approximately 100 of the most commonly used Spanish verbs by studying flashcards and testing your study skills using the conjugator and playing the slider. The verbs are in the indicative form with present, preterite, imperfect, conditional, and future tenses.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 133,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"vocabularyContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Vocabulary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"This site has over 700 words (and counting!) to start your (and my) Spanish-learning journey! Start by studying the flashcards. You can choose to study a category or all of the vocabulary. After you are confident in your in new vocabulary, you can test yourself by using the completion, fill-in, quiz, scramble, and slider exercises. Each exercise allows you to choose a category or all vocabulary and the number of questions (5, 10, 15, and 20) you want. After you're done, you are presented with a report detailing the percentage correct and correct answers and your answers.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 137,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 141,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n        lineNumber: 110,\n        columnNumber: 9\n    }, _this);\n};\n_s(Index, \"HsTgwXyUns1hptUlPrkRpmUpDbk=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQ1IsRUFBRSxFQUFDLGFBQWE7O2tDQUNyQiw4REFBQ1UsSUFBRTtrQ0FBQyxPQUFLOzs7Ozs2QkFBSztrQ0FDZCw4REFBQ0csR0FBQztrQ0FBQyw0UUFBMFE7Ozs7OzZCQUFJOzs7Ozs7cUJBQzNROzBCQUNWLDhEQUFDTCxTQUFPO2dCQUFDUixFQUFFLEVBQUMsbUJBQW1COztrQ0FDM0IsOERBQUNVLElBQUU7a0NBQUMsWUFBVTs7Ozs7NkJBQUs7a0NBQ25CLDhEQUFDRyxHQUFDO2tDQUFDLG1rQkFBaWtCOzs7Ozs2QkFBSTs7Ozs7O3FCQUNsa0I7MEJBQ1YsOERBQUNDLFFBQU07Ozs7cUJBRUU7Ozs7OzthQUNQLENBQ1Q7Q0FDSjtHQTNJS2xDLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQTZJWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBTbGlkZVNob3cgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvc2xpZGVTaG93JztcclxuaW1wb3J0IHsgY2xlYXJJbnRlcnZhbCB9IGZyb20gJ3RpbWVycyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNsaWRlRGF0YSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctQXJnZW50aW5hLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnQXJnZW50aW5hJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUJvbGl2aWEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdCb2xpdmlhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUNoaWxlLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnQ2hpbGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctQ29sb21iaWEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdDb2xvbWJpYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1Db3N0YS1SaWNhLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnQ29zdGEgUmljYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1Eb21pbmljYW4tUmVwdWJsaWMud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdEb21pbmljYW4gUmVwdWJsaWMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctRWN1YWRvci53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0VjdWFkb3InXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctRWwtU2FsdmFkb3Iud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdFbCBTYWx2YWRvcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1FcXVhdG9yaWFsLUd1aW5lYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0VxdWF0b3JpYWwgR3VpbmVhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUd1YXRlbWFsYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0d1YXRlbWFsYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1Ib25kdXJhcy53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0hvbmR1cmFzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLU1leGljby53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ01leGljbydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1OaWNhcmFndWEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdOaWNhcmFndWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctUGFuYW1hLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnUGFuYW1hJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLVBhcmFndWF5LndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnUGFyYWd1YXknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctUGVydS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ1BlcnUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctU3BhaW4ud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdTcGFpbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1VcnVndWF5LndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnVXJ1Z3VheSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1WZW5lenVlbGEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdWZW5lenVlbGEnXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIGNvbnN0IFtzbGlkZSwgc2V0U2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBzbGlkZVNob3dSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaW5jcmVtZW50U2xpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc2xpZGUgPCBzbGlkZURhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNldFNsaWRlKHNsaWRlICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVzID0gc2xpZGVTaG93UmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXlTbGlkZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91cztcclxuICAgICAgICAgICAgc2xpZGVzLmZvckVhY2goc2xpZGUgPT4gc2xpZGUuY2xhc3NMaXN0LmFkZCgnbm90LWFjdGl2ZScpKTtcclxuICAgICAgICAgICAgc2xpZGVzW3NsaWRlXSAmJiBzbGlkZXNbc2xpZGVdLmNsYXNzTGlzdC5yZW1vdmUoJ25vdC1hY3RpdmUnKTtcclxuICAgICAgICAgICAgc2xpZGVzW3NsaWRlXSAmJiBzbGlkZXNbc2xpZGVdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBpbmNyZW1lbnRTbGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJbnRlcnZhbChwbGF5U2xpZGVzLCAyMDAwKTtcclxuICAgIH0sIFtzbGlkZV0pO1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiaG9tZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaW50cm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFuaXNoLW1hcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xhbmRpbmdCYWNrZ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2hvbWUvMjk2LTI5NjUwNTRfbWFwLW9mLXNwYWluLXBuZy10cmFuc3BhcmVudC1wbmcucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PSdzY2FsZS1kb3duJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbj0nbGVmdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PSdmaWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTWFwIG9mIFNwYWluIHdpdGggUHJvdmluY2VzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbkNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndGFnLWxpbmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+TGVhcm4gU3BhbmlzaCE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+VXNlIGl0IGluIGFsbCBvZiB0aGVzZSBjb3VudHJpZXMgdGhhdCBoYXZlIFNwYW5pc2ggYXMgdGhlaXIgcHJpbWFyeSBsYW5ndWFnZTogPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyBzbGlkZVNob3dSZWYgfSBjbGFzc05hbWU9XCJzbGlkZVNob3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlU2hvdyBzbGlkZVNldD17IHNsaWRlRGF0YSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwidmVyYkNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5WZXJiczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5MZWFybiBhcHByb3hpbWF0ZWx5IDEwMCBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIFNwYW5pc2ggdmVyYnMgYnkgc3R1ZHlpbmcgZmxhc2hjYXJkcyBhbmQgdGVzdGluZyB5b3VyIHN0dWR5IHNraWxscyB1c2luZyB0aGUgY29uanVnYXRvciBhbmQgcGxheWluZyB0aGUgc2xpZGVyLiBUaGUgdmVyYnMgYXJlIGluIHRoZSBpbmRpY2F0aXZlIGZvcm0gd2l0aCBwcmVzZW50LCBwcmV0ZXJpdGUsIGltcGVyZmVjdCwgY29uZGl0aW9uYWwsIGFuZCBmdXR1cmUgdGVuc2VzLjwvcD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cInZvY2FidWxhcnlDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+Vm9jYWJ1bGFyeTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGlzIHNpdGUgaGFzIG92ZXIgNzAwIHdvcmRzIChhbmQgY291bnRpbmchKSB0byBzdGFydCB5b3VyIChhbmQgbXkpIFNwYW5pc2gtbGVhcm5pbmcgam91cm5leSEgU3RhcnQgYnkgc3R1ZHlpbmcgdGhlIGZsYXNoY2FyZHMuIFlvdSBjYW4gY2hvb3NlIHRvIHN0dWR5IGEgY2F0ZWdvcnkgb3IgYWxsIG9mIHRoZSB2b2NhYnVsYXJ5LiBBZnRlciB5b3UgYXJlIGNvbmZpZGVudCBpbiB5b3VyIGluIG5ldyB2b2NhYnVsYXJ5LCB5b3UgY2FuIHRlc3QgeW91cnNlbGYgYnkgdXNpbmcgdGhlIGNvbXBsZXRpb24sIGZpbGwtaW4sIHF1aXosIHNjcmFtYmxlLCBhbmQgc2xpZGVyIGV4ZXJjaXNlcy4gRWFjaCBleGVyY2lzZSBhbGxvd3MgeW91IHRvIGNob29zZSBhIGNhdGVnb3J5IG9yIGFsbCB2b2NhYnVsYXJ5IGFuZCB0aGUgbnVtYmVyIG9mIHF1ZXN0aW9ucyAoNSwgMTAsIDE1LCBhbmQgMjApIHlvdSB3YW50LiBBZnRlciB5b3UncmUgZG9uZSwgeW91IGFyZSBwcmVzZW50ZWQgd2l0aCBhIHJlcG9ydCBkZXRhaWxpbmcgdGhlIHBlcmNlbnRhZ2UgY29ycmVjdCBhbmQgY29ycmVjdCBhbnN3ZXJzIGFuZCB5b3VyIGFuc3dlcnMuPC9wPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxmb290ZXI+XHJcblxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJJbWFnZSIsIlNsaWRlU2hvdyIsIkluZGV4Iiwic2xpZGVEYXRhIiwiaW1hZ2UiLCJjYXB0aW9uIiwic2xpZGUiLCJzZXRTbGlkZSIsInNsaWRlU2hvd1JlZiIsImluY3JlbWVudFNsaWRlIiwibGVuZ3RoIiwic2xpZGVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwbGF5U2xpZGVzIiwicHJldmlvdXMiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2V0SW50ZXJ2YWwiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsInNyYyIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwibGF5b3V0IiwicHJpb3JpdHkiLCJhbHQiLCJzZWN0aW9uIiwiaDEiLCJoMiIsInJlZiIsInNsaWRlU2V0IiwicCIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});