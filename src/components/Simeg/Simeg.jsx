import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const Simeg = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const GridItemHeadlineBlock = () => {
    <Box>
      <Box
        component={Typography}
        fontWeight={700}
        variant={"h3"}
        gutterBottom
        data-aos={isMd ? "fade-right" : "fade-up"}
      >
        ¿Qué es el simeg?
      </Box>
      <Typography
        variant={"h6"}
        component={"p"}
        color={"textSecondary"}
        data-aos={isMd ? "fade-right" : "fade-up"}
      >
        We are a small agency with a talented team of designers & developers.
        Unlike huge agencies, we will treat your project as ours, and will walk
        you through our process by hand.
      </Typography>
    </Box>;
  };

  const GridItemReviewBlock = () => {
    const sliderOpts = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    
  };

  return <></>;
};

export default Simeg;
