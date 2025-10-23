import './user.css';

export default () => {
    return (
        <div className="user-dash">
            <h2 className='greet'>Welcome, User!</h2>

            <h3 className='heading'>Your Downloads</h3>

            <table className='table'>
                <thead>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Product </th>
                </thead>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Geny</td>
                </tr>
                <tr>
                    <td>Berglunds snabbköp</td>
                    <td>Christina Berglund</td>
                    <td>Swidano</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Meximus</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Windows</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>Slack</td>
                </tr>
                <tr>
                    <td>Königlich Essen</td>
                    <td>Philip Cramer</td>
                    <td>AWS </td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Stripe</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Zoom</td>
                </tr>
                <tr>
                    <td>North/South</td>
                    <td>Simon Crowther</td>
                    <td>Chrome</td>
                </tr>
                <tr>
                    <td>Paris spécialités</td>
                    <td>Marie Bertrand</td>
                    <td>Notion</td>
                </tr>
            </table>
        </div>
    );
}