import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import Tool from './Tool/Tool';

const Tools = () => {
    const { data, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/product').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div >
            <div className='w-[90%] mx-auto pb-20'>
                <h2 className="card-title text-[40px] py-10 block font-sans traking-wide text-[#1a191d] text-center">Our  <span className='text-primary'>Product</span></h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {
                        data.map((tool, index) => <Tool key={index} tool={tool}></Tool>)
                    }
                </div>

            </div>
        </div>

    );
};

export default Tools;