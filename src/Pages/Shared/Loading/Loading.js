import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import loginLottie from './927-triangle-loading.json';

const Loading = () => {
    // for lottie
    const anime = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: anime.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: loginLottie,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        });
        // More logic goes here
    }, []);
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="flex justify-center items-center">
                <div className="w-fit mx-auto">
                    <div
                        className="overflow-hidden"
                        style={{
                            height: '400px',
                            width: '100%',
                            overflow: 'hidden',
                            outline: 'none',
                            margin: '0 auto',
                        }}
                        ref={anime}
                    ></div>
                    ;
                </div>
            </div>
        </div>);
};

export default Loading;