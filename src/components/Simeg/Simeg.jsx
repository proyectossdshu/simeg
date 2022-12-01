import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slider from "react-slick";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import BanHome from "../../assets/img/BanHome.png";

const Simeg = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const GridItemHeadlineBlock = () => {
    return (
      <Box>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            color="textPrimary"
            sx={{
              fontWeight: 700,
            }}
          >
            ¿Qué es el
            <br />{" "}
            <Typography
              color={"primary"}
              component={"span"}
              variant={"inherit"}
            >
              Simeg?
            </Typography>
          </Typography>
        </Box>
        <Typography
          variant={"h6"}
          component={"p"}
          color={"textSecondary"}
          data-aos={isMd ? "fade-right" : "fade-up"}
        >
          We are a small agency with a talented team of designers & developers.
          Unlike huge agencies, we will treat your project as ours, and will
          walk you through our process by hand.
          <br />
          We are a small agency with a talented team of designers & developers.
          Unlike huge agencies, we will treat your project as ours, and will
          walk you through our process by hand.
        </Typography>
      </Box>
    );
  };

  const GridItemReviewBlock = () => {
    const [banners, setBanners] = useState([
      {
        img: BanHome,
      },
      {
        img: BanHome,
      },
    ]);

    const sliderOpts = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    };

    return (
      <Box maxWidth={"100%"} data-aos={isMd ? "fade-left" : "fade-up"}>
        <Slider {...sliderOpts}>
          {banners.map((item, i) => (
            <Box padding={{ xs: 1, sm: 2 }} key={i}>
              <Box
                component={Card}
                boxShadow={{ xs: 1, sm: 3 }}
                borderRadius={5}
                //padding={{ xs: 1, sm: 2, md: 3 }}
              >
                <Box
                  //component={CardContent}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <img src={item.img} />
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    );
  };

  return (
    <Box id="simeg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemHeadlineBlock />
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemReviewBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Simeg;
