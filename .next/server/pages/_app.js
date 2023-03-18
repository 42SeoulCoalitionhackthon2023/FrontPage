/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./styles/components/loginchecker.module.scss":
/*!****************************************************!*\
  !*** ./styles/components/loginchecker.module.scss ***!
  \****************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"pageWrap\": \"loginchecker_pageWrap__v5Y8x\",\n\t\"background\": \"loginchecker_background__K5QK5\",\n\t\"inputWrap\": \"loginchecker_inputWrap__STSGG\",\n\t\"text\": \"loginchecker_text__biNKl\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvY29tcG9uZW50cy9sb2dpbmNoZWNrZXIubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xNW1pbl9pbl9lbm91Z2gvLi9zdHlsZXMvY29tcG9uZW50cy9sb2dpbmNoZWNrZXIubW9kdWxlLnNjc3M/NTdjOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwYWdlV3JhcFwiOiBcImxvZ2luY2hlY2tlcl9wYWdlV3JhcF9fdjVZOHhcIixcblx0XCJiYWNrZ3JvdW5kXCI6IFwibG9naW5jaGVja2VyX2JhY2tncm91bmRfX0s1UUs1XCIsXG5cdFwiaW5wdXRXcmFwXCI6IFwibG9naW5jaGVja2VyX2lucHV0V3JhcF9fU1RTR0dcIixcblx0XCJ0ZXh0XCI6IFwibG9naW5jaGVja2VyX3RleHRfX2JpTktsXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/components/loginchecker.module.scss\n");

/***/ }),

