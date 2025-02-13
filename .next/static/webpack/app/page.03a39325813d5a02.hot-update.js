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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Editor */ \"(app-pages-browser)/./src/components/Editor/index.tsx\");\n/* harmony import */ var _components_PrimitiveSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PrimitiveSelector */ \"(app-pages-browser)/./src/components/PrimitiveSelector/index.tsx\");\n/* harmony import */ var _components_ReferenceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ReferenceList */ \"(app-pages-browser)/./src/components/ReferenceList/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [primitiveSelector, setPrimitiveSelector] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        isOpen: false,\n        position: {\n            top: 0,\n            left: 0\n        },\n        query: \"\"\n    });\n    const [references, setReferences] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleTriggerPrimitive = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)({\n        \"Home.useCallback[handleTriggerPrimitive]\": (trigger, position, query)=>{\n            setPrimitiveSelector({\n                isOpen: true,\n                position,\n                query\n            });\n        }\n    }[\"Home.useCallback[handleTriggerPrimitive]\"], []);\n    const handleClosePrimitive = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)({\n        \"Home.useCallback[handleClosePrimitive]\": ()=>{\n            setPrimitiveSelector({\n                \"Home.useCallback[handleClosePrimitive]\": (prev)=>({\n                        ...prev,\n                        isOpen: false,\n                        query: \"\"\n                    })\n            }[\"Home.useCallback[handleClosePrimitive]\"]);\n        }\n    }[\"Home.useCallback[handleClosePrimitive]\"], []);\n    const handleDelete = (id)=>{\n        setReferences((refs)=>refs.filter((ref)=>ref.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col p-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-4 max-w-4xl mx-auto w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Editor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            value: text,\n                            onChange: setText,\n                            onTriggerPrimitive: handleTriggerPrimitive,\n                            onClosePrimitive: handleClosePrimitive\n                        }, void 0, false, {\n                            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/app/page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PrimitiveSelector__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            isOpen: primitiveSelector.isOpen,\n                            position: primitiveSelector.position,\n                            query: primitiveSelector.query,\n                            onClose: handleClosePrimitive\n                        }, void 0, false, {\n                            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/app/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/app/page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ReferenceList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    references: references,\n                    onDelete: handleDelete\n                }, void 0, false, {\n                    fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/app/page.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/app/page.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/app/page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"IDOHzeI9TRPzjzdr+wfUjTx7mUU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRThDO0FBQ0w7QUFDc0I7QUFDUjtBQUl4QyxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1EsbUJBQW1CQyxxQkFBcUIsR0FBR1QsK0NBQVFBLENBQUM7UUFDekRVLFFBQVE7UUFDUkMsVUFBVTtZQUFFQyxLQUFLO1lBQUdDLE1BQU07UUFBRTtRQUM1QkMsT0FBTztJQUNUO0lBQ0EsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdoQiwrQ0FBUUEsQ0FBYyxFQUFFO0lBQzVELE1BQU1pQix5QkFBeUJoQixrREFBV0E7b0RBQ3hDLENBQUNpQixTQUFpQlAsVUFBb0JHO1lBQ3BDTCxxQkFBcUI7Z0JBQ25CQyxRQUFRO2dCQUNSQztnQkFDQUc7WUFDRjtRQUNGO21EQUNBLEVBQUU7SUFHSixNQUFNSyx1QkFBdUJsQixrREFBV0E7a0RBQUM7WUFDdkNROzBEQUFxQixDQUFDVyxPQUFVO3dCQUM5QixHQUFHQSxJQUFJO3dCQUNQVixRQUFRO3dCQUNSSSxPQUFPO29CQUNUOztRQUNGO2lEQUFHLEVBQUU7SUFFTCxNQUFNTyxlQUFlLENBQUNDO1FBQ3BCTixjQUFjLENBQUNPLE9BQVNBLEtBQUtDLE1BQU0sQ0FBQyxDQUFDQyxNQUFRQSxJQUFJSCxFQUFFLEtBQUtBO0lBQzFEO0lBRUEscUJBQ0UsOERBQUNJO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUN6QiwwREFBTUE7NEJBQ0wyQixPQUFPdkI7NEJBQ1B3QixVQUFVdkI7NEJBQ1Z3QixvQkFBb0JkOzRCQUNwQmUsa0JBQWtCYjs7Ozs7O3NDQUVwQiw4REFBQ2hCLHFFQUFpQkE7NEJBQ2hCTyxRQUFRRixrQkFBa0JFLE1BQU07NEJBQ2hDQyxVQUFVSCxrQkFBa0JHLFFBQVE7NEJBQ3BDRyxPQUFPTixrQkFBa0JNLEtBQUs7NEJBQzlCbUIsU0FBU2Q7Ozs7Ozs7Ozs7Ozs4QkFHYiw4REFBQ2YsaUVBQWFBO29CQUFDVyxZQUFZQTtvQkFBWW1CLFVBQVViOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl6RDtHQXBEd0JoQjtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL21heWFnYW8vZGV2L2ZsdWlkLXByb21wdC1lZGl0b3Ivc3JjL2FwcC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRWRpdG9yIGZyb20gXCJAL2NvbXBvbmVudHMvRWRpdG9yXCI7XG5pbXBvcnQgUHJpbWl0aXZlU2VsZWN0b3IgZnJvbSBcIkAvY29tcG9uZW50cy9QcmltaXRpdmVTZWxlY3RvclwiO1xuaW1wb3J0IFJlZmVyZW5jZUxpc3QgZnJvbSBcIkAvY29tcG9uZW50cy9SZWZlcmVuY2VMaXN0XCI7XG5pbXBvcnQgeyBSZWZlcmVuY2UgfSBmcm9tIFwiQC90eXBlcy9yZWZlcmVuY2VcIjtcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIkAvdHlwZXMvc2hhcmVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJpbWl0aXZlU2VsZWN0b3IsIHNldFByaW1pdGl2ZVNlbGVjdG9yXSA9IHVzZVN0YXRlKHtcbiAgICBpc09wZW46IGZhbHNlLFxuICAgIHBvc2l0aW9uOiB7IHRvcDogMCwgbGVmdDogMCB9LFxuICAgIHF1ZXJ5OiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW3JlZmVyZW5jZXMsIHNldFJlZmVyZW5jZXNdID0gdXNlU3RhdGU8UmVmZXJlbmNlW10+KFtdKTtcbiAgY29uc3QgaGFuZGxlVHJpZ2dlclByaW1pdGl2ZSA9IHVzZUNhbGxiYWNrKFxuICAgICh0cmlnZ2VyOiBzdHJpbmcsIHBvc2l0aW9uOiBQb3NpdGlvbiwgcXVlcnk6IHN0cmluZykgPT4ge1xuICAgICAgc2V0UHJpbWl0aXZlU2VsZWN0b3Ioe1xuICAgICAgICBpc09wZW46IHRydWUsXG4gICAgICAgIHBvc2l0aW9uLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZVByaW1pdGl2ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRQcmltaXRpdmVTZWxlY3RvcigocHJldikgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgcXVlcnk6IFwiXCIsXG4gICAgfSkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRSZWZlcmVuY2VzKChyZWZzKSA9PiByZWZzLmZpbHRlcigocmVmKSA9PiByZWYuaWQgIT09IGlkKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBwLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBtYXgtdy00eGwgbXgtYXV0byB3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldFRleHR9XG4gICAgICAgICAgICBvblRyaWdnZXJQcmltaXRpdmU9e2hhbmRsZVRyaWdnZXJQcmltaXRpdmV9XG4gICAgICAgICAgICBvbkNsb3NlUHJpbWl0aXZlPXtoYW5kbGVDbG9zZVByaW1pdGl2ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQcmltaXRpdmVTZWxlY3RvclxuICAgICAgICAgICAgaXNPcGVuPXtwcmltaXRpdmVTZWxlY3Rvci5pc09wZW59XG4gICAgICAgICAgICBwb3NpdGlvbj17cHJpbWl0aXZlU2VsZWN0b3IucG9zaXRpb259XG4gICAgICAgICAgICBxdWVyeT17cHJpbWl0aXZlU2VsZWN0b3IucXVlcnl9XG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVByaW1pdGl2ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFJlZmVyZW5jZUxpc3QgcmVmZXJlbmNlcz17cmVmZXJlbmNlc30gb25EZWxldGU9e2hhbmRsZURlbGV0ZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiRWRpdG9yIiwiUHJpbWl0aXZlU2VsZWN0b3IiLCJSZWZlcmVuY2VMaXN0IiwiSG9tZSIsInRleHQiLCJzZXRUZXh0IiwicHJpbWl0aXZlU2VsZWN0b3IiLCJzZXRQcmltaXRpdmVTZWxlY3RvciIsImlzT3BlbiIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInF1ZXJ5IiwicmVmZXJlbmNlcyIsInNldFJlZmVyZW5jZXMiLCJoYW5kbGVUcmlnZ2VyUHJpbWl0aXZlIiwidHJpZ2dlciIsImhhbmRsZUNsb3NlUHJpbWl0aXZlIiwicHJldiIsImhhbmRsZURlbGV0ZSIsImlkIiwicmVmcyIsImZpbHRlciIsInJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25UcmlnZ2VyUHJpbWl0aXZlIiwib25DbG9zZVByaW1pdGl2ZSIsIm9uQ2xvc2UiLCJvbkRlbGV0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});