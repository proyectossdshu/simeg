import { responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { light } from "./palette-blue";
import shadows from "./shadows";

export const getTheme = createTheme({
  palette: light,
  layout: {
    contentWidth: 1236,
  },
  shadows: shadows("light"),
  typography: {
    fontFamily: '"Inter", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: "medium",
    },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1300,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        label: {
          fontWeight: 600,
        },
        containedSecondary: "white",
      },
    },
  },
});
