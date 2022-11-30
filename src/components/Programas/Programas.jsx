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

import Chart from "../Charts/Chart";
import BasicTable from "../Table/BasicTable";

import ico_chart from "../../assets/chart_programas.svg";

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

  const [data, setData] = useState({
    page: 0,
    pageSize: 10,
    filtered: [],
  });
  const [isChart, setIsChart] = useState(true);
  const [active, setActive] = useState(false);
  const [programas, setProgramas] = useState([]);
  const [total] = useState(0);

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
            Programas{" "}
            <Typography color="primary" variant="inherit" component="span">
              Evaluados
            </Typography>
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
