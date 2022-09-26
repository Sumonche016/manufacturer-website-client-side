import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [isLoading, setLoading] = useState(false)




    const imagebbKey = '4f903613e3812eb596d6cfe75fe8cfc8';

    const onSubmit = async data => {

        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imagebbKey}`;
        setLoading(true)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {

                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        description: data.description,
                        price: data.Price,
                        minimum: data.minimum,
                        img: img,
                        available: data.available,
                        category: data.category
                    }

                    // send data 

                    fetch('https://fast-forest-54973.herokuapp.com/addproduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(add => {
                            if (add) {
                                toast('add data successfully')
                                reset()
                            } else {
                                toast.error('failed')
                            }
                        })

                }
                setLoading(false)
            }

            )

    };
    
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-[#F5F5F5] flex justify-center items-center h-screen'>
            <div className='shadow w-[100%]  md:w-[50%] bg-white card'>
                <div className='card-body'>
                    <h2 className="card-title text-[30px] mb-4 font-sans traking-wide text-[#1a191d] text-left">Add <span className='text-primary'>Product</span></h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full ">
                            <label className='mb-1 text-[14px]'>Product Name</label>
                            <input type="text" placeholder="Name"
                                className=" review-input  w-full mb-1"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}

                            />
                            <label className='label'>
                                {errors?.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                            </label>
                        </div>



                        <div className="form-control w-full">
                            <label className='mb-1 text-[14px]'>Product Description</label>

                            <input type="text" placeholder="description"
                                className=" review-input  w-full mb-1"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    }
                                })}

                            />

                            <label className='label'>
                                {errors?.description?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.description.message}</span>}
                            </label>
                        </div>













                        <div className="form-control w-full ">
                            <label className='mb-1 text-[14px]'>Minimum Order</label>

                            <input type="number" placeholder="Minimum Order"
                                className=" review-input  w-full mb-1"
                                {...register("minimum", {
                                    required: {
                                        value: true,
                                        message: "Number is required"
                                    }

                                })}
                            />

                            <label className='label'>
                                {errors.minimum?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.minimum.message}</span>}
                            </label>
                        </div>



                        <div className="form-control w-full ">
                            <label className='mb-1 text-[14px]'>Category</label>

                            <select className=" review-input  w-full mb-1" {...register("category", {
                                required: {
                                    value: true,
                                    message: "category is required"
                                }
                            })}>
                                <option value="replacement">Replacement Parts</option>
                                <option value="new">New Arriaval</option>
                                <option value="smart">Smart Devices</option>
                            </select>

                            <label className='label'>
                                {errors.category?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.category.message}</span>}
                            </label>
                        </div>



                        {/* <div className="form-control w-full ">
                        <label className='mb-1 text-[14px]'>Minimum Order</label>

                            <input type="number" placeholder="Available"
                                className=" review-input  w-full mb-1"
                                {...register("available", {
                                    required: {
                                        value: true,
                                        message: "available is required"
                                    }

                                })}
                            />

                            <label className='label'>
                                {errors.available?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.available.message}</span>}
                            </label>
                        </div> */}



                        <div className="form-control w-full">
                            <label className='mb-1 text-[14px]'>Price</label>

                            <input type="number" placeholder="Price $"
                                className=" review-input  w-full mb-1"
                                {...register("Price", {
                                    required: {
                                        value: true,
                                        message: "Price is required"
                                    }

                                })}
                            />
                            <label className='label'>
                                {errors.price?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.price?.message}</span>}
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
                                        message: "Price is required"
                                    }

                                })}
                            />
                            <label className='label'>
                                {errors.iamge?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.image?.message}</span>}
                            </label>
                        </div>









                        <input className='btn mt-2 text-white w-full btn-secondary rounded-none' type="submit" value='Add Product' />

                    </form>
                </div>

            </div>

        </div>
    );
};

export default AddProduct;