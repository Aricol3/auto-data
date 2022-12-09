import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import styles from "./Slideshow.module.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CustomSwiper.css";
import brands from "../../../data/Brands";
import {Link} from "react-router-dom";
import Brand from "../../Brands/Brand/Brand";

function zoom() {

}

const Slideshow = ({vehicle}) => {
    return (
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className={styles.container}
                onClick={zoom}
            >
                {vehicle.images.map((image) => (
                    <div>
                        <SwiperSlide><img src={image}/></SwiperSlide>
                    </div>
                ))}

            </Swiper>
    );
}


export default Slideshow;