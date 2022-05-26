import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DeleteModal from './DeleteModal';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
    const [Loading, setLoading] = useState([])
    const [orders, setOrders] = useState([])
    const [confirm, setConfirm] = useState(false)


    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5000/myorder?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setOrders(data)
                }
            })
    }, [Loading])

    const handleDelete = (id) => {
        // const confirm = window.confirm('sure to dekete')
        if (confirm) {
            const url = `http://localhost:5000/myorder/${id}`

            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    toast('Deleted')
                    setLoading(!Loading)

                })
        }

    }
    const handleNavigate = () => {
        navigate('/payment')
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                                <td>{order?.productName}
                                    <button onClick={handleNavigate} className=' ml-2 btn btn-primary text-white btn-xs'>Payment</button>
                                </td>


                                <td>
                                    {order?.orderQuantity}

                                    <label onClick={() => handleDelete(order._id)} for="delete-modal" class=" ml-2 btn btn-primary text-white btn-xs">Delete</label>

                                    {/* <button onClick={() => handleDelete(order._id)} className=' ml-2 btn btn-primary text-white btn-xs'>Delete</button> */}
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>


                <DeleteModal setConfirm={setConfirm}></DeleteModal>
            </div>
        </div>
    );
};

export default MyOrders;