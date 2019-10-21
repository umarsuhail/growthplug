import React, { Component } from 'react'
import { fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

export default class FooterContent extends Component {
  componentDidMount(){
    
  }
    render() {
        const styles = {
            fadeIn: {
              animation: 'x 1s',
              animationName: Radium.keyframes(fadeIn, 'fadeIn')
            }
          }
        return (
            <div className="col-sm-6 col-md-6 col-xl-6 d-flex">
               <div className="" style={{width: "24rem",display:'flex',alignItems:'center',},styles.fadeIn}>
    <div className="icon float-left">
       {this.props.children}
    </div>
  <div className="card-body float-right">
    
    <h6 className="card-subtitle mb-2 text-muted" style={{color:"#5c5b5c;"}}><b>{this.props.title} </b></h6>
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
