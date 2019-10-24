import React, { Component } from 'react'
export default class AwardsContainer extends Component {
    render() {
        return (
            <div className="col-md-2 col-lg-2 col-sm-6"  style={{padding:0 ,width:'280px',justifyContent:'center'}}>
                <img src={this.props.image} alt=""/>
            </div>
        )
    }
}
