import React, { Component } from "react";
import Gallery from "react-grid-gallery";
import gal1 from "../images/gal1.jpg";
import gal2 from "../images/gal2.jpg";
import gal3 from "../images/gal3.jpg";
import gal4 from "../images/gal4.jpg";
import gal5 from '../images/gal5.jpg'
const IMAGES = [

  {
    src: gal4,
    thumbnail: gal4,
    thumbnailWidth: 320,
    thumbnailHeight: 240,

  },


  {
    src: gal3,
    thumbnail: gal3,
    thumbnailWidth: 320,
    thumbnailHeight: 240,
  },
  {
    src: gal1,
    thumbnail: gal1,
    thumbnailWidth: 320,
    thumbnailHeight: 240,
  },
  {
    src: gal5,
    thumbnail: gal5,
    thumbnailWidth: 540,
    thumbnailHeight: 320,
  },
  {
    src: gal2,
    thumbnail: gal2,
    thumbnailWidth: 520,
    thumbnailHeight: 320,

  },
];
export default class footerContainer extends Component {
  render() {
    return (
      <div className="container">
          <h1 style={{color:'#daa23c'}}>Our Practices</h1>
        <Gallery rowHeight={380} images={IMAGES} />,
      </div>
    );
  }
}
