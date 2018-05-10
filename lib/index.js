"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = exports.createTheme = exports.createStyledComponent = undefined;

var _templateObject = _taggedTemplateLiteral(["", ""], ["", ""]);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nameUtil = require("name-util");

var _base = require("./base");

var _base2 = _interopRequireDefault(_base);

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * create a style component
 * @param component
 * @return {*|StyledComponentClass<any, any, *>}
 */
var createStyledComponent = exports.createStyledComponent = function createStyledComponent(component) {
  var Component = (_base2.default[component] || (0, _base2.default)(component))(_templateObject, (0, _helpers.styledProps)());
  Component.propTypes = {
    styled: _propTypes2.default.any
  };
  return Component;
};

/**
 * create theme
 */
var createTheme = exports.createTheme = function createTheme() {
  var vars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return { attrs: attrs, vars: vars };
};

/**
 * Theme Provider
 * @type {ThemeProviderComponent<object>}
 */
var ThemeProvider = exports.ThemeProvider = _base.ThemeProvider;

/**
 * Styled Components
 */
exports.default = Object.keys(_base2.default).reduce(function (a, b) {
  a[(0, _nameUtil.toClassName)(b)] = createStyledComponent(b);
  return a;
}, {});