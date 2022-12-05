import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import styles from "./Slideshow.module.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CustomSwiper.css";

const Slideshow = () => {
    return (
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className={styles.container}
            >
                <SwiperSlide><img src="https://hips.hearstapps.com/hmg-prod/images/2020-bmw-m8-competition-coupe-104-1570575778.jpg?crop=0.800xw:0.599xh;0.0717xw,0.267xh&resize=1200:*"/></SwiperSlide>
                <SwiperSlide><img src="https://www.bmw.ro/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/onepager/bmw-m8-coupe-onepager-sp-desktop.jpg.asset.1658234452853.jpg"/></SwiperSlide>
                <SwiperSlide><img src="https://media.bmwblog.ro/2020/07/LP_BMW_M8_V4_007.jpg"/></SwiperSlide>
            </Swiper>
    );
}


export default Slideshow;