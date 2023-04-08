import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#006017", // a deep green color
      light: "#6FBF73",
      dark: "#00490C",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#BF6B3A", // a rich, warm brown
      light: "#E6B891",
      dark: "#8E461A",
      contrastText: "#333333",
    },
    error: {
      main: "#FF1744", // a bright red color
      light: "#FF8A80",
      dark: "#D50000",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFB900", // an orange color
      light: "#FFE082",
      dark: "#FF8F00",
      contrastText: "#333333",
    },
    info: {
      main: "#00BFFF", // a bright blue color
      light: "#87CEFA",
      dark: "#00688B",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#4CAF50", // a green color
      light: "#81C784",
      dark: "#388E3C",
      contrastText: "#FFFFFF",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    white: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#333333",
      secondary: "#818181",
    },
  },

  spacing: (factor) => `${0.25 * factor}rem`,
  typography: {
    fontFamily: ["Roboto-Black", "Anuphan", "sans-serif"].join(","),
    h1: {
      fontSize: "4rem",
      fontFamily: "Roboto-Black",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontSize: "3rem",
      fontFamily: "Roboto-Black",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontSize: "2.5rem",
      fontFamily: "Roboto-Black",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0em",
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0em",
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.01071em",
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.02857em",
      textTransform: "none",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  shape: {
    // your shape object
  },
  breakpoints: {
    // your breakpoints object
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 16,
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        containedPrimary: {
          color: "#FFFFFF",
          backgroundColor: "#006017",
          "&:hover": {
            backgroundColor: "#6FBF73",
          },
        },
        containedSecondary: {
          color: "#333333",
          backgroundColor: "#BF6B3A",
          "&:hover": {
            backgroundColor: "#E6B891",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#006017",
            },
          "& .MuiFormHelperText-root.Mui-error": {
            color: "#FF1744",
          },
        },
      },
    },
    MuiFormLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: "#333333",
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: {
          color: "#818181",
          "&.Mui-checked": {
            color: "#006017",
          },
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: {
          color: "#818181",
          "&.Mui-checked": {
            color: "#006017",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontWeight: 500,
          color: "#333333",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h3",
          h3: "h4",
          h4: "h5",
          h5: "h6",
        },
      },
    },
  },
});
