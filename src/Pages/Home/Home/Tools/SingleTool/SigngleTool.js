import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const SigngleTool = () => {
    const { id } = useParams()
    const [tool, setTool] = useState([])

    const { data } = useQuery('tool', () => fetch(`http://localhost:5000/product/${id}`).then(res => res.json()).then(data => setTool(data)))

    const { name, img, price, minimum, available, description, _id } = tool


    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure>
                    <img className='w-[350px] h-[350px]' src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{price}</p>
                    <p>{minimum}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigngleTool;