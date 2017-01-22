webpackHotUpdate(0,{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(116);

var _header2 = _interopRequireDefault(_header);

var _home = __webpack_require__(249);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    { className: 'Home' },
    _react2.default.createElement(_header2.default, null),
    _react2.default.createElement('section', { className: _home2.default.container })
  );
};

exports.default = Home;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(73)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(113)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(248, function() {
			var newContent = __webpack_require__(248);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

})