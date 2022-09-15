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

const Header = () => {

    const [navSwitch, setNavswitch] = useState(false)

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


        {/* {user && } */}
    </>
    return (
        <div className=''>
            <div className='w-[85%] mx-auto'>
                <div className="navbar bg-white text-white  font-medium flex sticky top-0 left-0 justify-between">
                    <div className="navbar-start flex md:flex-row-reverse w-full justify-between ">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <img src={hamburger} className='w-[60px]' alt="" />
                            </label>
                            <ul tabIndex="0" className="font-medium text-[#282828] text-[14px] z-5000000 menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
                                {menu}
                            </ul>
                        </div>
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
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden text-[#282828]">Dashboard</label>
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