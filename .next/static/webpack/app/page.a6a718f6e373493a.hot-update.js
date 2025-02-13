/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/PrimitiveSelector/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/PrimitiveSelector/index.tsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PrimitiveSelector)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @primer/octicons-react */ \"(app-pages-browser)/./node_modules/@primer/octicons-react/dist/index.esm.mjs\");\n/* harmony import */ var _components_ui_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/ListItem */ \"(app-pages-browser)/./src/components/ui/ListItem.tsx\");\n/* harmony import */ var _data_samples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/samples */ \"(app-pages-browser)/./src/data/samples.ts\");\n/* harmony import */ var _data_samples__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_samples__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useSearch */ \"(app-pages-browser)/./src/hooks/useSearch.ts\");\n/* harmony import */ var _hooks_useSearch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hooks_useSearch__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ACTIONS = [\n    {\n        id: \"file\",\n        label: \"Add a text file\",\n        icon: \"file\",\n        type: \"file\"\n    },\n    {\n        id: \"link\",\n        label: \"Add an external link\",\n        icon: \"link\",\n        type: \"link\"\n    },\n    {\n        id: \"upload\",\n        label: \"Upload from computer\",\n        icon: \"upload\",\n        type: \"upload\"\n    }\n];\nfunction PrimitiveSelector(param) {\n    let { isOpen, position, query, onClose } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [repos, setRepos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_samples__WEBPACK_IMPORTED_MODULE_3__.SAMPLE_REPOS);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Use the search hook\n    const filteredRepos = (0,_hooks_useSearch__WEBPACK_IMPORTED_MODULE_4__.useSearch)(repos, query, [\n        \"name\",\n        \"description\"\n    ]);\n    const filteredActions = (0,_hooks_useSearch__WEBPACK_IMPORTED_MODULE_4__.useSearch)(ACTIONS, query, [\n        \"label\"\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PrimitiveSelector.useEffect\": ()=>{\n            const fetchRepos = {\n                \"PrimitiveSelector.useEffect.fetchRepos\": async ()=>{\n                    try {\n                        const token = \"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\";\n                        if (!token) {\n                            setLoading(false);\n                            return; // Use sample data if no token\n                        }\n                        const response = await fetch(\"https://api.github.com/orgs/langchain-ai/repos?sort=updated&per_page=4\", {\n                            headers: {\n                                Authorization: \"Bearer \".concat(token),\n                                Accept: \"application/vnd.github.v3+json\"\n                            }\n                        });\n                        if (!response.ok) {\n                            throw new Error(\"GitHub API error: \".concat(response.statusText));\n                        }\n                        const data = await response.json();\n                        if (Array.isArray(data)) {\n                            setRepos(data.map({\n                                \"PrimitiveSelector.useEffect.fetchRepos\": (repo)=>({\n                                        id: repo.id.toString(),\n                                        name: repo.name,\n                                        description: repo.description || null,\n                                        fullName: repo.full_name\n                                    })\n                            }[\"PrimitiveSelector.useEffect.fetchRepos\"]));\n                        }\n                    } catch (err) {\n                        console.error(\"Failed to fetch repos:\", err);\n                        setError(err instanceof Error ? err.message : \"Failed to fetch repos\");\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"PrimitiveSelector.useEffect.fetchRepos\"];\n            if (isOpen) {\n                fetchRepos();\n            }\n        }\n    }[\"PrimitiveSelector.useEffect\"], [\n        isOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PrimitiveSelector.useEffect\": ()=>{\n            function handleClickOutside(event) {\n                if (ref.current && !ref.current.contains(event.target)) {\n                    onClose();\n                }\n            }\n            document.addEventListener(\"mousedown\", handleClickOutside);\n            return ({\n                \"PrimitiveSelector.useEffect\": ()=>document.removeEventListener(\"mousedown\", handleClickOutside)\n            })[\"PrimitiveSelector.useEffect\"];\n        }\n    }[\"PrimitiveSelector.useEffect\"], [\n        onClose\n    ]);\n    if (!isOpen) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: \"fixed z-50 w-[300px] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden\",\n        style: {\n            top: position.top + 4,\n            left: position.left\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-h-[300px] overflow-y-auto\",\n            children: [\n                filteredRepos.map((repo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_ListItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_5__.RepoIcon, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 19\n                        }, void 0),\n                        title: repo.name,\n                        description: repo.description\n                    }, repo.id, false, {\n                        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-3 py-2 text-xs text-gray-500\",\n                    children: \"View all options\"\n                }, void 0, false, {\n                    fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, this),\n                filteredActions.map((action)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_ListItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        icon: action.type === \"file\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_5__.FileIcon, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 17\n                        }, void 0) : action.type === \"link\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_5__.LinkIcon, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 17\n                        }, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_5__.UploadIcon, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n                            lineNumber: 140,\n                            columnNumber: 17\n                        }, void 0),\n                        title: action.label\n                    }, action.id, false, {\n                        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 11\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n}\n_s(PrimitiveSelector, \"K8daWpJlI/Fecfm9MM0zXsxG/G8=\", false, function() {\n    return [\n        _hooks_useSearch__WEBPACK_IMPORTED_MODULE_4__.useSearch,\n        _hooks_useSearch__WEBPACK_IMPORTED_MODULE_4__.useSearch\n    ];\n});\n_c = PrimitiveSelector;\nvar _c;\n$RefreshReg$(_c, \"PrimitiveSelector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1ByaW1pdGl2ZVNlbGVjdG9yL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFRcEI7QUFDZ0I7QUFDRjtBQUNBO0FBUzlDLE1BQU1VLFVBQW9CO0lBQ3hCO1FBQUVDLElBQUk7UUFBUUMsT0FBTztRQUFtQkMsTUFBTTtRQUFRQyxNQUFNO0lBQU87SUFDbkU7UUFBRUgsSUFBSTtRQUFRQyxPQUFPO1FBQXdCQyxNQUFNO1FBQVFDLE1BQU07SUFBTztJQUN4RTtRQUNFSCxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRDtBQUVjLFNBQVNDLGtCQUFrQixLQUtqQjtRQUxpQixFQUN4Q0MsTUFBTSxFQUNOQyxRQUFRLEVBQ1JDLEtBQUssRUFDTEMsT0FBTyxFQUNnQixHQUxpQjs7SUFNeEMsTUFBTUMsTUFBTW5CLDZDQUFNQSxDQUFpQjtJQUNuQyxNQUFNLENBQUNvQixPQUFPQyxTQUFTLEdBQUdwQiwrQ0FBUUEsQ0FBZU0sdURBQVlBO0lBQzdELE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHdEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDdUIsT0FBT0MsU0FBUyxHQUFHeEIsK0NBQVFBLENBQWdCO0lBRWxELHNCQUFzQjtJQUN0QixNQUFNeUIsZ0JBQWdCbEIsMkRBQVNBLENBQUNZLE9BQU9ILE9BQU87UUFBQztRQUFRO0tBQWM7SUFDckUsTUFBTVUsa0JBQWtCbkIsMkRBQVNBLENBQUNDLFNBQVNRLE9BQU87UUFBQztLQUFRO0lBRTNEbEIsZ0RBQVNBO3VDQUFDO1lBQ1IsTUFBTTZCOzBEQUFhO29CQUNqQixJQUFJO3dCQUNGLE1BQU1DLFFBQVFDLCtGQUFvQzt3QkFDbEQsSUFBSSxDQUFDRCxPQUFPOzRCQUNWTixXQUFXOzRCQUNYLFFBQVEsOEJBQThCO3dCQUN4Qzt3QkFFQSxNQUFNVSxXQUFXLE1BQU1DLE1BQ3JCLDBFQUNBOzRCQUNFQyxTQUFTO2dDQUNQQyxlQUFlLFVBQWdCLE9BQU5QO2dDQUN6QlEsUUFBUTs0QkFDVjt3QkFDRjt3QkFHRixJQUFJLENBQUNKLFNBQVNLLEVBQUUsRUFBRTs0QkFDaEIsTUFBTSxJQUFJQyxNQUFNLHFCQUF5QyxPQUFwQk4sU0FBU08sVUFBVTt3QkFDMUQ7d0JBRUEsTUFBTUMsT0FBTyxNQUFNUixTQUFTUyxJQUFJO3dCQUNoQyxJQUFJQyxNQUFNQyxPQUFPLENBQUNILE9BQU87NEJBQ3ZCcEIsU0FDRW9CLEtBQUtJLEdBQUc7MEVBQUMsQ0FBQ0MsT0FBVTt3Q0FDbEJwQyxJQUFJb0MsS0FBS3BDLEVBQUUsQ0FBQ3FDLFFBQVE7d0NBQ3BCQyxNQUFNRixLQUFLRSxJQUFJO3dDQUNmQyxhQUFhSCxLQUFLRyxXQUFXLElBQUk7d0NBQ2pDQyxVQUFVSixLQUFLSyxTQUFTO29DQUMxQjs7d0JBRUo7b0JBQ0YsRUFBRSxPQUFPQyxLQUFLO3dCQUNaQyxRQUFRN0IsS0FBSyxDQUFDLDBCQUEwQjRCO3dCQUN4QzNCLFNBQVMyQixlQUFlYixRQUFRYSxJQUFJRSxPQUFPLEdBQUc7b0JBQ2hELFNBQVU7d0JBQ1IvQixXQUFXO29CQUNiO2dCQUNGOztZQUVBLElBQUlSLFFBQVE7Z0JBQ1ZhO1lBQ0Y7UUFDRjtzQ0FBRztRQUFDYjtLQUFPO0lBRVhoQixnREFBU0E7dUNBQUM7WUFDUixTQUFTd0QsbUJBQW1CQyxLQUFpQjtnQkFDM0MsSUFBSXJDLElBQUlzQyxPQUFPLElBQUksQ0FBQ3RDLElBQUlzQyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsTUFBTUcsTUFBTSxHQUFXO29CQUM5RHpDO2dCQUNGO1lBQ0Y7WUFFQTBDLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFOO1lBQ3ZDOytDQUFPLElBQU1LLFNBQVNFLG1CQUFtQixDQUFDLGFBQWFQOztRQUN6RDtzQ0FBRztRQUFDckM7S0FBUTtJQUVaLElBQUksQ0FBQ0gsUUFBUSxPQUFPO0lBRXBCLHFCQUNFLDhEQUFDZ0Q7UUFDQzVDLEtBQUtBO1FBQ0w2QyxXQUFVO1FBQ1ZDLE9BQU87WUFDTEMsS0FBS2xELFNBQVNrRCxHQUFHLEdBQUc7WUFDcEJDLE1BQU1uRCxTQUFTbUQsSUFBSTtRQUNyQjtrQkFFQSw0RUFBQ0o7WUFBSUMsV0FBVTs7Z0JBRVp0QyxjQUFjbUIsR0FBRyxDQUFDLENBQUNDLHFCQUNsQiw4REFBQ3hDLCtEQUFRQTt3QkFFUE0sb0JBQU0sOERBQUNWLDREQUFRQTs0QkFBQ2tFLE1BQU07Ozs7Ozt3QkFDdEJDLE9BQU92QixLQUFLRSxJQUFJO3dCQUNoQkMsYUFBYUgsS0FBS0csV0FBVzt1QkFIeEJILEtBQUtwQyxFQUFFOzs7Ozs4QkFRaEIsOERBQUNxRDtvQkFBSUMsV0FBVTs4QkFBa0M7Ozs7OztnQkFHaERyQyxnQkFBZ0JrQixHQUFHLENBQUMsQ0FBQ3lCLHVCQUNwQiw4REFBQ2hFLCtEQUFRQTt3QkFFUE0sTUFDRTBELE9BQU96RCxJQUFJLEtBQUssdUJBQ2QsOERBQUNWLDREQUFRQTs0QkFBQ2lFLE1BQU07Ozs7O3FDQUNkRSxPQUFPekQsSUFBSSxLQUFLLHVCQUNsQiw4REFBQ1QsNERBQVFBOzRCQUFDZ0UsTUFBTTs7Ozs7bURBRWhCLDhEQUFDL0QsOERBQVVBOzRCQUFDK0QsTUFBTTs7Ozs7O3dCQUd0QkMsT0FBT0MsT0FBTzNELEtBQUs7dUJBVmQyRCxPQUFPNUQsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCMUI7R0FySHdCSTs7UUFZQU4sdURBQVNBO1FBQ1BBLHVEQUFTQTs7O0tBYlhNIiwic291cmNlcyI6WyIvVXNlcnMvbWF5YWdhby9kZXYvZmx1aWQtcHJvbXB0LWVkaXRvci9zcmMvY29tcG9uZW50cy9QcmltaXRpdmVTZWxlY3Rvci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCJAL3R5cGVzL3NoYXJlZFwiO1xuaW1wb3J0IHsgUHJpbWl0aXZlSXRlbSwgUmVwb3NpdG9yeSwgQWN0aW9uIH0gZnJvbSBcIkAvdHlwZXMvcHJpbWl0aXZlc1wiO1xuaW1wb3J0IHtcbiAgUmVwb0ljb24sXG4gIEZpbGVJY29uLFxuICBMaW5rSWNvbixcbiAgVXBsb2FkSWNvbixcbn0gZnJvbSBcIkBwcmltZXIvb2N0aWNvbnMtcmVhY3RcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL0xpc3RJdGVtXCI7XG5pbXBvcnQgeyBTQU1QTEVfUkVQT1MgfSBmcm9tIFwiQC9kYXRhL3NhbXBsZXNcIjtcbmltcG9ydCB7IHVzZVNlYXJjaCB9IGZyb20gXCJAL2hvb2tzL3VzZVNlYXJjaFwiO1xuXG5pbnRlcmZhY2UgUHJpbWl0aXZlU2VsZWN0b3JQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgcG9zaXRpb246IFBvc2l0aW9uO1xuICBxdWVyeTogc3RyaW5nO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBBQ1RJT05TOiBBY3Rpb25bXSA9IFtcbiAgeyBpZDogXCJmaWxlXCIsIGxhYmVsOiBcIkFkZCBhIHRleHQgZmlsZVwiLCBpY29uOiBcImZpbGVcIiwgdHlwZTogXCJmaWxlXCIgfSxcbiAgeyBpZDogXCJsaW5rXCIsIGxhYmVsOiBcIkFkZCBhbiBleHRlcm5hbCBsaW5rXCIsIGljb246IFwibGlua1wiLCB0eXBlOiBcImxpbmtcIiB9LFxuICB7XG4gICAgaWQ6IFwidXBsb2FkXCIsXG4gICAgbGFiZWw6IFwiVXBsb2FkIGZyb20gY29tcHV0ZXJcIixcbiAgICBpY29uOiBcInVwbG9hZFwiLFxuICAgIHR5cGU6IFwidXBsb2FkXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmltaXRpdmVTZWxlY3Rvcih7XG4gIGlzT3BlbixcbiAgcG9zaXRpb24sXG4gIHF1ZXJ5LFxuICBvbkNsb3NlLFxufTogUHJpbWl0aXZlU2VsZWN0b3JQcm9wcykge1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbcmVwb3MsIHNldFJlcG9zXSA9IHVzZVN0YXRlPFJlcG9zaXRvcnlbXT4oU0FNUExFX1JFUE9TKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgLy8gVXNlIHRoZSBzZWFyY2ggaG9va1xuICBjb25zdCBmaWx0ZXJlZFJlcG9zID0gdXNlU2VhcmNoKHJlcG9zLCBxdWVyeSwgW1wibmFtZVwiLCBcImRlc2NyaXB0aW9uXCJdKTtcbiAgY29uc3QgZmlsdGVyZWRBY3Rpb25zID0gdXNlU2VhcmNoKEFDVElPTlMsIHF1ZXJ5LCBbXCJsYWJlbFwiXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFJlcG9zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HSVRIVUJfVE9LRU47XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm47IC8vIFVzZSBzYW1wbGUgZGF0YSBpZiBubyB0b2tlblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vb3Jncy9sYW5nY2hhaW4tYWkvcmVwb3M/c29ydD11cGRhdGVkJnBlcl9wYWdlPTRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBHaXRIdWIgQVBJIGVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgIHNldFJlcG9zKFxuICAgICAgICAgICAgZGF0YS5tYXAoKHJlcG8pID0+ICh7XG4gICAgICAgICAgICAgIGlkOiByZXBvLmlkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIG5hbWU6IHJlcG8ubmFtZSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlcG8uZGVzY3JpcHRpb24gfHwgbnVsbCxcbiAgICAgICAgICAgICAgZnVsbE5hbWU6IHJlcG8uZnVsbF9uYW1lLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggcmVwb3M6XCIsIGVycik7XG4gICAgICAgIHNldEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byBmZXRjaCByZXBvc1wiKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICBmZXRjaFJlcG9zKCk7XG4gICAgfVxuICB9LCBbaXNPcGVuXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmIChyZWYuY3VycmVudCAmJiAhcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpKSB7XG4gICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgfSwgW29uQ2xvc2VdKTtcblxuICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHotNTAgdy1bMzAwcHhdIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDAgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHRvcDogcG9zaXRpb24udG9wICsgNCxcbiAgICAgICAgbGVmdDogcG9zaXRpb24ubGVmdCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC1bMzAwcHhdIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICB7LyogUmVwb3NpdG9yaWVzICovfVxuICAgICAgICB7ZmlsdGVyZWRSZXBvcy5tYXAoKHJlcG8pID0+IChcbiAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgIGtleT17cmVwby5pZH1cbiAgICAgICAgICAgIGljb249ezxSZXBvSWNvbiBzaXplPXsxNn0gLz59XG4gICAgICAgICAgICB0aXRsZT17cmVwby5uYW1lfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3JlcG8uZGVzY3JpcHRpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG5cbiAgICAgICAgey8qIERpdmlkZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMyBweS0yIHRleHQteHMgdGV4dC1ncmF5LTUwMFwiPlZpZXcgYWxsIG9wdGlvbnM8L2Rpdj5cblxuICAgICAgICB7LyogQWN0aW9ucyAqL31cbiAgICAgICAge2ZpbHRlcmVkQWN0aW9ucy5tYXAoKGFjdGlvbikgPT4gKFxuICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAga2V5PXthY3Rpb24uaWR9XG4gICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgYWN0aW9uLnR5cGUgPT09IFwiZmlsZVwiID8gKFxuICAgICAgICAgICAgICAgIDxGaWxlSWNvbiBzaXplPXsxNn0gLz5cbiAgICAgICAgICAgICAgKSA6IGFjdGlvbi50eXBlID09PSBcImxpbmtcIiA/IChcbiAgICAgICAgICAgICAgICA8TGlua0ljb24gc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFVwbG9hZEljb24gc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpdGxlPXthY3Rpb24ubGFiZWx9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlJlcG9JY29uIiwiRmlsZUljb24iLCJMaW5rSWNvbiIsIlVwbG9hZEljb24iLCJMaXN0SXRlbSIsIlNBTVBMRV9SRVBPUyIsInVzZVNlYXJjaCIsIkFDVElPTlMiLCJpZCIsImxhYmVsIiwiaWNvbiIsInR5cGUiLCJQcmltaXRpdmVTZWxlY3RvciIsImlzT3BlbiIsInBvc2l0aW9uIiwicXVlcnkiLCJvbkNsb3NlIiwicmVmIiwicmVwb3MiLCJzZXRSZXBvcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImZpbHRlcmVkUmVwb3MiLCJmaWx0ZXJlZEFjdGlvbnMiLCJmZXRjaFJlcG9zIiwidG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR0lUSFVCX1RPS0VOIiwicmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQWNjZXB0Iiwib2siLCJFcnJvciIsInN0YXR1c1RleHQiLCJkYXRhIiwianNvbiIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsInJlcG8iLCJ0b1N0cmluZyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImZ1bGxOYW1lIiwiZnVsbF9uYW1lIiwiZXJyIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJzaXplIiwidGl0bGUiLCJhY3Rpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PrimitiveSelector/index.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/data/samples.ts":
/*!*****************************!*\
  !*** ./src/data/samples.ts ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/hooks/useSearch.ts":
/*!********************************!*\
  !*** ./src/hooks/useSearch.ts ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});