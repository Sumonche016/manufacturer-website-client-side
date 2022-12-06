import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import Tool from '../Tools/Tool/Tool';
import NewSingleArriaval from './NewSingleArriaval';

const NewArriaval = () => {
    const { data, isLoading } = useQuery('tools', () => fetch('https://manufacturer-website-server-side-production-0c7a.up.railway.app/product').then(res => res.json()))



    if (isLoading) {
        return <Loading></Loading>
    }


    const filterData = data?.filter(newarrival => newarrival.category == 'new')

    return (
        <div>
            <div className='w-[85%] mx-auto py-20'>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                        filterData?.map((tool, index) => <NewSingleArriaval key={index} tool={tool}></NewSingleArriaval>)
                    }
                </div>

            </div>
        </div>
    );
};

export default NewArriaval;