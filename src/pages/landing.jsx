import React, { useRef, useState } from 'react';
import Header from './Header'; // You'll need to create this
import Sidebar from './Sidebar'; // You'll need to create this
import logo from '../assets/images/AIM LOGO.png'
import './Style.css';
import AboutUs from './AboutUs';
import OurProducts from './OurProducts';
import ContactUs from './ContactUs';
import { motion } from 'framer-motion';
import SEO from '../../SEO';
const Landing = () => {
    const landingSectionRef = useRef(null);
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            toggleSidebar(); // Close sidebar after clicking
        }
    };
    const text = "PRECCESION GEAR FOR EVERY GOAL";
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.3,
            },
        },
    };
    const letterVariants = {
        hidden: { opacity: 0, y: "0.25em" },
        visible: {
            opacity: 1,
            y: "0em",
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };
    const words = text.split(" ");
    return (
        <>
            <SEO
                title="Aim Sportswear - Best Sports Wear in Thrissur"
                description="Find the best quality sportswear in Thrissur. Shop premium fitness gear and accessories at affordable prices."
                keywords="AIM Sportswear, sportswear in Thrissur, buy sports gear, best fitness clothing"
            />
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar
                isActive={isSidebarActive}
                toggleSidebar={toggleSidebar}
                scrollToSection={scrollToSection}
            />

            <section className="landing-section" id="landing-section" ref={landingSectionRef}>
                <div className="logo">
                    <img src={logo} alt="Company Logo" />
                </div>
                <motion.div
                    className="landing-text"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {words.map((word, wordIndex) => (
                        <React.Fragment key={wordIndex}>
                            {word.split("").map((char, charIndex) => (
                                <motion.span
                                    key={`${wordIndex}-${charIndex}`}
                                    variants={letterVariants}
                                    className={charIndex === 0 ? "capital" : ""}
                                    style={{ display: "inline-block" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            {/* Add a space after each word */}
                            <motion.span key={`space-${wordIndex}`} style={{ display: "inline-block" }}>
                                {" "}
                            </motion.span>
                        </React.Fragment>
                    ))}
                </motion.div>
            </section>

            <AboutUs />
            <OurProducts />
            <ContactUs />
        </>
    );
};

export default Landing;