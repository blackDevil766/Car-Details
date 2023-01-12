import React from "react"
import Button from 'react-bootstrap/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";


function Media() {

    function MediaImg(props) {
        return (
            <div className="media-img-container">
                <input className="checkBox" type="checkbox" />
                <img className="media-slider-img" src="imgs/car.jpg" alt="" />
            </div>
        )
    }
    return (
        <>
            <div className="media-container">
                <div className="media-title-container">
                    <h4 className="media-title">Media</h4>
                    <div className="share-btn">
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<p className="button-tooltip-2">delete</p>}
                        >
                            <img src="imgs/trash.svg" alt="" />

                        </OverlayTrigger>
                        <Button variant="warning">Share Media <img src="imgs/share.svg" alt="" /> </Button>{' '}
                    </div>
                </div>

                <div className="media-slider">

                    <div className="media-ico-container">
                        <img className="add-ico" src="imgs/add.svg" alt="" />
                        <h4 className="addText">Add Media</h4>
                    </div>

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide> <MediaImg /> </SwiperSlide>
                        <SwiperSlide> <MediaImg /> </SwiperSlide>
                        <SwiperSlide> <MediaImg /> </SwiperSlide>
                        <SwiperSlide> <MediaImg /> </SwiperSlide>
                        <SwiperSlide> <MediaImg /> </SwiperSlide>

                    </Swiper>
                </div>


            </div>
        </>
    )
}

export default Media;