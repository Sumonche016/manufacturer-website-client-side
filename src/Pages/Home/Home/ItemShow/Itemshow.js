import React from 'react';
import Select from 'react-select';
import { Link, Outlet, NavLink, useNavigate } from 'react-router-dom';
import './Itemshow.css'
import { useState } from 'react';

const Itemshow = () => {
    const navigate = useNavigate()


    const options = [
        { value: 'replacement', label: 'REPLACEMENT PARTS' },
        { value: 'smart', label: 'Smart Devices' },
        { value: 'newarriave', label: 'New Arriavlas' },
    ];

    const handleChange = selectOption => {


        if (selectOption.value == 'smart') {
            navigate('/tools/smartdevices')
        } else if (selectOption.value == 'newarriave') {
            navigate('/tools/newarriaval')
        } else {
            navigate('/')

        }
    }


    return (
        <div className='py-10'>
            <div className='flex justify-center items-center mb-4'>
                <div className='text-center'>
                    <h1 className='uppercase text-secondary text-[14px] top-sell'>Top sell in the week</h1>
                    <h1 className=' best-sell relative'>Best Sellers</h1>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <nav className='md:flex gap-4 list-none hidden'>
                    <NavLink to='/' className='normal-link-btn'>
                        <li>REPLACEMENT PARTS</li>
                    </NavLink>

                    <NavLink to='tools/smartdevices' className='normal-link-btn'>
                        <li>Smart Devices</li>
                    </NavLink>

                    <NavLink to='tools/newarriaval' className='normal-link-btn'>
                        <li>New Arriavals</li>
                    </NavLink>
                </nav>


                <Select onChange={handleChange}
                    options={options} className='lg:hidden'  ></Select>


            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default Itemshow;