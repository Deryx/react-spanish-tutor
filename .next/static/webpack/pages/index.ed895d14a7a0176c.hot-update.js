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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar SlideShow = function(param) {\n    var slideSet = param.slideSet;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slide = ref[0], setSlide = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(slideSet), slides = ref1[0], setSlides = ref1[1];\n    var slidesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(slides.map(function() {\n        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    }));\n    var incrementSlide = function() {\n        if (slide < slides.length) {\n            setSlide(slide + 1);\n        }\n    };\n    // useEffect(() => {\n    //     for(const slide of slidesRef.current) {\n    //         slide.current.classList.add('not-active');\n    //     }\n    //     const playSlideShow = () => {\n    //         let previous;\n    //         if(slide > 0) {\n    //             previous = slide - 1;\n    //             slidesRef.current[previous].classList.add('not-active');\n    //         }\n    //         slidesRef.current[slide] && slidesRef.current[slide].classList.add('active');\n    //     }\n    //     playSlideShow();\n    // }, [slide]);\n    console.log(slide);\n    return slides && slides.map(function(slide, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: slidesRef.current[index],\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: slide.image,\n                    width: 400,\n                    height: 250,\n                    objectPosition: \"center\",\n                    alt: slide.caption\n                }, \"image-\".concat(index), false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: slide.caption\n                }, \"caption-\".concat(index), false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, \"slide-\".concat(index), true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, _this);\n    });\n};\n_s(SlideShow, \"1LSnMnxsT/RNx1pX6KMh7c7TTJE=\");\n_c = SlideShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlideShow);\nvar _c;\n$RefreshReg$(_c, \"SlideShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zbGlkZVNob3cudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBQXNFO0FBQ3BCO0FBT2xELElBQU1LLFNBQVMsR0FBRyxnQkFBa0M7UUFBL0JDLFFBQVEsU0FBUkEsUUFBUTs7SUFDekIsSUFBMEJMLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUJNLEtBQUssR0FBY04sR0FBVyxHQUF6QixFQUFFTyxRQUFRLEdBQUlQLEdBQVcsR0FBZjtJQUN0QixJQUE0QkEsSUFBa0IsR0FBbEJBLCtDQUFRLENBQUNLLFFBQVEsQ0FBQyxFQUF2Q0csTUFBTSxHQUFlUixJQUFrQixHQUFqQyxFQUFFUyxTQUFTLEdBQUlULElBQWtCLEdBQXRCO0lBQ3hCLElBQU1VLFNBQVMsR0FBR1QsNkNBQU0sQ0FBQ08sTUFBTSxDQUFDRyxHQUFHLENBQUM7NkJBQU1ULGdEQUFTLEVBQUU7S0FBQSxDQUFDLENBQUM7SUFFdkQsSUFBTVUsY0FBYyxHQUFHLFdBQU07UUFDekIsSUFBR04sS0FBSyxHQUFHRSxNQUFNLENBQUNLLE1BQU0sRUFBRTtZQUN0Qk4sUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkI7S0FDSjtJQUVELG9CQUFvQjtJQUNwQiw4Q0FBOEM7SUFDOUMscURBQXFEO0lBQ3JELFFBQVE7SUFFUixvQ0FBb0M7SUFDcEMsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFFcEMsdUVBQXVFO0lBQ3ZFLFlBQVk7SUFFWix3RkFBd0Y7SUFDeEYsUUFBUTtJQUVSLHVCQUF1QjtJQUN2QixlQUFlO0lBRWZRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxLQUFLLENBQUMsQ0FBQztJQUVuQixPQUNJRSxNQUFNLElBQUlBLE1BQU0sQ0FBQ0csR0FBRyxDQUFFLFNBQUNMLEtBQUssRUFBRVUsS0FBSzs2QkFDL0IsOERBQUNDLEtBQUc7WUFBQ0MsR0FBRyxFQUFFUixTQUFTLENBQUNTLE9BQU8sQ0FBQ0gsS0FBSyxDQUFDOzs4QkFDOUIsOERBQUNiLGlFQUFLO29CQUEwQmlCLEdBQUcsRUFBR2QsS0FBSyxDQUFDZSxLQUFLO29CQUFHQyxLQUFLLEVBQUUsR0FBRztvQkFBRUMsTUFBTSxFQUFFLEdBQUc7b0JBQUVDLGNBQWMsRUFBQyxRQUFRO29CQUFDQyxHQUFHLEVBQUduQixLQUFLLENBQUNvQixPQUFPO21CQUEzRyxRQUFPLENBQVEsT0FBTlYsS0FBSyxDQUFFOzs7O3lCQUFnRzs4QkFDN0gsOERBQUNXLEdBQUM7OEJBQThCckIsS0FBSyxDQUFDb0IsT0FBTzttQkFBcEMsVUFBUyxDQUFRLE9BQU5WLEtBQUssQ0FBRTs7Ozt5QkFBd0I7O1dBRmIsUUFBTyxDQUFRLE9BQU5BLEtBQUssQ0FBRTs7OztpQkFHcEQ7S0FBQSxDQUNULENBQ0o7Q0FDSjtHQXhDS1osU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBMENmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVTaG93LnRzeD9jZWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlJztcclxuXHJcbmludGVyZmFjZSBTbGlkZVNob3dQcm9wcyB7XHJcbiAgICBzbGlkZVNldDogYW55O1xyXG59XHJcblxyXG5cclxuY29uc3QgU2xpZGVTaG93ID0gKHsgc2xpZGVTZXQgfTogU2xpZGVTaG93UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtzbGlkZSwgc2V0U2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbc2xpZGVzLCBzZXRTbGlkZXNdID0gdXNlU3RhdGUoc2xpZGVTZXQpO1xyXG4gICAgY29uc3Qgc2xpZGVzUmVmID0gdXNlUmVmKHNsaWRlcy5tYXAoKCkgPT4gY3JlYXRlUmVmKCkpKTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRTbGlkZSA9ICgpID0+IHtcclxuICAgICAgICBpZihzbGlkZSA8IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2V0U2xpZGUoc2xpZGUgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBmb3IoY29uc3Qgc2xpZGUgb2Ygc2xpZGVzUmVmLmN1cnJlbnQpIHtcclxuICAgIC8vICAgICAgICAgc2xpZGUuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdub3QtYWN0aXZlJyk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBjb25zdCBwbGF5U2xpZGVTaG93ID0gKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBsZXQgcHJldmlvdXM7XHJcbiAgICAvLyAgICAgICAgIGlmKHNsaWRlID4gMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgcHJldmlvdXMgPSBzbGlkZSAtIDE7XHJcbiAgICBcclxuICAgIC8vICAgICAgICAgICAgIHNsaWRlc1JlZi5jdXJyZW50W3ByZXZpb3VzXS5jbGFzc0xpc3QuYWRkKCdub3QtYWN0aXZlJyk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIHNsaWRlc1JlZi5jdXJyZW50W3NsaWRlXSAmJiBzbGlkZXNSZWYuY3VycmVudFtzbGlkZV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgXHJcbiAgICAvLyAgICAgcGxheVNsaWRlU2hvdygpO1xyXG4gICAgLy8gfSwgW3NsaWRlXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coc2xpZGUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgc2xpZGVzICYmIHNsaWRlcy5tYXAoIChzbGlkZSwgaW5kZXgpID0+IFxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17c2xpZGVzUmVmLmN1cnJlbnRbaW5kZXhdfSBrZXk9eyBgc2xpZGUtJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBrZXk9eyBgaW1hZ2UtJHtpbmRleH1gIH0gc3JjPXsgc2xpZGUuaW1hZ2UgfSB3aWR0aD17NDAwfSBoZWlnaHQ9ezI1MH0gb2JqZWN0UG9zaXRpb249J2NlbnRlcicgYWx0PXsgc2xpZGUuY2FwdGlvbiB9IC8+XHJcbiAgICAgICAgICAgICAgICA8cCBrZXk9eyBgY2FwdGlvbi0ke2luZGV4fWAgfT57IHNsaWRlLmNhcHRpb24gfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgIClcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVTaG93OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiY3JlYXRlUmVmIiwiSW1hZ2UiLCJTbGlkZVNob3ciLCJzbGlkZVNldCIsInNsaWRlIiwic2V0U2xpZGUiLCJzbGlkZXMiLCJzZXRTbGlkZXMiLCJzbGlkZXNSZWYiLCJtYXAiLCJpbmNyZW1lbnRTbGlkZSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsImRpdiIsInJlZiIsImN1cnJlbnQiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0UG9zaXRpb24iLCJhbHQiLCJjYXB0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/slideShow.tsx\n"));

/***/ })

});