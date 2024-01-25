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

/***/ "./src/components/AuthContext.tsx":
/*!****************************************!*\
  !*** ./src/components/AuthContext.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/AuthContext.tsx\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst AuthProvider = ({ children })=>{\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const login = async (username, password)=>{\n        try {\n            const response = await fetch(\"http://localhost:3001/api/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    username,\n                    password\n                })\n            });\n            const data = await response.json();\n            if (data.success) {\n                setIsLoggedIn(true);\n                router.push(\"/dashboard\");\n            } else {\n            // Manejar el error, mostrar un mensaje, etc.\n            }\n        } catch (error) {\n            console.error(\"Error al intentar iniciar sesi\\xf3n:\", error);\n        }\n    };\n    const logout = ()=>{\n        setIsLoggedIn(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Simula la verificación del estado de autenticación en el montaje del componente.\n        setIsLoggedIn(true);\n    }, []);\n    const contextValue = {\n        isLoggedIn,\n        login,\n        logout\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: contextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/gbarrera/Library/CloudStorage/GoogleDrive-gonzalofotoguitarra@gmail.com/Mi unidad/Desarrollo/Desafios/CRUD/client/src/components/AuthContext.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (!context) {\n        throw new Error(\"useAuth must be used within an AuthProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRoQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkJBQTZCOztBQU9kO0FBWWYsTUFBTUksNEJBQWNKLG9EQUFhQSxDQUErQks7QUFFekQsTUFBTUMsZUFBNEMsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDcEUsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1PLFFBQVEsT0FBT0MsVUFBa0JDO1FBQ3JDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sbUNBQW1DO2dCQUM5REMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVSO29CQUFVQztnQkFBUztZQUM1QztZQUVBLE1BQU1RLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtZQUVoQyxJQUFJRCxLQUFLRSxPQUFPLEVBQUU7Z0JBQ2hCYixjQUFjO2dCQUNkYyxPQUFPQyxJQUFJLENBQUM7WUFDZCxPQUFPO1lBQ0wsNkNBQTZDO1lBQy9DO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx3Q0FBcUNBO1FBQ3JEO0lBQ0Y7SUFFQSxNQUFNRSxTQUFTO1FBQ2JsQixjQUFjO0lBQ2hCO0lBRUFQLGdEQUFTQSxDQUFDO1FBQ1IsbUZBQW1GO1FBQ25GTyxjQUFjO0lBQ2hCLEdBQUcsRUFBRTtJQUVMLE1BQU1tQixlQUFpQztRQUNyQ3BCO1FBQ0FFO1FBQ0FpQjtJQUNGO0lBRUEscUJBQ0UsOERBQUN2QixZQUFZeUIsUUFBUTtRQUFDQyxPQUFPRjtrQkFBZXJCOzs7Ozs7QUFFaEQsRUFBRTtBQUVLLE1BQU13QixVQUFVO0lBQ3JCLE1BQU1DLFVBQVUvQixpREFBVUEsQ0FBQ0c7SUFFM0IsSUFBSSxDQUFDNEIsU0FBUztRQUNaLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUVBLE9BQU9EO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9jb21wb25lbnRzL0F1dGhDb250ZXh0LnRzeD85M2Q1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvQXV0aENvbnRleHQudHN4XG5pbXBvcnQge1xuICBjcmVhdGVDb250ZXh0LFxuICB1c2VDb250ZXh0LFxuICBSZWFjdE5vZGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgQXV0aFByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5pbnRlcmZhY2UgQXV0aENvbnRleHRWYWx1ZSB7XG4gIGlzTG9nZ2VkSW46IGJvb2xlYW47XG4gIGxvZ2luOiAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgbG9nb3V0OiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHRWYWx1ZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlcjogUmVhY3QuRkM8QXV0aFByb3ZpZGVyUHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9sb2dpblwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuICAgICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNYW5lamFyIGVsIGVycm9yLCBtb3N0cmFyIHVuIG1lbnNhamUsIGV0Yy5cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIGludGVudGFyIGluaWNpYXIgc2VzacOzbjpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTaW11bGEgbGEgdmVyaWZpY2FjacOzbiBkZWwgZXN0YWRvIGRlIGF1dGVudGljYWNpw7NuIGVuIGVsIG1vbnRhamUgZGVsIGNvbXBvbmVudGUuXG4gICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNvbnRleHRWYWx1ZTogQXV0aENvbnRleHRWYWx1ZSA9IHtcbiAgICBpc0xvZ2dlZEluLFxuICAgIGxvZ2luLFxuICAgIGxvZ291dCxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT57Y2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCk6IEF1dGhDb250ZXh0VmFsdWUgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQXV0aCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlclwiKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXV0aENvbnRleHQiLCJ1bmRlZmluZWQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwic3VjY2VzcyIsInJvdXRlciIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2dvdXQiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AuthContext */ \"./src/components/AuthContext.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/gbarrera/Library/CloudStorage/GoogleDrive-gonzalofotoguitarra@gmail.com/Mi unidad/Desarrollo/Desafios/CRUD/client/src/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gbarrera/Library/CloudStorage/GoogleDrive-gonzalofotoguitarra@gmail.com/Mi unidad/Desarrollo/Desafios/CRUD/client/src/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN5RDtBQUMxQjtBQUUvQixNQUFNQyxRQUE0QixDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3pELHFCQUNFLDhEQUFDSCxpRUFBWUE7a0JBQ1gsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmNvbnN0IE15QXBwOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



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
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();