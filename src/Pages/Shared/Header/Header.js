import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const logout = () => {
        signOut(auth);
        navigate('/')
        localStorage.removeItem('accessToken')


    };


    const menu = <>
        {user ? <>
            <button className='btn btn-ghost' onClick={logout}>Sign Out {user?.displayName}</button>

        </> :
            <>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/login'>Log In</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
            </>
        }
        <li><Link to='/'>Home</Link></li>
        <li><a>About</a></li>

        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
    </>
    return (
        <div className=''>
            <div className="navbar bg-[#111013] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>

                </div>
            </div>
        </div >
    );
};

export default Header;