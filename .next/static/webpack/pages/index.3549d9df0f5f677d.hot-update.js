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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/slideShow */ \"./src/components/slideShow.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Index = function() {\n    _s();\n    var slides = [\n        {\n            image: \"/images/home/Flag-Argentina.webp\",\n            caption: \"Argentina\"\n        },\n        {\n            image: \"/images/home/Flag-Bolivia.webp\",\n            caption: \"Bolivia\"\n        },\n        {\n            image: \"/images/home/Flag-Chile.webp\",\n            caption: \"Chile\"\n        },\n        {\n            image: \"/images/home/Flag-Colombia.webp\",\n            caption: \"Colombia\"\n        },\n        {\n            image: \"/images/home/Flag-Costa-Rica.webp\",\n            caption: \"Costa Rica\"\n        },\n        {\n            image: \"/images/home/Flag-Dominican-Republic.webp\",\n            caption: \"Dominican Republic\"\n        },\n        {\n            image: \"/images/home/Flag-Ecuador.webp\",\n            caption: \"Ecuador\"\n        },\n        {\n            image: \"/images/home/Flag-El-Salvador.webp\",\n            caption: \"El Salvador\"\n        },\n        {\n            image: \"/images/home/Flag-Equatorial Guinea.webp\",\n            caption: \"Ecquatorial Guinea\"\n        },\n        {\n            image: \"/images/home/Flag-Guatemala.webp\",\n            caption: \"Guatemala\"\n        },\n        {\n            image: \"/images/home/Flag-Honduras.webp\",\n            caption: \"Honduras\"\n        },\n        {\n            image: \"/images/home/Flag-Mexico.webp\",\n            caption: \"Mexico\"\n        },\n        {\n            image: \"/images/home/Flag-Nicaragua.webp\",\n            caption: \"Nicaragua\"\n        },\n        {\n            image: \"/images/home/Flag-Panama.webp\",\n            caption: \"Panama\"\n        },\n        {\n            image: \"/images/home/Flag-Paraguay.webp\",\n            caption: \"Paraguay\"\n        },\n        {\n            image: \"/images/home/Flag-Peru.webp\",\n            caption: \"Peru\"\n        },\n        {\n            image: \"/images/home/Flag-Spain.webp\",\n            caption: \"Spain\"\n        },\n        {\n            image: \"/images/home/Flag-Uruguay.webp\",\n            caption: \"Uruguay\"\n        },\n        {\n            image: \"/images/home/Flag-Venezuela.webp\",\n            caption: \"Venezuela\"\n        }\n    ];\n    var gap = 2000;\n    var slideShowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var allSlides;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        allSlides = slideShowRef && slideShowRef.current.querySelectorAll(\"div\");\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = allSlides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var slide = _step.value;\n                slide.classList.add(\"not-active\");\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n    }, []);\n    var showSlide = function(slide) {\n        var previous;\n        if (slide > 0) {\n            previous = slide - 1;\n            allSlides[previous] && allSlides[previous].classList.remove(\"active\");\n            allSlides[previous].classList.add(\"not-active\");\n        }\n        allSlides[slide] && allSlides[slide].classList.add(\"active\");\n    };\n    setInterval(function() {\n        var slide = 0;\n        if (slide < slides.length) {\n            showSlide(slide);\n        }\n        slide++;\n        console.log(slide);\n    }, gap);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"home\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"intro\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"spanish-map\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"landingBackground\",\n                            src: \"/images/home/296-2965054_map-of-spain-png-transparent-png.png\",\n                            objectFit: \"scale-down\",\n                            objectPosition: \"left\",\n                            layout: \"fill\",\n                            priority: true,\n                            alt: \"Map of Spain with Provinces\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mainContent\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: \"tag-line\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Learn Spanish!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Use it in all of these countries that have Spanish as their primary language: \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 138,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: slideShowRef,\n                                className: \"slideShow\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    slideSet: slides\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 140,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 123,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"verbContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Verbs\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Learn approximately 100 of the most commonly used Spanish verbs by studying flashcards and testing your study skills using the conjugator and playing the slider. The verbs are in the indicative form with present, preterite, imperfect, conditional, and future tenses.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 145,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"vocabularyContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Vocabulary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"This site has over 700 words (and counting!) to start your (and my) Spanish-learning journey! Start by studying the flashcards. You can choose to study a category or all of the vocabulary. After you are confident in your in new vocabulary, you can test yourself by using the completion, fill-in, quiz, scramble, and slider exercises. Each exercise allows you to choose a category or all vocabulary and the number of questions (5, 10, 15, and 20) you want. After you're done, you are presented with a report detailing the percentage correct and correct answers and your answers.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 149,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 153,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n        lineNumber: 122,\n        columnNumber: 9\n    }, _this);\n};\n_s(Index, \"I+HiR95UXA7AnwpAh+jH+JDqg0U=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hCLDhEQUFDTyxTQUFPO2dDQUFDUCxTQUFTLEVBQUMsVUFBVTs7a0RBQ3pCLDhEQUFDUSxJQUFFO2tEQUFDLGdCQUFjOzs7Ozs2Q0FBSztrREFDdkIsOERBQUNDLElBQUU7a0RBQUMsZ0ZBQThFOzs7Ozs2Q0FBSzs7Ozs7O3FDQUNqRjswQ0FDViw4REFBQ1gsS0FBRztnQ0FBQ1ksR0FBRyxFQUFHMUIsWUFBWTtnQ0FBR2dCLFNBQVMsRUFBQyxXQUFXOzBDQUMzQyw0RUFBQ3RCLGlFQUFTO29DQUFDaUMsUUFBUSxFQUFHL0IsTUFBTTs7Ozs7eUNBQUs7Ozs7O3FDQUMvQjs7Ozs7OzZCQUNKOzs7Ozs7cUJBQ0o7MEJBQ04sOERBQUMyQixTQUFPO2dCQUFDUixFQUFFLEVBQUMsYUFBYTs7a0NBQ3JCLDhEQUFDVSxJQUFFO2tDQUFDLE9BQUs7Ozs7OzZCQUFLO2tDQUNkLDhEQUFDRyxHQUFDO2tDQUFDLDRRQUEwUTs7Ozs7NkJBQUk7Ozs7OztxQkFDM1E7MEJBQ1YsOERBQUNMLFNBQU87Z0JBQUNSLEVBQUUsRUFBQyxtQkFBbUI7O2tDQUMzQiw4REFBQ1UsSUFBRTtrQ0FBQyxZQUFVOzs7Ozs2QkFBSztrQ0FDbkIsOERBQUNHLEdBQUM7a0NBQUMsbWtCQUFpa0I7Ozs7OzZCQUFJOzs7Ozs7cUJBQ2xrQjswQkFDViw4REFBQ0MsUUFBTTs7OztxQkFFRTs7Ozs7O2FBQ1AsQ0FDVDtDQUNKO0dBdkpLbEMsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBeUpYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9mb290ZXJcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgU2xpZGVTaG93IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL3NsaWRlU2hvdyc7XHJcbmltcG9ydCB7IGNsZWFySW50ZXJ2YWwgfSBmcm9tICd0aW1lcnMnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzbGlkZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUFyZ2VudGluYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0FyZ2VudGluYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1Cb2xpdmlhLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnQm9saXZpYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1DaGlsZS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0NoaWxlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUNvbG9tYmlhLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnQ29sb21iaWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctQ29zdGEtUmljYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0Nvc3RhIFJpY2EnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctRG9taW5pY2FuLVJlcHVibGljLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnRG9taW5pY2FuIFJlcHVibGljJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUVjdWFkb3Iud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdFY3VhZG9yJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUVsLVNhbHZhZG9yLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnRWwgU2FsdmFkb3InXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctRXF1YXRvcmlhbCBHdWluZWEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdFY3F1YXRvcmlhbCBHdWluZWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctR3VhdGVtYWxhLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnR3VhdGVtYWxhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUhvbmR1cmFzLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnSG9uZHVyYXMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctTWV4aWNvLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnTWV4aWNvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLU5pY2FyYWd1YS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ05pY2FyYWd1YSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1QYW5hbWEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdQYW5hbWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctUGFyYWd1YXkud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdQYXJhZ3VheSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1QZXJ1LndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnUGVydSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1TcGFpbi53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ1NwYWluJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLVVydWd1YXkud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdVcnVndWF5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLVZlbmV6dWVsYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ1ZlbmV6dWVsYSdcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGdhcCA9IDIwMDA7XHJcbiAgICBjb25zdCBzbGlkZVNob3dSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBsZXQgYWxsU2xpZGVzO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYWxsU2xpZGVzID0gc2xpZGVTaG93UmVmICYmIHNsaWRlU2hvd1JlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xyXG4gICAgICAgIGZvcihjb25zdCBzbGlkZSBvZiBhbGxTbGlkZXMpIHtcclxuICAgICAgICAgICAgc2xpZGUuY2xhc3NMaXN0LmFkZCgnbm90LWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBzaG93U2xpZGUgPSAoc2xpZGUpID0+IHtcclxuICAgICAgICBsZXQgcHJldmlvdXM7XHJcblxyXG4gICAgICAgIGlmKHNsaWRlID4gMCkge1xyXG4gICAgICAgICAgICBwcmV2aW91cyA9IHNsaWRlIC0gMTtcclxuXHJcbiAgICAgICAgICAgIGFsbFNsaWRlc1twcmV2aW91c10gJiYgYWxsU2xpZGVzW3ByZXZpb3VzXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICBhbGxTbGlkZXNbcHJldmlvdXNdLmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFsbFNsaWRlc1tzbGlkZV0gJiYgYWxsU2xpZGVzW3NsaWRlXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNsaWRlID0gMDtcclxuICAgICAgICBpZihzbGlkZSA8IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2hvd1NsaWRlKHNsaWRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpZGUrKztcclxuICAgICAgICBjb25zb2xlLmxvZyhzbGlkZSk7XHJcbiAgICB9LCBnYXAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJob21lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnRyb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYW5pc2gtbWFwJz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGFuZGluZ0JhY2tncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaG9tZS8yOTYtMjk2NTA1NF9tYXAtb2Ytc3BhaW4tcG5nLXRyYW5zcGFyZW50LXBuZy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9J3NjYWxlLWRvd24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPSdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9J2ZpbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJNYXAgb2YgU3BhaW4gd2l0aCBQcm92aW5jZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluQ29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0YWctbGluZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5MZWFybiBTcGFuaXNoITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Vc2UgaXQgaW4gYWxsIG9mIHRoZXNlIGNvdW50cmllcyB0aGF0IGhhdmUgU3BhbmlzaCBhcyB0aGVpciBwcmltYXJ5IGxhbmd1YWdlOiA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17IHNsaWRlU2hvd1JlZiB9IGNsYXNzTmFtZT1cInNsaWRlU2hvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVTaG93IHNsaWRlU2V0PXsgc2xpZGVzIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJ2ZXJiQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlZlcmJzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPkxlYXJuIGFwcHJveGltYXRlbHkgMTAwIG9mIHRoZSBtb3N0IGNvbW1vbmx5IHVzZWQgU3BhbmlzaCB2ZXJicyBieSBzdHVkeWluZyBmbGFzaGNhcmRzIGFuZCB0ZXN0aW5nIHlvdXIgc3R1ZHkgc2tpbGxzIHVzaW5nIHRoZSBjb25qdWdhdG9yIGFuZCBwbGF5aW5nIHRoZSBzbGlkZXIuIFRoZSB2ZXJicyBhcmUgaW4gdGhlIGluZGljYXRpdmUgZm9ybSB3aXRoIHByZXNlbnQsIHByZXRlcml0ZSwgaW1wZXJmZWN0LCBjb25kaXRpb25hbCwgYW5kIGZ1dHVyZSB0ZW5zZXMuPC9wPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwidm9jYWJ1bGFyeUNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Wb2NhYnVsYXJ5PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlRoaXMgc2l0ZSBoYXMgb3ZlciA3MDAgd29yZHMgKGFuZCBjb3VudGluZyEpIHRvIHN0YXJ0IHlvdXIgKGFuZCBteSkgU3BhbmlzaC1sZWFybmluZyBqb3VybmV5ISBTdGFydCBieSBzdHVkeWluZyB0aGUgZmxhc2hjYXJkcy4gWW91IGNhbiBjaG9vc2UgdG8gc3R1ZHkgYSBjYXRlZ29yeSBvciBhbGwgb2YgdGhlIHZvY2FidWxhcnkuIEFmdGVyIHlvdSBhcmUgY29uZmlkZW50IGluIHlvdXIgaW4gbmV3IHZvY2FidWxhcnksIHlvdSBjYW4gdGVzdCB5b3Vyc2VsZiBieSB1c2luZyB0aGUgY29tcGxldGlvbiwgZmlsbC1pbiwgcXVpeiwgc2NyYW1ibGUsIGFuZCBzbGlkZXIgZXhlcmNpc2VzLiBFYWNoIGV4ZXJjaXNlIGFsbG93cyB5b3UgdG8gY2hvb3NlIGEgY2F0ZWdvcnkgb3IgYWxsIHZvY2FidWxhcnkgYW5kIHRoZSBudW1iZXIgb2YgcXVlc3Rpb25zICg1LCAxMCwgMTUsIGFuZCAyMCkgeW91IHdhbnQuIEFmdGVyIHlvdSdyZSBkb25lLCB5b3UgYXJlIHByZXNlbnRlZCB3aXRoIGEgcmVwb3J0IGRldGFpbGluZyB0aGUgcGVyY2VudGFnZSBjb3JyZWN0IGFuZCBjb3JyZWN0IGFuc3dlcnMgYW5kIHlvdXIgYW5zd2Vycy48L3A+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPGZvb3Rlcj5cclxuXHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJJbWFnZSIsIlNsaWRlU2hvdyIsIkluZGV4Iiwic2xpZGVzIiwiaW1hZ2UiLCJjYXB0aW9uIiwiZ2FwIiwic2xpZGVTaG93UmVmIiwiYWxsU2xpZGVzIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzbGlkZSIsImNsYXNzTGlzdCIsImFkZCIsInNob3dTbGlkZSIsInByZXZpb3VzIiwicmVtb3ZlIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJzcmMiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImxheW91dCIsInByaW9yaXR5IiwiYWx0Iiwic2VjdGlvbiIsImgxIiwiaDIiLCJyZWYiLCJzbGlkZVNldCIsInAiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});