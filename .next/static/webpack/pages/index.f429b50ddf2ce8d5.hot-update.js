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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/slide */ \"./src/components/slide.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n// import { setTimeout } from 'timers/promises';\n\nvar SlideShow = function(param) {\n    var slidesData = param.slidesData, delay = param.delay;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slideNumber = ref[0], setSlideNumber = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(slidesData), slides = ref1[0], setSlides = ref1[1];\n    var timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var resetTimeout = function() {\n        if (timeoutRef.current) {\n            clearTimeout(timeoutRef.current);\n        }\n    };\n    var changeSlide = function() {\n        setSlideNumber(slideNumber + 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        resetTimeout();\n        timeoutRef.current = setTimeout(changeSlide, delay);\n    }, [\n        slideNumber\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"slideShowSlider\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_slide__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            image: slides[slideNumber].image,\n            imageWidth: 400,\n            imageHeight: 250,\n            caption: slides[slideNumber].caption\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this);\n};\n_s(SlideShow, \"/AxnYrs3m1x/WCy3fCc5QA/F6y0=\");\n_c = SlideShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlideShow);\nvar _c;\n$RefreshReg$(_c, \"SlideShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zbGlkZVNob3cudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFBMkQ7QUFDM0QsZ0RBQWdEO0FBQ1I7QUFPeEMsSUFBTUssU0FBUyxHQUFHLGdCQUE0QztRQUF6Q0MsVUFBVSxTQUFWQSxVQUFVLEVBQUVDLEtBQUssU0FBTEEsS0FBSzs7SUFDbEMsSUFBc0NMLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBMUNNLFdBQVcsR0FBb0JOLEdBQVcsR0FBL0IsRUFBRU8sY0FBYyxHQUFJUCxHQUFXLEdBQWY7SUFDbEMsSUFBNEJBLElBQXNCLEdBQXRCQSwrQ0FBUSxDQUFFSSxVQUFVLENBQUUsRUFBM0NJLE1BQU0sR0FBZVIsSUFBc0IsR0FBckMsRUFBRVMsU0FBUyxHQUFJVCxJQUFzQixHQUExQjtJQUN4QixJQUFNVSxVQUFVLEdBQUdULDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBRS9CLElBQU1VLFlBQVksR0FBRyxXQUFNO1FBQ3ZCLElBQUdELFVBQVUsQ0FBQ0UsT0FBTyxFQUFFO1lBQ25CQyxZQUFZLENBQUNILFVBQVUsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7U0FDcEM7S0FDSjtJQUVELElBQU1FLFdBQVcsR0FBUSxXQUFNO1FBQzNCUCxjQUFjLENBQUNELFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNuQztJQUVEUCxnREFBUyxDQUFDLFdBQU07UUFDWlksWUFBWSxFQUFFLENBQUM7UUFDZkQsVUFBVSxDQUFDRSxPQUFPLEdBQUdHLFVBQVUsQ0FBQ0QsV0FBVyxFQUFFVCxLQUFLLENBQUMsQ0FBQztLQUN2RCxFQUFFO1FBQUNDLFdBQVc7S0FBQyxDQUFDLENBQUM7SUFFbEIscUJBQ0ksOERBQUNVLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGlCQUFpQjtrQkFDNUIsNEVBQUNmLHlEQUFLO1lBQUNnQixLQUFLLEVBQUVWLE1BQU0sQ0FBQ0YsV0FBVyxDQUFDLENBQUNZLEtBQUs7WUFBRUMsVUFBVSxFQUFFLEdBQUc7WUFBRUMsV0FBVyxFQUFFLEdBQUc7WUFBRUMsT0FBTyxFQUFFYixNQUFNLENBQUNGLFdBQVcsQ0FBQyxDQUFDZSxPQUFPOzs7OztpQkFBSTs7Ozs7YUFDbEgsQ0FDUjtDQUNMO0dBekJLbEIsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBMkJmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVTaG93LnRzeD9jZWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tICd0aW1lcnMvcHJvbWlzZXMnO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAnLi4vY29tcG9uZW50cy9zbGlkZSc7XHJcblxyXG5pbnRlcmZhY2UgU2xpZGVTaG93UHJvcHMge1xyXG4gICAgc2xpZGVzRGF0YTogYW55O1xyXG4gICAgZGVsYXk6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgU2xpZGVTaG93ID0gKHsgc2xpZGVzRGF0YSwgZGVsYXkgfTogU2xpZGVTaG93UHJvcHMgKSA9PiB7XHJcbiAgICBjb25zdCBbc2xpZGVOdW1iZXIsIHNldFNsaWRlTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3NsaWRlcywgc2V0U2xpZGVzXSA9IHVzZVN0YXRlKCBzbGlkZXNEYXRhICk7XHJcbiAgICBjb25zdCB0aW1lb3V0UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHJlc2V0VGltZW91dCA9ICgpID0+IHtcclxuICAgICAgICBpZih0aW1lb3V0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVNsaWRlOiBhbnkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2xpZGVOdW1iZXIoc2xpZGVOdW1iZXIgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJlc2V0VGltZW91dCgpO1xyXG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoY2hhbmdlU2xpZGUsIGRlbGF5KTtcclxuICAgIH0sIFtzbGlkZU51bWJlcl0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlU2hvd1NsaWRlcic+XHJcbiAgICAgICAgICAgIDxTbGlkZSBpbWFnZT17c2xpZGVzW3NsaWRlTnVtYmVyXS5pbWFnZX0gaW1hZ2VXaWR0aD17NDAwfSBpbWFnZUhlaWdodD17MjUwfSBjYXB0aW9uPXtzbGlkZXNbc2xpZGVOdW1iZXJdLmNhcHRpb259IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZVNob3c7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJTbGlkZSIsIlNsaWRlU2hvdyIsInNsaWRlc0RhdGEiLCJkZWxheSIsInNsaWRlTnVtYmVyIiwic2V0U2xpZGVOdW1iZXIiLCJzbGlkZXMiLCJzZXRTbGlkZXMiLCJ0aW1lb3V0UmVmIiwicmVzZXRUaW1lb3V0IiwiY3VycmVudCIsImNsZWFyVGltZW91dCIsImNoYW5nZVNsaWRlIiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImltYWdlIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwiY2FwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/slideShow.tsx\n"));

/***/ })

});