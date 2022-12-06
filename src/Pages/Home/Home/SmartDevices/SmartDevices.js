import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import SingleSmart from './SingleSmart';

const SmartDevices = () => {
    const { data, isLoading } = useQuery('tools', () => fetch('https://manufacturer-website-server-side-production-0c7a.up.railway.app/product').then(res => res.json()))



    if (isLoading) {
        return <Loading></Loading>
    }


    const filterData = data?.filter(newarrival => newarrival.category == 'smart')
    return (
        <div>
            <div className='w-[85%] mx-auto py-20'>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                        filterData?.map((tool, index) => <SingleSmart key={index} tool={tool}></SingleSmart>)
                    }
                </div>

            </div>
        </div>
    );
};

export default SmartDevices;