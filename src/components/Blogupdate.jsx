import React, { Component } from "react";
export default class Blogupdate extends Component {
  render() {
    return (
        <div className="card column animated fadeIn" style={{width:'18rem'}}>
          <img src={this.props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{color:'orange'}}>Blog Title goes here..</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
    );
  }
}
