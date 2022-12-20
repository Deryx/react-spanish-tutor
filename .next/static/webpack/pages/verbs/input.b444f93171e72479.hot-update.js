"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/verbs/input",{

/***/ "./pages/verbs/input.js":
/*!******************************!*\
  !*** ./pages/verbs/input.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/textInput.tsx */ \"./src/components/textInput.tsx\");\n/* harmony import */ var _src_components_verbs_tenseSection_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/components/verbs/tenseSection.tsx */ \"./src/components/verbs/tenseSection.tsx\");\n/* harmony import */ var _src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/components/accents.tsx */ \"./src/components/accents.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Input(param) {\n    var tenses = param.tenses;\n    _s();\n    var infinitiveRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var nextButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var submitButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var formTenses = [];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), tense = ref[0], setTense = ref[1];\n    var numTenses = tenses.length;\n    var currentTextBox;\n    var incrementTense = function() {\n        setTense(tense + 1);\n    };\n    var handleNextClick = function() {\n        if (tense < numTenses - 1) {\n            incrementTense();\n        } else {\n            nextButtonRef.current.style.display = \"none\";\n            submitButtonRef.current.style.display = \"block\";\n        }\n    };\n    var handleFocusEvent = function(e) {\n        var currentSection = document.querySelectorAll(\"#\".concat(formTenses[tense], \" input\"));\n        console.log(currentSection);\n        if (currentSection.contains(e.target)) {\n            currentTextBox = e.target;\n        }\n        console.log(currentTextBox);\n    };\n    var handleAccentClick = function(e, accent) {\n        var currentTextBox = e.target;\n        currentTextBox.value = accent;\n    };\n    for(var tense1 in tenses){\n        formTenses.push(tenses[tense1].tense);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Verb Input\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\input.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"verbs\",\n                        className: \"col-xs-12 col-sm-8 col-lg-5\",\n                        children: [\n                            tense < numTenses && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            ref: infinitiveRef,\n                                            id: \"infinitive\",\n                                            name: \"infinitive\",\n                                            className: \"col-lg-12\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\input.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 41\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            id: \"translation\",\n                                            name: \"translation\",\n                                            className: \"col-lg-12\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\input.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 41\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            id: \"pronunciation\",\n                                            name: \"pronunciation\",\n                                            className: \"col-lg-12\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\input.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 41\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_verbs_tenseSection_tsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            tense: formTenses[tense],\n                                            onFocusEvent: handleFocusEvent\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\input.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 41\n                                        }, this)\n                                    ]\n                                }, void 0, true)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\input.js\",\n                                lineNumber: 59,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ref: nextButtonRef,\n                                        type: \"button\",\n                                        id: \"nextBtn\",\n                                        onClick: handleNextClick,\n                                        value: \"next\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\input.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ref: submitButtonRef,\n                                        type: \"button\",\n                                        id: \"submitBtn\",\n                                        value: \"add verb\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\input.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\input.js\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\input.js\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, this),\n                    tense < numTenses && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\input.js\",\n                        lineNumber: 74,\n                        columnNumber: 40\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\input.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\input.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\verbs\\\\input.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n}\n_s(Input, \"LtoXJJiwbptGLfW6pvyOomUzeoo=\");\n_c = Input;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTixTQUFTLEVBQUMsV0FBVzs7Ozs7Z0RBQUc7c0RBQ3RFLDhEQUFDbEMscUVBQVE7NENBQUNxQyxFQUFFLEVBQUMsZUFBZTs0Q0FBQ0csSUFBSSxFQUFDLGVBQWU7NENBQUNOLFNBQVMsRUFBQyxXQUFXOzs7OztnREFBRztzREFFMUUsOERBQUNqQyw4RUFBWTs0Q0FBQ1EsS0FBSyxFQUFHRCxVQUFVLENBQUNDLEtBQUssQ0FBQzs0Q0FBR2dDLFlBQVksRUFBR3RCLGdCQUFnQjs7Ozs7Z0RBQUs7O2dEQUMvRTs7Ozs7b0NBQ0E7MENBRWYsOERBQUNhLEtBQUc7Z0NBQUNFLFNBQVMsRUFBQyxtQkFBbUI7O2tEQUM5Qiw4REFBQ1EsT0FBSzt3Q0FBQ0gsR0FBRyxFQUFHakMsYUFBYTt3Q0FBR3FDLElBQUksRUFBQyxRQUFRO3dDQUFDTixFQUFFLEVBQUMsU0FBUzt3Q0FBQ08sT0FBTyxFQUFHN0IsZUFBZTt3Q0FBR2UsS0FBSyxFQUFDLE1BQU07Ozs7OzRDQUFHO2tEQUNuRyw4REFBQ1ksT0FBSzt3Q0FBQ0gsR0FBRyxFQUFHaEMsZUFBZTt3Q0FBR29DLElBQUksRUFBQyxRQUFRO3dDQUFDTixFQUFFLEVBQUMsV0FBVzt3Q0FBQ1AsS0FBSyxFQUFDLFVBQVU7Ozs7OzRDQUFHOzs7Ozs7b0NBQzdFOzs7Ozs7NEJBQ0g7b0JBQ1RyQixLQUFLLEdBQUdFLFNBQVMsa0JBQUksOERBQUNULG1FQUFPOzs7OzRCQUFHOzs7Ozs7b0JBQzVCOzBCQUNWLDhEQUFDSCxrRUFBTTs7OztvQkFBRzs7Ozs7O1lBQ1IsQ0FDVDtDQUNKO0dBcEVRSSxLQUFLO0FBQUxBLEtBQUFBLEtBQUs7O0FBK0VkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVyYnMvaW5wdXQuanM/MTUzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBTaXRlaGVhZGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9zaXRlSGVhZGVyLnRzeCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50c3gnO1xyXG5pbXBvcnQgVGV4aW5wdXQgZnJvbSAnL3NyYy9jb21wb25lbnRzL3RleHRJbnB1dC50c3gnO1xyXG5pbXBvcnQgVGVuc2VzZWN0aW9uIGZyb20gJy9zcmMvY29tcG9uZW50cy92ZXJicy90ZW5zZVNlY3Rpb24udHN4JztcclxuaW1wb3J0IEFjY2VudHMgZnJvbSAnL3NyYy9jb21wb25lbnRzL2FjY2VudHMudHN4JztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmZ1bmN0aW9uIElucHV0KHsgdGVuc2VzIH0pIHtcclxuICAgIGNvbnN0IGluZmluaXRpdmVSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IG5leHRCdXR0b25SZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvblJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1UZW5zZXMgPSBbXTtcclxuICAgIGNvbnN0IFt0ZW5zZSwgc2V0VGVuc2VdID0gdXNlU3RhdGUoIDAgKTtcclxuICAgIGNvbnN0IG51bVRlbnNlcyA9IHRlbnNlcy5sZW5ndGg7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRUZXh0Qm94O1xyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudFRlbnNlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRlbnNlKCB0ZW5zZSArIDEgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVOZXh0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGVuc2UgPCBudW1UZW5zZXMgLSAxICkge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnRUZW5zZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5leHRCdXR0b25SZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvblJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9jdXNFdmVudCA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtmb3JtVGVuc2VzW3RlbnNlXX0gaW5wdXRgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U2VjdGlvbik7XHJcbiAgICAgICAgaWYoY3VycmVudFNlY3Rpb24uY29udGFpbnMoZS50YXJnZXQpKXtcclxuICAgICAgICAgICAgY3VycmVudFRleHRCb3ggPSBlLnRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRleHRCb3gpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWNjZW50Q2xpY2sgPSAoZSwgYWNjZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRleHRCb3ggPSBlLnRhcmdldDtcclxuICAgICAgICBjdXJyZW50VGV4dEJveC52YWx1ZSA9IGFjY2VudDsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZvcihjb25zdCB0ZW5zZSBpbiB0ZW5zZXMpIHtcclxuICAgICAgICBmb3JtVGVuc2VzLnB1c2goIHRlbnNlc1t0ZW5zZV0udGVuc2UgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8aDE+VmVyYiBJbnB1dDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJ2ZXJic1wiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRlbnNlIDwgbnVtVGVuc2VzICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleGlucHV0IHJlZj17IGluZmluaXRpdmVSZWYgfSBpZD1cImluZmluaXRpdmVcIiBuYW1lPVwiaW5maW5pdGl2ZVwiIGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4aW5wdXQgaWQ9XCJ0cmFuc2xhdGlvblwiIG5hbWU9XCJ0cmFuc2xhdGlvblwiIGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4aW5wdXQgaWQ9XCJwcm9udW5jaWF0aW9uXCIgbmFtZT1cInByb251bmNpYXRpb25cIiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZW5zZXNlY3Rpb24gdGVuc2U9eyBmb3JtVGVuc2VzW3RlbnNlXSB9IG9uRm9jdXNFdmVudD17IGhhbmRsZUZvY3VzRXZlbnQgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMgY29sLWxnLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9eyBuZXh0QnV0dG9uUmVmIH0gdHlwZT1cImJ1dHRvblwiIGlkPVwibmV4dEJ0blwiIG9uQ2xpY2s9eyBoYW5kbGVOZXh0Q2xpY2sgfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17IHN1Ym1pdEJ1dHRvblJlZiB9IHR5cGU9XCJidXR0b25cIiBpZD1cInN1Ym1pdEJ0blwiIHZhbHVlPVwiYWRkIHZlcmJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICB7IHRlbnNlIDwgbnVtVGVuc2VzICYmIDxBY2NlbnRzIC8+IH1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxUZW5zZXMgPSBhd2FpdCBwcmlzbWEudGVuc2VzLmZpbmRNYW55KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHRlbnNlczogYWxsVGVuc2VzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJTaXRlaGVhZGVyIiwiRm9vdGVyIiwiVGV4aW5wdXQiLCJUZW5zZXNlY3Rpb24iLCJBY2NlbnRzIiwiSW5wdXQiLCJ0ZW5zZXMiLCJpbmZpbml0aXZlUmVmIiwibmV4dEJ1dHRvblJlZiIsInN1Ym1pdEJ1dHRvblJlZiIsImZvcm1UZW5zZXMiLCJ0ZW5zZSIsInNldFRlbnNlIiwibnVtVGVuc2VzIiwibGVuZ3RoIiwiY3VycmVudFRleHRCb3giLCJpbmNyZW1lbnRUZW5zZSIsImhhbmRsZU5leHRDbGljayIsImN1cnJlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJoYW5kbGVGb2N1c0V2ZW50IiwiZSIsImN1cnJlbnRTZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsImNvbnRhaW5zIiwidGFyZ2V0IiwiaGFuZGxlQWNjZW50Q2xpY2siLCJhY2NlbnQiLCJ2YWx1ZSIsInB1c2giLCJkaXYiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiaWQiLCJmaWVsZHNldCIsInJlZiIsIm5hbWUiLCJvbkZvY3VzRXZlbnQiLCJpbnB1dCIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/verbs/input.js\n"));

/***/ })

});