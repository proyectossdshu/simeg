import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import BackToTop from "./BackToTop/BackToTop";

import Header from "./Header/Header";
import Swipper from "./Swiper/Swiper";

const MainLayout = ({ children }) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CssBaseline />
        <Header />
        <Swipper />
        <Box
          sx={{
            pt: 10,
            ml: { sm: 0 },
            mt: { sm: "12rem" },
            p: { sm: 0 },
            mb: 5,
          }}
        >
          {children}
        </Box>
        <BackToTop showBelow={250} />
      </Box>
    </>
  );
};

export default MainLayout;
