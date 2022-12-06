import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import TableRow from './TableRow';

const MakeAdmin = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://manufacturer-website-server-side-production-0c7a.up.railway.app/users', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>make admin {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <TableRow refetch={refetch} key={index} index={index} user={user}></TableRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;