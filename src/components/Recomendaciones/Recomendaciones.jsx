import { Box, Card, Grid, Typography, Container } from "@mui/material";
import ico_chart from "../../assets/chart_recomendaciones.svg"
import Chart from "../Charts/Chart";
import InputSelect from "../Select/BasicSelect";

const Recomendaciones = () => {
  const option = [
    { value: 1, label: "Opcion1" },
    { value: 2, label: "Opcion2" },
  ];
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
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                sx={{
                  padding: { xs: "2rem", sm: "1rem" },
                  fontSize: { xs: "20px", sm: "44px" },
                  color: "#153058",
                  textAlign: { xs: "center", sm: "start" },
                  lineHeight: { xs: "18px", md: "39px" },
                }}
                fontWeight="700"
              >
                Recomendaciones atendidas
              </Typography>
              <Box component="div" sx={{ width: { sm: "90%" } }}>
                <Typography
                  sx={{
                    marginTop: { xs: "10px", sm: "40px" },
                    textAlign: { xs: "center", sm: "start" },
                    padding: { xs: "2rem", sm: "1rem" },
                    fontSize: { xs: "12px", sm: "18px" },
                    lineHeight: { xs: "18px", sm: "28px" },
                    margin: { md: "0 auto" },
                  }}
                  fontWeight={{ xs: "400", md: "500" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquet orci quam tempus laoreet ut eu suspendisse sed.
                  Sodales lectus tortor, vivamus mattis id viverra semper.
                  Varius velit quam posuere duis nibh eget. Rhoncus tristique
                  auctor egestas purus interdum mus netus volutpat. Cursus
                  aliquet ullamcorper pharetra ornare odio.
                </Typography>
                <div className="banner_img_simeg">
                  <img src={ico_chart} alt="chart_recomendaciones" />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: { xs: 2 } }}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: "10px",
                  height: { md: "600px" },
                }}
              >
                <Container sx={{ marginBottom: "1rem" }}>
                  <Box component="div" sx={{ padding: "1rem" }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12} md={4} lg={4}>
                        <InputSelect
                          label="Año"
                          size="small"
                          sx={{ width: "100%" }}
                          options={option}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={4}>
                        <InputSelect
                          label="Proyecto"
                          size="small"
                          sx={{ width: "100%" }}
                          options={option}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={4}>
                        <InputSelect
                          label="Tipo de recomendación"
                          size="small"
                          sx={{ width: "100%" }}
                          options={option}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Container>
                <Chart />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Recomendaciones;
