"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/vocabulary/input",{

/***/ "./pages/vocabulary/input.js":
/*!***********************************!*\
  !*** ./pages/vocabulary/input.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/textInput.tsx */ \"./src/components/textInput.tsx\");\n/* harmony import */ var _src_components_imageUpload_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/components/imageUpload.tsx */ \"./src/components/imageUpload.tsx\");\n/* harmony import */ var _src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/components/accents.tsx */ \"./src/components/accents.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Input(param) {\n    var categories = param.categories;\n    var _this = this;\n    _s();\n    var wordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var translationRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var genderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var pronunciationRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        category: \"\",\n        word: \"\",\n        translation: \"\",\n        gender: \"\",\n        image: \"\",\n        pronunciation: \"\"\n    }), formValues = ref[0], setFormValues = ref[1];\n    var categorySelections = [];\n    var handleOtherSelection = function(e) {\n        setFormValues({\n            category: e.target.value\n        });\n    };\n    var handleAccentClick = function(e) {\n        e.preventDefault();\n        var word = wordRef.current.selectionStart;\n        var translation = translationRef.current.selectionStart;\n        console.log({\n            word: word,\n            translation: translation\n        });\n    // let answer = wordRef.current.value;\n    // wordRef.current.value = answer.slice(0, currentPosition) + e.target.value + answer.slice(currentPosition);\n    };\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var category = _step.value;\n            categorySelections.push({\n                id: category.id,\n                category: category.category\n            });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    categorySelections.sort(function(a, b) {\n        return a.category > b.category ? 1 : -1;\n    });\n    categorySelections.push({\n        id: 0,\n        category: \"other\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Vocabulary Input\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"vocabulary\",\n                        className: \"col-xs-12 col-sm-10 col-md-8 col-lg-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"categorySelect\",\n                                                    children: \"category: \"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                    id: \"category\",\n                                                    name: \"category\",\n                                                    onChange: handleOtherSelection,\n                                                    children: categorySelections.map(function(categorySelection, i) {\n                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: categorySelection.id,\n                                                            children: categorySelection.category\n                                                        }, i, false, {\n                                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 41\n                                                        }, _this);\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 25\n                                    }, this),\n                                    formValues.category === \"0\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        id: \"newCategory\",\n                                        name: \"new category\",\n                                        className: \"col-lg-12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 58\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        ref: wordRef,\n                                        id: \"word\",\n                                        name: \"word\",\n                                        className: \"col-lg-12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        ref: translationRef,\n                                        id: \"translation\",\n                                        name: \"translation\",\n                                        className: \"col-lg-12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        ref: genderRef,\n                                        id: \"gender\",\n                                        name: \"gender\",\n                                        className: \"col-lg-12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_imageUpload_tsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        id: \"image\",\n                                        name: \"image\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        ref: pronunciationRef,\n                                        id: \"pronunciation\",\n                                        name: \"pronunciation\",\n                                        className: \"col-lg-12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    value: \"add word\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        handleAccentClick: handleAccentClick\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Input, \"i6z/4u07dKAJ0iG49oD/YXTsBkg=\");\n_c = Input;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVc7Ozs7OzRDQUFHO2tEQUM5RSw4REFBQ2pDLHVFQUFXO3dDQUFDNEIsRUFBRSxFQUFDLE9BQU87d0NBQUNlLElBQUksRUFBQyxPQUFPOzs7Ozs0Q0FBRztrREFDdkMsOERBQUM1QyxxRUFBUTt3Q0FBQ2tELEdBQUcsRUFBRzFDLGdCQUFnQjt3Q0FBR3FCLEVBQUUsRUFBQyxlQUFlO3dDQUFDZSxJQUFJLEVBQUMsZUFBZTt3Q0FBQ1YsU0FBUyxFQUFDLFdBQVc7Ozs7OzRDQUFHOzs7Ozs7b0NBQzVGOzBDQUNYLDhEQUFDaUIsS0FBRztnQ0FBQ2pCLFNBQVMsRUFBQyxtQkFBbUI7MENBQzlCLDRFQUFDa0IsT0FBSztvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7b0NBQUN4QixFQUFFLEVBQUMsV0FBVztvQ0FBQ1IsS0FBSyxFQUFDLFVBQVU7Ozs7O3dDQUFHOzs7OztvQ0FDckQ7Ozs7Ozs0QkFDSDtrQ0FDUCw4REFBQ25CLG1FQUFPO3dCQUFDb0IsaUJBQWlCLEVBQUdBLGlCQUFpQjs7Ozs7NEJBQUs7Ozs7OztvQkFDN0M7MEJBQ1YsOERBQUN2QixrRUFBTTs7OztvQkFBRzs7b0JBQ1gsQ0FDTjtDQUNKO0dBeEVRSSxLQUFLO0FBQUxBLEtBQUFBLEtBQUs7O0FBbUZkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdm9jYWJ1bGFyeS9pbnB1dC5qcz8wNGFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IFNpdGVoZWFkZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3NpdGVIZWFkZXIudHN4JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeCc7XHJcbmltcG9ydCBUZXhpbnB1dCBmcm9tICcvc3JjL2NvbXBvbmVudHMvdGV4dElucHV0LnRzeCc7XHJcbmltcG9ydCBJbWFnZXVwbG9hZCBmcm9tICcvc3JjL2NvbXBvbmVudHMvaW1hZ2VVcGxvYWQudHN4JztcclxuaW1wb3J0IEFjY2VudHMgZnJvbSAnL3NyYy9jb21wb25lbnRzL2FjY2VudHMudHN4JztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQ7XHJcblxyXG5mdW5jdGlvbiBJbnB1dCh7IGNhdGVnb3JpZXMgfSkge1xyXG4gICAgY29uc3Qgd29yZFJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb25SZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGdlbmRlclJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgcHJvbnVuY2lhdGlvblJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IFtmb3JtVmFsdWVzLCBzZXRGb3JtVmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBjYXRlZ29yeTogJycsXHJcbiAgICAgICAgd29yZDogJycsXHJcbiAgICAgICAgdHJhbnNsYXRpb246ICcnLFxyXG4gICAgICAgIGdlbmRlcjogJycsXHJcbiAgICAgICAgaW1hZ2U6ICcnLFxyXG4gICAgICAgIHByb251bmNpYXRpb246ICcnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9ucyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU90aGVyU2VsZWN0aW9uID0gKGUpID0+IHtcclxuICAgICAgICBzZXRGb3JtVmFsdWVzKHtjYXRlZ29yeTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWNjZW50Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB3b3JkID0gd29yZFJlZi5jdXJyZW50LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb25SZWYuY3VycmVudC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICBjb25zb2xlLmxvZyh7d29yZCwgdHJhbnNsYXRpb259KTtcclxuICAgICAgICAvLyBsZXQgYW5zd2VyID0gd29yZFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgICAgIC8vIHdvcmRSZWYuY3VycmVudC52YWx1ZSA9IGFuc3dlci5zbGljZSgwLCBjdXJyZW50UG9zaXRpb24pICsgZS50YXJnZXQudmFsdWUgKyBhbnN3ZXIuc2xpY2UoY3VycmVudFBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0aW9ucy5wdXNoKCBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGNhdGVnb3J5LmlkLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LmNhdGVnb3J5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGNhdGVnb3J5U2VsZWN0aW9ucy5zb3J0KChhLCBiKSA9PiBhLmNhdGVnb3J5ID4gYi5jYXRlZ29yeSA/IDEgOiAtMSk7XHJcbiAgICBjYXRlZ29yeVNlbGVjdGlvbnMucHVzaCh7IGlkOiAwLCBjYXRlZ29yeTogJ290aGVyJ30pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxoMT5Wb2NhYnVsYXJ5IElucHV0PC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwidm9jYWJ1bGFyeVwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTAgY29sLW1kLTggY29sLWxnLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD48bGFiZWwgaHRtbEZvcj1cImNhdGVnb3J5U2VsZWN0XCI+Y2F0ZWdvcnk6IDwvbGFiZWw+PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiY2F0ZWdvcnlcIiBuYW1lPVwiY2F0ZWdvcnlcIiBvbkNoYW5nZT17IGhhbmRsZU90aGVyU2VsZWN0aW9uIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2F0ZWdvcnlTZWxlY3Rpb25zLm1hcCggKCBjYXRlZ29yeVNlbGVjdGlvbiwgaSApID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9eyBpIH0gdmFsdWU9eyBjYXRlZ29yeVNlbGVjdGlvbi5pZCB9PnsgY2F0ZWdvcnlTZWxlY3Rpb24uY2F0ZWdvcnkgfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtVmFsdWVzLmNhdGVnb3J5ID09PSAnMCcgJiYgPFRleGlucHV0IGlkPVwibmV3Q2F0ZWdvcnlcIiBuYW1lPVwibmV3IGNhdGVnb3J5XCIgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCIgLz4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4aW5wdXQgcmVmPXsgd29yZFJlZiB9IGlkPVwid29yZFwiIG5hbWU9XCJ3b3JkXCIgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleGlucHV0IHJlZj17IHRyYW5zbGF0aW9uUmVmIH0gaWQ9XCJ0cmFuc2xhdGlvblwiIG5hbWU9XCJ0cmFuc2xhdGlvblwiIGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXhpbnB1dCByZWY9eyBnZW5kZXJSZWYgfSBpZD1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXJcIiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2V1cGxvYWQgaWQ9XCJpbWFnZVwiIG5hbWU9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXhpbnB1dCByZWY9eyBwcm9udW5jaWF0aW9uUmVmIH0gaWQ9XCJwcm9udW5jaWF0aW9uXCIgbmFtZT1cInByb251bmNpYXRpb25cIiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMgY29sLWxnLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cInN1Ym1pdEJ0blwiIHZhbHVlPVwiYWRkIHdvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPEFjY2VudHMgaGFuZGxlQWNjZW50Q2xpY2s9eyBoYW5kbGVBY2NlbnRDbGljayB9IC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IGF3YWl0IHByaXNtYS5jYXRlZ29yaWVzLmZpbmRNYW55KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IGFsbENhdGVnb3JpZXNcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJTaXRlaGVhZGVyIiwiRm9vdGVyIiwiVGV4aW5wdXQiLCJJbWFnZXVwbG9hZCIsIkFjY2VudHMiLCJJbnB1dCIsImNhdGVnb3JpZXMiLCJ3b3JkUmVmIiwidHJhbnNsYXRpb25SZWYiLCJnZW5kZXJSZWYiLCJwcm9udW5jaWF0aW9uUmVmIiwiY2F0ZWdvcnkiLCJ3b3JkIiwidHJhbnNsYXRpb24iLCJnZW5kZXIiLCJpbWFnZSIsInByb251bmNpYXRpb24iLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsImNhdGVnb3J5U2VsZWN0aW9ucyIsImhhbmRsZU90aGVyU2VsZWN0aW9uIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQWNjZW50Q2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzZWxlY3Rpb25TdGFydCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiaWQiLCJzb3J0IiwiYSIsImIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiZmllbGRzZXQiLCJkbCIsImR0IiwibGFiZWwiLCJodG1sRm9yIiwiZGQiLCJzZWxlY3QiLCJuYW1lIiwib25DaGFuZ2UiLCJtYXAiLCJjYXRlZ29yeVNlbGVjdGlvbiIsImkiLCJvcHRpb24iLCJyZWYiLCJkaXYiLCJpbnB1dCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/vocabulary/input.js\n"));

/***/ })

});