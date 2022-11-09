import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TablePagination,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableSortLabel,
  Box,
  Paper,
  CircularProgress,
  Card,
  Icon,
  Typography,
} from "@mui/material";

import { visuallyHidden } from "@mui/utils";

import PropTypes from "prop-types";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  let stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function BasicTableHead(props) {
  const { order, orderBy, onRequestSort, headCells, headSubCells } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      {headSubCells ? (
        <>
          <TableRow>
            {headSubCells.map((headSubCell) => (
              <TableCell
                key={headSubCell.id}
                colSpan={headSubCell.colspan}
                align={headSubCell.align}
                width={headSubCell.width}
              >
                {headSubCell.label}
              </TableCell>
            ))}
          </TableRow>
        </>
      ) : (
        <></>
      )}

      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            width={headCell.width}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

BasicTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

BasicTable.propTypes = {
  rows: PropTypes.array.isRequired,
  hcolumns: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  handleChangePagination: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleSelectItem: PropTypes.func.isRequired,
};

BasicTable.defaultProps = {
  pageSize: 5,
  handleSelectItem: () => {},
};

export default function BasicTable({
  rows,
  hcolumns,
  hSubColumns,
  total,
  handleChangePagination,
  pageSize,
  pageProp,
  isLoading,
  handleSelectItem,
  isAction,
}) {
  // const [rows] = useState(data);
  const [headCells] = useState(hcolumns);
  const [headSubCells] = useState(hSubColumns);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [page, setPage] = useState(pageProp);
  const [rowsPerPage, setRowsPerPage] = useState(pageSize);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    handleChangePagination({ page: newPage, pageSize: rowsPerPage });
  };

  const handleChangeRowsPerPage = (event) => {
    const pageSize = parseInt(event.target.value, 10);
    setRowsPerPage(pageSize);
    setPage(0);
    handleChangePagination({ page: 0, pageSize });
  };

  const getStripedStyle = (index) => {
    return { background: index % 2 ? "#E4ECFA" : "white" };
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? rowsPerPage - rows.length !== 0 : rows.length === 0;
  return (
    <Box sx={{ width: "100%", overflow: "auto" }}>
      <Paper sx={{ width: "100%", mb: 2, p: 2 }} elevation={0}>
        <Card elavation={0}>
          <TableContainer>
            <Table
              aria-label="sticky table"
             //sx={{ minWidth: 750, minHeight: 600 }}
              size={"medium"}
            >
              {
                <BasicTableHead
                  isAction={isAction}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                  headCells={headCells}
                  headSubCells={headSubCells}
                />
              }
              <TableBody>
                {isLoading && (
                  <TableRow>
                    <TableCell colSpan={6} sx={{ textAlign: "center" }}>
                      {" "}
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                )}
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                {!isLoading &&
                  stableSort(rows, getComparator(order, orderBy)).map(
                    (row, rowIndex) => {
                      return (
                        <TableRow
                          hover
                          tabIndex={-1}
                          key={row.id + " - " + rowIndex}
                          style={{
                            padding: "5px 20px",
                            height: 25,
                            ...getStripedStyle(rowIndex),
                          }}
                        >
                          {hcolumns.map((colum, index) => {
                            return row[colum.id] ? (
                              colum.columnAction ? (
                                <TableCell
                                  sx={{ cursor: "pointer" }}
                                  onClick={() => handleSelectItem(row)}
                                  align={colum.numeric ? "center" : "left"}
                                  key={index}
                                >
                                  {row[colum.id]}
                                </TableCell>
                              ) : (
                                <TableCell
                                  key={index}
                                  align={colum.numeric ? "center" : "left"}
                                >
                                  {row[colum.id]}
                                </TableCell>
                              )
                            ) : (
                              <TableCell key={index}> </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    }
                  )}
                {emptyRows && (
                  <TableRow>
                    <TableCell colSpan={12} align="center">
                      <Icon fontSize={"large"}>info</Icon>
                      <Typography>Sin Registros</Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
        <TablePagination
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          component="div"
          count={total}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
