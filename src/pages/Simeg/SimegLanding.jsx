import { Box } from "@mui/material";
import React from "react";
import Container from "../../common/Container";
import Swipper from "../../components/Swiper/Swiper";
import Recomendaciones from "../../components/Recomendaciones/Recomendaciones";
import Simeg from "../../components/Simeg/Simeg";

const SimegLanding = () => {
  return (
    <Box>
      <Container>
        <Simeg />
      </Container>
    </Box>
  );
};

export default SimegLanding;
