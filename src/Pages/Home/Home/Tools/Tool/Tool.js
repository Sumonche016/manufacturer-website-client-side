import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tool.css'
const Tool = ({ tool }) => {
    const { name, img, price, minimum, available, description, _id } = tool

    const naviagate = useNavigate()

    const handleBuy = (id) => {
        naviagate(`/tool/${id}`)
    }
    return (
        <div>
            <div className="card-compact card bg-white border-card ">
                <figure>
                    <img className='w-[350px] h-[350px]' src={img} alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-center text-[25px] text-secondary font-bold">{name}</h2>
                    <p className='text-[17px] mt-2 font-sans text-[#222732]'>{description.slice(0, 100)}</p>

                    <div className='flex justify-between'>
                        <p className='text-[17px]'>Available :{available}pics</p>
                        <p className='font-bold text-[19px]'>$ {price}</p>
                    </div>
                    <p className='mt-3'>Minimum Order :{minimum}pics</p>



                    <div className="card-actions justify-center flex mt-3">
                        <button className="btn btn-primary text-white " onClick={() => handleBuy(_id)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;