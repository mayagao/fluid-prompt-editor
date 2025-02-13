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

/***/ "(app-pages-browser)/./src/components/PrimitiveSelector/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/PrimitiveSelector/index.tsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PrimitiveSelector)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @primer/octicons-react */ \"(app-pages-browser)/./node_modules/@primer/octicons-react/dist/index.esm.mjs\");\n/* harmony import */ var _components_ui_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/ListItem */ \"(app-pages-browser)/./src/components/ui/ListItem.tsx\");\n/* harmony import */ var _data_samples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/samples */ \"(app-pages-browser)/./src/data/samples.ts\");\n/* harmony import */ var _hooks_useSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useSearch */ \"(app-pages-browser)/./src/hooks/useSearch.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ACTIONS = [\n    {\n        id: \"file\",\n        label: \"Add a text file\",\n        icon: \"file\",\n        type: \"file\"\n    },\n    {\n        id: \"link\",\n        label: \"Add an external link\",\n        icon: \"link\",\n        type: \"link\"\n    },\n    {\n        id: \"upload\",\n        label: \"Upload from computer\",\n        icon: \"upload\",\n        type: \"upload\"\n    }\n];\nfunction PrimitiveSelector(param) {\n    let { isOpen, position, query, onClose } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [repos, setRepos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_samples__WEBPACK_IMPORTED_MODULE_3__.SAMPLE_REPOS);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Use the search hook\n    const filteredRepos = (0,_hooks_useSearch__WEBPACK_IMPORTED_MODULE_4__.useSearch)(repos, query, [\n        \"name\",\n        \"description\"\n    ]);\n    const filteredActions = (0,_hooks_useSearch__WEBPACK_IMPORTED_MODULE_4__.useSearch)(ACTIONS, query, [\n        \"label\"\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PrimitiveSelector.useEffect\": ()=>{\n            const fetchRepos = {\n                \"PrimitiveSelector.useEffect.fetchRepos\": async ()=>{\n                    try {\n                        const token = \"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\";\n                        if (!token) {\n                            setLoading(false);\n                            return; // Use sample data if no token\n                        }\n                        const response = await fetch(\"https://api.github.com/orgs/langchain-ai/repos?sort=updated&per_page=4\", {\n                            headers: {\n                                Authorization: \"Bearer \".concat(token),\n                                Accept: \"application/vnd.github.v3+json\"\n                            }\n                        });\n                        if (!response.ok) {\n                            throw new Error(\"GitHub API error: \".concat(response.statusText));\n                        }\n                        const data = await response.json();\n                        if (Array.isArray(data)) {\n                            setRepos(data.map({\n                                \"PrimitiveSelector.useEffect.fetchRepos\": (repo)=>({\n                                        id: repo.id.toString(),\n                                        name: repo.name,\n                                        description: repo.description || null,\n                                        fullName: repo.full_name\n                                    })\n                            }[\"PrimitiveSelector.useEffect.fetchRepos\"]));\n                        }\n                    } catch (err) {\n                        console.error(\"Failed to fetch repos:\", err);\n                        setError(err instanceof Error ? err.message : \"Failed to fetch repos\");\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"PrimitiveSelector.useEffect.fetchRepos\"];\n            if (isOpen) {\n                fetchRepos();\n            }\n        }\n    }[\"PrimitiveSelector.useEffect\"], [\n        isOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PrimitiveSelector.useEffect\": ()=>{\n            function handleClickOutside(event) {\n                if (ref.current && !ref.current.contains(event.target)) {\n                    onClose();\n                }\n            }\n            document.addEventListener(\"mousedown\", handleClickOutside);\n            return ({\n                \"PrimitiveSelector.useEffect\": ()=>document.removeEventListener(\"mousedown\", handleClickOutside)\n            })[\"PrimitiveSelector.useEffect\"];\n        }\n    }[\"PrimitiveSelector.useEffect\"], [\n        onClose\n    ]);\n    if (!isOpen) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: \"fixed z-50 w-[300px] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden\",\n        style: {\n            top: position.top + 4,\n            left: position.left\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-h-[300px] overflow-y-auto\",\n            children: [\n                filteredRepos.map((repo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_ListItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_5__.RepoIcon, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 19\n                        }, void 0),\n                        title: repo.name,\n                        description: repo.description\n                    }, repo.id, false, {\n                        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-3 py-2 text-xs text-gray-500\",\n                    children: \"View all options\"\n                }, void 0, false, {\n                    fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, this),\n                filteredActions.map((action)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_ListItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        icon: action.type === \"file\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_5__.FileIcon, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 17\n                        }, void 0) : action.type === \"link\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_5__.LinkIcon, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 17\n                        }, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_primer_octicons_react__WEBPACK_IMPORTED_MODULE_5__.UploadIcon, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n                            lineNumber: 140,\n                            columnNumber: 17\n                        }, void 0),\n                        title: action.label\n                    }, action.id, false, {\n                        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 11\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n}\n_s(PrimitiveSelector, \"K8daWpJlI/Fecfm9MM0zXsxG/G8=\", false, function() {\n    return [\n        _hooks_useSearch__WEBPACK_IMPORTED_MODULE_4__.useSearch,\n        _hooks_useSearch__WEBPACK_IMPORTED_MODULE_4__.useSearch\n    ];\n});\n_c = PrimitiveSelector;\nvar _c;\n$RefreshReg$(_c, \"PrimitiveSelector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1ByaW1pdGl2ZVNlbGVjdG9yL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW9EO0FBUXBCO0FBQ2dCO0FBQ0Y7QUFDQTtBQVM5QyxNQUFNVSxVQUFvQjtJQUN4QjtRQUFFQyxJQUFJO1FBQVFDLE9BQU87UUFBbUJDLE1BQU07UUFBUUMsTUFBTTtJQUFPO0lBQ25FO1FBQUVILElBQUk7UUFBUUMsT0FBTztRQUF3QkMsTUFBTTtRQUFRQyxNQUFNO0lBQU87SUFDeEU7UUFDRUgsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0NBQ0Q7QUFFYyxTQUFTQyxrQkFBa0IsS0FLakI7UUFMaUIsRUFDeENDLE1BQU0sRUFDTkMsUUFBUSxFQUNSQyxLQUFLLEVBQ0xDLE9BQU8sRUFDZ0IsR0FMaUI7O0lBTXhDLE1BQU1DLE1BQU1uQiw2Q0FBTUEsQ0FBaUI7SUFDbkMsTUFBTSxDQUFDb0IsT0FBT0MsU0FBUyxHQUFHcEIsK0NBQVFBLENBQWVNLHVEQUFZQTtJQUM3RCxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ3VCLE9BQU9DLFNBQVMsR0FBR3hCLCtDQUFRQSxDQUFnQjtJQUVsRCxzQkFBc0I7SUFDdEIsTUFBTXlCLGdCQUFnQmxCLDJEQUFTQSxDQUFDWSxPQUFPSCxPQUFPO1FBQUM7UUFBUTtLQUFjO0lBQ3JFLE1BQU1VLGtCQUFrQm5CLDJEQUFTQSxDQUFDQyxTQUFTUSxPQUFPO1FBQUM7S0FBUTtJQUUzRGxCLGdEQUFTQTt1Q0FBQztZQUNSLE1BQU02QjswREFBYTtvQkFDakIsSUFBSTt3QkFDRixNQUFNQyxRQUFRQywrRkFBb0M7d0JBQ2xELElBQUksQ0FBQ0QsT0FBTzs0QkFDVk4sV0FBVzs0QkFDWCxRQUFRLDhCQUE4Qjt3QkFDeEM7d0JBRUEsTUFBTVUsV0FBVyxNQUFNQyxNQUNyQiwwRUFDQTs0QkFDRUMsU0FBUztnQ0FDUEMsZUFBZSxVQUFnQixPQUFOUDtnQ0FDekJRLFFBQVE7NEJBQ1Y7d0JBQ0Y7d0JBR0YsSUFBSSxDQUFDSixTQUFTSyxFQUFFLEVBQUU7NEJBQ2hCLE1BQU0sSUFBSUMsTUFBTSxxQkFBeUMsT0FBcEJOLFNBQVNPLFVBQVU7d0JBQzFEO3dCQUVBLE1BQU1DLE9BQU8sTUFBTVIsU0FBU1MsSUFBSTt3QkFDaEMsSUFBSUMsTUFBTUMsT0FBTyxDQUFDSCxPQUFPOzRCQUN2QnBCLFNBQ0VvQixLQUFLSSxHQUFHOzBFQUFDLENBQUNDLE9BQVU7d0NBQ2xCcEMsSUFBSW9DLEtBQUtwQyxFQUFFLENBQUNxQyxRQUFRO3dDQUNwQkMsTUFBTUYsS0FBS0UsSUFBSTt3Q0FDZkMsYUFBYUgsS0FBS0csV0FBVyxJQUFJO3dDQUNqQ0MsVUFBVUosS0FBS0ssU0FBUztvQ0FDMUI7O3dCQUVKO29CQUNGLEVBQUUsT0FBT0MsS0FBSzt3QkFDWkMsUUFBUTdCLEtBQUssQ0FBQywwQkFBMEI0Qjt3QkFDeEMzQixTQUFTMkIsZUFBZWIsUUFBUWEsSUFBSUUsT0FBTyxHQUFHO29CQUNoRCxTQUFVO3dCQUNSL0IsV0FBVztvQkFDYjtnQkFDRjs7WUFFQSxJQUFJUixRQUFRO2dCQUNWYTtZQUNGO1FBQ0Y7c0NBQUc7UUFBQ2I7S0FBTztJQUVYaEIsZ0RBQVNBO3VDQUFDO1lBQ1IsU0FBU3dELG1CQUFtQkMsS0FBaUI7Z0JBQzNDLElBQUlyQyxJQUFJc0MsT0FBTyxJQUFJLENBQUN0QyxJQUFJc0MsT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sR0FBVztvQkFDOUR6QztnQkFDRjtZQUNGO1lBRUEwQyxTQUFTQyxnQkFBZ0IsQ0FBQyxhQUFhTjtZQUN2QzsrQ0FBTyxJQUFNSyxTQUFTRSxtQkFBbUIsQ0FBQyxhQUFhUDs7UUFDekQ7c0NBQUc7UUFBQ3JDO0tBQVE7SUFFWixJQUFJLENBQUNILFFBQVEsT0FBTztJQUVwQixxQkFDRSw4REFBQ2dEO1FBQ0M1QyxLQUFLQTtRQUNMNkMsV0FBVTtRQUNWQyxPQUFPO1lBQ0xDLEtBQUtsRCxTQUFTa0QsR0FBRyxHQUFHO1lBQ3BCQyxNQUFNbkQsU0FBU21ELElBQUk7UUFDckI7a0JBRUEsNEVBQUNKO1lBQUlDLFdBQVU7O2dCQUVadEMsY0FBY21CLEdBQUcsQ0FBQyxDQUFDQyxxQkFDbEIsOERBQUN4QywrREFBUUE7d0JBRVBNLG9CQUFNLDhEQUFDViw0REFBUUE7NEJBQUNrRSxNQUFNOzs7Ozs7d0JBQ3RCQyxPQUFPdkIsS0FBS0UsSUFBSTt3QkFDaEJDLGFBQWFILEtBQUtHLFdBQVc7dUJBSHhCSCxLQUFLcEMsRUFBRTs7Ozs7OEJBUWhCLDhEQUFDcUQ7b0JBQUlDLFdBQVU7OEJBQWtDOzs7Ozs7Z0JBR2hEckMsZ0JBQWdCa0IsR0FBRyxDQUFDLENBQUN5Qix1QkFDcEIsOERBQUNoRSwrREFBUUE7d0JBRVBNLE1BQ0UwRCxPQUFPekQsSUFBSSxLQUFLLHVCQUNkLDhEQUFDViw0REFBUUE7NEJBQUNpRSxNQUFNOzs7OztxQ0FDZEUsT0FBT3pELElBQUksS0FBSyx1QkFDbEIsOERBQUNULDREQUFRQTs0QkFBQ2dFLE1BQU07Ozs7O21EQUVoQiw4REFBQy9ELDhEQUFVQTs0QkFBQytELE1BQU07Ozs7Ozt3QkFHdEJDLE9BQU9DLE9BQU8zRCxLQUFLO3VCQVZkMkQsT0FBTzVELEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjFCO0dBckh3Qkk7O1FBWUFOLHVEQUFTQTtRQUNQQSx1REFBU0E7OztLQWJYTSIsInNvdXJjZXMiOlsiL1VzZXJzL21heWFnYW8vZGV2L2ZsdWlkLXByb21wdC1lZGl0b3Ivc3JjL2NvbXBvbmVudHMvUHJpbWl0aXZlU2VsZWN0b3IvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiQC90eXBlcy9zaGFyZWRcIjtcbmltcG9ydCB7IFByaW1pdGl2ZUl0ZW0sIFJlcG9zaXRvcnksIEFjdGlvbiB9IGZyb20gXCJAL3R5cGVzL3ByaW1pdGl2ZXNcIjtcbmltcG9ydCB7XG4gIFJlcG9JY29uLFxuICBGaWxlSWNvbixcbiAgTGlua0ljb24sXG4gIFVwbG9hZEljb24sXG59IGZyb20gXCJAcHJpbWVyL29jdGljb25zLXJlYWN0XCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9MaXN0SXRlbVwiO1xuaW1wb3J0IHsgU0FNUExFX1JFUE9TIH0gZnJvbSBcIkAvZGF0YS9zYW1wbGVzXCI7XG5pbXBvcnQgeyB1c2VTZWFyY2ggfSBmcm9tIFwiQC9ob29rcy91c2VTZWFyY2hcIjtcblxuaW50ZXJmYWNlIFByaW1pdGl2ZVNlbGVjdG9yUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIHBvc2l0aW9uOiBQb3NpdGlvbjtcbiAgcXVlcnk6IHN0cmluZztcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgQUNUSU9OUzogQWN0aW9uW10gPSBbXG4gIHsgaWQ6IFwiZmlsZVwiLCBsYWJlbDogXCJBZGQgYSB0ZXh0IGZpbGVcIiwgaWNvbjogXCJmaWxlXCIsIHR5cGU6IFwiZmlsZVwiIH0sXG4gIHsgaWQ6IFwibGlua1wiLCBsYWJlbDogXCJBZGQgYW4gZXh0ZXJuYWwgbGlua1wiLCBpY29uOiBcImxpbmtcIiwgdHlwZTogXCJsaW5rXCIgfSxcbiAge1xuICAgIGlkOiBcInVwbG9hZFwiLFxuICAgIGxhYmVsOiBcIlVwbG9hZCBmcm9tIGNvbXB1dGVyXCIsXG4gICAgaWNvbjogXCJ1cGxvYWRcIixcbiAgICB0eXBlOiBcInVwbG9hZFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpbWl0aXZlU2VsZWN0b3Ioe1xuICBpc09wZW4sXG4gIHBvc2l0aW9uLFxuICBxdWVyeSxcbiAgb25DbG9zZSxcbn06IFByaW1pdGl2ZVNlbGVjdG9yUHJvcHMpIHtcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW3JlcG9zLCBzZXRSZXBvc10gPSB1c2VTdGF0ZTxSZXBvc2l0b3J5W10+KFNBTVBMRV9SRVBPUyk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIC8vIFVzZSB0aGUgc2VhcmNoIGhvb2tcbiAgY29uc3QgZmlsdGVyZWRSZXBvcyA9IHVzZVNlYXJjaChyZXBvcywgcXVlcnksIFtcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiXSk7XG4gIGNvbnN0IGZpbHRlcmVkQWN0aW9ucyA9IHVzZVNlYXJjaChBQ1RJT05TLCBxdWVyeSwgW1wibGFiZWxcIl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hSZXBvcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0lUSFVCX1RPS0VOO1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuOyAvLyBVc2Ugc2FtcGxlIGRhdGEgaWYgbm8gdG9rZW5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL29yZ3MvbGFuZ2NoYWluLWFpL3JlcG9zP3NvcnQ9dXBkYXRlZCZwZXJfcGFnZT00XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIudjMranNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgR2l0SHViIEFQSSBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICBzZXRSZXBvcyhcbiAgICAgICAgICAgIGRhdGEubWFwKChyZXBvKSA9PiAoe1xuICAgICAgICAgICAgICBpZDogcmVwby5pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICBuYW1lOiByZXBvLm5hbWUsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZXBvLmRlc2NyaXB0aW9uIHx8IG51bGwsXG4gICAgICAgICAgICAgIGZ1bGxOYW1lOiByZXBvLmZ1bGxfbmFtZSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHJlcG9zOlwiLCBlcnIpO1xuICAgICAgICBzZXRFcnJvcihlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJGYWlsZWQgdG8gZmV0Y2ggcmVwb3NcIik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgZmV0Y2hSZXBvcygpO1xuICAgIH1cbiAgfSwgW2lzT3Blbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICBpZiAocmVmLmN1cnJlbnQgJiYgIXJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKSkge1xuICAgICAgICBvbkNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gIH0sIFtvbkNsb3NlXSk7XG5cbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9XCJmaXhlZCB6LTUwIHctWzMwMHB4XSBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZyBib3JkZXIgYm9yZGVyLWdyYXktMjAwIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICB0b3A6IHBvc2l0aW9uLnRvcCArIDQsXG4gICAgICAgIGxlZnQ6IHBvc2l0aW9uLmxlZnQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LWgtWzMwMHB4XSBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgey8qIFJlcG9zaXRvcmllcyAqL31cbiAgICAgICAge2ZpbHRlcmVkUmVwb3MubWFwKChyZXBvKSA9PiAoXG4gICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICBrZXk9e3JlcG8uaWR9XG4gICAgICAgICAgICBpY29uPXs8UmVwb0ljb24gc2l6ZT17MTZ9IC8+fVxuICAgICAgICAgICAgdGl0bGU9e3JlcG8ubmFtZX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtyZXBvLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuXG4gICAgICAgIHsvKiBEaXZpZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcHktMiB0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5WaWV3IGFsbCBvcHRpb25zPC9kaXY+XG5cbiAgICAgICAgey8qIEFjdGlvbnMgKi99XG4gICAgICAgIHtmaWx0ZXJlZEFjdGlvbnMubWFwKChhY3Rpb24pID0+IChcbiAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgIGtleT17YWN0aW9uLmlkfVxuICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSBcImZpbGVcIiA/IChcbiAgICAgICAgICAgICAgICA8RmlsZUljb24gc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICAgICkgOiBhY3Rpb24udHlwZSA9PT0gXCJsaW5rXCIgPyAoXG4gICAgICAgICAgICAgICAgPExpbmtJY29uIHNpemU9ezE2fSAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxVcGxvYWRJY29uIHNpemU9ezE2fSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aXRsZT17YWN0aW9uLmxhYmVsfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJSZXBvSWNvbiIsIkZpbGVJY29uIiwiTGlua0ljb24iLCJVcGxvYWRJY29uIiwiTGlzdEl0ZW0iLCJTQU1QTEVfUkVQT1MiLCJ1c2VTZWFyY2giLCJBQ1RJT05TIiwiaWQiLCJsYWJlbCIsImljb24iLCJ0eXBlIiwiUHJpbWl0aXZlU2VsZWN0b3IiLCJpc09wZW4iLCJwb3NpdGlvbiIsInF1ZXJ5Iiwib25DbG9zZSIsInJlZiIsInJlcG9zIiwic2V0UmVwb3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmaWx0ZXJlZFJlcG9zIiwiZmlsdGVyZWRBY3Rpb25zIiwiZmV0Y2hSZXBvcyIsInRva2VuIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dJVEhVQl9UT0tFTiIsInJlc3BvbnNlIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkFjY2VwdCIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImpzb24iLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJyZXBvIiwidG9TdHJpbmciLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJmdWxsTmFtZSIsImZ1bGxfbmFtZSIsImVyciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0b3AiLCJsZWZ0Iiwic2l6ZSIsInRpdGxlIiwiYWN0aW9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PrimitiveSelector/index.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/data/samples.ts":
/*!*****************************!*\
  !*** ./src/data/samples.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SAMPLE_REPOS: () => (/* binding */ SAMPLE_REPOS)\n/* harmony export */ });\nconst SAMPLE_REPOS = [\n    {\n        id: \"1\",\n        name: \"codeql-dca-main\",\n        description: \"No description\",\n        fullName: \"mayaqgao/codeql-dca-main\"\n    },\n    {\n        id: \"2\",\n        name: \"github\",\n        description: \"You are looking at it\",\n        fullName: \"mayaqgao/github\"\n    },\n    {\n        id: \"3\",\n        name: \"copilot-api\",\n        description: \"The engineering system\",\n        fullName: \"mayaqgao/copilot-api\"\n    },\n    {\n        id: \"4\",\n        name: \"blackbird\",\n        description: \"GitHub's high flying blazing\",\n        fullName: \"mayaqgao/blackbird\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9kYXRhL3NhbXBsZXMudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU1BLGVBQTZCO0lBQ3hDO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFVBQVU7SUFDWjtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFVBQVU7SUFDWjtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFVBQVU7SUFDWjtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFVBQVU7SUFDWjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXlhZ2FvL2Rldi9mbHVpZC1wcm9tcHQtZWRpdG9yL3NyYy9kYXRhL3NhbXBsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gXCJAL3R5cGVzL3ByaW1pdGl2ZXNcIjtcblxuZXhwb3J0IGNvbnN0IFNBTVBMRV9SRVBPUzogUmVwb3NpdG9yeVtdID0gW1xuICB7XG4gICAgaWQ6IFwiMVwiLFxuICAgIG5hbWU6IFwiY29kZXFsLWRjYS1tYWluXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTm8gZGVzY3JpcHRpb25cIixcbiAgICBmdWxsTmFtZTogXCJtYXlhcWdhby9jb2RlcWwtZGNhLW1haW5cIixcbiAgfSxcbiAge1xuICAgIGlkOiBcIjJcIixcbiAgICBuYW1lOiBcImdpdGh1YlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdSBhcmUgbG9va2luZyBhdCBpdFwiLFxuICAgIGZ1bGxOYW1lOiBcIm1heWFxZ2FvL2dpdGh1YlwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiM1wiLFxuICAgIG5hbWU6IFwiY29waWxvdC1hcGlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgZW5naW5lZXJpbmcgc3lzdGVtXCIsXG4gICAgZnVsbE5hbWU6IFwibWF5YXFnYW8vY29waWxvdC1hcGlcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcIjRcIixcbiAgICBuYW1lOiBcImJsYWNrYmlyZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkdpdEh1YidzIGhpZ2ggZmx5aW5nIGJsYXppbmdcIixcbiAgICBmdWxsTmFtZTogXCJtYXlhcWdhby9ibGFja2JpcmRcIixcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiU0FNUExFX1JFUE9TIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJmdWxsTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/data/samples.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/hooks/useSearch.ts":
/*!********************************!*\
  !*** ./src/hooks/useSearch.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useSearch: () => (/* binding */ useSearch)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useSearch(items, query, fields) {\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)({\n        \"useSearch.useMemo\": ()=>{\n            if (!query) return items;\n            const lowerQuery = query.toLowerCase();\n            return items.filter({\n                \"useSearch.useMemo\": (item)=>fields.some({\n                        \"useSearch.useMemo\": (field)=>{\n                            const value = item[field];\n                            return value && String(value).toLowerCase().includes(lowerQuery);\n                        }\n                    }[\"useSearch.useMemo\"])\n            }[\"useSearch.useMemo\"]);\n        }\n    }[\"useSearch.useMemo\"], [\n        items,\n        query,\n        fields\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VTZWFyY2gudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBTXpCLFNBQVNDLFVBQ2RDLEtBQVUsRUFDVkMsS0FBYSxFQUNiQyxNQUFtQjtJQUVuQixPQUFPSiw4Q0FBT0E7NkJBQUM7WUFDYixJQUFJLENBQUNHLE9BQU8sT0FBT0Q7WUFFbkIsTUFBTUcsYUFBYUYsTUFBTUcsV0FBVztZQUNwQyxPQUFPSixNQUFNSyxNQUFNO3FDQUFDLENBQUNDLE9BQ25CSixPQUFPSyxJQUFJOzZDQUFDLENBQUNDOzRCQUNYLE1BQU1DLFFBQVFILElBQUksQ0FBQ0UsTUFBTTs0QkFDekIsT0FBT0MsU0FBU0MsT0FBT0QsT0FBT0wsV0FBVyxHQUFHTyxRQUFRLENBQUNSO3dCQUN2RDs7O1FBRUo7NEJBQUc7UUFBQ0g7UUFBT0M7UUFBT0M7S0FBTztBQUMzQiIsInNvdXJjZXMiOlsiL1VzZXJzL21heWFnYW8vZGV2L2ZsdWlkLXByb21wdC1lZGl0b3Ivc3JjL2hvb2tzL3VzZVNlYXJjaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBTZWFyY2hhYmxlIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU2VhcmNoPFQgZXh0ZW5kcyBTZWFyY2hhYmxlPihcbiAgaXRlbXM6IFRbXSxcbiAgcXVlcnk6IHN0cmluZyxcbiAgZmllbGRzOiAoa2V5b2YgVClbXVxuKSB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXF1ZXJ5KSByZXR1cm4gaXRlbXM7XG5cbiAgICBjb25zdCBsb3dlclF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtKSA9PlxuICAgICAgZmllbGRzLnNvbWUoKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXRlbVtmaWVsZF07XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiBTdHJpbmcodmFsdWUpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSk7XG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtpdGVtcywgcXVlcnksIGZpZWxkc10pO1xufVxuIl0sIm5hbWVzIjpbInVzZU1lbW8iLCJ1c2VTZWFyY2giLCJpdGVtcyIsInF1ZXJ5IiwiZmllbGRzIiwibG93ZXJRdWVyeSIsInRvTG93ZXJDYXNlIiwiZmlsdGVyIiwiaXRlbSIsInNvbWUiLCJmaWVsZCIsInZhbHVlIiwiU3RyaW5nIiwiaW5jbHVkZXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useSearch.ts\n"));

/***/ })

});