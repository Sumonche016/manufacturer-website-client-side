import React from 'react';
import { toast } from 'react-toastify';

const TableRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {

                if (res.status === 403) {
                    toast.error('failed to make an admin')
                }

                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('successfully make an admin')
                    refetch()
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {
                    role !== 'admin' && <button onClick={makeAdmin} className=' ml-2 btn btn-primary text-white btn-xs'>Make Admin</button>

                }
            </td>
            <td>
                <button className=' ml-2 btn btn-primary text-white btn-xs'>Remove User</button>
            </td>
        </tr>
    );
};

export default TableRow;