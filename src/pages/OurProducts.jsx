import React from 'react';
import { motion } from "framer-motion";
import gym from '../assets/images/gym.jpg';
import school from '../assets/images/young-boy-getting-back-school.jpg';
import sports from '../assets/images/sports.jpg';

const OurProducts = () => {
    return (
        <div className='our-product-section'>
            <motion.section
                className="our-products"
                id="our-products"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            // Ensures animation plays every time
            >
                <motion.div
                    className="our-products-main"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h2>
                        <span className="h2-capital">O</span>UR <span className="h2-capital">P</span>RODUCTS
                    </h2>
                    <div className="our-product-container">
                        {[
                            { img: school, label: "SCHOOL UNIFORMS" },
                            { img: gym, label: "GYM-WEARS" },
                            { img: sports, label: "SPORTS-WEARS" }
                        ].map((product, index) => (
                            <motion.div
                                key={index}
                                className="our-product-tile"
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: index + 1 * 0.5 }}

                            >
                                <img src={product.img} alt={product.label} />
                                <p>{product.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.section>
        </div>
    );
};

export default OurProducts;
