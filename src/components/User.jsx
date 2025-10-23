import './user.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import UserProducts from './UserProducts';
import UserQueries from './UserQueries';

export default () => {
    const navigate = useNavigate();
    return (
        <div className="user-container">
            <div className="side-items">
                <div className="side-item" onClick={() => navigate('/user/dashboard')}>Dashboard</div>
                <div className="side-item" onClick={() => navigate('/user/products')}>Products</div>
                <div className="side-item" onClick={() => navigate('/user/queries')}>Queries</div>
            </div>
            <div className="user-main">
                <Routes>
                    <Route path="dashboard" element={<UserDashboard />} />
                    <Route path="products" element={<UserProducts />} />
                    <Route path="queries" element={<UserQueries />} />
                </Routes>
            </div>
        </div>
    );
}