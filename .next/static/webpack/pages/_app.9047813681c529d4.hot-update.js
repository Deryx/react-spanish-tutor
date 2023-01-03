"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/siteMenu.tsx":
/*!*************************************!*\
  !*** ./src/components/siteMenu.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/menu */ \"./src/components/menu.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SiteMenu() {\n    _s();\n    var menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var verbPages = [\n        {\n            title: \"input\",\n            url: \"/verbs/input\"\n        },\n        {\n            title: \"flashcard\",\n            url: \"/verbs/flashcard\"\n        },\n        {\n            title: \"conjugator\",\n            url: \"/verbs/conjugator\"\n        },\n        {\n            title: \"slider\",\n            url: \"/verbs/slider\"\n        }\n    ];\n    var vocabPages = [\n        {\n            title: \"input\",\n            url: \"/vocabulary/input\"\n        },\n        {\n            title: \"flashcard\",\n            url: \"/vocabulary/flashcard\"\n        },\n        {\n            title: \"completion\",\n            url: \"/vocabulary/completion\"\n        },\n        {\n            title: \"fill-in\",\n            url: \"/vocabulary/fill-in\"\n        },\n        {\n            title: \"quiz\",\n            url: \"/vocabulary/quiz\"\n        },\n        {\n            title: \"scramble\",\n            url: \"/vocabulary/scramble\"\n        },\n        {\n            title: \"slider\",\n            url: \"/vocabulary/slider\"\n        }\n    ];\n    var toggle = false;\n    var handleClick = function(e) {\n        e.preventDefault();\n        toggle = !toggle;\n        if (toggle) {\n            buttonRef.current.classList.add(\"change\");\n            menuRef.current.classList.add(\"open\");\n            menuRef.current.classList.remove(\"close\");\n            setTimeout(function() {\n                toggle = true;\n                handleClick(e);\n            }, 5000);\n        } else {\n            buttonRef.current.classList.remove(\"change\");\n            menuRef.current.classList.remove(\"open\");\n            menuRef.current.classList.add(\"close\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            id: \"menu\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            ref: buttonRef,\n                            id: \"button\",\n                            onClick: handleClick,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bar1\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bar2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bar3\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        ref: menuRef,\n                        id: \"subMenu\",\n                        className: \"close\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"verbs\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        pages: verbPages\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"vocabulary\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        pages: vocabPages\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                lineNumber: 47,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_s(SiteMenu, \"i6XXXdPfpUYO/XJuJoM0Hb5wuoY=\");\n_c = SiteMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SiteMenu);\nvar _c;\n$RefreshReg$(_c, \"SiteMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUIsOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxNQUFNOzs7Ozt3Q0FBTzs4Q0FDNUIsOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxNQUFNOzs7Ozt3Q0FBTzs7Ozs7O2dDQUM1Qjs7Ozs7NEJBQ0Q7a0NBQ1AsOERBQUNSLElBQUU7d0JBQUNLLEdBQUcsRUFBR3JCLE9BQU87d0JBQUdpQixFQUFFLEVBQUMsU0FBUzt3QkFBQ08sU0FBUyxFQUFDLE9BQU87OzBDQUM5Qyw4REFBQ04sSUFBRTs7a0RBQ0MsOERBQUNPLElBQUU7a0RBQUMsT0FBSzs7Ozs7NENBQUs7a0RBQ2QsOERBQUMzQix3REFBSTt3Q0FBQzRCLEtBQUssRUFBR3hCLFNBQVM7Ozs7OzRDQUFLOzs7Ozs7b0NBQzNCOzBDQUNMLDhEQUFDZ0IsSUFBRTs7a0RBQ0MsOERBQUNPLElBQUU7a0RBQUMsWUFBVTs7Ozs7NENBQUs7a0RBQ25CLDhEQUFDM0Isd0RBQUk7d0NBQUM0QixLQUFLLEVBQUdyQixVQUFVOzs7Ozs0Q0FBSzs7Ozs7O29DQUM1Qjs7Ozs7OzRCQUNKOzs7Ozs7b0JBQ0o7Ozs7O2dCQUNKOzs7OztZQUNILENBQ1Q7Q0FDSjtHQWhFUU4sUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBa0VqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NpdGVNZW51LnRzeD85MTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudSc7XHJcblxyXG5mdW5jdGlvbiBTaXRlTWVudSgpIHtcclxuICAgIGNvbnN0IG1lbnVSZWYgPSB1c2VSZWYoIG51bGwgKTtcclxuICAgIGNvbnN0IGJ1dHRvblJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG5cclxuICAgIGNvbnN0IHZlcmJQYWdlcyA9IFtcclxuICAgICAgICB7IHRpdGxlOiAnaW5wdXQnLCB1cmw6ICcvdmVyYnMvaW5wdXQnfSxcclxuICAgICAgICB7IHRpdGxlOiAnZmxhc2hjYXJkJywgdXJsOiAnL3ZlcmJzL2ZsYXNoY2FyZCcgfSxcclxuICAgICAgICB7IHRpdGxlOiAnY29uanVnYXRvcicsIHVybDogJy92ZXJicy9jb25qdWdhdG9yJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdzbGlkZXInLCB1cmw6ICcvdmVyYnMvc2xpZGVyJyB9XHJcbiAgICBdO1xyXG4gICAgY29uc3Qgdm9jYWJQYWdlcyA9IFtcclxuICAgICAgICB7IHRpdGxlOiAnaW5wdXQnLCB1cmw6ICcvdm9jYWJ1bGFyeS9pbnB1dCd9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdmbGFzaGNhcmQnLCB1cmw6ICcvdm9jYWJ1bGFyeS9mbGFzaGNhcmQnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ2NvbXBsZXRpb24nLCB1cmw6ICcvdm9jYWJ1bGFyeS9jb21wbGV0aW9uJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdmaWxsLWluJywgdXJsOiAnL3ZvY2FidWxhcnkvZmlsbC1pbicgfSxcclxuICAgICAgICB7IHRpdGxlOiAncXVpeicsIHVybDogJy92b2NhYnVsYXJ5L3F1aXonIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ3NjcmFtYmxlJywgdXJsOiAnL3ZvY2FidWxhcnkvc2NyYW1ibGUnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ3NsaWRlcicsIHVybDogJy92b2NhYnVsYXJ5L3NsaWRlcicgfVxyXG4gICAgXTtcclxuICAgIGxldCB0b2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRvZ2dsZSA9ICF0b2dnbGU7XHJcbiAgICAgICAgaWYodG9nZ2xlKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvblJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICBtZW51UmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICAgICAgICBtZW51UmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2UnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2soZSk7XHJcbiAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvblJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICBtZW51UmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgICAgICBtZW51UmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWwgaWQ9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgcmVmPXsgYnV0dG9uUmVmIH0gaWQ9XCJidXR0b25cIiBvbkNsaWNrPXsgaGFuZGxlQ2xpY2sgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYXIxJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYXIyJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYXIzJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXsgbWVudVJlZiB9IGlkPVwic3ViTWVudVwiIGNsYXNzTmFtZT0nY2xvc2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+dmVyYnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgcGFnZXM9eyB2ZXJiUGFnZXMgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+dm9jYWJ1bGFyeTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBwYWdlcz17IHZvY2FiUGFnZXMgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXRlTWVudTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJMaW5rIiwiTWVudSIsIlNpdGVNZW51IiwibWVudVJlZiIsImJ1dHRvblJlZiIsInZlcmJQYWdlcyIsInRpdGxlIiwidXJsIiwidm9jYWJQYWdlcyIsInRvZ2dsZSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJuYXYiLCJ1bCIsImlkIiwibGkiLCJocmVmIiwiYSIsInJlZiIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInBhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/siteMenu.tsx\n"));

/***/ })

});