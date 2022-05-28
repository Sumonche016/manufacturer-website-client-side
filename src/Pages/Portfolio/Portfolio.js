import React from 'react';
import portfolio from '../../image/port.jpg'
import profileImg from '../../image/myprofile.png'
const Portfolio = () => {
    return (
        <div className='py-10 bg-[#F5F5F5]'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex justify-center items-center'>
                    <img className='w-[496px]' src={portfolio} alt="" />
                </div>

                <div className='flex justify-center items-center flex-col text-choose'>
                    <div>
                        <div className='shadow rounded-sm w-full  profile-card bg-white' >
                            <div className='flex justify-center'>
                                <div>
                                    <div className='mb-7'>
                                        <img src={profileImg} className='w-[100px] h-[100px]' alt="" />
                                        <h1 className=' mt-3 text-[20px] font-sans font-semibold text-secondary'>Sumon Bala</h1>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li className='mb-2'><i className="fa-solid fa-envelope mr-2"></i> Email: sumonche016@gmail.com</li>
                                <li className='mb-2'><i className=" mr-2 fa-solid fa-user-graduate"></i> Education: Dhaka University </li>
                                <li className='mb-2'><i className=" mr-2 fa-solid fa-location-dot"></i> Location: Dhaka, Bangladesh</li>
                                <li className='mb-2'><i className=" mr-2 fa-solid fa-phone-flip"></i>Skill: Html,Css ,Js ,React Js ,Node js , <br /> Express js  ,Mongodb, tailwind css ,bootsrap </li>
                                <li className='mb-2'><i className=" mr-2 fa-solid fa-phone-flip"></i>Project : <a href="https://warehouse-668ea.web.app/" className='text-blue-600'>Vegica Car</a>, <a href="https://healthcoach-fbe37.web.app/" className='text-blue-500'>HealtCoach</a>,<a href="https://sumonche016.github.io/trilo/" className='text-blue-500'>Trilo</a> </li>

                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Portfolio;