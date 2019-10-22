import React, { Component } from 'react'
import footerImage from '../images/footerImage.PNG'
import FooterContent from './FooterContent'
import '../css/animate.css'
import FooterContainer from './footerContainer'
export default class Footer extends Component {
    render() {
        return (
            <div>

                <div className="row col-sm-12 col-md-12 col-lg-12">
    <div className=" col-lg-6" style={{paddingLeft: '0!important'}}>

      <section className="ftco-about ftco-no-pt ftco-no-pb img ftco-section  twocard">
     
          <div className="row d-flex">
            <div className="col-md-6 col-lg-6 d-flex p-0">
              <div className="   img-about img d-flex align-items-stretch gig-top">
                <div className=" img d-flex align-self-stretch align-items-end " className="image-place" >
                    <img src={footerImage} alt="footerimage"></img>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 pl-lg-4 py-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate f1car pb-5 fadeInUp ftco-animated">
                  <h3 className="" style={{color:"black"}}><b>Dr. Maud McDonald</b></h3>
				  <p className="mb-4" style={{ fontSize: "18px;"}}> General Physician</p>
                  <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p className="mb-4"><b>Education</b></p>
                  <p className="mb-4">University of Michigan<br/>
                    School of Medical
                  </p>
                </div>

              </div>
            </div>
          </div>
    
      </section>
    </div>
    <div className=" col-lg-6 ">
    <section className="ftco-about ftco-no-pt ftco-no-pb img ftco-section  twocard">
     
     <div className="row d-flex">
       <div className="col-md-6 col-lg-6 d-flex p-0">
         <div className="   img-about img d-flex align-items-stretch gig-top">
           <div className=" img d-flex align-self-stretch align-items-end " className="image-place" >
               <img src={footerImage} alt="footerimage"></img>
            
           </div>
         </div>
       </div>
       <div className="col-md-6 col-lg-6 pl-lg-4 py-5">
         <div className="row justify-content-start pb-3">
           <div className="col-md-12 heading-section ftco-animate f1car pb-5 fadeInUp ftco-animated">
             <h3 className="" style={{color:"black"}}><b>Dr. Matilda Figueroa
</b></h3>
             <p className="mb-4" style={{ fontSize: "18px;"}}> General Physician</p>
             <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
             <p className="mb-4"><b>Education</b></p>
             <p className="mb-4">University of Michigan<br/>
               School of Medical
             </p>
           </div>

         </div>
       </div>
     </div>

 </section>
    </div>
  </div>
  
<div className="footer-wrapper">
<div className="col-xl-6 col-md-6 col-sm-12 row float-left m-0 p-0" style={{height:'280px'}}>
  <FooterContent  title="Membership">
    <div>
    <i style={{color:'orange', fontSize:'3em'}} className="material-icons">
star_border
</i>
    </div>

  </FooterContent>
  <FooterContent title="Languages">
  <i style={{color:'orange', fontSize:'3em'}} className="material-icons">
message
</i>
       </FooterContent>

  </div>  
  <div className="col-xl-6 col-md-6 col-sm-12 row float-right m-0 p-0" style={{height:'280px'}}>
  <FooterContent  title="Membership">
    <div>
    <i style={{color:'orange', fontSize:'3em'}} className="material-icons">
star_border
</i>
    </div>

  </FooterContent>
  <FooterContent title="Languages">
  <i style={{color:'orange', fontSize:'3em'}} className="material-icons">
message
</i>
       </FooterContent>

  </div> 
    </div>  
    <div>
    <FooterContainer></FooterContainer>

    </div>

            </div>
        )
    }
}
