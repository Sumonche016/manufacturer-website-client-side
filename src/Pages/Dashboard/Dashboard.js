import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <h1 className='text-3xl'>Dashboard </h1>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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