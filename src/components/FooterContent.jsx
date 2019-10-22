import React, { Component } from 'react';
import '../css/animate.css'
import { CSSTransition } from 'react-transition-group';
import ScrollAnimation from 'react-animate-on-scroll';

export default class FooterContent extends Component {
  constructor(props){
    super(props)
    this.state={
      animation:''
    }
  }
  componentDidMount(){
    this.setState({
      animation:'animated fadeIn'
    })
    
  }
    render() {

        return (

            <div className="col-sm-6 col-md-6 col-xl-6 d-flex footer-content-wrapper  fadeIn">

               <div className={`card row second-card ${this.state.animation}`} style={{width: "24rem",display:'flex',alignItems:'center',}}>
    <div className="icon-container col-6 float-left">
    <ScrollAnimation animateIn="fadeInRight">

       {this.props.children}
       </ScrollAnimation>
    </div>
  <div className="card-body col-6 float-right">
  <ScrollAnimation animateIn="fadeInRight">
    
    <h6 className="card-subtitle mb-2 text-muted" style={{color:"#5c5b5c"}}><b>{this.props.title} </b></h6>
    <p className="card-text">
      Lorem ipsum dolor sit amet
      Consectetur adipiscing elit
      Maecenas tempor sapien</p>
      </ScrollAnimation>
    
  </div>
  
</div> 
            </div>
            
        )
    }
}
