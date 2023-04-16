import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper";

import CardItem from "../../Components/CardItem/CardItem";
import Loading from "../../Components/utils/Loading";

const MySwiper = ({data,isLoading}) => {


  if (isLoading) return <Loading />;

  const slidesPerView = () => {
    if (window.innerWidth > 1024) return 3;
    else if (window.innerWidth > 768) return 2;
    else if (window.innerWidth > 480) return 2;
    else return 1;
  };

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView()}
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
