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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar SlideShow = function(param) {\n    var slideSet = param.slideSet;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slide = ref[0], setSlide = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(slideSet), slides = ref1[0], setSlides = ref1[1];\n    var slidesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(slides.map(function() {\n        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    }));\n    var incrementSlide = function() {\n        if (slide < slides.length) {\n            setSlide(slide + 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = slidesRef.current[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var slide1 = _step.value;\n                slide1.current.classList.add(\"not-active\");\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        var playSlideShow = function() {\n            var previous;\n            if (slide > 0) {\n                previous = slide - 1;\n                slidesRef.current[previous].classList.add(\"not-active\");\n            }\n            slidesRef.current[slide] && slidesRef.current[slide].classList.add(\"active\");\n        };\n        playSlideShow();\n    }, []);\n    return slides && slides.map(function(slide, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: slidesRef.current[index],\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: slide.image,\n                    width: 400,\n                    height: 250,\n                    objectPosition: \"center\",\n                    alt: slide.caption\n                }, \"image-\".concat(index), false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: slide.caption\n                }, \"caption-\".concat(index), false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, \"slide-\".concat(index), true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, _this);\n    });\n};\n_s(SlideShow, \"pKqcmowHECNANp07HjMBmO2IOcM=\");\n_c = SlideShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlideShow);\nvar _c;\n$RefreshReg$(_c, \"SlideShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zbGlkZVNob3cudHN4P2NlZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UnO1xyXG5cclxuaW50ZXJmYWNlIFNsaWRlU2hvd1Byb3BzIHtcclxuICAgIHNsaWRlU2V0OiBhbnk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBTbGlkZVNob3cgPSAoeyBzbGlkZVNldCB9OiBTbGlkZVNob3dQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3NsaWRlLCBzZXRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtzbGlkZXMsIHNldFNsaWRlc10gPSB1c2VTdGF0ZShzbGlkZVNldCk7XHJcbiAgICBjb25zdCBzbGlkZXNSZWYgPSB1c2VSZWYoc2xpZGVzLm1hcCgoKSA9PiBjcmVhdGVSZWYoKSkpO1xyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudFNsaWRlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHNsaWRlIDwgc2xpZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZXRTbGlkZShzbGlkZSArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZvcihjb25zdCBzbGlkZSBvZiBzbGlkZXNSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzbGlkZS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXlTbGlkZVNob3cgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91cztcclxuICAgICAgICAgICAgaWYoc2xpZGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91cyA9IHNsaWRlIC0gMTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzUmVmLmN1cnJlbnRbcHJldmlvdXNdLmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2xpZGVzUmVmLmN1cnJlbnRbc2xpZGVdICYmIHNsaWRlc1JlZi5jdXJyZW50W3NsaWRlXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBwbGF5U2xpZGVTaG93KCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBzbGlkZXMgJiYgc2xpZGVzLm1hcCggKHNsaWRlLCBpbmRleCkgPT4gXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtzbGlkZXNSZWYuY3VycmVudFtpbmRleF19IGtleT17IGBzbGlkZS0ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGtleT17IGBpbWFnZS0ke2luZGV4fWAgfSBzcmM9eyBzbGlkZS5pbWFnZSB9IHdpZHRoPXs0MDB9IGhlaWdodD17MjUwfSBvYmplY3RQb3NpdGlvbj0nY2VudGVyJyBhbHQ9eyBzbGlkZS5jYXB0aW9uIH0gLz5cclxuICAgICAgICAgICAgICAgIDxwIGtleT17IGBjYXB0aW9uLSR7aW5kZXh9YCB9Pnsgc2xpZGUuY2FwdGlvbiB9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZVNob3c7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJjcmVhdGVSZWYiLCJJbWFnZSIsIlNsaWRlU2hvdyIsInNsaWRlU2V0Iiwic2xpZGUiLCJzZXRTbGlkZSIsInNsaWRlcyIsInNldFNsaWRlcyIsInNsaWRlc1JlZiIsIm1hcCIsImluY3JlbWVudFNsaWRlIiwibGVuZ3RoIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsInBsYXlTbGlkZVNob3ciLCJwcmV2aW91cyIsImluZGV4IiwiZGl2IiwicmVmIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdFBvc2l0aW9uIiwiYWx0IiwiY2FwdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/slideShow.tsx\n"));

/***/ })

});