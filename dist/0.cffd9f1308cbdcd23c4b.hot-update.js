webpackHotUpdate(0,{

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _anchor = __webpack_require__(246);

var _anchor2 = _interopRequireDefault(_anchor);

var _logo = __webpack_require__(244);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo(props) {
  return _react2.default.createElement(
    _anchor2.default,
    { to: '/', className: _logo2.default.link },
    _react2.default.createElement(
      'h1',
      { className: _logo2.default.header },
      _react2.default.createElement(
        'svg',
        { className: _logo2.default.wrapper, viewBox: '0 0 32 32', height: '32', width: '32' },
        _react2.default.createElement('path', { className: _logo2.default.mBack, d: 'M32 0 L32 32 L0 32 Z' }),
        _react2.default.createElement('path', { className: _logo2.default.mFront, d: 'M0 0 L32 32 L0 32 Z' })
      ),
      _react2.default.createElement(
        'svg',
        { className: _logo2.default.wrapper, viewBox: '0 0 32 32', height: '32', width: '32' },
        _react2.default.createElement('path', { className: _logo2.default.hBack, d: 'M0 0 L6 0 L12 32 L0 32 Z M20 0 L32 0 L32 32 L22 32 Z' }),
        _react2.default.createElement('path', { className: _logo2.default.hFront, d: 'M32 0 L32 20 L0 32 L0 12 Z' })
      ),
      _react2.default.createElement(
        'span',
        { className: _logo2.default.name },
        'Matt Hamlin'
      )
    )
  );
};

exports.default = Logo;

/***/ })

})