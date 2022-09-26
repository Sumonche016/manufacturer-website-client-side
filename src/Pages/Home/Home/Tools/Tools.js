import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import Tool from './Tool/Tool';

const Tools = () => {
    const { data, isLoading } = useQuery('tools', () => fetch('https://fast-forest-54973.herokuapp.com/product').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    const filterData = data?.filter(tool => tool.category == 'replacement')
    return (
        <div >
            <div className='w-[85%] mx-auto py-20'>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                        filterData.map((tool, index) => <Tool key={index} tool={tool}></Tool>)
                    }
                </div>

            </div>
        </div>

    );
};

export default Tools;