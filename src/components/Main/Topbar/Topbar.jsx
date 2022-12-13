import React from "react";

import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GtoLogo from "../../../assets/img/logo-gto.png";
import SimegLogo from "../../../assets/img/logo-simeg.png";
import { Link } from "react-scroll";
import { Stack } from "@mui/system";

const Topbar = ({ onSidebarOpen }) => {
  const navItems = [
    { name: "Inicio", anchor: "incio" },
    { name: "¿Qué es el simeg?", anchor: "simeg" },
    { name: "Recomendaciones", anchor: "recomendaciones" },
    { name: "Programas evaluados", anchor: "programas" },
  ];

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Box
          display={"flex"}
          alignItems="baseline"
          underline="none"
          //title="gto"
          height={{ xs: 28, md: 62 }}
          width={65}
        >
          <img  width={"180px"} height={"80%"} src={GtoLogo} alt="gtologo" />
          <img width={"100px"} height={"100%"} src={SimegLogo} alt="gtologo" />
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems={"center"}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Box display={"flex"} padding={2}>
          {navItems.map((item, i) => (
            <Link to={item.anchor} key={i}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                marginRight={2}
                sx={{ cursor: "pointer" }}
                onClick={() => {}}
                color={"#0082FF"}
              >
                {item.name}
              </Box>
            </Link>
          ))}
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems={"center"}
        sx={{ display: { sm: "none" } }}
      >
        <Box marginRight={{ xs: 1, sm: 2 }}>
          <IconButton onClick={onSidebarOpen} aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
