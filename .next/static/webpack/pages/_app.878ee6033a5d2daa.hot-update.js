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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"section {\\n  width: 100%;\\n  height: 100%;\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\nsection h1 {\\n  margin-top: 8rem;\\n  text-transform: uppercase;\\n  text-align: center;\\n  padding-bottom: 50px;\\n  font-family: \\\"Open Sans\\\", serif;\\n  text-transform: capitalize;\\n  font-weight: normal;\\n  font-size: 175%;\\n}\\n\\nform#scramble fieldset {\\n  padding: 1.2rem 0;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  height: 40vh;\\n}\\n@media only screen and (max-width: 480px) {\\n  form#scramble fieldset {\\n    margin-top: -30px;\\n    border: none;\\n    width: 100%;\\n    height: 15vh;\\n  }\\n}\\nform#scramble fieldset dl {\\n  margin: 0;\\n  padding: 0;\\n  width: 50vw;\\n  display: flex;\\n}\\nform#scramble fieldset dl dt {\\n  margin-top: 0.3125rem;\\n  width: 50%;\\n  display: flex;\\n  justify-content: flex-end;\\n  margin-right: 0.5rem;\\n  font-size: 90%;\\n}\\nform#scramble fieldset dl dd {\\n  width: 50%;\\n  display: flex;\\n  justify-content: flex-start;\\n  font-size: 90%;\\n}\\nform#scramble fieldset dl dd select {\\n  border: 1px solid rgb(112, 128, 144);\\n  border-radius: 0.3rem;\\n  padding: 0.4rem;\\n  font-size: 90%;\\n}\\nform#scramble fieldset dl#questions {\\n  padding: 0;\\n  padding-top: 0.85rem;\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\nform#scramble fieldset dl#questions dt {\\n  margin: 0;\\n  margin-top: 5px;\\n  margin-right: 10px;\\n  padding: 0;\\n  width: 100vw;\\n  display: flex;\\n  font-weight: bold;\\n  text-transform: lowercase;\\n  justify-content: center;\\n  font-size: 90%;\\n}\\nform#scramble fieldset dl#questions dd {\\n  margin: 0;\\n  margin-top: 1.5rem;\\n  padding: 0 0.5rem;\\n  display: flex;\\n  justify-content: center;\\n  width: 100vw;\\n}\\nform#scramble fieldset dl#questions dd div {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 0 0.1rem;\\n  width: 2.2rem;\\n  height: 2rem;\\n  background: rgb(198, 10, 30);\\n  color: rgb(255, 196, 0);\\n  border-radius: 0.3rem;\\n}\\nform#scramble .draggable {\\n  cursor: move;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n}\\nform#scramble .buttons {\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\nform#scramble .buttons input[type=button] {\\n  width: 6.2rem;\\n  padding: 0.4rem;\\n  border-radius: 0.5rem;\\n  color: rgb(255, 255, 255);\\n  border: none;\\n}\\nform#scramble .buttons #submitBtn {\\n  background: rgb(40, 167, 69);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/vocabulary/scramble.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACJ;AACI;EACI,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,oBAAA;EACA,+BAAA;EACA,0BAAA;EACA,mBAAA;EACA,eAAA;AACR;;AAII;EACI,iBAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AADR;AAGQ;EATJ;IAUQ,iBAAA;IACA,YAAA;IACA,WAAA;IACA,YAAA;EAAV;AACF;AAEQ;EACI,SAAA;EACA,UAAA;EACA,WAAA;EACA,aAAA;AAAZ;AAEY;EACI,qBAAA;EACA,UAAA;EACA,aAAA;EACA,yBAAA;EACA,oBAAA;EACA,cAAA;AAAhB;AAGY;EACI,UAAA;EACA,aAAA;EACA,2BAAA;EACA,cAAA;AADhB;AAGgB;EACI,oCAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AADpB;AAMQ;EACI,UAAA;EACA,oBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AAJZ;AAMY;EACI,SAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,yBAAA;EACA,uBAAA;EACA,cAAA;AAJhB;AAOY;EACI,SAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,YAAA;AALhB;AAOgB;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;EACA,4BAAA;EACA,uBAAA;EACA,qBAAA;AALpB;AAWI;EACI,YAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AATR;AAYI;EACI,WAAA;EACA,aAAA;EACA,uBAAA;AAVR;AAYQ;EACI,aAAA;EACA,eAAA;EACA,qBAAA;EACA,yBAAA;EACA,YAAA;AAVZ;AAaQ;EACI,4BAAA;AAXZ\",\"sourcesContent\":[\"section {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n\\r\\n    h1 {\\r\\n        margin-top: 8.0rem;\\r\\n        text-transform: uppercase;\\r\\n        text-align: center;\\r\\n        padding-bottom: 50px;\\r\\n        font-family: \\\"Open Sans\\\", serif;\\r\\n        text-transform: capitalize;\\r\\n        font-weight: normal;\\r\\n        font-size: 175%;\\r\\n    }\\r\\n}\\r\\n\\r\\nform#scramble {\\r\\n    fieldset {\\r\\n        padding: 1.2rem 0;\\r\\n        margin: 0 auto;\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n        height: 40vh;\\r\\n       \\r\\n        @media only screen and (max-width: 480px) {\\r\\n            margin-top: -30px;\\r\\n            border: none;\\r\\n            width: 100%;\\r\\n            height: 15vh;\\r\\n        }\\r\\n\\r\\n        dl {\\r\\n            margin: 0;\\r\\n            padding: 0;\\r\\n            width: 50vw;\\r\\n            display: flex;\\r\\n    \\r\\n            dt {\\r\\n                margin-top: 0.3125rem;\\r\\n                width: 50%;\\r\\n                display: flex;\\r\\n                justify-content: flex-end;\\r\\n                margin-right: 0.5rem;\\r\\n                font-size: 90%;\\r\\n            }\\r\\n    \\r\\n            dd {\\r\\n                width: 50%;\\r\\n                display: flex;\\r\\n                justify-content: flex-start;\\r\\n                font-size: 90%;\\r\\n                \\r\\n                select {\\r\\n                    border: 1px solid rgb(112, 128, 144);\\r\\n                    border-radius: 0.3rem;\\r\\n                    padding: 0.4rem;\\r\\n                    font-size: 90%;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n        \\r\\n        dl#questions {\\r\\n            padding: 0;\\r\\n            padding-top: 0.85rem;\\r\\n            width: 100vw;\\r\\n            display: flex;\\r\\n            flex-direction: column;\\r\\n            justify-content: center;\\r\\n                                            \\r\\n            dt {\\r\\n                margin: 0;\\r\\n                margin-top: 5px;\\r\\n                margin-right: 10px;\\r\\n                padding: 0;\\r\\n                width: 100vw;\\r\\n                display: flex;\\r\\n                font-weight: bold;\\r\\n                text-transform: lowercase;\\r\\n                justify-content: center;\\r\\n                font-size: 90%;   \\r\\n            }\\r\\n                     \\r\\n            dd {\\r\\n                margin: 0;\\r\\n                margin-top: 1.5rem;\\r\\n                padding: 0 0.5rem;\\r\\n                display: flex;\\r\\n                justify-content: center;\\r\\n                width: 100vw;\\r\\n\\r\\n                div {\\r\\n                    display: flex;\\r\\n                    justify-content: center;\\r\\n                    align-items: center;\\r\\n                    margin: 0 0.1rem;\\r\\n                    width: 2.2rem;\\r\\n                    height: 2.0rem;\\r\\n                    background: rgb(198, 10, 30);\\r\\n                    color: rgb(255, 196, 0);\\r\\n                    border-radius: 0.3rem;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    .draggable {\\r\\n        cursor: move;\\r\\n        user-select: none;\\r\\n    }\\r\\n\\r\\n    .buttons {\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n    \\r\\n        input[type=\\\"button\\\"] {\\r\\n            width: 6.2rem;\\r\\n            padding: 0.4rem;\\r\\n            border-radius: 0.5rem;\\r\\n            color: rgb(255, 255, 255);\\r\\n            border: none;\\r\\n        }\\r\\n    \\r\\n        #submitBtn {\\r\\n            background: rgb(40, 167, 69);\\r\\n        }\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy92b2NhYnVsYXJ5L3NjcmFtYmxlLnNjc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDMkg7QUFDM0gsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLG1EQUFtRCxnQkFBZ0IsaUJBQWlCLGNBQWMsZUFBZSx3Q0FBd0Msa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyxjQUFjLHFCQUFxQiw4QkFBOEIsdUJBQXVCLHlCQUF5QixzQ0FBc0MsK0JBQStCLHdCQUF3QixvQkFBb0IsR0FBRyw0QkFBNEIsc0JBQXNCLG1CQUFtQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsaUJBQWlCLEdBQUcsNkNBQTZDLDRCQUE0Qix3QkFBd0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsS0FBSyxHQUFHLDZCQUE2QixjQUFjLGVBQWUsZ0JBQWdCLGtCQUFrQixHQUFHLGdDQUFnQywwQkFBMEIsZUFBZSxrQkFBa0IsOEJBQThCLHlCQUF5QixtQkFBbUIsR0FBRyxnQ0FBZ0MsZUFBZSxrQkFBa0IsZ0NBQWdDLG1CQUFt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d0JBQXdCLDBCQUEwQixvQ0FBb0MsNENBQTRDLDhCQUE4QixnQ0FBZ0Msc0NBQXNDLDBDQUEwQyw2QkFBNkIsYUFBYSxnQ0FBZ0MsNkNBQTZDLGFBQWEsU0FBUyxLQUFLLG1CQUFtQjtBQUMzalA7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvdm9jYWJ1bGFyeS9zY3JhbWJsZS5zY3NzPzhiMWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcInNlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5zZWN0aW9uIGgxIHtcXG4gIG1hcmdpbi10b3A6IDhyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNlcmlmO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNzUlO1xcbn1cXG5cXG5mb3JtI3NjcmFtYmxlIGZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNDB2aDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgZm9ybSNzY3JhbWJsZSBmaWVsZHNldCB7XFxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxuICB9XFxufVxcbmZvcm0jc2NyYW1ibGUgZmllbGRzZXQgZGwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuZm9ybSNzY3JhbWJsZSBmaWVsZHNldCBkbCBkdCB7XFxuICBtYXJnaW4tdG9wOiAwLjMxMjVyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbn1cXG5mb3JtI3NjcmFtYmxlIGZpZWxkc2V0IGRsIGRkIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiA5MCU7XFxufVxcbmZvcm0jc2NyYW1ibGUgZmllbGRzZXQgZGwgZGQgc2VsZWN0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTIsIDEyOCwgMTQ0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbn1cXG5mb3JtI3NjcmFtYmxlIGZpZWxkc2V0IGRsI3F1ZXN0aW9ucyB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFkZGluZy10b3A6IDAuODVyZW07XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5mb3JtI3NjcmFtYmxlIGZpZWxkc2V0IGRsI3F1ZXN0aW9ucyBkdCB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiA5MCU7XFxufVxcbmZvcm0jc2NyYW1ibGUgZmllbGRzZXQgZGwjcXVlc3Rpb25zIGRkIHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5mb3JtI3NjcmFtYmxlIGZpZWxkc2V0IGRsI3F1ZXN0aW9ucyBkZCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAwLjFyZW07XFxuICB3aWR0aDogMi4ycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYmFja2dyb3VuZDogcmdiKDE5OCwgMTAsIDMwKTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAxOTYsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5mb3JtI3NjcmFtYmxlIC5kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuZm9ybSNzY3JhbWJsZSAuYnV0dG9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9ybSNzY3JhbWJsZSAuYnV0dG9ucyBpbnB1dFt0eXBlPWJ1dHRvbl0ge1xcbiAgd2lkdGg6IDYuMnJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbmZvcm0jc2NyYW1ibGUgLmJ1dHRvbnMgI3N1Ym1pdEJ0biB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDE2NywgNjkpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3ZvY2FidWxhcnkvc2NyYW1ibGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNSOztBQUlJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFEUjtBQUdRO0VBVEo7SUFVUSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQUFWO0FBQ0Y7QUFFUTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFBWjtBQUVZO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBQWhCO0FBR1k7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQURoQjtBQUdnQjtFQUNJLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQURwQjtBQU1RO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBSlo7QUFNWTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBSmhCO0FBT1k7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFMaEI7QUFPZ0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFMcEI7QUFXSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQVRSO0FBWUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBVlI7QUFZUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFWWjtBQWFRO0VBQ0ksNEJBQUE7QUFYWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJzZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDguMHJlbTtcXHJcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2VyaWY7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE3NSU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuZm9ybSNzY3JhbWJsZSB7XFxyXFxuICAgIGZpZWxkc2V0IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEuMnJlbSAwO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGhlaWdodDogNDB2aDtcXHJcXG4gICAgICAgXFxyXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTV2aDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGRsIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNTB2dztcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICBkdCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMzEyNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgZGQge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgc2VsZWN0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTIsIDEyOCwgMTQ0KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBkbCNxdWVzdGlvbnMge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuODVyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIGR0IHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlOyAgIFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBkZCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMC4xcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIuMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMi4wcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDE5OCwgMTAsIDMwKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAxOTYsIDApO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kcmFnZ2FibGUge1xcclxcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xcclxcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ1dHRvbnMge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICAgICAgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA2LjJyZW07XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAjc3VibWl0QnRuIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDE2NywgNjkpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/vocabulary/scramble.scss\n"));

/***/ })

});