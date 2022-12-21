import { useState, useEffect } from "react";
import {
  Box,
  Card,
  Grid,
  Typography,
  CardContent,
  CircularProgress,
} from "@mui/material";
import Chart from "../Charts/Chart";
import InputSelect from "../Select/BasicSelect";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SimegService from "../../services/SimegService";
import CatalogService from "../../services/CatalogService";
import { summary } from "../../data/simeg";
import { blue, pink } from "@mui/material/colors";

const Recomendaciones = () => {
  //Variables
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  //States
  const [loadingChartSecondary, setLoadingSecondary] = useState(false);
  const [series, setSeries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [seriesDep, setSeriesDep] = useState([]);
  const [categoriesDep, setCategoriesDep] = useState([]);
  const [catEjercicio, setCatEjercicio] = useState([]);
  const [catProyectos, setCatProyectos] = useState([]);
  const [values, setValues] = useState({
    ejercicio: 2016,
    proyecto: "",
  });
  const [filterYear, setFilterYear] = useState({
    filtered: [
      {
        id: "EvaluacionEjercicio",
        filter: "=",
        value: values.ejercicio,
      },
    ],
  });

  const [filterProgram, setFilterProgram] = useState({
    filtered: [],
  });

  //Functions API's
  const getEvaluatedProgramsYear = () => {
    SimegService.getEvaluatedProgramsYear({})
      .then((res) => {
        if (res.results) {
          const {
            ProgramasEvaluados,
            DependenciasInvolucradas,
            RecomendacionesAtendidas,
          } = res.response.series;

          const _series = [
            {
              name: "Programas Evaluados",
              showInLegend: true,
              data: ProgramasEvaluados,
              pointPadding: 0.4,
              pointPlacement: -0.4,
              color: "#0082FF",
            },
            {
              name: "Recomendaciones Atendidas",
              showInLegend: true,
              data: RecomendacionesAtendidas,
              pointPadding: 0.4,
              pointPlacement: -0.2,
              color: "#FF5AC8",
            },
            {
              name: "Dependencias Involucradas",
              showInLegend: true,
              data: DependenciasInvolucradas,
              pointPadding: 0.4,
              pointPlacement: 0,
              color: "#32AA00",
            },
          ];
          setSeries(_series);
          setCategories(res.response.categories);
        }
      })
      .catch((error) => console.error(error));
  };

  const getEvaluatedProgramsDep = () => {
    setLoadingSecondary(true);
    SimegService.getEvaluatedProgramsDep({
      filtered: filterYear.filtered,
    })
      .then((res) => {
        if (res.results) {
          const {
            ProgramasEvaluados,
            RecomendacionesAtendidas,
            TotalProgramas,
            TotalRecomendaciones,
          } = res.response.series;

          const _series = [
            {
              name: "Total de Programas",
              showInLegend: true,
              data: TotalProgramas,
              pointPadding: 0.3,
              pointPlacement: -0.2,
              color: blue[700],
            },
            {
              name: "Programas Evaluados",
              showInLegend: true,
              data: ProgramasEvaluados,
              pointPadding: 0.4,
              pointPlacement: -0.2,
              color: blue[200],
            },
            {
              name: "Total Recomendaciones",
              showInLegend: true,
              data: TotalRecomendaciones,
              pointPadding: 0.3,
              pointPlacement: 0.2,
              color: "#FF5AC8",
            },
            {
              name: "Recomendaciones Atendidas",
              showInLegend: true,
              data: RecomendacionesAtendidas,
              pointPadding: 0.4,
              pointPlacement: 0.2,
              color: pink[200],
            },
          ];

          setCategoriesDep(res.response.categories);
          setSeriesDep(_series);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingSecondary(false));
  };

  const getEvaluatedPrograms = (params) => {
    SimegService.getEvaluatedPrograms(params)
      .then((res) => {
        if (res.results) {
          const { RecomendacionesAtendidas, TotalRecomendaciones } =
            res.response.series;

          const _series = [
            {
              name: "Recomendaciones Atendidas",
              showInLegend: true,
              data: TotalRecomendaciones,
              pointPadding: 0.3,
              pointPlacement: -0.2,
              color: blue[700],
            },
            {
              name: "Programas Evaluados",
              showInLegend: true,
              data: RecomendacionesAtendidas,
              pointPadding: 0.4,
              pointPlacement: -0.2,
              color: blue[200],
            },
          ];
          setCategoriesDep(res.response.categories);
          setSeriesDep(_series);
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const catalogsParams = [
      {
        id: "simeg_ejercicios",
      },
    ];

    CatalogService.getCatalogs(catalogsParams)
      .then((res) => {
        if (res.results) {
          catalogsParams.forEach((item) => {
            switch (item.id) {
              case "simeg_ejercicios":
                setCatEjercicio(res.response.catalogs[item.id]);
                break;
              default:
                break;
            }
          });
        }
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getEvaluatedProgramsYear();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getEvaluatedProgramsDep();
    // eslint-disable-next-line
  }, [filterYear]);

  useEffect(() => {
    if (values.proyecto.length > 0) {
      let params = {
        filtered: [
          { id: "EvaluacionEjercicio", filter: "=", value: values.ejercicio },
          { id: "Fto10.Fto10ClaveQP", filter: "=", value: values.proyecto },
        ],
      };
      getEvaluatedPrograms(params);
    }
    // eslint-disable-next-line
  }, [values.proyecto]);

  //Function and Handlers
  const handleChangeEjercicio = (e) => {
    const año = e.target.value;

    setValues({
      ...values,
      ejercicio: año,
      proyecto: ""
    });

    if (año !== "") {
      const filtro = {
        id: "EvaluacionEjercicio",
        filter: "=",
        value: año,
      };

      setFilterYear((prevState) => ({
        filtered: [filtro],
      }));
    }

    CatalogService.getCatalogs([
      {
        id: "simeg_proyectos",
        filtered: [{ id: "Fto10Anio", filter: "=", value: año }],
      },
    ])
      .then((res) => {
        if (res.results) {
          setCatProyectos(res.response.catalogs.simeg_proyectos);
        }
      })
      .catch((error) => console.error(error));
  };

  const handleChangeProyecto = (e) => {
    const proyecto = e.target.value;

    setValues({
      ...values,
      ejercicio: values.ejercicio,
      proyecto: proyecto,
    });
  };

  return (
    <>
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
          {summary.recomendacion.body1}
          <br />
          {summary.recomendacion.body2}
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        direction={"row"} //isMd ? "row" : "column-reverse"
        id="recomendaciones"
        marginBottom={4}
      >
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={12}
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
              <Typography fontWeight={600}>Estadísticas Anuales</Typography>
              <Box marginBottom={4} marginTop={3}>
                <Chart series={series} categories={categories} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={4}
        direction={"row"} //isMd ? "row" : "column-reverse"
        id="recomendaciones"
      >
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={12}
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
              <Typography fontWeight={600}>
                Programas y Recomendaciones
              </Typography>
              <Box marginBottom={5} marginTop={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <InputSelect
                      label="Año"
                      size="small"
                      name="año"
                      value={values.ejercicio}
                      options={catEjercicio}
                      onChange={handleChangeEjercicio}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputSelect
                      label="Proyectos"
                      size="small"
                      name="proyecto"
                      value={values.proyecto}
                      options={catProyectos}
                      onChange={handleChangeProyecto}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                </Grid>
              </Box>

              {loadingChartSecondary ? (
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <Box marginBottom={4}>
                  <Chart series={seriesDep} categories={categoriesDep} />
                </Box>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Recomendaciones;
