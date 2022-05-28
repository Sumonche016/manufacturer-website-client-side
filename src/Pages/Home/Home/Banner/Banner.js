import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="hero min-h-screen banner">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full">
                    <h1 className="mb-5 text-5xl font-bold text-white">A Company Rule The word Company</h1>
                    <p className="mb-5 text-white">Lets Know and enjoy the world best </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;