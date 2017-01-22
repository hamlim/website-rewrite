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

var _projects = __webpack_require__(250);

var _projects2 = _interopRequireDefault(_projects);

var _blog = __webpack_require__(251);

var _blog2 = _interopRequireDefault(_blog);

__webpack_require__(240);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Website = function Website() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/projects', component: _projects2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/blog', component: _blog2.default })
  );
};

exports.default = Website;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _anchor = __webpack_require__(246);

var _anchor2 = _interopRequireDefault(_anchor);

var _header = __webpack_require__(116);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Projects = function Projects(props) {
  return _react2.default.createElement(
    'div',
    { className: 'Projects' },
    _react2.default.createElement(_header2.default, { page: 'Projects' })
  );
};

exports.default = Blog;

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _anchor = __webpack_require__(246);

var _anchor2 = _interopRequireDefault(_anchor);

var _header = __webpack_require__(116);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = function Blog(props) {
  return _react2.default.createElement(
    'div',
    { className: 'Blog' },
    _react2.default.createElement(_header2.default, { page: 'Blog' })
  );
};

exports.default = Blog;

/***/ })

})