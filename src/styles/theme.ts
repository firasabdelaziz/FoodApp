import { MD3LightTheme } from "react-native-paper";

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#EB654A", // Main primary color
    secondary: "#0EAA7E", // Secondary color
    lightPrimary: "#F68E21", // Light primary color (used for selected category text)
    lightGray: "#f5f5f5", // Light gray background
    darkGray: "#666666", // Dark gray for text
    black: "#000000", // Black color
    white: "#ffffff", // White color
    gray: "#666666", // Gray color (same as darkGray)
    disabledGray: "#B4B5B6", // Disabled gray for inactive elements
    midGray: "#999999", // Medium gray for icons and placeholders
    lightGreen: "#90EE90", // Light green (already defined, used for selected category text)
    accentGreen: "#24AF7E", // Green accent color for buttons, icons, and badges
    iconGreen: "#4CD080", // Green color for icons (heart, star)
    gradientLight: "#E8F7F1", // Light gradient color for backgrounds
    gradientDark: "#C4E2DD", // Dark gradient color for header
    borderGreen: "#D4EFE4", // Border color for rating container
    mutedGray: "#717171", // Muted gray for secondary text (e.g., distance)
  },
  fontFamily: {
    regular: "Ubuntu-Regular",
    medium: "Ubuntu-Medium",
    bold: "Ubuntu-Bold",
    light: "Ubuntu-Light",
  },
};
