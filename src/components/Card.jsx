import React, { useState } from 'react';
import './first.css';
import { Link } from 'react-router-dom';

export default function Card({ title, description, image }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <div className="card">
                <img src={image} alt={title} className="card-image" />
                <h2 className="card-heading">{title}</h2>
                <p className="card-description">{description}</p>
                <button className="card-btn" onClick={openModal}>Learn More</button>
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>{title}</h3>
                            <button className="modal-close" onClick={closeModal}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <p>{description}</p>
                        </div>
                        <div className="modal-actions">
                            <button className="modal-btn" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}