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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var _node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar SlideShow = function(param) {\n    var slideSet = param.slideSet, interval = param.interval;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slide = ref[0], setSlide = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(slideSet), slides = ref1[0], setSlides = ref1[1];\n    var slideShowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var incrementSlide = function() {\n        if (slide < slides.length) {\n            setSlide(slide + 1);\n        }\n    };\n    var showNewSlide = function() {\n        var previous;\n        if (slide > 0) {\n            previous = slide - 1;\n        }\n        slides[previous] && slides[previous].classList.remove(\"active\").classList.add(\"not-active\");\n        slides[slide] && slides[slide].classList.add(\"active\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setInterval(function() {\n            incrementSlide();\n            showNewSlide();\n        }, interval);\n    }, [\n        slide\n    ]);\n    console.log(slides[slide]);\n    return slides && slides.map(function(slide, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_node_modules_next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: slide.image,\n                    width: 400,\n                    height: 250,\n                    objectPosition: \"center\",\n                    alt: slide.caption\n                }, \"image-\".concat(index), false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: slide.caption\n                }, \"caption-\".concat(index), false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\src\\\\components\\\\slideShow.tsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, _this);\n    });\n};\n_s(SlideShow, \"6t673ps48twSJ68vMQXHCDG/o4A=\");\n_c = SlideShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlideShow);\nvar _c;\n$RefreshReg$(_c, \"SlideShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zbGlkZVNob3cudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBQTJEO0FBQ1Q7QUFRbEQsSUFBTUssU0FBUyxHQUFHLGdCQUE0QztRQUF6Q0MsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7SUFDbkMsSUFBMEJMLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUJNLEtBQUssR0FBY04sR0FBVyxHQUF6QixFQUFFTyxRQUFRLEdBQUlQLEdBQVcsR0FBZjtJQUN0QixJQUE0QkEsSUFBa0IsR0FBbEJBLCtDQUFRLENBQUNJLFFBQVEsQ0FBQyxFQUF2Q0ksTUFBTSxHQUFlUixJQUFrQixHQUFqQyxFQUFFUyxTQUFTLEdBQUlULElBQWtCLEdBQXRCO0lBQ3hCLElBQU1VLFlBQVksR0FBR1QsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFakMsSUFBTVUsY0FBYyxHQUFHLFdBQU07UUFDekIsSUFBR0wsS0FBSyxHQUFHRSxNQUFNLENBQUNJLE1BQU0sRUFBRTtZQUN0QkwsUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkI7S0FDSjtJQUVELElBQU1PLFlBQVksR0FBRyxXQUFNO1FBQ3ZCLElBQUlDLFFBQVE7UUFDWixJQUFHUixLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1ZRLFFBQVEsR0FBR1IsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUN4QjtRQUNERSxNQUFNLENBQUNNLFFBQVEsQ0FBQyxJQUFJTixNQUFNLENBQUNNLFFBQVEsQ0FBQyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQ0QsU0FBUyxDQUFDRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUZULE1BQU0sQ0FBQ0YsS0FBSyxDQUFDLElBQUlFLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDLENBQUNTLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzFEO0lBRURsQixnREFBUyxDQUFFLFdBQU07UUFDYm1CLFdBQVcsQ0FBRSxXQUFNO1lBQ2ZQLGNBQWMsRUFBRSxDQUFDO1lBQ2pCRSxZQUFZLEVBQUUsQ0FBQztTQUNsQixFQUFFUixRQUFRLENBQUMsQ0FBQztLQUNoQixFQUFFO1FBQUNDLEtBQUs7S0FBQyxDQUFFO0lBRVphLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWixNQUFNLENBQUNGLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFM0IsT0FDSUUsTUFBTSxJQUFJQSxNQUFNLENBQUNhLEdBQUcsQ0FBRSxTQUFDZixLQUFLLEVBQUVnQixLQUFLOzZCQUMvQiw4REFBQ0MsS0FBRzs7OEJBQ0EsOERBQUNyQixpRUFBSztvQkFBMEJzQixHQUFHLEVBQUdsQixLQUFLLENBQUNtQixLQUFLO29CQUFHQyxLQUFLLEVBQUUsR0FBRztvQkFBRUMsTUFBTSxFQUFFLEdBQUc7b0JBQUVDLGNBQWMsRUFBQyxRQUFRO29CQUFDQyxHQUFHLEVBQUd2QixLQUFLLENBQUN3QixPQUFPO21CQUEzRyxRQUFPLENBQVEsT0FBTlIsS0FBSyxDQUFFOzs7O3lCQUFnRzs4QkFDN0gsOERBQUNTLEdBQUM7OEJBQThCekIsS0FBSyxDQUFDd0IsT0FBTzttQkFBcEMsVUFBUyxDQUFRLE9BQU5SLEtBQUssQ0FBRTs7Ozt5QkFBd0I7Ozs7OztpQkFDakQ7S0FBQSxDQUNULENBQ0o7Q0FDSjtHQXJDS25CLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQXVDZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NsaWRlU2hvdy50c3g/Y2VlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UnO1xyXG5cclxuaW50ZXJmYWNlIFNsaWRlU2hvd1Byb3BzIHtcclxuICAgIHNsaWRlU2V0OiBhbnk7XHJcbiAgICBpbnRlcnZhbDogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuY29uc3QgU2xpZGVTaG93ID0gKHsgc2xpZGVTZXQsIGludGVydmFsIH06IFNsaWRlU2hvd1Byb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbc2xpZGUsIHNldFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3NsaWRlcywgc2V0U2xpZGVzXSA9IHVzZVN0YXRlKHNsaWRlU2V0KTtcclxuICAgIGNvbnN0IHNsaWRlU2hvd1JlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRTbGlkZSA9ICgpID0+IHtcclxuICAgICAgICBpZihzbGlkZSA8IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2V0U2xpZGUoc2xpZGUgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd05ld1NsaWRlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBwcmV2aW91cztcclxuICAgICAgICBpZihzbGlkZSA+IDApIHtcclxuICAgICAgICAgICAgcHJldmlvdXMgPSBzbGlkZSAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlc1twcmV2aW91c10gJiYgc2xpZGVzW3ByZXZpb3VzXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKS5jbGFzc0xpc3QuYWRkKCdub3QtYWN0aXZlJyk7XHJcbiAgICAgICAgc2xpZGVzW3NsaWRlXSAmJiBzbGlkZXNbc2xpZGVdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpOyAgICAgICBcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHNldEludGVydmFsKCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGluY3JlbWVudFNsaWRlKCk7XHJcbiAgICAgICAgICAgIHNob3dOZXdTbGlkZSgpO1xyXG4gICAgICAgIH0sIGludGVydmFsKTtcclxuICAgIH0sIFtzbGlkZV0gKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHNsaWRlc1tzbGlkZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgc2xpZGVzICYmIHNsaWRlcy5tYXAoIChzbGlkZSwgaW5kZXgpID0+IFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGtleT17IGBpbWFnZS0ke2luZGV4fWAgfSBzcmM9eyBzbGlkZS5pbWFnZSB9IHdpZHRoPXs0MDB9IGhlaWdodD17MjUwfSBvYmplY3RQb3NpdGlvbj0nY2VudGVyJyBhbHQ9eyBzbGlkZS5jYXB0aW9uIH0gLz5cclxuICAgICAgICAgICAgICAgIDxwIGtleT17IGBjYXB0aW9uLSR7aW5kZXh9YCB9Pnsgc2xpZGUuY2FwdGlvbiB9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZVNob3c7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJJbWFnZSIsIlNsaWRlU2hvdyIsInNsaWRlU2V0IiwiaW50ZXJ2YWwiLCJzbGlkZSIsInNldFNsaWRlIiwic2xpZGVzIiwic2V0U2xpZGVzIiwic2xpZGVTaG93UmVmIiwiaW5jcmVtZW50U2xpZGUiLCJsZW5ndGgiLCJzaG93TmV3U2xpZGUiLCJwcmV2aW91cyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImluZGV4IiwiZGl2Iiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdFBvc2l0aW9uIiwiYWx0IiwiY2FwdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/slideShow.tsx\n"));

/***/ })

});