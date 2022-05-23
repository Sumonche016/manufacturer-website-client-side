import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#111013]  py-5 text-white'>
            <div className='w-[90%] mx-auto flex justify-between items-center'>
                <div>
                    <p>© 2022 All Rigts Reserved by Sumon Bala </p>
                </div>
                <div>
                    <ul className='flex gap-7 list-disc'>
                        <li>SiteMap</li>
                        <li>Terms of condition</li>
                        <li>Privacy Of policy</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Footer;