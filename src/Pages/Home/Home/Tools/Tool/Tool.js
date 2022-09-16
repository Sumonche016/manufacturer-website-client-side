import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tool.css'
import { BsSuitHeartFill, BsFillCartCheckFill } from 'react-icons/bs'
const Tool = ({ tool }) => {
    const { name, img, price, minimum, available, description, _id } = tool
    console.log(tool)
    const naviagate = useNavigate()

    const handleBuy = (id) => {
        naviagate(`/tool/${id}`)
    }
    return (
        <div>
            <div className=" bg-white border-card">
                <div className='block'>
                    <img className='w-full align-middle border-bottom' src={img} alt="Shoes" />

                </div>
                <div className=" text-center icon-box">
                    <div className='grid grid-cols-6 bg-primary text-white h-[44px] buy-now'>
                        <div className=' flex justify-center items-center hover:bg-secondary transition-all duration-500 cursor-pointer'>
                            <BsSuitHeartFill />
                        </div>
                        <div className='tools-border-left col-start-2 col-span-4 flex justify-center items-center hover:bg-secondary transition-all duration-500 cursor-pointer'>
                            <h1 className='heading-tools' onClick={() => handleBuy(_id)}>Buy Now</h1>
                        </div>
                        <div className='tools-border-left flex justify-center items-center hover:bg-secondary transition-all duration-500 cursor-pointer'>
                            <BsFillCartCheckFill />
                        </div>
                    </div>
                    <h2 className="text-center uppercase text-[14px] heading-tools text-primary hover:text-secondary transition-all my-[10px]">{name}</h2>
                    {/* <p className='text-[17px] mt-2 font-sans text-[#222732]'>{description.slice(0, 100)}</p> */}
                    <div>
                        <i className="fas fa-star text-[#CCCCCC] mx-[1px] text-[12px]"></i>
                        <i className="fas fa-star text-[#CCCCCC] mx-[1px] text-[12px]"></i>
                        <i className="fas fa-star text-[#CCCCCC] mx-[1px] text-[12px]"></i>
                        <i className="fas fa-star text-[#CCCCCC] mx-[1px] text-[12px]"></i>
                        <i className="fas fa-star text-[#CCCCCC] mx-[1px] text-[12px]"></i>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-between mt-[3px] mb-4'>
                            {/* <p className='text-[17px]'>Available :{available}pics</p> */}
                            <p className=' text-[18px] text-[#282828] font-semibold'>${price}</p>
                        </div>
                    </div>
                    {/* <p className='mt-3'>Minimum Order :{minimum}pics</p> */}



                    {/* <div className="card-actions justify-center flex mt-3">
                        <button className="btn btn-primary text-white " onClick={() => handleBuy(_id)}>Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Tool;