import PropTypes from "prop-types";
import {toClassName} from "name-util";
import base, {ThemeProvider as BaseThemeProvider} from "./base";
import {styledProps} from "./helpers";

/**
 * create a style component
 * @param component
 * @return {*|StyledComponentClass<any, any, *>}
 */
export const createStyledComponent = component => {
  const Component = (base[component] || base(component))`${styledProps()}`;
  Component.propTypes = {
    styled: PropTypes.any
  };
  return Component;
};

/**
 * create theme
 */
export const createTheme = (vars = {}, attrs = {}) => ({attrs, vars});

/**
 * Theme Provider
 * @type {ThemeProviderComponent<object>}
 */
export const ThemeProvider = BaseThemeProvider;

/**
 * Styled Components
 */
export default Object.keys(base).reduce((a, b) => {
  a[toClassName(b)] = createStyledComponent(b);
  return a;
}, {});