/***/ "./components/LoginChecker.tsx":
/*!*************************************!*\
  !*** ./components/LoginChecker.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginChecker)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_loginchecker_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/loginchecker.module.scss */ \"./styles/components/loginchecker.module.scss\");\n/* harmony import */ var _styles_components_loginchecker_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_loginchecker_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction LoginChecker({ children  }) {\n    const [loggedIn, setLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [logginKey, setLogginKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const inputHandler = (e)=>{\n        const keyword = e.target.value;\n        setLogginKey(keyword);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (logginKey === \"평가풍년\") {\n            localStorage.setItem(\"15ME-token\", logginKey);\n            router.replace(`/`);\n        }\n        if (localStorage.getItem(\"15ME-token\")) {\n            setLoggedIn(true);\n        }\n    }, [\n        logginKey\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (localStorage.getItem(\"15ME-token\")) {\n            setLoggedIn(true);\n        }\n    }, []);\n    return loggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_loginchecker_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pageWrap),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_components_loginchecker_module_scss__WEBPACK_IMPORTED_MODULE_3___default().background),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_components_loginchecker_module_scss__WEBPACK_IMPORTED_MODULE_3___default().inputWrap),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_components_loginchecker_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),\n                        children: \"코드를 입력해주세요!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sungwook/Desktop/FrontPage/components/LoginChecker.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: logginKey,\n                        onChange: inputHandler\n                    }, void 0, false, {\n                        fileName: \"/Users/sungwook/Desktop/FrontPage/components/LoginChecker.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sungwook/Desktop/FrontPage/components/LoginChecker.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sungwook/Desktop/FrontPage/components/LoginChecker.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sungwook/Desktop/FrontPage/components/LoginChecker.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luQ2hlY2tlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBQ3VCO0FBTXBELFNBQVNJLGFBQWEsRUFBRUMsU0FBUSxFQUFxQixFQUFFO0lBQ3BFLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBVSxLQUFLO0lBQ3ZELE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBUztJQUVuRCxNQUFNUSxTQUFTVixzREFBU0E7SUFFeEIsTUFBTVcsZUFBZSxDQUFDQyxJQUEyQztRQUMvRCxNQUFNQyxVQUFVRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7UUFDOUJOLGFBQWFJO0lBQ2Y7SUFFQVosZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlPLGNBQWMsUUFBUTtZQUN4QlEsYUFBYUMsT0FBTyxDQUFDLGNBQWNUO1lBQ25DRSxPQUFPUSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUNELElBQUlGLGFBQWFHLE9BQU8sQ0FBQyxlQUFlO1lBQ3RDWixZQUFZLElBQUk7UUFDbEIsQ0FBQztJQUNILEdBQUc7UUFBQ0M7S0FBVTtJQUVkUCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSWUsYUFBYUcsT0FBTyxDQUFDLGVBQWU7WUFDdENaLFlBQVksSUFBSTtRQUNsQixDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUwsT0FBT0QseUJBQ0w7a0JBQUdEO3NDQUVILDhEQUFDZTtRQUFJQyxXQUFXbEIsNkZBQWU7a0JBQzdCLDRFQUFDaUI7WUFBSUMsV0FBV2xCLCtGQUFpQjtzQkFDL0IsNEVBQUNpQjtnQkFBSUMsV0FBV2xCLDhGQUFnQjs7a0NBQzlCLDhEQUFDaUI7d0JBQUlDLFdBQVdsQix5RkFBVztrQ0FBRTs7Ozs7O2tDQUM3Qiw4REFBQ3VCO3dCQUNDWCxPQUFPUDt3QkFDUG1CLFVBQVVoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS25CO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzE1bWluX2luX2Vub3VnaC8uL2NvbXBvbmVudHMvTG9naW5DaGVja2VyLnRzeD80ZGFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvbG9naW5jaGVja2VyLm1vZHVsZS5zY3NzXCI7XG5cbmludGVyZmFjZSBMb2dpbkNoZWNrZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luQ2hlY2tlcih7IGNoaWxkcmVuIH06IExvZ2luQ2hlY2tlclByb3BzKSB7XG4gIGNvbnN0IFtsb2dnZWRJbiwgc2V0TG9nZ2VkSW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbbG9nZ2luS2V5LCBzZXRMb2dnaW5LZXldID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBpbnB1dEhhbmRsZXIgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBrZXl3b3JkID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0TG9nZ2luS2V5KGtleXdvcmQpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxvZ2dpbktleSA9PT0gXCLtj4nqsIDtko3rhYRcIikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCIxNU1FLXRva2VuXCIsIGxvZ2dpbktleSk7XG4gICAgICByb3V0ZXIucmVwbGFjZShgL2ApO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCIxNU1FLXRva2VuXCIpKSB7XG4gICAgICBzZXRMb2dnZWRJbih0cnVlKTtcbiAgICB9XG4gIH0sIFtsb2dnaW5LZXldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIjE1TUUtdG9rZW5cIikpIHtcbiAgICAgIHNldExvZ2dlZEluKHRydWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiBsb2dnZWRJbiA/IChcbiAgICA8PntjaGlsZHJlbn08Lz5cbiAgKSA6IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VXcmFwfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRXcmFwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9Puy9lOuTnOulvCDsnoXroKXtlbTso7zshLjsmpQhPC9kaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17bG9nZ2luS2V5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2lucHV0SGFuZGxlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTG9naW5DaGVja2VyIiwiY2hpbGRyZW4iLCJsb2dnZWRJbiIsInNldExvZ2dlZEluIiwibG9nZ2luS2V5Iiwic2V0TG9nZ2luS2V5Iiwicm91dGVyIiwiaW5wdXRIYW5kbGVyIiwiZSIsImtleXdvcmQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZXBsYWNlIiwiZ2V0SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsInBhZ2VXcmFwIiwiYmFja2dyb3VuZCIsImlucHV0V3JhcCIsInRleHQiLCJpbnB1dCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LoginChecker.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_LoginChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/LoginChecker */ \"./components/LoginChecker.tsx\");\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_LoginChecker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/sungwook/Desktop/FrontPage/pages/_app.tsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sungwook/Desktop/FrontPage/pages/_app.tsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUVwQyxTQUFTQyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDcEQscUJBQ0U7a0JBQ0UsNEVBQUNILCtEQUFZQTtzQkFDWCw0RUFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBSWhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xNW1pbl9pbl9lbm91Z2gvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dpbkNoZWNrZXIgZnJvbSBcImNvbXBvbmVudHMvTG9naW5DaGVja2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExvZ2luQ2hlY2tlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Mb2dpbkNoZWNrZXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTG9naW5DaGVja2VyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();