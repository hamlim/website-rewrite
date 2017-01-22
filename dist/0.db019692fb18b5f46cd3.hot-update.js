webpackHotUpdate(0,{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(108);

var _home = __webpack_require__(117);

var _home2 = _interopRequireDefault(_home);

__webpack_require__(240);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Website = function Website() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactRouter.Route, { path: '/', component: _home2.default })
    )
  );
};

exports.default = Website;

/***/ })

})