import React from "react";
import Music from "../../img/musicgirl.png";
import "./viewmusic.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { AiFillPlayCircle } from "react-icons/ai";

import { Link } from "react-router-dom";
import Musicdetail from "./musicdetail";
import Bottom from "../bottom";
const Viewmusic = () => {
  return (
    <div className="viewmusic">
      <div className="picture">
        <img src={Music} height={80} className="profile" />
      </div>
      <div className="profilename">
        <h5>Hello</h5>
        <h2>Sergei Kodjebash</h2>
      </div>
      <div className="musicslider">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={2}
          spaceBetween={30}
        >
          <div>
          <SwiperSlide>
              <Link to="#" className="link">
                <img src={Music} height={200} width={200}  className="imagezoom"/>
              </Link>
              <div className="playmusic">
                <AiFillPlayCircle className="playOn" />
                <h4> Loud</h4>
                <h2>Rihanna</h2>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Link to="#" className="link">
                <img src={Music} height={200} width={200} />
              </Link>
              <div className="playmusic">
                <AiFillPlayCircle className="playOn" />
                <h4> Loud</h4>
                <h2>Rihanna</h2>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Link to="#" className="link">
                <img src={Music} height={200} width={200} />
              </Link>
              <div className="playmusic">
                <AiFillPlayCircle className="playOn" />
                <h4> Loud</h4>
                <h2>Rihanna</h2>
              </div>
            </SwiperSlide>{" "} <SwiperSlide>
              <Link to="#" className="link">
                <img src={Music} height={200} width={200} />
              </Link>
              <div className="playmusic">
                <AiFillPlayCircle className="playOn" />
                <h4> Loud</h4>
                <h2>Rihanna</h2>
              </div>
            </SwiperSlide>{" "}
          </div>
        </Swiper>
      </div>
      <Musicdetail/>
      <Bottom/>
    </div>
  );
};

export default Viewmusic;
