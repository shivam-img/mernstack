import React, { useState, useEffect } from 'react'
import { getAPIAuth } from '../../../apiservices/ApiServies'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function HomeSlider() {
    const [data, setData] = useState([]);
    const getallBannerimages = async () => {
        try {
            const res = await getAPIAuth("image/i");
            if (res.status == 200) {
                setData(res.data.data);
            }
        } catch (error) {

            console.log("errror", error);
        }
    }

    useEffect(() => {
        getallBannerimages()
    }, []);

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
                delay: 1000, // Delay between slides in milliseconds
                disableOnInteraction: false, // If true, autoplay will be disabled after user interactions
            }}
            modules={[Autoplay]} // Include the Autoplay module
        >
            {
                data.map((item) => {
                    return (
                        <>
                            {/* <img src={item.images} alt="" /> */}
                            <SwiperSlide>
                                <div className="image-baneer">
                                    <img src={item.images} alt="" />
                                </div>
                            </SwiperSlide>
                        </>
                    )
                })
            }
        </Swiper>
    )
}

export default HomeSlider