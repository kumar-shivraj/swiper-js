import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
// import "swiper/css/bundle";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SwiperPagination = () => {
  return (
    <>
      <Swiper className="mySwiper" modules={[Pagination]} pagination={true}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperPagination;
