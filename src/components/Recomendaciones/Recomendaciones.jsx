import {
  Box,
  Card,
  Grid,
  Typography,
  Container,
  CardContent,
} from "@mui/material";
import ico_chart from "../../assets/chart_recomendaciones.svg";
import Chart from "../Charts/Chart";
import InputSelect from "../Select/BasicSelect";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Recomendaciones = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const option = [
    { value: 1, label: "Opcion1" },
    { value: 2, label: "Opcion2" },
  ];
  return (
    <>
      <Grid
        container
        spacing={4}
        direction={"row"} //isMd ? "row" : "column-reverse"
        id="recomendaciones"
      >
        <Grid item xs={12} md={6} data-aos={isMd ? "fade-right" : "fade-up"}>
          <Box marginBottom={4}>
            <Box
              component={Typography}
              fontWeight={700}
              variant={"h4"}
              gutterBottom
            >
              Recomendaciones Atendidas
            </Box>
            <Typography variant={"h6"} component={"p"} color={"textSecondary"}>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit. Id ultricies sed ultricies fringilla
              commodo. Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit. Id ultricies sed ultricies fringilla
              commodo. Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit. Id ultricies sed ultricies fringilla
              commodo.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={isMd ? "fade-left" : "fade-up"}
        >
          <Box
            component={Card}
            boxShadow={4}
            height={"100%"}
            width={"100%"}
            borderRadius={4}
          >
            <Box component={CardContent}>
              <Box marginBottom={4}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <InputSelect
                      label="Año"
                      size="small"
                      name="año"
                      options={option}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <InputSelect
                      label="Proyecto"
                      size="small"
                      name="proyecto"
                      options={option}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <InputSelect
                      label="Tipo de recomendación"
                      size="small"
                      name="tipoRecomendación"
                      options={option}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box marginBottom={4}>
                <Chart title={"Recomendaciones"} series={[]} categories={[]} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Recomendaciones;
