import React from 'react';

const Header = ({ toggleSidebar }) => {
    return (
        <header id="header">
            <div className="hamburger-menu" onClick={toggleSidebar}>&#9776;</div>
        </header>
    );
};

export default Header;