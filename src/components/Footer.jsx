import React, { Component } from "react";
import footerImage from "../images/footerImage.PNG";
import FooterContent from "./FooterContent";
import "../css/animate.css";
import ScrollAnimation from 'react-animate-on-scroll';

import FooterContainer from "./footerContainer";
import crowd from "../images/crowd.jpeg";
import char2 from "../images/char2.png";

import crowd2 from "../images/crowd2.jpeg";
import crowd1 from "../images/crowd1.jpg";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="row col-sm-12 col-md-12 col-lg-12 bottom-start">
          <div className=" col-lg-6" style={{ paddingLeft: "0!important" }}>
            <section className="ftco-about ftco-no-pt ftco-no-pb img ftco-section  twocard">
              <div className="row d-flex">
                <div className="col-md-6 col-lg-6 d-flex p-0">
                  <div className="   img-about img d-flex align-items-stretch gig-top">
                    <div
                      className=" img d-flex align-self-stretch align-items-end "
                      className="image-place"
                    >
                      <img src={footerImage} style={{height:'100%'}} alt="footerimage"></img>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 pl-lg-4 py-5">
                  <div className="row justify-content-start pb-3">
                    <div className="col-md-12 heading-section ftco-animate f1car pb-5 fadeInUp ftco-animated">
                      <h3 className="" style={{ color: "black" }}>
                        <b>Dr. Maud McDonald</b>
                      </h3>
                      <p className="mb-4" style={{ fontSize: "18px" }}>
                        {" "}
                        General Physician
                      </p>
                      <p className="mb-4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <p className="mb-4">
                        <b>Education</b>
                      </p>
                      <p className="mb-4">
                        University of Michigan
                        <br />
                        School of Medical
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 ">
            <section className="ftco-about ftco-no-pt ftco-no-pb img ftco-section  twocard">
              <div className="row d-flex">
                <div className="col-md-6 col-lg-6 col-sm-12 d-flex p-0">
                  <div className="   img-about img d-flex align-items-stretch gig-top">
                    <div
                      className=" img d-flex align-self-stretch align-items-end "
                      className="image-place"
                    >
                      <img src={footerImage} style={{height:'100%'}} alt="footerimage"></img>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 pl-lg-4 py-5">
                  <div className="row justify-content-start pb-3">
                    <div className="col-md-12 heading-section ftco-animate f1car pb-5 fadeInUp ftco-animated">
                      <h3 className="" style={{ color: "black" }}>
                        <b>Dr. Matilda Figueroa</b>
                      </h3>
                      <p className="mb-4" style={{ fontSize: "18px" }}>
                        {" "}
                        General Physician
                      </p>
                      <p className="mb-4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <p className="mb-4">
                        <b>Education</b>
                      </p>
                      <p className="mb-4">
                        University of Michigan
                        <br />
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
          <div
            className="col-xl-6 col-md-6 col-sm-12 row float-left m-0 p-0"
            // style={{ height: "280px" }}
          >
            <FooterContent title="Membership">
              <div>
                <i
                  style={{ color: "#daa23c", fontSize: "3em" }}
                  className="material-icons"
                >
                  star_border
                </i>
              </div>
            </FooterContent>
            <FooterContent title="Languages">
              <i
                style={{ color: "#daa23c", fontSize: "3em" }}
                className="material-icons"
              >
                message
              </i>
            </FooterContent>
          </div>
          <div
            className="col-xl-6 col-md-6 col-sm-12 row float-right m-0 p-0"
            // style={{ height: "280px" }}
          >
            <FooterContent title="Membership">
              <div>
                <i
                  style={{ color: "#daa23c", fontSize: "3em" }}
                  className="material-icons"
                >
                  star_border
                </i>
              </div>
            </FooterContent>
            <FooterContent title="Languages">
              <i
                style={{ color: "#daa23c", fontSize: "3em" }}
                className="material-icons"
              >
                message
              </i>
            </FooterContent>
          </div>
        </div>
        <div>
          <FooterContainer></FooterContainer>
        </div>
        <div className="col-12" style={{ background: "#343a40" }}>
          <div className="container">
            <h1 className="p-6 mt-3" style={{ color: "rgb(218, 162, 60)" }}>
              Our Services
            </h1>
            <div className="row" style={{ justifyContent: "center" }}>
              <ScrollAnimation animateIn="fadeInLeft">
                <img src={crowd} alt="avatar" className="avatar" />
                <img src={crowd2} alt="avatar" className="avatar" />
                <img src={crowd1} alt="avatar" className="avatar" />
                <img src={crowd} alt="avatar" className="avatar" />
                <img src={crowd1} alt="avatar" className="avatar" />
              </ScrollAnimation>
            </div>
          </div>
          <div className="container">
            
            <div className="row" style={{ justifyContent: "center" }}>
            <ScrollAnimation animateIn="fadeInRight">

              <img src={crowd1} alt="avatar" className="avatar" />
              <img src={crowd} alt="avatar" className="avatar" />
              <img src={crowd2} alt="avatar" className="avatar" />
              <img src={crowd} alt="avatar" className="avatar" />
              <img src={crowd1} alt="avatar" className="avatar" />
              </ScrollAnimation>

            </div>
          </div>
        </div>
        <div
          className="col-12 d-flex insurance-container"
          style={{
            background: "rgb(218, 162, 60)",
          
            alignItems: "center"
          }}
        >
          <div className="container">
            <div className="col-md-6 col-lg-6 col-sm-12 float-left">
              <h1>Insurance</h1>
              <span>
                We accept all kinds of PPO and indemnity insurance. A preferred
                provider organization, typically referred to as a PPO, offers
                you easy access to a network of providers who provide services
                at a discounted rate. It enables patients to seek out-of-network
                services.
              </span>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 float-right" style={{ maxHeight: 320,textAlign:'left' }}>
              <ul className="float-left column">
                <li>AETNA</li>
                <li>Assurant/DHA</li> <li>Delta Dental</li> <li>Guardian</li>{" "}
                <li>Metlife</li> <li>Premier Access</li>{" "}
                <li>Principal Standard</li>
              </ul>
              <ul className="float-right column">
                <li>United Healthcare</li> <li>United Healthcare</li>
                <li>Blue Shield of CA</li>
                <li>United Healthcare</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
