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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar SlideShow = function(param) {\n    var slideSet = param.slideSet;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slideNumber = ref[0], setSlideNumber = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(slideSet), slides = ref1[0], setSlides = ref1[1];\n    var slidesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(slides.map(function() {\n        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    }));\n    var incrementSlide = function() {\n        setSlideNumber(slideNumber + 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = slidesRef.current[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var slide = _step.value;\n                slide.current.style.display = \"none\";\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        var playSlideShow = function() {\n            if (slideNumber < slides.length) {\n                var previous;\n                if (slideNumber > 0) {\n                    previous = slideNumber - 1;\n                    slidesRef.current[previous].style.display = \"none\";\n                }\n                slidesRef.current[slideNumber].style.display = \"block\";\n                incrementSlide();\n            }\n        };\n        console.log(slidesRef.current[slideNumber]);\n    // playSlideShow();\n    }, [\n        slideNumber\n    ]);\n    return slides && slides.map(function(slide, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: slidesRef.current[index],\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: slide.image,\n                    width: 400,\n                    height: 250,\n                    objectPosition: \"center\",\n                    alt: slide.caption\n                }, \"image-\".concat(index), false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: slide.caption\n                }, \"caption-\".concat(index), false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, \"slide-\".concat(index), true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, _this);\n    });\n};\n_s(SlideShow, \"pKqcmowHECNANp07HjMBmO2IOcM=\");\n_c = SlideShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlideShow);\nvar _c;\n$RefreshReg$(_c, \"SlideShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1QsQ0FDSjtDQUNKO0dBdkNLbEIsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBeUNmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVTaG93LnRzeD9jZWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlJztcclxuXHJcbmludGVyZmFjZSBTbGlkZVNob3dQcm9wcyB7XHJcbiAgICBzbGlkZVNldDogYW55O1xyXG59XHJcblxyXG5cclxuY29uc3QgU2xpZGVTaG93ID0gKHsgc2xpZGVTZXQgfTogU2xpZGVTaG93UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtzbGlkZU51bWJlciwgc2V0U2xpZGVOdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbc2xpZGVzLCBzZXRTbGlkZXNdID0gdXNlU3RhdGUoc2xpZGVTZXQpO1xyXG4gICAgY29uc3Qgc2xpZGVzUmVmID0gdXNlUmVmKHNsaWRlcy5tYXAoKCkgPT4gY3JlYXRlUmVmKCkpKTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRTbGlkZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTbGlkZU51bWJlcihzbGlkZU51bWJlciArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZm9yKGNvbnN0IHNsaWRlIG9mIHNsaWRlc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNsaWRlLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXlTbGlkZVNob3cgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHNsaWRlTnVtYmVyIDwgc2xpZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzO1xyXG4gICAgICAgICAgICAgICAgaWYoc2xpZGVOdW1iZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMgPSBzbGlkZU51bWJlciAtIDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUmVmLmN1cnJlbnRbcHJldmlvdXNdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNsaWRlc1JlZi5jdXJyZW50W3NsaWRlTnVtYmVyXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIGluY3JlbWVudFNsaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coc2xpZGVzUmVmLmN1cnJlbnRbc2xpZGVOdW1iZXJdKTtcclxuICAgICAgICAvLyBwbGF5U2xpZGVTaG93KCk7XHJcbiAgICB9LCBbc2xpZGVOdW1iZXJdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHNsaWRlcyAmJiBzbGlkZXMubWFwKCAoc2xpZGUsIGluZGV4KSA9PiBcclxuICAgICAgICAgICAgPGRpdiByZWY9e3NsaWRlc1JlZi5jdXJyZW50W2luZGV4XX0ga2V5PXsgYHNsaWRlLSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Uga2V5PXsgYGltYWdlLSR7aW5kZXh9YCB9IHNyYz17IHNsaWRlLmltYWdlIH0gd2lkdGg9ezQwMH0gaGVpZ2h0PXsyNTB9IG9iamVjdFBvc2l0aW9uPSdjZW50ZXInIGFsdD17IHNsaWRlLmNhcHRpb24gfSAvPlxyXG4gICAgICAgICAgICAgICAgPHAga2V5PXsgYGNhcHRpb24tJHtpbmRleH1gIH0+eyBzbGlkZS5jYXB0aW9uIH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICApXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlU2hvdzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImNyZWF0ZVJlZiIsIkltYWdlIiwiU2xpZGVTaG93Iiwic2xpZGVTZXQiLCJzbGlkZU51bWJlciIsInNldFNsaWRlTnVtYmVyIiwic2xpZGVzIiwic2V0U2xpZGVzIiwic2xpZGVzUmVmIiwibWFwIiwiaW5jcmVtZW50U2xpZGUiLCJjdXJyZW50Iiwic2xpZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJwbGF5U2xpZGVTaG93IiwibGVuZ3RoIiwicHJldmlvdXMiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJkaXYiLCJyZWYiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0UG9zaXRpb24iLCJhbHQiLCJjYXB0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/slideShow.tsx\n"));

/***/ })

});