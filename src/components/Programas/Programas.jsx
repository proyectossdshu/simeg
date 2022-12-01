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
  CardContent,
} from "@mui/material";
import { BarChart, TableRows } from "@mui/icons-material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Highcharts from "highcharts";

import Chart from "../Charts/Chart";
import BasicTable from "../Table/BasicTable";

import ico_chart from "../../assets/chart_programas.svg";
import SimegService from "../../services/SimegService";
import { lightBlue, pink } from "@mui/material/colors";

const Programas = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const colums = [
    {
      label: "Tematica de atención",
      id: "tematica",
      width: 400,
      columnAction: false,
    },
    {
      label: "PSE",
      id: "pse",
      columnAction: false,
    },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [isChart, setIsChart] = useState(true);
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [programas, setProgramas] = useState([]);
  const [series, setSeries] = useState([]);
  const [categorie, setCategorie] = useState([]);

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

  const getStatsByTopic = () => {
    setIsLoading(true);
    SimegService.getStatsByTopic({})
      .then((res) => {
        if (res.results) {
          const programs = res.response.data.map((item) => {
            return {
              tematica: item.F1,
              pse: item.F2,
            };
          });

          setProgramas(programs);
          setTotal(res.response.total);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const categories = programas.map((item) => item.tematica);
    const series = [
      {
        name: "Programas Evaluados",
        showInLegend: false,
        data: programas.map((item, i) => {
          return { y: item.pse };
        }),
        pointPadding: 0.4,
        pointPlacement: -0.2,
      },
    ];
    setCategorie(categories);
    setSeries(series);
  }, [programas]);

  useEffect(() => {
    getStatsByTopic();
  }, []);

  return (
    <Grid
      container
      spacing={4}
      direction={isMd ? "row" : "column-reverse"}
      id="programas"
    >
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
            <Box marginBottom={4} display={"flex"} justifyContent={"flex-end"}>
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
            </Box>

            <Box marginBottom={4}>
              {isChart ? (
                <Chart
                  title={"Programas Evaluados"}
                  categories={categorie}
                  series={series}
                />
              ) : (
                <BasicTable
                  hcolumns={colums}
                  rows={programas}
                  isLoading={isLoading}
                  total={total}
                  pageProp={page}
                  pageSize={rowsPerPage}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} data-aos={isMd ? "fade-right" : "fade-up"}>
        <Box marginBottom={4}>
          <Box
            component={Typography}
            fontWeight={700}
            variant={"h4"}
            gutterBottom
          >
            Programas Evaluados
            <br />
            Por Ejercicio Fiscal
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
    </Grid>
  );
};

export default Programas;
