import React, { useState, useEffect } from "react";
import "./Loader.css";

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 50); // Matches reference website's speed

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                setShowLoader(false);
                setTimeout(onComplete, 1000);
            }, 1000);
        }
    }, [progress, onComplete]);

    const digits = progress.toString().padStart(2, "0").split("");

    return (
        <div className={`loader-container ${!showLoader ? "fade-out" : ""}`}>
            <div className="counter-wrapper">
                <div className="counter">
                    {digits.map((digit, index) => (
                        <div className="digit-container" key={index}>
                            <div className="digit-wrapper"
                                style={{ transform: `translateY(-${digit}0%)` }}>
                                {[...Array(10).keys()].map((num) => (
                                    <div className="digit" key={num}>{num}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <span className="percent-symbol">%</span>
                </div>
            </div>
            <div className="loading-text">Loading</div>
        </div>
    );
};

export default Loader;