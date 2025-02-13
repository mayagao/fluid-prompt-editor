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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Editor)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/Token */ \"(app-pages-browser)/./src/components/ui/Token.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Editor(param) {\n    let { value, onChange, onTriggerPrimitive, onClosePrimitive } = param;\n    _s();\n    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const lastTriggerPosRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [tokenValue, setTokenValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isTokenActive, setIsTokenActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const lastPositionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // Improved popover positioning function\n    const getTokenPosition = (textarea, position)=>{\n        const rect = textarea.getBoundingClientRect();\n        const { scrollTop, scrollLeft } = textarea;\n        return {\n            anchor: {\n                top: rect.top + window.scrollY,\n                left: rect.left + window.scrollX\n            },\n            content: {\n                top: rect.top + scrollTop + 16,\n                left: rect.left + scrollLeft + 16\n            }\n        };\n    };\n    // Handles the keypress event for @\n    const handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)({\n        \"Editor.useCallback[handleKeyDown]\": (e)=>{\n            if (e.key === \"@\") {\n                const textarea = textareaRef.current;\n                if (!textarea) return;\n                const { selectionStart } = textarea;\n                lastTriggerPosRef.current = selectionStart;\n                const positions = getTokenPosition(textarea, selectionStart);\n                setIsTokenActive(true);\n                lastPositionRef.current = positions;\n                onTriggerPrimitive(\"@\", positions.content, \"\");\n            } else if (e.key === \"Escape\") {\n                setIsTokenActive(false);\n                onClosePrimitive();\n            }\n        }\n    }[\"Editor.useCallback[handleKeyDown]\"], [\n        onTriggerPrimitive,\n        onClosePrimitive\n    ]);\n    // Handles text input and detects if the @ should remain active\n    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)({\n        \"Editor.useCallback[handleChange]\": (e)=>{\n            const newValue = e.target.value;\n            onChange(newValue);\n            if (lastTriggerPosRef.current !== null) {\n                if (newValue.charAt(lastTriggerPosRef.current) !== \"@\") {\n                    // If user deleted the @, close the token\n                    onClosePrimitive();\n                    lastTriggerPosRef.current = null;\n                    setIsTokenActive(false);\n                    setTokenValue(\"\");\n                } else {\n                    // Update query based on current input after @\n                    const query = newValue.slice(lastTriggerPosRef.current + 1);\n                    setTokenValue(query);\n                    onTriggerPrimitive(\"@\", getTokenPosition(e.target, lastTriggerPosRef.current).content, query);\n                }\n            }\n        }\n    }[\"Editor.useCallback[handleChange]\"], [\n        onChange,\n        onClosePrimitive,\n        onTriggerPrimitive\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full rounded-lg border border-gray-200 bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    ref: textareaRef,\n                    value: value,\n                    onChange: handleChange,\n                    onKeyDown: handleKeyDown,\n                    onBlur: ()=>setIsTokenActive(false),\n                    className: \"w-full min-h-[200px] p-4 text-gray-900 text-sm focus:outline-none leading-[1.5]\",\n                    placeholder: \"Type / to add a command, or @ to add a reference...\"\n                }, void 0, false, {\n                    fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/Editor/index.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this),\n                isTokenActive && lastPositionRef.current && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute pointer-events-none\",\n                    style: {\n                        left: lastPositionRef.current.anchor.left,\n                        top: lastPositionRef.current.anchor.top\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_Token__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        value: tokenValue,\n                        placeholder: \"Select an option or search repositories...\",\n                        afterCursor: \"you are a genius\",\n                        isActive: true\n                    }, void 0, false, {\n                        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/Editor/index.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/Editor/index.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/Editor/index.tsx\",\n            lineNumber: 100,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/Editor/index.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(Editor, \"RopWE4D0QsglzXUQJi5ig1ur1DE=\");\n_c = Editor;\nvar _c;\n$RefreshReg$(_c, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRTtBQUV2QjtBQWEzQixTQUFTSSxPQUFPLEtBS2pCO1FBTGlCLEVBQzdCQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsa0JBQWtCLEVBQ2xCQyxnQkFBZ0IsRUFDSixHQUxpQjs7SUFNN0IsTUFBTUMsY0FBY1IsNkNBQU1BLENBQXNCO0lBQ2hELE1BQU1TLG9CQUFvQlQsNkNBQU1BLENBQWdCO0lBQ2hELE1BQU0sQ0FBQ1UsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNXLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNYSxrQkFBa0JkLDZDQUFNQSxDQUF5QjtJQUV2RCx3Q0FBd0M7SUFDeEMsTUFBTWUsbUJBQW1CLENBQ3ZCQyxVQUNBQztRQUVBLE1BQU1DLE9BQU9GLFNBQVNHLHFCQUFxQjtRQUMzQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFLEdBQUdMO1FBRWxDLE9BQU87WUFDTE0sUUFBUTtnQkFDTkMsS0FBS0wsS0FBS0ssR0FBRyxHQUFHQyxPQUFPQyxPQUFPO2dCQUM5QkMsTUFBTVIsS0FBS1EsSUFBSSxHQUFHRixPQUFPRyxPQUFPO1lBQ2xDO1lBQ0FDLFNBQVM7Z0JBQ1BMLEtBQUtMLEtBQUtLLEdBQUcsR0FBR0gsWUFBWTtnQkFDNUJNLE1BQU1SLEtBQUtRLElBQUksR0FBR0wsYUFBYTtZQUNqQztRQUNGO0lBQ0Y7SUFFQSxtQ0FBbUM7SUFDbkMsTUFBTVEsZ0JBQWdCOUIsa0RBQVdBOzZDQUMvQixDQUFDK0I7WUFDQyxJQUFJQSxFQUFFQyxHQUFHLEtBQUssS0FBSztnQkFDakIsTUFBTWYsV0FBV1IsWUFBWXdCLE9BQU87Z0JBQ3BDLElBQUksQ0FBQ2hCLFVBQVU7Z0JBRWYsTUFBTSxFQUFFaUIsY0FBYyxFQUFFLEdBQUdqQjtnQkFDM0JQLGtCQUFrQnVCLE9BQU8sR0FBR0M7Z0JBRTVCLE1BQU1DLFlBQVluQixpQkFBaUJDLFVBQVVpQjtnQkFDN0NwQixpQkFBaUI7Z0JBQ2pCQyxnQkFBZ0JrQixPQUFPLEdBQUdFO2dCQUMxQjVCLG1CQUFtQixLQUFLNEIsVUFBVU4sT0FBTyxFQUFFO1lBQzdDLE9BQU8sSUFBSUUsRUFBRUMsR0FBRyxLQUFLLFVBQVU7Z0JBQzdCbEIsaUJBQWlCO2dCQUNqQk47WUFDRjtRQUNGOzRDQUNBO1FBQUNEO1FBQW9CQztLQUFpQjtJQUd4QywrREFBK0Q7SUFDL0QsTUFBTTRCLGVBQWVwQyxrREFBV0E7NENBQzlCLENBQUMrQjtZQUNDLE1BQU1NLFdBQVdOLEVBQUVPLE1BQU0sQ0FBQ2pDLEtBQUs7WUFDL0JDLFNBQVMrQjtZQUVULElBQUkzQixrQkFBa0J1QixPQUFPLEtBQUssTUFBTTtnQkFDdEMsSUFBSUksU0FBU0UsTUFBTSxDQUFDN0Isa0JBQWtCdUIsT0FBTyxNQUFNLEtBQUs7b0JBQ3RELHlDQUF5QztvQkFDekN6QjtvQkFDQUUsa0JBQWtCdUIsT0FBTyxHQUFHO29CQUM1Qm5CLGlCQUFpQjtvQkFDakJGLGNBQWM7Z0JBQ2hCLE9BQU87b0JBQ0wsOENBQThDO29CQUM5QyxNQUFNNEIsUUFBUUgsU0FBU0ksS0FBSyxDQUFDL0Isa0JBQWtCdUIsT0FBTyxHQUFHO29CQUN6RHJCLGNBQWM0QjtvQkFDZGpDLG1CQUNFLEtBQ0FTLGlCQUFpQmUsRUFBRU8sTUFBTSxFQUFFNUIsa0JBQWtCdUIsT0FBTyxFQUFFSixPQUFPLEVBQzdEVztnQkFFSjtZQUNGO1FBQ0Y7MkNBQ0E7UUFBQ2xDO1FBQVVFO1FBQWtCRDtLQUFtQjtJQUdsRCxxQkFDRSw4REFBQ21DO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDMUI7b0JBQ0MyQixLQUFLbkM7b0JBQ0xKLE9BQU9BO29CQUNQQyxVQUFVOEI7b0JBQ1ZTLFdBQVdmO29CQUNYZ0IsUUFBUSxJQUFNaEMsaUJBQWlCO29CQUMvQjZCLFdBQVU7b0JBQ1ZJLGFBQVk7Ozs7OztnQkFFYmxDLGlCQUFpQkUsZ0JBQWdCa0IsT0FBTyxrQkFDdkMsOERBQUNTO29CQUNDQyxXQUFVO29CQUNWSyxPQUFPO3dCQUNMckIsTUFBTVosZ0JBQWdCa0IsT0FBTyxDQUFDVixNQUFNLENBQUNJLElBQUk7d0JBQ3pDSCxLQUFLVCxnQkFBZ0JrQixPQUFPLENBQUNWLE1BQU0sQ0FBQ0MsR0FBRztvQkFDekM7OEJBRUEsNEVBQUNyQiw0REFBS0E7d0JBQ0pFLE9BQU9NO3dCQUNQb0MsYUFBWTt3QkFDWkUsYUFBWTt3QkFDWkMsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94QjtHQWpId0I5QztLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL21heWFnYW8vZGV2L2ZsdWlkLXByb21wdC1lZGl0b3Ivc3JjL2NvbXBvbmVudHMvRWRpdG9yL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb3NpdGlvbiwgUG9wb3ZlclBvc2l0aW9uIH0gZnJvbSBcIkAvdHlwZXMvc2hhcmVkXCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIkAvY29tcG9uZW50cy91aS9Ub2tlblwiO1xuXG5pbnRlcmZhY2UgRWRpdG9yUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nO1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uVHJpZ2dlclByaW1pdGl2ZTogKFxuICAgIHRyaWdnZXI6IHN0cmluZyxcbiAgICBwb3NpdGlvbjogUG9zaXRpb24sXG4gICAgcXVlcnk6IHN0cmluZ1xuICApID0+IHZvaWQ7XG4gIG9uQ2xvc2VQcmltaXRpdmU6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvcih7XG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgb25UcmlnZ2VyUHJpbWl0aXZlLFxuICBvbkNsb3NlUHJpbWl0aXZlLFxufTogRWRpdG9yUHJvcHMpIHtcbiAgY29uc3QgdGV4dGFyZWFSZWYgPSB1c2VSZWY8SFRNTFRleHRBcmVhRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGxhc3RUcmlnZ2VyUG9zUmVmID0gdXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdG9rZW5WYWx1ZSwgc2V0VG9rZW5WYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzVG9rZW5BY3RpdmUsIHNldElzVG9rZW5BY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBsYXN0UG9zaXRpb25SZWYgPSB1c2VSZWY8UG9wb3ZlclBvc2l0aW9uIHwgbnVsbD4obnVsbCk7XG5cbiAgLy8gSW1wcm92ZWQgcG9wb3ZlciBwb3NpdGlvbmluZyBmdW5jdGlvblxuICBjb25zdCBnZXRUb2tlblBvc2l0aW9uID0gKFxuICAgIHRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50LFxuICAgIHBvc2l0aW9uOiBudW1iZXJcbiAgKTogUG9wb3ZlclBvc2l0aW9uID0+IHtcbiAgICBjb25zdCByZWN0ID0gdGV4dGFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeyBzY3JvbGxUb3AsIHNjcm9sbExlZnQgfSA9IHRleHRhcmVhO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luZG93LnNjcm9sbFksXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHNjcm9sbFRvcCArIDE2LFxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyBzY3JvbGxMZWZ0ICsgMTYsXG4gICAgICB9LFxuICAgIH07XG4gIH07XG5cbiAgLy8gSGFuZGxlcyB0aGUga2V5cHJlc3MgZXZlbnQgZm9yIEBcbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiQFwiKSB7XG4gICAgICAgIGNvbnN0IHRleHRhcmVhID0gdGV4dGFyZWFSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCF0ZXh0YXJlYSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0aW9uU3RhcnQgfSA9IHRleHRhcmVhO1xuICAgICAgICBsYXN0VHJpZ2dlclBvc1JlZi5jdXJyZW50ID0gc2VsZWN0aW9uU3RhcnQ7XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gZ2V0VG9rZW5Qb3NpdGlvbih0ZXh0YXJlYSwgc2VsZWN0aW9uU3RhcnQpO1xuICAgICAgICBzZXRJc1Rva2VuQWN0aXZlKHRydWUpO1xuICAgICAgICBsYXN0UG9zaXRpb25SZWYuY3VycmVudCA9IHBvc2l0aW9ucztcbiAgICAgICAgb25UcmlnZ2VyUHJpbWl0aXZlKFwiQFwiLCBwb3NpdGlvbnMuY29udGVudCwgXCJcIik7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHNldElzVG9rZW5BY3RpdmUoZmFsc2UpO1xuICAgICAgICBvbkNsb3NlUHJpbWl0aXZlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbb25UcmlnZ2VyUHJpbWl0aXZlLCBvbkNsb3NlUHJpbWl0aXZlXVxuICApO1xuXG4gIC8vIEhhbmRsZXMgdGV4dCBpbnB1dCBhbmQgZGV0ZWN0cyBpZiB0aGUgQCBzaG91bGQgcmVtYWluIGFjdGl2ZVxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBvbkNoYW5nZShuZXdWYWx1ZSk7XG5cbiAgICAgIGlmIChsYXN0VHJpZ2dlclBvc1JlZi5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZS5jaGFyQXQobGFzdFRyaWdnZXJQb3NSZWYuY3VycmVudCkgIT09IFwiQFwiKSB7XG4gICAgICAgICAgLy8gSWYgdXNlciBkZWxldGVkIHRoZSBALCBjbG9zZSB0aGUgdG9rZW5cbiAgICAgICAgICBvbkNsb3NlUHJpbWl0aXZlKCk7XG4gICAgICAgICAgbGFzdFRyaWdnZXJQb3NSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgc2V0SXNUb2tlbkFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgc2V0VG9rZW5WYWx1ZShcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBVcGRhdGUgcXVlcnkgYmFzZWQgb24gY3VycmVudCBpbnB1dCBhZnRlciBAXG4gICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXdWYWx1ZS5zbGljZShsYXN0VHJpZ2dlclBvc1JlZi5jdXJyZW50ICsgMSk7XG4gICAgICAgICAgc2V0VG9rZW5WYWx1ZShxdWVyeSk7XG4gICAgICAgICAgb25UcmlnZ2VyUHJpbWl0aXZlKFxuICAgICAgICAgICAgXCJAXCIsXG4gICAgICAgICAgICBnZXRUb2tlblBvc2l0aW9uKGUudGFyZ2V0LCBsYXN0VHJpZ2dlclBvc1JlZi5jdXJyZW50KS5jb250ZW50LFxuICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbb25DaGFuZ2UsIG9uQ2xvc2VQcmltaXRpdmUsIG9uVHJpZ2dlclByaW1pdGl2ZV1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICByZWY9e3RleHRhcmVhUmVmfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgICBvbkJsdXI9eygpID0+IHNldElzVG9rZW5BY3RpdmUoZmFsc2UpfSAvLyBDbG9zZSB0b2tlbiBvbiBibHVyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLVsyMDBweF0gcC00IHRleHQtZ3JheS05MDAgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgbGVhZGluZy1bMS41XVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIC8gdG8gYWRkIGEgY29tbWFuZCwgb3IgQCB0byBhZGQgYSByZWZlcmVuY2UuLi5cIlxuICAgICAgICAvPlxuICAgICAgICB7aXNUb2tlbkFjdGl2ZSAmJiBsYXN0UG9zaXRpb25SZWYuY3VycmVudCAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcG9pbnRlci1ldmVudHMtbm9uZVwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBsZWZ0OiBsYXN0UG9zaXRpb25SZWYuY3VycmVudC5hbmNob3IubGVmdCxcbiAgICAgICAgICAgICAgdG9wOiBsYXN0UG9zaXRpb25SZWYuY3VycmVudC5hbmNob3IudG9wLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VG9rZW5cbiAgICAgICAgICAgICAgdmFsdWU9e3Rva2VuVmFsdWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGFuIG9wdGlvbiBvciBzZWFyY2ggcmVwb3NpdG9yaWVzLi4uXCJcbiAgICAgICAgICAgICAgYWZ0ZXJDdXJzb3I9XCJ5b3UgYXJlIGEgZ2VuaXVzXCJcbiAgICAgICAgICAgICAgaXNBY3RpdmU9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlRva2VuIiwiRWRpdG9yIiwidmFsdWUiLCJvbkNoYW5nZSIsIm9uVHJpZ2dlclByaW1pdGl2ZSIsIm9uQ2xvc2VQcmltaXRpdmUiLCJ0ZXh0YXJlYVJlZiIsImxhc3RUcmlnZ2VyUG9zUmVmIiwidG9rZW5WYWx1ZSIsInNldFRva2VuVmFsdWUiLCJpc1Rva2VuQWN0aXZlIiwic2V0SXNUb2tlbkFjdGl2ZSIsImxhc3RQb3NpdGlvblJlZiIsImdldFRva2VuUG9zaXRpb24iLCJ0ZXh0YXJlYSIsInBvc2l0aW9uIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJhbmNob3IiLCJ0b3AiLCJ3aW5kb3ciLCJzY3JvbGxZIiwibGVmdCIsInNjcm9sbFgiLCJjb250ZW50IiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXkiLCJjdXJyZW50Iiwic2VsZWN0aW9uU3RhcnQiLCJwb3NpdGlvbnMiLCJoYW5kbGVDaGFuZ2UiLCJuZXdWYWx1ZSIsInRhcmdldCIsImNoYXJBdCIsInF1ZXJ5Iiwic2xpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJvbktleURvd24iLCJvbkJsdXIiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwiYWZ0ZXJDdXJzb3IiLCJpc0FjdGl2ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Editor/index.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/ui/Token.tsx":
/*!*************************************!*\
  !*** ./src/components/ui/Token.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Token)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction Token(param) {\n    let { value, placeholder, isActive = false, afterCursor = \"\" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"inline-flex items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-gray-900 absolute -left-[1ch]\",\n                children: \"@\"\n            }, void 0, false, {\n                fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/ui/Token.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"\".concat(isActive ? \"bg-gray-100 border-gray-300\" : \"border-transparent\", \" border rounded px-1 -ml-px text-gray-600\"),\n                children: [\n                    value,\n                    isActive && !value && placeholder && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-gray-400\",\n                        children: placeholder\n                    }, void 0, false, {\n                        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/ui/Token.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this),\n                    isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-gray-400 ml-[1px]\",\n                        children: afterCursor\n                    }, void 0, false, {\n                        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/ui/Token.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/ui/Token.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/ui/Token.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = Token;\nvar _c;\n$RefreshReg$(_c, \"Token\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL1Rva2VuLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFPZSxTQUFTQSxNQUFNLEtBS2pCO1FBTGlCLEVBQzVCQyxLQUFLLEVBQ0xDLFdBQVcsRUFDWEMsV0FBVyxLQUFLLEVBQ2hCQyxjQUFjLEVBQUUsRUFDTCxHQUxpQjtJQU01QixxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNEO2dCQUFLQyxXQUFVOzBCQUFxQzs7Ozs7OzBCQUNyRCw4REFBQ0Q7Z0JBQ0NDLFdBQVcsR0FFVixPQURDSCxXQUFXLGdDQUFnQyxzQkFDNUM7O29CQUVBRjtvQkFDQUUsWUFBWSxDQUFDRixTQUFTQyw2QkFDckIsOERBQUNHO3dCQUFLQyxXQUFVO2tDQUFpQko7Ozs7OztvQkFFbENDLDBCQUNDLDhEQUFDRTt3QkFBS0MsV0FBVTtrQ0FBMEJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEQ7S0F4QndCSiIsInNvdXJjZXMiOlsiL1VzZXJzL21heWFnYW8vZGV2L2ZsdWlkLXByb21wdC1lZGl0b3Ivc3JjL2NvbXBvbmVudHMvdWkvVG9rZW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUb2tlblByb3BzIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGlzQWN0aXZlPzogYm9vbGVhbjtcbiAgYWZ0ZXJDdXJzb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRva2VuKHtcbiAgdmFsdWUsXG4gIHBsYWNlaG9sZGVyLFxuICBpc0FjdGl2ZSA9IGZhbHNlLFxuICBhZnRlckN1cnNvciA9IFwiXCIsXG59OiBUb2tlblByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGFic29sdXRlIC1sZWZ0LVsxY2hdXCI+QDwvc3Bhbj5cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgaXNBY3RpdmUgPyBcImJnLWdyYXktMTAwIGJvcmRlci1ncmF5LTMwMFwiIDogXCJib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICB9IGJvcmRlciByb3VuZGVkIHB4LTEgLW1sLXB4IHRleHQtZ3JheS02MDBgfVxuICAgICAgPlxuICAgICAgICB7dmFsdWV9XG4gICAgICAgIHtpc0FjdGl2ZSAmJiAhdmFsdWUgJiYgcGxhY2Vob2xkZXIgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj57cGxhY2Vob2xkZXJ9PC9zcGFuPlxuICAgICAgICApfVxuICAgICAgICB7aXNBY3RpdmUgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgbWwtWzFweF1cIj57YWZ0ZXJDdXJzb3J9PC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJUb2tlbiIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJpc0FjdGl2ZSIsImFmdGVyQ3Vyc29yIiwic3BhbiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/Token.tsx\n"));

/***/ })

});