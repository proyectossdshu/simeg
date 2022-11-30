import { Box } from "@mui/material";
import React from "react";
import Container from "../../common/Container";
import Recomendaciones from "../../components/Recomendaciones/Recomendaciones";
import TipoEvaluacion from "../../components/TipoEvaluacion/TipoEvaluacion";
import Programas from "../../components/Programas/Programas";
import Simeg from "../../components/Simeg/Simeg";
import { useTheme } from "@mui/material/styles";

const SimegLanding = () => {
  const theme = useTheme();
  return (
    <Box>
      <Container>
        <Simeg />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Recomendaciones />
        </Container>
      </Box>
      <Container>
        <Programas />
      </Container>
      <Box bgcolor={theme.palette.alternate.main} position={"relative"}>
        <Container paddingX={"0 !important"} maxWidth={"100%"}>
          <TipoEvaluacion />
        </Container>
      </Box>
    </Box>
  );
};

export default SimegLanding;
