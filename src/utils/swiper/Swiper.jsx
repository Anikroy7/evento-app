import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { Pagination } from "swiper";

const HomeSlider=({images})=> {
  return (
    <>
      <Swiper
        slidesPerView={"auto"} 
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {/*  {
          images.map(image=> <SwiperSlide key={image}>
            <img src={`${import.meta.env.VITE_IMAGE_URL}${image}`} alt="" />
        </SwiperSlide>)
        } */}
        
        <SwiperSlide>
            <img src="https://media.istockphoto.com/id/1267792804/photo/rear-view-of-tourist-woman-sitting-on-the-bed-with-her-luggage-in-hotel-bedroom-after-check-in.jpg?s=612x612&w=0&k=20&c=pVnNOFT6_YV5FuW0Hf56ninY9GAu0TNmm1QOAuw9xa0=" alt="" />

        </SwiperSlide>
        <SwiperSlide>
            <img src="https://media.istockphoto.com/id/1199804796/photo/portrait-of-tourist-woman-raised-her-hands-and-standing-nearly-window-looking-to-beautiful.jpg?s=612x612&w=0&k=20&c=1aFeaqMrXPu04AzjeztOoVvRmLm2lbNM5EH_f_fApng=" alt="" />

        </SwiperSlide>
        <SwiperSlide>
            <img src="https://t3.ftcdn.net/jpg/03/56/28/66/360_F_356286682_EoXhRdHNIFYGoJegwRCeYF0Ah5mUHsIM.jpg" alt="" />

        </SwiperSlide>
       
      </Swiper>
    </>
  );
}

export default HomeSlider