import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from './components/Navbar'
import SimpleSlider from './components/carousel'
import Card from './components/Card'
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <div style={{marginTop:'60px'}}>
    <SimpleSlider/>
    <Card></Card>
    <Footer></Footer>
    </div>
   
    </div>
  );
}

export default App;
