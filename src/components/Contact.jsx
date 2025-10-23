import './contact.css';

export default () => {
    return(
        <div className="contact_container">
            <h1 className="contact_heading">Contact Us</h1>
            <form className="contact_form" action='/about_us'>
                <label className="contact_label">
                    Name:
                    <input type="text" className="contact_input" />
                </label>
                <label className="contact_label">
                    Email:
                    <input type="email" className="contact_input" />
                </label>
                <label className="contact_label">
                    Message:
                    <textarea className="contact_textarea"></textarea>
                </label>
                <button type="submit" className="contact_button">Send</button>
            </form>
        </div>
    );
}