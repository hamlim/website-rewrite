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
    Link,
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

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(73)();
// imports


// module
exports.push([module.i, ".anchor__active--ZmCR1 {\n  text-decoration: overline;\n}\n", ""]);

// exports
exports.locals = {
	"active": "anchor__active--ZmCR1"
};

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(108);

var _anchor = __webpack_require__(247);

var _anchor2 = _interopRequireDefault(_anchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Anchor = function Anchor(props) {
  return _react2.default.createElement(_reactRouter.Link, _extends({}, props, { activeClassName: _anchor2.default.active }));
};

exports.default = Anchor;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(245);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(113)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(245, function() {
			var newContent = __webpack_require__(245);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

})