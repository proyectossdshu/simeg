import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "../src/theme/index";
import Main from "./components/Main/Main";
import AOS from "aos";

const WithLayout = ({ component: Component, layout: Layout }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      delay: 50,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <ThemeProvider theme={getTheme}>
      <CssBaseline />
      <Paper elevation={0}>
        <Layout>
          <Component />
        </Layout>
      </Paper>
    </ThemeProvider>
  );
};

WithLayout.propTypes = {
  component: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType.isRequired,
};
export default WithLayout;
