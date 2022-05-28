import React from 'react';

const DeleteModal = () => {




    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <p className="py-4">Sure To Delete The product</p>
                    <div className="modal-action">
                        <label htmlFor="delete-modal" className="btn">Caceal</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;