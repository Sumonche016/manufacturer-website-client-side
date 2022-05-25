import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* <h1 className='text-3xl'>Dashboard </h1> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li> <Link to='/dashboard'>My Orders</Link> </li>
                        <li> <Link to='/dashboard/review'>Review</Link> </li>
                        <li> <Link to='/dashboard/profile'>MY Profile</Link> </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;