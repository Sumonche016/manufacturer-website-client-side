import React from 'react';

const Tool = ({ tool }) => {
    const { name, img, price, minimum, available, description } = tool
    return (
        <div>
            <div class="card card-compact  bg-base-100 shadow-xl">
                <figure>
                    <img className='w-[350px] h-[350px]' src={img} alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;