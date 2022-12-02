import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import logo_gto from "../../../assets/img/logo-gto.png";

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Box
          //display={"flex"}
          //justifyContent={"space-between"}
          //alignItems={"center"}
          width={"100%"}
          //flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box title="webbee" height={24} width={35}>
            <img src={logo_gto} alt="logoGto" />
          </Box>
        </Box>

        <Box marginTop={8}>
          <Typography component={"p"} color={"textSecondary"}>
            ATENCIÓN CIUDADANA
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography
          align={"center"}
          variant={"subtitle2"}
          color="textSecondary"
          gutterBottom
        >
          &copy; All rights reserved
        </Typography>
        <Typography
          align={"center"}
          variant={"caption"}
          color="textSecondary"
          component={"p"}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography
          align={"center"}
          variant={"subtitle2"}
          color="textSecondary"
          gutterBottom
        >
          &copy; All rights reserved
        </Typography>
        <Typography
          align={"center"}
          variant={"caption"}
          color="textSecondary"
          component={"p"}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography
          align={"center"}
          variant={"subtitle2"}
          color="textSecondary"
          gutterBottom
        >
          &copy; All rights reserved
        </Typography>
        <Typography
          align={"center"}
          variant={"caption"}
          color="textSecondary"
          component={"p"}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
