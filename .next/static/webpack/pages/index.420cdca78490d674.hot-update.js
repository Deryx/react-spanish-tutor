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

/***/ "./src/components/slideShow.tsx":
/*!**************************************!*\
  !*** ./src/components/slideShow.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar SlideShow = function(param) {\n    var slideSet = param.slideSet, interval = param.interval;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slide = ref[0], setSlide = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(slideSet), slides = ref1[0], setSlides = ref1[1];\n    var incrementSlide = function() {\n        setSlide(slide + 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setInterval(function() {\n            return incrementSlide;\n        }, interval);\n    }, [\n        slide\n    ]);\n    return slides && slides.map(function(slide) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: slide.image,\n                    width: 400,\n                    height: 250,\n                    objectPosition: \"center\",\n                    alt: slide.caption\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: slide.caption\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true);\n    });\n};\n_s(SlideShow, \"EfVbelkyy7h+p7GpQlHWHeDDb70=\");\n_c = SlideShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlideShow);\nvar _c;\n$RefreshReg$(_c, \"SlideShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zbGlkZVNob3cudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBQW1EO0FBQ0Q7QUFPbEQsSUFBTUksU0FBUyxHQUFHLGdCQUE0QztRQUF6Q0MsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7SUFDbkMsSUFBMEJKLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUJLLEtBQUssR0FBY0wsR0FBVyxHQUF6QixFQUFFTSxRQUFRLEdBQUlOLEdBQVcsR0FBZjtJQUN0QixJQUE0QkEsSUFBa0IsR0FBbEJBLCtDQUFRLENBQUNHLFFBQVEsQ0FBQyxFQUF2Q0ksTUFBTSxHQUFlUCxJQUFrQixHQUFqQyxFQUFFUSxTQUFTLEdBQUlSLElBQWtCLEdBQXRCO0lBRXhCLElBQU1TLGNBQWMsR0FBRyxXQUFNO1FBQ3pCSCxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN2QjtJQUVETixnREFBUyxDQUFFLFdBQU07UUFDYlcsV0FBVyxDQUFFO21CQUFNRCxjQUFjO1NBQUEsRUFBRUwsUUFBUSxDQUFDLENBQUM7S0FDaEQsRUFBRTtRQUFDQyxLQUFLO0tBQUMsQ0FBRTtJQUVaLE9BQ0lFLE1BQU0sSUFBSUEsTUFBTSxDQUFDSSxHQUFHLENBQUVOLFNBQUFBLEtBQUs7NkJBQ3ZCOzs4QkFDSSw4REFBQ0osaUVBQUs7b0JBQUNXLEdBQUcsRUFBR1AsS0FBSyxDQUFDUSxLQUFLO29CQUFHQyxLQUFLLEVBQUUsR0FBRztvQkFBRUMsTUFBTSxFQUFFLEdBQUc7b0JBQUVDLGNBQWMsRUFBQyxRQUFRO29CQUFDQyxHQUFHLEVBQUdaLEtBQUssQ0FBQ2EsT0FBTzs7Ozs7eUJBQUs7OEJBQ3BHLDhEQUFDQyxHQUFDOzhCQUFHZCxLQUFLLENBQUNhLE9BQU87Ozs7O3lCQUFNOzt3QkFDekI7S0FBQSxDQUNOLENBQ0o7Q0FDSjtHQXBCS2hCLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQXNCZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NsaWRlU2hvdy50c3g/Y2VlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlJztcclxuXHJcbmludGVyZmFjZSBTbGlkZVNob3dQcm9wcyB7XHJcbiAgICBzbGlkZVNldDogYW55O1xyXG4gICAgaW50ZXJ2YWw6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgU2xpZGVTaG93ID0gKHsgc2xpZGVTZXQsIGludGVydmFsIH06IFNsaWRlU2hvd1Byb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbc2xpZGUsIHNldFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3NsaWRlcywgc2V0U2xpZGVzXSA9IHVzZVN0YXRlKHNsaWRlU2V0KTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRTbGlkZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTbGlkZShzbGlkZSArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHNldEludGVydmFsKCAoKSA9PiBpbmNyZW1lbnRTbGlkZSwgaW50ZXJ2YWwpO1xyXG4gICAgfSwgW3NsaWRlXSApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBzbGlkZXMgJiYgc2xpZGVzLm1hcCggc2xpZGUgPT4gXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXsgc2xpZGUuaW1hZ2UgfSB3aWR0aD17NDAwfSBoZWlnaHQ9ezI1MH0gb2JqZWN0UG9zaXRpb249J2NlbnRlcicgYWx0PXsgc2xpZGUuY2FwdGlvbiB9IC8+XHJcbiAgICAgICAgICAgICAgICA8cD57IHNsaWRlLmNhcHRpb24gfTwvcD5cclxuICAgICAgICAgICAgPC8+ICAgIFxyXG4gICAgICAgIClcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVTaG93OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJTbGlkZVNob3ciLCJzbGlkZVNldCIsImludGVydmFsIiwic2xpZGUiLCJzZXRTbGlkZSIsInNsaWRlcyIsInNldFNsaWRlcyIsImluY3JlbWVudFNsaWRlIiwic2V0SW50ZXJ2YWwiLCJtYXAiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0UG9zaXRpb24iLCJhbHQiLCJjYXB0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/slideShow.tsx\n"));

/***/ })

});