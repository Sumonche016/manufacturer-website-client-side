import React from 'react';
import './Allreview.css'

const SingleReview = ({ review }) => {
    const { userName, rating, description } = review;
    console.log(review)
    return (
        <div className="col-md-4 text-center testi-box">
            <div className='flex justify-center'>
                <img className='image-testi' src="profile.png" alt="" />
            </div>
            <div className="star mt-3">
                {rating == 1 ?
                    <i className="fas fa-star text-primary"></i>
                    : ''}
            </div>
            <div className="star mt-3">
                {rating == 2 ?
                    <>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                    </>
                    : ''}
            </div>
            <div className="star mt-3">
                {rating == 3 ?
                    <>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                    </>
                    : ''}
            </div>
            <div className="star mt-3">
                {rating == 4 ?
                    <>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                    </>
                    : ''}
            </div>
            <div className="star mt-3">
                {rating == 5 ?
                    <>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                    </>
                    : ''}
            </div>

            <div>
                <p className='testi-des'>
                    {description}
                </p>
            </div>

            <div>
                <h5 className='client-name'>{userName}</h5>
                <p className='happy'>Happy Customer</p>
            </div>

        </div>
    );
};

export default SingleReview;