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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/vocabulary/quiz.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/vocabulary/quiz.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"section {\\n  width: 100%;\\n  height: 100%;\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\nsection h1 {\\n  margin-top: 8rem;\\n  text-transform: uppercase;\\n  text-align: center;\\n  padding-bottom: 50px;\\n  font-family: \\\"Open Sans\\\", serif;\\n  text-transform: capitalize;\\n  font-weight: normal;\\n  font-size: 175%;\\n}\\n\\nform#quiz fieldset {\\n  border-radius: 0.8rem;\\n  padding: 1.2rem 0;\\n  margin: 0 auto;\\n  border: 0.0625rem solid rgb(198, 10, 30);\\n}\\nform#quiz fieldset dl#numQuestionsSelect {\\n  padding: 0;\\n  padding-top: 0.85rem;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\nform#quiz fieldset dl#numQuestionsSelect dt {\\n  width: 30%;\\n  text-align: right;\\n  margin-top: 0.3125rem;\\n  margin-right: 0.5rem;\\n  text-transform: capitalize;\\n}\\nform#quiz fieldset dl#numQuestionsSelect dd {\\n  width: 30%;\\n  justify-content: flex-start;\\n}\\nform#quiz fieldset dl#numQuestionsSelect dd select {\\n  width: 30%;\\n  border: 1px solid rgb(112, 128, 144);\\n  border-radius: 0.3rem;\\n  padding: 0.4rem;\\n  font-size: 80%;\\n}\\nform#quiz fieldset dl#categorySelect {\\n  padding: 0;\\n  padding-top: 0.85rem;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\nform#quiz fieldset dl#categorySelect dt {\\n  margin: 0;\\n  margin-top: 0.3125rem;\\n  margin-right: 0.5rem;\\n  padding: 0;\\n  width: 30%;\\n  font-weight: bold;\\n  text-transform: capitalize;\\n  text-align: right;\\n  font-size: 90%;\\n}\\nform#quiz fieldset dl#categorySelect dd {\\n  margin: 0;\\n  width: 65%;\\n  padding: 0 0.5rem;\\n}\\nform#quiz fieldset dl#categorySelect dd select {\\n  width: 65%;\\n  border: 1px solid rgb(112, 128, 144);\\n  border-radius: 0.3rem;\\n  padding: 0.4rem;\\n  font-size: 80%;\\n}\\nform#quiz fieldset dl#questions {\\n  padding: 0;\\n  padding-top: 1rem;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\nform#quiz fieldset dl#questions dt {\\n  margin: 0;\\n  margin-right: 10px;\\n  padding: 0;\\n  width: 100%;\\n  font-weight: bold;\\n  text-transform: lowercase;\\n  text-align: center;\\n  font-size: 150%;\\n  color: rgb(198, 10, 30);\\n}\\nform#quiz fieldset dl#questions dd {\\n  margin: 0;\\n  margin-top: 0.5rem;\\n  padding: 0 0.5rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\nform#quiz fieldset dl#questions dd div {\\n  display: flex;\\n  flex: 1 1;\\n  margin-left: 45%;\\n  margin-bottom: 0.5rem;\\n}\\nform#quiz fieldset dl#questions dd div input {\\n  margin-right: 0.5rem;\\n}\\nform#quiz .buttons {\\n  margin-top: 1.5rem;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\nform#quiz .buttons input[type=button] {\\n  width: 6.2rem;\\n  padding: 0.4rem;\\n  border-radius: 0.5rem;\\n  color: rgb(255, 255, 255);\\n  border: none;\\n}\\nform#quiz .buttons #submitBtn {\\n  background: rgb(40, 167, 69);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/vocabulary/quiz.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACJ;AACI;EACI,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,oBAAA;EACA,+BAAA;EACA,0BAAA;EACA,mBAAA;EACA,eAAA;AACR;;AAII;EACI,qBAAA;EACA,iBAAA;EACA,cAAA;EACA,wCAAA;AADR;AAGQ;EACI,UAAA;EACA,oBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AADZ;AAGY;EACI,UAAA;EACA,iBAAA;EACA,qBAAA;EACA,oBAAA;EACA,0BAAA;AADhB;AAIY;EACI,UAAA;EACA,2BAAA;AAFhB;AAIgB;EACI,UAAA;EACA,oCAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AAFpB;AAOQ;EACI,UAAA;EACA,oBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AALZ;AAOY;EACI,SAAA;EACA,qBAAA;EACA,oBAAA;EACA,UAAA;EACA,UAAA;EACA,iBAAA;EACA,0BAAA;EACA,iBAAA;EACA,cAAA;AALhB;AAQY;EACI,SAAA;EACA,UAAA;EACA,iBAAA;AANhB;AAQgB;EACI,UAAA;EACA,oCAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AANpB;AAWQ;EACI,UAAA;EACA,iBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AATZ;AAWY;EACI,SAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,iBAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,uBAAA;AAThB;AAYY;EACI,SAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AAVhB;AAYgB;EACI,aAAA;EACA,SAAA;EACA,gBAAA;EACA,qBAAA;AAVpB;AAYoB;EACI,oBAAA;AAVxB;AAkBI;EACI,kBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;AAhBR;AAkBQ;EACI,aAAA;EACA,eAAA;EACA,qBAAA;EACA,yBAAA;EACA,YAAA;AAhBZ;AAmBQ;EACI,4BAAA;AAjBZ\",\"sourcesContent\":[\"section {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n\\r\\n    h1 {\\r\\n        margin-top: 8.0rem;\\r\\n        text-transform: uppercase;\\r\\n        text-align: center;\\r\\n        padding-bottom: 50px;\\r\\n        font-family: \\\"Open Sans\\\", serif;\\r\\n        text-transform: capitalize;\\r\\n        font-weight: normal;\\r\\n        font-size: 175%;\\r\\n    }\\r\\n}\\r\\n\\r\\nform#quiz {\\r\\n    fieldset {\\r\\n        border-radius: 0.8rem;\\r\\n        padding: 1.2rem 0;\\r\\n        margin: 0 auto;\\r\\n        border: 0.0625rem solid rgb(198, 10, 30);\\r\\n        \\r\\n        dl#numQuestionsSelect {\\r\\n            padding: 0;\\r\\n            padding-top: 0.85rem;\\r\\n            width: 100%;\\r\\n            display: flex;\\r\\n            flex-direction: row;\\r\\n            justify-content: center;\\r\\n\\r\\n            dt {\\r\\n                width: 30%;\\r\\n                text-align: right;\\r\\n                margin-top: 0.3125rem;\\r\\n                margin-right: 0.5rem;\\r\\n                text-transform: capitalize;\\r\\n            }\\r\\n\\r\\n            dd {\\r\\n                width: 30%;\\r\\n                justify-content: flex-start;\\r\\n                \\r\\n                select {\\r\\n                    width: 30%;\\r\\n                    border: 1px solid rgb(112, 128, 144);\\r\\n                    border-radius: 0.3rem;\\r\\n                    padding: 0.4rem;\\r\\n                    font-size: 80%;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    \\r\\n        dl#categorySelect {\\r\\n            padding: 0;\\r\\n            padding-top: 0.85rem;\\r\\n            width: 100%;\\r\\n            display: flex;\\r\\n            flex-direction: row;\\r\\n            justify-content: center;\\r\\n                                            \\r\\n            dt {\\r\\n                margin: 0;\\r\\n                margin-top: 0.3125rem;\\r\\n                margin-right: 0.5rem;\\r\\n                padding: 0;\\r\\n                width: 30%;\\r\\n                font-weight: bold;\\r\\n                text-transform: capitalize;\\r\\n                text-align: right;\\r\\n                font-size: 90%;   \\r\\n            }\\r\\n    \\r\\n            dd {\\r\\n                margin: 0;\\r\\n                width: 65%;\\r\\n                padding: 0 0.5rem;\\r\\n                \\r\\n                select {\\r\\n                    width: 65%;\\r\\n                    border: 1px solid rgb(112, 128, 144);\\r\\n                    border-radius: 0.3rem;\\r\\n                    padding: 0.4rem;\\r\\n                    font-size: 80%;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n\\r\\n        dl#questions {\\r\\n            padding: 0;\\r\\n            padding-top: 1.0rem;\\r\\n            width: 100%;\\r\\n            display: flex;\\r\\n            flex-direction: column;\\r\\n            justify-content: center;\\r\\n                                            \\r\\n            dt {\\r\\n                margin: 0;\\r\\n                margin-right: 10px;\\r\\n                padding: 0;\\r\\n                width: 100%;\\r\\n                font-weight: bold;\\r\\n                text-transform: lowercase;\\r\\n                text-align: center;\\r\\n                font-size: 150%;   \\r\\n                color: rgb(198, 10, 30);\\r\\n            }\\r\\n    \\r\\n            dd {\\r\\n                margin: 0;\\r\\n                margin-top: 0.5rem;\\r\\n                padding: 0 0.5rem;\\r\\n                display: flex;\\r\\n                flex-direction: column; \\r\\n                justify-content: center;\\r\\n\\r\\n                div {\\r\\n                    display: flex;\\r\\n                    flex: 1 1 0;\\r\\n                    margin-left: 45%;\\r\\n                    margin-bottom: 0.5rem;\\r\\n\\r\\n                    input {\\r\\n                        margin-right: 0.5rem;\\r\\n                    }\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    \\r\\n    }\\r\\n\\r\\n    .buttons {\\r\\n        margin-top: 1.5rem;\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n    \\r\\n        input[type=\\\"button\\\"] {\\r\\n            width: 6.2rem;\\r\\n            padding: 0.4rem;\\r\\n            border-radius: 0.5rem;\\r\\n            color: rgb(255, 255, 255);\\r\\n            border: none;\\r\\n        }\\r\\n    \\r\\n        #submitBtn {\\r\\n            background: rgb(40, 167, 69);\\r\\n        }\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy92b2NhYnVsYXJ5L3F1aXouc2Nzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsbURBQW1ELGdCQUFnQixpQkFBaUIsY0FBYyxlQUFlLHdDQUF3QyxrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLGNBQWMscUJBQXFCLDhCQUE4Qix1QkFBdUIseUJBQXlCLHNDQUFzQywrQkFBK0Isd0JBQXdCLG9CQUFvQixHQUFHLHdCQUF3QiwwQkFBMEIsc0JBQXNCLG1CQUFtQiw2Q0FBNkMsR0FBRyw0Q0FBNEMsZUFBZSx5QkFBeUIsZ0JBQWdCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsK0NBQStDLGVBQWUsc0JBQXNCLDBCQUEwQix5QkFBeUIsK0JBQStCLEdBQUcsK0NBQStDLGVBQWUsZ0NBQWdDLEdBQUcsc0RBQXNELGVBQWUseUNBQXlDLDBCQUEwQixvQkFBb0IsbUJBQW1CLEdBQUcsd0NBQXdDLGVBQWUseUJBQXlCLGdCQUFnQixrQkFB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QyxvRUFBb0UsOEJBQThCLHVDQUF1QywrQkFBK0IsZ0NBQWdDLHNDQUFzQyw4Q0FBOEMsdUNBQXVDLHVDQUF1Qyw0Q0FBNEMsaUJBQWlCLDRCQUE0Qiw4QkFBOEIsdUNBQXVDLHNDQUFzQyxrQ0FBa0MsNENBQTRDLDRDQUE0Qyw2QkFBNkIsc0NBQXNDLG9DQUFvQyx5Q0FBeUMsOENBQThDLG1DQUFtQyxpREFBaUQseUJBQXlCLHFCQUFxQixpQkFBaUIsYUFBYSxpQkFBaUIsc0JBQXNCLCtCQUErQix3QkFBd0IsMEJBQTBCLG9DQUFvQyw0Q0FBNEMsOEJBQThCLGdDQUFnQyxzQ0FBc0MsMENBQTBDLDZCQUE2QixhQUFhLGdDQUFnQyw2Q0FBNkMsYUFBYSxTQUFTLEtBQUssbUJBQW1CO0FBQ2huUjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy92b2NhYnVsYXJ5L3F1aXouc2Nzcz9mOWMzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJzZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuc2VjdGlvbiBoMSB7XFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzZXJpZjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTc1JTtcXG59XFxuXFxuZm9ybSNxdWl6IGZpZWxkc2V0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2IoMTk4LCAxMCwgMzApO1xcbn1cXG5mb3JtI3F1aXogZmllbGRzZXQgZGwjbnVtUXVlc3Rpb25zU2VsZWN0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLXRvcDogMC44NXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9ybSNxdWl6IGZpZWxkc2V0IGRsI251bVF1ZXN0aW9uc1NlbGVjdCBkdCB7XFxuICB3aWR0aDogMzAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tdG9wOiAwLjMxMjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5mb3JtI3F1aXogZmllbGRzZXQgZGwjbnVtUXVlc3Rpb25zU2VsZWN0IGRkIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbmZvcm0jcXVpeiBmaWVsZHNldCBkbCNudW1RdWVzdGlvbnNTZWxlY3QgZGQgc2VsZWN0IHtcXG4gIHdpZHRoOiAzMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEyLCAxMjgsIDE0NCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuZm9ybSNxdWl6IGZpZWxkc2V0IGRsI2NhdGVnb3J5U2VsZWN0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLXRvcDogMC44NXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9ybSNxdWl6IGZpZWxkc2V0IGRsI2NhdGVnb3J5U2VsZWN0IGR0IHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDAuMzEyNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAzMCU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmb250LXNpemU6IDkwJTtcXG59XFxuZm9ybSNxdWl6IGZpZWxkc2V0IGRsI2NhdGVnb3J5U2VsZWN0IGRkIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA2NSU7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG59XFxuZm9ybSNxdWl6IGZpZWxkc2V0IGRsI2NhdGVnb3J5U2VsZWN0IGRkIHNlbGVjdCB7XFxuICB3aWR0aDogNjUlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExMiwgMTI4LCAxNDQpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcbmZvcm0jcXVpeiBmaWVsZHNldCBkbCNxdWVzdGlvbnMge1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5mb3JtI3F1aXogZmllbGRzZXQgZGwjcXVlc3Rpb25zIGR0IHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXG4gIGNvbG9yOiByZ2IoMTk4LCAxMCwgMzApO1xcbn1cXG5mb3JtI3F1aXogZmllbGRzZXQgZGwjcXVlc3Rpb25zIGRkIHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9ybSNxdWl6IGZpZWxkc2V0IGRsI3F1ZXN0aW9ucyBkZCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMTtcXG4gIG1hcmdpbi1sZWZ0OiA0NSU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbmZvcm0jcXVpeiBmaWVsZHNldCBkbCNxdWVzdGlvbnMgZGQgZGl2IGlucHV0IHtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5mb3JtI3F1aXogLmJ1dHRvbnMge1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmZvcm0jcXVpeiAuYnV0dG9ucyBpbnB1dFt0eXBlPWJ1dHRvbl0ge1xcbiAgd2lkdGg6IDYuMnJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbmZvcm0jcXVpeiAuYnV0dG9ucyAjc3VibWl0QnRuIHtcXG4gIGJhY2tncm91bmQ6IHJnYig0MCwgMTY3LCA2OSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvdm9jYWJ1bGFyeS9xdWl6LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDUjs7QUFJSTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7QUFEUjtBQUdRO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRFo7QUFHWTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQURoQjtBQUlZO0VBQ0ksVUFBQTtFQUNBLDJCQUFBO0FBRmhCO0FBSWdCO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUZwQjtBQU9RO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTFo7QUFPWTtFQUNJLFNBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBTGhCO0FBUVk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBTmhCO0FBUWdCO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQU5wQjtBQVdRO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBVFo7QUFXWTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBVGhCO0FBWVk7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBVmhCO0FBWWdCO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBVnBCO0FBWW9CO0VBQ0ksb0JBQUE7QUFWeEI7QUFrQkk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFoQlI7QUFrQlE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBaEJaO0FBbUJRO0VBQ0ksNEJBQUE7QUFqQlpcIixcInNvdXJjZXNDb250ZW50XCI6W1wic2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA4LjByZW07XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNlcmlmO1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNzUlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmZvcm0jcXVpeiB7XFxyXFxuICAgIGZpZWxkc2V0IHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEuMnJlbSAwO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2IoMTk4LCAxMCwgMzApO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBkbCNudW1RdWVzdGlvbnNTZWxlY3Qge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuODVyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgIGR0IHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMzEyNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBkZCB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIHNlbGVjdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExMiwgMTI4LCAxNDQpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4MCU7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgZGwjY2F0ZWdvcnlTZWxlY3Qge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuODVyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgZHQge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMzEyNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlOyAgIFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgZGQge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgc2VsZWN0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEyLCAxMjgsIDE0NCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDgwJTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGRsI3F1ZXN0aW9ucyB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMS4wcmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIGR0IHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1MCU7ICAgXFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTk4LCAxMCwgMzApO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgZGQge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0NSU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idXR0b25zIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgICAgIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNi4ycmVtO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgI3N1Ym1pdEJ0biB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDQwLCAxNjcsIDY5KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/vocabulary/quiz.scss\n"));

/***/ })

});