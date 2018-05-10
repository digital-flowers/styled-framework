import {createTheme} from "../src";

export default createTheme({
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
  FONT_SIZE_XXS: "9px",
  FONT_SIZE_XS: "10px",
  FONT_SIZE_SS: "11px",
  FONT_SIZE_S: "14px",
  FONT_SIZE_M: "16px",
  FONT_SIZE_L: "18px",
  FONT_SIZE_L2: "20px",
  FONT_SIZE_XL: "24px",
  FONT_SIZE_XXL: "32px",
  // font weight
  FONT_WEIGHT_HEAVY: "900",
  FONT_WEIGHT_EXTRA_BOLD: "800",
  FONT_WEIGHT_BOLD: "700",
  FONT_WEIGHT_SEMI_BOLD: "600",
  FONT_WEIGHT_MEDIUM: "500",
  FONT_WEIGHT_NORMAL: "400",
  FONT_WEIGHT_LIGHT: "300",
  FONT_WEIGHT_EXTRA_LIGHT: "200",
  FONT_WEIGHT_THIN: "100",
  // shadow
  SHADOW_DEFAULT: "0 0 10px rgba(0,0,0,0.3)"
}, {
  separator: () => ({
    marginTop: "SPACING_L",
    marginBottom: "SPACING_L",
    height: "1px",
    backgroundColor: "#ddd"
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
  scale: value => ({
    transform: `scale(${value})`
  }),
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
  centerContent: () => ({
    justifyContent: "center",
    alignItems: "center"
  }),
  title: () => ({
    fontSize: "FONT_SIZE_L",
    color: "COLOR_ACCENT",
    textAlign: "center"
  })
});
