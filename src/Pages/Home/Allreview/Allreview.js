
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, EffectCoverflow } from 'swiper';
import { Navigation } from "swiper";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";
import { useQuery } from 'react-query';
import './Allreview.css'

const Allreview = () => {

    const { data, isLoading } = useQuery('allreview', () => fetch('https://manufacturer-website-server-side-production-0c7a.up.railway.app/review').then(res => res.json()))
    console.log(data)
    return (
        <div className='py-20'>
            <h2 className=" mb-10 text-center text-[40px] font-sans font-semibold traking-wide text-[#1a191d] "> Our Customer <span className='text-primary'>Review</span></h2>
            <div className='w-[90%] mx-auto '>



                {/* {
                    data?.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
                } */}

                {/* 
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    navigation={true}
                    centeredSlides={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}

                    slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    }}
                    pagination={{
                        clickable: true
                    }}
                    className="mySwiper"
                >




                    {
                        data.map(review => <SwiperSlide key={review.id} className='p-4 bg-white dark:bg-[#182133]  shadow-lg'>
                            <div className='bg-red h-full'>

                                <h1 className='text-[#1C2880] dark:text-[#38BDF8] font-semibold mt-2'>{review?.userName}</h1>
                                <h1 className='dark:text-[#E2E8F0]'>{review?.description}</h1>
                            </div>
                        </SwiperSlide>)
                    }


                </Swiper> */}

            </div>





        </div>
    );
};

export default Allreview;



