import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// ....

// className "owl-theme" is optional
const Carousel = () => {
    return (
        <OwlCarousel >
            <div class='item'>
                <h4>
                    <img src="../../assets/images/home.png
            " alt="" />
                </h4>
            </div>
            <div class='item'>
                <h4>
                    <img src="../../assets/images/home.png
            " alt="" />
                </h4>
            </div>
            <div class='item'>
                <h4>
                    <img src="../../assets/images/home.png
            " alt="" />
                </h4>
            </div>
            <div class='item'>
                <h4>
                    <img src="../../assets/images/home.png
            " alt="" />
                </h4>
            </div>
            <div class='item'>
                <h4>
                    <img src="../../assets/images/home.png
            " alt="" />
                </h4>
            </div>

        </OwlCarousel>
    )
}

export default Carousel;