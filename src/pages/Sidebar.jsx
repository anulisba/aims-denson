import React from 'react';

const Sidebar = ({ isActive, toggleSidebar, scrollToSection }) => {
    return (
        <div className={`sidebar ${isActive ? 'active' : ''}`} id="sidebar">
            <div className="close-btn" onClick={toggleSidebar}>
                <p>X</p>
            </div>
            <ul>
                <li onClick={() => scrollToSection('landing-section')}>Home</li>
                <li onClick={() => scrollToSection('about-us')}>About Us</li>
                <li onClick={() => scrollToSection('our-products')}>Our Products</li>
                <li onClick={() => scrollToSection('contact-us')}>Contact Us</li>
            </ul>
        </div>
    );
};

export default Sidebar;