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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/verbs/conjugator.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/verbs/conjugator.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"section {\\n  width: 100%;\\n  height: 100%;\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\nsection h1 {\\n  margin-top: 8rem;\\n  text-transform: uppercase;\\n  text-align: center;\\n  padding-bottom: 50px;\\n  font-family: \\\"Open Sans\\\", serif;\\n  text-transform: capitalize;\\n  font-weight: normal;\\n  font-size: 175%;\\n}\\n\\nform#conjugator {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  margin-bottom: 1.5rem;\\n  border-radius: 0.8rem;\\n  padding: 1.2rem 0;\\n  margin: 0 auto;\\n  border: 0.0625rem solid rgb(198, 10, 30);\\n  height: 40vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\nform#conjugator dl#numQuestionsSelect {\\n  padding: 0;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\nform#conjugator dl#numQuestionsSelect dt {\\n  width: 30%;\\n  text-align: right;\\n  margin-top: 0.3125rem;\\n  margin-right: 0.5rem;\\n  text-transform: capitalize;\\n  font-size: 90%;\\n}\\nform#conjugator dl#numQuestionsSelect dd {\\n  width: 30%;\\n  justify-content: flex-start;\\n}\\nform#conjugator dl#numQuestionsSelect dd select {\\n  width: 30%;\\n  border: 1px solid rgb(112, 128, 144);\\n  border-radius: 0.3rem;\\n  padding: 0.4rem;\\n  font-size: 80%;\\n}\\nform#conjugator dl#tenseSelect {\\n  padding: 0;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\nform#conjugator dl#tenseSelect dt {\\n  margin: 0;\\n  margin-top: 0.3125rem;\\n  margin-right: 0.5rem;\\n  padding: 0;\\n  width: 30%;\\n  font-weight: bold;\\n  text-transform: capitalize;\\n  text-align: right;\\n  font-size: 90%;\\n}\\nform#conjugator dl#tenseSelect dd {\\n  margin: 0;\\n  width: 65%;\\n  padding: 0 0.5rem;\\n}\\nform#conjugator dl#tenseSelect dd select {\\n  width: 65%;\\n  border: 1px solid rgb(112, 128, 144);\\n  border-radius: 0.3rem;\\n  padding: 0.4rem;\\n  font-size: 80%;\\n}\\nform#conjugator #headings {\\n  padding-top: 1rem;\\n}\\nform#conjugator #headings h2 {\\n  color: rgb(198, 10, 30);\\n  font-weight: bold;\\n  text-align: center;\\n}\\nform#conjugator #headings h4 {\\n  color: rgb(198, 10, 30);\\n  text-align: center;\\n}\\nform#conjugator #headings h5 {\\n  text-align: center;\\n  margin-bottom: 2rem;\\n  font-weight: bold;\\n}\\nform#conjugator fieldset {\\n  border-radius: 0.8rem;\\n  padding: 1.2rem;\\n  margin: 0 auto;\\n  background: rgb(255, 196, 0);\\n}\\nform#conjugator fieldset dl {\\n  padding: 0;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n}\\nform#conjugator fieldset dl dt {\\n  margin: 0;\\n  margin-top: 5px;\\n  margin-right: 10px;\\n  padding: 0;\\n  width: 30%;\\n  font-weight: bold;\\n  text-transform: capitalize;\\n  text-align: right;\\n  font-size: 90%;\\n}\\nform#conjugator fieldset dl dd {\\n  margin: 0;\\n  padding: 0 0.5rem;\\n  width: 70%;\\n}\\nform#conjugator fieldset dl dd input {\\n  width: 95%;\\n  border: 1px solid rgb(255, 255, 255);\\n  border-radius: 0.3rem;\\n  padding: 0.4rem;\\n  font-size: 80%;\\n}\\nform#conjugator fieldset dl:first-child {\\n  border-top: none;\\n}\\nform#conjugator .buttons {\\n  display: flex;\\n  justify-content: center;\\n  margin-top: 1.5rem;\\n}\\nform#conjugator .buttons input[type=button] {\\n  width: 6.2rem;\\n  padding: 0.4rem;\\n  border-radius: 0.5rem;\\n  color: rgb(255, 255, 255);\\n  border: none;\\n}\\nform#conjugator .buttons #submitBtn {\\n  background: rgb(40, 167, 69);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/verbs/conjugator.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACJ;AACI;EACI,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,oBAAA;EACA,+BAAA;EACA,0BAAA;EACA,mBAAA;EACA,eAAA;AACR;;AAGA;EACI,iCAAA;EACA,qBAAA;EACA,qBAAA;EACA,iBAAA;EACA,cAAA;EACA,wCAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAAJ;AAEI;EACI,UAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAAR;AAEQ;EACI,UAAA;EACA,iBAAA;EACA,qBAAA;EACA,oBAAA;EACA,0BAAA;EACA,cAAA;AAAZ;AAGQ;EACI,UAAA;EACA,2BAAA;AADZ;AAGY;EACI,UAAA;EACA,oCAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AADhB;AAMI;EACI,UAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAJR;AAMQ;EACI,SAAA;EACA,qBAAA;EACA,oBAAA;EACA,UAAA;EACA,UAAA;EACA,iBAAA;EACA,0BAAA;EACA,iBAAA;EACA,cAAA;AAJZ;AAOQ;EACI,SAAA;EACA,UAAA;EACA,iBAAA;AALZ;AAOY;EACI,UAAA;EACA,oCAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AALhB;AAUI;EACI,iBAAA;AARR;AASQ;EACI,uBAAA;EACA,iBAAA;EACA,kBAAA;AAPZ;AAUQ;EACI,uBAAA;EACA,kBAAA;AARZ;AAWQ;EACI,kBAAA;EACA,mBAAA;EACA,iBAAA;AATZ;AAaI;EACI,qBAAA;EACA,eAAA;EACA,cAAA;EACA,4BAAA;AAXR;AAaQ;EACI,UAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;AAXZ;AAaY;EACI,SAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;EACA,iBAAA;EACA,0BAAA;EACA,iBAAA;EACA,cAAA;AAXhB;AAcY;EACI,SAAA;EACA,iBAAA;EACA,UAAA;AAZhB;AAcgB;EACI,UAAA;EACA,oCAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AAZpB;AAiBQ;EACI,gBAAA;AAfZ;AAmBI;EACI,aAAA;EACA,uBAAA;EACA,kBAAA;AAjBR;AAmBQ;EACI,aAAA;EACA,eAAA;EACA,qBAAA;EACA,yBAAA;EACA,YAAA;AAjBZ;AAoBQ;EACI,4BAAA;AAlBZ\",\"sourcesContent\":[\"section {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n\\r\\n    h1 {\\r\\n        margin-top: 8.0rem;\\r\\n        text-transform: uppercase;\\r\\n        text-align: center;\\r\\n        padding-bottom: 50px;\\r\\n        font-family: \\\"Open Sans\\\", serif;\\r\\n        text-transform: capitalize;\\r\\n        font-weight: normal;\\r\\n        font-size: 175%;\\r\\n    }\\r\\n}\\r\\n\\r\\nform#conjugator {\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    margin-bottom: 1.5rem;\\r\\n    border-radius: 0.8rem;\\r\\n    padding: 1.2rem 0;\\r\\n    margin: 0 auto;\\r\\n    border: 0.0625rem solid rgb(198, 10, 30);\\r\\n    height: 40vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    \\r\\n    dl#numQuestionsSelect {\\r\\n        padding: 0;\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        justify-content: center;\\r\\n\\r\\n        dt {\\r\\n            width: 30%;\\r\\n            text-align: right;\\r\\n            margin-top: 0.3125rem;\\r\\n            margin-right: 0.5rem;\\r\\n            text-transform: capitalize;\\r\\n            font-size: 90%;   \\r\\n        }\\r\\n\\r\\n        dd {\\r\\n            width: 30%;\\r\\n            justify-content: flex-start;\\r\\n            \\r\\n            select {\\r\\n                width: 30%;\\r\\n                border: 1px solid rgb(112, 128, 144);\\r\\n                border-radius: 0.3rem;\\r\\n                padding: 0.4rem;\\r\\n                font-size: 80%;\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    dl#tenseSelect {\\r\\n        padding: 0;\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        justify-content: center;\\r\\n                                        \\r\\n        dt {\\r\\n            margin: 0;\\r\\n            margin-top: 0.3125rem;\\r\\n            margin-right: 0.5rem;\\r\\n            padding: 0;\\r\\n            width: 30%;\\r\\n            font-weight: bold;\\r\\n            text-transform: capitalize;\\r\\n            text-align: right;\\r\\n            font-size: 90%;   \\r\\n        }\\r\\n\\r\\n        dd {\\r\\n            margin: 0;\\r\\n            width: 65%;\\r\\n            padding: 0 0.5rem;\\r\\n            \\r\\n            select {\\r\\n                width: 65%;\\r\\n                border: 1px solid rgb(112, 128, 144);\\r\\n                border-radius: 0.3rem;\\r\\n                padding: 0.4rem;\\r\\n                font-size: 80%;\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    #headings {\\r\\n        padding-top: 1.0rem;\\r\\n        h2 {\\r\\n            color: rgb(198, 10, 30);\\r\\n            font-weight: bold;\\r\\n            text-align: center;\\r\\n        }\\r\\n    \\r\\n        h4 {\\r\\n            color: rgb(198, 10, 30);\\r\\n            text-align: center;\\r\\n        }\\r\\n    \\r\\n        h5 {\\r\\n            text-align: center;\\r\\n            margin-bottom: 2.0rem;\\r\\n            font-weight: bold;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    fieldset {\\r\\n        border-radius: 0.8rem;\\r\\n        padding: 1.2rem;\\r\\n        margin: 0 auto;\\r\\n        background:  rgb(255, 196, 0);\\r\\n\\r\\n        dl {\\r\\n            padding: 0;\\r\\n            width: 100%;\\r\\n            display: flex;\\r\\n            flex-direction: row;\\r\\n            justify-content: flex-start;\\r\\n                                            \\r\\n            dt {\\r\\n                margin: 0;\\r\\n                margin-top: 5px;\\r\\n                margin-right: 10px;\\r\\n                padding: 0;\\r\\n                width: 30%;\\r\\n                font-weight: bold;\\r\\n                text-transform: capitalize;\\r\\n                text-align: right;\\r\\n                font-size: 90%;   \\r\\n            }\\r\\n    \\r\\n            dd {\\r\\n                margin: 0;\\r\\n                padding: 0 0.5rem;\\r\\n                width: 70%;    \\r\\n                \\r\\n                input {\\r\\n                    width: 95%;\\r\\n                    border: 1px solid rgb(255, 255, 255);\\r\\n                    border-radius: 0.3rem;\\r\\n                    padding: 0.4rem;\\r\\n                    font-size: 80%;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    \\r\\n        dl:first-child {\\r\\n            border-top: none;\\r\\n        }\\r\\n    }\\r\\n    \\r\\n    .buttons {\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n        margin-top: 1.5rem;\\r\\n    \\r\\n        input[type=\\\"button\\\"] {\\r\\n            width: 6.2rem;\\r\\n            padding: 0.4rem;\\r\\n            border-radius: 0.5rem;\\r\\n            color: rgb(255, 255, 255);\\r\\n            border: none;\\r\\n        }\\r\\n    \\r\\n        #submitBtn {\\r\\n            background: rgb(40, 167, 69);\\r\\n        }\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy92ZXJicy9jb25qdWdhdG9yLnNjc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDMkg7QUFDM0gsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLG1EQUFtRCxnQkFBZ0IsaUJBQWlCLGNBQWMsZUFBZSx3Q0FBd0Msa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyxjQUFjLHFCQUFxQiw4QkFBOEIsdUJBQXVCLHlCQUF5QixzQ0FBc0MsK0JBQStCLHdCQUF3QixvQkFBb0IsR0FBRyxxQkFBcUIsd0NBQXdDLDBCQUEwQiwwQkFBMEIsc0JBQXNCLG1CQUFtQiw2Q0FBNkMsaUJBQWlCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixHQUFHLHlDQUF5QyxlQUFlLGdCQUFnQixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLDRDQUE0QyxlQUFlLHNCQUFzQiwwQkFBMEIseUJBQXlCLCtCQUErQixtQkFBbUIsR0FBRyw0Q0FBNEMsZUFBZSxnQ0FBZ0MsR0FBRyxtREFBbUQsZUFBZSx5Q0FBeUMsMEJBQTBC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QTRDLHdDQUF3QywrQkFBK0IseURBQXlELDBDQUEwQyxvQ0FBb0MsbUNBQW1DLGlCQUFpQixhQUFhLFNBQVMsNEJBQTRCLHVCQUF1Qix3QkFBd0IsMEJBQTBCLGdDQUFnQyxvQ0FBb0MsNERBQTRELDBCQUEwQixzQ0FBc0MscUNBQXFDLDJCQUEyQiwyQkFBMkIsa0NBQWtDLDJDQUEyQyxrQ0FBa0Msa0NBQWtDLGFBQWEsb0JBQW9CLDBCQUEwQiwyQkFBMkIsa0NBQWtDLHdDQUF3QywrQkFBK0IseURBQXlELDBDQUEwQyxvQ0FBb0MsbUNBQW1DLGlCQUFpQixhQUFhLFNBQVMsdUJBQXVCLGdDQUFnQyxnQkFBZ0Isd0NBQXdDLGtDQUFrQyxtQ0FBbUMsYUFBYSx3QkFBd0Isd0NBQXdDLG1DQUFtQyxhQUFhLHdCQUF3QixtQ0FBbUMsc0NBQXNDLGtDQUFrQyxhQUFhLFNBQVMsc0JBQXNCLGtDQUFrQyw0QkFBNEIsMkJBQTJCLDBDQUEwQyxvQkFBb0IsMkJBQTJCLDRCQUE0Qiw4QkFBOEIsb0NBQW9DLDRDQUE0QyxvRUFBb0UsOEJBQThCLG9DQUFvQyx1Q0FBdUMsK0JBQStCLCtCQUErQixzQ0FBc0MsK0NBQStDLHNDQUFzQyxzQ0FBc0MsaUJBQWlCLDRCQUE0Qiw4QkFBOEIsc0NBQXNDLG1DQUFtQywrQ0FBK0MsbUNBQW1DLDZEQUE2RCw4Q0FBOEMsd0NBQXdDLHVDQUF1QyxxQkFBcUIsaUJBQWlCLGFBQWEsb0NBQW9DLGlDQUFpQyxhQUFhLFNBQVMsMEJBQTBCLDBCQUEwQixvQ0FBb0MsK0JBQStCLDRDQUE0Qyw4QkFBOEIsZ0NBQWdDLHNDQUFzQywwQ0FBMEMsNkJBQTZCLGFBQWEsZ0NBQWdDLDZDQUE2QyxhQUFhLFNBQVMsS0FBSyxtQkFBbUI7QUFDdm9UO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3ZlcmJzL2Nvbmp1Z2F0b3Iuc2Nzcz80ZmNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJzZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuc2VjdGlvbiBoMSB7XFxuICBtYXJnaW4tdG9wOiA4cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzZXJpZjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTc1JTtcXG59XFxuXFxuZm9ybSNjb25qdWdhdG9yIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2IoMTk4LCAxMCwgMzApO1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmZvcm0jY29uanVnYXRvciBkbCNudW1RdWVzdGlvbnNTZWxlY3Qge1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9ybSNjb25qdWdhdG9yIGRsI251bVF1ZXN0aW9uc1NlbGVjdCBkdCB7XFxuICB3aWR0aDogMzAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tdG9wOiAwLjMxMjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC1zaXplOiA5MCU7XFxufVxcbmZvcm0jY29uanVnYXRvciBkbCNudW1RdWVzdGlvbnNTZWxlY3QgZGQge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuZm9ybSNjb25qdWdhdG9yIGRsI251bVF1ZXN0aW9uc1NlbGVjdCBkZCBzZWxlY3Qge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTIsIDEyOCwgMTQ0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5mb3JtI2Nvbmp1Z2F0b3IgZGwjdGVuc2VTZWxlY3Qge1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9ybSNjb25qdWdhdG9yIGRsI3RlbnNlU2VsZWN0IGR0IHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDAuMzEyNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAzMCU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmb250LXNpemU6IDkwJTtcXG59XFxuZm9ybSNjb25qdWdhdG9yIGRsI3RlbnNlU2VsZWN0IGRkIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA2NSU7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG59XFxuZm9ybSNjb25qdWdhdG9yIGRsI3RlbnNlU2VsZWN0IGRkIHNlbGVjdCB7XFxuICB3aWR0aDogNjUlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExMiwgMTI4LCAxNDQpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcbmZvcm0jY29uanVnYXRvciAjaGVhZGluZ3Mge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcbmZvcm0jY29uanVnYXRvciAjaGVhZGluZ3MgaDIge1xcbiAgY29sb3I6IHJnYigxOTgsIDEwLCAzMCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZm9ybSNjb25qdWdhdG9yICNoZWFkaW5ncyBoNCB7XFxuICBjb2xvcjogcmdiKDE5OCwgMTAsIDMwKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZm9ybSNjb25qdWdhdG9yICNoZWFkaW5ncyBoNSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmZvcm0jY29uanVnYXRvciBmaWVsZHNldCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxuICBwYWRkaW5nOiAxLjJyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE5NiwgMCk7XFxufVxcbmZvcm0jY29uanVnYXRvciBmaWVsZHNldCBkbCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuZm9ybSNjb25qdWdhdG9yIGZpZWxkc2V0IGRsIGR0IHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMzAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZm9udC1zaXplOiA5MCU7XFxufVxcbmZvcm0jY29uanVnYXRvciBmaWVsZHNldCBkbCBkZCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIHdpZHRoOiA3MCU7XFxufVxcbmZvcm0jY29uanVnYXRvciBmaWVsZHNldCBkbCBkZCBpbnB1dCB7XFxuICB3aWR0aDogOTUlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcbmZvcm0jY29uanVnYXRvciBmaWVsZHNldCBkbDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItdG9wOiBub25lO1xcbn1cXG5mb3JtI2Nvbmp1Z2F0b3IgLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbn1cXG5mb3JtI2Nvbmp1Z2F0b3IgLmJ1dHRvbnMgaW5wdXRbdHlwZT1idXR0b25dIHtcXG4gIHdpZHRoOiA2LjJyZW07XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5mb3JtI2Nvbmp1Z2F0b3IgLmJ1dHRvbnMgI3N1Ym1pdEJ0biB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDE2NywgNjkpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3ZlcmJzL2Nvbmp1Z2F0b3Iuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNSOztBQUdBO0VBQ0ksaUNBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQVI7QUFFUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUFBWjtBQUdRO0VBQ0ksVUFBQTtFQUNBLDJCQUFBO0FBRFo7QUFHWTtFQUNJLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFEaEI7QUFNSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFKUjtBQU1RO0VBQ0ksU0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFKWjtBQU9RO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUxaO0FBT1k7RUFDSSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTGhCO0FBVUk7RUFDSSxpQkFBQTtBQVJSO0FBU1E7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQWjtBQVVRO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtBQVJaO0FBV1E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFUWjtBQWFJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FBWFI7QUFhUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFYWjtBQWFZO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVhoQjtBQWNZO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQVpoQjtBQWNnQjtFQUNJLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFacEI7QUFpQlE7RUFDSSxnQkFBQTtBQWZaO0FBbUJJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFqQlI7QUFtQlE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBakJaO0FBb0JRO0VBQ0ksNEJBQUE7QUFsQlpcIixcInNvdXJjZXNDb250ZW50XCI6W1wic2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA4LjByZW07XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNlcmlmO1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNzUlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmZvcm0jY29uanVnYXRvciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuMnJlbSAwO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiKDE5OCwgMTAsIDMwKTtcXHJcXG4gICAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgIGRsI251bVF1ZXN0aW9uc1NlbGVjdCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgZHQge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4zMTI1cmVtO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlOyAgIFxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZGQge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIHNlbGVjdCB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTIsIDEyOCwgMTQ0KTtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkbCN0ZW5zZVNlbGVjdCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgIGR0IHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4zMTI1cmVtO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDkwJTsgICBcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGRkIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDY1JTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBzZWxlY3Qge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUlO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEyLCAxMjgsIDE0NCk7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDgwJTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2hlYWRpbmdzIHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxLjByZW07XFxyXFxuICAgICAgICBoMiB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYigxOTgsIDEwLCAzMCk7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgIGg0IHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDE5OCwgMTAsIDMwKTtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgaDUge1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjByZW07XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZmllbGRzZXQge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMS4ycmVtO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAgcmdiKDI1NSwgMTk2LCAwKTtcXHJcXG5cXHJcXG4gICAgICAgIGRsIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBkdCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlOyAgIFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgZGQge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlOyAgICBcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDgwJTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICBkbDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmJ1dHRvbnMge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbiAgICBcXHJcXG4gICAgICAgIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNi4ycmVtO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgI3N1Ym1pdEJ0biB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDQwLCAxNjcsIDY5KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/verbs/conjugator.scss\n"));

/***/ })

});