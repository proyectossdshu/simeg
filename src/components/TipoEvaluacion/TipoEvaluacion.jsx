import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Icon,
} from "@mui/material";
import SwipperEvaluacion from "../Swiper/SwiperEvaluacion";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { colors } from "@mui/material";
import Slider from "react-slick/lib/slider";

import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SegmentIcon from "@mui/icons-material/Segment";
import InsightsIcon from "@mui/icons-material/Insights";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import GroupIcon from "@mui/icons-material/Group";

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
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    //autoplay: true,
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
          {[
            {
              title: "Diagnóstico",
              subtitle:
                "We design and develop amazing, lightning fast, and high-converting websites that make your business grow.",
              icon: <ContentPasteSearchIcon sx={{ width: 48, height: 48 }} />,
              color: colors.purple,
            },
            {
              title: "Diseño",
              subtitle:
                "We design intuitive web & mobile apps focused on driving user engagement and increasing users retention.",
              icon: <AutoFixHighIcon sx={{ width: 48, height: 48 }} />,
              color: colors.green,
            },
            {
              title: "Linea Base",
              subtitle:
                "We transform businesses into world-class brands by going through a well thought brand identity design process.",
              icon: <SegmentIcon sx={{ width: 48, height: 48 }} />,
              color: colors.amber,
            },
            {
              title: "Específica de Desempeño",
              subtitle:
                "We help you transform your idea into a live, intuitive and scalable digital product that your users will use and love.",
              icon: <InsightsIcon sx={{ width: 48, height: 48 }} />,
              color: colors.pink,
            },
            {
              title: "Procesos",
              subtitle:
                "We help you optimize your website or mobile app flow to increase conversion rates and retention to drive growth.",
              icon: <EngineeringIcon sx={{ width: 48, height: 48 }} />,
              color: colors.blue,
            },
            {
              title: "Consistencia y Resultados",
              subtitle:
                "We help your business gain leverage and efficiency through automation using simple, yet powerful NoCode tools.",
              icon: <FactCheckIcon sx={{ width: 48, height: 48 }} />,
              color: colors.teal,
            },
            {
              title: "Indicadores",
              subtitle:
                "We help your business gain leverage and efficiency through automation using simple, yet powerful NoCode tools.",
              icon: <DonutLargeIcon sx={{ width: 48, height: 48 }} />,
              color: colors.purple,
            },
            {
              title: "Impacto",
              subtitle:
                "We help your business gain leverage and efficiency through automation using simple, yet powerful NoCode tools.",
              icon: <PublishedWithChangesIcon sx={{ width: 48, height: 48 }} />,
              color: colors.green,
            },
            {
              title: "Social",
              subtitle:
                "We help your business gain leverage and efficiency through automation using simple, yet powerful NoCode tools.",
              icon: <GroupIcon sx={{ width: 48, height: 48 }} />,
              color: colors.amber,
            },
          ].map((item, i) => (
            <Box padding={{ xs: 1, md: 2, lg: 3 }} key={i}>
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
                  <Typography align={"center"} color="textSecondary">
                    {item.subtitle}
                  </Typography>
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
