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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PrimitiveSelector)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction PrimitiveSelector(param) {\n    let { isOpen, position, onClose } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PrimitiveSelector.useEffect\": ()=>{\n            function handleClickOutside(event) {\n                if (ref.current && !ref.current.contains(event.target)) {\n                    onClose();\n                }\n            }\n            document.addEventListener(\"mousedown\", handleClickOutside);\n            return ({\n                \"PrimitiveSelector.useEffect\": ()=>document.removeEventListener(\"mousedown\", handleClickOutside)\n            })[\"PrimitiveSelector.useEffect\"];\n        }\n    }[\"PrimitiveSelector.useEffect\"], [\n        onClose\n    ]);\n    if (!isOpen) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: \"fixed z-50 w-[300px] bg-white rounded-lg shadow-lg border border-gray-200\",\n        style: {\n            top: position.top + 10,\n            left: position.left\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-2\",\n            children: \"Primitive Selector\"\n        }, void 0, false, {\n            fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mayagao/dev/fluid-prompt-editor/src/components/PrimitiveSelector/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(PrimitiveSelector, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n_c = PrimitiveSelector;\nvar _c;\n$RefreshReg$(_c, \"PrimitiveSelector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1ByaW1pdGl2ZVNlbGVjdG9yL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEM7QUFTM0IsU0FBU0Usa0JBQWtCLEtBSWpCO1FBSmlCLEVBQ3hDQyxNQUFNLEVBQ05DLFFBQVEsRUFDUkMsT0FBTyxFQUNnQixHQUppQjs7SUFLeEMsTUFBTUMsTUFBTUwsNkNBQU1BLENBQWlCO0lBRW5DRCxnREFBU0E7dUNBQUM7WUFDUixTQUFTTyxtQkFBbUJDLEtBQWlCO2dCQUMzQyxJQUFJRixJQUFJRyxPQUFPLElBQUksQ0FBQ0gsSUFBSUcsT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sR0FBVztvQkFDOUROO2dCQUNGO1lBQ0Y7WUFFQU8sU0FBU0MsZ0JBQWdCLENBQUMsYUFBYU47WUFDdkM7K0NBQU8sSUFBTUssU0FBU0UsbUJBQW1CLENBQUMsYUFBYVA7O1FBQ3pEO3NDQUFHO1FBQUNGO0tBQVE7SUFFWixJQUFJLENBQUNGLFFBQVEsT0FBTztJQUVwQixxQkFDRSw4REFBQ1k7UUFDQ1QsS0FBS0E7UUFDTFUsV0FBVTtRQUNWQyxPQUFPO1lBQ0xDLEtBQUtkLFNBQVNjLEdBQUcsR0FBRztZQUNwQkMsTUFBTWYsU0FBU2UsSUFBSTtRQUNyQjtrQkFHQSw0RUFBQ0o7WUFBSUMsV0FBVTtzQkFBTTs7Ozs7Ozs7Ozs7QUFHM0I7R0FqQ3dCZDtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL21heWFnYW8vZGV2L2ZsdWlkLXByb21wdC1lZGl0b3Ivc3JjL2NvbXBvbmVudHMvUHJpbWl0aXZlU2VsZWN0b3IvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCJAL3R5cGVzL3NoYXJlZFwiO1xuXG5pbnRlcmZhY2UgUHJpbWl0aXZlU2VsZWN0b3JQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgcG9zaXRpb246IFBvc2l0aW9uO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmltaXRpdmVTZWxlY3Rvcih7XG4gIGlzT3BlbixcbiAgcG9zaXRpb24sXG4gIG9uQ2xvc2UsXG59OiBQcmltaXRpdmVTZWxlY3RvclByb3BzKSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmIChyZWYuY3VycmVudCAmJiAhcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpKSB7XG4gICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgfSwgW29uQ2xvc2VdKTtcblxuICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHotNTAgdy1bMzAwcHhdIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDBcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdG9wOiBwb3NpdGlvbi50b3AgKyAxMCwgLy8gQWRkIHNvbWUgb2Zmc2V0IGZyb20gdGhlIGN1cnNvclxuICAgICAgICBsZWZ0OiBwb3NpdGlvbi5sZWZ0LFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7LyogQ29udGVudCB3aWxsIGdvIGhlcmUgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlByaW1pdGl2ZSBTZWxlY3RvcjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIlByaW1pdGl2ZVNlbGVjdG9yIiwiaXNPcGVuIiwicG9zaXRpb24iLCJvbkNsb3NlIiwicmVmIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0b3AiLCJsZWZ0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PrimitiveSelector/index.tsx\n"));

/***/ })

});