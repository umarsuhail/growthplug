import React, { Component } from "react";
import team1 from "../images/team1.png";
import ScrollAnimation from "react-animate-on-scroll";

export default class MeetTeam extends Component {
  render() {
    return (
      <div className="card animated fadeIn">
        <ScrollAnimation animateIn="fadeIn">
          <img src={this.props.image} className="card-img-top" alt="..." />
        </ScrollAnimation>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <h6 className="card-title">{this.props.title2}</h6>

          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    );
  }
}
