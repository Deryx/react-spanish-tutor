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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar SlideShow = function(param) {\n    var slideSet = param.slideSet;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slideNumber = ref[0], setSlideNumber = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(slideSet), slides = ref1[0], setSlides = ref1[1];\n    var slidesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(slides.map(function() {\n        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    }));\n    var incrementSlide = function() {\n        setSlideNumber(slideNumber + 1);\n    };\n    var playSlideShow = function() {\n        if (slideNumber < slides.length) {\n            var previous;\n            if (slideNumber > 0) {\n                previous = slideNumber - 1;\n                slidesRef.current[previous].style.display = \"none\";\n            }\n            slidesRef.current[slideNumber].style.display = \"block\";\n            incrementSlide();\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = slidesRef.current[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var slide = _step.value;\n                slide.current.style.display = \"none\";\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n    }, []);\n    playSlideShow();\n    return slides && slides.map(function(slide, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: slidesRef.current[index],\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: slide.image,\n                    width: 400,\n                    height: 250,\n                    objectPosition: \"center\",\n                    alt: slide.caption\n                }, \"image-\".concat(index), false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: slide.caption\n                }, \"caption-\".concat(index), false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, \"slide-\".concat(index), true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, _this);\n    });\n};\n_s(SlideShow, \"pKqcmowHECNANp07HjMBmO2IOcM=\");\n_c = SlideShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlideShow);\nvar _c;\n$RefreshReg$(_c, \"SlideShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zbGlkZVNob3cudHN4P2NlZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UnO1xyXG5cclxuaW50ZXJmYWNlIFNsaWRlU2hvd1Byb3BzIHtcclxuICAgIHNsaWRlU2V0OiBhbnk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBTbGlkZVNob3cgPSAoeyBzbGlkZVNldCB9OiBTbGlkZVNob3dQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3NsaWRlTnVtYmVyLCBzZXRTbGlkZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtzbGlkZXMsIHNldFNsaWRlc10gPSB1c2VTdGF0ZShzbGlkZVNldCk7XHJcbiAgICBjb25zdCBzbGlkZXNSZWYgPSB1c2VSZWYoc2xpZGVzLm1hcCgoKSA9PiBjcmVhdGVSZWYoKSkpO1xyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudFNsaWRlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNsaWRlTnVtYmVyKHNsaWRlTnVtYmVyICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGxheVNsaWRlU2hvdyA9ICgpID0+IHtcclxuICAgICAgICBpZihzbGlkZU51bWJlciA8IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IHByZXZpb3VzO1xyXG4gICAgICAgICAgICBpZihzbGlkZU51bWJlciA+IDApIHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzID0gc2xpZGVOdW1iZXIgLSAxO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNSZWYuY3VycmVudFtwcmV2aW91c10uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2xpZGVzUmVmLmN1cnJlbnRbc2xpZGVOdW1iZXJdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBpbmNyZW1lbnRTbGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZvcihjb25zdCBzbGlkZSBvZiBzbGlkZXNSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzbGlkZS5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHBsYXlTbGlkZVNob3coKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHNsaWRlcyAmJiBzbGlkZXMubWFwKCAoc2xpZGUsIGluZGV4KSA9PiBcclxuICAgICAgICAgICAgPGRpdiByZWY9e3NsaWRlc1JlZi5jdXJyZW50W2luZGV4XX0ga2V5PXsgYHNsaWRlLSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Uga2V5PXsgYGltYWdlLSR7aW5kZXh9YCB9IHNyYz17IHNsaWRlLmltYWdlIH0gd2lkdGg9ezQwMH0gaGVpZ2h0PXsyNTB9IG9iamVjdFBvc2l0aW9uPSdjZW50ZXInIGFsdD17IHNsaWRlLmNhcHRpb24gfSAvPlxyXG4gICAgICAgICAgICAgICAgPHAga2V5PXsgYGNhcHRpb24tJHtpbmRleH1gIH0+eyBzbGlkZS5jYXB0aW9uIH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICApXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlU2hvdzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImNyZWF0ZVJlZiIsIkltYWdlIiwiU2xpZGVTaG93Iiwic2xpZGVTZXQiLCJzbGlkZU51bWJlciIsInNldFNsaWRlTnVtYmVyIiwic2xpZGVzIiwic2V0U2xpZGVzIiwic2xpZGVzUmVmIiwibWFwIiwiaW5jcmVtZW50U2xpZGUiLCJwbGF5U2xpZGVTaG93IiwibGVuZ3RoIiwicHJldmlvdXMiLCJjdXJyZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2xpZGUiLCJpbmRleCIsImRpdiIsInJlZiIsInNyYyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RQb3NpdGlvbiIsImFsdCIsImNhcHRpb24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/slideShow.tsx\n"));

/***/ })

});