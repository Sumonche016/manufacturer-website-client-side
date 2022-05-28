import React from 'react';
import industry from '../../../image/chhose.jpg'
import './Choose.css'
const Choose = () => {
    return (
        <div className='py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <img className='w-full' src={industry} alt="" />
                </div>

                <div className='flex justify-center items-center flex-col text-choose'>
                    <div>
                        <h1 className='text-why font-sans text-[#666666]'>Why Choose Us?</h1>
                        <h1 className='tittle'>We Produce And Work For
                            Social Development
                        </h1>
                        <p className='text-[#666666] my-3'>Our people are our biggest asset but the
                            only way to unlock their potential is to invest in the
                            right business systems that encourage innovation. When you enable
                            motivated people with the right tools, and the right ethical framework,
                            the combination is powerful.
                        </p>
                        <p className='text-[#1A191D]'><i class="fa-solid fa-check text-primary mr-3 mb-2 "></i> We pursue new and better ways of working that help us lead the sector</p>
                        <p className='text-[#1A191D]'><i class="fa-solid fa-check text-primary mr-3 mb-2 "></i>Integrity is central to our values and the way we conduct our business</p>
                        <p className='text-[#1A191D]'><i class="fa-solid fa-check text-primary mr-3 mb-2 "></i>We pursue new and better ways of working that help us lead the sector</p>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Choose;