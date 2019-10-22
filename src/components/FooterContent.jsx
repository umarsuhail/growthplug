import React, { Component } from 'react';
import '../css/animate.css'
import { CSSTransition } from 'react-transition-group';

export default class FooterContent extends Component {
  componentDidMount(){
    
  }
    render() {

        return (
            <div className="col-sm-6 col-md-6 col-xl-6 d-flex footer-content-wrapper fadeIn">
               <div className="card row second-card fadeIn" style={{width: "24rem",display:'flex',alignItems:'center',}}>
    <div className="icon-container col-6 float-left">
       {this.props.children}
    </div>
  <div className="card-body col-6 float-right">
    
    <h6 className="card-subtitle mb-2 text-muted" style={{color:"#5c5b5c"}}><b>{this.props.title} </b></h6>
    <p className="card-text">
      Lorem ipsum dolor sit amet
      Consectetur adipiscing elit
      Maecenas tempor sapien</p>
    
  </div>
</div> 
            </div>
        )
    }
}
