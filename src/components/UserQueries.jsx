import React, { useState } from 'react';
import './user.css';

export default () => {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [queries, setQueries] = useState([
        { id: 1, title: 'Alfreds Futterkiste', description: 'Maria Anders', status: 'Resolved' },
        { id: 2, title: 'Berglunds snabbköp', description: 'Christina Berglund', status: 'Pending' },
        { id: 3, title: 'Centro comercial Moctezuma', description: 'Francisco Chang', status: 'Resolved' },
        { id: 4, title: 'Ernst Handel', description: 'Roland Mendel', status: 'Resolved' },
        { id: 5, title: 'Island Trading', description: 'Helen Bennett', status: 'Resolved' },
        { id: 6, title: 'Königlich Essen', description: 'Philip Cramer', status: 'Resolved' },
        { id: 7, title: 'Laughing Bacchus Winecellars', description: 'Yoshi Tannamuri', status: 'Resolved' },
        { id: 8, title: 'Magazzini Alimentari Riuniti', description: 'Giovanni Rovelli', status: 'Pending' },
        { id: 9, title: 'North/South', description: 'Simon Crowther', status: 'Pending' },
        { id: 10, title: 'Paris spécialités', description: 'Marie Bertrand', status: 'Resolved' }
    ]);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;
        const next = { id: Date.now(), title: title.trim(), description: description.trim(), status: 'Pending' };
        setQueries(prev => [next, ...prev]);
        setTitle('');
        setDescription('');
        setShowModal(false);
    }

    return (
        <div className="user-dash">
            <h2 className='greet'>Welcome, User!</h2>

            <div className='query-btn' onClick={openModal}>Raise Query</div>

            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Raise Query</h3>
                            <button className="modal-close" onClick={closeModal}>&times;</button>
                        </div>
                        <form className="modal-body" onSubmit={handleSubmit}>
                            <label className="modal-label">Title</label>
                            <input className="modal-input" value={title} onChange={e => setTitle(e.target.value)} />
                            <label className="modal-label">Description</label>
                            <textarea className="modal-textarea" value={description} onChange={e => setDescription(e.target.value)} />
                            <div className="modal-actions">
                                <button type="button" className="modal-btn" onClick={closeModal}>Cancel</button>
                                <button type="submit" className="modal-btn primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <h3 className='heading'>Your Queries</h3>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Query Title</th>
                        <th>Description</th>
                        <th>Status </th>
                    </tr>
                </thead>
                <tbody>
                    {queries.map(q => (
                        <tr key={q.id}>
                            <td>{q.title}</td>
                            <td>{q.description}</td>
                            <td>{q.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}