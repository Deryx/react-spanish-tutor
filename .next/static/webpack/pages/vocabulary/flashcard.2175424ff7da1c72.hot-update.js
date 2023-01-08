"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/vocabulary/flashcard",{

/***/ "./pages/vocabulary/flashcard.tsx":
/*!****************************************!*\
  !*** ./pages/vocabulary/flashcard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/card */ \"./src/components/card.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator */ \"./helper/useRandomNumberGenerator.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Flashcard = function(param) {\n    var dictionary = param.dictionary, categories = param.categories;\n    _s();\n    var cardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), card = ref[0], setCard = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cards = ref1[0], setCards = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), category = ref2[0], setCategory = ref2[1];\n    var headerFront = \"Front\";\n    var headerBack = \"Back\";\n    var info = \"\";\n    var categorySelections = [];\n    var flashcardDictionary;\n    var toggle = false;\n    var incrementQuestion = function() {\n        if (card <= cards.length) {\n            setCard(card + 1);\n        }\n    };\n    var handleCategoryChange = function(e) {\n        e.preventDefault();\n        setCategory(parseInt(e.target.value));\n        categoriesRef.current.style.display = \"none\";\n    };\n    var handleNext = function(e) {\n        e.preventDefault();\n        incrementQuestion();\n    };\n    var handleClick = function(e) {\n        e.preventDefault();\n        toggle = !toggle;\n        if (toggle) {\n            cardRef.current.classList.add(\"flipCard\");\n        } else {\n            cardRef.current.classList.remove(\"flipCard\");\n        }\n    };\n    var createCategorySelect = function() {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var category = _step.value;\n                categorySelections.push({\n                    id: category.id,\n                    category: category.category\n                });\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        categorySelections.sort(function(a, b) {\n            return a.category > b.category ? 1 : -1;\n        });\n        categorySelections.unshift({\n            id: \"0\",\n            category: \"all\"\n        });\n        categorySelections.unshift({\n            id: \"\",\n            category: \"\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            setCards(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(prev).concat([\n                    flashcardDictionary[i]\n                ]);\n            });\n        };\n        flashcardDictionary = category != \"0\" ? (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(dictionary.filter(function(word) {\n            return word.category === category;\n        })) : dictionary;\n        var dictionaryLength = flashcardDictionary.length;\n        var words = (0,_helper_useRandomNumberGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dictionaryLength, dictionaryLength);\n        for(var i = 0; i < words.length; i++)_loop(i);\n    }, [\n        category\n    ]);\n    console.log(cards);\n    createCategorySelect();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"pageContainer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Vocabulary Flashcard\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"vocabularyFlashcard\",\n                    className: \"col-xs-12 col-sm-8 col-lg-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                            className: \"col-lg-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    id: \"categorySelect\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"category\",\n                                                children: \"category: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                id: \"category\",\n                                                name: \"category\",\n                                                onChange: handleCategoryChange,\n                                                children: categorySelections.map(function(categorySelection) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: categorySelection.id,\n                                                        children: categorySelection.category\n                                                    }, categorySelection.category, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 25\n                                }, _this),\n                                cards[card] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    ref: cardRef,\n                                    frontHeader: cards[card].word,\n                                    backHeader: cards[card].translation,\n                                    frontInfo: cards[card].pronunciation,\n                                    backInfo: cards[card].image\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 29\n                                }, _this) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons col-lg-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"flipBtn\",\n                                    onClick: handleClick,\n                                    value: \"flip card\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"nextBtn\",\n                                    onClick: handleNext,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n            lineNumber: 84,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false);\n};\n_s(Flashcard, \"ePdgOODKqv7WZ3gTTY8BDP7q2HA=\");\n_c = Flashcard;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flashcard);\nvar _c;\n$RefreshReg$(_c, \"Flashcard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxRQUFRLEVBQUdoRSxLQUFLLENBQUNGLElBQUksQ0FBQyxDQUFDbUUsS0FBSzs7Ozs7eUNBQUssR0FDckssSUFBSTs7Ozs7O2lDQUVIO3NDQUNYLDhEQUFDQyxLQUFHOzRCQUFDdkIsU0FBUyxFQUFDLG1CQUFtQjs7OENBQzlCLDhEQUFDd0IsT0FBSztvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7b0NBQUN2QyxFQUFFLEVBQUMsU0FBUztvQ0FBQ3dDLE9BQU8sRUFBRzlDLFdBQVc7b0NBQUdOLEtBQUssRUFBQyxXQUFXOzs7Ozt5Q0FBRzs4Q0FDOUUsOERBQUNrRCxPQUFLO29DQUFDQyxJQUFJLEVBQUMsUUFBUTtvQ0FBQ3ZDLEVBQUUsRUFBQyxTQUFTO29DQUFDd0MsT0FBTyxFQUFHL0MsVUFBVTtvQ0FBR0wsS0FBSyxFQUFDLE1BQU07Ozs7O3lDQUFHOzs7Ozs7aUNBQ3RFOzs7Ozs7eUJBQ0g7Ozs7OztpQkFDRDtxQkFDWCxDQUNOO0NBQ0o7R0FqR0t2QixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7O0FBK0dmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdm9jYWJ1bGFyeS9mbGFzaGNhcmQudHN4P2RmYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlLCBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvZHJvcERvd24nO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9jYXJkJztcclxuaW1wb3J0IHJhbmRvbU51bWJlckdlbmVyYXRvciBmcm9tICcuLi8uLi9oZWxwZXIvdXNlUmFuZG9tTnVtYmVyR2VuZXJhdG9yJztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQ7XHJcblxyXG5pbnRlcmZhY2UgRmxhc2hjYXJkUHJvcHMge1xyXG4gICAgZGljdGlvbmFyeTogYW55W107XHJcbiAgICBjYXRlZ29yaWVzOiBhbnlbXTtcclxufVxyXG5cclxuY29uc3QgRmxhc2hjYXJkOiBGQzxGbGFzaGNhcmRQcm9wcz4gPSAoeyBkaWN0aW9uYXJ5LCBjYXRlZ29yaWVzIH0pID0+IHtcclxuICAgIGNvbnN0IGNhcmRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbY2FyZCwgc2V0Q2FyZF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlckZyb250ID0gJ0Zyb250JztcclxuICAgIGNvbnN0IGhlYWRlckJhY2sgPSAnQmFjayc7XHJcbiAgICBjb25zdCBpbmZvID0gJyc7XHJcbiAgICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbnMgPSBbXTtcclxuICAgIGxldCBmbGFzaGNhcmREaWN0aW9uYXJ5O1xyXG4gICAgbGV0IHRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudFF1ZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGNhcmQgPD0gY2FyZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNldENhcmQoY2FyZCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXRlZ29yeUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldENhdGVnb3J5KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgY2F0ZWdvcmllc1JlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVOZXh0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaW5jcmVtZW50UXVlc3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRvZ2dsZSA9ICF0b2dnbGU7XHJcbiAgICAgICAgaWYodG9nZ2xlKSB7XHJcbiAgICAgICAgICAgIGNhcmRSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdmbGlwQ2FyZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhcmRSZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwQ2FyZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVDYXRlZ29yeVNlbGVjdCA9ICgpID0+IHtcclxuICAgICAgICBmb3IoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICBjYXRlZ29yeVNlbGVjdGlvbnMucHVzaCggXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNhdGVnb3J5LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeS5jYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjYXRlZ29yeVNlbGVjdGlvbnMuc29ydCgoYSwgYikgPT4gYS5jYXRlZ29yeSA+IGIuY2F0ZWdvcnkgPyAxIDogLTEpO1xyXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0aW9ucy51bnNoaWZ0KHsgaWQ6ICcwJywgY2F0ZWdvcnk6ICdhbGwnIH0pO1xyXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0aW9ucy51bnNoaWZ0KHsgaWQ6ICcnLCBjYXRlZ29yeTogJycgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgZmxhc2hjYXJkRGljdGlvbmFyeSA9IGNhdGVnb3J5ICE9ICcwJyA/IFsuLi5kaWN0aW9uYXJ5LmZpbHRlciggd29yZCA9PiB3b3JkLmNhdGVnb3J5ID09PSBjYXRlZ29yeSApXSA6IGRpY3Rpb25hcnk7XHJcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeUxlbmd0aCA9IGZsYXNoY2FyZERpY3Rpb25hcnkubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IHdvcmRzID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKGRpY3Rpb25hcnlMZW5ndGgsIGRpY3Rpb25hcnlMZW5ndGgpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzZXRDYXJkcyhwcmV2ID0+IFsuLi5wcmV2LCBmbGFzaGNhcmREaWN0aW9uYXJ5W2ldXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NhdGVnb3J5XSApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNhcmRzKTtcclxuXHJcbiAgICBjcmVhdGVDYXRlZ29yeVNlbGVjdCgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxoMT5Wb2NhYnVsYXJ5IEZsYXNoY2FyZDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInZvY2FidWxhcnlGbGFzaGNhcmRcIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbCBpZD0nY2F0ZWdvcnlTZWxlY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PjxsYWJlbCBodG1sRm9yPVwiY2F0ZWdvcnlcIj5jYXRlZ29yeTogPC9sYWJlbD48L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJjYXRlZ29yeVwiIG5hbWU9XCJjYXRlZ29yeVwiIG9uQ2hhbmdlPXsgaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYXRlZ29yeVNlbGVjdGlvbnMubWFwKCAoIGNhdGVnb3J5U2VsZWN0aW9uICkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17IGNhdGVnb3J5U2VsZWN0aW9uLmNhdGVnb3J5IH0gdmFsdWU9eyBjYXRlZ29yeVNlbGVjdGlvbi5pZCB9PnsgY2F0ZWdvcnlTZWxlY3Rpb24uY2F0ZWdvcnkgfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjYXJkc1tjYXJkXSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgcmVmPXsgY2FyZFJlZiB9IGZyb250SGVhZGVyPXsgY2FyZHNbY2FyZF0ud29yZCB9IGJhY2tIZWFkZXI9eyBjYXJkc1tjYXJkXS50cmFuc2xhdGlvbiB9IGZyb250SW5mbz17IGNhcmRzW2NhcmRdLnByb251bmNpYXRpb24gfSBiYWNrSW5mbz17IGNhcmRzW2NhcmRdLmltYWdlIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucyBjb2wtbGctMTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGlkPVwiZmxpcEJ0blwiIG9uQ2xpY2s9eyBoYW5kbGVDbGljayB9IHZhbHVlPVwiZmxpcCBjYXJkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cIm5leHRCdG5cIiBvbkNsaWNrPXsgaGFuZGxlTmV4dCB9IHZhbHVlPVwibmV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbFZvY2FidWxhcnkgPSBhd2FpdCBwcmlzbWEud29yZHMuZmluZE1hbnkoKTtcclxuICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBhd2FpdCBwcmlzbWEuY2F0ZWdvcmllcy5maW5kTWFueSgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZGljdGlvbmFyeTogYWxsVm9jYWJ1bGFyeSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogYWxsQ2F0ZWdvcmllc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxhc2hjYXJkOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNhcmQiLCJyYW5kb21OdW1iZXJHZW5lcmF0b3IiLCJGbGFzaGNhcmQiLCJkaWN0aW9uYXJ5IiwiY2F0ZWdvcmllcyIsImNhcmRSZWYiLCJjYXJkIiwic2V0Q2FyZCIsImNhcmRzIiwic2V0Q2FyZHMiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiaGVhZGVyRnJvbnQiLCJoZWFkZXJCYWNrIiwiaW5mbyIsImNhdGVnb3J5U2VsZWN0aW9ucyIsImZsYXNoY2FyZERpY3Rpb25hcnkiLCJ0b2dnbGUiLCJpbmNyZW1lbnRRdWVzdGlvbiIsImxlbmd0aCIsImhhbmRsZUNhdGVnb3J5Q2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNhdGVnb3JpZXNSZWYiLCJjdXJyZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiaGFuZGxlTmV4dCIsImhhbmRsZUNsaWNrIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY3JlYXRlQ2F0ZWdvcnlTZWxlY3QiLCJwdXNoIiwiaWQiLCJzb3J0IiwiYSIsImIiLCJ1bnNoaWZ0IiwicHJldiIsImkiLCJmaWx0ZXIiLCJ3b3JkIiwiZGljdGlvbmFyeUxlbmd0aCIsIndvcmRzIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJmaWVsZHNldCIsImRsIiwiZHQiLCJsYWJlbCIsImh0bWxGb3IiLCJkZCIsInNlbGVjdCIsIm5hbWUiLCJvbkNoYW5nZSIsIm1hcCIsImNhdGVnb3J5U2VsZWN0aW9uIiwib3B0aW9uIiwicmVmIiwiZnJvbnRIZWFkZXIiLCJiYWNrSGVhZGVyIiwidHJhbnNsYXRpb24iLCJmcm9udEluZm8iLCJwcm9udW5jaWF0aW9uIiwiYmFja0luZm8iLCJpbWFnZSIsImRpdiIsImlucHV0IiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/vocabulary/flashcard.tsx\n"));

/***/ })

});