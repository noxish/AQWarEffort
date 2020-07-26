webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _assets_js_TableClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/js/TableClass */ \"./assets/js/TableClass.js\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero */ \"./components/Hero.js\");\n/* harmony import */ var _components_Ally__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Ally */ \"./components/Ally.js\");\n/* harmony import */ var _components_Horde__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Horde */ \"./components/Horde.js\");\nvar _jsxFileName = \"/home/dean/github/aqWarEffort/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Index(_ref) {\n  var gson = _ref.gson,\n      lastUpdate = _ref.lastUpdate,\n      preview = _ref.preview;\n  var table = {\n    ally: {\n      current: new _assets_js_TableClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"](gson[1]),\n      total: new _assets_js_TableClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"](gson[0])\n    },\n    horde: {\n      current: new _assets_js_TableClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"](gson[3]),\n      total: new _assets_js_TableClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"](gson[2])\n    }\n  };\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    date: lastUpdate,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(\"section\", {\n    id: \"section-table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    id: \"table-ally\",\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, __jsx(_components_Ally__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    table: table.ally,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    id: \"table-horde\",\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, __jsx(_components_Horde__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    table: table.horde,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  })))), __jsx(\"footer\", {\n    id: \"footer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"Made with \\uD83C\\uDF7B\\uFE0F by Exa & Doyd \", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 39\n    }\n  }), \"of the Laughing Coffin\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"https://github.com/JollyGrin/aqwareffort\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(\"i\", {\n    className: \"fa fa-github\",\n    \"aria-hidden\": \"true\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }), \"View Source\"))));\n}\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiZ3NvbiIsImxhc3RVcGRhdGUiLCJwcmV2aWV3IiwidGFibGUiLCJhbGx5IiwiY3VycmVudCIsIlRhYmxlIiwidG90YWwiLCJob3JkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLEtBQVQsT0FBOEM7QUFBQSxNQUE3QkMsSUFBNkIsUUFBN0JBLElBQTZCO0FBQUEsTUFBdkJDLFVBQXVCLFFBQXZCQSxVQUF1QjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUMzRCxNQUFNQyxLQUFLLEdBQUc7QUFDWkMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxJQUFJQyw2REFBSixDQUFVTixJQUFJLENBQUMsQ0FBRCxDQUFkLENBREw7QUFFSk8sV0FBSyxFQUFFLElBQUlELDZEQUFKLENBQVVOLElBQUksQ0FBQyxDQUFELENBQWQ7QUFGSCxLQURNO0FBS1pRLFNBQUssRUFBRTtBQUNMSCxhQUFPLEVBQUUsSUFBSUMsNkRBQUosQ0FBVU4sSUFBSSxDQUFDLENBQUQsQ0FBZCxDQURKO0FBRUxPLFdBQUssRUFBRSxJQUFJRCw2REFBSixDQUFVTixJQUFJLENBQUMsQ0FBRCxDQUFkO0FBRkY7QUFMSyxHQUFkO0FBV0EsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQU0sUUFBSSxFQUFFQyxVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQVMsTUFBRSxFQUFDLGVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssTUFBRSxFQUFDLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssTUFBRSxFQUFDLFlBQVI7QUFBcUIsYUFBUyxFQUFDLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQU0sU0FBSyxFQUFFRSxLQUFLLENBQUNDLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxNQUFFLEVBQUMsYUFBUjtBQUFzQixhQUFTLEVBQUMsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBTyxTQUFLLEVBQUVELEtBQUssQ0FBQ0ssS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FERixDQUZGLEVBWUU7QUFBUSxNQUFFLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFDOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQ5QiwyQkFERixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQywwQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsY0FBYjtBQUE0QixtQkFBWSxNQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsZ0JBREYsQ0FMRixDQVpGLENBREY7QUEyQkQ7S0F2Q3VCVCxLIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uL2Fzc2V0cy9qcy9nc29uJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2Fzc2V0cy9qcy9UYWJsZUNsYXNzJztcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvSGVybyc7XG5pbXBvcnQgQWxseSBmcm9tICcuLi9jb21wb25lbnRzL0FsbHknO1xuaW1wb3J0IEhvcmRlIGZyb20gJy4uL2NvbXBvbmVudHMvSG9yZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IGdzb24sIGxhc3RVcGRhdGUsIHByZXZpZXcgfSkge1xuICBjb25zdCB0YWJsZSA9IHtcbiAgICBhbGx5OiB7XG4gICAgICBjdXJyZW50OiBuZXcgVGFibGUoZ3NvblsxXSksXG4gICAgICB0b3RhbDogbmV3IFRhYmxlKGdzb25bMF0pLFxuICAgIH0sXG4gICAgaG9yZGU6IHtcbiAgICAgIGN1cnJlbnQ6IG5ldyBUYWJsZShnc29uWzNdKSxcbiAgICAgIHRvdGFsOiBuZXcgVGFibGUoZ3NvblsyXSksXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVybyBkYXRlPXtsYXN0VXBkYXRlfSAvPlxuICAgICAgPHNlY3Rpb24gaWQ9J3NlY3Rpb24tdGFibGUnPlxuICAgICAgICA8ZGl2IGlkPSd0YWJsZSc+XG4gICAgICAgICAgPGRpdiBpZD0ndGFibGUtYWxseScgY2xhc3NOYW1lPSd0YWInPlxuICAgICAgICAgICAgPEFsbHkgdGFibGU9e3RhYmxlLmFsbHl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD0ndGFibGUtaG9yZGUnIGNsYXNzTmFtZT0ndGFiJz5cbiAgICAgICAgICAgIDxIb3JkZSB0YWJsZT17dGFibGUuaG9yZGV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGZvb3RlciBpZD0nZm9vdGVyJz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgTWFkZSB3aXRoIPCfjbvvuI8gYnkgRXhhICYgRG95ZCA8YnIgLz5cbiAgICAgICAgICBvZiB0aGUgTGF1Z2hpbmcgQ29mZmluXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL0pvbGx5R3Jpbi9hcXdhcmVmZm9ydCc+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWdpdGh1YicgYXJpYS1oaWRkZW49J3RydWUnPjwvaT5cbiAgICAgICAgICAgIFZpZXcgU291cmNlXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcHJldmlldyA9IGZhbHNlIH0pIHtcbiAgY29uc3QgZ3NvbiA9IGF3YWl0IGdldERhdGEocHJvY2Vzcy5lbnYuVVJMKTtcblxuICBjb25zdCBsYXN0VXBkYXRlID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLCAxMCkucmVwbGFjZSgvLS9nLCAnLycpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZ3NvbiwgbGFzdFVwZGF0ZSB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})