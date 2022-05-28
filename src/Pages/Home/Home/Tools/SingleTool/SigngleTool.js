import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import Modal from './Modal';


const SigngleTool = () => {

    const { id } = useParams()
    const [tool, setTool] = useState([])
    const [modal, setModal] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])


    if (tool) {
        var { img, minimum, price, description, available } = tool;
    }


    return (
        <div className='h-screen flex justify-center items-center'>

            <div className="card w-96 bg-base-100 shadow-xl text-center">
                <figure><img src={img} className='w-[350px] h-[350px]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center block">Shoes!</h2>
                    <p>{description?.slice(0, 70)}</p>
                    <p>Minimum Order : {minimum}pics</p>
                    <p>Available : {available}pics</p>
                    <p>Price {price}$</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal-6" className="btn btn-primary w-full">Buy Now</label>
                    </div>
                </div>
                {modal && <Modal tool={tool} setModal={setModal}></Modal>}

            </div>


        </div>
    );
};

export default SigngleTool;