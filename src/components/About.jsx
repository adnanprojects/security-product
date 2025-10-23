import React from "react";
import cdac_image from '../assests/about_us.jpg';
import './about.css'
// import './first.css';

export default () => {
    return (
        <div className="about_us_container">
            <img src={cdac_image} alt="C-DAC" className="about_us_img"/>
            <h1 className="about_us_heading">About Us</h1>
            <p className="about_us_para">The Centre for Development of Advanced Computing (C-DAC) is a premier research and development (R&D) organization in India, operating under the Ministry of Electronics and Information Technology (MeitY).
                Established in March 1988 as a scientific society of the Department of Information Technology, now MeitY, C-DAC was created in response to the United States government's refusal to sell India a Cray supercomputer due to concerns about its potential use for nuclear weapons development.
                This pivotal event spurred India's initiative to develop its own supercomputing capabilities, leading to the creation of C-DAC and the eventual launch of the PARAM series of supercomputers, with the first, PARAM 8000, released in 1991.</p><br/><br/>
            <p className="about_us_para">Headquartered in Pune, Maharashtra, at the C-DAC Innovation Park, Panchavati, Pashan, C-DAC has grown into a leading institution for high-end R&D in Information Technology and Electronics.
 Its mission is to strengthen national technological capabilities, promote the growth of the IT industry, and develop solutions for various sectors of the economy.
 The organization's research and development activities span a wide range of fields, including High Performance Computing, Artificial Intelligence and Multilingual Computing, Cyber Security and Forensics, Health Informatics, Strategic Electronics, Software Technologies, Quantum Computing, and Data Science.</p>
        </div>
    );
}