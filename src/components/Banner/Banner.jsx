import slider1 from '../../assets/slider1.avif'
import slider2 from '../../assets/slider2.avif'
import slider3 from '../../assets/banner4.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import BannerMessage from './BannerMessage';

const Banner = () => {
    return (
        <Swiper navigation={true} loop={true} modules={[Navigation]} className='mySwiper h-screen rounded-xl object-center object-cover'>
            <SwiperSlide className="relative w-screen mx-auto h-[30vw]">
                <img className='rounded-xl h-full w-full object-cover object-center' src={slider1} alt="" />
                <div className='absolute px-[15vw] flex items-center justify-center inset-0 bg-black bg-opacity-50 right-0 bottom-0'>
                    <BannerMessage/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative w-screen mx-auto h-[30vw]">
                <img className='rounded-xl h-full w-full object-cover object-center' src={slider2} alt="" />
                <div className='absolute px-[15vw] flex items-center justify-center inset-0 bg-black bg-opacity-50 right-0 bottom-0'>
                    <BannerMessage/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative w-screen mx-auto h-[30vw]">
                <img className='rounded-xl h-full w-full object-cover object-center' src={slider3} alt="" />
                <div className='absolute px-[15vw] flex items-center justify-center inset-0 bg-black bg-opacity-50 right-0 bottom-0'>
                    <BannerMessage/>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;