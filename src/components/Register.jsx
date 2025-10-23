import { useNavigate } from "react-router-dom";

export default () => { 

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    return(
        <div className="contact_container">
            <h1 className="contact_heading">Register</h1>
            <form className="contact_form" onSubmit={onSubmit} id="register">
                <label className="contact_label">
                    Name:
                    <input type="text" className="contact_input" />
                </label>
                <label className="contact_label">
                    Email:
                    <input type="email" className="contact_input" />
                </label>
                <label className="contact_label">
                    Password:
                    <input type="password" className="contact_input" />
                </label>
                <select name="profile" className="contact_input contact_label">
                    <option value="user">User</option>
                    <option value="product_admin">Product Admin</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit" className="contact_button">Sign Up</button>
            </form>
        </div>
    );
}