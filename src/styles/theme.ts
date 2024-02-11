import containerConfig from "./themeConfig/container.config";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["DM Sans", "sans-serif"].join(","),
  },

  //Breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 390,
      md: 768,
      lg: 1080,
      xl: 1440,
    },
  },

  //Spacing
  spacing: 2,

  //Palette
  palette: {},

  //Components
  components: {
    ...containerConfig,
  },
});
