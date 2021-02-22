import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1e1f20",
      light: "#4b4b4c",
      dark: "#151516"
    },
    secondary: {
      main: "#ffd600",
      light: "#ffde33",
      dark: "#b29500"
    }
  }
});

export default theme;