import React from 'react';

const GetTouch = () => {
    return (
        <div className='bg-[#F5F5F5] py-10'>
            <div className=" w-full md:w-[50%] mx-auto   bg-white shadow-touch ">
                <div className="  text-center p-[40px]">

                    <h2 className="card-title text-[20px] md:text-[32px] font-sans traking-wide text-[#1a191d] text-center block">Get In Touch</h2>
                    <p className='text-[17px] text-[#666666] my-3'>Fill all information details to  consult with us to get sevices from us</p>

                    <form action="">
                        <input type="text" placeholder='Your Name *' className="mb-4 review-input  w-full " />
                        <input type="text" placeholder='Your Email' className="mb-4 review-input  w-full " />
                        <input type="text" placeholder='Education' className="review-input mb-4  w-full " />
                        <input type="text" placeholder='Your Location' className="review-input mb-4  w-full " />
                        <textarea name="" id="" className='review-textarea h-[150px] w-[100%]' placeholder='Tell Me about Us & product ' ></textarea>

                        <div className="card-actions">
                            <button type='submit' className="btn btn-primary text-left w-full text-white btn-send mt-5">Send Question</button>
                        </div>
                    </form>

                </div>
            </div>
        </div >
    );
};

export default GetTouch;