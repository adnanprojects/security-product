import Card from './Card.jsx';

export default function Section() {
    return (
        <div className="first-page">
            <h1 className="heading">Our Products</h1>
        <div className="container">
          <Card title="Product" description='Lorem ipsum dolor sit amet, consect etur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        </div>
      </div>
    );
}