"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ui/ListItem.tsx":
/*!****************************************!*\
  !*** ./src/components/ui/ListItem.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ListItem)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n\n\nfunction ListItem(param) {\n    let { icon, title, description, selected = false, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"px-3 py-1 hover:bg-gray-100 cursor-pointer flex items-center gap-2\", selected && \"bg-gray-100\"),\n        onClick: onClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-shrink-0 text-gray-600\",\n                children: icon\n            }, void 0, false, {\n                fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/ui/ListItem.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-2 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xs truncate max-w-[80%]\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/ui/ListItem.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-xs text-gray-500 truncate flex-1\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/ui/ListItem.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/ui/ListItem.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/ui/ListItem.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_c = ListItem;\nvar _c;\n$RefreshReg$(_c, \"ListItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL0xpc3RJdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2lDO0FBVWxCLFNBQVNDLFNBQVMsS0FNakI7UUFOaUIsRUFDL0JDLElBQUksRUFDSkMsS0FBSyxFQUNMQyxXQUFXLEVBQ1hDLFdBQVcsS0FBSyxFQUNoQkMsT0FBTyxFQUNPLEdBTmlCO0lBTy9CLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFXUiw4Q0FBRUEsQ0FDWCxzRUFDQUssWUFBWTtRQUVkQyxTQUFTQTs7MEJBR1QsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUErQk47Ozs7OzswQkFHOUMsOERBQUNLO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQWdDTDs7Ozs7O29CQUM5Q0MsNkJBQ0M7a0NBQ0UsNEVBQUNHOzRCQUFJQyxXQUFVO3NDQUNaSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mO0tBL0J3QkgiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXlhZ2FvL2Rldi9mbHVpZC1wcm9tcHQtZWRpdG9yL3NyYy9jb21wb25lbnRzL3VpL0xpc3RJdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmludGVyZmFjZSBMaXN0SXRlbVByb3BzIHtcbiAgaWNvbjogUmVhY3ROb2RlO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RJdGVtKHtcbiAgaWNvbixcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBzZWxlY3RlZCA9IGZhbHNlLFxuICBvbkNsaWNrLFxufTogTGlzdEl0ZW1Qcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwicHgtMyBweS0xIGhvdmVyOmJnLWdyYXktMTAwIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCIsXG4gICAgICAgIHNlbGVjdGVkICYmIFwiYmctZ3JheS0xMDBcIlxuICAgICAgKX1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAgey8qIEljb24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdGV4dC1ncmF5LTYwMFwiPntpY29ufTwvZGl2PlxuXG4gICAgICB7LyogVGl0bGUgYW5kIERlc2NyaXB0aW9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRydW5jYXRlIG1heC13LVs4MCVdXCI+e3RpdGxlfTwvZGl2PlxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCB0cnVuY2F0ZSBmbGV4LTFcIj5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjbiIsIkxpc3RJdGVtIiwiaWNvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZWxlY3RlZCIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/ListItem.tsx\n"));

/***/ })

});