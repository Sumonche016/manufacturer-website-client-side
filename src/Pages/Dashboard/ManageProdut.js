import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const ManageProdut = () => {
    const { data: product, refetch } = useQuery('alldata', () => fetch('https://manufacturer-website-server-side-production-0c7a.up.railway.app/product').then(res => res.json()))
    console.log(product)


    const handleDelte = (id) => {
        const confirm = window.confirm;
        if (confirm) {
            fetch(`https://manufacturer-website-server-side-production-0c7a.up.railway.app/product/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.acknowledged === true) {
                        toast.success('deleted succesfully')
                        refetch()
                    }

                })
        }
    }

    return (
        <div>
            <h2 className="card-title text-[20px] md:text-[32px] py-7 block text-center font-sans traking-wide text-[#1a191d] ">WellCome To  <span className='text-primary'>Delete Product</span></h2>

            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Minimum Order</th>
                                <th>Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product?.map((tool, index) => <tr key={tool._id}>
                                    <th>{index + 1}</th>
                                    <td>{tool.name}</td>
                                    <td>{tool.minimum}</td>
                                    <td>{tool.available} <button onClick={() => handleDelte(tool._id)} class=" ml-3 btn btn-primary text-white btn-xs">Delete</button></td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProdut;