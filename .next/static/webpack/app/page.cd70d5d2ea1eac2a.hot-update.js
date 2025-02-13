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

/***/ "(app-pages-browser)/./src/components/Editor/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Editor/index.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Editor)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Editor(param) {\n    let { value, onChange, onTriggerPrimitive, onClosePrimitive } = param;\n    _s();\n    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const lastTriggerPosRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [tokenValue, setTokenValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isTokenActive, setIsTokenActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Improved popover positioning function\n    const getTokenPosition = (textarea, position)=>{\n        const rect = textarea.getBoundingClientRect();\n        const { scrollTop, scrollLeft } = textarea;\n        return {\n            anchor: {\n                top: rect.top + window.scrollY,\n                left: rect.left + window.scrollX\n            },\n            content: {\n                top: rect.top + scrollTop + 16,\n                left: rect.left + scrollLeft + 16\n            }\n        };\n    };\n    // Handles the keypress event for @\n    const handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)({\n        \"Editor.useCallback[handleKeyDown]\": (e)=>{\n            if (e.key === \"@\") {\n                const textarea = textareaRef.current;\n                if (!textarea) return;\n                const { selectionStart } = textarea;\n                lastTriggerPosRef.current = selectionStart;\n                const positions = getTokenPosition(textarea, selectionStart);\n                setIsTokenActive(true);\n                onTriggerPrimitive(\"@\", positions.content, \"\");\n            } else if (e.key === \"Escape\") {\n                setIsTokenActive(false);\n                onClosePrimitive();\n            }\n        }\n    }[\"Editor.useCallback[handleKeyDown]\"], [\n        onTriggerPrimitive,\n        onClosePrimitive\n    ]);\n    // Handles text input and detects if the @ should remain active\n    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)({\n        \"Editor.useCallback[handleChange]\": (e)=>{\n            const newValue = e.target.value;\n            onChange(newValue);\n            if (lastTriggerPosRef.current !== null) {\n                if (newValue.charAt(lastTriggerPosRef.current) !== \"@\") {\n                    // If user deleted the @, close the token\n                    onClosePrimitive();\n                    lastTriggerPosRef.current = null;\n                    setIsTokenActive(false);\n                    setTokenValue(\"\");\n                } else {\n                    // Update query based on current input after @\n                    const query = newValue.slice(lastTriggerPosRef.current + 1);\n                    setTokenValue(query);\n                    onTriggerPrimitive(\"@\", getTokenPosition(e.target, lastTriggerPosRef.current).content, query);\n                }\n            }\n        }\n    }[\"Editor.useCallback[handleChange]\"], [\n        onChange,\n        onClosePrimitive,\n        onTriggerPrimitive\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full rounded-lg border border-gray-200 bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: textareaRef,\n                value: value,\n                onChange: handleChange,\n                onKeyDown: handleKeyDown,\n                onBlur: ()=>setIsTokenActive(false),\n                className: \"w-full min-h-[200px] p-4 text-gray-900 text-sm focus:outline-none leading-[1.5]\",\n                placeholder: \"Type / to add a command, or @ to add a reference...\"\n            }, void 0, false, {\n                fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/Editor/index.tsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/Editor/index.tsx\",\n            lineNumber: 98,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/Editor/index.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(Editor, \"eKuOB2vHrBrFLo8YdVvkhCqmYCo=\");\n_c = Editor;\nvar _c;\n$RefreshReg$(_c, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlFO0FBZWxELFNBQVNHLE9BQU8sS0FLakI7UUFMaUIsRUFDN0JDLEtBQUssRUFDTEMsUUFBUSxFQUNSQyxrQkFBa0IsRUFDbEJDLGdCQUFnQixFQUNKLEdBTGlCOztJQU03QixNQUFNQyxjQUFjUCw2Q0FBTUEsQ0FBc0I7SUFDaEQsTUFBTVEsb0JBQW9CUiw2Q0FBTUEsQ0FBZ0I7SUFDaEQsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1UsZUFBZUMsaUJBQWlCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRW5ELHdDQUF3QztJQUN4QyxNQUFNWSxtQkFBbUIsQ0FDdkJDLFVBQ0FDO1FBRUEsTUFBTUMsT0FBT0YsU0FBU0cscUJBQXFCO1FBQzNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUUsR0FBR0w7UUFFbEMsT0FBTztZQUNMTSxRQUFRO2dCQUNOQyxLQUFLTCxLQUFLSyxHQUFHLEdBQUdDLE9BQU9DLE9BQU87Z0JBQzlCQyxNQUFNUixLQUFLUSxJQUFJLEdBQUdGLE9BQU9HLE9BQU87WUFDbEM7WUFDQUMsU0FBUztnQkFDUEwsS0FBS0wsS0FBS0ssR0FBRyxHQUFHSCxZQUFZO2dCQUM1Qk0sTUFBTVIsS0FBS1EsSUFBSSxHQUFHTCxhQUFhO1lBQ2pDO1FBQ0Y7SUFDRjtJQUVBLG1DQUFtQztJQUNuQyxNQUFNUSxnQkFBZ0I1QixrREFBV0E7NkNBQy9CLENBQUM2QjtZQUNDLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxLQUFLO2dCQUNqQixNQUFNZixXQUFXUCxZQUFZdUIsT0FBTztnQkFDcEMsSUFBSSxDQUFDaEIsVUFBVTtnQkFFZixNQUFNLEVBQUVpQixjQUFjLEVBQUUsR0FBR2pCO2dCQUMzQk4sa0JBQWtCc0IsT0FBTyxHQUFHQztnQkFFNUIsTUFBTUMsWUFBWW5CLGlCQUFpQkMsVUFBVWlCO2dCQUM3Q25CLGlCQUFpQjtnQkFDakJQLG1CQUFtQixLQUFLMkIsVUFBVU4sT0FBTyxFQUFFO1lBQzdDLE9BQU8sSUFBSUUsRUFBRUMsR0FBRyxLQUFLLFVBQVU7Z0JBQzdCakIsaUJBQWlCO2dCQUNqQk47WUFDRjtRQUNGOzRDQUNBO1FBQUNEO1FBQW9CQztLQUFpQjtJQUd4QywrREFBK0Q7SUFDL0QsTUFBTTJCLGVBQWVsQyxrREFBV0E7NENBQzlCLENBQUM2QjtZQUNDLE1BQU1NLFdBQVdOLEVBQUVPLE1BQU0sQ0FBQ2hDLEtBQUs7WUFDL0JDLFNBQVM4QjtZQUVULElBQUkxQixrQkFBa0JzQixPQUFPLEtBQUssTUFBTTtnQkFDdEMsSUFBSUksU0FBU0UsTUFBTSxDQUFDNUIsa0JBQWtCc0IsT0FBTyxNQUFNLEtBQUs7b0JBQ3RELHlDQUF5QztvQkFDekN4QjtvQkFDQUUsa0JBQWtCc0IsT0FBTyxHQUFHO29CQUM1QmxCLGlCQUFpQjtvQkFDakJGLGNBQWM7Z0JBQ2hCLE9BQU87b0JBQ0wsOENBQThDO29CQUM5QyxNQUFNMkIsUUFBUUgsU0FBU0ksS0FBSyxDQUFDOUIsa0JBQWtCc0IsT0FBTyxHQUFHO29CQUN6RHBCLGNBQWMyQjtvQkFDZGhDLG1CQUNFLEtBQ0FRLGlCQUFpQmUsRUFBRU8sTUFBTSxFQUFFM0Isa0JBQWtCc0IsT0FBTyxFQUFFSixPQUFPLEVBQzdEVztnQkFFSjtZQUNGO1FBQ0Y7MkNBQ0E7UUFBQ2pDO1FBQVVFO1FBQWtCRDtLQUFtQjtJQUdsRCxxQkFDRSw4REFBQ2tDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUMxQjtnQkFDQzJCLEtBQUtsQztnQkFDTEosT0FBT0E7Z0JBQ1BDLFVBQVU2QjtnQkFDVlMsV0FBV2Y7Z0JBQ1hnQixRQUFRLElBQU0vQixpQkFBaUI7Z0JBQy9CNEIsV0FBVTtnQkFDVkksYUFBWTs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QjtHQS9Gd0IxQztLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL21heWFnYW8vZGV2L2ZsdWlkLXByb21wdC1lZGl0b3Ivc3JjL2NvbXBvbmVudHMvRWRpdG9yL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb3NpdGlvbiwgUG9wb3ZlclBvc2l0aW9uIH0gZnJvbSBcIkAvdHlwZXMvc2hhcmVkXCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIkAvY29tcG9uZW50cy91aS9Ub2tlblwiO1xuXG5pbnRlcmZhY2UgRWRpdG9yUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nO1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uVHJpZ2dlclByaW1pdGl2ZTogKFxuICAgIHRyaWdnZXI6IHN0cmluZyxcbiAgICBwb3NpdGlvbjogUG9zaXRpb24sXG4gICAgcXVlcnk6IHN0cmluZ1xuICApID0+IHZvaWQ7XG4gIG9uQ2xvc2VQcmltaXRpdmU6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvcih7XG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgb25UcmlnZ2VyUHJpbWl0aXZlLFxuICBvbkNsb3NlUHJpbWl0aXZlLFxufTogRWRpdG9yUHJvcHMpIHtcbiAgY29uc3QgdGV4dGFyZWFSZWYgPSB1c2VSZWY8SFRNTFRleHRBcmVhRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGxhc3RUcmlnZ2VyUG9zUmVmID0gdXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdG9rZW5WYWx1ZSwgc2V0VG9rZW5WYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzVG9rZW5BY3RpdmUsIHNldElzVG9rZW5BY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEltcHJvdmVkIHBvcG92ZXIgcG9zaXRpb25pbmcgZnVuY3Rpb25cbiAgY29uc3QgZ2V0VG9rZW5Qb3NpdGlvbiA9IChcbiAgICB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCxcbiAgICBwb3NpdGlvbjogbnVtYmVyXG4gICk6IFBvcG92ZXJQb3NpdGlvbiA9PiB7XG4gICAgY29uc3QgcmVjdCA9IHRleHRhcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0IH0gPSB0ZXh0YXJlYTtcblxuICAgIHJldHVybiB7XG4gICAgICBhbmNob3I6IHtcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHRvcDogcmVjdC50b3AgKyBzY3JvbGxUb3AgKyAxNixcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCArIDE2LFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xuXG4gIC8vIEhhbmRsZXMgdGhlIGtleXByZXNzIGV2ZW50IGZvciBAXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSB1c2VDYWxsYmFjayhcbiAgICAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkBcIikge1xuICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IHRleHRhcmVhUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghdGV4dGFyZWEpIHJldHVybjtcblxuICAgICAgICBjb25zdCB7IHNlbGVjdGlvblN0YXJ0IH0gPSB0ZXh0YXJlYTtcbiAgICAgICAgbGFzdFRyaWdnZXJQb3NSZWYuY3VycmVudCA9IHNlbGVjdGlvblN0YXJ0O1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGdldFRva2VuUG9zaXRpb24odGV4dGFyZWEsIHNlbGVjdGlvblN0YXJ0KTtcbiAgICAgICAgc2V0SXNUb2tlbkFjdGl2ZSh0cnVlKTtcbiAgICAgICAgb25UcmlnZ2VyUHJpbWl0aXZlKFwiQFwiLCBwb3NpdGlvbnMuY29udGVudCwgXCJcIik7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHNldElzVG9rZW5BY3RpdmUoZmFsc2UpO1xuICAgICAgICBvbkNsb3NlUHJpbWl0aXZlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbb25UcmlnZ2VyUHJpbWl0aXZlLCBvbkNsb3NlUHJpbWl0aXZlXVxuICApO1xuXG4gIC8vIEhhbmRsZXMgdGV4dCBpbnB1dCBhbmQgZGV0ZWN0cyBpZiB0aGUgQCBzaG91bGQgcmVtYWluIGFjdGl2ZVxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBvbkNoYW5nZShuZXdWYWx1ZSk7XG5cbiAgICAgIGlmIChsYXN0VHJpZ2dlclBvc1JlZi5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZS5jaGFyQXQobGFzdFRyaWdnZXJQb3NSZWYuY3VycmVudCkgIT09IFwiQFwiKSB7XG4gICAgICAgICAgLy8gSWYgdXNlciBkZWxldGVkIHRoZSBALCBjbG9zZSB0aGUgdG9rZW5cbiAgICAgICAgICBvbkNsb3NlUHJpbWl0aXZlKCk7XG4gICAgICAgICAgbGFzdFRyaWdnZXJQb3NSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgc2V0SXNUb2tlbkFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgc2V0VG9rZW5WYWx1ZShcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBVcGRhdGUgcXVlcnkgYmFzZWQgb24gY3VycmVudCBpbnB1dCBhZnRlciBAXG4gICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXdWYWx1ZS5zbGljZShsYXN0VHJpZ2dlclBvc1JlZi5jdXJyZW50ICsgMSk7XG4gICAgICAgICAgc2V0VG9rZW5WYWx1ZShxdWVyeSk7XG4gICAgICAgICAgb25UcmlnZ2VyUHJpbWl0aXZlKFxuICAgICAgICAgICAgXCJAXCIsXG4gICAgICAgICAgICBnZXRUb2tlblBvc2l0aW9uKGUudGFyZ2V0LCBsYXN0VHJpZ2dlclBvc1JlZi5jdXJyZW50KS5jb250ZW50LFxuICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbb25DaGFuZ2UsIG9uQ2xvc2VQcmltaXRpdmUsIG9uVHJpZ2dlclByaW1pdGl2ZV1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICByZWY9e3RleHRhcmVhUmVmfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgICBvbkJsdXI9eygpID0+IHNldElzVG9rZW5BY3RpdmUoZmFsc2UpfSAvLyBDbG9zZSB0b2tlbiBvbiBibHVyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLVsyMDBweF0gcC00IHRleHQtZ3JheS05MDAgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgbGVhZGluZy1bMS41XVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIC8gdG8gYWRkIGEgY29tbWFuZCwgb3IgQCB0byBhZGQgYSByZWZlcmVuY2UuLi5cIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkVkaXRvciIsInZhbHVlIiwib25DaGFuZ2UiLCJvblRyaWdnZXJQcmltaXRpdmUiLCJvbkNsb3NlUHJpbWl0aXZlIiwidGV4dGFyZWFSZWYiLCJsYXN0VHJpZ2dlclBvc1JlZiIsInRva2VuVmFsdWUiLCJzZXRUb2tlblZhbHVlIiwiaXNUb2tlbkFjdGl2ZSIsInNldElzVG9rZW5BY3RpdmUiLCJnZXRUb2tlblBvc2l0aW9uIiwidGV4dGFyZWEiLCJwb3NpdGlvbiIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiYW5jaG9yIiwidG9wIiwid2luZG93Iiwic2Nyb2xsWSIsImxlZnQiLCJzY3JvbGxYIiwiY29udGVudCIsImhhbmRsZUtleURvd24iLCJlIiwia2V5IiwiY3VycmVudCIsInNlbGVjdGlvblN0YXJ0IiwicG9zaXRpb25zIiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWUiLCJ0YXJnZXQiLCJjaGFyQXQiLCJxdWVyeSIsInNsaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwib25LZXlEb3duIiwib25CbHVyIiwicGxhY2Vob2xkZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Editor/index.tsx\n"));

/***/ })

});