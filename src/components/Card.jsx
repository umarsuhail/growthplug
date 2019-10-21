import React, { Component } from 'react'
import '../css/card.scss'
import yelp from '../images/yelp.PNG'
import Slider from "react-slick";

export default class Card extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (

            <div>
     
                    <div className="card">
                        <img src={yelp} alt="yelp" />
                        <span>
                    Lorem ipsum dolor sit amet, conse
adipiscing elit.
<br/>
<strong>- Jordan Owen</strong>
                    </span>
                    </div>    
         

            </div>
        )
    }
}
