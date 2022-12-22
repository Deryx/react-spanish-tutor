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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/menu */ \"./src/components/menu.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SiteMenu() {\n    _s();\n    var menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var verbPages = [\n        {\n            title: \"input\",\n            url: \"/verbs/input\"\n        },\n        {\n            title: \"flashcard\",\n            url: \"/verbs/flashcard\"\n        },\n        {\n            title: \"conjugator\",\n            url: \"/verbs/conjugator\"\n        },\n        {\n            title: \"slider\",\n            url: \"/verbs/slider\"\n        }\n    ];\n    var vocabPages = [\n        {\n            title: \"input\",\n            url: \"/vocabulary/input\"\n        },\n        {\n            title: \"flashcard\",\n            url: \"/vocabulary/flashcard\"\n        },\n        {\n            title: \"completion\",\n            url: \"/vocabulary/completion\"\n        },\n        {\n            title: \"fill-in\",\n            url: \"/vocabulary/fill-in\"\n        },\n        {\n            title: \"quiz\",\n            url: \"/vocabulary/quiz\"\n        },\n        {\n            title: \"scramble\",\n            url: \"/vocabulary/scramble\"\n        },\n        {\n            title: \"slider\",\n            url: \"/vocabulary/slider\"\n        }\n    ];\n    var toggle = false;\n    var handleClick = function(e) {\n        e.preventDefault();\n        toggle = !toggle;\n        if (toggle) {\n            menuRef.current.classList.add(\"open\");\n            menuRef.current.classList.remove(\"close\");\n        } else {\n            menuRef.current.classList.remove(\"open\");\n            menuRef.current.classList.add(\"close\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            id: \"menu\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            id: \"button\",\n                            onClick: handleClick,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        ref: menuRef,\n                        id: \"subMenu\",\n                        className: \"close\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"verbs\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        pages: verbPages\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"vocabulary\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        pages: vocabPages\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n                lineNumber: 40,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n            lineNumber: 39,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\siteMenu.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n}\n_s(SiteMenu, \"wwfm6srM2YvI+yRyIz7GebNqWJI=\");\n_c = SiteMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SiteMenu);\nvar _c;\n$RefreshReg$(_c, \"SiteMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRDQUFLO2tEQUNuQiw4REFBQ3pCLHdEQUFJO3dDQUFDMEIsS0FBSyxFQUFHcEIsVUFBVTs7Ozs7NENBQUs7Ozs7OztvQ0FDNUI7Ozs7Ozs0QkFDSjs7Ozs7O29CQUNKOzs7OztnQkFDSjs7Ozs7WUFDSCxDQUNUO0NBQ0o7R0F6RFFMLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQTJEakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zaXRlTWVudS50c3g/OTE3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL21lbnUnO1xyXG5cclxuZnVuY3Rpb24gU2l0ZU1lbnUoKSB7XHJcbiAgICBjb25zdCBtZW51UmVmID0gdXNlUmVmKCBudWxsICk7XHJcblxyXG4gICAgY29uc3QgdmVyYlBhZ2VzID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICdpbnB1dCcsIHVybDogJy92ZXJicy9pbnB1dCd9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdmbGFzaGNhcmQnLCB1cmw6ICcvdmVyYnMvZmxhc2hjYXJkJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdjb25qdWdhdG9yJywgdXJsOiAnL3ZlcmJzL2Nvbmp1Z2F0b3InIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ3NsaWRlcicsIHVybDogJy92ZXJicy9zbGlkZXInIH1cclxuICAgIF07XHJcbiAgICBjb25zdCB2b2NhYlBhZ2VzID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICdpbnB1dCcsIHVybDogJy92b2NhYnVsYXJ5L2lucHV0J30sXHJcbiAgICAgICAgeyB0aXRsZTogJ2ZsYXNoY2FyZCcsIHVybDogJy92b2NhYnVsYXJ5L2ZsYXNoY2FyZCcgfSxcclxuICAgICAgICB7IHRpdGxlOiAnY29tcGxldGlvbicsIHVybDogJy92b2NhYnVsYXJ5L2NvbXBsZXRpb24nIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ2ZpbGwtaW4nLCB1cmw6ICcvdm9jYWJ1bGFyeS9maWxsLWluJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdxdWl6JywgdXJsOiAnL3ZvY2FidWxhcnkvcXVpeicgfSxcclxuICAgICAgICB7IHRpdGxlOiAnc2NyYW1ibGUnLCB1cmw6ICcvdm9jYWJ1bGFyeS9zY3JhbWJsZScgfSxcclxuICAgICAgICB7IHRpdGxlOiAnc2xpZGVyJywgdXJsOiAnL3ZvY2FidWxhcnkvc2xpZGVyJyB9XHJcbiAgICBdO1xyXG4gICAgbGV0IHRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlID0gIXRvZ2dsZTtcclxuICAgICAgICBpZih0b2dnbGUpIHtcclxuICAgICAgICAgICAgbWVudVJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxyXG4gICAgICAgICAgICBtZW51UmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2UnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51UmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgICAgICBtZW51UmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWwgaWQ9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJidXR0b25cIiBvbkNsaWNrPXsgaGFuZGxlQ2xpY2sgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXsgbWVudVJlZiB9IGlkPVwic3ViTWVudVwiIGNsYXNzTmFtZT0nY2xvc2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+dmVyYnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgcGFnZXM9eyB2ZXJiUGFnZXMgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+dm9jYWJ1bGFyeTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBwYWdlcz17IHZvY2FiUGFnZXMgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXRlTWVudTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJMaW5rIiwiTWVudSIsIlNpdGVNZW51IiwibWVudVJlZiIsInZlcmJQYWdlcyIsInRpdGxlIiwidXJsIiwidm9jYWJQYWdlcyIsInRvZ2dsZSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm5hdiIsInVsIiwiaWQiLCJsaSIsImhyZWYiLCJhIiwib25DbGljayIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsImgzIiwicGFnZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/siteMenu.tsx\n"));

/***/ })

});