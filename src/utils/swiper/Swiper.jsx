import React, { useState, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";
import { Pagination, Navigation } from "swiper";
import CardItem from "../../Components/CardItem/CardItem";
import Loading from "../../Components/utils/Loading";

const MySwiper = ({ data, isLoading }) => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  const calculateSlidesPerView = () => {
    if (window.innerWidth > 1024) return 3;
    else if (window.innerWidth > 768) return 2;
    else if (window.innerWidth > 480) return 2;
    else return 1;
  };

  useLayoutEffect(() => {
    setSlidesPerView(calculateSlidesPerView());
    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.data?.map(({ attributes, id }) => {
          return (
            <SwiperSlide key={id}>
              <CardItem name={"Experience"} homeId={id} data={attributes} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MySwiper;
