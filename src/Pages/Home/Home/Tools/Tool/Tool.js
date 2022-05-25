import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { name, img, price, minimum, available, description, _id } = tool

    const naviagate = useNavigate()

    const handleBuy = (id) => {
        naviagate(`/tool/${id}`)
    }
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure>
                    <img className='w-[350px] h-[350px]' src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Available :{available}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-white" onClick={() => handleBuy(_id)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;