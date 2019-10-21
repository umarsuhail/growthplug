import React from "react";
import Slider from "react-slick";
import girl from '../images/girl1.jpg'
import '../css/carousel.scss'
export default class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div className="home-container">

                    <div className="contact" style={{
                        position: 'absolute', top: 10, right: 10 , display:'flex',
                    }}>
                        <i className="material-icons">
                            phone
</i>


                        522-182-5024
            </div>
                    <img src={girl} alt="" />
                    <div className="text-wrap">
                        <h1>Dr.Minerva Abbott</h1>
                        <span>General and cosmetic dentistry</span> <br />
                        <span>Sanjose, CA</span>
                    </div>

                </div>

                <div className="home-container">
                    <div className="contact" style={{
                        position: 'absolute', top: 10, right: 10 , display:'flex',
                    }}>
                        <i className="material-icons">
                            phone
</i>


                        522-182-5024
            </div>
                    <img src={girl} alt="" />
                    <div className="text-wrap">
                        <h1>Dr.Minerva Abbott</h1>
                        <span>General and cosmetic dentistry</span> <br />
                        <span>Sanjose, CA</span>
                    </div>

                </div>
                <div className="home-container">
                    <div className="contact" style={{
                        position: 'absolute', top: 10, right: 10 , display:'flex',
                    }}>
                        <i className="material-icons">
                            phone
</i>


                        522-182-5024
            </div>
                    <img src={girl} alt="" />
                    <div className="text-wrap">
                        <h1>Dr.Minerva Abbott</h1>
                        <span>General and cosmetic dentistry</span> <br />
                        <span>Sanjose, CA</span>
                    </div>

                </div>
                <div className="home-container">
                    <div className="contact" style={{
                        position: 'absolute', top: 10, right: 10 , display:'flex',
                    }}>
                        <i className="material-icons">
                            phone
</i>


                        522-182-5024
            </div>
                    <img src={girl} alt="" />
                    <div className="text-wrap">
                        <h1>Dr.Minerva Abbott</h1>
                        <span>General and cosmetic dentistry</span> <br />
                        <span>Sanjose, CA</span>
                    </div>

                </div>
                <div className="home-container">
                    <div className="contact" style={{
                        position: 'absolute', top: 10, right: 10 , display:'flex',
                    }}>
                        <i className="material-icons">
                            phone
</i>


                        522-182-5024
            </div>
                    <img src={girl} alt="" />
                    <div className="text-wrap">
                        <h1>Dr.Minerva Abbott</h1>
                        <span>General and cosmetic dentistry</span> <br />
                        <span>Sanjose, CA</span>
                    </div>

                </div>

            </Slider>
        );
    }
}