"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPrimitive = exports.isDefined = exports.resolve = exports.resolveProp = exports.resolveProps = exports.styledProps = undefined;

var _nameUtil = require("name-util");

var _cssProperties = require("./css-properties.json");

var _cssProperties2 = _interopRequireDefault(_cssProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * collect all style properties, css reference https://www.w3.org/Style/CSS/all-properties.en.json
 */
var styledProps = exports.styledProps = function styledProps() {
  return function (props) {
    return resolveProps(props.styled)(props);
  };
};

/**
 * resolve object props
 * @param object
 * @return {function(*=): string}
 */
var resolveProps = exports.resolveProps = function resolveProps() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (props) {
    return Object.keys(object).map(function (name) {
      return resolveProp(name, object[name])(props);
    }).join("");
  };
};
/**
 * resolve val from theme, if not found return the same val
 * @param name prop name
 * @param val val to resolve
 * @param apply function to apply after resolve
 */
var resolveProp = exports.resolveProp = function resolveProp(name, val, apply) {
  return function (props) {
    var theme = props.theme;
    // check if custom attribute

    if (theme.attrs && theme.attrs && theme.attrs[name] && typeof theme.attrs[name] === "function") {
      var _val = theme.attrs[name](val, props);
      return resolveProps(_val)(props);
    }
    // convert to css name
    var cssName = (0, _nameUtil.toDashedName)(name);
    typeof parseInt(cssName) !== "number" && !_cssProperties2.default.includes(cssName) && console.warn(name + " is not a valid css property");
    var value = resolve(val, apply)(props);
    if (typeof value === "function") {
      return resolveProp(name, value(props), apply)(props);
    }
    if (!isPrimitive(value)) {
      return resolveProps(value)(props);
    }
    return name && isDefined(value) ? cssName + ":" + value + ";" : "";
  };
};

/**
 * resolve val from theme, if not found return the same val
 * @param val val to resolve
 * @param apply function to apply after resolve
 */
var resolve = exports.resolve = function resolve(val, apply) {
  return function (props) {
    var theme = props.theme;

    var _val = theme && theme.vars && theme.vars[val] ? theme.vars[val] : val;
    return apply ? apply(_val) : _val;
  };
};

/**
 * check if value is defined (but not 0)
 * @param val
 */
var isDefined = exports.isDefined = function isDefined(val) {
  return val !== null && val !== undefined && val !== "";
};

/**
 * check if value is not object
 * @param value
 */
var isPrimitive = exports.isPrimitive = function isPrimitive(value) {
  return Object(value) !== value;
};