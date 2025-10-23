import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Section from "./Section";
import First from './First';
import About from './About';
import Contact from './Contact';
import Register from './Register';
import Login from './Login';
import About_us_page from './About_us_page';

export default () => {
    return(
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<First />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/about_us" element={<About_us_page />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                {/* <Section /> */}
                {/* <Footer /> */}
            </Router>
        </>
    );
}