import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

const Swipper = ({ children }) => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners([
      {
        img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
      {
        img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    ]);
  }, []);
  return (
    <>
      <Swiper
        cssMode={true}
        //navigation={true}
        pagination={{
          clickable: true,
        }}
        parallax={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {banners.map((banner, idx) => (
          <>
            <SwiperSlide key={idx}>
              <img
                src={banner.img}
                alt="meet"
              ></img>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
};

export default Swipper;
