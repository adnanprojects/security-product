import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import First from '../components/pages/First';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Register from '../components/pages/Register';
import Login from '../components/pages/Login';

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
                <Footer />
            </Router>
        </>
    );
}