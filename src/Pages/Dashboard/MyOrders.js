// import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import DeleteModal from './DeleteModal';
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';

const MyOrders = () => {

    const [user] = useAuthState(auth)

    const navigate = useNavigate()


    const { data: orders, isLoading, refetch } = useQuery('order', () => fetch(`http://localhost:5000/myorder?email=${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken')
                navigate('/')
            }
            return res.json()
        }))



    const handleDelete = () => {

        const url = `http://localhost:5000/myorder?email=${user?.email}`
        const confirm = window.confirm('sure to delete')

        if (confirm) {
            fetch(url, {
                method: "DELETE",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(deleteData => {
                    toast('deleted')
                    refetch()
                })
        }

    }




    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-[90%] md:w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>ProductName</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>
                                    {order?.userName}
                                </td>
                                <td>
                                    {order?.transactionId &&
                                        <button className='disabled ml-2 btn btn-primary text-white btn-xs'>{order.transactionId}</button>
                                    }
                                    {order?.productName}
                                    {!order.paid &&
                                        <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className=' ml-2 btn btn-primary text-white btn-xs'>Pay</button>
                                        </Link>

                                    }
                                </td>

                                <td>
                                    {order?.orderQuantity}
                                    <button for="delete-modal" onClick={() => handleDelete()} className=' ml-2 btn btn-primary text-white btn-xs'>Delete</button>
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>

                {/* {confirm && <DeleteModal setConfirm={setConfirm}></DeleteModal>
                } */}
            </div>
        </div>
    );
};

export default MyOrders;