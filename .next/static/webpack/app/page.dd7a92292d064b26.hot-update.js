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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Editor)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/Token */ \"(app-pages-browser)/./src/components/ui/Token.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Editor(param) {\n    let { value, onChange, onTriggerPrimitive, onClosePrimitive } = param;\n    _s();\n    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const lastTriggerPosRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [tokenValue, setTokenValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isTokenActive, setIsTokenActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Improved popover positioning function\n    const getTokenPosition = (textarea, position)=>{\n        const rect = textarea.getBoundingClientRect();\n        const { scrollTop, scrollLeft } = textarea;\n        return {\n            anchor: {\n                top: rect.top + window.scrollY,\n                left: rect.left + window.scrollX\n            },\n            content: {\n                top: rect.top + scrollTop + 12,\n                left: rect.left + scrollLeft\n            }\n        };\n    };\n    // Handles the keypress event for @\n    const handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)({\n        \"Editor.useCallback[handleKeyDown]\": (e)=>{\n            if (e.key === \"@\") {\n                const textarea = textareaRef.current;\n                if (!textarea) return;\n                const { selectionStart } = textarea;\n                lastTriggerPosRef.current = selectionStart;\n                const positions = getTokenPosition(textarea, selectionStart);\n                setIsTokenActive(true);\n                onTriggerPrimitive(\"@\", positions.content, \"\");\n            } else if (e.key === \"Escape\") {\n                setIsTokenActive(false);\n                onClosePrimitive();\n            }\n        }\n    }[\"Editor.useCallback[handleKeyDown]\"], [\n        onTriggerPrimitive,\n        onClosePrimitive\n    ]);\n    // Handles text input and detects if the @ should remain active\n    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)({\n        \"Editor.useCallback[handleChange]\": (e)=>{\n            const newValue = e.target.value;\n            onChange(newValue);\n            if (lastTriggerPosRef.current !== null) {\n                if (newValue.charAt(lastTriggerPosRef.current) !== \"@\") {\n                    // If user deleted the @, close the token\n                    onClosePrimitive();\n                    lastTriggerPosRef.current = null;\n                    setIsTokenActive(false);\n                    setTokenValue(\"\");\n                } else {\n                    // Update query based on current input after @\n                    const query = newValue.slice(lastTriggerPosRef.current + 1);\n                    setTokenValue(query);\n                    onTriggerPrimitive(\"@\", getTokenPosition(e.target, lastTriggerPosRef.current).content, query);\n                }\n            }\n        }\n    }[\"Editor.useCallback[handleChange]\"], [\n        onChange,\n        onClosePrimitive,\n        onTriggerPrimitive\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full rounded-lg border border-gray-200 bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    ref: textareaRef,\n                    value: value,\n                    onChange: handleChange,\n                    onKeyDown: handleKeyDown,\n                    onBlur: ()=>setIsTokenActive(false),\n                    className: \"w-full min-h-[200px] p-4 text-gray-900 text-sm focus:outline-none leading-[1.5]\",\n                    placeholder: \"Type / to add a command, or @ to add a reference...\"\n                }, void 0, false, {\n                    fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/Editor/index.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                isTokenActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute\",\n                    style: {\n                        left: 10,\n                        top: 10\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_Token__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        value: tokenValue,\n                        placeholder: \"Select or search repositories...\",\n                        isActive: true\n                    }, void 0, false, {\n                        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/Editor/index.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/Editor/index.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/Editor/index.tsx\",\n            lineNumber: 95,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/Editor/index.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_s(Editor, \"eKuOB2vHrBrFLo8YdVvkhCqmYCo=\");\n_c = Editor;\nvar _c;\n$RefreshReg$(_c, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRTtBQUV2QjtBQWEzQixTQUFTSSxPQUFPLEtBS2pCO1FBTGlCLEVBQzdCQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsa0JBQWtCLEVBQ2xCQyxnQkFBZ0IsRUFDSixHQUxpQjs7SUFNN0IsTUFBTUMsY0FBY1IsNkNBQU1BLENBQXNCO0lBQ2hELE1BQU1TLG9CQUFvQlQsNkNBQU1BLENBQWdCO0lBQ2hELE1BQU0sQ0FBQ1UsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNXLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUVuRCx3Q0FBd0M7SUFDeEMsTUFBTWEsbUJBQW1CLENBQ3ZCQyxVQUNBQztRQUVBLE1BQU1DLE9BQU9GLFNBQVNHLHFCQUFxQjtRQUMzQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFLEdBQUdMO1FBRWxDLE9BQU87WUFDTE0sUUFBUTtnQkFDTkMsS0FBS0wsS0FBS0ssR0FBRyxHQUFHQyxPQUFPQyxPQUFPO2dCQUM5QkMsTUFBTVIsS0FBS1EsSUFBSSxHQUFHRixPQUFPRyxPQUFPO1lBQ2xDO1lBQ0FDLFNBQVM7Z0JBQUVMLEtBQUtMLEtBQUtLLEdBQUcsR0FBR0gsWUFBWTtnQkFBSU0sTUFBTVIsS0FBS1EsSUFBSSxHQUFHTDtZQUFXO1FBQzFFO0lBQ0Y7SUFFQSxtQ0FBbUM7SUFDbkMsTUFBTVEsZ0JBQWdCN0Isa0RBQVdBOzZDQUMvQixDQUFDOEI7WUFDQyxJQUFJQSxFQUFFQyxHQUFHLEtBQUssS0FBSztnQkFDakIsTUFBTWYsV0FBV1AsWUFBWXVCLE9BQU87Z0JBQ3BDLElBQUksQ0FBQ2hCLFVBQVU7Z0JBRWYsTUFBTSxFQUFFaUIsY0FBYyxFQUFFLEdBQUdqQjtnQkFDM0JOLGtCQUFrQnNCLE9BQU8sR0FBR0M7Z0JBRTVCLE1BQU1DLFlBQVluQixpQkFBaUJDLFVBQVVpQjtnQkFDN0NuQixpQkFBaUI7Z0JBQ2pCUCxtQkFBbUIsS0FBSzJCLFVBQVVOLE9BQU8sRUFBRTtZQUM3QyxPQUFPLElBQUlFLEVBQUVDLEdBQUcsS0FBSyxVQUFVO2dCQUM3QmpCLGlCQUFpQjtnQkFDakJOO1lBQ0Y7UUFDRjs0Q0FDQTtRQUFDRDtRQUFvQkM7S0FBaUI7SUFHeEMsK0RBQStEO0lBQy9ELE1BQU0yQixlQUFlbkMsa0RBQVdBOzRDQUM5QixDQUFDOEI7WUFDQyxNQUFNTSxXQUFXTixFQUFFTyxNQUFNLENBQUNoQyxLQUFLO1lBQy9CQyxTQUFTOEI7WUFFVCxJQUFJMUIsa0JBQWtCc0IsT0FBTyxLQUFLLE1BQU07Z0JBQ3RDLElBQUlJLFNBQVNFLE1BQU0sQ0FBQzVCLGtCQUFrQnNCLE9BQU8sTUFBTSxLQUFLO29CQUN0RCx5Q0FBeUM7b0JBQ3pDeEI7b0JBQ0FFLGtCQUFrQnNCLE9BQU8sR0FBRztvQkFDNUJsQixpQkFBaUI7b0JBQ2pCRixjQUFjO2dCQUNoQixPQUFPO29CQUNMLDhDQUE4QztvQkFDOUMsTUFBTTJCLFFBQVFILFNBQVNJLEtBQUssQ0FBQzlCLGtCQUFrQnNCLE9BQU8sR0FBRztvQkFDekRwQixjQUFjMkI7b0JBQ2RoQyxtQkFDRSxLQUNBUSxpQkFBaUJlLEVBQUVPLE1BQU0sRUFBRTNCLGtCQUFrQnNCLE9BQU8sRUFBRUosT0FBTyxFQUM3RFc7Z0JBRUo7WUFDRjtRQUNGOzJDQUNBO1FBQUNqQztRQUFVRTtRQUFrQkQ7S0FBbUI7SUFHbEQscUJBQ0UsOERBQUNrQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQzFCO29CQUNDMkIsS0FBS2xDO29CQUNMSixPQUFPQTtvQkFDUEMsVUFBVTZCO29CQUNWUyxXQUFXZjtvQkFDWGdCLFFBQVEsSUFBTS9CLGlCQUFpQjtvQkFDL0I0QixXQUFVO29CQUNWSSxhQUFZOzs7Ozs7Z0JBRWJqQywrQkFDQyw4REFBQzRCO29CQUFJQyxXQUFVO29CQUFXSyxPQUFPO3dCQUFFckIsTUFBTTt3QkFBSUgsS0FBSztvQkFBRzs4QkFDbkQsNEVBQUNwQiw0REFBS0E7d0JBQ0pFLE9BQU9NO3dCQUNQbUMsYUFBWTt3QkFDWkUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94QjtHQXJHd0I1QztLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL21heWFnYW8vZGV2L2ZsdWlkLXByb21wdC1lZGl0b3Ivc3JjL2NvbXBvbmVudHMvRWRpdG9yL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb3NpdGlvbiwgUG9wb3ZlclBvc2l0aW9uIH0gZnJvbSBcIkAvdHlwZXMvc2hhcmVkXCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIkAvY29tcG9uZW50cy91aS9Ub2tlblwiO1xuXG5pbnRlcmZhY2UgRWRpdG9yUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nO1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uVHJpZ2dlclByaW1pdGl2ZTogKFxuICAgIHRyaWdnZXI6IHN0cmluZyxcbiAgICBwb3NpdGlvbjogUG9zaXRpb24sXG4gICAgcXVlcnk6IHN0cmluZ1xuICApID0+IHZvaWQ7XG4gIG9uQ2xvc2VQcmltaXRpdmU6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvcih7XG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgb25UcmlnZ2VyUHJpbWl0aXZlLFxuICBvbkNsb3NlUHJpbWl0aXZlLFxufTogRWRpdG9yUHJvcHMpIHtcbiAgY29uc3QgdGV4dGFyZWFSZWYgPSB1c2VSZWY8SFRNTFRleHRBcmVhRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGxhc3RUcmlnZ2VyUG9zUmVmID0gdXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdG9rZW5WYWx1ZSwgc2V0VG9rZW5WYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzVG9rZW5BY3RpdmUsIHNldElzVG9rZW5BY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEltcHJvdmVkIHBvcG92ZXIgcG9zaXRpb25pbmcgZnVuY3Rpb25cbiAgY29uc3QgZ2V0VG9rZW5Qb3NpdGlvbiA9IChcbiAgICB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCxcbiAgICBwb3NpdGlvbjogbnVtYmVyXG4gICk6IFBvcG92ZXJQb3NpdGlvbiA9PiB7XG4gICAgY29uc3QgcmVjdCA9IHRleHRhcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0IH0gPSB0ZXh0YXJlYTtcblxuICAgIHJldHVybiB7XG4gICAgICBhbmNob3I6IHtcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiB7IHRvcDogcmVjdC50b3AgKyBzY3JvbGxUb3AgKyAxMiwgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCB9LFxuICAgIH07XG4gIH07XG5cbiAgLy8gSGFuZGxlcyB0aGUga2V5cHJlc3MgZXZlbnQgZm9yIEBcbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiQFwiKSB7XG4gICAgICAgIGNvbnN0IHRleHRhcmVhID0gdGV4dGFyZWFSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCF0ZXh0YXJlYSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0aW9uU3RhcnQgfSA9IHRleHRhcmVhO1xuICAgICAgICBsYXN0VHJpZ2dlclBvc1JlZi5jdXJyZW50ID0gc2VsZWN0aW9uU3RhcnQ7XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gZ2V0VG9rZW5Qb3NpdGlvbih0ZXh0YXJlYSwgc2VsZWN0aW9uU3RhcnQpO1xuICAgICAgICBzZXRJc1Rva2VuQWN0aXZlKHRydWUpO1xuICAgICAgICBvblRyaWdnZXJQcmltaXRpdmUoXCJAXCIsIHBvc2l0aW9ucy5jb250ZW50LCBcIlwiKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgc2V0SXNUb2tlbkFjdGl2ZShmYWxzZSk7XG4gICAgICAgIG9uQ2xvc2VQcmltaXRpdmUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtvblRyaWdnZXJQcmltaXRpdmUsIG9uQ2xvc2VQcmltaXRpdmVdXG4gICk7XG5cbiAgLy8gSGFuZGxlcyB0ZXh0IGlucHV0IGFuZCBkZXRlY3RzIGlmIHRoZSBAIHNob3VsZCByZW1haW4gYWN0aXZlXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlKTtcblxuICAgICAgaWYgKGxhc3RUcmlnZ2VyUG9zUmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKG5ld1ZhbHVlLmNoYXJBdChsYXN0VHJpZ2dlclBvc1JlZi5jdXJyZW50KSAhPT0gXCJAXCIpIHtcbiAgICAgICAgICAvLyBJZiB1c2VyIGRlbGV0ZWQgdGhlIEAsIGNsb3NlIHRoZSB0b2tlblxuICAgICAgICAgIG9uQ2xvc2VQcmltaXRpdmUoKTtcbiAgICAgICAgICBsYXN0VHJpZ2dlclBvc1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICBzZXRJc1Rva2VuQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICBzZXRUb2tlblZhbHVlKFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFVwZGF0ZSBxdWVyeSBiYXNlZCBvbiBjdXJyZW50IGlucHV0IGFmdGVyIEBcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IG5ld1ZhbHVlLnNsaWNlKGxhc3RUcmlnZ2VyUG9zUmVmLmN1cnJlbnQgKyAxKTtcbiAgICAgICAgICBzZXRUb2tlblZhbHVlKHF1ZXJ5KTtcbiAgICAgICAgICBvblRyaWdnZXJQcmltaXRpdmUoXG4gICAgICAgICAgICBcIkBcIixcbiAgICAgICAgICAgIGdldFRva2VuUG9zaXRpb24oZS50YXJnZXQsIGxhc3RUcmlnZ2VyUG9zUmVmLmN1cnJlbnQpLmNvbnRlbnQsXG4gICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtvbkNoYW5nZSwgb25DbG9zZVByaW1pdGl2ZSwgb25UcmlnZ2VyUHJpbWl0aXZlXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHJlZj17dGV4dGFyZWFSZWZ9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICAgIG9uQmx1cj17KCkgPT4gc2V0SXNUb2tlbkFjdGl2ZShmYWxzZSl9IC8vIENsb3NlIHRva2VuIG9uIGJsdXJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtWzIwMHB4XSBwLTQgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBsZWFkaW5nLVsxLjVdXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgLyB0byBhZGQgYSBjb21tYW5kLCBvciBAIHRvIGFkZCBhIHJlZmVyZW5jZS4uLlwiXG4gICAgICAgIC8+XG4gICAgICAgIHtpc1Rva2VuQWN0aXZlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlXCIgc3R5bGU9e3sgbGVmdDogMTAsIHRvcDogMTAgfX0+XG4gICAgICAgICAgICA8VG9rZW5cbiAgICAgICAgICAgICAgdmFsdWU9e3Rva2VuVmFsdWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IG9yIHNlYXJjaCByZXBvc2l0b3JpZXMuLi5cIlxuICAgICAgICAgICAgICBpc0FjdGl2ZT17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVJlZiIsInVzZVN0YXRlIiwiVG9rZW4iLCJFZGl0b3IiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25UcmlnZ2VyUHJpbWl0aXZlIiwib25DbG9zZVByaW1pdGl2ZSIsInRleHRhcmVhUmVmIiwibGFzdFRyaWdnZXJQb3NSZWYiLCJ0b2tlblZhbHVlIiwic2V0VG9rZW5WYWx1ZSIsImlzVG9rZW5BY3RpdmUiLCJzZXRJc1Rva2VuQWN0aXZlIiwiZ2V0VG9rZW5Qb3NpdGlvbiIsInRleHRhcmVhIiwicG9zaXRpb24iLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImFuY2hvciIsInRvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJsZWZ0Iiwic2Nyb2xsWCIsImNvbnRlbnQiLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleSIsImN1cnJlbnQiLCJzZWxlY3Rpb25TdGFydCIsInBvc2l0aW9ucyIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlIiwidGFyZ2V0IiwiY2hhckF0IiwicXVlcnkiLCJzbGljZSIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsIm9uS2V5RG93biIsIm9uQmx1ciIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJpc0FjdGl2ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Editor/index.tsx\n"));

/***/ })

});