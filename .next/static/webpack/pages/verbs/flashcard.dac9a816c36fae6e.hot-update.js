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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar Card = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = function(props, _ref) {\n    var cardType = props.cardType, word = props.word, pronunciation = props.pronunciation, translation = props.translation, image = props.image, infinitive = props.infinitive, tense = props.tense, conjugations = props.conjugations;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mainContainer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: _ref,\n            className: \"card\",\n            children: props.cardType == \"vocabulary\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"front\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    \"[ \",\n                                    word,\n                                    \" ]\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"info\",\n                                children: pronunciation\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"back\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: translation\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 29\n                            }, _this),\n                            image && image.split(\"/\").length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: \"/images/\".concat(image),\n                                    width: 150,\n                                    height: 150\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 37\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 33\n                            }, _this) : null\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 25\n                    }, _this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"front\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    \"[ \",\n                                    infinitive,\n                                    \" ]\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: [\n                                    \"[ \",\n                                    translation,\n                                    \" ]\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: pronunciation\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"back\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    \"[ \",\n                                    tense,\n                                    \" ] tense\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 25\n                    }, _this)\n                ]\n            }, void 0, true)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\card.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, _this);\n});\n_c1 = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c, _c1;\n$RefreshReg$(_c, \"Card$forwardRef\");\n$RefreshReg$(_c1, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXVDO0FBQ1I7QUFDTDtBQXVCMUIsSUFBTUcsSUFBSSxpQkFBR0gsaURBQVUsQ0FBQyxjQUFDSSxLQUFnQixFQUFFQyxJQUFJLEVBQUs7SUFDaEQsSUFBT0MsUUFBUSxHQUE4RUYsS0FBSyxDQUEzRkUsUUFBUSxFQUFFQyxJQUFJLEdBQXdFSCxLQUFLLENBQWpGRyxJQUFJLEVBQUVDLGFBQWEsR0FBeURKLEtBQUssQ0FBM0VJLGFBQWEsRUFBRUMsV0FBVyxHQUE0Q0wsS0FBSyxDQUE1REssV0FBVyxFQUFFQyxLQUFLLEdBQXFDTixLQUFLLENBQS9DTSxLQUFLLEVBQUVDLFVBQVUsR0FBeUJQLEtBQUssQ0FBeENPLFVBQVUsRUFBRUMsS0FBSyxHQUFrQlIsS0FBSyxDQUE1QlEsS0FBSyxFQUFFQyxZQUFZLEdBQUlULEtBQUssQ0FBckJTLFlBQVk7SUFFekYscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGVBQWU7a0JBQzFCLDRFQUFDRCxLQUFHO1lBQUNFLEdBQUcsRUFBRVgsSUFBSTtZQUFFVSxTQUFTLEVBQUMsTUFBTTtzQkFDMUJYLEtBQUssQ0FBQ0UsUUFBUSxJQUFJLFlBQVksaUJBQzVCOztrQ0FDSSw4REFBQ1EsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLE9BQU87OzBDQUNsQiw4REFBQ0UsSUFBRTs7b0NBQUMsSUFBRTtvQ0FBRVYsSUFBSTtvQ0FBRSxJQUFFOzs7Ozs7cUNBQUs7MENBQ3JCLDhEQUFDVyxJQUFFO2dDQUFDSCxTQUFTLEVBQUMsTUFBTTswQ0FDZFAsYUFBYTs7Ozs7cUNBQ2Q7Ozs7Ozs2QkFDSDtrQ0FDTiw4REFBQ00sS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLE1BQU07OzBDQUNqQiw4REFBQ0UsSUFBRTswQ0FBR1IsV0FBVzs7Ozs7cUNBQU87NEJBQ3RCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ1MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxpQkFDbEMsOERBQUNOLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxPQUFPOzBDQUNsQiw0RUFBQ2QsbURBQUs7b0NBQUNvQixHQUFHLEVBQUUsVUFBUyxDQUFRLE9BQU5YLEtBQUssQ0FBRTtvQ0FBRVksS0FBSyxFQUFFLEdBQUc7b0NBQUVDLE1BQU0sRUFBRSxHQUFHOzs7Ozt5Q0FBSTs7Ozs7cUNBQ3pELEdBQUcsSUFBSTs7Ozs7OzZCQUVmOzs0QkFDUCxpQkFDSDs7a0NBQ0ksOERBQUNULEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxPQUFPOzswQ0FDbEIsOERBQUNFLElBQUU7O29DQUFDLElBQUU7b0NBQUVOLFVBQVU7b0NBQUUsSUFBRTs7Ozs7O3FDQUFLOzBDQUMzQiw4REFBQ08sSUFBRTs7b0NBQUMsSUFBRTtvQ0FBQ1QsV0FBVztvQ0FBQyxJQUFFOzs7Ozs7cUNBQUs7MENBQzFCLDhEQUFDUyxJQUFFOzBDQUFHVixhQUFhOzs7OztxQ0FBTzs7Ozs7OzZCQUN4QjtrQ0FDTiw4REFBQ00sS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLE1BQU07OzBDQUNqQiw4REFBQ0UsSUFBRTs7b0NBQUMsSUFBRTtvQ0FBQ0wsS0FBSztvQ0FBQyxVQUFROzs7Ozs7cUNBQUs7MENBQzFCLDhEQUFDRSxLQUFHOzs7O3FDQUVFOzs7Ozs7NkJBQ0o7OzRCQUNQOzs7OztpQkFFTDs7Ozs7YUFDSixDQUNUO0NBQ0osQ0FBQzs7QUFFRiwrREFBZVgsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhcmQudHN4P2JkZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yd2FyZFJlZiwgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCB0eXBlIENhcmRUeXBlID0gJ3ZvY2FidWxhcnknIHwgJ3ZlcmInO1xyXG5cclxuaW50ZXJmYWNlIFZvY2FidWxhcnlDYXJkUHJvcHMge1xyXG4gICAgY2FyZFR5cGU6IENhcmRUeXBlO1xyXG4gICAgd29yZDogU3RyaW5nO1xyXG4gICAgcHJvbnVuY2lhdGlvbjogU3RyaW5nO1xyXG4gICAgdHJhbnNsYXRpb246IFN0cmluZztcclxuICAgIGltYWdlOiBTdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBWZXJiQ2FyZFByb3BzIHtcclxuICAgIGNhcmRUeXBlOiBDYXJkVHlwZTtcclxuICAgIGluZmluaXRpdmU6IFN0cmluZztcclxuICAgIHRyYW5zbGF0aW9uOiBTdHJpbmc7XHJcbiAgICBwcm9udW5jaWF0aW9uOiBTdHJpbmc7XHJcbiAgICB0ZW5zZTogU3RyaW5nO1xyXG4gICAgY29uanVnYXRpb25zOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENhcmRQcm9wcyA9IFZvY2FidWxhcnlDYXJkUHJvcHMgfCBWZXJiQ2FyZFByb3BzO1xyXG5cclxuY29uc3QgQ2FyZCA9IGZvcndhcmRSZWYoKHByb3BzOiBDYXJkUHJvcHMsIF9yZWYpID0+IHtcclxuICAgIGNvbnN0IHtjYXJkVHlwZSwgd29yZCwgcHJvbnVuY2lhdGlvbiwgdHJhbnNsYXRpb24sIGltYWdlLCBpbmZpbml0aXZlLCB0ZW5zZSwgY29uanVnYXRpb25zfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdiByZWY9e19yZWZ9IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIHsgcHJvcHMuY2FyZFR5cGUgPT0gXCJ2b2NhYnVsYXJ5XCIgPyBcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnJvbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlsgeyB3b3JkIH0gXTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvbnVuY2lhdGlvbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnsgdHJhbnNsYXRpb24gfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGltYWdlICYmIGltYWdlLnNwbGl0KCcvJykubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtgL2ltYWdlcy8ke2ltYWdlfWB9IHdpZHRoPXsxNTB9IGhlaWdodD17MTUwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+IDogXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zyb250Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5bIHsgaW5maW5pdGl2ZSB9IF08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Plsge3RyYW5zbGF0aW9ufSBdPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57IHByb251bmNpYXRpb24gfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+WyB7dGVuc2V9IF0gdGVuc2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiXSwibmFtZXMiOlsiZm9yd2FyZFJlZiIsIkltYWdlIiwiUmVhY3QiLCJDYXJkIiwicHJvcHMiLCJfcmVmIiwiY2FyZFR5cGUiLCJ3b3JkIiwicHJvbnVuY2lhdGlvbiIsInRyYW5zbGF0aW9uIiwiaW1hZ2UiLCJpbmZpbml0aXZlIiwidGVuc2UiLCJjb25qdWdhdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJoMyIsImg0Iiwic3BsaXQiLCJsZW5ndGgiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/card.tsx\n"));

/***/ })

});