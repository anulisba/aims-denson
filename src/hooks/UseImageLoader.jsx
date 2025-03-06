import { useState, useEffect } from 'react';

const useImageLoader = (imageSources) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadImage = (src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(src);
                img.onerror = (err) => reject(err);
            });
        };

        const loadAllImages = async () => {
            try {
                await Promise.all(imageSources.map(loadImage));
                setIsLoaded(true);
            } catch (error) {
                console.error('Error loading images:', error);
                setIsLoaded(true); // Still show content even if some images fail
            }
        };

        loadAllImages();
    }, [imageSources]);

    return isLoaded;
};

export default useImageLoader;