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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar SlideShow = function(param) {\n    var slideSet = param.slideSet;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slide = ref[0], setSlide = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(slideSet), slides = ref1[0], setSlides = ref1[1];\n    var incrementSlide = function() {\n        if (slide < slides.length) {\n            setSlide(slide + 1);\n        }\n    };\n    // const playSlideShow = () => {\n    //     let previous;\n    //     if(previous && slide > 0) {\n    //         previous = slide - 1;\n    //     }\n    // }\n    slides[slide];\n    return slides && slides.map(function(slide, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"not-active\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: slide.image,\n                    width: 400,\n                    height: 250,\n                    objectPosition: \"center\",\n                    alt: slide.caption\n                }, \"image-\".concat(index), false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: slide.caption\n                }, \"caption-\".concat(index), false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, \"slide-\".concat(index), true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, _this);\n    });\n};\n_s(SlideShow, \"09t9ks9fKjI5LAnWvlQSx3ZCoPk=\");\n_c = SlideShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlideShow);\nvar _c;\n$RefreshReg$(_c, \"SlideShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zbGlkZVNob3cudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBQTJEO0FBQ1Q7QUFPbEQsSUFBTUcsU0FBUyxHQUFHLGdCQUFrQztRQUEvQkMsUUFBUSxTQUFSQSxRQUFROztJQUN6QixJQUEwQkgsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUE5QkksS0FBSyxHQUFjSixHQUFXLEdBQXpCLEVBQUVLLFFBQVEsR0FBSUwsR0FBVyxHQUFmO0lBQ3RCLElBQTRCQSxJQUFrQixHQUFsQkEsK0NBQVEsQ0FBQ0csUUFBUSxDQUFDLEVBQXZDRyxNQUFNLEdBQWVOLElBQWtCLEdBQWpDLEVBQUVPLFNBQVMsR0FBSVAsSUFBa0IsR0FBdEI7SUFFeEIsSUFBTVEsY0FBYyxHQUFHLFdBQU07UUFDekIsSUFBR0osS0FBSyxHQUFHRSxNQUFNLENBQUNHLE1BQU0sRUFBRTtZQUN0QkosUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkI7S0FDSjtJQUVELGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUVoQyxRQUFRO0lBRVIsSUFBSTtJQUVKRSxNQUFNLENBQUNGLEtBQUssQ0FBQyxDQUFDO0lBRWQsT0FDSUUsTUFBTSxJQUFJQSxNQUFNLENBQUNJLEdBQUcsQ0FBRSxTQUFDTixLQUFLLEVBQUVPLEtBQUs7NkJBQy9CLDhEQUFDQyxLQUFHO1lBQXlCQyxTQUFTLEVBQUMsWUFBWTs7OEJBQy9DLDhEQUFDWixpRUFBSztvQkFBMEJhLEdBQUcsRUFBR1YsS0FBSyxDQUFDVyxLQUFLO29CQUFHQyxLQUFLLEVBQUUsR0FBRztvQkFBRUMsTUFBTSxFQUFFLEdBQUc7b0JBQUVDLGNBQWMsRUFBQyxRQUFRO29CQUFDQyxHQUFHLEVBQUdmLEtBQUssQ0FBQ2dCLE9BQU87bUJBQTNHLFFBQU8sQ0FBUSxPQUFOVCxLQUFLLENBQUU7Ozs7eUJBQWdHOzhCQUM3SCw4REFBQ1UsR0FBQzs4QkFBOEJqQixLQUFLLENBQUNnQixPQUFPO21CQUFwQyxVQUFTLENBQVEsT0FBTlQsS0FBSyxDQUFFOzs7O3lCQUF3Qjs7V0FGNUMsUUFBTyxDQUFRLE9BQU5BLEtBQUssQ0FBRTs7OztpQkFHckI7S0FBQSxDQUNULENBQ0o7Q0FDSjtHQTdCS1QsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBK0JmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVTaG93LnRzeD9jZWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZSc7XHJcblxyXG5pbnRlcmZhY2UgU2xpZGVTaG93UHJvcHMge1xyXG4gICAgc2xpZGVTZXQ6IGFueTtcclxufVxyXG5cclxuXHJcbmNvbnN0IFNsaWRlU2hvdyA9ICh7IHNsaWRlU2V0IH06IFNsaWRlU2hvd1Byb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbc2xpZGUsIHNldFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3NsaWRlcywgc2V0U2xpZGVzXSA9IHVzZVN0YXRlKHNsaWRlU2V0KTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRTbGlkZSA9ICgpID0+IHtcclxuICAgICAgICBpZihzbGlkZSA8IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2V0U2xpZGUoc2xpZGUgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgcGxheVNsaWRlU2hvdyA9ICgpID0+IHtcclxuICAgIC8vICAgICBsZXQgcHJldmlvdXM7XHJcbiAgICAvLyAgICAgaWYocHJldmlvdXMgJiYgc2xpZGUgPiAwKSB7XHJcbiAgICAvLyAgICAgICAgIHByZXZpb3VzID0gc2xpZGUgLSAxO1xyXG5cclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIHNsaWRlc1tzbGlkZV07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBzbGlkZXMgJiYgc2xpZGVzLm1hcCggKHNsaWRlLCBpbmRleCkgPT4gXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXsgYHNsaWRlLSR7aW5kZXh9YH0gY2xhc3NOYW1lPSdub3QtYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBrZXk9eyBgaW1hZ2UtJHtpbmRleH1gIH0gc3JjPXsgc2xpZGUuaW1hZ2UgfSB3aWR0aD17NDAwfSBoZWlnaHQ9ezI1MH0gb2JqZWN0UG9zaXRpb249J2NlbnRlcicgYWx0PXsgc2xpZGUuY2FwdGlvbiB9IC8+XHJcbiAgICAgICAgICAgICAgICA8cCBrZXk9eyBgY2FwdGlvbi0ke2luZGV4fWAgfT57IHNsaWRlLmNhcHRpb24gfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgIClcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVTaG93OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJTbGlkZVNob3ciLCJzbGlkZVNldCIsInNsaWRlIiwic2V0U2xpZGUiLCJzbGlkZXMiLCJzZXRTbGlkZXMiLCJpbmNyZW1lbnRTbGlkZSIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdFBvc2l0aW9uIiwiYWx0IiwiY2FwdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/slideShow.tsx\n"));

/***/ })

});