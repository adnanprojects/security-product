import Card from './Card.jsx';
import './about.css';
import Image from '../img.jfif';
import image1 from '../assests/digital_products1.jpg';
import image2 from '../assests/digital_products2.jpg';
import image3 from '../assests/digital_products3.jpg';
// import image4 from '../assests/digital_products4.jpg';
// import image5 from '../assests/digital_products5.jpg';
// import image6 from '../assests/digital_products6.jpg';
// import image7 from '../assests/digital_products7.jpg';


export default function Section() {
    return (
        <div className="first-page">
            <img src={Image} alt="C-DAC" className="home_img"/>
            <h1 className="heading">Our Products</h1>
        <div className="container">
          <Card title="Product 1" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' image={image1} />
          <Card title="Product 2" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' image={image2} />
          <Card title="Product 3" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' image={image3} />
          {/* <Card title="Product 4" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' image={image1} />
          <Card title="Product 5" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' image={image1} />
          <Card title="Product 6" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' image={image1} />
          <Card title="Product 7" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' image={image1} /> */}
          </div>
      </div>
    );
}