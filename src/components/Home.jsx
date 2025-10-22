import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Section from "./Section";
import First from './First';
import About from './About';
import Contact from './Contact';
import Register from './Register';
import Login from './Login';

export default () => {
    return(
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<First />} />
                    <Route path="/about" element={<About />} />
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