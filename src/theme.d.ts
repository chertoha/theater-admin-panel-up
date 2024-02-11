import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    // status: {
    //   danger: string;
    // };
    // palette: Palette;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    // status?: {
    //   danger?: string;
    // };
  }

  interface Palette {}

  interface PaletteOptions {}

  interface PaletteColor {
    // darker?: string;
  }

  interface SimplePaletteColorOptions {
    // darker?: string;
  }

  interface TypographyVariants {}

  interface TypographyVariantsOptions {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {}
}
