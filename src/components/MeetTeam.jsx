import React, { Component } from 'react'
import team1 from '../images/team1.png'
export default class MeetTeam extends Component {
    render() {
        return (
            <div class="card animated fadeIn">
            <img src={this.props.image} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{this.props.title}</h5>
              <h6 class="card-title">{this.props.title2}</h6>

              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        )
    }
}
