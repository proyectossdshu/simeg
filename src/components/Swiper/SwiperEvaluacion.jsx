import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Card, CardContent, Typography, Box, Icon } from "@mui/material";

const SwipperEvaluacion = () => {
  const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
    setEvaluations([
      {
        tipo: "Diagnóstico",
        parrafo:
          "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis. Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.",
        color: "#0139b2",
        icono: "content_paste_search",
      },
      {
        tipo: "Diseño",
        parrafo:
          "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.",
        color: "#fe5ac8",
        icono: "auto_fix_high",
      },
      {
        tipo: "Línea base",
        parrafo:
          "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.",
        color: "#69A842",
        icono: "segment",
      },
      {
        tipo: "Específica de desempeño",
        parrafo:
          "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.",
        color: "#ff6100",
        icono: "insights",
      },
      {
        tipo: "Procesos",
        parrafo:
          "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.",
        color: "#0139b2",
        icono: "engineering",
      },
      {
        tipo: "Consistencia y resultados",
        parrafo:
          "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.",
        color: "#fe5ac8",
        icono: "fact_check",
      },
      {
        tipo: "Indicadores",
        parrafo:
          "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.",
        color: "#69A842",
        icono: "donut_large",
      },
      {
        tipo: "Impacto",
        parrafo:
          "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.",
        color: "#ff6100",
        icono: "published_with_changes",
      },
      {
        tipo: "Social",
        parrafo:
          "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.",
        color: "#0139b2",
        icono: "group",
      },
    ]);
  }, []);
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        parallax={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={false}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper evaluations"
      >
        {evaluations.map((evaluation, idx) => (
          <>
            <SwiperSlide key={idx}>
              <Card sx={{ padding: "1rem", borderRadius: "10px" }} elevation={3}>
                <CardContent>
                  <Box sx={{ textAlign: "start", marginBottom: "10px" }}>
                    <Box
                      component="div"
                      sx={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: `${evaluation.color}`,
                        borderRadius: "30%",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0 2px 10px 0 rgb(111 231 221 / 30%)",
                      }}
                    >
                      <Icon>{evaluation.icono}</Icon>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                      textAlign: "start",
                      marginBottom: "10px",
                      color: "#153058",
                    }}
                    fontWeight="600"
                  >
                    {evaluation.tipo}
                  </Typography>

                  <Typography
                    sx={{ fontSize: "12px", textAlign: "start" }}
                    fontWeight="500"
                  >
                    {evaluation.parrafo}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
};

export default SwipperEvaluacion;
