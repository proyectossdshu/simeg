import React from "react";
import { Box, Link } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const TopSocial = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        <Box display={"flex"} alignContent={"center"}>
          <CallIcon sx={{ color: "#000F9F", mr: 1 }} fontSize="small" />
          <Link underline="none" component="a" color={"#000F9F"}>
            (473) 735-36-26 al 33
          </Link>
        </Box>

        <Box display={"flex"} alignContent={"center"} marginX={2}>
          <EmailIcon sx={{ color: "#000F9F", mr: 1 }} fontSize="small" />
          <Link
            underline="none"
            component="a"
            color={"#000F9F"}
            href="https://peb.guanajuato.gob.mx/Home/Contacto"
          >
            ESCRIBENOS
          </Link>
        </Box>

        <Box marginX={2}>
          <Link
            underline="none"
            component="a"
            color={"#000F9F"}
            href="https://peb.guanajuato.gob.mx/Directorio"
          >
            DIRECTORIO
          </Link>
        </Box>

        <Box marginX={2}>
          <Link
            underline="none"
            component="a"
            color={"#000F9F"}
            href="https://transparencia.guanajuato.gob.mx/"
          >
            TRANSPARENCIA
          </Link>
        </Box>
      </Box>

      <Box display={"flex"} alignItems="center">
        <Box marginX={2}>
          <Link
            underline="none"
            component="a"
            href="https://twitter.com/SedeshuGto"
          >
            <TwitterIcon fontSize="small" sx={{ color: "#000F9F" }} />
          </Link>
        </Box>

        <Box marginX={2}>
          <Link
            underline="none"
            component="a"
            href="https://www.facebook.com/pages/SedeshuGto/457581867618996?fref=ts"
          >
            <FacebookIcon fontSize="small" sx={{ color: "#000F9F" }} />
          </Link>
        </Box>

        <Box marginX={2}>
          <Link
            underline="none"
            component="a"
            href="https://www.youtube.com/user/SedeshuGto"
          >
            <YouTubeIcon fontSize="small" sx={{ color: "#000F9F" }} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default TopSocial;
