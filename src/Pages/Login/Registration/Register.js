import React from 'react';
import { useForm } from "react-hook-form";
const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title py-3">Register Here</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" class="input input-bordered input-error w-full max-w-xs"
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Name Is reQuired'
                                    }
                                }
                                )}

                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                            </label>


                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Password</span>
                            </label>
                            <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs"
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
                            <label class="label">
                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            </label>


                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Password</span>

                            </label>
                            <input type="password" placeholder="Your Password" class="input input-bordered w-full max-w-xs"
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
                            <label class="label">
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            </label>
                        </div>




                        <input className='btn btn-primary text-white' type="submit" value='Sign Up' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;