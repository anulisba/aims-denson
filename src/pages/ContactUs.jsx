import React from 'react';
import logo from '../assets/images/AIM LOGO.png'
const ContactUs = () => {
    return (
        <div>
            <section className="contact-us" id="contact-us">
                <div className="contact-container">
                    <div className="contact-text">
                        <h1>Your Best Performance, Our Priority</h1>
                        <h2>Be Unstoppable With Aim Sportswear</h2>
                    </div>
                    <div>
                        <button
                            className="contact-us-section-button"
                            onClick={() => {
                                window.open(
                                    "https://wa.me/9446533322?text=" +
                                    encodeURIComponent("Hi Aim sportswear\nI am interested in knowing more about your products"),
                                    "_blank"
                                );
                            }}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            <div className='map'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.260046637213!2d76.33849927548228!3d10.400908989725963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f900068c6d51%3A0xedd6d212f9d1c466!2sAim%20sportswear!5e0!3m2!1sen!2sin!4v1741254044877!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <footer className="site-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <span className="logo-text"><img src={logo} /></span>
                        </div>
                        <div className="social-icons">
                            <a href="#" className="social-link">
                                <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" /></svg>
                            </a>
                            <a href="#" className="social-link">
                                <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="#" className="social-link">
                                <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297a11.815 11.815 0 00-8.4-3.48c-6.627 0-12 5.373-12 12 0 2.52.779 4.86 2.107 6.78L0 24l6.335-1.652a12.001 12.001 0 005.953 1.631h.005c6.627 0 12-5.373 12-12 0-3.188-1.24-6.189-3.495-8.447z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-heading">Contact Us</h3>
                        <ul className="events-list">
                            <li className="event-item">
                                <span className="event-date">Mobile</span>
                                <span className="event-title">9446533322</span>
                            </li>
                            <li className="event-item">
                                <span className="event-date">Adress</span>
                                <span className="event-title">AIM SPORTSWEAR</span>

                            </li>
                            <li className="event-item">
                                <span className="event-date"></span>
                                <span className="event-title">Matha complex, Mupliyam</span>

                            </li>
                            <li className="event-item">
                                <span className="event-date"></span>
                                <span className="event-title">Thrissur, Kerala, India</span>

                            </li>

                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-heading">Quick Menu</h3>
                        <nav className="footer-nav">
                            <a href="#" className="nav-link">Home</a>
                            <a href="#" className="nav-link">About Us</a>
                            <a href="#" className="nav-link">Our Products</a>

                            <a href="#" className="nav-link">Contact</a>
                        </nav>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} Aim Sports Wear. All rights reserved.</p>


                </div>
            </footer>
        </div>
    );
};

export default ContactUs;