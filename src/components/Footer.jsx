// src/components/Footer.js
import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div>
        {/* Main Footer Content */}
        <div>
          {/* Column 1: About Us */}
          <div>
            <h3>About C-DAC</h3>
            <ul className="space-y-2">
              <li><a href="#">Overview</a></li>
              <li><a href="#">Mission & Vision</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Achievements</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#">Training Programs</a></li>
              <li><a href="#">Research & Development</a></li>
              <li><a href="#">Consultancy</a></li>
              <li><a href="#">e-Governance</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#">Careers</a></li>
              <li><a href="#">Tenders</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">C-DAC, Innovation Park,</p>
            <p className="mb-2">Pune, Maharashtra, India</p>
            <p className="mb-2">Email: <a href="mailto:info@cdac.in">info@cdac.in</a></p>
            <p className="mb-4">Phone: +91-20-12345678</p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} C-DAC. All Rights Reserved.</p>
          <div className="mt-2">
            <a href="#" >Privacy Policy</a> |
            <a href="#" >Terms of Use</a> |
            <a href="#" >Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;