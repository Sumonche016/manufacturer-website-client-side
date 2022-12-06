import React, { useEffect, useRef, useState } from 'react';
import profileImg from '../../image/myprofile.png'
import './myprofile.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Review.css'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading/Loading';
// import { useQuery } from 'react-query';


const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [isloading, setLoading] = useState(false)
    const [profile, setProfile] = useState([])




    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`https://manufacturer-website-server-side-production-0c7a.up.railway.app/profile/${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [isloading])








    const onSubmit = data => {


        const image = data.image[0]

        const formData = new FormData()
        formData.append('image', image);





        const imagebbKey = '4f903613e3812eb596d6cfe75fe8cfc8';
        const url = `https://api.imgbb.com/1/upload?key=${imagebbKey}`;
        setLoading(true)

        // image bb fetch 
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {

                    const img = result.data.url;
                    const profile = {

                        education: data.education,
                        number: data.mobile,
                        linkedin: data.linkedIn,
                        image: img,
                    }
                    console.log(profile)


                    fetch(`https://manufacturer-website-server-side-production-0c7a.up.railway.app/myprofile/${user.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(profile)
                    })
                        .then(res => res.json())
                        .then(signal => {
                            if (signal) {
                                reset()
                                toast.success('updateed')
                                setLoading(false)
                                console.log(profile)

                            }

                        }



                        )


                }
            })



    }
    if (isloading) {
        return <Loading></Loading>
    }

    return (
        <div className='block md:flex justify-around items-center h-screen bg-[#F5F5F5]'>
            <div className='shadow rounded-sm w-full md:w-[30%] profile-card bg-white' >
                <div className='flex justify-center'>
                    <div>
                        <div className='mb-7'>
                            <img src={profile?.image} className='w-[100px] h-[100px]' alt="" />
                            <h1 className=' mt-3 text-[20px] font-sans font-semibold text-secondary'>{user.displayName}</h1>
                        </div>
                    </div>
                </div>
                <ul>
                    <li className='mb-2'><i className="fa-solid fa-envelope mr-2"></i> Email: {user.email}</li>
                    <li className='mb-2'><i className=" mr-2 fa-solid fa-user-graduate"></i> Education: {profile?.education}</li>
                    <li className='mb-2'><i className=" mr-2 fa-brands fa-linkedin"></i>LinkedIn: {profile.linkedin}</li>
                    <li className='mb-2'><i className=" mr-2 fa-solid fa-location-dot"></i> Location: {profile.location}</li>
                    <li className='mb-2'><i className=" mr-2 fa-solid fa-phone-flip"></i>Phone Number: {profile.number}</li>
                </ul>
            </div>


            <div className="card w-full md:w-[40%]   bg-base-100 shadow-xl">
                <div className="card-body  text-left">

                    <h2 className="card-title text-[18px] md:text-[32px] mb-2 font-sans traking-wide text-[#1a191d] text-left">Update Your <span className='text-primary'>Profile</span></h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full ">
                            <label className='mb-1 text-[14px]'>Display Name</label>
                            <input type="text" value={user?.displayName}
                                className=" review-input  w-full mb-1"
                                {...register("name")}

                            />

                        </div>

                        <div className="form-control w-full ">
                            <label className='mb-1 text-[14px]'>Your Email</label>
                            <input type="text" value={user?.email}
                                className=" review-input  w-full mb-1"
                                {...register("email")}

                            />

                        </div>


                        <div className="form-control w-full ">
                            <label className='mb-1 text-[14px]'>Education</label>
                            <input type="text" placeholder="Education"
                                className=" review-input  w-full mb-1"
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: 'Education is Required'
                                    }
                                })}

                            />
                            <label className='label'>
                                {errors?.education?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.education.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full ">
                            <label className='mb-1 text-[14px]'>LinkedIn</label>
                            <input type="text" placeholder="LinkedIn"
                                className=" review-input  w-full mb-1"
                                {...register("linkedIn", {
                                    required: {
                                        value: true,
                                        message: 'LinkedIn is Required'
                                    }
                                })}

                            />
                            <label className='label'>
                                {errors?.linkedin?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.linkedIn.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full ">
                            <label className='mb-1 text-[14px]'>Your Phone</label>
                            <input type="number" placeholder="Phone Number"
                                className=" review-input  w-full mb-1"
                                {...register("mobile", {
                                    required: {
                                        value: true,
                                        message: 'mobile is Required'
                                    }
                                })}

                            />
                            <label className='label'>
                                {errors?.mobile?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.mobile.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <input type="file"
                                className="w-full mb-1  file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image is required"
                                    }

                                })}
                            />
                            <label className='label'>
                                {errors.image?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.image?.message}</span>}
                            </label>
                        </div>
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
