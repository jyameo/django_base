!function(e){function n(n){for(var r,i,l=n[0],c=n[1],a=n[2],p=0,b=[];p<l.length;p++)i=l[p],s[i]&&b.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(n);b.length;)b.shift()();return o.push.apply(o,a||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,l=1;l<t.length;l++){var c=t[l];0!==s[c]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},s={3:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var a=0;a<l.length;a++)n(l[a]);var u=c;o.push([240,0]),t()}({149:function(module,exports,__webpack_require__){eval('/* WEBPACK VAR INJECTION */(function(process) {/* REACT HOT LOADER */ if (false) {} try { (function () {\n\n"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(5));\n\nvar _radium = _interopRequireDefault(__webpack_require__(147));\n\nvar _reactRedux = __webpack_require__(72);\n\nvar counterActions = _interopRequireWildcard(__webpack_require__(67));\n\nvar _Headline = _interopRequireDefault(__webpack_require__(33));\n\nvar _dec, _class;\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  button: {\n    cursor: "pointer"\n  },\n  counter: {\n    color: "blue",\n    fontSize: "20px"\n  }\n};\nvar SampleAppContainer = (_dec = (0, _reactRedux.connect)(function (state) {\n  return {\n    counters: state.counters\n  };\n}), _dec(_class = (0, _radium.default)(_class =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(SampleAppContainer, _React$Component);\n\n  function SampleAppContainer() {\n    _classCallCheck(this, SampleAppContainer);\n\n    return _possibleConstructorReturn(this, (SampleAppContainer.__proto__ || Object.getPrototypeOf(SampleAppContainer)).apply(this, arguments));\n  }\n\n  _createClass(SampleAppContainer, [{\n    key: "handleClick",\n    value: function handleClick() {\n      var dispatch = this.props.dispatch;\n      dispatch(counterActions.increaseCounter());\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var _this = this;\n\n      var counters = this.props.counters;\n      return _react.default.createElement("div", {\n        className: "container"\n      }, _react.default.createElement("div", {\n        className: "row"\n      }, _react.default.createElement("div", {\n        className: "col-sm-12"\n      }, _react.default.createElement(_Headline.default, null, "Sample App!"), _react.default.createElement("div", {\n        style: [styles.button],\n        onClick: function onClick() {\n          return _this.handleClick();\n        }\n      }, "INCREASE"), _react.default.createElement("p", {\n        style: [styles.counter]\n      }, counters.clicks), _react.default.createElement("p", null, process.env.BASE_API_URL), _react.default.createElement("h1", null, "THIS IS REACT-DJANGO!!!"))));\n    }\n  }]);\n\n  return SampleAppContainer;\n}(_react.default.Component)) || _class) || _class);\nexports.default = SampleAppContainer;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) {} }\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(148)))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdGpzL2NvbnRhaW5lcnMvU2FtcGxlQXBwQ29udGFpbmVyLmpzeD83Y2VjIl0sIm5hbWVzIjpbInN0eWxlcyIsImJ1dHRvbiIsImN1cnNvciIsImNvdW50ZXIiLCJjb2xvciIsImZvbnRTaXplIiwiU2FtcGxlQXBwQ29udGFpbmVyIiwiY291bnRlcnMiLCJzdGF0ZSIsIlJhZGl1bSIsImRpc3BhdGNoIiwicHJvcHMiLCJjb3VudGVyQWN0aW9ucyIsImluY3JlYXNlQ291bnRlciIsImhhbmRsZUNsaWNrIiwiY2xpY2tzIiwicHJvY2VzcyIsImVudiIsIkJBU0VfQVBJX1VSTCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVM7QUFDYkMsVUFBUTtBQUNOQyxZQUFRO0FBREYsR0FESztBQUliQyxXQUFTO0FBQ1BDLFdBQU8sTUFEQTtBQUVQQyxjQUFVO0FBRkg7QUFKSSxDQUFmO0lBY3FCQyxrQixXQUpwQix5QkFBUTtBQUFBLFNBQVU7QUFDakJDLGNBQVVDLE1BQU1EO0FBREMsR0FBVjtBQUFBLENBQVIsQyxvQkFHQUUsZTs7Ozs7Ozs7Ozs7OztrQ0FFZTtBQUFBLFVBQ1BDLFFBRE8sR0FDSyxLQUFLQyxLQURWLENBQ1BELFFBRE87QUFFWkEsZUFBU0UsZUFBZUMsZUFBZixFQUFUO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUFBLFVBQ0ZOLFFBREUsR0FDVSxLQUFLSSxLQURmLENBQ0ZKLFFBREU7QUFFUCxhQUNFO0FBQUssbUJBQVU7QUFBZixTQUNFO0FBQUssbUJBQVU7QUFBZixTQUNFO0FBQUssbUJBQVU7QUFBZixTQUNFLDZCQUFDLGlCQUFELHNCQURGLEVBRUU7QUFBSyxlQUFPLENBQUNQLE9BQU9DLE1BQVIsQ0FBWjtBQUE2QixpQkFBUztBQUFBLGlCQUFNLE1BQUthLFdBQUwsRUFBTjtBQUFBO0FBQXRDLG9CQUZGLEVBR0U7QUFBRyxlQUFPLENBQUNkLE9BQU9HLE9BQVI7QUFBVixTQUE2QkksU0FBU1EsTUFBdEMsQ0FIRixFQUlFLHdDQUFJQyxRQUFRQyxHQUFSLENBQVlDLFlBQWhCLENBSkYsRUFLUixtRUFMUSxDQURGLENBREYsQ0FERjtBQWFEOzs7O0VBckI2Q0MsZUFBTUMsUyIsImZpbGUiOiIxNDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBSYWRpdW0gZnJvbSBcInJhZGl1bVwiXG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5pbXBvcnQgKiBhcyBjb3VudGVyQWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9ucy9jb3VudGVyQWN0aW9uc1wiXG5pbXBvcnQgSGVhZGxpbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGxpbmVcIlxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJ1dHRvbjoge1xuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gIH0sXG4gIGNvdW50ZXI6IHtcbiAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxuICB9XG59XG5cbkBjb25uZWN0KHN0YXRlID0+ICh7XG4gIGNvdW50ZXJzOiBzdGF0ZS5jb3VudGVycyxcbn0pKVxuQFJhZGl1bVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FtcGxlQXBwQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgbGV0IHtkaXNwYXRjaH0gPSB0aGlzLnByb3BzO1xuICAgIGRpc3BhdGNoKGNvdW50ZXJBY3Rpb25zLmluY3JlYXNlQ291bnRlcigpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y291bnRlcnN9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICA8SGVhZGxpbmU+U2FtcGxlIEFwcCE8L0hlYWRsaW5lPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17W3N0eWxlcy5idXR0b25dfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCl9PklOQ1JFQVNFPC9kaXY+XG4gICAgICAgICAgICA8cCBzdHlsZT17W3N0eWxlcy5jb3VudGVyXX0+e2NvdW50ZXJzLmNsaWNrc308L3A+XG4gICAgICAgICAgICA8cD57cHJvY2Vzcy5lbnYuQkFTRV9BUElfVVJMfTwvcD5cblx0XHQ8aDE+VEhJUyBJUyBSRUFDVC1ESkFOR08hISE8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///149\n')},150:function(module,exports,__webpack_require__){eval('/* REACT HOT LOADER */ if (false) {} try { (function () {\n\n"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = submissions;\n\nvar sampleActions = _interopRequireWildcard(__webpack_require__(67));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === \'function\') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar initialState = {\n  clicks: 0\n};\n\nfunction submissions() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  switch (action.type) {\n    case sampleActions.INCREASE:\n      return _objectSpread({}, state, {\n        clicks: state.clicks + 1\n      });\n\n    default:\n      return state;\n  }\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) {} }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdGpzL3JlZHVjZXJzL2NvdW50ZXJzLmpzP2U0YzAiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiY2xpY2tzIiwic3VibWlzc2lvbnMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJzYW1wbGVBY3Rpb25zIiwiSU5DUkVBU0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGVBQWU7QUFDbkJDLFVBQVE7QUFEVyxDQUFyQjs7QUFJZSxTQUFTQyxXQUFULEdBQW9EO0FBQUEsTUFBL0JDLEtBQStCLHVFQUF6QkgsWUFBeUI7QUFBQSxNQUFYSSxNQUFXLHVFQUFKLEVBQUk7O0FBQ2pFLFVBQVFBLE9BQU9DLElBQWY7QUFDQSxTQUFLQyxjQUFjQyxRQUFuQjtBQUNFLCtCQUFXSixLQUFYO0FBQWtCRixnQkFBUUUsTUFBTUYsTUFBTixHQUFlO0FBQXpDOztBQUNGO0FBQ0UsYUFBT0UsS0FBUDtBQUpGO0FBTUQsQyIsImZpbGUiOiIxNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzYW1wbGVBY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zXCJcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjbGlja3M6IDAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Ym1pc3Npb25zKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uPXt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBzYW1wbGVBY3Rpb25zLklOQ1JFQVNFOlxuICAgIHJldHVybiB7Li4uc3RhdGUsIGNsaWNrczogc3RhdGUuY2xpY2tzICsgMX1cbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///150\n')},151:function(module,exports,__webpack_require__){eval('/* REACT HOT LOADER */ if (false) {} try { (function () {\n\n"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nObject.defineProperty(exports, "counters", {\n  enumerable: true,\n  get: function get() {\n    return _counters.default;\n  }\n});\n\nvar _counters = _interopRequireDefault(__webpack_require__(150));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) {} }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdGpzL3JlZHVjZXJzL2luZGV4LmpzP2E0MDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSIsImZpbGUiOiIxNTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIGNvdW50ZXJzIH0gZnJvbSAnLi9jb3VudGVycydcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///151\n')},240:function(module,exports,__webpack_require__){eval('/* REACT HOT LOADER */ if (false) {} try { (function () {\n\n"use strict";\n\nvar _react = _interopRequireDefault(__webpack_require__(5));\n\nvar _reactDom = __webpack_require__(73);\n\nvar _redux = __webpack_require__(57);\n\nvar _reactRedux = __webpack_require__(72);\n\nvar _reduxThunk = _interopRequireDefault(__webpack_require__(152));\n\nvar reducers = _interopRequireWildcard(__webpack_require__(151));\n\nvar _SampleAppContainer = _interopRequireDefault(__webpack_require__(149));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {\n  return f;\n})(_redux.createStore);\nvar reducer = (0, _redux.combineReducers)(reducers);\nvar store = finalCreateStore(reducer);\n\nvar SampleApp =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(SampleApp, _React$Component);\n\n  function SampleApp() {\n    _classCallCheck(this, SampleApp);\n\n    return _possibleConstructorReturn(this, (SampleApp.__proto__ || Object.getPrototypeOf(SampleApp)).apply(this, arguments));\n  }\n\n  _createClass(SampleApp, [{\n    key: "render",\n    value: function render() {\n      return _react.default.createElement(_reactRedux.Provider, {\n        store: store\n      }, _react.default.createElement(_SampleAppContainer.default, null));\n    }\n  }]);\n\n  return SampleApp;\n}(_react.default.Component);\n\n(0, _reactDom.render)(_react.default.createElement(SampleApp, null), document.getElementById(\'SampleApp\'));\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) {} }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdGpzL1NhbXBsZUFwcC5qc3g/MmY3NyJdLCJuYW1lcyI6WyJmaW5hbENyZWF0ZVN0b3JlIiwidGh1bmsiLCJ3aW5kb3ciLCJkZXZUb29sc0V4dGVuc2lvbiIsImYiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJyZWR1Y2VycyIsInN0b3JlIiwiU2FtcGxlQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsbUJBQW1CLG9CQUNyQiw0QkFBZ0JDLG1CQUFoQixDQURxQixFQUVyQkMsT0FBT0MsaUJBQVAsR0FBMkJELE9BQU9DLGlCQUFQLEVBQTNCLEdBQXdEO0FBQUEsU0FBS0MsQ0FBTDtBQUFBLENBRm5DLEVBR3JCQyxrQkFIcUIsQ0FBdkI7QUFJQSxJQUFJQyxVQUFVLDRCQUFnQkMsUUFBaEIsQ0FBZDtBQUNBLElBQUlDLFFBQVFSLGlCQUFpQk0sT0FBakIsQ0FBWjs7SUFFTUcsUzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0UsNkJBQUMsb0JBQUQ7QUFBVSxlQUFPRDtBQUFqQixTQUNFLDZCQUFDLDJCQUFELE9BREYsQ0FERjtBQUtEOzs7O0VBUHFCRSxlQUFNQyxTOztBQVU5QixzQkFBTyw2QkFBQyxTQUFELE9BQVAsRUFBcUJDLFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBckIsRSIsImZpbGUiOiIyNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIlxuaW1wb3J0IHtcbiAgY3JlYXRlU3RvcmUsXG4gIGNvbXBvc2UsXG4gIGFwcGx5TWlkZGxld2FyZSxcbiAgY29tYmluZVJlZHVjZXJzLFxufSBmcm9tIFwicmVkdXhcIlxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiXG5cbmltcG9ydCAqIGFzIHJlZHVjZXJzIGZyb20gXCIuL3JlZHVjZXJzXCJcbmltcG9ydCBTYW1wbGVBcHBDb250YWluZXIgZnJvbSBcIi4vY29udGFpbmVycy9TYW1wbGVBcHBDb250YWluZXJcIlxuXG5sZXQgZmluYWxDcmVhdGVTdG9yZSA9IGNvbXBvc2UoXG4gIGFwcGx5TWlkZGxld2FyZSh0aHVuayksXG4gIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbiA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpIDogZiA9PiBmXG4pKGNyZWF0ZVN0b3JlKVxubGV0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpXG5sZXQgc3RvcmUgPSBmaW5hbENyZWF0ZVN0b3JlKHJlZHVjZXIpXG5cbmNsYXNzIFNhbXBsZUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxTYW1wbGVBcHBDb250YWluZXIgLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKVxuICB9XG59XG5cbnJlbmRlcig8U2FtcGxlQXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdTYW1wbGVBcHAnKSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///240\n')},33:function(module,exports,__webpack_require__){eval('/* REACT HOT LOADER */ if (false) {} try { (function () {\n\n"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(5));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Headline =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Headline, _React$Component);\n\n  function Headline() {\n    _classCallCheck(this, Headline);\n\n    return _possibleConstructorReturn(this, (Headline.__proto__ || Object.getPrototypeOf(Headline)).apply(this, arguments));\n  }\n\n  _createClass(Headline, [{\n    key: "render",\n    value: function render() {\n      return _react.default.createElement("h1", null, " REACT-DJANGO!!!!", this.props.children);\n    }\n  }]);\n\n  return Headline;\n}(_react.default.Component);\n\nexports.default = Headline;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) {} }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdGpzL2NvbXBvbmVudHMvSGVhZGxpbmUuanN4P2VjYjMiXSwibmFtZXMiOlsiSGVhZGxpbmUiLCJwcm9wcyIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFDUCxhQUNFLDhEQUF1QixLQUFLQyxLQUFMLENBQVdDLFFBQWxDLENBREY7QUFHRDs7OztFQUxtQ0MsZUFBTUMsUyIsImZpbGUiOiIzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGgxPiBSRUFDVC1ESkFOR08hISEheyB0aGlzLnByb3BzLmNoaWxkcmVuIH08L2gxPlxuICAgIClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///33\n')},67:function(module,exports,__webpack_require__){eval('/* REACT HOT LOADER */ if (false) {} try { (function () {\n\n"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.increaseCounter = increaseCounter;\nexports.INCREASE = void 0;\nvar INCREASE = "INCREASE";\nexports.INCREASE = INCREASE;\n\nfunction increaseCounter() {\n  return {\n    type: INCREASE\n  };\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) {} }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdGpzL2FjdGlvbnMvY291bnRlckFjdGlvbnMuanM/NzIzYyJdLCJuYW1lcyI6WyJJTkNSRUFTRSIsImluY3JlYXNlQ291bnRlciIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFPLElBQU1BLFdBQVcsVUFBakI7OztBQUNBLFNBQVNDLGVBQVQsR0FBMkI7QUFDOUIsU0FBTztBQUFDQyxVQUFNRjtBQUFQLEdBQVA7QUFDSCxDIiwiZmlsZSI6IjY3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IElOQ1JFQVNFID0gXCJJTkNSRUFTRVwiXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVhc2VDb3VudGVyKCkge1xuICAgIHJldHVybiB7dHlwZTogSU5DUkVBU0V9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///67\n')}});