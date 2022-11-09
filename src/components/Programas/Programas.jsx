import { useEffect, useState } from "react";

import {
  Box,
  Card,
  Container,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  Grid,
} from "@mui/material";
import { BarChart, TableRows } from "@mui/icons-material";

import Chart from "../Charts/Chart";
import BasicTable from "../Table/BasicTable";

import ico_chart from "../../assets/chart_programas.svg";

const Programas = () => {
  const [isChart, setIsChart] = useState(true);
  const [active, setActive] = useState(false);
  const [programas, setProgramas] = useState([]);
  const [total] = useState(0);
  const [data, setData] = useState({
    page: 0,
    pageSize: 10,
    filtered: [],
  });

  const colums = [
    {
      label: "Tematica de atención",
      id: "tematica",
      //align: "justify",
      width: 400,
      columnAction: false,
    },
    {
      label: "PSE",
      id: "pse",
     // align: "justify",
      //width: 100,
      columnAction: false,
    },
  ];

  const handleChangeFormat = (type) => {
    if (type === "chart") {
      setIsChart(true);
      setActive(false);
    }

    if (type === "table") {
      setIsChart(false);
      setActive(true);
    }
  };

  useEffect(() => {
    setProgramas([
      {
        tematica:
          "Acceso al trabajo y proyectos productivos de personas en situación de vulnerabilidad",
        pse: 19,
      },
      {
        tematica: "Actividad física",
        pse: 3,
      },
      {
        tematica: "Alimentación y nutrición",
        pse: 7,
      },
      {
        tematica: "Caminos y transportes",
        pse: 5,
      },
      {
        tematica: "Cohesión social",
        pse: 10,
      },
      {
        tematica: "Derechos y procuración de justicia",
        pse: 4,
      },
      {
        tematica: "Educación",
        pse: 22,
      },
    ]);
  }, []);

  const handleChangePagination = (pagination) => {
    setData({ ...data, ...pagination });
  };

  return (
    <>
      <Box
        component="div"
        id="programas"
        sx={{
          marginTop: { xs: "3rem", md: "8rem" },
          padding: "100px 0",
        }}
      >
        <Container>
          <Grid container spacing={4} sx={{display: {xs: "flex"}, flexFlow:{xs:"column-reverse", md:"row"}}}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box component="div">
                <Card
                  elevation={4}
                  sx={{ borderRadius: "8px", padding: "1rem" }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="flex-end"
                    marginBottom={2}
                  >
                    <Tooltip title="Gráfica">
                      <IconButton
                        className={isChart ? `button_active` : ""}
                        color="primary"
                        variant="contained"
                        component="span"
                        onClick={() => handleChangeFormat("chart")}
                      >
                        <BarChart fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Listado">
                      <IconButton
                        className={active ? `button_active` : ""}
                        color="primary"
                        variant="contained"
                        component="span"
                        onClick={() => handleChangeFormat("table")}
                      >
                        <TableRows fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                  {isChart ? (
                    <Chart />
                  ) : (
                    <BasicTable
                      hcolumns={colums}
                      rows={programas}
                      handleChangePagination={handleChangePagination}
                      //isLoading={isLoadingAccessList}
                      total={total}
                      pageProp={data.page}
                      pageSize={data.pageSize}
                    />
                  )}
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box component="div">
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
                  Programas evaluados por ejercicio fiscal
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
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Programas;
