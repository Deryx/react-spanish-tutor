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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar SlideShow = function(param) {\n    var slideSet = param.slideSet, interval = param.interval;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slide = ref[0], setSlide = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(slideSet), slides = ref1[0], setSlides = ref1[1];\n    var incrementSlide = function() {\n        setSlide(slide + 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setInterval(function() {\n            return incrementSlide;\n        }, interval);\n    }, [\n        slide\n    ]);\n    console.log(slides[0]);\n    return slides && slides.map(function(slide) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: slide.image,\n                    width: 500,\n                    height: 312,\n                    objectPosition: \"center\",\n                    alt: slide.caption\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: slide.caption\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true);\n    });\n};\n_s(SlideShow, \"EfVbelkyy7h+p7GpQlHWHeDDb70=\");\n_c = SlideShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlideShow);\nvar _c;\n$RefreshReg$(_c, \"SlideShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zbGlkZVNob3cudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBQW1EO0FBQ0Q7QUFPbEQsSUFBTUksU0FBUyxHQUFHLGdCQUE0QztRQUF6Q0MsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7SUFDbkMsSUFBMEJKLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUJLLEtBQUssR0FBY0wsR0FBVyxHQUF6QixFQUFFTSxRQUFRLEdBQUlOLEdBQVcsR0FBZjtJQUN0QixJQUE0QkEsSUFBa0IsR0FBbEJBLCtDQUFRLENBQUNHLFFBQVEsQ0FBQyxFQUF2Q0ksTUFBTSxHQUFlUCxJQUFrQixHQUFqQyxFQUFFUSxTQUFTLEdBQUlSLElBQWtCLEdBQXRCO0lBRXhCLElBQU1TLGNBQWMsR0FBRyxXQUFNO1FBQ3pCSCxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN2QjtJQUVETixnREFBUyxDQUFFLFdBQU07UUFDYlcsV0FBVyxDQUFFO21CQUFNRCxjQUFjO1NBQUEsRUFBRUwsUUFBUSxDQUFDLENBQUM7S0FDaEQsRUFBRTtRQUFDQyxLQUFLO0tBQUMsQ0FBRTtJQUVaTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRCLE9BQ0lBLE1BQU0sSUFBSUEsTUFBTSxDQUFDTSxHQUFHLENBQUVSLFNBQUFBLEtBQUs7NkJBQ3ZCOzs4QkFDSSw4REFBQ0osaUVBQUs7b0JBQUNhLEdBQUcsRUFBR1QsS0FBSyxDQUFDVSxLQUFLO29CQUFHQyxLQUFLLEVBQUUsR0FBRztvQkFBRUMsTUFBTSxFQUFFLEdBQUc7b0JBQUVDLGNBQWMsRUFBQyxRQUFRO29CQUFDQyxHQUFHLEVBQUdkLEtBQUssQ0FBQ2UsT0FBTzs7Ozs7eUJBQUs7OEJBQ3BHLDhEQUFDQyxHQUFDOzhCQUFHaEIsS0FBSyxDQUFDZSxPQUFPOzs7Ozt5QkFBTTs7d0JBQ3pCO0tBQUEsQ0FDTixDQUNKO0NBQ0o7R0F0QktsQixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUF3QmYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zbGlkZVNob3cudHN4P2NlZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZSc7XHJcblxyXG5pbnRlcmZhY2UgU2xpZGVTaG93UHJvcHMge1xyXG4gICAgc2xpZGVTZXQ6IGFueTtcclxuICAgIGludGVydmFsOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFNsaWRlU2hvdyA9ICh7IHNsaWRlU2V0LCBpbnRlcnZhbCB9OiBTbGlkZVNob3dQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3NsaWRlLCBzZXRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtzbGlkZXMsIHNldFNsaWRlc10gPSB1c2VTdGF0ZShzbGlkZVNldCk7XHJcblxyXG4gICAgY29uc3QgaW5jcmVtZW50U2xpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2xpZGUoc2xpZGUgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBzZXRJbnRlcnZhbCggKCkgPT4gaW5jcmVtZW50U2xpZGUsIGludGVydmFsKTtcclxuICAgIH0sIFtzbGlkZV0gKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHNsaWRlc1swXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHNsaWRlcyAmJiBzbGlkZXMubWFwKCBzbGlkZSA9PiBcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9eyBzbGlkZS5pbWFnZSB9IHdpZHRoPXs1MDB9IGhlaWdodD17MzEyfSBvYmplY3RQb3NpdGlvbj0nY2VudGVyJyBhbHQ9eyBzbGlkZS5jYXB0aW9uIH0gLz5cclxuICAgICAgICAgICAgICAgIDxwPnsgc2xpZGUuY2FwdGlvbiB9PC9wPlxyXG4gICAgICAgICAgICA8Lz4gICAgXHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZVNob3c7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlNsaWRlU2hvdyIsInNsaWRlU2V0IiwiaW50ZXJ2YWwiLCJzbGlkZSIsInNldFNsaWRlIiwic2xpZGVzIiwic2V0U2xpZGVzIiwiaW5jcmVtZW50U2xpZGUiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0UG9zaXRpb24iLCJhbHQiLCJjYXB0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/slideShow.tsx\n"));

/***/ })

});