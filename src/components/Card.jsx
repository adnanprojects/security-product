import {Link} from 'react-router-dom';
import './first.css';

export default function Card({ title, description }) {

    const handleClick = ({title, description}) => {
        // <Link to={`/details/:${title}`}></Link>
    }

    return (
        <div className="card">
            <h2  className="card-heading">{title}</h2>
            <p className="card-description">{description}</p>
            <button className="card-btn" onClick={handleClick}>Learn More</button>
        </div>
    );
}