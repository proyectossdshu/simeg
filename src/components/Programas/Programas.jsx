import { useEffect, useState } from "react";

import {
  Box,
  Card,
  IconButton,
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

import SimegService from "../../services/SimegService";

const Programas = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const colums = [
    {
      label: "Tematica de atención",
      id: "F1",
      width: 400,
      columnAction: false,
    },
    {
      label: "Programas Sociales Estatales",
      id: "F2",
      width: 250,
      numeric: true,
      columnAction: false,
    },
  ];

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [isChart, setIsChart] = useState(true);
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [programas, setProgramas] = useState([]);
  const [programasFiltered, setProgramasFiltered] = useState([]);
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
          const programs = res.response.data;
          setProgramas(programs);

          const dataFiltered = res.response.data.slice(0, pageSize);
          setProgramasFiltered(dataFiltered);
          setTotal(res.response.total);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  const handleChangePage = ({ page, pageSize }) => {
    const start = page * pageSize;
    const end = start + pageSize;

    const dataFiltered = programas.slice(start, end);
    setProgramasFiltered(dataFiltered);
    setPage(page);
    setPageSize(pageSize);
  };

  useEffect(() => {
    const categories = programas.map((item) => item.F1);
    const series = [
      {
        name: "Programas Evaluados",
        showInLegend: false,
        data: programas.map((item, i) => {
          return { y: item.F2 };
        }),
        color: "#0066FF",
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
            <Box
              marginBottom={4}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography fontWeight={700}>Programas Evaluados</Typography>
              <Box>
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
            </Box>

            <Box marginBottom={4}>
              {isChart ? (
                <Chart categories={categorie} series={series} />
              ) : (
                <BasicTable
                  hcolumns={colums}
                  rows={programasFiltered}
                  isLoading={isLoading}
                  total={total}
                  pageProp={page}
                  pageSize={pageSize}
                  handleChangePagination={handleChangePage}
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
