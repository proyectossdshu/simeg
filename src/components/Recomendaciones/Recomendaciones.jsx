import { useState, useEffect } from "react";
import { Box, Card, Grid, Typography, CardContent } from "@mui/material";
import ico_chart from "../../assets/chart_recomendaciones.svg";
import Chart from "../Charts/Chart";
import InputSelect from "../Select/BasicSelect";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SimegService from "../../services/SimegService";
import CatalogService from "../../services/CatalogService";

const Recomendaciones = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [series, setSeries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recomendaciones, setRecomendaciones] = useState([]);
  const [catRecomendaciones, setCatRecomendaciones] = useState([]);
  const [catEjercicio, setCatEjercicio] = useState([]);
  const [catDependencias, setCatDependencias] = useState([]);
  const [catProyectos, setCatProyectos] = useState([]);
  const [filter, setFilter] = useState({ filtered: [] });
  const [values, setValues] = useState({
    ejercicio: 2016,
    dependencia: "",
    proyecto: "",
    recomendacion: "",
  });

  const getEvaluatedPrograms = (_filter) => {
    SimegService.getEvaluatedPrograms(_filter)
      .then((res) => {
        if (res.results) {
          setRecomendaciones(res.response.data);
        }
      })
      .catch((error) => console.error(error));
  };

  const handleChangeEjercicio = (e) => {
    const año = e.target.value;
    const filtro = {
      id: "Evaluacion.EvaluacionEjercicio",
      filter: "=",
      value: año,
    };

    setValues({
      ...values,
      ejercicio: año,
    });

    setFilter((prevState) => ({
      filtered: [...prevState.filtered, filtro],
    }));
  };
  const handleChangeDependencia = (e) => {
    const dependencia = e.target.value;
    const filtro = { id: "Fto10.F10RamoId", filter: "=", value: dependencia };

    setValues({
      ...values,
      dependencia: dependencia,
    });
    setFilter((prevState) => ({
      filtered: [...prevState.filtered, filtro],
    }));
  };

  const handleChangeProyecto = (e) => {
    const proyecto = e.target.value;
    const filtro = { id: "Fto10.Fto10ClaveQP", filter: "=", value: proyecto };

    setValues({
      ...values,
      proyecto: proyecto,
    });
    setFilter((prevState) => ({
      filtered: [...prevState.filtered, filtro],
    }));
  };

  useEffect(() => {
    const catalogsParams = [
      {
        id: "simeg_ejercicios",
      },
      {
        id: "simeg_dependencias",
      },
      {
        id: "simeg_proyectos",
      },
      {
        id: "simeg_recomendaciones",
      },
    ];

    CatalogService.getCatalogs(catalogsParams)
      .then((res) => {
        if (res.results) {
          catalogsParams.forEach((item) => {
            switch (item.id) {
              case "simeg_dependencias":
                setCatDependencias(res.response.catalogs[item.id]);
                break;

              case "simeg_ejercicios":
                setCatEjercicio(res.response.catalogs[item.id]);
                break;

              case "simeg_proyectos":
                setCatProyectos(res.response.catalogs[item.id]);
                break;
            }
          });
        }
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const categories = recomendaciones.map((item) => item.EvaluacionNombre);

    const series = [
      {
        name: "Total de Recomendaciones",
        showInLegend: false,
        data: recomendaciones.map((item) => {
          return { y: item.TotalRecomendaciones };
        }),
        pointPadding: 0.4,
        pointPlacement: -0.2,
        color: "#0066FF",
      },
      {
        name: "Recomendaciones Atendidas",
        showInLegend: false,
        data: recomendaciones.map((item) => {
          return { y: item.Atendidas };
        }),
        color: "#FF5AC8",
      },
    ];

    setCategories(categories);
    setSeries(series);
  }, [recomendaciones]);

  useEffect(() => {
    getEvaluatedPrograms(filter);
  }, [filter]);

  console.log(filter);  
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
              <Box marginBottom={2}>
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
                      label="Dependencia"
                      size="small"
                      name="dependencia"
                      value={values.dependencia}
                      options={catDependencias}
                      onChange={handleChangeDependencia}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box marginBottom={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <InputSelect
                      label="Proyecto"
                      size="small"
                      name="proyecto"
                      value={values.proyecto}
                      options={catProyectos}
                      onChange={handleChangeProyecto}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputSelect
                      label="Recomendación"
                      size="small"
                      name="recomendacion"
                      values={values.recomendacion}
                      options={catRecomendaciones}
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box marginBottom={4}>
                <Chart
                  title={"Recomendaciones"}
                  series={series}
                  categories={categories}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Recomendaciones;
