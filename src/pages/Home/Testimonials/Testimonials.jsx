import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [review, setReview] = useState([]);

    useEffect( () => {
        fetch('reviews.json')
        .then(res=> res.json())
        .then(data => setReview(data))
    }, [])


    return (
        <section className="my-20">
            <SectionTitle
            subHeading={"what our client say"}
            heading={"Testimonials"}
            >

            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            review.map(review =><SwiperSlide 
            key={review._id}
            >
                <div className="mx-24 my-16 flex flex-col items-center">
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                    <p className="py-8">{review.details}</p>
                    <h3 className="text-3xl text-sky-500">{review.name}</h3>
                </div>


            </SwiperSlide>)
        }
        
      </Swiper>
        </section>
    );
};

export default Testimonials;