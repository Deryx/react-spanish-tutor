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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar SlideShow = function(param) {\n    var slideSet = param.slideSet;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slideNumber = ref[0], setSlideNumber = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(slideSet), slides = ref1[0], setSlides = ref1[1];\n    var slidesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(slides.map(function() {\n        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    }));\n    var incrementSlideNumber = function() {\n        setSlideNumber(slideNumber + 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        slidesRef.current.map(function(ref) {\n            return ref.current.classList.add(\"not-active\");\n        });\n        slidesRef.current[slideNumber];\n    }, []);\n    return slides && slides.map(function(slide, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: slidesRef.current[index],\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: slide.image,\n                    width: 400,\n                    height: 250,\n                    objectPosition: \"center\",\n                    alt: slide.caption\n                }, \"image-\".concat(index), false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: slide.caption\n                }, \"caption-\".concat(index), false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, \"slide-\".concat(index), true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, _this);\n    });\n};\n_s(SlideShow, \"pKqcmowHECNANp07HjMBmO2IOcM=\");\n_c = SlideShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlideShow);\nvar _c;\n$RefreshReg$(_c, \"SlideShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zbGlkZVNob3cudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBQXNFO0FBQ3BCO0FBT2xELElBQU1NLFNBQVMsR0FBRyxnQkFBa0M7UUFBL0JDLFFBQVEsU0FBUkEsUUFBUTs7SUFDekIsSUFBc0NMLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBMUNNLFdBQVcsR0FBb0JOLEdBQVcsR0FBL0IsRUFBRU8sY0FBYyxHQUFJUCxHQUFXLEdBQWY7SUFDbEMsSUFBNEJBLElBQWtCLEdBQWxCQSwrQ0FBUSxDQUFDSyxRQUFRLENBQUMsRUFBdkNHLE1BQU0sR0FBZVIsSUFBa0IsR0FBakMsRUFBRVMsU0FBUyxHQUFJVCxJQUFrQixHQUF0QjtJQUN4QixJQUFNVSxTQUFTLEdBQUdULDZDQUFNLENBQUNPLE1BQU0sQ0FBQ0csR0FBRyxDQUFDOzZCQUFNVCxnREFBUyxFQUFFO0tBQUEsQ0FBQyxDQUFDO0lBRXZELElBQU1VLG9CQUFvQixHQUFHLFdBQU07UUFDL0JMLGNBQWMsQ0FBQ0QsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ25DO0lBRURQLGdEQUFTLENBQUMsV0FBTTtRQUNaVyxTQUFTLENBQUNHLE9BQU8sQ0FBQ0YsR0FBRyxDQUFDRyxTQUFBQSxHQUFHO21CQUFJQSxHQUFHLENBQUNELE9BQU8sQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBQ3RFTixTQUFTLENBQUNHLE9BQU8sQ0FBQ1AsV0FBVyxDQUFDLENBQUM7S0FDbEMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQ0lFLE1BQU0sSUFBSUEsTUFBTSxDQUFDRyxHQUFHLENBQUUsU0FBQ00sS0FBSyxFQUFFQyxLQUFLOzZCQUMvQiw4REFBQ0MsS0FBRztZQUFDTCxHQUFHLEVBQUVKLFNBQVMsQ0FBQ0csT0FBTyxDQUFDSyxLQUFLLENBQUM7OzhCQUM5Qiw4REFBQ2YsaUVBQUs7b0JBQTBCaUIsR0FBRyxFQUFHSCxLQUFLLENBQUNJLEtBQUs7b0JBQUdDLEtBQUssRUFBRSxHQUFHO29CQUFFQyxNQUFNLEVBQUUsR0FBRztvQkFBRUMsY0FBYyxFQUFDLFFBQVE7b0JBQUNDLEdBQUcsRUFBR1IsS0FBSyxDQUFDUyxPQUFPO21CQUEzRyxRQUFPLENBQVEsT0FBTlIsS0FBSyxDQUFFOzs7O3lCQUFnRzs4QkFDN0gsOERBQUNTLEdBQUM7OEJBQThCVixLQUFLLENBQUNTLE9BQU87bUJBQXBDLFVBQVMsQ0FBUSxPQUFOUixLQUFLLENBQUU7Ozs7eUJBQXdCOztXQUZiLFFBQU8sQ0FBUSxPQUFOQSxLQUFLLENBQUU7Ozs7aUJBR3BEO0tBQUEsQ0FDVCxDQUNKO0NBQ0o7R0F0QktkLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQXdCZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NsaWRlU2hvdy50c3g/Y2VlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZSc7XHJcblxyXG5pbnRlcmZhY2UgU2xpZGVTaG93UHJvcHMge1xyXG4gICAgc2xpZGVTZXQ6IGFueTtcclxufVxyXG5cclxuXHJcbmNvbnN0IFNsaWRlU2hvdyA9ICh7IHNsaWRlU2V0IH06IFNsaWRlU2hvd1Byb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbc2xpZGVOdW1iZXIsIHNldFNsaWRlTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3NsaWRlcywgc2V0U2xpZGVzXSA9IHVzZVN0YXRlKHNsaWRlU2V0KTtcclxuICAgIGNvbnN0IHNsaWRlc1JlZiA9IHVzZVJlZihzbGlkZXMubWFwKCgpID0+IGNyZWF0ZVJlZigpKSk7XHJcblxyXG4gICAgY29uc3QgaW5jcmVtZW50U2xpZGVOdW1iZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2xpZGVOdW1iZXIoc2xpZGVOdW1iZXIgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNsaWRlc1JlZi5jdXJyZW50Lm1hcChyZWYgPT4gcmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnbm90LWFjdGl2ZScpKTtcclxuICAgICAgICBzbGlkZXNSZWYuY3VycmVudFtzbGlkZU51bWJlcl07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBzbGlkZXMgJiYgc2xpZGVzLm1hcCggKHNsaWRlLCBpbmRleCkgPT4gXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtzbGlkZXNSZWYuY3VycmVudFtpbmRleF19IGtleT17IGBzbGlkZS0ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGtleT17IGBpbWFnZS0ke2luZGV4fWAgfSBzcmM9eyBzbGlkZS5pbWFnZSB9IHdpZHRoPXs0MDB9IGhlaWdodD17MjUwfSBvYmplY3RQb3NpdGlvbj0nY2VudGVyJyBhbHQ9eyBzbGlkZS5jYXB0aW9uIH0gLz5cclxuICAgICAgICAgICAgICAgIDxwIGtleT17IGBjYXB0aW9uLSR7aW5kZXh9YCB9Pnsgc2xpZGUuY2FwdGlvbiB9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZVNob3c7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJjcmVhdGVSZWYiLCJJbWFnZSIsIlNsaWRlU2hvdyIsInNsaWRlU2V0Iiwic2xpZGVOdW1iZXIiLCJzZXRTbGlkZU51bWJlciIsInNsaWRlcyIsInNldFNsaWRlcyIsInNsaWRlc1JlZiIsIm1hcCIsImluY3JlbWVudFNsaWRlTnVtYmVyIiwiY3VycmVudCIsInJlZiIsImNsYXNzTGlzdCIsImFkZCIsInNsaWRlIiwiaW5kZXgiLCJkaXYiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0UG9zaXRpb24iLCJhbHQiLCJjYXB0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/slideShow.tsx\n"));

/***/ })

});