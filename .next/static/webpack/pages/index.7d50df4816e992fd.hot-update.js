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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/slideShow */ \"./src/components/slideShow.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Index = function() {\n    _s();\n    var slideData = [\n        {\n            image: \"/images/home/Flag-Argentina.webp\",\n            caption: \"Argentina\"\n        },\n        {\n            image: \"/images/home/Flag-Bolivia.webp\",\n            caption: \"Bolivia\"\n        },\n        {\n            image: \"/images/home/Flag-Chile.webp\",\n            caption: \"Chile\"\n        },\n        {\n            image: \"/images/home/Flag-Colombia.webp\",\n            caption: \"Colombia\"\n        },\n        {\n            image: \"/images/home/Flag-Costa-Rica.webp\",\n            caption: \"Costa Rica\"\n        },\n        {\n            image: \"/images/home/Flag-Dominican-Republic.webp\",\n            caption: \"Dominican Republic\"\n        },\n        {\n            image: \"/images/home/Flag-Ecuador.webp\",\n            caption: \"Ecuador\"\n        },\n        {\n            image: \"/images/home/Flag-El-Salvador.webp\",\n            caption: \"El Salvador\"\n        },\n        {\n            image: \"/images/home/Flag-Equatorial Guinea.webp\",\n            caption: \"Ecquatorial Guinea\"\n        },\n        {\n            image: \"/images/home/Flag-Guatemala.webp\",\n            caption: \"Guatemala\"\n        },\n        {\n            image: \"/images/home/Flag-Honduras.webp\",\n            caption: \"Honduras\"\n        },\n        {\n            image: \"/images/home/Flag-Mexico.webp\",\n            caption: \"Mexico\"\n        },\n        {\n            image: \"/images/home/Flag-Nicaragua.webp\",\n            caption: \"Nicaragua\"\n        },\n        {\n            image: \"/images/home/Flag-Panama.webp\",\n            caption: \"Panama\"\n        },\n        {\n            image: \"/images/home/Flag-Paraguay.webp\",\n            caption: \"Paraguay\"\n        },\n        {\n            image: \"/images/home/Flag-Peru.webp\",\n            caption: \"Peru\"\n        },\n        {\n            image: \"/images/home/Flag-Spain.webp\",\n            caption: \"Spain\"\n        },\n        {\n            image: \"/images/home/Flag-Uruguay.webp\",\n            caption: \"Uruguay\"\n        },\n        {\n            image: \"/images/home/Flag-Venezuela.webp\",\n            caption: \"Venezuela\"\n        }\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(slideData), slides = ref[0], setSlides = ref[1];\n    var gap = 2000;\n    var slideShowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var allSlides;\n    var slide = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        allSlides = slideShowRef && slideShowRef.current.querySelectorAll(\"div\");\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = allSlides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var slide = _step.value;\n                slide.classList.add(\"not-active\");\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n    }, []);\n    // const showSlide = (slide) => {\n    //     let previous;\n    //     if(slide > 0) {\n    //         previous = slide - 1;\n    //         slides[previous] && slides[previous].classList.remove('active')\n    //         slides[previous].classList.add('not-active');\n    //     }\n    //     slides[slide] && slides[slide].classList.add('active');\n    // }\n    setInterval(function() {\n        if (slide < slides.length) {\n            slides[slide];\n        }\n        slide++;\n    }, gap);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"home\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"intro\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"spanish-map\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"landingBackground\",\n                            src: \"/images/home/296-2965054_map-of-spain-png-transparent-png.png\",\n                            objectFit: \"scale-down\",\n                            objectPosition: \"left\",\n                            layout: \"fill\",\n                            priority: true,\n                            alt: \"Map of Spain with Provinces\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mainContent\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: \"tag-line\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Learn Spanish!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Use it in all of these countries that have Spanish as their primary language: \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 138,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: slideShowRef,\n                                className: \"slideShow\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    slideSet: slides\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 140,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 123,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"verbContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Verbs\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Learn approximately 100 of the most commonly used Spanish verbs by studying flashcards and testing your study skills using the conjugator and playing the slider. The verbs are in the indicative form with present, preterite, imperfect, conditional, and future tenses.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 145,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"vocabularyContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Vocabulary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"This site has over 700 words (and counting!) to start your (and my) Spanish-learning journey! Start by studying the flashcards. You can choose to study a category or all of the vocabulary. After you are confident in your in new vocabulary, you can test yourself by using the completion, fill-in, quiz, scramble, and slider exercises. Each exercise allows you to choose a category or all vocabulary and the number of questions (5, 10, 15, and 20) you want. After you're done, you are presented with a report detailing the percentage correct and correct answers and your answers.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 149,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 153,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n        lineNumber: 122,\n        columnNumber: 9\n    }, _this);\n};\n_s(Index, \"TP35UVYkDzVTAiUna4KIvXKpesA=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29DQUFDOEIsUUFBUSxFQUFHekIsTUFBTTs7Ozs7eUNBQUs7Ozs7O3FDQUMvQjs7Ozs7OzZCQUNKOzs7Ozs7cUJBQ0o7MEJBQ04sOERBQUNxQixTQUFPO2dCQUFDUixFQUFFLEVBQUMsYUFBYTs7a0NBQ3JCLDhEQUFDVSxJQUFFO2tDQUFDLE9BQUs7Ozs7OzZCQUFLO2tDQUNkLDhEQUFDRyxHQUFDO2tDQUFDLDRRQUEwUTs7Ozs7NkJBQUk7Ozs7OztxQkFDM1E7MEJBQ1YsOERBQUNMLFNBQU87Z0JBQUNSLEVBQUUsRUFBQyxtQkFBbUI7O2tDQUMzQiw4REFBQ1UsSUFBRTtrQ0FBQyxZQUFVOzs7Ozs2QkFBSztrQ0FDbkIsOERBQUNHLEdBQUM7a0NBQUMsbWtCQUFpa0I7Ozs7OzZCQUFJOzs7Ozs7cUJBQ2xrQjswQkFDViw4REFBQ0MsUUFBTTs7OztxQkFFRTs7Ozs7O2FBQ1AsQ0FDVDtDQUNKO0dBdkpLL0IsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBeUpYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFNsaWRlU2hvdyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9zbGlkZVNob3cnO1xyXG5pbXBvcnQgeyBjbGVhckludGVydmFsIH0gZnJvbSAndGltZXJzJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2xpZGVEYXRhID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1BcmdlbnRpbmEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdBcmdlbnRpbmEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctQm9saXZpYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0JvbGl2aWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctQ2hpbGUud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdDaGlsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1Db2xvbWJpYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0NvbG9tYmlhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUNvc3RhLVJpY2Eud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdDb3N0YSBSaWNhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLURvbWluaWNhbi1SZXB1YmxpYy53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0RvbWluaWNhbiBSZXB1YmxpYydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1FY3VhZG9yLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnRWN1YWRvcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1FbC1TYWx2YWRvci53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0VsIFNhbHZhZG9yJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUVxdWF0b3JpYWwgR3VpbmVhLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnRWNxdWF0b3JpYWwgR3VpbmVhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUd1YXRlbWFsYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0d1YXRlbWFsYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1Ib25kdXJhcy53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0hvbmR1cmFzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLU1leGljby53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ01leGljbydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1OaWNhcmFndWEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdOaWNhcmFndWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctUGFuYW1hLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnUGFuYW1hJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLVBhcmFndWF5LndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnUGFyYWd1YXknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctUGVydS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ1BlcnUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctU3BhaW4ud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdTcGFpbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1VcnVndWF5LndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnVXJ1Z3VheSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1WZW5lenVlbGEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdWZW5lenVlbGEnXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIGNvbnN0IFtzbGlkZXMsIHNldFNsaWRlc10gPSB1c2VTdGF0ZShzbGlkZURhdGEpO1xyXG5cclxuICAgIGNvbnN0IGdhcCA9IDIwMDA7XHJcbiAgICBjb25zdCBzbGlkZVNob3dSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBsZXQgYWxsU2xpZGVzO1xyXG4gICAgbGV0IHNsaWRlID0gMDtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFsbFNsaWRlcyA9IHNsaWRlU2hvd1JlZiAmJiBzbGlkZVNob3dSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcclxuICAgICAgICBmb3IoY29uc3Qgc2xpZGUgb2YgYWxsU2xpZGVzKSB7XHJcbiAgICAgICAgICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy8gY29uc3Qgc2hvd1NsaWRlID0gKHNsaWRlKSA9PiB7XHJcbiAgICAvLyAgICAgbGV0IHByZXZpb3VzO1xyXG5cclxuICAgIC8vICAgICBpZihzbGlkZSA+IDApIHtcclxuICAgIC8vICAgICAgICAgcHJldmlvdXMgPSBzbGlkZSAtIDE7XHJcblxyXG4gICAgLy8gICAgICAgICBzbGlkZXNbcHJldmlvdXNdICYmIHNsaWRlc1twcmV2aW91c10uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIC8vICAgICAgICAgc2xpZGVzW3ByZXZpb3VzXS5jbGFzc0xpc3QuYWRkKCdub3QtYWN0aXZlJyk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBzbGlkZXNbc2xpZGVdICYmIHNsaWRlc1tzbGlkZV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmKHNsaWRlIDwgc2xpZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzbGlkZXNbc2xpZGVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZSsrO1xyXG4gICAgfSwgZ2FwICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiaG9tZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaW50cm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFuaXNoLW1hcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xhbmRpbmdCYWNrZ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2hvbWUvMjk2LTI5NjUwNTRfbWFwLW9mLXNwYWluLXBuZy10cmFuc3BhcmVudC1wbmcucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PSdzY2FsZS1kb3duJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbj0nbGVmdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PSdmaWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTWFwIG9mIFNwYWluIHdpdGggUHJvdmluY2VzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbkNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndGFnLWxpbmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+TGVhcm4gU3BhbmlzaCE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+VXNlIGl0IGluIGFsbCBvZiB0aGVzZSBjb3VudHJpZXMgdGhhdCBoYXZlIFNwYW5pc2ggYXMgdGhlaXIgcHJpbWFyeSBsYW5ndWFnZTogPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyBzbGlkZVNob3dSZWYgfSBjbGFzc05hbWU9XCJzbGlkZVNob3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlU2hvdyBzbGlkZVNldD17IHNsaWRlcyB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwidmVyYkNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5WZXJiczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5MZWFybiBhcHByb3hpbWF0ZWx5IDEwMCBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIFNwYW5pc2ggdmVyYnMgYnkgc3R1ZHlpbmcgZmxhc2hjYXJkcyBhbmQgdGVzdGluZyB5b3VyIHN0dWR5IHNraWxscyB1c2luZyB0aGUgY29uanVnYXRvciBhbmQgcGxheWluZyB0aGUgc2xpZGVyLiBUaGUgdmVyYnMgYXJlIGluIHRoZSBpbmRpY2F0aXZlIGZvcm0gd2l0aCBwcmVzZW50LCBwcmV0ZXJpdGUsIGltcGVyZmVjdCwgY29uZGl0aW9uYWwsIGFuZCBmdXR1cmUgdGVuc2VzLjwvcD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cInZvY2FidWxhcnlDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+Vm9jYWJ1bGFyeTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGlzIHNpdGUgaGFzIG92ZXIgNzAwIHdvcmRzIChhbmQgY291bnRpbmchKSB0byBzdGFydCB5b3VyIChhbmQgbXkpIFNwYW5pc2gtbGVhcm5pbmcgam91cm5leSEgU3RhcnQgYnkgc3R1ZHlpbmcgdGhlIGZsYXNoY2FyZHMuIFlvdSBjYW4gY2hvb3NlIHRvIHN0dWR5IGEgY2F0ZWdvcnkgb3IgYWxsIG9mIHRoZSB2b2NhYnVsYXJ5LiBBZnRlciB5b3UgYXJlIGNvbmZpZGVudCBpbiB5b3VyIGluIG5ldyB2b2NhYnVsYXJ5LCB5b3UgY2FuIHRlc3QgeW91cnNlbGYgYnkgdXNpbmcgdGhlIGNvbXBsZXRpb24sIGZpbGwtaW4sIHF1aXosIHNjcmFtYmxlLCBhbmQgc2xpZGVyIGV4ZXJjaXNlcy4gRWFjaCBleGVyY2lzZSBhbGxvd3MgeW91IHRvIGNob29zZSBhIGNhdGVnb3J5IG9yIGFsbCB2b2NhYnVsYXJ5IGFuZCB0aGUgbnVtYmVyIG9mIHF1ZXN0aW9ucyAoNSwgMTAsIDE1LCBhbmQgMjApIHlvdSB3YW50LiBBZnRlciB5b3UncmUgZG9uZSwgeW91IGFyZSBwcmVzZW50ZWQgd2l0aCBhIHJlcG9ydCBkZXRhaWxpbmcgdGhlIHBlcmNlbnRhZ2UgY29ycmVjdCBhbmQgY29ycmVjdCBhbnN3ZXJzIGFuZCB5b3VyIGFuc3dlcnMuPC9wPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxmb290ZXI+XHJcblxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJJbWFnZSIsIlNsaWRlU2hvdyIsIkluZGV4Iiwic2xpZGVEYXRhIiwiaW1hZ2UiLCJjYXB0aW9uIiwic2xpZGVzIiwic2V0U2xpZGVzIiwiZ2FwIiwic2xpZGVTaG93UmVmIiwiYWxsU2xpZGVzIiwic2xpZGUiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsYXNzTGlzdCIsImFkZCIsInNldEludGVydmFsIiwibGVuZ3RoIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJzcmMiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImxheW91dCIsInByaW9yaXR5IiwiYWx0Iiwic2VjdGlvbiIsImgxIiwiaDIiLCJyZWYiLCJzbGlkZVNldCIsInAiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});