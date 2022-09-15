import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Modal = ({ tool, setModal, refetch }) => {

    const [user] = useAuthState(auth)

    const [quantity, setQuantity] = useState([])
    const navigate = useNavigate()

    const { _id, minimum, available } = tool

    // console.log()
    // console.log(name)
    // console.log(tool)




    const usernameRef = useRef()
    const emailRef = useRef()
    const numberRef = useRef()
    const addressRef = useRef()
    const quantityRef = useRef()
    const productnameRef = useRef()
    const productpriceRef = useRef()


    const handleOrder = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const name = usernameRef.current.value;
        const productname = productnameRef.current.value;
        const number = numberRef.current.value;
        const quantity = quantityRef.current.value;
        const address = quantityRef.current.value;
        const productPrice = productpriceRef.current.value;

        const myOrder = {
            orderId: _id,
            email: email,
            phoneNumber: number,
            orderQuantity: quantity,
            userName: name,
            productName: productname,
            address: address,
            price: productPrice


        }

        fetch('https://fast-forest-54973.herokuapp.com/myorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged == true) {

                    toast('Your Order Placed Sucessfully')
                    setModal(null)
                    navigate('/')

                }
            })

    }

    const parseMinimum = parseInt(tool?.minimum)
    const parseAvail = parseInt(tool?.available)

    const condition = quantity > parseAvail || quantity < parseMinimum;



    const handleQuantity = e => {
        const inputValue = e.target.value
        const parseValue = parseInt(inputValue)
        setQuantity(parseValue)
    }


    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleOrder}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" ref={usernameRef} disabled value={user?.displayName} className="input input-bordered input-error w-full " />
                        </div>


                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" ref={productnameRef} disabled value={tool?.name} className="input input-bordered input-error w-full " />
                        </div>


                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">price</span>
                            </label>
                            <input type="text" ref={productpriceRef} disabled value={tool?.price} className="input input-bordered input-error w-full " />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" ref={emailRef} disabled value={user?.email} className="input input-bordered input-error w-full " />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input required type="number" ref={numberRef} placeholder="Your Phone Number" className="input input-bordered input-error w-full " />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Adress</span>
                            </label>
                            <input required type="text" ref={addressRef} placeholder="Adress" className="input input-bordered input-error w-full " />
                        </div>



                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input required onChange={handleQuantity} min={tool?.minimum} max={tool?.available} type="number" ref={quantityRef} placeholder="Quantity" className="input input-bordered input-error w-full " />
                        </div>

                        {condition && <p className='text-red-500'>Your quantity should {tool?.minimum} to {tool?.available}</p>}

                        <input disabled={condition} className='btn w-full btn-primary mt-5 text-white' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;