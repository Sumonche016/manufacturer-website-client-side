import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import Tool from './Tool/Tool';

const Tools = () => {
    const { data, isLoading } = useQuery('tools', () => fetch('https://fast-forest-54973.herokuapp.com/product').then(res => res.json()))
    const [show, setShow] = useState(false)

    if (isLoading) {
        return <Loading></Loading>
    }
    const filterData = data?.filter(tool => tool.category == 'replacement')
    const sliceData = filterData.slice(0, 8)
    return (
        <div >
            <div className='w-[85%] mx-auto py-20'>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {show ?
                        filterData.map((tool, index) => <Tool key={index} tool={tool}></Tool>)
                        :
                        sliceData.map((tool, index) => <Tool key={index} tool={tool}></Tool>)
                    }
                </div>



                <div className={`flex justify-center items-center mt-2 ${show ? 'hidden' : 'inline-block'}`}>
                    <button className=' active-btn' onClick={() => setShow(true)}>Show More</button>
                </div>


                <div className={`flex justify-center items-center mt-2 ${show ? 'inline-block' : 'hidden'}`}>
                    <button className=' active-btn' onClick={() => setShow(false)}>Show Less</button>
                </div>

            </div>
        </div>

    );
};

export default Tools;