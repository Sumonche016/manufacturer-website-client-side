import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../../../image/google.png'
import useToken from '../../../../Hooks/useToken'

import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [token] = useToken(user || guser)

    const navigate = useNavigate()
    //   hook form 
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };


    // require auth 
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }

    if (loading || gloading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex justify-center items-center h-screen pt-12'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title py-3">Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.exampleRequired && <span>This field is required</span>}


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">First Name *</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered input-error w-full max-w-xs"
                                {...register('firstName', {
                                    required: {
                                        value: true,
                                        message: 'email Is reQuired'
                                    }

                                }
                                )}

                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.firstName.message}</span>}
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

export default Login;