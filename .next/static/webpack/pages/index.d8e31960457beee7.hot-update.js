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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/slideShow */ \"./src/components/slideShow.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Index = function() {\n    _s();\n    var slideData = [\n        {\n            image: \"/images/home/Flag-Argentina.webp\",\n            caption: \"Argentina\"\n        },\n        {\n            image: \"/images/home/Flag-Bolivia.webp\",\n            caption: \"Bolivia\"\n        },\n        {\n            image: \"/images/home/Flag-Chile.webp\",\n            caption: \"Chile\"\n        },\n        {\n            image: \"/images/home/Flag-Colombia.webp\",\n            caption: \"Colombia\"\n        },\n        {\n            image: \"/images/home/Flag-Costa-Rica.webp\",\n            caption: \"Costa Rica\"\n        },\n        {\n            image: \"/images/home/Flag-Dominican-Republic.webp\",\n            caption: \"Dominican Republic\"\n        },\n        {\n            image: \"/images/home/Flag-Ecuador.webp\",\n            caption: \"Ecuador\"\n        },\n        {\n            image: \"/images/home/Flag-El-Salvador.webp\",\n            caption: \"El Salvador\"\n        },\n        {\n            image: \"/images/home/Flag-Equatorial-Guinea.webp\",\n            caption: \"Equatorial Guinea\"\n        },\n        {\n            image: \"/images/home/Flag-Guatemala.webp\",\n            caption: \"Guatemala\"\n        },\n        {\n            image: \"/images/home/Flag-Honduras.webp\",\n            caption: \"Honduras\"\n        },\n        {\n            image: \"/images/home/Flag-Mexico.webp\",\n            caption: \"Mexico\"\n        },\n        {\n            image: \"/images/home/Flag-Nicaragua.webp\",\n            caption: \"Nicaragua\"\n        },\n        {\n            image: \"/images/home/Flag-Panama.webp\",\n            caption: \"Panama\"\n        },\n        {\n            image: \"/images/home/Flag-Paraguay.webp\",\n            caption: \"Paraguay\"\n        },\n        {\n            image: \"/images/home/Flag-Peru.webp\",\n            caption: \"Peru\"\n        },\n        {\n            image: \"/images/home/Flag-Spain.webp\",\n            caption: \"Spain\"\n        },\n        {\n            image: \"/images/home/Flag-Uruguay.webp\",\n            caption: \"Uruguay\"\n        },\n        {\n            image: \"/images/home/Flag-Venezuela.webp\",\n            caption: \"Venezuela\"\n        }\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slide = ref[0], setSlide = ref[1];\n    var slideShowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var incrementSlide = function() {\n        if (slide < slideData.length) {\n            setSlide(slide + 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var slides = slideShowRef.current.querySelectorAll(\"div\");\n        var playSlides = function() {\n            var previous;\n            if (slide > 0) {\n                previous = slide - 1;\n                slides[previous].classList.remove(\"active\");\n                slides[previous].classList.add(\"not-active\");\n            }\n            slides[slide].classList.remove(\"not-active\");\n            slides[slide].classList.add(\"active\");\n        };\n        incrementSlide();\n        setInterval(playSlides, 2000);\n    }, [\n        slide\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"home\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"intro\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"spanish-map\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"landingBackground\",\n                            src: \"/images/home/296-2965054_map-of-spain-png-transparent-png.png\",\n                            objectFit: \"scale-down\",\n                            objectPosition: \"left\",\n                            layout: \"fill\",\n                            priority: true,\n                            alt: \"Map of Spain with Provinces\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mainContent\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: \"tag-line\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Learn Spanish!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Use it in all of these countries that have Spanish as their primary language: \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: slideShowRef,\n                                className: \"slideShow\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    slideSet: slideData\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 115,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"verbContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Verbs\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Learn approximately 100 of the most commonly used Spanish verbs by studying flashcards and testing your study skills using the conjugator and playing the slider. The verbs are in the indicative form with present, preterite, imperfect, conditional, and future tenses.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 137,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"vocabularyContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Vocabulary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 142,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"This site has over 700 words (and counting!) to start your (and my) Spanish-learning journey! Start by studying the flashcards. You can choose to study a category or all of the vocabulary. After you are confident in your in new vocabulary, you can test yourself by using the completion, fill-in, quiz, scramble, and slider exercises. Each exercise allows you to choose a category or all vocabulary and the number of questions (5, 10, 15, and 20) you want. After you're done, you are presented with a report detailing the percentage correct and correct answers and your answers.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 141,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 145,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n        lineNumber: 114,\n        columnNumber: 9\n    }, _this);\n};\n_s(Index, \"HsTgwXyUns1hptUlPrkRpmUpDbk=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUNBQUs7Ozs7O3FDQUNsQzs7Ozs7OzZCQUNKOzs7Ozs7cUJBQ0o7MEJBQ04sOERBQUMwQixTQUFPO2dCQUFDUixFQUFFLEVBQUMsYUFBYTs7a0NBQ3JCLDhEQUFDVSxJQUFFO2tDQUFDLE9BQUs7Ozs7OzZCQUFLO2tDQUNkLDhEQUFDRyxHQUFDO2tDQUFDLDRRQUEwUTs7Ozs7NkJBQUk7Ozs7OztxQkFDM1E7MEJBQ1YsOERBQUNMLFNBQU87Z0JBQUNSLEVBQUUsRUFBQyxtQkFBbUI7O2tDQUMzQiw4REFBQ1UsSUFBRTtrQ0FBQyxZQUFVOzs7Ozs2QkFBSztrQ0FDbkIsOERBQUNHLEdBQUM7a0NBQUMsbWtCQUFpa0I7Ozs7OzZCQUFJOzs7Ozs7cUJBQ2xrQjswQkFDViw4REFBQ0MsUUFBTTs7OztxQkFFRTs7Ozs7O2FBQ1AsQ0FDVDtDQUNKO0dBL0lLakMsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBaUpYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFNsaWRlU2hvdyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9zbGlkZVNob3cnO1xyXG5pbXBvcnQgeyBjbGVhckludGVydmFsIH0gZnJvbSAndGltZXJzJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2xpZGVEYXRhID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1BcmdlbnRpbmEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdBcmdlbnRpbmEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctQm9saXZpYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0JvbGl2aWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctQ2hpbGUud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdDaGlsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1Db2xvbWJpYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0NvbG9tYmlhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUNvc3RhLVJpY2Eud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdDb3N0YSBSaWNhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLURvbWluaWNhbi1SZXB1YmxpYy53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0RvbWluaWNhbiBSZXB1YmxpYydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1FY3VhZG9yLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnRWN1YWRvcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1FbC1TYWx2YWRvci53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0VsIFNhbHZhZG9yJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUVxdWF0b3JpYWwtR3VpbmVhLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnRXF1YXRvcmlhbCBHdWluZWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctR3VhdGVtYWxhLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnR3VhdGVtYWxhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUhvbmR1cmFzLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnSG9uZHVyYXMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctTWV4aWNvLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnTWV4aWNvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLU5pY2FyYWd1YS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ05pY2FyYWd1YSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1QYW5hbWEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdQYW5hbWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctUGFyYWd1YXkud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdQYXJhZ3VheSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1QZXJ1LndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnUGVydSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1TcGFpbi53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ1NwYWluJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLVVydWd1YXkud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdVcnVndWF5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLVZlbmV6dWVsYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ1ZlbmV6dWVsYSdcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG4gICAgY29uc3QgW3NsaWRlLCBzZXRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHNsaWRlU2hvd1JlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRTbGlkZSA9ICgpID0+IHtcclxuICAgICAgICBpZihzbGlkZSA8IHNsaWRlRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2V0U2xpZGUoc2xpZGUgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzbGlkZXMgPSBzbGlkZVNob3dSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGxheVNsaWRlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHByZXZpb3VzO1xyXG4gICAgICAgICAgICBpZihzbGlkZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzID0gc2xpZGUgLSAxO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzW3ByZXZpb3VzXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1twcmV2aW91c10uY2xhc3NMaXN0LmFkZCgnbm90LWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNsaWRlc1tzbGlkZV0uY2xhc3NMaXN0LnJlbW92ZSgnbm90LWFjdGl2ZScpO1xyXG4gICAgICAgICAgICBzbGlkZXNbc2xpZGVdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbmNyZW1lbnRTbGlkZSgpO1xyXG4gICAgICAgIHNldEludGVydmFsKHBsYXlTbGlkZXMsIDIwMDApO1xyXG4gICAgfSwgW3NsaWRlXSk7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJob21lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnRyb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYW5pc2gtbWFwJz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGFuZGluZ0JhY2tncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaG9tZS8yOTYtMjk2NTA1NF9tYXAtb2Ytc3BhaW4tcG5nLXRyYW5zcGFyZW50LXBuZy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9J3NjYWxlLWRvd24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPSdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9J2ZpbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJNYXAgb2YgU3BhaW4gd2l0aCBQcm92aW5jZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluQ29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0YWctbGluZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5MZWFybiBTcGFuaXNoITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Vc2UgaXQgaW4gYWxsIG9mIHRoZXNlIGNvdW50cmllcyB0aGF0IGhhdmUgU3BhbmlzaCBhcyB0aGVpciBwcmltYXJ5IGxhbmd1YWdlOiA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17IHNsaWRlU2hvd1JlZiB9IGNsYXNzTmFtZT1cInNsaWRlU2hvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVTaG93IHNsaWRlU2V0PXsgc2xpZGVEYXRhIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJ2ZXJiQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlZlcmJzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPkxlYXJuIGFwcHJveGltYXRlbHkgMTAwIG9mIHRoZSBtb3N0IGNvbW1vbmx5IHVzZWQgU3BhbmlzaCB2ZXJicyBieSBzdHVkeWluZyBmbGFzaGNhcmRzIGFuZCB0ZXN0aW5nIHlvdXIgc3R1ZHkgc2tpbGxzIHVzaW5nIHRoZSBjb25qdWdhdG9yIGFuZCBwbGF5aW5nIHRoZSBzbGlkZXIuIFRoZSB2ZXJicyBhcmUgaW4gdGhlIGluZGljYXRpdmUgZm9ybSB3aXRoIHByZXNlbnQsIHByZXRlcml0ZSwgaW1wZXJmZWN0LCBjb25kaXRpb25hbCwgYW5kIGZ1dHVyZSB0ZW5zZXMuPC9wPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwidm9jYWJ1bGFyeUNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Wb2NhYnVsYXJ5PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlRoaXMgc2l0ZSBoYXMgb3ZlciA3MDAgd29yZHMgKGFuZCBjb3VudGluZyEpIHRvIHN0YXJ0IHlvdXIgKGFuZCBteSkgU3BhbmlzaC1sZWFybmluZyBqb3VybmV5ISBTdGFydCBieSBzdHVkeWluZyB0aGUgZmxhc2hjYXJkcy4gWW91IGNhbiBjaG9vc2UgdG8gc3R1ZHkgYSBjYXRlZ29yeSBvciBhbGwgb2YgdGhlIHZvY2FidWxhcnkuIEFmdGVyIHlvdSBhcmUgY29uZmlkZW50IGluIHlvdXIgaW4gbmV3IHZvY2FidWxhcnksIHlvdSBjYW4gdGVzdCB5b3Vyc2VsZiBieSB1c2luZyB0aGUgY29tcGxldGlvbiwgZmlsbC1pbiwgcXVpeiwgc2NyYW1ibGUsIGFuZCBzbGlkZXIgZXhlcmNpc2VzLiBFYWNoIGV4ZXJjaXNlIGFsbG93cyB5b3UgdG8gY2hvb3NlIGEgY2F0ZWdvcnkgb3IgYWxsIHZvY2FidWxhcnkgYW5kIHRoZSBudW1iZXIgb2YgcXVlc3Rpb25zICg1LCAxMCwgMTUsIGFuZCAyMCkgeW91IHdhbnQuIEFmdGVyIHlvdSdyZSBkb25lLCB5b3UgYXJlIHByZXNlbnRlZCB3aXRoIGEgcmVwb3J0IGRldGFpbGluZyB0aGUgcGVyY2VudGFnZSBjb3JyZWN0IGFuZCBjb3JyZWN0IGFuc3dlcnMgYW5kIHlvdXIgYW5zd2Vycy48L3A+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPGZvb3Rlcj5cclxuXHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkltYWdlIiwiU2xpZGVTaG93IiwiSW5kZXgiLCJzbGlkZURhdGEiLCJpbWFnZSIsImNhcHRpb24iLCJzbGlkZSIsInNldFNsaWRlIiwic2xpZGVTaG93UmVmIiwiaW5jcmVtZW50U2xpZGUiLCJsZW5ndGgiLCJzbGlkZXMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBsYXlTbGlkZXMiLCJwcmV2aW91cyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldEludGVydmFsIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJzcmMiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImxheW91dCIsInByaW9yaXR5IiwiYWx0Iiwic2VjdGlvbiIsImgxIiwiaDIiLCJyZWYiLCJzbGlkZVNldCIsInAiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});