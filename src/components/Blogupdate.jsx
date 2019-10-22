import React, { Component } from "react";
export default class Blogupdate extends Component {
  render() {
    return (
        <div class="card column animated fadeIn" style={{width:'18rem'}}>
          <img src={this.props.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title" style={{color:'orange'}}>Blog Title goes here..</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
    );
  }
}
