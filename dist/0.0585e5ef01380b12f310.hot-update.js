webpackHotUpdate(0,{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(108);

var _logo = __webpack_require__(243);

var _logo2 = _interopRequireDefault(_logo);

var _header = __webpack_require__(239);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  return _react2.default.createElement(
    'header',
    { className: _header2.default.header },
    _react2.default.createElement(_logo2.default, null),
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/projects' },
      'Projects'
    ),
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/Blog' },
      'Projects'
    )
  );
};

exports.default = Header;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(73)();
// imports


// module
exports.push([module.i, ".logo__link--3_fEk {\n  text-decoration: none;\n}\n.logo__header--3CP9Z {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.logo__wrapper--xtxn5 {\n  margin: .5em 0em .5em .5em;\n}\n.logo__wrapper--xtxn5 + .logo__wrapper--xtxn5 {\n  margin-left: .25em;\n  margin-right: .5em;\n}\n.logo__mFront--3vRgZ,\n.logo__hFront--2uGKk {\n  fill: #566573;\n}\n.logo__mBack--3mZnW,\n.logo__hBack--kTt2o {\n  fill: #D5D8DC;\n}\n.logo__name--1iiDw {\n  color: #566573;\n}\n", ""]);

// exports
exports.locals = {
	"link": "logo__link--3_fEk",
	"header": "logo__header--3CP9Z",
	"wrapper": "logo__wrapper--xtxn5",
	"mFront": "logo__mFront--3vRgZ",
	"hFront": "logo__hFront--2uGKk",
	"mBack": "logo__mBack--3mZnW",
	"hBack": "logo__hBack--kTt2o",
	"name": "logo__name--1iiDw"
};

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(108);

var _logo = __webpack_require__(244);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo(props) {
  return _react2.default.createElement(
    _reactRouter.Link,
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

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(113)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(242, function() {
			var newContent = __webpack_require__(242);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

})