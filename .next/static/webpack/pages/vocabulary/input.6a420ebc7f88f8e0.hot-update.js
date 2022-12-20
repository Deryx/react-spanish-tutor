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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/textInput.tsx */ \"./src/components/textInput.tsx\");\n/* harmony import */ var _src_components_imageUpload_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/components/imageUpload.tsx */ \"./src/components/imageUpload.tsx\");\n/* harmony import */ var _src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/components/accents.tsx */ \"./src/components/accents.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Input(param) {\n    var categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), accent = ref[0], setAccent = ref[1];\n    var wordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var translationRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var genderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var pronunciationRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        category: \"\",\n        word: \"\",\n        translation: \"\",\n        gender: \"\",\n        image: \"\",\n        pronunciation: \"\"\n    }), formValues = ref1[0], setFormValues = ref1[1];\n    var categorySelections = [];\n    var handleOtherSelection = function(e) {\n        setFormValues({\n            category: e.target.value\n        });\n    };\n    var handleAccentClick = function(e) {\n        e.preventDefault();\n        setAccent(e.target.value);\n    // console.log(document.activeElement);\n    // const currentPosition = wordRef.current.selectionStart;\n    // let answer = wordRef.current.value;\n    // wordRef.current.value = answer.slice(0, currentPosition) + e.target.value + answer.slice(currentPosition);\n    };\n    var handleInputChange = function(e) {\n        var currentBox = e.target;\n        console.log(currentBox);\n    };\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var category = _step.value;\n            categorySelections.push({\n                id: category.id,\n                category: category.category\n            });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    categorySelections.sort(function(a, b) {\n        return a.category > b.category ? 1 : -1;\n    });\n    categorySelections.push({\n        id: 0,\n        category: \"other\"\n    });\n    console.log(accent);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Vocabulary Input\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"vocabulary\",\n                        className: \"col-xs-12 col-sm-10 col-md-8 col-lg-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"categorySelect\",\n                                                    children: \"category: \"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                    id: \"category\",\n                                                    name: \"category\",\n                                                    onChange: handleOtherSelection,\n                                                    children: categorySelections.map(function(categorySelection, i) {\n                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: categorySelection.id,\n                                                            children: categorySelection.category\n                                                        }, i, false, {\n                                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 41\n                                                        }, _this);\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, this),\n                                    formValues.category === \"0\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        id: \"newCategory\",\n                                        name: \"new category\",\n                                        className: \"col-lg-12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 58\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        ref: wordRef,\n                                        id: \"word\",\n                                        name: \"word\",\n                                        onChange: handleInputChange,\n                                        className: \"col-lg-12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        ref: translationRef,\n                                        id: \"translation\",\n                                        name: \"translation\",\n                                        onChange: handleInputChange,\n                                        className: \"col-lg-12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        ref: genderRef,\n                                        id: \"gender\",\n                                        name: \"gender\",\n                                        onChange: handleInputChange,\n                                        className: \"col-lg-12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_imageUpload_tsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        id: \"image\",\n                                        name: \"image\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        ref: pronunciationRef,\n                                        id: \"pronunciation\",\n                                        name: \"pronunciation\",\n                                        onChange: handleInputChange,\n                                        className: \"col-lg-12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    value: \"add word\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        handleAccentClick: handleAccentClick\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Input, \"NahbwMlznbRNPZJ/zfCE+vVK2Xg=\");\n_c = Input;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IFNpdGVoZWFkZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3NpdGVIZWFkZXIudHN4JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeCc7XHJcbmltcG9ydCBUZXhpbnB1dCBmcm9tICcvc3JjL2NvbXBvbmVudHMvdGV4dElucHV0LnRzeCc7XHJcbmltcG9ydCBJbWFnZXVwbG9hZCBmcm9tICcvc3JjL2NvbXBvbmVudHMvaW1hZ2VVcGxvYWQudHN4JztcclxuaW1wb3J0IEFjY2VudHMgZnJvbSAnL3NyYy9jb21wb25lbnRzL2FjY2VudHMudHN4JztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQ7XHJcblxyXG5mdW5jdGlvbiBJbnB1dCh7IGNhdGVnb3JpZXMgfSkge1xyXG4gICAgY29uc3QgW2FjY2VudCwgc2V0QWNjZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgd29yZFJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb25SZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGdlbmRlclJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgcHJvbnVuY2lhdGlvblJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IFtmb3JtVmFsdWVzLCBzZXRGb3JtVmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBjYXRlZ29yeTogJycsXHJcbiAgICAgICAgd29yZDogJycsXHJcbiAgICAgICAgdHJhbnNsYXRpb246ICcnLFxyXG4gICAgICAgIGdlbmRlcjogJycsXHJcbiAgICAgICAgaW1hZ2U6ICcnLFxyXG4gICAgICAgIHByb251bmNpYXRpb246ICcnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9ucyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU90aGVyU2VsZWN0aW9uID0gKGUpID0+IHtcclxuICAgICAgICBzZXRGb3JtVmFsdWVzKHtjYXRlZ29yeTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWNjZW50Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRBY2NlbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIC8vIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHdvcmRSZWYuY3VycmVudC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICAvLyBsZXQgYW5zd2VyID0gd29yZFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgICAgIC8vIHdvcmRSZWYuY3VycmVudC52YWx1ZSA9IGFuc3dlci5zbGljZSgwLCBjdXJyZW50UG9zaXRpb24pICsgZS50YXJnZXQudmFsdWUgKyBhbnN3ZXIuc2xpY2UoY3VycmVudFBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEJveCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRCb3gpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcihjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3Rpb25zLnB1c2goIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogY2F0ZWdvcnkuaWQsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnkuY2F0ZWdvcnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY2F0ZWdvcnlTZWxlY3Rpb25zLnNvcnQoKGEsIGIpID0+IGEuY2F0ZWdvcnkgPiBiLmNhdGVnb3J5ID8gMSA6IC0xKTtcclxuICAgIGNhdGVnb3J5U2VsZWN0aW9ucy5wdXNoKHsgaWQ6IDAsIGNhdGVnb3J5OiAnb3RoZXInfSk7XHJcbiAgICBjb25zb2xlLmxvZyhhY2NlbnQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxoMT5Wb2NhYnVsYXJ5IElucHV0PC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwidm9jYWJ1bGFyeVwiIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTAgY29sLW1kLTggY29sLWxnLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD48bGFiZWwgaHRtbEZvcj1cImNhdGVnb3J5U2VsZWN0XCI+Y2F0ZWdvcnk6IDwvbGFiZWw+PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiY2F0ZWdvcnlcIiBuYW1lPVwiY2F0ZWdvcnlcIiBvbkNoYW5nZT17IGhhbmRsZU90aGVyU2VsZWN0aW9uIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2F0ZWdvcnlTZWxlY3Rpb25zLm1hcCggKCBjYXRlZ29yeVNlbGVjdGlvbiwgaSApID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9eyBpIH0gdmFsdWU9eyBjYXRlZ29yeVNlbGVjdGlvbi5pZCB9PnsgY2F0ZWdvcnlTZWxlY3Rpb24uY2F0ZWdvcnkgfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtVmFsdWVzLmNhdGVnb3J5ID09PSAnMCcgJiYgPFRleGlucHV0IGlkPVwibmV3Q2F0ZWdvcnlcIiBuYW1lPVwibmV3IGNhdGVnb3J5XCIgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCIgLz4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4aW5wdXQgcmVmPXsgd29yZFJlZiB9IGlkPVwid29yZFwiIG5hbWU9XCJ3b3JkXCIgIG9uQ2hhbmdlPXsgaGFuZGxlSW5wdXRDaGFuZ2UgfSBjbGFzc05hbWU9XCJjb2wtbGctMTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4aW5wdXQgcmVmPXsgdHJhbnNsYXRpb25SZWYgfSBpZD1cInRyYW5zbGF0aW9uXCIgbmFtZT1cInRyYW5zbGF0aW9uXCIgb25DaGFuZ2U9eyBoYW5kbGVJbnB1dENoYW5nZSB9IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXhpbnB1dCByZWY9eyBnZW5kZXJSZWYgfSBpZD1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXJcIiBvbkNoYW5nZT17IGhhbmRsZUlucHV0Q2hhbmdlIH0gY2xhc3NOYW1lPVwiY29sLWxnLTEyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdldXBsb2FkIGlkPVwiaW1hZ2VcIiBuYW1lPVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4aW5wdXQgcmVmPXsgcHJvbnVuY2lhdGlvblJlZiB9IGlkPVwicHJvbnVuY2lhdGlvblwiIG5hbWU9XCJwcm9udW5jaWF0aW9uXCIgb25DaGFuZ2U9eyBoYW5kbGVJbnB1dENoYW5nZSB9IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucyBjb2wtbGctMTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwic3VibWl0QnRuXCIgdmFsdWU9XCJhZGQgd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8QWNjZW50cyBoYW5kbGVBY2NlbnRDbGljaz17IGhhbmRsZUFjY2VudENsaWNrIH0gLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxDYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hLmNhdGVnb3JpZXMuZmluZE1hbnkoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogYWxsQ2F0ZWdvcmllc1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsIlNpdGVoZWFkZXIiLCJGb290ZXIiLCJUZXhpbnB1dCIsIkltYWdldXBsb2FkIiwiQWNjZW50cyIsIklucHV0IiwiY2F0ZWdvcmllcyIsImFjY2VudCIsInNldEFjY2VudCIsIndvcmRSZWYiLCJ0cmFuc2xhdGlvblJlZiIsImdlbmRlclJlZiIsInByb251bmNpYXRpb25SZWYiLCJjYXRlZ29yeSIsIndvcmQiLCJ0cmFuc2xhdGlvbiIsImdlbmRlciIsImltYWdlIiwicHJvbnVuY2lhdGlvbiIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwiY2F0ZWdvcnlTZWxlY3Rpb25zIiwiaGFuZGxlT3RoZXJTZWxlY3Rpb24iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVBY2NlbnRDbGljayIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJjdXJyZW50Qm94IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJpZCIsInNvcnQiLCJhIiwiYiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJmaWVsZHNldCIsImRsIiwiZHQiLCJsYWJlbCIsImh0bWxGb3IiLCJkZCIsInNlbGVjdCIsIm5hbWUiLCJvbkNoYW5nZSIsIm1hcCIsImNhdGVnb3J5U2VsZWN0aW9uIiwiaSIsIm9wdGlvbiIsInJlZiIsImRpdiIsImlucHV0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/vocabulary/input.js\n"));

/***/ })

});