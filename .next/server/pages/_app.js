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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginChecker)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_loginchecker_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/loginchecker.module.scss */ \"./styles/components/loginchecker.module.scss\");\n/* harmony import */ var _styles_components_loginchecker_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_loginchecker_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction LoginChecker({ children  }) {\n    const [loggedIn, setLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [logginKey, setLogginKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const inputHandler = (e)=>{\n        const keyword = e.target.value;\n        setLogginKey(keyword);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (logginKey === \"평가풍년\") {\n            localStorage.setItem(\"15ME-token\", logginKey);\n            router.replace(`/`);\n        }\n        if (localStorage.getItem(\"15ME-token\")) {\n            setLoggedIn(true);\n        }\n    }, [\n        logginKey\n    ]);\n    return loggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_loginchecker_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pageWrap),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_components_loginchecker_module_scss__WEBPACK_IMPORTED_MODULE_3___default().background),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_components_loginchecker_module_scss__WEBPACK_IMPORTED_MODULE_3___default().inputWrap),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_components_loginchecker_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),\n                        children: \"코드를 입력해주세요!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sungwook/Desktop/FrontPage/components/LoginChecker.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: logginKey,\n                        onChange: inputHandler\n                    }, void 0, false, {\n                        fileName: \"/Users/sungwook/Desktop/FrontPage/components/LoginChecker.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sungwook/Desktop/FrontPage/components/LoginChecker.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sungwook/Desktop/FrontPage/components/LoginChecker.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sungwook/Desktop/FrontPage/components/LoginChecker.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luQ2hlY2tlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBQ3VCO0FBTXBELFNBQVNJLGFBQWEsRUFBRUMsU0FBUSxFQUFxQixFQUFFO0lBQ3BFLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBVSxLQUFLO0lBQ3ZELE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBUztJQUVuRCxNQUFNUSxTQUFTVixzREFBU0E7SUFFeEIsTUFBTVcsZUFBZSxDQUFDQyxJQUEyQztRQUMvRCxNQUFNQyxVQUFVRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7UUFDOUJOLGFBQWFJO0lBQ2Y7SUFFQVosZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlPLGNBQWMsUUFBUTtZQUN4QlEsYUFBYUMsT0FBTyxDQUFDLGNBQWNUO1lBQ25DRSxPQUFPUSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUNELElBQUlGLGFBQWFHLE9BQU8sQ0FBQyxlQUFlO1lBQ3RDWixZQUFZLElBQUk7UUFDbEIsQ0FBQztJQUNILEdBQUc7UUFBQ0M7S0FBVTtJQUVkLE9BQU9GLHlCQUNMO2tCQUFHRDtzQ0FFSCw4REFBQ2U7UUFBSUMsV0FBV2xCLDZGQUFlO2tCQUM3Qiw0RUFBQ2lCO1lBQUlDLFdBQVdsQiwrRkFBaUI7c0JBQy9CLDRFQUFDaUI7Z0JBQUlDLFdBQVdsQiw4RkFBZ0I7O2tDQUM5Qiw4REFBQ2lCO3dCQUFJQyxXQUFXbEIseUZBQVc7a0NBQUU7Ozs7OztrQ0FDN0IsOERBQUN1Qjt3QkFDQ1gsT0FBT1A7d0JBQ1BtQixVQUFVaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtuQjtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xNW1pbl9pbl9lbm91Z2gvLi9jb21wb25lbnRzL0xvZ2luQ2hlY2tlci50c3g/NGRhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL2xvZ2luY2hlY2tlci5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgTG9naW5DaGVja2VyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkNoZWNrZXIoeyBjaGlsZHJlbiB9OiBMb2dpbkNoZWNrZXJQcm9wcykge1xuICBjb25zdCBbbG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2xvZ2dpbktleSwgc2V0TG9nZ2luS2V5XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaW5wdXRIYW5kbGVyID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3Qga2V5d29yZCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldExvZ2dpbktleShrZXl3b3JkKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2dnaW5LZXkgPT09IFwi7Y+J6rCA7ZKN64WEXCIpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiMTVNRS10b2tlblwiLCBsb2dnaW5LZXkpO1xuICAgICAgcm91dGVyLnJlcGxhY2UoYC9gKTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiMTVNRS10b2tlblwiKSkge1xuICAgICAgc2V0TG9nZ2VkSW4odHJ1ZSk7XG4gICAgfVxuICB9LCBbbG9nZ2luS2V5XSk7XG5cbiAgcmV0dXJuIGxvZ2dlZEluID8gKFxuICAgIDw+e2NoaWxkcmVufTwvPlxuICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZVdyYXB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFdyYXB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+7L2U65Oc66W8IOyeheugpe2VtOyjvOyEuOyalCE8L2Rpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtsb2dnaW5LZXl9XG4gICAgICAgICAgICBvbkNoYW5nZT17aW5wdXRIYW5kbGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJMb2dpbkNoZWNrZXIiLCJjaGlsZHJlbiIsImxvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJsb2dnaW5LZXkiLCJzZXRMb2dnaW5LZXkiLCJyb3V0ZXIiLCJpbnB1dEhhbmRsZXIiLCJlIiwia2V5d29yZCIsInRhcmdldCIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlcGxhY2UiLCJnZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwicGFnZVdyYXAiLCJiYWNrZ3JvdW5kIiwiaW5wdXRXcmFwIiwidGV4dCIsImlucHV0Iiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LoginChecker.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_LoginChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/LoginChecker */ \"./components/LoginChecker.tsx\");\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_LoginChecker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/sungwook/Desktop/FrontPage/pages/_app.tsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sungwook/Desktop/FrontPage/pages/_app.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUVwQyxTQUFTQyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDcEQscUJBQ0UsOERBQUNILCtEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMTVtaW5faW5fZW5vdWdoLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9naW5DaGVja2VyIGZyb20gXCJjb21wb25lbnRzL0xvZ2luQ2hlY2tlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPExvZ2luQ2hlY2tlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0xvZ2luQ2hlY2tlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMb2dpbkNoZWNrZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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