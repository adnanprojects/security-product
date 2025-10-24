import { useNavigate,Routes, Route} from "react-router-dom";
import UserDashboard from "./AdminDashboard";
import AllUsers from "./AllUsers";
import CreateUser from "./CreateUser";

export default () => {
    const navigate = useNavigate();
    return (
        <div className="user-container">
            <div className="side-items">
                <div className="side-item" onClick={() => navigate('/admin/dashboard')} >Dashboard</div>
                <div className="side-item" onClick={() => navigate('/admin/all_users')}>All Users</div>
                <div className="side-item" onClick={() => navigate('/admin/create_user')}>Create User</div>
            </div>
            <div className="user-main">
                <Routes>
                    <Route path="dashboard" element={<UserDashboard />} />
                    <Route path="all_users" element={<AllUsers />} />
                    <Route path="create_user" element={<CreateUser />} />
                </Routes>
            </div>
        </div>
    );
}