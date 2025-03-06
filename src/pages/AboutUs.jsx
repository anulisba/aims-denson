import React, { useState, useEffect } from 'react';
import about_us_img from '../assets/images/about-us-bg.jpg';
import { motion, AnimatePresence } from "framer-motion";

const sentences = [
    "AIM FOR EXCELLENCE",
    "ACHIEVE WITH POWER",
    "INSPIRE AND EMPOWER"
];

const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5 } }
};

const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const AnimatedSentence = ({ sentence }) => {
    const words = sentence.split(" ");
    return (
        <motion.div className="about-footer" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            {words.map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={`${wordIndex}-${charIndex}`}
                            variants={letterVariants}
                            style={{ display: "inline-block" }}
                            className={charIndex === 0 ? "capital" : ""}
                        >
                            {char}
                        </motion.span>
                    ))}
                    <motion.span key={`space-${wordIndex}`} style={{ display: "inline-block" }}> </motion.span>
                </React.Fragment>
            ))}
        </motion.div>
    );
};

const AboutUs = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % sentences.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    const onButtonClick = () => {
        const pdfUrl = "sample.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "aimsportswearbroucher.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section className="about-us" id="about-us">
            <div className="about-content">
                <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="about-image"
                >
                    <img src={about_us_img} alt="About us" />
                </motion.div>
                <motion.div
                    initial={{ x: "50%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="about-text"
                >
                    <h2><span className="h2-capital">A</span>BOUT <span className="h2-capital">U</span>S</h2>
                    <p>Develop a branding concept for a business specializing in high-quality sportswear and school
                        uniforms.
                        The brand should convey a sense of versatility, blending style, comfort, and durability.
                        The sportswear side should focus on performance-driven apparel for athletes,
                        with features like moisture-wicking fabric, breathability, and flexibility,
                        while the school uniforms should emphasize neatness, comfort,
                        and professionalism, with durable materials that stand up to daily wear.
                    </p>
                    <button
                        className="contact-us-button"
                        onClick={onButtonClick}
                    >
                        Download Brochure
                    </button>



                </motion.div>
            </div>
            <div className="about-footer-container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <AnimatedSentence sentence={sentences[current]} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default AboutUs;
