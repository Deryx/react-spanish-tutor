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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/vocabulary/scramble.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/vocabulary/scramble.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"section {\\n  width: 100%;\\n  height: 100%;\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\nsection h1 {\\n  margin-top: 8rem;\\n  text-transform: uppercase;\\n  text-align: center;\\n  padding-bottom: 50px;\\n  font-family: \\\"Open Sans\\\", serif;\\n  text-transform: capitalize;\\n  font-weight: normal;\\n  font-size: 175%;\\n}\\n\\nform#scramble fieldset {\\n  border-radius: 0.8rem;\\n  padding: 1.2rem 0;\\n  margin: 0 auto;\\n  border: 0.0625rem solid rgb(198, 10, 30);\\n}\\nform#scramble fieldset dl#numQuestionsSelect {\\n  padding: 0;\\n  padding-top: 0.85rem;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\nform#scramble fieldset dl#numQuestionsSelect dt {\\n  width: 30%;\\n  text-align: right;\\n  margin-top: 0.3125rem;\\n  margin-right: 0.5rem;\\n  text-transform: capitalize;\\n}\\nform#scramble fieldset dl#numQuestionsSelect dd {\\n  width: 30%;\\n  justify-content: flex-start;\\n}\\nform#scramble fieldset dl#numQuestionsSelect dd select {\\n  width: 30%;\\n  border: 1px solid rgb(112, 128, 144);\\n  border-radius: 0.3rem;\\n  padding: 0.4rem;\\n  font-size: 80%;\\n}\\nform#scramble fieldset dl#categorySelect {\\n  padding: 0;\\n  padding-top: 0.85rem;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\nform#scramble fieldset dl#categorySelect dt {\\n  margin: 0;\\n  margin-top: 0.3125rem;\\n  margin-right: 0.5rem;\\n  padding: 0;\\n  width: 30%;\\n  font-weight: bold;\\n  text-transform: capitalize;\\n  text-align: right;\\n  font-size: 90%;\\n}\\nform#scramble fieldset dl#categorySelect dd {\\n  margin: 0;\\n  width: 65%;\\n  padding: 0 0.5rem;\\n}\\nform#scramble fieldset dl#categorySelect dd select {\\n  width: 65%;\\n  border: 1px solid rgb(112, 128, 144);\\n  border-radius: 0.3rem;\\n  padding: 0.4rem;\\n  font-size: 80%;\\n}\\nform#scramble fieldset dl#questions {\\n  padding: 0;\\n  padding-top: 0.85rem;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\nform#scramble fieldset dl#questions dt {\\n  margin: 0;\\n  margin-top: 5px;\\n  margin-right: 10px;\\n  padding: 0;\\n  width: 100%;\\n  font-weight: bold;\\n  text-transform: lowercase;\\n  text-align: center;\\n  font-size: 90%;\\n}\\nform#scramble fieldset dl#questions dd {\\n  margin: 0;\\n  margin-top: 1.5rem;\\n  padding: 0 0.5rem;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\nform#scramble fieldset dl#questions dd div {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 0 0.1rem;\\n  width: 2.2rem;\\n  height: 2rem;\\n  background: rgb(198, 10, 30);\\n  color: rgb(255, 196, 0);\\n  border-radius: 0.3rem;\\n}\\nform#scramble .draggable {\\n  cursor: move;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n}\\nform#scramble .buttons {\\n  margin-top: 1.5rem;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\nform#scramble .buttons input[type=button] {\\n  width: 6.2rem;\\n  padding: 0.4rem;\\n  border-radius: 0.5rem;\\n  color: rgb(255, 255, 255);\\n  border: none;\\n}\\nform#scramble .buttons #submitBtn {\\n  background: rgb(40, 167, 69);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/vocabulary/scramble.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACJ;AACI;EACI,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,oBAAA;EACA,+BAAA;EACA,0BAAA;EACA,mBAAA;EACA,eAAA;AACR;;AAII;EACI,qBAAA;EACA,iBAAA;EACA,cAAA;EACA,wCAAA;AADR;AAGQ;EACI,UAAA;EACA,oBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AADZ;AAGY;EACI,UAAA;EACA,iBAAA;EACA,qBAAA;EACA,oBAAA;EACA,0BAAA;AADhB;AAIY;EACI,UAAA;EACA,2BAAA;AAFhB;AAIgB;EACI,UAAA;EACA,oCAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AAFpB;AAOQ;EACI,UAAA;EACA,oBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AALZ;AAOY;EACI,SAAA;EACA,qBAAA;EACA,oBAAA;EACA,UAAA;EACA,UAAA;EACA,iBAAA;EACA,0BAAA;EACA,iBAAA;EACA,cAAA;AALhB;AAQY;EACI,SAAA;EACA,UAAA;EACA,iBAAA;AANhB;AAQgB;EACI,UAAA;EACA,oCAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AANpB;AAWQ;EACI,UAAA;EACA,oBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AATZ;AAWY;EACI,SAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,iBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;AAThB;AAYY;EACI,SAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAVhB;AAYgB;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;EACA,4BAAA;EACA,uBAAA;EACA,qBAAA;AAVpB;AAgBI;EACI,YAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AAdR;AAiBI;EACI,kBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;AAfR;AAiBQ;EACI,aAAA;EACA,eAAA;EACA,qBAAA;EACA,yBAAA;EACA,YAAA;AAfZ;AAkBQ;EACI,4BAAA;AAhBZ\",\"sourcesContent\":[\"section {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n\\r\\n    h1 {\\r\\n        margin-top: 8.0rem;\\r\\n        text-transform: uppercase;\\r\\n        text-align: center;\\r\\n        padding-bottom: 50px;\\r\\n        font-family: \\\"Open Sans\\\", serif;\\r\\n        text-transform: capitalize;\\r\\n        font-weight: normal;\\r\\n        font-size: 175%;\\r\\n    }\\r\\n}\\r\\n\\r\\nform#scramble {\\r\\n    fieldset {\\r\\n        border-radius: 0.8rem;\\r\\n        padding: 1.2rem 0;\\r\\n        margin: 0 auto;\\r\\n        border: 0.0625rem solid rgb(198, 10, 30);\\r\\n        \\r\\n        dl#numQuestionsSelect {\\r\\n            padding: 0;\\r\\n            padding-top: 0.85rem;\\r\\n            width: 100%;\\r\\n            display: flex;\\r\\n            flex-direction: row;\\r\\n            justify-content: center;\\r\\n\\r\\n            dt {\\r\\n                width: 30%;\\r\\n                text-align: right;\\r\\n                margin-top: 0.3125rem;\\r\\n                margin-right: 0.5rem;\\r\\n                text-transform: capitalize;\\r\\n            }\\r\\n\\r\\n            dd {\\r\\n                width: 30%;\\r\\n                justify-content: flex-start;\\r\\n                \\r\\n                select {\\r\\n                    width: 30%;\\r\\n                    border: 1px solid rgb(112, 128, 144);\\r\\n                    border-radius: 0.3rem;\\r\\n                    padding: 0.4rem;\\r\\n                    font-size: 80%;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    \\r\\n        dl#categorySelect {\\r\\n            padding: 0;\\r\\n            padding-top: 0.85rem;\\r\\n            width: 100%;\\r\\n            display: flex;\\r\\n            flex-direction: row;\\r\\n            justify-content: center;\\r\\n                                            \\r\\n            dt {\\r\\n                margin: 0;\\r\\n                margin-top: 0.3125rem;\\r\\n                margin-right: 0.5rem;\\r\\n                padding: 0;\\r\\n                width: 30%;\\r\\n                font-weight: bold;\\r\\n                text-transform: capitalize;\\r\\n                text-align: right;\\r\\n                font-size: 90%;   \\r\\n            }\\r\\n    \\r\\n            dd {\\r\\n                margin: 0;\\r\\n                width: 65%;\\r\\n                padding: 0 0.5rem;\\r\\n                \\r\\n                select {\\r\\n                    width: 65%;\\r\\n                    border: 1px solid rgb(112, 128, 144);\\r\\n                    border-radius: 0.3rem;\\r\\n                    padding: 0.4rem;\\r\\n                    font-size: 80%;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n\\r\\n        dl#questions {\\r\\n            padding: 0;\\r\\n            padding-top: 0.85rem;\\r\\n            width: 100%;\\r\\n            display: flex;\\r\\n            flex-direction: column;\\r\\n            justify-content: center;\\r\\n                                            \\r\\n            dt {\\r\\n                margin: 0;\\r\\n                margin-top: 5px;\\r\\n                margin-right: 10px;\\r\\n                padding: 0;\\r\\n                width: 100%;\\r\\n                font-weight: bold;\\r\\n                text-transform: lowercase;\\r\\n                text-align: center;\\r\\n                font-size: 90%;   \\r\\n            }\\r\\n                     \\r\\n            dd {\\r\\n                margin: 0;\\r\\n                margin-top: 1.5rem;\\r\\n                padding: 0 0.5rem;\\r\\n                display: flex;\\r\\n                flex-direction: row; \\r\\n                justify-content: center;\\r\\n\\r\\n                div {\\r\\n                    display: flex;\\r\\n                    justify-content: center;\\r\\n                    align-items: center;\\r\\n                    margin: 0 0.1rem;\\r\\n                    width: 2.2rem;\\r\\n                    height: 2.0rem;\\r\\n                    background: rgb(198, 10, 30);\\r\\n                    color: rgb(255, 196, 0);\\r\\n                    border-radius: 0.3rem;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    .draggable {\\r\\n        cursor: move;\\r\\n        user-select: none;\\r\\n    }\\r\\n\\r\\n    .buttons {\\r\\n        margin-top: 1.5rem;\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n    \\r\\n        input[type=\\\"button\\\"] {\\r\\n            width: 6.2rem;\\r\\n            padding: 0.4rem;\\r\\n            border-radius: 0.5rem;\\r\\n            color: rgb(255, 255, 255);\\r\\n            border: none;\\r\\n        }\\r\\n    \\r\\n        #submitBtn {\\r\\n            background: rgb(40, 167, 69);\\r\\n        }\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy92b2NhYnVsYXJ5L3NjcmFtYmxlLnNjc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDMkg7QUFDM0gsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLG1EQUFtRCxnQkFBZ0IsaUJBQWlCLGNBQWMsZUFBZSx3Q0FBd0Msa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyxjQUFjLHFCQUFxQiw4QkFBOEIsdUJBQXVCLHlCQUF5QixzQ0FBc0MsK0JBQStCLHdCQUF3QixvQkFBb0IsR0FBRyw0QkFBNEIsMEJBQTBCLHNCQUFzQixtQkFBbUIsNkNBQTZDLEdBQUcsZ0RBQWdELGVBQWUseUJBQXlCLGdCQUFnQixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLG1EQUFtRCxlQUFlLHNCQUFzQiwwQkFBMEIseUJBQXlCLCtCQUErQixHQUFHLG1EQUFtRCxlQUFlLGdDQUFnQyxHQUFHLDBEQUEwRCxlQUFlLHlDQUF5QywwQkFBMEIsb0JBQW9CLG1CQUFtQixHQUFHLDRDQUE0QyxlQUFlLHlCQUF5QixnQkFBZ0Is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Q0FBc0MsZ0RBQWdELG1DQUFtQyw2REFBNkQsOENBQThDLHdDQUF3Qyx1Q0FBdUMscUJBQXFCLGlCQUFpQixhQUFhLDhCQUE4QiwyQkFBMkIscUNBQXFDLDRCQUE0Qiw4QkFBOEIsdUNBQXVDLHdDQUF3QyxvRUFBb0UsOEJBQThCLG9DQUFvQyx1Q0FBdUMsK0JBQStCLGdDQUFnQyxzQ0FBc0MsOENBQThDLHVDQUF1QyxzQ0FBc0MsaUJBQWlCLDZDQUE2Qyw4QkFBOEIsdUNBQXVDLHNDQUFzQyxrQ0FBa0MseUNBQXlDLDRDQUE0Qyw2QkFBNkIsc0NBQXNDLGdEQUFnRCw0Q0FBNEMseUNBQXlDLHNDQUFzQyx1Q0FBdUMscURBQXFELGdEQUFnRCw4Q0FBOEMscUJBQXFCLGlCQUFpQixhQUFhLFNBQVMsd0JBQXdCLHlCQUF5Qiw4QkFBOEIsU0FBUyxzQkFBc0IsK0JBQStCLHdCQUF3QiwwQkFBMEIsb0NBQW9DLDRDQUE0Qyw4QkFBOEIsZ0NBQWdDLHNDQUFzQywwQ0FBMEMsNkJBQTZCLGFBQWEsZ0NBQWdDLDZDQUE2QyxhQUFhLFNBQVMsS0FBSyxtQkFBbUI7QUFDanNTO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3ZvY2FidWxhcnkvc2NyYW1ibGUuc2Nzcz84YjFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJzZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuc2VjdGlvbiBoMSB7XFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzZXJpZjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTc1JTtcXG59XFxuXFxuZm9ybSNzY3JhbWJsZSBmaWVsZHNldCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxuICBwYWRkaW5nOiAxLjJyZW0gMDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiKDE5OCwgMTAsIDMwKTtcXG59XFxuZm9ybSNzY3JhbWJsZSBmaWVsZHNldCBkbCNudW1RdWVzdGlvbnNTZWxlY3Qge1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZGRpbmctdG9wOiAwLjg1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5mb3JtI3NjcmFtYmxlIGZpZWxkc2V0IGRsI251bVF1ZXN0aW9uc1NlbGVjdCBkdCB7XFxuICB3aWR0aDogMzAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tdG9wOiAwLjMxMjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5mb3JtI3NjcmFtYmxlIGZpZWxkc2V0IGRsI251bVF1ZXN0aW9uc1NlbGVjdCBkZCB7XFxuICB3aWR0aDogMzAlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5mb3JtI3NjcmFtYmxlIGZpZWxkc2V0IGRsI251bVF1ZXN0aW9uc1NlbGVjdCBkZCBzZWxlY3Qge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTIsIDEyOCwgMTQ0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5mb3JtI3NjcmFtYmxlIGZpZWxkc2V0IGRsI2NhdGVnb3J5U2VsZWN0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLXRvcDogMC44NXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9ybSNzY3JhbWJsZSBmaWVsZHNldCBkbCNjYXRlZ29yeVNlbGVjdCBkdCB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tdG9wOiAwLjMxMjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMzAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZm9udC1zaXplOiA5MCU7XFxufVxcbmZvcm0jc2NyYW1ibGUgZmllbGRzZXQgZGwjY2F0ZWdvcnlTZWxlY3QgZGQge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDY1JTtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbn1cXG5mb3JtI3NjcmFtYmxlIGZpZWxkc2V0IGRsI2NhdGVnb3J5U2VsZWN0IGRkIHNlbGVjdCB7XFxuICB3aWR0aDogNjUlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExMiwgMTI4LCAxNDQpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcbmZvcm0jc2NyYW1ibGUgZmllbGRzZXQgZGwjcXVlc3Rpb25zIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLXRvcDogMC44NXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9ybSNzY3JhbWJsZSBmaWVsZHNldCBkbCNxdWVzdGlvbnMgZHQge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA5MCU7XFxufVxcbmZvcm0jc2NyYW1ibGUgZmllbGRzZXQgZGwjcXVlc3Rpb25zIGRkIHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9ybSNzY3JhbWJsZSBmaWVsZHNldCBkbCNxdWVzdGlvbnMgZGQgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMC4xcmVtO1xcbiAgd2lkdGg6IDIuMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJhY2tncm91bmQ6IHJnYigxOTgsIDEwLCAzMCk7XFxuICBjb2xvcjogcmdiKDI1NSwgMTk2LCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuZm9ybSNzY3JhbWJsZSAuZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbmZvcm0jc2NyYW1ibGUgLmJ1dHRvbnMge1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmZvcm0jc2NyYW1ibGUgLmJ1dHRvbnMgaW5wdXRbdHlwZT1idXR0b25dIHtcXG4gIHdpZHRoOiA2LjJyZW07XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5mb3JtI3NjcmFtYmxlIC5idXR0b25zICNzdWJtaXRCdG4ge1xcbiAgYmFja2dyb3VuZDogcmdiKDQwLCAxNjcsIDY5KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy92b2NhYnVsYXJ5L3NjcmFtYmxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDUjs7QUFJSTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7QUFEUjtBQUdRO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRFo7QUFHWTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQURoQjtBQUlZO0VBQ0ksVUFBQTtFQUNBLDJCQUFBO0FBRmhCO0FBSWdCO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUZwQjtBQU9RO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTFo7QUFPWTtFQUNJLFNBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBTGhCO0FBUVk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBTmhCO0FBUWdCO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQU5wQjtBQVdRO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBVFo7QUFXWTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFUaEI7QUFZWTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFWaEI7QUFZZ0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFWcEI7QUFnQkk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUFkUjtBQWlCSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQWZSO0FBaUJRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQWZaO0FBa0JRO0VBQ0ksNEJBQUE7QUFoQlpcIixcInNvdXJjZXNDb250ZW50XCI6W1wic2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA4LjByZW07XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNlcmlmO1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNzUlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmZvcm0jc2NyYW1ibGUge1xcclxcbiAgICBmaWVsZHNldCB7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAxLjJyZW0gMDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiKDE5OCwgMTAsIDMwKTtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgZGwjbnVtUXVlc3Rpb25zU2VsZWN0IHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjg1cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBkdCB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjMxMjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgZGQge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICBzZWxlY3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTIsIDEyOCwgMTQ0KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgIGRsI2NhdGVnb3J5U2VsZWN0IHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjg1cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIGR0IHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjMxMjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDkwJTsgICBcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgIGRkIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUlO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIHNlbGVjdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjUlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExMiwgMTI4LCAxNDQpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4MCU7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBkbCNxdWVzdGlvbnMge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuODVyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgZHQge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7ICAgXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIGRkIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGRpdiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyLjJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuMHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxOTgsIDEwLCAzMCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMTk2LCAwKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZHJhZ2dhYmxlIHtcXHJcXG4gICAgICAgIGN1cnNvcjogbW92ZTtcXHJcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idXR0b25zIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgICAgIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNi4ycmVtO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgI3N1Ym1pdEJ0biB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDQwLCAxNjcsIDY5KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/vocabulary/scramble.scss\n"));

/***/ })

});