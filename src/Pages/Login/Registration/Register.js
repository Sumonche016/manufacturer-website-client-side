import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import google from '../../../image/google.png'


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    //   hook form 
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })

    };

    if (user || guser) {
        navigate('/')
    }

    if (loading || gloading) {
        return <Loading></Loading>
    }
    //hook form end


    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title py-3">Register Here</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered input-error w-full max-w-xs"
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Name Is reQuired'
                                    }
                                }
                                )}

                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                            </label>


                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered input-error w-full max-w-xs"
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'email Is reQuired'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                }
                                )}

                            />
                            <label className="label">
                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            </label>


                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Password</span>

                            </label>
                            <input type="password" placeholder="Your Password" className="input input-bordered input-error w-full max-w-xs"
                                {...register('password', {
                                    minLength: {
                                        value: 6,
                                        message: 'Password should be 6 charecters'
                                    },
                                    required: {
                                        value: true,
                                        message: 'Password Is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            </label>
                        </div>


                        {error && <span className='text-red-500'>{error?.message}</span>}
                        <input className='btn w-full btn-primary text-white' type="submit" value='Sign Up' />
                    </form>
                    {gerror && <span className='text-red-500'>{gerror?.message}</span>}
                    <div className=' shadow-md text-secondary flex justify-center items-center mt-5'>


                        <div className='flex  items-center cursor-pointer' onClick={() => signInWithGoogle()}>
                            <img className='w-[60px] h-[60px]' src={google} alt="" />
                            <h1 className=' font-semibold'>Sign In With Google</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;