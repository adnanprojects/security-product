export default () => {
    const dummyQueries = [
        { id: 1, user: 'Aisha Khan', query: 'How to integrate payment gateway?', email: 'aisha@example.com', product: 'E-Commerce App', status: 'Open' },
        { id: 2, user: 'Bilal Ahmed', query: 'Images not uploading on product page', email: 'bilal@example.com', product: 'Product Catalog', status: 'In Progress' },
        { id: 3, user: 'Carlos M', query: 'Unable to download invoice', email: 'carlos@example.com', product: 'Billing', status: 'Resolved' },
        { id: 4, user: 'Diana P', query: 'Search results are slow', email: 'diana@example.com', product: 'Search Service', status: 'Open' },
        { id: 5, user: 'Ethan R', query: 'Prefer dark mode for dashboard', email: 'ethan@example.com', product: 'Admin Panel', status: 'Closed' },
        { id: 6, user: 'Fariha S', query: 'Two-factor authentication setup', email: 'fariha@example.com', product: 'Auth Service', status: 'In Progress' },
        { id: 7, user: 'George L', query: 'API rate limit information', email: 'george@example.com', product: 'Public API', status: 'Open' },
        { id: 8, user: 'Hina T', query: 'Error 500 on product details', email: 'hina@example.com', product: 'Product Detail', status: 'Resolved' }
    ];

    return(
        <div className="user-dash">
            <h2 className='greet'>Welcome, Product Admin!</h2>

            <h3 className='heading'>Queries</h3>

            <table className='table'>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Query</th>
                        <th>User Email</th>
                        <th>Application/Product</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyQueries.map(q => (
                        <tr key={q.id}>
                            <td>{q.user}</td>
                            <td>{q.query}</td>
                            <td>{q.email}</td>
                            <td>{q.product}</td>
                            <td>{q.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}