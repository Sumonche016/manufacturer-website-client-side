import React from 'react';

const DeleteModal = ({ setConfirm }) => {
    const handleConfirm = () => {
        console.log('hii')
        setConfirm(true)
    }

    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label onClick={handleConfirm} htmlFor="delete-modal" className="btn">Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;