import React from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick/lib/slider";

import { Evaluacion } from "../../data/simeg";
import Container from "../../common/Container";

const TipoEvaluacion = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up("xs"), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  let slidesToShow = 1;
  if (isXs) {
    slidesToShow = 1;
  }
  if (isSm) {
    slidesToShow = 2;
  }
  if (isMd) {
    slidesToShow = 3;
  }
  if (isLg) {
    slidesToShow = 4;
  }

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
  };

  return (
    <Box>
      <Container paddingY={"0 !important"}>
        <Box marginBottom={4}>
          <Box
            component={Typography}
            fontWeight={700}
            variant={"h4"}
            gutterBottom
          >
            Tipos de Evaluaciones
          </Box>
        </Box>
      </Container>

      <Box>
        <Slider {...sliderOpts}>
          {Evaluacion.map((item) => (
            <Box padding={{ xs: 1, md: 2, lg: 3 }} key={item.id}>
              <Box
                component={Card}
                boxShadow={{ xs: 1, sm: 3 }}
                borderRadius={5}
              >
                <Box
                  component={CardContent}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  padding={{ xs: 2, sm: 4, md: 6 }}
                  sx={{
                    "&:last-child": {
                      paddingBottom: { xs: 2, sm: 4, md: 6 },
                    },
                  }}
                >
                  <Box
                    component={Avatar}
                    variant="rounded"
                    width={84}
                    height={84}
                    marginBottom={2}
                    bgcolor={item.color[50]}
                    borderRadius={5}
                  >
                    <Box color={item.color[500]}>{item.icon}</Box>
                  </Box>
                  <Box
                    component={Typography}
                    variant={"h6"}
                    gutterBottom
                    fontWeight={500}
                    align={"center"}
                  >
                    {item.title}
                  </Box>

                  <Box
                    className="container-text-evaluacion"
                    sx={{
                      height: "100px",
                      overflowY: "auto",
                      //direction: "rtl",
                    }}
                  >
                    <Typography align={"start"} color="textSecondary">
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default TipoEvaluacion;
