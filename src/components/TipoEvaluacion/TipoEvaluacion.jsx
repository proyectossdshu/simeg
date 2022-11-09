import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SwipperEvaluacion from "../Swiper/SwiperEvaluacion";

const TipoEvaluacion = () => {
  return (
    <>
      <Box
        component="div"
        id="recomendaciones"
        sx={{
          backgroundColor: "#f4f5fc",
          marginTop: { xs: "3rem", md: "8rem" },
          padding: "100px 0",
        }}
      >
        <Container>
          <Box component="div">
            <Typography
              sx={{
                padding: { xs: "2rem", sm: "1rem" },
                fontSize: { xs: "20px", sm: "44px" },
                color: "#153058",
                textAlign: { xs: "center", sm: "center" },
                lineHeight: { xs: "18px", md: "39px" },
                marginBottom:"20px"
              }}
              fontWeight="700"
            >
              Tipos de evaluaciones
            </Typography>
            <SwipperEvaluacion/>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TipoEvaluacion;
