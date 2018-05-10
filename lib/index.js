// theme.js
import {createTheme} from "styled-framework";

export default createTheme({
  // here you can define any variables you want to use in your application, for example:
  // spacing
  SPACING_XXS: "4px",
  SPACING_XS: "8px",
  SPACING_S: "16px",
  SPACING_M: "32px",
  SPACING_L: "64px",
  SPACING_XL: "128px",
  SPACING_XXL: "256px",
  // colors
  COLOR_PRIMARY: "#382256",
  COLOR_ACCENT: "#533380",
  COLOR_ACCENT_2: "#8E3973",
  COLOR_ACCENT_3: "#D92B59",
  COLOR_ERROR: "#DB4437",
  COLOR_BACKGROUND: "#F2F2F2",
  COLOR_ACCENT_DISABLED: "rgba(83,51,128,0.6)",
  // font size
  FONT_FAMILY: "Damascus",
}, {
  // here you can define any custom css attributes (functions) you want to use in your application, for example:
  scale: value => ({
    transform: `scale(${value})`
  }),
  centerContent: () => ({
    justifyContent: "center",
    alignItems: "center"
  }),
  container: ({isDark, isTab}) => ({
    flex: 1,
    display: "flex",
    boxShadow: "SHADOW_DEFAULT",
    padding: "SPACING_M",
    width: "400px",
    height: "100px",
    backgroundColor: isDark ? "COLOR_ACCENT" : "#F2F2F2",
    color: isDark ? "#F2F2F2" : "COLOR_ACCENT",
    ...(isTab ? {
      backgroundColor: isDark ? "COLOR_ACCENT_2" : "#F2F2F2",
      color: isDark ? "#FFF" : "COLOR_ACCENT_2",
    } : null)
  }),
  // you can also use the 2nd parameter to access the component properties ;)
  button: ({isPrimary, isLarge}, props) => ({
    backgroundColor: isPrimary ? (props.disabled ? "COLOR_ACCENT_DISABLED" : "COLOR_ACCENT") : "transparent",
    marginVertical: isPrimary ? "SPACING_S" : "0",
    padding: isLarge ? "SPACING_S" : "SPACING_XS",
    overflow: "hidden",
    borderRadius: "3px",
    flexDirection: "row",
    justifyContent: "center",
    color: "#FFF"
  }),
})
