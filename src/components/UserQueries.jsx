import './user.css';

export default () => {
    return (
        <div className="user-dash">
            <h2 className='greet'>Welcome, User!</h2>

            <div className='query-btn' >Raise Query</div>

            {/* <button >Modal</button> */}

            <div className="container hidden">
                <div className="text">This is Modal</div>
                <div className="close">&times;</div>
            </div>

            <h3 className='heading'>Your Queries</h3>

            <table className='table'>
                <thead>
                    <th>Query Title</th>
                    <th>Description</th>
                    <th>Status </th>
                </thead>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Resolved</td>
                </tr>
                <tr>
                    <td>Berglunds snabbköp</td>
                    <td>Christina Berglund</td>
                    <td>Pending</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Resolved</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Resolved</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>Resolved</td>
                </tr>
                <tr>
                    <td>Königlich Essen</td>
                    <td>Philip Cramer</td>
                    <td>Resolved </td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Resolved</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Pending</td>
                </tr>
                <tr>
                    <td>North/South</td>
                    <td>Simon Crowther</td>
                    <td>Pending</td>
                </tr>
                <tr>
                    <td>Paris spécialités</td>
                    <td>Marie Bertrand</td>
                    <td>Resolved</td>
                </tr>
            </table>
        </div>
    );
}