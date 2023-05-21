import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import { Box } from "@mui/material";
const HomeDetailsSlider = ({ images }) => {
  console.log(images);
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {images.map((img) => (
          <SwiperSlide>
            <Box sx={{height:'20%', width:"50%"}}>
              <img
                height="440px"
                width="400px"
                src={img}
                alt="green iguana"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeDetailsSlider;
