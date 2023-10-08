"use strict";
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

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req })=>{\n    if (true) {\n        //inside server\n        return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n            baseURL: \"http://ingress-nginx-controller.ingress-nginx.svc.cluster.local\",\n            headers: req.headers\n        });\n    } else {}\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLGlFQUFlLENBQUMsRUFBRUMsR0FBRyxFQUFFO0lBQ3JCLElBQUksSUFBa0IsRUFBYTtRQUNqQyxlQUFlO1FBRWYsT0FBT0Qsb0RBQVksQ0FBQztZQUNsQkcsU0FBUztZQUNUQyxTQUFTSCxJQUFJRyxPQUFPO1FBQ3RCO0lBQ0YsT0FBTyxFQU1OO0FBQ0gsR0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2FwaS9idWlsZC1jbGllbnQuanM/YzZmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyByZXEgfSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvL2luc2lkZSBzZXJ2ZXJcbiAgICBcbiAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcbiAgICAgIGJhc2VVUkw6ICdodHRwOi8vaW5ncmVzcy1uZ2lueC1jb250cm9sbGVyLmluZ3Jlc3Mtbmdpbnguc3ZjLmNsdXN0ZXIubG9jYWwnLFxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnNcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvL2luc2lkZSBicm93c2VyXG5cbiAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcbiAgICAgIGJhc2VVUkw6ICcvJ1xuICAgIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ currentUser })=>{\n    const links = [\n        !currentUser && {\n            label: \"Sign Up\",\n            href: \"/auth/signup\"\n        },\n        !currentUser && {\n            label: \"Sign In\",\n            href: \"/auth/signin\"\n        },\n        currentUser && {\n            label: \"Sign Out\",\n            href: \"/auth/signout\"\n        }\n    ].filter((linkConfig)=>linkConfig).map(({ label, href })=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: href,\n                className: \"nav-link\",\n                children: label\n            }, void 0, false, {\n                fileName: \"/home/km/repo/ticketing/client/components/Header.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        }, href, false, {\n            fileName: \"/home/km/repo/ticketing/client/components/Header.js\",\n            lineNumber: 13,\n            columnNumber: 12\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-light bg-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"navbar-brand\",\n                children: \"GitTix\"\n            }, void 0, false, {\n                fileName: \"/home/km/repo/ticketing/client/components/Header.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav d-flex align-items-center\",\n                    children: links\n                }, void 0, false, {\n                    fileName: \"/home/km/repo/ticketing/client/components/Header.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/km/repo/ticketing/client/components/Header.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/km/repo/ticketing/client/components/Header.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFHN0IsaUVBQWUsQ0FBQyxFQUFFQyxXQUFXLEVBQUU7SUFFN0IsTUFBTUMsUUFBUTtRQUNaLENBQUNELGVBQWU7WUFBRUUsT0FBTztZQUFXQyxNQUFNO1FBQWU7UUFDekQsQ0FBQ0gsZUFBZTtZQUFFRSxPQUFPO1lBQVdDLE1BQU07UUFBZTtRQUN6REgsZUFBZTtZQUFFRSxPQUFPO1lBQVlDLE1BQU07UUFBZ0I7S0FDM0QsQ0FDQUMsTUFBTSxDQUFDQyxDQUFBQSxhQUFjQSxZQUNyQkMsR0FBRyxDQUFDLENBQUMsRUFBRUosS0FBSyxFQUFFQyxJQUFJLEVBQUU7UUFDbkIscUJBQU8sOERBQUNJO1lBQWNDLFdBQVU7c0JBQzlCLDRFQUFDVCxrREFBSUE7Z0JBQUNJLE1BQU1BO2dCQUFNSyxXQUFVOzBCQUFZTjs7Ozs7O1dBRDFCQzs7Ozs7SUFHbEI7SUFFQSxxQkFDRSw4REFBQ007UUFBSUQsV0FBVTs7MEJBQ2IsOERBQUNULGtEQUFJQTtnQkFBQ0ksTUFBSztnQkFBSUssV0FBVTswQkFBZTs7Ozs7OzBCQUV4Qyw4REFBQ0U7Z0JBQUlGLFdBQVU7MEJBQ2IsNEVBQUNHO29CQUFHSCxXQUFVOzhCQUNYUDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWCxHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcblxuICBjb25zdCBsaW5rcyA9IFtcbiAgICAhY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NpZ24gVXAnLCBocmVmOiAnL2F1dGgvc2lnbnVwJyB9LFxuICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBJbicsIGhyZWY6ICcvYXV0aC9zaWduaW4nIH0sXG4gICAgY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NpZ24gT3V0JywgaHJlZjogJy9hdXRoL3NpZ25vdXQnIH1cbiAgXVxuICAuZmlsdGVyKGxpbmtDb25maWcgPT4gbGlua0NvbmZpZylcbiAgLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XG4gICAgcmV0dXJuIDxsaSBrZXk9e2hyZWZ9IGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlxuICAgICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPSduYXYtbGluayc+e2xhYmVsfTwvTGluaz5cbiAgICA8L2xpPlxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJz5HaXRUaXg8L0xpbms+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCc+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J25hdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICB7bGlua3N9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJMaW5rIiwiY3VycmVudFVzZXIiLCJsaW5rcyIsImxhYmVsIiwiaHJlZiIsImZpbHRlciIsImxpbmtDb25maWciLCJtYXAiLCJsaSIsImNsYXNzTmFtZSIsIm5hdiIsImRpdiIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_build_client__WEBPACK_IMPORTED_MODULE_2__]);\n_api_build_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AppComponent = ({ Component, pageProps, currentUser })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentUser: currentUser\n            }, void 0, false, {\n                fileName: \"/home/km/repo/ticketing/client/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/km/repo/ticketing/client/pages/_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/km/repo/ticketing/client/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\nAppComponent.getInitialProps = async (appContext)=>{\n    const { data } = await (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(appContext.ctx).get(\"/api/users/currentuser\");\n    let pageProps = {};\n    if (appContext.Component.getInitialProps) {\n        pageProps = await appContext.Component.getInitialProps(appContext.ctx);\n    }\n    return {\n        pageProps,\n        currentUser: data.currentUser\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppComponent);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBRUk7QUFDSjtBQUUxQyxNQUFNRSxlQUFlLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRTtJQUN6RCxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDTCwwREFBTUE7Z0JBQUNJLGFBQWFBOzs7Ozs7MEJBQ3JCLDhEQUFDRjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQUYsYUFBYUssZUFBZSxHQUFHLE9BQU9DO0lBQ3BDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTVQsNkRBQVdBLENBQUNRLFdBQVdFLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBRXZELElBQUlQLFlBQVksQ0FBQztJQUVqQixJQUFJSSxXQUFXTCxTQUFTLENBQUNJLGVBQWUsRUFBRTtRQUN4Q0gsWUFBWSxNQUFNSSxXQUFXTCxTQUFTLENBQUNJLGVBQWUsQ0FBQ0MsV0FBV0UsR0FBRztJQUN2RTtJQUVBLE9BQU87UUFDTE47UUFDQUMsYUFBYUksS0FBS0osV0FBVztJQUMvQjtBQUNGO0FBR0EsaUVBQWVILFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XG5cbmltcG9ydCBidWlsZENsaWVudCBmcm9tICcuLi9hcGkvYnVpbGQtY2xpZW50JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuXG5jb25zdCBBcHBDb21wb25lbnQgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgY3VycmVudFVzZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0vPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkFwcENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGJ1aWxkQ2xpZW50KGFwcENvbnRleHQuY3R4KS5nZXQoJy9hcGkvdXNlcnMvY3VycmVudHVzZXInKTtcblxuICBsZXQgcGFnZVByb3BzID0ge307XG5cbiAgaWYgKGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0LmN0eCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhZ2VQcm9wcyxcbiAgICBjdXJyZW50VXNlcjogZGF0YS5jdXJyZW50VXNlclxuICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBBcHBDb21wb25lbnQ7Il0sIm5hbWVzIjpbImJ1aWxkQ2xpZW50IiwiSGVhZGVyIiwiQXBwQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VycmVudFVzZXIiLCJkaXYiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiZGF0YSIsImN0eCIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();