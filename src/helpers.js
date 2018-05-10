import {toDashedName} from "name-util";
import cssProperties from "./css-properties.json";

/**
 * collect all style properties, css reference https://www.w3.org/Style/CSS/all-properties.en.json
 */
export const styledProps = () => props => resolveProps(props.styled)(props);

/**
 * resolve object props
 * @param object
 * @return {function(*=): string}
 */
export const resolveProps = (object = {}) => props => Object
  .keys(object)
  .map(name => resolveProp(name, object[name])(props))
  .join("");
/**
 * resolve val from theme, if not found return the same val
 * @param name prop name
 * @param val val to resolve
 * @param apply function to apply after resolve
 */
export const resolveProp = (name, val, apply) => props => {
  const {theme} = props;
  // check if custom attribute
  if (theme.attrs && theme.attrs && theme.attrs[name] && typeof theme.attrs[name] === "function") {
    const _val = theme.attrs[name](val, props);
    return resolveProps(_val)(props);
  }
  // convert to css name
  const cssName = toDashedName(name);
  typeof parseInt(cssName) !== "number" && !cssProperties.includes(cssName) && console.warn(`${name} is not a valid css property`);
  const value = resolve(val, apply)(props);
  if (typeof value === "function") {
    return resolveProp(name, value(props), apply)(props);
  }
  if (!isPrimitive(value)) {
    return resolveProps(value)(props);
  }
  return name && isDefined(value) ? `${cssName}:${value};` : "";
};

/**
 * resolve val from theme, if not found return the same val
 * @param val val to resolve
 * @param apply function to apply after resolve
 */
export const resolve = (val, apply) => props => {
  const {theme} = props;
  const _val = theme && theme.vars && theme.vars[val] ? theme.vars[val] : val;
  return apply ? apply(_val) : _val;
};

/**
 * check if value is defined (but not 0)
 * @param val
 */
export const isDefined = val => val !== null && val !== undefined && val !== "";

/**
 * check if value is not object
 * @param value
 */
export const isPrimitive = value => Object(value) !== value;
