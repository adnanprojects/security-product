import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState("user");

    const handleChange = (e) => {
        setProfile(e.target.value);
    }

    const onSubmit = () => {
        // console.log("Form submitted with profile:", profile);
        navigate(`/${profile}`);
    }

    return (
        <div className="contact_container">
            <h1 className="contact_heading">Login</h1>
            <form className="contact_form"  onSubmit={() => onSubmit()}  id="login">
                <label className="contact_label">
                    Email:
                    <input type="email" className="contact_input" />
                </label>
                <label className="contact_label">
                    Password:
                    <input type="password" className="contact_input" />
                </label>
                <select name="profile" className="contact_input contact_label" onChange={handleChange}>
                    <option value="user">User</option>
                    <option value="product_admin">Product Admin</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit" className="contact_button" >Login</button>
            </form>
        </div>
    );
}