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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/card */ \"./src/components/card.tsx\");\n/* harmony import */ var _helper_useRandomNumberGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/useRandomNumberGenerator */ \"./helper/useRandomNumberGenerator.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Flashcard = function(param) {\n    var dictionary = param.dictionary, categories = param.categories;\n    _s();\n    var categoriesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var cardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), card = ref[0], setCard = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cards = ref1[0], setCards = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), category = ref2[0], setCategory = ref2[1];\n    var headerFront = \"Front\";\n    var headerBack = \"Back\";\n    var info = \"\";\n    var categorySelections = [];\n    var flashcardDictionary;\n    var toggle = false;\n    var incrementQuestion = function() {\n        if (card <= cards.length) {\n            setCard(card + 1);\n        }\n    };\n    var handleCategoryChange = function(e) {\n        e.preventDefault();\n        categoriesRef.current.value = parseInt(e.target.value);\n        setCategory(categoriesRef.current.value);\n    };\n    var handleNext = function(e) {\n        e.preventDefault();\n        incrementQuestion();\n    };\n    var handleClick = function(e) {\n        e.preventDefault();\n        toggle = !toggle;\n        if (toggle) {\n            cardRef.current.classList.add(\"flipCard\");\n        } else {\n            cardRef.current.classList.remove(\"flipCard\");\n        }\n    };\n    var createCategorySelect = function() {\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var category = _step.value;\n                categorySelections.push({\n                    id: category.id,\n                    category: category.category\n                });\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                    _iterator.return();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n        categorySelections.sort(function(a, b) {\n            return a.category > b.category ? 1 : -1;\n        });\n        categorySelections.unshift({\n            id: \"0\",\n            category: \"all\"\n        });\n        categorySelections.unshift({\n            id: \"\",\n            category: \"\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _loop = function(i) {\n            setCards(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(prev).concat([\n                    flashcardDictionary[i]\n                ]);\n            });\n        };\n        flashcardDictionary = category != \"0\" ? (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(dictionary.filter(function(word) {\n            return word.category === category;\n        })) : dictionary;\n        var dictionaryLength = flashcardDictionary.length;\n        var words = (0,_helper_useRandomNumberGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dictionaryLength, dictionaryLength);\n        for(var i = 0; i < words.length; i++)_loop(i);\n    }, [\n        category\n    ]);\n    console.log(cards);\n    createCategorySelect();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"pageContainer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Vocabulary Flashcard\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"vocabularyFlashcard\",\n                    className: \"col-xs-12 col-sm-8 col-lg-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                            className: \"col-lg-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    ref: categoriesRef,\n                                    id: \"categorySelect\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"category\",\n                                                children: \"category: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                id: \"category\",\n                                                name: \"category\",\n                                                onChange: handleCategoryChange,\n                                                children: categorySelections.map(function(categorySelection) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: categorySelection.id,\n                                                        children: categorySelection.category\n                                                    }, categorySelection.category, false, {\n                                                        fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 41\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 25\n                                }, _this),\n                                cards[card] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    ref: cardRef,\n                                    frontHeader: cards[card].word,\n                                    backHeader: cards[card].translation,\n                                    frontInfo: cards[card].pronunciation,\n                                    backInfo: cards[card].image\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 29\n                                }, _this) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons col-lg-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"flipBtn\",\n                                    onClick: handleClick,\n                                    value: \"flip card\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    id: \"nextBtn\",\n                                    onClick: handleNext,\n                                    value: \"next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\deryx\\\\react-spanish-tutor\\\\pages\\\\vocabulary\\\\flashcard.tsx\",\n            lineNumber: 85,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false);\n};\n_s(Flashcard, \"/bdw5Cxiuz8MEcfhRNsS9LkW424=\");\n_c = Flashcard;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flashcard);\nvar _c;\n$RefreshReg$(_c, \"Flashcard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRixJQUFJLENBQUMsQ0FBQzRELFdBQVc7b0NBQUdDLFNBQVMsRUFBRzNELEtBQUssQ0FBQ0YsSUFBSSxDQUFDLENBQUM4RCxhQUFhO29DQUFHQyxRQUFRLEVBQUc3RCxLQUFLLENBQUNGLElBQUksQ0FBQyxDQUFDZ0UsS0FBSzs7Ozs7eUNBQUssR0FDckssSUFBSTs7Ozs7O2lDQUVIO3NDQUNYLDhEQUFDQyxLQUFHOzRCQUFDdkIsU0FBUyxFQUFDLG1CQUFtQjs7OENBQzlCLDhEQUFDd0IsT0FBSztvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7b0NBQUN2QyxFQUFFLEVBQUMsU0FBUztvQ0FBQ3dDLE9BQU8sRUFBRzlDLFdBQVc7b0NBQUdKLEtBQUssRUFBQyxXQUFXOzs7Ozt5Q0FBRzs4Q0FDOUUsOERBQUNnRCxPQUFLO29DQUFDQyxJQUFJLEVBQUMsUUFBUTtvQ0FBQ3ZDLEVBQUUsRUFBQyxTQUFTO29DQUFDd0MsT0FBTyxFQUFHL0MsVUFBVTtvQ0FBR0gsS0FBSyxFQUFDLE1BQU07Ozs7O3lDQUFHOzs7Ozs7aUNBQ3RFOzs7Ozs7eUJBQ0g7Ozs7OztpQkFDRDtxQkFDWCxDQUNOO0NBQ0o7R0FsR0t2QixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7O0FBZ0hmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdm9jYWJ1bGFyeS9mbGFzaGNhcmQudHN4P2RmYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlLCBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvZHJvcERvd24nO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9jYXJkJztcclxuaW1wb3J0IHJhbmRvbU51bWJlckdlbmVyYXRvciBmcm9tICcuLi8uLi9oZWxwZXIvdXNlUmFuZG9tTnVtYmVyR2VuZXJhdG9yJztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQ7XHJcblxyXG5pbnRlcmZhY2UgRmxhc2hjYXJkUHJvcHMge1xyXG4gICAgZGljdGlvbmFyeTogYW55W107XHJcbiAgICBjYXRlZ29yaWVzOiBhbnlbXTtcclxufVxyXG5cclxuY29uc3QgRmxhc2hjYXJkOiBGQzxGbGFzaGNhcmRQcm9wcz4gPSAoeyBkaWN0aW9uYXJ5LCBjYXRlZ29yaWVzIH0pID0+IHtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXNSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBjYXJkUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2NhcmQsIHNldENhcmRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY2FyZHMsIHNldENhcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJGcm9udCA9ICdGcm9udCc7XHJcbiAgICBjb25zdCBoZWFkZXJCYWNrID0gJ0JhY2snO1xyXG4gICAgY29uc3QgaW5mbyA9ICcnO1xyXG4gICAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25zID0gW107XHJcbiAgICBsZXQgZmxhc2hjYXJkRGljdGlvbmFyeTtcclxuICAgIGxldCB0b2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRRdWVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZihjYXJkIDw9IGNhcmRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZXRDYXJkKGNhcmQgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjYXRlZ29yaWVzUmVmLmN1cnJlbnQudmFsdWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcnkoY2F0ZWdvcmllc1JlZi5jdXJyZW50LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVOZXh0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaW5jcmVtZW50UXVlc3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRvZ2dsZSA9ICF0b2dnbGU7XHJcbiAgICAgICAgaWYodG9nZ2xlKSB7XHJcbiAgICAgICAgICAgIGNhcmRSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdmbGlwQ2FyZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhcmRSZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwQ2FyZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVDYXRlZ29yeVNlbGVjdCA9ICgpID0+IHtcclxuICAgICAgICBmb3IoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICBjYXRlZ29yeVNlbGVjdGlvbnMucHVzaCggXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNhdGVnb3J5LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeS5jYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjYXRlZ29yeVNlbGVjdGlvbnMuc29ydCgoYSwgYikgPT4gYS5jYXRlZ29yeSA+IGIuY2F0ZWdvcnkgPyAxIDogLTEpO1xyXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0aW9ucy51bnNoaWZ0KHsgaWQ6ICcwJywgY2F0ZWdvcnk6ICdhbGwnIH0pO1xyXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0aW9ucy51bnNoaWZ0KHsgaWQ6ICcnLCBjYXRlZ29yeTogJycgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgZmxhc2hjYXJkRGljdGlvbmFyeSA9IGNhdGVnb3J5ICE9ICcwJyA/IFsuLi5kaWN0aW9uYXJ5LmZpbHRlciggd29yZCA9PiB3b3JkLmNhdGVnb3J5ID09PSBjYXRlZ29yeSApXSA6IGRpY3Rpb25hcnk7XHJcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeUxlbmd0aCA9IGZsYXNoY2FyZERpY3Rpb25hcnkubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IHdvcmRzID0gcmFuZG9tTnVtYmVyR2VuZXJhdG9yKGRpY3Rpb25hcnlMZW5ndGgsIGRpY3Rpb25hcnlMZW5ndGgpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzZXRDYXJkcyhwcmV2ID0+IFsuLi5wcmV2LCBmbGFzaGNhcmREaWN0aW9uYXJ5W2ldXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NhdGVnb3J5XSApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNhcmRzKTtcclxuXHJcbiAgICBjcmVhdGVDYXRlZ29yeVNlbGVjdCgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxoMT5Wb2NhYnVsYXJ5IEZsYXNoY2FyZDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInZvY2FidWxhcnlGbGFzaGNhcmRcIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkbCByZWY9eyBjYXRlZ29yaWVzUmVmIH0gaWQ9J2NhdGVnb3J5U2VsZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdD48bGFiZWwgaHRtbEZvcj1cImNhdGVnb3J5XCI+Y2F0ZWdvcnk6IDwvbGFiZWw+PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiY2F0ZWdvcnlcIiBuYW1lPVwiY2F0ZWdvcnlcIiBvbkNoYW5nZT17IGhhbmRsZUNhdGVnb3J5Q2hhbmdlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2F0ZWdvcnlTZWxlY3Rpb25zLm1hcCggKCBjYXRlZ29yeVNlbGVjdGlvbiApID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9eyBjYXRlZ29yeVNlbGVjdGlvbi5jYXRlZ29yeSB9IHZhbHVlPXsgY2F0ZWdvcnlTZWxlY3Rpb24uaWQgfT57IGNhdGVnb3J5U2VsZWN0aW9uLmNhdGVnb3J5IH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FyZHNbY2FyZF0gPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHJlZj17IGNhcmRSZWYgfSBmcm9udEhlYWRlcj17IGNhcmRzW2NhcmRdLndvcmQgfSBiYWNrSGVhZGVyPXsgY2FyZHNbY2FyZF0udHJhbnNsYXRpb24gfSBmcm9udEluZm89eyBjYXJkc1tjYXJkXS5wcm9udW5jaWF0aW9uIH0gYmFja0luZm89eyBjYXJkc1tjYXJkXS5pbWFnZSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMgY29sLWxnLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cImZsaXBCdG5cIiBvbkNsaWNrPXsgaGFuZGxlQ2xpY2sgfSB2YWx1ZT1cImZsaXAgY2FyZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJuZXh0QnRuXCIgb25DbGljaz17IGhhbmRsZU5leHQgfSB2YWx1ZT1cIm5leHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBhbGxWb2NhYnVsYXJ5ID0gYXdhaXQgcHJpc21hLndvcmRzLmZpbmRNYW55KCk7XHJcbiAgICBjb25zdCBhbGxDYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hLmNhdGVnb3JpZXMuZmluZE1hbnkoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGRpY3Rpb25hcnk6IGFsbFZvY2FidWxhcnksXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IGFsbENhdGVnb3JpZXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsYXNoY2FyZDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDYXJkIiwicmFuZG9tTnVtYmVyR2VuZXJhdG9yIiwiRmxhc2hjYXJkIiwiZGljdGlvbmFyeSIsImNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzUmVmIiwiY2FyZFJlZiIsImNhcmQiLCJzZXRDYXJkIiwiY2FyZHMiLCJzZXRDYXJkcyIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJoZWFkZXJGcm9udCIsImhlYWRlckJhY2siLCJpbmZvIiwiY2F0ZWdvcnlTZWxlY3Rpb25zIiwiZmxhc2hjYXJkRGljdGlvbmFyeSIsInRvZ2dsZSIsImluY3JlbWVudFF1ZXN0aW9uIiwibGVuZ3RoIiwiaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJwYXJzZUludCIsInRhcmdldCIsImhhbmRsZU5leHQiLCJoYW5kbGVDbGljayIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNyZWF0ZUNhdGVnb3J5U2VsZWN0IiwicHVzaCIsImlkIiwic29ydCIsImEiLCJiIiwidW5zaGlmdCIsInByZXYiLCJpIiwiZmlsdGVyIiwid29yZCIsImRpY3Rpb25hcnlMZW5ndGgiLCJ3b3JkcyIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiZmllbGRzZXQiLCJkbCIsInJlZiIsImR0IiwibGFiZWwiLCJodG1sRm9yIiwiZGQiLCJzZWxlY3QiLCJuYW1lIiwib25DaGFuZ2UiLCJtYXAiLCJjYXRlZ29yeVNlbGVjdGlvbiIsIm9wdGlvbiIsImZyb250SGVhZGVyIiwiYmFja0hlYWRlciIsInRyYW5zbGF0aW9uIiwiZnJvbnRJbmZvIiwicHJvbnVuY2lhdGlvbiIsImJhY2tJbmZvIiwiaW1hZ2UiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/vocabulary/flashcard.tsx\n"));

/***/ })

});