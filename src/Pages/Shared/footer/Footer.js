
import { Link } from 'react-router-dom';
import "./Footer.css"
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import logo from '../../../image/logo.png'
const Footer = () => {


  return (

    <div className='bg-[#fff] dark:bg-[#0F172A] py-10'>
      <footer className="w-[80%]  md:max-w-[1349px] mx-auto flex flex-col md:flex-row  md:gap-20 gap-10">
        <div className='md:w-[25%] w-full'>
          <img src={logo} alt="" />
          <p className='inline-block text-[#747794]  mt-4'>Recruithub is growing hiring agency .
            Its working all over the world . There have over 10k recruiter</p>

          <div className='flex text-white mt-4'>
            <div className='bg-[#f5f5ff] w-[40px] h-[40px] mr-3 flex justify-center items-center'>
              <FaFacebookF className='cursor-pointer text-[#007bff]' />
            </div>
            <div className='bg-[#f5f5ff] w-[40px] h-[40px] mr-3 flex justify-center items-center'>
              <AiOutlineTwitter className='cursor-pointer text-[#007bff]' />
            </div>
            <div className='bg-[#f5f5ff] w-[40px] h-[40px] mr-3 flex justify-center items-center'>
              <AiOutlineInstagram className='cursor-pointer text-[#007bff]' />
            </div>
            <div className='bg-[#f5f5ff] w-[40px] h-[40px] mr-3 flex justify-center items-center'>
              <GrLinkedinOption className='cursor-pointer text-[#007bff]' />
            </div>
          </div>
        </div>

        <div className='md:w-[75%] w-full flex flex-col md:flex-row justify-between'>
          <div className=' mt-2 md:mt-0'>
            <h1 className='font-semibold text-xl'>Services</h1>
            <ul className='mt-2 md:mt-4 text-[#747794]'>
              <li>Home</li>
              <li>About</li>
              <li>Developer</li>
              <li>Hire</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className=' mt-2 md:mt-0'>
            <h1 className=" text-xl font-semibold">Useful Links</h1>
            <ul className='mt-2 md:mt-4 text-[#747794]'>
              <li>Home</li>
              <li>About</li>
              <li>Developer</li>
              <li>Hire</li>
              <li>Contact Us</li>
            </ul>

          </div>
          <div className=' text-[14px] mt-2 md:mt-0'>
            <h1 className=" text-xl font-semibold ">Adress</h1>
            <p className='mt-4 text-[#747794]'>101, park street  <br /> Das sps idf, <br /> uk london</p>
          </div>
        </div>

      </footer>

    </div >
  );
};

export default Footer;