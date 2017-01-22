webpackHotUpdate(0,{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _anchor = __webpack_require__(246);

var _anchor2 = _interopRequireDefault(_anchor);

var _logo = __webpack_require__(243);

var _logo2 = _interopRequireDefault(_logo);

var _header = __webpack_require__(239);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(page) {
  return _react2.default.createElement(
    'header',
    { className: _header2.default.header },
    _react2.default.createElement(_logo2.default, null),
    _react2.default.createElement(
      _anchor2.default,
      { to: '/projects', className: _header2.default.projectslink },
      'Projects'
    ),
    _react2.default.createElement(
      _anchor2.default,
      { to: '/Blog', className: _header2.default.bloglink },
      'Blog'
    ),
    _react2.default.createElement(
      'span',
      { className: _header2.default.pagename },
      page
    )
  );
};

exports.default = Header;

/***/ })

})