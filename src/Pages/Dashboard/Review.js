import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './Review.css'

const Review = () => {
    const [user] = useAuthState(auth)


    const userRef = useRef()
    const ratingRef = useRef()
    const desRef = useRef()

    const handleReview = (e) => {
        e.preventDefault()
        const userName = userRef.current.value;
        const rating = ratingRef.current.value;
        const description = desRef.current.value;
        const review = {
            userName: userName,
            rating: rating,
            description: description
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged == true) {

                    toast('Sucessfully Send Your Review')
                }
            })

    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-[50%]   bg-base-100 shadow-xl">
                <div class="card-body  text-left">

                    <h2 class="card-title text-[40px] font-sans traking-wide text-[#1a191d] text-left">Add Your <span className='text-primary'>Review</span></h2>
                    <p className='text-[17px] text-[#666666] my-3'>Proin lacinia lacus ligula, id luctus sapien ornare ut. Nunc efficitur tellus finibus nulla elementum, eget vehicula felis iaculis.</p>

                    <form action="" onSubmit={handleReview}>
                        <input ref={userRef} type="text" disabled value={user?.displayName} class="mb-4 review-input  w-full " />
                        <input ref={ratingRef} type="number" required min={1} max={5} placeholder='Rating 1 to 5' class="review-input mb-4  w-full " />
                        <textarea ref={desRef} required name="" id="" className='review-textarea h-[150px] w-[100%]' placeholder='Tell Me about Us & product ' ></textarea>

                        <div class="card-actions">
                            <button type='submit' class="btn btn-primary text-left text-white btn-send mt-3">Send Now</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Review;