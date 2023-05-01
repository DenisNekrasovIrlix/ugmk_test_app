import { createTheme } from "@mui/material";

let defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 650,
      md: 912,
      lg: 1024,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          wordBreak: "break-word",
          fontWeight: "bold",
        },
      },
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: ["Rubik", "sans-serif"].join(","),
    fontWeightRegular: "bold",
    h1: {
      fontSize: "1.7rem",
    },
    h2: {
      fontSize: "1.5rem",
    },
    subtitle1: {
      fontSize: "1.125rem",
    },
    body1: {
      fontSize: "1.1rem",
    },
    button: {
      fontSize: "1.125rem",
    },
  },
  palette: {
    primary: {
      main: "#235EE7",
    },
    text: {
      primary: "#1C2026",
      secondary: "#5D6A7E",
      lightGray: "#929EAF",
    },
    background: {
      main: "#DEB887",
      lightGray: "#F6F7F9",
    },
    divider: "#E8E9ED",
  },
});

defaultTheme = createTheme({
  ...defaultTheme,
  components: {
    ...defaultTheme.components,
    MuiTypography: {
      styleOverrides: {
        body1: {
          [defaultTheme.breakpoints.down("sm")]: {
            fontSize: "0.75rem",
          },
        },
      },
    },
  },
});

export { defaultTheme };
