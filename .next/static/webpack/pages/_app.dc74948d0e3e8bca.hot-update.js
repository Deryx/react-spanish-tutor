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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"section {\\n  width: 100%;\\n  height: 100%;\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\nsection h1 {\\n  margin-top: 8rem;\\n  text-transform: uppercase;\\n  text-align: center;\\n  padding-bottom: 50px;\\n  font-family: \\\"Open Sans\\\", serif;\\n  text-transform: capitalize;\\n  font-weight: normal;\\n  font-size: 175%;\\n}\\n\\nform#conjugator {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  margin-bottom: 1.5rem;\\n  border-radius: 0.8rem;\\n  padding: 1.2rem 0;\\n  padding-bottom: 2.5rem;\\n  margin: 0 auto;\\n  border: 0.0625rem solid rgb(198, 10, 30);\\n  height: 60vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\nform#conjugator dl#numQuestionsSelect {\\n  padding: 0;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\nform#conjugator dl#numQuestionsSelect dt {\\n  width: 30%;\\n  text-align: right;\\n  margin-top: 0.3125rem;\\n  margin-right: 0.5rem;\\n  text-transform: capitalize;\\n  font-size: 90%;\\n}\\nform#conjugator dl#numQuestionsSelect dd {\\n  width: 30%;\\n  justify-content: flex-start;\\n}\\nform#conjugator dl#numQuestionsSelect dd select {\\n  width: 30%;\\n  border: 1px solid rgb(112, 128, 144);\\n  border-radius: 0.3rem;\\n  padding: 0.4rem;\\n  font-size: 80%;\\n}\\nform#conjugator dl#tenseSelect {\\n  padding: 0;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\nform#conjugator dl#tenseSelect dt {\\n  margin: 0;\\n  margin-top: 0.3125rem;\\n  margin-right: 0.5rem;\\n  padding: 0;\\n  width: 30%;\\n  font-weight: bold;\\n  text-transform: capitalize;\\n  text-align: right;\\n  font-size: 90%;\\n}\\nform#conjugator dl#tenseSelect dd {\\n  margin: 0;\\n  width: 65%;\\n  padding: 0 0.5rem;\\n}\\nform#conjugator dl#tenseSelect dd select {\\n  width: 65%;\\n  border: 1px solid rgb(112, 128, 144);\\n  border-radius: 0.3rem;\\n  padding: 0.4rem;\\n  font-size: 80%;\\n}\\nform#conjugator #headings {\\n  padding-top: 1rem;\\n}\\nform#conjugator #headings h2 {\\n  color: rgb(198, 10, 30);\\n  font-weight: bold;\\n  text-align: center;\\n}\\nform#conjugator #headings h4 {\\n  color: rgb(198, 10, 30);\\n  text-align: center;\\n}\\nform#conjugator #headings h5 {\\n  text-align: center;\\n  margin-bottom: 2rem;\\n  font-weight: bold;\\n}\\nform#conjugator fieldset {\\n  border-radius: 0.8rem;\\n  padding: 1.2rem;\\n  margin: 0 auto;\\n  background: rgb(255, 196, 0);\\n}\\nform#conjugator fieldset dl {\\n  padding: 0;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n}\\nform#conjugator fieldset dl dt {\\n  margin: 0;\\n  margin-top: 5px;\\n  margin-right: 10px;\\n  padding: 0;\\n  width: 30%;\\n  font-weight: bold;\\n  text-transform: capitalize;\\n  text-align: right;\\n  font-size: 90%;\\n}\\nform#conjugator fieldset dl dd {\\n  margin: 0;\\n  padding: 0 0.5rem;\\n  width: 70%;\\n}\\nform#conjugator fieldset dl dd input {\\n  width: 95%;\\n  border: 1px solid rgb(255, 255, 255);\\n  border-radius: 0.3rem;\\n  padding: 0.4rem;\\n  font-size: 80%;\\n}\\nform#conjugator fieldset dl:first-child {\\n  border-top: none;\\n}\\n\\n.buttons {\\n  display: flex;\\n  justify-content: center;\\n}\\n.buttons input[type=button] {\\n  width: 6.2rem;\\n  padding: 0.4rem;\\n  border-radius: 0.5rem;\\n  color: rgb(255, 255, 255);\\n  border: none;\\n}\\n.buttons #submitBtn {\\n  background: rgb(40, 167, 69);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/verbs/conjugator.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACJ;AACI;EACI,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,oBAAA;EACA,+BAAA;EACA,0BAAA;EACA,mBAAA;EACA,eAAA;AACR;;AAGA;EACI,iCAAA;EACA,qBAAA;EACA,qBAAA;EACA,iBAAA;EACA,sBAAA;EACA,cAAA;EACA,wCAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAAJ;AAEI;EACI,UAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAAR;AAEQ;EACI,UAAA;EACA,iBAAA;EACA,qBAAA;EACA,oBAAA;EACA,0BAAA;EACA,cAAA;AAAZ;AAGQ;EACI,UAAA;EACA,2BAAA;AADZ;AAGY;EACI,UAAA;EACA,oCAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AADhB;AAMI;EACI,UAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAJR;AAMQ;EACI,SAAA;EACA,qBAAA;EACA,oBAAA;EACA,UAAA;EACA,UAAA;EACA,iBAAA;EACA,0BAAA;EACA,iBAAA;EACA,cAAA;AAJZ;AAOQ;EACI,SAAA;EACA,UAAA;EACA,iBAAA;AALZ;AAOY;EACI,UAAA;EACA,oCAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AALhB;AAUI;EACI,iBAAA;AARR;AASQ;EACI,uBAAA;EACA,iBAAA;EACA,kBAAA;AAPZ;AAUQ;EACI,uBAAA;EACA,kBAAA;AARZ;AAWQ;EACI,kBAAA;EACA,mBAAA;EACA,iBAAA;AATZ;AAaI;EACI,qBAAA;EACA,eAAA;EACA,cAAA;EACA,4BAAA;AAXR;AAaQ;EACI,UAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;AAXZ;AAaY;EACI,SAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;EACA,iBAAA;EACA,0BAAA;EACA,iBAAA;EACA,cAAA;AAXhB;AAcY;EACI,SAAA;EACA,iBAAA;EACA,UAAA;AAZhB;AAcgB;EACI,UAAA;EACA,oCAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AAZpB;AAiBQ;EACI,gBAAA;AAfZ;;AAoBA;EACI,aAAA;EACA,uBAAA;AAjBJ;AAmBI;EACI,aAAA;EACA,eAAA;EACA,qBAAA;EACA,yBAAA;EACA,YAAA;AAjBR;AAoBI;EACI,4BAAA;AAlBR\",\"sourcesContent\":[\"section {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n\\r\\n    h1 {\\r\\n        margin-top: 8.0rem;\\r\\n        text-transform: uppercase;\\r\\n        text-align: center;\\r\\n        padding-bottom: 50px;\\r\\n        font-family: \\\"Open Sans\\\", serif;\\r\\n        text-transform: capitalize;\\r\\n        font-weight: normal;\\r\\n        font-size: 175%;\\r\\n    }\\r\\n}\\r\\n\\r\\nform#conjugator {\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    margin-bottom: 1.5rem;\\r\\n    border-radius: 0.8rem;\\r\\n    padding: 1.2rem 0;\\r\\n    padding-bottom: 2.5rem;\\r\\n    margin: 0 auto;\\r\\n    border: 0.0625rem solid rgb(198, 10, 30);\\r\\n    height: 60vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    \\r\\n    dl#numQuestionsSelect {\\r\\n        padding: 0;\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        justify-content: center;\\r\\n\\r\\n        dt {\\r\\n            width: 30%;\\r\\n            text-align: right;\\r\\n            margin-top: 0.3125rem;\\r\\n            margin-right: 0.5rem;\\r\\n            text-transform: capitalize;\\r\\n            font-size: 90%;   \\r\\n        }\\r\\n\\r\\n        dd {\\r\\n            width: 30%;\\r\\n            justify-content: flex-start;\\r\\n            \\r\\n            select {\\r\\n                width: 30%;\\r\\n                border: 1px solid rgb(112, 128, 144);\\r\\n                border-radius: 0.3rem;\\r\\n                padding: 0.4rem;\\r\\n                font-size: 80%;\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    dl#tenseSelect {\\r\\n        padding: 0;\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        justify-content: center;\\r\\n                                        \\r\\n        dt {\\r\\n            margin: 0;\\r\\n            margin-top: 0.3125rem;\\r\\n            margin-right: 0.5rem;\\r\\n            padding: 0;\\r\\n            width: 30%;\\r\\n            font-weight: bold;\\r\\n            text-transform: capitalize;\\r\\n            text-align: right;\\r\\n            font-size: 90%;   \\r\\n        }\\r\\n\\r\\n        dd {\\r\\n            margin: 0;\\r\\n            width: 65%;\\r\\n            padding: 0 0.5rem;\\r\\n            \\r\\n            select {\\r\\n                width: 65%;\\r\\n                border: 1px solid rgb(112, 128, 144);\\r\\n                border-radius: 0.3rem;\\r\\n                padding: 0.4rem;\\r\\n                font-size: 80%;\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    #headings {\\r\\n        padding-top: 1.0rem;\\r\\n        h2 {\\r\\n            color: rgb(198, 10, 30);\\r\\n            font-weight: bold;\\r\\n            text-align: center;\\r\\n        }\\r\\n    \\r\\n        h4 {\\r\\n            color: rgb(198, 10, 30);\\r\\n            text-align: center;\\r\\n        }\\r\\n    \\r\\n        h5 {\\r\\n            text-align: center;\\r\\n            margin-bottom: 2.0rem;\\r\\n            font-weight: bold;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    fieldset {\\r\\n        border-radius: 0.8rem;\\r\\n        padding: 1.2rem;\\r\\n        margin: 0 auto;\\r\\n        background:  rgb(255, 196, 0);\\r\\n\\r\\n        dl {\\r\\n            padding: 0;\\r\\n            width: 100%;\\r\\n            display: flex;\\r\\n            flex-direction: row;\\r\\n            justify-content: flex-start;\\r\\n                                            \\r\\n            dt {\\r\\n                margin: 0;\\r\\n                margin-top: 5px;\\r\\n                margin-right: 10px;\\r\\n                padding: 0;\\r\\n                width: 30%;\\r\\n                font-weight: bold;\\r\\n                text-transform: capitalize;\\r\\n                text-align: right;\\r\\n                font-size: 90%;   \\r\\n            }\\r\\n    \\r\\n            dd {\\r\\n                margin: 0;\\r\\n                padding: 0 0.5rem;\\r\\n                width: 70%;    \\r\\n                \\r\\n                input {\\r\\n                    width: 95%;\\r\\n                    border: 1px solid rgb(255, 255, 255);\\r\\n                    border-radius: 0.3rem;\\r\\n                    padding: 0.4rem;\\r\\n                    font-size: 80%;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    \\r\\n        dl:first-child {\\r\\n            border-top: none;\\r\\n        }\\r\\n    }\\r\\n}\\r\\n \\r\\n.buttons {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n\\r\\n    input[type=\\\"button\\\"] {\\r\\n        width: 6.2rem;\\r\\n        padding: 0.4rem;\\r\\n        border-radius: 0.5rem;\\r\\n        color: rgb(255, 255, 255);\\r\\n        border: none;\\r\\n    }\\r\\n\\r\\n    #submitBtn {\\r\\n        background: rgb(40, 167, 69);\\r\\n    }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy92ZXJicy9jb25qdWdhdG9yLnNjc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDMkg7QUFDM0gsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLG1EQUFtRCxnQkFBZ0IsaUJBQWlCLGNBQWMsZUFBZSx3Q0FBd0Msa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyxjQUFjLHFCQUFxQiw4QkFBOEIsdUJBQXVCLHlCQUF5QixzQ0FBc0MsK0JBQStCLHdCQUF3QixvQkFBb0IsR0FBRyxxQkFBcUIsd0NBQXdDLDBCQUEwQiwwQkFBMEIsc0JBQXNCLDJCQUEyQixtQkFBbUIsNkNBQTZDLGlCQUFpQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRyx5Q0FBeUMsZUFBZSxnQkFBZ0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyw0Q0FBNEMsZUFBZSxzQkFBc0IsMEJBQTBCLHlCQUF5QiwrQkFBK0IsbUJBQW1CLEdBQUcsNENBQTRDLGVBQWUsZ0NBQWdDLEdBQUcsbURBQW1ELGVBQWUseUNBQXlDLDBCQUEwQixvQkFBb0IsbUJBQW1CLEdBQUcsa0NBQWtDLGVBQWUsZ0JBQWdCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcscUNBQXFDLGNBQWMsMEJBQTBCLHlCQUF5QixlQUFlLGVBQWUsc0JBQXNCLCtCQUErQixzQkFBc0IsbUJBQW1CLEdBQUcscUNBQXFDLGNBQWMsZUFBZSxzQkFBc0IsR0FBRyw0Q0FBNEMsZUFBZSx5Q0FBeUMsMEJBQTBCLG9CQUFvQixtQkFBbUIsR0FBRyw2QkFBNkIsc0JBQXNCLEdBQUcsZ0NBQWdDLDRCQUE0QixzQkFBc0IsdUJBQXVCLEdBQUcsZ0NBQWdDLDRCQUE0Qix1QkFBdUIsR0FBRyxnQ0FBZ0MsdUJBQXVCLHdCQUF3QixzQkFBc0IsR0FBRyw0QkFBNEIsMEJBQTBCLG9CQUFvQixtQkFBbUIsaUNBQWlDLEdBQUcsK0JBQStCLGVBQWUsZ0JBQWdCLGtCQUFrQix3QkFBd0IsZ0NBQWdDLEdBQUcsa0NBQWtDLGNBQWMsb0JBQW9CLHVCQUF1QixlQUFlLGVBQWUsc0JBQXNCLCtCQUErQixzQkFBc0IsbUJBQW1CLEdBQUcsa0NBQWtDLGNBQWMsc0JBQXNCLGVBQWUsR0FBRyx3Q0FBd0MsZUFBZSx5Q0FBeUMsMEJBQTBCLG9CQUFvQixtQkFBbUIsR0FBRywyQ0FBMkMscUJBQXFCLEdBQUcsY0FBYyxrQkFBa0IsNEJBQTRCLEdBQUcsK0JBQStCLGtCQUFrQixvQkFBb0IsMEJBQTBCLDhCQUE4QixpQkFBaUIsR0FBRyx1QkFBdUIsaUNBQWlDLEdBQUcsT0FBTyw2RkFBNkYsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLG1DQUFtQyxvQkFBb0IscUJBQXFCLGtCQUFrQixtQkFBbUIsMENBQTBDLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGdCQUFnQiwrQkFBK0Isc0NBQXNDLCtCQUErQixpQ0FBaUMsOENBQThDLHVDQUF1QyxnQ0FBZ0MsNEJBQTRCLFNBQVMsS0FBSyx5QkFBeUIsMENBQTBDLDhCQUE4Qiw4QkFBOEIsMEJBQTBCLCtCQUErQix1QkFBdUIsaURBQWlELHFCQUFxQixzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIsdUNBQXVDLHVCQUF1Qix3QkFBd0IsMEJBQTBCLGdDQUFnQyxvQ0FBb0Msb0JBQW9CLDJCQUEyQixrQ0FBa0Msc0NBQXNDLHFDQUFxQywyQ0FBMkMsa0NBQWtDLGFBQWEsb0JBQW9CLDJCQUEyQiw0Q0FBNEMsd0NBQXdDLCtCQUErQix5REFBeUQsMENBQTBDLG9DQUFvQyxtQ0FBbUMsaUJBQWlCLGFBQWEsU0FBUyw0QkFBNEIsdUJBQXVCLHdCQUF3QiwwQkFBMEIsZ0NBQWdDLG9DQUFvQyw0REFBNEQsMEJBQTBCLHNDQUFzQyxxQ0FBcUMsMkJBQTJCLDJCQUEyQixrQ0FBa0MsMkNBQTJDLGtDQUFrQyxrQ0FBa0MsYUFBYSxvQkFBb0IsMEJBQTBCLDJCQUEyQixrQ0FBa0Msd0NBQXdDLCtCQUErQix5REFBeUQsMENBQTBDLG9DQUFvQyxtQ0FBbUMsaUJBQWlCLGFBQWEsU0FBUyx1QkFBdUIsZ0NBQWdDLGdCQUFnQix3Q0FBd0Msa0NBQWtDLG1DQUFtQyxhQUFhLHdCQUF3Qix3Q0FBd0MsbUNBQW1DLGFBQWEsd0JBQXdCLG1DQUFtQyxzQ0FBc0Msa0NBQWtDLGFBQWEsU0FBUyxzQkFBc0Isa0NBQWtDLDRCQUE0QiwyQkFBMkIsMENBQTBDLG9CQUFvQiwyQkFBMkIsNEJBQTRCLDhCQUE4QixvQ0FBb0MsNENBQTRDLG9FQUFvRSw4QkFBOEIsb0NBQW9DLHVDQUF1QywrQkFBK0IsK0JBQStCLHNDQUFzQywrQ0FBK0Msc0NBQXNDLHNDQUFzQyxpQkFBaUIsNEJBQTRCLDhCQUE4QixzQ0FBc0MsbUNBQW1DLCtDQUErQyxtQ0FBbUMsNkRBQTZELDhDQUE4Qyx3Q0FBd0MsdUNBQXVDLHFCQUFxQixpQkFBaUIsYUFBYSxvQ0FBb0MsaUNBQWlDLGFBQWEsU0FBUyxLQUFLLG1CQUFtQixzQkFBc0IsZ0NBQWdDLG9DQUFvQywwQkFBMEIsNEJBQTRCLGtDQUFrQyxzQ0FBc0MseUJBQXlCLFNBQVMsd0JBQXdCLHlDQUF5QyxTQUFTLEtBQUssdUJBQXVCO0FBQy9oVDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy92ZXJicy9jb25qdWdhdG9yLnNjc3M/NGZjZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwic2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbnNlY3Rpb24gaDEge1xcbiAgbWFyZ2luLXRvcDogOHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2VyaWY7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE3NSU7XFxufVxcblxcbmZvcm0jY29uanVnYXRvciB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxuICBwYWRkaW5nOiAxLjJyZW0gMDtcXG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYigxOTgsIDEwLCAzMCk7XFxuICBoZWlnaHQ6IDYwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZm9ybSNjb25qdWdhdG9yIGRsI251bVF1ZXN0aW9uc1NlbGVjdCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5mb3JtI2Nvbmp1Z2F0b3IgZGwjbnVtUXVlc3Rpb25zU2VsZWN0IGR0IHtcXG4gIHdpZHRoOiAzMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi10b3A6IDAuMzEyNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXNpemU6IDkwJTtcXG59XFxuZm9ybSNjb25qdWdhdG9yIGRsI251bVF1ZXN0aW9uc1NlbGVjdCBkZCB7XFxuICB3aWR0aDogMzAlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5mb3JtI2Nvbmp1Z2F0b3IgZGwjbnVtUXVlc3Rpb25zU2VsZWN0IGRkIHNlbGVjdCB7XFxuICB3aWR0aDogMzAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExMiwgMTI4LCAxNDQpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcbmZvcm0jY29uanVnYXRvciBkbCN0ZW5zZVNlbGVjdCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5mb3JtI2Nvbmp1Z2F0b3IgZGwjdGVuc2VTZWxlY3QgZHQge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXRvcDogMC4zMTI1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbn1cXG5mb3JtI2Nvbmp1Z2F0b3IgZGwjdGVuc2VTZWxlY3QgZGQge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDY1JTtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbn1cXG5mb3JtI2Nvbmp1Z2F0b3IgZGwjdGVuc2VTZWxlY3QgZGQgc2VsZWN0IHtcXG4gIHdpZHRoOiA2NSU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEyLCAxMjgsIDE0NCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuZm9ybSNjb25qdWdhdG9yICNoZWFkaW5ncyB7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuZm9ybSNjb25qdWdhdG9yICNoZWFkaW5ncyBoMiB7XFxuICBjb2xvcjogcmdiKDE5OCwgMTAsIDMwKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5mb3JtI2Nvbmp1Z2F0b3IgI2hlYWRpbmdzIGg0IHtcXG4gIGNvbG9yOiByZ2IoMTk4LCAxMCwgMzApO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5mb3JtI2Nvbmp1Z2F0b3IgI2hlYWRpbmdzIGg1IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuZm9ybSNjb25qdWdhdG9yIGZpZWxkc2V0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDEuMnJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTk2LCAwKTtcXG59XFxuZm9ybSNjb25qdWdhdG9yIGZpZWxkc2V0IGRsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5mb3JtI2Nvbmp1Z2F0b3IgZmllbGRzZXQgZGwgZHQge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAzMCU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmb250LXNpemU6IDkwJTtcXG59XFxuZm9ybSNjb25qdWdhdG9yIGZpZWxkc2V0IGRsIGRkIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuZm9ybSNjb25qdWdhdG9yIGZpZWxkc2V0IGRsIGRkIGlucHV0IHtcXG4gIHdpZHRoOiA5NSU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuZm9ybSNjb25qdWdhdG9yIGZpZWxkc2V0IGRsOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmJ1dHRvbnMgaW5wdXRbdHlwZT1idXR0b25dIHtcXG4gIHdpZHRoOiA2LjJyZW07XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uYnV0dG9ucyAjc3VibWl0QnRuIHtcXG4gIGJhY2tncm91bmQ6IHJnYig0MCwgMTY3LCA2OSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvdmVyYnMvY29uanVnYXRvci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ1I7O0FBR0E7RUFDSSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFSO0FBRVE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBQVo7QUFHUTtFQUNJLFVBQUE7RUFDQSwyQkFBQTtBQURaO0FBR1k7RUFDSSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRGhCO0FBTUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSlI7QUFNUTtFQUNJLFNBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSlo7QUFPUTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFMWjtBQU9ZO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUxoQjtBQVVJO0VBQ0ksaUJBQUE7QUFSUjtBQVNRO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUFo7QUFVUTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7QUFSWjtBQVdRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBVFo7QUFhSTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQVhSO0FBYVE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBWFo7QUFhWTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFYaEI7QUFjWTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFaaEI7QUFjZ0I7RUFDSSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBWnBCO0FBaUJRO0VBQ0ksZ0JBQUE7QUFmWjs7QUFvQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFqQko7QUFtQkk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBakJSO0FBb0JJO0VBQ0ksNEJBQUE7QUFsQlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wic2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA4LjByZW07XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNlcmlmO1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNzUlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmZvcm0jY29uanVnYXRvciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuMnJlbSAwO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiKDE5OCwgMTAsIDMwKTtcXHJcXG4gICAgaGVpZ2h0OiA2MHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgIGRsI251bVF1ZXN0aW9uc1NlbGVjdCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgZHQge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4zMTI1cmVtO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlOyAgIFxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZGQge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIHNlbGVjdCB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTIsIDEyOCwgMTQ0KTtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkbCN0ZW5zZVNlbGVjdCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgIGR0IHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4zMTI1cmVtO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDkwJTsgICBcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGRkIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDY1JTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBzZWxlY3Qge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUlO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEyLCAxMjgsIDE0NCk7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDgwJTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2hlYWRpbmdzIHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxLjByZW07XFxyXFxuICAgICAgICBoMiB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYigxOTgsIDEwLCAzMCk7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgIGg0IHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDE5OCwgMTAsIDMwKTtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgaDUge1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjByZW07XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZmllbGRzZXQge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMS4ycmVtO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAgcmdiKDI1NSwgMTk2LCAwKTtcXHJcXG5cXHJcXG4gICAgICAgIGRsIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBkdCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlOyAgIFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgZGQge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlOyAgICBcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDgwJTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICBkbDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4gXFxyXFxuLmJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcclxcbiAgICAgICAgd2lkdGg6IDYuMnJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3N1Ym1pdEJ0biB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDE2NywgNjkpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/verbs/conjugator.scss\n"));

/***/ })

});