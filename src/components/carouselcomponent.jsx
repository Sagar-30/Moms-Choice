import './carouselcomponent.css'
import React, { useState } from 'react';

function Carousel(props) {
    const images = [props.img1, props.img2, props.img3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <i className="bi bi-arrow-left-circle left-Button" onClick={prevSlide} ></i>
            {/* <button className='left-Button' onClick={prevSlide}>Previous</button> */}
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            <i className="bi bi-arrow-right-circle right-button" onClick={nextSlide} ></i>
            {/* <button className='right-button' onClick={nextSlide}>Next</button> */}

        </div>
    );
}

export default Carousel;
