import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/Home/slide1.jpg';
import slide2 from '../../../assets/Home/slide2.jpg';
import slide3 from '../../../assets/Home/slide3.jpg';
import SectionTitle from '../../../componentes/SectionTitle/SectionTitle';





const Category = () => {
    return (
        <section>

            <SectionTitle
            subHeading={"From 12.00am to 12.00pm"}
            heading={"Our doctors"}
            
            >

            </SectionTitle>

            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'> Dr.Ratul</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'> Dr.Ratul</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'> Dr.Ratul</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'> Dr.Ratul</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'> Dr.Ratul</h3>
        </SwiperSlide>
        
        
      </Swiper>
        </section>
    );
};

export default Category;