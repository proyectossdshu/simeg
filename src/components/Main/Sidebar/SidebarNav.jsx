import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-scroll";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const SidebarNav = ({ navItems, onClose }) => {
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        onClick={() => onClose()}
      >
        <IconButton>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box paddingX={2} paddingBottom={2}>
        <Box>
          {navItems.map((item, i) => (
            <Box key={i} marginBottom={4}>
              <Link
                to={item.anchor}
                key={i}
                onClick={(e) =>  onClose()}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    textTransform: "uppercase",
                    marginBottom: 1,
                    display: "block",
                  }}
                >
                  {item.name}
                </Typography>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  navItems: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
