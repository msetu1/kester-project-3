import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { motion } from "framer-motion"

const Section2 = () => {
    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="mb-10 flex justify-between items-center">
                <h2 className="text-5xl font-bold">PLAYERS
                </h2>
                <div className="flex items-center gap-4 ">
<button className="bg-black hover:bg-red-600 p-3"><FaArrowLeftLong className="text-2xl text-white  " /></button>
<button className="hover:bg-black bg-red-600 p-3"><FaArrowRight className="text-2xl text-white " /></button>
                </div>
            </div>
            <div className="">
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="	https://themewant.com/products/wordpress/kester-baseball/wp-content/uploads/2023/09/1-300x382.jpg" alt="" />
            <h2 className="uppercase text-2xl bg-black mt-4 text-white text-center font-bold py-3">finn rosetta</h2>
            </SwiperSlide>
        <SwiperSlide><motion.div
  animate={{
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
  }}>
        <img src="https://themewant.com/products/wordpress/kester-baseball/wp-content/uploads/2023/09/2-300x382.jpg" alt="" />
        </motion.div>
        <h2 className="uppercase text-2xl bg-black mt-4 text-white text-center font-bold py-3">mason ewing</h2></SwiperSlide>
        <SwiperSlide><img src="https://themewant.com/products/wordpress/kester-baseball/wp-content/uploads/2023/09/9-300x382.jpg" alt="" />
        <h2 className="uppercase text-2xl bg-black mt-4 text-white text-center font-bold py-3">mason ewing</h2></SwiperSlide>
        <SwiperSlide><img src="	https://themewant.com/products/wordpress/kester-baseball/wp-content/uploads/2023/09/6-2-300x382.jpg" alt="" />
        <h2 className="uppercase text-2xl bg-black mt-4 text-white text-center font-bold py-3">mason ewing</h2></SwiperSlide>
        <SwiperSlide><img src="https://themewant.com/products/wordpress/kester-baseball/wp-content/uploads/2023/09/8-300x382.jpg" alt="" />
        <h2 className="uppercase text-2xl bg-black mt-4 text-white text-center font-bold py-3">mason ewing</h2></SwiperSlide>
        <SwiperSlide><img src="https://themewant.com/products/wordpress/kester-baseball/wp-content/uploads/2023/09/7-300x382.jpg" alt="" />
        <h2 className="uppercase text-2xl bg-black mt-4 text-white text-center font-bold py-3">mason ewing</h2></SwiperSlide>
      </Swiper>
            </div>
        </div>
    );
};

export default Section2;