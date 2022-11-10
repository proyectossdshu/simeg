import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const Simeg = () => {
  return (
    <Box component="div" id="simeg" sx={{ padding: { sm: "100px 0" } }}>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box component="div" sx={{ width: { sm: "90%" }, padding: "3rem" }}>
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "60px" },
                  textAlign: { xs: "center", sm: "start" },
                  padding: { xs: "1rem" },
                  lineHeight: { xs: "32px", md: "40px" },
                }}
                fontWeight="700"
              >
                ¿Qué es el simeg?
              </Typography>

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
                orci quam tempus laoreet ut eu suspendisse sed. Sodales lectus
                tortor, vivamus mattis id viverra semper. Varius velit quam
                posuere duis nibh eget. Rhoncus tristique auctor egestas purus
                interdum mus netus volutpat. Cursus aliquet ullamcorper pharetra
                ornare odio, Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Aliquet orci quam tempus laoreet ut eu suspendisse sed.
                Sodales lectus tortor, vivamus mattis id viverra semper. Varius
                velit quam posuere duis nibh eget. Rhoncus tristique auctor
                egestas purus interdum mus netus volutpat. Cursus aliquet
                ullamcorper pharetra ornare odio.
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ padding: "1rem", marginTop:"5rem" }}
                justifyContent="end"
              >
                <Button variant="contained" size="large">
                  Evaluaciones
                </Button>
                {/* <Button variant="outlined" size="large">
                  Recomendaciones
                </Button> */}
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img
              className="simeg-img"
              src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80"
              alt="simeg"
            ></img>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Simeg;
