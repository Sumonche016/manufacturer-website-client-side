import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import Tool from './Tool/Tool';

const Tools = () => {
    const { data, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/product').then(res => res.json()))
    console.log(data)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-[90%] mx-auto pb-20'>
            <h1 className='text-secondary text-3xl font-bold text-center py-5'>Our Tools</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    data.map((tool, index) => <Tool key={index} tool={tool}></Tool>)
                }
            </div>

        </div>
    );
};

export default Tools;