import React, { useEffect, useRef, useState } from 'react';
import profileImg from '../../image/myprofile.png'
import './myprofile.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Review.css'
import { toast } from 'react-toastify';
// import { useQuery } from 'react-query';


const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [loading, setLoading] = useState(false)
    const [profile, setProfile] = useState([])

    useEffect(() => {
        fetch(`https://fast-forest-54973.herokuapp.com/profile/${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [loading])




    const educationRef = useRef()
    const linkedInRef = useRef()
    const locationRef = useRef()
    const phoneRef = useRef()


    const handleReview = (e) => {
        e.preventDefault()

        const study = educationRef.current.value;
        const linkedin = linkedInRef.current.value;
        const location = locationRef.current.value;
        const phone = phoneRef.current.value;

        const profile = {
            userName: user?.displayName,
            email: user?.email,
            education: study,
            phoneNumber: phone,
            linkedin: linkedin,
            location: location
        }
        fetch(`https://fast-forest-54973.herokuapp.com/myprofile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged == true) {
                    setLoading(true)
                    toast('Sucessfully Update')
                    educationRef.current.value = ''
                    linkedInRef.current.value = ''
                    locationRef.current.value = ''
                    phoneRef.current.value = ''
                }
            })

    }

    return (
        <div className='block md:flex justify-around items-center h-screen bg-[#F5F5F5]'>
            <div className='shadow rounded-sm w-full md:w-[30%] profile-card bg-white' >
                <div className='flex justify-center'>
                    <div>
                        <div className='mb-7'>
                            <img src={profileImg} className='w-[100px] h-[100px]' alt="" />
                            <h1 className=' mt-3 text-[20px] font-sans font-semibold text-secondary'>{user.displayName}</h1>
                        </div>
                    </div>
                </div>
                <ul>
                    <li className='mb-2'><i className="fa-solid fa-envelope mr-2"></i> Email: {user.email}</li>
                    <li className='mb-2'><i className=" mr-2 fa-solid fa-user-graduate"></i> Education: {profile?.education}</li>
                    <li className='mb-2'><i className=" mr-2 fa-brands fa-linkedin"></i>LinkedIn: {profile.linkedin}</li>
                    <li className='mb-2'><i className=" mr-2 fa-solid fa-location-dot"></i> Location: {profile.location}</li>
                    <li className='mb-2'><i className=" mr-2 fa-solid fa-phone-flip"></i>Phone Number: {profile.phoneNumber}</li>
                </ul>
            </div>


            <div className="card w-full md:w-[40%]   bg-base-100 shadow-xl">
                <div className="card-body  text-left">

                    <h2 className="card-title text-[20px] md:text-[32px] font-sans traking-wide text-[#1a191d] text-left">Update Your <span className='text-primary'>Profile</span></h2>
                    <p className='text-[17px] text-[#666666] my-3'>Fill the input field to update your information . Thank You stay with us</p>

                    <form action="" onSubmit={handleReview}>
                        <input type="text" disabled value={user?.displayName} className="mb-4 review-input  w-full " />
                        <input type="text" disabled value={user?.email} className="mb-4 review-input  w-full " />
                        <input ref={educationRef} type="text" required placeholder='Education' className="review-input mb-4  w-full " />
                        <input ref={locationRef} type="text" required placeholder='Your Location' className="review-input mb-4  w-full " />
                        <input ref={linkedInRef} type="text" required placeholder='LinkedIn' className="review-input mb-4  w-full " />
                        <input ref={phoneRef} type="number" required placeholder='Phone Number' className="review-input mb-4  w-full " />

                        <div className="card-actions">
                            <button type='submit' className="btn btn-primary text-left w-full text-white btn-send mt-5">Update</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;
