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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"section {\\n  width: 100%;\\n  height: 100%;\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\nsection h1 {\\n  margin-top: 8rem;\\n  text-transform: uppercase;\\n  text-align: center;\\n  padding-bottom: 50px;\\n  font-family: \\\"Open Sans\\\", serif;\\n  text-transform: capitalize;\\n  font-weight: normal;\\n  font-size: 175%;\\n}\\n\\nform#completion fieldset {\\n  border-radius: 0.8rem;\\n  padding: 1.2rem 0;\\n  margin: 0 auto;\\n  border: 0.0625rem solid rgb(198, 10, 30);\\n  height: 40vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n@media only screen and (max-width: 480px) {\\n  form#completion fieldset {\\n    border: none;\\n    width: 100%;\\n  }\\n}\\nform#completion fieldset dl#numQuestionsSelect {\\n  padding: 0;\\n  padding-top: 0.85rem;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\nform#completion fieldset dl#numQuestionsSelect dt {\\n  width: 30%;\\n  text-align: right;\\n  margin-top: 0.3125rem;\\n  margin-right: 0.5rem;\\n  text-transform: capitalize;\\n}\\nform#completion fieldset dl#numQuestionsSelect dd {\\n  width: 30%;\\n  justify-content: flex-start;\\n}\\nform#completion fieldset dl#numQuestionsSelect dd select {\\n  width: 30%;\\n  border: 1px solid rgb(112, 128, 144);\\n  border-radius: 0.3rem;\\n  padding: 0.4rem;\\n  font-size: 80%;\\n}\\nform#completion fieldset dl#categorySelect {\\n  padding: 0;\\n  padding-top: 0.85rem;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\nform#completion fieldset dl#categorySelect dt {\\n  margin: 0;\\n  margin-top: 0.3125rem;\\n  margin-right: 0.5rem;\\n  padding: 0;\\n  width: 30%;\\n  font-weight: bold;\\n  text-transform: capitalize;\\n  text-align: right;\\n  font-size: 90%;\\n}\\nform#completion fieldset dl#categorySelect dd {\\n  margin: 0;\\n  width: 65%;\\n  padding: 0 0.5rem;\\n}\\nform#completion fieldset dl#categorySelect dd select {\\n  width: 65%;\\n  border: 1px solid rgb(112, 128, 144);\\n  border-radius: 0.3rem;\\n  padding: 0.4rem;\\n  font-size: 80%;\\n}\\nform#completion fieldset dl#questions {\\n  padding: 0;\\n  padding-top: 4rem;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\nform#completion fieldset dl#questions dt {\\n  margin: 0;\\n  margin-top: 5px;\\n  margin-right: 10px;\\n  padding: 0;\\n  width: 100%;\\n  font-weight: bold;\\n  text-transform: lowercase;\\n  text-align: center;\\n  font-size: 90%;\\n}\\nform#completion fieldset dl#questions dd {\\n  margin: 0;\\n  margin-top: 1.5rem;\\n  padding: 0 0.5rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\nform#completion fieldset dl#questions dd ul {\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\nform#completion fieldset dl#questions dd ul li {\\n  margin: 0.35rem;\\n  list-style: none;\\n}\\nform#completion fieldset dl#questions dd ul li input {\\n  width: 2rem;\\n  height: 2rem;\\n  text-align: center;\\n}\\nform#completion .buttons {\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  margin-top: 1.5rem;\\n}\\nform#completion .buttons input[type=button] {\\n  width: 6.2rem;\\n  padding: 0.4rem;\\n  border-radius: 0.5rem;\\n  color: rgb(255, 255, 255);\\n  border: none;\\n}\\nform#completion .buttons #submitBtn {\\n  background: rgb(40, 167, 69);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/vocabulary/completion.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACJ;AACI;EACI,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,oBAAA;EACA,+BAAA;EACA,0BAAA;EACA,mBAAA;EACA,eAAA;AACR;;AAII;EACI,qBAAA;EACA,iBAAA;EACA,cAAA;EACA,wCAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AADR;AAGQ;EAXJ;IAYQ,YAAA;IACA,WAAA;EAAV;AACF;AAEQ;EACI,UAAA;EACA,oBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAAZ;AAEY;EACI,UAAA;EACA,iBAAA;EACA,qBAAA;EACA,oBAAA;EACA,0BAAA;AAAhB;AAGY;EACI,UAAA;EACA,2BAAA;AADhB;AAGgB;EACI,UAAA;EACA,oCAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AADpB;AAMQ;EACI,UAAA;EACA,oBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAJZ;AAMY;EACI,SAAA;EACA,qBAAA;EACA,oBAAA;EACA,UAAA;EACA,UAAA;EACA,iBAAA;EACA,0BAAA;EACA,iBAAA;EACA,cAAA;AAJhB;AAOY;EACI,SAAA;EACA,UAAA;EACA,iBAAA;AALhB;AAOgB;EACI,UAAA;EACA,oCAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AALpB;AAUQ;EACI,UAAA;EACA,iBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AARZ;AAUY;EACI,SAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,iBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;AARhB;AAWY;EACI,SAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AAThB;AAWgB;EACI,SAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AATpB;AAWoB;EACI,eAAA;EACA,gBAAA;AATxB;AAWwB;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AAT5B;AAkBI;EACI,WAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;AAhBR;AAkBQ;EACI,aAAA;EACA,eAAA;EACA,qBAAA;EACA,yBAAA;EACA,YAAA;AAhBZ;AAmBQ;EACI,4BAAA;AAjBZ\",\"sourcesContent\":[\"section {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n\\r\\n    h1 {\\r\\n        margin-top: 8.0rem;\\r\\n        text-transform: uppercase;\\r\\n        text-align: center;\\r\\n        padding-bottom: 50px;\\r\\n        font-family: \\\"Open Sans\\\", serif;\\r\\n        text-transform: capitalize;\\r\\n        font-weight: normal;\\r\\n        font-size: 175%;\\r\\n    }\\r\\n}\\r\\n\\r\\nform#completion {\\r\\n    fieldset {\\r\\n        border-radius: 0.8rem;\\r\\n        padding: 1.2rem 0;\\r\\n        margin: 0 auto;\\r\\n        border: 0.0625rem solid rgb(198, 10, 30);\\r\\n        height: 40vh;\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n\\r\\n        @media only screen and (max-width: 480px) {\\r\\n            border: none;\\r\\n            width: 100%;\\r\\n        }\\r\\n\\r\\n        dl#numQuestionsSelect {\\r\\n            padding: 0;\\r\\n            padding-top: 0.85rem;\\r\\n            width: 100%;\\r\\n            display: flex;\\r\\n            flex-direction: row;\\r\\n            justify-content: center;\\r\\n\\r\\n            dt {\\r\\n                width: 30%;\\r\\n                text-align: right;\\r\\n                margin-top: 0.3125rem;\\r\\n                margin-right: 0.5rem;\\r\\n                text-transform: capitalize;\\r\\n            }\\r\\n\\r\\n            dd {\\r\\n                width: 30%;\\r\\n                justify-content: flex-start;\\r\\n                \\r\\n                select {\\r\\n                    width: 30%;\\r\\n                    border: 1px solid rgb(112, 128, 144);\\r\\n                    border-radius: 0.3rem;\\r\\n                    padding: 0.4rem;\\r\\n                    font-size: 80%;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    \\r\\n        dl#categorySelect {\\r\\n            padding: 0;\\r\\n            padding-top: 0.85rem;\\r\\n            width: 100%;\\r\\n            display: flex;\\r\\n            flex-direction: row;\\r\\n            justify-content: center;\\r\\n                                            \\r\\n            dt {\\r\\n                margin: 0;\\r\\n                margin-top: 0.3125rem;\\r\\n                margin-right: 0.5rem;\\r\\n                padding: 0;\\r\\n                width: 30%;\\r\\n                font-weight: bold;\\r\\n                text-transform: capitalize;\\r\\n                text-align: right;\\r\\n                font-size: 90%;   \\r\\n            }\\r\\n    \\r\\n            dd {\\r\\n                margin: 0;\\r\\n                width: 65%;\\r\\n                padding: 0 0.5rem;\\r\\n                \\r\\n                select {\\r\\n                    width: 65%;\\r\\n                    border: 1px solid rgb(112, 128, 144);\\r\\n                    border-radius: 0.3rem;\\r\\n                    padding: 0.4rem;\\r\\n                    font-size: 80%;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n\\r\\n        dl#questions {\\r\\n            padding: 0;\\r\\n            padding-top: 4.0rem;\\r\\n            width: 100%;\\r\\n            display: flex;\\r\\n            flex-direction: column;\\r\\n            justify-content: center;\\r\\n                                            \\r\\n            dt {\\r\\n                margin: 0;\\r\\n                margin-top: 5px;\\r\\n                margin-right: 10px;\\r\\n                padding: 0;\\r\\n                width: 100%;\\r\\n                font-weight: bold;\\r\\n                text-transform: lowercase;\\r\\n                text-align: center;\\r\\n                font-size: 90%;   \\r\\n            }\\r\\n    \\r\\n            dd {\\r\\n                margin: 0;\\r\\n                margin-top: 1.5rem;\\r\\n                padding: 0 0.5rem;\\r\\n                display: flex;\\r\\n                flex-direction: column; \\r\\n                justify-content: center;\\r\\n\\r\\n                ul {\\r\\n                    margin: 0;\\r\\n                    padding: 0;\\r\\n                    display: flex;\\r\\n                    flex-direction: row;\\r\\n                    justify-content: center;\\r\\n                    \\r\\n                    li {\\r\\n                        margin: 0.35rem;\\r\\n                        list-style: none;\\r\\n\\r\\n                        input {\\r\\n                            width: 2.0rem;\\r\\n                            height: 2.0rem;\\r\\n                            text-align: center;\\r\\n                        }\\r\\n                    }\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    \\r\\n    }\\r\\n\\r\\n    .buttons {\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n        margin-top: 1.5rem;\\r\\n    \\r\\n        input[type=\\\"button\\\"] {\\r\\n            width: 6.2rem;\\r\\n            padding: 0.4rem;\\r\\n            border-radius: 0.5rem;\\r\\n            color: rgb(255, 255, 255);\\r\\n            border: none;\\r\\n        }\\r\\n    \\r\\n        #submitBtn {\\r\\n            background: rgb(40, 167, 69);\\r\\n        }\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy92b2NhYnVsYXJ5L2NvbXBsZXRpb24uc2Nzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsbURBQW1ELGdCQUFnQixpQkFBaUIsY0FBYyxlQUFlLHdDQUF3QyxrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLGNBQWMscUJBQXFCLDhCQUE4Qix1QkFBdUIseUJBQXlCLHNDQUFzQywrQkFBK0Isd0JBQXdCLG9CQUFvQixHQUFHLDhCQUE4QiwwQkFBMEIsc0JBQXNCLG1CQUFtQiw2Q0FBNkMsaUJBQWlCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixHQUFHLDZDQUE2Qyw4QkFBOEIsbUJBQW1CLGtCQUFrQixLQUFLLEdBQUcsa0RBQWtELGVBQWUseUJBQXlCLGdCQUFnQixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLHFEQUFxRCxlQUFlLHNCQUFzQiwwQkFBMEIseUJBQXlCLCtCQUErQixHQUFHLHFEQUFxRCxlQUFlLGdDQUFnQyxH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LGlCQUFpQixhQUFhLHVDQUF1QywyQkFBMkIscUNBQXFDLDRCQUE0Qiw4QkFBOEIsb0NBQW9DLHdDQUF3QyxvRUFBb0UsOEJBQThCLDBDQUEwQyx5Q0FBeUMsK0JBQStCLCtCQUErQixzQ0FBc0MsK0NBQStDLHNDQUFzQyxzQ0FBc0MsaUJBQWlCLDRCQUE0Qiw4QkFBOEIsK0JBQStCLHNDQUFzQyxnREFBZ0QsbUNBQW1DLDZEQUE2RCw4Q0FBOEMsd0NBQXdDLHVDQUF1QyxxQkFBcUIsaUJBQWlCLGFBQWEsOEJBQThCLDJCQUEyQixvQ0FBb0MsNEJBQTRCLDhCQUE4Qix1Q0FBdUMsd0NBQXdDLG9FQUFvRSw4QkFBOEIsb0NBQW9DLHVDQUF1QywrQkFBK0IsZ0NBQWdDLHNDQUFzQyw4Q0FBOEMsdUNBQXVDLHNDQUFzQyxpQkFBaUIsNEJBQTRCLDhCQUE4Qix1Q0FBdUMsc0NBQXNDLGtDQUFrQyw0Q0FBNEMsNENBQTRDLDRCQUE0QixrQ0FBa0MsbUNBQW1DLHNDQUFzQyw0Q0FBNEMsZ0RBQWdELG9EQUFvRCw0Q0FBNEMsNkNBQTZDLHVDQUF1Qyw4Q0FBOEMsK0NBQStDLG1EQUFtRCw2QkFBNkIseUJBQXlCLHFCQUFxQixpQkFBaUIsYUFBYSxpQkFBaUIsc0JBQXNCLHdCQUF3QiwwQkFBMEIsb0NBQW9DLCtCQUErQiw0Q0FBNEMsOEJBQThCLGdDQUFnQyxzQ0FBc0MsMENBQTBDLDZCQUE2QixhQUFhLGdDQUFnQyw2Q0FBNkMsYUFBYSxTQUFTLEtBQUssbUJBQW1CO0FBQzV5VDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy92b2NhYnVsYXJ5L2NvbXBsZXRpb24uc2Nzcz8wN2MxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJzZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuc2VjdGlvbiBoMSB7XFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzZXJpZjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTc1JTtcXG59XFxuXFxuZm9ybSNjb21wbGV0aW9uIGZpZWxkc2V0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2IoMTk4LCAxMCwgMzApO1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIGZvcm0jY29tcGxldGlvbiBmaWVsZHNldCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbmZvcm0jY29tcGxldGlvbiBmaWVsZHNldCBkbCNudW1RdWVzdGlvbnNTZWxlY3Qge1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZGRpbmctdG9wOiAwLjg1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5mb3JtI2NvbXBsZXRpb24gZmllbGRzZXQgZGwjbnVtUXVlc3Rpb25zU2VsZWN0IGR0IHtcXG4gIHdpZHRoOiAzMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi10b3A6IDAuMzEyNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbmZvcm0jY29tcGxldGlvbiBmaWVsZHNldCBkbCNudW1RdWVzdGlvbnNTZWxlY3QgZGQge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuZm9ybSNjb21wbGV0aW9uIGZpZWxkc2V0IGRsI251bVF1ZXN0aW9uc1NlbGVjdCBkZCBzZWxlY3Qge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTIsIDEyOCwgMTQ0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5mb3JtI2NvbXBsZXRpb24gZmllbGRzZXQgZGwjY2F0ZWdvcnlTZWxlY3Qge1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZGRpbmctdG9wOiAwLjg1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5mb3JtI2NvbXBsZXRpb24gZmllbGRzZXQgZGwjY2F0ZWdvcnlTZWxlY3QgZHQge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXRvcDogMC4zMTI1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbn1cXG5mb3JtI2NvbXBsZXRpb24gZmllbGRzZXQgZGwjY2F0ZWdvcnlTZWxlY3QgZGQge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDY1JTtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbn1cXG5mb3JtI2NvbXBsZXRpb24gZmllbGRzZXQgZGwjY2F0ZWdvcnlTZWxlY3QgZGQgc2VsZWN0IHtcXG4gIHdpZHRoOiA2NSU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEyLCAxMjgsIDE0NCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuZm9ybSNjb21wbGV0aW9uIGZpZWxkc2V0IGRsI3F1ZXN0aW9ucyB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFkZGluZy10b3A6IDRyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmZvcm0jY29tcGxldGlvbiBmaWVsZHNldCBkbCNxdWVzdGlvbnMgZHQge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA5MCU7XFxufVxcbmZvcm0jY29tcGxldGlvbiBmaWVsZHNldCBkbCNxdWVzdGlvbnMgZGQge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5mb3JtI2NvbXBsZXRpb24gZmllbGRzZXQgZGwjcXVlc3Rpb25zIGRkIHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5mb3JtI2NvbXBsZXRpb24gZmllbGRzZXQgZGwjcXVlc3Rpb25zIGRkIHVsIGxpIHtcXG4gIG1hcmdpbjogMC4zNXJlbTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmZvcm0jY29tcGxldGlvbiBmaWVsZHNldCBkbCNxdWVzdGlvbnMgZGQgdWwgbGkgaW5wdXQge1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmZvcm0jY29tcGxldGlvbiAuYnV0dG9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG59XFxuZm9ybSNjb21wbGV0aW9uIC5idXR0b25zIGlucHV0W3R5cGU9YnV0dG9uXSB7XFxuICB3aWR0aDogNi4ycmVtO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuZm9ybSNjb21wbGV0aW9uIC5idXR0b25zICNzdWJtaXRCdG4ge1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCAxNjcsIDY5KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy92b2NhYnVsYXJ5L2NvbXBsZXRpb24uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNSOztBQUlJO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFHUTtFQVhKO0lBWVEsWUFBQTtJQUNBLFdBQUE7RUFBVjtBQUNGO0FBRVE7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBWjtBQUVZO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FBQWhCO0FBR1k7RUFDSSxVQUFBO0VBQ0EsMkJBQUE7QUFEaEI7QUFHZ0I7RUFDSSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRHBCO0FBTVE7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFKWjtBQU1ZO0VBQ0ksU0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFKaEI7QUFPWTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFMaEI7QUFPZ0I7RUFDSSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTHBCO0FBVVE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFSWjtBQVVZO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVJoQjtBQVdZO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVRoQjtBQVdnQjtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFUcEI7QUFXb0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFUeEI7QUFXd0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBVDVCO0FBa0JJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBaEJSO0FBa0JRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQWhCWjtBQW1CUTtFQUNJLDRCQUFBO0FBakJaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcInNlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgaDEge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogOC4wcmVtO1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzZXJpZjtcXHJcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTc1JTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5mb3JtI2NvbXBsZXRpb24ge1xcclxcbiAgICBmaWVsZHNldCB7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAxLjJyZW0gMDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiKDE5OCwgMTAsIDMwKTtcXHJcXG4gICAgICAgIGhlaWdodDogNDB2aDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGRsI251bVF1ZXN0aW9uc1NlbGVjdCB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC44NXJlbTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgZHQge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4zMTI1cmVtO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGRkIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgc2VsZWN0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEyLCAxMjgsIDE0NCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDgwJTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICBkbCNjYXRlZ29yeVNlbGVjdCB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC44NXJlbTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBkdCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4zMTI1cmVtO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7ICAgXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICBkZCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICBzZWxlY3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTIsIDEyOCwgMTQ0KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZGwjcXVlc3Rpb25zIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0LjByZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgZHQge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7ICAgXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICBkZCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICB1bCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgbGkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC4zNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIuMHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjByZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idXR0b25zIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbiAgICBcXHJcXG4gICAgICAgIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNi4ycmVtO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgI3N1Ym1pdEJ0biB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDQwLCAxNjcsIDY5KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/vocabulary/completion.scss\n"));

/***/ })

});