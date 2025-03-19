import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import gym from '../assets/images/gym.jpg';
import school from '../assets/images/young-boy-getting-back-school.jpg';
import sports from '../assets/images/sports.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import t1 from '../assets/images/t1.jpeg'
import t2 from '../assets/images/t2.jpeg'
import t3 from '../assets/images/t3.jpeg'
import t4 from '../assets/images/t4.jpeg'
import t5 from '../assets/images/t6.jpeg'
import t6 from '../assets/images/t6.jpeg'
const OurProducts = () => {
    const teamImages = [t1, t2, t3, t4, t5, t6];
    const [index, setIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [index]);

    // Move to the next slide
    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
    };

    return (
        <div>
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
                                    <img src={product.img} alt={product.label} loading="lazy" />
                                    <p>{product.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.section>
            </div>
            <section id="team" className="team-section">
                <div className='team-slider-container'>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1} // Default for large screens
                        loop={true}
                        speed={2000}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        navigation={{ clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 40
                            }
                        }}
                        className="team-slider"
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        {teamImages.map((img, index) => {
                            const isElevated = index === (activeIndex + 1) % teamImages.length;

                            return (
                                <SwiperSlide key={index} style={{ top: "30px" }} className="team-slide">
                                    <div className="image-container">
                                        <img src={img} alt="Thrissur best sports wear" loading="lazy" />
                                        {/* <div className="image-overlay"></div> */}
                                    </div>
                                </SwiperSlide>

                            );
                        })}

                    </Swiper>
                </div>

            </section>
        </div>
    );
};

export default OurProducts;
