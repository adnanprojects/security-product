export default () => {
    return(
        <div className="contact_container">
            <h1 className="contact_heading">Add New Product</h1>
            <form className="contact_form"  id="login">
                <label className="contact_label">
                    Product Name:
                    <input type="text" className="contact_input" />
                </label>
                <label className="contact_label">
                    Product Description:
                    <input type="text" className="contact_input" />
                </label>
                <label className="contact_label">
                    Product Image:
                    <input type="file" className="contact_input" />
                </label>
                <button type="submit" className="contact_button" >Add Product</button>
            </form>
        </div>
    );
}