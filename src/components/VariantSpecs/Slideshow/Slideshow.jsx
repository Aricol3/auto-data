import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import styles from "./Slideshow.module.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CustomSwiper.css";

const Slideshow = ({vehicleImages}) => {

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
                {vehicleImages.map((image) => (
                    <div>
                        <SwiperSlide><img src={image} alt="images of model"/></SwiperSlide>
                    </div>
                ))}

            </Swiper>
    );
}


export default Slideshow;