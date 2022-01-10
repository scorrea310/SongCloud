import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupFormPage from '../SignupFormPage';
import "./SignUpFormModal.css"

function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="createAccountButton" onClick={() => setShowModal(true)}>Create Account</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupFormPage />
                </Modal>
            )}
        </>
    );
}

export default SignUpFormModal;
