import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../../firebase.init';
import { toast } from 'react-toastify';
import { parse } from 'postcss';
const Modal = ({ tool, setModal }) => {

    const [user] = useAuthState(auth)

    const [quantity, setQuantity] = useState([])


    const { minimum, available, _id } = tool
    const parseMinimum = parseInt(minimum)
    const parseAvail = parseInt(available)



    const nameRef = useRef()
    const emailRef = useRef()
    const numberRef = useRef()
    const addressRef = useRef()
    const quantityRef = useRef()
    const handleOrder = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const number = numberRef.current.value;
        const quantity = quantityRef.current.value;
        const address = quantityRef.current.value;

        const myOrder = {
            orderId: _id,
            email: email,
            phoneNumber: number,
            orderQuantity: quantity,
            userName: name,
            address: address


        }

        fetch('http://localhost:5000/myorder', {
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
                    setModal(false)

                }
            })

    }

    const condition = quantity > parseAvail || quantity < minimum;


    const handleQuantity = e => {
        const inputValue = e.target.value
        const parseValue = parseInt(inputValue)
        setQuantity(parseValue)
    }


    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleOrder}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" ref={nameRef} disabled value={user?.displayName} className="input input-bordered input-error w-full " />
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
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input required type="text" ref={addressRef} placeholder="Adress" className="input input-bordered input-error w-full " />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input defaultValue={minimum} required onChange={handleQuantity} min={minimum} max={available} type="number" ref={quantityRef} placeholder="Quantity" className="input input-bordered input-error w-full " />
                        </div>
                        {condition && <p className='text-red-500'>Your quantity should {minimum} to {available}</p>}
                        <input disabled={condition} className='btn w-full btn-primary mt-5 text-white' type="submit" value='Sign Up' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;