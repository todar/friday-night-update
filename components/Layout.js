/**
 * This component is persisted through the custom _app.js.
 * The purpose of this component is to keep the main navbar at the bottom
 * of each page for navigation and the placement of the rest of the app above.
 */
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./navbar";
import theme from "../theme";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main style={mainStyle}>
        {children}
        <Navbar />
      </main>
    </ThemeProvider>
  );
};

const mainStyle = {
  marginBottom: "70px",
  marginTop: "0"
};

export default Layout;