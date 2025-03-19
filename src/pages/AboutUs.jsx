import React, { useState, useEffect } from 'react';
import about_us_img from '../assets/images/about-us-bg.jpg';
import about_us_2 from '../assets/images/360_F_250565045_WKeqiOIMeCGq7HBdHtz316Z89A1JFYic.webp';
import { motion, AnimatePresence } from "framer-motion";

const sentences = [
    "BEST SPORTS WEAR IN THRISSUR",
    "AFFORDABLE GYM WEAR",
    "PREMIUM SPORTS APPAREL",
    "TOP-QUALITY GYM WEARS IN KERALA",
    "SPORTS UNIFORM AND CUSTOM JERSYES",
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
                    <img src={about_us_img} alt="About us" loading="lazy" />
                </motion.div>
                <motion.div
                    initial={{ x: "50%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="about-text"
                >
                    <h2><span className="h2-capital">A</span>BOUT <span className="h2-capital">U</span>S</h2>
                    <p>At AIM sportswear, we're passionate about creating high-quality sportswear that helps individuals and teams perform at their best. Since our inception in 2010, we've been dedicated to designing and manufacturing exceptional sportswear that combines comfort, style, and functionality.
                    </p>
                    <button
                        className="contact-us-button"
                        onClick={onButtonClick}
                    >
                        Download Brochure
                    </button>


                </motion.div>
            </div>
            <div className="about-content">
                <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="about-text"
                >
                    <h2><span className="h2-capital">O</span>UR <span className="h2-capital">S</span>TORY</h2>
                    <p>At AIM sportswear, we're passionate about creating high-quality sportswear that helps individuals and teams perform at their best. Since our inception in 2010, we've been dedicated to designing and manufacturing exceptional sportswear that combines comfort, style, and functionality.
                    </p>


                </motion.div>
                <motion.div

                    initial={{ x: "50%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="about-image"
                >
                    <img src={about_us_2} alt="About us" loading="lazy" />
                </motion.div>
            </div>
            <div className="about-content-sub">
                <motion.div
                    initial={{ y: "50%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="about-text"
                >
                    <h2 style={{ textAlign: "center" }}><span className="h2-capital">O</span>UR <span className="h2-capital">C</span>OMMITMENT</h2>
                    <p style={{ textAlign: "center" }}>At AIM sportswear, we're committed to delivering exceptional quality, comfort, and style in every product we create. We use only the finest materials, employ cutting-edge manufacturing techniques, and adhere to rigorous quality control standards to ensure that our products meet the highest standards.
                    </p>
                </motion.div>
            </div>
            <div className="about-content-sub">
                <motion.div
                    initial={{ y: "50%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="about-text"
                >
                    <h2 style={{ textAlign: "center" }}><span className="h2-capital">O</span>UR <span className="h2-capital">M</span>ISSION</h2>
                    <p style={{ textAlign: "center" }}>Our mission is to empower individuals and teams to reach their full potential by providing them with high-quality sportswear that inspires confidence, comfort, and performance.
                    </p>
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
