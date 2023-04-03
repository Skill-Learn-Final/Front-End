import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Box } from "@mui/material";

const Slider = ({ items }) => {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" }, height: "100%" }}>
      <Swiper
        loop
        speed={500}
        cssMode
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="h-100"
      >
        {items.map((item, key, index) => {
          return (
            <SwiperSlide key={key} className="h-100">
              {item}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};
export default Slider;
