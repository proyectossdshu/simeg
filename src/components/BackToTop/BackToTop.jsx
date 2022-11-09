import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BackToTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? true : false);
  const sx = {
    bottom: "30px",
    position: "fixed",
    right: "30px",
    zIndex: "1000",
    backgroundColor: "#3d70fe",
    borderStyle: "none",
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    minWidth: "0px",
    "&:hover": {
      backgroundColor: "#3d70fe",
    },
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.addEventListener("scroll", handleScroll);
    }
  });
  return (
    <>
      {show && (
        <Button variant="contained" sx={sx} onClick={handleClick} className="back_to_top">
          <KeyboardArrowUpIcon />
        </Button>
      )}
    </>
  );
};

export default BackToTop;
