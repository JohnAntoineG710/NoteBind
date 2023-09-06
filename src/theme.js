import { createTheme, adaptV4Theme } from "@mui/material/styles";

const nordPalette = {
  nord00: "#2E3440",
  nord01: "#3B4252",
  nord02: "#434C5E",
  nord03: "#4C566A",
  nord04: "#D8DEE9",
  nord05: "#E5E9F0",
  nord06: "#ECEFF4",
  nord07: "#8FBCBB",
  nord08: "#88C0D0",
  nord09: "#81A1C1",
  nord10: "#5E81AC",
  nord11: "#BF616A",
  nord12: "#D08770",
  nord13: "#EBCB8B",
  nord14: "#A3BE8C",
  nord15: "#B48EAD",
};

const colors = {
  light: {
    backgroundMain: nordPalette.nord04,
    backgroundItem: nordPalette.nord06,
    primaryBackground: nordPalette.nord08,
    primaryText: nordPalette.nord05,
    secondaryBackground: nordPalette.nord09,
    secondaryText: nordPalette.nord05,
    textMain: nordPalette.nord00,
    textAccent: nordPalette.nord03,
    folderSelected: nordPalette.nord07,
    folderIcons: nordPalette.nord03,
  },
  dark: {
    backgroundMain: nordPalette.nord03,
    backgroundItem: nordPalette.nord01,
    primaryBackground: nordPalette.nord08,
    primaryText: nordPalette.nord05,
    secondaryBackground: nordPalette.nord09,
    secondaryText: nordPalette.nord05,
    textMain: nordPalette.nord06,
    textAccent: nordPalette.nord04,
    folderSelected: nordPalette.nord07,
    folderIcons: nordPalette.nord06,
  },
};

const theme = (variant) =>
  createTheme(adaptV4Theme({
    palette: {
      action: {
        active: colors[variant].folderIcons, // Folder icons and buttons
        selected: colors[variant].folderSelected, // Selected folder background
      },
      background: {
        default: colors[variant].backgroundMain, // Main background
        paper: colors[variant].backgroundItem, // Card/List background
      },
      primary: {
        main: colors[variant].primaryBackground, // Primary background
        contrastText: colors[variant].primaryText, // Primary text
      },
      secondary: {
        main: colors[variant].secondaryBackground, // Secondary background
        contrastText: colors[variant].secondaryText, // Secondary text
      },
      text: {
        primary: colors[variant].textMain, // Main text color
        secondary: colors[variant].textAccent, // Secondary Labels
      },
    },
  }));

export default theme;
