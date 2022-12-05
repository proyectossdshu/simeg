import React, { useState } from "react";
import PropTypes from "prop-types";
import { AppBar, Box, Divider, Slide } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";
import Container from "../../common/Container";
import Topbar from "./Topbar/Topbar";
import Sidebar from "./Sidebar/Sidebar";
import TopSocial from "./Topbar/TopSocial";
import Footer from "./Footer/Footer";

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

const Main = ({ children }) => {
  const theme = useTheme();
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };
  return (
    <div>
      <HideOnScroll>
        <div>
          <AppBar
            position={"fixed"}
            sx={{ backgroundColor: "#E4ECFA" }}
            elevation={0}
          >
            <Container paddingY={{ xs: 1 / 2, sm: 1 }}>
              <TopSocial />
            </Container>
          </AppBar>

          <AppBar
            position={"fixed"}
            sx={{ backgroundColor: theme.palette.background.paper, mt: 5 }}
            elevation={1}
          >
            <Container paddingY={{ xs: 1 / 2, sm: 1 }}>
              <Topbar onSidebarOpen={handleSidebarOpen} />
            </Container>
          </AppBar>
        </div>
      </HideOnScroll>
      <Sidebar
        onClose={handleSidebarClose}
        open={openSidebar}
        variant="temporary"
      />
      <main>
        <Box height={{ xs: 56, sm: 64 }} />
        {children}
      </main>
      <Box sx={{backgroundColor:"#E4ECFA"}}>
        <Container paddingY={4}>
          <Footer />
        </Container>
      </Box>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
