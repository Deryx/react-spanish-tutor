"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/verbs/slider",{

/***/ "./pages/verbs/slider.js":
/*!*******************************!*\
  !*** ./pages/verbs/slider.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator.tsx */ \"./helper/useRandomNumberGenerator.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Slider(param) {\n    var verbs = param.verbs, tenses = param.tenses, conjugations = param.conjugations;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), brickSets = ref[0], setBrickSets = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), slideSets = ref1[0], setSlideSets = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), question = ref2[0], setQuestion = ref2[1];\n    var numQuestions = 5;\n    var numOptions = 5;\n    var numVerbs = verbs.length;\n    var infinitives = (0,_helper_useRandomNumberGenerator_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numQuestions, numVerbs);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {}, []);\n    console.log(infinitives);\n    var incrementQuestion = function() {\n        if (question <= question) {\n            setQuestion(question + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Slider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"col-xs-12 col-sm-8 col-lg-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                            className: \"col-lg-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: infinitives[question].infinitive\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\slider.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Slider, \"4eOWxwmaeJ4DAj7g6AVbbeOwRF8=\");\n_c = Slider;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92ZXJicy9zbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFFWTtBQUNSO0FBQzhCO0FBSTlFLFNBQVNLLE1BQU0sQ0FBRSxLQUErQixFQUFHO1FBQWhDQyxLQUFLLEdBQVAsS0FBK0IsQ0FBN0JBLEtBQUssRUFBRUMsTUFBTSxHQUFmLEtBQStCLENBQXRCQSxNQUFNLEVBQUVDLFlBQVksR0FBN0IsS0FBK0IsQ0FBZEEsWUFBWTs7SUFDMUMsSUFBa0NSLEdBQWMsR0FBZEEsK0NBQVEsQ0FBRSxFQUFFLENBQUUsRUFBekNTLFNBQVMsR0FBa0JULEdBQWMsR0FBaEMsRUFBRVUsWUFBWSxHQUFJVixHQUFjLEdBQWxCO0lBQzlCLElBQWtDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUUsRUFBRSxDQUFFLEVBQXpDVyxTQUFTLEdBQWtCWCxJQUFjLEdBQWhDLEVBQUVZLFlBQVksR0FBSVosSUFBYyxHQUFsQjtJQUM5QixJQUFnQ0EsSUFBYSxHQUFiQSwrQ0FBUSxDQUFFLENBQUMsQ0FBRSxFQUF0Q2EsUUFBUSxHQUFpQmIsSUFBYSxHQUE5QixFQUFFYyxXQUFXLEdBQUlkLElBQWEsR0FBakI7SUFFNUIsSUFBTWUsWUFBWSxHQUFHLENBQUM7SUFDdEIsSUFBTUMsVUFBVSxHQUFHLENBQUM7SUFDcEIsSUFBTUMsUUFBUSxHQUFHWCxLQUFLLENBQUNZLE1BQU07SUFDN0IsSUFBSUMsV0FBVyxHQUFHZixnRkFBcUIsQ0FBRVcsWUFBWSxFQUFFRSxRQUFRLENBQUU7SUFFakVoQixnREFBUyxDQUFFLFdBQU0sRUFFaEIsRUFBRSxFQUFFLENBQUUsQ0FBQztJQUNSbUIsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFdBQVcsQ0FBQyxDQUFDO0lBRXpCLElBQU1HLGlCQUFpQixHQUFHLFdBQU07UUFDNUIsSUFBSVQsUUFBUSxJQUFJQSxRQUFRLEVBQUc7WUFDdkJDLFdBQVcsQ0FBRUQsUUFBUSxHQUFHLENBQUMsQ0FBRSxDQUFDO1NBQy9CO0tBQ0o7SUFFRCxxQkFDSTs7MEJBQ0ksOERBQUNVLFNBQU87Z0JBQUNDLFNBQVMsRUFBQyxlQUFlOztrQ0FDOUIsOERBQUNDLElBQUU7a0NBQUMsYUFBVzs7Ozs7NEJBQUs7a0NBQ3BCLDhEQUFDQyxNQUFJO3dCQUFDRixTQUFTLEVBQUMsNkJBQTZCO2tDQUN6Qyw0RUFBQ0csVUFBUTs0QkFBQ0gsU0FBUyxFQUFDLFdBQVc7c0NBQzNCLDRFQUFDSSxJQUFFOzBDQUFHVCxXQUFXLENBQUNOLFFBQVEsQ0FBQyxDQUFDZ0IsVUFBVTs7Ozs7b0NBQU87Ozs7O2dDQUN0Qzs7Ozs7NEJBQ1I7Ozs7OztvQkFDRDswQkFDViw4REFBQzFCLGtFQUFNOzs7O29CQUFHOztvQkFDWCxDQUNOO0NBQ0o7R0FsQ1FFLE1BQU07QUFBTkEsS0FBQUEsTUFBTTs7QUFpRGYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92ZXJicy9zbGlkZXIuanM/ZGVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBTaXRlaGVhZGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9zaXRlSGVhZGVyLnRzeCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50c3gnO1xyXG5pbXBvcnQgcmFuZG9tTnVtYmVyR2VuZXJhdG9yIGZyb20gJy4uLy4uL2hlbHBlci91c2VSYW5kb21OdW1iZXJHZW5lcmF0b3IudHN4JztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmZ1bmN0aW9uIFNsaWRlciggeyB2ZXJicywgdGVuc2VzLCBjb25qdWdhdGlvbnMgfSApIHtcclxuICAgIGNvbnN0IFticmlja1NldHMsIHNldEJyaWNrU2V0c10gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFtzbGlkZVNldHMsIHNldFNsaWRlU2V0c10gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoIDAgKTtcclxuXHJcbiAgICBjb25zdCBudW1RdWVzdGlvbnMgPSA1O1xyXG4gICAgY29uc3QgbnVtT3B0aW9ucyA9IDU7XHJcbiAgICBjb25zdCBudW1WZXJicyA9IHZlcmJzLmxlbmd0aDtcclxuICAgIGxldCBpbmZpbml0aXZlcyA9IHJhbmRvbU51bWJlckdlbmVyYXRvciggbnVtUXVlc3Rpb25zLCBudW1WZXJicyApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgfSwgW10gKTtcclxuICAgIGNvbnNvbGUubG9nKGluZmluaXRpdmVzKTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRRdWVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiggcXVlc3Rpb24gPD0gcXVlc3Rpb24gKSB7XHJcbiAgICAgICAgICAgIHNldFF1ZXN0aW9uKCBxdWVzdGlvbiArIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGgxPlZlcmIgU2xpZGVyPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnsgaW5maW5pdGl2ZXNbcXVlc3Rpb25dLmluZmluaXRpdmUgfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxWZXJicyA9IGF3YWl0IHByaXNtYS52ZXJicy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsVGVuc2VzID0gYXdhaXQgcHJpc21hLnRlbnNlcy5maW5kTWFueSgpO1xyXG4gICAgY29uc3QgYWxsQ29uanVnYXRpb25zID0gYXdhaXQgcHJpc21hLmNvbmp1Z2F0aW9ucy5maW5kTWFueSgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2ZXJiczogYWxsVmVyYnMsXHJcbiAgICAgICAgICAgIHRlbnNlczogYWxsVGVuc2VzLFxyXG4gICAgICAgICAgICBjb25qdWdhdGlvbnM6IGFsbENvbmp1Z2F0aW9uc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNpdGVoZWFkZXIiLCJGb290ZXIiLCJyYW5kb21OdW1iZXJHZW5lcmF0b3IiLCJTbGlkZXIiLCJ2ZXJicyIsInRlbnNlcyIsImNvbmp1Z2F0aW9ucyIsImJyaWNrU2V0cyIsInNldEJyaWNrU2V0cyIsInNsaWRlU2V0cyIsInNldFNsaWRlU2V0cyIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJudW1RdWVzdGlvbnMiLCJudW1PcHRpb25zIiwibnVtVmVyYnMiLCJsZW5ndGgiLCJpbmZpbml0aXZlcyIsImNvbnNvbGUiLCJsb2ciLCJpbmNyZW1lbnRRdWVzdGlvbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJmaWVsZHNldCIsImgyIiwiaW5maW5pdGl2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/verbs/slider.js\n"));

/***/ })

});