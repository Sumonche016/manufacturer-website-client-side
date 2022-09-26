import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
import logo from '../../../image/logo.png'
// import logo from '../../../image/tools-bg-white.png'
// import logo from '../../../image/y-removebg-preview.png'
import hamburger from '../../../image/menu.png'
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa'

const Header = () => {

    const [isopen, setIsopen] = useState(false)

    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const logout = () => {
        signOut(auth);
        navigate('/')
        localStorage.removeItem('accessToken')


    };
    const handleNavigate = () => {
        navigate('/dashboard')
    }

    const menu = <>
        {user ? <>
            <button className='btn btn-ghost font-medium btn-user' onClick={logout}>Sign Out {user?.displayName}</button>
            <li><Link to='/dashboard'>Dashboard</Link></li>

        </> :
            <>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/login'>Log In</Link></li>
            </>
        }
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/portfolio'>MyPortfolio</Link></li>


    </>

    const handleHamburger = () => {
        setIsopen(!isopen)
    }



    return (
        <div className=''>
            <div className='w-full md:w-[85%] mx-auto'>
                <div className="navbar bg-white text-white  font-medium flex sticky top-0 left-0 justify-between">
                    <div className="navbar-start flex  w-full justify-start md:justify-between ">
                        <img onClick={handleHamburger} src={hamburger} className='w-[40px] mr-[10px] md:m-0 cursor-pointer lg:hidden' alt="" />

                        <ul className={`absolute ${isopen ? 'open' : 'close'}  sidebar top-[5rem] md:hidden bg-[#333]`}>
                            <FaTimes onClick={() => setIsopen(false)} className='cursor-pointer absolute top-[1rem] right-[.8rem]' />

                            <div className='mobile-menu p-[20px] text-[14px] uppercase font-medium font-rubik '>
                                {user ? <>
                                    <button className='btn btn-ghost font-medium btn-user' onClick={logout}>Sign Out {user?.displayName}</button>
                                    <li onClick={() => setIsopen(false)} className='mb-[10px] border-top-mobile'><Link to='/dashboard'>Dashboard</Link></li>

                                </> :
                                    <>
                                        <li onClick={() => setIsopen(false)} className='mb-[10px] border-top-mobile'><Link to='/signup'>Sign Up</Link></li>
                                        <li onClick={() => setIsopen(false)} className='mb-[10px] border-top-mobile'><Link to='/login'>Log In</Link></li>
                                    </>
                                }
                                <li onClick={() => setIsopen(false)} className='mb-[10px] border-top-mobile'><Link to='/'>Home</Link></li>
                                <li onClick={() => setIsopen(false)} className='mb-[10px] border-top-mobile'><Link to='/blog'>Blog</Link></li>
                                <li onClick={() => setIsopen(false)} className='mb-[10px] border-top-mobile'><Link to='/portfolio'>MyPortfolio</Link></li>


                            </div>
                        </ul>

                        <div>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className=" font-medium menu menu-horizontal p-0 text-[#282828] ">
                            {menu}
                        </ul>
                    </div>
                    {user && <div onClick={handleNavigate} className="navbar-end lg:hidden">
                        <label htmlFor="my-drawer-2" className="active-btn  drawer-button lg:hidden text-[#282828]">Dashboard</label>
                    </div>}
                </div>
            </div>
            {/* <div className='w-[90%] mx-auto flex justify-between items-center py-[1rem] '>
                <div>
                    <img className='w-[107px] h-[54px]' src={logo} alt="" />

                </div>
                <div className={`text-[17px] hidden md:flex list-none uppercase text-[#1c2880] gap-[3rem] font ${navSwitch ? 'naVopen' : 'navClose'}`}>
                    {menu}
                </div>
                <div className='hidden md:inline-block'>
                    <button className='py-[10px]  px-[30px] font uppercase bg-[#1c2880] text-white'>Registration</button>
                </div>
                <img onClick={() => setNavswitch(!navSwitch)} src={hamburger} className='w-[60px]' alt="" />
            </div> */}
        </div >
    );
};

export default Header;