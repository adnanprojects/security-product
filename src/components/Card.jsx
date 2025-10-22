import './first.css';

export default function Card({ title, description }) {
    return (
        <div className="card">
            <h2  className="card-heading">{title}</h2>
            <p className="card-description">{description}</p>
            <button className="card-btn">Learn More</button>
      
        </div>
    );
}