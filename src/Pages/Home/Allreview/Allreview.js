
import React from 'react';
import { useQuery } from 'react-query';
import './Allreview.css'
import SingleReview from './SingleReview';
const Allreview = () => {

    const { data, isLoading } = useQuery('allreview', () => fetch('http://localhost:5000/review').then(res => res.json()))
    console.log(data)
    return (
        <div className='py-20'>
            <h2 class=" mb-10 text-center text-[40px] font-sans font-semibold traking-wide text-[#1a191d] "> Our Customer <span className='text-primary'>Review</span></h2>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>



                {
                    data?.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
                }

            </div>
        </div>
    );
};

export default Allreview;



