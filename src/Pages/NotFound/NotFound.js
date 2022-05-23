import React from 'react';
import notfound from '../../image/404.jpg';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;