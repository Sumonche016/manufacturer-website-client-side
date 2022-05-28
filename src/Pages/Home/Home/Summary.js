import React from 'react';
import './summary.css'
const Summary = () => {
    return (
        <div className='w-[90%] mx-auto py-5'>
            <div className='grid grid-cols-2 md:grid-cols-4 md:gap-[18rem] gap-20 '>
                <div className='flex flex-col'>
                    <div className='p-[34px] bg-[#CD0001] shadow-red'>
                        <div>
                            <i class="fa-solid fa-person-chalkboard text-white text-[30px]"></i>
                        </div>
                    </div>
                    <div className='mt-3 flex justify-center items-center'>
                        <div>
                            <span className='block text-[22px] font-sans font-semibold'>100+</span>
                            <span className='block text-[#CD0001] font-semibold'>Customers</span>
                        </div>
                    </div>
                </div>



                <div className='flex flex-col'>
                    <div className='p-[34px] bg-[#CD0001] shadow-red'>
                        <div>

                            <i class="fa-solid fa-hand-holding-dollar text-white text-[30px]"></i>
                        </div>
                    </div>
                    <div className='mt-3 flex justify-center items-center'>
                        <div>
                            <span className='block text-[22px] font-sans font-semibold'>120M+</span>
                            <span className='block text-[#CD0001] font-semibold'>Annual Revenue</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='p-[34px] bg-[#CD0001] shadow-red'>
                        <div>
                            <i class="fa-solid fa-message text-white text-[30px]"></i>
                        </div>
                    </div>
                    <div className='mt-3 flex justify-center items-center'>
                        <div>
                            <span className='block text-[22px] font-sans font-semibold'>33k+</span>
                            <span className='block text-[#CD0001] font-semibold'>Review</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='p-[34px] bg-[#CD0001] shadow-red'>
                        <div>
                            <i class="fa-solid fa-screwdriver-wrench text-white text-[30px]"></i>
                        </div>
                    </div>
                    <div className='mt-3 flex justify-center items-center'>
                        <div>
                            <span className='block text-[22px] font-sans font-semibold'>50+</span>
                            <span className='block text-[#CD0001] font-semibold'>Tools</span>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default Summary;