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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/slideShow */ \"./src/components/slideShow.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Index = function() {\n    _s();\n    var slides = [\n        {\n            image: \"/images/home/Flag-Argentina.webp\",\n            caption: \"Argentina\"\n        },\n        {\n            image: \"/images/home/Flag-Bolivia.webp\",\n            caption: \"Bolivia\"\n        },\n        {\n            image: \"/images/home/Flag-Chile.webp\",\n            caption: \"Chile\"\n        },\n        {\n            image: \"/images/home/Flag-Colombia.webp\",\n            caption: \"Colombia\"\n        },\n        {\n            image: \"/images/home/Flag-Costa-Rica.webp\",\n            caption: \"Costa Rica\"\n        },\n        {\n            image: \"/images/home/Flag-Dominican-Republic.webp\",\n            caption: \"Dominican Republic\"\n        },\n        {\n            image: \"/images/home/Flag-Ecuador.webp\",\n            caption: \"Ecuador\"\n        },\n        {\n            image: \"/images/home/Flag-El-Salvador.webp\",\n            caption: \"El Salvador\"\n        },\n        {\n            image: \"/images/home/Flag-Equatorial Guinea.webp\",\n            caption: \"Ecquatorial Guinea\"\n        },\n        {\n            image: \"/images/home/Flag-Guatemala.webp\",\n            caption: \"Guatemala\"\n        },\n        {\n            image: \"/images/home/Flag-Honduras.webp\",\n            caption: \"Honduras\"\n        },\n        {\n            image: \"/images/home/Flag-Mexico.webp\",\n            caption: \"Mexico\"\n        },\n        {\n            image: \"/images/home/Flag-Nicaragua.webp\",\n            caption: \"Nicaragua\"\n        },\n        {\n            image: \"/images/home/Flag-Panama.webp\",\n            caption: \"Panama\"\n        },\n        {\n            image: \"/images/home/Flag-Paraguay.webp\",\n            caption: \"Paraguay\"\n        },\n        {\n            image: \"/images/home/Flag-Peru.webp\",\n            caption: \"Peru\"\n        },\n        {\n            image: \"/images/home/Flag-Spain.webp\",\n            caption: \"Spain\"\n        },\n        {\n            image: \"/images/home/Flag-Uruguay.webp\",\n            caption: \"Uruguay\"\n        },\n        {\n            image: \"/images/home/Flag-Venezuela.webp\",\n            caption: \"Venezuela\"\n        }\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slide = ref[0], setSlide = ref[1];\n    var gap = 3000;\n    var slideShowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var incrementSlide = function() {\n        if (slide < slides.length) {\n            setSlide(slide + 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var allSlides = slideShowRef && slideShowRef.current.querySelectorAll(\"div\");\n        allSlides[0].classList.add(\"active\");\n        for(var i = 1; i < allSlides.length; i++){\n            allSlides[i].classList.add(\"not-active\");\n        }\n        var showSlide = function() {\n            var previous;\n            if (slide > 0) {\n                previous = slide - 1;\n            }\n            allSlides[previous] && allSlides[previous].classList.remove(\"active\");\n            allSlides[previous].classList.add(\"not-active\");\n            allSlides[slide] && allSlides[slide].classList.add(\"active\");\n        };\n        setInterval(function() {\n            incrementSlide();\n            showSlide();\n        }, gap);\n    }, [\n        slide\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"home\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"intro\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"spanish-map\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"landingBackground\",\n                            src: \"/images/home/296-2965054_map-of-spain-png-transparent-png.png\",\n                            objectFit: \"scale-down\",\n                            objectPosition: \"left\",\n                            layout: \"fill\",\n                            alt: \"Map of Spain with Provinces\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mainContent\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: \"tag-line\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Learn Spanish!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Use it in all of these countries that have Spanish as their primary language: \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 138,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: slideShowRef,\n                                className: \"slideShow\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    slideSet: slides\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 140,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"verbContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Verbs\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Learn approximately 100 of the most commonly used Spanish verbs by studying flashcards and testing your study skills using the conjugator and playing the slider. The verbs are in the indicative form with present, preterite, imperfect, conditional, and future tenses.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 145,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"vocabularyContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Vocabulary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"This site has over 700 words (and counting!) to start your (and my) Spanish-learning journey! Start by studying the flashcards. You can choose to study a category or all of the vocabulary. After you are confident in your in new vocabulary, you can test yourself by using the completion, fill-in, quiz, scramble, and slider exercises. Each exercise allows you to choose a category or all vocabulary and the number of questions (5, 10, 15, and 20) you want. After you're done, you are presented with a report detailing the percentage correct and correct answers and your answers.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 149,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 153,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n        lineNumber: 123,\n        columnNumber: 9\n    }, _this);\n};\n_s(Index, \"HsTgwXyUns1hptUlPrkRpmUpDbk=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNNLFNBQU87Z0NBQUNOLFNBQVMsRUFBQyxVQUFVOztrREFDekIsOERBQUNPLElBQUU7a0RBQUMsZ0JBQWM7Ozs7OzZDQUFLO2tEQUN2Qiw4REFBQ0MsSUFBRTtrREFBQyxnRkFBOEU7Ozs7OzZDQUFLOzs7Ozs7cUNBQ2pGOzBDQUNWLDhEQUFDVixLQUFHO2dDQUFDVyxHQUFHLEVBQUd4QixZQUFZO2dDQUFHZSxTQUFTLEVBQUMsV0FBVzswQ0FDM0MsNEVBQUN2QixpRUFBUztvQ0FBQ2lDLFFBQVEsRUFBRy9CLE1BQU07Ozs7O3lDQUFLOzs7OztxQ0FDL0I7Ozs7Ozs2QkFDSjs7Ozs7O3FCQUNKOzBCQUNOLDhEQUFDMkIsU0FBTztnQkFBQ1AsRUFBRSxFQUFDLGFBQWE7O2tDQUNyQiw4REFBQ1MsSUFBRTtrQ0FBQyxPQUFLOzs7Ozs2QkFBSztrQ0FDZCw4REFBQ0csR0FBQztrQ0FBQyw0UUFBMFE7Ozs7OzZCQUFJOzs7Ozs7cUJBQzNROzBCQUNWLDhEQUFDTCxTQUFPO2dCQUFDUCxFQUFFLEVBQUMsbUJBQW1COztrQ0FDM0IsOERBQUNTLElBQUU7a0NBQUMsWUFBVTs7Ozs7NkJBQUs7a0NBQ25CLDhEQUFDRyxHQUFDO2tDQUFDLG1rQkFBaWtCOzs7Ozs2QkFBSTs7Ozs7O3FCQUNsa0I7MEJBQ1YsOERBQUNDLFFBQU07Ozs7cUJBRUU7Ozs7OzthQUNQLENBQ1Q7Q0FDSjtHQXhKS2xDLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQTBKWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBTbGlkZVNob3cgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvc2xpZGVTaG93JztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2xpZGVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1BcmdlbnRpbmEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdBcmdlbnRpbmEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctQm9saXZpYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0JvbGl2aWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctQ2hpbGUud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdDaGlsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1Db2xvbWJpYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0NvbG9tYmlhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUNvc3RhLVJpY2Eud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdDb3N0YSBSaWNhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLURvbWluaWNhbi1SZXB1YmxpYy53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0RvbWluaWNhbiBSZXB1YmxpYydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1FY3VhZG9yLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnRWN1YWRvcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1FbC1TYWx2YWRvci53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0VsIFNhbHZhZG9yJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUVxdWF0b3JpYWwgR3VpbmVhLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnRWNxdWF0b3JpYWwgR3VpbmVhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUd1YXRlbWFsYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0d1YXRlbWFsYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1Ib25kdXJhcy53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0hvbmR1cmFzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLU1leGljby53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ01leGljbydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1OaWNhcmFndWEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdOaWNhcmFndWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctUGFuYW1hLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnUGFuYW1hJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLVBhcmFndWF5LndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnUGFyYWd1YXknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctUGVydS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ1BlcnUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctU3BhaW4ud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdTcGFpbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1VcnVndWF5LndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnVXJ1Z3VheSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1WZW5lenVlbGEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdWZW5lenVlbGEnXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBbc2xpZGUsIHNldFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgZ2FwID0gMzAwMDtcclxuICAgIGNvbnN0IHNsaWRlU2hvd1JlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRTbGlkZSA9ICgpID0+IHtcclxuICAgICAgICBpZihzbGlkZSA8IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2V0U2xpZGUoc2xpZGUgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWxsU2xpZGVzID0gc2xpZGVTaG93UmVmICYmIHNsaWRlU2hvd1JlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xyXG4gICAgICAgIGFsbFNsaWRlc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgYWxsU2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFsbFNsaWRlc1tpXS5jbGFzc0xpc3QuYWRkKCdub3QtYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzaG93U2xpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91cztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHNsaWRlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXMgPSBzbGlkZSAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFsbFNsaWRlc1twcmV2aW91c10gJiYgYWxsU2xpZGVzW3ByZXZpb3VzXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICBhbGxTbGlkZXNbcHJldmlvdXNdLmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUnKTtcclxuICAgICAgICAgICAgYWxsU2xpZGVzW3NsaWRlXSAmJiBhbGxTbGlkZXNbc2xpZGVdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpOyAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEludGVydmFsKCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGluY3JlbWVudFNsaWRlKCk7XHJcbiAgICAgICAgICAgIHNob3dTbGlkZSgpO1xyXG4gICAgICAgIH0sIGdhcCk7XHJcbiAgICB9LCBbc2xpZGVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImhvbWVcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImludHJvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhbmlzaC1tYXAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsYW5kaW5nQmFja2dyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9ob21lLzI5Ni0yOTY1MDU0X21hcC1vZi1zcGFpbi1wbmctdHJhbnNwYXJlbnQtcG5nLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD0nc2NhbGUtZG93bidcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb249J2xlZnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD0nZmlsbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTWFwIG9mIFNwYWluIHdpdGggUHJvdmluY2VzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbkNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndGFnLWxpbmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+TGVhcm4gU3BhbmlzaCE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+VXNlIGl0IGluIGFsbCBvZiB0aGVzZSBjb3VudHJpZXMgdGhhdCBoYXZlIFNwYW5pc2ggYXMgdGhlaXIgcHJpbWFyeSBsYW5ndWFnZTogPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyBzbGlkZVNob3dSZWYgfSBjbGFzc05hbWU9XCJzbGlkZVNob3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlU2hvdyBzbGlkZVNldD17IHNsaWRlcyB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwidmVyYkNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5WZXJiczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5MZWFybiBhcHByb3hpbWF0ZWx5IDEwMCBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIFNwYW5pc2ggdmVyYnMgYnkgc3R1ZHlpbmcgZmxhc2hjYXJkcyBhbmQgdGVzdGluZyB5b3VyIHN0dWR5IHNraWxscyB1c2luZyB0aGUgY29uanVnYXRvciBhbmQgcGxheWluZyB0aGUgc2xpZGVyLiBUaGUgdmVyYnMgYXJlIGluIHRoZSBpbmRpY2F0aXZlIGZvcm0gd2l0aCBwcmVzZW50LCBwcmV0ZXJpdGUsIGltcGVyZmVjdCwgY29uZGl0aW9uYWwsIGFuZCBmdXR1cmUgdGVuc2VzLjwvcD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cInZvY2FidWxhcnlDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+Vm9jYWJ1bGFyeTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGlzIHNpdGUgaGFzIG92ZXIgNzAwIHdvcmRzIChhbmQgY291bnRpbmchKSB0byBzdGFydCB5b3VyIChhbmQgbXkpIFNwYW5pc2gtbGVhcm5pbmcgam91cm5leSEgU3RhcnQgYnkgc3R1ZHlpbmcgdGhlIGZsYXNoY2FyZHMuIFlvdSBjYW4gY2hvb3NlIHRvIHN0dWR5IGEgY2F0ZWdvcnkgb3IgYWxsIG9mIHRoZSB2b2NhYnVsYXJ5LiBBZnRlciB5b3UgYXJlIGNvbmZpZGVudCBpbiB5b3VyIGluIG5ldyB2b2NhYnVsYXJ5LCB5b3UgY2FuIHRlc3QgeW91cnNlbGYgYnkgdXNpbmcgdGhlIGNvbXBsZXRpb24sIGZpbGwtaW4sIHF1aXosIHNjcmFtYmxlLCBhbmQgc2xpZGVyIGV4ZXJjaXNlcy4gRWFjaCBleGVyY2lzZSBhbGxvd3MgeW91IHRvIGNob29zZSBhIGNhdGVnb3J5IG9yIGFsbCB2b2NhYnVsYXJ5IGFuZCB0aGUgbnVtYmVyIG9mIHF1ZXN0aW9ucyAoNSwgMTAsIDE1LCBhbmQgMjApIHlvdSB3YW50LiBBZnRlciB5b3UncmUgZG9uZSwgeW91IGFyZSBwcmVzZW50ZWQgd2l0aCBhIHJlcG9ydCBkZXRhaWxpbmcgdGhlIHBlcmNlbnRhZ2UgY29ycmVjdCBhbmQgY29ycmVjdCBhbnN3ZXJzIGFuZCB5b3VyIGFuc3dlcnMuPC9wPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxmb290ZXI+XHJcblxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJJbWFnZSIsIlNsaWRlU2hvdyIsIkluZGV4Iiwic2xpZGVzIiwiaW1hZ2UiLCJjYXB0aW9uIiwic2xpZGUiLCJzZXRTbGlkZSIsImdhcCIsInNsaWRlU2hvd1JlZiIsImluY3JlbWVudFNsaWRlIiwibGVuZ3RoIiwiYWxsU2xpZGVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGFzc0xpc3QiLCJhZGQiLCJpIiwic2hvd1NsaWRlIiwicHJldmlvdXMiLCJyZW1vdmUiLCJzZXRJbnRlcnZhbCIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwic3JjIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJsYXlvdXQiLCJhbHQiLCJzZWN0aW9uIiwiaDEiLCJoMiIsInJlZiIsInNsaWRlU2V0IiwicCIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});