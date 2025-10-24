import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import './contact.css';

export default () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [profile, setProfile] = useState("user");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const selectedProfile = e.target.value;
        setProfile(selectedProfile);
        // Pre-fill email based on selection
        setEmail(getDefaultEmail(selectedProfile));
        setPassword(""); // Reset password when profile changes
        setError(""); // Clear any previous errors
    };

    const getDefaultEmail = (profileType) => {
        switch(profileType) {
            case 'user': return 'user@example.com';
            case 'product_admin': return 'product@example.com';
            case 'admin': return 'admin@example.com';
            default: return '';
        }
    };

    const getDefaultPassword = (profileType) => {
        switch(profileType) {
            case 'user': return 'user123';
            case 'product_admin': return 'product123';
            case 'admin': return 'admin123';
            default: return '';
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            setError("Please enter email and password");
            return;
        }
        
        const result = login(email, password, profile);
        if (result.success) {
            navigate(`/${profile}`);
        } else {
            setError(result.error);
        }
    };

    return (
        <div className="contact_container">
            <h1 className="contact_heading">Login</h1>
            
            <div className="credentials-info">
                <h3>Demo Credentials:</h3>
                <p><strong>User:</strong> user@example.com / user123</p>
                <p><strong>Product Admin:</strong> product@example.com / product123</p>
                <p><strong>Admin:</strong> admin@example.com / admin123</p>
            </div>

            {error && <div className="error-message">{error}</div>}
            
            <form className="contact_form" onSubmit={onSubmit} id="login">
                <select 
                    name="profile" 
                    className="contact_input contact_label" 
                    onChange={handleChange}
                    value={profile}
                >
                    <option value="user">User</option>
                    <option value="product_admin">Product Admin</option>
                    <option value="admin">Admin</option>
                </select>
                
                <label className="contact_label">
                    Email:
                    <input 
                        type="email" 
                        className="contact_input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={getDefaultEmail(profile)}
                        required 
                    />
                </label>
                <label className="contact_label">
                    Password:
                    <input 
                        type="password" 
                        className="contact_input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                    <small className="password-hint">Default: {getDefaultPassword(profile)}</small>
                </label>
                <button type="submit" className="contact_button">Login</button>
            </form>
        </div>
    );
}