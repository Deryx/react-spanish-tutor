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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/slideShow */ \"./src/components/slideShow.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Index = function() {\n    _s();\n    var slides = [\n        {\n            image: \"/images/home/Flag-Argentina.webp\",\n            caption: \"Argentina\"\n        },\n        {\n            image: \"/images/home/Flag-Bolivia.webp\",\n            caption: \"Bolivia\"\n        },\n        {\n            image: \"/images/home/Flag-Chile.webp\",\n            caption: \"Chile\"\n        },\n        {\n            image: \"/images/home/Flag-Colombia.webp\",\n            caption: \"Colombia\"\n        },\n        {\n            image: \"/images/home/Flag-Costa-Rica.webp\",\n            caption: \"Costa Rica\"\n        },\n        {\n            image: \"/images/home/Flag-Dominican-Republic.webp\",\n            caption: \"Dominican Republic\"\n        },\n        {\n            image: \"/images/home/Flag-Ecuador.webp\",\n            caption: \"Ecuador\"\n        },\n        {\n            image: \"/images/home/Flag-El-Salvador.webp\",\n            caption: \"El Salvador\"\n        },\n        {\n            image: \"/images/home/Flag-Equatorial Guinea.webp\",\n            caption: \"Ecquatorial Guinea\"\n        },\n        {\n            image: \"/images/home/Flag-Guatemala.webp\",\n            caption: \"Guatemala\"\n        },\n        {\n            image: \"/images/home/Flag-Honduras.webp\",\n            caption: \"Honduras\"\n        },\n        {\n            image: \"/images/home/Flag-Mexico.webp\",\n            caption: \"Mexico\"\n        },\n        {\n            image: \"/images/home/Flag-Nicaragua.webp\",\n            caption: \"Nicaragua\"\n        },\n        {\n            image: \"/images/home/Flag-Panama.webp\",\n            caption: \"Panama\"\n        },\n        {\n            image: \"/images/home/Flag-Paraguay.webp\",\n            caption: \"Paraguay\"\n        },\n        {\n            image: \"/images/home/Flag-Peru.webp\",\n            caption: \"Peru\"\n        },\n        {\n            image: \"/images/home/Flag-Spain.webp\",\n            caption: \"Spain\"\n        },\n        {\n            image: \"/images/home/Flag-Uruguay.webp\",\n            caption: \"Uruguay\"\n        },\n        {\n            image: \"/images/home/Flag-Venezuela.webp\",\n            caption: \"Venezuela\"\n        }\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slide = ref[0], setSlide = ref[1];\n    var gap = 3000;\n    var slideShowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var incrementSlide = function() {\n        if (slide < slides.length) {\n            setSlide(slide + 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var allSlides = slideShowRef && slideShowRef.current.querySelectorAll(\"div\");\n        allSlides[0].classList.add(\"active\");\n        for(var i = 1; i < allSlides.length; i++){\n            allSlides[i].classList.add(\"not-active\");\n        }\n        var showNewSlide = function() {\n            var previous;\n            if (slide > 0) {\n                previous = slide - 1;\n            }\n            allSlides[previous] && allSlides[previous].classList.remove(\"active\").classList.add(\"not-active\");\n            allSlides[slide] && allSlides[slide].classList.add(\"active\");\n        };\n        setInterval(function() {\n            incrementSlide();\n            showNewSlide();\n        }, gap);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"home\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"intro\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"spanish-map\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"landingBackground\",\n                            src: \"/images/home/296-2965054_map-of-spain-png-transparent-png.png\",\n                            objectFit: \"scale-down\",\n                            objectPosition: \"left\",\n                            layout: \"fill\",\n                            alt: \"Map of Spain with Provinces\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mainContent\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: \"tag-line\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Learn Spanish!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Use it in all of these countries that have Spanish as their primary language: \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 135,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: slideShowRef,\n                                className: \"slideShow\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    slideSet: slides\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"verbContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Verbs\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Learn approximately 100 of the most commonly used Spanish verbs by studying flashcards and testing your study skills using the conjugator and playing the slider. The verbs are in the indicative form with present, preterite, imperfect, conditional, and future tenses.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 144,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 142,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"vocabularyContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Vocabulary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"This site has over 700 words (and counting!) to start your (and my) Spanish-learning journey! Start by studying the flashcards. You can choose to study a category or all of the vocabulary. After you are confident in your in new vocabulary, you can test yourself by using the completion, fill-in, quiz, scramble, and slider exercises. Each exercise allows you to choose a category or all vocabulary and the number of questions (5, 10, 15, and 20) you want. After you're done, you are presented with a report detailing the percentage correct and correct answers and your answers.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 146,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 150,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n        lineNumber: 120,\n        columnNumber: 9\n    }, _this);\n};\n_s(Index, \"HsTgwXyUns1hptUlPrkRpmUpDbk=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekIsOERBQUNPLElBQUU7a0RBQUMsZ0JBQWM7Ozs7OzZDQUFLO2tEQUN2Qiw4REFBQ0MsSUFBRTtrREFBQyxnRkFBOEU7Ozs7OzZDQUFLOzs7Ozs7cUNBQ2pGOzBDQUNWLDhEQUFDVixLQUFHO2dDQUFDVyxHQUFHLEVBQUd4QixZQUFZO2dDQUFHZSxTQUFTLEVBQUMsV0FBVzswQ0FDM0MsNEVBQUN2QixpRUFBUztvQ0FBQ2lDLFFBQVEsRUFBRy9CLE1BQU07Ozs7O3lDQUFLOzs7OztxQ0FDL0I7Ozs7Ozs2QkFDSjs7Ozs7O3FCQUNKOzBCQUNOLDhEQUFDMkIsU0FBTztnQkFBQ1AsRUFBRSxFQUFDLGFBQWE7O2tDQUNyQiw4REFBQ1MsSUFBRTtrQ0FBQyxPQUFLOzs7Ozs2QkFBSztrQ0FDZCw4REFBQ0csR0FBQztrQ0FBQyw0UUFBMFE7Ozs7OzZCQUFJOzs7Ozs7cUJBQzNROzBCQUNWLDhEQUFDTCxTQUFPO2dCQUFDUCxFQUFFLEVBQUMsbUJBQW1COztrQ0FDM0IsOERBQUNTLElBQUU7a0NBQUMsWUFBVTs7Ozs7NkJBQUs7a0NBQ25CLDhEQUFDRyxHQUFDO2tDQUFDLG1rQkFBaWtCOzs7Ozs2QkFBSTs7Ozs7O3FCQUNsa0I7MEJBQ1YsOERBQUNDLFFBQU07Ozs7cUJBRUU7Ozs7OzthQUNQLENBQ1Q7Q0FDSjtHQXJKS2xDLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQXVKWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBTbGlkZVNob3cgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvc2xpZGVTaG93JztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2xpZGVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1BcmdlbnRpbmEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdBcmdlbnRpbmEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctQm9saXZpYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0JvbGl2aWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctQ2hpbGUud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdDaGlsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1Db2xvbWJpYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0NvbG9tYmlhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUNvc3RhLVJpY2Eud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdDb3N0YSBSaWNhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLURvbWluaWNhbi1SZXB1YmxpYy53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0RvbWluaWNhbiBSZXB1YmxpYydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1FY3VhZG9yLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnRWN1YWRvcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1FbC1TYWx2YWRvci53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0VsIFNhbHZhZG9yJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUVxdWF0b3JpYWwgR3VpbmVhLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnRWNxdWF0b3JpYWwgR3VpbmVhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUd1YXRlbWFsYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0d1YXRlbWFsYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1Ib25kdXJhcy53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0hvbmR1cmFzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLU1leGljby53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ01leGljbydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1OaWNhcmFndWEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdOaWNhcmFndWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctUGFuYW1hLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnUGFuYW1hJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLVBhcmFndWF5LndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnUGFyYWd1YXknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctUGVydS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ1BlcnUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctU3BhaW4ud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdTcGFpbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1VcnVndWF5LndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnVXJ1Z3VheSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1WZW5lenVlbGEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdWZW5lenVlbGEnXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBbc2xpZGUsIHNldFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgZ2FwID0gMzAwMDtcclxuICAgIGNvbnN0IHNsaWRlU2hvd1JlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGluY3JlbWVudFNsaWRlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHNsaWRlIDwgc2xpZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZXRTbGlkZShzbGlkZSArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBhbGxTbGlkZXMgPSBzbGlkZVNob3dSZWYgJiYgc2xpZGVTaG93UmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XHJcbiAgICAgICAgYWxsU2xpZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBhbGxTbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYWxsU2xpZGVzW2ldLmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dOZXdTbGlkZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHByZXZpb3VzO1xyXG4gICAgICAgICAgICBpZihzbGlkZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzID0gc2xpZGUgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFsbFNsaWRlc1twcmV2aW91c10gJiYgYWxsU2xpZGVzW3ByZXZpb3VzXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKS5jbGFzc0xpc3QuYWRkKCdub3QtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGFsbFNsaWRlc1tzbGlkZV0gJiYgYWxsU2xpZGVzW3NsaWRlXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTsgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldEludGVydmFsKCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGluY3JlbWVudFNsaWRlKCk7XHJcbiAgICAgICAgICAgIHNob3dOZXdTbGlkZSgpO1xyXG4gICAgICAgIH0sIGdhcCk7XHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiaG9tZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaW50cm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFuaXNoLW1hcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xhbmRpbmdCYWNrZ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2hvbWUvMjk2LTI5NjUwNTRfbWFwLW9mLXNwYWluLXBuZy10cmFuc3BhcmVudC1wbmcucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PSdzY2FsZS1kb3duJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbj0nbGVmdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PSdmaWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJNYXAgb2YgU3BhaW4gd2l0aCBQcm92aW5jZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluQ29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0YWctbGluZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5MZWFybiBTcGFuaXNoITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Vc2UgaXQgaW4gYWxsIG9mIHRoZXNlIGNvdW50cmllcyB0aGF0IGhhdmUgU3BhbmlzaCBhcyB0aGVpciBwcmltYXJ5IGxhbmd1YWdlOiA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17IHNsaWRlU2hvd1JlZiB9IGNsYXNzTmFtZT1cInNsaWRlU2hvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVTaG93IHNsaWRlU2V0PXsgc2xpZGVzIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJ2ZXJiQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlZlcmJzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPkxlYXJuIGFwcHJveGltYXRlbHkgMTAwIG9mIHRoZSBtb3N0IGNvbW1vbmx5IHVzZWQgU3BhbmlzaCB2ZXJicyBieSBzdHVkeWluZyBmbGFzaGNhcmRzIGFuZCB0ZXN0aW5nIHlvdXIgc3R1ZHkgc2tpbGxzIHVzaW5nIHRoZSBjb25qdWdhdG9yIGFuZCBwbGF5aW5nIHRoZSBzbGlkZXIuIFRoZSB2ZXJicyBhcmUgaW4gdGhlIGluZGljYXRpdmUgZm9ybSB3aXRoIHByZXNlbnQsIHByZXRlcml0ZSwgaW1wZXJmZWN0LCBjb25kaXRpb25hbCwgYW5kIGZ1dHVyZSB0ZW5zZXMuPC9wPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwidm9jYWJ1bGFyeUNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Wb2NhYnVsYXJ5PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlRoaXMgc2l0ZSBoYXMgb3ZlciA3MDAgd29yZHMgKGFuZCBjb3VudGluZyEpIHRvIHN0YXJ0IHlvdXIgKGFuZCBteSkgU3BhbmlzaC1sZWFybmluZyBqb3VybmV5ISBTdGFydCBieSBzdHVkeWluZyB0aGUgZmxhc2hjYXJkcy4gWW91IGNhbiBjaG9vc2UgdG8gc3R1ZHkgYSBjYXRlZ29yeSBvciBhbGwgb2YgdGhlIHZvY2FidWxhcnkuIEFmdGVyIHlvdSBhcmUgY29uZmlkZW50IGluIHlvdXIgaW4gbmV3IHZvY2FidWxhcnksIHlvdSBjYW4gdGVzdCB5b3Vyc2VsZiBieSB1c2luZyB0aGUgY29tcGxldGlvbiwgZmlsbC1pbiwgcXVpeiwgc2NyYW1ibGUsIGFuZCBzbGlkZXIgZXhlcmNpc2VzLiBFYWNoIGV4ZXJjaXNlIGFsbG93cyB5b3UgdG8gY2hvb3NlIGEgY2F0ZWdvcnkgb3IgYWxsIHZvY2FidWxhcnkgYW5kIHRoZSBudW1iZXIgb2YgcXVlc3Rpb25zICg1LCAxMCwgMTUsIGFuZCAyMCkgeW91IHdhbnQuIEFmdGVyIHlvdSdyZSBkb25lLCB5b3UgYXJlIHByZXNlbnRlZCB3aXRoIGEgcmVwb3J0IGRldGFpbGluZyB0aGUgcGVyY2VudGFnZSBjb3JyZWN0IGFuZCBjb3JyZWN0IGFuc3dlcnMgYW5kIHlvdXIgYW5zd2Vycy48L3A+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPGZvb3Rlcj5cclxuXHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkltYWdlIiwiU2xpZGVTaG93IiwiSW5kZXgiLCJzbGlkZXMiLCJpbWFnZSIsImNhcHRpb24iLCJzbGlkZSIsInNldFNsaWRlIiwiZ2FwIiwic2xpZGVTaG93UmVmIiwiaW5jcmVtZW50U2xpZGUiLCJsZW5ndGgiLCJhbGxTbGlkZXMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsYXNzTGlzdCIsImFkZCIsImkiLCJzaG93TmV3U2xpZGUiLCJwcmV2aW91cyIsInJlbW92ZSIsInNldEludGVydmFsIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJzcmMiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImxheW91dCIsImFsdCIsInNlY3Rpb24iLCJoMSIsImgyIiwicmVmIiwic2xpZGVTZXQiLCJwIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});