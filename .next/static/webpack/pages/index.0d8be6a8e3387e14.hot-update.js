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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/slideShow */ \"./src/components/slideShow.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Index = function() {\n    _s();\n    var slides = [\n        {\n            image: \"/images/home/Flag-Argentina.webp\",\n            caption: \"Argentina\"\n        },\n        {\n            image: \"/images/home/Flag-Bolivia.webp\",\n            caption: \"Bolivia\"\n        },\n        {\n            image: \"/images/home/Flag-Chile.webp\",\n            caption: \"Chile\"\n        },\n        {\n            image: \"/images/home/Flag-Colombia.webp\",\n            caption: \"Colombia\"\n        },\n        {\n            image: \"/images/home/Flag-Costa-Rica.webp\",\n            caption: \"Costa Rica\"\n        },\n        {\n            image: \"/images/home/Flag-Dominican-Republic.webp\",\n            caption: \"Dominican Republic\"\n        },\n        {\n            image: \"/images/home/Flag-Ecuador.webp\",\n            caption: \"Ecuador\"\n        },\n        {\n            image: \"/images/home/Flag-El-Salvador.webp\",\n            caption: \"El Salvador\"\n        },\n        {\n            image: \"/images/home/Flag-Equatorial Guinea.webp\",\n            caption: \"Ecquatorial Guinea\"\n        },\n        {\n            image: \"/images/home/Flag-Guatemala.webp\",\n            caption: \"Guatemala\"\n        },\n        {\n            image: \"/images/home/Flag-Honduras.webp\",\n            caption: \"Honduras\"\n        },\n        {\n            image: \"/images/home/Flag-Mexico.webp\",\n            caption: \"Mexico\"\n        },\n        {\n            image: \"/images/home/Flag-Nicaragua.webp\",\n            caption: \"Nicaragua\"\n        },\n        {\n            image: \"/images/home/Flag-Panama.webp\",\n            caption: \"Panama\"\n        },\n        {\n            image: \"/images/home/Flag-Paraguay.webp\",\n            caption: \"Paraguay\"\n        },\n        {\n            image: \"/images/home/Flag-Peru.webp\",\n            caption: \"Peru\"\n        },\n        {\n            image: \"/images/home/Flag-Spain.webp\",\n            caption: \"Spain\"\n        },\n        {\n            image: \"/images/home/Flag-Uruguay.webp\",\n            caption: \"Uruguay\"\n        },\n        {\n            image: \"/images/home/Flag-Venezuela.webp\",\n            caption: \"Venezuela\"\n        }\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slide = ref[0], setSlide = ref[1];\n    var gap = 2000;\n    var slideShowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var incrementSlide = function() {\n        if (slide < slides.length) {\n            setSlide(slide + 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var allSlides = slideShowRef && slideShowRef.current.querySelectorAll(\"div\");\n        allSlides[0].classList.add(\"active\");\n        for(var i = 1; i < allSlides.length; i++){\n            allSlides[i].classList.add(\"not-active\");\n        }\n        var showSlide = function(slide) {\n            var previous;\n            if (slide > 0) {\n                previous = slide - 1;\n                allSlides[previous] && allSlides[previous].classList.remove(\"active\");\n                allSlides[previous].classList.add(\"not-active\");\n            }\n            allSlides[slide] && allSlides[slide].classList.add(\"active\");\n        };\n        setInterval(function() {\n            console.log(slide);\n            incrementSlide();\n            showSlide(slide);\n        }, gap);\n    }, [\n        slide\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"home\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"intro\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"spanish-map\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"landingBackground\",\n                            src: \"/images/home/296-2965054_map-of-spain-png-transparent-png.png\",\n                            objectFit: \"scale-down\",\n                            objectPosition: \"left\",\n                            layout: \"fill\",\n                            priority: true,\n                            alt: \"Map of Spain with Provinces\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mainContent\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: \"tag-line\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Learn Spanish!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Use it in all of these countries that have Spanish as their primary language: \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                        lineNumber: 141,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 139,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: slideShowRef,\n                                className: \"slideShow\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_slideShow__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    slideSet: slides\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                    lineNumber: 144,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 126,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"verbContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Verbs\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Learn approximately 100 of the most commonly used Spanish verbs by studying flashcards and testing your study skills using the conjugator and playing the slider. The verbs are in the indicative form with present, preterite, imperfect, conditional, and future tenses.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 148,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"vocabularyContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Vocabulary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 153,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"This site has over 700 words (and counting!) to start your (and my) Spanish-learning journey! Start by studying the flashcards. You can choose to study a category or all of the vocabulary. After you are confident in your in new vocabulary, you can test yourself by using the completion, fill-in, quiz, scramble, and slider exercises. Each exercise allows you to choose a category or all vocabulary and the number of questions (5, 10, 15, and 20) you want. After you're done, you are presented with a report detailing the percentage correct and correct answers and your answers.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 152,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n                lineNumber: 156,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\index.tsx\",\n        lineNumber: 125,\n        columnNumber: 9\n    }, _this);\n};\n_s(Index, \"HsTgwXyUns1hptUlPrkRpmUpDbk=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBQTJEO0FBRTVCO0FBQ3FCO0FBR3BELElBQU1NLEtBQUssR0FBRyxXQUFNOztJQUNoQixJQUFNQyxNQUFNLEdBQUc7UUFDWDtZQUNJQyxLQUFLLEVBQUUsa0NBQWtDO1lBQ3pDQyxPQUFPLEVBQUUsV0FBVztTQUN2QjtRQUNEO1lBQ0lELEtBQUssRUFBRSxnQ0FBZ0M7WUFDdkNDLE9BQU8sRUFBRSxTQUFTO1NBQ3JCO1FBQ0Q7WUFDSUQsS0FBSyxFQUFFLDhCQUE4QjtZQUNyQ0MsT0FBTyxFQUFFLE9BQU87U0FDbkI7UUFDRDtZQUNJRCxLQUFLLEVBQUUsaUNBQWlDO1lBQ3hDQyxPQUFPLEVBQUUsVUFBVTtTQUN0QjtRQUNEO1lBQ0lELEtBQUssRUFBRSxtQ0FBbUM7WUFDMUNDLE9BQU8sRUFBRSxZQUFZO1NBQ3hCO1FBQ0Q7WUFDSUQsS0FBSyxFQUFFLDJDQUEyQztZQUNsREMsT0FBTyxFQUFFLG9CQUFvQjtTQUNoQztRQUNEO1lBQ0lELEtBQUssRUFBRSxnQ0FBZ0M7WUFDdkNDLE9BQU8sRUFBRSxTQUFTO1NBQ3JCO1FBQ0Q7WUFDSUQsS0FBSyxFQUFFLG9DQUFvQztZQUMzQ0MsT0FBTyxFQUFFLGFBQWE7U0FDekI7UUFDRDtZQUNJRCxLQUFLLEVBQUUsMENBQTBDO1lBQ2pEQyxPQUFPLEVBQUUsb0JBQW9CO1NBQ2hDO1FBQ0Q7WUFDSUQsS0FBSyxFQUFFLGtDQUFrQztZQUN6Q0MsT0FBTyxFQUFFLFdBQVc7U0FDdkI7UUFDRDtZQUNJRCxLQUFLLEVBQUUsaUNBQWlDO1lBQ3hDQyxPQUFPLEVBQUUsVUFBVTtTQUN0QjtRQUNEO1lBQ0lELEtBQUssRUFBRSwrQkFBK0I7WUFDdENDLE9BQU8sRUFBRSxRQUFRO1NBQ3BCO1FBQ0Q7WUFDSUQsS0FBSyxFQUFFLGtDQUFrQztZQUN6Q0MsT0FBTyxFQUFFLFdBQVc7U0FDdkI7UUFDRDtZQUNJRCxLQUFLLEVBQUUsK0JBQStCO1lBQ3RDQyxPQUFPLEVBQUUsUUFBUTtTQUNwQjtRQUNEO1lBQ0lELEtBQUssRUFBRSxpQ0FBaUM7WUFDeENDLE9BQU8sRUFBRSxVQUFVO1NBQ3RCO1FBQ0Q7WUFDSUQsS0FBSyxFQUFFLDZCQUE2QjtZQUNwQ0MsT0FBTyxFQUFFLE1BQU07U0FDbEI7UUFDRDtZQUNJRCxLQUFLLEVBQUUsOEJBQThCO1lBQ3JDQyxPQUFPLEVBQUUsT0FBTztTQUNuQjtRQUNEO1lBQ0lELEtBQUssRUFBRSxnQ0FBZ0M7WUFDdkNDLE9BQU8sRUFBRSxTQUFTO1NBQ3JCO1FBQ0Q7WUFDSUQsS0FBSyxFQUFFLGtDQUFrQztZQUN6Q0MsT0FBTyxFQUFFLFdBQVc7U0FDdkI7S0FDSjtJQUVELElBQTBCUCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTlCUSxLQUFLLEdBQWNSLEdBQVcsR0FBekIsRUFBRVMsUUFBUSxHQUFJVCxHQUFXLEdBQWY7SUFDdEIsSUFBTVUsR0FBRyxHQUFHLElBQUk7SUFDaEIsSUFBTUMsWUFBWSxHQUFHViw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUVqQyxJQUFNVyxjQUFjLEdBQUcsV0FBTTtRQUN6QixJQUFHSixLQUFLLEdBQUdILE1BQU0sQ0FBQ1EsTUFBTSxFQUFFO1lBQ3RCSixRQUFRLENBQUNELEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN2QjtLQUNKO0lBR0RULGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQU1lLFNBQVMsR0FBR0gsWUFBWSxJQUFJQSxZQUFZLENBQUNJLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1FBQzlFRixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTCxTQUFTLENBQUNELE1BQU0sRUFBRU0sQ0FBQyxFQUFFLENBQUU7WUFDdENMLFNBQVMsQ0FBQ0ssQ0FBQyxDQUFDLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzVDO1FBRUQsSUFBTUUsU0FBUyxHQUFHLFNBQUNaLEtBQUssRUFBSztZQUN6QixJQUFJYSxRQUFRO1lBRVosSUFBR2IsS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDVmEsUUFBUSxHQUFHYixLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUVyQk0sU0FBUyxDQUFDTyxRQUFRLENBQUMsSUFBSVAsU0FBUyxDQUFDTyxRQUFRLENBQUMsQ0FBQ0osU0FBUyxDQUFDSyxNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUNyRVIsU0FBUyxDQUFDTyxRQUFRLENBQUMsQ0FBQ0osU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbkQ7WUFFREosU0FBUyxDQUFDTixLQUFLLENBQUMsSUFBSU0sU0FBUyxDQUFDTixLQUFLLENBQUMsQ0FBQ1MsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEU7UUFDREssV0FBVyxDQUFDLFdBQU07WUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNqQixLQUFLLENBQUMsQ0FBQztZQUNuQkksY0FBYyxFQUFFLENBQUM7WUFDakJRLFNBQVMsQ0FBQ1osS0FBSyxDQUFDLENBQUM7U0FDcEIsRUFBRUUsR0FBRyxDQUFDLENBQUM7S0FDWCxFQUFFO1FBQUNGLEtBQUs7S0FBQyxDQUFDO0lBRVgscUJBQ0ksOERBQUNrQixLQUFHO1FBQUNDLEVBQUUsRUFBQyxNQUFNOzswQkFDViw4REFBQ0QsS0FBRztnQkFBQ0MsRUFBRSxFQUFDLE9BQU87O2tDQUNYLDhEQUFDRCxLQUFHO3dCQUFDRSxTQUFTLEVBQUMsYUFBYTtrQ0FDeEIsNEVBQUMxQixtREFBSzs0QkFDRjBCLFNBQVMsRUFBQyxtQkFBbUI7NEJBQzdCQyxHQUFHLEVBQUMsK0RBQStEOzRCQUNuRUMsU0FBUyxFQUFDLFlBQVk7NEJBQ3RCQyxjQUFjLEVBQUMsTUFBTTs0QkFDckJDLE1BQU0sRUFBQyxNQUFNOzRCQUNiQyxRQUFRLEVBQUUsSUFBSTs0QkFDZEMsR0FBRyxFQUFDLDZCQUE2Qjs7Ozs7aUNBQ25DOzs7Ozs2QkFDQTtrQ0FDTiw4REFBQ1IsS0FBRzt3QkFBQ0UsU0FBUyxFQUFDLGFBQWE7OzBDQUN4Qiw4REFBQ08sU0FBTztnQ0FBQ1AsU0FBUyxFQUFDLFVBQVU7O2tEQUN6Qiw4REFBQ1EsSUFBRTtrREFBQyxnQkFBYzs7Ozs7NkNBQUs7a0RBQ3ZCLDhEQUFDQyxJQUFFO2tEQUFDLGdGQUE4RTs7Ozs7NkNBQUs7Ozs7OztxQ0FDakY7MENBQ1YsOERBQUNYLEtBQUc7Z0NBQUNZLEdBQUcsRUFBRzNCLFlBQVk7Z0NBQUdpQixTQUFTLEVBQUMsV0FBVzswQ0FDM0MsNEVBQUN6QixpRUFBUztvQ0FBQ29DLFFBQVEsRUFBR2xDLE1BQU07Ozs7O3lDQUFLOzs7OztxQ0FDL0I7Ozs7Ozs2QkFDSjs7Ozs7O3FCQUNKOzBCQUNOLDhEQUFDOEIsU0FBTztnQkFBQ1IsRUFBRSxFQUFDLGFBQWE7O2tDQUNyQiw4REFBQ1UsSUFBRTtrQ0FBQyxPQUFLOzs7Ozs2QkFBSztrQ0FDZCw4REFBQ0csR0FBQztrQ0FBQyw0UUFBMFE7Ozs7OzZCQUFJOzs7Ozs7cUJBQzNROzBCQUNWLDhEQUFDTCxTQUFPO2dCQUFDUixFQUFFLEVBQUMsbUJBQW1COztrQ0FDM0IsOERBQUNVLElBQUU7a0NBQUMsWUFBVTs7Ozs7NkJBQUs7a0NBQ25CLDhEQUFDRyxHQUFDO2tDQUFDLG1rQkFBaWtCOzs7Ozs2QkFBSTs7Ozs7O3FCQUNsa0I7MEJBQ1YsOERBQUNDLFFBQU07Ozs7cUJBRUU7Ozs7OzthQUNQLENBQ1Q7Q0FDSjtHQTFKS3JDLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQTRKWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBTbGlkZVNob3cgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvc2xpZGVTaG93JztcclxuaW1wb3J0IHsgY2xlYXJJbnRlcnZhbCB9IGZyb20gJ3RpbWVycyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNsaWRlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctQXJnZW50aW5hLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnQXJnZW50aW5hJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUJvbGl2aWEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdCb2xpdmlhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLUNoaWxlLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnQ2hpbGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctQ29sb21iaWEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdDb2xvbWJpYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1Db3N0YS1SaWNhLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnQ29zdGEgUmljYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1Eb21pbmljYW4tUmVwdWJsaWMud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdEb21pbmljYW4gUmVwdWJsaWMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctRWN1YWRvci53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0VjdWFkb3InXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctRWwtU2FsdmFkb3Iud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdFbCBTYWx2YWRvcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1FcXVhdG9yaWFsIEd1aW5lYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ0VjcXVhdG9yaWFsIEd1aW5lYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1HdWF0ZW1hbGEud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdHdWF0ZW1hbGEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctSG9uZHVyYXMud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdIb25kdXJhcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1NZXhpY28ud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdNZXhpY28nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctTmljYXJhZ3VhLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnTmljYXJhZ3VhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLVBhbmFtYS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ1BhbmFtYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUvRmxhZy1QYXJhZ3VheS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ1BhcmFndWF5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLVBlcnUud2VicCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICdQZXJ1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaG9tZS9GbGFnLVNwYWluLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnU3BhaW4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctVXJ1Z3VheS53ZWJwJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJ1VydWd1YXknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9ob21lL0ZsYWctVmVuZXp1ZWxhLndlYnAnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnVmVuZXp1ZWxhJ1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgW3NsaWRlLCBzZXRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGdhcCA9IDIwMDA7XHJcbiAgICBjb25zdCBzbGlkZVNob3dSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaW5jcmVtZW50U2xpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc2xpZGUgPCBzbGlkZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNldFNsaWRlKHNsaWRlICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFsbFNsaWRlcyA9IHNsaWRlU2hvd1JlZiAmJiBzbGlkZVNob3dSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcclxuICAgICAgICBhbGxTbGlkZXNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGFsbFNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhbGxTbGlkZXNbaV0uY2xhc3NMaXN0LmFkZCgnbm90LWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd1NsaWRlID0gKHNsaWRlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91cztcclxuXHJcbiAgICAgICAgICAgIGlmKHNsaWRlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXMgPSBzbGlkZSAtIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgYWxsU2xpZGVzW3ByZXZpb3VzXSAmJiBhbGxTbGlkZXNbcHJldmlvdXNdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICBhbGxTbGlkZXNbcHJldmlvdXNdLmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYWxsU2xpZGVzW3NsaWRlXSAmJiBhbGxTbGlkZXNbc2xpZGVdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNsaWRlKTtcclxuICAgICAgICAgICAgaW5jcmVtZW50U2xpZGUoKTtcclxuICAgICAgICAgICAgc2hvd1NsaWRlKHNsaWRlKTtcclxuICAgICAgICB9LCBnYXApO1xyXG4gICAgfSwgW3NsaWRlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJob21lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnRyb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYW5pc2gtbWFwJz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGFuZGluZ0JhY2tncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaG9tZS8yOTYtMjk2NTA1NF9tYXAtb2Ytc3BhaW4tcG5nLXRyYW5zcGFyZW50LXBuZy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9J3NjYWxlLWRvd24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPSdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9J2ZpbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJNYXAgb2YgU3BhaW4gd2l0aCBQcm92aW5jZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluQ29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0YWctbGluZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5MZWFybiBTcGFuaXNoITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Vc2UgaXQgaW4gYWxsIG9mIHRoZXNlIGNvdW50cmllcyB0aGF0IGhhdmUgU3BhbmlzaCBhcyB0aGVpciBwcmltYXJ5IGxhbmd1YWdlOiA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17IHNsaWRlU2hvd1JlZiB9IGNsYXNzTmFtZT1cInNsaWRlU2hvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVTaG93IHNsaWRlU2V0PXsgc2xpZGVzIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJ2ZXJiQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlZlcmJzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPkxlYXJuIGFwcHJveGltYXRlbHkgMTAwIG9mIHRoZSBtb3N0IGNvbW1vbmx5IHVzZWQgU3BhbmlzaCB2ZXJicyBieSBzdHVkeWluZyBmbGFzaGNhcmRzIGFuZCB0ZXN0aW5nIHlvdXIgc3R1ZHkgc2tpbGxzIHVzaW5nIHRoZSBjb25qdWdhdG9yIGFuZCBwbGF5aW5nIHRoZSBzbGlkZXIuIFRoZSB2ZXJicyBhcmUgaW4gdGhlIGluZGljYXRpdmUgZm9ybSB3aXRoIHByZXNlbnQsIHByZXRlcml0ZSwgaW1wZXJmZWN0LCBjb25kaXRpb25hbCwgYW5kIGZ1dHVyZSB0ZW5zZXMuPC9wPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwidm9jYWJ1bGFyeUNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Wb2NhYnVsYXJ5PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlRoaXMgc2l0ZSBoYXMgb3ZlciA3MDAgd29yZHMgKGFuZCBjb3VudGluZyEpIHRvIHN0YXJ0IHlvdXIgKGFuZCBteSkgU3BhbmlzaC1sZWFybmluZyBqb3VybmV5ISBTdGFydCBieSBzdHVkeWluZyB0aGUgZmxhc2hjYXJkcy4gWW91IGNhbiBjaG9vc2UgdG8gc3R1ZHkgYSBjYXRlZ29yeSBvciBhbGwgb2YgdGhlIHZvY2FidWxhcnkuIEFmdGVyIHlvdSBhcmUgY29uZmlkZW50IGluIHlvdXIgaW4gbmV3IHZvY2FidWxhcnksIHlvdSBjYW4gdGVzdCB5b3Vyc2VsZiBieSB1c2luZyB0aGUgY29tcGxldGlvbiwgZmlsbC1pbiwgcXVpeiwgc2NyYW1ibGUsIGFuZCBzbGlkZXIgZXhlcmNpc2VzLiBFYWNoIGV4ZXJjaXNlIGFsbG93cyB5b3UgdG8gY2hvb3NlIGEgY2F0ZWdvcnkgb3IgYWxsIHZvY2FidWxhcnkgYW5kIHRoZSBudW1iZXIgb2YgcXVlc3Rpb25zICg1LCAxMCwgMTUsIGFuZCAyMCkgeW91IHdhbnQuIEFmdGVyIHlvdSdyZSBkb25lLCB5b3UgYXJlIHByZXNlbnRlZCB3aXRoIGEgcmVwb3J0IGRldGFpbGluZyB0aGUgcGVyY2VudGFnZSBjb3JyZWN0IGFuZCBjb3JyZWN0IGFuc3dlcnMgYW5kIHlvdXIgYW5zd2Vycy48L3A+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPGZvb3Rlcj5cclxuXHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkltYWdlIiwiU2xpZGVTaG93IiwiSW5kZXgiLCJzbGlkZXMiLCJpbWFnZSIsImNhcHRpb24iLCJzbGlkZSIsInNldFNsaWRlIiwiZ2FwIiwic2xpZGVTaG93UmVmIiwiaW5jcmVtZW50U2xpZGUiLCJsZW5ndGgiLCJhbGxTbGlkZXMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsYXNzTGlzdCIsImFkZCIsImkiLCJzaG93U2xpZGUiLCJwcmV2aW91cyIsInJlbW92ZSIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwic3JjIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJsYXlvdXQiLCJwcmlvcml0eSIsImFsdCIsInNlY3Rpb24iLCJoMSIsImgyIiwicmVmIiwic2xpZGVTZXQiLCJwIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});