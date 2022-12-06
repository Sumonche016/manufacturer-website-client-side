import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Loading from '../../Shared/Loading/Loading';
import CheckOutForm from './CheckOutForm';



const stripePromise = loadStripe('pk_test_51L4kzeDd6detVU1eVEAsTYYuIjEkM1Cf590OWIWowIk1qbBy7mJGcRYtrCDxJtIFkGQ7RLpZTgAWpOAq7WbA4Bq200EdEZW5up');


const Payment = () => {
    const { id } = useParams()

    const { data, isLoading } = useQuery(['users', id], () => fetch(`https://manufacturer-website-server-side-production-0c7a.up.railway.app/payment/${id}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    // console.log(data)
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='block md:flex justify-around items-center h-screen'>

            <div className="card w-96 bg-base-100 shadow-xl text-center">
                <div className="card-body">
                    <h2 className="card-title text-center block">Product Name :{data?.productName}</h2>
                    <h2 className="card-title text-center block">Quantity {data?.orderQuantity}</h2>
                    <h2 className="card-title text-center block">Price:{data?.price} $</h2>

                </div>

            </div>
            <div class="card w-96 bg-base-100 shadow-xl mt-5 md:mt-0">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm data={data} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;