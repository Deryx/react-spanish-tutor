"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/verbs/flashcard",{

/***/ "./src/components/card.tsx":
/*!*********************************!*\
  !*** ./src/components/card.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _this = undefined;\n\n\n\n\nvar Card = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = function(props, _ref) {\n    var cardType = props.cardType, word = props.word, pronunciation = props.pronunciation, translation = props.translation, image = props.image, infinitive = props.infinitive, tense = props.tense, conjugations = props.conjugations;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mainContainer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: _ref,\n            className: \"card\",\n            children: cardType == \"vocabulary\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"front\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    \"[ \",\n                                    word,\n                                    \" ]\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"info\",\n                                children: pronunciation\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"back\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: translation\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 29\n                            }, _this),\n                            image && image.split(\"/\").length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: \"/images/\".concat(image),\n                                    width: 150,\n                                    height: 150\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 37\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 33\n                            }, _this) : null\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 25\n                    }, _this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"front\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    \"[ \",\n                                    infinitive,\n                                    \" ]\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: [\n                                    \"[ \",\n                                    translation,\n                                    \" ]\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: pronunciation\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"back\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    \"[ \",\n                                    tense,\n                                    \" ] tense\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: conjugations && Object.entries(conjugations).map(function(param) {\n                                    var _param = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(param, 2), key = _param[0], value = _param[1];\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                        className: \"verb\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                children: key\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 123\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                children: value\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 137\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 102\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 25\n                    }, _this)\n                ]\n            }, void 0, true)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, _this);\n});\n_c1 = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c, _c1;\n$RefreshReg$(_c, \"Card$forwardRef\");\n$RefreshReg$(_c1, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFBdUM7QUFDUjtBQUNMO0FBdUIxQixJQUFNRyxJQUFJLGlCQUFHSCxpREFBVSxDQUFDLGNBQUNJLEtBQWdCLEVBQUVDLElBQUksRUFBSztJQUNoRCxJQUFPQyxRQUFRLEdBQThFRixLQUFLLENBQTNGRSxRQUFRLEVBQUVDLElBQUksR0FBd0VILEtBQUssQ0FBakZHLElBQUksRUFBRUMsYUFBYSxHQUF5REosS0FBSyxDQUEzRUksYUFBYSxFQUFFQyxXQUFXLEdBQTRDTCxLQUFLLENBQTVESyxXQUFXLEVBQUVDLEtBQUssR0FBcUNOLEtBQUssQ0FBL0NNLEtBQUssRUFBRUMsVUFBVSxHQUF5QlAsS0FBSyxDQUF4Q08sVUFBVSxFQUFFQyxLQUFLLEdBQWtCUixLQUFLLENBQTVCUSxLQUFLLEVBQUVDLFlBQVksR0FBSVQsS0FBSyxDQUFyQlMsWUFBWTtJQUV6RixxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsZUFBZTtrQkFDMUIsNEVBQUNELEtBQUc7WUFBQ0UsR0FBRyxFQUFFWCxJQUFJO1lBQUVVLFNBQVMsRUFBQyxNQUFNO3NCQUMxQlQsUUFBUSxJQUFJLFlBQVksaUJBQ3RCOztrQ0FDSSw4REFBQ1EsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLE9BQU87OzBDQUNsQiw4REFBQ0UsSUFBRTs7b0NBQUMsSUFBRTtvQ0FBRVYsSUFBSTtvQ0FBRSxJQUFFOzs7Ozs7cUNBQUs7MENBQ3JCLDhEQUFDVyxJQUFFO2dDQUFDSCxTQUFTLEVBQUMsTUFBTTswQ0FDZFAsYUFBYTs7Ozs7cUNBQ2Q7Ozs7Ozs2QkFDSDtrQ0FDTiw4REFBQ00sS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLE1BQU07OzBDQUNqQiw4REFBQ0UsSUFBRTswQ0FBR1IsV0FBVzs7Ozs7cUNBQU87NEJBQ3RCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ1MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxpQkFDbEMsOERBQUNOLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxPQUFPOzBDQUNsQiw0RUFBQ2QsbURBQUs7b0NBQUNvQixHQUFHLEVBQUUsVUFBUyxDQUFRLE9BQU5YLEtBQUssQ0FBRTtvQ0FBRVksS0FBSyxFQUFFLEdBQUc7b0NBQUVDLE1BQU0sRUFBRSxHQUFHOzs7Ozt5Q0FBSTs7Ozs7cUNBQ3pELEdBQUcsSUFBSTs7Ozs7OzZCQUVmOzs0QkFDUCxpQkFDSDs7a0NBQ0ksOERBQUNULEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxPQUFPOzswQ0FDbEIsOERBQUNFLElBQUU7O29DQUFDLElBQUU7b0NBQUVOLFVBQVU7b0NBQUUsSUFBRTs7Ozs7O3FDQUFLOzBDQUMzQiw4REFBQ08sSUFBRTs7b0NBQUMsSUFBRTtvQ0FBQ1QsV0FBVztvQ0FBQyxJQUFFOzs7Ozs7cUNBQUs7MENBQzFCLDhEQUFDUyxJQUFFOzBDQUFHVixhQUFhOzs7OztxQ0FBTzs7Ozs7OzZCQUN4QjtrQ0FDTiw4REFBQ00sS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLE1BQU07OzBDQUNqQiw4REFBQ0UsSUFBRTs7b0NBQUMsSUFBRTtvQ0FBQ0wsS0FBSztvQ0FBQyxVQUFROzs7Ozs7cUNBQUs7MENBQzFCLDhEQUFDRSxLQUFHOzBDQUNFRCxZQUFZLElBQUlXLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDWixZQUFZLENBQUMsQ0FBQ2EsR0FBRyxDQUFDOzZJQUFFQyxHQUFHLGNBQUVDLEtBQUs7eURBQU0sOERBQUNDLElBQUU7d0NBQUNkLFNBQVMsRUFBQyxNQUFNOzswREFBQyw4REFBQ2UsSUFBRTswREFBRUgsR0FBRzs7Ozs7cURBQU07MERBQUEsOERBQUNJLElBQUU7MERBQUVILEtBQUs7Ozs7O3FEQUFNOzs7Ozs7NkNBQUs7aUNBQUEsQ0FBQzs7Ozs7cUNBQzVIOzs7Ozs7NkJBQ0o7OzRCQUNQOzs7OztpQkFFTDs7Ozs7YUFDSixDQUNUO0NBQ0osQ0FBQzs7QUFFRiwrREFBZXpCLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXJkLnRzeD9iZGZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcndhcmRSZWYsIEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgdHlwZSBDYXJkVHlwZSA9ICd2b2NhYnVsYXJ5JyB8ICd2ZXJiJztcclxuXHJcbmludGVyZmFjZSBWb2NhYnVsYXJ5Q2FyZFByb3BzIHtcclxuICAgIGNhcmRUeXBlOiBDYXJkVHlwZTtcclxuICAgIHdvcmQ6IFN0cmluZztcclxuICAgIHByb251bmNpYXRpb246IFN0cmluZztcclxuICAgIHRyYW5zbGF0aW9uOiBTdHJpbmc7XHJcbiAgICBpbWFnZTogU3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVmVyYkNhcmRQcm9wcyB7XHJcbiAgICBjYXJkVHlwZTogQ2FyZFR5cGU7XHJcbiAgICBpbmZpbml0aXZlOiBTdHJpbmc7XHJcbiAgICB0cmFuc2xhdGlvbjogU3RyaW5nO1xyXG4gICAgcHJvbnVuY2lhdGlvbjogU3RyaW5nO1xyXG4gICAgdGVuc2U6IFN0cmluZztcclxuICAgIGNvbmp1Z2F0aW9uczogYW55O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDYXJkUHJvcHMgPSBWb2NhYnVsYXJ5Q2FyZFByb3BzIHwgVmVyYkNhcmRQcm9wcztcclxuXHJcbmNvbnN0IENhcmQgPSBmb3J3YXJkUmVmKChwcm9wczogQ2FyZFByb3BzLCBfcmVmKSA9PiB7XHJcbiAgICBjb25zdCB7Y2FyZFR5cGUsIHdvcmQsIHByb251bmNpYXRpb24sIHRyYW5zbGF0aW9uLCBpbWFnZSwgaW5maW5pdGl2ZSwgdGVuc2UsIGNvbmp1Z2F0aW9uc30gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbkNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtfcmVmfSBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICB7IGNhcmRUeXBlID09IFwidm9jYWJ1bGFyeVwiID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zyb250Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5bIHsgd29yZCB9IF08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb251bmNpYXRpb24gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57IHRyYW5zbGF0aW9uIH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpbWFnZSAmJiBpbWFnZS5zcGxpdCgnLycpLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YC9pbWFnZXMvJHtpbWFnZX1gfSB3aWR0aD17MTUwfSBoZWlnaHQ9ezE1MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPiA6IFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmcm9udCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+WyB7IGluZmluaXRpdmUgfSBdPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5bIHt0cmFuc2xhdGlvbn0gXTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+eyBwcm9udW5jaWF0aW9uIH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlsge3RlbnNlfSBdIHRlbnNlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjb25qdWdhdGlvbnMgJiYgT2JqZWN0LmVudHJpZXMoY29uanVnYXRpb25zKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gPGRsIGNsYXNzTmFtZT0ndmVyYic+PGR0PntrZXl9PC9kdD48ZGQ+e3ZhbHVlfTwvZGQ+PC9kbD4pfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkOyJdLCJuYW1lcyI6WyJmb3J3YXJkUmVmIiwiSW1hZ2UiLCJSZWFjdCIsIkNhcmQiLCJwcm9wcyIsIl9yZWYiLCJjYXJkVHlwZSIsIndvcmQiLCJwcm9udW5jaWF0aW9uIiwidHJhbnNsYXRpb24iLCJpbWFnZSIsImluZmluaXRpdmUiLCJ0ZW5zZSIsImNvbmp1Z2F0aW9ucyIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsImgzIiwiaDQiLCJzcGxpdCIsImxlbmd0aCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImtleSIsInZhbHVlIiwiZGwiLCJkdCIsImRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/card.tsx\n"));

/***/ })

});