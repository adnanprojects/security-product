import './user.css';

export default () => {
    return (
        <div className="user-dash">
            <h2 className='greet'>Welcome, Admin!</h2>

            <h3 className='heading'>
                All Users
            </h3>

            <table className='table'>
                <thead>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Role</th>
                </thead>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>+1 2486566010</td>
                    <td>Admin</td>
                </tr>
                <tr>
                    <td>Berglunds snabbköp</td>
                    <td>+1 7327729216</td>
                    <td>Product Admin</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>+1 2486566010</td>
                    <td>User</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>+1 7327729216</td>
                    <td>User</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>+1 9389049853</td>
                    <td>Product Admin</td>
                </tr>
            </table>
        </div>
    );
}