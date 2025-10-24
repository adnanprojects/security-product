import { useNavigate, Routes, Route} from "react-router-dom";
import ProductAdminDashboard from "./ProductAdminDashboard";
import AddProduct from "./AddProduct";
import QueryHandling from "./QueryHandling";

export default () => {
    const navigate = useNavigate();
        return (
            <div className="user-container">
                <div className="side-items">
                    <div className="side-item" onClick={() => navigate('/product_admin/dashboard')} >Dashboard</div>
                    <div className="side-item" onClick={() => navigate('/product_admin/add_product')}>Add Product</div>
                    <div className="side-item" onClick={() => navigate('/product_admin/query_handling')}> Queries </div>
                </div>
                <div className="user-main">
                    <Routes>
                        <Route path="dashboard" element={<ProductAdminDashboard />} />
                        <Route path="add_product" element={<AddProduct />} />
                        <Route path="query_handling" element={<QueryHandling />} />
                    </Routes>
                </div>
            </div>
        );
}