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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_siteHeader_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/siteHeader.tsx */ \"./src/components/siteHeader.tsx\");\n/* harmony import */ var _src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/footer.tsx */ \"./src/components/footer.tsx\");\n/* harmony import */ var _src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/textInput.tsx */ \"./src/components/textInput.tsx\");\n/* harmony import */ var _src_components_imageUpload_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/components/imageUpload.tsx */ \"./src/components/imageUpload.tsx\");\n/* harmony import */ var _src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/components/accents.tsx */ \"./src/components/accents.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Input(param) {\n    var categories = param.categories;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), accent = ref[0], setAccent = ref[1];\n    var wordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var translationRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var genderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var pronunciationRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        category: \"\",\n        word: \"\",\n        translation: \"\",\n        gender: \"\",\n        image: \"\",\n        pronunciation: \"\"\n    }), formValues = ref1[0], setFormValues = ref1[1];\n    var categorySelections = [];\n    var handleOtherSelection = function(e) {\n        setFormValues({\n            category: e.target.value\n        });\n    };\n    var handleAccentClick = function(e) {\n        e.preventDefault();\n        setAccent(e.target.value);\n    // console.log(document.activeElement);\n    // const currentPosition = wordRef.current.selectionStart;\n    // let answer = wordRef.current.value;\n    // wordRef.current.value = answer.slice(0, currentPosition) + e.target.value + answer.slice(currentPosition);\n    };\n    var handleInputChange = function(e) {\n        var currentBox = e.target.id;\n        console.log(currentBox);\n    };\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var category = _step.value;\n            categorySelections.push({\n                id: category.id,\n                category: category.category\n            });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    useEffect(function() {\n        console.log(document.activeElement);\n    }, [\n        accent\n    ]);\n    categorySelections.sort(function(a, b) {\n        return a.category > b.category ? 1 : -1;\n    });\n    categorySelections.push({\n        id: 0,\n        category: \"other\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"pageContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Vocabulary Input\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"vocabulary\",\n                        className: \"col-xs-12 col-sm-10 col-md-8 col-lg-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                className: \"col-lg-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"categorySelect\",\n                                                    children: \"category: \"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                    id: \"category\",\n                                                    name: \"category\",\n                                                    onChange: handleOtherSelection,\n                                                    children: categorySelections.map(function(categorySelection, i) {\n                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                            value: categorySelection.id,\n                                                            children: categorySelection.category\n                                                        }, i, false, {\n                                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                                            lineNumber: 73,\n                                                            columnNumber: 41\n                                                        }, _this);\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 25\n                                    }, this),\n                                    formValues.category === \"0\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        id: \"newCategory\",\n                                        name: \"new category\",\n                                        className: \"col-lg-12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 58\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        ref: wordRef,\n                                        id: \"word\",\n                                        name: \"word\",\n                                        onChange: handleInputChange,\n                                        className: \"col-lg-12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        ref: translationRef,\n                                        id: \"translation\",\n                                        name: \"translation\",\n                                        onChange: handleInputChange,\n                                        className: \"col-lg-12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        ref: genderRef,\n                                        id: \"gender\",\n                                        name: \"gender\",\n                                        onChange: handleInputChange,\n                                        className: \"col-lg-12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_imageUpload_tsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        id: \"image\",\n                                        name: \"image\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_textInput_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        ref: pronunciationRef,\n                                        id: \"pronunciation\",\n                                        name: \"pronunciation\",\n                                        onChange: handleInputChange,\n                                        className: \"col-lg-12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons col-lg-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"submitBtn\",\n                                    value: \"add word\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                                lineNumber: 85,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_accents_tsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        handleAccentClick: handleAccentClick\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_footer_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\input.js\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Input, \"9XoNV+Do5CGn9QwxZhIZNwMcaG0=\");\n_c = Input;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92b2NhYnVsYXJ5L2lucHV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUM7QUFFZTtBQUNSO0FBQ0s7QUFDSztBQUNSO0FBSWxELFNBQVNPLEtBQUssQ0FBQyxLQUFjLEVBQUU7UUFBaEIsVUFBWSxHQUFaLEtBQWMsQ0FBWkMsVUFBVTs7O0lBQ3ZCLElBQTRCUixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQW5DUyxNQUFNLEdBQWVULEdBQWMsR0FBN0IsRUFBRVUsU0FBUyxHQUFJVixHQUFjLEdBQWxCO0lBQ3hCLElBQU1XLE9BQU8sR0FBR1YsNkNBQU0sRUFBRTtJQUN4QixJQUFNVyxjQUFjLEdBQUdYLDZDQUFNLEVBQUU7SUFDL0IsSUFBTVksU0FBUyxHQUFHWiw2Q0FBTSxFQUFFO0lBQzFCLElBQU1hLGdCQUFnQixHQUFHYiw2Q0FBTSxFQUFFO0lBRWpDLElBQW9DRCxJQU9sQyxHQVBrQ0EsK0NBQVEsQ0FBQztRQUN6Q2UsUUFBUSxFQUFFLEVBQUU7UUFDWkMsSUFBSSxFQUFFLEVBQUU7UUFDUkMsV0FBVyxFQUFFLEVBQUU7UUFDZkMsTUFBTSxFQUFFLEVBQUU7UUFDVkMsS0FBSyxFQUFFLEVBQUU7UUFDVEMsYUFBYSxFQUFFLEVBQUU7S0FDcEIsQ0FBQyxFQVBLQyxVQUFVLEdBQW1CckIsSUFPbEMsR0FQZSxFQUFFc0IsYUFBYSxHQUFJdEIsSUFPbEMsR0FQOEI7SUFRaEMsSUFBTXVCLGtCQUFrQixHQUFHLEVBQUU7SUFFN0IsSUFBTUMsb0JBQW9CLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQ2hDSCxhQUFhLENBQUM7WUFBQ1AsUUFBUSxFQUFFVSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztTQUFFLENBQUMsQ0FBQztLQUM5QztJQUVELElBQU1DLGlCQUFpQixHQUFHLFNBQUNILENBQUMsRUFBSztRQUM3QkEsQ0FBQyxDQUFDSSxjQUFjLEVBQUUsQ0FBQztRQUNuQm5CLFNBQVMsQ0FBQ2UsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLHVDQUF1QztJQUN2QywwREFBMEQ7SUFDMUQsc0NBQXNDO0lBQ3RDLDZHQUE2RztLQUNoSDtJQUVELElBQU1HLGlCQUFpQixHQUFHLFNBQUNMLENBQUMsRUFBSztRQUM3QixJQUFNTSxVQUFVLEdBQUdOLENBQUMsQ0FBQ0MsTUFBTSxDQUFDTSxFQUFFO1FBQzlCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsVUFBVSxDQUFDLENBQUM7S0FDM0I7UUFFRyx5QkFBYyxTQUFkLGlCQUFjLFVBQWQsY0FBYzs7UUFBbEIsUUFBSSxTQUFjLEdBQUl2QixVQUFVLHFCQUE1QixLQUFjLElBQWQseUJBQWMsSUFBZCxLQUFjLEdBQWQsU0FBYyxnQkFBZCx5QkFBYyxRQUFnQjtZQUE5QixJQUFNTyxRQUFRLEdBQWQsS0FBYztZQUNkUSxrQkFBa0IsQ0FBQ1ksSUFBSSxDQUNuQjtnQkFDSUgsRUFBRSxFQUFFakIsUUFBUSxDQUFDaUIsRUFBRTtnQkFDZmpCLFFBQVEsRUFBRUEsUUFBUSxDQUFDQSxRQUFRO2FBQzlCLENBQ0gsQ0FBQztTQUNOOztRQVBHLGlCQUFjO1FBQWQsY0FBYzs7O2lCQUFkLHlCQUFjLElBQWQsU0FBYztnQkFBZCxTQUFjOzs7Z0JBQWQsaUJBQWM7c0JBQWQsY0FBYzs7OztJQVNsQnFCLFNBQVMsQ0FBQyxXQUFNO1FBQ1pILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxRQUFRLENBQUNDLGFBQWEsQ0FBQztLQUN0QyxFQUFFO1FBQUM3QixNQUFNO0tBQUMsQ0FBQyxDQUFDO0lBRWJjLGtCQUFrQixDQUFDZ0IsSUFBSSxDQUFDLFNBQUNDLENBQUMsRUFBRUMsQ0FBQztlQUFLRCxDQUFDLENBQUN6QixRQUFRLEdBQUcwQixDQUFDLENBQUMxQixRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUNwRVEsa0JBQWtCLENBQUNZLElBQUksQ0FBQztRQUFFSCxFQUFFLEVBQUUsQ0FBQztRQUFFakIsUUFBUSxFQUFFLE9BQU87S0FBQyxDQUFDLENBQUM7SUFFckQscUJBQ0k7OzBCQUNJLDhEQUFDMkIsU0FBTztnQkFBQ0MsU0FBUyxFQUFDLGVBQWU7O2tDQUM5Qiw4REFBQ0MsSUFBRTtrQ0FBQyxrQkFBZ0I7Ozs7OzRCQUFLO2tDQUN6Qiw4REFBQ0MsTUFBSTt3QkFBQ2IsRUFBRSxFQUFDLFlBQVk7d0JBQUNXLFNBQVMsRUFBQyx1Q0FBdUM7OzBDQUNuRSw4REFBQ0csVUFBUTtnQ0FBQ0gsU0FBUyxFQUFDLFdBQVc7O2tEQUMzQiw4REFBQ0ksSUFBRTs7MERBQ0MsOERBQUNDLElBQUU7MERBQUMsNEVBQUNDLE9BQUs7b0RBQUNDLE9BQU8sRUFBQyxnQkFBZ0I7OERBQUMsWUFBVTs7Ozs7d0RBQVE7Ozs7O29EQUFLOzBEQUMzRCw4REFBQ0MsSUFBRTswREFDQyw0RUFBQ0MsUUFBTTtvREFBQ3BCLEVBQUUsRUFBQyxVQUFVO29EQUFDcUIsSUFBSSxFQUFDLFVBQVU7b0RBQUNDLFFBQVEsRUFBRzlCLG9CQUFvQjs4REFDL0RELGtCQUFrQixDQUFDZ0MsR0FBRyxDQUFFLFNBQUVDLGlCQUFpQixFQUFFQyxDQUFDOzZFQUM1Qyw4REFBQ0MsUUFBTTs0REFBVy9CLEtBQUssRUFBRzZCLGlCQUFpQixDQUFDeEIsRUFBRTtzRUFBS3dCLGlCQUFpQixDQUFDekMsUUFBUTsyREFBL0QwQyxDQUFDOzs7O2lFQUF5RTtxREFBQSxDQUMzRjs7Ozs7d0RBQ0k7Ozs7O29EQUNSOzs7Ozs7NENBQ0o7b0NBQ0hwQyxVQUFVLENBQUNOLFFBQVEsS0FBSyxHQUFHLGtCQUFJLDhEQUFDWCxxRUFBUTt3Q0FBQzRCLEVBQUUsRUFBQyxhQUFhO3dDQUFDcUIsSUFBSSxFQUFDLGNBQWM7d0NBQUNWLFNBQVMsRUFBQyxXQUFXOzs7Ozs0Q0FBRztrREFDeEcsOERBQUN2QyxxRUFBUTt3Q0FBQ3VELEdBQUcsRUFBR2hELE9BQU87d0NBQUdxQixFQUFFLEVBQUMsTUFBTTt3Q0FBQ3FCLElBQUksRUFBQyxNQUFNO3dDQUFFQyxRQUFRLEVBQUd4QixpQkFBaUI7d0NBQUdhLFNBQVMsRUFBQyxXQUFXOzs7Ozs0Q0FBRztrREFDeEcsOERBQUN2QyxxRUFBUTt3Q0FBQ3VELEdBQUcsRUFBRy9DLGNBQWM7d0NBQUdvQixFQUFFLEVBQUMsYUFBYTt3Q0FBQ3FCLElBQUksRUFBQyxhQUFhO3dDQUFDQyxRQUFRLEVBQUd4QixpQkFBaUI7d0NBQUdhLFNBQVMsRUFBQyxXQUFXOzs7Ozs0Q0FBRztrREFDNUgsOERBQUN2QyxxRUFBUTt3Q0FBQ3VELEdBQUcsRUFBRzlDLFNBQVM7d0NBQUdtQixFQUFFLEVBQUMsUUFBUTt3Q0FBQ3FCLElBQUksRUFBQyxRQUFRO3dDQUFDQyxRQUFRLEVBQUd4QixpQkFBaUI7d0NBQUdhLFNBQVMsRUFBQyxXQUFXOzs7Ozs0Q0FBRztrREFDN0csOERBQUN0Qyx1RUFBVzt3Q0FBQzJCLEVBQUUsRUFBQyxPQUFPO3dDQUFDcUIsSUFBSSxFQUFDLE9BQU87Ozs7OzRDQUFHO2tEQUN2Qyw4REFBQ2pELHFFQUFRO3dDQUFDdUQsR0FBRyxFQUFHN0MsZ0JBQWdCO3dDQUFHa0IsRUFBRSxFQUFDLGVBQWU7d0NBQUNxQixJQUFJLEVBQUMsZUFBZTt3Q0FBQ0MsUUFBUSxFQUFHeEIsaUJBQWlCO3dDQUFHYSxTQUFTLEVBQUMsV0FBVzs7Ozs7NENBQUc7Ozs7OztvQ0FDM0g7MENBQ1gsOERBQUNpQixLQUFHO2dDQUFDakIsU0FBUyxFQUFDLG1CQUFtQjswQ0FDOUIsNEVBQUNrQixPQUFLO29DQUFDQyxJQUFJLEVBQUMsUUFBUTtvQ0FBQzlCLEVBQUUsRUFBQyxXQUFXO29DQUFDTCxLQUFLLEVBQUMsVUFBVTs7Ozs7d0NBQUc7Ozs7O29DQUNyRDs7Ozs7OzRCQUNIO2tDQUNQLDhEQUFDckIsbUVBQU87d0JBQUNzQixpQkFBaUIsRUFBR0EsaUJBQWlCOzs7Ozs0QkFBSzs7Ozs7O29CQUM3QzswQkFDViw4REFBQ3pCLGtFQUFNOzs7O29CQUFHOztvQkFDWCxDQUNOO0NBQ0o7R0FuRlFJLEtBQUs7QUFBTEEsS0FBQUEsS0FBSzs7QUE4RmQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92b2NhYnVsYXJ5L2lucHV0LmpzPzA0YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgU2l0ZWhlYWRlciBmcm9tICcvc3JjL2NvbXBvbmVudHMvc2l0ZUhlYWRlci50c3gnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9mb290ZXIudHN4JztcclxuaW1wb3J0IFRleGlucHV0IGZyb20gJy9zcmMvY29tcG9uZW50cy90ZXh0SW5wdXQudHN4JztcclxuaW1wb3J0IEltYWdldXBsb2FkIGZyb20gJy9zcmMvY29tcG9uZW50cy9pbWFnZVVwbG9hZC50c3gnO1xyXG5pbXBvcnQgQWNjZW50cyBmcm9tICcvc3JjL2NvbXBvbmVudHMvYWNjZW50cy50c3gnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudDtcclxuXHJcbmZ1bmN0aW9uIElucHV0KHsgY2F0ZWdvcmllcyB9KSB7XHJcbiAgICBjb25zdCBbYWNjZW50LCBzZXRBY2NlbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB3b3JkUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCB0cmFuc2xhdGlvblJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgZ2VuZGVyUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBwcm9udW5jaWF0aW9uUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgW2Zvcm1WYWx1ZXMsIHNldEZvcm1WYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGNhdGVnb3J5OiAnJyxcclxuICAgICAgICB3b3JkOiAnJyxcclxuICAgICAgICB0cmFuc2xhdGlvbjogJycsXHJcbiAgICAgICAgZ2VuZGVyOiAnJyxcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgcHJvbnVuY2lhdGlvbjogJydcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25zID0gW107XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT3RoZXJTZWxlY3Rpb24gPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEZvcm1WYWx1ZXMoe2NhdGVnb3J5OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVBY2NlbnRDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEFjY2VudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgLy8gY29uc3QgY3VycmVudFBvc2l0aW9uID0gd29yZFJlZi5jdXJyZW50LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgIC8vIGxldCBhbnN3ZXIgPSB3b3JkUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAgICAgLy8gd29yZFJlZi5jdXJyZW50LnZhbHVlID0gYW5zd2VyLnNsaWNlKDAsIGN1cnJlbnRQb3NpdGlvbikgKyBlLnRhcmdldC52YWx1ZSArIGFuc3dlci5zbGljZShjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50Qm94ID0gZS50YXJnZXQuaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudEJveCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcclxuICAgICAgICBjYXRlZ29yeVNlbGVjdGlvbnMucHVzaCggXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBjYXRlZ29yeS5pZCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeS5jYXRlZ29yeVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KVxyXG4gICAgfSwgW2FjY2VudF0pO1xyXG4gICAgXHJcbiAgICBjYXRlZ29yeVNlbGVjdGlvbnMuc29ydCgoYSwgYikgPT4gYS5jYXRlZ29yeSA+IGIuY2F0ZWdvcnkgPyAxIDogLTEpO1xyXG4gICAgY2F0ZWdvcnlTZWxlY3Rpb25zLnB1c2goeyBpZDogMCwgY2F0ZWdvcnk6ICdvdGhlcid9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8aDE+Vm9jYWJ1bGFyeSBJbnB1dDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInZvY2FidWxhcnlcIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEwIGNvbC1tZC04IGNvbC1sZy01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+PGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yeVNlbGVjdFwiPmNhdGVnb3J5OiA8L2xhYmVsPjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImNhdGVnb3J5XCIgbmFtZT1cImNhdGVnb3J5XCIgb25DaGFuZ2U9eyBoYW5kbGVPdGhlclNlbGVjdGlvbiB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhdGVnb3J5U2VsZWN0aW9ucy5tYXAoICggY2F0ZWdvcnlTZWxlY3Rpb24sIGkgKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXsgaSB9IHZhbHVlPXsgY2F0ZWdvcnlTZWxlY3Rpb24uaWQgfT57IGNhdGVnb3J5U2VsZWN0aW9uLmNhdGVnb3J5IH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybVZhbHVlcy5jYXRlZ29yeSA9PT0gJzAnICYmIDxUZXhpbnB1dCBpZD1cIm5ld0NhdGVnb3J5XCIgbmFtZT1cIm5ldyBjYXRlZ29yeVwiIGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiIC8+IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleGlucHV0IHJlZj17IHdvcmRSZWYgfSBpZD1cIndvcmRcIiBuYW1lPVwid29yZFwiICBvbkNoYW5nZT17IGhhbmRsZUlucHV0Q2hhbmdlIH0gY2xhc3NOYW1lPVwiY29sLWxnLTEyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleGlucHV0IHJlZj17IHRyYW5zbGF0aW9uUmVmIH0gaWQ9XCJ0cmFuc2xhdGlvblwiIG5hbWU9XCJ0cmFuc2xhdGlvblwiIG9uQ2hhbmdlPXsgaGFuZGxlSW5wdXRDaGFuZ2UgfSBjbGFzc05hbWU9XCJjb2wtbGctMTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4aW5wdXQgcmVmPXsgZ2VuZGVyUmVmIH0gaWQ9XCJnZW5kZXJcIiBuYW1lPVwiZ2VuZGVyXCIgb25DaGFuZ2U9eyBoYW5kbGVJbnB1dENoYW5nZSB9IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZXVwbG9hZCBpZD1cImltYWdlXCIgbmFtZT1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleGlucHV0IHJlZj17IHByb251bmNpYXRpb25SZWYgfSBpZD1cInByb251bmNpYXRpb25cIiBuYW1lPVwicHJvbnVuY2lhdGlvblwiIG9uQ2hhbmdlPXsgaGFuZGxlSW5wdXRDaGFuZ2UgfSBjbGFzc05hbWU9XCJjb2wtbGctMTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMgY29sLWxnLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cInN1Ym1pdEJ0blwiIHZhbHVlPVwiYWRkIHdvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPEFjY2VudHMgaGFuZGxlQWNjZW50Q2xpY2s9eyBoYW5kbGVBY2NlbnRDbGljayB9IC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IGF3YWl0IHByaXNtYS5jYXRlZ29yaWVzLmZpbmRNYW55KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IGFsbENhdGVnb3JpZXNcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJTaXRlaGVhZGVyIiwiRm9vdGVyIiwiVGV4aW5wdXQiLCJJbWFnZXVwbG9hZCIsIkFjY2VudHMiLCJJbnB1dCIsImNhdGVnb3JpZXMiLCJhY2NlbnQiLCJzZXRBY2NlbnQiLCJ3b3JkUmVmIiwidHJhbnNsYXRpb25SZWYiLCJnZW5kZXJSZWYiLCJwcm9udW5jaWF0aW9uUmVmIiwiY2F0ZWdvcnkiLCJ3b3JkIiwidHJhbnNsYXRpb24iLCJnZW5kZXIiLCJpbWFnZSIsInByb251bmNpYXRpb24iLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsImNhdGVnb3J5U2VsZWN0aW9ucyIsImhhbmRsZU90aGVyU2VsZWN0aW9uIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQWNjZW50Q2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiY3VycmVudEJveCIsImlkIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJzb3J0IiwiYSIsImIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiZmllbGRzZXQiLCJkbCIsImR0IiwibGFiZWwiLCJodG1sRm9yIiwiZGQiLCJzZWxlY3QiLCJuYW1lIiwib25DaGFuZ2UiLCJtYXAiLCJjYXRlZ29yeVNlbGVjdGlvbiIsImkiLCJvcHRpb24iLCJyZWYiLCJkaXYiLCJpbnB1dCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/vocabulary/input.js\n"));

/***/ })

});