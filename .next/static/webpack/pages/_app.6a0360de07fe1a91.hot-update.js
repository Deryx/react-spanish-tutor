"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/vocabulary/completion.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/vocabulary/completion.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"section {\\n  width: 100%;\\n  height: 100%;\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\nsection h1 {\\n  margin-top: 8rem;\\n  text-transform: uppercase;\\n  text-align: center;\\n  padding-bottom: 50px;\\n  font-family: \\\"Open Sans\\\", serif;\\n  text-transform: capitalize;\\n  font-weight: normal;\\n  font-size: 175%;\\n}\\n\\nform#completion fieldset {\\n  border-radius: 0.8rem;\\n  padding: 1.2rem 0;\\n  margin: 0 auto;\\n  border: 0.0625rem solid rgb(198, 10, 30);\\n  height: 40vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n@media only screen and (max-width: 480px) {\\n  form#completion fieldset {\\n    border: none;\\n    width: 100%;\\n  }\\n}\\nform#completion fieldset dl#numQuestionsSelect {\\n  padding: 0;\\n  padding-top: 0.85rem;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\n@media only screen and (max-width: 480px) {\\n  form#completion fieldset dl#numQuestionsSelect {\\n    width: 100%;\\n  }\\n}\\nform#completion fieldset dl#numQuestionsSelect dt {\\n  width: 30%;\\n  text-align: right;\\n  margin-top: 0.3125rem;\\n  margin-right: 0.5rem;\\n  text-transform: capitalize;\\n}\\n@media only screen and (max-width: 480px) {\\n  form#completion fieldset dl#numQuestionsSelect dt {\\n    width: 100%;\\n  }\\n}\\nform#completion fieldset dl#numQuestionsSelect dd {\\n  width: 30%;\\n  justify-content: flex-start;\\n}\\n@media only screen and (max-width: 480px) {\\n  form#completion fieldset dl#numQuestionsSelect dd {\\n    width: 100%;\\n  }\\n}\\nform#completion fieldset dl#numQuestionsSelect dd select {\\n  width: 30%;\\n  border: 1px solid rgb(112, 128, 144);\\n  border-radius: 0.3rem;\\n  padding: 0.4rem;\\n  font-size: 80%;\\n}\\n@media only screen and (max-width: 480px) {\\n  form#completion fieldset dl#numQuestionsSelect dd select {\\n    width: 100%;\\n  }\\n}\\nform#completion fieldset dl#categorySelect {\\n  padding: 0;\\n  padding-top: 0.85rem;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\nform#completion fieldset dl#categorySelect dt {\\n  margin: 0;\\n  margin-top: 0.3125rem;\\n  margin-right: 0.5rem;\\n  padding: 0;\\n  width: 30%;\\n  font-weight: bold;\\n  text-transform: capitalize;\\n  text-align: right;\\n  font-size: 90%;\\n}\\nform#completion fieldset dl#categorySelect dd {\\n  margin: 0;\\n  width: 65%;\\n  padding: 0 0.5rem;\\n}\\nform#completion fieldset dl#categorySelect dd select {\\n  width: 65%;\\n  border: 1px solid rgb(112, 128, 144);\\n  border-radius: 0.3rem;\\n  padding: 0.4rem;\\n  font-size: 80%;\\n}\\nform#completion fieldset dl#questions {\\n  padding: 0;\\n  padding-top: 4rem;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\nform#completion fieldset dl#questions dt {\\n  margin: 0;\\n  margin-top: 5px;\\n  margin-right: 10px;\\n  padding: 0;\\n  width: 100%;\\n  font-weight: bold;\\n  text-transform: lowercase;\\n  text-align: center;\\n  font-size: 90%;\\n}\\nform#completion fieldset dl#questions dd {\\n  margin: 0;\\n  margin-top: 1.5rem;\\n  padding: 0 0.5rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\nform#completion fieldset dl#questions dd ul {\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\nform#completion fieldset dl#questions dd ul li {\\n  margin: 0.35rem;\\n  list-style: none;\\n}\\nform#completion fieldset dl#questions dd ul li input {\\n  width: 2rem;\\n  height: 2rem;\\n  text-align: center;\\n}\\nform#completion .buttons {\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  margin-top: 1.5rem;\\n}\\nform#completion .buttons input[type=button] {\\n  width: 6.2rem;\\n  padding: 0.4rem;\\n  border-radius: 0.5rem;\\n  color: rgb(255, 255, 255);\\n  border: none;\\n}\\nform#completion .buttons #submitBtn {\\n  background: rgb(40, 167, 69);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/vocabulary/completion.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACJ;AACI;EACI,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,oBAAA;EACA,+BAAA;EACA,0BAAA;EACA,mBAAA;EACA,eAAA;AACR;;AAII;EACI,qBAAA;EACA,iBAAA;EACA,cAAA;EACA,wCAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AADR;AAGQ;EAXJ;IAYQ,YAAA;IACA,WAAA;EAAV;AACF;AAEQ;EACI,UAAA;EACA,oBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAAZ;AAEY;EARJ;IASQ,WAAA;EACd;AACF;AACY;EACI,UAAA;EACA,iBAAA;EACA,qBAAA;EACA,oBAAA;EACA,0BAAA;AAChB;AACgB;EAPJ;IAQQ,WAAA;EAElB;AACF;AACY;EACI,UAAA;EACA,2BAAA;AAChB;AACgB;EAJJ;IAKQ,WAAA;EAElB;AACF;AAAgB;EACI,UAAA;EACA,oCAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AAEpB;AAAoB;EAPJ;IAQQ,WAAA;EAGtB;AACF;AAEQ;EACI,UAAA;EACA,oBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAAZ;AAEY;EACI,SAAA;EACA,qBAAA;EACA,oBAAA;EACA,UAAA;EACA,UAAA;EACA,iBAAA;EACA,0BAAA;EACA,iBAAA;EACA,cAAA;AAAhB;AAGY;EACI,SAAA;EACA,UAAA;EACA,iBAAA;AADhB;AAGgB;EACI,UAAA;EACA,oCAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AADpB;AAMQ;EACI,UAAA;EACA,iBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AAJZ;AAMY;EACI,SAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,iBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;AAJhB;AAOY;EACI,SAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AALhB;AAOgB;EACI,SAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AALpB;AAOoB;EACI,eAAA;EACA,gBAAA;AALxB;AAOwB;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AAL5B;AAcI;EACI,WAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;AAZR;AAcQ;EACI,aAAA;EACA,eAAA;EACA,qBAAA;EACA,yBAAA;EACA,YAAA;AAZZ;AAeQ;EACI,4BAAA;AAbZ\",\"sourcesContent\":[\"section {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n\\r\\n    h1 {\\r\\n        margin-top: 8.0rem;\\r\\n        text-transform: uppercase;\\r\\n        text-align: center;\\r\\n        padding-bottom: 50px;\\r\\n        font-family: \\\"Open Sans\\\", serif;\\r\\n        text-transform: capitalize;\\r\\n        font-weight: normal;\\r\\n        font-size: 175%;\\r\\n    }\\r\\n}\\r\\n\\r\\nform#completion {\\r\\n    fieldset {\\r\\n        border-radius: 0.8rem;\\r\\n        padding: 1.2rem 0;\\r\\n        margin: 0 auto;\\r\\n        border: 0.0625rem solid rgb(198, 10, 30);\\r\\n        height: 40vh;\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n\\r\\n        @media only screen and (max-width: 480px) {\\r\\n            border: none;\\r\\n            width: 100%;\\r\\n        }\\r\\n\\r\\n        dl#numQuestionsSelect {\\r\\n            padding: 0;\\r\\n            padding-top: 0.85rem;\\r\\n            width: 100%;\\r\\n            display: flex;\\r\\n            flex-direction: row;\\r\\n            justify-content: center;\\r\\n\\r\\n            @media only screen and (max-width: 480px) {\\r\\n                width: 100%;\\r\\n            }\\r\\n\\r\\n            dt {\\r\\n                width: 30%;\\r\\n                text-align: right;\\r\\n                margin-top: 0.3125rem;\\r\\n                margin-right: 0.5rem;\\r\\n                text-transform: capitalize;\\r\\n\\r\\n                @media only screen and (max-width: 480px) {\\r\\n                    width: 100%;\\r\\n                }\\r\\n            }\\r\\n\\r\\n            dd {\\r\\n                width: 30%;\\r\\n                justify-content: flex-start;\\r\\n\\r\\n                @media only screen and (max-width: 480px) {\\r\\n                    width: 100%;\\r\\n                }\\r\\n                \\r\\n                select {\\r\\n                    width: 30%;\\r\\n                    border: 1px solid rgb(112, 128, 144);\\r\\n                    border-radius: 0.3rem;\\r\\n                    padding: 0.4rem;\\r\\n                    font-size: 80%;\\r\\n                \\r\\n                    @media only screen and (max-width: 480px) {\\r\\n                        width: 100%;\\r\\n                    }\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    \\r\\n        dl#categorySelect {\\r\\n            padding: 0;\\r\\n            padding-top: 0.85rem;\\r\\n            width: 100%;\\r\\n            display: flex;\\r\\n            flex-direction: row;\\r\\n            justify-content: center;\\r\\n                                            \\r\\n            dt {\\r\\n                margin: 0;\\r\\n                margin-top: 0.3125rem;\\r\\n                margin-right: 0.5rem;\\r\\n                padding: 0;\\r\\n                width: 30%;\\r\\n                font-weight: bold;\\r\\n                text-transform: capitalize;\\r\\n                text-align: right;\\r\\n                font-size: 90%;   \\r\\n            }\\r\\n    \\r\\n            dd {\\r\\n                margin: 0;\\r\\n                width: 65%;\\r\\n                padding: 0 0.5rem;\\r\\n                \\r\\n                select {\\r\\n                    width: 65%;\\r\\n                    border: 1px solid rgb(112, 128, 144);\\r\\n                    border-radius: 0.3rem;\\r\\n                    padding: 0.4rem;\\r\\n                    font-size: 80%;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n\\r\\n        dl#questions {\\r\\n            padding: 0;\\r\\n            padding-top: 4.0rem;\\r\\n            width: 100%;\\r\\n            display: flex;\\r\\n            flex-direction: column;\\r\\n            justify-content: center;\\r\\n                                            \\r\\n            dt {\\r\\n                margin: 0;\\r\\n                margin-top: 5px;\\r\\n                margin-right: 10px;\\r\\n                padding: 0;\\r\\n                width: 100%;\\r\\n                font-weight: bold;\\r\\n                text-transform: lowercase;\\r\\n                text-align: center;\\r\\n                font-size: 90%;   \\r\\n            }\\r\\n    \\r\\n            dd {\\r\\n                margin: 0;\\r\\n                margin-top: 1.5rem;\\r\\n                padding: 0 0.5rem;\\r\\n                display: flex;\\r\\n                flex-direction: column; \\r\\n                justify-content: center;\\r\\n\\r\\n                ul {\\r\\n                    margin: 0;\\r\\n                    padding: 0;\\r\\n                    display: flex;\\r\\n                    flex-direction: row;\\r\\n                    justify-content: center;\\r\\n                    \\r\\n                    li {\\r\\n                        margin: 0.35rem;\\r\\n                        list-style: none;\\r\\n\\r\\n                        input {\\r\\n                            width: 2.0rem;\\r\\n                            height: 2.0rem;\\r\\n                            text-align: center;\\r\\n                        }\\r\\n                    }\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    \\r\\n    }\\r\\n\\r\\n    .buttons {\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n        margin-top: 1.5rem;\\r\\n    \\r\\n        input[type=\\\"button\\\"] {\\r\\n            width: 6.2rem;\\r\\n            padding: 0.4rem;\\r\\n            border-radius: 0.5rem;\\r\\n            color: rgb(255, 255, 255);\\r\\n            border: none;\\r\\n        }\\r\\n    \\r\\n        #submitBtn {\\r\\n            background: rgb(40, 167, 69);\\r\\n        }\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy92b2NhYnVsYXJ5L2NvbXBsZXRpb24uc2Nzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsbURBQW1ELGdCQUFnQixpQkFBaUIsY0FBYyxlQUFlLHdDQUF3QyxrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLGNBQWMscUJBQXFCLDhCQUE4Qix1QkFBdUIseUJBQXlCLHNDQUFzQywrQkFBK0Isd0JBQXdCLG9CQUFvQixHQUFHLDhCQUE4QiwwQkFBMEIsc0JBQXNCLG1CQUFtQiw2Q0FBNkMsaUJBQWlCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixHQUFHLDZDQUE2Qyw4QkFBOEIsbUJBQW1CLGtCQUFrQixLQUFLLEdBQUcsa0RBQWtELGVBQWUseUJBQXlCLGdCQUFnQixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLDZDQUE2QyxvREFBb0Qsa0JBQWtCLEtBQUssR0FBRyxxREFBcUQsZUFBZSxzQkFBc0IsMEJBQTBCLHlCQUF5Qiwr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QUFzQywwQ0FBMEMsNkJBQTZCLGFBQWEsZ0NBQWdDLDZDQUE2QyxhQUFhLFNBQVMsS0FBSyxtQkFBbUI7QUFDaDZWO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3ZvY2FidWxhcnkvY29tcGxldGlvbi5zY3NzPzA3YzEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcInNlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5zZWN0aW9uIGgxIHtcXG4gIG1hcmdpbi10b3A6IDhyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNlcmlmO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNzUlO1xcbn1cXG5cXG5mb3JtI2NvbXBsZXRpb24gZmllbGRzZXQge1xcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcbiAgcGFkZGluZzogMS4ycmVtIDA7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYigxOTgsIDEwLCAzMCk7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgZm9ybSNjb21wbGV0aW9uIGZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuZm9ybSNjb21wbGV0aW9uIGZpZWxkc2V0IGRsI251bVF1ZXN0aW9uc1NlbGVjdCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFkZGluZy10b3A6IDAuODVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIGZvcm0jY29tcGxldGlvbiBmaWVsZHNldCBkbCNudW1RdWVzdGlvbnNTZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuZm9ybSNjb21wbGV0aW9uIGZpZWxkc2V0IGRsI251bVF1ZXN0aW9uc1NlbGVjdCBkdCB7XFxuICB3aWR0aDogMzAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tdG9wOiAwLjMxMjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICBmb3JtI2NvbXBsZXRpb24gZmllbGRzZXQgZGwjbnVtUXVlc3Rpb25zU2VsZWN0IGR0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbmZvcm0jY29tcGxldGlvbiBmaWVsZHNldCBkbCNudW1RdWVzdGlvbnNTZWxlY3QgZGQge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgZm9ybSNjb21wbGV0aW9uIGZpZWxkc2V0IGRsI251bVF1ZXN0aW9uc1NlbGVjdCBkZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5mb3JtI2NvbXBsZXRpb24gZmllbGRzZXQgZGwjbnVtUXVlc3Rpb25zU2VsZWN0IGRkIHNlbGVjdCB7XFxuICB3aWR0aDogMzAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExMiwgMTI4LCAxNDQpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIGZvcm0jY29tcGxldGlvbiBmaWVsZHNldCBkbCNudW1RdWVzdGlvbnNTZWxlY3QgZGQgc2VsZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbmZvcm0jY29tcGxldGlvbiBmaWVsZHNldCBkbCNjYXRlZ29yeVNlbGVjdCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFkZGluZy10b3A6IDAuODVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmZvcm0jY29tcGxldGlvbiBmaWVsZHNldCBkbCNjYXRlZ29yeVNlbGVjdCBkdCB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tdG9wOiAwLjMxMjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMzAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZm9udC1zaXplOiA5MCU7XFxufVxcbmZvcm0jY29tcGxldGlvbiBmaWVsZHNldCBkbCNjYXRlZ29yeVNlbGVjdCBkZCB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogNjUlO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxufVxcbmZvcm0jY29tcGxldGlvbiBmaWVsZHNldCBkbCNjYXRlZ29yeVNlbGVjdCBkZCBzZWxlY3Qge1xcbiAgd2lkdGg6IDY1JTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTIsIDEyOCwgMTQ0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5mb3JtI2NvbXBsZXRpb24gZmllbGRzZXQgZGwjcXVlc3Rpb25zIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9ybSNjb21wbGV0aW9uIGZpZWxkc2V0IGRsI3F1ZXN0aW9ucyBkdCB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDkwJTtcXG59XFxuZm9ybSNjb21wbGV0aW9uIGZpZWxkc2V0IGRsI3F1ZXN0aW9ucyBkZCB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmZvcm0jY29tcGxldGlvbiBmaWVsZHNldCBkbCNxdWVzdGlvbnMgZGQgdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmZvcm0jY29tcGxldGlvbiBmaWVsZHNldCBkbCNxdWVzdGlvbnMgZGQgdWwgbGkge1xcbiAgbWFyZ2luOiAwLjM1cmVtO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuZm9ybSNjb21wbGV0aW9uIGZpZWxkc2V0IGRsI3F1ZXN0aW9ucyBkZCB1bCBsaSBpbnB1dCB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZm9ybSNjb21wbGV0aW9uIC5idXR0b25zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbn1cXG5mb3JtI2NvbXBsZXRpb24gLmJ1dHRvbnMgaW5wdXRbdHlwZT1idXR0b25dIHtcXG4gIHdpZHRoOiA2LjJyZW07XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5mb3JtI2NvbXBsZXRpb24gLmJ1dHRvbnMgI3N1Ym1pdEJ0biB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDE2NywgNjkpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3ZvY2FidWxhcnkvY29tcGxldGlvbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ1I7O0FBSUk7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUdRO0VBWEo7SUFZUSxZQUFBO0lBQ0EsV0FBQTtFQUFWO0FBQ0Y7QUFFUTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFaO0FBRVk7RUFSSjtJQVNRLFdBQUE7RUFDZDtBQUNGO0FBQ1k7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUFDaEI7QUFDZ0I7RUFQSjtJQVFRLFdBQUE7RUFFbEI7QUFDRjtBQUNZO0VBQ0ksVUFBQTtFQUNBLDJCQUFBO0FBQ2hCO0FBQ2dCO0VBSko7SUFLUSxXQUFBO0VBRWxCO0FBQ0Y7QUFBZ0I7RUFDSSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRXBCO0FBQW9CO0VBUEo7SUFRUSxXQUFBO0VBR3RCO0FBQ0Y7QUFFUTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFaO0FBRVk7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFoQjtBQUdZO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQURoQjtBQUdnQjtFQUNJLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFEcEI7QUFNUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUpaO0FBTVk7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBSmhCO0FBT1k7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBTGhCO0FBT2dCO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUxwQjtBQU9vQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUx4QjtBQU93QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFMNUI7QUFjSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQVpSO0FBY1E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBWlo7QUFlUTtFQUNJLDRCQUFBO0FBYlpcIixcInNvdXJjZXNDb250ZW50XCI6W1wic2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA4LjByZW07XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNlcmlmO1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNzUlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmZvcm0jY29tcGxldGlvbiB7XFxyXFxuICAgIGZpZWxkc2V0IHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEuMnJlbSAwO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2IoMTk4LCAxMCwgMzApO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZGwjbnVtUXVlc3Rpb25zU2VsZWN0IHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjg1cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBkdCB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjMxMjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgZGQge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICBzZWxlY3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTIsIDEyOCwgMTQ0KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICBkbCNjYXRlZ29yeVNlbGVjdCB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC44NXJlbTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBkdCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4zMTI1cmVtO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7ICAgXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICBkZCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICBzZWxlY3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTIsIDEyOCwgMTQ0KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZGwjcXVlc3Rpb25zIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0LjByZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgZHQge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7ICAgXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICBkZCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICB1bCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgbGkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC4zNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIuMHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjByZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idXR0b25zIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbiAgICBcXHJcXG4gICAgICAgIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNi4ycmVtO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgI3N1Ym1pdEJ0biB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDQwLCAxNjcsIDY5KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/vocabulary/completion.scss\n"));

/***/ })

});