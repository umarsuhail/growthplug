import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from './components/Navbar'
import SimpleSlider from './components/carousel'
import Card from './components/Card'
import Footer from "./components/Footer";
import BlogUpdate from './components/Blogupdate'
import blog1 from './images/new1.png'
import blog3 from './images/blog3.png'
import blog2 from './images/blog2.png'
import team1 from './images/team1.png'
import team2 from './images/team2.png'
import team3 from './images/team3.png'
import team4 from './images/team4.png'
import awards from './images/awards.png'
import MeetTeam from './components/MeetTeam'
import ScrollAnimation from 'react-animate-on-scroll';
import IndexRoutes from "./Routes/IndexRoutes";
import { Route, Switch } from "react-router-dom";
import AwardsContainer from "./components/AwardsContainer";
import award1 from './images/award1.png'
import award2 from './images/award2.png'
import award3 from './images/award3.png'
import award4 from './images/award4.png'
import award5 from './images/award5.png'
import award6 from './images/award6.png'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Switch>
        {IndexRoutes.map((prop, key) => {
          return (
            <Route
              exact={prop.path}
              component={prop.component}
              path={prop.path}
              key={key}
            >
              <div style={{ marginTop: '60px' }}>
                <SimpleSlider />
                <Card></Card>
                <Footer></Footer>
                <div className="container" style={{ marginTop: 80 }}>
                  <div className="float-left" style={{ marginBottom: 50 }}>
                    <h3>Blog Update</h3>
                  </div>
                  <div className="float-right">
                    <button className="btn btn-primary view">View All</button>
                  </div>
                  <div className="container row" style={{
                    margin: '0 auto',
                    justifyContent: 'center'
                  }}>

                    <BlogUpdate image={blog3} />
                    <BlogUpdate image={blog2} />
                    <BlogUpdate image={blog1} />
                    <BlogUpdate image={blog2} />
                    <BlogUpdate image={blog1} />
                    <BlogUpdate image={blog3} />


                  </div>
                </div>
                <div className="col-12 meet-team" style={{ padding: 30 }}>
                  <div className="title" >
                    <h1>
                      Meet Our Team
                </h1>
                  </div>
                  <div className="container card-deck " style={{ margin: '0 auto' }}>

                    <MeetTeam image={team1} title="Todd Montgomery" title2="Physician" />
                    <MeetTeam image={team2} title="Todd Montgomery" title2="Physician" />
                    <MeetTeam image={team3} title="Todd Montgomery" title2="Physician" />
                    <MeetTeam image={team4} title="Todd Montgomery" title2="Physician" />

                  </div>
                  <button className="view btn mt-3">View All</button>
                </div>

                <div className="Awards col-12 d-flex" style={{justifyContent:'center', textAlign:'center',flexDirection:'column', background: '#f6f6f6' }}>
                  <div className="title" >
                    <h1>
                      Awards
                </h1>
                  </div>
                  <div className="row" style={{padding:0 ,justifyContent:'center'}}>
                  <ScrollAnimation animateIn="fadeIn">
                  <AwardsContainer image={award1}></AwardsContainer>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeIn">
                  <AwardsContainer image={award2}></AwardsContainer>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeIn">
                  <AwardsContainer image={award3}></AwardsContainer>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeIn">
                  <AwardsContainer image={award4}></AwardsContainer>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeIn">
                  <AwardsContainer image={award5}></AwardsContainer>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeIn">
                  <AwardsContainer image={award6}></AwardsContainer>
                  </ScrollAnimation>
                  </div>
                  
                </div>
                <div className="Locations">

                </div>
              </div>

            </Route>
          );
        })}
      </Switch>
    </div>
  );
}

export default App;
