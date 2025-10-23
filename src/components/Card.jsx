import './first.css';
import { Link } from 'react-router-dom';

export default function Card({ title, description, image }) {

    const handleClick = ({title, description}) => {
        // <Link to={`/details/${title}`}></Link>
    }

    return (
        <div className="card">
            <img src={image} alt="Card Image" className="card-image" />
            <h2  className="card-heading">{title}</h2>
            <p className="card-description">{description}</p>
            <button className="card-btn" onClick={handleClick}>Learn More</button>
        </div>
    );
}